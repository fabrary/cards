import { cards } from "@flesh-and-blood/cards";
import { shorthands } from "./shorthands";
import Search from "./search";

describe("Shorthands", () => {
  const cardSearch = new Search(cards);

  it.each(shorthands.map(({ filters }) => [filters]))(
    "Gets matching cards for %s",
    (filters) => {
      for (const filter of filters) {
        const { searchResults } = cardSearch.search(filter);
        expect(searchResults.length).toBeGreaterThanOrEqual(1);
      }
    }
  );
});
