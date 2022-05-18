import { readFileSync } from "fs";
import { parse } from "papaparse";
import { cards as libraryCards } from "../dist/index";

const csv = readFileSync("src/card.tsv", "utf8");
const parsed = parse(csv, {
  header: true,
  dynamicTyping: true,
});
const parsedCards = parsed.data;

const libraryCardNames = libraryCards.map((card) => card.name);
// @ts-ignore
const parsedCardNames = parsedCards.map((card) => card.Name);
const cardsMissingFromLibrary = parsedCardNames.filter(
  (name) => !libraryCardNames.includes(name)
);

console.log(`
There are ${libraryCards.length} cards in dist/
There are ${parsedCards.length} cards in the source .tsv
There are ${parsedCards.length - libraryCards.length} missing in dist/

Cards missing from the library: ${cardsMissingFromLibrary}
`);
