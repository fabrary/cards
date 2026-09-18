import { describe, expect, it, xit } from "@jest/globals";
import { cards as cardsToPublish } from "../dist/index";
import { cards as publishedCards } from "latest-cards";
import {
  Card,
  CardRole,
  getCardRole,
  getPrint,
  Printing,
  Trait,
} from "@flesh-and-blood/types";

interface UpdatedComparison {
  toPublish: Card;
  published: Card;
}
const updated: (string | UpdatedComparison)[][] = [];
const removed: string[] = [];
for (const published of publishedCards) {
  const match = cardsToPublish.find(
    ({ cardIdentifier }) => published.cardIdentifier === cardIdentifier,
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
        cardIdentifier.replace(/-/g, "").match(/^[a-z0-9]+$/),
      ).toBeTruthy();
    },
  );
});

describe("No commas in images", () => {
  it.each(
    cardsToPublish.map(({ cardIdentifier, printings }) => [
      cardIdentifier,
      printings,
    ]),
  )("%s", (_, printings) => {
    for (const { image } of printings as unknown as Printing[]) {
      if (image) {
        expect(image.includes(",")).toBeFalsy();
      }
    }
  });
});

describe("All required fields present", () => {
  it.each(
    cardsToPublish.map((card) => [
      `${card.name} (${card.cardIdentifier}) ${card.setIdentifiers.join(",")}`,
      card,
    ]),
  )("%s", (_, card) => {
    const {
      defaultImage,
      firstReleaseDate,
      legalFormats,
      legalHeroes,
      printings,
      specialImage,
      subtypes,
      types,
      typeText,
    } = card as unknown as Card;
    expect(defaultImage).toBeTruthy();
    expect(defaultImage?.toLowerCase()).not.toEqual("undefined");
    expect(defaultImage?.toLowerCase()).not.toEqual("/");
    expect(firstReleaseDate).toBeTruthy();
    expect(legalFormats.length).toBeGreaterThanOrEqual(1);
    expect(legalHeroes.length).toBeGreaterThanOrEqual(1);
    expect(specialImage).toBeTruthy();
    expect(specialImage?.toLowerCase()).not.toEqual("undefined");
    expect(specialImage?.toLowerCase()).not.toEqual("/");
    expect(types.length || subtypes.length).toBeGreaterThan(0);
    expect(typeText).toBeTruthy();
    expect(printings.length).toBeGreaterThan(0);
  });

  it("Agents of Chaos", () => {
    const agentsOfChaos = cardsToPublish.filter(({ traits }) =>
      traits?.includes(Trait.AgentOfChaos),
    );
    expect(agentsOfChaos.length).toBeGreaterThanOrEqual(2);
  });
});

describe("Every card has a positively identified role", () => {
  // A card with no types and no card-back flag, typically a spoiler entered
  // without its types, matches no role test and would reach consumers
  // unclassified. This trips on the first such card.
  it("no card has an unknown role", () => {
    const unclassifiedCards = cardsToPublish
      .filter((card) => getCardRole(card) === CardRole.Unknown)
      .map(({ name, cardIdentifier }) => `${name} (${cardIdentifier})`);
    expect(unclassifiedCards).toEqual([]);
  });
});

describe("No card carries a class its type line does not name", () => {
  // The type line these cards print misspells their class, so the class they
  // carry is right and the line it is checked against is not. Fixing the
  // spelling belongs in the fork's CSVs, not here.
  const MISSPELLED_TYPE_LINES = [
    "double-strike-red",
    "parry-blade",
    "sharpened-senses-yellow",
    "volcanic-vice",
  ];

  // A class a card does not print is a class the transform invented. Spelling
  // out the whole classless state as an absence is what lets this hold: a
  // fallback handing every unclassed card a class trips it on the first one.
  it("no card gains a class", () => {
    const inventedClasses: string[] = [];
    for (const { cardIdentifier, classes, name, typeText } of cardsToPublish) {
      const isMisspelled = MISSPELLED_TYPE_LINES.includes(cardIdentifier);
      if (!isMisspelled) {
        for (const cardClass of classes) {
          if (!typeText.includes(cardClass)) {
            inventedClasses.push(
              `${name} (${cardIdentifier}) carries ${cardClass}, type line reads "${typeText}"`,
            );
          }
        }
      }
    }
    expect(inventedClasses).toEqual([]);
  });

  // An exemption outlives the misspelling it was written for: once the fork
  // spells the class right, the card belongs back under the invariant. This
  // turns red on the entry to delete rather than leaving it exempt forever.
  it("every exemption is still earned", () => {
    const stillMisspelled = MISSPELLED_TYPE_LINES.filter((cardIdentifier) => {
      const card = cardsToPublish.find(
        (published) => published.cardIdentifier === cardIdentifier,
      );
      let carriesAnUnnamedClass = false;
      if (card) {
        carriesAnUnnamedClass = card.classes.some(
          (cardClass) => !card.typeText.includes(cardClass),
        );
      }
      return carriesAnUnnamedClass;
    });
    expect(stillMisspelled).toEqual(MISSPELLED_TYPE_LINES);
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

describe("TCGplayer printings are complete", () => {
  it.each(
    cardsToPublish.map((card) => [
      `${card.name} (${card.cardIdentifier}) ${card.printings.map(({ print }) => print).join(",")}`,
      card,
    ]),
  )("%s", (_, card) => {
    const { printings } = card as unknown as Card;
    for (const { tcgplayer } of printings) {
      if (tcgplayer) {
        const printing = new URL(tcgplayer?.url || "").searchParams.get(
          "Printing",
        );
        expect(printing).toBeTruthy();
      }
    }
  });
});
