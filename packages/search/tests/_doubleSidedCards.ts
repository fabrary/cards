import { DoubleSidedCard } from "@flesh-and-blood/types";
import { cards } from "@flesh-and-blood/cards";

// The corpus as the consumers hand it to `Search`, with each side of a
// double-sided card carrying the card on its other side.
export const doubleSidedCards: DoubleSidedCard[] = cards.map((card) => {
  if (card.oppositeSideCardIdentifier) {
    const oppositeSideCard = cards.find(
      ({ cardIdentifier }) =>
        cardIdentifier === card.oppositeSideCardIdentifier,
    );
    if (oppositeSideCard) {
      (card as DoubleSidedCard).oppositeSideCard = oppositeSideCard;
    }
  }
  return card;
});
