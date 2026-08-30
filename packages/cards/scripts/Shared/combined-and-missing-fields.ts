import { PreliminaryCard } from "./preliminary-card";
import { getRarity } from "./mapper";

type PreliminaryCardField = keyof PreliminaryCard;

type PreliminaryCardArrayField = {
  [Field in PreliminaryCardField]-?: NonNullable<
    PreliminaryCard[Field]
  > extends readonly unknown[]
    ? Field
    : never;
}[PreliminaryCardField];

const valueFieldsToFillIfMissing: PreliminaryCardField[] = [
  "arcane",
  "cost",
  "defense",
  "functionalText",
  "hero",
  "intellect",
  "life",
  "power",
  "rarity",
  "typeText",
  "young",
];

const arrayFieldsToFillIfMissing: PreliminaryCardArrayField[] = [
  "bannedFormats",
  "classes",
  "flows",
  "keywords",
  "legalFormats",
  "rarities",
  "specializations",
  "subtypes",
  "talents",
  "types",
];

const fillValueFieldIfMissing = <Field extends PreliminaryCardField>(
  card: PreliminaryCard,
  duplicate: PreliminaryCard,
  field: Field,
) => {
  const cardValue = card[field];
  const fieldIsMissingOnDuplicate = !duplicate[field];
  const fieldIsPresentOnCard = !!cardValue || cardValue === 0;

  if (fieldIsMissingOnDuplicate && fieldIsPresentOnCard) {
    duplicate[field] = cardValue;
  }
};

const fillArrayFieldIfMissing = <Field extends PreliminaryCardArrayField>(
  card: PreliminaryCard,
  duplicate: PreliminaryCard,
  field: Field,
) => {
  const cardValues = card[field];
  const duplicateValues = duplicate[field];
  const fieldIsMissingOnDuplicate =
    !duplicateValues || duplicateValues.length === 0;
  const fieldIsPresentOnCard = !!cardValues && cardValues.length > 0;

  if (fieldIsMissingOnDuplicate && fieldIsPresentOnCard) {
    duplicate[field] = cardValues;
  }
};

export const combineAndAddMissingFields = (
  card: PreliminaryCard,
  duplicate: PreliminaryCard,
) => {
  for (const field of valueFieldsToFillIfMissing) {
    fillValueFieldIfMissing(card, duplicate, field);
  }

  for (const field of arrayFieldsToFillIfMissing) {
    fillArrayFieldIfMissing(card, duplicate, field);
  }

  duplicate.rarities = Array.from(
    new Set([...(duplicate.rarities || []), ...(card.rarities || [])]),
  );

  duplicate.rarity = getRarity(duplicate.rarities);
};
