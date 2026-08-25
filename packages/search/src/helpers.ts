import { MARKUP, PUNCTUATION } from "./constants.js";

export const getCleanText = (text: string): string =>
  getNormalizedText(text.toLowerCase().trim().replace(PUNCTUATION, ""));

export const getNormalizedText = (text: string): string =>
  text.normalize("NFD").replace(/\p{Diacritic}/gu, "");

export const getTextWithoutMarkup = (text: string): string =>
  text.replace(MARKUP, "");
