import { describe, expect, it } from "@jest/globals";
import { Card, getIsChosenExtra, Hero } from "@flesh-and-blood/types";
import { cards } from "../dist/index";
import {
  explain,
  getIsCreatedExtraCard,
  getLegalHeroesByCard,
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

describe("Created extras follow provisioning", () => {
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

  // Tales of Adventure is the only card in a Bard pool that names an Ashwing.
  it("explains the one card that provisions an extra", () => {
    expect(explain(Hero.Yorick, "aether-ashwing")).toEqual([
      {
        createdExtraCardIdentifier: "aether-ashwing",
        provisioningCardIdentifier: "tales-of-adventure-blue",
      },
    ]);
  });

  it.each([
    ["ash", Hero.Dromai],
    ["seismic-surge", Hero.Brutus],
    ["zen-state", Hero.Taylor],
  ])("explains %s for %s", (extraCardIdentifier, hero) => {
    const [{ createdExtraCardIdentifier, provisioningCardIdentifier }] =
      explain(hero, extraCardIdentifier);

    expect(createdExtraCardIdentifier).toEqual(extraCardIdentifier);
    expect(getCard(provisioningCardIdentifier).createdExtras).toContain(
      extraCardIdentifier,
    );
    expect(getLegalHeroes(provisioningCardIdentifier)).toContain(hero);
  });

  it("explains nothing for a hero the extra is illegal for", () => {
    expect(explain(Hero.Bravo, "diamond")).toEqual([]);
  });

  // Provisioning is the whole rule for created extras, so the published pools
  // and the extras have to agree in both directions: a new set's templating
  // cannot quietly hand a hero a token nothing in their pool makes, nor drop
  // one their pool does.
  it("Every created extra is legal for the heroes whose pool provisions it", () => {
    const mismatches: string[] = [];
    // A chosen extra is picked at deckbuilding rather than put into play, so it
    // provisions nothing; every other card in a pool does.
    const provisioningCards = cards.filter((card) => !getIsChosenExtra(card));

    for (const card of cards) {
      if (getIsCreatedExtraCard(card)) {
        const provisionedHeroes = new Set<Hero>();

        for (const provisioningCard of provisioningCards) {
          const provisionsExtra = (
            provisioningCard.createdExtras || []
          ).includes(card.cardIdentifier);

          if (provisionsExtra) {
            for (const hero of getLegalHeroes(
              provisioningCard.cardIdentifier,
            )) {
              provisionedHeroes.add(hero);
            }
          }
        }

        const legalHeroes = getLegalHeroes(card.cardIdentifier);
        for (const hero of legalHeroes) {
          if (!provisionedHeroes.has(hero)) {
            mismatches.push(`${card.cardIdentifier} is legal for ${hero}`);
          }
        }
        for (const hero of provisionedHeroes) {
          if (!legalHeroes.includes(hero)) {
            mismatches.push(`${card.cardIdentifier} is missing ${hero}`);
          }
        }
      }
    }

    expect(mismatches).toEqual([]);
  });
});

describe("Chosen extras follow class and talent", () => {
  // Nothing puts a demi-hero into play, so provisioning is silent about them
  // and Arakni keeps the ones she picks at deckbuilding.
  it.each([
    "arakni-black-widow",
    "arakni-funnel-web",
    "arakni-orb-weaver",
    "arakni-redback",
    "arakni-tarantula",
    "arakni-trap-door",
  ])("%s is legal for every Arakni", (demiHeroCardIdentifier) => {
    expect(getLegalHeroes(demiHeroCardIdentifier)).toEqual([
      Hero.Arakni,
      Hero.Crackni,
      Hero.Slippy,
    ]);
  });

  // A macro belongs to the heroes its draft set is played with.
  it.each([
    ["omens-of-arcana", [Hero.Aurora, Hero.Oscilio, Hero.Zyggy]],
    [
      "sanctuary-of-aria",
      [Hero.Aurora, Hero.Florian, Hero.Oscilio, Hero.Verdance],
    ],
  ])("%s is legal for its draft heroes", (macroCardIdentifier, heroes) => {
    expect(getLegalHeroes(macroCardIdentifier)).toEqual(heroes);
  });
});
