import { Card } from "@flesh-and-blood/types";
import { getRarity } from "./mapper";

export const combineAndAddMissingFields = (card: Card, duplicate: Card) => {
  const valueFieldsToFillIfMissing = [
    "cost",
    "defense",
    "functionalText",
    "hero",
    "intellect",
    "life",
    "power",
    "rarity",
    "typeText",
  ];
  for (const field of valueFieldsToFillIfMissing) {
    const fieldIsMissingOnDuplicate = !duplicate[field];
    const fieldIsPresentOnCard = card[field] || card[field] === 0;

    if (fieldIsMissingOnDuplicate && fieldIsPresentOnCard) {
      duplicate[field] = card[field];
    }
  }

  const arrayFieldsToFillIfMissing = [
    "bannedFormats",
    "classes",
    "keywords",
    "rarities",
    "specializations",
    "subtypes",
    "talents",
    "types",
  ];
  for (const field of arrayFieldsToFillIfMissing) {
    const fieldIsMissingOnDuplicate =
      !duplicate[field] || duplicate[field].length === 0;
    const fieldIsPresentOnCard = card[field] && card[field].length > 0;

    if (fieldIsMissingOnDuplicate && fieldIsPresentOnCard) {
      duplicate[field] = card[field];
    }
  }

  const arrayFieldsToCombine = ["rarities"];
  for (const field of arrayFieldsToCombine) {
    const duplicateValues = duplicate[field] || [];
    const cardValues = card[field] || [];

    duplicate[field] = Array.from(new Set([...duplicateValues, ...cardValues]));
  }

  duplicate.rarity = getRarity(duplicate.rarities);
};
