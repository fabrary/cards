import {
  addOppositeSideCardIdentifiers,
  getDefaultImage,
  getFusions,
  getIdentifier,
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
  const foiling = foilingString ? Foiling[foilingString] : undefined;
  const treatment = treatmentString ? Treatment[treatmentString] : undefined;
  const print = getPrint({ identifier, foiling, treatment });

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

  const set = setIdentifierToSetMappings[setString.toLowerCase()];

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

const getPrintings = (card: ParsedCard): Printing[] => {
  const printings: Printing[] = [];

  const {
    identifiers,
    setIdentifiers,
    artist,
    foiling,
    imageUrl,
    treatment,
    tcgplayerProductId,
    tcgplayerUrl,
    artist2,
    foiling2,
    imageUrl2,
    rarity2,
    treatment2,
    tcgplayerProductId2,
    tcgplayerUrl2,
  } = card;

  const printing1 = getPrinting({
    artist,
    foilingString: foiling,
    identifier: identifiers[0],
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
    const identifier = identifiers.length > 1 ? identifiers[1] : identifiers[0];
    const setIdentifier =
      setIdentifiers.length > 1 ? setIdentifiers[1] : setIdentifiers[0];
    const printing2 = getPrinting({
      artist: artist2,
      foilingString: foiling2,
      identifier,
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
    specialImage: getSpecialImage(card.name, getIdentifier(card), printings),
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
