import {
  Card,
  Format,
  Fusion,
  Hero,
  Keyword,
  Printing,
  Rarity,
  Release,
  ReleaseEdition,
  Subtype,
  Treatment,
  fullSetIdentifiers,
  getPrint,
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
  "Fyendal's Spring Tunic",
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

export const getIdentifier = (card: {
  name: string;
  pitch?: string;
}): string => {
  const { name: unformattedName, pitch } = card;
  const name = unformattedName
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/ /g, "-")
    .replace("í", "i")
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/--/, "-");
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

// const excludedImages: { [key: string]: string[] } = {
//   "Qi Unleashed": ["TCC090"],
// };

// const defaultImagePrintingOverrides: {
//   [key: string]: { setIdentifier: string };
// } = {
//   "Pitfall Trap": {
//     setIdentifier: "LGS151",
//   },
//   "Rockslide Trap": {
//     setIdentifier: "LGS152",
//   },
//   "Spectral Shield": {
//     setIdentifier: "DYN233",
//   },
//   "Tripwire Trap": {
//     setIdentifier: "LGS150",
//   },
// };

// export const getDefaultImage = (
//   cardName: string,
//   printings: Printing[]
// ): string => {
//   const matchingOverride = Object.entries(defaultImagePrintingOverrides).find(
//     ([name]) => cardName === name
//   );
//   const excludedSetIdentifierForCard = excludedImages[cardName] || [];

//   if (matchingOverride) {
//     const [_, { setIdentifier }] = matchingOverride;
//     const matchingPrint = printings.find(
//       ({ identifier }) => identifier === setIdentifier
//     );
//     return matchingPrint?.image || "";
//   } else {
//     const reversedPrintings = [...printings].filter(({ identifier }) => {
//       const isPrintingExcluded =
//         excludedSetIdentifierForCard.includes(identifier);
//       return !isPrintingExcluded;
//     });

//     let newestBlackBorderStandard;
//     let newestBlackBorder;
//     for (const set of orderedFullSetBlackBorderIdentifiers) {
//       const matchingPrintings = printings.filter((printing) => {
//         const setIdentifier = printing.identifier.slice(0, 3);
//         return set === setIdentifier;
//       });
//       for (const matchingPrinting of matchingPrintings) {
//         if (
//           !newestBlackBorderStandard &&
//           !matchingPrinting.foiling &&
//           !matchingPrinting.treatment &&
//           !!matchingPrinting.image
//         ) {
//           newestBlackBorderStandard = matchingPrinting;
//         }
//         if (
//           !newestBlackBorderStandard &&
//           !matchingPrinting.treatment &&
//           !!matchingPrinting.image &&
//           !matchingPrinting.identifier.includes("000")
//         ) {
//           newestBlackBorderStandard = matchingPrinting;
//         }
//         if (!newestBlackBorder && !!matchingPrinting.image) {
//           newestBlackBorder = matchingPrinting;
//         }
//       }
//     }

//     const firstEdition = reversedPrintings.find(
//       (printing) => printing.edition === ReleaseEdition.First
//     );
//     const alphaEdition = reversedPrintings.find(
//       (printing) => printing.edition === ReleaseEdition.Alpha
//     );
//     const unlimitedEdition = reversedPrintings.find(
//       (printing) => printing.edition === ReleaseEdition.Unlimited
//     );
//     const nonPromoEdition = reversedPrintings.find(
//       (printing) => printing.set !== Release.Promos
//     );
//     const standardBlackBorder = reversedPrintings.find((printing) => {
//       const setIdentifier = printing.identifier.slice(0, 3);
//       const isFullSet = !!fullSetIdentifiers[setIdentifier];
//       const isBlackBorder = setIdentifier !== "1HP";
//       return (
//         !printing.foiling &&
//         !printing.treatment &&
//         !!printing.image &&
//         isFullSet &&
//         isBlackBorder
//       );
//     });

//     const blackBorder = reversedPrintings.find((printing) => {
//       const setIdentifier = printing.identifier.slice(0, 3);
//       const isFullSet = !!fullSetIdentifiers[setIdentifier];
//       const isBlackBorder = setIdentifier !== "1HP";
//       return (
//         !printing.treatment && !!printing.image && isFullSet && isBlackBorder
//       );
//     });

//     const image =
//       reversedPrintings.length > 0
//         ? newestBlackBorderStandard?.image ||
//           newestBlackBorder?.image ||
//           standardBlackBorder?.image ||
//           blackBorder?.image ||
//           nonPromoEdition?.image ||
//           unlimitedEdition?.image ||
//           firstEdition?.image ||
//           alphaEdition?.image ||
//           reversedPrintings.reverse().find(({ image }) => !!image)?.image ||
//           ""
//         : "";
//     if (!image) {
//       console.log(`Missing images for ${cardName}`);
//     }
//     return image;
//   }
// };

const specialImagePrintingOverrides: {
  [key: string]: { setIdentifier: string };
} = {
  "command-and-conquer-red": {
    setIdentifier: "DYN000",
  },
  "cracked-bauble-yellow": {
    setIdentifier: "LGS083",
  },
  "fate-foreseen-red": {
    setIdentifier: "FAB024",
  },
  "pitfall-trap-yellow": {
    setIdentifier: "LGS151",
  },
  "ravenous-rabble-red": {
    setIdentifier: "FAB190",
  },
  "rockslide-trap-blue": {
    setIdentifier: "LGS152",
  },
  "sigil-of-solace-red": {
    setIdentifier: "FAB178",
  },
  "spectral-shield": {
    setIdentifier: "DYN233",
  },
  "tripwire-trap-red": {
    setIdentifier: "LGS150",
  },
};

// export const getSpecialImage = (
//   cardName: string,
//   cardIdentifer: string,
//   printings: Printing[]
// ): string => {
//   const matchingOverride = Object.entries(specialImagePrintingOverrides).find(
//     ([identifier]) => identifier === cardIdentifer
//   );
//   const excludedSetIdentifierForCard = excludedImages[cardName] || [];

//   if (matchingOverride) {
//     const [_, { setIdentifier }] = matchingOverride;
//     const matchingPrint = printings.find(
//       ({ identifier }) => identifier === setIdentifier
//     );
//     return matchingPrint?.image || "";
//   } else {
//     const printingsToUse = [...printings].filter(({ identifier }) => {
//       const isPrintingExcluded =
//         excludedSetIdentifierForCard.includes(identifier);
//       return !isPrintingExcluded;
//     });

//     const alternativeArt = printingsToUse.find(
//       (printing) => printing.treatment === Treatment.AA
//     );
//     const fullArt = printingsToUse.find(
//       (printing) => printing.treatment === Treatment.FA
//     );
//     const extendedArt = printingsToUse.find(
//       (printing) => printing.treatment === Treatment.EA
//     );
//     const alternateBorder = printingsToUse.find(
//       (printing) => printing.treatment === Treatment.AB
//     );
//     const alternateText = printingsToUse.find(
//       (printing) => printing.treatment === Treatment.AT
//     );
//     // const doubleSided = printingsToUse.find(
//     //   (printing) => printing.treatment === Treatment.DS
//     // );

//     const marvel = printingsToUse.find((printing) =>
//       printing.image.includes("_V2")
//     );
//     const firstEdition = printingsToUse.find(
//       (printing) => printing.edition === ReleaseEdition.First
//     );
//     const alphaEdition = printingsToUse.find(
//       (printing) => printing.edition === ReleaseEdition.Alpha
//     );
//     const unlimitedEdition = printingsToUse.find(
//       (printing) => printing.edition === ReleaseEdition.Unlimited
//     );
//     const promoEdition = printingsToUse.find(
//       (printing) => printing.set === Release.Promos
//     );
//     let image =
//       printingsToUse.length > 0
//         ? fullArt?.image ||
//           extendedArt?.image ||
//           alternateBorder?.image ||
//           // doubleSided?.image ||
//           alternativeArt?.image ||
//           alternateText?.image ||
//           marvel?.image ||
//           firstEdition?.image ||
//           alphaEdition?.image ||
//           promoEdition?.image ||
//           unlimitedEdition?.image ||
//           printingsToUse.find(({ set, image }) => {
//             const hasImage = !!image;
//             const isFullSet = Object.values(fullSetIdentifiers).includes(set);

//             return hasImage && isFullSet;
//           })?.image ||
//           printingsToUse.find(({ image }) => {
//             const hasImage = !!image;

//             return hasImage;
//           })?.image ||
//           ""
//         : "";
//     if (!image) {
//       console.log(`Missing images for ${cardName}`);
//     }
//     return image;
//   }
// };

const cardsWithRestrictedFormats: { [key: string]: Format[] } = {
  Awakening: [Format.ClassicConstructedLivingLegend],
  "Crippling Crush": [Format.ClassicConstructedLivingLegend],
  Hypothermia: [Format.ClassicConstructedLivingLegend],
  "Oaken Old": [Format.ClassicConstructedLivingLegend],
  "Star Struck": [Format.ClassicConstructedLivingLegend],
  "Warmonger's Diplomacy": [Format.ClassicConstructedLivingLegend],
};
export const getRestrictedFormats = ({
  name,
}: {
  name: string;
}): Format[] | undefined => {
  const restrictedFormats = cardsWithRestrictedFormats[name];
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
