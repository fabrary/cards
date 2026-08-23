import { describe, expect, it } from "@jest/globals";
import { Card, getCanBeExtra, Hero, Trait } from "@flesh-and-blood/types";
import { cards } from "@flesh-and-blood/cards";
import {
  getCardsByReferencedCardIdentifier,
  getOtherPitches,
  getReferencedCards,
  getTokensReferencedByCards,
} from "../src/related";
import Search from "../src/search";

const ALL_TOKENS = cards.filter(getCanBeExtra);

describe("Related cards", () => {
  const cardsByReferencedCardIdentifier =
    getCardsByReferencedCardIdentifier(cards);

  // Name, otherPitches, referencedBy, references
  const related = [
    ["Blizzard", 0, 0, 0],
    ["Blizzard Bolt", 2, 0, 1],
    ["Dawnblade", 0, 3, 0],
    ["Dawnblade, Resplendent", 0, 4, 0],
    ["Dorinthea, Quicksilver Prodigy", 0, 1, 1],
    ["Head Jab", 2, 12, 0],
    ["Marked", 0, 50, 0],
    ["Muscle Mutt", 0, 0, 0],
    ["Open the Center", 2, 4, 3],
    ["Prismatic Shield", 2, 0, 1],
    ["Runechant", 0, 131, 0],
    ["Spectral Shield", 0, 57, 0],
    ["Tales of Adventure", 0, 0, 13],
    ["Seismic Surge", 0, 69, 0],
  ];

  it.each(related)(
    "Gets related cards for %s: %i other pitches, %i referenced by, %i references",
    (cardName, otherPitchesCount, referencedByCount, referencesCount) => {
      const card = cards.find(({ name }) => name === cardName) as Card;
      const otherPitches = getOtherPitches(card, cards);
      const referencedBy =
        cardsByReferencedCardIdentifier.get(card.cardIdentifier) || [];
      const references = getReferencedCards(card, cards);

      expect(otherPitches.length).toEqual(otherPitchesCount);
      expect(referencedBy.length).toBeGreaterThanOrEqual(
        referencedByCount as number,
      );
      expect(references.length).toBeGreaterThanOrEqual(
        referencesCount as number,
      );
    },
  );

  // A hero's specialization cards say so in their own field, so they never
  // reach the hero through its name.
  it.each([
    ["Viserai", Hero.Viserai],
    ["Yorick, Weaver of Tales", Hero.Yorick],
  ])("No specialization card references %s", (heroCardName, hero) => {
    const heroCard = cards.find(({ name }) => name === heroCardName) as Card;
    const referencedBy =
      cardsByReferencedCardIdentifier.get(heroCard.cardIdentifier) || [];
    const specializationCards = referencedBy.filter(({ specializations }) =>
      (specializations || []).includes(hero as Hero),
    );

    expect(specializationCards).toEqual([]);
  });

  const tokens: string[][][] = [
    [["Swing Big", "Civic Steps"], ["Quicken"]],
    [
      ["Arctic Incarceration", "Civic Duty"],
      ["Frostbite", "Vigor"],
    ],
    [
      ["Jinglewood, Smash Hit", "Spoils of War"],
      ["Copper", "Might", "Quicken", "Vigor"],
    ],
    [
      ["Tales of Adventure"],
      [
        "Aether Ashwing",
        "Embodiment of Earth",
        "Embodiment of Lightning",
        "Ponder",
        "Quicken",
        "Runechant",
        "Seismic Surge",
        "Soul Shackle",
        "Spectral Shield",
        "Zen State",
        "Copper",
        "Silver",
        "Gold",
      ],
    ],
    [["Cash In"], []],
    [["Cash In", "Crown of Dominion"], ["Gold"]],
    [["Squizzy & Floof"], ["Cracked Bauble", "Gold"]],
    [["Shitty Xmas Present"], ["Cracked Bauble"]],
    [["Pulverize"], ["Seismic Surge"]],
    [["Star Struck"], ["Seismic Surge"]],
    [["Golden Skywarden"], ["Gold"]],
    [["Cosmic Duality"], ["Lightning Flow"]],
    [["Static Shock"], []],
    [["Shimmer of the Blade"], ["Blade Dance"]],
  ];

  it.each(tokens)(
    "Gets referenced tokens for %s",
    (referencingCardNames, expectedTokens) => {
      const referencingCards = cards.filter(({ name }) =>
        (referencingCardNames as unknown as string[]).includes(name),
      );

      const referencedTokens = getTokensReferencedByCards(
        referencingCards,
        ALL_TOKENS,
      );

      const shouldExpectTokens = expectedTokens.length > 0;
      if (shouldExpectTokens) {
        expect(referencedTokens.map(({ name }) => name).sort()).toEqual(
          (expectedTokens as unknown as string[]).sort(),
        );
      } else {
        expect(referencedTokens.length).toEqual(0);
      }
    },
  );

  const shiyanaTokens = [
    "Embodiment of Lightning",
    "Seismic Surge",
    "Spellbane Aegis",
  ];
  it("Gets all tokens for Shiyana", () => {
    const cardSearch = new Search(cards);

    const { searchResults } = cardSearch.search(`l:shiyana`);
    const tokens = searchResults.filter(getCanBeExtra);

    const referencingCards = searchResults.filter(
      ({ specializations }) => !!specializations && specializations.length > 0,
    );

    const referencedTokens = getTokensReferencedByCards(
      referencingCards,
      tokens,
    );

    const referencedTokenNames = referencedTokens.map(({ name }) => name);

    for (const expectedToken of shiyanaTokens) {
      expect(referencedTokenNames).toContain(expectedToken);
    }
  });

  const yorickTokens = [
    "Aether Ashwing",
    "Embodiment of Earth",
    "Embodiment of Lightning",
    "Ponder",
    "Quicken",
    "Runechant",
    "Seismic Surge",
    "Soul Shackle",
    "Spectral Shield",
    "Zen State",
  ];
  it("Gets all tokens for Yorick", () => {
    const cardSearch = new Search(cards);

    const { searchResults } = cardSearch.search(`l:yorick`);
    const tokens = searchResults.filter(getCanBeExtra);

    const referencedTokens = getTokensReferencedByCards(searchResults, tokens);

    const referencedTokenNames = referencedTokens.map(({ name }) => name);

    for (const expectedToken of yorickTokens) {
      expect(referencedTokenNames).toContain(expectedToken);
    }
  });

  const heroSpecificTokens: string[][][] = [
    [["Maxx Nitro"], [Hero.Maxx], ["Hyper Driver"]],
    [["Jump Start"], [Hero.Maxx], ["Hyper Driver"]],
    [["Jump Start"], [Hero.Dash], []],
    [["Jump Start"], [], []],
  ];

  it.each(heroSpecificTokens)(
    "Gets referenced tokens when there are hero limits",
    (referencingCardNames, heroes, expectedTokens) => {
      const referencingCards = cards.filter(
        ({ hero, name }) =>
          (referencingCardNames as unknown as string[]).includes(name) ||
          (!!hero && heroes.includes(hero)),
      );

      const hero = heroes.length > 0 ? (heroes[0] as Hero) : undefined;

      const referencedTokens = getTokensReferencedByCards(
        referencingCards,
        ALL_TOKENS,
        hero,
      );

      expect(referencedTokens.map(({ name }) => name).sort()).toEqual(
        (expectedTokens as unknown as string[]).sort(),
      );
    },
  );

  it("Gets the Agent of Chaos tokens for Arakni", () => {
    const cardSearch = new Search(cards);
    const agentsOfChaos = cards
      .filter(({ traits }) => !!traits && traits.includes(Trait.AgentOfChaos))
      .map(({ name }) => name);

    const { searchResults } = cardSearch.search(`l:crackni t:hero`);

    const referencedTokens = getTokensReferencedByCards(
      searchResults,
      ALL_TOKENS,
      Hero.Crackni,
    );

    const referencedTokenNames = referencedTokens.map(({ name }) => name);

    expect(agentsOfChaos.length).toBeGreaterThanOrEqual(2);
    expect(referencedTokenNames.length).toEqual(agentsOfChaos.length);

    for (const expectedToken of agentsOfChaos) {
      expect(referencedTokenNames).toContain(expectedToken);
    }
  });

  it("Gets Arakni heroes for Agents of Chaos", () => {
    const cardSearch = new Search(cards);
    const agentsOfChaos = cards.filter(
      ({ traits }) => !!traits && traits.includes(Trait.AgentOfChaos),
    );

    const { searchResults: referencesAgentOfChaos } = cardSearch.search(
      `text:"agent of chaos"`,
    );
    const { searchResults: legalCards } =
      cardSearch.search(`l:crackni c:assassin`);
    const legalCardsByReferencedCardIdentifier =
      getCardsByReferencedCardIdentifier(legalCards);

    // Naming the group names every card in it.
    for (const agent of agentsOfChaos) {
      const referencedBy =
        legalCardsByReferencedCardIdentifier.get(agent.cardIdentifier) || [];
      const referencedByIdentifiers = referencedBy.map(
        ({ cardIdentifier }) => cardIdentifier,
      );

      for (const { cardIdentifier } of referencesAgentOfChaos) {
        expect(referencedByIdentifiers).toContain(cardIdentifier);
      }
    }
  });
});
