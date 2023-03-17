import {
  Card,
  Printing,
  Release,
  ReleaseEdition,
  Subtype,
  Treatment,
} from "./interfaces";

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
        oppositeSide.subtypes.includes(Subtype.Construct));
    return {
      ...card,
      ...(oppositeSide
        ? { oppositeSideCardIdentifier: oppositeSide.cardIdentifier }
        : {}),
      ...(isCardBack ? { isCardBack } : {}),
    };
  });
};

export const fullSetIdentifiers = {
  WTR: Release.WelcomeToRathe,
  ARC: Release.ArcaneRising,
  CRU: Release.CrucibleOfWar,
  MON: Release.Monarch,
  ELE: Release.TalesOfAria,
  EVR: Release.Everfest,
  "1HP": Release.HistoryPack1,
  UPR: Release.Uprising,
  DYN: Release.Dynasty,
  OUT: Release.Outsiders,
};

const orderedFullSetBlackBorderIdentifiers = Object.keys(fullSetIdentifiers)
  .filter((set) => set !== "1HP")
  .reverse();

export const getDefaultImage = (printings: Printing[]): string => {
  const reversedPrintings = [...printings];

  let newestBlackBorderStandard;
  let newestBlackBorder;
  for (const set of orderedFullSetBlackBorderIdentifiers) {
    const matchingPrinting = printings.find((printing) => {
      const setIdentifier = printing.identifier.slice(0, 3);
      return set === setIdentifier;
    });
    if (matchingPrinting) {
      if (
        !newestBlackBorderStandard &&
        !matchingPrinting.foiling &&
        !matchingPrinting.treatment &&
        !!matchingPrinting.image
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
    // console.log(`Missing images for ${card.name}`);
  }
  return image;
};

export const getSpecialImage = (printings: Printing[]): string => {
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
    // console.log(`Missing images for ${card.name}`);
  }
  return image;
};
