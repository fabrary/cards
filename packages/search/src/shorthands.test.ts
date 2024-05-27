import { cards } from "@flesh-and-blood/cards";
import { shorthands } from "./shorthands";
import Search from "./search";

describe("Shorthands", () => {
  const cardSearch = new Search(cards);

  it.each(shorthands.map(({ shorthands }) => [shorthands]))(
    "Gets matching cards for %s",
    (shorthands) => {
      for (const shorthand of shorthands) {
        const { searchResults } = cardSearch.search(shorthand);
        expect(searchResults.length).toBeGreaterThanOrEqual(1);
      }
    }
  );
});
