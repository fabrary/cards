import { describe, expect, it } from "@jest/globals";
import { Card, Format, getCanBeCreated, Hero } from "@flesh-and-blood/types";
import { cards } from "../dist/index";
import {
  getLegalHeroesByCard,
  getCardCreationChain,
} from "../scripts/Shared/legality";

const legalHeroesByCardIdentifier = getLegalHeroesByCard(cards);

const getLegalHeroes = (cardIdentifier: string) =>
  legalHeroesByCardIdentifier.get(cardIdentifier) as Hero[];

const getCard = (cardIdentifier: string) =>
  cards.find((card) => card.cardIdentifier === cardIdentifier) as Card;

describe("Hero pools", () => {
  it.each(Object.values(Hero))("%s has a pool", (hero: Hero) => {
    const pool = cards.filter(({ cardIdentifier }) =>
      getLegalHeroes(cardIdentifier).includes(hero),
    );

    expect(pool.length).toBeGreaterThan(0);
  });

  it.each([
    // The Librarian reads "cards with Tome in their name of any class".
    ["tome-of-quandaries-blue", Hero.Librarian],
    // Brutus reads "clash cards of any class".
    ["clash-of-mountains-red", Hero.Brutus],
    // Taylor reads "equipment of any class or talent".
    ["twelve-petal-kasaya", Hero.Taylor],
    // Shiyana reads "specialization cards of any hero".
    ["tales-of-adventure-blue", Hero.Shiyana],
    ["magrar", Hero.Shiyana],
  ])("%s is in the pool of %s", (cardIdentifier, hero) => {
    expect(getLegalHeroes(cardIdentifier)).toContain(hero);
  });

  it.each([
    // Tomeltai is a dragon, so only a substring match reads it as a tome.
    ["tomeltai", Hero.Librarian],
    ["invoke-tomeltai-red", Hero.Librarian],
  ])("%s is not in the pool of %s", (cardIdentifier, hero) => {
    expect(getLegalHeroes(cardIdentifier)).not.toContain(hero);
  });
});

const ARAKNI_DEMI_HEROES = [
  "arakni-black-widow",
  "arakni-funnel-web",
  "arakni-orb-weaver",
  "arakni-redback",
  "arakni-tarantula",
  "arakni-trap-door",
];

describe("Extras follow what a hero's pool creates", () => {
  it.each([
    // Yorick's specialization Tales of Adventure names the Ashwing, and Shiyana
    // may run any hero's specialization cards.
    ["aether-ashwing", Hero.Yorick],
    ["aether-ashwing", Hero.Shiyana],
    ["aether-ashwing", Hero.Dromai],
    // Dromai's hero card is the only one that makes an ash.
    ["ash", Hero.Dromai],
    // Future Sight creates the Sigil.
    ["sigil-of-fate", Hero.Blaze],
    // Orb Weaver Spinneret equips one.
    ["graphene-chelicera", Hero.Arakni],
    // The Mark keyword creates the token, and Uzuri runs Mark cards.
    ["marked", Hero.Uzuri],
    ["gate-to-iarathael", Hero.Viserai2],
    // Twelve Petal Kasaya is Ninja equipment, which Taylor may have.
    ["zen-state", Hero.Taylor],
    // Clash of Mountains is a Guardian clash card, which Brutus may have.
    ["seismic-surge", Hero.Brutus],
  ])("%s is legal for %s", (extraCardIdentifier, hero) => {
    expect(getLegalHeroes(extraCardIdentifier)).toContain(hero);
  });

  it.each([
    // Shiyana copies a hero rather than running their deck, and the player she
    // copies brought the ashes their own deck makes.
    ["ash", Hero.Shiyana],
    ["ash", Hero.Yorick],
    ["sigil-of-fate", Hero.Bravo],
    // Generic-classed tokens whose creators are all class-specific.
    ["eloquence", Hero.Bravo],
    ["courage", Hero.Bravo],
    ["diamond", Hero.Bravo],
    ["spellbane-aegis", Hero.Bravo],
  ])("%s is not legal for %s", (extraCardIdentifier, hero) => {
    expect(getLegalHeroes(extraCardIdentifier)).not.toContain(hero);
  });

  // Crackni's hero cards read "become a random Agent of Chaos", and so does
  // Mask of Deceit, which every Arakni may equip, Shiyana through any hero's
  // specialization cards and Taylor through equipment of any class.
  it.each(ARAKNI_DEMI_HEROES)(
    "%s is legal for every hero who can become one",
    (demiHeroCardIdentifier) => {
      expect(getLegalHeroes(demiHeroCardIdentifier)).toEqual([
        Hero.Arakni,
        Hero.Crackni,
        Hero.Shiyana,
        Hero.Slippy,
        Hero.Taylor,
      ]);
    },
  );

  // Tales of Adventure is the only card in a Bard pool that names an Ashwing.
  it("Gives the chain for the one card that creates an extra", () => {
    expect(getCardCreationChain(Hero.Yorick, "aether-ashwing")).toEqual([
      {
        createdExtraCardIdentifier: "aether-ashwing",
        creatingCardIdentifier: "tales-of-adventure-blue",
      },
    ]);
  });

  // Taylor may have equipment of any class, so Mask of Deceit becomes an Orb
  // Weaver, which equips the Chelicera.
  it("Gives every step of a chain running through an extra", () => {
    expect(getCardCreationChain(Hero.Taylor, "graphene-chelicera")).toEqual([
      {
        createdExtraCardIdentifier: "arakni-orb-weaver",
        creatingCardIdentifier: "mask-of-deceit",
      },
      {
        createdExtraCardIdentifier: "graphene-chelicera",
        creatingCardIdentifier: "arakni-orb-weaver",
      },
    ]);
  });

  it.each([
    ["ash", Hero.Dromai],
    ["seismic-surge", Hero.Brutus],
    ["zen-state", Hero.Taylor],
  ])("Gives the steps for %s for %s", (extraCardIdentifier, hero) => {
    const [{ createdExtraCardIdentifier, creatingCardIdentifier }] =
      getCardCreationChain(hero, extraCardIdentifier);

    expect(createdExtraCardIdentifier).toEqual(extraCardIdentifier);
    expect(getCard(creatingCardIdentifier).createdExtras).toContain(
      extraCardIdentifier,
    );
    expect(getLegalHeroes(creatingCardIdentifier)).toContain(hero);
  });

  it("Gives the steps for nothing for a hero the extra is illegal for", () => {
    expect(getCardCreationChain(Hero.Bravo, "diamond")).toEqual([]);
  });

  // Creation is the whole rule for created extras, so the published pools
  // and the extras have to agree in both directions: a new set's templating
  // cannot quietly hand a hero a token nothing in their pool makes, nor drop
  // one their pool does.
  it("Every created extra is legal for the heroes whose pool creates it", () => {
    const mismatches: string[] = [];

    for (const card of cards) {
      if (getCanBeCreated(card)) {
        const heroesCreatingExtra = new Set<Hero>();

        for (const creatingCard of cards) {
          const createsExtra = (creatingCard.createdExtras || []).includes(
            card.cardIdentifier,
          );

          if (createsExtra) {
            for (const hero of getLegalHeroes(creatingCard.cardIdentifier)) {
              heroesCreatingExtra.add(hero);
            }
          }
        }

        const legalHeroes = getLegalHeroes(card.cardIdentifier);
        for (const hero of legalHeroes) {
          if (!heroesCreatingExtra.has(hero)) {
            mismatches.push(`${card.cardIdentifier} is legal for ${hero}`);
          }
        }
        for (const hero of heroesCreatingExtra) {
          if (!legalHeroes.includes(hero)) {
            mismatches.push(`${card.cardIdentifier} is missing ${hero}`);
          }
        }
      }
    }

    expect(mismatches).toEqual([]);
  });
});

// The format sets a macro up rather than a card putting it into play, so a
// macro is the one extra class, talent and draft set still answer for.
describe("Macros follow class and talent", () => {
  it.each([
    ["omens-of-arcana", [Hero.Aurora, Hero.Oscilio, Hero.Zyggy]],
    [
      "sanctuary-of-aria",
      [Hero.Aurora, Hero.Florian, Hero.Oscilio, Hero.Verdance],
    ],
    [
      "treasure-island",
      [Hero.GravyBones, Hero.Marlynn, Hero.Puffin, Hero.Scurv],
    ],
  ])("%s is legal for its draft heroes", (macroCardIdentifier, heroes) => {
    expect(getLegalHeroes(macroCardIdentifier)).toEqual(heroes);
  });
});

describe("Format legality", () => {
  it.each(["corrupt-and-conquer-red", "open-the-gate-to-iarathael-red"])(
    "%s honors its Classic Constructed spoiler ban",
    (cardIdentifier) => {
      const card = getCard(cardIdentifier);

      expect(card.bannedFormats).toContain(Format.ClassicConstructed);
      expect(card.legalFormats).not.toContain(Format.ClassicConstructed);
    },
  );

  it("Never marks a card as both banned and legal in the same format", () => {
    const overlappingFormats = cards.flatMap((card) =>
      (card.bannedFormats ?? [])
        .filter((format) => card.legalFormats.includes(format))
        .map((format) => `${card.cardIdentifier}: ${format}`),
    );

    expect(overlappingFormats).toEqual([]);
  });
});
