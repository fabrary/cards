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

  it("Gets cards with buff in name when searching exact", () => {
    const { searchResults } = cardSearch.search("Bluster Buff");
    expect(searchResults.length).toBeGreaterThanOrEqual(1);
    const blusterBuff = searchResults.find(
      ({ name }) => name === "Bluster Buff"
    );
    expect(blusterBuff).toBeTruthy();
  });

  it("Gets cards with buff in name when searching buff", () => {
    const { searchResults } = cardSearch.search("Buff");
    expect(searchResults.length).toBeGreaterThanOrEqual(1);
    const blusterBuff = searchResults.find(
      ({ name }) => name === "Bluster Buff"
    );
    expect(blusterBuff).toBeTruthy();
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
