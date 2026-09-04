// Query text as spans over the text as written, for a reader that reports on a
// query or edits it rather than consuming it. Splitting on whitespace shreds a
// quoted value, so everything reading query text without parsing it comes
// through here.

import {
  availableExclusions,
  availableModifiers,
  getFilterCategory,
} from "./filterMappings.js";
import type { FilterValue, Modifier } from "./filterMappings.js";
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
const INCOMPLETE_FILTER_TOKEN_PATTERN = new RegExp(
  `^([${EXCLUSION_CHARACTERS}])?([A-Za-z]+):$`,
);

const OR_SEPARATOR = ",";
const AND_SEPARATOR = "+";
const QUOTE = '"';

/** The parts a filter value holds, and the separator standing between them. */
interface FilterValueParts {
  isAndList: boolean;
  parts: string[];
}

/**
 * A filter value read part by part. A quoted run stands as one part, so the
 * separators inside it are the value's own characters rather than the
 * grammar's, and a quote left open holds the rest of the value the same way.
 */
const getFilterValueParts = (filterValue: string): FilterValueParts => {
  const parts: string[] = [];
  let isAndList = false;
  let part = "";
  let isInsideQuotes = false;

  for (const character of filterValue) {
    const isSeparator =
      !isInsideQuotes &&
      (character === OR_SEPARATOR || character === AND_SEPARATOR);

    if (character === QUOTE) {
      isInsideQuotes = !isInsideQuotes;
      part += character;
    } else if (isSeparator) {
      isAndList = isAndList || character === AND_SEPARATOR;
      if (part) {
        parts.push(part);
      }
      part = "";
    } else {
      part += character;
    }
  }

  if (part) {
    parts.push(part);
  }

  return { isAndList, parts };
};

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
    const [, exclusion, key, valueText] = match;
    filterToken = {
      isAndList: getFilterValueParts(valueText).isAndList,
      isExcluded: !!exclusion,
      key,
      valueText,
    };
  }
  return filterToken;
};

/**
 * A key written with no value behind it, which is a reader partway through
 * typing one rather than a term asking for anything. Answers with the key so a
 * consumer can tell it from free text carrying a colon.
 */
export const getIncompleteFilterToken = (
  token: string,
): QueryFilterToken | undefined => {
  const match = token.match(INCOMPLETE_FILTER_TOKEN_PATTERN);
  let filterToken: QueryFilterToken | undefined;
  if (match) {
    filterToken = {
      isAndList: false,
      isExcluded: !!match[1],
      key: match[2],
      valueText: "",
    };
  }
  return filterToken;
};

/**
 * A value part as the grammar reads it: the comparison standing in front of the
 * value, and the value behind it.
 */
export const getFilterValue = (valuePart: string): FilterValue => {
  const writtenValue = valuePart.trim();
  const modifier: Modifier | undefined = availableModifiers.find(
    (availableModifier) => writtenValue.startsWith(availableModifier),
  );

  return {
    modifier,
    value: modifier ? writtenValue.slice(modifier.length).trim() : writtenValue,
  };
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

/**
 * The parts of a filter value, quotes as written, so an edit can put the
 * untouched ones back byte for byte. Either separator splits them, and a
 * token's `isAndList` says which one the value was written with.
 */
export const getValuePartsFromFilterValue = (filterValue: string): string[] =>
  getFilterValueParts(filterValue).parts;

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
