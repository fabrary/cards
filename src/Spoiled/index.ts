import { mapCSV } from "./mapper";
import { parseCSV } from "./parser";
import { filterOutUnwantedCards } from "../Shared";

const spoiledCardsFile = `${__dirname}/spoiled.csv`;
const overrideCardsFile = `${__dirname}/overrides.csv`;

const parsedOverrideCards = parseCSV(overrideCardsFile)
  .filter((card) => !!card.name)
  .filter(filterOutUnwantedCards);
const parsedSpoiledCards = parseCSV(spoiledCardsFile)
  .filter((card) => !!card.name)
  .filter(filterOutUnwantedCards)
  .filter((card) => {
    const matchingOverride = parsedOverrideCards.some(
      (overrideCard) =>
        card.name === overrideCard.name && card.pitch === overrideCard.pitch
    );
    return !matchingOverride;
  });

export const spoiledCards = mapCSV([
  ...parsedSpoiledCards,
  ...parsedOverrideCards,
]);
