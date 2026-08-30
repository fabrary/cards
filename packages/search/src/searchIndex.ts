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
 * Every list-returning read but `getCreatedClosure` and `getCardsInCorpusOrder`
 * answers with a list the index holds, the same one on each call for the same
 * argument and never a copy, so a reader that reorders or grows one works on a
 * copy of its own. Those two build a fresh array for each call.
 */
export interface CatalogueIndex<
  CardType extends DoubleSidedCard = DoubleSidedCard,
> {
  cards: readonly CardType[];
  getCard: (cardIdentifier: string) => CardType | undefined;
  /** Every pitch of the card's name, the card itself among them. */
  getPitchCycle: (cardIdentifier: string) => readonly CardType[];
  /**
   * Every pitch of the named card. An exact name wins; failing that the first
   * name the corpus carries containing the text answers, so a fragment
   * resolves to one card.
   */
  getCardsByName: (name: string) => readonly CardType[];
  /**
   * Every pitch of the named card, the name matched whole. Answers "resolve
   * this exact name" where `getCardsByName` answers "search for this name", so
   * a fragment of a name the corpus carries finds nothing.
   */
  getCardsByExactName: (name: string) => readonly CardType[];
  /**
   * Every artist the corpus credits, each once, ordered by the `en` locale
   * ignoring case and diacritics so a browser and a server agree on the list.
   */
  getArtists: () => readonly string[];
  /** The cards the card is printed on the back of. */
  getOppositeSide: (cardIdentifier: string) => readonly CardType[];
  /** The cards the card names. */
  getReferences: (cardIdentifier: string) => readonly CardType[];
  /** The cards naming the card. */
  getReferencedBy: (cardIdentifier: string) => readonly CardType[];
  /** The extras the card brings into play. */
  getCreates: (cardIdentifier: string) => readonly CardType[];
  /** The cards bringing the card into play. */
  getCreatedBy: (cardIdentifier: string) => readonly CardType[];
  /**
   * What the cards bring into play, what those creations create, and on down
   * the chain. A card joins the answer only when something the walk reaches
   * creates it, so a card asked about appears only if the chain circles back
   * to it.
   */
  getCreatedClosure: (cardIdentifiers: string[]) => CardType[];
  getByRole: (role: CardRole) => readonly CardType[];
  /** The cards handed in, as a new array in the order the corpus holds them. */
  /**
   * Generic in what it orders rather than tied to the index's card type, so an
   * index over a richer card type still satisfies the plain interface.
   */
  getCardsInCorpusOrder: <OrderedCard extends DoubleSidedCard>(
    cardsToOrder: readonly OrderedCard[],
  ) => OrderedCard[];
}

interface CardLookups<CardType extends DoubleSidedCard> {
  cardByCardIdentifier: Map<string, CardType>;
  /** Corpus order, for restoring it after a lookup returns cards out of order. */
  corpusPositionByCardIdentifier: Map<string, number>;
  /** Distinct cleaned names, in the order the corpus first carries them. */
  cleanedNames: string[];
  pitchCycleByCleanedName: Map<string, CardType[]>;
}

const catalogueIndexByCards = new WeakMap<
  readonly DoubleSidedCard[],
  unknown
>();

/**
 * The answer every read gives when it finds nothing, so a miss is one list
 * rather than a new one per call.
 */
const noCards = Object.freeze([] as never[]);

/** Where a card the corpus lacks sorts: behind every card it holds. */
const strayCorpusPosition = Number.MAX_SAFE_INTEGER;

/**
 * The cards naming each card, keyed by the named card's identifier. One pass
 * answers the reverse of a relation for the whole corpus, so a page or a filter
 * asking about several cards builds it once.
 */
const getNamingCardsByNamedCardIdentifier = <CardType extends DoubleSidedCard>(
  cards: readonly CardType[],
  getNamedCardIdentifiers: (card: CardType) => string[] | undefined,
): Map<string, CardType[]> => {
  const namingCardsByNamedCardIdentifier = new Map<string, CardType[]>();

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

const getCardsByRole = <CardType extends DoubleSidedCard>(
  cards: readonly CardType[],
): Map<CardRole, CardType[]> => {
  const cardsByRole = new Map<CardRole, CardType[]>();

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

const getNewCatalogueIndex = <CardType extends DoubleSidedCard>(
  cards: readonly CardType[],
): CatalogueIndex<CardType> => {
  let cardLookups: CardLookups<CardType> | undefined;
  let referencingCardsByCardIdentifier: Map<string, CardType[]> | undefined;
  let creatingCardsByCardIdentifier: Map<string, CardType[]> | undefined;
  let cardsByRole: Map<CardRole, CardType[]> | undefined;
  let artists: string[] | undefined;

  /**
   * Identifier, position and name come out of one pass: a corpus asked to find
   * a card is asked where it sits and for its pitches too.
   */
  const getCardLookups = (): CardLookups<CardType> => {
    if (!cardLookups) {
      const cardByCardIdentifier = new Map<string, CardType>();
      const corpusPositionByCardIdentifier = new Map<string, number>();
      const cleanedNames: string[] = [];
      const pitchCycleByCleanedName = new Map<string, CardType[]>();

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

  const getCardsInCorpusOrder = <OrderedCard extends DoubleSidedCard>(
    cardsToOrder: readonly OrderedCard[],
  ): OrderedCard[] => {
    const { corpusPositionByCardIdentifier } = getCardLookups();
    const getCorpusPosition = ({ cardIdentifier }: OrderedCard): number =>
      corpusPositionByCardIdentifier.get(cardIdentifier) ?? strayCorpusPosition;

    return [...cardsToOrder].sort(
      (first, second) => getCorpusPosition(first) - getCorpusPosition(second),
    );
  };

  const getCard = (cardIdentifier: string): CardType | undefined =>
    getCardLookups().cardByCardIdentifier.get(cardIdentifier);

  /** The corpus cards the identifiers name, in the order the corpus holds them. */
  const getNamedCards = (cardIdentifiers: string[] | undefined): CardType[] => {
    const { cardByCardIdentifier } = getCardLookups();
    const namedCards: CardType[] = [];

    for (const cardIdentifier of cardIdentifiers || []) {
      const namedCard = cardByCardIdentifier.get(cardIdentifier);
      if (namedCard) {
        namedCards.push(namedCard);
      }
    }

    return getCardsInCorpusOrder(namedCards);
  };

  /**
   * A read of one card-naming field, keeping the cards it found for each
   * identifier so a second read of that identifier answers with the list the
   * first built rather than finding and ordering the cards again.
   */
  const getNamedCardsReader = (
    getNamedCardIdentifiers: (card: CardType) => string[] | undefined,
  ): ((cardIdentifier: string) => readonly CardType[]) => {
    const namedCardsByCardIdentifier = new Map<string, readonly CardType[]>();

    return (cardIdentifier: string): readonly CardType[] => {
      let namedCards = namedCardsByCardIdentifier.get(cardIdentifier);

      if (!namedCards) {
        const card = getCard(cardIdentifier);
        const cardsNamed = getNamedCards(card && getNamedCardIdentifiers(card));
        const namesCards = cardsNamed.length > 0;
        namedCards = namesCards ? cardsNamed : noCards;
        // A miss is not remembered, so an identifier the corpus lacks never
        // occupies the memo.
        if (namesCards) {
          namedCardsByCardIdentifier.set(cardIdentifier, namedCards);
        }
      }

      return namedCards;
    };
  };

  const getPitchCycle = (cardIdentifier: string): readonly CardType[] => {
    const { pitchCycleByCleanedName } = getCardLookups();
    const card = getCard(cardIdentifier);

    return card
      ? (pitchCycleByCleanedName.get(getCleanText(card.name)) ?? noCards)
      : noCards;
  };

  const getCardsByName = (name: string): readonly CardType[] => {
    const { cleanedNames, pitchCycleByCleanedName } = getCardLookups();
    const cleanedName = getCleanText(name);
    let pitchCycle = pitchCycleByCleanedName.get(cleanedName);

    const canMatchFragment = !pitchCycle && cleanedName.length > 0;
    if (canMatchFragment) {
      const containingName = cleanedNames.find((candidate) =>
        candidate.includes(cleanedName),
      );
      if (containingName) {
        pitchCycle = pitchCycleByCleanedName.get(containingName);
      }
    }

    return pitchCycle ?? noCards;
  };

  const getCardsByExactName = (name: string): readonly CardType[] => {
    const { pitchCycleByCleanedName } = getCardLookups();

    return pitchCycleByCleanedName.get(getCleanText(name)) ?? noCards;
  };

  const getArtists = (): readonly string[] => {
    if (!artists) {
      const creditedArtists = new Set<string>();

      for (const card of cards) {
        for (const artist of card.artists) {
          creditedArtists.add(artist);
        }
      }

      artists = [...creditedArtists].sort((first, second) =>
        first.localeCompare(second, "en", { sensitivity: "base" }),
      );
    }

    return artists;
  };

  const getOppositeSide = getNamedCardsReader(
    ({ oppositeSideCardIdentifiers }) => oppositeSideCardIdentifiers,
  );

  const getReferences = getNamedCardsReader(
    ({ referencedCards }) => referencedCards,
  );

  const getReferencedBy = (cardIdentifier: string): readonly CardType[] => {
    if (!referencingCardsByCardIdentifier) {
      referencingCardsByCardIdentifier = getNamingCardsByNamedCardIdentifier(
        cards,
        ({ referencedCards }) => referencedCards,
      );
    }

    return referencingCardsByCardIdentifier.get(cardIdentifier) ?? noCards;
  };

  const getCreates = getNamedCardsReader(({ createdExtras }) => createdExtras);

  const getCreatedBy = (cardIdentifier: string): readonly CardType[] => {
    if (!creatingCardsByCardIdentifier) {
      creatingCardsByCardIdentifier = getNamingCardsByNamedCardIdentifier(
        cards,
        ({ createdExtras }) => createdExtras,
      );
    }

    return creatingCardsByCardIdentifier.get(cardIdentifier) ?? noCards;
  };

  const getCreatedClosure = (cardIdentifiers: string[]): CardType[] => {
    const createdCardByCardIdentifier = new Map<string, CardType>();
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

  const getByRole = (role: CardRole): readonly CardType[] => {
    if (!cardsByRole) {
      cardsByRole = getCardsByRole(cards);
    }

    return cardsByRole.get(role) ?? noCards;
  };

  return {
    cards,
    getCard,
    getPitchCycle,
    getCardsByName,
    getCardsByExactName,
    getArtists,
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
export const getCatalogueIndex = <
  CardType extends DoubleSidedCard = DoubleSidedCard,
>(
  cards: readonly CardType[],
): CatalogueIndex<CardType> => {
  // Keyed on the array itself, so an index the map holds was built over these
  // very cards and answers with the type they carry.
  let catalogueIndex = catalogueIndexByCards.get(cards) as
    CatalogueIndex<CardType> | undefined;

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
