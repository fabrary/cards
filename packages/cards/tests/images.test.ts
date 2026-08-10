import { describe, expect, it } from "@jest/globals";
import { cards } from "../dist/index";

const imagesAndSets: { [key: string]: Set<string> } = {};
for (const { cardIdentifier, printings } of cards) {
  for (const { image } of printings) {
    if (image) {
      const matching = imagesAndSets[image];

      if (matching) {
        matching.add(cardIdentifier);
      } else {
        imagesAndSets[image] = new Set([cardIdentifier]);
      }
    }
  }
}

describe("All images are unique", () => {
  it.each(Object.keys(imagesAndSets))("%s", (image) => {
    const imageAndSets = imagesAndSets[image];

    const setsArray = Array.from(imageAndSets);

    expect(setsArray).toEqual([setsArray[0]]);
  });
});

// The check above is cross-card only: two printings of ONE card sharing an image still map to a
// single cardIdentifier, so a printing collapsed onto its sibling's art passes it. Cardvault serves
// a distinct face per printing, so within a card an image belongs to exactly one printing, and a
// shared one means a printing lost its own art (a foil showing the base image for example).
const collapsedPrintsByCard: { [cardIdentifier: string]: string[] } = {};
for (const { cardIdentifier, printings } of cards) {
  const printsByImage: { [image: string]: string[] } = {};
  for (const { image, print } of printings) {
    if (image) {
      const matching = printsByImage[image];

      if (matching) {
        matching.push(print);
      } else {
        printsByImage[image] = [print];
      }
    }
  }

  const collapsed: string[] = [];
  for (const [image, prints] of Object.entries(printsByImage)) {
    if (prints.length > 1) {
      collapsed.push(`${image} shared by ${prints.join(", ")}`);
    }
  }
  collapsedPrintsByCard[cardIdentifier] = collapsed;
}

describe("No two printings of a card share an image", () => {
  it.each(Object.keys(collapsedPrintsByCard))("%s", (cardIdentifier) => {
    expect(collapsedPrintsByCard[cardIdentifier]).toEqual([]);
  });
});

describe("All cards have default and special images", () => {
  it.each(cards.map(({ cardIdentifier }) => cardIdentifier))(
    "%s",
    (cardIdentifier) => {
      const card = cards.find((card) => card.cardIdentifier === cardIdentifier);

      expect(card?.defaultImage).not.toContain("HP");
      expect(card?.specialImage).not.toContain("HP");
    },
  );
});
