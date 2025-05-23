import {
  Class,
  getIsDeckCard,
  Hero,
  Keyword,
  Meta,
  Metatype,
  Release,
  releases,
  Subtype,
  Talent,
  Trait,
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

const gravyBones: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Necromancer, Class.Pirate]),
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

const marlynn: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Pirate, Class.Ranger]),
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

const puffin: AppliedFilter = {
  ...CLASSES_AND_TALENTS([Class.Mechanologist, Class.Pirate]),
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
  [Hero.Crackni]: CLASSES_AND_TALENTS([Class.Assassin], [Talent.Chaos]),
  [Hero.Dash]: dash,
  [Hero.DataDoll]: dataDoll,
  [Hero.Dorinthea]: dorinthea,
  [Hero.Dromai]: dromai,
  [Hero.Emperor]: emperor,
  [Hero.Enigma]: enigma,
  [Hero.Fai]: fai,
  [Hero.Fang]: fang,
  [Hero.Florian]: florian,
  [Hero.Genis]: genis,
  [Hero.GravyBones]: gravyBones,
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
  [Hero.Marlynn]: marlynn,
  [Hero.Maxx]: maxx,
  [Hero.Melody]: melody,
  [Hero.Nuu]: nuu,
  [Hero.Oldhim]: oldhim,
  [Hero.Olympia]: olympia,
  [Hero.Oscilio]: oscilio,
  [Hero.Prism]: prism,
  [Hero.Puffin]: puffin,
  [Hero.Rhinar]: rhinar,
  [Hero.Riptide]: CLASSES_AND_TALENTS([Class.Ranger]),
  [Hero.Ruudi]: CLASSES_AND_TALENTS([Class.Merchant]),
  [Hero.Scurv]: CLASSES_AND_TALENTS([Class.Pirate, Class.Thief]),
  [Hero.Shiyana]: CLASSES_AND_TALENTS([]),
  [Hero.Slippy]: CLASSES_AND_TALENTS([Class.Assassin], [Talent.Chaos]),
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
  Type.Block,
  Type.DefenseReaction,
  Type.Instant,
  Type.Mentor,
  Type.Resource,
];

const allReleases = Object.values(Release);

const CARD_TO_LOG = "";
const HERO_TO_LOG = Hero.Shiyana;

const ALL_ARAKNIS = [Hero.Arakni, Hero.Crackni, Hero.Slippy];
const ALL_HEROES = Object.values(Hero);

export const getLegalHeroes = (card: {
  cardIdentifier: string;
  classes: Class[];
  hero?: Hero;
  keywords?: Keyword[];
  meta?: Meta[];
  metatypes?: Metatype[];
  name: string;
  pitch?: number;
  specializations?: Hero[];
  subtypes: Subtype[];
  talents?: Talent[];
  traits?: Trait[];
  types: Type[];
  typeText: string;
}): Hero[] => {
  const legalHeroes: Hero[] = [];

  const isCardMacro = card.types?.includes(Type.Macro);
  const macroSets =
    card.metatypes?.filter((metatype) =>
      allReleases.includes(metatype as unknown as Release)
    ) || [];
  const cardMacroSet = macroSets.length > 0 ? macroSets[0] : undefined;
  const macroSetInfo = cardMacroSet
    ? releases.find(
        ({ release }) => release === (cardMacroSet as unknown as Release)
      )
    : undefined;
  const draftHeroesAllowedInMacroSet = macroSetInfo
    ? macroSetInfo.draft?.heroIdentifiers || []
    : [];

  for (const hero of HEROES) {
    const filters = heroToFilterMapping[hero];
    if (filters) {
      const { classes, excludedPitches, excludedSubtypes, talents } = filters;

      const allClassesMatch = card.classes.every((cardClass) =>
        classes.includes(cardClass)
      );
      const atLeastOneClassMatches = card.classes.some((cardClass) =>
        classes.includes(cardClass)
      );

      const mustMatchAtLeastOneClass = card.typeText.includes("/");
      const matchesClasses = mustMatchAtLeastOneClass
        ? atLeastOneClassMatches
        : allClassesMatch;

      const matchesClass =
        !card.classes || card.classes.length === 0 || matchesClasses;

      const matchesHero = !card.hero || card.hero === hero;

      let matchesPitches = true;
      if (excludedPitches && hero === Hero.Emperor && getIsDeckCard(card)) {
        matchesPitches = !excludedPitches.includes(card.pitch);
      }

      const matchesStarvoSpecialization =
        card.specializations?.includes(Hero.Bravo) && hero === Hero.Starvo;

      const heroIsAnArakni = ALL_ARAKNIS.includes(hero);

      const isHeroMetatypeSpecialization = card.metatypes?.some((metatype) =>
        ALL_HEROES.includes(metatype as unknown as Hero)
      );
      let matchesHeroMetaTypeSpecialization = card.metatypes?.includes(
        hero as unknown as Metatype
      );
      let matchesHeroSpecialization = card.specializations?.includes(hero);
      if (heroIsAnArakni) {
        matchesHeroMetaTypeSpecialization = card.metatypes?.some((metatype) =>
          ALL_ARAKNIS.includes(metatype as unknown as Hero)
        );
        matchesHeroSpecialization = card.specializations?.some((hero) =>
          ALL_ARAKNIS.includes(hero)
        );
      }

      const isASpecialization =
        (card.specializations && card.specializations.length > 0) ||
        isHeroMetatypeSpecialization;

      const matchesSpecializations =
        !isASpecialization ||
        matchesStarvoSpecialization ||
        matchesHeroMetaTypeSpecialization ||
        matchesHeroSpecialization;

      const matchesSubtypes =
        !excludedSubtypes ||
        !card.subtypes.some((cardSubtype) =>
          excludedSubtypes.includes(cardSubtype)
        );

      const matchesTalents =
        !card.talents ||
        card.talents.every((cardTalent) => talents.includes(cardTalent));

      const matchesMacroSet = isCardMacro
        ? draftHeroesAllowedInMacroSet.some((heroIdentifier) =>
            heroIdentifier.includes(hero.toLowerCase())
          )
        : true;

      let matches =
        matchesClass &&
        matchesHero &&
        matchesPitches &&
        matchesSpecializations &&
        matchesSubtypes &&
        matchesTalents &&
        matchesMacroSet;

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

      if (hero === Hero.Arakni && !matches) {
        const isAgentOfChaos = card.traits?.includes(Trait.AgentOfChaos);

        if (isAgentOfChaos) {
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

      const matchesCardToLog = card.name === CARD_TO_LOG;
      const matchesHeroToLog = !HERO_TO_LOG || hero === HERO_TO_LOG;
      const shouldLog = matchesCardToLog && matchesHeroToLog;
      if (shouldLog) {
        console.log(
          JSON.stringify(
            {
              card,
              filters,
              hero,
              hybrid: matchesClass,
              isHeroMetatypeSpecialization,
              matches,
              matchesClass,
              matchesPitches,
              matchesSpecializations,
              matchesHeroMetaTypeSpecialization,
              matchesSubtypes,
              matchesTalents,
              macro: {
                matchesMacroSet,
                isCardMacro,
                draftHeroesAllowedInMacroSet,
              },
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
    //   throw new Error("err");
  }

  legalHeroes.sort();

  return legalHeroes;
};
