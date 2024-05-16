import { Card } from "@flesh-and-blood/types";
import { PUNCTUATION } from "./constants";

export const getCardByName = (name: string, cards: Card[]) => {
  let card = cards.find((card) => getCleanText(card.name) === name);
  if (!card) {
    card = cards.find((card) => getCleanText(card.name).includes(name));
  }
  return card;
};

export const getCleanText = (text: string): string =>
  getNormalizedText(text.toLowerCase().trim().replace(PUNCTUATION, ""));

export const getNormalizedText = (text: string): string =>
  text.normalize("NFD").replace(/\p{Diacritic}/gu, "");
