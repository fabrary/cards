import { parseCardData } from "./parser";
import { mapCardData } from "./mapper";
import { writeFiles } from "./writer";
import { getArtists } from "./artists";
import { filterOutUnwantedCards } from "./excludes";
import { Card } from "./interfaces";

const file = `${__dirname}/card.csv`;
const outputDirectory = "data";

const spoilers = `${__dirname}/spoilers.csv`;

const parsedReleasedCards = parseCardData(file).filter(filterOutUnwantedCards);
const parsedSpoilerCards = parseCardData(spoilers).filter(
  filterOutUnwantedCards
);

const releaseCards = mapCardData(parsedReleasedCards);
const spoilerCards = mapCardData(parsedSpoilerCards);

const deduplicatedCards: Card[] = [...spoilerCards];
releaseCards.forEach((card) => {
  const isDuplicate = spoilerCards.find(
    ({ cardIdentifier }) => cardIdentifier === card.cardIdentifier
  );
  if (isDuplicate) {
    console.log(
      `Found duplicate card (re-released in new set), skipping released version`,
      card.cardIdentifier
    );
  } else {
    deduplicatedCards.push(card);
  }
});

const artists = getArtists(deduplicatedCards);

writeFiles(artists, deduplicatedCards, outputDirectory);
