import { mapCSV } from "./mapper";
import { parseCSV } from "./parser";
import { filterOutUnwantedCards } from "../Shared";

const spoiledCardsFile1 = `${__dirname}/Flesh and Blood Spoiler Card Data - EVO.csv`;
const spoiledCardsFile2 = `${__dirname}/Flesh and Blood Spoiler Card Data - TCC.csv`;
const overrideCardsFile = `${__dirname}/overrides.csv`;

const parsedOverrideCards = parseCSV(overrideCardsFile)
  .filter((card) => !!card.name)
  .filter(filterOutUnwantedCards);
const parsedSpoiledCards1 = parseCSV(spoiledCardsFile1)
  .filter((card) => !!card.name)
  .filter(filterOutUnwantedCards)
  .filter((card) => {
    const matchingOverride = parsedOverrideCards.some(
      (overrideCard) =>
        card.name === overrideCard.name && card.pitch === overrideCard.pitch
    );
    return !matchingOverride;
  });

const parsedSpoiledCards2 = parseCSV(spoiledCardsFile2)
  .filter((card) => !!card.name)
  .filter(filterOutUnwantedCards)
  .filter((card) => {
    const matchingOverride = parsedOverrideCards.some(
      (overrideCard) =>
        card.name === overrideCard.name && card.pitch === overrideCard.pitch
    );
    return !matchingOverride;
  })
  .filter((card) => {
    const matchingOverride = parsedSpoiledCards1.some(
      (overrideCard) =>
        card.name === overrideCard.name && card.pitch === overrideCard.pitch
    );
    return !matchingOverride;
  });

export const spoiledCards = mapCSV([
  ...parsedSpoiledCards1,
  ...parsedSpoiledCards2,
  ...parsedOverrideCards,
]);
