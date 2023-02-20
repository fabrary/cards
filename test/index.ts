import { readFileSync } from "fs";
import { parse } from "papaparse";
import { cards as cardsToPublish } from "../dist/index";
import { Card as LibraryCard } from "../src/interfaces";
import { Card, cards as publishedCards } from "fab-cards";

const csv = readFileSync("src/card.csv", "utf8");
const parsed = parse(csv, {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
});
const parsedCards = parsed.data;

const csvSpoilers = readFileSync("src/spoilers.csv", "utf8");
const parsedSpoilers = parse(csvSpoilers, {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
});
const parsedCardsSpoilers = parsedSpoilers.data.filter(
  (card) => !!(card as { Name: string }).Name
);
const totalCards = [...parsedCards, ...parsedCardsSpoilers];

// Missing cards
const libraryCardNames = cardsToPublish
  .map((card) => card.name)
  .filter((name) => name !== undefined && name !== null && name !== "");

// @ts-ignore
const parsedCardNames = totalCards.map(
  (card) => (card as { Name: string }).Name
);
const cardsMissingFromLibrary = parsedCardNames.filter(
  (name) => !libraryCardNames.includes(name)
);

// Cards with special characters in identifier
const libraryCardIdentifiers = cardsToPublish.map(
  (card) => card.cardIdentifier
);

const cardIdentifiersWithNonAlphanumeric = libraryCardIdentifiers.filter(
  (cardIdentifier) =>
    cardIdentifier.replace(/-/g, "").match(/^[a-z]+$/) === null
);

// Cards with null types
const cardsWithoutTypes = cardsToPublish
  .filter(({ types }) => !types)
  .map(({ cardIdentifier }) => cardIdentifier);

// Cards added/removed from library
// @ts-ignore
Array.prototype.diff = function (arr2) {
  return this.filter((x) => !arr2.includes(x));
};
const publishedCardIdentifiers = publishedCards.map(
  (card) => card.cardIdentifier
);
//@ts-ignore
const differentIdentifiers = publishedCardIdentifiers.diff(
  libraryCardIdentifiers
);
// @ts-ignore
const addedIdentifiers = libraryCardIdentifiers.diff(publishedCardIdentifiers);

// Cards with different properties
interface CardDifference {
  property: string;
  toPublish: any;
  published: any;
}
interface CardWithDifference {
  differences: CardDifference[];
  toPublish: LibraryCard;
  published: Card;
}
const cardsWithDifferences: CardWithDifference[] = [];
const isPropertySame = (
  readyToPublish: LibraryCard,
  published: Card,
  property: string,
  differences: CardDifference[]
) => {
  const toPublishProperty = readyToPublish[property];
  const publishedProperty = published[property];
  const isSame =
    (!toPublishProperty && !publishedProperty) ||
    toPublishProperty === publishedProperty;
  if (!isSame) {
    differences.push({
      property,
      toPublish: toPublishProperty,
      published: publishedProperty,
    });
  }
  return isSame;
};
const isArrayPropertySame = (
  library: LibraryCard,
  published: Card,
  property: string,
  differences: CardDifference[]
) => {
  const libraryProperty = library[property];
  const publishedProperty = published[property];
  const isSame =
    (!libraryProperty && !publishedProperty) ||
    ((libraryProperty?.length || 0) === (publishedProperty?.length || 0) &&
      libraryProperty.sort().join() === publishedProperty.sort().join());
  if (!isSame) {
    differences.push({
      property,
      toPublish: libraryProperty,
      published: publishedProperty,
    });
  }
  return isSame;
};
for (const published of publishedCards) {
  const toPublish = cardsToPublish.find(
    (library) => library.cardIdentifier === published.cardIdentifier
  );
  if (toPublish) {
    const differences: CardDifference[] = [];
    const same =
      isArrayPropertySame(toPublish, published, "classes", differences) &&
      isPropertySame(toPublish, published, "cost", differences) &&
      isPropertySame(toPublish, published, "defense", differences) &&
      isPropertySame(toPublish, published, "defaultImageName", differences) &&
      isPropertySame(toPublish, published, "functionalText", differences) &&
      isArrayPropertySame(toPublish, published, "keywords", differences) &&
      isPropertySame(toPublish, published, "name", differences) &&
      isPropertySame(toPublish, published, "pitch", differences) &&
      isPropertySame(toPublish, published, "power", differences) &&
      isArrayPropertySame(toPublish, published, "rarities", differences) &&
      isArrayPropertySame(
        toPublish,
        published,
        "restrictedFormats",
        differences
      ) &&
      isArrayPropertySame(
        toPublish,
        published,
        "setIdentifiers",
        differences
      ) &&
      isPropertySame(toPublish, published, "specialImageName", differences) &&
      isArrayPropertySame(toPublish, published, "types", differences);
    if (!same) {
      cardsWithDifferences.push({ differences, toPublish, published });
    }
  }
}

const difference = totalCards.length - cardsToPublish.length;
const missing = difference < 0;
const added = difference > 0;

console.log(`
There are ${publishedCardIdentifiers.length} published cards
There are ${cardsToPublish.length} cards to be published
${
  addedIdentifiers.length > 0
    ? `
New cards: \n${addedIdentifiers.join("\n")}`
    : ``
}

There are ${differentIdentifiers.length} cards with different identifiers
${
  differentIdentifiers.length > 0
    ? `
Cards with different identifiers: ${differentIdentifiers}
`
    : ``
}

There are ${
  cardIdentifiersWithNonAlphanumeric.length
} cards with special characters in dist/
${
  cardIdentifiersWithNonAlphanumeric.length > 0
    ? `
Cards with special characters: ${cardIdentifiersWithNonAlphanumeric}
`
    : ``
}

There are ${cardsWithoutTypes.length} cards without types in dist/
${
  cardsWithoutTypes.length > 0
    ? `
Cards without types: ${cardsWithoutTypes}
`
    : ``
}

There are ${cardsToPublish.length} cards in dist/
There are ${totalCards.length} cards in the source csvs
${missing ? `There are ${missing} missing in dist/` : ``}
${added ? `There are new cards in dist/` : ``}
${
  cardsMissingFromLibrary.length > 0
    ? `
Cards missing from the library: ${cardsMissingFromLibrary.join(", ")}
`
    : ``
}

There are ${cardsWithDifferences.length} cards with differences in dist/
${
  cardsWithDifferences.length > 0
    ? `
Cards with differences:
${cardsWithDifferences
  .map(
    ({ differences, toPublish, published }) =>
      `${differences.map(
        (difference) => `${JSON.stringify(difference)}\n`
      )}${JSON.stringify({
        published,
      })}\n${JSON.stringify({ toPublish })}`
  )
  .join("\n\n\n")}`
    : ``
}
`);
