import {
  Card,
  Foiling,
  Hero,
  Meta,
  Release,
  Treatment,
  Type,
  setIdentifierToSetMappings,
  setToSetIdentifierMappings,
} from "@flesh-and-blood/types";
import { getAbbreviation } from "./abbreviations";
import { getExcludedMetaFilters, getMetaFilters } from "./metaFilters";
import {
  multiWordShorthands,
  shorthands,
  singleWordShorthands,
} from "./shorthands";
import { PUNCTUATION } from "./constants";
import { getCardByName, getRelatedCardsByName } from ".";

export interface AppliedFilter {
  filterToPropertyMapping: FilterToPropertyMapping;
  values: string[];
  isAnd?: boolean;
  isOr?: boolean;
  modifier?: Modifier;
  excluded?: boolean;
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
  | "r"
  | "rarity"
  | "referencedby"
  | "references"
  | "s"
  | "set"
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

export interface FilterToPropertyMapping {
  nestedProperty?: string;
  property: string;
  exclusion?: Exclusion;
  isArray?: boolean;
  isNumber?: boolean;
  isString?: boolean;
  isBoolean?: boolean;
  isMeta?: boolean;
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
  property: "bannedFormats",
  isArray: true,
  partialMatch: true,
};

const bondFilter: FilterToPropertyMapping = {
  property: "bonds",
  isArray: true,
};

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
  partialMatch: true,
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

const powerFilter: FilterToPropertyMapping = {
  property: "power",
  specialProperty: "specialPower",
  isNumber: true,
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
  nestedProperty: "treatment",
  property: "printings",
  isArray: true,
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
  r: rarityFilter,
  rarity: rarityFilter,
  referencedby: referencedByFilter,
  references: referencesFilter,
  rf: bannedFilter,
  s: setFilter,
  set: setFilter,
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
};

const punctuationOverrides = [
  {
    text: Release.ClassicBattlesRhinarDorinthea.toLowerCase(),
    override: Release.ClassicBattlesRhinarDorinthea.toLowerCase().replaceAll(
      PUNCTUATION,
      ""
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

export interface SpecialConditions {
  isClash: boolean;
  heroes: Hero[];
}

const specialConditionHeroes = [
  Hero.Briar,
  Hero.Brutus,
  Hero.Emperor,
  Hero.Prism,
  Hero.Shiyana,
  Hero.Taylor,
  Hero.Yorick,
];

export const getKeywordsAndAppliedFiltersFromText = (
  text: string,
  cards: Card[]
): {
  appliedFilters: AppliedFilter[];
  attributes: {
    artists: string[];
    foilings: Foiling[];
    isExpansionSlot: boolean;
    releases: Release[];
    treatments: Treatment[];
  };
  keywords: string[];
  specialConditions?: SpecialConditions;
} => {
  let expandedText = text.trim().toLowerCase();
  for (const { filters, shorthands } of multiWordShorthands) {
    for (const shorthand of shorthands) {
      if (expandedText.includes(shorthand)) {
        expandedText = expandedText.replace(shorthand, filters.join(" "));
        break;
      }
    }
  }
  for (const [set, setIdentifiers] of Object.entries(
    setToSetIdentifierMappings
  )) {
    if (expandedText.includes(set.toLowerCase())) {
      expandedText = expandedText.replace(set.toLowerCase(), setIdentifiers[0]);
    }
  }
  const rawSearchCriteria = getSearchCriteria(expandedText);

  const searchCriteria: string[] = [];
  for (const criteria of rawSearchCriteria) {
    const expanded = singleWordShorthands.find(({ shorthands }) =>
      shorthands.includes(criteria)
    );
    if (expanded) {
      searchCriteria.push(...expanded.filters);
    } else {
      searchCriteria.push(criteria);
    }
  }

  let appliedFilters: AppliedFilter[] = [];
  let artists: string[] = [];
  let keywords: string[] = [];
  let foilings: Foiling[] = [];
  let isExpansionSlot: boolean = false;
  let releases: Release[] = [];
  let treatments: Treatment[] = [];
  let specialConditions: SpecialConditions = { isClash: false, heroes: [] };

  for (const criteria of searchCriteria) {
    if (hasFilter(criteria)) {
      const [unparsedFilterKey, unparsedFilterValue] = criteria.split(":");

      let { modifier, values, isAnd, isOr } =
        getFilterValuesAndModifier(unparsedFilterValue);
      let { filterKey, excluded, isMeta } =
        getFilterKeyAndExcluded(unparsedFilterKey);

      if (isMeta) {
        if (["rarity", "r"].includes(filterKey)) {
          values = getRarityValuesFromText(values);
        }
        if (["legal", "l", "hero"].includes(filterKey)) {
          for (const hero of specialConditionHeroes) {
            // if (text.toLowerCase() === "legal:shiyana figment") {
            //   console.log({
            //     hero,
            //     specialConditions,
            //     unparsedFilterValue,
            //     includes: unparsedFilterValue.includes(hero.toLowerCase()),
            //     alreadyAdded: specialConditions.heroes.includes(hero),
            //   });
            // }
            if (unparsedFilterValue.includes(hero.toLowerCase())) {
              if (!specialConditions.heroes.includes(hero)) {
                specialConditions.heroes.push(hero);
              }
            }
          }
          if (unparsedFilterValue.includes("clash")) {
            specialConditions.isClash = true;
          }
        }
        appliedFilters.push(
          ...getMetaFilters(excluded, filterKey, values, modifier)
        );
      } else {
        if (["chain"].includes(filterKey)) {
          const getName = (card: Card) =>
            card.name.toLowerCase().replaceAll(PUNCTUATION, "");

          const relatedCardNames: string[] = values
            .map((name) => getCardByName(name, cards))
            .filter((card) => !!card)
            .map(getName);

          const names = new Set<string>(relatedCardNames);

          filterKey = "name";
          isOr = true;
          let limit = 20;
          let counter = 0;

          const addToSetAndRelated = (card: Card) => {
            if (!card.types.includes(Type.Hero)) {
              const name = getName(card);
              names.add(name);
              if (!relatedCardNames.includes(name)) {
                relatedCardNames.push(name);
              }
            }
          };

          for (const relatedCardName of relatedCardNames) {
            if (counter > limit) {
              break;
            }
            const { referencedBy, references } = getRelatedCardsByName(
              relatedCardName,
              cards
            );
            references.forEach(addToSetAndRelated);
            if (counter === 0) {
              referencedBy.forEach(addToSetAndRelated);
            }
            counter++;
          }
          values = Array.from(names);
        } else if (["referencedby", "references"].includes(filterKey)) {
          const originalKey = filterKey;
          const relatedCardNames = [...values].filter((value) => !!value);
          values = [];
          filterKey = "name";
          isOr = true;
          for (const relatedCardName of relatedCardNames) {
            const { referencedBy, references } = getRelatedCardsByName(
              relatedCardName,
              cards
            );
            if (["referencedby"].includes(originalKey)) {
              values.push(
                ...references.map(({ name }) =>
                  name.toLowerCase().replaceAll(PUNCTUATION, "")
                )
              );
            } else if (["references"].includes(originalKey)) {
              values.push(
                ...referencedBy.map(({ name }) =>
                  name.toLowerCase().replaceAll(PUNCTUATION, "")
                )
              );
            }
          }
        } else if (["art", "artist"].includes(filterKey)) {
          artists = values;
        } else if (["is", "is", "meta"].includes(filterKey)) {
          const metaValues = getMetaValuesFromText(values);
          values = metaValues.map((v) =>
            v.toLowerCase().replaceAll(PUNCTUATION, "")
          );
          if (metaValues.includes(Meta.Expansion) && !excluded) {
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
          releases = getReleasesFromRawValues(values);
          values = releases.map((s) =>
            s.toLowerCase().replaceAll(PUNCTUATION, "")
          );
        } else if (["pitch", "p", "color"].includes(filterKey)) {
          values = getPitchValuesFromText(values);
        }
        if (filtersToCardPropertyMappings[filterKey as Filter]) {
          appliedFilters.push({
            filterToPropertyMapping:
              filtersToCardPropertyMappings[filterKey as Filter],
            values,
            isAnd,
            isOr,
            modifier,
            excluded,
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
    attributes: { artists, foilings, isExpansionSlot, releases, treatments },
    keywords,
    specialConditions,
  };
};

const getReleasesFromRawValues = (rawValues: string[]): Release[] => {
  const releases: Release[] = [];
  for (const rawValue of rawValues) {
    releases.push(...getMatchingReleasesFromRawValue(rawValue));
  }
  return releases;
};

const getMatchingReleasesFromRawValue = (rawValue: string) => {
  const releases: Release[] = [];

  const setFromValue = Object.values(Release).find(
    (release) => release.toLowerCase().replaceAll(PUNCTUATION, "") === rawValue
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
      release.toLowerCase().includes(rawValue)
    );
    if (setsFromPartialValue.length > 0) {
      releases.push(...setsFromPartialValue);
    }
  }

  return releases;
};

const pitchValuesMapping: { [key: string]: number } = {
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

const metaValuesMapping: { [key: string]: Meta } = {
  exp: Meta.Expansion,
  expansion: Meta.Expansion,
  expansionSlot: Meta.Expansion,
  rainbow: Meta.Rainbow,
};
const getMetaValuesFromText = (rawValues: string[]) => {
  const values: Meta[] = [];
  for (const rawValue of rawValues) {
    if (metaValuesMapping[rawValue]) {
      values.push(metaValuesMapping[rawValue]);
    }
  }
  return values;
};

const foilingValuesMapping: { [key: string]: Foiling } = {
  r: Foiling.R,
  rf: Foiling.R,
  rainbow: Foiling.R,
  c: Foiling.C,
  cf: Foiling.C,
  cold: Foiling.C,
  g: Foiling.G,
  gf: Foiling.G,
  gold: Foiling.G,
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
  ...Object.values(Treatment).reduce((obj, treatment) => {
    obj[treatment.toLowerCase()] = treatment;
    return obj;
  }, {}),
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
const getTreatmentValuesFromText = (rawValues: string[]) => {
  const values: Treatment[] = [];
  for (const rawValue of rawValues) {
    if (treatmentValuesMapping[rawValue]) {
      values.push(treatmentValuesMapping[rawValue]);
    } else if (!!Treatment[rawValue.toUpperCase()]) {
      values.push(Treatment[rawValue.toUpperCase()]);
    }
  }
  return values;
};

const rarityValuesMapping: { [key: string]: string } = {
  c: "common",
  f: "fabled",
  l: "legendary",
  m: "majestic",
  v: "marvel",
  r: "rare",
  s: "super rare",
  t: "token",
};
const getRarityValuesFromText = (rawValues: string[]) => {
  const values: string[] = [];
  for (const rawValue of rawValues) {
    if (rarityValuesMapping[rawValue]) {
      values.push(rarityValuesMapping[rawValue]);
    } else {
      values.push(rawValue);
    }
  }
  return values;
};

const getFilterValuesAndModifier = (
  unparsedFilterValue: string
): {
  modifier: Modifier;
  values: string[];
  isAnd?: boolean;
  isOr?: boolean;
} => {
  const values: string[] = [];
  let isAnd, isOr;
  const modifier = availableModifiers.find((modifier) =>
    unparsedFilterValue.includes(modifier)
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
          .map((value) => value.replace(PUNCTUATION, ""))
      );
    } else if (filterIsOr(rawValue)) {
      isOr = true;
      values.push(
        ...rawValue
          .trim()
          .split(",")
          .map((value) => value.replace(PUNCTUATION, ""))
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
          .map((value) => value.replace(PUNCTUATION, ""))
      );
    } else if (filterIsOr(unparsedFilterValue)) {
      isOr = true;
      values.push(
        ...unparsedFilterValue
          .trim()
          .split(",")
          .map((value) => value.replace(PUNCTUATION, ""))
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
            .replace(PUNCTUATION, "")
        );
      } else {
        values.push(unparsedFilterValue.trim().replace(PUNCTUATION, ""));
      }
    }
  }

  return { modifier, values, isAnd, isOr };
};

const getFilterKeyAndExcluded = (
  unparsedFilterKey: string
): {
  filterKey: string;
  excluded: boolean;
  isMeta?: boolean;
} => {
  const exclusion = getExclusion(unparsedFilterKey);
  if (exclusion) {
    const [, filterKey] = unparsedFilterKey.split(exclusion);
    return { excluded: true, filterKey, isMeta: filterIsMeta(filterKey) };
  } else {
    return {
      excluded: false,
      filterKey: unparsedFilterKey,
      isMeta: filterIsMeta(unparsedFilterKey),
    };
  }
};

const hasFilter = (text: string): boolean => text.indexOf(":") >= 0;
const filterIsAnd = (text: string): boolean => text.indexOf("+") >= 0;
const filterIsOr = (text: string): boolean => text.indexOf(",") >= 0;
const filterIsMeta = (filterKey: string): boolean =>
  !!filtersToCardPropertyMappings[filterKey as Filter]?.isMeta;
const getExclusion = (text: string): Exclusion =>
  availableExclusions
    .find((exclusion) => text.includes(exclusion))
    ?.slice(0, 1) as Exclusion;
