import { mapJSON } from "./mapper";
import { parseJSON } from "./parser";
import { filterOutUnwantedCards } from "../Shared";
import { Release } from "@flesh-and-blood/types";

const releasedCardsFile = `${__dirname}/card.json`;
const releasedSetsFile = `${__dirname}/set.json`;

const releasesToSkip = [Release.ArmoryDeckAzalea, Release.ArmoryDeckBoltyn];

const parsedCards = parseJSON(releasedCardsFile, releasedSetsFile)
  .filter(({ name }) => {
    const hasName = !!name;

    return hasName;
  })
  .filter(filterOutUnwantedCards);

export const releasedCards = mapJSON(parsedCards).filter(({ sets }) => {
  const isNotOnlyInReleasesToSkip = !sets.every((release) =>
    releasesToSkip.includes(release)
  );

  return isNotOnlyInReleasesToSkip;
});
