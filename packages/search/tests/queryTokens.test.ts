import { describe, expect, it } from "@jest/globals";
import { FilterCategory } from "../src/filterMappings";
import { filterAliases, filterMappingsByAlias } from "./_filterMappings";
import {
  getFilterTokenSpansForKey,
  getIsExcludedToken,
  getQueryFilterToken,
  getQueryTokenSpans,
  getQuotedValue,
  getResolvedFilterKey,
  getUnquotedValue,
  getValuePartsFromFilterValue,
  getValuesFromFilterValue,
} from "../src/queryTokens";

describe("getQueryTokenSpans", () => {
  it("spans each word of plain text, with where it sits", () => {
    expect(getQueryTokenSpans("blade arrow")).toEqual([
      { end: 5, start: 0, token: "blade" },
      { end: 11, start: 6, token: "arrow" },
    ]);
  });

  it("collapses a run of spaces rather than spanning it", () => {
    expect(getQueryTokenSpans("  blade   arrow  ")).toEqual([
      { end: 7, start: 2, token: "blade" },
      { end: 15, start: 10, token: "arrow" },
    ]);
  });

  it("keeps a quoted value attached to the key that takes it", () => {
    expect(getQueryTokenSpans('c:brute n:"rise up, together" arrow')).toEqual([
      { end: 7, start: 0, token: "c:brute" },
      { end: 29, start: 8, token: 'n:"rise up, together"' },
      { end: 35, start: 30, token: "arrow" },
    ]);
  });

  it("runs an unbalanced quote to the end of the text", () => {
    expect(getQueryTokenSpans('k:"go again')).toEqual([
      { end: 11, start: 0, token: 'k:"go again' },
    ]);
  });

  it("spans a comma OR list as one token", () => {
    expect(getQueryTokenSpans("c:brute,guardian")).toEqual([
      { end: 16, start: 0, token: "c:brute,guardian" },
    ]);
  });

  it("spans a plus AND list as one token", () => {
    expect(getQueryTokenSpans("c:brute+guardian")).toEqual([
      { end: 16, start: 0, token: "c:brute+guardian" },
    ]);
  });

  it("spans nothing in empty text", () => {
    expect(getQueryTokenSpans("")).toEqual([]);
  });
});

describe("getQueryFilterToken", () => {
  it("reads a key and its value, cased as they were written", () => {
    expect(getQueryFilterToken("C:Brute")).toEqual({
      isAndList: false,
      isExcluded: false,
      key: "C",
      valueText: "Brute",
    });
  });

  it("marks a token excluded by either prefix, and keeps the key", () => {
    expect(getQueryFilterToken("-c:brute")).toEqual({
      isAndList: false,
      isExcluded: true,
      key: "c",
      valueText: "brute",
    });
    expect(getQueryFilterToken("!c:brute")).toEqual({
      isAndList: false,
      isExcluded: true,
      key: "c",
      valueText: "brute",
    });
  });

  it("marks a value list joined by plus as an AND list", () => {
    expect(getQueryFilterToken("c:brute+guardian")?.isAndList).toBe(true);
    expect(getQueryFilterToken("c:brute,guardian")?.isAndList).toBe(false);
  });

  it("keeps the quotes of a quoted value", () => {
    expect(getQueryFilterToken('n:"rise up, together"')?.valueText).toBe(
      '"rise up, together"',
    );
  });

  it("answers with nothing for a token that names no filter", () => {
    expect(getQueryFilterToken("brute")).toBeUndefined();
    expect(getQueryFilterToken("c:")).toBeUndefined();
    expect(getQueryFilterToken(":brute")).toBeUndefined();
    expect(getQueryFilterToken("x2:foo")).toBeUndefined();
    expect(getQueryFilterToken("c-:brute")).toBeUndefined();
  });
});

describe("getIsExcludedToken", () => {
  it("reads either exclusion prefix", () => {
    expect(getIsExcludedToken("-c:brute")).toBe(true);
    expect(getIsExcludedToken("!c:brute")).toBe(true);
  });

  it("reads a token with no prefix as asked for rather than excluded", () => {
    expect(getIsExcludedToken("c:brute")).toBe(false);
  });
});

describe("getFilterTokenSpansForKey", () => {
  it("finds a token written under another alias of the same filter", () => {
    expect(
      getFilterTokenSpansForKey("class:brute c:guardian", "c").map(
        ({ token }) => token,
      ),
    ).toEqual(["class:brute", "c:guardian"]);
  });

  it("matches the key whatever its case", () => {
    expect(getFilterTokenSpansForKey("C:Brute", "class")).toHaveLength(1);
  });

  it("finds excluded tokens alongside the ones asked for", () => {
    expect(
      getFilterTokenSpansForKey("c:brute -c:guardian", "c").map(
        ({ isExcluded }) => isExcluded,
      ),
    ).toEqual([false, true]);
  });

  it("ignores other keys and free text", () => {
    expect(getFilterTokenSpansForKey("brute cost:1 co:brute", "c")).toEqual([]);
  });

  it("carries where each token sits, so an edit can splice one", () => {
    const [span] = getFilterTokenSpansForKey("blade c:brute arrow", "c");

    expect(span).toEqual({
      end: 13,
      isAndList: false,
      isExcluded: false,
      key: "c",
      start: 6,
      token: "c:brute",
      valueText: "brute",
    });
  });

  it("matches a key naming no filter by its spelling alone", () => {
    expect(getFilterTokenSpansForKey("zz:brute", "zz")).toHaveLength(1);
    expect(getFilterTokenSpansForKey("zz:brute", "yy")).toEqual([]);
  });
});

describe("getValuePartsFromFilterValue", () => {
  it("splits a comma OR list, quotes as written", () => {
    expect(getValuePartsFromFilterValue('dominate,"blood debt"')).toEqual([
      "dominate",
      '"blood debt"',
    ]);
  });

  it("keeps a comma inside quotes out of the split", () => {
    expect(getValuePartsFromFilterValue('"rise up, together"')).toEqual([
      '"rise up, together"',
    ]);
  });

  it("finds no parts in an empty value", () => {
    expect(getValuePartsFromFilterValue("")).toEqual([]);
  });
});

describe("getValuesFromFilterValue", () => {
  it("unquotes each part of a comma OR list", () => {
    expect(getValuesFromFilterValue('dominate,"blood debt"')).toEqual([
      "dominate",
      "blood debt",
    ]);
  });

  it("drops a part holding nothing but its quotes", () => {
    expect(getValuesFromFilterValue('brute,""')).toEqual(["brute"]);
  });
});

describe("getUnquotedValue", () => {
  it("takes the quotes off a quoted value", () => {
    expect(getUnquotedValue('"blood debt"')).toBe("blood debt");
  });

  it("leaves an unquoted value alone", () => {
    expect(getUnquotedValue("brute")).toBe("brute");
  });
});

describe("getQuotedValue", () => {
  it("quotes a value that would not read back as written", () => {
    expect(getQuotedValue("Welcome to Rathe")).toBe('"Welcome to Rathe"');
    expect(getQuotedValue("Rise Up, Together")).toBe('"Rise Up, Together"');
    expect(getQuotedValue("Ready:Set")).toBe('"Ready:Set"');
    expect(getQuotedValue("Nitro+Mechanica")).toBe('"Nitro+Mechanica"');
  });

  it("leaves a value that reads back as written unquoted", () => {
    expect(getQuotedValue("Brute")).toBe("Brute");
  });

  it("drops a quote the grammar cannot close, so the value stays one value", () => {
    expect(getQuotedValue('a" b')).toBe('"a b"');
    expect(getValuesFromFilterValue(getQuotedValue('a" b'))).toEqual(["a b"]);
  });
});

describe("getResolvedFilterKey", () => {
  it.each(filterAliases)(
    "%s resolves to the filter its mapping names",
    (alias) => {
      expect(getResolvedFilterKey(alias)).toBe(
        filterMappingsByAlias[alias]?.category,
      );
    },
  );

  const aliasGroups: [FilterCategory, string[]][] = [
    [FilterCategory.Class, ["c", "class"]],
    [FilterCategory.Treatment, ["var", "variation", "treat", "treatment"]],
    [FilterCategory.Intellect, ["i", "intellect"]],
    [FilterCategory.Life, ["li", "life"]],
    [FilterCategory.Bond, ["bond", "bonds"]],
    [FilterCategory.Flow, ["flow", "flows"]],
    [FilterCategory.Shorthand, ["short", "shorthand", "shorthands"]],
    [FilterCategory.Legal, ["hero", "l", "legal"]],
  ];
  it.each(aliasGroups)(
    "%s answers alike from every alias",
    (category, aliases) => {
      for (const alias of aliases) {
        expect(getResolvedFilterKey(alias)).toBe(category);
      }
    },
  );

  it("reads a key whatever its case", () => {
    expect(getResolvedFilterKey("C")).toBe(getResolvedFilterKey("c"));
    expect(getResolvedFilterKey("ClAsS")).toBe(FilterCategory.Class);
  });

  it("leaves a key naming no filter comparable to its own spelling", () => {
    expect(getResolvedFilterKey("nonsense")).toBe("nonsense");
    expect(getResolvedFilterKey("ZZ")).toBe("zz");
  });

  it.each(Object.getOwnPropertyNames(Object.prototype))(
    "%s names no filter, so it stands for itself",
    (inheritedName) => {
      expect(getResolvedFilterKey(inheritedName)).toBe(
        inheritedName.toLowerCase(),
      );
    },
  );
});
