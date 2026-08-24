import { Card, DoubleSidedCard } from "@flesh-and-blood/types";
import { getCleanText } from "./helpers.js";
import { getCardsByReferencedCardIdentifier } from "./related.js";

/**
 * Lookups over a corpus, built once per `Search` instance. Every relation is
 * keyed at the name level: a reference is between Cards, so a reference to or
 * from one pitch counts for every pitch of that card.
 */
export interface SearchIndex {
  cards: DoubleSidedCard[];
  cardByCardIdentifier: Map<string, DoubleSidedCard>;
  /** Corpus order, for restoring it after a lookup returns cards out of order. */
  corpusPositionByCardIdentifier: Map<string, number>;
  /** Distinct cleaned names, in the order the corpus first carries them. */
  cleanedNames: string[];
  pitchCycleByCleanedName: Map<string, DoubleSidedCard[]>;
  referencingCardsByCardIdentifier: Map<string, DoubleSidedCard[]>;
}

export const buildSearchIndex = (cards: DoubleSidedCard[]): SearchIndex => {
  const cardByCardIdentifier = new Map<string, DoubleSidedCard>();
  const corpusPositionByCardIdentifier = new Map<string, number>();
  const cleanedNames: string[] = [];
  const pitchCycleByCleanedName = new Map<string, DoubleSidedCard[]>();

  let corpusPosition = 0;
  for (const card of cards) {
    cardByCardIdentifier.set(card.cardIdentifier, card);
    corpusPositionByCardIdentifier.set(card.cardIdentifier, corpusPosition);
    corpusPosition++;

    const cleanedName = getCleanText(card.name);
    const pitchCycle = pitchCycleByCleanedName.get(cleanedName);
    if (pitchCycle) {
      pitchCycle.push(card);
    } else {
      pitchCycleByCleanedName.set(cleanedName, [card]);
      cleanedNames.push(cleanedName);
    }
  }

  return {
    cards,
    cardByCardIdentifier,
    corpusPositionByCardIdentifier,
    cleanedNames,
    pitchCycleByCleanedName,
    referencingCardsByCardIdentifier: getCardsByReferencedCardIdentifier(cards),
  };
};

const getPitchCycle = (index: SearchIndex, card: Card): DoubleSidedCard[] =>
  index.pitchCycleByCleanedName.get(getCleanText(card.name)) || [];

/**
 * Every pitch of the named card. An exact name wins; failing that the first
 * name containing the text answers, so a fragment resolves to one card.
 */
export const getCardsByName = (
  index: SearchIndex,
  name: string,
): DoubleSidedCard[] => {
  const cleanedName = getCleanText(name);
  let pitchCycle = index.pitchCycleByCleanedName.get(cleanedName);

  if (!pitchCycle) {
    const containingName = index.cleanedNames.find((candidate) =>
      candidate.includes(cleanedName),
    );
    if (containingName) {
      pitchCycle = index.pitchCycleByCleanedName.get(containingName);
    }
  }

  return pitchCycle || [];
};

const getCardsWithPitchSiblings = (
  index: SearchIndex,
  cards: DoubleSidedCard[],
): DoubleSidedCard[] => {
  const cardByCardIdentifier = new Map<string, DoubleSidedCard>();

  for (const card of cards) {
    for (const pitch of getPitchCycle(index, card)) {
      cardByCardIdentifier.set(pitch.cardIdentifier, pitch);
    }
  }

  const getCorpusPosition = ({ cardIdentifier }: DoubleSidedCard): number =>
    index.corpusPositionByCardIdentifier.get(cardIdentifier) || 0;

  return [...cardByCardIdentifier.values()].sort(
    (first, second) => getCorpusPosition(first) - getCorpusPosition(second),
  );
};

/** The cards naming the card, at every pitch of both. */
export const getCardsReferencing = (
  index: SearchIndex,
  card: Card,
): DoubleSidedCard[] => {
  const referencingCards: DoubleSidedCard[] = [];

  for (const pitch of getPitchCycle(index, card)) {
    referencingCards.push(
      ...(index.referencingCardsByCardIdentifier.get(pitch.cardIdentifier) ||
        []),
    );
  }

  return getCardsWithPitchSiblings(index, referencingCards);
};

/** The cards the card names, at every pitch of both. */
export const getCardsReferencedBy = (
  index: SearchIndex,
  card: Card,
): DoubleSidedCard[] => {
  const referencedCards: DoubleSidedCard[] = [];

  for (const pitch of getPitchCycle(index, card)) {
    for (const referencedCardIdentifier of pitch.referencedCards || []) {
      const referencedCard = index.cardByCardIdentifier.get(
        referencedCardIdentifier,
      );
      if (referencedCard) {
        referencedCards.push(referencedCard);
      }
    }
  }

  return getCardsWithPitchSiblings(index, referencedCards);
};
