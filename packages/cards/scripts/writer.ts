import { existsSync, mkdirSync, writeFileSync } from "fs";
import {
  Bond,
  Card,
  Class,
  Flow,
  Foiling,
  Format,
  Fusion,
  Hero,
  Keyword,
  LegalOverride,
  Meta,
  Metatype,
  Printing,
  Rarity,
  Release,
  ReleaseEdition,
  Subtype,
  Talent,
  Trait,
  Treatment,
  Type,
} from "@flesh-and-blood/types";

const getEnumValues = (values: any, enumName: string, enm: any) => {
  if (!values || (values.length === 1 && !values[0])) {
    return [];
  }
  return values.map((value: any) => getEnumValue(value, enumName, enm));
};

const getStringValues = (values: any) => {
  if (!values || (values.length === 1 && !values[0])) {
    return [];
  }
  return values.map((value: any) => `"${value}"`);
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

const getPrintings = (printings: Printing[]) => {
  return printings.reduce(
    (
      printings,
      {
        artists,
        edition,
        foiling,
        identifier,
        print,
        rarity,
        set,
        tcgplayer,
        treatment,
        treatments,
        image,
        isExpansionSlot,
        oppositeImage,
      }
    ) =>
      (printings += `{
        artists: [${artists.map((artist) => `"${artist}"`)}],
      ${
        edition
          ? `edition: ${getEnumValue(
              edition,
              "ReleaseEdition",
              ReleaseEdition
            )},`
          : ``
      }${
        foiling ? `foiling: ${getEnumValue(foiling, "Foiling", Foiling)},` : ``
      }
      identifier: "${identifier}",
      ${image ? `image: "${image}",` : ``}
      ${isExpansionSlot ? `isExpansionSlot: ${isExpansionSlot},` : ``}
      ${oppositeImage ? `oppositeImage: "${oppositeImage}",` : ``}
      print: "${print}",
      rarity: ${getEnumValue(rarity, "Rarity", Rarity)},
      set: ${getEnumValue(set, "Release", Release)},
      ${
        tcgplayer
          ? `tcgplayer: {
            productId: "${tcgplayer.productId}",
            url: "${tcgplayer.url}"
          },`
          : ``
      }
      ${
        treatment
          ? `treatment: ${getEnumValue(treatment, "Treatment", Treatment)},`
          : ``
      }${
        treatments && treatments.length > 0
          ? `treatments: [${getEnumValues(
              treatments,
              "Treatment",
              Treatment
            )}],`
          : ``
      }
    },`),
    ``
  );
};

const getLegalOverrides = (legalOverrides: LegalOverride[]): string => {
  return legalOverrides.reduce(
    (overrides, { format, heroes }) =>
      (overrides += `{
    format: ${getEnumValue(format, "Format", Format)},
    heroes: [${getEnumValues(heroes, "Hero", Hero)}],
    }`),
    ``
  );
};

const generateCardTypeScript = (card: Card): String => {
  return `{
    artists: [${card.artists.map((artist) => `"${artist}"`)}],
    cardIdentifier: "${card.cardIdentifier}",
    classes: [${getEnumValues(card.classes, "Class", Class)}],
    defaultImage: "${card.defaultImage}",
    legalFormats: [${getEnumValues(card.legalFormats, "Format", Format)}],
    legalHeroes: [${getEnumValues(card.legalHeroes, "Hero", Hero)}],
    name: "${card.name}",
    printings: [${getPrintings(card.printings)}],
    rarities: [${getEnumValues(card.rarities, "Rarity", Rarity)}],
    rarity: ${getEnumValue(card.rarity, "Rarity", Rarity)},
    setIdentifiers: [${card.setIdentifiers.map((id) => `"${id}"`)}],
    sets: [${getEnumValues(card.sets, "Release", Release)}],
    specialImage: "${card.specialImage}",
    subtypes: [${getEnumValues(card.subtypes, "Subtype", Subtype)}],
    types: [${getEnumValues(card.types, "Type", Type)}],
    typeText: "${card.typeText}",

    ${card.arcane || card.arcane === 0 ? `arcane: ${card.arcane},` : ``}
    ${
      card.bannedFormats && card.bannedFormats.length > 0
        ? `bannedFormats: [${getEnumValues(
            card.bannedFormats,
            "Format",
            Format
          )}],`
        : ``
    }${
    card.bonds && card.bonds.length > 0
      ? `bonds: [${getEnumValues(card.bonds, "Bond", Bond)}],`
      : ``
  }
    ${card.cost || card.cost === 0 ? `cost: ${card.cost},` : ``}
    ${card.defense || card.defense === 0 ? `defense: ${card.defense},` : ``}
    ${
      card.flows && card.flows.length > 0
        ? `flows: [${getEnumValues(card.flows, "Flow", Flow)}],`
        : ``
    }
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
    ${
      card.legalOverrides && card.legalOverrides.length > 0
        ? `legalOverrides: [${getLegalOverrides(card.legalOverrides)}],`
        : ``
    }
    ${card.life ? `life: ${card.life},` : ``}
    ${
      card.meta && card.meta.length > 0
        ? `meta: [${getEnumValues(card.meta, "Meta", Meta)}],`
        : ``
    }${
    card.metatypes && card.metatypes.length > 0
      ? `metatypes: [${getEnumValues(card.metatypes, "Metatype", Metatype)}],`
      : ``
  }
  ${
    card.nicknames && card.nicknames.length > 0
      ? `nicknames: [${getStringValues(card.nicknames)}],`
      : ``
  }
    ${
      card.oppositeSideCardIdentifier
        ? `oppositeSideCardIdentifier: \`${card.oppositeSideCardIdentifier}\`,`
        : ``
    }${
    card.oppositeSideCardIdentifiers?.length
      ? `oppositeSideCardIdentifiers: [${card.oppositeSideCardIdentifiers.map(
          (id) => `"${id}"`
        )}],`
      : ``
  }
    ${card.pitch || card.pitch === 0 ? `pitch: ${card.pitch},` : ``}
    ${card.power || card.power === 0 ? `power: ${card.power},` : ``}
    ${
      card.restrictedFormats && card.restrictedFormats.length > 0
        ? `restrictedFormats: [${getEnumValues(
            card.restrictedFormats,
            "Format",
            Format
          )}],`
        : ``
    }
    ${
      card.shorthands && card.shorthands.length > 0
        ? `shorthands: [${getStringValues(card.shorthands)}],`
        : ``
    }
    ${card.shortName ? `shortName: "${card.shortName}",` : ``}
    ${card.specialArcane ? `specialArcane: "${card.specialArcane}",` : ``}
    ${card.specialCost ? `specialCost: "${card.specialCost}",` : ``}
    ${card.specialDefense ? `specialDefense: "${card.specialDefense}",` : ``}
    ${card.specialLife ? `specialLife: "${card.specialLife}",` : ``}
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
  ${
    card.traits && card.traits.length > 0
      ? `traits: [${getEnumValues(card.traits, "Trait", Trait)}],`
      : ``
  }
  ${card.young ? `young: ${card.young}` : ``}
  }`;
};

const sortAlphabetically = (c1: Card, c2: Card): number => {
  const c1Name = `${c1.name}${c1.pitch || ""}`;
  const c2Name = `${c2.name}${c2.pitch || ""}`;
  return c1Name.localeCompare(c2Name);
};

const generateTS = (cards: Card[]): string => {
  cards.sort(sortAlphabetically);
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
    Bond,
    Card,
    Class,
    Flow,
    Foiling,
    Format,
    Fusion,
    Hero,
    Keyword,
    Meta,
    Metatype,
    Rarity,
    Release,
    ReleaseEdition,
    Subtype,
    Talent,
    Trait,
    Treatment,
    Type 
  } from '@flesh-and-blood/types';

  const cards1: Card[] =  [${cards1.map(generateCardTypeScript)}];
  const cards2: Card[] =  [${cards2.map(generateCardTypeScript)}];
  const cards3: Card[] =  [${cards3.map(generateCardTypeScript)}];
  const cards4: Card[] =  [${cards4.map(generateCardTypeScript)}];

  export const cards: Card[] =  [
    ...cards1,
    ...cards2,
    ...cards3,
    ...cards4,
  ];
  `;
  return ts;
};

export const writeFiles = (cards: Card[], outputDirectory: string) => {
  // make sure directory exists
  if (!existsSync(outputDirectory)) {
    mkdirSync(outputDirectory);
  }

  // write typescript
  const ts = generateTS(cards);
  writeFileSync(`${outputDirectory}/index.ts`, ts);
};
