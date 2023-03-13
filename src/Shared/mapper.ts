import { Card, Subtype } from "./interfaces";

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
