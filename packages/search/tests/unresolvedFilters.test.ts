// What the parse could not place, over the real catalogue: the key that names
// no filter, the value no filter reads, and the filter whose values hold that
// value instead. A report is read with `toStrictEqual` so that a suggestion
// left off reads differently from one made.

import { describe, expect, it } from "@jest/globals";
import { FilterCategory } from "../src/filterMappings";
import { getParsedQuery } from "../src/queryParse";
import type { UnresolvedFilter } from "../src/queryParse";
import Search from "../src/search";
import { getCatalogueIndex } from "../src/searchIndex";
import { doubleSidedCards } from "./_doubleSidedCards";
import { getCategoryOfMapping } from "./_filterMappings";

const index = getCatalogueIndex(doubleSidedCards);
const cardSearch = new Search(doubleSidedCards, { index });

const CORPUS_SIZE = doubleSidedCards.length;

const getUnresolvedFilters = (query: string): UnresolvedFilter[] =>
  getParsedQuery(query, index).unresolvedFilters;
const getResultCount = (query: string): number =>
  cardSearch.search(query).searchResults.length;

describe("The report for a key naming no filter", () => {
  it("names the key and nothing about its values", () => {
    expect(getUnresolvedFilters("zz:aura")).toStrictEqual([
      { key: "zz", reason: "key", values: [] },
    ]);
  });
});

describe("A key written with no value", () => {
  const incompleteQueries = ["c:", "foil:", "chain:", "zz:", "-c:"];

  it.each(incompleteQueries)(
    "%s reports nothing, asking for nothing yet",
    (query) => {
      expect(getUnresolvedFilters(query)).toStrictEqual([]);
    },
  );
});

describe("The report for a colon term whose key is not a run of letters", () => {
  const freeTextQueries = ["x2:foo", ":brute", "c-:brute"];

  it.each(freeTextQueries)("%s is free text and reports nothing", (query) => {
    expect(getUnresolvedFilters(query)).toStrictEqual([]);
  });
});

describe("A value the resolver could not place", () => {
  const resolverQueries: [string, string][] = [
    ["l:zzz", "l"],
    ["banned:zzz", "banned"],
    ["s:zzz", "s"],
    ["set:zzz", "set"],
    ["foil:zzz", "foil"],
    ["treat:zzz", "treat"],
    ["is:zzz", "is"],
    ["r:zzz", "r"],
  ];

  it.each(resolverQueries)("%s reports the value", (query, key) => {
    expect(getUnresolvedFilters(query)).toStrictEqual([
      { key, reason: "value", values: ["zzz"] },
    ]);
  });

  const abbreviationQueries = ["foil:cf", "r:m", "l:cc", "is:dual", "treat:aa"];

  it.each(abbreviationQueries)(
    "%s reports nothing, the resolver reading a spelling no vocabulary holds",
    (query) => {
      expect(getUnresolvedFilters(query)).toStrictEqual([]);
    },
  );
});

describe("A relation filter whose value names no card", () => {
  const relationQueries: [string, string][] = [
    ["chain:zzz", "chain"],
    ["references:zzz", "references"],
    ["referencedby:zzz", "referencedby"],
  ];

  it.each(relationQueries)("%s reports the value", (query, key) => {
    expect(getUnresolvedFilters(query)).toStrictEqual([
      { key, reason: "value", values: ["zzz"] },
    ]);
  });

  it("reports nothing for a value that names one", () => {
    expect(getUnresolvedFilters("chain:copper")).toStrictEqual([]);
  });
});

describe("A value that normalizes to nothing", () => {
  const punctuationQueries: [string, string, string][] = [
    ["co:>", "co", ">"],
    ["co:<=", "co", "<="],
    ['k:","', "k", ","],
  ];

  it.each(punctuationQueries)(
    "%s reports the value as it was written",
    (query, key, value) => {
      expect(getUnresolvedFilters(query)).toStrictEqual([
        { key, reason: "value", values: [value] },
      ]);
    },
  );

  it("asks nothing of the results, as a key written with no value does", () => {
    expect(getResultCount("co:>")).toEqual(CORPUS_SIZE);
    expect(getUnresolvedFilters("co:")).toStrictEqual([]);
    expect(getResultCount("co:")).toEqual(CORPUS_SIZE);
  });
});

describe("A value no vocabulary holds", () => {
  const checkedCategoryQueries: [string, string][] = [
    ["t:zzz", "t"],
    ["st:zzz", "st"],
    ["k:zzz", "k"],
    ["tal:zzz", "tal"],
    ["f:zzz", "f"],
    ["bond:zzz", "bond"],
    ["flow:zzz", "flow"],
  ];

  it.each(checkedCategoryQueries)("%s reports the value", (query, key) => {
    expect(getUnresolvedFilters(query)).toStrictEqual([
      { key, reason: "value", values: ["zzz"] },
    ]);
  });

  it("reports only the values it could not place", () => {
    expect(getUnresolvedFilters("t:action,zzz")).toStrictEqual([
      { key: "t", reason: "value", values: ["zzz"] },
    ]);
  });
});

describe("A value its own filter holds", () => {
  const resolvedValueQueries = [
    "t:hero",
    "st:aura",
    "k:dominate",
    'k:"go again"',
    "tal:shadow",
    "f:ice",
    "bond:earth",
    "flow:lightning",
  ];

  it.each(resolvedValueQueries)("%s reports nothing", (query) => {
    expect(getUnresolvedFilters(query)).toStrictEqual([]);
  });
});

describe("The filter whose values hold the one written", () => {
  it("suggests the subtype filter for a subtype written as a type", () => {
    expect(getUnresolvedFilters("t:aura")).toStrictEqual([
      { key: "t", reason: "value", suggestedKey: "st", values: ["aura"] },
    ]);
  });

  const suggestionQueries: [string, string][] = [
    ["t:brute", "c"],
    ["t:shadow", "tal"],
    ["st:majestic", "r"],
  ];

  it.each(suggestionQueries)("%s suggests %s", (query, suggestedKey) => {
    const [unresolvedFilter] = getUnresolvedFilters(query);

    expect(unresolvedFilter.suggestedKey).toEqual(suggestedKey);
  });

  it("suggests nothing where several filters hold the value", () => {
    expect(getUnresolvedFilters("t:lightning")).toStrictEqual([
      { key: "t", reason: "value", values: ["lightning"] },
    ]);
  });

  it("suggests nothing where no filter holds the value", () => {
    expect(getUnresolvedFilters("t:zzz")).toStrictEqual([
      { key: "t", reason: "value", values: ["zzz"] },
    ]);
  });
});

describe("However the value was written", () => {
  const writtenValueQueries = ["t:Aura", "t:AURA", "t:aura."];

  it.each(writtenValueQueries)("%s reports the value it names", (query) => {
    expect(getUnresolvedFilters(query)).toStrictEqual([
      { key: "t", reason: "value", suggestedKey: "st", values: ["aura"] },
    ]);
  });

  it("reads a punctuated value its filter holds as resolved", () => {
    expect(getUnresolvedFilters("st:Aura.")).toStrictEqual([]);
  });
});

describe("The values the meta filter reads for itself", () => {
  const peeledQueries = [
    "is:unique",
    "is:preview",
    "is:spoiler",
    "is:unreleased",
    "is:released",
  ];

  it.each(peeledQueries)("%s reports nothing", (query) => {
    expect(getUnresolvedFilters(query)).toStrictEqual([]);
  });
});

describe("A key writing an attribute", () => {
  const printQueries = [
    "print:wtr",
    "prints:wtr",
    "printing:wtr",
    "printings:wtr",
  ];

  it.each(printQueries)("%s reports nothing", (query) => {
    expect(getUnresolvedFilters(query)).toStrictEqual([]);
  });
});

describe("A query the parse resolves whole", () => {
  const resolvedQueries = [
    "c:brute",
    "t:action st:aura",
    "s:wtr foil:rainbow",
    "is:reprint",
    "r:majestic",
    "l:blitz",
    "banned:cc",
    "rf:blitz",
    "treat:ea",
    "chain:dishonor",
    "blade arrow",
  ];

  it.each(resolvedQueries)("%s reports nothing", (query) => {
    expect(getUnresolvedFilters(query)).toStrictEqual([]);
    expect(cardSearch.search(query).unresolvedFilters).toStrictEqual([]);
  });
});

describe("The report a search answers with", () => {
  it("carries what the parse could not place", () => {
    expect(cardSearch.search("t:aura").unresolvedFilters).toStrictEqual([
      { key: "t", reason: "value", suggestedKey: "st", values: ["aura"] },
    ]);
  });
});

describe("The report and the cards", () => {
  it("leaves the filter the term wrote", () => {
    const { appliedFilters } = getParsedQuery("t:aura", index);
    const [{ filterToPropertyMapping, values }] = appliedFilters;

    expect(appliedFilters.length).toEqual(1);
    expect(getCategoryOfMapping(filterToPropertyMapping)).toEqual(
      FilterCategory.Type,
    );
    expect(values).toEqual(["aura"]);
  });

  it("answers with the cards that filter matches", () => {
    expect(getResultCount("t:aura")).toEqual(0);
    expect(getResultCount("st:aura")).toBeGreaterThan(0);
  });
});
