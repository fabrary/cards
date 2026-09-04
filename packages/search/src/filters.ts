import {
  DoubleSidedCard,
  Foiling,
  Hero,
  Meta,
  Rarity,
  Release,
  Treatment,
  Type,
  setToSetIdentifierMappings,
} from "@flesh-and-blood/types";
import { getAbbreviation } from "./abbreviations.js";
import {
  aliasesByFilterCategory,
  availableExclusions,
  availableModifiers,
  FilterCategory,
  filtersToCardPropertyMappings,
  filtersToCardPropertyMappingsByKey,
  getFilterCategory,
} from "./filterMappings.js";
import type {
  CardPropertyMapping,
  Exclusion,
  Modifier,
} from "./filterMappings.js";
import { getExcludedMetaFilters, getMetaFilters } from "./metaFilters.js";
import { multiWordShorthands, singleWordShorthands } from "./shorthands.js";
import { PUNCTUATION } from "./constants.js";
import { getEscapedForRegExp, getTextWithoutMarkup } from "./helpers.js";
import {
  getLookupWithoutInheritedKeys,
  releasesBySetIdentifier,
} from "./lookups.js";
import {
  CatalogueIndex,
  getCardsByName,
  getCardsReferencedBy,
  getCardsReferencing,
} from "./searchIndex.js";

export interface AppliedFilter {
  filterToPropertyMapping: CardPropertyMapping;
  values: string[];
  /**
   * The same strings as `values`, for filters whose match is exact membership
   * rather than a comparison, so a card costs one lookup instead of a scan.
   * Consumers read `values`; this is the matcher's copy.
   */
  valuesSet?: Set<string>;
  isAnd?: boolean;
  isOr?: boolean;
  modifier?: Modifier;
  isExcluded?: boolean;
  isOptional?: boolean;
  cardTypes?: string[];
}

// Membership in a set of cards the parser resolved. Deliberately absent from
// the mappings a filter key reaches, so only the relation filters can apply it
// and no query can name it.
const cardIdentifierFilter: CardPropertyMapping = {
  property: "cardIdentifier",
  isString: true,
  isNormalized: true,
};

// A relation filter matches the cards the parser resolved rather than a value
// the query wrote, so it builds its own applied filter instead of taking one
// from the mapping its filter key reaches.
const getRelationAppliedFilter = (
  cardIdentifiers: Set<string>,
  {
    isAnd,
    isExcluded,
    isOptional,
    modifier,
  }: Pick<AppliedFilter, "isAnd" | "isExcluded" | "isOptional" | "modifier">,
): AppliedFilter => ({
  filterToPropertyMapping: cardIdentifierFilter,
  values: [...cardIdentifiers],
  valuesSet: cardIdentifiers,
  isAnd,
  isOr: true,
  modifier,
  isExcluded,
  isOptional,
});

// Preview compares against today rather than matching a value a card carries,
// so the parser builds it for itself.
const previewFilter: CardPropertyMapping = {
  property: "firstReleaseDate",
  isDate: true,
};

const punctuationOverrides = [
  {
    text: Release.ClassicBattlesRhinarDorinthea.toLowerCase(),
    override: Release.ClassicBattlesRhinarDorinthea.toLowerCase().replaceAll(
      PUNCTUATION,
      "",
    ),
  },
];
const setIdentifiersBySetName = new Map(
  Object.entries(setToSetIdentifierMappings).map(([set, setIdentifiers]) => [
    set.toLowerCase(),
    setIdentifiers,
  ]),
);

// Spellings of the print filter no mapping answers to, so they push no filter
// and name no category. They still write the prints attribute, which is what
// the matching-printings pass and the sort read.
const UNMAPPED_PRINT_KEYS = ["prints", "printing", "printings"];

// A print is a set's identifier, so both filters take a set name where a value
// is expected.
const SET_FILTER_KEYS = [
  ...aliasesByFilterCategory[FilterCategory.Set],
  ...aliasesByFilterCategory[FilterCategory.Print],
];

const EXCLUSION_CHARACTERS = availableExclusions
  .map(getEscapedForRegExp)
  .join("");

// Longest first, so a set name carrying a shorter set's name inside it keeps
// its own identifier.
const setNamesLongestFirst = [...setIdentifiersBySetName.keys()]
  .sort((first, second) => second.length - first.length)
  .map(getEscapedForRegExp)
  .join("|");

/**
 * A set name where a set filter is expecting a value: opening one, or following
 * a separator within one. Expanding the name to its identifier is what lets an
 * unquoted multi-word name survive the split on spaces, so it is worth doing
 * only where a set is being asked for. Matched anywhere else it rewrites a
 * search for a card into a search for a set identifier, which the fuzzy search
 * then matches against every card name carrying those letters.
 */
const setNameInSetFilterPattern = new RegExp(
  `(?<=^|\\s)([${EXCLUSION_CHARACTERS}]?(?:${SET_FILTER_KEYS.join(
    "|",
  )}):(?:[^\\s]*[,+])?"?)(${setNamesLongestFirst})(?="?(?:[,+]|\\s|$))`,
  "g",
);

const getSearchCriteria = (text: string): string[] => {
  const searchCriteria: string[] = [];
  let rawSearchCriteria = text.replaceAll("”", '"');
  for (const { text, override } of punctuationOverrides) {
    if (rawSearchCriteria.includes(text)) {
      rawSearchCriteria = rawSearchCriteria.replace(text, override);
    }
  }

  const matchingAbbreviation = getAbbreviation(rawSearchCriteria)?.card;
  if (matchingAbbreviation) {
    searchCriteria.push(rawSearchCriteria);
  } else {
    const splitSearchCriteria = rawSearchCriteria.split(/[ ]+/);
    let combinedSearchCriteria = "";
    let combinedQuoteCount = 0;
    for (const criteria of splitSearchCriteria) {
      if (combinedQuoteCount === 2) {
        searchCriteria.push(combinedSearchCriteria.trim().replaceAll('"', ""));
        combinedSearchCriteria = "";
        combinedQuoteCount = 0;
      }
      if (combinedQuoteCount < 2 && criteria.split('"').length === 2) {
        combinedSearchCriteria += " " + criteria;
        combinedQuoteCount++;
      } else if (combinedQuoteCount === 0 && combinedSearchCriteria === "") {
        searchCriteria.push(criteria);
      } else if (combinedQuoteCount === 1) {
        combinedSearchCriteria += " " + criteria;
      }
    }
    if (combinedQuoteCount === 2) {
      searchCriteria.push(combinedSearchCriteria.trim().replaceAll('"', ""));
      combinedSearchCriteria = "";
      combinedQuoteCount = 0;
    }
  }
  return searchCriteria;
};

// Caps how many cards a chain expands, not how deep into the chain it runs:
// the walk stops once it has expanded one card past the cap, wherever it has
// got to.
const CHAIN_EXPANSION_LIMIT = 20;

export const getKeywordsAndAppliedFiltersFromText = (
  text: string,
  index: CatalogueIndex,
  additionalHeroes: Hero[] = [],
  additionalSets: Release[] = [],
  today: string = getTodayAsReleaseDate(),
): {
  appliedFilters: AppliedFilter[];
  attributes: {
    artists: string[];
    foilings: Foiling[];
    isExpansionSlot: boolean;
    prints: string[];
    rarities: Rarity[];
    releases: Release[];
    treatments: Treatment[];
  };
  keywords: string[];
} => {
  let expandedText = text.trim().toLowerCase();

  for (const { expanded: filters, shorthands } of multiWordShorthands) {
    for (const shorthand of shorthands) {
      if (expandedText.includes(shorthand)) {
        expandedText = expandedText.replace(shorthand, filters.join(" "));
        break;
      }
    }
  }

  expandedText = expandedText.replace(
    setNameInSetFilterPattern,
    (setNameInSetFilter, filterPrefix, setName) => {
      const setIdentifiers = setIdentifiersBySetName.get(setName);
      return setIdentifiers
        ? `${filterPrefix}${setIdentifiers[0]}`
        : setNameInSetFilter;
    },
  );

  // A search for nothing but a set name browses the set, unless the corpus
  // carries a card by that name: the card is what was asked for.
  const wholeQuerySetIdentifiers = setIdentifiersBySetName.get(expandedText);
  const namesACard = index.getCardsByExactName(expandedText).length > 0;
  if (wholeQuerySetIdentifiers && !namesACard) {
    expandedText = `set:${wholeQuerySetIdentifiers[0]}`;
  }

  const rawSearchCriteria = getSearchCriteria(expandedText);

  const searchCriteria: string[] = [];
  for (const criteria of rawSearchCriteria) {
    const expanded = singleWordShorthands.find(({ shorthands }) =>
      shorthands.includes(criteria),
    );
    if (expanded && !expanded.isCardProperty) {
      // Don't do anything special if it's a card property because it will be handled by the fuzzy search
      searchCriteria.push(...expanded.expanded);
    } else {
      searchCriteria.push(criteria);
    }
  }

  const appliedFilters: AppliedFilter[] = [];
  // The attributes narrow which printings a result renders, so an excluded
  // filter writes none of them: its cards have already left the results, and
  // keeping only the printings carrying the excluded value would leave every
  // result with nothing to render.
  let artists: string[] = [];
  const keywords: string[] = [];
  let foilings: Foiling[] = [];
  let isExpansionSlot: boolean = false;
  let prints: string[] = [];
  let rarities: Rarity[] = [];
  let releases: Release[] = [];
  let treatments: Treatment[] = [];

  for (const criteria of searchCriteria) {
    if (hasFilter(criteria)) {
      const [unparsedFilterKey, unparsedFilterValue] = criteria.split(":");

      let { modifier, values, isAnd, isOr } =
        getFilterValuesAndModifier(unparsedFilterValue);
      const { filterKey, isExcluded, isOptional, isMeta } =
        getFilterKeyAndExcludedOrOptional(unparsedFilterKey);
      const filterCategory = getFilterCategory(filterKey);

      // Set when the branch below pushed the filters for its values itself, so
      // the shared mapping after it has nothing left to match on.
      let areValuesAlreadyApplied = false;

      if (isMeta) {
        if (filterCategory === FilterCategory.Rarity) {
          const rarityValues = getRarityValuesFromText(values);
          if (!isExcluded) {
            rarities = [...rarityValues];
          }
          values = rarityValues.map((s) => s.toLowerCase());
        }
        appliedFilters.push(
          ...getMetaFilters(
            isExcluded,
            isOptional,
            filterKey,
            values,
            modifier,
            additionalHeroes,
          ),
        );
      } else {
        if (filterCategory === FilterCategory.Chain) {
          const chainedCardIdentifiers = new Set<string>();
          const cardsToExpand: DoubleSidedCard[] = [];
          const namesToExpand = new Set<string>();

          const addToChain = (card: DoubleSidedCard) => {
            chainedCardIdentifiers.add(card.cardIdentifier);
            if (!namesToExpand.has(card.name)) {
              namesToExpand.add(card.name);
              cardsToExpand.push(card);
            }
          };

          // A hero the walk reaches is left out of the chain, and so out of the
          // expansion, so a chain never runs through everything a hero names. A
          // hero the argument names is a seed and still joins and expands.
          const addRelatedCardToChain = (card: DoubleSidedCard) => {
            if (!card.types.includes(Type.Hero)) {
              addToChain(card);
            }
          };

          for (const value of values) {
            // An empty value sits inside every name, so it would resolve to
            // whichever card the corpus holds first.
            if (value) {
              for (const seedCard of getCardsByName(index, value)) {
                addToChain(seedCard);
              }
            }
          }

          let expansions = 0;
          for (const cardToExpand of cardsToExpand) {
            if (expansions > CHAIN_EXPANSION_LIMIT) {
              break;
            }

            for (const referencedCard of getCardsReferencedBy(
              index,
              cardToExpand,
            )) {
              addRelatedCardToChain(referencedCard);
            }

            const isSeed = expansions === 0;
            if (isSeed) {
              for (const referencingCard of getCardsReferencing(
                index,
                cardToExpand,
              )) {
                addRelatedCardToChain(referencingCard);
              }
            }

            expansions++;
          }

          appliedFilters.push(
            getRelationAppliedFilter(chainedCardIdentifiers, {
              isAnd,
              isExcluded,
              isOptional,
              modifier,
            }),
          );
          areValuesAlreadyApplied = true;
        } else if (
          filterCategory === FilterCategory.ReferencedBy ||
          filterCategory === FilterCategory.References
        ) {
          // `referencedby:` asks what a card names, `references:` who names it.
          const isNamedByFilter =
            filterCategory === FilterCategory.ReferencedBy;
          const relatedCardIdentifiers = new Set<string>();

          for (const value of values) {
            // An empty value sits inside every name, so it would resolve to
            // whichever card the corpus holds first.
            if (value) {
              for (const namedCard of getCardsByName(index, value)) {
                const cardsInRelation = isNamedByFilter
                  ? getCardsReferencedBy(index, namedCard)
                  : getCardsReferencing(index, namedCard);

                for (const relatedCard of cardsInRelation) {
                  relatedCardIdentifiers.add(relatedCard.cardIdentifier);
                }
              }
            }
          }

          appliedFilters.push(
            getRelationAppliedFilter(relatedCardIdentifiers, {
              isAnd,
              isExcluded,
              isOptional,
              modifier,
            }),
          );
          areValuesAlreadyApplied = true;
        } else if (filterCategory === FilterCategory.Artist) {
          if (!isExcluded) {
            artists = values;
          }
        } else if (
          filterCategory === FilterCategory.Print ||
          UNMAPPED_PRINT_KEYS.includes(filterKey)
        ) {
          if (!isExcluded) {
            prints = values;
          }
        } else if (filterCategory === FilterCategory.Is) {
          // Unique is the inverse of Meta.Reprint, and preview compares against
          // today rather than matching a value the card carries, so both get
          // their own filter rather than a meta value to match.
          const uniqueValues: string[] = [];
          const previewValues: string[] = [];
          const releasedValues: string[] = [];
          const metaRawValues: string[] = [];
          for (const value of values) {
            if (UNIQUE_VALUES.includes(value)) {
              uniqueValues.push(value);
            } else if (PREVIEW_VALUES.includes(value)) {
              previewValues.push(value);
            } else if (RELEASED_VALUES.includes(value)) {
              releasedValues.push(value);
            } else {
              metaRawValues.push(value);
            }
          }

          if (uniqueValues.length > 0) {
            appliedFilters.push({
              filterToPropertyMapping: filtersToCardPropertyMappings.is,
              values: [Meta.Reprint.toLowerCase().replaceAll(PUNCTUATION, "")],
              isAnd,
              isOr,
              isExcluded: !isExcluded,
              isOptional,
            });
            areValuesAlreadyApplied = metaRawValues.length === 0;
          }

          const hasPreviewValues = previewValues.length > 0;
          if (hasPreviewValues) {
            appliedFilters.push({
              filterToPropertyMapping: previewFilter,
              values: [today],
              isAnd,
              isOr,
              isExcluded,
              isOptional,
            });
          }

          // Released is the same comparison with the exclusion flipped, so it
          // agrees with -is:preview, and -is:released lands back on preview.
          // Asking for both at once contradicts and matches nothing.
          const hasReleasedValues = releasedValues.length > 0;
          if (hasReleasedValues) {
            appliedFilters.push({
              filterToPropertyMapping: previewFilter,
              values: [today],
              isAnd,
              isOr,
              isExcluded: !isExcluded,
              isOptional,
            });
          }

          if (hasPreviewValues || hasReleasedValues) {
            areValuesAlreadyApplied = metaRawValues.length === 0;
          }

          const metaValues = getMetaValuesFromText(metaRawValues);
          values = metaValues.map((v) =>
            v.toLowerCase().replaceAll(PUNCTUATION, ""),
          );
          if (metaValues.includes(Meta.Expansion) && !isExcluded) {
            isExpansionSlot = true;
          }
        } else if (filterCategory === FilterCategory.Foiling) {
          const foilingValues = getFoilingValuesFromText(values);
          if (!isExcluded) {
            foilings = foilingValues;
          }
          values = foilingValues.map((f) => f.toLowerCase());
        } else if (filterCategory === FilterCategory.Treatment) {
          const treatmentValues = getTreatmentValuesFromText(values);
          if (!isExcluded) {
            treatments = treatmentValues;
          }
          values = treatmentValues.map((t) => t.toLowerCase());
        } else if (filterCategory === FilterCategory.Set) {
          const releaseValues = getReleasesFromRawValues(
            values,
            additionalSets,
          );
          if (!isExcluded) {
            releases = releaseValues;
          }
          values = releaseValues.map((s) =>
            s.toLowerCase().replaceAll(PUNCTUATION, ""),
          );
        } else if (filterCategory === FilterCategory.Pitch) {
          values = getPitchValuesFromText(values);
        }
        const filterToPropertyMapping =
          filtersToCardPropertyMappingsByKey[filterKey];

        if (filterToPropertyMapping && !areValuesAlreadyApplied) {
          appliedFilters.push({
            filterToPropertyMapping,
            values: filterToPropertyMapping.hasMarkup
              ? values.map((value) => getTextWithoutMarkup(value))
              : values,
            isAnd,
            isOr,
            modifier,
            isExcluded,
            isOptional,
          });
        }
      }
    } else if (criteria) {
      const expanded = getAbbreviation(criteria)?.card;
      const metaFilters = getExcludedMetaFilters(criteria);
      if (expanded) {
        keywords.push(`"${expanded.toLowerCase().replace(PUNCTUATION, "")}"`);
      } else if (metaFilters && metaFilters.length > 0) {
        appliedFilters.push(...metaFilters);
      } else {
        keywords.push(criteria.replace(PUNCTUATION, ""));
      }
    }
  }

  return {
    appliedFilters,
    attributes: {
      artists,
      foilings,
      isExpansionSlot,
      prints,
      rarities,
      releases,
      treatments,
    },
    keywords,
  };
};

const getReleasesFromRawValues = (
  rawValues: string[],
  additionalSets: Release[] = [],
): Release[] => {
  const releases: Release[] = [];
  for (const rawValue of rawValues) {
    releases.push(...getMatchingReleasesFromRawValue(rawValue, additionalSets));
  }

  return releases;
};

const getMatchingReleasesFromRawValue = (
  rawValue: string,
  additionalSets: Release[] = [],
) => {
  const releases: Release[] = [];

  const setFromValue = Object.values(Release).find(
    (release) => release.toLowerCase().replaceAll(PUNCTUATION, "") === rawValue,
  );

  if (setFromValue) {
    releases.push(setFromValue);
  }

  if (releases.length === 0) {
    const setFromSetIdentifier = releasesBySetIdentifier[rawValue];
    if (setFromSetIdentifier) {
      releases.push(setFromSetIdentifier);
    }
  }

  if (releases.length === 0) {
    const setsFromPartialValue = Object.values(Release).filter((release) =>
      release.toLowerCase().includes(rawValue),
    );
    if (setsFromPartialValue.length > 0) {
      releases.push(...setsFromPartialValue);
    }
  }

  if (releases.length === 0) {
    const additionalSetFromValue = additionalSets.find(
      (additionalSet) =>
        additionalSet.toLowerCase().replaceAll(PUNCTUATION, "") === rawValue,
    );

    if (additionalSetFromValue) {
      releases.push(additionalSetFromValue);
    }
  }

  return releases;
};

const pitchValuesMapping = getLookupWithoutInheritedKeys<number>({
  purple: 4,
  blue: 3,
  yellow: 2,
  red: 1,
  white: 0,
});
const getPitchValuesFromText = (rawValues: string[]) => {
  const values: string[] = [];
  for (const rawValue of rawValues) {
    const pitchValue = pitchValuesMapping[rawValue];
    if (pitchValue === undefined) {
      values.push(rawValue);
    } else {
      values.push(pitchValue.toString());
    }
  }
  return values;
};

const UNIQUE_VALUES = ["unique"];

// Spoiler is accepted here in the sense of "not out yet", which is narrower
// than a spoiler reveal. See the Preview entry in the shared glossary.
const PREVIEW_VALUES = ["preview", "spoiler", "unreleased"];
const RELEASED_VALUES = ["released"];

// Today in the viewer's timezone, formatted the way firstReleaseDate is stored
// so the two order correctly as plain strings. Deliberately not the UTC date,
// which would read as tomorrow for anyone far enough east.
const getTodayAsReleaseDate = (): string => {
  const now = new Date();
  const month = `${now.getMonth() + 1}`.padStart(2, "0");
  const dayOfMonth = `${now.getDate()}`.padStart(2, "0");

  return `${now.getFullYear()}-${month}-${dayOfMonth}`;
};

const metaValuesMapping = getLookupWithoutInheritedKeys<Meta>({
  dual: Meta.DualClass,
  exp: Meta.Expansion,
  expansion: Meta.Expansion,
  rainbow: Meta.Rainbow,
  reprint: Meta.Reprint,
  reprints: Meta.Reprint,
});
const getMetaValuesFromText = (rawValues: string[]) => {
  const values: Meta[] = [];
  for (const rawValue of rawValues) {
    const meta = metaValuesMapping[rawValue];
    if (meta) {
      values.push(meta);
    }
  }

  if (rawValues.length > 0 && values.length === 0) {
    for (const meta of Object.values(Meta)) {
      for (const rawValue of rawValues) {
        if (meta.toLowerCase().includes(rawValue)) {
          values.push(meta);
          break;
        }
      }
    }
  }

  return values;
};

const foilingValuesMapping = getLookupWithoutInheritedKeys<Foiling>({
  r: Foiling.Rainbow,
  rf: Foiling.Rainbow,
  rainbow: Foiling.Rainbow,
  c: Foiling.Cold,
  cf: Foiling.Cold,
  cold: Foiling.Cold,
  g: Foiling.Gold,
  gf: Foiling.Gold,
  gold: Foiling.Gold,
});
const getFoilingValuesFromText = (rawValues: string[]) => {
  const values: Foiling[] = [];
  for (const rawValue of rawValues) {
    if (foilingValuesMapping[rawValue]) {
      values.push(foilingValuesMapping[rawValue]);
    }
  }

  return values;
};

const treatmentValuesMapping = getLookupWithoutInheritedKeys<Treatment>({
  ...Object.values(Treatment).reduce<Record<string, Treatment>>(
    (treatmentsByLowercasedName, treatment) => {
      treatmentsByLowercasedName[treatment.toLowerCase()] = treatment;
      return treatmentsByLowercasedName;
    },
    {},
  ),
  ...{
    aa: Treatment.AA,
    alt: Treatment.AA,
    "alt art": Treatment.AA,
    ab: Treatment.AB,
    "alt border": Treatment.AB,
    at: Treatment.AT,
    "alt text": Treatment.AT,
    // ds: Treatment.DS,
    // "double sided": Treatment.DS,
    ea: Treatment.EA,
    extended: Treatment.EA,
    "extended art": Treatment.EA,
    fa: Treatment.FA,
    full: Treatment.FA,
    "full art": Treatment.FA,
  },
});
const treatmentsByAbbreviation =
  getLookupWithoutInheritedKeys<Treatment>(Treatment);
const getTreatmentValuesFromText = (rawValues: string[]) => {
  const values: Treatment[] = [];
  for (const rawValue of rawValues) {
    const treatmentFromMapping = treatmentValuesMapping[rawValue];
    const treatmentFromAbbreviation =
      treatmentsByAbbreviation[rawValue.toUpperCase()];
    if (treatmentFromMapping) {
      values.push(treatmentFromMapping);
    } else if (treatmentFromAbbreviation) {
      values.push(treatmentFromAbbreviation);
    }
  }
  return values;
};

export const RARITY_VALUES_MAPPING: { [key: string]: Rarity } =
  getLookupWithoutInheritedKeys<Rarity>({
    b: Rarity.Basic,
    c: Rarity.Common,
    f: Rarity.Fabled,
    l: Rarity.Legendary,
    m: Rarity.Majestic,
    p: Rarity.Promo,
    r: Rarity.Rare,
    s: Rarity.SuperRare,
    t: Rarity.Token,
    v: Rarity.Marvel,
  });
const getRarityValuesFromText = (rawValues: string[]) => {
  const values: Rarity[] = [];
  for (const rawValue of rawValues) {
    if (RARITY_VALUES_MAPPING[rawValue]) {
      values.push(RARITY_VALUES_MAPPING[rawValue]);
    } else {
      values.push(rawValue as Rarity);
    }
  }
  return values;
};

const getFilterValuesAndModifier = (
  unparsedFilterValue: string,
): {
  modifier: Modifier;
  values: string[];
  isAnd?: boolean;
  isOr?: boolean;
} => {
  const values: string[] = [];
  let isAnd, isOr;
  const modifier = availableModifiers.find((modifier) =>
    unparsedFilterValue.includes(modifier),
  ) as Modifier;
  if (modifier) {
    // if there's a modifier in the string, pull it out to get just the filter value
    const [, rawValue] = unparsedFilterValue.split(modifier);
    if (filterIsAnd(rawValue)) {
      isAnd = true;
      values.push(
        ...rawValue
          .trim()
          .split("+")
          .map((value) => value.replace(PUNCTUATION, "")),
      );
    } else if (filterIsOr(rawValue)) {
      isOr = true;
      values.push(
        ...rawValue
          .trim()
          .split(",")
          .map((value) => value.replace(PUNCTUATION, "")),
      );
    } else {
      values.push(rawValue.trim().replace(PUNCTUATION, ""));
    }
  } else {
    // otherwise the whole string is the filter value
    if (filterIsAnd(unparsedFilterValue)) {
      isAnd = true;
      values.push(
        ...unparsedFilterValue
          .trim()
          .split("+")
          .map((value) => value.replace(PUNCTUATION, "")),
      );
    } else if (filterIsOr(unparsedFilterValue)) {
      isOr = true;
      values.push(
        ...unparsedFilterValue
          .trim()
          .split(",")
          .map((value) => value.replace(PUNCTUATION, "")),
      );
    } else {
      if (
        unparsedFilterValue.startsWith('"') &&
        unparsedFilterValue.endsWith('"')
      ) {
        values.push(
          unparsedFilterValue
            .trim()
            .replaceAll('"', "")
            .replace(PUNCTUATION, ""),
        );
      } else {
        values.push(unparsedFilterValue.trim().replace(PUNCTUATION, ""));
      }
    }
  }

  return { modifier, values, isAnd, isOr };
};

const getFilterKeyAndExcludedOrOptional = (
  unparsedFilterKey: string,
): {
  filterKey: string;
  isExcluded: boolean;
  isMeta?: boolean;
  isOptional: boolean;
} => {
  const exclusion = getExclusion(unparsedFilterKey);
  // const optional = getOptional(unparsedFilterKey);

  if (exclusion) {
    const [, filterKey] = unparsedFilterKey.split(exclusion);
    return {
      filterKey,
      isExcluded: true,
      isOptional: false,
      isMeta: filterIsMeta(filterKey),
    };
    // } else if (optional) {
    //   const [, filterKey] = unparsedFilterKey.split(optional);
    //   return {
    //     filterKey,
    //     isExcluded: false,
    //     isMeta: filterIsMeta(filterKey),
    //     isOptional: true,
    //   };
  } else {
    return {
      filterKey: unparsedFilterKey,
      isExcluded: false,
      isOptional: false,
      isMeta: filterIsMeta(unparsedFilterKey),
    };
  }
};

const hasFilter = (text: string): boolean => text.indexOf(":") >= 0;
const filterIsAnd = (text: string): boolean => text.indexOf("+") >= 0;
const filterIsOr = (text: string): boolean => text.indexOf(",") >= 0;
const filterIsMeta = (filterKey: string): boolean =>
  !!filtersToCardPropertyMappingsByKey[filterKey]?.isMeta;
const getExclusion = (text: string): Exclusion =>
  availableExclusions
    .find((exclusion) => text.includes(exclusion))
    ?.slice(0, 1) as Exclusion;
// const getOptional = (text: string): Optional =>
//   availableOptionals
//     .find((optional) => text.includes(optional))
//     ?.slice(0, 1) as Optional;
