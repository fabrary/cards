// The parse a search runs on: query text in, the terms it holds and everything
// they ask for out. The tokenizer marks where a term begins and ends, a
// resolver reads what each one asks of its filter, and what neither could
// place is reported rather than dropped.

import {
  Hero,
  Release,
  setToSetIdentifierMappings,
} from "@flesh-and-blood/types";
import { getAbbreviation } from "./abbreviations.js";
import { PUNCTUATION } from "./constants.js";
import {
  aliasesByFilterCategory,
  availableExclusions,
  FilterCategory,
  getFilterMapping,
  getSuggestedFilterKey,
  type AppliedFilter,
  type FilterValue,
} from "./filterMappings.js";
import {
  getFilterResolution,
  type FilterResolverContext,
  type QueryAttributes,
} from "./filterResolvers.js";
import { getEscapedForRegExp, getNormalizedFilterValue } from "./helpers.js";
import { getExcludedMetaFilters } from "./metaFilters.js";
import {
  getFilterValue,
  getIncompleteFilterToken,
  getQueryFilterToken,
  getQueryTokenSpans,
  getUnquotedValue,
  getValuesFromFilterValue,
  type QueryTokenSpan,
} from "./queryTokens.js";
import { CatalogueIndex } from "./searchIndex.js";
import { multiWordShorthands, singleWordShorthands } from "./shorthands.js";

export type { QueryAttributes } from "./filterResolvers.js";

/** Whether a filter's key or its values are what the parse could not place. */
export type UnresolvedFilterReason = "key" | "value";

export interface UnresolvedFilter {
  key: string;
  reason: UnresolvedFilterReason;
  /** The canonical alias of a filter whose values hold the value written. */
  suggestedKey?: string;
  /** The values that named nothing; empty where the key is what named nothing. */
  values: string[];
}

/** A term naming no filter: words for the fuzzy search to score cards against. */
export interface ParsedTextNode extends QueryTokenSpan {
  isFilter: false;
}

/**
 * A term naming a filter. Its span locates the term as written, so a reader
 * can splice that term out of the query text: an expanded node stands for a
 * shorthand the reader wrote, shares its span with the siblings the same
 * shorthand produced, and so cannot be spliced on its own.
 */
export interface ParsedFilterNode extends QueryTokenSpan {
  /**
   * The values as the filter reads them, so a reader can match a term against
   * the values its filter offers: `foil:cf` resolves to cold. A filter
   * matching on the values as written carries those.
   */
  canonicalValues: string[];
  /** The filter the key names, absent where it names none. */
  category?: FilterCategory;
  /** The values as the term wrote them, each with its own comparison. */
  filterValues: FilterValue[];
  isAnd: boolean;
  isExcluded: boolean;
  /** Whether a shorthand wrote this term rather than the reader. */
  isExpanded: boolean;
  isFilter: true;
  /**
   * False where the key names no filter, or where a value named nothing that
   * filter reads. A term written with no value asks for nothing and so has
   * nothing to resolve, which reads as resolved.
   */
  isResolved: boolean;
  key: string;
}

export type ParsedQueryNode = ParsedFilterNode | ParsedTextNode;

export interface ParsedQuery {
  appliedFilters: AppliedFilter[];
  attributes: QueryAttributes;
  keywords: string[];
  /** Every term of the query, in the order they were written. */
  nodes: ParsedQueryNode[];
  /**
   * The text the terms were read from: the query lowercased, with its
   * shorthands and set names expanded. Each node's span indexes into it.
   */
  text: string;
  unresolvedFilters: UnresolvedFilter[];
}

export interface ParseOptions {
  additionalHeroes?: Hero[];
  additionalSets?: Release[];
  /** Today, for the filters that compare a release date against it. */
  today?: string;
}

interface PreparedQuery {
  isWholeQueryAbbreviation: boolean;
  text: string;
}

/** A term of the query, or one a shorthand expanded it into. */
interface QueryTermSpan extends QueryTokenSpan {
  isExpanded: boolean;
}

// A closing smart quote is what a phone writes for the quote a reader typed,
// and an opening one is its pair.
const SMART_DOUBLE_QUOTES = ["“", "”"];

const punctuationOverrides = [
  {
    text: Release.ClassicBattlesRhinarDorinthea.toLowerCase(),
    override: Release.ClassicBattlesRhinarDorinthea.toLowerCase().replaceAll(
      PUNCTUATION,
      "",
    ),
  },
];

const setIdentifiersBySetName = new Map(
  Object.entries(setToSetIdentifierMappings).map(([set, setIdentifiers]) => [
    set.toLowerCase(),
    setIdentifiers,
  ]),
);

// A print is a set's identifier, so both filters take a set name where a value
// is expected.
const SET_FILTER_KEYS = [
  ...aliasesByFilterCategory[FilterCategory.Set],
  ...aliasesByFilterCategory[FilterCategory.Print],
];

const EXCLUSION_CHARACTERS = availableExclusions
  .map(getEscapedForRegExp)
  .join("");

// Longest first, so a set name carrying a shorter set's name inside it keeps
// its own identifier.
const setNamesLongestFirst = [...setIdentifiersBySetName.keys()]
  .sort((first, second) => second.length - first.length)
  .map(getEscapedForRegExp)
  .join("|");

/**
 * A set name where a set filter is expecting a value: opening one, or following
 * a separator within one. Expanding the name to its identifier is what lets an
 * unquoted multi-word name survive the split into terms, so it is worth doing
 * only where a set is being asked for. Matched anywhere else it rewrites a
 * search for a card into a search for a set identifier, which the fuzzy search
 * then matches against every card name carrying those letters.
 */
const setNameInSetFilterPattern = new RegExp(
  `(?<=^|\\s)([${EXCLUSION_CHARACTERS}]?(?:${SET_FILTER_KEYS.join(
    "|",
  )}):(?:[^\\s]*[,+])?"?)(${setNamesLongestFirst})(?="?(?:[,+]|\\s|$))`,
  "g",
);

/**
 * Everything the query means before it holds terms at all: the rewrites that
 * settle what a term will be, run over the whole text.
 */
const getPreparedQuery = (
  text: string,
  index: CatalogueIndex,
): PreparedQuery => {
  let preparedText = text.trim().toLowerCase();

  for (const smartQuote of SMART_DOUBLE_QUOTES) {
    preparedText = preparedText.replaceAll(smartQuote, '"');
  }

  for (const { expanded: filters, shorthands } of multiWordShorthands) {
    for (const shorthand of shorthands) {
      if (preparedText.includes(shorthand)) {
        preparedText = preparedText.replace(shorthand, filters.join(" "));
        break;
      }
    }
  }

  preparedText = preparedText.replace(
    setNameInSetFilterPattern,
    (setNameInSetFilter, filterPrefix, setName) => {
      const setIdentifiers = setIdentifiersBySetName.get(setName);
      return setIdentifiers
        ? `${filterPrefix}${setIdentifiers[0]}`
        : setNameInSetFilter;
    },
  );

  // A search for nothing but a set name browses the set, unless the corpus
  // carries a card by that name: the card is what was asked for.
  const wholeQuerySetIdentifiers = setIdentifiersBySetName.get(preparedText);
  const namesACard = index.getCardsByExactName(preparedText).length > 0;
  if (wholeQuerySetIdentifiers && !namesACard) {
    preparedText = `set:${wholeQuerySetIdentifiers[0]}`;
  }

  for (const { override, text: punctuatedName } of punctuationOverrides) {
    if (preparedText.includes(punctuatedName)) {
      preparedText = preparedText.replace(punctuatedName, override);
    }
  }

  return {
    // A query that is nothing but a card's abbreviation names that card whole,
    // so its own spaces and commas are not separators.
    isWholeQueryAbbreviation: !!getAbbreviation(preparedText)?.card,
    text: preparedText,
  };
};

// A shorthand stands for the terms it expands to, each of which keeps the span
// of the term that wrote them. A card property is left alone, the fuzzy search
// reading it already.
const getExpandedTokens = (
  token: string,
): { isExpanded: boolean; tokens: string[] } => {
  const matchingShorthand = singleWordShorthands.find(({ shorthands }) =>
    shorthands.includes(token),
  );
  const isExpanded = !!matchingShorthand && !matchingShorthand.isCardProperty;

  return {
    isExpanded,
    tokens: isExpanded ? matchingShorthand.expanded : [token],
  };
};

const getQueryTermSpans = ({
  isWholeQueryAbbreviation,
  text,
}: PreparedQuery): QueryTermSpan[] => {
  const termSpans: QueryTermSpan[] = [];
  const tokenSpans = isWholeQueryAbbreviation
    ? [{ end: text.length, start: 0, token: text }]
    : getQueryTokenSpans(text);

  for (const { end, start, token } of tokenSpans) {
    const { isExpanded, tokens } = getExpandedTokens(token);
    for (const expandedToken of tokens) {
      termSpans.push({ end, isExpanded, start, token: expandedToken });
    }
  }

  return termSpans;
};

/**
 * The values a filter term wrote, as the filters read them: unquoted, without
 * the comparison standing in front of each, and stripped of the punctuation a
 * card's own values are compared without. A value that is nothing but
 * punctuation is left out, so a term writing only those reads as one whose
 * values named nothing.
 */
const getFilterValuesFromWrittenValues = (
  writtenValues: string[],
): FilterValue[] => {
  const filterValues: FilterValue[] = [];
  for (const writtenValue of writtenValues) {
    const { modifier, value } = getFilterValue(writtenValue);
    const normalizedValue = getNormalizedFilterValue(value);
    if (normalizedValue) {
      filterValues.push({ modifier, value: normalizedValue });
    }
  }

  return filterValues;
};

// What a term's unplaced values report, carrying the filter that holds them
// where exactly one filter other than the one written does.
const getUnresolvedFilter = (
  key: string,
  category: FilterCategory,
  values: string[],
): UnresolvedFilter => {
  const unresolvedFilter: UnresolvedFilter = { key, reason: "value", values };
  const suggestedKey = getSuggestedFilterKey(category, values);
  if (suggestedKey) {
    unresolvedFilter.suggestedKey = suggestedKey;
  }

  return unresolvedFilter;
};

// Today in the viewer's timezone, formatted the way firstReleaseDate is stored
// so the two order correctly as plain strings. Deliberately not the UTC date,
// which would read as tomorrow for anyone far enough east.
const getTodayAsReleaseDate = (): string => {
  const now = new Date();
  const month = `${now.getMonth() + 1}`.padStart(2, "0");
  const dayOfMonth = `${now.getDate()}`.padStart(2, "0");

  return `${now.getFullYear()}-${month}-${dayOfMonth}`;
};

export const getParsedQuery = (
  text: string,
  index: CatalogueIndex,
  {
    additionalHeroes = [],
    additionalSets = [],
    today = getTodayAsReleaseDate(),
  }: ParseOptions = {},
): ParsedQuery => {
  const preparedQuery = getPreparedQuery(text, index);
  const context: FilterResolverContext = {
    additionalHeroes,
    additionalSets,
    index,
    today,
  };

  const appliedFilters: AppliedFilter[] = [];
  // The attributes narrow which printings a result renders, so an excluded
  // filter writes none of them: its cards have already left the results, and
  // keeping only the printings carrying the excluded value would leave every
  // result with nothing to render.
  const attributes: QueryAttributes = {
    artists: [],
    foilings: [],
    isExpansionSlot: false,
    prints: [],
    rarities: [],
    releases: [],
    treatments: [],
  };
  const keywords: string[] = [];
  const nodes: ParsedQueryNode[] = [];
  const unresolvedFilters: UnresolvedFilter[] = [];

  for (const termSpan of getQueryTermSpans(preparedQuery)) {
    const filterToken =
      getQueryFilterToken(termSpan.token) ||
      getIncompleteFilterToken(termSpan.token);

    if (filterToken) {
      const { isAndList, isExcluded, key, valueText } = filterToken;
      const mapping = getFilterMapping(key);
      const category = mapping?.category;
      const writtenValues = getValuesFromFilterValue(valueText);
      const filterValues = getFilterValuesFromWrittenValues(writtenValues);
      const node: ParsedFilterNode = {
        ...termSpan,
        canonicalValues: filterValues.map(({ value }) => value),
        category,
        filterValues,
        isAnd: isAndList,
        isExcluded,
        isFilter: true,
        isResolved: true,
        key,
      };

      // A key written with no value asks for nothing yet, so it neither
      // narrows the results nor reads as a mistake.
      if (writtenValues.length > 0) {
        if (mapping && category) {
          // A term whose values are all punctuation asks nothing of its
          // filter, so what it wrote is what it could not place.
          let unresolvedValues = writtenValues;

          if (filterValues.length > 0) {
            const resolution = getFilterResolution(
              {
                category,
                filterValues,
                isAnd: node.isAnd,
                isExcluded,
                key,
                mapping,
              },
              context,
            );

            appliedFilters.push(...resolution.appliedFilters);
            if (resolution.canonicalValues) {
              node.canonicalValues = resolution.canonicalValues;
            }
            if (resolution.attributes) {
              Object.assign(attributes, resolution.attributes);
            }

            unresolvedValues = resolution.unresolvedValues;
          }

          if (unresolvedValues.length > 0) {
            node.isResolved = false;
            unresolvedFilters.push(
              getUnresolvedFilter(key, category, unresolvedValues),
            );
          }
        } else {
          node.isResolved = false;
          unresolvedFilters.push({ key, reason: "key", values: [] });
        }
      }

      nodes.push(node);
    } else {
      const { end, start, token } = termSpan;
      nodes.push({ end, isFilter: false, start, token });

      const freeText = getUnquotedValue(termSpan.token);
      const abbreviatedCard = getAbbreviation(freeText)?.card;
      const excludedMetaFilters = getExcludedMetaFilters(freeText);
      if (abbreviatedCard) {
        // Quoted, so the fuzzy search reads the name as a phrase.
        keywords.push(
          `"${abbreviatedCard.toLowerCase().replace(PUNCTUATION, "")}"`,
        );
      } else if (excludedMetaFilters.length > 0) {
        appliedFilters.push(...excludedMetaFilters);
      } else if (freeText) {
        keywords.push(freeText.replace(PUNCTUATION, ""));
      }
    }
  }

  return {
    appliedFilters,
    attributes,
    keywords,
    nodes,
    text: preparedQuery.text,
    unresolvedFilters,
  };
};
