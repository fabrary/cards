import { cards } from "../dist/index";
import {
  ADDITIONS,
  EXCLUSIONS,
  IGNORES,
  SUGGESTIONS,
} from "./spelling-additions";
// import { fabDictionary, fabDictionaryIgnore } from "./spelling-additions-local";

const PUNCTUATION = /[!"#$%&'’()*+,-./:;<=>?@[\]^_`|~]/g;

const Typo = require("typo-js");

const dictionary = new Typo("en_US");
for (const word of ADDITIONS) {
  dictionary.dictionaryTable[word] = null;
}

describe("Card names are spelled correctly", () => {
  const parts: { name: string; part: string; suggested: string }[] = [];

  for (const { name, setIdentifiers } of cards) {
    for (const dirtyPart of name.split(" ")) {
      const fullName = `${name} ${setIdentifiers.join(",")}`;

      const part = dirtyPart.replaceAll("'s", "").replaceAll(PUNCTUATION, "");

      const suggestions =
        SUGGESTIONS[part.toLowerCase()] ||
        (dictionary.suggest(part) as string[]) ||
        [];
      const suggested =
        suggestions.length > 0 ? suggestions.join(", ") : "No suggestions";

      parts.push({ name: fullName, part, suggested });
    }
  }

  it.each(parts)("[$name ($part)]: $suggested", ({ part }) => {
    const isSpelledIncorrectly = SUGGESTIONS[part.toLowerCase()] !== undefined;

    const isSpelledCorrectly =
      IGNORES.includes(part.toLowerCase()) || dictionary.check(part);

    const combined = isSpelledCorrectly && !isSpelledIncorrectly;

    // if (part.toLowerCase() === "ziggy") {
    //   console.log(
    //     `Ziggy=${part}: isSpelledCorrectly=${isSpelledCorrectly} isSpelledIncorrectly=${isSpelledIncorrectly} combined=${combined}`,
    //   );
    //   throw new Error("Ziggy!");
    // }

    expect(combined).toEqual(true);
  });
});
