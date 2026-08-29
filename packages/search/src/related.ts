import { Card } from "@flesh-and-blood/types";
import { getCatalogueIndex } from "./searchIndex.js";

/** The same card printed at another pitch value. */
export const getOtherPitches = (
  card: Card | undefined,
  cards: Card[],
): Card[] => {
  const otherPitches: Card[] = [];

  if (card) {
    const pitchCycle = getCatalogueIndex(cards).getPitchCycle(
      card.cardIdentifier,
    );

    for (const pitch of pitchCycle) {
      if (pitch.cardIdentifier !== card.cardIdentifier) {
        otherPitches.push(pitch);
      }
    }
  }

  return otherPitches;
};

/** The cards a card names, in the order the corpus holds them. */
export const getReferencedCards = (
  card: Card | undefined,
  cards: Card[],
): Card[] => {
  let referencedCards: Card[] = [];

  if (card) {
    referencedCards = [
      ...getCatalogueIndex(cards).getReferences(card.cardIdentifier),
    ];
  }

  return referencedCards;
};

/**
 * The cards naming each card, keyed by the named card's identifier. One pass
 * answers the reverse relation for every card in the corpus, so a page or a
 * filter asking about several of them builds this once.
 */
export const getCardsByReferencedCardIdentifier = <CardType extends Card>(
  cards: CardType[],
): Map<string, CardType[]> => {
  const cardsByReferencedCardIdentifier = new Map<string, CardType[]>();

  for (const card of cards) {
    for (const referencedCardIdentifier of card.referencedCards || []) {
      const referencingCards = cardsByReferencedCardIdentifier.get(
        referencedCardIdentifier,
      );

      if (referencingCards) {
        referencingCards.push(card);
      } else {
        cardsByReferencedCardIdentifier.set(referencedCardIdentifier, [card]);
      }
    }
  }

  return cardsByReferencedCardIdentifier;
};

/**
 * The extras a set of cards brings, out of the ones available to them. A card
 * carries what it creates, so the hero's own card has to be among the cards for
 * what the hero creates to count.
 */
export const getTokensReferencedByCards = (
  cards: Card[],
  availableTokens: Card[],
): Card[] => {
  const index = getCatalogueIndex(cards);
  const referencedTokens: Card[] = [];

  for (const token of availableTokens) {
    const isCreatedByTheCards =
      index.getCreatedBy(token.cardIdentifier).length > 0;

    if (isCreatedByTheCards) {
      referencedTokens.push(token);
    }
  }

  return referencedTokens;
};
