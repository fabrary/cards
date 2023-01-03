import { readFileSync } from "fs";
import { parse } from "papaparse";
import { cards as libraryCards } from "../dist/index";
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
const parsedCardsSpoilers = parsedSpoilers.data;
const totalCards = [...parsedCards, parsedCardsSpoilers];

// Missing cards
const libraryCardNames = libraryCards
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
const libraryCardIdentifiers = libraryCards.map((card) => card.cardIdentifier);

const cardIdentifiersWithNonAlphanumeric = libraryCardIdentifiers.filter(
  (cardIdentifier) =>
    cardIdentifier.replace(/-/g, "").match(/^[a-z]+$/) === null
);

// Cards with null types
const cardsWithoutTypes = libraryCards
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
  library: any;
  published: any;
}
interface CardWithDifference {
  differences: CardDifference[];
  library: LibraryCard;
  published: Card;
}
const cardsWithDifferences: CardWithDifference[] = [];
const isPropertySame = (
  library: LibraryCard,
  published: Card,
  property: string,
  differences: CardDifference[]
) => {
  const libraryProperty = library[property];
  const publishedProperty = published[property];
  const isSame =
    (!libraryProperty && !publishedProperty) ||
    libraryProperty === publishedProperty;
  if (!isSame) {
    differences.push({
      property,
      library: libraryProperty,
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
      library: libraryProperty,
      published: publishedProperty,
    });
  }
  return isSame;
};
for (const published of publishedCards) {
  const library = libraryCards.find(
    (library) => library.cardIdentifier === published.cardIdentifier
  );
  if (library) {
    const differences: CardDifference[] = [];
    const same =
      // @ts-ignore
      isArrayPropertySame(library, published, "classes", differences) &&
      // @ts-ignore
      isPropertySame(library, published, "cost", differences) &&
      // @ts-ignore
      isPropertySame(library, published, "defense", differences) &&
      // @ts-ignore
      isPropertySame(library, published, "defaultImageName", differences) &&
      // @ts-ignore
      isPropertySame(library, published, "functionalText", differences) &&
      // @ts-ignore
      isArrayPropertySame(library, published, "keywords", differences) &&
      // @ts-ignore
      isPropertySame(library, published, "name", differences) &&
      // @ts-ignore
      isPropertySame(library, published, "pitch", differences) &&
      // @ts-ignore
      isPropertySame(library, published, "power", differences) &&
      // @ts-ignore
      isArrayPropertySame(library, published, "rarities", differences) &&
      // @ts-ignore
      isPropertySame(library, published, "specialImageName", differences) &&
      // @ts-ignore
      isArrayPropertySame(library, published, "types", differences);
    if (!same) {
      // @ts-ignore
      cardsWithDifferences.push({ differences, library, published });
    }
  }
}

const difference = totalCards.length - libraryCards.length;
const missing = difference < 0;
const added = difference > 0;

console.log(`
There are ${publishedCardIdentifiers.length} published cards
There are ${libraryCards.length} cards to be published
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

There are ${libraryCards.length} cards in dist/
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
    ({ differences, library, published }) =>
      `${differences.map(
        (difference) => `${JSON.stringify(difference)}\n`
      )}${JSON.stringify({
        published,
      })}\n${JSON.stringify({ library })}`
  )
  .join("\n\n\n")}`
    : ``
}
`);
