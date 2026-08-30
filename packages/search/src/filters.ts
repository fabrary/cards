import {
  DoubleSidedCard,
  Foiling,
  Hero,
  Meta,
  Rarity,
  Release,
  Treatment,
  Type,
  setIdentifierToSetMappings,
  setToSetIdentifierMappings,
} from "@flesh-and-blood/types";
import { getAbbreviation } from "./abbreviations.js";
import { getExcludedMetaFilters, getMetaFilters } from "./metaFilters.js";
import { multiWordShorthands, singleWordShorthands } from "./shorthands.js";
import { PUNCTUATION } from "./constants.js";
import { getTextWithoutMarkup } from "./helpers.js";
import {
  CatalogueIndex,
  getCardsByName,
  getCardsReferencedBy,
  getCardsReferencing,
} from "./searchIndex.js";

export interface AppliedFilter {
  filterToPropertyMapping: FilterToPropertyMapping;
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

export type Filter =
  | "art"
  | "artist"
  | "attack"
  | "banned"
  | "b"
  | "block"
  | "c"
  | "class"
  | "chain"
  | "co"
  | "cost"
  | "color"
  | "d"
  | "def"
  | "defense"
  | "f"
  | "fusion"
  | "foil"
  | "foiling"
  | "hero"
  | "i"
  | "intellect"
  | "k"
  | "keyword"
  | "l"
  | "legal"
  | "li"
  | "life"
  | "name"
  | "p"
  | "pitch"
  | "pwr"
  | "pow"
  | "power"
  | "print"
  | "r"
  | "rarity"
  | "referencedby"
  | "references"
  | "s"
  | "set"
  | "short"
  | "shortand"
  | "shortands"
  | "sp"
  | "specialization"
  | "specializations"
  | "st"
  | "subtype"
  | "text"
  | "t"
  | "type"
  | "tal"
  | "talent"
  | "text"
  | "treatment"
  | "variation"
  | "x";

export type Modifier = ">=" | ">" | "<=" | "<";
export const availableModifiers: Modifier[] = [">=", ">", "<=", "<"];

export type Exclusion = "!" | "-";
export const availableExclusions: Exclusion[] = ["!", "-"];

// export type Optional = "#";
// export const availableOptionals: Optional[] = ["#"];

export interface FilterToPropertyMapping {
  nestedProperty?: string;
  property: string;
  exclusion?: Exclusion;
  isArray?: boolean;
  isNestedPropertyArray?: boolean;
  isNumber?: boolean;
  isString?: boolean;
  isBoolean?: boolean;
  isDate?: boolean;
  /**
   * The card stores this property with markdown emphasis around its keywords,
   * so the matcher strips that from both sides. A searched phrase then reads
   * the text the way the card renders it rather than the way it is stored,
   * and a phrase spanning a keyword boundary still matches.
   */
  hasMarkup?: boolean;
  isMeta?: boolean;
  /**
   * The card stores this property the way a filter value is written, so the
   * matcher compares it as stored instead of stripping punctuation and case
   * from it first.
   */
  isNormalized?: boolean;
  // optional?: Optional;
  modifier?: Modifier;
  partialMatch?: boolean;
  specialProperty?: string;
}

const arcaneFilter: FilterToPropertyMapping = {
  property: "arcane",
  specialProperty: "specialArcane",
  isNumber: true,
  partialMatch: true,
};

const artistFilter: FilterToPropertyMapping = {
  property: "artists",
  isArray: true,
  partialMatch: true,
};

const bannedFilter: FilterToPropertyMapping = {
  property: "n/a",
  isMeta: true,
};

const bondFilter: FilterToPropertyMapping = {
  property: "bonds",
  isArray: true,
};

// Membership in a set of cards the parser resolved. Deliberately absent from
// the mappings a filter key reaches, so only the relation filters below can
// apply it and no query can name it.
const cardIdentifierFilter: FilterToPropertyMapping = {
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

const chainFilter: FilterToPropertyMapping = {
  property: "n/a",
};

const classFilter: FilterToPropertyMapping = {
  property: "classes",
  isArray: true,
  partialMatch: true,
};

const costFilter: FilterToPropertyMapping = {
  property: "cost",
  specialProperty: "specialCost",
  isNumber: true,
  partialMatch: true,
};

const defenseFilter: FilterToPropertyMapping = {
  property: "defense",
  specialProperty: "specialDefense",
  isNumber: true,
};

const flowFilter: FilterToPropertyMapping = {
  property: "flows",
  isArray: true,
};

const foilFilter: FilterToPropertyMapping = {
  nestedProperty: "foiling",
  property: "printings",
  isArray: true,
};

const fuseFilter: FilterToPropertyMapping = {
  property: "fusions",
  isArray: true,
};

const intellectFilter: FilterToPropertyMapping = {
  property: "intellect",
  isNumber: true,
};

const keywordFilter: FilterToPropertyMapping = {
  property: "keywords",
  isArray: true,
  // partialMatch: true,
};

const legalFilter: FilterToPropertyMapping = {
  property: "n/a",
  isMeta: true,
};

const lifeFilter: FilterToPropertyMapping = {
  property: "life",
  specialProperty: "specialLife",
  isNumber: true,
};

const metaFilter: FilterToPropertyMapping = {
  property: "meta",
  isArray: true,
};

const nameFilter: FilterToPropertyMapping = {
  property: "name",
  isString: true,
  partialMatch: true,
};

const pitchFilter: FilterToPropertyMapping = {
  property: "pitch",
  isNumber: true,
};

const previewFilter: FilterToPropertyMapping = {
  property: "firstReleaseDate",
  isDate: true,
};

const powerFilter: FilterToPropertyMapping = {
  property: "power",
  specialProperty: "specialPower",
  isNumber: true,
};

const setIdentifiersFilter: FilterToPropertyMapping = {
  property: "setIdentifiers",
  isArray: true,
  partialMatch: true,
};

const rarityFilter: FilterToPropertyMapping = {
  property: "n/a",
  isMeta: true,
};

const referencedByFilter: FilterToPropertyMapping = {
  property: "n/a",
};

const referencesFilter: FilterToPropertyMapping = {
  property: "n/a",
};

const setFilter: FilterToPropertyMapping = {
  property: "sets",
  isArray: true,
  partialMatch: true,
};

const shorthandsFilter: FilterToPropertyMapping = {
  property: "shorthands",
  isArray: true,
  partialMatch: true,
};

const specializationsFilter: FilterToPropertyMapping = {
  property: "specializations",
  isArray: true,
  partialMatch: true,
};

const subtypeFilter: FilterToPropertyMapping = {
  property: "subtypes",
  isArray: true,
};

const typeFilter: FilterToPropertyMapping = {
  property: "types",
  isArray: true,
};

const talentFilter: FilterToPropertyMapping = {
  property: "talents",
  isArray: true,
};

const textFilter: FilterToPropertyMapping = {
  property: "functionalText",
  hasMarkup: true,
  isString: true,
  partialMatch: true,
};

const traitFilter: FilterToPropertyMapping = {
  property: "traits",
  isArray: true,
  partialMatch: true,
};

const typeTextFilter: FilterToPropertyMapping = {
  property: "typeText",
  isString: true,
  partialMatch: true,
};

const treatmentFilter: FilterToPropertyMapping = {
  nestedProperty: "treatments",
  property: "printings",
  isArray: true,
  isNestedPropertyArray: true,
};

const yearFilter: FilterToPropertyMapping = {
  property: "firstReleaseDate",
  isString: true,
  partialMatch: true,
};

export const filtersToCardPropertyMappings = {
  arcane: arcaneFilter,
  a: artistFilter,
  artist: artistFilter,
  art: artistFilter,
  attack: powerFilter,
  b: defenseFilter,
  block: defenseFilter,
  banned: bannedFilter,
  bond: bondFilter,
  bonds: bondFilter,
  c: classFilter,
  class: classFilter,
  chain: chainFilter,
  co: costFilter,
  cost: costFilter,
  color: pitchFilter,
  d: defenseFilter,
  def: defenseFilter,
  defense: defenseFilter,
  flow: flowFilter,
  flows: flowFilter,
  f: fuseFilter,
  fusion: fuseFilter,
  foil: foilFilter,
  foiling: foilFilter,
  i: intellectFilter,
  intellect: intellectFilter,
  is: metaFilter,
  k: keywordFilter,
  keyword: keywordFilter,
  l: legalFilter,
  legal: legalFilter,
  hero: legalFilter,
  li: lifeFilter,
  life: lifeFilter,
  meta: metaFilter,
  n: nameFilter,
  name: nameFilter,
  p: pitchFilter,
  pitch: pitchFilter,
  pwr: powerFilter,
  pow: powerFilter,
  power: powerFilter,
  print: setIdentifiersFilter,
  r: rarityFilter,
  rarity: rarityFilter,
  referencedby: referencedByFilter,
  references: referencesFilter,
  rf: bannedFilter,
  s: setFilter,
  set: setFilter,
  short: shorthandsFilter,
  shorthand: shorthandsFilter,
  shorthands: shorthandsFilter,
  sp: specializationsFilter,
  spec: specializationsFilter,
  specialization: specializationsFilter,
  specializations: specializationsFilter,
  st: subtypeFilter,
  subtype: subtypeFilter,
  t: typeFilter,
  type: typeFilter,
  tal: talentFilter,
  talent: talentFilter,
  text: textFilter,
  trait: traitFilter,
  treat: treatmentFilter,
  treatment: treatmentFilter,
  var: treatmentFilter,
  variation: treatmentFilter,
  x: typeTextFilter,
  year: yearFilter,
};

// Filter keys are typed by the searcher, so an unrecognised key is a miss to
// skip rather than a type error.
const filtersToCardPropertyMappingsByKey: Record<
  string,
  FilterToPropertyMapping | undefined
> = filtersToCardPropertyMappings;

const punctuationOverrides = [
  {
    text: Release.ClassicBattlesRhinarDorinthea.toLowerCase(),
    override: Release.ClassicBattlesRhinarDorinthea.toLowerCase().replaceAll(
      PUNCTUATION,
      "",
    ),
  },
];
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

  for (const [set, setIdentifiers] of Object.entries(
    setToSetIdentifierMappings,
  )) {
    if (expandedText.includes(set.toLowerCase())) {
      expandedText = expandedText.replace(set.toLowerCase(), setIdentifiers[0]);
    }
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

      // Set when the branch below pushed the filters for its values itself, so
      // the shared mapping after it has nothing left to match on.
      let areValuesAlreadyApplied = false;

      if (isMeta) {
        if (["rarity", "r"].includes(filterKey)) {
          const rarityValues = getRarityValuesFromText(values);
          if (!isExcluded) {
            rarities = [...rarityValues];
          }
          values = rarityValues.map((s) => s.toLowerCase());
        }
        if (["legal", "l", "hero"].includes(filterKey)) {
          // for (const hero of specialConditionHeroes) {
          // if (text.toLowerCase() === "legal:shiyana figment") {
          //   console.log({
          //     hero,
          //     specialConditions,
          //     unparsedFilterValue,
          //     includes: unparsedFilterValue.includes(hero.toLowerCase()),
          //     alreadyAdded: specialConditions.heroes.includes(hero),
          //   });
          // }
          // if (unparsedFilterValue.includes(hero.toLowerCase())) {
          //   if (!specialConditions.heroes.includes(hero)) {
          //     specialConditions.heroes.push(hero);
          //   }
          // }
          // }
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
        if (["chain"].includes(filterKey)) {
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
        } else if (["referencedby", "references"].includes(filterKey)) {
          // `referencedby:` asks what a card names, `references:` who names it.
          const isNamedByFilter = ["referencedby"].includes(filterKey);
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
        } else if (["art", "artist"].includes(filterKey)) {
          artists = values;
        } else if (
          ["print", "prints", "printing", "printings"].includes(filterKey)
        ) {
          prints = values;
        } else if (["is", "meta"].includes(filterKey)) {
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
              filterToPropertyMapping: metaFilter,
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
        } else if (["foiling", "foil"].includes(filterKey)) {
          foilings = getFoilingValuesFromText(values);
          values = foilings.map((f) => f.toLowerCase());
        } else if (
          ["treat", "treatment", "var", "variation"].includes(filterKey)
        ) {
          treatments = getTreatmentValuesFromText(values);
          values = treatments.map((t) => t.toLowerCase());
        } else if (["set", "s"].includes(filterKey)) {
          releases = getReleasesFromRawValues(values, additionalSets);
          values = releases.map((s) =>
            s.toLowerCase().replaceAll(PUNCTUATION, ""),
          );
        } else if (["pitch", "p", "color"].includes(filterKey)) {
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
    const setFromSetIdentifier = setIdentifierToSetMappings[rawValue];
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

const pitchValuesMapping: { [key: string]: number } = {
  purple: 4,
  blue: 3,
  yellow: 2,
  red: 1,
  white: 0,
};
const getPitchValuesFromText = (rawValues: string[]) => {
  const values: string[] = [];
  for (const rawValue of rawValues) {
    if (pitchValuesMapping[rawValue] || pitchValuesMapping[rawValue] === 0) {
      values.push(pitchValuesMapping[rawValue].toString());
    } else {
      values.push(rawValue);
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

const metaValuesMapping: { [key: string]: Meta } = {
  dual: Meta.DualClass,
  exp: Meta.Expansion,
  expansion: Meta.Expansion,
  expansionSlot: Meta.Expansion,
  rainbow: Meta.Rainbow,
  reprint: Meta.Reprint,
  reprints: Meta.Reprint,
};
const getMetaValuesFromText = (rawValues: string[]) => {
  const values: Meta[] = [];
  for (const rawValue of rawValues) {
    if (metaValuesMapping[rawValue]) {
      values.push(metaValuesMapping[rawValue]);
    } else if (Meta[rawValue as keyof typeof Meta]) {
      values.push(Meta[rawValue as keyof typeof Meta]);
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

const foilingValuesMapping: { [key: string]: Foiling } = {
  r: Foiling.Rainbow,
  rf: Foiling.Rainbow,
  rainbow: Foiling.Rainbow,
  c: Foiling.Cold,
  cf: Foiling.Cold,
  cold: Foiling.Cold,
  g: Foiling.Gold,
  gf: Foiling.Gold,
  gold: Foiling.Gold,
};
const getFoilingValuesFromText = (rawValues: string[]) => {
  const values: Foiling[] = [];
  for (const rawValue of rawValues) {
    if (foilingValuesMapping[rawValue]) {
      values.push(foilingValuesMapping[rawValue]);
    }
  }

  return values;
};

const treatmentValuesMapping: { [key: string]: Treatment } = {
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
};
const treatmentsByAbbreviation: Record<string, Treatment | undefined> =
  Treatment;
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

export const RARITY_VALUES_MAPPING: { [key: string]: Rarity } = {
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
};
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
