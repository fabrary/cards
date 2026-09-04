import {
  Bond,
  Card,
  Class,
  Flow,
  Foiling,
  Format,
  Fusion,
  Hero,
  Keyword,
  Meta,
  Printing,
  Rarity,
  Release,
  Shorthand,
  Subtype,
  Talent,
  Trait,
  Treatment,
  Type,
} from "@flesh-and-blood/types";
import { getNormalizedFilterValue } from "./helpers.js";
import { getLookupWithoutInheritedKeys } from "./lookups.js";

/**
 * Which filter a key names, rather than how it was spelled: every alias of a
 * filter answers with the one category, and a key naming no filter answers
 * with nothing. The advanced search dialog offers a subset of these under the
 * same strings, so a category is also what an app and the engine agree a query
 * token means.
 */
export const FilterCategory = {
  Arcane: "arcane",
  Artist: "artist",
  Banned: "banned",
  Bond: "bond",
  Chain: "chain",
  Class: "class",
  Cost: "cost",
  Defense: "defense",
  Flow: "flow",
  Foiling: "foiling",
  Fusion: "fusion",
  Intellect: "intellect",
  Is: "is",
  Keyword: "keyword",
  Legal: "legal",
  Life: "life",
  Name: "name",
  Pitch: "pitch",
  Power: "power",
  Print: "print",
  Rarity: "rarity",
  ReferencedBy: "referencedby",
  References: "references",
  Set: "set",
  Shorthand: "shorthand",
  Specialization: "specialization",
  Subtype: "subtype",
  Talent: "talent",
  Text: "text",
  Trait: "trait",
  Treatment: "treatment",
  Type: "type",
  TypeText: "typetext",
  Year: "year",
} as const;
export type FilterCategory =
  (typeof FilterCategory)[keyof typeof FilterCategory];

/** How a filter reads the value written against it in a query. */
export const FilterKind = {
  /** A number, which the query may put a comparison in front of. */
  Comparator: "comparator",
  /** A whole value, so a fragment of one names nothing. */
  ExactMatch: "exactMatch",
  /** A fragment, which stands for anything it sits inside. */
  PartialMatch: "partialMatch",
} as const;
export type FilterKind = (typeof FilterKind)[keyof typeof FilterKind];

export type Modifier = ">=" | ">" | "<=" | "<";
export const availableModifiers: Modifier[] = [">=", ">", "<=", "<"];

/**
 * A value written against a filter, carrying the comparison written in front of
 * it. Each value takes its own, so one term can ask for a cost of 1 or a cost
 * above 2.
 */
export interface FilterValue {
  modifier?: Modifier;
  value: string;
}

export type Exclusion = "!" | "-";
export const availableExclusions: Exclusion[] = ["!", "-"];

// export type Optional = "#";
// export const availableOptionals: Optional[] = ["#"];

/** The card field a mapping reads. */
export type CardPropertyName = keyof Card;

/**
 * The property of a mapping that reads no card field: a meta filter expands
 * into other filters before any card is read, and a relation filter matches
 * the identifiers the parse resolved.
 */
export const NO_CARD_PROPERTY = "n/a";

/**
 * The field holding the value a card prints where a number would be, which a
 * numeric filter falls back to for a card carrying no number.
 */
export type CardSpecialPropertyName =
  | "specialArcane"
  | "specialCost"
  | "specialDefense"
  | "specialLife"
  | "specialPower";

/**
 * How a card property is read and compared. The parse builds some of these
 * for itself, expanding a meta filter or matching the cards a relation filter
 * resolved, and those name no filter key, so they carry no grammar.
 */
export interface CardPropertyMapping {
  nestedProperty?: keyof Printing;
  property: CardPropertyName | typeof NO_CARD_PROPERTY;
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
  specialProperty?: CardSpecialPropertyName;
}

/**
 * A filter a query asked for: the mapping to match cards against, the values
 * to match, and how they combine. The parse builds these; the matcher reads
 * them.
 */
export interface AppliedFilter {
  filterToPropertyMapping: CardPropertyMapping;
  values: string[];
  /**
   * The same values with the comparison each was written behind, for the
   * filters whose values a query writes directly. Absent where the parse
   * resolved a value into others (a format into its heroes, a rarity into the
   * ones ranked above it), which no comparison reaches.
   */
  filterValues?: FilterValue[];
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
  /**
   * Set by a consumer building filters of its own, never by the parse. A
   * filter carrying it narrows nothing.
   */
  isOptional?: boolean;
  cardTypes?: string[];
}

/**
 * A mapping a filter key names, and what the grammar says about it: which
 * filter it is, the spelling it is named by, how its values are read, and the
 * values a card can carry.
 */
export interface FilterToPropertyMapping extends CardPropertyMapping {
  category: FilterCategory;
  /**
   * The one spelling that names this filter where a query is composed rather
   * than parsed: a hint, the syntax help, and the text the advanced search
   * dialog writes. Every alias parses, so the choice decides only what gets
   * written, and a reader's saved query carries it. A filter the dialog offers
   * keeps the spelling that dialog already emits; any other filter takes the
   * shortest spelling the syntax help teaches, and its own word where the help
   * teaches none.
   */
  canonicalAlias: string;
  kind: FilterKind;
  /**
   * The values a card carries for this filter, as the enum they come from:
   * what a dialog offers as options and what a hint draws a suggestion from.
   * It is not the set of spellings the parse accepts, which is wider, since
   * the foiling, treatment, rarity, legality and meta resolvers each take
   * abbreviations of their own. A filter reading free text (`artist`, `name`,
   * `text`, `typetext`), a card name (`chain`, `references`, `referencedby`),
   * a set identifier (`print`), a date (`year`) or a number carries none.
   */
  vocabulary?: readonly string[];
}

// A legality filter answers for a format or for a hero, so both name its
// values.
const LEGALITY_VALUES: readonly string[] = [
  ...Object.values(Format),
  ...Object.values(Hero),
];

const arcaneFilter = {
  category: FilterCategory.Arcane,
  canonicalAlias: "arcane",
  kind: FilterKind.Comparator,
  property: "arcane",
  specialProperty: "specialArcane",
  isNumber: true,
  partialMatch: true,
} satisfies FilterToPropertyMapping;

const artistFilter = {
  category: FilterCategory.Artist,
  canonicalAlias: "art",
  kind: FilterKind.PartialMatch,
  property: "artists",
  isArray: true,
  partialMatch: true,
} satisfies FilterToPropertyMapping;

const bannedFilter = {
  category: FilterCategory.Banned,
  canonicalAlias: "banned",
  kind: FilterKind.ExactMatch,
  vocabulary: LEGALITY_VALUES,
  property: NO_CARD_PROPERTY,
  isMeta: true,
} satisfies FilterToPropertyMapping;

const bondFilter = {
  category: FilterCategory.Bond,
  canonicalAlias: "bond",
  kind: FilterKind.ExactMatch,
  vocabulary: Object.values(Bond),
  property: "bonds",
  isArray: true,
} satisfies FilterToPropertyMapping;

// A relation filter's values name cards, which the index matches by fragment,
// so no vocabulary closes them.
const chainFilter = {
  category: FilterCategory.Chain,
  canonicalAlias: "chain",
  kind: FilterKind.PartialMatch,
  property: NO_CARD_PROPERTY,
} satisfies FilterToPropertyMapping;

const classFilter = {
  category: FilterCategory.Class,
  canonicalAlias: "c",
  kind: FilterKind.PartialMatch,
  vocabulary: Object.values(Class),
  property: "classes",
  isArray: true,
  partialMatch: true,
} satisfies FilterToPropertyMapping;

const costFilter = {
  category: FilterCategory.Cost,
  canonicalAlias: "co",
  kind: FilterKind.Comparator,
  property: "cost",
  specialProperty: "specialCost",
  isNumber: true,
  partialMatch: true,
} satisfies FilterToPropertyMapping;

const defenseFilter = {
  category: FilterCategory.Defense,
  canonicalAlias: "d",
  kind: FilterKind.Comparator,
  property: "defense",
  specialProperty: "specialDefense",
  isNumber: true,
} satisfies FilterToPropertyMapping;

const flowFilter = {
  category: FilterCategory.Flow,
  canonicalAlias: "flow",
  kind: FilterKind.ExactMatch,
  vocabulary: Object.values(Flow),
  property: "flows",
  isArray: true,
} satisfies FilterToPropertyMapping;

const foilFilter = {
  category: FilterCategory.Foiling,
  canonicalAlias: "foil",
  kind: FilterKind.ExactMatch,
  vocabulary: Object.values(Foiling),
  nestedProperty: "foiling",
  property: "printings",
  isArray: true,
} satisfies FilterToPropertyMapping;

const fuseFilter = {
  category: FilterCategory.Fusion,
  canonicalAlias: "f",
  kind: FilterKind.ExactMatch,
  vocabulary: Object.values(Fusion),
  property: "fusions",
  isArray: true,
} satisfies FilterToPropertyMapping;

const intellectFilter = {
  category: FilterCategory.Intellect,
  canonicalAlias: "i",
  kind: FilterKind.Comparator,
  property: "intellect",
  isNumber: true,
} satisfies FilterToPropertyMapping;

const keywordFilter = {
  category: FilterCategory.Keyword,
  canonicalAlias: "k",
  kind: FilterKind.ExactMatch,
  vocabulary: Object.values(Keyword),
  property: "keywords",
  isArray: true,
  // partialMatch: true,
} satisfies FilterToPropertyMapping;

const legalFilter = {
  category: FilterCategory.Legal,
  canonicalAlias: "l",
  kind: FilterKind.ExactMatch,
  vocabulary: LEGALITY_VALUES,
  property: NO_CARD_PROPERTY,
  isMeta: true,
} satisfies FilterToPropertyMapping;

const lifeFilter = {
  category: FilterCategory.Life,
  canonicalAlias: "li",
  kind: FilterKind.Comparator,
  property: "life",
  specialProperty: "specialLife",
  isNumber: true,
} satisfies FilterToPropertyMapping;

// Unique, preview and released are values the filter takes that the Meta enum
// does not hold: unique resolves to an inverted reprint filter, and the other
// two compare against the date rather than matching a value the card carries.
const metaFilter = {
  category: FilterCategory.Is,
  canonicalAlias: "is",
  kind: FilterKind.ExactMatch,
  vocabulary: Object.values(Meta),
  property: "meta",
  isArray: true,
} satisfies FilterToPropertyMapping;

const nameFilter = {
  category: FilterCategory.Name,
  canonicalAlias: "name",
  kind: FilterKind.PartialMatch,
  property: "name",
  isString: true,
  partialMatch: true,
} satisfies FilterToPropertyMapping;

const pitchFilter = {
  category: FilterCategory.Pitch,
  canonicalAlias: "p",
  kind: FilterKind.Comparator,
  property: "pitch",
  isNumber: true,
} satisfies FilterToPropertyMapping;

const powerFilter = {
  category: FilterCategory.Power,
  canonicalAlias: "pwr",
  kind: FilterKind.Comparator,
  property: "power",
  specialProperty: "specialPower",
  isNumber: true,
} satisfies FilterToPropertyMapping;

const setIdentifiersFilter = {
  category: FilterCategory.Print,
  canonicalAlias: "print",
  kind: FilterKind.PartialMatch,
  property: "setIdentifiers",
  isArray: true,
  partialMatch: true,
} satisfies FilterToPropertyMapping;

const rarityFilter = {
  category: FilterCategory.Rarity,
  canonicalAlias: "r",
  kind: FilterKind.ExactMatch,
  vocabulary: Object.values(Rarity),
  property: NO_CARD_PROPERTY,
  isMeta: true,
} satisfies FilterToPropertyMapping;

const referencedByFilter = {
  category: FilterCategory.ReferencedBy,
  canonicalAlias: "referencedby",
  kind: FilterKind.PartialMatch,
  property: NO_CARD_PROPERTY,
} satisfies FilterToPropertyMapping;

const referencesFilter = {
  category: FilterCategory.References,
  canonicalAlias: "references",
  kind: FilterKind.PartialMatch,
  property: NO_CARD_PROPERTY,
} satisfies FilterToPropertyMapping;

// A set value resolves through its name, its identifier or a fragment of
// either, so the Release enum names more than it closes.
const setFilter = {
  category: FilterCategory.Set,
  canonicalAlias: "s",
  kind: FilterKind.PartialMatch,
  vocabulary: Object.values(Release),
  property: "sets",
  isArray: true,
  partialMatch: true,
} satisfies FilterToPropertyMapping;

const shorthandsFilter = {
  category: FilterCategory.Shorthand,
  canonicalAlias: "short",
  kind: FilterKind.PartialMatch,
  vocabulary: Object.values(Shorthand),
  property: "shorthands",
  isArray: true,
  partialMatch: true,
} satisfies FilterToPropertyMapping;

const specializationsFilter = {
  category: FilterCategory.Specialization,
  canonicalAlias: "sp",
  kind: FilterKind.PartialMatch,
  vocabulary: Object.values(Hero),
  property: "specializations",
  isArray: true,
  partialMatch: true,
} satisfies FilterToPropertyMapping;

const subtypeFilter = {
  category: FilterCategory.Subtype,
  canonicalAlias: "st",
  kind: FilterKind.ExactMatch,
  vocabulary: Object.values(Subtype),
  property: "subtypes",
  isArray: true,
} satisfies FilterToPropertyMapping;

const typeFilter = {
  category: FilterCategory.Type,
  canonicalAlias: "t",
  kind: FilterKind.ExactMatch,
  vocabulary: Object.values(Type),
  property: "types",
  isArray: true,
} satisfies FilterToPropertyMapping;

const talentFilter = {
  category: FilterCategory.Talent,
  canonicalAlias: "tal",
  kind: FilterKind.ExactMatch,
  vocabulary: Object.values(Talent),
  property: "talents",
  isArray: true,
} satisfies FilterToPropertyMapping;

const textFilter = {
  category: FilterCategory.Text,
  canonicalAlias: "text",
  kind: FilterKind.PartialMatch,
  property: "functionalText",
  hasMarkup: true,
  isString: true,
  partialMatch: true,
} satisfies FilterToPropertyMapping;

const traitFilter = {
  category: FilterCategory.Trait,
  canonicalAlias: "trait",
  kind: FilterKind.PartialMatch,
  vocabulary: Object.values(Trait),
  property: "traits",
  isArray: true,
  partialMatch: true,
} satisfies FilterToPropertyMapping;

const typeTextFilter = {
  category: FilterCategory.TypeText,
  canonicalAlias: "x",
  kind: FilterKind.PartialMatch,
  property: "typeText",
  isString: true,
  partialMatch: true,
} satisfies FilterToPropertyMapping;

const treatmentFilter = {
  category: FilterCategory.Treatment,
  canonicalAlias: "treatment",
  kind: FilterKind.ExactMatch,
  vocabulary: Object.values(Treatment),
  nestedProperty: "treatments",
  property: "printings",
  isArray: true,
  isNestedPropertyArray: true,
} satisfies FilterToPropertyMapping;

const yearFilter = {
  category: FilterCategory.Year,
  canonicalAlias: "year",
  kind: FilterKind.PartialMatch,
  property: "firstReleaseDate",
  isString: true,
  partialMatch: true,
} satisfies FilterToPropertyMapping;

/** Every spelling a query can write, against the filter it names. */
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
  printing: setIdentifiersFilter,
  printings: setIdentifiersFilter,
  prints: setIdentifiersFilter,
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
  talents: talentFilter,
  text: textFilter,
  trait: traitFilter,
  treat: treatmentFilter,
  treatment: treatmentFilter,
  var: treatmentFilter,
  variation: treatmentFilter,
  x: typeTextFilter,
  typetext: typeTextFilter,
  year: yearFilter,
};

/**
 * The same mappings, read by a key a query wrote. Filter keys are typed by the
 * searcher, so an unrecognised key is a miss to skip rather than a type error.
 */
export const filtersToCardPropertyMappingsByKey: {
  [key: string]: FilterToPropertyMapping | undefined;
} = getLookupWithoutInheritedKeys(filtersToCardPropertyMappings);

/**
 * The filter a key names, however it was capitalised, and nothing where the
 * key names none.
 */
export const getFilterMapping = (
  key: string,
): FilterToPropertyMapping | undefined =>
  filtersToCardPropertyMappingsByKey[key.toLowerCase()];

export const getFilterCategory = (key: string): FilterCategory | undefined =>
  getFilterMapping(key)?.category;

// The categories the mappings name. Narrower than FilterCategory when a
// category has no alias, which is what stops the record below from being built
// short of a key its type promises.
type CategoryNamedByAnAlias =
  (typeof filtersToCardPropertyMappings)[keyof typeof filtersToCardPropertyMappings]["category"];

const getAliasesByFilterCategory = (): Record<
  FilterCategory,
  readonly string[]
> => {
  const aliasesByCategory = Object.create(null) as Record<
    CategoryNamedByAnAlias,
    string[]
  >;
  for (const [alias, { category }] of Object.entries(
    filtersToCardPropertyMappings,
  )) {
    const aliases = aliasesByCategory[category];
    if (aliases) {
      aliases.push(alias);
    } else {
      aliasesByCategory[category] = [alias];
    }
  }

  return aliasesByCategory;
};

/** Every spelling a query can name each filter by. */
export const aliasesByFilterCategory: Record<
  FilterCategory,
  readonly string[]
> = getAliasesByFilterCategory();

// Many aliases name the one mapping, so each is walked once and every value it
// declares points back at the same object.
const getFilterMappingsByVocabularyValue = (): {
  [normalizedValue: string]: FilterToPropertyMapping[];
} => {
  const mappingsByVocabularyValue = Object.create(null) as {
    [normalizedValue: string]: FilterToPropertyMapping[];
  };
  const walkedMappings = new Set<FilterToPropertyMapping>();
  const mappings: FilterToPropertyMapping[] = Object.values(
    filtersToCardPropertyMappings,
  );

  for (const mapping of mappings) {
    const { vocabulary } = mapping;
    if (vocabulary && !walkedMappings.has(mapping)) {
      walkedMappings.add(mapping);
      for (const vocabularyValue of vocabulary) {
        const normalizedValue = getNormalizedFilterValue(vocabularyValue);
        const mappingsHoldingValue = mappingsByVocabularyValue[normalizedValue];
        if (mappingsHoldingValue) {
          mappingsHoldingValue.push(mapping);
        } else {
          mappingsByVocabularyValue[normalizedValue] = [mapping];
        }
      }
    }
  }

  return mappingsByVocabularyValue;
};

/**
 * The filters holding a value among the ones they declare, keyed by that value
 * normalized. A value reaching no entry is one no filter declares, which is
 * either a mistake or newer than the enums shipped here.
 */
const filterMappingsByVocabularyValue: {
  [normalizedValue: string]: FilterToPropertyMapping[] | undefined;
} = getFilterMappingsByVocabularyValue();

/**
 * Whether the values a filter declares hold the one written against it,
 * however that one was cased and punctuated.
 */
export const getIsValueInFilterVocabulary = (
  category: FilterCategory,
  value: string,
): boolean =>
  !!filterMappingsByVocabularyValue[getNormalizedFilterValue(value)]?.some(
    (mapping) => mapping.category === category,
  );

// The filters other than the one written that hold every value it could not
// place. A term is suggested whole, so a value the other filter does not hold
// either rules it out.
const getFilterMappingsHoldingValues = (
  category: FilterCategory,
  values: string[],
): FilterToPropertyMapping[] => {
  let mappingsHoldingValues: FilterToPropertyMapping[] = [];
  let isFirstValue = true;

  for (const value of values) {
    const mappingsHoldingValue = (
      filterMappingsByVocabularyValue[getNormalizedFilterValue(value)] || []
    ).filter((mapping) => mapping.category !== category);

    mappingsHoldingValues = isFirstValue
      ? mappingsHoldingValue
      : mappingsHoldingValues.filter((mapping) =>
          mappingsHoldingValue.includes(mapping),
        );
    isFirstValue = false;
  }

  return mappingsHoldingValues;
};

/**
 * The spelling that names the filter a value was meant for, where exactly one
 * filter other than the one it was written against declares it. Several
 * filters declaring it is a choice for the reader to make rather than one to
 * make on their behalf.
 */
export const getSuggestedFilterKey = (
  category: FilterCategory,
  values: string[],
): string | undefined => {
  const mappingsHoldingValues = getFilterMappingsHoldingValues(
    category,
    values,
  );
  const [suggestedMapping] = mappingsHoldingValues;

  return mappingsHoldingValues.length === 1
    ? suggestedMapping.canonicalAlias
    : undefined;
};
