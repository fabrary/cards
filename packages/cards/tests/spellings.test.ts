import { cards } from "../dist/index";
import { fabDictionary, fabDictionaryIgnore } from "./spelling-additions";
// import { fabDictionary, fabDictionaryIgnore } from "./spelling-additions-local";

const PUNCTUATION = /[!"#$%&'’()*+,-./:;<=>?@[\]^_`|~]/g;

const Typo = require("typo-js");

const dictionary = new Typo("en_US");
for (const word of fabDictionary) {
  dictionary.dictionaryTable[word] = null;
}

describe("Card names are spelled correctly", () => {
  const parts: { name: string; part: string; suggested: string }[] = [];

  for (const { name, setIdentifiers } of cards) {
    for (const dirtyPart of name.split(" ")) {
      const fullName = `${name} ${setIdentifiers.join(",")}`;

      const part = dirtyPart.replaceAll("'s", "").replaceAll(PUNCTUATION, "");

      const suggestions = (dictionary.suggest(part) as string[]) || [];
      const suggested =
        suggestions.length > 0 ? suggestions.join(", ") : "No suggestions";

      parts.push({ name: fullName, part, suggested });
    }
  }
  it.each(parts)("[$name] $part ($suggested)", ({ part }) => {
    const isSpelledCorrectly =
      fabDictionaryIgnore.includes(part.toLowerCase()) ||
      dictionary.check(part);

    expect(isSpelledCorrectly).toEqual(true);
  });
});
