import { describe, expect, it } from "vitest";
import { cards, releases } from "@flesh-and-blood/cards";
import Search from "../src/search";

describe("Handles special characters", () => {
  const cardSearch = new Search(cards, { releases });

  it("Handles iPhone ”", () => {
    const { searchResults } = cardSearch.search("Text:”+1{d}”");
    expect(searchResults.length).toBeGreaterThanOrEqual(1);
  });
});
