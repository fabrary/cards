import {
  addOppositeSideCardIdentifiers,
  getDefaultImage,
  getFusions,
  getNumberOrUndefined,
  getPrint,
  getSpecialImage,
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

const getArtists = (card: ParsedCard): string[] => {
  const { artist, artist2 } = card;

  const artists = [artist, artist2]
    .filter((artist) => !!artist)
    .sort() as string[];
  return Array.from(new Set(artists)).map((artist) => {
    const matchingOverride = overrides.find(
      ({ original }) => artist === original
    );
    return matchingOverride ? matchingOverride.override : artist;
  });
};

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
  classes.sort();
  return classes;
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

const getPrintings = (card: ParsedCard): Printing[] => {
  const printings: Printing[] = [];

  const {
    identifiers,
    setIdentifiers,
    foiling,
    imageUrl,
    treatment,
    foiling2,
    imageUrl2,
    rarity2,
    treatment2,
  } = card;

  const printing1: Printing = {
    identifier: identifiers[0],
    image: "",
    set: setIdentifierToSetMappings[setIdentifiers[0].toLowerCase()],
  };
  if (treatment) {
    printing1.treatment = Treatment[treatment];
  }
  if (foiling) {
    printing1.foiling = Foiling[foiling];
  }
  if (imageUrl) {
    const truncatedImageUrl = imageUrl
      .replace(".format-webp", "")
      .replace(".width-450", "")
      .replace("_yajPa8R", "");
    printing1.image = truncatedImageUrl.substring(
      truncatedImageUrl.lastIndexOf("/") + 1,
      truncatedImageUrl.lastIndexOf(".")
    );
  }
  printings.push(printing1);

  if (rarity2) {
    const identifier = identifiers.length > 1 ? identifiers[1] : identifiers[0];
    const setIdentifier =
      setIdentifiers.length > 1 ? setIdentifiers[1] : setIdentifiers[0];
    const printing2: Printing = {
      identifier,
      image: "",
      set: setIdentifierToSetMappings[setIdentifier.toLowerCase()],
    };
    if (treatment2) {
      printing2.treatment = Treatment[treatment2];
    }
    if (foiling2) {
      printing2.foiling = Foiling[foiling2];
    }
    if (imageUrl2) {
      const truncatedImageUrl = imageUrl2
        .replace(".format-webp", "")
        .replace(".width-450", "")
        .replace("_yajPa8R", "");
      printing2.image = truncatedImageUrl.substring(
        truncatedImageUrl.lastIndexOf("/") + 1,
        truncatedImageUrl.lastIndexOf(".")
      );
    }
    printings.push(printing2);
  }
  printings.sort((i1, i2) => getPrint(i1).localeCompare(getPrint(i2)));
  return printings;
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

  keywords.sort();
  return keywords;
};

const getRarity = (card: ParsedCard): Rarity | undefined => {
  return rarityStringMapping[card.rarity];
};

export const getRarities = (card: ParsedCard): Rarity[] => {
  const { rarity, rarity2 } = card;

  const rarities = [rarity, rarity2]
    .filter((rarity) => !!rarity)
    .map((rarity) => rarityStringMapping[rarity as string])
    .sort();
  return Array.from(new Set(rarities));
};

const getRestrictedFormats = (card: ParsedCard): Format[] => {
  const { blitzLegal, classicConstructedLegal, commonerLegal } = card;

  const restrictedFormats: Format[] = [];

  const ILLEGAL_IN_FORMAT_FLAG = "No";
  if (blitzLegal === ILLEGAL_IN_FORMAT_FLAG) {
    restrictedFormats.push(Format.Blitz);
  }
  if (classicConstructedLegal === ILLEGAL_IN_FORMAT_FLAG) {
    restrictedFormats.push(Format.ClassicConstructed);
  }
  if (commonerLegal === ILLEGAL_IN_FORMAT_FLAG) {
    restrictedFormats.push(Format.Commoner);
  }
  restrictedFormats.sort();
  return restrictedFormats;
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
  specializations.sort();

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

  return {
    artists: getArtists(card),
    cardIdentifier: getIdentifier(card),
    classes: getClasses(card),
    defaultImage: getDefaultImage(card.name, printings),
    printings: getPrintings(card),
    name: card.name,
    rarities: getRarities(card),
    rarity: getRarity(card) as Rarity,
    setIdentifiers: card.identifiers,
    sets: getSets(card),
    specialImage: getSpecialImage(card.name, printings),
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
  const isBackOverrides = ["Blasmophet, Levia Consumed"];
  return addOppositeSideCardIdentifiers(cards).map((card) => {
    if (isBackOverrides.includes(card.name)) {
      card.isCardBack = true;
    }
    return card;
  });
};
