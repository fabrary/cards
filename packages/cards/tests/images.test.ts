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

describe("All cards have default and special images", () => {
  it.each(cards.map(({ cardIdentifier }) => cardIdentifier))(
    "%s",
    (cardIdentifier) => {
      const card = cards.find((card) => card.cardIdentifier === cardIdentifier);

      expect(card?.defaultImage).not.toContain("HP");
      expect(card?.specialImage).not.toContain("HP");
    }
  );
});
