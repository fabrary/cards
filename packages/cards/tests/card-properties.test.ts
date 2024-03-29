import { cards as cardsToPublish } from "../dist/index";
import { cards as publishedCards } from "latest-cards";
import { Card, getPrint } from "@flesh-and-blood/types";

interface UpdatedComparison {
  toPublish: Card;
  published: Card;
}
const updated: (string | UpdatedComparison)[][] = [];
const removed: string[] = [];
for (const published of publishedCards) {
  const match = cardsToPublish.find(
    ({ cardIdentifier }) => published.cardIdentifier === cardIdentifier
  );
  if (match) {
    const identifier = `${published.name} (${published.cardIdentifier})`;
    updated.push([identifier, { toPublish: match, published }]);
  } else {
    removed.push(`${published.name} (${published.cardIdentifier})`);
  }
}

describe("Check for unintentional updates", () => {
  xit.each(updated)("%s vs published", (_, comparison) => {
    const { toPublish, published } = comparison as UpdatedComparison;
    expect(toPublish).toEqual(published);
  });

  it.each(updated)("%s vs snapshot", (_, comparison) => {
    const { toPublish } = comparison as UpdatedComparison;
    expect(toPublish).toMatchSnapshot();
  });
});

describe("No special characters in cardIdentifier", () => {
  it.each(cardsToPublish.map(({ cardIdentifier }) => cardIdentifier))(
    "%s",
    (cardIdentifier) => {
      expect(
        cardIdentifier.replace(/-/g, "").match(/^[a-z0-9]+$/)
      ).toBeTruthy();
    }
  );
});

describe("All required fields present", () => {
  it.each(
    cardsToPublish.map((card) => [
      `${card.name} (${card.cardIdentifier}) ${card.setIdentifiers.join(",")}`,
      card,
    ])
  )("%s", (_, card) => {
    const { defaultImage, printings, specialImage, subtypes, types } =
      card as unknown as Card;
    expect(defaultImage).toBeTruthy();
    expect(specialImage).toBeTruthy();
    expect(types.length || subtypes.length).toBeGreaterThan(0);
    expect(printings.length).toBeGreaterThan(0);
  });
});

describe("No cards should be removed", () => {
  xit("Removed cards", () => {
    expect(removed).toHaveLength(0);
  });
});

describe("No duplicate identifiers", () => {
  it("Duplicate cardIdentifiers", () => {
    const duplicates: string[] = [];
    const cardIdentifiers = new Set();
    for (const { cardIdentifier } of cardsToPublish) {
      if (cardIdentifiers.has(cardIdentifier)) {
        duplicates.push(cardIdentifier);
      }
      cardIdentifiers.add(cardIdentifier);
    }
    expect(duplicates).toEqual([]);
    expect(cardIdentifiers.size).toEqual(cardsToPublish.length);
  });

  it("Duplicate printIdentifiers", () => {
    const duplicatePrintIdentifiers: string[] = [];
    const printIdentifiers = new Set();

    for (const { isCardBack, printings } of cardsToPublish) {
      if (!isCardBack) {
        for (const printing of printings) {
          const printIdentifier = getPrint(printing);
          if (printIdentifiers.has(printIdentifier)) {
            duplicatePrintIdentifiers.push(printIdentifier);
          } else {
            printIdentifiers.add(printIdentifier);
          }
        }
      }
    }

    expect(duplicatePrintIdentifiers).toEqual([]);
  });

  it("Duplicate images", () => {
    const duplicateImages: string[] = [];
    const images: { [key: string]: string } = {};

    for (const { cardIdentifier, isCardBack, printings } of cardsToPublish) {
      if (!isCardBack) {
        for (const { image } of printings) {
          if (image) {
            const matching = images[image];
            if (matching) {
              const isSameCard = matching === cardIdentifier;
              if (!isSameCard) {
                duplicateImages.push(image);
              }
            } else {
              images[image] = cardIdentifier;
            }
          }
        }
      }
    }

    expect(duplicateImages).toEqual([]);
  });
});
