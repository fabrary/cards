import { Card } from "@flesh-and-blood/types";
import { PUNCTUATION } from "./constants";

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
      const differentPitch = card.pitch !== other.pitch;

      if (sameName && differentPitch) {
        otherPitches.push(other);
      } else if (!sameName) {
        const otherFunctionalText =
          getFunctionalTextWithoutSelfReferences(other);
        const cardIsInOtherFunctionalText =
          otherFunctionalText?.includes(cardName);
        const functionalText = getFunctionalTextWithoutSelfReferences(card);
        const otherCardIsInFunctionalText = functionalText?.includes(otherName);
        // const isHeroNameSubset =
        //   card.types.includes(Type.Hero) &&
        //   other.types.includes(Type.Hero) &&
        //   (card.name.includes(other.name) || other.name.includes(card.name));
        if (
          cardIsInOtherFunctionalText
          // && !isHeroNameSubset
          // && !other.types.includes(Type.Hero)
          // && !other.keywords?.includes(card.name as Keyword)
        ) {
          initialReferencedBy.push(other);
        }
        if (otherCardIsInFunctionalText) {
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
          return name !== initialName && name.includes(initialName);
        })
      ) {
        references.push(initialReference);
      }
    }
  }

  return { otherPitches, referencedBy, references };
};
