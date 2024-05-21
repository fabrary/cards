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

export const ignoreOppositeSides = [
  "Blossom of Spring",
  "Fyendal's Spring Tunic",
  "Scabskin Leathers",
  "Snapdragon Scalers",
];

const OPPOSITE_SIDE_CARD_OVERRIDES: { back: string; fronts: string[] }[] = [
  {
    back: "inner-chi-blue",
    fronts: [
      "a-drop-in-the-ocean-blue",
      "homage-to-ancestors-blue",
      "mistcloak-gully",
      "pass-over-blue",
      "path-well-traveled-blue",
      "preserve-tradition-blue",
      "rising-sun-setting-moon-blue",
      "sacred-art-undercurrent-desires-blue",
      "sacred-art-jade-tiger-domain-blue",
      "sacred-art-immortal-lunar-shrine-blue",
      "stir-the-pot-blue",
      "the-grain-that-tips-the-scale-blue",
    ],
  },
];

export const addOppositeSideCardIdentifiers = (cards: Card[]) => {
  return cards.map((card) => {
    const oppositeSideOverrideIdentifier = OPPOSITE_SIDE_CARD_OVERRIDES.find(
      ({ fronts }) => fronts.includes(card.cardIdentifier)
    )?.back;
    const oppositeSideOverrideIdentifiers =
      OPPOSITE_SIDE_CARD_OVERRIDES.find(
        ({ back }) => back === card.cardIdentifier
      )?.fronts || [];

    const oppositeSide = oppositeSideOverrideIdentifier
      ? cards.find(
          ({ cardIdentifier }) =>
            cardIdentifier === oppositeSideOverrideIdentifier
        )
      : cards.find((otherCard) => {
          return (
            otherCard.name !== card.name &&
            otherCard.setIdentifiers.every((otherIdentifier) =>
              card.setIdentifiers.includes(otherIdentifier)
            )
          );
        });

    const isCardBack =
      oppositeSideOverrideIdentifiers.length > 0 ||
      (oppositeSide &&
        (oppositeSide.subtypes.includes(Subtype.Invocation) ||
          oppositeSide.subtypes.includes(Subtype.Construct) ||
          oppositeSide.subtypes.includes(Subtype.Figment) ||
          oppositeSide.keywords?.includes(Keyword.Transcend)));

    if (oppositeSide && oppositeSideOverrideIdentifiers.length === 0) {
      const printingsWithOppositeSide: Printing[] = card.printings.map(
        (printing) => {
          const oppositeImageFullMatch = oppositeSide.printings.find(
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
          const oppositeImagePartialMatchBothHaveTreatment =
            oppositeSide.printings.find(
              ({ edition, identifier, foiling, treatment }) => {
                const editionsMatch = edition === printing.edition;
                const identifiersMatch = identifier === printing.identifier;
                const foilingsMatch = foiling === printing.foiling;
                const bothHaveTreatments = !!treatment && !!printing.treatment;

                return (
                  editionsMatch &&
                  identifiersMatch &&
                  foilingsMatch &&
                  bothHaveTreatments
                );
              }
            )?.image;
          const oppositeImagePartialMatch = oppositeSide.printings.find(
            ({ edition, identifier, foiling }) => {
              const editionsMatch = edition === printing.edition;
              const identifiersMatch = identifier === printing.identifier;
              const foilingsMatch = foiling === printing.foiling;

              return editionsMatch && identifiersMatch && foilingsMatch;
            }
          )?.image;

          const oppositeImage =
            oppositeImageFullMatch ||
            oppositeImagePartialMatchBothHaveTreatment ||
            oppositeImagePartialMatch;

          return { ...printing, oppositeImage };
        }
      );
      card.printings = printingsWithOppositeSide;
    }

    return {
      ...card,
      ...(oppositeSide
        ? {
            oppositeSideCardIdentifier: oppositeSide.cardIdentifier,
            oppositeSideCardIdentifiers: oppositeSideOverrideIdentifiers.length
              ? oppositeSideOverrideIdentifiers
              : [oppositeSide.cardIdentifier],
          }
        : {}),
      ...(isCardBack ? { isCardBack } : {}),
    };
  });
};

const orderedFullSetBlackBorderIdentifiers = Object.keys(fullSetIdentifiers)
  .filter((set) => set !== "1hp")
  .reverse()
  .map((set) => set.toUpperCase());

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

const excludedImages: { [key: string]: string[] } = {
  "Qi Unleashed": ["TCC090"],
};

const defaultImagePrintingOverrides: {
  [key: string]: { setIdentifier: string };
} = {
  "Pitfall Trap": {
    setIdentifier: "LGS151",
  },
  "Rockslide Trap": {
    setIdentifier: "LGS152",
  },
  "Spectral Shield": {
    setIdentifier: "DYN233",
  },
  "Tripwire Trap": {
    setIdentifier: "LGS150",
  },
};

export const getDefaultImage = (
  cardName: string,
  printings: Printing[]
): string => {
  const matchingOverride = Object.entries(defaultImagePrintingOverrides).find(
    ([name]) => cardName === name
  );
  const excludedSetIdentifierForCard = excludedImages[cardName] || [];

  if (matchingOverride) {
    const [_, { setIdentifier }] = matchingOverride;
    const matchingPrint = printings.find(
      ({ identifier }) => identifier === setIdentifier
    );
    return matchingPrint?.image || "";
  } else {
    const reversedPrintings = [...printings].filter(({ identifier }) => {
      const isPrintingExcluded =
        excludedSetIdentifierForCard.includes(identifier);
      return !isPrintingExcluded;
    });

    let newestBlackBorderStandard;
    let newestBlackBorder;
    for (const set of orderedFullSetBlackBorderIdentifiers) {
      const matchingPrintings = printings.filter((printing) => {
        const setIdentifier = printing.identifier.slice(0, 3);
        return set === setIdentifier;
      });
      for (const matchingPrinting of matchingPrintings) {
        if (
          !newestBlackBorderStandard &&
          !matchingPrinting.foiling &&
          !matchingPrinting.treatment &&
          !!matchingPrinting.image
        ) {
          newestBlackBorderStandard = matchingPrinting;
        }
        if (
          !newestBlackBorderStandard &&
          !matchingPrinting.treatment &&
          !!matchingPrinting.image &&
          !matchingPrinting.identifier.includes("000")
        ) {
          newestBlackBorderStandard = matchingPrinting;
        }
        if (!newestBlackBorder && !!matchingPrinting.image) {
          newestBlackBorder = matchingPrinting;
        }
      }
    }

    const firstEdition = reversedPrintings.find(
      (printing) => printing.edition === ReleaseEdition.First
    );
    const alphaEdition = reversedPrintings.find(
      (printing) => printing.edition === ReleaseEdition.Alpha
    );
    const unlimitedEdition = reversedPrintings.find(
      (printing) => printing.edition === ReleaseEdition.Unlimited
    );
    const nonPromoEdition = reversedPrintings.find(
      (printing) => printing.set !== Release.Promos
    );
    const standardBlackBorder = reversedPrintings.find((printing) => {
      const setIdentifier = printing.identifier.slice(0, 3);
      const isFullSet = !!fullSetIdentifiers[setIdentifier];
      const isBlackBorder = setIdentifier !== "1HP";
      return (
        !printing.foiling &&
        !printing.treatment &&
        !!printing.image &&
        isFullSet &&
        isBlackBorder
      );
    });

    const blackBorder = reversedPrintings.find((printing) => {
      const setIdentifier = printing.identifier.slice(0, 3);
      const isFullSet = !!fullSetIdentifiers[setIdentifier];
      const isBlackBorder = setIdentifier !== "1HP";
      return (
        !printing.treatment && !!printing.image && isFullSet && isBlackBorder
      );
    });

    const image =
      reversedPrintings.length > 0
        ? newestBlackBorderStandard?.image ||
          newestBlackBorder?.image ||
          standardBlackBorder?.image ||
          blackBorder?.image ||
          nonPromoEdition?.image ||
          unlimitedEdition?.image ||
          firstEdition?.image ||
          alphaEdition?.image ||
          reversedPrintings.reverse().find(({ image }) => !!image)?.image ||
          ""
        : "";
    if (!image) {
      console.log(`Missing images for ${cardName}`);
    }
    return image;
  }
};

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

export const getSpecialImage = (
  cardName: string,
  cardIdentifer: string,
  printings: Printing[]
): string => {
  const matchingOverride = Object.entries(specialImagePrintingOverrides).find(
    ([identifier]) => identifier === cardIdentifer
  );
  const excludedSetIdentifierForCard = excludedImages[cardName] || [];

  if (matchingOverride) {
    const [_, { setIdentifier }] = matchingOverride;
    const matchingPrint = printings.find(
      ({ identifier }) => identifier === setIdentifier
    );
    return matchingPrint?.image || "";
  } else {
    const printingsToUse = [...printings].filter(({ identifier }) => {
      const isPrintingExcluded =
        excludedSetIdentifierForCard.includes(identifier);
      return !isPrintingExcluded;
    });

    const alternativeArt = printingsToUse.find(
      (printing) => printing.treatment === Treatment.AA
    );
    const fullArt = printingsToUse.find(
      (printing) => printing.treatment === Treatment.FA
    );
    const extendedArt = printingsToUse.find(
      (printing) => printing.treatment === Treatment.EA
    );
    const alternateBorder = printingsToUse.find(
      (printing) => printing.treatment === Treatment.AB
    );
    const alternateText = printingsToUse.find(
      (printing) => printing.treatment === Treatment.AT
    );
    // const doubleSided = printingsToUse.find(
    //   (printing) => printing.treatment === Treatment.DS
    // );

    const marvel = printingsToUse.find((printing) =>
      printing.image.includes("_V2")
    );
    const firstEdition = printingsToUse.find(
      (printing) => printing.edition === ReleaseEdition.First
    );
    const alphaEdition = printingsToUse.find(
      (printing) => printing.edition === ReleaseEdition.Alpha
    );
    const unlimitedEdition = printingsToUse.find(
      (printing) => printing.edition === ReleaseEdition.Unlimited
    );
    const promoEdition = printingsToUse.find(
      (printing) => printing.set === Release.Promos
    );
    let image =
      printingsToUse.length > 0
        ? fullArt?.image ||
          extendedArt?.image ||
          alternateBorder?.image ||
          // doubleSided?.image ||
          alternativeArt?.image ||
          alternateText?.image ||
          marvel?.image ||
          firstEdition?.image ||
          alphaEdition?.image ||
          promoEdition?.image ||
          unlimitedEdition?.image ||
          printingsToUse.find(({ set, image }) => {
            const hasImage = !!image;
            const isFullSet = Object.values(fullSetIdentifiers).includes(set);

            return hasImage && isFullSet;
          })?.image ||
          printingsToUse.find(({ image }) => {
            const hasImage = !!image;

            return hasImage;
          })?.image ||
          ""
        : "";
    if (!image) {
      console.log(`Missing images for ${cardName}`);
    }
    return image;
  }
};

const cardsWithRestrictedFormats: { [key: string]: Format[] } = {
  Awakening: [Format.ClassicConstructedLivingLegend],
  "Channel Lake Frigid": [Format.ClassicConstructedLivingLegend],
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
