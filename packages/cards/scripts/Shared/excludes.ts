import { Card, Printing } from "@flesh-and-blood/types";

const CARDS_TO_EXCLUDE = ["Dragons of Legend", "Intellect Penalty"].map(
  (card) => card.toLowerCase()
);

export const filterOutUnwantedCards = ({ name }: { name: string }) =>
  !CARDS_TO_EXCLUDE.includes(name.toLowerCase());
