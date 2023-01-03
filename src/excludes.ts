import { ParsedCard } from "./parser";

const CARDS_TO_EXCLUDE = ["dragons of legend"];

export const filterOutUnwantedCards = ({ name }: ParsedCard) =>
  !CARDS_TO_EXCLUDE.includes(name.toLowerCase());
