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
  ReleaseEdition,
  Subtype,
  Talent,
  Treatment,
  Type,
  setIdentifierToSetMappings,
} from "@flesh-and-blood/types";
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
} from "../Shared";
import { overrides } from "../Shared/artist-overrides";
import { ParsedCard } from "./parser";
import { getPrint } from "@flesh-and-blood/types";

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
  if (classes.length === 0) {
    classes.push(Class.Generic);
  }
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

const excludedPrintings: string[] = ["LGS229-Rainbow", "LGS230-Rainbow"];

const setEditionMapping = {
  A: ReleaseEdition.Alpha,
  F: ReleaseEdition.First,
  U: ReleaseEdition.Unlimited,
};
const getPrintings = (card: ParsedCard): Printing[] => {
  const images: Printing[] = [];
  const { printings } = card;
  for (const {
    artist,
    artVariation,
    imageUrl,
    edition: rawEdition,
    // foilings,
    foiling: rawFoiling,
    setIdentifier: identifier,
    set,
    tcgplayer,
  } of printings) {
    // const set = setIdentifierToSetMappings[rawSet.toLowerCase()];
    const edition = setEditionMapping[rawEdition];

    const treatment = Treatment[artVariation];
    const image = !!imageUrl
      ? imageUrl
          .substring(imageUrl.lastIndexOf("/") + 1, imageUrl.lastIndexOf("."))
          .replace(".format-webp", "")
      : "";

    const foiling = Foiling[rawFoiling];
    const print = getPrint({ identifier, edition, foiling, set, treatment });

    const isPrintExcluded = excludedPrintings.includes(print);

    if (!isPrintExcluded) {
      images.push({
        artist,
        ...(edition ? { edition } : {}),
        ...(foiling ? { foiling } : {}),
        identifier,
        image,
        print,
        set,
        ...(tcgplayer ? { tcgplayer } : {}),
        ...(treatment ? { treatment } : {}),
      });
    }
  }
  images.sort((i1, i2) => getPrint(i1).localeCompare(getPrint(i2)));
  return images;
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

const getRarity = (card: ParsedCard): Rarity | undefined => {
  const { rarity: rarities } = card;
  if (rarities.some((rarity) => rarity.startsWith("T"))) {
    return Rarity.Token;
  } else if (rarities.some((rarity) => rarity.startsWith("F"))) {
    return Rarity.Fabled;
  } else if (rarities.some((rarity) => rarity.startsWith("L"))) {
    return Rarity.Legendary;
  } else if (rarities.some((rarity) => rarity.startsWith("M"))) {
    return Rarity.Majestic;
  } else if (rarities.some((rarity) => rarity.startsWith("S"))) {
    return Rarity.SuperRare;
  } else if (rarities.some((rarity) => rarity.startsWith("C"))) {
    return Rarity.Common;
  } else if (rarities.some((rarity) => rarity.startsWith("R"))) {
    return Rarity.Rare;
  } else if (rarities.some((rarity) => rarity.startsWith("P"))) {
    return Rarity.Promo;
  }
};

const getBannedFormats = (card: ParsedCard): Format[] => {
  const {
    blitzLegal,
    blitzBanned,
    blitzLivingLegend,
    blitzSuspended,
    classicConstructedLegal,
    classicConstructedBanned,
    classicConstructedLivingLegend,
    classicConstructedSuspended,
    commonerBanned,
    commonerLegal,
    commonerSuspended,
  } = card;

  const bannedFormats: Format[] = [];

  if (!blitzLegal || blitzLivingLegend || blitzBanned || blitzSuspended) {
    bannedFormats.push(Format.Blitz);
  }
  if (
    !classicConstructedLegal ||
    classicConstructedLivingLegend ||
    classicConstructedBanned ||
    classicConstructedSuspended
  ) {
    bannedFormats.push(Format.ClassicConstructed);
  }
  if (!commonerLegal || commonerBanned || commonerSuspended) {
    bannedFormats.push(Format.Commoner);
  }
  bannedFormats.sort();
  return bannedFormats;
};

const getSets = (printings: Printing[]): Release[] => {
  const printingSets = printings.map(({ set }) => set);
  const arr = Array.from(new Set(printingSets));
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
  const { subtypes, types } = getTypeAndSubType(card);
  const printings = getPrintings(card);

  const artists = card.artists.sort().map((artist) => {
    const matchingOverride = overrides.find(
      ({ original }) => artist === original
    );
    return matchingOverride ? matchingOverride.override.trim() : artist.trim();
  });

  const setIdentifiers = [...card.setIdentifiers];
  setIdentifiers.sort();

  return {
    artists,
    cardIdentifier: getIdentifier(card),
    classes: getClasses(card),
    defaultImage: getDefaultImage(card.name, printings),
    name: card.name,
    printings,
    rarities: getRarities(card),
    rarity: getRarity(card) as Rarity,
    setIdentifiers,
    sets: getSets(printings),
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

export const mapJSON = (parsedCards: ParsedCard[]): Card[] => {
  const cards = parsedCards.map((parsedCard) => {
    return getCardData(parsedCard);
  });

  const isBackOverrides = ["Blasmophet, Levia Consumed"];
  const removeBack = [
    "Blossom of Spring",
    "Fyendal's Spring Tunic",
    "Scabskin Leathers",
    "Snapdragon Scalers",
  ];
  return addOppositeSideCardIdentifiers(cards).map((card) => {
    if (isBackOverrides.includes(card.name)) {
      card.isCardBack = true;
    } else if (removeBack.includes(card.name)) {
      delete card.isCardBack;
      delete card.oppositeSideCardIdentifier;
    }
    return card;
  });
};
