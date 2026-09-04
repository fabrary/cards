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

export type Exclusion = "!" | "-";
export const availableExclusions: Exclusion[] = ["!", "-"];

// export type Optional = "#";
// export const availableOptionals: Optional[] = ["#"];

/** The card field a mapping reads. */
export type CardPropertyName = keyof Card;

/**
 * The property of a mapping that reads no card field: a meta filter expands
 * into other filters before any card is read, and a relation filter matches
 * the identifiers the parser resolved.
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
 * How a card property is read and compared. The parser builds some of these
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
   * It is not the set of spellings the parser accepts, which is wider, since
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

/** Case-folded, so a key answers however it was capitalised. */
export const getFilterCategory = (key: string): FilterCategory | undefined =>
  filtersToCardPropertyMappingsByKey[key.toLowerCase()]?.category;

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
