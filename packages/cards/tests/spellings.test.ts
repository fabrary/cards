import { cards } from "../dist/index";
import { fabDictionary, fabDictionaryIgnore } from "./spelling-additions";

const PUNCTUATION = /[!"#$%&'’()*+,-./:;<=>?@[\]^_`{|}~]/g;

const Typo = require("typo-js");

const dictionary = new Typo("en_US");
for (const word of fabDictionary) {
  dictionary.dictionaryTable[word] = null;
}

describe("Card names are spelled correctly", () => {
  it.each(cards.map(({ name }) => name))("%s is spelled correctly", (name) => {
    const words = name.split(" ");
    for (const word of words) {
      const clean = word.replaceAll("'s", "").replaceAll(PUNCTUATION, "");
      const isSpelledCorrectly =
        fabDictionaryIgnore.includes(clean.toLowerCase()) ||
        dictionary.check(clean);

      if (!isSpelledCorrectly) {
        console.log(`${clean}: ${dictionary.suggest(clean)}`);
      }

      expect(isSpelledCorrectly).toEqual(true);
    }
  });
});
