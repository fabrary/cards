import { Card, Type, Keyword, Subtype, Trait } from "../interfaces";

export const getCardIdentifier = (
  card: {
    name: string;
    pitch?: string | number;
  },
  useNumber?: boolean
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
  }
  return `${name}${suffix}`;
};

export const getIsArenaCard = ({
  keywords,
  traits,
  types,
}: {
  keywords?: Keyword[];
  traits?: Trait[];
  types: Type[];
}) => {
  const isDeckCard = getIsDeckCard({ keywords, traits, types });
  const isToken = getIsCardTokenForDeck({
    keywords,
    traits,
    types,
  });
  const isInventoryCardType = [
    Type.Companion,
    Type.DemiHero,
    Type.Equipment,
    Type.Weapon,
  ].some((type) => types.includes(type));

  return !isDeckCard && !isToken && isInventoryCardType;
};

export const getIsDeckCard = ({
  keywords,
  traits,
  types,
}: {
  keywords?: Keyword[];
  traits?: Trait[];
  types: Type[];
}) => {
  const isDeckCardType = [
    Type.Action,
    Type.AttackReaction,
    Type.Block,
    Type.DefenseReaction,
    Type.Instant,
    Type.Mentor,
    Type.Resource,
  ].some((type) => types.includes(type));
  const isToken = getIsCardTokenForDeck({
    keywords,
    traits,
    types,
  });

  return isDeckCardType && !isToken;
};

export const getIsCardTokenForDeck = ({
  keywords,
  traits,
  types,
}: {
  keywords?: Keyword[];
  traits?: Trait[];
  types: Type[];
}) => {
  const isAgentOfChaos = !!traits && traits?.includes(Trait.AgentOfChaos);
  const isEphemeral = !!keywords && keywords.includes(Keyword.Ephemeral);
  const isHeroMacroOrToken = [Type.Macro, Type.Token].some((type) =>
    types.includes(type)
  );

  return isAgentOfChaos || isEphemeral || isHeroMacroOrToken;
};

const TOKEN_CARD_OVERRIDES = ["cracked-bauble-yellow", "goldfin-harpoon"];

export const getCanCardBeTokenForDeck = (card: Card) => {
  const isTokenOverride = TOKEN_CARD_OVERRIDES.includes(card.cardIdentifier);

  const isToken = getIsCardTokenForDeck(card);

  const cardBackCanBeOutsideDeck =
    card.isCardBack && card.cardIdentifier !== "inner-chi-blue";

  return isTokenOverride || isToken || cardBackCanBeOutsideDeck;
};

export const getCanAddToDeck = ({
  isCardBack,
  keywords,
  traits,
  types,
}: Card) => {
  const isArenaCard = getIsArenaCard({ keywords, traits, types });
  const isDeckCard = getIsDeckCard({ keywords, traits, types });
  const isCardFront = !isCardBack;

  return isCardFront && (isArenaCard || isDeckCard);
};

export const getShouldRotateCardImage = (card: {
  keywords?: Keyword[];
  subtypes?: Subtype[];
  types?: Type[];
}): boolean => {
  const isMeld = card.keywords?.includes(Keyword.Meld);

  const isMacro = card.types?.includes(Type.Macro);
  const isLandmarkThatShouldRotate =
    !isMacro && card.subtypes?.includes(Subtype.Landmark);

  return isMeld || isLandmarkThatShouldRotate;
};
