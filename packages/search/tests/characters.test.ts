import { describe, expect, it, xit } from "@jest/globals";
import { cards } from "@flesh-and-blood/cards";
import Search from "../src/search";

describe("Handles special characters", () => {
  const cardSearch = new Search(cards);

  it("Handles iPhone ”", () => {
    const { appliedFilters, keywords, searchResults } =
      cardSearch.search("Text:”+1{d}”");
    expect(searchResults.length).toBeGreaterThanOrEqual(1);
  });
});
