import { MARKUP, PUNCTUATION } from "./constants.js";

export const getCleanText = (text: string): string =>
  getNormalizedText(text.toLowerCase().trim().replace(PUNCTUATION, ""));

export const getNormalizedText = (text: string): string =>
  text.normalize("NFD").replace(/\p{Diacritic}/gu, "");

export const getTextWithoutMarkup = (text: string): string =>
  text.replace(MARKUP, "");

/**
 * Text built into a pattern rather than matched by one. A hyphen is escaped
 * along with the operators, so the text also reads as itself inside a
 * character class, where a hyphen would otherwise open a range.
 */
export const getEscapedForRegExp = (text: string): string =>
  text.replace(/[.*+?^${}()|[\]\\-]/g, "\\$&");
