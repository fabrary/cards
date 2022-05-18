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
  ActionSubType,
  Card,
  Class,
  EquipmentCard,
  EquipmentSubType,
  HeroCard,
  Rarity,
  Release,
  ResourceCard,
  ResourceSubType,
  Talent,
  TokenCard,
  TokenSubType,
  Type,
  WeaponCard,
  WeaponSubType,
} from "./interfaces";

const outputDir = `src`;
if (!existsSync(outputDir)) {
  mkdirSync(outputDir);
}

// Make fields that should be lists actually lists instead of a string (which is how CSVs store it)
const fieldsWithListValues = [
  "identifiers",
  "setIdentifiers",
  "rarity",
  "types",
  "cardKeywords",
  "abilitiesAndEffects",
  "abilitiesAndEffectKeywords",
  "grantedKeywords",
  "variations",
  "imageURLs",
];
const transform = (value: any, field: string) => {
  if (fieldsWithListValues.includes(field)) {
    value = value
      ? [
          ...new Set(
            value
              .trim()
              .split(",")
              .map((value) => value.trim())
          ),
        ]
      : [];
  }
  return value;
};

interface ParsedCard {
  identifiers: string[];
  setIdentifiers: string[];
  name: string;
  pitch: number;
  cost: number | string;
  power: number | string;
  defense: number | string;
  health: number;
  intelligence: number;
  rarity: string[];
  types: string[];
  cardKeywords: string[];
  abilitiesAndEffects: string[];
  abilityAndEffectKeywords: string[];
  grantedKeywords: string[];
  functionalText: string;
  flavorText: string;
  typeText: string;
  artists: string;
  cardPlayedHorizontally: boolean;
  blitzLegal: string;
  ccLegal: string;
  commonerLegal: string;
  blitzLivingLegend: string;
  ccLivingLegend: string;
  blitzBanned: string;
  ccBanned: string;
  commonerBanned: string;
  blitzSuspendedStart: string;
  blitzSuspendedEnd: string;
  ccSuspendedStart: string;
  ccSuspendedEnd: string;
  commonerSuspendedStart: string;
  commonerSuspendedEnd: string;
  variations: string[];
  imageUrls: string[];
}

const headerMappings = {
  Identifiers: "identifiers",
  "Set Identifiers": "setIdentifiers",
  Name: "name",
  Pitch: "pitch",
  Cost: "cost",
  Power: "power",
  Defense: "defense",
  Health: "health",
  Intelligence: "intelligence",
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
  "CC Legal": "ccLegal",
  "Commoner Legal": "commonerLegal",
  "Blitz Living Legend": "blitzLivingLegend",
  "CC Living Legend": "ccLivingLegend",
  "Blitz Banned": "blitzBanned",
  "Commoner Banned": "ccBanned",
  "CC Banned": "commonerBanned",
  "Blitz Suspended Start": "blitzSuspendedStart",
  "Blitz Suspended End": "blitzSuspendedEnd",
  "CC Suspended Start": "ccSuspendedStart",
  "CC Suspended End": "ccSuspendedEnd",
  "Commoner Suspended Start": "commonerSuspendedStart",
  "Commoner Suspended End": "commonerSuspendedEnd",
  Variations: "variations",
  "Image URLs": "imageURLs",
};
const transformHeader = (original: string, index: number) =>
  headerMappings[original];

// Parse the csv file
const csv = readFileSync(`${__dirname}/card.tsv`, "utf8");
const parsedCards: { data: ParsedCard[] } = parse(csv, {
  header: true,
  dynamicTyping: true,
  transform,
  transformHeader,
});

const getClass = (card: ParsedCard): Class => {
  const { types } = card;
  for (const [klass, value] of Object.entries(Class)) {
    if (types.includes(value)) {
      return Class[klass];
    }
  }
};

const getRarity = (card: ParsedCard): Rarity => {
  const { rarity: rarities } = card;
  if (rarities.includes("T")) {
    return Rarity.Token;
  } else if (rarities.includes("F")) {
    return Rarity.Fabled;
  } else if (rarities.includes("L")) {
    return Rarity.Legendary;
  } else if (rarities.includes("M")) {
    return Rarity.Majestic;
  } else if (rarities.includes("S")) {
    return Rarity.SuperRare;
  } else if (rarities.includes("R")) {
    return Rarity.Rare;
  } else if (rarities.includes("C")) {
    return Rarity.Common;
  } else if (rarities.includes("P")) {
    return Rarity.Promo;
  }
};

const getIdentifier = (card: ParsedCard): string => {
  const name = card.name
    .toLowerCase()
    .replace("[^A-Za-z ]+", "")
    .replace(" ", "-");
  let color;
  switch (card.pitch) {
    case 1:
      color = "red";
      break;
    case 2:
      color = "yellow";
      break;
    case 3:
      color = "blue";
      break;
    default:
      color = "";
  }
  return `${name}-${color}`;
};

const getSetIdentifiers = (card: ParsedCard): string[] => [
  ...new Set(card.setIdentifiers),
];

const setIdentifierToSetMappings = {
  FAB: "Promos",
  HER: "Promos",
  LGS: "Promos",
  LSS: "Promos",
  XXX: "Promos",
  BOL: "Boltyn Blitz Deck",
  BRI: "Briary Blitz Deck",
  BVO: "Bravo Hero Deck",
  CHN: "Chane Blitz Deck",
  IRA: "Ira Welcome Deck",
  KSU: "Katsu Hero Deck",
  LEV: "Levia Blitz Deck",
  LXI: "Lexi Blitz Deck",
  OLD: "Oldhim Blitz Deck",
  PSM: "Prism Blitz Deck",
  RNR: "Rhinar Hero Deck",
  TEA: "Dorinthea Hero Deck",
  DVR: "Classic Battles: Rhinar vs Dorinthea",
  "1HP": "History Pack 1",
  WTR: "Welcome to Rathe",
  ARC: "Arcane Uprising",
  CRU: "Crucible of War",
  MON: "Monarch",
  ELE: "Tales of Aria",
  EVR: "Everfest",
  UPR: "Uprising",
};
const getSets = (card: ParsedCard): string[] => [
  ...new Set(card.setIdentifiers.map((set) => setIdentifierToSetMappings[set])),
];

const getTalents = (card: ParsedCard): Talent[] => {
  const { types } = card;
  const talents = [];
  for (const [talent, value] of Object.entries(Talent)) {
    if (types.includes(value)) {
      talents.push(Talent[talent]);
    }
  }
  return talents;
};

const getTypeAndSubType = (
  card: ParsedCard
): {
  type: Type;
  subType:
    | ActionSubType
    | EquipmentSubType
    | ResourceSubType
    | TokenSubType
    | WeaponSubType;
} => {
  const { types } = card;
  let type: Type;
  for (const [typeKey, typeValue] of Object.entries(Type)) {
    if (types.includes(typeValue)) {
      type = Type[typeKey];
      break;
    }
  }

  let subType:
    | ActionSubType
    | EquipmentSubType
    | ResourceSubType
    | TokenSubType
    | WeaponSubType;
  for (const subTypeEnum of [
    ActionSubType,
    EquipmentSubType,
    ResourceSubType,
    ResourceSubType,
    TokenSubType,
    WeaponSubType,
  ]) {
    if (subType) {
      break;
    } else {
      for (const [subTypeEnumKey, subTypeEnumValue] of Object.entries(
        subTypeEnum
      )) {
        if (types.includes(subTypeEnumValue)) {
          subType = subTypeEnum[subTypeEnumKey];
          break;
        }
      }
    }
  }

  if (type === Type.Action && !subType) {
    subType = ActionSubType.NonAttack;
  }

  return { type, subType };
};

// console.log(parsedCards);

const transformedCards = parsedCards.data
  // .filter((card) => card.types.includes("Ninja"))
  .map((card) => {
    const { type, subType } = getTypeAndSubType(card);
    return {
      ...card,
      class: getClass(card),
      // cost: getCost(card), - filter out X, etc.
      // defense: getDefense(card), - filter out * etc.
      // fusion: getFusion(card)
      // hands: getHands(card),
      // hero: getHero(card), - Chane, etc.
      identifier: getIdentifier(card),
      // imageUrls: getImageUrls(card)
      // power: getPower(card), - filter out * etc.
      rarity: getRarity(card),
      setIdentifiers: getSetIdentifiers(card),
      sets: getSets(card),
      // specialization: getSpecialization(card), - Lexi, etc.
      // specialCost: getSpecialCost(card),
      // specialDefense: getSpecialDefense(card),
      // specialPower: getSpecialPower(card),
      subType,
      talents: getTalents(card),
      type,
      // young: getYoung(card), - boolean
    };
  });

console.log(transformedCards);

// // Save a JSON file with all the card data
// const json = JSON.stringify(parsedCards.data);
// writeFileSync(`${outputDir}/cards.json`, json);

// // Create TypeScript files with all the card data
// const getEnumValues = (values: any, key: string) => {
//   if (!values || (values.length === 1 && !values[0])) {
//     return [];
//   }
//   return values.map((value: any) => `${key}.${value}`);
// };

// const getCardInfo = (card: Card): String => {
//   return `bannedFormats: [${getEnumValues(card.bannedFormats, "Format")}],
//     class: Class.${card.class},
//     identifier: "${card.identifier}",
//     functionalText: \`${card.functionalText}\`,
//     imageUrl: "${card.imageUrl}",
//     keywords: [${getEnumValues(card.keywords, "Keyword")}],
//     name: "${card.name}",
//     rarity: Rarity.${card.rarity},
//     sets: [${getEnumValues(card.sets, "Release")}],
//     type: Type.${card.type},
//     typeText: "${card.typeText}",`;
// };

// const getActionCardInfo = (card: ActionCard): String => {
//   // @ts-ignore
//   card.subType = card.actionSubType;
//   return `{
//     ${getCardInfo(card)}
//     ${card.cost || card.cost === 0 ? `cost: ${card.cost},` : ``}
//     ${card.defense || card.defense === 0 ? `defense: ${card.defense},` : ``}
//     ${card.pitch ? `pitch: ${card.pitch},` : ``}
//     ${card.power ? `power: ${card.power},` : ``}
//     talents: [${getEnumValues(card.talents, "Talent")}],
//     ${card.specialPower ? `specialPower: "${card.specialPower}",` : ``}
//     ${card.specialCost ? `specialCost: "${card.specialCost}",` : ``}
//     ${card.specialDefense ? `specialDefense: "${card.specialDefense}",` : ``}
//     ${card.specialization ? `specialization: Hero.${card.specialization},` : ``}
//     ${card.subType ? `subType: ActionSubType.${card.subType},` : ``}
//   }`;
// };

// const getEquipmentCardInfo = (card: EquipmentCard): String => {
//   // @ts-ignore
//   card.subType = card.equipmentType;
//   return `{
//     ${getCardInfo(card)}
//     ${card.defense || card.defense === 0 ? `defense: ${card.defense},` : ``}
//     ${card.handsRequired ? `handsRequired: ${card.handsRequired},` : ``}
//     talents: [${getEnumValues(card.talents, "Talent")}],
//     ${card.subType ? `subType: EquipmentSubType.${card.subType}` : ``}
//   }`;
// };

// const getHeroCardInfo = (card: HeroCard): String => {
//   return `{
//     ${getCardInfo(card)}
//     intellect: ${card.intellect},
//     hero: Hero.${card.hero},
//     life: ${card.life},
//     ${card.young ? `young: ${card.young},` : ``}
//   }`;
// };

// const getResourceCardInfo = (card: ResourceCard): String => {
//   // @ts-ignore
//   card.subType = card.resourceSubType;
//   return `{
//     ${getCardInfo(card)}
//     ${card.cost || card.cost === 0 ? `cost: ${card.cost},` : ``}
//     ${card.defense || card.defense === 0 ? `defense: ${card.defense},` : ``}
//     ${card.pitch ? `pitch: ${card.pitch},` : ``}
//     talents: [${getEnumValues(card.talents, "Talent")}],
//     ${card.subType ? `subType: ResourceSubType.${card.subType}` : ``}
//   }`;
// };

// const getTokenCardInfo = (card: TokenCard): String => {
//   // @ts-ignore
//   card.subType = card.tokenSubType;
//   return `{
//     ${getCardInfo(card)}
//     talents: [${getEnumValues(card.talents, "Talent")}],
//     ${card.subType ? `subType: TokenSubType.${card.subType}` : ``}
//   }`;
// };

// const getWeaponCardInfo = (card: WeaponCard): String => {
//   // @ts-ignore
//   card.subType = card.weaponType;
//   return `{
//     ${getCardInfo(card)}
//     handsRequired: HandsRequired.${card.handsRequired},
//     ${card.power ? `power: ${card.power},` : ``}
//     ${card.specialPower ? `specialPower: "${card.specialPower}",` : ``}
//     talents: [${getEnumValues(card.talents, "Talent")}],
//     ${card.subType ? `subType: WeaponSubType.${card.subType}` : ``}
//   }`;
// };

// // Create a new file for each card class to get around TypeScript file size limitations
// let indexImports = `import { Card } from "./interfaces";`;
// let indexExports = `
// export const cards: Card[] = [`;
// for (const klass in Class) {
//   const cards = parsedCards.data
//     // @ts-ignore
//     .filter((card) => card.class === klass)
//     .map((card) => {
//       switch (card.type) {
//         case Type.Action:
//         case Type.AttackAction:
//         case Type.AttackReaction:
//         case Type.DefenseReaction:
//         case Type.Instant:
//           return getActionCardInfo(card as ActionCard);
//         case Type.Equipment:
//           return getEquipmentCardInfo(card as EquipmentCard);
//         case Type.Hero:
//           return getHeroCardInfo(card as HeroCard);
//         case Type.Resource:
//           return getResourceCardInfo(card as ResourceCard);
//         case Type.Token:
//           return getTokenCardInfo(card as TokenCard);
//         case Type.Weapon:
//           return getWeaponCardInfo(card as WeaponCard);
//       }
//     });
//   const ts = `
//   import {
//     ActionCard,
//     ActionSubType,
//     Card,
//     Class,
//     EquipmentCard,
//     EquipmentSubType,
//     Format,
//     HandsRequired,
//     Hero,
//     HeroCard,
//     Keyword,
//     Rarity,
//     Release,
//     ResourceCard,
//     ResourceSubType,
//     Talent,
//     TokenCard,
//     TokenSubType,
//     Type,
//     WeaponCard,
//     WeaponSubType
//   } from '../interfaces';

//   export const cards: (Card | ActionCard | EquipmentCard | HeroCard | ResourceCard | TokenCard | WeaponCard)[] = [${cards}];
//   `;

//   const lowercaseClass = klass.replace(/(^\w|\s\w)/g, (m) => m.toLowerCase());
//   const directory = `${outputDir}/${lowercaseClass}`;
//   if (!existsSync(directory)) {
//     mkdirSync(directory);
//   }
//   writeFileSync(`${directory}/cards.ts`, ts);
//   indexImports += `
// import { cards as ${lowercaseClass}Cards } from "./${lowercaseClass}/cards";`;
//   indexExports += `
//   ...${lowercaseClass}Cards,`;
// }

// // Create an index.ts file for exporting all card data
// writeFileSync(
//   `${outputDir}/index.ts`,
//   `${indexImports}
//   ${indexExports}
// ];`
// );

// // Copy the card interface file for reference by card data files
// copyFileSync(`${__dirname}/interfaces.ts`, `${outputDir}/interfaces.ts`);
