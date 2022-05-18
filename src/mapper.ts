import {
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
import { ParsedCard } from "./parser";

const getClass = (card: ParsedCard): Class => {
  const { types } = card;
  for (const [klass, value] of Object.entries(Class)) {
    if (types.includes(value)) {
      return Class[klass];
    }
  }
  return Class.Generic;
};

const getCost = (card: ParsedCard): number => {
  const { cost } = card;
  return typeof cost === "string" ? null : cost;
};

const getDefense = (card: ParsedCard): number => {
  const { defense } = card;
  return typeof defense === "string" ? null : defense;
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

const getHands = (card: ParsedCard): HandsRequired => {
  const { types } = card;
  let hands = null;
  if (types.some((type) => type.includes("1H"))) {
    hands = HandsRequired.OneHanded;
  } else if (types.some((type) => type.includes("2H"))) {
    hands = HandsRequired.TwoHanded;
  }
  return hands;
};

const getHero = (card: ParsedCard): Hero => {
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
    .replace("[^A-Za-z ]+", "")
    .replace(/ /g, "-")
    .replace(/,/g, "")
    .replace(/’/g, "");
  let color;
  switch (pitch) {
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
  return color ? `${name}-${color}` : name;
};

const getImageUrl = (card: ParsedCard): string => {
  const { imageUrls } = card;
  const [imageUrl] = imageUrls[0].split(" ");
  return imageUrl;
};

const getKeywords = (card: ParsedCard): Keyword[] => {
  const { cardKeywords } = card;
  const keywords = [];
  cardKeywords.forEach((keyword) => {
    for (const [key, value] of Object.entries(Keyword)) {
      if (keyword.includes(value)) {
        keywords.push(Keyword[key]);
      }
    }
  });

  return keywords;
};

const getPower = (card: ParsedCard): number => {
  const { power } = card;
  return typeof power === "string" ? null : power;
};

const getRarity = (card: ParsedCard): Rarity => {
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

const getRestrictedFormats = (card: ParsedCard): Format[] => {
  const {
    blitzBanned,
    blitzLivingLegend,
    classicConstructedBanned,
    classicConstructedLivingLegend,
    commonerBanned,
  } = card;
  const restrictedFormats = [];
  if (blitzBanned || blitzLivingLegend) {
    restrictedFormats.push(Format.Blitz);
  }
  if (classicConstructedBanned || classicConstructedLivingLegend) {
    restrictedFormats.push(Format.ClassicConstructed);
  }
  if (commonerBanned) {
    restrictedFormats.push(Format.Commoner);
  }
  return restrictedFormats;
};

const setIdentifierToSetMappings = {
  FAB: Release.Promos,
  HER: Release.Promos,
  LGS: Release.Promos,
  LSS: Release.Promos,
  XXX: Release.Promos,
  BOL: Release.BoltynBlitzDeck,
  BRI: Release.BriarBlitzDeck,
  BVO: Release.BravoBlitzDeck,
  CHN: Release.ChaneBlitzDeck,
  IRA: Release.IraWelcomeDeck,
  KSU: Release.KatsuHeroDeck,
  LEV: Release.LeviaBlitzDeck,
  LXI: Release.LexiBlitzDeck,
  OLD: Release.OldhimBlitzDeck,
  PSM: Release.PrismBlitzDeck,
  RNR: Release.RhinarHeroDeck,
  TEA: Release.DorintheaHeroDeck,
  DVR: Release.ClassicBattlesRhinarDorinthea,
  "1HP": Release.HistoryPack1,
  WTR: Release.WelcomeToRathe,
  ARC: Release.ArcaneRising,
  CRU: Release.CrucibleOfWar,
  MON: Release.Monarch,
  ELE: Release.Monarch,
  EVR: Release.Everfest,
  UPR: Release.Uprising,
};
const getSets = (card: ParsedCard): Release[] =>
  card.setIdentifiers
    .map((set) => setIdentifierToSetMappings[set])
    .filter((set) => set);

const getSpecialization = (card: ParsedCard): Hero => {
  const { cardKeywords } = card;

  let specialization = null;
  cardKeywords.forEach((keyword) => {
    if (keyword.includes("Specialization")) {
      const [hero] = keyword.split(" Specialization");
      specialization = Hero[hero];
    }
  });

  return specialization;
};

const getSpecialCost = (card: ParsedCard): string => {
  const { cost } = card;
  return typeof cost === "string" ? cost : null;
};

const getSpecialDefense = (card: ParsedCard): string => {
  const { defense } = card;
  return typeof defense === "string" ? defense : null;
};

const getSpecialPower = (card: ParsedCard): string => {
  const { power } = card;
  return typeof power === "string" ? power : null;
};

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

const getYoung = (card: ParsedCard): boolean => {
  const { types } = card;
  return types.includes("Hero") && types.includes("Young") ? true : null;
};

const getCommonCardData = (card: ParsedCard): Card => {
  const { type } = getTypeAndSubType(card);
  return {
    class: getClass(card),
    identifier: getIdentifier(card),
    functionalText: card.functionalText,
    imageUrl: getImageUrl(card),
    keywords: getKeywords(card),
    name: card.name,
    rarity: getRarity(card),
    restrictedFormats: getRestrictedFormats(card),
    setIdentifiers: card.setIdentifiers,
    sets: getSets(card),
    type,
    typeText: card.typeText,
  };
};

const getActionCardData = (card: ParsedCard): ActionCard => {
  const { subType } = getTypeAndSubType(card);
  return {
    ...getCommonCardData(card),
    cost: getCost(card),
    defense: getDefense(card),
    fusions: getFusions(card),
    pitch: card.pitch,
    power: getPower(card),
    talents: getTalents(card),
    specialCost: getSpecialCost(card),
    specialDefense: getSpecialDefense(card),
    specialPower: getSpecialPower(card),
    specialization: getSpecialization(card),
    // @ts-ignore
    subType,
  };
};

const getEquipmentCardData = (card: ParsedCard): EquipmentCard => {
  const { subType } = getTypeAndSubType(card);
  return {
    ...getCommonCardData(card),
    defense: getDefense(card),
    handsRequired: getHands(card),
    talents: getTalents(card),
    // @ts-ignore
    subType,
  };
};

const getHeroCardData = (card: ParsedCard): HeroCard => {
  return {
    ...getCommonCardData(card),
    intellect: card.intellect,
    hero: getHero(card),
    life: card.life,
    young: getYoung(card),
  };
};

const getResourceCardData = (card: ParsedCard): ResourceCard => {
  const { subType } = getTypeAndSubType(card);
  return {
    ...getCommonCardData(card),
    cost: getCost(card),
    defense: getDefense(card),
    pitch: card.pitch,
    talents: getTalents(card),
    // @ts-ignore
    subType,
  };
};

const getTokenCardData = (card: ParsedCard): TokenCard => {
  const { subType } = getTypeAndSubType(card);
  return {
    ...getCommonCardData(card),
    talents: getTalents(card),
    // @ts-ignore
    subType,
  };
};

const getWeaponCardData = (card: ParsedCard): WeaponCard => {
  const { subType } = getTypeAndSubType(card);
  return {
    ...getCommonCardData(card),
    power: getPower(card),
    specialPower: getSpecialPower(card),
    handsRequired: getHands(card),
    talents: getTalents(card),
    // @ts-ignore
    subType,
  };
};

export const mapCardData = (
  cards: ParsedCard[]
): {
  actions: ActionCard[];
  equipment: EquipmentCard[];
  heroes: HeroCard[];
  resources: ResourceCard[];
  tokens: TokenCard[];
  weapons: WeaponCard[];
} => {
  const actions: ActionCard[] = [];
  const equipment: EquipmentCard[] = [];
  const heroes: HeroCard[] = [];
  const resources: ResourceCard[] = [];
  const tokens: TokenCard[] = [];
  const weapons: WeaponCard[] = [];
  cards.forEach((card) => {
    const { type, subType } = getTypeAndSubType(card);
    switch (type) {
      // TODO Type.Mentor
      case Type.Action:
      case Type.AttackAction:
      case Type.AttackReaction:
      case Type.DefenseReaction:
      case Type.Instant:
        actions.push(getActionCardData(card));
        break;
      case Type.Equipment:
        equipment.push(getEquipmentCardData(card));
        break;
      case Type.Hero:
        heroes.push(getHeroCardData(card));
        break;
      case Type.Resource:
        resources.push(getResourceCardData(card));
        break;
      case Type.Token:
        tokens.push(getTokenCardData(card));
        break;
      case Type.Weapon:
        weapons.push(getWeaponCardData(card));
        break;
    }
  });
  // console.log(actions.find((card) => card.name === "Reckless Swing"));
  return { actions, equipment, heroes, resources, tokens, weapons };
};
