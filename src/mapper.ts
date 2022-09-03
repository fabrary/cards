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
  HeroSubType,
  Image,
  Keyword,
  MentorCard,
  PlaceholderCard,
  PlaceholderSubType,
  Rarity,
  Release,
  ReleaseEdition,
  ResourceCard,
  ResourceSubType,
  Talent,
  TokenCard,
  TokenSubType,
  Treatment,
  Type,
  WeaponCard,
  WeaponSubType,
} from "./interfaces";
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

const getCost = (card: ParsedCard): number | null => {
  const { cost } = card;
  return typeof cost === "string" ? null : cost;
};

const getDefaultImageName = (card: ParsedCard): string => {
  const images = getImages(card);
  const firstEdition = images.find(
    (image) => image.edition === ReleaseEdition.First
  );
  const alphaEdition = images.find(
    (image) => image.edition === ReleaseEdition.Alpha
  );
  const unlimitedEdition = images.find(
    (image) => image.edition === ReleaseEdition.Unlimited
  );

  const name =
    images.length > 0
      ? firstEdition?.name ||
        alphaEdition?.name ||
        unlimitedEdition?.name ||
        images[0].name
      : "";
  if (!name) {
    console.log(`Missing images for ${card.name}`);
  }
  return name;
};

const getSpecialImageName = (card: ParsedCard): string => {
  const images = getImages(card);
  const alternativeArt = images.find(
    (image) => image.treatment === Treatment.AA
  );
  const fullArt = images.find((image) => image.treatment === Treatment.FA);
  const extendedArt = images.find((image) => image.treatment === Treatment.EA);
  const firstEdition = images.find(
    (image) => image.edition === ReleaseEdition.First
  );
  const alphaEdition = images.find(
    (image) => image.edition === ReleaseEdition.Alpha
  );
  const unlimitedEdition = images.find(
    (image) => image.edition === ReleaseEdition.Unlimited
  );

  const name =
    images.length > 0
      ? fullArt?.name ||
        extendedArt?.name ||
        alternativeArt?.name ||
        firstEdition?.name ||
        alphaEdition?.name ||
        unlimitedEdition?.name ||
        images[0].name
      : "";
  if (!name) {
    console.log(`Missing images for ${card.name}`);
  }
  return name;
};

const getDefense = (card: ParsedCard): number | null => {
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
  let hands;
  if (types.some((type) => type.includes("1H"))) {
    hands = HandsRequired.OneHanded;
  } else if (types.some((type) => type.includes("2H"))) {
    hands = HandsRequired.TwoHanded;
  } else {
    hands = null;
  }
  return hands;
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

const setEditionMapping = {
  A: ReleaseEdition.Alpha,
  F: ReleaseEdition.First,
  U: ReleaseEdition.Unlimited,
  N: ReleaseEdition.Promo,
};
const getImages = (card: ParsedCard): Image[] => {
  const images: Image[] = [];
  const { images: unparsedImages } = card;
  for (const image of unparsedImages) {
    const [url, identifier, rawEdition, rawTreatment] = image.split(" - ");
    const setAbbreviation = identifier.slice(0, 3);
    const set = setIdentifierToSetMappings[setAbbreviation];
    const edition = setEditionMapping[rawEdition];
    const treatment = Treatment[rawTreatment];
    const name = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."));

    images.push({
      edition,
      identifier,
      name,
      set,
      ...(treatment ? { treatment } : {}),
    });
  }
  return images;
};

const getKeywords = (card: ParsedCard): Keyword[] => {
  const { cardKeywords, grantedKeywords, name } = card;
  const keywords = [];
  [...cardKeywords, ...grantedKeywords].forEach((keyword) => {
    for (const [key, value] of Object.entries(Keyword)) {
      if (keyword.includes(value)) {
        // @ts-ignore
        keywords.push(Keyword[key]);
      }
    }
  });

  return keywords;
};

const getPower = (card: ParsedCard): number | null => {
  const { power } = card;
  return typeof power === "string" ? null : power;
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
  const { type } = getTypeAndSubType(card);

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
  // Full sets
  "1HP": Release.HistoryPack1,
  ARC: Release.ArcaneRising,
  CRU: Release.CrucibleOfWar,
  DYN: Release.Dynasty,
  ELE: Release.TalesOfAria,
  EVR: Release.Everfest,
  MON: Release.Monarch,
  UPR: Release.Uprising,
  WTR: Release.WelcomeToRathe,

  // Starter/blitz decks
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

const getSpecialCost = (card: ParsedCard): string | null => {
  const { cost } = card;
  return typeof cost === "string" ? cost : null;
};

const getSpecialDefense = (card: ParsedCard): string | null => {
  const { defense } = card;
  return typeof defense === "string" ? defense : null;
};

const getSpecialPower = (card: ParsedCard): string | null => {
  const { power } = card;
  return typeof power === "string" ? power : null;
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
  type: Type | null;
  subType:
    | ActionSubType
    | EquipmentSubType
    | HeroSubType
    | PlaceholderSubType
    | ResourceSubType
    | TokenSubType
    | WeaponSubType
    | null;
} => {
  const { types } = card;
  let type: Type | null = null;
  for (const [typeKey, typeValue] of Object.entries(Type)) {
    if (types.includes(typeValue)) {
      type = Type[typeKey];
      break;
    }
  }

  let subType:
    | ActionSubType
    | EquipmentSubType
    | HeroSubType
    | ResourceSubType
    | PlaceholderSubType
    | TokenSubType
    | WeaponSubType
    | null = null;
  for (const subTypeEnum of [
    ActionSubType,
    EquipmentSubType,
    HeroSubType,
    ResourceSubType,
    PlaceholderSubType,
    TokenSubType,
    WeaponSubType,
  ]) {
    if (subType) {
      break;
    } else {
      for (const [subTypeEnumKey, subTypeEnumValue] of Object.entries(
        subTypeEnum
      ).reverse()) {
        if (types.includes(subTypeEnumValue)) {
          subType = subTypeEnum[subTypeEnumKey];
          break;
        }
      }
    }
  }

  const dragons = [
    "Azvolai",
    "Cromai",
    "Dominia",
    "Dracona Optimai",
    "Kyloria",
    "Miragai",
    "Nekria",
    "Ouvia",
    "Themai",
    "Tomeltai",
    "Vynserakai",
    "Yendurai",
  ];
  if (dragons.includes(card.name)) {
    type = Type.Token;
  }

  if (type === Type.Action && !subType) {
    subType = ActionSubType.NonAttack;
  }

  return { type, subType };
};

const getYoung = (card: ParsedCard): boolean | null => {
  const { types } = card;
  return types.includes("Hero") && types.includes("Young") ? true : null;
};

const getCommonCardData = (card: ParsedCard): Card => {
  const { type } = getTypeAndSubType(card);
  return {
    artists: card.artists,
    class: getClasses(card)[0],
    classes: getClasses(card),
    cardIdentifier: getIdentifier(card),
    functionalText: card.functionalText,
    defaultImageName: getDefaultImageName(card),
    images: getImages(card),
    keywords: getKeywords(card),
    name: card.name,
    rarity: getRarity(card) as Rarity,
    restrictedFormats: getRestrictedFormats(card),
    setIdentifiers: card.identifiers,
    sets: getSets(card),
    specialImageName: getSpecialImageName(card),
    type: type as Type,
    typeText: card.typeText,
  };
};

const getActionCardData = (card: ParsedCard): ActionCard => {
  const { subType } = getTypeAndSubType(card);
  return {
    ...getCommonCardData(card),
    cost: getCost(card) as number,
    defense: getDefense(card) as number,
    fusions: getFusions(card),
    pitch: card.pitch || 0,
    power: getPower(card) as number,
    talents: getTalents(card),
    specialCost: getSpecialCost(card) as string,
    specialDefense: getSpecialDefense(card) as string,
    specialPower: getSpecialPower(card) as string,
    specializations: getSpecializations(card),
    // @ts-ignore
    subType,
  };
};

const getEquipmentCardData = (card: ParsedCard): EquipmentCard => {
  const { subType } = getTypeAndSubType(card);
  return {
    ...getCommonCardData(card),
    defense: getDefense(card) as number,
    handsRequired: getHands(card),
    talents: getTalents(card),
    // @ts-ignore
    subType,
  };
};

const getHeroCardData = (card: ParsedCard): HeroCard => {
  const { subType } = getTypeAndSubType(card);
  return {
    ...getCommonCardData(card),
    intellect: card.intellect,
    hero: getHero(card) as Hero,
    life: card.life,
    // @ts-ignore
    subType,
    talents: getTalents(card),
    young: getYoung(card) as boolean,
  };
};

const getMentorCardData = (card: ParsedCard): MentorCard => {
  return {
    ...getCommonCardData(card),
    defense: getDefense(card) as number,
  };
};

const getPlaceholderCardData = (card: ParsedCard): PlaceholderCard => {
  const { subType } = getTypeAndSubType(card);
  return {
    ...getCommonCardData(card),
    // @ts-ignore
    subType,
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
    specializations: getSpecializations(card),
    // @ts-ignore
    subType,
  };
};

const getTokenCardData = (card: ParsedCard): TokenCard => {
  const { subType } = getTypeAndSubType(card);
  return {
    ...getCommonCardData(card),
    life: card.life,
    power: getPower(card) as number,
    talents: getTalents(card),
    // @ts-ignore
    subType,
  };
};

const getWeaponCardData = (card: ParsedCard): WeaponCard => {
  const { subType } = getTypeAndSubType(card);
  return {
    ...getCommonCardData(card),
    power: getPower(card) as number,
    specialPower: getSpecialPower(card) as string,
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
  mentors: MentorCard[];
  placeholders: PlaceholderCard[];
  resources: ResourceCard[];
  tokens: TokenCard[];
  weapons: WeaponCard[];
} => {
  const actions: ActionCard[] = [];
  const equipment: EquipmentCard[] = [];
  const heroes: HeroCard[] = [];
  const mentors: MentorCard[] = [];
  const placeholders: PlaceholderCard[] = [];
  const resources: ResourceCard[] = [];
  const tokens: TokenCard[] = [];
  const weapons: WeaponCard[] = [];
  cards.forEach((card) => {
    const { type, subType } = getTypeAndSubType(card);
    switch (type) {
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
      case Type.Mentor:
        mentors.push(getMentorCardData(card));
        break;
      case Type.PlaceholderCard:
        placeholders.push(getPlaceholderCardData(card));
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
      default:
        console.log(`No card type for ${card.name}`);
        break;
    }
  });
  // console.log(actions.find((card) => card.name === "Frost Hex"));
  return {
    actions,
    equipment,
    heroes,
    mentors,
    placeholders,
    resources,
    tokens,
    weapons,
  };
};
