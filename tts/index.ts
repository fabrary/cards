import { existsSync, mkdirSync, writeFileSync } from "fs";
import { cards } from "../dist/index";

const generateTTSCardNameAndDescriptions = () => {
  return cards
    .flatMap((card) =>
      card.setIdentifiers.map((setIdentifier) => ({ setIdentifier, card }))
    )
    .sort((c1, c2) => c1.setIdentifier.localeCompare(c2.setIdentifier))
    .map(({ setIdentifier, card }) => {
      const pitch = card.pitch ? ` (${card.pitch})` : ``;
      const text = card.functionalText?.replace(/\n/g, "\\n") || "";
      return `["${setIdentifier}"] = { name = "${card.name}${pitch}", text = "'${text}'"}`;
    })
    .join("\n");
};

const writeFiles = () => {
  const tts = generateTTSCardNameAndDescriptions();
  writeFileSync(`tts/tts.txt`, tts);
};

writeFiles();
