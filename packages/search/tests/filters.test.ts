import { describe, expect, it } from "@jest/globals";
import {
  Foiling,
  Meta,
  Rarity,
  Release,
  Shorthand,
  Treatment,
} from "@flesh-and-blood/types";
import {
  getKeywordsAndAppliedFiltersFromText,
  RARITY_VALUES_MAPPING,
} from "../src/filters";
import { cards } from "@flesh-and-blood/cards";
import Search from "../src/search";
import { getCatalogueIndex } from "../src/searchIndex";

const index = getCatalogueIndex(cards);

// Any fixed day works; the point is that the token resolves to a comparison
// against the date it was given rather than to whatever today happens to be.
const PINNED_TODAY = "2026-09-24";

describe("Gets the right attribute filters", () => {
  const foilFilters = [
    ["foiling:r", [Foiling.Rainbow]],
    ["foil:cf,g", [Foiling.Cold, Foiling.Gold]],
  ];
  it.each(foilFilters)(
    "Gets matching foilings for %s",
    (search, expectedFoilings) => {
      const {
        attributes: { foilings },
      } = getKeywordsAndAppliedFiltersFromText(search as string, index);
      expect(foilings.length).toEqual(expectedFoilings.length);
      expect(expectedFoilings).toMatchSnapshot();
    },
  );

  const setFilters = [
    ["s:ara", [Release.ArakniBlitzDeck]],
    ["s:welcome", [Release.WelcomeToRathe, Release.IraWelcomeDeck]],
  ];
  it.each(setFilters)("Gets matching sets for %s", (search, sets) => {
    const {
      attributes: { releases },
    } = getKeywordsAndAppliedFiltersFromText(search as string, index);
    expect(releases.length).toEqual(sets.length);
    expect(releases).toMatchSnapshot();
  });

  const treatmentFilters = [
    ["treatment:ea", [Treatment.EA]],
    ['treat:"alt art",fa', [Treatment.AA, Treatment.FA]],
  ];
  it.each(treatmentFilters)(
    "Gets matching foilings for %s",
    (search, expectedTreatments) => {
      const {
        attributes: { treatments },
      } = getKeywordsAndAppliedFiltersFromText(search as string, index);
      expect(treatments.length).toEqual(expectedTreatments.length);
      expect(treatments).toMatchSnapshot();
    },
  );
});

describe("Gets the right attribute filters", () => {
  const foilFilters = [
    ["foiling:r", [Foiling.Rainbow]],
    ["foil:cf,g", [Foiling.Cold, Foiling.Gold]],
  ];
  it.each(foilFilters)(
    "Gets matching foilings for %s",
    (search, expectedFoilings) => {
      const {
        attributes: { foilings },
      } = getKeywordsAndAppliedFiltersFromText(search as string, index);
      expect(foilings.length).toEqual(expectedFoilings.length);
      expect(expectedFoilings).toMatchSnapshot();
    },
  );

  const setFilters = [
    ["s:ara", [Release.ArakniBlitzDeck]],
    ["s:welcome", [Release.WelcomeToRathe, Release.IraWelcomeDeck]],
    ['s:"bravo demo deck"', [Release.BravoDemoDeck]],
    ['s:"Dorinthea Demo Deck"', [Release.DorintheaDemoDeck]],
    ["s:ddd", [Release.DorintheaDemoDeck]],
  ];
  it.each(setFilters)("Gets matching sets for %s", (search, sets) => {
    const {
      attributes: { releases },
    } = getKeywordsAndAppliedFiltersFromText(search as string, index);
    expect(releases.length).toEqual(sets.length);
    expect(releases).toMatchSnapshot();
  });

  const treatmentFilters = [
    ["treatment:ea", [Treatment.EA]],
    ['treat:"alt art",fa', [Treatment.AA, Treatment.FA]],
  ];
  it.each(treatmentFilters)(
    "Gets matching treatments for %s",
    (search, expectedTreatments) => {
      const {
        attributes: { treatments },
      } = getKeywordsAndAppliedFiltersFromText(search as string, index);
      expect(treatments.length).toEqual(expectedTreatments.length);
      expect(treatments).toMatchSnapshot();

      for (const expected of expectedTreatments as Treatment[]) {
        expect(treatments.includes(expected)).toBeTruthy();
      }
    },
  );

  const metaFilters = [
    ["s:ros meta:rainbow", [Meta.Rainbow]],
    ["meta:rainbow,expansion", [Meta.Rainbow, Meta.Expansion]],
    ["is:reprint", [Meta.Reprint]],
    ["meta:reprint,dual", [Meta.Reprint, Meta.DualClass]],
  ];
  it.each(metaFilters)(
    "Gets matching meta values for %s",
    (search, expectedMetaValues) => {
      const { appliedFilters } = getKeywordsAndAppliedFiltersFromText(
        search as string,
        index,
      );

      const metaAppliedFilter = appliedFilters.find(
        (appliedFilter) =>
          appliedFilter.filterToPropertyMapping.property === "meta",
      );

      expect(metaAppliedFilter?.values.length).toEqual(
        expectedMetaValues.length,
      );

      for (const expected of expectedMetaValues) {
        expect(
          metaAppliedFilter?.values.includes(expected.toLowerCase()),
        ).toBeTruthy();
      }
    },
  );

  const uniqueFilters = [
    ["is:unique", true],
    ["!is:unique", false],
    ["is:reprint", false],
  ];
  it.each(uniqueFilters)(
    "Matches on the reprint meta value for %s",
    (search, expectedIsExcluded) => {
      const { appliedFilters } = getKeywordsAndAppliedFiltersFromText(
        search as string,
        index,
      );

      const metaAppliedFilters = appliedFilters.filter(
        (appliedFilter) =>
          appliedFilter.filterToPropertyMapping.property === "meta",
      );

      expect(metaAppliedFilters.length).toEqual(1);
      expect(metaAppliedFilters[0].values).toEqual([
        Meta.Reprint.toLowerCase(),
      ]);
      expect(!!metaAppliedFilters[0].isExcluded).toEqual(expectedIsExcluded);
    },
  );

  const previewFilters = [
    ["is:preview", false],
    ["is:spoiler", false],
    ["is:unreleased", false],
    ["!is:preview", true],
    ["is:released", true],
    ["-is:released", false],
  ];
  it.each(previewFilters)(
    "Compares against the given date for %s",
    (search, expectedIsExcluded) => {
      const { appliedFilters } = getKeywordsAndAppliedFiltersFromText(
        search as string,
        index,
        [],
        [],
        PINNED_TODAY,
      );

      const dateAppliedFilters = appliedFilters.filter(
        ({ filterToPropertyMapping }) => filterToPropertyMapping.isDate,
      );

      expect(dateAppliedFilters.length).toEqual(1);
      expect(dateAppliedFilters[0].values).toEqual([PINNED_TODAY]);
      expect(!!dateAppliedFilters[0].isExcluded).toEqual(expectedIsExcluded);
    },
  );

  it("Keeps the remaining meta values alongside preview", () => {
    const { appliedFilters } = getKeywordsAndAppliedFiltersFromText(
      "is:preview,arena",
      index,
      [],
      [],
      PINNED_TODAY,
    );

    const dateAppliedFilters = appliedFilters.filter(
      ({ filterToPropertyMapping }) => filterToPropertyMapping.isDate,
    );
    const metaAppliedFilters = appliedFilters.filter(
      ({ filterToPropertyMapping }) =>
        filterToPropertyMapping.property === "meta",
    );

    expect(dateAppliedFilters.length).toEqual(1);
    expect(metaAppliedFilters.length).toEqual(1);
    expect(metaAppliedFilters[0].values).toEqual([Meta.Arena.toLowerCase()]);
  });

  it("Contradicts itself when asked for preview and released at once", () => {
    const { appliedFilters } = getKeywordsAndAppliedFiltersFromText(
      "is:preview,released",
      index,
      [],
      [],
      PINNED_TODAY,
    );

    const dateAppliedFilters = appliedFilters.filter(
      ({ filterToPropertyMapping }) => filterToPropertyMapping.isDate,
    );

    expect(dateAppliedFilters.length).toEqual(2);
    expect(dateAppliedFilters.map(({ isExcluded }) => !!isExcluded)).toEqual([
      false,
      true,
    ]);
  });

  const shorthandFilters = [
    ["short:buffs", [Shorthand.Buffs]],
    ["shorthand:tap,untap", [Shorthand.Tap, Shorthand.Untap]],
  ];
  it.each(shorthandFilters)(
    "Gets matching shorthands for %s",
    (search, expectedShorthands) => {
      const { appliedFilters } = getKeywordsAndAppliedFiltersFromText(
        search as string,
        index,
      );

      const shorthandAppliedFilter = appliedFilters.find(
        (appliedFilter) =>
          appliedFilter.filterToPropertyMapping.property === "shorthands",
      );

      expect(shorthandAppliedFilter?.values.length).toEqual(
        expectedShorthands.length,
      );

      for (const expected of expectedShorthands) {
        expect(
          shorthandAppliedFilter?.values.includes(expected.toLowerCase()),
        ).toBeTruthy();
      }
    },
  );
});

describe("Complete filter abbreviation mapping", () => {
  const mappedRarities = Object.values(RARITY_VALUES_MAPPING);
  it.each(Object.values(Rarity))("%s has a matching filter value", (rarity) => {
    const matchingFilterValue = mappedRarities.includes(rarity);

    expect(matchingFilterValue).toBeTruthy();
  });
});

// Filter keys and values are read straight out of the search text and looked up
// in mapping tables, so every name an object inherits has to read as a miss.
// The parser lowercases before it looks anything up, so only `constructor` and
// `__proto__` survive as real inherited keys; the lowercased forms are covered
// alongside the originals to keep that visible rather than implied.
describe("Inherited object member names are not filters or filter values", () => {
  const cardSearch = new Search(cards);
  const inheritedNames = [
    ...new Set(
      Object.getOwnPropertyNames(Object.prototype).flatMap((name) => [
        name,
        name.toLowerCase(),
      ]),
    ),
  ];
  const filterKeys = [
    "!",
    "foil:",
    "foiling:",
    "is:",
    "meta:",
    "p:",
    "pitch:",
    "print:",
    "r:",
    "rarity:",
    "s:",
    "set:",
    "treat:",
    "treatment:",
  ];

  // Parsing is where the lookups live, so the filter keys are covered there
  // rather than through the searcher, which would pay a full corpus scan each.
  it.each(inheritedNames)("%s parses as a value without throwing", (name) => {
    for (const filterKey of filterKeys) {
      expect(() =>
        getKeywordsAndAppliedFiltersFromText(`${filterKey}${name}`, index),
      ).not.toThrow();
    }
  });

  it.each(inheritedNames)("%s applies no filter", (name) => {
    const { appliedFilters } = getKeywordsAndAppliedFiltersFromText(
      `${name}:1`,
      index,
    );

    expect(appliedFilters).toEqual([]);
  });

  it.each(inheritedNames)("%s searches without throwing", (name) => {
    expect(() => cardSearch.search(name)).not.toThrow();
  });
});
