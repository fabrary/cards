import { Card, Printing } from "@flesh-and-blood/types";

const CARD_NAMES_TO_EXCLUDE = ["Dragons of Legend", "Intellect Penalty"].map(
  (card) => card.toLowerCase()
);

const CARD_TYPES_TO_EXCLUDE = ["Event"].map((card) => card.toLowerCase());

export const filterOutUnwantedCards = ({
  name,
  types,
}: {
  name: string;
  types: string[];
}) =>
  !CARD_NAMES_TO_EXCLUDE.includes(name.toLowerCase()) &&
  !types.some((type) => CARD_TYPES_TO_EXCLUDE.includes(type.toLowerCase()));
