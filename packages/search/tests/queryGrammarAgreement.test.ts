// Two readers of one grammar: `getKeywordsAndAppliedFiltersFromText` consumes a
// query, `queryTokens.ts` spans it without consuming it. This file pins where
// they read a query alike and, case by case, where they do not. It is deleted
// when the two become one implementation, at which point nothing it asserts can
// diverge.

import { describe, expect, it } from "@jest/globals";
import { cards } from "@flesh-and-blood/cards";
import { FilterCategory } from "../src/filterMappings";
import type { Modifier } from "../src/filterMappings";
import { getKeywordsAndAppliedFiltersFromText } from "../src/filters";
import { getCategoryOfMapping } from "./_filterMappings";
import {
  getQueryFilterToken,
  getQueryTokenSpans,
  getResolvedFilterKey,
} from "../src/queryTokens";
import { getCatalogueIndex } from "../src/searchIndex";

const index = getCatalogueIndex(cards);

// Any fixed day works; no query in the corpus compares against a date.
const PINNED_TODAY = "2026-09-24";

// A meta key expands into filters built for the values it carries, so those
// carry the mapping the expansion wrote rather than the one the key names.
// `legalHeroes` is written by the legal and the banned expansion alike, so a
// banned filter over a hero is not in the corpus.
const CATEGORY_BY_EXPANDED_PROPERTY: { [property: string]: FilterCategory } = {
  bannedFormats: FilterCategory.Banned,
  legalFormats: FilterCategory.Legal,
  legalHeroes: FilterCategory.Legal,
  "printings.rarity": FilterCategory.Rarity,
};

interface QueryReadings {
  parse: {
    categories: string[];
    keywords: string[];
    modifiers: (Modifier | undefined)[];
    prints: string[];
    values: string[][];
  };
  tokens: {
    categories: string[];
    spans: string[];
    valueTexts: string[];
  };
}

const getQueryReadings = (query: string): QueryReadings => {
  const { appliedFilters, attributes, keywords } =
    getKeywordsAndAppliedFiltersFromText(query, index, [], [], PINNED_TODAY);

  const parseCategories: string[] = [];
  const modifiers: (Modifier | undefined)[] = [];
  const values: string[][] = [];
  for (const applied of appliedFilters) {
    const { nestedProperty, property } = applied.filterToPropertyMapping;
    const expandedProperty = nestedProperty
      ? `${property}.${nestedProperty}`
      : property;
    parseCategories.push(
      getCategoryOfMapping(applied.filterToPropertyMapping) ??
        CATEGORY_BY_EXPANDED_PROPERTY[expandedProperty] ??
        `unnamed:${expandedProperty}`,
    );
    modifiers.push(applied.modifier);
    values.push(applied.values);
  }

  const tokenCategories: string[] = [];
  const spans: string[] = [];
  const valueTexts: string[] = [];
  for (const { token } of getQueryTokenSpans(query)) {
    spans.push(token);
    const filterToken = getQueryFilterToken(token);
    if (filterToken) {
      tokenCategories.push(getResolvedFilterKey(filterToken.key));
      valueTexts.push(filterToken.valueText);
    }
  }

  return {
    parse: {
      categories: parseCategories,
      keywords,
      modifiers,
      prints: attributes.prints,
      values,
    },
    tokens: { categories: tokenCategories, spans, valueTexts },
  };
};

describe("Both readers name the same filters, in the same order", () => {
  // One filter per token: a meta key whose values reach two expansions writes
  // two filters of its one category, which the comparison would count twice.
  const agreeingQueries = [
    "c:brute",
    "class:brute",
    "-c:brute",
    "!c:brute",
    "c:brute,guardian",
    "c:brute+guardian",
    'k:"blood debt",dominate -t:hero',
    "t:aura",
    "set:wtr",
    "print:wtr",
    "is:reprint",
    "r:majestic",
    "r:>=majestic",
    "l:blitz",
    "legal:blitz",
    "hero:bravo",
    "banned:blitz",
    // Every spelling of the artist filter writes the artist attribute.
    "a:yang",
    "art:yang",
    "artist:yang",
    // `rf:` names the banned filter, so it expands the way `banned:` does.
    "rf:blitz",
    // One treatment filter under any of its four spellings.
    "var:ea",
    "variation:ea",
    "treat:ea",
    "treatment:ea",
    // Filters sharing a card property, or reading none, which both readers
    // still tell apart.
    "i:4",
    "intellect:4",
    "li:20",
    "life:20",
    "bond:earth",
    "bonds:earth",
    "flow:lightning",
    "flows:lightning",
    "short:buffs",
    "shorthand:buffs",
    "shorthands:buffs",
  ];

  it.each(agreeingQueries)("%s", (query) => {
    const { parse, tokens } = getQueryReadings(query);

    expect(tokens.categories).toEqual(parse.categories);
    expect(parse.categories.length).toBeGreaterThan(0);
  });
});

describe("Where the two readers disagree", () => {
  it("set:crucible of war is one filter to the parse and half a filter to the tokenizer", () => {
    // The parse rewrites a set name standing where a set filter expects a
    // value, before the query is split into terms, and the identifier then
    // resolves back to the release.
    const { parse, tokens } = getQueryReadings("set:crucible of war");

    expect(parse.categories).toEqual([FilterCategory.Set]);
    expect(parse.values).toEqual([["crucible of war"]]);
    expect(tokens.categories).toEqual([FilterCategory.Set]);
    expect(tokens.valueTexts).toEqual(["crucible"]);
    expect(tokens.spans).toEqual(["set:crucible", "of", "war"]);
  });

  it("crucible of war browses a set for the parse and is three words to the tokenizer", () => {
    const { parse, tokens } = getQueryReadings("crucible of war");

    expect(parse.categories).toEqual([FilterCategory.Set]);
    expect(parse.values).toEqual([["crucible of war"]]);
    expect(tokens.categories).toEqual([]);
    expect(tokens.spans).toEqual(["crucible", "of", "war"]);
  });

  it("AA expands to a filter for the parse and stays free text for the tokenizer", () => {
    const { parse, tokens } = getQueryReadings("AA c:brute");

    expect(parse.categories).toEqual([
      FilterCategory.Subtype,
      FilterCategory.Class,
    ]);
    expect(tokens.categories).toEqual([FilterCategory.Class]);
    expect(tokens.spans).toEqual(["AA", "c:brute"]);
  });

  it('k:"go again drops the term for the parse and quotes to the end for the tokenizer', () => {
    // The unbalanced quote never closes, so the parse loses the term whole:
    // no filter, and no keyword either.
    const { parse, tokens } = getQueryReadings('k:"go again');

    expect(parse.categories).toEqual([]);
    expect(parse.keywords).toEqual([]);
    expect(tokens.categories).toEqual([FilterCategory.Keyword]);
    expect(tokens.valueTexts).toEqual(['"go again']);
  });

  it("a quoted comma is an OR list to the parse and one value to the tokenizer", () => {
    // The parse strips the quotes before it splits on ",".
    const { parse, tokens } = getQueryReadings('name:"chane, bound by shadow"');

    expect(parse.categories).toEqual([FilterCategory.Name]);
    expect(parse.values).toEqual([["chane", " bound by shadow"]]);
    expect(tokens.categories).toEqual([FilterCategory.Name]);
    expect(tokens.valueTexts).toEqual(['"chane, bound by shadow"']);
  });

  it("a quoted plus is an AND list to the parse and one value to the tokenizer", () => {
    const { parse, tokens } = getQueryReadings('name:"a+b"');

    expect(parse.categories).toEqual([FilterCategory.Name]);
    expect(parse.values).toEqual([["a", "b"]]);
    expect(tokens.categories).toEqual([FilterCategory.Name]);
    expect(tokens.valueTexts).toEqual(['"a+b"']);
  });

  it("a quoted colon truncates the value for the parse and is kept by the tokenizer", () => {
    // Only the first two parts of the ":" split are read.
    const { parse, tokens } = getQueryReadings('name:"a:b"');

    expect(parse.categories).toEqual([FilterCategory.Name]);
    expect(parse.values).toEqual([["a"]]);
    expect(tokens.categories).toEqual([FilterCategory.Name]);
    expect(tokens.valueTexts).toEqual(['"a:b"']);
  });

  it("cost:1,>2 loses a value to the parse's modifier split and keeps both for the tokenizer", () => {
    const { parse, tokens } = getQueryReadings("cost:1,>2");

    expect(parse.categories).toEqual([FilterCategory.Cost]);
    expect(parse.values).toEqual([["2"]]);
    expect(parse.modifiers).toEqual([">"]);
    expect(tokens.categories).toEqual([FilterCategory.Cost]);
    expect(tokens.valueTexts).toEqual(["1,>2"]);
  });

  it("co:>=3 carries a modifier for the parse and none for the tokenizer", () => {
    // The parse reads the comparison off the value and answers cost 3 or
    // more; the tokenizer leaves it inside the value text.
    const { parse, tokens } = getQueryReadings("co:>=3");

    expect(parse.categories).toEqual([FilterCategory.Cost]);
    expect(parse.values).toEqual([["3"]]);
    expect(parse.modifiers).toEqual([">="]);
    expect(tokens.categories).toEqual([FilterCategory.Cost]);
    expect(tokens.valueTexts).toEqual([">=3"]);
  });

  it("a tab joins two filters for the parse and separates them for the tokenizer", () => {
    // The parse splits terms on spaces only.
    const { parse, tokens } = getQueryReadings("c:brute\tc:runeblade");

    expect(parse.categories).toEqual([FilterCategory.Class]);
    expect(parse.values).toEqual([["brute\tc"]]);
    expect(tokens.categories).toEqual([
      FilterCategory.Class,
      FilterCategory.Class,
    ]);
    expect(tokens.valueTexts).toEqual(["brute", "runeblade"]);
  });

  it("c: is an empty partial match to the parse and no filter to the tokenizer", () => {
    const { parse, tokens } = getQueryReadings("c:");

    expect(parse.categories).toEqual([FilterCategory.Class]);
    expect(parse.values).toEqual([[""]]);
    expect(tokens.categories).toEqual([]);
    expect(tokens.spans).toEqual(["c:"]);
  });

  const keylessQueries = [":brute", "x2:foo", "c-:brute", "--c:brute"];
  it.each(keylessQueries)(
    "%s evaporates for the parse and stays free text for the tokenizer",
    (query) => {
      // The parse reads any term holding a ":" as a filter, so a term whose
      // key names no filter becomes neither a filter nor a keyword.
      const { parse, tokens } = getQueryReadings(query);

      expect(parse.categories).toEqual([]);
      expect(parse.keywords).toEqual([]);
      expect(tokens.categories).toEqual([]);
      expect(tokens.spans).toEqual([query]);
    },
  );

  it("zz:aura widens the parse's search and is an active filter to the tokenizer", () => {
    const { parse, tokens } = getQueryReadings("zz:aura");

    expect(parse.categories).toEqual([]);
    expect(parse.keywords).toEqual([]);
    expect(tokens.categories).toEqual(["zz"]);
  });

  it("prints:wtr writes an attribute for the parse and is an active filter to the tokenizer", () => {
    // No filter is pushed, so the search widens, but the print attribute still
    // narrows which printings each result renders.
    const { parse, tokens } = getQueryReadings("prints:wtr");

    expect(parse.categories).toEqual([]);
    expect(parse.prints).toEqual(["wtr"]);
    expect(tokens.categories).toEqual(["prints"]);
  });

  it("l:zzz resolves to no format or hero for the parse and is an active filter to the tokenizer", () => {
    const { parse, tokens } = getQueryReadings("l:zzz");

    expect(parse.categories).toEqual([]);
    expect(tokens.categories).toEqual([FilterCategory.Legal]);
  });

  it("a closing smart quote is normalized by the parse and ordinary to the tokenizer", () => {
    const { parse, tokens } = getQueryReadings("name:”quoted”");

    expect(parse.categories).toEqual([FilterCategory.Name]);
    expect(parse.values).toEqual([["quoted"]]);
    expect(tokens.categories).toEqual([FilterCategory.Name]);
    expect(tokens.valueTexts).toEqual(["”quoted”"]);
  });

  it("an opening smart quote costs the parse the term and the tokenizer nothing", () => {
    // Only the closing smart quote is normalized, so the parse is left with an
    // unbalanced quote and drops the term whole.
    const { parse, tokens } = getQueryReadings("name:“quoted”");

    expect(parse.categories).toEqual([]);
    expect(parse.keywords).toEqual([]);
    expect(tokens.categories).toEqual([FilterCategory.Name]);
    expect(tokens.valueTexts).toEqual(["“quoted”"]);
  });
});
