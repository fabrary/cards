import { Card } from "@flesh-and-blood/types";

export const addMissingFields = (card: Card, duplicate: Card) => {
  if (card.cardIdentifier === "wrecker-romp-blue") {
    console.log({ card, duplicate });
  }
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
    const fieldIsPresentOnCard = card[field];

    if (fieldIsMissingOnDuplicate && fieldIsPresentOnCard) {
      duplicate[field] = card[field];
    }
  }

  const arrayFieldsToFillIfMissign = [
    "bannedFormats",
    "classes",
    "keywords",
    "specializations",
    "subtypes",
    "types",
  ];
  for (const field of arrayFieldsToFillIfMissign) {
    const fieldIsMissingOnDuplicate =
      !duplicate[field] || duplicate[field].length === 0;
    const fieldIsPresentOnCard = card[field] && card[field].length > 0;

    if (fieldIsMissingOnDuplicate && fieldIsPresentOnCard) {
      duplicate[field] = card[field];
    }
  }
  if (card.cardIdentifier === "wrecker-romp-blue") {
    console.log({ card, duplicate });
  }
};
