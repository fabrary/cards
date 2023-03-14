import { mapCSV } from "./mapper";
import { parseCSV } from "./parser";
import { filterOutUnwantedCards } from "../Shared";

const spoiledCardsFile = `${__dirname}/spoiled.csv`;

const parsedCards = parseCSV(spoiledCardsFile)
  .filter((card) => !!card.name)
  .filter(filterOutUnwantedCards);

export const spoiledCards = mapCSV(parsedCards);
