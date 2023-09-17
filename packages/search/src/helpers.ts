import { Card } from "@flesh-and-blood/types";
import { PUNCTUATION } from "./constants";

export const getCardByName = (name: string, cards: Card[]) => {
  let card = cards.find(
    (card) => card.name.toLowerCase().replace(PUNCTUATION, "") === name
  );
  if (!card) {
    card = cards.find((card) =>
      card.name.toLowerCase().replace(PUNCTUATION, "").includes(name)
    );
  }
  return card;
};
