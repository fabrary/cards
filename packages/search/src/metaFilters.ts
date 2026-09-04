import { Format, Hero, Talent } from "@flesh-and-blood/types";
import { PUNCTUATION } from "./constants.js";
import { getLookupWithoutInheritedKeys } from "./lookups.js";
import {
  aliasesByFilterCategory,
  availableExclusions,
  FilterCategory,
  getFilterCategory,
  type AppliedFilter,
  type CardPropertyName,
  type FilterValue,
  type Modifier,
} from "./filterMappings.js";

export const FilterProperty = {
  BannedFormats: "bannedFormats",
  LegalFormats: "legalFormats",
  LegalHeroes: "legalHeroes",
} as const satisfies Record<string, CardPropertyName>;

const oneToFifty = Array.from(Array(50).keys()).map((value) => `${value}`);

/**
 * What a meta key asked for: the filters it expanded into, and the values it
 * could not place, which name no format, hero or rarity.
 */
export interface MetaFilterResolution {
  appliedFilters: AppliedFilter[];
  unresolvedValues: string[];
}

export interface MetaFilterOptions {
  additionalHeroes?: Hero[];
  isExcluded?: boolean;
}

const nicknameFormatMappings: {
  format: Format;
  nicknames?: string[];
}[] = [
  {
    format: Format.ClassicConstructed,
    nicknames: ["cc", "classic"],
  },
  {
    format: Format.LivingLegend,
    nicknames: [
      "cc ll",
      "classic constructed ll",
      "ll cc",
      "ll",
      "living legend",
    ],
  },
  {
    format: Format.SilverAge,
    nicknames: ["sage"],
  },
  {
    format: Format.GoldenAge,
    nicknames: ["gage"],
  },
  {
    format: Format.UltimatePitFight,
    nicknames: ["upf"],
  },
];

const formatMappings: { format: string; nicknames?: string[] }[] =
  Object.values(Format).map((format) => {
    const withNicknames = nicknameFormatMappings.find(
      ({ format: nicknameFormat }) => nicknameFormat === format,
    );
    const cleanFormat = format.toLowerCase().replaceAll(PUNCTUATION, "");

    return withNicknames
      ? { ...withNicknames, format: cleanFormat }
      : { format: cleanFormat };
  });

const nicknameHeroMappings: { hero: Hero; nicknames: string[] }[] = [
  {
    hero: Hero.DataDoll,
    nicknames: ["data", "datadoll"],
  },
  {
    hero: Hero.Dorinthea,
    nicknames: ["dori"],
  },
  {
    hero: Hero.Genis,
    nicknames: ["genis"],
  },
  {
    hero: Hero.GravyBones,
    nicknames: ["gravy"],
  },
  {
    hero: Hero.Iyslander,
    nicknames: ["islander"],
  },
];

const heroMappings: { hero: string; nicknames?: string[] }[] = Object.values(
  Hero,
).map((hero) => {
  const withNicknames = nicknameHeroMappings.find(
    ({ hero: nicknameHero }) => nicknameHero === hero,
  );
  const cleanHero = hero.toLowerCase().replaceAll(PUNCTUATION, "");

  return withNicknames
    ? { ...withNicknames, hero: cleanHero }
    : { hero: cleanHero };
});

const rankedRarity = [
  "common",
  "rare",
  "super rare",
  "majestic",
  "legendary",
  "fabled",
];

// The rarities a comparison reaches from the one it names, which is a walk
// along the ranking rather than a comparison of numbers.
const getRankedRaritiesFromValue = ({
  modifier,
  value,
}: FilterValue): string[] => {
  const rarities: string[] = [];
  const isDescending = modifier === "<" || modifier === "<=";
  const isInclusive = modifier === ">=" || modifier === "<=";
  const rankedFromValue = isDescending
    ? [...rankedRarity].reverse()
    : rankedRarity;

  let hasReachedValue = false;
  for (const rarity of rankedFromValue) {
    if (hasReachedValue) {
      rarities.push(rarity);
    } else if (rarity === value) {
      hasReachedValue = true;
      if (isInclusive) {
        rarities.push(rarity);
      }
    }
  }

  return rarities;
};

const getRarityFilter = (
  values: FilterValue[],
  isExcluded: boolean,
): AppliedFilter => {
  const rarities: string[] = [];
  for (const filterValue of values) {
    if (filterValue.modifier) {
      rarities.push(...getRankedRaritiesFromValue(filterValue));
    } else {
      rarities.push(filterValue.value);
    }
  }

  return {
    filterToPropertyMapping: {
      nestedProperty: "rarity",
      property: "printings",
      isArray: true,
    },
    isExcluded,
    isOr: true,
    values: rarities,
  };
};

// A legality value names a format or a hero, and the same reading answers for
// the formats a card is banned in, so the property the formats are matched
// against is the caller's to name.
const getLegalityFilters = (
  values: FilterValue[],
  isExcluded: boolean,
  additionalHeroes: Hero[],
  formatProperty: CardPropertyName,
): MetaFilterResolution => {
  const cleanAdditionalHeroes = additionalHeroes.map((hero) => ({
    hero: hero.toLowerCase().replaceAll(PUNCTUATION, ""),
  }));

  const appliedFilters: AppliedFilter[] = [];

  const formats: string[] = [];
  const heroes: string[] = [];
  const unresolvedValues: string[] = [];

  for (const { value } of values) {
    const matchingFormat = formatMappings.find(({ format, nicknames }) => {
      const isAMatch =
        format === value || (!!nicknames && nicknames.includes(value));

      return isAMatch;
    });
    if (matchingFormat) {
      formats.push(matchingFormat.format);
    } else {
      const matchingHero =
        heroMappings.find(({ hero, nicknames }) => {
          const isAMatch =
            hero === value || (!!nicknames && nicknames.includes(value));

          return isAMatch;
        }) || cleanAdditionalHeroes.find(({ hero }) => hero === value);

      if (matchingHero) {
        heroes.push(matchingHero.hero);
      } else {
        unresolvedValues.push(value);
      }
    }
  }

  if (formats.length > 0) {
    appliedFilters.push({
      filterToPropertyMapping: { property: formatProperty, isArray: true },
      values: formats,
      isOr: true,
      isExcluded,
    });
  }

  if (heroes.length > 0) {
    appliedFilters.push({
      filterToPropertyMapping: {
        property: FilterProperty.LegalHeroes,
        isArray: true,
      },
      values: heroes,
      isOr: true,
      isExcluded,
    });
  }

  return { appliedFilters, unresolvedValues };
};

/**
 * The filters a meta key expands into. Its own values reach no card property:
 * a legality value names a format or a hero, a rarity value a rank the
 * printings carry, so each becomes filters of its own before a card is read.
 */
export const getMetaFilterResolution = (
  filterKey: string,
  values: FilterValue[],
  { additionalHeroes = [], isExcluded = false }: MetaFilterOptions = {},
): MetaFilterResolution => {
  const filterCategory = getFilterCategory(filterKey);

  let resolution: MetaFilterResolution = {
    appliedFilters: [],
    unresolvedValues: [],
  };
  if (filterCategory === FilterCategory.Legal) {
    resolution = getLegalityFilters(
      values,
      isExcluded,
      additionalHeroes,
      FilterProperty.LegalFormats,
    );
  } else if (filterCategory === FilterCategory.Banned) {
    resolution = getLegalityFilters(
      values,
      isExcluded,
      additionalHeroes,
      FilterProperty.BannedFormats,
    );
  } else if (filterCategory === FilterCategory.Rarity) {
    resolution = {
      appliedFilters: [getRarityFilter(values, isExcluded)],
      unresolvedValues: [],
    };
  }

  return resolution;
};

/**
 * The same filters for a caller writing the values as plain strings behind one
 * comparison. The optional flag reaches no filter and is read by nothing here;
 * it stands in the signature for the consumers that pass it.
 */
export const getMetaFilters = (
  isExcluded: boolean,
  _isOptional: boolean,
  filterKey: string,
  values: string[],
  modifier: Modifier | undefined,
  additionalHeroes: Hero[],
): AppliedFilter[] =>
  getMetaFilterResolution(
    filterKey,
    values.map((value) => ({ modifier, value })),
    { additionalHeroes, isExcluded },
  ).appliedFilters;

const noCost: AppliedFilter[] = [
  {
    filterToPropertyMapping: {
      property: "cost",
      isNumber: true,
    },
    isExcluded: true,
    values: oneToFifty,
  },
  {
    filterToPropertyMapping: {
      property: "specialCost",
      isString: true,
      partialMatch: true,
    },
    isExcluded: true,
    values: ["*", "x"],
  },
  {
    filterToPropertyMapping: {
      property: "types",
      isArray: true,
      partialMatch: true,
    },
    isExcluded: true,
    values: ["equipment", "hero", "placeholder", "token", "weapon"],
  },
];
const noDefense: AppliedFilter[] = [
  {
    filterToPropertyMapping: {
      property: "defense",
      isNumber: true,
    },
    isExcluded: true,
    values: oneToFifty,
  },
  {
    filterToPropertyMapping: {
      property: "specialDefense",
      isString: true,
      partialMatch: true,
    },
    isExcluded: true,
    values: ["*", "x"],
  },
  {
    filterToPropertyMapping: {
      property: "types",
      isArray: true,
      partialMatch: true,
    },
    isExcluded: true,
    values: ["hero", "placeholder", "token", "weapon"],
  },
];
const noPitch: AppliedFilter[] = [
  {
    filterToPropertyMapping: {
      property: "pitch",
      isNumber: true,
    },
    isExcluded: true,
    values: oneToFifty,
  },
  {
    filterToPropertyMapping: {
      property: "types",
      isArray: true,
      partialMatch: true,
    },
    isExcluded: true,
    values: ["equipment", "hero", "placeholder", "token", "weapon"],
  },
  {
    filterToPropertyMapping: {
      property: "isCardBack",
      isBoolean: true,
    },
    isExcluded: true,
    values: ["true"],
  },
];
const noPower: AppliedFilter[] = [
  {
    filterToPropertyMapping: {
      property: "power",
      isNumber: true,
    },
    isExcluded: true,
    values: oneToFifty,
  },
  {
    filterToPropertyMapping: {
      property: "specialPower",
      isString: true,
      partialMatch: true,
    },
    isExcluded: true,
    values: ["*", "x"],
  },
  {
    filterToPropertyMapping: {
      property: "types",
      isArray: true,
      partialMatch: true,
    },
    isExcluded: true,
    values: ["equipment", "hero", "placeholder", "token"],
  },
];

const noTalents: AppliedFilter[] = [
  {
    filterToPropertyMapping: {
      property: "talents",
      isArray: true,
    },
    isExcluded: true,
    values: Object.values(Talent).map((talent: string) => talent.toLowerCase()),
  },
];

// The filters a bare excluded key applies, against the filter that key names,
// so every spelling of that filter reaches them.
const filtersByExcludedCategory: {
  category: FilterCategory;
  filters: AppliedFilter[];
}[] = [
  { category: FilterCategory.Cost, filters: noCost },
  { category: FilterCategory.Defense, filters: noDefense },
  { category: FilterCategory.Pitch, filters: noPitch },
  { category: FilterCategory.Power, filters: noPower },
  { category: FilterCategory.Talent, filters: noTalents },
];

const getExcludedFilters = (): { [key: string]: AppliedFilter[] } => {
  const filtersByKey = getLookupWithoutInheritedKeys<AppliedFilter[]>({});
  for (const { category, filters } of filtersByExcludedCategory) {
    for (const alias of aliasesByFilterCategory[category]) {
      for (const exclusion of availableExclusions) {
        filtersByKey[`${exclusion}${alias}`] = filters;
      }
    }
  }

  return filtersByKey;
};

const excludedFilters = getExcludedFilters();

/**
 * What a key written with an exclusion and no value asks for: the card prints
 * no value where that filter reads one.
 */
export const getExcludedMetaFilters = (filterKey: string) => {
  const filters: AppliedFilter[] = [];
  const matchingFilters = excludedFilters[filterKey];
  if (matchingFilters) {
    filters.push(...matchingFilters);
  }
  return filters;
};
