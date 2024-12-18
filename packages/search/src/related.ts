import { Card, Hero, Trait } from "@flesh-and-blood/types";
import { PUNCTUATION } from "./constants";
import { Keyword } from "@flesh-and-blood/types";

const nameOverrides: { [key: string]: string } = {
  "Dawnblade, Resplendent": "Dawnblade",
};

const getOverrideOrName = (card: Card) => nameOverrides[card.name] || card.name;

const getFunctionalTextWithoutSelfReferences = (card: Card) =>
  card.functionalText?.replaceAll(card.name, "");

export const getRelatedCardsByName = (name: string, cards: Card[]) => {
  let card = cards.find(
    (card) => card.name.toLowerCase().replace(PUNCTUATION, "") === name
  );
  if (!card) {
    card = cards.find((card) =>
      card.name.toLowerCase().replace(PUNCTUATION, "").includes(name)
    );
  }
  return getRelatedCards(card, cards);
};

export const getRelatedCards = (
  card: Card,
  cards: Card[]
): { otherPitches: Card[]; referencedBy: Card[]; references: Card[] } => {
  const otherPitches: Card[] = [];
  const referencedBy: Card[] = [];
  const references: Card[] = [];
  if (card) {
    // We need an initial list of matches, but then we need to filter further to find nested matches
    // i.e. Ash would match when Aether Ashwing was the actual match
    const initialReferencedBy: Card[] = [];
    const initialReferences: Card[] = [];

    const cardName = getOverrideOrName(card);

    for (const other of cards) {
      const otherName = getOverrideOrName(other);

      const sameName = cardName === otherName;
      const differentCard = card.cardIdentifier !== other.cardIdentifier;
      const differentPitch = card.pitch !== other.pitch;

      if (sameName && differentCard && differentPitch) {
        otherPitches.push(other);
      } else if (!sameName) {
        const isCardSeismicSurge = card.name === "Seismic Surge";
        const isOtherCardHeaved = other.keywords?.includes(Keyword.Heave);
        const isOtherCardHeaveOverride =
          isCardSeismicSurge && isOtherCardHeaved;

        const otherFunctionalText =
          getFunctionalTextWithoutSelfReferences(other);
        const cardIsInOtherFunctionalText =
          otherFunctionalText?.includes(cardName);
        const functionalText = getFunctionalTextWithoutSelfReferences(card);
        const otherCardTraits = other.traits || [];
        const otherCardIsInFunctionalText =
          functionalText?.includes(otherName) ||
          otherCardTraits.some((otherCardTrait) =>
            functionalText?.includes(otherCardTrait)
          );
        // const isHeroNameSubset =
        //   card.types.includes(Type.Hero) &&
        //   other.types.includes(Type.Hero) &&
        //   (card.name.includes(other.name) || other.name.includes(card.name));
        if (
          cardIsInOtherFunctionalText ||
          isOtherCardHeaveOverride
          // && !isHeroNameSubset
          // && !other.types.includes(Type.Hero)
          // && !other.keywords?.includes(card.name as Keyword)
        ) {
          initialReferencedBy.push(other);
        }

        const isOtherCardSeismicSurge = other.name === "Seismic Surge";
        const isCardHeaved = card.keywords?.includes(Keyword.Heave);
        const isCardHeaveOverride = isOtherCardSeismicSurge && isCardHeaved;
        if (otherCardIsInFunctionalText || isCardHeaveOverride) {
          initialReferences.push(other);
        }
      }
    }

    for (const initialReference of initialReferencedBy) {
      referencedBy.push(initialReference);
    }

    for (const initialReference of initialReferences) {
      const initialName = initialReference.name; //getOverrideOrName(initialReference);
      if (
        cardName !== initialName &&
        !initialReferences.some((card) => {
          const name = card.name; //getOverrideOrName(card);
          return name !== initialName && name?.includes(initialName);
        })
      ) {
        references.push(initialReference);
      }
    }
  }

  return { otherPitches, referencedBy, references };
};

const CARD_IDENTIFIERS_TO_SKIP: string[] = ["cash-in-yellow"];

const heroReferences: {
  [key: string]: { cards?: string[]; tokens?: string[]; traits?: Trait[] };
} = {
  [Hero.Crackni]: { traits: [Trait.AgentOfChaos] },
  [Hero.Maxx]: { tokens: ["hyper-driver"] },
};

export const getTokensReferencedByCards = (
  cards: Card[],
  tokens: Card[],
  hero?: Hero
): Card[] => {
  const referencedTokens: Set<Card> = new Set<Card>();

  for (const card of cards.filter(
    ({ cardIdentifier }) => !CARD_IDENTIFIERS_TO_SKIP.includes(cardIdentifier)
  )) {
    const { references } = getRelatedCards(card, tokens);
    for (const token of references.filter((token) => {
      const isHyperDriver = token.name === "Hyper Driver";
      const isMaxx = hero === Hero.Maxx;

      return !isHyperDriver || isMaxx;
    })) {
      referencedTokens.add(token);
    }
  }
  if (hero) {
    const heroCards = heroReferences[hero];
    if (heroCards) {
      if (heroCards.cards) {
        for (const card of cards) {
          if (heroCards.cards?.includes(card.cardIdentifier)) {
            referencedTokens.add(card);
          }
        }
      }
      if (heroCards.tokens) {
        for (const token of tokens) {
          if (heroCards.tokens?.includes(token.cardIdentifier)) {
            referencedTokens.add(token);
          }
        }
      }
    }
  }

  return Array.from(referencedTokens);
};
