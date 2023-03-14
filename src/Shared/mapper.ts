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
  "1HP": Release.HistoryPack1,
  ARC: Release.ArcaneRising,
  CRU: Release.CrucibleOfWar,
  DYN: Release.Dynasty,
  ELE: Release.TalesOfAria,
  EVR: Release.Everfest,
  MON: Release.Monarch,
  OUT: Release.Outsiders,
  UPR: Release.Uprising,
  WTR: Release.WelcomeToRathe,
};

export const getDefaultImage = (printings: Printing[]): string => {
  const firstEdition = printings.find(
    (printing) => printing.edition === ReleaseEdition.First
  );
  const alphaEdition = printings.find(
    (printing) => printing.edition === ReleaseEdition.Alpha
  );
  const unlimitedEdition = printings.find(
    (printing) => printing.edition === ReleaseEdition.Unlimited
  );
  const nonPromoEdition = printings.find((printing) => {
    const isFullSet = fullSetIdentifiers[printing.image.substring(0, 3)];
    return !!isFullSet;
  });
  const standardEdition = printings.find((image) => !image.treatment);

  const image =
    printings.length > 0
      ? firstEdition?.image ||
        alphaEdition?.image ||
        unlimitedEdition?.image ||
        nonPromoEdition?.image ||
        standardEdition?.image ||
        printings.find(({ image }) => !!image)?.image ||
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
