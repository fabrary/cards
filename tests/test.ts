import { cards as cardsToPublish, Card as NewCard } from "../dist/index";
import { Card, cards as publishedCards } from "fab-cards";

interface UpdatedComparison {
  toPublish: NewCard;
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
  it.each(updated)("%s", (_, comparison) => {
    const { toPublish, published } = comparison as UpdatedComparison;
    // expect(toPublish).toEqual(published);
    expect(toPublish).toMatchSnapshot();
  });
});

describe("Check for special characters in cardIdentifier", () => {
  it.each(cardsToPublish.map(({ cardIdentifier }) => cardIdentifier))(
    "%s",
    (cardIdentifier) => {
      expect(cardIdentifier.replace(/-/g, "").match(/^[a-z]+$/)).toBeTruthy();
    }
  );
});

describe("Ensure all required fields present", () => {
  it.each(
    cardsToPublish.map((card) => [
      `${card.name} (${card.cardIdentifier})`,
      card,
    ])
  )("%s", (_, card) => {
    const { defaultImage, specialImage, subtypes, types } =
      card as unknown as NewCard;
    expect(defaultImage).toBeTruthy();
    expect(specialImage).toBeTruthy();
    expect(types.length || subtypes.length).toBeGreaterThan(0);
  });
});

describe("No cards should be removed", () => {
  it("Removed cards", () => {
    expect(removed).toHaveLength(0);
  });
});
