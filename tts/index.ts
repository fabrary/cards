import { existsSync, mkdirSync, writeFileSync } from "fs";
import { cards } from "../dist/index";

const generateTTSCardNameAndDescriptions = () => {
  const ttsCards = cards
    .flatMap((card) =>
      card.setIdentifiers.map((setIdentifier) => ({ setIdentifier, card }))
    )
    .sort((c1, c2) => c1.setIdentifier.localeCompare(c2.setIdentifier))
    .map(({ setIdentifier, card }) => {
      const pitch = card.pitch ? ` (${card.pitch})` : ``;
      const text =
        card.functionalText?.replace(/\n/g, "\\n").replace(/"/g, '\\"') || "";
      const isBack = card.isCardBack === true;
      const keywords = card.keywords?.join(",") || "";
      const cardTypes = card.types?.join(",") || "";
      return `["${setIdentifier}${isBack ? "-BACK" : ""}"] = { name = "${
        card.name
      }${pitch}", text = "${text}", keywords = "${keywords}", types = "${cardTypes}"},`;
    })
    .join("\n  ");
  return `OSCCardDB = {\n  ${ttsCards}\n}`;
};

const writeFiles = () => {
  const tts = generateTTSCardNameAndDescriptions();
  writeFileSync(`tts/tts.txt`, tts);
};

writeFiles();
