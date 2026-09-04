import { describe, expect, it } from "@jest/globals";
import { cards } from "@flesh-and-blood/cards";
import {
  aliasesByFilterCategory,
  FilterCategory,
  FilterKind,
  getFilterCategory,
} from "../src/filterMappings";
import { getKeywordsAndAppliedFiltersFromText } from "../src/filters";
import { getMetaFilters } from "../src/metaFilters";
import { getCatalogueIndex } from "../src/searchIndex";
import {
  aliasesByCategoryName,
  filterAliases,
  filterMappingsByAlias,
} from "./_filterMappings";

const index = getCatalogueIndex(cards);

// Any fixed day works; the point is that two aliases answer alike, not what
// today happens to be.
const PINNED_TODAY = "2026-09-24";

// One value per filter, so every alias of a filter is asked the same question.
// Total, so a new filter has to name the value that reaches its branch.
const VALUE_BY_CATEGORY: Record<FilterCategory, string> = {
  [FilterCategory.Arcane]: "1",
  [FilterCategory.Artist]: "yang",
  [FilterCategory.Banned]: "blitz",
  [FilterCategory.Bond]: "earth",
  [FilterCategory.Chain]: "dishonor",
  [FilterCategory.Class]: "brute",
  [FilterCategory.Cost]: "1",
  [FilterCategory.Defense]: "2",
  [FilterCategory.Flow]: "lightning",
  [FilterCategory.Foiling]: "cf",
  [FilterCategory.Fusion]: "lightning",
  [FilterCategory.Intellect]: "4",
  [FilterCategory.Is]: "reprint",
  [FilterCategory.Keyword]: "opt",
  [FilterCategory.Legal]: "blitz",
  [FilterCategory.Life]: "20",
  [FilterCategory.Name]: "runechant",
  [FilterCategory.Pitch]: "blue",
  [FilterCategory.Power]: "4",
  [FilterCategory.Print]: "wtr",
  [FilterCategory.Rarity]: "r",
  [FilterCategory.ReferencedBy]: "runechant",
  [FilterCategory.References]: "runechant",
  [FilterCategory.Set]: "wtr",
  [FilterCategory.Shorthand]: "buffs",
  [FilterCategory.Specialization]: "dorinthea",
  [FilterCategory.Subtype]: "aura",
  [FilterCategory.Talent]: "draconic",
  [FilterCategory.Text]: "agility",
  [FilterCategory.Trait]: "chaos",
  [FilterCategory.Treatment]: "ea",
  [FilterCategory.Type]: "action",
  [FilterCategory.TypeText]: "attack",
  [FilterCategory.Year]: "2021",
};

const filterCategories = Object.values(FilterCategory);

describe("Every alias of a filter takes the same branch", () => {
  it.each(filterCategories)("%s reads alike from every alias", (category) => {
    const [firstAlias, ...otherAliases] = aliasesByFilterCategory[category];
    const value = VALUE_BY_CATEGORY[category];
    const fromFirstAlias = getKeywordsAndAppliedFiltersFromText(
      `${firstAlias}:${value}`,
      index,
      [],
      [],
      PINNED_TODAY,
    );

    expect(fromFirstAlias.appliedFilters.length).toBeGreaterThan(0);
    for (const alias of otherAliases) {
      expect(
        getKeywordsAndAppliedFiltersFromText(
          `${alias}:${value}`,
          index,
          [],
          [],
          PINNED_TODAY,
        ),
      ).toEqual(fromFirstAlias);
    }
  });

  const metaCategories = [
    FilterCategory.Banned,
    FilterCategory.Legal,
    FilterCategory.Rarity,
  ];
  it.each(metaCategories)(
    "%s expands alike from every alias",
    (category: FilterCategory) => {
      const [firstAlias, ...otherAliases] = aliasesByFilterCategory[category];
      const values = [VALUE_BY_CATEGORY[category]];
      const fromFirstAlias = getMetaFilters(
        false,
        false,
        firstAlias,
        values,
        "",
        [],
      );

      expect(fromFirstAlias.length).toBeGreaterThan(0);
      for (const alias of otherAliases) {
        expect(getMetaFilters(false, false, alias, values, "", [])).toEqual(
          fromFirstAlias,
        );
      }
    },
  );

  it("writes the artist attribute for a: as for art:", () => {
    const fromShortAlias = getKeywordsAndAppliedFiltersFromText(
      "a:yang",
      index,
    );

    expect(fromShortAlias.attributes.artists).toEqual(["yang"]);
    expect(fromShortAlias).toEqual(
      getKeywordsAndAppliedFiltersFromText("art:yang", index),
    );
  });

  it("writes no artist attribute for an excluded artist filter", () => {
    const fromShortAlias = getKeywordsAndAppliedFiltersFromText(
      "-a:yang",
      index,
    );

    expect(fromShortAlias.attributes.artists).toEqual([]);
    expect(fromShortAlias).toEqual(
      getKeywordsAndAppliedFiltersFromText("-art:yang", index),
    );
  });

  it("applies the banned filter for rf: as for banned:", () => {
    const { appliedFilters } = getKeywordsAndAppliedFiltersFromText(
      "rf:blitz",
      index,
    );

    expect(
      appliedFilters.map(
        ({ filterToPropertyMapping }) => filterToPropertyMapping.property,
      ),
    ).toEqual(["bannedFormats"]);
    expect(appliedFilters).toEqual(
      getKeywordsAndAppliedFiltersFromText("banned:blitz", index)
        .appliedFilters,
    );
  });
});

describe("A filter key names its filter", () => {
  it.each(filterAliases)(
    "%s names the filter its mapping declares",
    (alias) => {
      expect(getFilterCategory(alias)).toEqual(
        filterMappingsByAlias[alias]?.category,
      );
    },
  );

  it.each(filterCategories)("%s is a key naming itself", (category) => {
    expect(filterMappingsByAlias[category]?.category).toEqual(category);
    expect(getFilterCategory(category)).toEqual(category);
  });

  it("reads a key whatever its case", () => {
    expect(getFilterCategory("C")).toEqual(FilterCategory.Class);
    expect(getFilterCategory("ClAsS")).toEqual(FilterCategory.Class);
  });

  it("answers with nothing for a key naming no filter", () => {
    expect(getFilterCategory("zz")).toBeUndefined();
  });

  it.each(Object.getOwnPropertyNames(Object.prototype))(
    "%s names no filter",
    (inheritedName) => {
      expect(getFilterCategory(inheritedName)).toBeUndefined();
      expect(aliasesByCategoryName[inheritedName]).toBeUndefined();
    },
  );
});

describe("Every filter's aliases are known by category", () => {
  it("names every alias exactly once", () => {
    const aliases = filterCategories.flatMap(
      (category) => aliasesByFilterCategory[category],
    );

    expect([...aliases].sort()).toEqual([...filterAliases].sort());
  });

  it.each(filterCategories)("%s names itself by one of them", (category) => {
    const aliases = aliasesByFilterCategory[category];
    const canonicalAlias = filterMappingsByAlias[aliases[0]]?.canonicalAlias;

    expect(aliases).toContain(canonicalAlias);
  });
});

describe("A vocabulary names the values a card carries", () => {
  const exactMatchAliases = filterAliases.filter(
    (alias) => filterMappingsByAlias[alias]?.kind === FilterKind.ExactMatch,
  );
  it.each(exactMatchAliases)(
    "%s reads whole values, so a vocabulary names them",
    (alias) => {
      expect(filterMappingsByAlias[alias]?.vocabulary?.length).toBeGreaterThan(
        0,
      );
    },
  );

  const aliasesWithVocabulary = filterAliases.filter(
    (alias) => !!filterMappingsByAlias[alias]?.vocabulary,
  );
  it.each(aliasesWithVocabulary)(
    "%s names its values as a list of them",
    (alias) => {
      const vocabulary = filterMappingsByAlias[alias]?.vocabulary;

      expect(Array.isArray(vocabulary)).toBe(true);
      expect(vocabulary?.length).toBeGreaterThan(0);
      expect(vocabulary?.every((value) => typeof value === "string")).toBe(
        true,
      );
    },
  );
});
