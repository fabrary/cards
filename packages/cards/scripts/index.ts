import { Card } from "@flesh-and-blood/types";
import { writeFiles } from "./writer";
import { spoiledCards } from "./Spoiled";
import { releasedCards } from "./Released";

const outputDirectory = "src";

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

writeFiles(deduplicatedCards, outputDirectory);
