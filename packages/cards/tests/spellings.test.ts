import { describe, expect, it, xit } from "@jest/globals";
import { cards } from "../dist/index";
import {
  ADDITIONS,
  EXCLUSIONS,
  IGNORES,
  SUGGESTIONS,
} from "./spelling-additions";
// import { fabDictionary, fabDictionaryIgnore } from "./spelling-additions-local";

const PUNCTUATION = /[!"#$%&'’()*+,-./:;<=>?@[\]^_`|~]/g;

// eslint-disable-next-line @typescript-eslint/no-require-imports -- typo-js ships no type declarations
const Typo = require("typo-js");

const dictionary = new Typo("en_US");
for (const word of ADDITIONS) {
  dictionary.dictionaryTable[word] = null;
}

describe("Card names are spelled correctly", () => {
  const parts: { name: string; part: string }[] = [];

  for (const { name, setIdentifiers } of cards) {
    for (const dirtyPart of name.split(" ")) {
      const fullName = `${name} ${setIdentifiers.join(",")}`;

      const part = dirtyPart.replaceAll("'s", "").replaceAll(PUNCTUATION, "");

      parts.push({ name: fullName, part });
    }
  }

  it.each(parts)("[$name ($part)]", ({ part }) => {
    const isSpelledIncorrectly = SUGGESTIONS[part.toLowerCase()] !== undefined;

    const isSpelledCorrectly =
      IGNORES.includes(part.toLowerCase()) || dictionary.check(part);

    const combined = isSpelledCorrectly && !isSpelledIncorrectly;

    // Only run the expensive dictionary.suggest() when a word actually fails,
    // to surface a useful suggestion. Computing it eagerly for every word (just
    // to build the test title) was the bulk of this suite's runtime.
    if (!combined) {
      const suggestions =
        SUGGESTIONS[part.toLowerCase()] ||
        (dictionary.suggest(part) as string[]) ||
        [];
      const suggested =
        suggestions.length > 0 ? suggestions.join(", ") : "No suggestions";

      throw new Error(`"${part}" is misspelled. Suggestions: ${suggested}`);
    }

    expect(combined).toEqual(true);
  });
});
