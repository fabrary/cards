import { Card, Type } from "@flesh-and-blood/types";
import { cards } from "@flesh-and-blood/cards";
import { getRelatedCards, getTokensReferencedByCards } from "./related";

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
    ["Runechant", 0, 84, 0],
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
  ];

  it.each(tokens)(
    "Gets referenced tokens",
    (referencingCardNames, expectedTokens) => {
      const referencingCards = cards.filter(({ name }) =>
        (referencingCardNames as unknown as string[]).includes(name)
      );
      const allTokens = cards.filter(({ types }) => types.includes(Type.Token));

      const referencedTokens = getTokensReferencedByCards(
        referencingCards,
        allTokens
      );

      expect(referencedTokens.map(({ name }) => name).sort()).toEqual(
        (expectedTokens as unknown as string[]).sort()
      );
    }
  );
});
