// One resolver per filter, each owning its whole contract: what its values
// mean, which filters they apply, what they say about the printings a result
// renders, and which of them named nothing. A resolver reads only the term
// passed to it, so no filter can leave another one's reading behind it.

import {
  DoubleSidedCard,
  Foiling,
  Hero,
  Meta,
  Rarity,
  Release,
  Treatment,
  Type,
} from "@flesh-and-blood/types";
import {
  FilterCategory,
  FilterKind,
  filtersToCardPropertyMappings,
  getIsValueInFilterVocabulary,
  type AppliedFilter,
  type CardPropertyMapping,
  type FilterToPropertyMapping,
  type FilterValue,
  type Modifier,
} from "./filterMappings.js";
import { getNormalizedFilterValue, getTextWithoutMarkup } from "./helpers.js";
import {
  getLookupWithoutInheritedKeys,
  releasesBySetIdentifier,
} from "./lookups.js";
import { getMetaFilterResolution } from "./metaFilters.js";
import {
  CatalogueIndex,
  getCardsByName,
  getCardsReferencedBy,
  getCardsReferencing,
} from "./searchIndex.js";

/**
 * What a query says about the printings each result renders, and about their
 * order. They narrow no further which cards answer.
 */
export interface QueryAttributes {
  artists: string[];
  foilings: Foiling[];
  isExpansionSlot: boolean;
  prints: string[];
  rarities: Rarity[];
  releases: Release[];
  treatments: Treatment[];
}

/** A filter term to resolve: the filter it names, and what it asks of it. */
export interface FilterTerm {
  category: FilterCategory;
  filterValues: FilterValue[];
  isAnd: boolean;
  isExcluded: boolean;
  key: string;
  mapping: FilterToPropertyMapping;
}

/** What a resolver reads besides the term itself. */
export interface FilterResolverContext {
  additionalHeroes: Hero[];
  additionalSets: Release[];
  index: CatalogueIndex;
  today: string;
}

export interface FilterResolution {
  appliedFilters: AppliedFilter[];
  attributes?: Partial<QueryAttributes>;
  /**
   * The values the filter reads in place of the ones written, where a resolver
   * read them as others: `foil:cf` as cold, `p:red` as a pitch of 1. Absent
   * where the filter matches on the values as they were written.
   */
  canonicalValues?: string[];
  /** The values naming nothing the filter reads, as they were written. */
  unresolvedValues: string[];
}

type FilterResolver = (
  term: FilterTerm,
  context: FilterResolverContext,
) => FilterResolution;

// The comparison a consumer reading one off the filter sees. Every value
// carries its own, so a list writing several answers with none of them.
const getSharedModifier = (
  filterValues: FilterValue[],
): Modifier | undefined => {
  const [firstValue] = filterValues;
  const firstModifier = firstValue?.modifier;
  const isSharedByEveryValue = filterValues.every(
    ({ modifier }) => modifier === firstModifier,
  );

  return isSharedByEveryValue ? firstModifier : undefined;
};

// The filter a term applies as written, each value carrying the comparison it
// was written behind.
const getWrittenValuesFilter = ({
  filterValues,
  isAnd,
  isExcluded,
  mapping,
}: FilterTerm): AppliedFilter => {
  const values: string[] = [];
  for (const { value } of filterValues) {
    values.push(mapping.hasMarkup ? getTextWithoutMarkup(value) : value);
  }

  return {
    filterToPropertyMapping: mapping,
    filterValues,
    isAnd,
    isExcluded,
    isOr: !isAnd && values.length > 1,
    modifier: getSharedModifier(filterValues),
    values,
  };
};

// The filter a term applies once its values have been resolved into others,
// which no comparison reaches.
const getResolvedValuesFilter = (
  { isAnd, isExcluded, mapping }: FilterTerm,
  values: string[],
): AppliedFilter => ({
  filterToPropertyMapping: mapping,
  isAnd,
  isExcluded,
  isOr: !isAnd && values.length > 1,
  values,
});

// The values a filter reading whole values does not declare. A filter reading
// a fragment declares none of the fragments it matches, so it is not checked.
const getValuesOutsideVocabulary = ({
  category,
  filterValues,
  mapping,
}: FilterTerm): string[] => {
  const unresolvedValues: string[] = [];
  const isCheckedAgainstVocabulary =
    mapping.kind === FilterKind.ExactMatch && !!mapping.vocabulary;

  if (isCheckedAgainstVocabulary) {
    for (const { value } of filterValues) {
      if (!getIsValueInFilterVocabulary(category, value)) {
        unresolvedValues.push(value);
      }
    }
  }

  return unresolvedValues;
};

// The resolver for a filter whose values the matcher reads as written. The
// check against the values a filter declares runs here rather than beside the
// dispatch: a filter with a resolver of its own reads spellings wider than the
// values a card carries, and reports for itself. What the check reports never
// reaches the filter, which is applied as written, so a value newer than the
// enums shipped here reads as a hint rather than as an empty page.
const getDefaultResolution: FilterResolver = (term) => ({
  appliedFilters: [getWrittenValuesFilter(term)],
  unresolvedValues: getValuesOutsideVocabulary(term),
});

/** The attributes a filter's own values fill, each one a list of them. */
type QueryAttributeList = {
  [Key in keyof QueryAttributes]: QueryAttributes[Key] extends string[]
    ? Key
    : never;
}[keyof QueryAttributes];

/**
 * The attribute a term writes, unless it excluded its values: the cards
 * carrying them have left the results already, so keeping only the printings
 * that carry them would leave every result with nothing to render.
 */
const getAttributes = <Key extends QueryAttributeList>(
  { isExcluded }: FilterTerm,
  attributeKey: Key,
  values: QueryAttributes[Key][number][],
): Partial<QueryAttributes> | undefined =>
  isExcluded ? undefined : { [attributeKey]: values };

// A filter matching the values as written, which also says which printings a
// result renders.
const getWrittenValuesAttributeResolution = (
  term: FilterTerm,
  attributeKey: "artists" | "prints",
): FilterResolution => ({
  appliedFilters: [getWrittenValuesFilter(term)],
  attributes: getAttributes(
    term,
    attributeKey,
    term.filterValues.map(({ value }) => value),
  ),
  unresolvedValues: [],
});

const getArtistResolution: FilterResolver = (term) =>
  getWrittenValuesAttributeResolution(term, "artists");

const getPrintResolution: FilterResolver = (term) =>
  getWrittenValuesAttributeResolution(term, "prints");

/**
 * A filter whose values name what a card carries: each is read as the value
 * the cards were built with, and one naming nothing is reported rather than
 * matched. What a value was read as also says which printings a result
 * renders.
 */
const getVocabularyResolution = <Key extends QueryAttributeList>(
  term: FilterTerm,
  attributeKey: Key,
  getVocabularyValues: (value: string) => QueryAttributes[Key][number][],
): FilterResolution => {
  const vocabularyValues: QueryAttributes[Key][number][] = [];
  const canonicalValues: string[] = [];
  const unresolvedValues: string[] = [];

  for (const { value } of term.filterValues) {
    const matchingValues = getVocabularyValues(value);
    if (matchingValues.length > 0) {
      for (const matchingValue of matchingValues) {
        vocabularyValues.push(matchingValue);
        canonicalValues.push(getNormalizedFilterValue(matchingValue));
      }
    } else {
      unresolvedValues.push(value);
    }
  }

  return {
    appliedFilters: [getResolvedValuesFilter(term, canonicalValues)],
    attributes: getAttributes(term, attributeKey, vocabularyValues),
    canonicalValues,
    unresolvedValues,
  };
};

const pitchValuesMapping = getLookupWithoutInheritedKeys<number>({
  purple: 4,
  blue: 3,
  yellow: 2,
  red: 1,
  white: 0,
});

// A colour names a pitch value, and anything else is passed through for the
// number it may already be.
const getPitchResolution: FilterResolver = (term) => {
  const filterValues: FilterValue[] = [];
  const canonicalValues: string[] = [];
  for (const { modifier, value } of term.filterValues) {
    const pitchValue = pitchValuesMapping[value];
    const canonicalValue = pitchValue === undefined ? value : `${pitchValue}`;
    filterValues.push({ modifier, value: canonicalValue });
    canonicalValues.push(canonicalValue);
  }

  return {
    appliedFilters: [getWrittenValuesFilter({ ...term, filterValues })],
    canonicalValues,
    unresolvedValues: [],
  };
};

const getMatchingReleasesFromValue = (
  value: string,
  additionalSets: Release[],
): Release[] => {
  // A set value is read as a name, then as an identifier, then as a fragment
  // of a name, then as a set the caller carries: each rung is reached only
  // where the one above it named no set.
  const rungs: (() => Release[])[] = [
    () => {
      const setFromValue = Object.values(Release).find(
        (release) => getNormalizedFilterValue(release) === value,
      );
      return setFromValue ? [setFromValue] : [];
    },
    () => {
      const setFromSetIdentifier = releasesBySetIdentifier[value];
      return setFromSetIdentifier ? [setFromSetIdentifier] : [];
    },
    () =>
      Object.values(Release).filter((release) =>
        release.toLowerCase().includes(value),
      ),
    () => {
      const additionalSetFromValue = additionalSets.find(
        (additionalSet) => getNormalizedFilterValue(additionalSet) === value,
      );
      return additionalSetFromValue ? [additionalSetFromValue] : [];
    },
  ];

  const releases: Release[] = [];
  for (const getReleasesFromRung of rungs) {
    if (releases.length === 0) {
      releases.push(...getReleasesFromRung());
    }
  }

  return releases;
};

const getSetResolution: FilterResolver = (term, { additionalSets }) =>
  getVocabularyResolution(term, "releases", (value) =>
    getMatchingReleasesFromValue(value, additionalSets),
  );

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

const getFoilingsFromValue = (value: string): Foiling[] => {
  const foiling = foilingValuesMapping[value];

  return foiling ? [foiling] : [];
};

const getFoilingResolution: FilterResolver = (term) =>
  getVocabularyResolution(term, "foilings", getFoilingsFromValue);

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

const getTreatmentsFromValue = (value: string): Treatment[] => {
  const treatment =
    treatmentValuesMapping[value] ||
    treatmentsByAbbreviation[value.toUpperCase()];

  return treatment ? [treatment] : [];
};

const getTreatmentResolution: FilterResolver = (term) =>
  getVocabularyResolution(term, "treatments", getTreatmentsFromValue);

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

const getRarityFromValue = (value: string): Rarity | undefined =>
  RARITY_VALUES_MAPPING[value] ||
  Object.values(Rarity).find((rarity) => rarity.toLowerCase() === value);

// A rarity value keeps its comparison, which the expansion walks along the
// ranking rather than comparing as a number.
const getRarityResolution: FilterResolver = (term, { additionalHeroes }) => {
  const rarities: Rarity[] = [];
  const canonicalValues: string[] = [];
  const filterValues: FilterValue[] = [];
  const unresolvedValues: string[] = [];
  for (const { modifier, value } of term.filterValues) {
    const rarity = getRarityFromValue(value);
    if (rarity) {
      rarities.push(rarity);
      canonicalValues.push(rarity.toLowerCase());
      filterValues.push({ modifier, value: rarity.toLowerCase() });
    } else {
      unresolvedValues.push(value);
      filterValues.push({ modifier, value });
    }
  }

  const { appliedFilters } = getMetaFilterResolution(term.key, filterValues, {
    additionalHeroes,
    isExcluded: term.isExcluded,
  });

  return {
    appliedFilters,
    attributes: getAttributes(term, "rarities", rarities),
    canonicalValues,
    unresolvedValues,
  };
};

const getLegalityResolution: FilterResolver = (
  { filterValues, isExcluded, key },
  { additionalHeroes },
) => {
  const { appliedFilters, unresolvedValues } = getMetaFilterResolution(
    key,
    filterValues,
    { additionalHeroes, isExcluded },
  );

  // A format and a hero are matched against card properties of their own, so
  // the values the term named are spread across the filters it expanded into.
  const canonicalValues: string[] = [];
  for (const { values } of appliedFilters) {
    canonicalValues.push(...values);
  }

  return { appliedFilters, canonicalValues, unresolvedValues };
};

const UNIQUE_VALUES = ["unique"];

// Spoiler is accepted here in the sense of "not out yet", which is narrower
// than a spoiler reveal. See the Preview entry in the shared glossary.
const PREVIEW_VALUES = ["preview", "spoiler", "unreleased"];
const RELEASED_VALUES = ["released"];

// Preview compares against today rather than matching a value a card carries,
// so the parse builds it for itself.
const previewFilter: CardPropertyMapping = {
  property: "firstReleaseDate",
  isDate: true,
};

const metaValuesMapping = getLookupWithoutInheritedKeys<Meta>({
  dual: Meta.DualClass,
  exp: Meta.Expansion,
  expansion: Meta.Expansion,
  rainbow: Meta.Rainbow,
  reprint: Meta.Reprint,
  reprints: Meta.Reprint,
});

// A nickname names one meta value; failing that a value stands for every meta
// it sits inside, which only answers where no nickname has answered already.
const getMetaValuesFromWrittenValues = (
  writtenValues: string[],
): { unresolvedValues: string[]; values: Meta[] } => {
  const values: Meta[] = [];
  const unnamedValues: string[] = [];
  for (const writtenValue of writtenValues) {
    const meta = metaValuesMapping[writtenValue];
    if (meta) {
      values.push(meta);
    } else {
      unnamedValues.push(writtenValue);
    }
  }

  const unresolvedValues: string[] = [];
  if (values.length === 0) {
    const valuesNamingAMeta = new Set<string>();
    for (const meta of Object.values(Meta)) {
      let isMetaNamed = false;
      for (const unnamedValue of unnamedValues) {
        if (meta.toLowerCase().includes(unnamedValue)) {
          isMetaNamed = true;
          valuesNamingAMeta.add(unnamedValue);
        }
      }

      if (isMetaNamed) {
        values.push(meta);
      }
    }

    for (const unnamedValue of unnamedValues) {
      if (!valuesNamingAMeta.has(unnamedValue)) {
        unresolvedValues.push(unnamedValue);
      }
    }
  } else {
    unresolvedValues.push(...unnamedValues);
  }

  return { unresolvedValues, values };
};

// Unique is the inverse of a reprint, and preview and released compare against
// today rather than matching a value a card carries, so each becomes a filter
// of its own rather than a meta value to match.
const getMetaResolution: FilterResolver = (term, { today }) => {
  const { filterValues, isAnd, isExcluded } = term;
  const appliedFilters: AppliedFilter[] = [];

  const uniqueValues: string[] = [];
  const previewValues: string[] = [];
  const releasedValues: string[] = [];
  const metaValues: string[] = [];
  for (const { value } of filterValues) {
    if (UNIQUE_VALUES.includes(value)) {
      uniqueValues.push(value);
    } else if (PREVIEW_VALUES.includes(value)) {
      previewValues.push(value);
    } else if (RELEASED_VALUES.includes(value)) {
      releasedValues.push(value);
    } else {
      metaValues.push(value);
    }
  }

  const isOr = !isAnd && filterValues.length > 1;
  if (uniqueValues.length > 0) {
    appliedFilters.push({
      filterToPropertyMapping: filtersToCardPropertyMappings.is,
      values: [getNormalizedFilterValue(Meta.Reprint)],
      isAnd,
      isOr,
      isExcluded: !isExcluded,
    });
  }

  if (previewValues.length > 0) {
    appliedFilters.push({
      filterToPropertyMapping: previewFilter,
      values: [today],
      isAnd,
      isOr,
      isExcluded,
    });
  }

  // Released is the same comparison with the exclusion flipped, so it agrees
  // with -is:preview, and -is:released lands back on preview. Asking for both
  // at once contradicts and matches nothing.
  if (releasedValues.length > 0) {
    appliedFilters.push({
      filterToPropertyMapping: previewFilter,
      values: [today],
      isAnd,
      isOr,
      isExcluded: !isExcluded,
    });
  }

  const { unresolvedValues, values } =
    getMetaValuesFromWrittenValues(metaValues);
  // The peeled values name themselves, the rest the meta the card carries.
  const canonicalValues = [
    ...uniqueValues,
    ...previewValues,
    ...releasedValues,
    ...values.map(getNormalizedFilterValue),
  ];

  const hasMetaValuesToMatch =
    metaValues.length > 0 || appliedFilters.length === 0;
  if (hasMetaValuesToMatch) {
    appliedFilters.push(
      getResolvedValuesFilter(term, values.map(getNormalizedFilterValue)),
    );
  }

  const isExpansionSlot = values.includes(Meta.Expansion) && !isExcluded;

  return {
    appliedFilters,
    attributes: isExpansionSlot ? { isExpansionSlot } : undefined,
    canonicalValues,
    unresolvedValues,
  };
};

// Membership in a set of cards the parse resolved. Deliberately absent from
// the mappings a filter key reaches, so only the relation filters can apply it
// and no query can name it.
const cardIdentifierFilter: CardPropertyMapping = {
  property: "cardIdentifier",
  isString: true,
  isNormalized: true,
};

// Caps how many cards a chain expands, not how deep into the chain it runs:
// the walk stops once it has expanded one card past the cap, wherever it has
// got to.
const CHAIN_EXPANSION_LIMIT = 20;

/**
 * The one chain every value seeds: a term writing several names walks it once,
 * over one expansion budget, rather than a chain apiece. Only the first seed
 * is read backwards, so the chain runs out from what the query named rather
 * than out from everything that names it.
 */
const getChainedCardIdentifiers = (
  index: CatalogueIndex,
  names: string[],
): { cardIdentifiers: Set<string>; unresolvedValues: string[] } => {
  const cardIdentifiers = new Set<string>();
  const cardsToExpand: DoubleSidedCard[] = [];
  const namesToExpand = new Set<string>();
  const unresolvedValues: string[] = [];

  const addToChain = (card: DoubleSidedCard) => {
    cardIdentifiers.add(card.cardIdentifier);
    if (!namesToExpand.has(card.name)) {
      namesToExpand.add(card.name);
      cardsToExpand.push(card);
    }
  };

  // A hero the walk reaches is left out of the chain, and so out of the
  // expansion, so a chain never runs through everything a hero names. A hero
  // the query names is a seed and still joins and expands.
  const addRelatedCardToChain = (card: DoubleSidedCard) => {
    if (!card.types.includes(Type.Hero)) {
      addToChain(card);
    }
  };

  for (const name of names) {
    const seedCards = getCardsByName(index, name);
    for (const seedCard of seedCards) {
      addToChain(seedCard);
    }

    if (seedCards.length === 0) {
      unresolvedValues.push(name);
    }
  }

  let expansions = 0;
  while (
    expansions < cardsToExpand.length &&
    expansions <= CHAIN_EXPANSION_LIMIT
  ) {
    const cardToExpand = cardsToExpand[expansions];

    for (const referencedCard of getCardsReferencedBy(index, cardToExpand)) {
      addRelatedCardToChain(referencedCard);
    }

    const isSeed = expansions === 0;
    if (isSeed) {
      for (const referencingCard of getCardsReferencing(index, cardToExpand)) {
        addRelatedCardToChain(referencingCard);
      }
    }

    expansions++;
  }

  return { cardIdentifiers, unresolvedValues };
};

// `referencedby:` asks what a card names, `references:` who names it.
const getRelatedCardIdentifiers = (
  index: CatalogueIndex,
  name: string,
  isNamedByFilter: boolean,
): Set<string> => {
  const relatedCardIdentifiers = new Set<string>();

  for (const namedCard of getCardsByName(index, name)) {
    const cardsInRelation = isNamedByFilter
      ? getCardsReferencedBy(index, namedCard)
      : getCardsReferencing(index, namedCard);

    for (const relatedCard of cardsInRelation) {
      relatedCardIdentifiers.add(relatedCard.cardIdentifier);
    }
  }

  return relatedCardIdentifiers;
};

// Each value stands for the cards it reaches, so a comma asks for the cards any
// of them reach and a plus for the cards all of them do.
const getCombinedCardIdentifiers = (
  cardIdentifiersByValue: Set<string>[],
  isAnd: boolean,
): Set<string> => {
  const combinedCardIdentifiers = new Set<string>();
  const [firstCardIdentifiers = new Set<string>(), ...otherCardIdentifiers] =
    cardIdentifiersByValue;

  if (isAnd) {
    for (const cardIdentifier of firstCardIdentifiers) {
      const isInEveryValue = otherCardIdentifiers.every((cardIdentifiers) =>
        cardIdentifiers.has(cardIdentifier),
      );
      if (isInEveryValue) {
        combinedCardIdentifiers.add(cardIdentifier);
      }
    }
  } else {
    for (const cardIdentifiers of cardIdentifiersByValue) {
      for (const cardIdentifier of cardIdentifiers) {
        combinedCardIdentifiers.add(cardIdentifier);
      }
    }
  }

  return combinedCardIdentifiers;
};

// A relation filter matches the cards the parse resolved rather than a value
// the query wrote, so it builds its own applied filter instead of taking one
// from the mapping its filter key reaches.
const getCardIdentifiersFilter = (
  cardIdentifiers: Set<string>,
  isExcluded: boolean,
): AppliedFilter => ({
  filterToPropertyMapping: cardIdentifierFilter,
  values: [...cardIdentifiers],
  valuesSet: cardIdentifiers,
  isExcluded,
  isOr: true,
});

const getRelationResolution = (
  { filterValues, isAnd, isExcluded }: FilterTerm,
  getCardIdentifiersFromValue: (value: string) => Set<string>,
): FilterResolution => {
  const cardIdentifiersByValue: Set<string>[] = [];
  const unresolvedValues: string[] = [];
  for (const { value } of filterValues) {
    const cardIdentifiers = getCardIdentifiersFromValue(value);
    cardIdentifiersByValue.push(cardIdentifiers);
    // A value naming a card the relation runs from is what the filter reads,
    // so one reaching nothing named nothing.
    if (cardIdentifiers.size === 0) {
      unresolvedValues.push(value);
    }
  }

  return {
    appliedFilters: [
      getCardIdentifiersFilter(
        getCombinedCardIdentifiers(cardIdentifiersByValue, isAnd),
        isExcluded,
      ),
    ],
    unresolvedValues,
  };
};

const getChainResolution: FilterResolver = (term, { index }) => {
  const { cardIdentifiers, unresolvedValues } = getChainedCardIdentifiers(
    index,
    term.filterValues.map(({ value }) => value),
  );

  return {
    appliedFilters: [
      getCardIdentifiersFilter(cardIdentifiers, term.isExcluded),
    ],
    unresolvedValues,
  };
};

const getReferencedByResolution: FilterResolver = (term, { index }) =>
  getRelationResolution(term, (value) =>
    getRelatedCardIdentifiers(index, value, true),
  );

const getReferencesResolution: FilterResolver = (term, { index }) =>
  getRelationResolution(term, (value) =>
    getRelatedCardIdentifiers(index, value, false),
  );

const resolverByFilterCategory = getLookupWithoutInheritedKeys<FilterResolver>({
  [FilterCategory.Artist]: getArtistResolution,
  [FilterCategory.Banned]: getLegalityResolution,
  [FilterCategory.Chain]: getChainResolution,
  [FilterCategory.Foiling]: getFoilingResolution,
  [FilterCategory.Is]: getMetaResolution,
  [FilterCategory.Legal]: getLegalityResolution,
  [FilterCategory.Pitch]: getPitchResolution,
  [FilterCategory.Print]: getPrintResolution,
  [FilterCategory.Rarity]: getRarityResolution,
  [FilterCategory.ReferencedBy]: getReferencedByResolution,
  [FilterCategory.References]: getReferencesResolution,
  [FilterCategory.Set]: getSetResolution,
  [FilterCategory.Treatment]: getTreatmentResolution,
});

/** What one filter term asks for, whichever filter it names. */
export const getFilterResolution = (
  term: FilterTerm,
  context: FilterResolverContext,
): FilterResolution =>
  (resolverByFilterCategory[term.category] || getDefaultResolution)(
    term,
    context,
  );
