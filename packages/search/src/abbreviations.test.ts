import { cards } from "@flesh-and-blood/cards";
import { abbreviations } from "./abbreviations";
import Search from "./search";

describe("Abbreviations", () => {
  const cardSearch = new Search(cards);

  it("Blood on Her Hands", () => {
    const { searchResults } = cardSearch.search("bohh");
    expect(searchResults.length).toEqual(1);
    expect(searchResults[0].name).toEqual("Blood on Her Hands");
  });

  it.each(
    abbreviations.map(({ abbreviations, card }) => [abbreviations, card])
  )("Gets matching cards for %s", (abbreviations, card) => {
    for (const abbreviation of abbreviations) {
      const { searchResults } = cardSearch.search(abbreviation);
      expect(searchResults.length).toBeGreaterThanOrEqual(1);
      expect(searchResults[0].name).toEqual(card);
    }
  });
});
