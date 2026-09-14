import { describe, expect, it } from "@jest/globals";
import { getCanBeExtra, Trait } from "@flesh-and-blood/types";
import { cards } from "@flesh-and-blood/cards";
import { getTokensReferencedByCards } from "../src/related";
import Search from "../src/search";

const ALL_TOKENS = cards.filter(getCanBeExtra);

describe("Related cards", () => {
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
});
