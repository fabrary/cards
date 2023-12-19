import { Class, Format, Hero, Talent, Type } from "@flesh-and-blood/types";

const oneToFifty = Array.from(Array(50).keys()).map((value) => `${value}`);

const CLASSES_AND_TALENTS = (classes: Class[], talents: Talent[] = []) => {
  const values = [...classes, Class.Generic];
  if (talents.length > 0) {
    values.push(Class.NotClassed);
  }

  return [
    {
      filterToPropertyMapping: {
        property: "classes",
        isArray: true,
      },
      values: values.map((value) => value.toLowerCase()),
      isOr: true,
    },
    filterOutTalents(talents),
  ];
};

const NO_OTHER_HEROES_OR_SPECIALIZATIONS = (
  hero: Hero,
  sharedSpecializationHeroes: Hero[] = []
) => {
  const values = Object.values(Hero)
    .filter((h) => h !== hero && !sharedSpecializationHeroes.includes(h))
    .map((hero) => hero.toLowerCase());

  return [
    {
      filterToPropertyMapping: {
        property: "hero",
        isString: true,
      },
      values,
      excluded: true,
      isOr: true,
    },
    {
      filterToPropertyMapping: {
        property: "specializations",
        isArray: true,
      },
      values,
      excluded: true,
      isOr: true,
    },
  ];
};

const filterOutTalents = (talents: Talent[]) => {
  const values = Object.values(Talent)
    .filter((talent) => !talents.includes(talent))
    .map((talent) => talent.toLowerCase());

  return {
    filterToPropertyMapping: {
      property: "talents",
      isArray: true,
    },
    values: values,
    excluded: true,
  };
};

const DRACONIC = [Talent.Draconic];
const EARTH_AND_ICE_AND_LIGHTNING = [
  Talent.Elemental,
  Talent.Earth,
  Talent.Ice,
  Talent.Lightning,
];
const EARTH_AND_ICE = [Talent.Elemental, Talent.Earth, Talent.Ice];
const EARTH_AND_LIGHTNING = [Talent.Elemental, Talent.Earth, Talent.Lightning];
const ICE = [Talent.Elemental, Talent.Ice];
const ICE_AND_LIGHTNING = [Talent.Elemental, Talent.Ice, Talent.Lightning];
const LIGHT = [Talent.Light];
const SHADOW = [Talent.Shadow];

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

const arakni: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Assassin]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Arakni),
];
const azalea: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Ranger]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Azalea),
];

const benji: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Ninja]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Benji),
];

const boltyn: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Warrior], LIGHT),
  {
    filterToPropertyMapping: {
      property: "subtypes",
      isArray: true,
      partialMatch: true,
    },
    values: ["angel"],
    excluded: true,
    isOr: true,
  },
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Boltyn),
];

const bravo: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Guardian]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Bravo),
];

const brevant: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Guardian]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Brevant),
];

const briar: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Runeblade], EARTH_AND_LIGHTNING),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Briar),
];

const chane: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Runeblade], SHADOW),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Chane),
];

const dash: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Mechanologist]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Dash),
];

const dataDoll: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Mechanologist]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.DataDoll),
];

const dorinthea: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Warrior]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Dorinthea),
];

const dromai: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Illusionist], DRACONIC),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Dromai, [Hero.Fai]),
];

const emperor: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Warrior, Class.Wizard], DRACONIC),
  {
    filterToPropertyMapping: {
      property: "pitch",
      isNumber: true,
    },
    values: ["0", "2", "3"],
    cardTypes: [
      Type.Action,
      Type.AttackReaction,
      Type.DefenseReaction,
      Type.Instant,
      Type.Mentor,
      Type.Resource,
    ],
    excluded: true,
    isOr: true,
  },
  {
    filterToPropertyMapping: {
      property: "types",
      isArray: true,
      partialMatch: true,
    },
    values: ["hero", "mentor"],
    excluded: true,
    isOr: true,
  },
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Emperor),
];

const fai: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Ninja], DRACONIC),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Fai, [Hero.Dromai]),
];

const genis: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Merchant]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.GenisWotchuneed),
];

const ira: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Ninja]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Ira),
];

const iyslander: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Wizard], ICE),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Iyslander),
];

const kano: AppliedFilter[] = [...CLASSES_AND_TALENTS([Class.Wizard])];

const kassai: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Warrior]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Kassai),
];

const katsu: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Ninja]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Katsu),
];

const kavdaen: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Merchant]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Kavdaen),
];

const kayo: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Brute]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Kayo),
];

const levia: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Brute], SHADOW),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Levia),
];

const lexi: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Ranger], ICE_AND_LIGHTNING),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Lexi),
];

const maxx: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Mechanologist]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Maxx),
];

const melody: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Bard]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Melody),
];

const oldhim: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Guardian], EARTH_AND_ICE),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Oldhim),
];

const prism: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Illusionist], LIGHT),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Prism),
];

const rhinar: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Brute]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Rhinar),
];

const riptide: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Ranger]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Riptide),
];

const ruudi: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Merchant]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Ruudi),
];

const shiyana: AppliedFilter[] = [
  {
    filterToPropertyMapping: {
      property: "classes",
      isArray: true,
    },
    values: ["generic"],
    isOr: true,
  },
];

const squizzy: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Merchant]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Squizzy),
];

const starvo: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Guardian], EARTH_AND_ICE_AND_LIGHTNING),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Bravo),
];

const taipanis: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Adjudicator], DRACONIC),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Taipanis),
];

const taylor: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Taylor),
];

const teklovossen: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Mechanologist]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Teklovossen),
];

const theryon: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Adjudicator], LIGHT),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Theryon),
];

const uzuri: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Assassin]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Uzuri),
];

const valda: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Guardian]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Valda),
];

const viserai: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Runeblade]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Viserai),
];

const vynnset: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Runeblade], SHADOW),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Vynnset),
];

const yorick: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Bard]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Yorick),
];

const yoji: AppliedFilter[] = [
  ...CLASSES_AND_TALENTS([Class.Guardian]),
  ...NO_OTHER_HEROES_OR_SPECIALIZATIONS(Hero.Yoji),
];

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

const legalFiltersMappings: { [key: string]: AppliedFilter[] } = {
  // formats
  blitz: legalInBlitz,
  "blitz ll": legalInBlitzLivingLegend,
  "blitz living legend": legalInBlitzLivingLegend,
  clash: legalInClash,
  cc: legalInClassicConstructed,
  classic: legalInClassicConstructed,
  "classic constructed": legalInClassicConstructed,
  ll: legalInClassicConstructedLivingLegend,
  "living legend": legalInClassicConstructedLivingLegend,
  "cc ll": legalInClassicConstructedLivingLegend,
  "ll cc": legalInClassicConstructedLivingLegend,
  "classic constructed ll": legalInClassicConstructedLivingLegend,
  "classic constructed living legend": legalInClassicConstructedLivingLegend,
  constructed: legalInClassicConstructed,
  commoner: legalInCommoner,
  upf: legalInUltimatePitFight,
  ultimate: legalInUltimatePitFight,
  "ultimate pit fight": legalInUltimatePitFight,

  // heroes
  arakni,
  azalea,
  benji,
  boltyn,
  bravo,
  brevant,
  briar,
  chane,
  dash,
  data: dataDoll,
  "data doll": dataDoll,
  datadoll: dataDoll,
  dori: dorinthea,
  dorinthea,
  dromai,
  emperor,
  fai,
  genis,
  geniswotchuneed: genis,
  ira,
  iyslander,
  islander: iyslander,
  kano,
  kassai,
  katsu,
  kavdaen,
  kayo,
  levia,
  lexi,
  maxx,
  melody,
  oldhim,
  prism,
  rhinar,
  riptide,
  ruudi,
  shiyana,
  squizzy,
  starvo,
  taipanis,
  taylor,
  teklovossen,
  theryon,
  uzuri,
  valda,
  viserai,
  vynnset,
  yorick,
  yoji,
};

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
  for (const value of values) {
    if (legalFiltersMappings[value]) {
      const metaFilters = legalFiltersMappings[value];
      for (const filter of metaFilters) {
        let newFilter = { ...filter };
        if (excluded && !filter.filterToPropertyMapping.isString) {
          newFilter.excluded = !filter.excluded;
        }
        filters.push(newFilter);
      }
    }
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
    values: Object.values(Talent).map((talent) => talent.toLowerCase()),
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

export const getDeckFilters = (
  hero: Hero,
  format?: Format
): AppliedFilter[] => {
  return [
    ...legalFiltersMappings[hero.toLowerCase()],
    ...(format ? legalFiltersMappings[format.toLowerCase()] : []),
  ];
};

export const heroHasFilters = (hero: Hero): boolean =>
  legalFiltersMappings[hero.toLowerCase().split(" ")[0]]?.length > 0;

const legalFilters = ["l", "legal", "hero"];
const isLegalFilter = (filterKey: string) => legalFilters.includes(filterKey);

const rarityFilters = ["r", "rarity"];
const isRarityFilter = (filterKey: string) => rarityFilters.includes(filterKey);
