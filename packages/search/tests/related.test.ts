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

  // Only the pitch siblings carry a count: search owns that matching. The two
  // reference relations are card data, asserted exactly in the cards package,
  // so what is worth pinning here is that reading them back agrees with the
  // fields rather than how many any one card has.
  const otherPitchCounts = [
    ["Blizzard", 0],
    ["Blizzard Bolt", 2],
    ["Dawnblade", 0],
    ["Head Jab", 2],
    ["Open the Center", 2],
    ["Prismatic Shield", 2],
    ["Runechant", 0],
  ];

  it.each(otherPitchCounts)(
    "Gets %i other pitches for %s",
    (cardName, otherPitchCount) => {
      const card = cards.find(({ name }) => name === cardName) as Card;

      expect(getOtherPitches(card, cards).length).toEqual(otherPitchCount);
    },
  );

  it("Reads back every card named by referencedCards", () => {
    const mismatched: string[] = [];

    for (const card of cards) {
      const referencedCardIdentifiers = getReferencedCards(card, cards)
        .map(({ cardIdentifier }) => cardIdentifier)
        .sort();
      const expectedCardIdentifiers = [...(card.referencedCards || [])].sort();

      const matchesField =
        referencedCardIdentifiers.join() === expectedCardIdentifiers.join();
      if (!matchesField) {
        mismatched.push(card.cardIdentifier);
      }
    }

    expect(mismatched).toEqual([]);
  });

  it("Indexes every reference in the other direction", () => {
    const missing: string[] = [];

    for (const card of cards) {
      for (const referencedCardIdentifier of card.referencedCards || []) {
        const referencedBy =
          cardsByReferencedCardIdentifier.get(referencedCardIdentifier) || [];
        const isIndexed = referencedBy.some(
          ({ cardIdentifier }) => cardIdentifier === card.cardIdentifier,
        );

        if (!isIndexed) {
          missing.push(`${card.cardIdentifier} -> ${referencedCardIdentifier}`);
        }
      }
    }

    expect(missing).toEqual([]);
  });

  it("Indexes nothing the fields do not name", () => {
    const unexpected: string[] = [];

    for (const [
      referencedCardIdentifier,
      referencedBy,
    ] of cardsByReferencedCardIdentifier) {
      for (const card of referencedBy) {
        const namesIt = (card.referencedCards || []).includes(
          referencedCardIdentifier,
        );

        if (!namesIt) {
          unexpected.push(
            `${card.cardIdentifier} -> ${referencedCardIdentifier}`,
          );
        }
      }
    }

    expect(unexpected).toEqual([]);
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

  // A hero brings what its own card creates, so the hero card has to be among
  // the cards: naming Maxx is what makes a Hyper Driver hers, and Jump Start
  // only interacts with one.
  const heroCardTokens: string[][][] = [
    [["Maxx Nitro"], ["Hyper Driver"]],
    [["Maxx Nitro", "Jump Start"], ["Hyper Driver"]],
    [["Dash", "Jump Start"], []],
    [["Jump Start"], []],
  ];

  it.each(heroCardTokens)(
    "Gets %s tokens from the cards themselves",
    (referencingCardNames, expectedTokens) => {
      const referencingCards = cards.filter(({ name }) =>
        (referencingCardNames as unknown as string[]).includes(name),
      );

      const referencedTokens = getTokensReferencedByCards(
        referencingCards,
        ALL_TOKENS,
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
