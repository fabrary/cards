import { Format, Hero, Talent } from "@flesh-and-blood/types";
import { PUNCTUATION } from "./constants";

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

const legalInBlitz: AppliedFilter[] = [
  {
    filterToPropertyMapping: {
      property: "bannedFormats",
      isArray: true,
    },
    values: ["blitz"],
    excluded: true,
  },
  {
    filterToPropertyMapping: {
      property: "young",
      isBoolean: true,
    },
    values: [],
    cardTypes: ["hero"],
  },
];

const legalInBlitzLivingLegend = [
  {
    filterToPropertyMapping: {
      property: "bannedFormats",
      isArray: true,
    },
    values: ["blitz (living legend)"],
    excluded: true,
  },
  {
    filterToPropertyMapping: {
      property: "young",
      isBoolean: true,
    },
    values: [],
    cardTypes: ["hero"],
  },
];

const legalInClash: AppliedFilter[] = [
  {
    filterToPropertyMapping: {
      property: "rarities",
      isArray: true,
    },
    values: ["super rare", "majestic", "legendary", "fabled"],
    excluded: true,
  },
  {
    filterToPropertyMapping: {
      property: "young",
      isBoolean: true,
    },
    values: [],
    cardTypes: ["hero"],
  },
];

// TODO why not working
const legalInClassicConstructed: AppliedFilter[] = [
  {
    filterToPropertyMapping: {
      property: "bannedFormats",
      isArray: true,
    },
    values: ["classic constructed"],
    excluded: true,
  },
  {
    filterToPropertyMapping: {
      property: "young",
      isBoolean: true,
    },
    values: [],
    cardTypes: ["hero"],
    excluded: true,
  },
];

const legalInClassicConstructedLivingLegend: AppliedFilter[] = [
  {
    filterToPropertyMapping: {
      property: "bannedFormats",
      isArray: true,
    },
    values: ["classic constructed (living legend)"],
    excluded: true,
  },
  {
    filterToPropertyMapping: {
      property: "young",
      isBoolean: true,
    },
    values: [],
    cardTypes: ["hero"],
    excluded: true,
  },
];

const legalInCommoner: AppliedFilter[] = [
  {
    filterToPropertyMapping: {
      property: "bannedFormats",
      isArray: true,
    },
    values: ["commoner"],
    excluded: true,
  },
  {
    filterToPropertyMapping: {
      property: "young",
      isBoolean: true,
    },
    values: [],
    cardTypes: ["hero"],
  },
];

const legalInUltimatePitFight: AppliedFilter[] = [
  {
    filterToPropertyMapping: {
      property: "young",
      isBoolean: true,
    },
    values: [],
    cardTypes: ["hero"],
  },
];

const formatFilterMappings: {
  filters: AppliedFilter[];
  format: Format;
  nicknames?: string[];
}[] = [
  {
    filters: legalInBlitz,
    format: Format.Blitz,
  },
  {
    filters: legalInBlitzLivingLegend,
    format: Format.BlitzLivingLegend,
    nicknames: ["blitz ll"],
  },
  {
    filters: legalInClash,
    format: Format.Clash,
  },
  {
    filters: legalInClassicConstructed,
    format: Format.ClassicConstructed,
    nicknames: ["cc", "classic"],
  },
  {
    filters: legalInClassicConstructedLivingLegend,
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
    filters: legalInCommoner,
    format: Format.Commoner,
  },
  {
    filters: legalInUltimatePitFight,
    format: Format.UltimatePitFight,
    nicknames: ["upf"],
  },
];

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
    hero: Hero.GenisWotchuneed,
    nicknames: ["genis"],
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
      property: "rarities",
      isArray: true,
    },
    isOr: true,
    values: rarities,
    excluded,
  };
};

const getLegalFilters = (values: string[], excluded: boolean) => {
  const filters: AppliedFilter[] = [];

  const heroes: string[] = [];

  for (const value of values) {
    const matchingFormat = formatFilterMappings.find(
      ({ format, nicknames }) => {
        const isAMatch =
          format.toLowerCase().replaceAll(PUNCTUATION, "") === value ||
          (!!nicknames && nicknames.includes(value));

        return isAMatch;
      }
    );
    if (matchingFormat) {
      const metaFilters = matchingFormat.filters;
      for (const filter of metaFilters) {
        let newFilter = { ...filter };
        if (excluded && !filter.filterToPropertyMapping.isString) {
          newFilter.excluded = !filter.excluded;
        }
        filters.push(newFilter);
      }
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

  if (heroes.length > 0) {
    filters.push({
      filterToPropertyMapping: {
        property: "legalHeroes",
        isArray: true,
      },
      values: heroes,
      isOr: true,
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
