import {
  addOppositeSideCardIdentifiers,
  fullSetIdentifiers,
  getDefaultImage,
  getNumberOrUndefined,
  getSpecialImage,
  getStringIfNotNumber,
} from "../Shared";
import {
  Card,
  Class,
  Format,
  Fusion,
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
} from "../Shared/interfaces";
import { ParsedCard } from "./parser";

const getClasses = (card: ParsedCard): Class[] => {
  const classes: Class[] = [];
  const { types } = card;
  for (const [klass, value] of Object.entries(Class)) {
    if (types.includes(value)) {
      classes.push(Class[klass]);
    }
  }
  if (classes.length === 0 && getTalents(card)?.length) {
    classes.push(Class.NotClassed);
  }
  if (classes.length === 0) {
    classes.push(Class.Generic);
  }
  return classes;
};

const getFusions = (card: ParsedCard): Fusion[] => {
  const { cardKeywords } = card;
  const fusions = new Set<Fusion>();
  cardKeywords.forEach((keyword) => {
    if (keyword.includes("Fusion")) {
      for (const [fusion, value] of Object.entries(Fusion)) {
        if (keyword.includes(value)) {
          fusions.add(Fusion[fusion]);
        }
      }
    }
  });
  return [...fusions];
};

const getHero = (card: ParsedCard): Hero | null => {
  const { types, name } = card;
  if (types.includes("Hero")) {
    for (const [hero, value] of Object.entries(Hero)) {
      if (name.includes(value)) {
        return Hero[hero];
      }
    }
  }
  return null;
};

const getIdentifier = (card: ParsedCard): string => {
  const { types, name: unformattedName, pitch } = card;
  const name = unformattedName
    .toLowerCase()
    .replace(/ /g, "-")
    .replace("í", "i")
    .replace(/[^a-z-]/g, "");
  // .replace("!", "")
  // .replace(".", "")
  // .replace("?", "")
  // .replace("'", "")
  // .replace(/,/g, "")
  // .replace(/’/g, "");
  let color;
  switch (pitch) {
    case "1":
      color = "red";
      break;
    case "2":
      color = "yellow";
      break;
    case "3":
      color = "blue";
      break;
    default:
      color = "";
  }
  return color ? `${name}-${color}` : name;
};

const setEditionMapping = {
  A: ReleaseEdition.Alpha,
  F: ReleaseEdition.First,
  U: ReleaseEdition.Unlimited,
};
const getPrintings = (card: ParsedCard): Printing[] => {
  const images: Printing[] = [];
  const { images: unparsedImages } = card;
  for (const unparsedImage of unparsedImages) {
    const [url, identifier, rawEdition, rawTreatment] =
      unparsedImage.split(" - ");
    const setAbbreviation = identifier.slice(0, 3);
    const set = setIdentifierToSetMappings[setAbbreviation];
    const edition = setEditionMapping[rawEdition];
    const treatment = Treatment[rawTreatment];
    const image = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."));

    images.push({
      ...(!!edition ? { edition } : {}),
      identifier,
      image,
      set,
      ...(treatment ? { treatment } : {}),
    });
  }
  return images;
};

const getKeywords = (card: ParsedCard): Keyword[] => {
  const { abilityAndEffectKeywords, cardKeywords, grantedKeywords, name } =
    card;
  const keywords: Keyword[] = [];
  [...cardKeywords, ...grantedKeywords, ...abilityAndEffectKeywords].forEach(
    (keyword) => {
      for (const [key, value] of Object.entries(Keyword)) {
        if (keyword.includes(value)) {
          const keyword = Keyword[key];
          if (!keywords.includes(keyword)) {
            keywords.push(keyword);
          }
        }
      }
    }
  );

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
  } else if (rarities.some((rarity) => rarity.startsWith("R"))) {
    return Rarity.Rare;
  } else if (rarities.some((rarity) => rarity.startsWith("C"))) {
    return Rarity.Common;
  } else if (rarities.some((rarity) => rarity.startsWith("P"))) {
    return Rarity.Promo;
  }
};

const rarityStringMapping: { [key: string]: Rarity } = {
  T: Rarity.Token,
  F: Rarity.Fabled,
  L: Rarity.Legendary,
  M: Rarity.Majestic,
  V: Rarity.Marvel,
  S: Rarity.SuperRare,
  R: Rarity.Rare,
  C: Rarity.Common,
  P: Rarity.Promo,
};

const getRarities = (card: ParsedCard): Rarity[] => {
  const { rarity } = card;
  const rarities: Rarity[] = [];
  rarity.forEach((rawRarity) => {
    const rarityString = rawRarity.split(" - ")[0];
    const rarity = rarityStringMapping[rarityString];
    if (!rarity) {
      console.error(`No rarity found for ${rarityString} (${rawRarity})`);
    }
    if (!rarities.includes(rarity)) {
      rarities.push(rarity);
    }
  });
  return rarities;
};

const getRestrictedFormats = (card: ParsedCard): Format[] => {
  const {
    blitzLegal,
    blitzBanned,
    blitzLivingLegend,
    blitzSuspendedStart,
    blitzSuspendedEnd,
    classicConstructedLegal,
    classicConstructedBanned,
    classicConstructedLivingLegend,
    classicConstructedSuspendedStart,
    classicConstructedSuspendedEnd,
    commonerLegal,
    commonerBanned,
  } = card;

  const restrictedFormats: Format[] = [];

  const ILLEGAL_IN_FORMAT_FLAG = "No";
  if (
    blitzLivingLegend ||
    todayIsAfterDate(blitzBanned) ||
    todayIsWithinDateRanges(blitzSuspendedStart, blitzSuspendedEnd) ||
    blitzLegal === ILLEGAL_IN_FORMAT_FLAG
  ) {
    restrictedFormats.push(Format.Blitz);
  }
  if (
    classicConstructedLivingLegend ||
    todayIsAfterDate(classicConstructedBanned) ||
    todayIsWithinDateRanges(
      classicConstructedSuspendedStart,
      classicConstructedSuspendedEnd
    ) ||
    classicConstructedLegal === ILLEGAL_IN_FORMAT_FLAG
  ) {
    restrictedFormats.push(Format.ClassicConstructed);
  }
  if (commonerBanned || commonerLegal === ILLEGAL_IN_FORMAT_FLAG) {
    restrictedFormats.push(Format.Commoner);
  }
  return restrictedFormats;
};

const todayIsWithinDateRanges = (start: string, end: string): boolean => {
  if (start && end) {
    const today = new Date();
    const startDate = new Date(start);
    const endDate = new Date(end);
    if (typeof endDate === "number") {
      return startDate < today && today < endDate;
    } else {
      return startDate < today;
    }
  } else {
    return false;
  }
};

const todayIsAfterDate = (date: string): boolean => {
  if (date) {
    const today = new Date();
    const dat = new Date(date);
    return today > dat;
  } else {
    return false;
  }
};

const setIdentifierToSetMappings = {
  ...fullSetIdentifiers,

  // Starter/blitz decks
  BOL: Release.BoltynBlitzDeck,
  BRI: Release.BriarBlitzDeck,
  BVO: Release.BravoBlitzDeck,
  CHN: Release.ChaneBlitzDeck,
  DRO: Release.DromaiBlitzDeck,
  FAI: Release.FaiBlitzDeck,
  IRA: Release.IraWelcomeDeck,
  KSU: Release.KatsuHeroDeck,
  LEV: Release.LeviaBlitzDeck,
  LXI: Release.LexiBlitzDeck,
  OLD: Release.OldhimBlitzDeck,
  PSM: Release.PrismBlitzDeck,
  RNR: Release.RhinarHeroDeck,
  TEA: Release.DorintheaHeroDeck,
  DVR: Release.ClassicBattlesRhinarDorinthea,
  RVD: Release.ClassicBattlesRhinarDorinthea,

  // Promos
  FAB: Release.Promos,
  HER: Release.Promos,
  JDG: Release.Promos,
  LGS: Release.Promos,
  LSS: Release.Promos,
  OXO: Release.Promos,
  XXX: Release.Promos,
};
const getSets = (card: ParsedCard): Release[] =>
  card.setIdentifiers
    .map((set) => setIdentifierToSetMappings[set])
    .filter((set) => set);

const getSpecializations = (card: ParsedCard): Hero[] => {
  const { cardKeywords } = card;

  const specializations: Hero[] = [];
  cardKeywords.forEach((keyword) => {
    if (keyword.includes("Specialization")) {
      const [oneOrMoreHeroes] = keyword.split(" Specialization");
      const heroes = oneOrMoreHeroes.split(" or ");
      for (const hero of heroes) {
        specializations.push(Hero[hero.replace(" ", "")]);
      }
    }
  });

  return specializations;
};

const getTalents = (card: ParsedCard): Talent[] => {
  const { types, cardKeywords } = card;

  const talents = new Set<Talent>();
  for (const [talent, value] of Object.entries(Talent)) {
    if (types.includes(value)) {
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
  return [...talents];
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
    if (rawTypes.includes(typeValue)) {
      types.push(Type[typeKey]);
    }
  }

  const subtypes: Subtype[] = [];
  for (const subtypeEnum of [Subtype]) {
    for (const [subtypeEnumKey, subTypeEnumValue] of Object.entries(
      subtypeEnum
    ).reverse()) {
      if (rawTypes.includes(subTypeEnumValue)) {
        subtypes.push(subtypeEnum[subtypeEnumKey]);
      }
    }
  }
  if (types.includes(Type.Action) && !subtypes.includes(Subtype.Attack)) {
    subtypes.push(Subtype.NonAttack);
  }

  return { types, subtypes };
};

const getYoung = (card: ParsedCard): boolean | null => {
  const { types } = card;
  return types.includes("Hero") && types.includes("Young") ? true : null;
};

const getCardData = (card: ParsedCard): Card => {
  const { types, subtypes } = getTypeAndSubType(card);
  const printings = getPrintings(card);

  return {
    artists: card.artists,
    cardIdentifier: getIdentifier(card),
    classes: getClasses(card),
    defaultImage: getDefaultImage(printings),
    printings: getPrintings(card),
    name: card.name,
    rarities: getRarities(card),
    rarity: getRarity(card) as Rarity,
    setIdentifiers: card.identifiers,
    sets: getSets(card),
    specialImage: getSpecialImage(printings),
    subtypes,
    types,
    typeText: card.typeText,

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
  return addOppositeSideCardIdentifiers(cards);
};