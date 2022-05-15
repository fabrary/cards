import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "fs";
import { parse } from "papaparse";
import {
  ActionCard,
  Card,
  Class,
  EquipmentCard,
  HeroCard,
  Release,
  ResourceCard,
  TokenCard,
  Type,
  WeaponCard,
} from "./interfaces";

const outputDir = `data`;
if (!existsSync(outputDir)) {
  mkdirSync(outputDir);
}

// Make fields that should be lists actually lists instead of a string (which is how CSVs store it)
const fieldsWithListValues = [
  "bannedFormats",
  "setIdentifiers",
  "sets",
  "talents",
  "keywords",
];
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

const getCardInfo = (card: Card): String => {
  return `bannedFormats: [${getEnumValues(card.bannedFormats, "Format")}],
    class: Class.${card.class},
    identifier: "${card.identifier}",
    functionalText: \`${card.functionalText}\`,
    imageUrl: "${card.imageUrl}",
    keywords: [${getEnumValues(card.keywords, "Keyword")}],
    name: "${card.name}",
    rarity: Rarity.${card.rarity},
    sets: [${getEnumValues(card.sets, "Release")}],
    type: Type.${card.type},
    typeText: "${card.typeText}",`;
};

const getActionCardInfo = (card: ActionCard): String => {
  // @ts-ignore
  card.subType = card.actionSubType;
  return `{
    ${getCardInfo(card)}
    ${card.cost || card.cost === 0 ? `cost: ${card.cost},` : ``}
    ${card.defense || card.defense === 0 ? `defense: ${card.defense},` : ``}
    ${card.pitch ? `pitch: ${card.pitch},` : ``}
    ${card.power ? `power: ${card.power},` : ``}
    talents: [${getEnumValues(card.talents, "Talent")}],
    ${card.specialPower ? `specialPower: "${card.specialPower}",` : ``}
    ${card.specialCost ? `specialCost: "${card.specialCost}",` : ``}
    ${card.specialDefense ? `specialDefense: "${card.specialDefense}",` : ``}
    ${card.specialization ? `specialization: Hero.${card.specialization},` : ``}
    ${card.subType ? `subType: ActionSubType.${card.subType},` : ``}
  }`;
};

const getEquipmentCardInfo = (card: EquipmentCard): String => {
  // @ts-ignore
  card.subType = card.equipmentType;
  return `{
    ${getCardInfo(card)}
    ${card.defense || card.defense === 0 ? `defense: ${card.defense},` : ``}
    ${card.handsRequired ? `handsRequired: ${card.handsRequired},` : ``}
    talents: [${getEnumValues(card.talents, "Talent")}],
    ${card.subType ? `subType: EquipmentSubType.${card.subType}` : ``}
  }`;
};

const getHeroCardInfo = (card: HeroCard): String => {
  return `{
    ${getCardInfo(card)}
    intellect: ${card.intellect},
    hero: Hero.${card.hero},
    life: ${card.life},
    ${card.young ? `young: ${card.young},` : ``}
  }`;
};

const getResourceCardInfo = (card: ResourceCard): String => {
  // @ts-ignore
  card.subType = card.resourceSubType;
  return `{
    ${getCardInfo(card)}
    ${card.cost || card.cost === 0 ? `cost: ${card.cost},` : ``}
    ${card.defense || card.defense === 0 ? `defense: ${card.defense},` : ``}
    ${card.pitch ? `pitch: ${card.pitch},` : ``}
    talents: [${getEnumValues(card.talents, "Talent")}],
    ${card.subType ? `subType: ResourceSubType.${card.subType}` : ``}
  }`;
};

const getTokenCardInfo = (card: TokenCard): String => {
  // @ts-ignore
  card.subType = card.tokenSubType;
  return `{
    ${getCardInfo(card)}
    talents: [${getEnumValues(card.talents, "Talent")}],
    ${card.subType ? `subType: TokenSubType.${card.subType}` : ``}
  }`;
};

const getWeaponCardInfo = (card: WeaponCard): String => {
  // @ts-ignore
  card.subType = card.weaponType;
  return `{
    ${getCardInfo(card)}
    handsRequired: HandsRequired.${card.handsRequired},
    ${card.power ? `power: ${card.power},` : ``}
    ${card.specialPower ? `specialPower: "${card.specialPower}",` : ``}
    talents: [${getEnumValues(card.talents, "Talent")}],
    ${card.subType ? `subType: WeaponSubType.${card.subType}` : ``}
  }`;
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
      switch (card.type) {
        case Type.Action:
        case Type.AttackAction:
        case Type.AttackReaction:
        case Type.DefenseReaction:
        case Type.Instant:
          return getActionCardInfo(card as ActionCard);
        case Type.Equipment:
          return getEquipmentCardInfo(card as EquipmentCard);
        case Type.Hero:
          return getHeroCardInfo(card as HeroCard);
        case Type.Resource:
          return getResourceCardInfo(card as ResourceCard);
        case Type.Token:
          return getTokenCardInfo(card as TokenCard);
        case Type.Weapon:
          return getWeaponCardInfo(card as WeaponCard);
      }
    });
  const ts = `
  import {
    ActionCard,
    ActionSubType,
    Card,
    Class,
    EquipmentCard,
    EquipmentSubType,
    Format,
    HandsRequired,
    Hero,
    HeroCard,
    Keyword,
    Rarity,
    Release,
    ResourceCard,
    ResourceSubType,
    Talent,
    TokenCard,
    TokenSubType,
    Type,
    WeaponCard,
    WeaponSubType
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
