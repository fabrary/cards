import {
  addOppositeSideCardIdentifiers,
  getDefaultImage,
  getFusions,
  getIdentifier,
  getNumberOrUndefined,
  getRarities,
  getRestrictedFormats,
  getSpecialImage,
  getSpecializations,
  getStringIfNotNumber,
  rarityStringMapping,
} from "../Shared";
import { overrides } from "../Shared/artist-overrides";
import {
  Card,
  Class,
  Foiling,
  Format,
  Hero,
  Keyword,
  Printing,
  Rarity,
  Release,
  Subtype,
  Talent,
  Treatment,
  Type,
  setIdentifierToSetMappings,
} from "@flesh-and-blood/types";
import { ParsedCard } from "./parser";
import { getPrint } from "@flesh-and-blood/types";

const getArtists = (card: ParsedCard): string[] => {
  const { artist, artist2 } = card;

  const artists = [artist, artist2]
    .filter((artist) => !!artist)
    .sort() as string[];
  return Array.from(new Set(artists)).map((artist) => {
    const matchingOverride = overrides.find(
      ({ original }) => artist === original
    );
    return matchingOverride ? matchingOverride.override.trim() : artist.trim();
  });
};

const getClasses = (card: ParsedCard): Class[] => {
  const classes: Class[] = [];
  const { types } = card;
  for (const [klass, value] of Object.entries(Class)) {
    if (types.includes(value as string)) {
      classes.push(Class[klass]);
    }
  }
  if (classes.length === 0 && getTalents(card)?.length) {
    classes.push(Class.NotClassed);
  }
  // if (classes.length === 0) {
  //   classes.push(Class.Generic);
  // }
  classes.sort();
  return classes;
};

const getHero = (card: ParsedCard): Hero | null => {
  const { types, name } = card;
  if (types.includes("Hero")) {
    for (const [hero, value] of Object.entries(Hero)) {
      if (name.includes(value as string)) {
        return Hero[hero];
      }
    }
  }
  return null;
};

interface PrintingInput {
  artist: string;
  foilingString?: string;
  identifier: string;
  imageUrl?: string;
  setString: string;
  treatmentString?: string;
  tcgplayer?: {
    productId: string;
    url: string;
  };
}
const getPrinting = ({
  artist,
  foilingString,
  identifier,
  imageUrl,
  setString,
  treatmentString,
  tcgplayer,
}: PrintingInput): Printing => {
  const set = setIdentifierToSetMappings[setString.toLowerCase()];

  const foiling = foilingString ? Foiling[foilingString] : undefined;
  const treatment = treatmentString ? Treatment[treatmentString] : undefined;

  let image;
  if (imageUrl) {
    const parsedUrl = imageUrl
      .replace(".format-webp", "")
      .replace(".width-450", "")
      .replace("_yajPa8R", "");
    image = parsedUrl.substring(
      parsedUrl.lastIndexOf("/") + 1,
      parsedUrl.lastIndexOf(".")
    );
  } else {
    image = identifier;
  }

  const print = getPrint({ identifier, image, foiling, set, treatment });

  return {
    artist,
    ...(foiling ? { foiling } : {}),
    identifier,
    image,
    print,
    set,
    ...(treatment ? { treatment } : {}),
    ...(tcgplayer ? { tcgplayer } : {}),
  };
};

const innerChiPrintings: {
  identifier: string;
  setString: string;
  properties: {
    foilingString?: string;
    imageSuffix?: string;
    treatmentString?: string;
  }[];
}[] = [
  {
    identifier: "MST000",
    setString: "MST",
    properties: [
      { foilingString: "R", imageSuffix: "" },
      { foilingString: "C", imageSuffix: "_V2", treatmentString: "FA" },
    ],
  },
  {
    identifier: "MST010",
    setString: "MST",
    properties: [
      { imageSuffix: "" },
      { foilingString: "C", imageSuffix: "_V2", treatmentString: "FA" },
    ],
  },
  {
    identifier: "MST032",
    setString: "MST",
    properties: [
      { imageSuffix: "" },
      { foilingString: "C", imageSuffix: "_V2", treatmentString: "FA" },
    ],
  },
  {
    identifier: "MST053",
    setString: "MST",
    properties: [
      { imageSuffix: "" },
      { foilingString: "C", imageSuffix: "_V2", treatmentString: "FA" },
    ],
  },
  {
    identifier: "MST095",
    setString: "MST",
    properties: [
      { imageSuffix: "" },
      { foilingString: "C", imageSuffix: "_V2", treatmentString: "FA" },
    ],
  },
  {
    identifier: "MST096",
    setString: "MST",
    properties: [
      { imageSuffix: "" },
      { foilingString: "C", imageSuffix: "_V2", treatmentString: "FA" },
    ],
  },
  {
    identifier: "MST097",
    setString: "MST",
    properties: [
      { imageSuffix: "" },
      { foilingString: "C", imageSuffix: "_V2", treatmentString: "FA" },
    ],
  },
  {
    identifier: "MST098",
    setString: "MST",
    properties: [
      { imageSuffix: "" },
      { foilingString: "C", imageSuffix: "_V2", treatmentString: "FA" },
    ],
  },
  {
    identifier: "MST099",
    setString: "MST",
    properties: [
      { imageSuffix: "" },
      { foilingString: "C", imageSuffix: "_V2", treatmentString: "FA" },
    ],
  },
  {
    identifier: "MST100",
    setString: "MST",
    properties: [
      { imageSuffix: "" },
      { foilingString: "C", imageSuffix: "_V2", treatmentString: "FA" },
    ],
  },
  {
    identifier: "MST101",
    setString: "MST",
    properties: [
      { imageSuffix: "" },
      { foilingString: "C", imageSuffix: "_V2", treatmentString: "FA" },
    ],
  },
  {
    identifier: "MST102",
    setString: "MST",
    properties: [
      { imageSuffix: "" },
      { foilingString: "C", imageSuffix: "_V2", treatmentString: "FA" },
    ],
  },
  {
    identifier: "FAB232",
    setString: "FAB",
    properties: [{ foilingString: "R", imageSuffix: "" }],
  },
  {
    identifier: "FAB233",
    setString: "FAB",
    properties: [{ foilingString: "R", imageSuffix: "" }],
  },
  {
    identifier: "FAB234",
    setString: "FAB",
    properties: [{ foilingString: "R", imageSuffix: "" }],
  },
  { identifier: "ENG025", setString: "ENG", properties: [{}] },
  { identifier: "ENG026", setString: "ENG", properties: [{}] },
  { identifier: "ENG027", setString: "ENG", properties: [{}] },
  { identifier: "ENG028", setString: "ENG", properties: [{}] },
  { identifier: "NUU026", setString: "NUU", properties: [{}] },
  { identifier: "NUU027", setString: "NUU", properties: [{}] },
  { identifier: "ZEN025", setString: "ZEN", properties: [{}] },
  { identifier: "ZEN026", setString: "ZEN", properties: [{}] },
  { identifier: "ZEN027", setString: "ZEN", properties: [{}] },
  { identifier: "ZEN028", setString: "ZEN", properties: [{}] },
];

const getPrintings = (card: ParsedCard): Printing[] => {
  const printings: Printing[] = [];

  const {
    identifiers,
    setIdentifiers,
    artist,
    foiling,
    identifier,
    imageUrl,
    treatment,
    tcgplayerProductId,
    tcgplayerUrl,
    artist2,
    foiling2,
    identifier2,
    imageUrl2,
    rarity2,
    treatment2,
    tcgplayerProductId2,
    tcgplayerUrl2,
    artist3,
    foiling3,
    identifier3,
    imageUrl3,
    rarity3,
    treatment3,
    tcgplayerProductId3,
    tcgplayerUrl3,
    artist4,
    foiling4,
    identifier4,
    imageUrl4,
    rarity4,
    treatment4,
    tcgplayerProductId4,
    tcgplayerUrl4,
  } = card;

  const printing1 = getPrinting({
    artist,
    foilingString: foiling,
    identifier: identifier || identifiers[0],
    setString: setIdentifiers[0],
    imageUrl,
    treatmentString: treatment,
    ...(tcgplayerProductId && tcgplayerUrl
      ? {
          tcgplayer: {
            productId: tcgplayerProductId,
            url: tcgplayerUrl,
          },
        }
      : {}),
  });
  printings.push(printing1);

  if (rarity2 && artist2) {
    const identifierFor2 = identifier2
      ? identifier2
      : identifiers.length > 1
      ? identifiers[1]
      : identifiers[0];
    const setIdentifier = identifierFor2.slice(0, 3);
    const printing2 = getPrinting({
      artist: artist2,
      foilingString: foiling2,
      identifier: identifierFor2,
      imageUrl: imageUrl2,
      setString: setIdentifier,
      treatmentString: treatment2,
      ...(tcgplayerProductId2 && tcgplayerUrl2
        ? {
            tcgplayer: {
              productId: tcgplayerProductId2,
              url: tcgplayerUrl2,
            },
          }
        : {}),
    });
    printings.push(printing2);
  }

  if (rarity3 && artist3) {
    const identifierFor3 = identifier3
      ? identifier3
      : identifiers.length > 2
      ? identifiers[2]
      : identifiers[0];
    const setIdentifier = identifierFor3.slice(0, 3);
    const printing3 = getPrinting({
      artist: artist3,
      foilingString: foiling3,
      identifier: identifierFor3,
      imageUrl: imageUrl3,
      setString: setIdentifier,
      treatmentString: treatment3,
      ...(tcgplayerProductId3 && tcgplayerUrl3
        ? {
            tcgplayer: {
              productId: tcgplayerProductId3,
              url: tcgplayerUrl3,
            },
          }
        : {}),
    });
    printings.push(printing3);
  }

  if (rarity4 && artist4) {
    const identifierFor4 = identifier4
      ? identifier4
      : identifiers.length > 3
      ? identifiers[3]
      : identifiers[0];
    const setIdentifier = identifierFor4.slice(0, 3);
    const printing4 = getPrinting({
      artist: artist4,
      foilingString: foiling4,
      identifier: identifierFor4,
      imageUrl: imageUrl4,
      setString: setIdentifier,
      treatmentString: treatment4,
      ...(tcgplayerProductId4 && tcgplayerUrl4
        ? {
            tcgplayer: {
              productId: tcgplayerProductId4,
              url: tcgplayerUrl4,
            },
          }
        : {}),
    });
    printings.push(printing4);
  }

  printings.sort((i1, i2) => getPrint(i1).localeCompare(getPrint(i2)));

  const printingsOverride: Printing[] = [];
  if (card.name === "Inner Chi") {
    for (const { identifier, setString, properties } of innerChiPrintings) {
      const basePrinting = {
        artist: "Carlos Cruchaga",
        identifier,
        setString,
      };

      for (const {
        foilingString,
        imageSuffix,
        treatmentString,
      } of properties) {
        const printing: Printing = getPrinting({
          ...basePrinting,
          imageUrl: `${identifier}_BACK${imageSuffix || ""}.png`,
          ...(foilingString ? { foilingString } : {}),
          ...(treatmentString ? { treatmentString } : {}),
        });
        printing.oppositeImage = `${identifier}${imageSuffix || ""}`;
        printingsOverride.push(printing);
      }
    }
  }
  return printingsOverride.length ? printingsOverride : printings;
};

const getKeywords = (card: ParsedCard): Keyword[] => {
  const { abilityAndEffectKeywords, cardKeywords, grantedKeywords, name } =
    card;
  const keywords: Keyword[] = [];
  [...cardKeywords, ...grantedKeywords, ...abilityAndEffectKeywords].forEach(
    (keyword) => {
      for (const [key, value] of Object.entries(Keyword)) {
        if (keyword.includes(value as string)) {
          const keyword = Keyword[key];
          if (!keywords.includes(keyword)) {
            keywords.push(keyword);
          }
        }
      }
    }
  );

  keywords.sort();
  return keywords;
};

export const getParsedRarities = (
  card: ParsedCard
): { rarities: Rarity[]; rarity: Rarity } => {
  const { rarity, rarity2, rarity3, rarity4 } = card;

  const rarities = [rarity, rarity2, rarity3, rarity4]
    .filter((rarity) => !!rarity)
    .sort() as string[];
  return getRarities({ rarities });
};

const getBannedFormats = (card: ParsedCard): Format[] => {
  const { blitzLegal, classicConstructedLegal, commonerLegal } = card;

  const bannedFormats: Format[] = [];

  const { rarity } = getParsedRarities(card);

  const ILLEGAL_IN_FORMAT_FLAG = "No";
  if (blitzLegal === ILLEGAL_IN_FORMAT_FLAG) {
    bannedFormats.push(Format.Blitz);
  }
  if (classicConstructedLegal === ILLEGAL_IN_FORMAT_FLAG) {
    bannedFormats.push(Format.ClassicConstructed);
  }
  if (commonerLegal === ILLEGAL_IN_FORMAT_FLAG) {
    bannedFormats.push(Format.Commoner);
  }
  bannedFormats.sort();
  return bannedFormats;
};

const getSets = ({ setIdentifiers }: ParsedCard): Release[] => {
  const sets = new Set<Release>();
  for (const setIdentifier of setIdentifiers) {
    const set = setIdentifierToSetMappings[setIdentifier.toLowerCase()];
    if (set) {
      sets.add(set);
    }
  }
  const arr = Array.from(sets);
  arr.sort();

  return arr;
};

const getTalents = (card: ParsedCard): Talent[] => {
  const { types, cardKeywords } = card;

  const talents = new Set<Talent>();
  for (const [talent, value] of Object.entries(Talent)) {
    if (types.includes(value as string)) {
      talents.add(Talent[talent]);
    }
    if (types.includes(Type.Hero)) {
      for (const cardKeyword of cardKeywords) {
        for (const keyword of cardKeyword.split(" ")) {
          if (keyword === value) {
            talents.add(Talent[talent]);
          }
        }
      }
    }
  }
  const arr = Array.from(talents);
  arr.sort();

  return arr;
};

const getTypeAndSubType = (
  card: ParsedCard
): {
  types: Type[];
  subtypes: Subtype[];
} => {
  const { types: rawTypes } = card;
  const types: Type[] = [];
  for (const [typeKey, typeValue] of Object.entries(Type)) {
    if (rawTypes.includes(typeValue as string)) {
      types.push(Type[typeKey]);
    }
  }

  const subtypes: Subtype[] = [];
  for (const subtypeEnum of [Subtype]) {
    for (const [subtypeEnumKey, subTypeEnumValue] of Object.entries(
      subtypeEnum
    ).reverse()) {
      if (rawTypes.includes(subTypeEnumValue as string)) {
        subtypes.push(subtypeEnum[subtypeEnumKey]);
      }
    }
  }
  if (types.includes(Type.Action) && !subtypes.includes(Subtype.Attack)) {
    subtypes.push(Subtype.NonAttack);
  }

  types.sort();
  subtypes.sort();

  return { types, subtypes };
};

const getYoung = (card: ParsedCard): boolean | null => {
  const { types } = card;
  return types.includes("Hero") && types.includes("Young") ? true : null;
};

const getCardData = (card: ParsedCard): Card => {
  const { types, subtypes } = getTypeAndSubType(card);
  const printings = getPrintings(card);

  const setIdentifiers = [...card.identifiers];
  setIdentifiers.sort();

  const { rarities, rarity } = getParsedRarities(card);

  return {
    artists: getArtists(card),
    cardIdentifier: getIdentifier(card),
    classes: getClasses(card),
    defaultImage: getDefaultImage(card.name, printings),
    printings,
    name: card.name.trim(),
    rarities,
    rarity,
    setIdentifiers,
    sets: getSets(card),
    specialImage: getSpecialImage(card.name, getIdentifier(card), printings),
    subtypes,
    types,
    typeText: card.typeText,

    bannedFormats: getBannedFormats(card),
    cost: getNumberOrUndefined(card.cost),
    defense: getNumberOrUndefined(card.defense) as number,
    functionalText: card.functionalText,
    fusions: getFusions(card),
    hero: getHero(card) as Hero,
    intellect: getNumberOrUndefined(card.intellect),
    keywords: getKeywords(card),
    life: getNumberOrUndefined(card.life),
    pitch: getNumberOrUndefined(card.pitch),
    power: getNumberOrUndefined(card.power) as number,
    restrictedFormats: getRestrictedFormats(card),
    specialCost: getStringIfNotNumber(card.cost) as string,
    specialDefense: getStringIfNotNumber(card.defense) as string,
    specialLife: getStringIfNotNumber(card.life) as string,
    specialPower: getStringIfNotNumber(card.power) as string,
    specializations: getSpecializations(card),
    talents: getTalents(card),
    young: getYoung(card) as boolean,
  };
};

export const mapCSV = (parsedCards: ParsedCard[]): Card[] => {
  const cards = parsedCards.map((parsedCard) => {
    return getCardData(parsedCard);
  });
  const isBackOverrides = ["Blasmophet, Levia Consumed", "Inner Chi"];
  return addOppositeSideCardIdentifiers(cards).map((card) => {
    if (isBackOverrides.includes(card.name)) {
      card.isCardBack = true;
    }
    return card;
  });
};
