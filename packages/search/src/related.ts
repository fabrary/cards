import { Card } from "@flesh-and-blood/types";

/**
 * The extras a set of cards brings, out of the ones available to them. A card
 * carries what it creates, so the hero's own card has to be among the cards for
 * what the hero creates to count.
 */
export const getTokensReferencedByCards = (
  cards: Card[],
  availableTokens: Card[],
): Card[] => {
  const createdExtraIdentifiers = new Set<string>();
  for (const card of cards) {
    for (const createdExtraIdentifier of card.createdExtras || []) {
      createdExtraIdentifiers.add(createdExtraIdentifier);
    }
  }

  const referencedTokens: Card[] = [];
  for (const token of availableTokens) {
    if (createdExtraIdentifiers.has(token.cardIdentifier)) {
      referencedTokens.push(token);
    }
  }

  return referencedTokens;
};
