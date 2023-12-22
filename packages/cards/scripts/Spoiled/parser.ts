import { readFileSync } from "fs";
import { parse } from "papaparse";

export interface ParsedCard {
  abilitiesAndEffects: string[];
  abilityAndEffectKeywords: string[];
  cardKeywords: string[];
  cost: string;
  power: string;
  defense: string;
  functionalText: string;
  grantedKeywords: string[];
  identifiers: string[];
  intellect?: string;
  life?: string;
  name: string;
  pitch?: string;
  setIdentifiers: string[];
  types: string[];
  typeText: string;
  // Format restrictions
  blitzLegal: string;
  classicConstructedLegal: string;
  commonerLegal: string;
  // Printings
  artist: string;
  foiling?: string;
  imageUrl: string;
  rarity: string;
  treatment?: string;
  tcgplayerProductId?: string;
  tcgplayerUrl?: string;
  // 2nd printing
  artist2?: string;
  foiling2?: string;
  imageUrl2?: string;
  rarity2?: string;
  treatment2?: string;
  tcgplayerProductId2?: string;
  tcgplayerUrl2?: string;
  // 3rd printing
  artist3?: string;
  foiling3?: string;
  imageUrl3?: string;
  rarity3?: string;
  treatment3?: string;
  tcgplayerProductId3?: string;
  tcgplayerUrl3?: string;
}

// Make fields that should be lists actually lists instead of a string (which is how CSVs store it)
const fieldsWithListValues = [
  "abilitiesAndEffects",
  "abilityAndEffectKeywords",
  "cardKeywords",
  "grantedKeywords",
  "identifiers",
  "rarities",
  "setIdentifiers",
  "types",
];
const transform = (value: any, field: string) => {
  if (fieldsWithListValues.includes(field)) {
    value = value
      ? [
          ...new Set(
            value
              .trim()
              .replaceAll("–", "-")
              .split(",")
              .map((value) => value.trim())
          ),
        ]
      : [];
  }
  return value;
};

const headerMappings = {
  Identifiers: "identifiers",
  "Set Identifiers": "setIdentifiers",
  Name: "name",
  Pitch: "pitch",
  Cost: "cost",
  Power: "power",
  Defense: "defense",
  Life: "life",
  Intelligence: "intellect",
  Types: "types",
  "Card Keywords": "cardKeywords",
  "Abilities and Effects": "abilitiesAndEffects",
  "Ability and Effect Keywords": "abilityAndEffectKeywords",
  "Granted Keywords": "grantedKeywords",
  "Functional Text": "functionalText",
  "Flavor Text": "flavorText",
  "Type Text": "typeText",
  "Card Played Horizontally": "cardPlayedHorizontally",
  "Blitz Legal": "blitzLegal",
  "CC Legal": "classicConstructedLegal",
  "Commoner Legal": "commonerLegal",
  // Printing
  Artist: "artist",
  "Art Variation": "treatment",
  Foiling: "foiling",
  "Image URL": "imageUrl",
  Rarity: "rarity",
  "TCGPlayer Product Id": "tcgplayerProductId",
  "TCGPlayer Url": "tcgplayerUrl",
  // Printing 2
  "Artist 2": "artist2",
  "Art Variation 2": "treatment2",
  "Foiling 2": "foiling2",
  "Image URL 2": "imageUrl2",
  "Rarity 2": "rarity2",
  "TCGPlayer Product Id 2": "tcgplayerProductId2",
  "TCGPlayer Url 2": "tcgplayerUrl2",
  // Printing 3
  "Artist 3": "artist3",
  "Art Variation 3": "treatment3",
  "Foiling 3": "foiling3",
  "Image URL 3": "imageUrl3",
  "Rarity 3": "rarity3",
  "TCGPlayer Product Id 3": "tcgplayerProductId3",
  "TCGPlayer Url 3": "tcgplayerUrl3",
};
const transformHeader = (original: string, index: number) =>
  headerMappings[original];

export const parseCSV = (file: string): ParsedCard[] => {
  const csv = readFileSync(file, "utf8");
  const cards = parse<ParsedCard>(csv, {
    header: true,
    // dynamicTyping: true,
    skipEmptyLines: true,
    transform,
    transformHeader,
  });
  console.log(file, JSON.stringify(cards, null, 2));
  return cards.data;
};
