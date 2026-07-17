import { PreliminaryCard } from "./preliminary-card";
import {
  Bond,
  Flow,
  Foiling,
  Format,
  Fusion,
  Hero,
  Keyword,
  Meta,
  Metatype,
  Printing,
  Rarity,
  Release,
  ReleaseEdition,
  Subtype,
  Trait,
  Type,
  getIsArenaCard,
  getIsDeckCard,
  releases,
  setIdentifierToSetMappings,
} from "@flesh-and-blood/types";

export const FOILING_KEY_TO_ENUM_MAPPING: { [key: string]: Foiling } = {
  C: Foiling.Cold,
  G: Foiling.Gold,
  R: Foiling.Rainbow,
};

export const getNumberOrUndefined = (value?: string): number | undefined => {
  if (value) {
    const parsed = parseInt(value);
    return !isNaN(parsed) ? parsed : undefined;
  }
};

export const getStringIfNotNumber = (value?: string): string | undefined => {
  if (value) {
    const parsed = parseInt(value);
    return isNaN(parsed) ? value : undefined;
  }
};

export const IGNORE_OPPOSITE_SIDES = [
  "Blossom of Spring",
  "Crown of Providence",
  "Fyendal's Spring Tunic",
  "Hope Merchant's Hood",
  "Scabskin Leathers",
  "Snapdragon Scalers",
];

const TRANSCEND_CARD_NAMES = [
  "A Drop in the Ocean",
  "Homage to Ancestors",
  "Pass Over",
  "Preserve Tradition",
  "Rising Sun, Setting Moon",
];

const CARD_FRONTS_OVERRIDES = [...TRANSCEND_CARD_NAMES];

export const CARD_BACKS_OVERRIDES = ["Inner Chi"];

export const addOppositeSideCardIdentifiers = (cards: PreliminaryCard[]) => {
  // Index cards by printing identifier so opposite-side candidates can be
  // looked up directly. Previously this scanned every card against every other
  // card (O(n^2 * printings^2)); now each card only inspects the handful of
  // cards that actually share a printing identifier with it.
  const cardOrder = new Map<PreliminaryCard, number>();
  const cardsByPrintingIdentifier = new Map<string, Set<PreliminaryCard>>();
  cards.forEach((card, index) => {
    cardOrder.set(card, index);
    for (const { identifier } of card.printings) {
      let matches = cardsByPrintingIdentifier.get(identifier);
      if (!matches) {
        matches = new Set();
        cardsByPrintingIdentifier.set(identifier, matches);
      }
      matches.add(card);
    }
  });

  return cards.map((card) => {
    // LSS used the same RNR prefix for two different sets - Rhinar Blitz deck and Rhinar CC deck
    const cardIsRNRCard = card.printings.some(
      ({ set }) => set === Release.RhinarBlitzDeck,
    );

    const candidates = new Set<PreliminaryCard>();
    for (const { identifier } of card.printings) {
      const matches = cardsByPrintingIdentifier.get(identifier);
      if (matches) {
        for (const match of matches) {
          candidates.add(match);
        }
      }
    }

    const oppositeSideCards = Array.from(candidates)
      .filter((otherCard) => {
        const notTheSameCard = card.name !== otherCard.name;

        const notARNRCard =
          !otherCard.printings.some(
            ({ set }) => set === Release.RhinarBlitzDeck,
          ) && !cardIsRNRCard;

        // LSS used the same HER prefix for two different sets - Kassai deck and Tuffnut
        const notDuplicateHER =
          card.name !== "Tuffnut, Bumbling Hulkster" &&
          otherCard.name !== "Tuffnut, Bumbling Hulkster";

        return notDuplicateHER && notARNRCard && notTheSameCard;
      })
      // Restore the original `cards`-array order so first-match image
      // resolution and oppositeSideCardIdentifiers stay identical.
      .sort((a, b) => cardOrder.get(a)! - cardOrder.get(b)!);

    const isOppositeSideCardFront = oppositeSideCards.some(
      ({ keywords, name, subtypes }) => {
        const isConstruct = subtypes.includes(Subtype.Construct);
        const isFigment = subtypes.includes(Subtype.Figment);
        const isInvocation = subtypes.includes(Subtype.Invocation);
        const isTranscend =
          keywords?.includes(Keyword.Transcend) ||
          TRANSCEND_CARD_NAMES.includes(name);

        return isConstruct || isFigment || isInvocation || isTranscend;
      },
    );

    const isCardFrontOverride = CARD_FRONTS_OVERRIDES.includes(card.name);
    const isCardBackOverride = CARD_BACKS_OVERRIDES.includes(card.name);
    const isCardBack =
      !isCardFrontOverride && (isCardBackOverride || isOppositeSideCardFront);

    if (oppositeSideCards.length > 0) {
      const printingsWithOppositeSide: Printing[] = card.printings.map(
        (printing) => {
          let oppositeImageFullMatch: string | undefined;
          let oppositeImagePartialMatchBothHaveTreatment: string | undefined;
          let oppositeImagePartialMatch: string | undefined;
          let setIdentifierMatch: string | undefined;

          for (const oppositeSideCard of oppositeSideCards) {
            if (!oppositeImageFullMatch) {
              oppositeImageFullMatch = oppositeSideCard.printings.find(
                ({ edition, identifier, foiling, treatment }) => {
                  const editionsMatch = edition === printing.edition;
                  const identifiersMatch = identifier === printing.identifier;
                  const foilingsMatch = foiling === printing.foiling;
                  const treatmentsMatch = treatment === printing.treatment;

                  return (
                    editionsMatch &&
                    identifiersMatch &&
                    foilingsMatch &&
                    treatmentsMatch
                  );
                },
              )?.image;
            }

            if (!oppositeImagePartialMatchBothHaveTreatment) {
              oppositeImagePartialMatchBothHaveTreatment =
                oppositeSideCard.printings.find(
                  ({ edition, identifier, foiling, treatment }) => {
                    const editionsMatch = edition === printing.edition;
                    const identifiersMatch = identifier === printing.identifier;
                    const foilingsMatch = foiling === printing.foiling;
                    const bothHaveTreatments =
                      !!treatment && !!printing.treatment;

                    return (
                      editionsMatch &&
                      identifiersMatch &&
                      foilingsMatch &&
                      bothHaveTreatments
                    );
                  },
                )?.image;
            }

            if (!oppositeImagePartialMatch) {
              oppositeImagePartialMatch = oppositeSideCard.printings.find(
                ({ edition, identifier, foiling }) => {
                  const editionsMatch = edition === printing.edition;
                  const identifiersMatch = identifier === printing.identifier;
                  const foilingsMatch = foiling === printing.foiling;

                  return editionsMatch && identifiersMatch && foilingsMatch;
                },
              )?.image;
            }

            if (!setIdentifierMatch) {
              setIdentifierMatch = oppositeSideCard.printings.find(
                ({ edition, identifier }) => {
                  const editionsMatch = edition === printing.edition;
                  const identifiersMatch = identifier === printing.identifier;

                  return editionsMatch && identifiersMatch;
                },
              )?.image;
            }
          }

          const oppositeImage =
            oppositeImageFullMatch ||
            oppositeImagePartialMatchBothHaveTreatment ||
            oppositeImagePartialMatch ||
            setIdentifierMatch;

          return { ...printing, oppositeImage };
        },
      );
      card.printings = printingsWithOppositeSide;
    }

    return {
      ...card,
      ...(oppositeSideCards.length
        ? {
            oppositeSideCardIdentifier: oppositeSideCards[0].cardIdentifier,
            oppositeSideCardIdentifiers: oppositeSideCards.map(
              ({ cardIdentifier }) => cardIdentifier,
            ),
          }
        : {}),
      ...(isCardBack ? { isCardBack } : {}),
    };
  });
};

const RELEASES = [...releases];
const getPrintingReleaseOrder = ({ edition, set }: Printing): number => {
  let releaseIndex =
    RELEASES.findIndex(({ release }) => release === set) || 100000;

  if (edition === ReleaseEdition.Alpha) {
    releaseIndex -= 0.2;
  } else if (edition === ReleaseEdition.First) {
    releaseIndex -= 0.1;
  }

  return releaseIndex + 2;
};

export const sortPrintingsByReleaseOrder = (p1: Printing, p2: Printing) => {
  const p1Order = getPrintingReleaseOrder(p1);
  const p2Order = getPrintingReleaseOrder(p2);

  if (p1Order === p2Order) {
    // Same release, so do shorter image name first and then shorter print first, all to try and get default image first
    const p1ImageLength = p1.image ? p1.image.length : 0;
    const p2ImageLength = p2.image ? p2.image.length : 0;

    if (p1ImageLength === p2ImageLength) {
      const p1Print = p1.print;
      const p2Print = p2.print;
      const p1PrintLength = p1Print.length;
      const p2PrintLength = p2Print.length;

      if (p1PrintLength === p2PrintLength) {
        return p1Print.localeCompare(p2Print);
      } else {
        return p1PrintLength - p2PrintLength;
      }
    } else {
      return p1ImageLength - p2ImageLength;
    }
  } else {
    // Different releases, so do newest first
    return p2Order - p1Order;
  }
};

export const getHeroFromString = (name: string): Hero | undefined => {
  let heroOnCard: Hero | undefined = undefined;

  for (const [hero, value] of Object.entries(Hero)) {
    if (name.includes(value as string)) {
      heroOnCard = Hero[hero as keyof typeof Hero];
    }
  }

  if (name === "Bravo, Star of the Show") {
    heroOnCard = Hero.Starvo;
  } else if (name === "Arakni, 5L!p3d 7hRu 7h3 cR4X") {
    heroOnCard = Hero.Slippy;
  } else if (["Arakni, Marionette", "Arakni, Web of Deceit"].includes(name)) {
    heroOnCard = Hero.Crackni;
  } else if (["Kayo, Strong-arm", "Kayo, Underhanded Cheat"].includes(name)) {
    heroOnCard = Hero.RKO;
  } else if (
    ["Oscilio, Forked Continuum", "Oscilio, Scion of the Third Age"].includes(
      name,
    )
  ) {
    heroOnCard = Hero.Broscilio;
  } else if (
    ["Aurora, Emissary of Lightning", "Aurora, Legacy of Tempest"].includes(
      name,
    )
  ) {
    heroOnCard = Hero.Aurora2;
  } else if (
    ["Visera, Between Worlds", "Viserai, the Forsaken"].includes(name)
  ) {
    heroOnCard = Hero.Viserai2;
  }

  return heroOnCard;
};

export const getHeroFromCard = (card: {
  name: string;
  types: string[];
}): Hero | undefined => {
  let heroOnCard: Hero | undefined = undefined;

  const { types, name } = card;
  if (types.includes("Hero")) {
    heroOnCard = getHeroFromString(name);
  }

  return heroOnCard;
};

const cardsWithRestrictedFormatsOverrides: { [key: string]: Format[] } = {
  // "awakening-blue": [Format.ClassicConstructedLivingLegend],
  // "bonds-of-ancestry-red": [Format.ClassicConstructedLivingLegend],
  // "bonds-of-ancestry-yellow": [Format.ClassicConstructedLivingLegend],
  // "bonds-of-ancestry-blue": [Format.ClassicConstructedLivingLegend],
  // "crippling-crush-red": [Format.ClassicConstructedLivingLegend],
  // "hypothermia-blue": [Format.ClassicConstructedLivingLegend],
  // "oaken-old-red": [Format.ClassicConstructedLivingLegend],
  // "open-the-flood-gates-red": [Format.ClassicConstructedLivingLegend],
  // "open-the-flood-gates-yellow": [Format.ClassicConstructedLivingLegend],
  // "open-the-flood-gates-blue": [Format.ClassicConstructedLivingLegend],
  // "warmongers-diplomacy-blue": [Format.ClassicConstructedLivingLegend],
};
export const getRestrictedFormats = ({
  cardIdentifier,
  livingLegendRestricted,
}: {
  cardIdentifier: string;
  livingLegendRestricted?: boolean;
}): Format[] | undefined => {
  const restrictedFormatsSet = new Set<Format>();

  if (livingLegendRestricted) {
    restrictedFormatsSet.add(Format.LivingLegend);
  }

  const overrideRestrictedFormats =
    cardsWithRestrictedFormatsOverrides[cardIdentifier];
  if (overrideRestrictedFormats) {
    for (const format of overrideRestrictedFormats) {
      restrictedFormatsSet.add(format);
    }
  }

  const restrictedFormats = Array.from(restrictedFormatsSet);

  return restrictedFormats.length === 0 ? undefined : restrictedFormats;
};

export const getSpecializations = (card: {
  cardKeywords: string[];
}): Hero[] => {
  const { cardKeywords } = card;

  const specializations: Hero[] = [];
  cardKeywords.forEach((keyword) => {
    if (keyword.includes("Specialization")) {
      const [oneOrMoreHeroes] = keyword.split(" Specialization");
      const heroes = oneOrMoreHeroes.split(" or ");
      for (const hero of heroes) {
        specializations.push(
          Hero[hero.replace(" ", "").replace("'", "") as keyof typeof Hero],
        );
      }
    }
  });

  specializations.sort();

  return specializations;
};

export const getSets = ({
  setIdentifiers,
}: {
  setIdentifiers: string[];
}): Release[] => {
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

export const getTraits = ({
  setIdentifiers,
}: {
  name: string;
  setIdentifiers: string[];
}) => {
  const traits: Trait[] = [];
  const AGENTS_OF_CHAOS_SET_IDENTIFIERS = [
    "HNT003",
    "HNT004",
    "HNT005",
    "HNT006",
    "HNT007",
    "HNT008",
    "SAR034",
    "SAR035",
    "SAR036",
    "SAR037",
    "SAR038",
    "SAR039",
  ];
  const isAgentOfChaos = setIdentifiers.some((setIdentifier) =>
    AGENTS_OF_CHAOS_SET_IDENTIFIERS.includes(setIdentifier),
  );
  if (isAgentOfChaos) {
    traits.push(Trait.AgentOfChaos);
  }

  traits.sort();

  return traits;
};

export const getBonds = (card: { cardKeywords: string[] }): Bond[] => {
  const { cardKeywords } = card;
  const bonds = new Set<Bond>();
  cardKeywords.forEach((keyword) => {
    if (keyword.includes("Bond")) {
      for (const [bond, value] of Object.entries(Bond)) {
        if (keyword.includes(value as string)) {
          bonds.add(Bond[bond as keyof typeof Bond]);
        }
      }
    }
  });
  const arr = Array.from(bonds);
  arr.sort();

  return arr;
};

export const getFlows = (card: { cardKeywords: string[] }): Flow[] => {
  const { cardKeywords } = card;
  const flows = new Set<Flow>();
  cardKeywords.forEach((keyword) => {
    if (keyword.includes("Flow")) {
      for (const [flow, value] of Object.entries(Flow)) {
        if (keyword.includes(value as string)) {
          flows.add(Flow[flow as keyof typeof Flow]);
        }
      }
    }
  });
  const arr = Array.from(flows);
  arr.sort();

  return arr;
};

export const getFusions = (card: { cardKeywords: string[] }): Fusion[] => {
  const { cardKeywords } = card;
  const fusions = new Set<Fusion>();
  cardKeywords.forEach((keyword) => {
    if (keyword.includes("Fusion")) {
      for (const [fusion, value] of Object.entries(Fusion)) {
        if (keyword.includes(value as string)) {
          fusions.add(Fusion[fusion as keyof typeof Fusion]);
        }
      }
    }
  });
  const arr = Array.from(fusions);
  arr.sort();

  return arr;
};

export const getMeta = (
  card: PreliminaryCard,
  cardCountsByName: Map<string, number>,
): Meta[] => {
  const meta: Meta[] = [];

  const isMeta = card.printings.some(({ isExpansionSlot }) => isExpansionSlot);
  if (isMeta) {
    meta.push(Meta.Expansion);
  }

  const hasPitch = [1, 2, 3, 4].includes(card.pitch || 0);
  if (hasPitch) {
    const isRainbow = cardCountsByName.get(card.name) === 3;
    if (isRainbow) {
      meta.push(Meta.Rainbow);
    }
  }

  const isArenaCard = getIsArenaCard(card);
  if (isArenaCard) {
    meta.push(Meta.Arena);
  }

  const isDeckCard = getIsDeckCard(card);
  if (isDeckCard) {
    meta.push(Meta.Deck);
  }

  const isDualClass = card.classes.length > 1;
  if (isDualClass) {
    meta.push(Meta.DualClass);
  }

  meta.sort();

  return meta;
};

export const rarityStringMapping: { [key: string]: Rarity } = {
  B: Rarity.Basic,
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

export const getRarity = (rarities: Rarity[]): Rarity => {
  let rarity: Rarity;

  if (rarities.some((rarity) => rarity === Rarity.Basic)) {
    rarity = Rarity.Basic;
  } else if (rarities.some((rarity) => rarity === Rarity.Token)) {
    rarity = Rarity.Token;
  } else if (rarities.some((rarity) => rarity === Rarity.Common)) {
    rarity = Rarity.Common;
  } else if (rarities.some((rarity) => rarity === Rarity.Rare)) {
    rarity = Rarity.Rare;
  } else if (rarities.some((rarity) => rarity === Rarity.Majestic)) {
    rarity = Rarity.Majestic;
  } else if (rarities.some((rarity) => rarity === Rarity.Legendary)) {
    rarity = Rarity.Legendary;
  } else if (rarities.some((rarity) => rarity === Rarity.Fabled)) {
    rarity = Rarity.Fabled;
  } else if (rarities.some((rarity) => rarity === Rarity.SuperRare)) {
    rarity = Rarity.SuperRare;
  } else if (rarities.some((rarity) => rarity === Rarity.Promo)) {
    rarity = Rarity.Promo;
  } else if (rarities.some((rarity) => rarity === Rarity.Marvel)) {
    rarity = Rarity.Marvel;
  }

  // @ts-ignore
  return rarity;
};

export const getRarityFromRawString = (rawRarity: string): Rarity => {
  const rarityString = rawRarity.split(" - ")[0];
  const rarity = rarityStringMapping[rarityString];
  if (!rarity) {
    // console.error(`No rarity found for ${rarityString} (${rawRarity})`);
  }
  return rarity;
};

export const getRarities = (card: {
  rarities: string[];
}): { rarity: Rarity; rarities: Rarity[] } => {
  const rarities: Rarity[] = [];

  card.rarities.forEach((rawRarity) => {
    const rarity = getRarityFromRawString(rawRarity);
    if (!rarities.includes(rarity)) {
      rarities.push(rarity);
    }
  });
  rarities.sort();

  const rarity = getRarity(rarities);

  return { rarity, rarities };
};

export const getTypeSubtypeAndMetatype = (card: {
  name: string;
  types: string[];
}): {
  metatypes: Metatype[];
  types: Type[];
  subtypes: Subtype[];
} => {
  const { types: rawTypes } = card;

  const types: Type[] = [];
  for (const [typeKey, typeValue] of Object.entries(Type)) {
    if (rawTypes.includes(typeValue as string)) {
      types.push(Type[typeKey as keyof typeof Type]);
    }
  }

  const subtypes: Subtype[] = [];
  for (const subtypeEnum of [Subtype]) {
    for (const [subtypeEnumKey, subTypeEnumValue] of Object.entries(
      subtypeEnum,
    ).reverse()) {
      if (rawTypes.includes(subTypeEnumValue as string)) {
        subtypes.push(subtypeEnum[subtypeEnumKey as keyof typeof Subtype]);
      }
    }
  }

  const metatypes: Metatype[] = [];
  for (const metatypeEnum of [Metatype]) {
    for (const [metatypeEnumKey, metatypeEnumValue] of Object.entries(
      metatypeEnum,
    ).reverse()) {
      if (rawTypes.includes(metatypeEnumValue as string)) {
        metatypes.push(metatypeEnum[metatypeEnumKey as keyof typeof Metatype]);
      }
    }
  }

  if (types.includes(Type.Action) && !subtypes.includes(Subtype.Attack)) {
    subtypes.push(Subtype.NonAttack);
  }

  metatypes.sort();
  types.sort();
  subtypes.sort();

  return { metatypes, types, subtypes };
};
