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
  blitzLegal: boolean;
  classicConstructedLegal: boolean;
  commonerLegal: boolean;
  // Printings
  artists: string[];
  expansionSlot?: boolean;
  foiling?: string;
  identifier?: string;
  imageUrl: string;
  rarity: string;
  treatments?: string[];
  tcgplayerProductId?: string;
  tcgplayerUrl?: string;
  // 2nd printing
  artists2?: string[];
  expansionSlot2?: boolean;
  foiling2?: string;
  identifier2?: string;
  imageUrl2?: string;
  rarity2?: string;
  treatments2?: string[];
  tcgplayerProductId2?: string;
  tcgplayerUrl2?: string;
  // 3rd printing
  artists3?: string[];
  expansionSlot3?: boolean;
  foiling3?: string;
  identifier3?: string;
  imageUrl3?: string;
  rarity3?: string;
  treatments3?: string[];
  tcgplayerProductId3?: string;
  tcgplayerUrl3?: string;
  // 4th printing
  artists4?: string[];
  expansionSlot4?: boolean;
  foiling4?: string;
  identifier4?: string;
  imageUrl4?: string;
  rarity4?: string;
  treatments4?: string[];
  tcgplayerProductId4?: string;
  tcgplayerUrl4?: string;
  // 5th printing
  artists5?: string[];
  expansionSlot5?: boolean;
  foiling5?: string;
  identifier5?: string;
  imageUrl5?: string;
  rarity5?: string;
  treatments5?: string[];
  tcgplayerProductId5?: string;
  tcgplayerUrl5?: string;
}

// Make fields that should be lists actually lists instead of a string (which is how CSVs store it)
const fieldsWithListValues = [
  "artists",
  "artists2",
  "artists3",
  "artists4",
  "artists5",
  "abilitiesAndEffects",
  "abilityAndEffectKeywords",
  "cardKeywords",
  "grantedKeywords",
  "identifiers",
  "rarities",
  "setIdentifiers",
  "treatments",
  "treatments2",
  "treatments3",
  "treatments4",
  "treatments5",
  "types",
];
const fieldsWithDefaultTrueStringToBooleanValues = [
  "blitzLegal",
  "classicConstructedLegal",
  "commonerLegal",
];
const fieldsWithDefaultFalseStringToBooleanValues = [
  "expansionSlot",
  "expansionSlot2",
  "expansionSlot3",
  "expansionSlot4",
  "expansionSlot5",
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
  if (fieldsWithDefaultTrueStringToBooleanValues.includes(field)) {
    value = value === "No" ? false : true;
  } else if (fieldsWithDefaultFalseStringToBooleanValues.includes(field)) {
    value = value === "Yes" ? true : false;
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
  Artists: "artists",
  "Art Variations": "treatments",
  "Expansion Slot": "expansionSlot",
  Foiling: "foiling",
  Identifier: "identifier",
  "Image URL": "imageUrl",
  Rarity: "rarity",
  "TCGPlayer Product Id": "tcgplayerProductId",
  "TCGPlayer Url": "tcgplayerUrl",
  // Printing 2
  "Artists 2": "artists2",
  "Art Variations 2": "treatments2",
  "Expansion Slot 2": "expansionSlot2",
  "Foiling 2": "foiling2",
  "Identifier 2": "identifier2",
  "Image URL 2": "imageUrl2",
  "Rarity 2": "rarity2",
  "TCGPlayer Product Id 2": "tcgplayerProductId2",
  "TCGPlayer Url 2": "tcgplayerUrl2",
  // Printing 3
  "Artists 3": "artists3",
  "Art Variations 3": "treatments3",
  "Expansion Slot 3": "expansionSlot3",
  "Foiling 3": "foiling3",
  "Identifier 3": "identifier3",
  "Image URL 3": "imageUrl3",
  "Rarity 3": "rarity3",
  "TCGPlayer Product Id 3": "tcgplayerProductId3",
  "TCGPlayer Url 3": "tcgplayerUrl3",
  // Printing 4
  "Artists 4": "artists4",
  "Art Variations 4": "treatments4",
  "Expansion Slot 4": "expansionSlot4",
  "Foiling 4": "foiling4",
  "Identifier 4": "identifier4",
  "Image URL 4": "imageUrl4",
  "Rarity 4": "rarity4",
  "TCGPlayer Product Id 4": "tcgplayerProductId4",
  "TCGPlayer Url 4": "tcgplayerUrl4",
  // Printing 5
  "Artists 5": "artists5",
  "Art Variations 5": "treatments5",
  "Expansion Slot 5": "expansionSlot5",
  "Foiling 5": "foiling5",
  "Identifier 5": "identifier5",
  "Image URL 5": "imageUrl5",
  "Rarity 5": "rarity5",
  "TCGPlayer Product Id 5": "tcgplayerProductId5",
  "TCGPlayer Url 5": "tcgplayerUrl5",
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
  return cards.data;
};
