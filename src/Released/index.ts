import { mapJSON } from "./mapper";
import { parseJSON } from "./parser";
import { filterOutUnwantedCards } from "../Shared";

const releasedCardsFile = `${__dirname}/card.json`;

const parsedCards = parseJSON(releasedCardsFile)
  .filter((card) => !!card.name)
  .filter(filterOutUnwantedCards);

export const releasedCards = mapJSON(parsedCards);