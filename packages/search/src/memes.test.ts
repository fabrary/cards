import { cards } from "@flesh-and-blood/cards";
import Search from "./search";

describe("Meme results", () => {
  const cardSearch = new Search(cards);

  it("Only when explicitly asked for", () => {
    const { searchResults } = cardSearch.search("fangs a lot");
    expect(searchResults.length).toEqual(0);

    const { searchResults: searchResults2 } = cardSearch.search(
      "fangs a lot",
      true
    );
    expect(searchResults2.length).toBeGreaterThanOrEqual(0);
  });

  it("Fangs a Lot", () => {
    const { searchResults } = cardSearch.search("fangs a lot", true);
    expect(searchResults.length).toEqual(1);
    expect(searchResults[0].name).toEqual("Fangs A Lot");
  });
});
