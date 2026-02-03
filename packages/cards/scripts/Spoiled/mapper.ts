import { releasedCards } from "../Released";
import {
  addOppositeSideCardIdentifiers,
  getBonds,
  getFlows,
  getFusions,
  getHeroFromCard,
  getNumberOrUndefined,
  getRarities,
  getRarityFromRawString,
  getRestrictedFormats,
  getSpecializations,
  getStringIfNotNumber,
  getTraits,
  getTypeSubtypeAndMetatype,
  sortPrintingsByReleaseOrder,
} from "../Shared";
import { ARTIST_OVERRIDES } from "../Shared/artist-overrides";
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
  Talent,
  Treatment,
  Type,
  getCardIdentifier,
  setIdentifierToSetMappings,
} from "@flesh-and-blood/types";
import { ParsedCard } from "./parser";
import {
  getDefaultPrinting,
  getPrint,
  getSpecialPrinting,
} from "@flesh-and-blood/types";

import tcgplayerProductFile from "../Released/card.json";
import { SourceJSONCard } from "../Released/parser";
import { getLegalFormats } from "../Shared/legality";

const tcgplayerProductInfo = tcgplayerProductFile as SourceJSONCard[];

const getArtists = (card: ParsedCard): string[] => {
  const { artists, artists2 } = card;

  const allArtists = [...artists, ...(artists2 || [])]
    .filter((artist) => !!artist)
    .sort() as string[];
  return Array.from(new Set(allArtists)).map((artist) => {
    const correctedArtist = ARTIST_OVERRIDES[artist] || artist;

    return correctedArtist.trim();
  });
};

const getClasses = (card: ParsedCard): Class[] => {
  const classes: Class[] = [];
  const { types } = card;
  for (const [klass, value] of Object.entries(Class)) {
    if (types.includes(value as string)) {
      classes.push(Class[klass as Class]);
    }
  }
  if (classes.length === 0 && getTalents(card)?.length) {
    classes.push(Class.NotClassed);
  }
  if (classes.length === 0 && card.types.includes(Type.Macro)) {
    classes.push(Class.NotClassed);
  }
  // if (classes.length === 0) {
  //   classes.push(Class.Generic);
  // }
  classes.sort();
  return classes;
};

// const getHero = (card: ParsedCard): Hero | null => {
//   const { types, name } = card;

//   let heroOnCard: Hero | null = null;

//   if (types.includes("Hero")) {
//     for (const [hero, value] of Object.entries(Hero)) {
//       if (name.includes(value as string)) {
//         heroOnCard = Hero[hero];
//       }
//     }
//   }

//   if (name === "Bravo, Star of the Show") {
//     heroOnCard = Hero.Starvo;
//   } else if (name === "Arakni, 5L!p3d 7hRu 7h3 cR4X") {
//     heroOnCard = Hero.Slippy;
//   } else if (["Arakni, Marionette", "Arakni, Web of Deceit"].includes(name)) {
//     heroOnCard = Hero.Crackni;
//   }

//   return heroOnCard;
// };

interface TCGplayer {
  productId: string;
  url: string;
}
const getTCGplayerInfo = (
  card: ParsedCard,
  {
    foilingString,
    identifier,
    treatmentStrings,
    tcgplayerProductId,
    tcgplayerUrl,
  }: PrintingInput
): TCGplayer | undefined => {
  let tcgplayer: TCGplayer | undefined;

  if (tcgplayerProductId && tcgplayerUrl) {
    tcgplayer = { productId: tcgplayerProductId, url: tcgplayerUrl };
  } else {
    const matchingCard = tcgplayerProductInfo.find(({ name, pitch }) => {
      const sameName = card.name === name;
      const samePitch = (!card.pitch && !pitch) || card.pitch === pitch;

      return sameName && samePitch;
    });

    if (matchingCard) {
      const matchingPrinting = matchingCard.printings.find(
        ({
          foiling,
          id,
          art_variations,
          tcgplayer_product_id,
          tcgplayer_url,
        }) => {
          const foilingOverride = foiling === "S" ? undefined : foiling;
          const sameFoiling =
            (!foilingString && !foilingOverride) ||
            foilingString === foilingOverride;

          const sameSetIdentifier = identifier === id;
          const sameTreatment =
            ((!treatmentStrings || treatmentStrings.length === 0) &&
              !art_variations.length) ||
            (treatmentStrings &&
              treatmentStrings.length > 0 &&
              treatmentStrings[0] === art_variations[0]);

          const tcgplayerInfoFormattedCorrectly =
            !!tcgplayer_product_id &&
            !!tcgplayer_url &&
            !tcgplayer_product_id.includes(".png") &&
            !tcgplayer_url.includes(".png");

          return (
            sameFoiling &&
            sameSetIdentifier &&
            sameTreatment &&
            tcgplayerInfoFormattedCorrectly
          );
        }
      );

      if (
        matchingPrinting &&
        matchingPrinting.tcgplayer_product_id &&
        matchingPrinting.tcgplayer_url
      ) {
        tcgplayer = {
          productId: matchingPrinting.tcgplayer_product_id,
          url: matchingPrinting.tcgplayer_url,
        };
      }
    }
  }

  return tcgplayer;
};

interface PrintingInput {
  artists: string[];
  foilingString?: string;
  identifier: string;
  imageUrl?: string;
  isExpansionSlot?: boolean;
  rarityString: string;
  setString: string;
  treatmentStrings?: string[];
  tcgplayerProductId?: string;
  tcgplayerUrl?: string;
}
const getPrinting = (card: ParsedCard, input: PrintingInput): Printing => {
  const {
    artists,
    isExpansionSlot,
    foilingString,
    identifier,
    imageUrl,
    rarityString,
    setString,
    treatmentStrings,
  } = input;

  const rarity = getRarityFromRawString(rarityString);

  const set = setIdentifierToSetMappings[setString.toLowerCase()];

  const foiling = foilingString
    ? Foiling[foilingString as keyof typeof Foiling]
    : undefined;

  let treatment: Treatment | undefined = undefined;
  let treatments: Treatment[] = [];
  for (const treat of treatmentStrings || []) {
    const art = Treatment[treat as keyof typeof Treatment];
    if (!treatment) {
      treatment = art;
    }
    treatments.push(art);
  }

  const tcgplayer = getTCGplayerInfo(card, input);

  let image;
  if (imageUrl) {
    let parsedUrl = imageUrl
      .replace(".format-webp", "")
      .replace(".width-450", "")
      .replace("_yajPa8R", "");

    const shouldRemoveRFandCF = treatments.length === 0;
    if (shouldRemoveRFandCF) {
      parsedUrl = parsedUrl.replace("-RF", "").replace("-CF", "");
    }
    image = parsedUrl.substring(
      parsedUrl.lastIndexOf("/") + 1,
      parsedUrl.lastIndexOf(".")
    );
  } else {
    // image = identifier;
  }

  const print = getPrint({ identifier, image, foiling, set, treatment });

  return {
    artists,
    ...(isExpansionSlot ? { isExpansionSlot } : {}),
    ...(foiling ? { foiling } : {}),
    identifier,
    image,
    print,
    rarity,
    set,
    ...(treatment ? { treatment } : {}),
    ...(treatments?.length ? { treatments } : {}),
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
  { identifier: "SEN031", setString: "SEN", properties: [{}] },
  { identifier: "SEN032", setString: "SEN", properties: [{}] },
  { identifier: "SEN033", setString: "SEN", properties: [{}] },
  { identifier: "SEN034", setString: "SEN", properties: [{}] },
  { identifier: "SEN035", setString: "SEN", properties: [{}] },
];

const getPrintings = (card: ParsedCard): Printing[] => {
  const printings: Printing[] = [];

  const {
    identifiers,
    setIdentifiers,
    artists,
    expansionSlot,
    foiling,
    identifier,
    imageUrl,
    rarity,
    treatments,
    tcgplayerProductId,
    tcgplayerUrl,
    artists2,
    expansionSlot2,
    foiling2,
    identifier2,
    imageUrl2,
    rarity2,
    treatments2,
    tcgplayerProductId2,
    tcgplayerUrl2,
    artists3,
    expansionSlot3,
    foiling3,
    identifier3,
    imageUrl3,
    rarity3,
    treatments3,
    tcgplayerProductId3,
    tcgplayerUrl3,
    artists4,
    expansionSlot4,
    foiling4,
    identifier4,
    imageUrl4,
    rarity4,
    treatments4,
    tcgplayerProductId4,
    tcgplayerUrl4,
    artists5,
    expansionSlot5,
    foiling5,
    identifier5,
    imageUrl5,
    rarity5,
    treatments5,
    tcgplayerProductId5,
    tcgplayerUrl5,
    artists6,
    expansionSlot6,
    foiling6,
    identifier6,
    imageUrl6,
    rarity6,
    treatments6,
    tcgplayerProductId6,
    tcgplayerUrl6,
  } = card;

  const printing1 = getPrinting(card, {
    artists,
    isExpansionSlot: expansionSlot,
    foilingString: foiling,
    rarityString: rarity,
    setString: setIdentifiers[0],
    imageUrl,
    identifier: identifier || identifiers[0],
    treatmentStrings: treatments,
    ...(tcgplayerProductId && tcgplayerUrl
      ? {
          tcgplayerProductId,
          tcgplayerUrl,
        }
      : {}),
  });
  printings.push(printing1);

  if (!rarity2 && !artists2) {
    const { rarity } = getParsedRarities(card);
    const { types } = getTypeSubtypeAndMetatype(card);
    const setIdentifier = (identifier || identifiers[0]).slice(0, 3);
    const cardIdentifier = getCardIdentifier(card);

    const isMST = setIdentifier === "MST";
    const isCommonRareOrMajestic = [
      Rarity.Common,
      Rarity.Rare,
      Rarity.Majestic,
    ].includes(rarity);
    const isEquipment = types.includes(Type.Equipment);
    const isNotReprint = !releasedCards.find(
      (released) => released.cardIdentifier === cardIdentifier
    );

    const shouldAddRainbowPrinting =
      isMST && isCommonRareOrMajestic && !isEquipment && isNotReprint;
    if (shouldAddRainbowPrinting) {
      const rainbowPrinting = getPrinting(card, {
        artists,
        foilingString: "R",
        identifier: identifier || identifiers[0],
        isExpansionSlot: expansionSlot,
        rarityString: rarity,
        setString: setIdentifiers[0],
        imageUrl,
      });
      printings.push(rainbowPrinting);
    }

    const shouldAddColdPrinting =
      isMST && isCommonRareOrMajestic && isEquipment && isNotReprint;
    if (shouldAddColdPrinting) {
      const coldPrinting = getPrinting(card, {
        artists,
        foilingString: "C",
        identifier: identifier || identifiers[0],
        rarityString: rarity,
        setString: setIdentifiers[0],
        imageUrl,
      });
      printings.push(coldPrinting);
    }
  }

  if (rarity2 && artists2) {
    const identifierFor2 = identifier2
      ? identifier2
      : identifiers.length > 1
      ? identifiers[1]
      : identifiers[0];
    const setIdentifier = identifierFor2.slice(0, 3);
    const printing2 = getPrinting(card, {
      artists: artists2,
      foilingString: foiling2,
      identifier: identifierFor2,
      imageUrl: imageUrl2,
      isExpansionSlot: expansionSlot2,
      rarityString: rarity2,
      setString: setIdentifier,
      treatmentStrings: treatments2,
      ...(tcgplayerProductId2 && tcgplayerUrl2
        ? {
            tcgplayerProductId: tcgplayerProductId2,
            tcgplayerUrl: tcgplayerUrl2,
          }
        : {}),
    });
    printings.push(printing2);
  }

  if (rarity3 && artists3) {
    const identifierFor3 = identifier3
      ? identifier3
      : identifiers.length > 2
      ? identifiers[2]
      : identifiers[0];
    const setIdentifier = identifierFor3.slice(0, 3);
    const printing3 = getPrinting(card, {
      artists: artists3,
      foilingString: foiling3,
      identifier: identifierFor3,
      imageUrl: imageUrl3,
      isExpansionSlot: expansionSlot3,
      rarityString: rarity3,
      setString: setIdentifier,
      treatmentStrings: treatments3,
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

  if (rarity4 && artists4) {
    const identifierFor4 = identifier4
      ? identifier4
      : identifiers.length > 3
      ? identifiers[3]
      : identifiers[0];
    const setIdentifier = identifierFor4.slice(0, 3);
    const printing4 = getPrinting(card, {
      artists: artists4,
      foilingString: foiling4,
      identifier: identifierFor4,
      imageUrl: imageUrl4,
      rarityString: rarity4,
      setString: setIdentifier,
      treatmentStrings: treatments4,
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

  if (rarity5 && artists5) {
    const identifierFor5 = identifier5
      ? identifier5
      : identifiers.length > 4
      ? identifiers[4]
      : identifiers[0];
    const setIdentifier = identifierFor5.slice(0, 3);
    const printing5 = getPrinting(card, {
      artists: artists5,
      foilingString: foiling5,
      identifier: identifierFor5,
      imageUrl: imageUrl5,
      isExpansionSlot: expansionSlot5,
      rarityString: rarity5,
      setString: setIdentifier,
      treatmentStrings: treatments5,
      ...(tcgplayerProductId5 && tcgplayerUrl5
        ? {
            tcgplayer: {
              productId: tcgplayerProductId5,
              url: tcgplayerUrl5,
            },
          }
        : {}),
    });
    printings.push(printing5);
  }

  if (rarity6 && artists6) {
    const identifierFor6 = identifier6
      ? identifier6
      : identifiers.length > 5
      ? identifiers[5]
      : identifiers[0];
    const setIdentifier = identifierFor6.slice(0, 3);
    const printing6 = getPrinting(card, {
      artists: artists6,
      foilingString: foiling6,
      identifier: identifierFor6,
      imageUrl: imageUrl6,
      isExpansionSlot: expansionSlot6,
      rarityString: rarity6,
      setString: setIdentifier,
      treatmentStrings: treatments6,
      ...(tcgplayerProductId6 && tcgplayerUrl6
        ? {
            tcgplayer: {
              productId: tcgplayerProductId6,
              url: tcgplayerUrl6,
            },
          }
        : {}),
    });
    printings.push(printing6);
  }

  printings.sort(sortPrintingsByReleaseOrder);

  const printingsOverride: Printing[] = [];
  if (card.name === "Inner Chi") {
    for (const { identifier, setString, properties } of innerChiPrintings) {
      const basePrinting = {
        artists: ["Carlos Cruchaga"],
        identifier,
        rarityString: rarity,
        setString,
      };

      for (const {
        foilingString,
        imageSuffix,
        treatmentString,
      } of properties) {
        const printing: Printing = getPrinting(card, {
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

const ALL_KEYWORDS = Object.entries(Keyword);
const getKeywords = (card: ParsedCard): Keyword[] => {
  const { abilityAndEffectKeywords, cardKeywords, grantedKeywords, name } =
    card;
  const keywords: Keyword[] = [];

  [...cardKeywords, ...grantedKeywords, ...abilityAndEffectKeywords].forEach(
    (keyword) => {
      const exactMatch = ALL_KEYWORDS.find(([_, value]) => value === keyword);

      if (!!exactMatch) {
        const keywordEnum = Keyword[exactMatch[0] as keyof typeof Keyword];
        if (!!keywordEnum && !keywords.includes(keywordEnum)) {
          keywords.push(keywordEnum);
        }
      } else {
        for (const [key, value] of ALL_KEYWORDS) {
          const isAPartialMatch = keyword.includes(value as string);
          if (isAPartialMatch) {
            const keyword = Keyword[key as keyof typeof Keyword];
            if (!keywords.includes(keyword)) {
              keywords.push(keyword);
            }
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

  bannedFormats.sort();
  return bannedFormats;
};

const getSets = (
  { setIdentifiers }: ParsedCard,
  printings: Printing[]
): Release[] => {
  const sets = new Set<Release>();
  for (const setIdentifier of setIdentifiers) {
    const set = setIdentifierToSetMappings[setIdentifier.toLowerCase()];
    if (set) {
      sets.add(set);
    }
  }

  for (const printing of printings) {
    if (printing.set) {
      sets.add(printing.set);
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
      talents.add(Talent[talent as keyof typeof Talent]);
    }
    if (types.includes(Type.Hero)) {
      for (const cardKeyword of cardKeywords) {
        for (const keyword of cardKeyword.split(" ")) {
          if (keyword === value) {
            talents.add(Talent[talent as keyof typeof Talent]);
          }
        }
      }
    }
  }
  const arr = Array.from(talents);
  arr.sort();

  return arr;
};

const getYoung = (card: ParsedCard): boolean | null => {
  const { types } = card;
  return types.includes("Hero") && types.includes("Young") ? true : null;
};

const getCardData = (card: ParsedCard): Card => {
  const { metatypes, types, subtypes } = getTypeSubtypeAndMetatype(card);
  const printings = getPrintings(card);

  const setIdentifiers = [...card.identifiers];
  setIdentifiers.sort();

  const { rarities, rarity } = getParsedRarities(card);

  const bannedFormats = getBannedFormats(card);
  const cardIdentifier = getCardIdentifier(card);
  const classes = getClasses(card);
  const hero = getHeroFromCard(card) as Hero;
  const keywords = getKeywords(card);
  const name = card.name.trim();
  const pitch = getNumberOrUndefined(card.pitch);
  const sets = getSets(card, printings);
  const restrictedFormats = getRestrictedFormats({ ...card, cardIdentifier });
  const specializations = getSpecializations(card);
  const talents = getTalents(card);
  const traits = getTraits({ ...card, setIdentifiers });

  return {
    artists: getArtists(card),
    cardIdentifier,
    classes,
    defaultImage: getDefaultPrinting(
      { name: card.name, cardIdentifier },
      printings
    )?.image,
    legalFormats: getLegalFormats(
      bannedFormats,
      card,
      classes,
      keywords,
      rarities,
      sets,
      subtypes,
      types
    ),
    legalHeroes: [],
    // legalHeroes: getLegalHeroes({
    //   cardIdentifier,
    //   classes,
    //   hero,
    //   keywords,
    //   metatypes,
    //   name,
    //   pitch,
    //   specializations,
    //   subtypes,
    //   talents,
    //   traits,
    //   types,
    // }),
    name,
    printings,
    rarities,
    rarity,
    setIdentifiers,
    sets,
    specialImage: getSpecialPrinting(
      { name: card.name, cardIdentifier },
      printings
    )?.image,
    subtypes,
    types,
    typeText: card.typeText,

    arcane: getNumberOrUndefined(card.arcane) as number,
    bannedFormats,
    bonds: getBonds(card),
    cost: getNumberOrUndefined(card.cost),
    defense: getNumberOrUndefined(card.defense) as number,
    flows: getFlows(card),
    functionalText: card.functionalText,
    fusions: getFusions(card),
    hero,
    intellect: getNumberOrUndefined(card.intellect),
    keywords,
    life: getNumberOrUndefined(card.life),
    metatypes,
    pitch,
    power: getNumberOrUndefined(card.power) as number,
    restrictedFormats,
    specialArcane: getStringIfNotNumber(card.arcane) as string,
    specialCost: getStringIfNotNumber(card.cost) as string,
    specialDefense: getStringIfNotNumber(card.defense) as string,
    specialLife: getStringIfNotNumber(card.life) as string,
    specialPower: getStringIfNotNumber(card.power) as string,
    specializations,
    talents,
    traits,
    young: getYoung(card) as boolean,
  };
};

export const mapCSV = (parsedCards: ParsedCard[]): Card[] => {
  const cards = parsedCards.map((parsedCard) => {
    return getCardData(parsedCard);
  });

  const CARDS_TO_SKIP = ["inner-chi-blue"];

  const isBackOverrides = [
    "Blasmophet, Levia Consumed",
    "Inner Chi",
    "Nitro Mechanoid",
  ];
  return addOppositeSideCardIdentifiers(cards)
    .map((card) => {
      if (isBackOverrides.includes(card.name)) {
        card.isCardBack = true;
      }

      return card;
    })
    .filter(({ cardIdentifier }) => !CARDS_TO_SKIP.includes(cardIdentifier));
};
