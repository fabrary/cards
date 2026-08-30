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
  Shorthand,
  Subtype,
  Talent,
  Trait,
  Treatment,
  Type,
} from "@flesh-and-blood/types";

// An enum's own object, mapping each member name to the value it holds. The
// generated source names the member, so these helpers look one up by value.
type EnumObject = Record<string, string>;

const getEnumValues = (
  values: readonly string[] | undefined,
  enumName: string,
  enumObject: EnumObject,
): string[] => {
  let enumValues: string[] = [];

  const hasValues = !!values && !(values.length === 1 && !values[0]);
  if (hasValues) {
    enumValues = values.map((value) =>
      getEnumValue(value, enumName, enumObject),
    );
  }

  return enumValues;
};

const getStringValues = (values: readonly string[] | undefined): string[] => {
  let stringValues: string[] = [];

  const hasValues = !!values && !(values.length === 1 && !values[0]);
  if (hasValues) {
    stringValues = values.map((value) => `"${value}"`);
  }

  return stringValues;
};

// Cache a value -> key reverse lookup per enum object. Built by iterating
// Object.entries in order with last-write-wins, so an enum with two names for
// one value resolves to the last of them.
const enumReverseLookups = new Map<EnumObject, Map<string, string>>();
const getEnumValue = (
  value: string,
  enumName: string,
  enumObject: EnumObject,
): string => {
  let lookup = enumReverseLookups.get(enumObject);
  if (!lookup) {
    lookup = new Map();
    for (const [memberName, memberValue] of Object.entries(enumObject)) {
      lookup.set(memberValue, memberName);
    }
    enumReverseLookups.set(enumObject, lookup);
  }
  return `${enumName}.${lookup.get(value)}`;
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
      },
    ) =>
      (printings += `{
        artists: [${artists.map((artist) => `"${artist}"`)}],
      ${
        edition
          ? `edition: ${getEnumValue(
              edition,
              "ReleaseEdition",
              ReleaseEdition,
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
              Treatment,
            )}],`
          : ``
      }
    },`),
    ``,
  );
};

const getLegalOverrides = (legalOverrides: LegalOverride[]): string => {
  return legalOverrides.reduce(
    (overrides, { format, heroes }) =>
      (overrides += `{
    format: ${getEnumValue(format, "Format", Format)},
    heroes: [${getEnumValues(heroes, "Hero", Hero)}],
    }`),
    ``,
  );
};

const generateCardTypeScript = (card: Card): string => {
  return `{
    artists: [${card.artists.map((artist) => `"${artist}"`)}],
    cardIdentifier: "${card.cardIdentifier}",
    classes: [${getEnumValues(card.classes, "Class", Class)}],
    defaultImage: "${card.defaultImage}",
    firstReleaseDate: "${card.firstReleaseDate}",
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
            Format,
          )}],`
        : ``
    }${
      card.bonds && card.bonds.length > 0
        ? `bonds: [${getEnumValues(card.bonds, "Bond", Bond)}],`
        : ``
    }
    ${card.cost || card.cost === 0 ? `cost: ${card.cost},` : ``}${
      card.createdExtras && card.createdExtras.length > 0
        ? `createdExtras: [${getStringValues(card.createdExtras)}],`
        : ``
    }
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
            (id) => `"${id}"`,
          )}],`
        : ``
    }
    ${card.pitch || card.pitch === 0 ? `pitch: ${card.pitch},` : ``}
    ${card.power || card.power === 0 ? `power: ${card.power},` : ``}${
      card.referencedCards && card.referencedCards.length > 0
        ? `referencedCards: [${getStringValues(card.referencedCards)}],`
        : ``
    }
    ${
      card.restrictedFormats && card.restrictedFormats.length > 0
        ? `restrictedFormats: [${getEnumValues(
            card.restrictedFormats,
            "Format",
            Format,
          )}],`
        : ``
    }
    ${
      card.shorthands && card.shorthands.length > 0
        ? `shorthands: [${getEnumValues(
            card.shorthands,
            "Shorthand",
            Shorthand,
          )}],`
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
            Hero,
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

const CARD_CHUNK_SIZE = 800;

const generateTS = (cards: Card[]): string => {
  cards.sort(sortAlphabetically);

  const cardChunks: Card[][] = [];

  let cardsChunked = 0;
  do {
    console.log("Chunk: ", cardChunks.length + 1);
    console.log("Starting index: ", cardsChunked);

    const indexToStart = cardsChunked;
    const indexToStop = indexToStart + CARD_CHUNK_SIZE;
    const chunk = cards.slice(indexToStart, indexToStop);
    cardsChunked += chunk.length;
    console.log("Cards chunked: ", chunk.length);

    cardChunks.push(chunk);
  } while (cardsChunked < cards.length);

  console.log(cardChunks.length + " card chunks");

  // const cards1 = cards.slice(0, Math.ceil(cards.length / 5));
  // const cards2 = cards.slice(
  //   Math.ceil(cards.length / 4),
  //   Math.ceil(cards.length / 2)
  // );
  // const cards3 = cards.slice(
  //   Math.ceil(cards.length / 2),
  //   Math.ceil((3 * cards.length) / 4)
  // );
  // const cards4 = cards.slice(Math.ceil((3 * cards.length) / 4), cards.length);
  // const cards5 = cards.slice(Math.ceil((3 * cards.length) / 4), cards.length);
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
    Shorthand,
    Subtype,
    Talent,
    Trait,
    Treatment,
    Type 
  } from '@flesh-and-blood/types';

  ${cardChunks
    .map((cards, chunk) => {
      return `const cards${chunk + 1}: Card[] = [${cards.map(
        generateCardTypeScript,
      )}];`;
    })
    .join("\n")}

  export const cards: Card[] =  [
  ${cardChunks
    .map((_, chunk) => {
      return `...cards${chunk + 1},`;
    })
    .join("\n")}
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
