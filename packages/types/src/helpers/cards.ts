import {
  Card,
  CardRole,
  Keyword,
  Subtype,
  Trait,
  Type,
} from "../interfaces.js";

export const getCardIdentifier = (
  card: {
    name: string;
    pitch?: string | number;
  },
  useNumber?: boolean,
): string => {
  const { name: unformattedName, pitch } = card;
  const name = unformattedName
    .trim()
    .toLowerCase()
    .replace("//", "-")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/ /g, "-")
    .replace("ð", "d")
    .replace("đ", "d")
    .replace("í", "i")
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/--/, "-");

  let suffix: string = "";
  switch (pitch) {
    case "1":
    case 1:
      suffix = useNumber ? "-1" : "-red";
      break;
    case "2":
    case 2:
      suffix = useNumber ? "-2" : "-yellow";
      break;
    case "3":
    case 3:
      suffix = useNumber ? "-3" : "-blue";
      break;
    case "4":
    case 4:
      suffix = useNumber ? "-4" : "-purple";
      break;
  }
  return `${name}${suffix}`;
};

export const getCardFromGEMCardIdentifier = (
  gemCardIdentifier: string,
  cards: { cardIdentifier: string; oppositeSideCardIdentifiers?: string[] }[],
): Card | undefined => {
  let exactMatch: Card | undefined;
  let fallbackMatch: Card | undefined;

  const identifierParts = gemCardIdentifier.split("-");
  const cardIdentifierGuess = identifierParts
    .map((part) => {
      const shouldReplaceNumberWithColor = ["1", "2", "3", "4"].some(
        (pitch) => pitch === part,
      );

      return shouldReplaceNumberWithColor
        ? part
            .replace("1", "red")
            .replace("2", "yellow")
            .replace("3", "blue")
            .replace("4", "purple")
        : part;
    })
    .join("-");

  for (const card of cards) {
    const { cardIdentifier, oppositeSideCardIdentifiers } = card;

    const matchesExactly = cardIdentifier === cardIdentifierGuess;
    if (matchesExactly) {
      exactMatch = card as Card;
      break;
    }

    const matchesDoubleSidedGuess = oppositeSideCardIdentifiers?.some(
      (oppositeSideCardIdentifier) =>
        `${cardIdentifier}--${oppositeSideCardIdentifier}` ===
        cardIdentifierGuess,
    );
    if (matchesDoubleSidedGuess) {
      fallbackMatch = card as Card;
    }
  }

  return exactMatch || fallbackMatch;
};

export const getFrontAndBackCardIdentifier = (
  card: { name: string; pitch?: string | number },
  cardBack?: { name: string; pitch?: string | number },
  useNumber?: boolean,
) => {
  const cardFrontIdentifier = getCardIdentifier(card, useNumber);
  const cardBackIdentifier = cardBack
    ? getCardIdentifier(cardBack, useNumber)
    : "";

  const joiner = cardBackIdentifier ? "--" : "";

  return `${cardFrontIdentifier}${joiner}${cardBackIdentifier}`;
};

interface CardShape {
  cardIdentifier?: string;
  keywords?: Keyword[];
  traits?: Trait[];
  types: Type[];
}

// Cards another card puts into play while carrying none of the markers: the
// Cracked Bauble is a token printed as an ordinary card, and the Goldfin
// Harpoon is Marlynn's arena weapon.
const CREATED_CARD_IDENTIFIERS = ["cracked-bauble-yellow", "goldfin-harpoon"];

const ARENA_CARD_TYPES = [
  Type.Companion,
  Type.DemiHero,
  Type.Equipment,
  Type.Weapon,
];

const DECK_CARD_TYPES = [
  Type.Action,
  Type.AttackReaction,
  Type.Block,
  Type.DefenseReaction,
  Type.Instant,
  Type.Mentor,
  Type.Resource,
];

/**
 * A card that comes into play during a game rather than being run in the deck
 * list: tokens, ephemeral cards, macros, and Arakni's demi-heroes.
 */
export const getIsExtra = ({ keywords, traits, types }: CardShape) => {
  // The trait, not the Demi-Hero type, is what marks Arakni's demi-heroes: an
  // ordinary demi-hero (Levia, Shadowborn Abomination) is an inventory card.
  const isAgentOfChaos = (traits || []).includes(Trait.AgentOfChaos);
  const isEphemeral = (keywords || []).includes(Keyword.Ephemeral);
  const isIncarnate = (keywords || []).includes(Keyword.Incarnate);
  const isMacroOrToken = [Type.Macro, Type.Token].some((type) =>
    types.includes(type),
  );

  return isAgentOfChaos || isEphemeral || isIncarnate || isMacroOrToken;
};

/**
 * Whether another card can put this one into play, which is what a deck has to
 * bring. Every extra but a macro, since the format sets those up. Wider than
 * what the card *is*: the Cracked Bauble and the Goldfin Harpoon are ordinary
 * deck cards by type, so the zone questions below keep counting them as deck
 * cards while creation counts them as extras.
 */
export const getCanBeCreated = (
  card: { cardIdentifier: string } & CardShape,
) => {
  const isMacro = card.types.includes(Type.Macro);

  return (
    (getIsExtra(card) && !isMacro) ||
    CREATED_CARD_IDENTIFIERS.includes(card.cardIdentifier)
  );
};

export const getIsArenaCard = (card: CardShape) => {
  const isArenaCardType = ARENA_CARD_TYPES.some((type) =>
    card.types.includes(type),
  );

  return isArenaCardType && !getIsDeckCard(card) && !getIsExtra(card);
};

export const getIsDeckCard = (card: CardShape) => {
  const isDeckCardType = DECK_CARD_TYPES.some((type) =>
    card.types.includes(type),
  );

  return isDeckCardType && !getIsExtra(card);
};

export const getCanBeExtra = (card: Card) => {
  // A card back is the reverse of a card its owner already has, so it reaches
  // the arena without ever being brought.
  const canCardBackBeOutsideDeck =
    !!card.isCardBack && card.cardIdentifier !== "inner-chi-blue";

  return getIsExtra(card) || getCanBeCreated(card) || canCardBackBeOutsideDeck;
};

export const getCanAddToDeck = (card: Card) => {
  const isCardFront = !card.isCardBack;

  return isCardFront && (getIsArenaCard(card) || getIsDeckCard(card));
};

/**
 * What the card is for, as one answer rather than a predicate per question.
 * A card has exactly one role: Graphene Chelicera is a Token Weapon and counts
 * as an extra, because the role decides what a deck brings.
 */
export const getCardRole = (card: Card): CardRole => {
  let role = CardRole.Deck;

  if (getIsExtra(card)) {
    role = CardRole.Extra;
  } else if (card.types.includes(Type.Hero)) {
    role = CardRole.Hero;
  } else if (card.isCardBack) {
    role = CardRole.CardBack;
  } else if (getIsArenaCard(card)) {
    role = CardRole.Inventory;
  }

  return role;
};

export const getShouldRotateCardImage = (card: {
  keywords?: Keyword[];
  subtypes?: Subtype[];
  types?: Type[];
}): boolean => {
  const isMeld = card.keywords?.includes(Keyword.Meld);

  const isMacro = card.types?.includes(Type.Macro);
  const isLandmarkThatShouldRotate =
    (!isMacro && card.subtypes?.includes(Subtype.Landmark)) || false;

  return isMeld || isLandmarkThatShouldRotate;
};
