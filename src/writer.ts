import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "fs";
import {
  ActionCard,
  ActionSubType,
  Art,
  Card,
  Class,
  EquipmentCard,
  EquipmentSubType,
  Format,
  Fusion,
  HandsRequired,
  Hero,
  HeroCard,
  Image,
  Keyword,
  MentorCard,
  Rarity,
  Release,
  ReleaseEdition,
  ResourceCard,
  ResourceSubType,
  Talent,
  TokenCard,
  TokenSubType,
  Type,
  WeaponCard,
  WeaponSubType,
} from "./interfaces";

interface AllCards {
  actions: ActionCard[];
  equipment: EquipmentCard[];
  heroes: HeroCard[];
  mentors: MentorCard[];
  resources: ResourceCard[];
  tokens: TokenCard[];
  weapons: WeaponCard[];
}

const getEnumValues = (values: any, enumName: string, enm: any) => {
  if (!values || (values.length === 1 && !values[0])) {
    return [];
  }
  return values.map((value: any) => getEnumValue(value, enumName, enm));
};

const getEnumValue = (value: any, enumName: string, enm: any) => {
  let enumValue;
  for (const [key, val] of Object.entries(enm)) {
    if (value === val) {
      enumValue = key;
    }
  }
  return `${enumName}.${enumValue}`;
};

const getImages = (images: Image[]) => {
  return images.reduce(
    (images, image) =>
      (images += `{
      edition: ${getEnumValue(image.edition, "ReleaseEdition", ReleaseEdition)},
      identifier: "${image.identifier}",
      set: ${getEnumValue(image.set, "Release", Release)},
      url: "${image.url}",
    },`),
    ``
  );
};

const getCardInfo = (card: Card): String => {
  return `class: ${getEnumValue(card.class, "Class", Class)},
    identifier: "${card.identifier}",
    functionalText: \`${card.functionalText}\`,
    defaultImageUrl: "${card.defaultImageUrl}",
    images: [${getImages(card.images)}],
    keywords: [${getEnumValues(card.keywords, "Keyword", Keyword)}],
    name: "${card.name}",
    rarity: ${getEnumValue(card.rarity, "Rarity", Rarity)},
    restrictedFormats: [${getEnumValues(
      card.restrictedFormats,
      "Format",
      Format
    )}],
    setIdentifiers: [${card.setIdentifiers.map((id) => `"${id}"`)}],
    sets: [${getEnumValues(card.sets, "Release", Release)}],
    type: ${getEnumValue(card.type, "Type", Type)},
    typeText: "${card.typeText}",`;
};

const generateActionTS = (card: ActionCard): String => {
  return `{
    ${getCardInfo(card)}
    ${card.cost || card.cost === 0 ? `cost: ${card.cost},` : ``}
    ${card.defense || card.defense === 0 ? `defense: ${card.defense},` : ``}
    fusions: [${getEnumValues(card.fusions, "Fusion", Fusion)}],
    ${card.pitch ? `pitch: ${card.pitch},` : ``}
    ${card.power ? `power: ${card.power},` : ``}
    talents: [${getEnumValues(card.talents, "Talent", Talent)}],
    ${card.specialCost ? `specialCost: "${card.specialCost}",` : ``}
    ${card.specialDefense ? `specialDefense: "${card.specialDefense}",` : ``}
    ${card.specialPower ? `specialPower: "${card.specialPower}",` : ``}
    specializations: [${getEnumValues(card.specializations, "Hero", Hero)}],
    ${
      card.subType
        ? `subType: ${getEnumValue(
            card.subType,
            "ActionSubType",
            ActionSubType
          )},`
        : ``
    }
  }`;
};

const generateEquipmentTS = (card: EquipmentCard): String => {
  return `{
    ${getCardInfo(card)}
    ${card.defense || card.defense === 0 ? `defense: ${card.defense},` : ``}
    ${card.handsRequired ? `handsRequired: ${card.handsRequired},` : ``}
    talents: [${getEnumValues(card.talents, "Talent", Talent)}],
    ${
      card.subType
        ? `subType: ${getEnumValue(
            card.subType,
            "EquipmentSubType",
            EquipmentSubType
          )}`
        : ``
    }
  }`;
};

const generateHeroTS = (card: HeroCard): String => {
  return `{
    ${getCardInfo(card)}
    intellect: ${card.intellect},
    hero: ${getEnumValue(card.hero, "Hero", Hero)},
    life: ${card.life},
    talents: [${getEnumValues(card.talents, "Talent", Talent)}],
    young: ${card.young}
  }`;
};

const generateMentorTS = (card: MentorCard): String => {
  return `{
    ${getCardInfo(card)}
    ${card.defense || card.defense === 0 ? `defense: ${card.defense},` : ``}
  }`;
};

const generateResourceTS = (card: ResourceCard): String => {
  return `{
    ${getCardInfo(card)}
    ${card.pitch ? `pitch: ${card.pitch},` : ``}
    ${
      card.subType
        ? `subType: ${getEnumValue(
            card.subType,
            "ResourceSubType",
            ResourceSubType
          )}`
        : ``
    }
  }`;
};

const generateTokenTS = (card: TokenCard): String => {
  return `{
    ${getCardInfo(card)}
    talents: [${getEnumValues(card.talents, "Talent", Talent)}],
    ${
      card.subType
        ? `subType: ${getEnumValue(card.subType, "TokenSubType", TokenSubType)}`
        : ``
    }
  }`;
};

const generateWeaponTS = (card: WeaponCard): String => {
  return `{
    ${getCardInfo(card)}
    handsRequired: ${getEnumValue(
      card.handsRequired,
      "HandsRequired",
      HandsRequired
    )},
    ${card.power ? `power: ${card.power},` : ``}
    ${card.specialPower ? `specialPower: "${card.specialPower}",` : ``}
    talents: [${getEnumValues(card.talents, "Talent", Talent)}],
    ${
      card.subType
        ? `subType: ${getEnumValue(
            card.subType,
            "WeaponSubType",
            WeaponSubType
          )}`
        : ``
    }
  }`;
};

const makeSureDirectoryExists = (outputDirectory: string) => {
  if (!existsSync(outputDirectory)) {
    mkdirSync(outputDirectory);
  }
};

// const writeJson = (cards: AllCards) => {
//   const { actions, equipment, heroes, resources, tokens, weapons } = cards;
//   const allCards = [
//     ...actions,
//     ...equipment,
//     ...heroes,
//     ...resources,
//     ...tokens,
//     ...weapons,
//   ];
//   const json = JSON.stringify(allCards);
//   writeFileSync(`${outputDir}/cards.json`, json);
// };

const writeTS = (cards: AllCards, outputDirectory: string) => {
  const ts = generateTS(cards);
  writeFileSync(`${outputDirectory}/index.ts`, ts);
  copyFileSync(
    `${__dirname}/interfaces.ts`,
    `${outputDirectory}/interfaces.ts`
  );
};

const getCardsByType = (cards: AllCards) => {
  const { actions, equipment, heroes, mentors, resources, tokens, weapons } =
    cards;
  const basicActions = [];
  const attackReactions = [];
  const defenseReactions = [];
  const instants = [];
  actions.forEach((action) => {
    switch (action.type) {
      case Type.AttackReaction:
        attackReactions.push(action);
        break;
      case Type.DefenseReaction:
        defenseReactions.push(action);
        break;
      case Type.Instant:
        instants.push(action);
        break;
      default:
        basicActions.push(action);
    }
  });
  return {
    basicActions,
    attackReactions,
    defenseReactions,
    instants,
    equipment,
    heroes,
    mentors,
    resources,
    tokens,
    weapons,
  };
};

const generateTS = (cards: AllCards): string => {
  const {
    basicActions,
    attackReactions,
    defenseReactions,
    instants,
    equipment,
    heroes,
    mentors,
    resources,
    tokens,
    weapons,
  } = getCardsByType(cards);
  const ts = `
  import {
    Art,
    ActionCard,
    ActionSubType,
    Card,
    Class,
    EquipmentCard,
    EquipmentSubType,
    Format,
    Fusion,
    HandsRequired,
    Hero,
    HeroCard,
    Keyword,
    MentorCard,
    Rarity,
    Release,
    ReleaseEdition,
    ResourceCard,
    ResourceSubType,
    Talent,
    TokenCard,
    TokenSubType,
    Type,
    WeaponCard,
    WeaponSubType
  } from './interfaces';
  
  const actions: ActionCard[] = [${basicActions.map(generateActionTS)}];
  const attackReactions: ActionCard[] = [${attackReactions.map(
    generateActionTS
  )}];
  const defenseReactions: ActionCard[] = [${defenseReactions.map(
    generateActionTS
  )}];
  const instants: ActionCard[] = [${instants.map(generateActionTS)}];
  const equipment: EquipmentCard[] = [${equipment.map(generateEquipmentTS)}];
  const mentors: MentorCard[] = [${mentors.map(generateMentorTS)}];
  const heroes: HeroCard[] = [${heroes.map(generateHeroTS)}];
  const resources: ResourceCard[] = [${resources.map(generateResourceTS)}];
  const tokens: TokenCard[] = [${tokens.map(generateTokenTS)}];
  const weapons: WeaponCard[] = [${weapons.map(generateWeaponTS)}];

  export const cards: ( ActionCard | EquipmentCard | HeroCard | ResourceCard | TokenCard | WeaponCard )[] = [
    ...actions,
    ...attackReactions,
    ...defenseReactions,
    ...instants,
    ...equipment,
    ...heroes,
    ...mentors,
    ...resources,
    ...tokens,
    ...weapons,
  ];

  export * from "./interfaces";
  `;
  return ts;
};

export const writeFiles = (cards: AllCards, outputDirectory: string) => {
  makeSureDirectoryExists(outputDirectory);
  // writeJson(cards);
  // writeCSV();
  writeTS(cards, outputDirectory);
};
