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
import { getNormalizedFilterValue } from "../src/helpers";
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
  const mappedRarities = [...RARITY_VALUES_MAPPING.values()];
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

  // A filter a name does reach carries the name as it was written, never what
  // Object.prototype holds under it, and no name reaches an attribute saying
  // which printings a result renders.
  it.each(inheritedNames)("%s resolves to no inherited member", (name) => {
    const valuesTheNameCanCarry = [
      name.toLowerCase(),
      getNormalizedFilterValue(name),
    ];
    let checkedValues = 0;
    for (const filterKey of filterKeys) {
      const { appliedFilters, attributes } =
        getKeywordsAndAppliedFiltersFromText(`${filterKey}${name}`, index);

      for (const { values } of appliedFilters) {
        for (const value of values) {
          expect(valuesTheNameCanCarry).toContain(value);
          checkedValues += 1;
        }
      }

      expect(attributes.foilings).toEqual([]);
      expect(attributes.rarities).toEqual([]);
      expect(attributes.releases).toEqual([]);
      expect(attributes.treatments).toEqual([]);
    }

    expect(checkedValues).toBeGreaterThan(0);
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

describe("Set names expand only where a set filter expects one", () => {
  const setFilterSearches = [
    ["set:usurp the shadow throne", Release.UsurpTheShadowThrone],
    ['set:"usurp the shadow throne"', Release.UsurpTheShadowThrone],
    ["s:high seas", Release.HighSeas],
    ["set:usurp the shadow throne pitch:blue", Release.UsurpTheShadowThrone],
  ];
  it.each(setFilterSearches)(
    "%s reads an unquoted multi-word name as one set",
    (search, release) => {
      const {
        attributes: { releases },
      } = getKeywordsAndAppliedFiltersFromText(search as string, index);

      expect(releases).toEqual([release]);
    },
  );

  const separatedSetFilterSearches = [
    "set:rosetta,part the mistveil",
    "set:part the mistveil,rosetta",
    "set:part the mistveil+rosetta",
  ];
  it.each(separatedSetFilterSearches)(
    "%s reads a multi-word name alongside a separated one",
    (search) => {
      const {
        attributes: { releases },
      } = getKeywordsAndAppliedFiltersFromText(search, index);

      expect([...releases].sort()).toEqual(
        [Release.PartTheMistveil, Release.Rosetta].sort(),
      );
    },
  );

  // The expansion rewrites a name into a set identifier, which the fuzzy search
  // would otherwise match against every card name carrying those letters.
  const cardSearch = new Search(cards);
  const cardNameSearches = [
    ["rosetta thorn", "Rosetta Thorn"],
    ["chart the high seas", "Chart the High Seas"],
    ["fatal engagement", "Fatal Engagement"],
    ["usurp the shadow throne", "Usurp the Shadow Throne"],
    ["uprising", "Uprising"],
  ];
  it.each(cardNameSearches)("%s finds the card first", (search, cardName) => {
    const { searchResults } = cardSearch.search(search);

    expect(searchResults[0].name).toEqual(cardName);
  });

  it("browses the set when the name is nobody's card", () => {
    const { attributes, keywords } = getKeywordsAndAppliedFiltersFromText(
      "part the mistveil",
      index,
    );

    expect(attributes.releases).toEqual([Release.PartTheMistveil]);
    expect(keywords).toEqual([]);
  });

  it("leaves a set name alone outside a set filter", () => {
    const { appliedFilters } = getKeywordsAndAppliedFiltersFromText(
      "name:uprising",
      index,
    );

    expect(appliedFilters[0].values).toEqual(["uprising"]);
  });
});

describe("A set value names a set before it fragments one", () => {
  // A name written without its punctuation matches no name to expand and no
  // name it is a fragment of, so the name rung is the only one that answers it.
  it("reads a name written without its punctuation as that set", () => {
    const {
      appliedFilters,
      attributes: { releases },
    } = getKeywordsAndAppliedFiltersFromText(
      'set:"classic battles rhinar vs dorinthea"',
      index,
    );

    expect(releases).toEqual([Release.ClassicBattlesRhinarDorinthea]);
    expect(appliedFilters[0].values).toEqual([
      "classic battles rhinar vs dorinthea",
    ]);
  });

  // The expansion rewrites the name to its own set identifier, so the value
  // never reaches the fragment rung the longer name would answer.
  it("reads a name a longer set's name contains as the shorter set", () => {
    const {
      appliedFilters,
      attributes: { releases },
    } = getKeywordsAndAppliedFiltersFromText('set:"smash palace"', index);

    expect(releases).toEqual([Release.SmashPalace]);
    expect(appliedFilters[0].values).toEqual(["smash palace"]);
  });
});
