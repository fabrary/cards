import { Hero } from "@flesh-and-blood/types";
import { getMetaFilters } from "./metaFilters";
import { PUNCTUATION } from ".";

describe("Every hero has a legal filter", () => {
  it.each(Object.values(Hero))("%s has a filter", (hero: string) => {
    const heroFilter = hero
      .split(" ")[0]
      .toLowerCase()
      .replace(PUNCTUATION, "");

    const filters = getMetaFilters(false, "l", [heroFilter], "");
    expect(filters.length).toBeGreaterThan(0);
  });
});
