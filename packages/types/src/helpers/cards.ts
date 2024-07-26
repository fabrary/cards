import { Type, Keyword, Subtype } from "../interfaces";

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

export const getIsArenaCard = (types: Type[], keywords?: Keyword[]) => {
  const isDeckCard = getIsDeckCard(types, keywords);

  const isInventoryCard = [Type.DemiHero, Type.Equipment, Type.Weapon].some(
    (type) => types.includes(type)
  );

  return !isDeckCard && isInventoryCard;
};

export const getIsDeckCard = (types: Type[], keywords?: Keyword[]) => {
  const isDeckCardType = [
    Type.Action,
    Type.AttackReaction,
    Type.Block,
    Type.DefenseReaction,
    Type.Instant,
    Type.Mentor,
    Type.Resource,
  ].some((type) => types.includes(type));

  const isNotEphemeral = !keywords || !keywords.includes(Keyword.Ephemeral);

  return isDeckCardType && isNotEphemeral;
};

export const getCanAddToDeck = (types: Type[], keywords?: Keyword[]) => {
  const isArenaCard = getIsArenaCard(types, keywords);
  const isDeckCard = getIsDeckCard(types, keywords);

  return isArenaCard || isDeckCard;
};

export const getShouldRotateCardImage = (card: {
  keywords?: Keyword[];
  subtypes?: Subtype[];
}): boolean =>
  card.keywords?.includes(Keyword.Meld) ||
  card.subtypes?.includes(Subtype.Landmark) ||
  false;
