import { readFileSync } from "fs";
import { parse } from "papaparse";

export interface ParsedCard {
  abilitiesAndEffects: string[];
  abilityAndEffectKeywords: string[];
  artists: string[];
  cardKeywords: string[];
  cardPlayedHorizontally: boolean;
  cost: number | string;
  power: number | string;
  defense: number | string;
  flavorText: string;
  functionalText: string;
  grantedKeywords: string[];
  life: number;
  identifiers: string[];
  images: string[];
  intellect: number;
  name: string;
  pitch: number;
  rarity: string[];
  setIdentifiers: string[];
  types: string[];
  typeText: string;
  variations: string[];
  // Format restrictions
  blitzBanned: string;
  blitzLegal: string;
  blitzLivingLegend: string;
  blitzSuspendedStart: string;
  blitzSuspendedEnd: string;
  classicConstructedBanned: string;
  classicConstructedLegal: string;
  classicConstructedLivingLegend: string;
  classicConstructedSuspendedStart: string;
  classicConstructedSuspendedEnd: string;
  commonerBanned: string;
  commonerLegal: string;
  commonerSuspendedStart: string;
  commonerSuspendedEnd: string;
}

// Make fields that should be lists actually lists instead of a string (which is how CSVs store it)
const fieldsWithListValues = [
  "abilitiesAndEffects",
  "abilityAndEffectKeywords",
  "artists",
  "cardKeywords",
  "grantedKeywords",
  "identifiers",
  "images",
  "rarity",
  "setIdentifiers",
  "types",
  "variations",
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
  Health: "life",
  Intelligence: "intellect",
  Rarity: "rarity",
  Types: "types",
  "Card Keywords": "cardKeywords",
  "Abilities and Effects": "abilitiesAndEffects",
  "Ability and Effect Keywords": "abilityAndEffectKeywords",
  "Granted Keywords": "grantedKeywords",
  "Functional Text": "functionalText",
  "Flavor Text": "flavorText",
  "Type Text": "typeText",
  Artists: "artists",
  "Card Played Horizontally": "cardPlayedHorizontally",
  "Blitz Legal": "blitzLegal",
  "Blitz Living Legend": "blitzLivingLegend",
  "Blitz Banned": "blitzBanned",
  "Blitz Suspended Start": "blitzSuspendedStart",
  "Blitz Suspended End": "blitzSuspendedEnd",
  "CC Legal": "classicConstructedLegal",
  "CC Living Legend": "classicConstructedLivingLegend",
  "CC Banned": "classicConstructedBanned",
  "CC Suspended Start": "classicConstructedSuspendedStart",
  "CC Suspended End": "classicConstructedSuspendedEnd",
  "Commoner Legal": "commonerLegal",
  "Commoner Banned": "commonerBanned",
  "Commoner Suspended Start": "commonerSuspendedStart",
  "Commoner Suspended End": "commonerSuspendedEnd",
  Variations: "variations",
  "Image URLs": "images",
};
const transformHeader = (original: string, index: number) =>
  headerMappings[original];

export const parseCardData = (tsv): ParsedCard[] => {
  const csv = readFileSync(tsv, "utf8");
  const cards = parse<ParsedCard>(csv, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transform,
    transformHeader,
  });
  // console.log(cards.data.find((card) => card.name === "Frost Hex"));
  return cards.data;
};
