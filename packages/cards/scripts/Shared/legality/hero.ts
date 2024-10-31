import {
  Class,
  Hero,
  Keyword,
  Subtype,
  Talent,
  Type,
} from "@flesh-and-blood/types";

const CLASSES_AND_TALENTS = (classes: Class[], talents: Talent[] = []) => {
  const allClasses = [...classes, Class.Generic];
  if (talents.length > 0) {
    allClasses.push(Class.NotClassed);
  }

  return {
    classes: allClasses,
    talents,
  };
};

const DRACONIC = [Talent.Draconic];
const ROYAL_DRACONIC = [Talent.Royal, Talent.Draconic];
const EARTH_AND_ICE_AND_LIGHTNING = [
  Talent.Elemental,
  Talent.Earth,
  Talent.Ice,
  Talent.Lightning,
];
const EARTH = [Talent.Elemental, Talent.Earth];
const EARTH_AND_ICE = [Talent.Elemental, Talent.Earth, Talent.Ice];
const EARTH_AND_LIGHTNING = [Talent.Elemental, Talent.Earth, Talent.Lightning];
const ICE = [Talent.Elemental, Talent.Ice];
const ICE_AND_LIGHTNING = [Talent.Elemental, Talent.Ice, Talent.Lightning];
const LIGHTNING = [Talent.Elemental, Talent.Lightning];
const LIGHT = [Talent.Light];
const MYSTIC = [Talent.Mystic];
const SHADOW = [Talent.Shadow];

interface AppliedFilter {
  classes: Class[];
  excludedPitches?: any[];
  excludedSubtypes?: Subtype[];
  talents: Talent[];
}

const arakni: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Assassin]),
};

const aurora: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Runeblade], LIGHTNING),
};

const azalea: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Ranger]),
};

const benji: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Ninja]),
};

const betsy: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Guardian]),
};

const blaze: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Wizard]),
};

const boltyn: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Warrior], LIGHT),
  excludedSubtypes: [Subtype.Angel],
};

const bravo: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Guardian]),
};

const brevant: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Guardian]),
};

const briar: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Runeblade], EARTH_AND_LIGHTNING),
};

const brutus: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Adjudicator]),
};

const chane: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Runeblade], SHADOW),
};

const cindra: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Ninja], ROYAL_DRACONIC),
};

const dash: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Mechanologist]),
};

const dataDoll: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Mechanologist]),
};

const dorinthea: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Warrior]),
};

const dromai: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Illusionist], DRACONIC),
};

const emperor: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Warrior, Class.Wizard], DRACONIC),
  excludedPitches: [null, undefined, 2, 3],
};

const enigma: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Illusionist], MYSTIC),
};

const fai: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Ninja], DRACONIC),
};

const fang: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Warrior], ROYAL_DRACONIC),
};

const florian: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Runeblade], EARTH),
};

const genis: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Merchant]),
};

const ira: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Ninja]),
};

const iyslander: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Wizard], ICE),
};

const jarl: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Guardian], EARTH_AND_ICE),
};

const kano: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Wizard]),
};

const kassai: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Warrior]),
};

const katsu: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Ninja]),
};

const kavdaen: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Merchant]),
};

const kayo: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Brute]),
};

const levia: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Brute], SHADOW),
};

const lexi: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Ranger], ICE_AND_LIGHTNING),
};

const maxx: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Mechanologist]),
};

const melody: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Bard]),
};

const nuu: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Assassin], MYSTIC),
};

const oldhim: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Guardian], EARTH_AND_ICE),
};

const olympia: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Warrior]),
};

const oscilio: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Wizard], LIGHTNING),
};

const prism: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Illusionist], LIGHT),
};

const rhinar: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Brute]),
};

export const heroToFilterMapping: { [key: string]: AppliedFilter } = {
  [Hero.Arakni]: arakni,
  [Hero.Aurora]: aurora,
  [Hero.Azalea]: azalea,
  [Hero.Benji]: benji,
  [Hero.Betsy]: betsy,
  [Hero.Blaze]: blaze,
  [Hero.Boltyn]: boltyn,
  [Hero.Bravo]: bravo,
  [Hero.Brevant]: brevant,
  [Hero.Briar]: briar,
  [Hero.Brutus]: brutus,
  [Hero.Chane]: chane,
  [Hero.Cindra]: cindra,
  [Hero.Dash]: dash,
  [Hero.DataDoll]: dataDoll,
  [Hero.Dorinthea]: dorinthea,
  [Hero.Dromai]: dromai,
  [Hero.Emperor]: emperor,
  [Hero.Enigma]: enigma,
  [Hero.Fai]: fai,
  [Hero.Fang]: fang,
  [Hero.Florian]: florian,
  [Hero.GenisWotchuneed]: genis,
  [Hero.Ira]: ira,
  [Hero.Iyslander]: iyslander,
  [Hero.Jarl]: jarl,
  [Hero.Kano]: kano,
  [Hero.Kassai]: kassai,
  [Hero.Katsu]: katsu,
  [Hero.Kavdaen]: kavdaen,
  [Hero.Kayo]: kayo,
  [Hero.Levia]: levia,
  [Hero.Lexi]: lexi,
  [Hero.Maxx]: maxx,
  [Hero.Melody]: melody,
  [Hero.Nuu]: nuu,
  [Hero.Oldhim]: oldhim,
  [Hero.Olympia]: olympia,
  [Hero.Oscilio]: oscilio,
  [Hero.Prism]: prism,
  [Hero.Rhinar]: rhinar,
  [Hero.Riptide]: CLASSES_AND_TALENTS([Class.Ranger]),
  [Hero.Ruudi]: CLASSES_AND_TALENTS([Class.Merchant]),
  [Hero.Shiyana]: CLASSES_AND_TALENTS([]),
  [Hero.Squizzy]: CLASSES_AND_TALENTS([Class.Merchant]),
  [Hero.Starvo]: CLASSES_AND_TALENTS(
    [Class.Guardian],
    EARTH_AND_ICE_AND_LIGHTNING
  ),
  [Hero.Taipanis]: CLASSES_AND_TALENTS([Class.Adjudicator], DRACONIC),
  [Hero.Taylor]: CLASSES_AND_TALENTS([]),
  [Hero.Teklovossen]: CLASSES_AND_TALENTS([Class.Mechanologist]),
  [Hero.Terra]: CLASSES_AND_TALENTS(
    [Class.Guardian],
    [Talent.Elemental, Talent.Earth]
  ),
  [Hero.Theryon]: CLASSES_AND_TALENTS([Class.Adjudicator], LIGHT),
  [Hero.Uzuri]: CLASSES_AND_TALENTS([Class.Assassin]),
  [Hero.Valda]: CLASSES_AND_TALENTS([Class.Guardian]),
  [Hero.Verdance]: CLASSES_AND_TALENTS([Class.Wizard], EARTH),
  [Hero.Victor]: CLASSES_AND_TALENTS([Class.Guardian]),
  [Hero.Viserai]: CLASSES_AND_TALENTS([Class.Runeblade]),
  [Hero.Vynnset]: CLASSES_AND_TALENTS([Class.Runeblade], SHADOW),
  [Hero.Yorick]: CLASSES_AND_TALENTS([Class.Bard]),
  [Hero.Yoji]: CLASSES_AND_TALENTS([Class.Guardian]),
  [Hero.Zen]: CLASSES_AND_TALENTS([Class.Ninja], MYSTIC),
};

const ALL_TOKEN_HEROES = [Hero.Shiyana, Hero.Yorick];
const HEROES: Hero[] = Object.values(Hero);
const TYPES_TO_CHECK_FOR_PITCH = [
  Type.Action,
  Type.AttackReaction,
  Type.DefenseReaction,
  Type.Instant,
  Type.Mentor,
  Type.Resource,
];

const CARD_TO_LOG = "";

export const getLegalHeroes = (card: {
  cardIdentifier: string;
  classes: Class[];
  hero?: Hero;
  keywords?: Keyword[];
  name: string;
  pitch?: number;
  specializations?: Hero[];
  subtypes: Subtype[];
  talents: Talent[];
  types: Type[];
}): Hero[] => {
  const legalHeroes: Hero[] = [];

  for (const hero of HEROES) {
    const filters = heroToFilterMapping[hero];
    if (filters) {
      const { classes, excludedPitches, excludedSubtypes, talents } = filters;

      const matchesClass = card.classes.some((cardClass) =>
        classes.includes(cardClass)
      );

      const matchesHero = !card.hero || card.hero === hero;

      let matchesPitches = true;
      if (
        excludedPitches &&
        hero === Hero.Emperor &&
        TYPES_TO_CHECK_FOR_PITCH.some((type) => card.types.includes(type))
      ) {
        matchesPitches = !excludedPitches.includes(card.pitch);
      }

      const matchesStarvoSpecialization =
        card.specializations &&
        card.specializations.length > 0 &&
        card.specializations.includes(Hero.Bravo) &&
        hero === Hero.Starvo;

      const matchesSpecializations =
        !card.specializations ||
        card.specializations.length === 0 ||
        matchesStarvoSpecialization ||
        card.specializations.includes(hero);

      const matchesSubtypes =
        !excludedSubtypes ||
        !card.subtypes.some((cardSubtype) =>
          excludedSubtypes.includes(cardSubtype)
        );

      const matchesTalents =
        !card.talents ||
        card.talents.every((cardTalent) => talents.includes(cardTalent));

      let matches =
        matchesClass &&
        matchesHero &&
        matchesPitches &&
        matchesSpecializations &&
        matchesSubtypes &&
        matchesTalents;

      if (hero === Hero.Shiyana && !matches) {
        const isASpecializationCard =
          !!card.specializations && card.specializations?.length > 0;

        if (isASpecializationCard) {
          matches = true;
        }
      }

      if (hero === Hero.Brutus && !matches) {
        const isAClashCard =
          !!card.keywords && card.keywords.includes(Keyword.Clash);
        const isASpecializationCard =
          !!card.specializations && card.specializations?.length > 0;

        if (isAClashCard && !isASpecializationCard) {
          matches = true;
        }
      }

      if (hero === Hero.Taylor && !matches) {
        const isEquipment = card.types.includes(Type.Equipment);

        if (isEquipment) {
          matches = true;
        }
      }

      if (!matches && ALL_TOKEN_HEROES.includes(hero)) {
        const isAToken = card.types.includes(Type.Token);
        const isCrackedBauble = card.cardIdentifier === "cracked-bauble-yellow";
        const isEphemeral = card.keywords?.includes(Keyword.Ephemeral);

        if (isAToken || isCrackedBauble || isEphemeral) {
          matches = true;
        }
      }

      if (card.name === CARD_TO_LOG) {
        console.log(
          JSON.stringify(
            {
              filters,
              hero,
              matches,
              matchesClass,
              matchesPitches,
              matchesSpecializations,
              matchesSubtypes,
              matchesTalents,
              specializations: card.specializations,
            },
            null,
            2
          )
        );
      }

      if (matches) {
        legalHeroes.push(hero);
      }
    }
  }

  if (card.name === CARD_TO_LOG) {
    console.log(JSON.stringify({ card, legalHeroes }, null, 2));
  }

  legalHeroes.sort();

  return legalHeroes;
};
