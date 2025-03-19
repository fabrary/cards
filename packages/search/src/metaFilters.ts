import { Format, Hero, Talent } from "@flesh-and-blood/types";
import { PUNCTUATION } from "./constants";

export enum FilterProperty {
  LegalFormats = "legalFormats",
  LegalHeroes = "legalHeroes",
}

const oneToFifty = Array.from(Array(50).keys()).map((value) => `${value}`);

interface AppliedFilter {
  filterToPropertyMapping: FilterToPropertyMapping;
  values: string[];
  isAnd?: boolean;
  isOr?: boolean;
  isAdditional?: boolean;
  modifier?: Modifier;
  excluded?: boolean;
  cardTypes?: string[];
}
interface FilterToPropertyMapping {
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

type Exclusion = "!" | "-";
type Modifier = ">=" | ">" | "<=" | "<";

const nicknameFormatMappings: {
  format: Format;
  nicknames?: string[];
}[] = [
  {
    format: Format.BlitzLivingLegend,
    nicknames: ["blitz ll"],
  },
  {
    format: Format.ClassicConstructed,
    nicknames: ["cc", "classic"],
  },
  {
    format: Format.ClassicConstructedLivingLegend,
    nicknames: [
      "cc ll",
      "classic constructed ll",
      "ll cc",
      "ll",
      "living legend",
    ],
  },
  {
    format: Format.UltimatePitFight,
    nicknames: ["upf"],
  },
];

const formatMappings: { format: string; nicknames?: string[] }[] =
  Object.values(Format).map((format) => {
    const withNicknames = nicknameFormatMappings.find(
      ({ format: nicknameFormat }) => nicknameFormat === format
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
  Hero
).map((hero) => {
  const withNicknames = nicknameHeroMappings.find(
    ({ hero: nicknameHero }) => nicknameHero === hero
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

const getRarityFilter = (
  values: string[],
  modifier: string,
  excluded: boolean
): AppliedFilter => {
  const rarities: string[] = [];
  if (!modifier) {
    rarities.push(...values);
  } else {
    for (const value of values) {
      switch (modifier) {
        case ">=":
          let start = false;
          for (const rarity of rankedRarity) {
            if (start) {
              rarities.push(rarity);
            } else if (rarity === value) {
              start = true;
              rarities.push(rarity);
            }
          }
          break;
        case ">":
          let start2 = false;
          for (const rarity of rankedRarity) {
            if (start2) {
              rarities.push(rarity);
            } else if (rarity === value) {
              start2 = true;
            }
          }
          break;
        case "<=":
          let start3 = false;
          for (const rarity of rankedRarity.slice().reverse()) {
            if (start3) {
              rarities.push(rarity);
            } else if (rarity === value) {
              start3 = true;
              rarities.push(rarity);
            }
          }
          break;
        case "<":
          let start4 = false;
          for (const rarity of rankedRarity.slice().reverse()) {
            if (start4) {
              rarities.push(rarity);
            } else if (rarity === value) {
              start4 = true;
            }
          }
          break;
        default:
          break;
      }
    }
  }

  return {
    filterToPropertyMapping: {
      nestedProperty: "rarity",
      property: "printings",
      isArray: true,
    },
    isOr: true,
    values: rarities,
    excluded,
  };
};

const getLegalFilters = (values: string[], excluded: boolean) => {
  const filters: AppliedFilter[] = [];

  const formats: string[] = [];
  const heroes: string[] = [];

  for (const value of values) {
    const matchingFormat = formatMappings.find(({ format, nicknames }) => {
      const isAMatch =
        format === value || (!!nicknames && nicknames.includes(value));

      return isAMatch;
    });
    if (matchingFormat) {
      formats.push(matchingFormat.format);
    } else {
      const matchingHero = heroMappings.find(({ hero, nicknames }) => {
        const isAMatch =
          hero === value || (!!nicknames && nicknames.includes(value));

        return isAMatch;
      });
      if (matchingHero) {
        heroes.push(matchingHero.hero);
      }
    }
  }

  if (formats.length > 0) {
    filters.push({
      filterToPropertyMapping: { property: "legalFormats", isArray: true },
      values: formats,
      isOr: true,
      excluded,
    });
  }

  if (heroes.length > 0) {
    filters.push({
      filterToPropertyMapping: {
        property: FilterProperty.LegalHeroes,
        isArray: true,
      },
      values: heroes,
      isOr: true,
      excluded,
    });
  }

  return filters;
};

export const getMetaFilters = (
  excluded: boolean,
  filterKey: string,
  values: string[],
  modifier: string
): AppliedFilter[] => {
  const filters: AppliedFilter[] = [];
  if (isLegalFilter(filterKey)) {
    filters.push(...getLegalFilters(values, excluded));
  } else if (isRarityFilter(filterKey)) {
    filters.push(getRarityFilter(values, modifier, excluded));
  }

  return filters;
};

const noCost: AppliedFilter[] = [
  {
    filterToPropertyMapping: {
      property: "cost",
      isNumber: true,
    },
    values: oneToFifty,
    excluded: true,
  },
  {
    filterToPropertyMapping: {
      property: "specialCost",
      isString: true,
      partialMatch: true,
    },
    values: ["*", "x"],
    excluded: true,
  },
  {
    filterToPropertyMapping: {
      property: "types",
      isArray: true,
      partialMatch: true,
    },
    values: ["equipment", "hero", "placeholder", "token", "weapon"],
    excluded: true,
  },
];
const noDefense: AppliedFilter[] = [
  {
    filterToPropertyMapping: {
      property: "defense",
      isNumber: true,
    },
    values: oneToFifty,
    excluded: true,
  },
  {
    filterToPropertyMapping: {
      property: "specialDefense",
      isString: true,
      partialMatch: true,
    },
    values: ["*", "x"],
    excluded: true,
  },
  {
    filterToPropertyMapping: {
      property: "types",
      isArray: true,
      partialMatch: true,
    },
    values: ["hero", "placeholder", "token", "weapon"],
    excluded: true,
  },
];
const noPitch: AppliedFilter[] = [
  {
    filterToPropertyMapping: {
      property: "pitch",
      isNumber: true,
    },
    excluded: true,
    values: oneToFifty,
  },
  {
    filterToPropertyMapping: {
      property: "types",
      isArray: true,
      partialMatch: true,
    },
    values: ["equipment", "hero", "placeholder", "token", "weapon"],
    excluded: true,
  },
  {
    filterToPropertyMapping: {
      property: "isCardBack",
      isBoolean: true,
    },
    values: ["true"],
    excluded: true,
  },
];
const noPower: AppliedFilter[] = [
  {
    filterToPropertyMapping: {
      property: "power",
      isNumber: true,
    },
    excluded: true,
    values: oneToFifty,
  },
  {
    filterToPropertyMapping: {
      property: "specialPower",
      isString: true,
      partialMatch: true,
    },
    values: ["*", "x"],
    excluded: true,
  },
  {
    filterToPropertyMapping: {
      property: "types",
      isArray: true,
      partialMatch: true,
    },
    values: ["equipment", "hero", "placeholder", "token"],
    excluded: true,
  },
];

const noTalents: AppliedFilter[] = [
  {
    filterToPropertyMapping: {
      property: "talents",
      isArray: true,
    },
    excluded: true,
    values: Object.values(Talent).map((talent: string) => talent.toLowerCase()),
  },
];

const excludedFilters: { [key: string]: AppliedFilter[] } = {
  "!co": noCost,
  "-co": noCost,
  "!cost": noCost,
  "-cost": noCost,
  "!color": noCost,
  "-color": noCost,
  "!b": noDefense,
  "-b": noDefense,
  "!block": noDefense,
  "-block": noDefense,
  "!d": noDefense,
  "-d": noDefense,
  "!def": noDefense,
  "-def": noDefense,
  "!defense": noDefense,
  "-defense": noDefense,
  "!pitch": noPitch,
  "-pitch": noPitch,
  "!p": noPitch,
  "-p": noPitch,
  "!attack": noPower,
  "-attack": noPower,
  "!power": noPower,
  "-power": noPower,
  "!pwr": noPower,
  "-pwr": noPower,
  "!pow": noPower,
  "-pow": noPower,
  "!talents": noTalents,
  "-talents": noTalents,
  "!tal": noTalents,
  "-tal": noTalents,
};

export const getExcludedMetaFilters = (filterKey: string) => {
  const filters: AppliedFilter[] = [];
  const matchingFilters: AppliedFilter[] = excludedFilters[filterKey];
  if (matchingFilters) {
    filters.push(...matchingFilters);
  }
  return filters;
};

const legalFilters = ["l", "legal", "hero"];
const isLegalFilter = (filterKey: string) => legalFilters.includes(filterKey);

const rarityFilters = ["r", "rarity"];
const isRarityFilter = (filterKey: string) => rarityFilters.includes(filterKey);
