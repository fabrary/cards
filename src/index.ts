import { writeFiles } from "./writer";
import { getArtists } from "./artists";
import { Card } from "./Shared/interfaces";
import { spoiledCards } from "./Spoiled";
import { releasedCards } from "./Released";

const outputDirectory = "data";

const deduplicatedCards: Card[] = [...spoiledCards];
releasedCards.forEach((card) => {
  const isDuplicate = spoiledCards.find(
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
