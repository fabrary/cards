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
    .toLowerCase()
    .replace("//", "-")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/ /g, "-")
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
  isCardBack,
  keywords,
  traits,
  types,
}: {
  isCardBack?: boolean;
  keywords?: Keyword[];
  traits?: Trait[];
  types: Type[];
}) => {
  const isDeckCard = getIsDeckCard({ isCardBack, keywords, traits, types });
  const isToken = getIsCardTokenForDeck({
    isCardBack,
    keywords,
    traits,
    types,
  });
  const isInventoryCardType = [Type.DemiHero, Type.Equipment, Type.Weapon].some(
    (type) => types.includes(type)
  );

  return !isDeckCard && !isToken && isInventoryCardType;
};

export const getIsDeckCard = ({
  isCardBack,
  keywords,
  traits,
  types,
}: {
  isCardBack?: boolean;
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
    isCardBack,
    keywords,
    traits,
    types,
  });

  return isDeckCardType && !isToken;
};

export const getIsCardTokenForDeck = ({
  isCardBack,
  keywords,
  traits,
  types,
}: {
  isCardBack?: boolean;
  keywords?: Keyword[];
  traits?: Trait[];
  types: Type[];
}) => {
  const isAgentOfChaos = !!traits && traits?.includes(Trait.AgentOfChaos);
  const isEphemeral = !!keywords && keywords.includes(Keyword.Ephemeral);
  const isHeroMacroOrToken = [Type.Macro, Type.Token].some((type) =>
    types.includes(type)
  );

  return isAgentOfChaos || isCardBack || isEphemeral || isHeroMacroOrToken;
};

export const getCanCardBeTokenForDeck = (card: Card) => {
  const isCrackedBauble = card.cardIdentifier === "cracked-bauble-yellow";
  const isToken = getIsCardTokenForDeck(card);

  return isCrackedBauble || isToken;
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
}): boolean =>
  card.keywords?.includes(Keyword.Meld) ||
  card.subtypes?.includes(Subtype.Landmark) ||
  false;
