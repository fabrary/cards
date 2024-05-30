import { cards } from "@flesh-and-blood/cards";
import { multiWordShorthands, shorthands } from "./shorthands";
import Search from "./search";

describe("Shorthands", () => {
  const cardSearch = new Search(cards);

  it("Buff defenses doesn't include buff powers", () => {
    const { searchResults } = cardSearch.search("Pump defense");
    expect(searchResults.length).toBeGreaterThanOrEqual(1);
    const increaseTheTension = searchResults.find(
      ({ name }) => name === "Increase the Tension"
    );
    expect(increaseTheTension).toBeFalsy();
  });

  it.each(shorthands.flatMap(({ shorthands }) => shorthands))(
    "Gets matching cards for %s",
    (shorthand) => {
      // for (const shorthand of shorthands) {
      const { searchResults } = cardSearch.search(shorthand);
      expect(searchResults.length).toBeGreaterThanOrEqual(1);
      // }
    }
  );
});
