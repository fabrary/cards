import { PreliminaryCard } from "../Shared/preliminary-card";
import { releasedCards } from "../Released";
import {
  addOppositeSideCardIdentifiers,
  FOILING_KEY_TO_ENUM_MAPPING,
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
import {
  Class,
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

import { getBannedAndLegalFormats } from "../Shared/legality";
import {
  getTCGPlayerInfoForRawSpoilerPrinting,
  getTCGPlayerInfoFromOverrides,
} from "../Shared/tcgplayer";

// Each spoiler sheet row carries one column block per printing, its fields suffixed
// with the printing's position. Reading the blocks by position keeps them all on one
// code path, so a block can't quietly lose a field the others read.
const ADDITIONAL_PRINTING_POSITIONS = [2, 3, 4, 5, 6];

interface PrintingColumns {
  artists?: string[];
  expansionSlot?: boolean;
  foiling?: string;
  identifier?: string;
  imageUrl?: string;
  rarity?: string;
  treatments?: string[];
  tcgplayerProductId?: string;
  tcgplayerUrl?: string;
}
const getPrintingColumns = (
  card: ParsedCard,
  position: number,
): PrintingColumns => {
  const getColumn = <T>(field: string) =>
    card[`${field}${position}` as keyof ParsedCard] as T | undefined;

  return {
    artists: getColumn<string[]>("artists"),
    expansionSlot: getColumn<boolean>("expansionSlot"),
    foiling: getColumn<string>("foiling"),
    identifier: getColumn<string>("identifier"),
    imageUrl: getColumn<string>("imageUrl"),
    rarity: getColumn<string>("rarity"),
    treatments: getColumn<string[]>("treatments"),
    tcgplayerProductId: getColumn<string>("tcgplayerProductId"),
    tcgplayerUrl: getColumn<string>("tcgplayerUrl"),
  };
};

const getArtists = (card: ParsedCard): string[] => {
  const allArtists = [...card.artists];
  for (const position of ADDITIONAL_PRINTING_POSITIONS) {
    const { artists } = getPrintingColumns(card, position);
    allArtists.push(...(artists || []));
  }

  const namedArtists = allArtists.filter((artist) => !!artist).sort();
  return Array.from(new Set(namedArtists)).map((artist) => artist.trim());
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

// const TCGP_SOURCE_FILE_FOILING_MAPPING: { [key: string]: string } = {
//   R: Foiling.Rainbow,
//   C: Foiling.Cold,
//   G: Foiling.Gold,
// };

interface TCGplayer {
  productId: string;
  url: string;
}
const getTCGplayerInfo = (
  cardIdentifier: string,
  card: ParsedCard,
  {
    foilingString,
    identifier,
    treatmentStrings,
    tcgplayerProductId,
    tcgplayerUrl,
  }: PrintingInput,
  print: string,
): TCGplayer | undefined => {
  let tcgplayer: TCGplayer | undefined;

  if (tcgplayerProductId && tcgplayerUrl) {
    tcgplayer = { productId: tcgplayerProductId, url: tcgplayerUrl };
  } else {
    const matchingTCGPSourceCard = getTCGPlayerInfoForRawSpoilerPrinting(card);

    if (matchingTCGPSourceCard) {
      const matchingPrinting = matchingTCGPSourceCard.printings.find(
        ({
          foiling,
          id,
          art_variations,
          tcgplayer_product_id,
          tcgplayer_url,
        }) => {
          // const foilingOverride = foiling
          //   ? TCGP_SOURCE_FILE_FOILING_MAPPING[foiling]
          //   : undefined;
          const foilingOverride = foiling === "S" ? undefined : foiling;

          // const foilingOverride = foiling === "S" ? undefined : foiling;
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
        },
      );

      // if (card.name === "Voltic Impact" && foilingString === "R") {
      //   console.log(
      //     JSON.stringify(
      //       {
      //         card,
      //         matchingPrinting,
      //       },
      //       null,
      //       2,
      //     ),
      //   );
      //   throw new Error("Stop");
      // }

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

  if (!tcgplayer) {
    const overrideData = getTCGPlayerInfoFromOverrides(cardIdentifier, print);
    if (overrideData) {
      tcgplayer = overrideData;
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
const getPrinting = (
  cardIdentifier: string,
  card: ParsedCard,
  input: PrintingInput,
): Printing => {
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

  const foiling = FOILING_KEY_TO_ENUM_MAPPING[foilingString || ""];

  let treatment: Treatment | undefined = undefined;
  const treatments: Treatment[] = [];
  for (const treat of treatmentStrings || []) {
    const art = Treatment[treat as keyof typeof Treatment];
    if (!treatment) {
      treatment = art;
    }
    treatments.push(art);
  }
  treatments.sort();

  let image;
  if (imageUrl) {
    const parsedUrl = imageUrl
      .replace(".format-webp", "")
      .replace(".width-450", "")
      .replace("_yajPa8R", "");

    // const shouldRemoveRFandCF = treatments.length === 0;
    // if (shouldRemoveRFandCF) {
    //   parsedUrl = parsedUrl.replace("-RF", "").replace("-CF", "");
    // }
    image = parsedUrl.substring(
      parsedUrl.lastIndexOf("/") + 1,
      parsedUrl.lastIndexOf("."),
    );
  } else {
    // image = identifier;
  }

  const print = getPrint({ identifier, image, foiling, set, treatments });
  const tcgplayer = getTCGplayerInfo(cardIdentifier, card, input, print);

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

const getPrintings = (cardIdentifier: string, card: ParsedCard): Printing[] => {
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
    rarity2,
  } = card;

  const printing1 = getPrinting(cardIdentifier, card, {
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
    const isCommonRareOrMajestic =
      !!rarity &&
      [Rarity.Common, Rarity.Rare, Rarity.Majestic].includes(rarity);
    const isEquipment = types.includes(Type.Equipment);
    const isNotReprint = !releasedCards.find(
      (released) => released.cardIdentifier === cardIdentifier,
    );

    const shouldAddRainbowPrinting =
      isMST && isCommonRareOrMajestic && !isEquipment && isNotReprint;
    if (shouldAddRainbowPrinting) {
      const rainbowPrinting = getPrinting(cardIdentifier, card, {
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
      const coldPrinting = getPrinting(cardIdentifier, card, {
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

  for (const position of ADDITIONAL_PRINTING_POSITIONS) {
    const printingColumns = getPrintingColumns(card, position);
    const describesAPrinting =
      !!printingColumns.rarity && !!printingColumns.artists;

    if (describesAPrinting) {
      const {
        artists: printingArtists = [],
        expansionSlot: isExpansionSlot,
        foiling: foilingString,
        identifier: columnIdentifier,
        imageUrl: printingImageUrl,
        rarity: rarityString = "",
        treatments: treatmentStrings,
        tcgplayerProductId: columnTCGplayerProductId,
        tcgplayerUrl: columnTCGplayerUrl,
      } = printingColumns;

      // A sheet that gives the printing no identifier of its own falls back to the
      // row's own identifier for that position, and to the first one when the row
      // lists fewer identifiers than printings.
      const printingIdentifier = columnIdentifier
        ? columnIdentifier
        : identifiers.length > position - 1
          ? identifiers[position - 1]
          : identifiers[0];

      printings.push(
        getPrinting(cardIdentifier, card, {
          artists: printingArtists,
          foilingString,
          identifier: printingIdentifier,
          imageUrl: printingImageUrl,
          isExpansionSlot,
          rarityString,
          setString: printingIdentifier.slice(0, 3),
          treatmentStrings,
          ...(columnTCGplayerProductId && columnTCGplayerUrl
            ? {
                tcgplayerProductId: columnTCGplayerProductId,
                tcgplayerUrl: columnTCGplayerUrl,
              }
            : {}),
        }),
      );
    }
  }

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
        const printing: Printing = getPrinting(cardIdentifier, card, {
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

  const cardPrintings = printingsOverride.length
    ? printingsOverride
    : printings;
  cardPrintings.sort(sortPrintingsByReleaseOrder);

  return cardPrintings;
};

const ALL_KEYWORDS = Object.entries(Keyword);
const getKeywords = (card: ParsedCard): Keyword[] => {
  const { abilityAndEffectKeywords, cardKeywords, grantedKeywords } = card;
  const keywords: Keyword[] = [];

  [...cardKeywords, ...grantedKeywords, ...abilityAndEffectKeywords].forEach(
    (keyword) => {
      const exactMatch = ALL_KEYWORDS.find(([_, value]) => value === keyword);

      if (exactMatch) {
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
    },
  );

  keywords.sort();
  return keywords;
};

export const getParsedRarities = (
  card: ParsedCard,
): { rarities: Rarity[]; rarity: Rarity | undefined } => {
  const { rarity, rarity2, rarity3, rarity4 } = card;

  const rarities = [rarity, rarity2, rarity3, rarity4]
    .filter((rarity) => !!rarity)
    .sort() as string[];
  return getRarities({ rarities });
};

const getSets = (
  { setIdentifiers }: ParsedCard,
  printings: Printing[],
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

const getCardData = (card: ParsedCard): PreliminaryCard => {
  const cardIdentifier = getCardIdentifier(card);

  const { metatypes, types, subtypes } = getTypeSubtypeAndMetatype(card);
  const printings = getPrintings(cardIdentifier, card);

  const setIdentifiers = [...card.identifiers];
  setIdentifiers.sort();

  const { rarities, rarity } = getParsedRarities(card);

  // const bannedFormats = getBannedFormats(card);
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

  const isCardAlreadyReleased = releasedCards.some(
    (releasedCard) => releasedCard.cardIdentifier === cardIdentifier,
  );

  let bannedFormats: Format[] = [];
  let legalFormats: Format[] = [];

  if (!isCardAlreadyReleased) {
    ({ bannedFormats, legalFormats } = getBannedAndLegalFormats(
      {
        ...card,
        // classicConstructedBanned:
        //   card.classicConstructedLegal === false ? true : false,
        // livingLegendBanned: card.livingLegendLegal === false ? true : false,
        // silverAgeBanned: card.silverAgeLegal === false ? true : false,
      },
      classes,
      keywords,
      rarities,
      setIdentifiers,
      sets,
      subtypes,
      types,
    ));
  }

  // if (card.name === "Wrecker Romp") {
  //   console.log(`*
  //     *
  //     *
  //     * *
  //     * *`);
  //   console.log(
  //     JSON.stringify(
  //       {
  //         bannedFormats,
  //         legalFormats,
  //         card,
  //         classes,
  //         keywords,
  //         rarities,
  //         setIdentifiers,
  //         sets,
  //         subtypes,
  //         types,
  //       },
  //       null,
  //       2,
  //     ),
  //   );
  //   throw new Error("Stop");
  // }

  return {
    artists: getArtists(card),
    cardIdentifier,
    classes,
    defaultImage: getDefaultPrinting(
      { name: card.name, cardIdentifier },
      printings,
    )?.image,
    legalFormats,
    name,
    printings,
    rarities,
    rarity,
    setIdentifiers,
    sets,
    specialImage: getSpecialPrinting(
      { name: card.name, cardIdentifier },
      printings,
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

export const mapCSV = (parsedCards: ParsedCard[]): PreliminaryCard[] => {
  const cards = parsedCards.map((parsedCard) => {
    return getCardData(parsedCard);
  });

  const CARDS_TO_SKIP = ["inner-chi-blue"];

  const isBackOverrides = [
    "Blasmophet, Levia Consumed",
    "Inner Chi",
    "Nitro Mechanoid",
    "Viserai, Usurper",
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
