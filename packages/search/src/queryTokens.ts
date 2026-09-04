// Query text as spans over the text as written, for a reader that reports on a
// query or edits it rather than consuming it. Splitting on whitespace shreds a
// quoted value, so everything reading query text without parsing it comes
// through here.

import { availableExclusions, getFilterCategory } from "./filterMappings.js";
import { getEscapedForRegExp } from "./helpers.js";

export interface QueryTokenSpan {
  end: number;
  start: number;
  token: string;
}

/** A filter token's parts, keyed and cased as they were written. */
export interface QueryFilterToken {
  // An AND list is not the OR list a control or a toggle edits, so a token
  // carrying one is left alone everywhere.
  isAndList: boolean;
  isExcluded: boolean;
  key: string;
  valueText: string;
}

export type QueryFilterTokenSpan = QueryFilterToken & QueryTokenSpan;

const EXCLUSION_CHARACTERS = availableExclusions
  .map(getEscapedForRegExp)
  .join("");

// A lone quote runs to end of string instead of being dropped, matching how a
// reader sees their own unfinished quote.
const TOKEN_PATTERN = /(?:[^\s"]+|"[^"]*(?:"|$))+/g;
const FILTER_TOKEN_PATTERN = new RegExp(
  `^([${EXCLUSION_CHARACTERS}])?([A-Za-z]+):(.+)$`,
);
const VALUE_PART_PATTERN = /"[^"]*"|[^,]+/g;

export const getQueryTokenSpans = (text: string): QueryTokenSpan[] => {
  const spans: QueryTokenSpan[] = [];
  for (const match of text.matchAll(TOKEN_PATTERN)) {
    spans.push({
      end: match.index + match[0].length,
      start: match.index,
      token: match[0],
    });
  }
  return spans;
};

export const getIsExcludedToken = (token: string): boolean =>
  availableExclusions.some((exclusion) => token.startsWith(exclusion));

export const getQueryFilterToken = (
  token: string,
): QueryFilterToken | undefined => {
  const match = token.match(FILTER_TOKEN_PATTERN);
  let filterToken: QueryFilterToken | undefined;
  if (match) {
    filterToken = {
      isAndList: match[3].includes("+"),
      isExcluded: !!match[1],
      key: match[2],
      valueText: match[3],
    };
  }
  return filterToken;
};

/**
 * A key naming no filter stands for its own lowercased spelling, which leaves
 * it comparable to itself and to nothing else.
 */
export const getResolvedFilterKey = (key: string): string =>
  getFilterCategory(key) ?? key.toLowerCase();

// Every filter token written against one key, positive and excluded alike, in
// text order.
export const getFilterTokenSpansForKey = (
  text: string,
  key: string,
): QueryFilterTokenSpan[] => {
  const resolvedKey = getResolvedFilterKey(key);
  const spans: QueryFilterTokenSpan[] = [];
  for (const { end, start, token } of getQueryTokenSpans(text)) {
    const filterToken = getQueryFilterToken(token);
    if (filterToken && getResolvedFilterKey(filterToken.key) === resolvedKey) {
      spans.push({ ...filterToken, end, start, token });
    }
  }
  return spans;
};

// The raw comma-separated parts of a filter value, quotes as written, so an
// edit can put the untouched ones back byte for byte.
export const getValuePartsFromFilterValue = (filterValue: string): string[] =>
  filterValue.match(VALUE_PART_PATTERN) || [];

export const getUnquotedValue = (valuePart: string): string =>
  valuePart.replace(/^"|"$/g, "");

export const getValuesFromFilterValue = (filterValue: string): string[] => {
  const values: string[] = [];
  for (const part of getValuePartsFromFilterValue(filterValue)) {
    const value = getUnquotedValue(part);
    if (value) {
      values.push(value);
    }
  }
  return values;
};

// A value carrying any of these reads back as something other than the one
// value it was written as, so it is written quoted.
const UNQUOTED_VALUE_BREAK_PATTERN = /[\s,:+"]/;

/**
 * The grammar has no escape for a quote, so a value carrying one loses it
 * rather than closing the quotes that wrap it early.
 */
export const getQuotedValue = (value: string): string => {
  const valueWithoutQuotes = value.replaceAll('"', "");

  return UNQUOTED_VALUE_BREAK_PATTERN.test(value)
    ? `"${valueWithoutQuotes}"`
    : valueWithoutQuotes;
};
