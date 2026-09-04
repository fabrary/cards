import { describe, expect, it } from "@jest/globals";
import { Hero } from "@flesh-and-blood/types";
import { getExcludedMetaFilters, getMetaFilters } from "../src/metaFilters";
import Search, { PUNCTUATION } from "../src";
import { cards } from "@flesh-and-blood/cards";

describe("Every hero has a legal filter", () => {
  it.each(Object.values(Hero))("%s has a filter", (hero: string) => {
    const heroFilter = hero
      .split(" ")[0]
      .toLowerCase()
      .replace(PUNCTUATION, "");

    const appliedFilters = getMetaFilters(
      false,
      false,
      "l",
      [heroFilter],
      undefined,
      [],
    );
    expect(appliedFilters.length).toBeGreaterThan(0);
  });

  it("expands the values it is given behind one comparison", () => {
    const rankedFromMajestic = getMetaFilters(
      false,
      false,
      "r",
      ["majestic"],
      ">=",
      [],
    );

    expect(rankedFromMajestic.map(({ values }) => values)).toEqual([
      ["majestic", "legendary", "fabled"],
    ]);
  });
});

describe("Edge case conditions are handled", () => {
  const cardSearch = new Search(cards);

  it("Gorganian Tome in Emperor", () => {
    const { searchResults } = cardSearch.search("l:emperor");

    const gorganianTome = searchResults.find(
      ({ name }) => name === "Gorganian Tome",
    );
    expect(gorganianTome).toBeUndefined();
  });
});

describe("Inherited object member names are not excluded filters", () => {
  it.each(Object.getOwnPropertyNames(Object.prototype))(
    "%s has no excluded filters",
    (name) => {
      expect(getExcludedMetaFilters(name)).toEqual([]);
    },
  );
});
