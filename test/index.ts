import { readFileSync } from "fs";
import { parse } from "papaparse";
import { cards as libraryCards } from "../dist/index";
import { cards as publishedCards } from "fab-cards";

const csv = readFileSync("src/cards.csv", "utf8");
const parsed = parse(csv, {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
});
const parsedCards = parsed.data;

// Missing cards
const libraryCardNames = libraryCards
  .map((card) => card.name)
  .filter((name) => name !== undefined && name !== null && name !== "");

// @ts-ignore
const parsedCardNames = parsedCards.map(
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

console.log(`
There are ${publishedCardIdentifiers.length} published cards
There are ${libraryCards.length} cards to be published

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
There are ${parsedCards.length} cards in the source .csv
There are ${parsedCards.length - libraryCards.length} missing in dist/
${
  cardsMissingFromLibrary.length > 0
    ? `
Cards missing from the library: ${cardsMissingFromLibrary}
`
    : ``
}
`);
