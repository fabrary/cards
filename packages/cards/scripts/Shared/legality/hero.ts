import {
  Class,
  getIsChosenExtra,
  getIsCreatedExtra,
  getIsDeckCard,
  Hero,
  Keyword,
  Metatype,
  Release,
  releases,
  Subtype,
  Talent,
  Trait,
  Type,
} from "@flesh-and-blood/types";

/**
 * What a hero's pool is decided from, plus the extras the card puts into play.
 * `createdExtras` arrives as a field rather than being read out of card text
 * here: the relations pass owns the text, legality owns who may run the card.
 */
export interface PoolCard {
  cardIdentifier: string;
  classes: Class[];
  createdExtras?: string[];
  hero?: Hero;
  keywords?: Keyword[];
  metatypes?: Metatype[];
  name: string;
  pitch?: number;
  specializations?: Hero[];
  subtypes: Subtype[];
  talents?: Talent[];
  traits?: Trait[];
  types: Type[];
  typeText: string;
}

/** Which card put a created extra into a hero's pool. */
export interface ProvisioningStep {
  createdExtraCardIdentifier: string;
  provisioningCardIdentifier: string;
}

/**
 * A clause on a hero card widening what they may include beyond their class and
 * talent, named after the clause rather than spelled out: The Librarian reads
 * "You may have cards with Tome in their name of any class or talent in your
 * deck". A predicate is the escape hatch for the first clause with no name.
 */
type DeckbuildingExemption =
  | "agentOfChaos"
  | "anyClassClash"
  | "anyClassEquipment"
  | "anyClassSpecializations"
  | "anyClassTomes"
  | ((card: PoolCard) => boolean);

interface HeroPool {
  classes: Class[];
  excludedPitches?: (number | null | undefined)[];
  excludedSubtypes?: Subtype[];
  exemption?: DeckbuildingExemption;
  talents: Talent[];
}

const getClassesAndTalents = (classes: Class[], talents: Talent[] = []) => {
  const poolClasses = [...classes, Class.Generic];
  if (talents.length > 0) {
    poolClasses.push(Class.NotClassed);
  }

  return {
    classes: poolClasses,
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

const heroPools: { [key: string]: HeroPool } = {
  [Hero.Arakni]: {
    ...getClassesAndTalents([Class.Assassin]),
    exemption: "agentOfChaos",
  },
  [Hero.Aurora]: getClassesAndTalents([Class.Runeblade], LIGHTNING),
  [Hero.Aurora2]: getClassesAndTalents([Class.Runeblade], [Talent.Lightning]),
  [Hero.Azalea]: getClassesAndTalents([Class.Ranger]),
  [Hero.Baalghor]: getClassesAndTalents([], SHADOW),
  [Hero.Benji]: getClassesAndTalents([Class.Ninja]),
  [Hero.Betsy]: getClassesAndTalents([Class.Guardian]),
  [Hero.Blaze]: getClassesAndTalents([Class.Wizard]),
  [Hero.Bolfar]: getClassesAndTalents([Class.Guardian]),
  [Hero.Boltyn]: {
    ...getClassesAndTalents([Class.Warrior], LIGHT),
    excludedSubtypes: [Subtype.Angel],
  },
  [Hero.Bravo]: getClassesAndTalents([Class.Guardian]),
  [Hero.Brevant]: getClassesAndTalents([Class.Guardian]),
  [Hero.Briar]: getClassesAndTalents([Class.Runeblade], EARTH_AND_LIGHTNING),
  [Hero.Broscilio]: getClassesAndTalents([Class.Wizard], [Talent.Lightning]),
  [Hero.Brutus]: {
    ...getClassesAndTalents([Class.Adjudicator]),
    exemption: "anyClassClash",
  },
  [Hero.Chane]: getClassesAndTalents([Class.Runeblade], SHADOW),
  [Hero.Cindra]: getClassesAndTalents([Class.Ninja], ROYAL_DRACONIC),
  [Hero.Crackni]: getClassesAndTalents([Class.Assassin], [Talent.Chaos]),
  [Hero.Crix]: getClassesAndTalents([Class.Guardian]),
  [Hero.Dash]: getClassesAndTalents([Class.Mechanologist]),
  [Hero.DataDoll]: getClassesAndTalents([Class.Mechanologist]),
  [Hero.Dorinthea]: getClassesAndTalents([Class.Warrior]),
  [Hero.Dromai]: getClassesAndTalents([Class.Illusionist], DRACONIC),
  [Hero.Emperor]: {
    ...getClassesAndTalents([Class.Warrior, Class.Wizard], DRACONIC),
    excludedPitches: [null, undefined, 2, 3, 4],
  },
  [Hero.Enigma]: getClassesAndTalents([Class.Illusionist], MYSTIC),
  [Hero.Fai]: getClassesAndTalents([Class.Ninja], DRACONIC),
  [Hero.Fang]: getClassesAndTalents([Class.Warrior], ROYAL_DRACONIC),
  [Hero.Florian]: getClassesAndTalents([Class.Runeblade], EARTH),
  [Hero.Frankie]: getClassesAndTalents([Class.Necromancer]),
  [Hero.Genis]: getClassesAndTalents([Class.Merchant]),
  [Hero.GravyBones]: getClassesAndTalents([Class.Necromancer, Class.Pirate]),
  [Hero.Hala]: getClassesAndTalents([Class.Warrior]),
  [Hero.Ira]: getClassesAndTalents([Class.Ninja]),
  [Hero.Iyslander]: getClassesAndTalents([Class.Wizard], ICE),
  [Hero.Jarl]: getClassesAndTalents([Class.Guardian], EARTH_AND_ICE),
  [Hero.Kano]: getClassesAndTalents([Class.Wizard]),
  [Hero.Kassai]: getClassesAndTalents([Class.Warrior]),
  [Hero.Katsu]: getClassesAndTalents([Class.Ninja]),
  [Hero.Kavdaen]: getClassesAndTalents([Class.Merchant]),
  [Hero.Kayo]: getClassesAndTalents([Class.Brute]),
  [Hero.Killjoy]: getClassesAndTalents(
    [Class.Warrior, Class.Thief],
    [Talent.Reviled],
  ),
  [Hero.Kox]: getClassesAndTalents([Class.Guardian]),
  [Hero.Levia]: getClassesAndTalents([Class.Brute], SHADOW),
  [Hero.Lexi]: getClassesAndTalents([Class.Ranger], ICE_AND_LIGHTNING),
  [Hero.Librarian]: {
    ...getClassesAndTalents([Class.Adjudicator], LIGHT),
    exemption: "anyClassTomes",
  },
  [Hero.Lyath]: getClassesAndTalents([Class.Guardian], [Talent.Reviled]),
  [Hero.Malice]: getClassesAndTalents([Class.Necromancer], SHADOW),
  [Hero.Marlynn]: getClassesAndTalents([Class.Pirate, Class.Ranger]),
  [Hero.Maxx]: getClassesAndTalents([Class.Mechanologist]),
  [Hero.Melody]: getClassesAndTalents([Class.Bard]),
  [Hero.Mortimer]: getClassesAndTalents([Class.Assassin]),
  [Hero.Nuu]: getClassesAndTalents([Class.Assassin], MYSTIC),
  [Hero.Oldhim]: getClassesAndTalents([Class.Guardian], EARTH_AND_ICE),
  [Hero.Olympia]: getClassesAndTalents([Class.Warrior]),
  [Hero.Oscilio]: getClassesAndTalents([Class.Wizard], LIGHTNING),
  [Hero.Pleiades]: getClassesAndTalents([Class.Guardian], [Talent.Revered]),
  [Hero.Prism]: getClassesAndTalents([Class.Illusionist], LIGHT),
  [Hero.Puffin]: getClassesAndTalents([Class.Mechanologist, Class.Pirate]),
  [Hero.Reya]: getClassesAndTalents([Class.Guardian]),
  [Hero.Rhinar]: getClassesAndTalents([Class.Brute]),
  [Hero.Riptide]: getClassesAndTalents([Class.Ranger]),
  [Hero.RKO]: getClassesAndTalents([Class.Brute], [Talent.Reviled]),
  [Hero.Ruudi]: getClassesAndTalents([Class.Merchant]),
  [Hero.Scurv]: getClassesAndTalents([Class.Pirate, Class.Thief]),
  [Hero.Shiyana]: {
    ...getClassesAndTalents([]),
    exemption: "anyClassSpecializations",
  },
  [Hero.Slippy]: getClassesAndTalents([Class.Assassin], [Talent.Chaos]),
  [Hero.Squizzy]: getClassesAndTalents([Class.Merchant]),
  [Hero.Starvo]: getClassesAndTalents(
    [Class.Guardian],
    EARTH_AND_ICE_AND_LIGHTNING,
  ),
  [Hero.Taipanis]: getClassesAndTalents([Class.Adjudicator], DRACONIC),
  [Hero.Taylor]: {
    ...getClassesAndTalents([]),
    exemption: "anyClassEquipment",
  },
  [Hero.Teklovossen]: getClassesAndTalents([Class.Mechanologist]),
  [Hero.Terra]: getClassesAndTalents([Class.Guardian], EARTH),
  [Hero.Theryon]: getClassesAndTalents([Class.Adjudicator], LIGHT),
  [Hero.Tuffnut]: getClassesAndTalents([Class.Brute], [Talent.Revered]),
  [Hero.Uzuri]: getClassesAndTalents([Class.Assassin]),
  [Hero.Valda]: getClassesAndTalents([Class.Guardian]),
  [Hero.Verdance]: getClassesAndTalents([Class.Wizard], EARTH),
  [Hero.Victor]: getClassesAndTalents([Class.Guardian]),
  [Hero.Viserai]: getClassesAndTalents([Class.Runeblade]),
  [Hero.Viserai2]: getClassesAndTalents([Class.Runeblade], SHADOW),
  [Hero.Vynnset]: getClassesAndTalents([Class.Runeblade], SHADOW),
  [Hero.Yoji]: getClassesAndTalents([Class.Guardian]),
  [Hero.Yorick]: getClassesAndTalents([Class.Bard]),
  [Hero.Zane]: getClassesAndTalents([Class.Warrior], [Talent.Revered]),
  [Hero.Zen]: getClassesAndTalents([Class.Ninja], MYSTIC),
  [Hero.Zyggy]: getClassesAndTalents([Class.Illusionist], [Talent.Lightning]),
};

const ARAKNIS = [Hero.Arakni, Hero.Crackni, Hero.Slippy];
const KAYOS = [Hero.Kayo, Hero.RKO];

// The heroes a hero answers to when a card names one: the same character under
// another name, whether a family or a reprint. A specialization card written
// for the first printing belongs to the reprint too, and never the other way
// round, so each hero lists the names their own cards may carry.
const heroIdentities: { [key: string]: Hero[] } = {
  [Hero.Arakni]: ARAKNIS,
  [Hero.Aurora2]: [Hero.Aurora2, Hero.Aurora],
  [Hero.Broscilio]: [Hero.Broscilio, Hero.Oscilio],
  [Hero.Crackni]: ARAKNIS,
  [Hero.Kayo]: KAYOS,
  [Hero.RKO]: KAYOS,
  [Hero.Slippy]: ARAKNIS,
  [Hero.Starvo]: [Hero.Starvo, Hero.Bravo],
  [Hero.Viserai2]: [Hero.Viserai2, Hero.Viserai],
};

const HEROES: Hero[] = Object.values(Hero);
const ALL_RELEASES = Object.values(Release);

// The two cards whose role the type line does not give away.
const CREATED_EXTRA_CARD_IDENTIFIERS = [
  "cracked-bauble-yellow",
  "goldfin-harpoon",
];

// "Tome" as a whole word: Tomeltai is a dragon.
const TOME_NAME = /\bTomes?\b/i;

/**
 * An extra a card puts into play, which is the whole of what a deck provisions.
 * A demi-hero carries the Agent of Chaos trait, which reads as created, so the
 * chosen half has to be answered first: nothing puts a demi-hero into play.
 */
export const getIsCreatedExtraCard = (card: PoolCard) =>
  !getIsChosenExtra(card) &&
  (getIsCreatedExtra(card) ||
    CREATED_EXTRA_CARD_IDENTIFIERS.includes(card.cardIdentifier));

const getIsSpecializationCard = (card: PoolCard) =>
  (card.specializations || []).length > 0 ||
  (card.metatypes || []).some((metatype) =>
    HEROES.includes(metatype as unknown as Hero),
  );

const getIsExempt = (exemption: DeckbuildingExemption, card: PoolCard) => {
  let isExempt = false;

  if (typeof exemption === "function") {
    isExempt = exemption(card);
  } else if (exemption === "agentOfChaos") {
    isExempt = (card.traits || []).includes(Trait.AgentOfChaos);
  } else if (exemption === "anyClassClash") {
    // A specialization card is written for one hero, whatever else it does.
    isExempt =
      (card.keywords || []).includes(Keyword.Clash) &&
      !getIsSpecializationCard(card);
  } else if (exemption === "anyClassEquipment") {
    isExempt = card.types.includes(Type.Equipment);
  } else if (exemption === "anyClassSpecializations") {
    isExempt = (card.specializations || []).length > 0;
  } else if (exemption === "anyClassTomes") {
    isExempt = TOME_NAME.test(card.name);
  }

  return isExempt;
};

// A macro carries the release it is drafted in as a metatype, and that release
// names the heroes drafting it.
const getDraftHeroIdentifiers = (card: PoolCard) => {
  const macroRelease = (card.metatypes || []).find((metatype) =>
    ALL_RELEASES.includes(metatype as unknown as Release),
  );
  const draftRelease = macroRelease
    ? releases.find(
        ({ release }) => release === (macroRelease as unknown as Release),
      )
    : undefined;

  return draftRelease?.draft?.heroIdentifiers || [];
};

const getHeroIdentifier = (hero: Hero) =>
  hero.toLowerCase().replaceAll(" ", "-");

/** The heroes a card's class, talent and printing let it be run by. */
const getPoolHeroes = (card: PoolCard): Hero[] => {
  const legalHeroes: Hero[] = [];

  const isMacro = card.types.includes(Type.Macro);
  const draftHeroIdentifiers = isMacro ? getDraftHeroIdentifiers(card) : [];
  const isSpecializationCard = getIsSpecializationCard(card);
  // A hybrid card's type line names two classes and asks for either.
  const mustMatchAtLeastOneClass = card.typeText.includes("/");

  for (const hero of HEROES) {
    const pool = heroPools[hero];

    if (pool) {
      const { classes, excludedPitches, excludedSubtypes, exemption, talents } =
        pool;

      const matchesClasses = mustMatchAtLeastOneClass
        ? card.classes.some((cardClass) => classes.includes(cardClass))
        : card.classes.every((cardClass) => classes.includes(cardClass));
      const matchesClass =
        card.classes.length === 0 || matchesClasses || isMacro;

      const matchesHero = !card.hero || card.hero === hero;

      const matchesPitch =
        !excludedPitches ||
        !getIsDeckCard(card) ||
        !excludedPitches.includes(card.pitch);

      const identities = heroIdentities[hero] || [hero];
      const matchesSpecializations =
        !isSpecializationCard ||
        (card.specializations || []).some((specialization) =>
          identities.includes(specialization),
        ) ||
        (card.metatypes || []).some((metatype) =>
          identities.includes(metatype as unknown as Hero),
        );

      const matchesSubtypes =
        !excludedSubtypes ||
        !card.subtypes.some((cardSubtype) =>
          excludedSubtypes.includes(cardSubtype),
        );

      const matchesTalents =
        !card.talents ||
        card.talents.every((cardTalent) => talents.includes(cardTalent));

      const matchesDraftSet =
        !isMacro ||
        draftHeroIdentifiers.some((heroIdentifier) =>
          heroIdentifier.includes(getHeroIdentifier(hero)),
        );

      const matchesPool =
        matchesClass &&
        matchesHero &&
        matchesPitch &&
        matchesSpecializations &&
        matchesSubtypes &&
        matchesTalents &&
        matchesDraftSet;
      const isExempt = !!exemption && getIsExempt(exemption, card);
      // A hero's own card is theirs whatever its class line reads: Taylor's
      // reads Shapeshifter.
      const isOwnHeroCard = card.hero === hero;

      if (matchesPool || isExempt || isOwnHeroCard) {
        legalHeroes.push(hero);
      }
    }
  }

  legalHeroes.sort();

  return legalHeroes;
};

// How each hero-extra pair was reached, for explain(). The map the pass returns
// answers which heroes, never which card put the extra there.
const provisioningStepsByHero = new Map<Hero, Map<string, ProvisioningStep>>();

const addProvisionedExtra = (
  provisionedExtrasByHero: Map<Hero, Set<string>>,
  hero: Hero,
  createdExtraCardIdentifier: string,
  provisioningCardIdentifier: string,
) => {
  let provisionedExtras = provisionedExtrasByHero.get(hero);
  if (!provisionedExtras) {
    provisionedExtras = new Set<string>();
    provisionedExtrasByHero.set(hero, provisionedExtras);
  }

  const isProvisioned = provisionedExtras.has(createdExtraCardIdentifier);
  if (!isProvisioned) {
    provisionedExtras.add(createdExtraCardIdentifier);

    let provisioningSteps = provisioningStepsByHero.get(hero);
    if (!provisioningSteps) {
      provisioningSteps = new Map<string, ProvisioningStep>();
      provisioningStepsByHero.set(hero, provisioningSteps);
    }
    provisioningSteps.set(createdExtraCardIdentifier, {
      createdExtraCardIdentifier,
      provisioningCardIdentifier,
    });
  }
};

/**
 * The heroes each card is legal for, in two passes over the whole card list.
 *
 * Pass one settles class, talent and deckbuilding exemptions, which is the
 * whole rule for everything a deck is built from and for chosen extras. Pass
 * two hands each created extra to the heroes whose pool puts it into play,
 * reading the pools pass one produced. The order is what keeps the rule from
 * being circular: a hero's pool is decided by ordinary legality and never by
 * what it provisions, so the passes must not be merged.
 */
export const getLegalHeroesByCard = (
  cards: PoolCard[],
): Map<string, Hero[]> => {
  const legalHeroesByCardIdentifier = new Map<string, Hero[]>();
  const createdExtraCards: PoolCard[] = [];
  const provisionedExtrasByHero = new Map<Hero, Set<string>>();

  provisioningStepsByHero.clear();

  for (const card of cards) {
    if (getIsCreatedExtraCard(card)) {
      createdExtraCards.push(card);
    } else {
      const legalHeroes = getPoolHeroes(card);
      legalHeroesByCardIdentifier.set(card.cardIdentifier, legalHeroes);

      // A chosen extra is picked at deckbuilding rather than put into play, so
      // it provisions nothing.
      const provisionsExtras =
        !getIsChosenExtra(card) && (card.createdExtras || []).length > 0;

      if (provisionsExtras) {
        for (const hero of legalHeroes) {
          for (const createdExtraCardIdentifier of card.createdExtras || []) {
            addProvisionedExtra(
              provisionedExtrasByHero,
              hero,
              createdExtraCardIdentifier,
              card.cardIdentifier,
            );
          }
        }
      }
    }
  }

  const createdExtrasByCardIdentifier = new Map<string, string[]>();
  for (const card of createdExtraCards) {
    createdExtrasByCardIdentifier.set(
      card.cardIdentifier,
      card.createdExtras || [],
    );
  }

  // An extra that makes another extra brings it along, however long the chain.
  for (const [hero, provisionedExtras] of provisionedExtrasByHero) {
    const chain = [...provisionedExtras];

    while (chain.length > 0) {
      const provisioningCardIdentifier = chain.pop() as string;
      const chainedCardIdentifiers =
        createdExtrasByCardIdentifier.get(provisioningCardIdentifier) || [];

      for (const chainedCardIdentifier of chainedCardIdentifiers) {
        const isProvisioned = provisionedExtras.has(chainedCardIdentifier);

        if (!isProvisioned) {
          addProvisionedExtra(
            provisionedExtrasByHero,
            hero,
            chainedCardIdentifier,
            provisioningCardIdentifier,
          );
          chain.push(chainedCardIdentifier);
        }
      }
    }
  }

  for (const card of createdExtraCards) {
    const legalHeroes: Hero[] = [];

    for (const [hero, provisionedExtras] of provisionedExtrasByHero) {
      if (provisionedExtras.has(card.cardIdentifier)) {
        legalHeroes.push(hero);
      }
    }

    legalHeroes.sort();
    legalHeroesByCardIdentifier.set(card.cardIdentifier, legalHeroes);
  }

  return legalHeroesByCardIdentifier;
};

/**
 * The path by which a hero's pool provisions a created extra, from the pool
 * card to the extra, empty when the extra is illegal for that hero. Reads the
 * most recent `getLegalHeroesByCard` pass.
 */
export const explain = (
  hero: Hero,
  createdExtraCardIdentifier: string,
): ProvisioningStep[] => {
  const path: ProvisioningStep[] = [];
  const provisioningSteps = provisioningStepsByHero.get(hero);

  let step = provisioningSteps?.get(createdExtraCardIdentifier);
  while (step) {
    path.unshift(step);
    step = provisioningSteps?.get(step.provisioningCardIdentifier);
  }

  return path;
};
