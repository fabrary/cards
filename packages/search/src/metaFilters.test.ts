import { Hero } from "@flesh-and-blood/types";
import { getMetaFilters } from "./metaFilters";
import Search, { PUNCTUATION } from ".";
import { cards } from "@flesh-and-blood/cards";

describe("Every hero has a legal filter", () => {
  it.each(Object.values(Hero))("%s has a filter", (hero: string) => {
    const heroFilter = hero
      .split(" ")[0]
      .toLowerCase()
      .replace(PUNCTUATION, "");

    const filters = getMetaFilters(false, false, "l", [heroFilter], "", []);
    expect(filters.length).toBeGreaterThan(0);
  });
});

describe("Edge case conditions are handled", () => {
  const cardSearch = new Search(cards);

  it("Gorganian Tome in Emperor", () => {
    const { searchResults } = cardSearch.search("l:emperor");

    const gorganianTome = searchResults.find(
      ({ name }) => name === "Gorganian Tome"
    );
    expect(gorganianTome).toBeUndefined();
  });
});
