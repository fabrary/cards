import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "fs";
import {
  // ActionCard,
  // ActionSubType,
  Art,
  Card,
  Class,
  // EquipmentCard,
  // EquipmentSubType,
  Format,
  Fusion,
  // HandsRequired,
  Hero,
  // HeroCard,
  // HeroSubType,
  Image,
  Keyword,
  // MentorCard,
  // PlaceholderCard,
  // PlaceholderSubType,
  Rarity,
  Release,
  ReleaseEdition,
  Subtype,
  // ResourceCard,
  // ResourceSubType,
  Talent,
  // TokenCard,
  // TokenSubType,
  Treatment,
  Type,
  // WeaponCard,
  // WeaponSubType,
} from "./interfaces";

// interface AllCards {
//   actions: ActionCard[];
//   equipment: EquipmentCard[];
//   heroes: HeroCard[];
//   mentors: MentorCard[];
//   placeholders: PlaceholderCard[];
//   resources: ResourceCard[];
//   tokens: TokenCard[];
//   weapons: WeaponCard[];
// }

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
    (images, { edition, identifier, set, treatment, name }) =>
      (images += `{
      edition: ${getEnumValue(edition, "ReleaseEdition", ReleaseEdition)},
      identifier: "${identifier}",
      name: "${name}",
      set: ${getEnumValue(set, "Release", Release)},
      ${
        treatment
          ? `treatment: ${getEnumValue(treatment, "Treatment", Treatment)},`
          : ``
      }
    },`),
    ``
  );
};

const generateCardTypeScript = (card: Card): String => {
  return `{
    artists: [${card.artists.map((artist) => `"${artist}"`)}],
    cardIdentifier: "${card.cardIdentifier}",
    classes: [${getEnumValues(card.classes, "Class", Class)}],
    defaultImageName: "${card.defaultImageName}",
    images: [${getImages(card.images)}],
    name: "${card.name}",
    rarities: [${getEnumValues(card.rarities, "Rarity", Rarity)}],
    rarity: ${getEnumValue(card.rarity, "Rarity", Rarity)},
    setIdentifiers: [${card.setIdentifiers.map((id) => `"${id}"`)}],
    sets: [${getEnumValues(card.sets, "Release", Release)}],
    specialImageName: "${card.specialImageName}",
    subtypes: [${getEnumValues(card.subtypes, "Subtype", Subtype)}],
    types: [${getEnumValues(card.types, "Type", Type)}],
    typeText: "${card.typeText}",

    ${card.cost || card.cost === 0 ? `cost: ${card.cost},` : ``}
    ${card.defense || card.defense === 0 ? `defense: ${card.defense},` : ``}
    ${card.functionalText ? `functionalText: \`${card.functionalText}\`,` : ``}
    ${
      card.fusions && card.fusions.length > 0
        ? `fusions: [${getEnumValues(card.fusions, "Fusion", Fusion)}],`
        : ``
    }
    ${card.hero ? `hero: ${getEnumValue(card.hero, "Hero", Hero)},` : ``}
    ${card.intellect ? `intellect: ${card.intellect},` : ``}
    ${card.isCardBack ? `isCardBack: ${card.isCardBack},` : ``}
    ${
      card.keywords && card.keywords.length > 0
        ? `keywords: [${getEnumValues(card.keywords, "Keyword", Keyword)}],`
        : ``
    }
    ${card.life ? `life: ${card.life},` : ``}
    ${
      card.oppositeSideCardIdentifier
        ? `oppositeSideCardIdentifier: \`${card.oppositeSideCardIdentifier}\`,`
        : ``
    }
    ${card.pitch || card.pitch === 0 ? `pitch: ${card.pitch},` : ``}
    ${card.power ? `power: ${card.power},` : ``}
    ${
      card.restrictedFormats && card.restrictedFormats.length > 0
        ? `restrictedFormats: [${getEnumValues(
            card.restrictedFormats,
            "Format",
            Format
          )}],`
        : ``
    }
    ${card.specialCost ? `specialCost: "${card.specialCost}",` : ``}
    ${card.specialDefense ? `specialDefense: "${card.specialDefense}",` : ``}
    ${card.specialPower ? `specialPower: "${card.specialPower}",` : ``}
    ${
      card.specializations && card.specializations.length > 0
        ? `specializations: [${getEnumValues(
            card.specializations,
            "Hero",
            Hero
          )}],`
        : ``
    }
    ${
      card.talents && card.talents.length > 0
        ? `talents: [${getEnumValues(card.talents, "Talent", Talent)}],`
        : ``
    }
    ${card.young ? `young: ${card.young}` : ``}
  }`;
};

const makeSureDirectoryExists = (outputDirectory: string) => {
  if (!existsSync(outputDirectory)) {
    mkdirSync(outputDirectory);
  }
};

const writeTS = (cards: Card[], outputDirectory: string) => {
  const ts = generateTS(cards);
  writeFileSync(`${outputDirectory}/index.ts`, ts);
  copyFileSync(
    `${__dirname}/interfaces.ts`,
    `${outputDirectory}/interfaces.ts`
  );
};

const generateTS = (cards: Card[]): string => {
  const cards1 = cards.slice(0, Math.ceil(cards.length / 4));
  const cards2 = cards.slice(
    Math.ceil(cards.length / 4),
    Math.ceil(cards.length / 2)
  );
  const cards3 = cards.slice(
    Math.ceil(cards.length / 2),
    Math.ceil((3 * cards.length) / 4)
  );
  const cards4 = cards.slice(Math.ceil((3 * cards.length) / 4), cards.length);
  const ts = `
  import {
    Art,
    Card,
    Class,
    Format,
    Fusion,
    Hero,
    Keyword,
    Rarity,
    Release,
    ReleaseEdition,
    Subtype,
    Talent,
    Treatment,
    Type 
  } from './interfaces';

  const cards1: Card[] = [${cards1.map(generateCardTypeScript)}];
  const cards2: Card[] = [${cards2.map(generateCardTypeScript)}];
  const cards3: Card[] = [${cards3.map(generateCardTypeScript)}];
  const cards4: Card[] = [${cards4.map(generateCardTypeScript)}];

  export const cards: Card[] = [
    ...cards1,
    ...cards2,
    ...cards3,
    ...cards4,
  ]

  export * from "./interfaces";
  `;
  return ts;
};

export const writeFiles = (cards: Card[], outputDirectory: string) => {
  makeSureDirectoryExists(outputDirectory);
  // writeJson(cards);
  // writeCSV();
  writeTS(cards, outputDirectory);
};
