import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "fs";
import { parse } from "papaparse";
import { Card, Class, Release, Type } from "./interfaces";

const outputDir = `src`;
if (!existsSync(outputDir)) {
  mkdirSync(outputDir);
}

// Make fields that should be lists actually lists instead of a string (which is how CSVs store it)
const fieldsWithListValues = ["setIdentifiers", "sets", "keywords"];
const transform = (value: any, field: string) => {
  if (fieldsWithListValues.includes(field)) {
    value = value ? [...new Set(value.replaceAll(" ", "").split(","))] : [];
  }
  return value;
};

// Parse the csv file
const csv = readFileSync(`${__dirname}/cards.csv`, "utf8");
const parsedCards: { data: Card[] } = parse(csv, {
  header: true,
  dynamicTyping: true,
  transform,
});

// Save a JSON file with all the card data
const json = JSON.stringify(parsedCards.data);
writeFileSync(`${outputDir}/cards.json`, json);

// Create TypeScript files with all the card data
const getEnumValues = (values: any, key: string) => {
  if (!values || (values.length === 1 && !values[0])) {
    return [];
  }
  return values.map((value: any) => `${key}.${value}`);
};

const getEnumValue = (value: any, key: string) => {
  if (!value) {
    return undefined;
  }
  return `${key}.${value}`;
};

// Create a new file for each card class to get around TypeScript file size limitations
let indexImports = `import { Card } from "./interfaces";`;
let indexExports = `
export const cards: Card[] = [`;
for (const klass in Class) {
  const cards = parsedCards.data
    // @ts-ignore
    .filter((card) => card.class === klass)
    .map((card) => {
      return `{
    bannedFormats: [${getEnumValues(card.bannedFormats, "Format")}],
    class: ${getEnumValue(card.class, "Class")},
    identifier: "${card.identifier}",
    functionalText: \`${card.functionalText}\`,
    imageUrl: "${card.imageUrl}",
    keywords: [${getEnumValues(card.keywords, "Keyword")}],
    name: "${card.name}",
    rarity: ${getEnumValue(card.rarity, "Rarity")},
    sets: [${getEnumValues(card.sets, "Release")}],
    type: ${getEnumValue(card.type, "Type")},
    typeText: "${card.typeText}",
  }`;
    });
  const ts = `
  import {
    ActionCard,
    Card,
    Class,
    EquipmentCard,
    Format,
    HeroCard,
    Keyword,
    Rarity,
    Release,
    ResourceCard,
    TokenCard,
    Type,
    WeaponCard
  } from '../interfaces';

  export const cards: (Card | ActionCard | EquipmentCard | HeroCard | ResourceCard | TokenCard | WeaponCard)[] = [${cards}];
  `;

  const lowercaseClass = klass.replace(/(^\w|\s\w)/g, (m) => m.toLowerCase());
  const directory = `${outputDir}/${lowercaseClass}`;
  if (!existsSync(directory)) {
    mkdirSync(directory);
  }
  writeFileSync(`${directory}/cards.ts`, ts);
  indexImports += `
import { cards as ${lowercaseClass}Cards } from "./${lowercaseClass}/cards";`;
  indexExports += `
  ...${lowercaseClass}Cards,`;
}

// Create an index.ts file for exporting all card data
writeFileSync(
  `${outputDir}/index.ts`,
  `${indexImports}
  ${indexExports}
];`
);

// Copy the card interface file for reference by card data files
copyFileSync(`${__dirname}/interfaces.ts`, `${outputDir}/interfaces.ts`);
