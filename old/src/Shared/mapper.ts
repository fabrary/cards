import {
  Card,
  Fusion,
  Printing,
  Rarity,
  Release,
  ReleaseEdition,
  Subtype,
  Treatment,
} from "./interfaces";
import { fullSetIdentifiers, setIdentifierToSetMappings } from "./sets";

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

export const addOppositeSideCardIdentifiers = (cards: Card[]) => {
  return cards.map((card) => {
    const oppositeSide = cards.find((otherCard) => {
      return (
        otherCard.name !== card.name &&
        otherCard.setIdentifiers.every((otherIdentifier) =>
          card.setIdentifiers.includes(otherIdentifier)
        )
      );
    });
    const isCardBack =
      oppositeSide &&
      (oppositeSide.subtypes.includes(Subtype.Invocation) ||
        oppositeSide.subtypes.includes(Subtype.Construct) ||
        oppositeSide.subtypes.includes(Subtype.Figment));
    return {
      ...card,
      ...(oppositeSide
        ? { oppositeSideCardIdentifier: oppositeSide.cardIdentifier }
        : {}),
      ...(isCardBack ? { isCardBack } : {}),
    };
  });
};

const orderedFullSetBlackBorderIdentifiers = Object.keys(fullSetIdentifiers)
  .filter((set) => set !== "1hp")
  .reverse()
  .map((set) => set.toUpperCase());

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
  if (matchingOverride) {
    const [_, { setIdentifier }] = matchingOverride;
    const matchingPrint = printings.find(
      ({ identifier }) => identifier === setIdentifier
    );
    return matchingPrint?.image || "";
  } else {
    const reversedPrintings = [...printings];

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
      const isBlackBorder = setIdentifier !== "1HP" && setIdentifier !== "2HP";

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

export const getSpecialImage = (
  cardName: string,
  printings: Printing[]
): string => {
  const matchingOverride = Object.entries(defaultImagePrintingOverrides).find(
    ([name]) => cardName === name
  );
  if (matchingOverride) {
    const [_, { setIdentifier }] = matchingOverride;
    const matchingPrint = printings.find(
      ({ identifier }) => identifier === setIdentifier
    );
    return matchingPrint?.image || "";
  } else {
    const alternativeArt = printings.find(
      (printing) => printing.treatment === Treatment.AA
    );
    const fullArt = printings.find(
      (printing) => printing.treatment === Treatment.FA
    );
    const extendedArt = printings.find(
      (printing) => printing.treatment === Treatment.EA
    );
    const alternateBorder = printings.find(
      (printing) => printing.treatment === Treatment.AB
    );
    const alternateText = printings.find(
      (printing) => printing.treatment === Treatment.AT
    );
    const doubleSided = printings.find(
      (printing) => printing.treatment === Treatment.DS
    );
    const firstEdition = printings.find(
      (printing) => printing.edition === ReleaseEdition.First
    );
    const alphaEdition = printings.find(
      (printing) => printing.edition === ReleaseEdition.Alpha
    );
    const unlimitedEdition = printings.find(
      (printing) => printing.edition === ReleaseEdition.Unlimited
    );
    let image =
      printings.length > 0
        ? fullArt?.image ||
          extendedArt?.image ||
          alternateBorder?.image ||
          doubleSided?.image ||
          alternativeArt?.image ||
          alternateText?.image ||
          firstEdition?.image ||
          alphaEdition?.image ||
          unlimitedEdition?.image ||
          printings.find(({ image }) => !!image)?.image ||
          ""
        : "";
    if (!image) {
      console.log(`Missing images for ${cardName}`);
    }
    return image;
  }
};

export const getPrint = (printing: {
  identifier: string;
  edition?: string;
  foiling?: string;
  treatment?: string;
}) => {
  const identifier = printing.identifier;
  const edition = printing.edition ? `-${printing.edition}` : ``;
  const foiling = printing.foiling ? `-${printing.foiling}` : ``;
  const treatment = printing.treatment ? `-${printing.treatment}` : ``;
  return `${identifier}${edition}${foiling}${treatment}`;
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
        if (keyword.includes(value)) {
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

export const getRarities = (card: { rarity: string[] }): Rarity[] => {
  const { rarity } = card;
  const rarities: Rarity[] = [];
  rarity.forEach((rawRarity) => {
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
  return rarities;
};
