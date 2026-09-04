// One describe per query shape the grammar reads: where a term begins and ends,
// which filter its key names, what its values mean, and the nodes a reader asks
// what a query means through. What the parse could not place is pinned in
// unresolvedFilters.test.ts.

import { describe, expect, it } from "@jest/globals";
import { Release } from "@flesh-and-blood/types";
import { FilterCategory } from "../src/filterMappings";
import { getParsedQuery } from "../src/queryParse";
import type { ParsedFilterNode } from "../src/queryParse";
import Search from "../src/search";
import { getCatalogueIndex } from "../src/searchIndex";
import { doubleSidedCards } from "./_doubleSidedCards";
import { getCategoryOfMapping } from "./_filterMappings";

const index = getCatalogueIndex(doubleSidedCards);
const cardSearch = new Search(doubleSidedCards, { index });

const CORPUS_SIZE = doubleSidedCards.length;

const getParse = (query: string) => getParsedQuery(query, index);
const getResultCount = (query: string): number =>
  cardSearch.search(query).searchResults.length;
const getResultNames = (query: string): string[] =>
  cardSearch.search(query).searchResults.map(({ name }) => name);
const getCategories = (query: string): (FilterCategory | undefined)[] =>
  getParse(query).appliedFilters.map(({ filterToPropertyMapping }) =>
    getCategoryOfMapping(filterToPropertyMapping),
  );
const getFilterNodes = (query: string): ParsedFilterNode[] =>
  getParse(query).nodes.filter((node) => node.isFilter);

describe("A set name standing where a set filter expects a value", () => {
  it("reads an unquoted multi-word name as one set", () => {
    const { appliedFilters, attributes, keywords } = getParse(
      "set:crucible of war",
    );

    expect(attributes.releases).toEqual([Release.CrucibleOfWar]);
    expect(keywords).toEqual([]);
    expect(appliedFilters.length).toEqual(1);
  });

  it("browses the set when the whole query is a set name", () => {
    const { attributes, keywords } = getParse("crucible of war");

    expect(attributes.releases).toEqual([Release.CrucibleOfWar]);
    expect(keywords).toEqual([]);
  });
});

describe("A shorthand standing where a term is expected", () => {
  it("expands one term into the filters it stands for", () => {
    expect(getCategories("AA c:brute")).toEqual([
      FilterCategory.Subtype,
      FilterCategory.Class,
    ]);
  });

  it("expands one term into several filters", () => {
    expect(getCategories("NAA")).toEqual([
      FilterCategory.Type,
      FilterCategory.Subtype,
    ]);
  });

  it("leaves the term alone inside a quoted value", () => {
    expect(getParse('name:"aa"').appliedFilters[0].values).toEqual(["aa"]);
  });
});

describe("An unbalanced quote", () => {
  it("runs the value to the end of the query", () => {
    const { appliedFilters } = getParse('k:"go again');

    expect(appliedFilters.length).toEqual(1);
    expect(appliedFilters[0].values).toEqual(["go again"]);
  });

  it("answers as the closed quote does", () => {
    expect(getResultNames('k:"go again')).toEqual(
      getResultNames('k:"go again"'),
    );
    expect(getResultCount('k:"go again')).toBeGreaterThan(0);
  });

  it("protects the separators the value runs over", () => {
    expect(getParse('name:"chane, bound by shadow').appliedFilters).toEqual(
      getParse('name:"chane, bound by shadow"').appliedFilters,
    );
    expect(getParse('name:"a+b').appliedFilters).toEqual(
      getParse('name:"a+b"').appliedFilters,
    );
  });
});

describe("Quotes protect a separator", () => {
  it("reads a quoted comma as part of the value", () => {
    const { appliedFilters } = getParse('name:"chane, bound by shadow"');

    expect(appliedFilters.length).toEqual(1);
    expect(appliedFilters[0].values).toEqual(["chane bound by shadow"]);
  });

  it("answers with the named card alone", () => {
    const names = getResultNames('name:"chane, bound by shadow"');

    expect(names.length).toBeGreaterThan(0);
    expect(
      names.filter((name) => !name.toLowerCase().startsWith("chane, bound")),
    ).toEqual([]);
  });

  it("reads a quoted plus as part of the value", () => {
    const [appliedFilter] = getParse('name:"a+b"').appliedFilters;

    expect(appliedFilter.values).toEqual(["a+b"]);
    expect(!!appliedFilter.isAnd).toBe(false);
  });

  // A value is stripped of punctuation whether it was quoted or not, so the
  // colon leaves the value rather than splitting it.
  it("reads a quoted colon as part of the value", () => {
    expect(getParse('name:"a:b"').appliedFilters[0].values).toEqual(["ab"]);
  });
});

describe("A comparison in front of a value", () => {
  it("carries its own comparison per value", () => {
    const [appliedFilter] = getParse("cost:1,>2").appliedFilters;

    expect(appliedFilter.values).toEqual(["1", "2"]);
    expect(appliedFilter.filterValues).toEqual([
      { value: "1" },
      { modifier: ">", value: "2" },
    ]);
    expect(appliedFilter.modifier).toBeUndefined();
  });

  it("answers for either comparison", () => {
    expect(getResultCount("cost:1,>2")).toEqual(
      getResultCount("cost:1") + getResultCount("cost:>2"),
    );
  });

  it("compares one value against a comparison of its own", () => {
    const [appliedFilter] = getParse("co:>=3").appliedFilters;

    expect(appliedFilter.filterValues).toEqual([
      { modifier: ">=", value: "3" },
    ]);
    expect(appliedFilter.modifier).toEqual(">=");
    expect(getResultCount("co:>=3")).toBeGreaterThan(0);
  });

  it("walks the ranked rarities per value", () => {
    const [appliedFilter] = getParse("r:common,>=majestic").appliedFilters;

    expect(appliedFilter.values).toEqual([
      "common",
      "majestic",
      "legendary",
      "fabled",
    ]);
  });
});

describe("A term", () => {
  it("is split from the next by any whitespace", () => {
    expect(getCategories("c:brute\tc:runeblade")).toEqual([
      FilterCategory.Class,
      FilterCategory.Class,
    ]);
    expect(getResultCount("c:brute\tc:runeblade")).toEqual(
      getResultCount("c:brute c:runeblade"),
    );
  });

  it("reads both smart double quotes as quotes", () => {
    expect(getParse("name:”quoted”").appliedFilters[0].values).toEqual([
      "quoted",
    ]);
    expect(getParse("name:“quoted”").appliedFilters[0].values).toEqual([
      "quoted",
    ]);
  });
});

describe("A key with no value", () => {
  const incompleteQueries = ["c:", "foil:", "chain:", "zz:", "-c:"];

  it.each(incompleteQueries)("%s asks nothing of the results", (query) => {
    const { appliedFilters, keywords } = getParse(query);

    expect(appliedFilters).toEqual([]);
    expect(keywords).toEqual([]);
    expect(getResultCount(query)).toEqual(CORPUS_SIZE);
  });

  it("leaves the results as they were before the key was typed", () => {
    expect(getResultCount("c:brute foil:")).toEqual(getResultCount("c:brute"));
  });
});

describe("A key naming no filter", () => {
  it("applies nothing and leaves the results alone", () => {
    const { appliedFilters, keywords } = getParse("zz:aura");

    expect(appliedFilters).toEqual([]);
    expect(keywords).toEqual([]);
    expect(getResultCount("zz:aura")).toEqual(CORPUS_SIZE);
  });

  it("narrows the results the rest of the query asks for", () => {
    expect(getResultCount("zz:aura c:brute")).toEqual(
      getResultCount("c:brute"),
    );
  });
});

describe("A colon term whose key is not a run of letters", () => {
  const freeTextQueries = [":brute", "x2:foo", "c-:brute", "--c:brute"];

  it.each(freeTextQueries)("%s is free text", (query) => {
    const { appliedFilters, keywords } = getParse(query);

    expect(appliedFilters).toEqual([]);
    expect(keywords.length).toEqual(1);
  });

  it("searches for the word it wrote", () => {
    expect(getResultNames(":brute")).toEqual(getResultNames("brute"));
  });
});

describe("Every spelling of the print filter", () => {
  const printQueries = [
    "print:wtr",
    "prints:wtr",
    "printing:wtr",
    "printings:wtr",
  ];

  it.each(printQueries)("%s applies the filter and the attribute", (query) => {
    const { appliedFilters, attributes } = getParse(query);

    expect(attributes.prints).toEqual(["wtr"]);
    expect(
      appliedFilters.map(
        ({ filterToPropertyMapping }) => filterToPropertyMapping.property,
      ),
    ).toEqual(["setIdentifiers"]);
  });

  it.each(printQueries)("%s renders a printing for every result", (query) => {
    const { searchResults } = cardSearch.search(query);

    expect(searchResults.length).toBeGreaterThan(0);
    expect(
      searchResults.filter(
        ({ matchingPrintings }) => matchingPrintings?.length === 0,
      ),
    ).toEqual([]);
  });
});

describe("A bare excluded key", () => {
  it("reads every alias of the filter it names", () => {
    expect(getResultCount("-talent")).toEqual(getResultCount("-tal"));
    expect(getResultCount("-talents")).toEqual(getResultCount("-talent"));
    expect(getResultCount("-talent")).toBeGreaterThan(0);
    expect(getResultCount("-talent")).toBeLessThan(CORPUS_SIZE);
  });

  it("reads a pitch alias as the pitch filter", () => {
    expect(getResultCount("!color")).toEqual(getResultCount("!pitch"));
  });
});

describe("A relation filter joining its values with a plus", () => {
  it("answers with the cards every value reaches", () => {
    const bothNames = getResultNames("references:copper+silver");
    const copperNames = getResultNames("references:copper");
    const silverNames = getResultNames("references:silver");

    expect(bothNames.length).toBeGreaterThan(0);
    expect(bothNames.length).toBeLessThan(copperNames.length);
    expect(bothNames).toEqual(
      copperNames.filter((name) => silverNames.includes(name)),
    );
  });

  it("answers with the cards any value reaches when they are separated", () => {
    const eitherNames = getResultNames("references:copper,silver");

    expect(eitherNames.length).toBeGreaterThan(
      getResultNames("references:silver").length,
    );
  });
});

describe("A meta value naming no nickname of its own", () => {
  it("stands for every meta it sits inside", () => {
    const { appliedFilters, attributes } = getParse("is:a");

    // Pinned as a literal, so a Meta added to the enum shows up here rather
    // than widening the filter unseen.
    expect(appliedFilters.map(({ values }) => values)).toEqual([
      ["arena", "dual class", "expansion slot", "rainbow"],
    ]);
    expect(attributes.isExpansionSlot).toBe(true);
  });

  it("leaves a value a nickname named alone", () => {
    expect(getParse("is:exp").appliedFilters[0].values).toEqual([
      "expansion slot",
    ]);
  });
});

describe("A chain of several values", () => {
  it("walks one chain over every value it was seeded with", () => {
    // Pinned as a literal, so a change to the corpus the walk runs over shows
    // up here rather than passing as an unchanged relative count.
    expect(getResultCount("chain:copper,silver")).toEqual(69);
    expect(getResultCount("chain:copper,silver")).toEqual(
      getResultCount("chain:copper"),
    );
  });
});

describe("A value the resolver cannot place", () => {
  it("keeps the values it could place", () => {
    expect(getParse("s:wtr,zzz").attributes.releases).toEqual([
      Release.WelcomeToRathe,
    ]);
  });

  it("leaves a legality filter asking nothing of the results", () => {
    expect(getResultCount("l:zzz")).toEqual(CORPUS_SIZE);
  });

  it("leaves a closed vocabulary matching nothing", () => {
    expect(getResultCount("set:zzz")).toEqual(0);
    expect(getResultCount("foil:zzz")).toEqual(0);
    expect(getResultCount("is:zzz")).toEqual(0);
  });
});

describe("A query applies the filters its terms name", () => {
  const queriesAndCategories: [string, (FilterCategory | undefined)[]][] = [
    ["c:brute", [FilterCategory.Class]],
    ["class:brute", [FilterCategory.Class]],
    ["-c:brute", [FilterCategory.Class]],
    ["!c:brute", [FilterCategory.Class]],
    ["c:brute,guardian", [FilterCategory.Class]],
    ["c:brute+guardian", [FilterCategory.Class]],
    ["set:wtr print:wtr", [FilterCategory.Set, FilterCategory.Print]],
    [
      'k:"blood debt",dominate -t:hero',
      [FilterCategory.Keyword, FilterCategory.Type],
    ],
    ["a:yang", [FilterCategory.Artist]],
    ["var:ea treat:ea", [FilterCategory.Treatment, FilterCategory.Treatment]],
  ];

  it.each(queriesAndCategories)("%s", (query, categories) => {
    expect(getCategories(query as string)).toEqual(categories);
  });
});

describe("The parse's nodes", () => {
  it("carry where each term sits and what it named", () => {
    const { nodes, text } = getParse("blade c:brute");

    expect(text).toEqual("blade c:brute");
    expect(nodes).toEqual([
      { end: 5, isFilter: false, start: 0, token: "blade" },
      {
        canonicalValues: ["brute"],
        category: FilterCategory.Class,
        end: 13,
        filterValues: [{ value: "brute" }],
        isAnd: false,
        isExcluded: false,
        isExpanded: false,
        isFilter: true,
        isResolved: true,
        key: "c",
        start: 6,
        token: "c:brute",
      },
    ]);
  });

  it("carries the text the terms were read from", () => {
    expect(getParse("SET:Crucible of War").text).toEqual("set:cru");
  });

  it("marks a term naming no filter unresolved", () => {
    const [node] = getParse("zz:aura").nodes;

    expect(node).toEqual({
      canonicalValues: ["aura"],
      category: undefined,
      end: 7,
      filterValues: [{ value: "aura" }],
      isAnd: false,
      isExcluded: false,
      isExpanded: false,
      isFilter: true,
      isResolved: false,
      key: "zz",
      start: 0,
      token: "zz:aura",
    });
  });

  const writtenAndCanonicalValues: [string, string, string][] = [
    ["foil:cf", "cf", "cold"],
    ["p:red", "red", "1"],
    ["l:cc", "cc", "classic constructed"],
  ];

  it.each(writtenAndCanonicalValues)(
    "carry %s as written and as the filter reads it",
    (query, writtenValue, canonicalValue) => {
      const [{ canonicalValues, filterValues }] = getFilterNodes(query);

      expect(filterValues).toEqual([{ value: writtenValue }]);
      expect(canonicalValues).toEqual([canonicalValue]);
    },
  );

  it("gives a term a shorthand expanded the span that wrote it", () => {
    const nodes = getFilterNodes("AA c:brute").map(
      ({ end, isExpanded, start, token }) => ({
        end,
        isExpanded,
        start,
        token,
      }),
    );

    expect(nodes).toEqual([
      { end: 2, isExpanded: true, start: 0, token: "st:attack" },
      { end: 10, isExpanded: false, start: 3, token: "c:brute" },
    ]);
  });
});
