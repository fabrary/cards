import { readFileSync } from "fs";
import { parse } from "papaparse";
import { cards as libraryCards } from "../dist/index";

const csv = readFileSync("src/cards.tsv", "utf8");
const parsed = parse(csv, {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
});
const parsedCards = parsed.data;

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

console.log(`
There are ${libraryCards.length} cards in dist/
There are ${parsedCards.length} cards in the source .tsv
There are ${parsedCards.length - libraryCards.length} missing in dist/

Cards missing from the library: ${cardsMissingFromLibrary}
`);
