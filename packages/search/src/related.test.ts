import { Card, Hero, Type } from "@flesh-and-blood/types";
import { cards } from "@flesh-and-blood/cards";
import { getRelatedCards, getTokensReferencedByCards } from "./related";
import { Keyword } from "@flesh-and-blood/types";

const toCardIdentifier = ({ cardIdentifier }: Card) => cardIdentifier;

describe("Related cards", () => {
  // Name, otherPitches, referencedBy, references
  const related = [
    ["Blizzard", 0, 0, 0],
    ["Blizzard Bolt", 2, 0, 1],
    ["Dawnblade", 0, 3, 0],
    ["Dawnblade, Resplendent", 0, 3, 0],
    ["Dorinthea, Quicksilver Prodigy", 0, 0, 1],
    ["Head Jab", 2, 12, 0],
    ["Muscle Mutt", 0, 0, 0],
    ["Open the Center", 2, 4, 3],
    ["Prismatic Shield", 2, 0, 1],
    ["Runechant", 0, 87, 0],
    ["Spectral Shield", 0, 33, 0],
    ["Tales of Adventure", 0, 0, 13],
  ];

  it.each(related)(
    "Gets related cards for %s: %i other pitches, %i referenced by, %i references",
    (cardName, otherPitchesCount, referencedByCount, referencesCount) => {
      const card = cards.find(({ name }) => name === cardName);
      const { otherPitches, referencedBy, references } = getRelatedCards(
        card,
        cards
      );

      if ((referencedByCount as number) < referencedBy.length) {
        console.log(referencedBy.map(toCardIdentifier));
      }

      if ((referencesCount as number) < references.length) {
        console.log(references.map(toCardIdentifier));
      }

      expect(otherPitches.length).toEqual(otherPitchesCount);
      expect(referencedBy.length).toEqual(referencedByCount);
      expect(references.length).toEqual(referencesCount);
    }
  );

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
  ];

  it.each(tokens)(
    "Gets referenced tokens",
    (referencingCardNames, expectedTokens) => {
      const referencingCards = cards.filter(({ name }) =>
        (referencingCardNames as unknown as string[]).includes(name)
      );
      const allTokens = cards.filter(({ cardIdentifier, keywords, types }) => {
        const isCrackedBauble = cardIdentifier === "cracked-bauble-yellow";
        const isEphemeral = keywords?.includes(Keyword.Ephemeral);
        const isToken = types.includes(Type.Token);

        return isCrackedBauble || isEphemeral || isToken;
      });

      const referencedTokens = getTokensReferencedByCards(
        referencingCards,
        allTokens
      );

      expect(referencedTokens.map(({ name }) => name).sort()).toEqual(
        (expectedTokens as unknown as string[]).sort()
      );
    }
  );

  const heroSpecificTokens: string[][][] = [
    [["Maxx Nitro"], [Hero.Maxx], ["Hyper Driver"]],
    [["Jump Start"], [Hero.Maxx], ["Hyper Driver"]],
    [["Jump Start"], [Hero.Dash], []],
    [["Jump Start"], [], []],
  ];

  it.each(heroSpecificTokens)(
    "Gets referenced tokens when there are hero limits",
    (referencingCardNames, heroes, expectedTokens) => {
      const referencingCards = cards.filter(({ name }) =>
        (referencingCardNames as unknown as string[]).includes(name)
      );
      const allTokens = cards.filter(({ types }) => types.includes(Type.Token));

      const hero = heroes.length > 0 ? (heroes[0] as Hero) : undefined;

      const referencedTokens = getTokensReferencedByCards(
        referencingCards,
        allTokens,
        hero
      );

      expect(referencedTokens.map(({ name }) => name).sort()).toEqual(
        (expectedTokens as unknown as string[]).sort()
      );
    }
  );
});
