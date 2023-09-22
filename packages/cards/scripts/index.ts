import { Card } from "@flesh-and-blood/types";
import { writeFiles } from "./writer";
import { spoiledCards } from "./Spoiled";
import { releasedCards } from "./Released";
import { getDefaultImage, getPrint, getSpecialImage } from "./Shared";

const outputDirectory = "src";

const deduplicatedCards: Card[] = [...spoiledCards];

releasedCards.forEach((card) => {
  const duplicate = deduplicatedCards.find(
    ({ cardIdentifier }) => cardIdentifier === card.cardIdentifier
  );
  if (duplicate) {
    console.log(
      `Found duplicate card (re-released in new set), combining data`,
      card.cardIdentifier
    );

    const artists = Array.from(
      new Set([...duplicate.artists, ...card.artists])
    ).sort();
    const deduplicatedPrintings = [...duplicate.printings];
    card.printings.forEach((printing) => {
      const duplicate = deduplicatedPrintings.find(
        (deduplicatedPrinting) =>
          getPrint(deduplicatedPrinting) === getPrint(printing)
      );
      if (!duplicate) {
        deduplicatedPrintings.push(printing);
      }
    });

    const defaultImage = getDefaultImage(card.name, deduplicatedPrintings);
    const specialImage = getSpecialImage(card.name, deduplicatedPrintings);
    const rarities = Array.from(
      new Set([...duplicate.rarities, ...card.rarities])
    ).sort();
    const setIdentifiers = Array.from(
      new Set([...duplicate.setIdentifiers, ...card.setIdentifiers])
    ).sort();
    const sets = Array.from(new Set([...duplicate.sets, ...card.sets])).sort();

    duplicate.artists = artists;
    duplicate.defaultImage = defaultImage;
    duplicate.printings = deduplicatedPrintings;
    duplicate.rarities = rarities;
    duplicate.setIdentifiers = setIdentifiers;
    duplicate.sets = sets;
    duplicate.specialImage = specialImage;
  } else {
    deduplicatedCards.push(card);
  }
});

writeFiles(deduplicatedCards, outputDirectory);
