import {
  Bond,
  Card,
  Flow,
  Format,
  Fusion,
  Hero,
  Keyword,
  Printing,
  Rarity,
  Release,
  Subtype,
  orderedFullSetBlackBorderIdentifiers,
  setIdentifierToSetMappings,
} from "@flesh-and-blood/types";

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

export const CARD_BACKS_OVERRIDES = ["Inner Chi"];

export const addOppositeSideCardIdentifiers = (cards: Card[]) => {
  return cards.map((card) => {
    const oppositeSideCards = cards.filter((otherCard) => {
      const notTheSameCard = card.name !== otherCard.name;
      // LSS used the same RNR prefix for two different sets - Rhinar Blitz deck and Rhinar CC deck
      const notARNRCard =
        !otherCard.printings.some(
          ({ set }) => set === Release.RhinarBlitzDeck
        ) && !card.printings.some(({ set }) => set === Release.RhinarBlitzDeck);

      const cardHasSameSetIdentifier = otherCard.printings.some(
        (otherPrinting) =>
          card.printings.some(
            ({ identifier }) => identifier === otherPrinting.identifier
          )
      );

      return notARNRCard && notTheSameCard && cardHasSameSetIdentifier;
    });

    const isOppositeSideCardFront = oppositeSideCards.some(
      ({ keywords, subtypes }) => {
        const isConstruct = subtypes.includes(Subtype.Construct);
        const isFigment = subtypes.includes(Subtype.Figment);
        const isInvocation = subtypes.includes(Subtype.Invocation);
        const isTranscend = keywords?.includes(Keyword.Transcend);

        return isConstruct || isFigment || isInvocation || isTranscend;
      }
    );

    const isCardBackOverride = CARD_BACKS_OVERRIDES.includes(card.name);
    const isCardBack = isCardBackOverride || isOppositeSideCardFront;

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
                }
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
                  }
                )?.image;
            }

            if (!oppositeImagePartialMatch) {
              oppositeImagePartialMatch = oppositeSideCard.printings.find(
                ({ edition, identifier, foiling }) => {
                  const editionsMatch = edition === printing.edition;
                  const identifiersMatch = identifier === printing.identifier;
                  const foilingsMatch = foiling === printing.foiling;

                  return editionsMatch && identifiersMatch && foilingsMatch;
                }
              )?.image;
            }

            if (!setIdentifierMatch) {
              setIdentifierMatch = oppositeSideCard.printings.find(
                ({ edition, identifier }) => {
                  const editionsMatch = edition === printing.edition;
                  const identifiersMatch = identifier === printing.identifier;

                  return editionsMatch && identifiersMatch;
                }
              )?.image;
            }
          }

          const oppositeImage =
            oppositeImageFullMatch ||
            oppositeImagePartialMatchBothHaveTreatment ||
            oppositeImagePartialMatch ||
            setIdentifierMatch;

          return { ...printing, oppositeImage };
        }
      );
      card.printings = printingsWithOppositeSide;
    }

    return {
      ...card,
      ...(oppositeSideCards.length
        ? {
            oppositeSideCardIdentifier: oppositeSideCards[0].cardIdentifier,
            oppositeSideCardIdentifiers: oppositeSideCards.map(
              ({ cardIdentifier }) => cardIdentifier
            ),
          }
        : {}),
      ...(isCardBack ? { isCardBack } : {}),
    };
  });
};

const getPrintReleaseOrder = (printing: Printing): number => {
  const index = orderedFullSetBlackBorderIdentifiers.findIndex(
    (setIdentifier) => {
      const printingSetIdentifier = printing.identifier.slice(0, 3);
      return printingSetIdentifier === setIdentifier;
    }
  );

  return index > -1 ? index : 200;
};
export const sortPrintingsByReleaseOrder = (p1: Printing, p2: Printing) => {
  const p1Order = getPrintReleaseOrder(p1);
  const p2Order = getPrintReleaseOrder(p2);

  return p1Order - p2Order;
};

const cardsWithRestrictedFormats: { [key: string]: Format[] } = {
  "awakening-blue": [Format.ClassicConstructedLivingLegend],
  "bonds-of-ancestry-red": [Format.ClassicConstructedLivingLegend],
  "bonds-of-ancestry-yellow": [Format.ClassicConstructedLivingLegend],
  "bonds-of-ancestry-blue": [Format.ClassicConstructedLivingLegend],
  "crippling-crush-red": [Format.ClassicConstructedLivingLegend],
  "hypothermia-blue": [Format.ClassicConstructedLivingLegend],
  "oaken-old-red": [Format.ClassicConstructedLivingLegend],
  "star-struck-yellow": [Format.ClassicConstructedLivingLegend],
  "warmongers-diplomacy-blue": [Format.ClassicConstructedLivingLegend],
};
export const getRestrictedFormats = ({
  cardIdentifier,
}: {
  cardIdentifier: string;
}): Format[] | undefined => {
  const restrictedFormats = cardsWithRestrictedFormats[cardIdentifier];
  if (restrictedFormats) {
    restrictedFormats.sort();
  }
  return restrictedFormats;
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
        specializations.push(Hero[hero.replace(" ", "").replace("'", "")]);
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

export const getBonds = (card: { cardKeywords: string[] }): Bond[] => {
  const { cardKeywords } = card;
  const bonds = new Set<Bond>();
  cardKeywords.forEach((keyword) => {
    if (keyword.includes("Bond")) {
      for (const [bond, value] of Object.entries(Bond)) {
        if (keyword.includes(value as string)) {
          bonds.add(Bond[bond]);
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
          flows.add(Flow[flow]);
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
          fusions.add(Fusion[fusion]);
        }
      }
    }
  });
  const arr = Array.from(fusions);
  arr.sort();

  return arr;
};

export const rarityStringMapping: { [key: string]: Rarity } = {
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

  if (rarities.some((rarity) => rarity === Rarity.Token)) {
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

  return rarity;
};

export const getRarities = (card: {
  rarities: string[];
}): { rarity: Rarity; rarities: Rarity[] } => {
  const rarities: Rarity[] = [];

  card.rarities.forEach((rawRarity) => {
    const rarityString = rawRarity.split(" - ")[0];
    const rarity = rarityStringMapping[rarityString];
    if (!rarity) {
      console.error(`No rarity found for ${rarityString} (${rawRarity})`);
    }
    if (!rarities.includes(rarity)) {
      rarities.push(rarity);
    }
  });
  rarities.sort();

  const rarity = getRarity(rarities);

  return { rarity, rarities };
};
