import { cards } from "@flesh-and-blood/cards";
import { shorthands } from "./shorthands";
import Search from "./search";

describe("Shorthands", () => {
  const cardSearch = new Search(cards);

  it("Buff defenses doesn't include buff powers", () => {
    const { searchResults } = cardSearch.search("buff defense");
    expect(searchResults.length).toBeGreaterThanOrEqual(1);
    const increaseTheTension = searchResults.find(
      ({ name }) => name === "Increase the Tension"
    );
    expect(increaseTheTension).toBeFalsy();
  });

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
