import { mapJSON } from "./mapper.ts";
import { parseJSON } from "./parser.ts";
import { filterOutUnwantedCards } from "../Shared/index.ts";
import { Release } from "@flesh-and-blood/types";

const releasedCardsFile = `${import.meta.dirname}/card.json`;
const releasedSetsFile = `${import.meta.dirname}/set.json`;

const releasesToSkip: Release[] = [];

const parsedCards = parseJSON(releasedCardsFile, releasedSetsFile)
  .filter(({ name }) => {
    const hasName = !!name;

    return hasName;
  })
  .filter(filterOutUnwantedCards);

export const releasedCards = mapJSON(parsedCards).filter(({ sets }) => {
  const isNotOnlyInReleasesToSkip = !sets.every((release) =>
    releasesToSkip.includes(release),
  );

  return isNotOnlyInReleasesToSkip;
});
