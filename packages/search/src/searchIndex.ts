import {
  Card,
  CardRole,
  DoubleSidedCard,
  getCardRole,
  Type,
} from "@flesh-and-blood/types";
import { getCleanText } from "./helpers.js";

/**
 * Everything a corpus can be asked about its cards: lookups, the relations the
 * cards carry, and what each card is for. Every relation is identifier-level,
 * so a card named at one pitch answers for that pitch alone; widening a
 * relation to the whole name is the reader's rule rather than the corpus's.
 * Every list is the index's own, shared across reads and never copied, so a
 * reader that needs to reorder or grow one works on a copy.
 */
export interface CatalogueIndex {
  cards: readonly DoubleSidedCard[];
  getCard: (cardIdentifier: string) => DoubleSidedCard | undefined;
  /** Every pitch of the card's name, the card itself among them. */
  getPitchCycle: (cardIdentifier: string) => readonly DoubleSidedCard[];
  /**
   * Every pitch of the named card. An exact name wins; failing that the first
   * name the corpus carries containing the text answers, so a fragment
   * resolves to one card.
   */
  getCardsByName: (name: string) => readonly DoubleSidedCard[];
  /** The cards the card is printed on the back of. */
  getOppositeSide: (cardIdentifier: string) => readonly DoubleSidedCard[];
  /** The cards the card names. */
  getReferences: (cardIdentifier: string) => readonly DoubleSidedCard[];
  /** The cards naming the card. */
  getReferencedBy: (cardIdentifier: string) => readonly DoubleSidedCard[];
  /** The extras the card brings into play. */
  getCreates: (cardIdentifier: string) => readonly DoubleSidedCard[];
  /** The cards bringing the card into play. */
  getCreatedBy: (cardIdentifier: string) => readonly DoubleSidedCard[];
  /**
   * What the cards bring into play, what those creations create, and on down
   * the chain. A card joins the answer only when something the walk reaches
   * creates it, so a card asked about appears only if the chain circles back
   * to it.
   */
  getCreatedClosure: (cardIdentifiers: string[]) => readonly DoubleSidedCard[];
  getByRole: (role: CardRole) => readonly DoubleSidedCard[];
  /** The cards handed in, as a new array in the order the corpus holds them. */
  getCardsInCorpusOrder: (
    cardsToOrder: readonly DoubleSidedCard[],
  ) => DoubleSidedCard[];
}

interface CardLookups {
  cardByCardIdentifier: Map<string, DoubleSidedCard>;
  /** Corpus order, for restoring it after a lookup returns cards out of order. */
  corpusPositionByCardIdentifier: Map<string, number>;
  /** Distinct cleaned names, in the order the corpus first carries them. */
  cleanedNames: string[];
  pitchCycleByCleanedName: Map<string, DoubleSidedCard[]>;
}

const catalogueIndexByCards = new WeakMap<
  readonly DoubleSidedCard[],
  CatalogueIndex
>();

/**
 * The cards naming each card, keyed by the named card's identifier. One pass
 * answers the reverse of a relation for the whole corpus, so a page or a filter
 * asking about several cards builds it once.
 */
const getNamingCardsByNamedCardIdentifier = (
  cards: DoubleSidedCard[],
  getNamedCardIdentifiers: (card: DoubleSidedCard) => string[] | undefined,
): Map<string, DoubleSidedCard[]> => {
  const namingCardsByNamedCardIdentifier = new Map<string, DoubleSidedCard[]>();

  for (const card of cards) {
    for (const namedCardIdentifier of getNamedCardIdentifiers(card) || []) {
      const namingCards =
        namingCardsByNamedCardIdentifier.get(namedCardIdentifier);

      if (namingCards) {
        namingCards.push(card);
      } else {
        namingCardsByNamedCardIdentifier.set(namedCardIdentifier, [card]);
      }
    }
  }

  return namingCardsByNamedCardIdentifier;
};

const getCardsByRole = (
  cards: DoubleSidedCard[],
): Map<CardRole, DoubleSidedCard[]> => {
  const cardsByRole = new Map<CardRole, DoubleSidedCard[]>();

  for (const card of cards) {
    const isPickableHero = card.types.includes(Type.Hero) && !card.isCardBack;
    const role = isPickableHero ? CardRole.Hero : getCardRole(card);
    // A hero printed on a back is nobody's pick, and `getCardRole` keeps its
    // card back answer for the backs carrying no type of their own, so Viserai,
    // Usurper joins no bucket rather than one invented to hold it.
    const hasBucket = isPickableHero || role !== CardRole.Hero;

    if (hasBucket) {
      const cardsInRole = cardsByRole.get(role);
      if (cardsInRole) {
        cardsInRole.push(card);
      } else {
        cardsByRole.set(role, [card]);
      }
    }
  }

  return cardsByRole;
};

const getNewCatalogueIndex = (cards: DoubleSidedCard[]): CatalogueIndex => {
  let cardLookups: CardLookups | undefined;
  let referencingCardsByCardIdentifier:
    Map<string, DoubleSidedCard[]> | undefined;
  let creatingCardsByCardIdentifier: Map<string, DoubleSidedCard[]> | undefined;
  let cardsByRole: Map<CardRole, DoubleSidedCard[]> | undefined;

  /**
   * Identifier, position and name come out of one pass: a corpus asked to find
   * a card is asked where it sits and for its pitches too.
   */
  const getCardLookups = (): CardLookups => {
    if (!cardLookups) {
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

      cardLookups = {
        cardByCardIdentifier,
        corpusPositionByCardIdentifier,
        cleanedNames,
        pitchCycleByCleanedName,
      };
    }

    return cardLookups;
  };

  const getCardsInCorpusOrder = (
    cardsToOrder: readonly DoubleSidedCard[],
  ): DoubleSidedCard[] => {
    const { corpusPositionByCardIdentifier } = getCardLookups();
    const getCorpusPosition = ({ cardIdentifier }: DoubleSidedCard): number =>
      corpusPositionByCardIdentifier.get(cardIdentifier) || 0;

    return [...cardsToOrder].sort(
      (first, second) => getCorpusPosition(first) - getCorpusPosition(second),
    );
  };

  const getCard = (cardIdentifier: string): DoubleSidedCard | undefined =>
    getCardLookups().cardByCardIdentifier.get(cardIdentifier);

  /** The corpus cards the identifiers name, in the order the corpus holds them. */
  const getNamedCards = (
    cardIdentifiers: string[] | undefined,
  ): DoubleSidedCard[] => {
    const { cardByCardIdentifier } = getCardLookups();
    const namedCards: DoubleSidedCard[] = [];

    for (const cardIdentifier of cardIdentifiers || []) {
      const namedCard = cardByCardIdentifier.get(cardIdentifier);
      if (namedCard) {
        namedCards.push(namedCard);
      }
    }

    return getCardsInCorpusOrder(namedCards);
  };

  const getPitchCycle = (cardIdentifier: string): DoubleSidedCard[] => {
    const { pitchCycleByCleanedName } = getCardLookups();
    const card = getCard(cardIdentifier);

    return card
      ? pitchCycleByCleanedName.get(getCleanText(card.name)) || []
      : [];
  };

  const getCardsByName = (name: string): DoubleSidedCard[] => {
    const { cleanedNames, pitchCycleByCleanedName } = getCardLookups();
    const cleanedName = getCleanText(name);
    let pitchCycle = pitchCycleByCleanedName.get(cleanedName);

    if (!pitchCycle) {
      const containingName = cleanedNames.find((candidate) =>
        candidate.includes(cleanedName),
      );
      if (containingName) {
        pitchCycle = pitchCycleByCleanedName.get(containingName);
      }
    }

    return pitchCycle || [];
  };

  const getOppositeSide = (cardIdentifier: string): DoubleSidedCard[] =>
    getNamedCards(getCard(cardIdentifier)?.oppositeSideCardIdentifiers);

  const getReferences = (cardIdentifier: string): DoubleSidedCard[] =>
    getNamedCards(getCard(cardIdentifier)?.referencedCards);

  const getReferencedBy = (cardIdentifier: string): DoubleSidedCard[] => {
    if (!referencingCardsByCardIdentifier) {
      referencingCardsByCardIdentifier = getNamingCardsByNamedCardIdentifier(
        cards,
        ({ referencedCards }) => referencedCards,
      );
    }

    return referencingCardsByCardIdentifier.get(cardIdentifier) || [];
  };

  const getCreates = (cardIdentifier: string): DoubleSidedCard[] =>
    getNamedCards(getCard(cardIdentifier)?.createdExtras);

  const getCreatedBy = (cardIdentifier: string): DoubleSidedCard[] => {
    if (!creatingCardsByCardIdentifier) {
      creatingCardsByCardIdentifier = getNamingCardsByNamedCardIdentifier(
        cards,
        ({ createdExtras }) => createdExtras,
      );
    }

    return creatingCardsByCardIdentifier.get(cardIdentifier) || [];
  };

  const getCreatedClosure = (cardIdentifiers: string[]): DoubleSidedCard[] => {
    const createdCardByCardIdentifier = new Map<string, DoubleSidedCard>();
    const expandedCardIdentifiers = new Set<string>();
    // Grown as the walk runs, so a creation expands in the same loop that finds
    // it and a chain looping back on itself stops at what it has already seen.
    const cardIdentifiersToExpand = [...cardIdentifiers];

    for (const cardIdentifier of cardIdentifiersToExpand) {
      const isAlreadyExpanded = expandedCardIdentifiers.has(cardIdentifier);

      if (!isAlreadyExpanded) {
        expandedCardIdentifiers.add(cardIdentifier);

        for (const createdCard of getCreates(cardIdentifier)) {
          createdCardByCardIdentifier.set(
            createdCard.cardIdentifier,
            createdCard,
          );
          cardIdentifiersToExpand.push(createdCard.cardIdentifier);
        }
      }
    }

    return getCardsInCorpusOrder([...createdCardByCardIdentifier.values()]);
  };

  const getByRole = (role: CardRole): DoubleSidedCard[] => {
    if (!cardsByRole) {
      cardsByRole = getCardsByRole(cards);
    }

    return cardsByRole.get(role) || [];
  };

  return {
    cards,
    getCard,
    getPitchCycle,
    getCardsByName,
    getOppositeSide,
    getReferences,
    getReferencedBy,
    getCreates,
    getCreatedBy,
    getCreatedClosure,
    getByRole,
    getCardsInCorpusOrder,
  };
};

/**
 * The index for a corpus, one per array, so everything reading the same cards
 * shares its maps. Each map is built the first time a read asks for it. The
 * array is treated as immutable from that first read on: a caller that changes
 * which cards the catalogue holds builds a new array.
 */
export const getCatalogueIndex = (cards: DoubleSidedCard[]): CatalogueIndex => {
  let catalogueIndex = catalogueIndexByCards.get(cards);

  if (!catalogueIndex) {
    catalogueIndex = getNewCatalogueIndex(cards);
    catalogueIndexByCards.set(cards, catalogueIndex);
  }

  return catalogueIndex;
};

const getPitchCycleOfCard = (
  index: CatalogueIndex,
  card: Card,
): readonly DoubleSidedCard[] => index.getPitchCycle(card.cardIdentifier);

/** {@link CatalogueIndex.getCardsByName}, as a free function over an index. */
export const getCardsByName = (
  index: CatalogueIndex,
  name: string,
): readonly DoubleSidedCard[] => index.getCardsByName(name);

const getCardsWithPitchSiblings = (
  index: CatalogueIndex,
  cards: readonly DoubleSidedCard[],
): DoubleSidedCard[] => {
  const cardByCardIdentifier = new Map<string, DoubleSidedCard>();

  for (const card of cards) {
    for (const pitch of getPitchCycleOfCard(index, card)) {
      cardByCardIdentifier.set(pitch.cardIdentifier, pitch);
    }
  }

  return index.getCardsInCorpusOrder([...cardByCardIdentifier.values()]);
};

/** The cards naming the card, at every pitch of both. */
export const getCardsReferencing = (
  index: CatalogueIndex,
  card: Card,
): DoubleSidedCard[] => {
  const referencingCards: DoubleSidedCard[] = [];

  for (const pitch of getPitchCycleOfCard(index, card)) {
    referencingCards.push(...index.getReferencedBy(pitch.cardIdentifier));
  }

  return getCardsWithPitchSiblings(index, referencingCards);
};

/** The cards the card names, at every pitch of both. */
export const getCardsReferencedBy = (
  index: CatalogueIndex,
  card: Card,
): DoubleSidedCard[] => {
  const referencedCards: DoubleSidedCard[] = [];

  for (const pitch of getPitchCycleOfCard(index, card)) {
    referencedCards.push(...index.getReferences(pitch.cardIdentifier));
  }

  return getCardsWithPitchSiblings(index, referencedCards);
};
