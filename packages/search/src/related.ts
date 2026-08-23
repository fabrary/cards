import { Card, Hero, Trait } from "@flesh-and-blood/types";

/** The same card printed at another pitch value. */
export const getOtherPitches = (
  card: Card | undefined,
  cards: Card[],
): Card[] => {
  const otherPitches: Card[] = [];

  if (card) {
    for (const other of cards) {
      const isSameName = other.name === card.name;
      const isAnotherCard = other.cardIdentifier !== card.cardIdentifier;
      const isAnotherPitch = other.pitch !== card.pitch;

      if (isSameName && isAnotherCard && isAnotherPitch) {
        otherPitches.push(other);
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
  const referencedCardIdentifiers = new Set<string>(card?.referencedCards);
  const referencedCards: Card[] = [];

  for (const other of cards) {
    if (referencedCardIdentifiers.has(other.cardIdentifier)) {
      referencedCards.push(other);
    }
  }

  return referencedCards;
};

/**
 * The cards naming each card, keyed by the named card's identifier. One pass
 * answers the reverse relation for every card in the corpus, so a page or a
 * filter asking about several of them builds this once.
 */
export const getCardsByReferencedCardIdentifier = (
  cards: Card[],
): Map<string, Card[]> => {
  const cardsByReferencedCardIdentifier = new Map<string, Card[]>();

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

// A demi-hero is chosen at deckbuilding rather than put into play, so no card
// creates one and the hero is the only thing that answers for it.
const CHOSEN_EXTRA_TRAITS_BY_HERO: { [key: string]: Trait[] } = {
  [Hero.Crackni]: [Trait.AgentOfChaos],
};

/**
 * The extras a set of cards brings, out of the ones available to them. A card
 * carries what it creates, so the hero's own card has to be among the cards for
 * what the hero creates to count.
 */
export const getTokensReferencedByCards = (
  cards: Card[],
  availableTokens: Card[],
  hero?: Hero,
): Card[] => {
  const createdExtraIdentifiers = new Set<string>();
  for (const card of cards) {
    for (const createdExtraIdentifier of card.createdExtras || []) {
      createdExtraIdentifiers.add(createdExtraIdentifier);
    }
  }

  const chosenExtraTraits = (hero && CHOSEN_EXTRA_TRAITS_BY_HERO[hero]) || [];

  const referencedTokens: Card[] = [];
  for (const token of availableTokens) {
    const isCreated = createdExtraIdentifiers.has(token.cardIdentifier);
    const isChosenByHero = (token.traits || []).some((trait) =>
      chosenExtraTraits.includes(trait),
    );

    if (isCreated || isChosenByHero) {
      referencedTokens.push(token);
    }
  }

  return referencedTokens;
};
