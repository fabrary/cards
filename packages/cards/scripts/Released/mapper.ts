import {
  Card,
  Class,
  Foiling,
  Format,
  Hero,
  Keyword,
  Metatype,
  Printing,
  Rarity,
  Release,
  ReleaseEdition,
  Subtype,
  Talent,
  Treatment,
  Type,
  getCardIdentifier,
} from "@flesh-and-blood/types";
import {
  addOppositeSideCardIdentifiers,
  getBonds,
  getFlows,
  getFusions,
  getHeroFromCard,
  getMeta,
  getNumberOrUndefined,
  getRarities,
  getRarityFromRawString,
  getRestrictedFormats,
  getSpecializations,
  getStringIfNotNumber,
  getTraits,
  getTypeSubtypeAndMetatype,
  IGNORE_OPPOSITE_SIDES,
  sortPrintingsByReleaseOrder,
} from "../Shared";
import { ARTIST_OVERRIDES } from "../Shared/artist-overrides";
import { ParsedCard } from "./parser";
import {
  getDefaultPrinting,
  getPrint,
  getSpecialPrinting,
} from "@flesh-and-blood/types";
import { getLegalFormats } from "../Shared/legality";

const getClasses = (card: ParsedCard): Class[] => {
  const classes: Class[] = [];
  const { types } = card;
  for (const [klass, value] of Object.entries(Class)) {
    if (types.includes(value as string)) {
      classes.push(Class[klass as keyof typeof Class]);
    }
  }
  if (classes.length === 0 && getTalents(card)?.length) {
    classes.push(Class.NotClassed);
  }
  if (classes.length === 0 && card.types.includes("Macro")) {
    classes.push(Class.NotClassed);
  }
  if (classes.length === 0) {
    classes.push(Class.Generic);
  }
  classes.sort();
  return classes;
};

// const getHero = (card: ParsedCard): Hero | null => {
//   let heroOnCard: Hero | null = null;

//   const { types, name } = card;
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

const excludedPrintings: string[] = [];

const setsToUseIdentifierAsBackup = [
  Release.ArmoryDeckBoltyn,
  Release.ArmoryDeckAzalea,
  Release.Promos,
];
enum SetEdition {
  A = "A",
  F = "F",
  U = "U",
}
const setEditionMapping = {
  [SetEdition.A]: ReleaseEdition.Alpha,
  [SetEdition.F]: ReleaseEdition.First,
  [SetEdition.U]: ReleaseEdition.Unlimited,
};
const getPrintings = (card: ParsedCard): Printing[] => {
  const images: Printing[] = [];
  const { printings } = card;
  for (const {
    artists,
    artVariations,
    imageUrl,
    edition: rawEdition,
    // foilings,
    foiling: rawFoiling,
    isExpansionSlot,
    setIdentifier: identifier,
    rarity: rawRarity,
    set,
    tcgplayer,
  } of printings) {
    // const set = setIdentifierToSetMappings[rawSet.toLowerCase()];
    const edition = setEditionMapping[rawEdition as keyof typeof SetEdition];

    const rarity = getRarityFromRawString(rawRarity);

    let treatment: Treatment | undefined = undefined;
    let treatments: Treatment[] = [];
    for (const artVariation of artVariations) {
      const art = Treatment[artVariation as keyof typeof Treatment];
      if (!treatment) {
        treatment = art;
      }
      treatments.push(art);
    }
    treatments.sort();

    let imageUrlClean = imageUrl
      ? imageUrl
          .replace(".width-450", "")
          .replace("-MV.webp", "_V2.webp")
          .replace("-MV_BACK.webp", "_V2_BACK.webp")
          .replace("MVA_BACK.webp", "MV_V2_BACK.webp")
          .replace("MVA.webp", "MV_V2.webp")
          .replace("-A.webp", "_V2.webp")
          .replace("-B.webp", "_V3.webp")
          .replace("-C.webp", "_V4.webp")
          .replace("-RF.webp", ".webp")
          .replace("-CF.webp", ".webp")
          .replace("-CF_BACK.webp", "_BACK.webp")
          .replace(".original.webp", ".webp")
          .replace(".original.png", ".png")
      : undefined;
    let image = !!imageUrlClean
      ? imageUrlClean
          .substring(
            imageUrlClean.lastIndexOf("/") + 1,
            imageUrlClean.lastIndexOf(".")
          )
          .replace(".format-webp", "")
      : undefined;

    if (!image && setsToUseIdentifierAsBackup.includes(set)) {
      image = identifier;
    }

    const foiling = Foiling[rawFoiling as keyof typeof Foiling];
    const print = getPrint({
      identifier,
      image,
      edition,
      foiling,
      set,
      treatment,
      treatments,
    });

    const correctedArtists = artists.map(
      (artist) => ARTIST_OVERRIDES[artist] || artist
    );

    const isPrintExcluded = excludedPrintings.includes(print);

    if (!isPrintExcluded) {
      images.push({
        artists: correctedArtists,
        ...(edition ? { edition } : {}),
        ...(foiling ? { foiling } : {}),
        identifier,
        image,
        isExpansionSlot,
        rarity,
        print,
        set,
        ...(tcgplayer ? { tcgplayer } : {}),
        ...(treatment ? { treatment } : {}),
        ...(treatments?.length ? { treatments } : {}),
      });
    }
  }
  images.sort(sortPrintingsByReleaseOrder);

  return images;
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
    livingLegendBanned,
  } = card;

  const bannedFormats: Format[] = [];

  if (livingLegendBanned) {
    bannedFormats.push(
      ...[Format.ClassicConstructedLivingLegend, Format.LivingLegend]
    );
  }
  if (blitzLivingLegend || blitzBanned || blitzSuspended) {
    bannedFormats.push(Format.Blitz);
  }
  if (
    classicConstructedLivingLegend ||
    classicConstructedBanned ||
    classicConstructedSuspended
  ) {
    bannedFormats.push(Format.ClassicConstructed);
  }
  if (commonerBanned || commonerSuspended) {
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
  const { metatypes, subtypes, types } = getTypeSubtypeAndMetatype(card);
  const printings = getPrintings(card);

  const artists = card.artists
    .sort()
    .flatMap((artist) => {
      const correctedArtist = ARTIST_OVERRIDES[artist] || artist;

      return correctedArtist.trim().split(" // ");
    })
    .sort();

  const setIdentifiers = [...card.setIdentifiers];
  setIdentifiers.sort();

  const { rarity, rarities } = getRarities(card);

  const cardIdentifier = getCardIdentifier(card);

  const defaultPrinting = getDefaultPrinting(
    { name: card.name, cardIdentifier },
    printings
  );
  const specialPrinting = getSpecialPrinting(
    { name: card.name, cardIdentifier },
    printings
  );

  // if (!defaultPrinting) {
  //   console.error(`No default printing`, card);
  // }
  // if (!specialPrinting) {
  //   console.error(`No special printing`, card);
  // }

  const bannedFormats = getBannedFormats(card);
  const classes = getClasses(card);
  const hero = getHeroFromCard(card) as Hero;
  const keywords = getKeywords(card);
  const name = card.name.trim();
  const pitch = getNumberOrUndefined(card.pitch);
  const restrictedFormats = getRestrictedFormats({ ...card, cardIdentifier });
  const sets = getSets(printings);
  const specializations = getSpecializations(card);
  const talents = getTalents(card);
  const traits = getTraits(card);

  return {
    artists,
    cardIdentifier,
    classes,
    defaultImage: defaultPrinting?.image,
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
    specialImage: specialPrinting?.image,
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

export const mapJSON = (parsedCards: ParsedCard[]): Card[] => {
  const cards = parsedCards.map((parsedCard) => {
    return getCardData(parsedCard);
  });

  const isBackOverrides = ["Blasmophet, Levia Consumed"];
  return addOppositeSideCardIdentifiers(cards).map((card) => {
    if (isBackOverrides.includes(card.name)) {
      card.isCardBack = true;
    } else if (IGNORE_OPPOSITE_SIDES.includes(card.name)) {
      delete card.isCardBack;
      delete card.oppositeSideCardIdentifier;
      delete card.oppositeSideCardIdentifiers;
    }
    return card;
  });
};
