import { mapCSV } from "./mapper";
import { parseCSV } from "./parser";
import {
  filterOutUnwantedCards,
  getDefaultImage,
  getPrint,
  getSpecialImage,
} from "../Shared";
import { Card, Rarity } from "@flesh-and-blood/types";

const spoiledCardsFile1 = `${__dirname}/Flesh and Blood Spoiler Card Data - HVY.csv`;
const spoiledCardsFile2 = `${__dirname}/Flesh and Blood Spoiler Card Data - Promos.csv`;
const overrideCardsFile = `${__dirname}/overrides.csv`;

const parsedOverrideCards = parseCSV(overrideCardsFile)
  .filter((card) => !!card.name)
  .filter(filterOutUnwantedCards);
const overrideCards = mapCSV(parsedOverrideCards);

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
const spoiledCards1 = mapCSV(parsedSpoiledCards1);

const parsedSpoiledCards2 = parseCSV(spoiledCardsFile2)
  .filter((card) => !!card.name)
  .filter(filterOutUnwantedCards)
  .filter((card) => {
    const matchingOverride = parsedOverrideCards.some(
      (overrideCard) =>
        card.name === overrideCard.name && card.pitch === overrideCard.pitch
    );
    return !matchingOverride;
  });
const spoiledCards2 = mapCSV(parsedSpoiledCards2);

const deduplicatedCards: Card[] = [...overrideCards];

spoiledCards1.forEach((card) => {
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
    const specialImage = getSpecialImage(
      card.name,
      card.cardIdentifier,
      deduplicatedPrintings
    );
    const rarities = Array.from(
      new Set([...duplicate.rarities, ...card.rarities])
    ).sort();
    const restrictedFormats = duplicate.restrictedFormats;
    const setIdentifiers = Array.from(
      new Set([...duplicate.setIdentifiers, ...card.setIdentifiers])
    ).sort();
    const sets = Array.from(new Set([...duplicate.sets, ...card.sets])).sort();

    duplicate.artists = artists;
    duplicate.defaultImage = defaultImage;
    duplicate.printings = deduplicatedPrintings;
    duplicate.rarity =
      card.rarity === Rarity.Promo ? duplicate.rarity : card.rarity;
    duplicate.rarities = rarities;
    duplicate.restrictedFormats = restrictedFormats;
    duplicate.setIdentifiers = setIdentifiers;
    duplicate.sets = sets;
    duplicate.specialImage = specialImage;
  } else {
    deduplicatedCards.push(card);
  }
});

spoiledCards2.forEach((card) => {
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
    const specialImage = getSpecialImage(
      card.name,
      card.cardIdentifier,
      deduplicatedPrintings
    );
    const rarities = Array.from(
      new Set([...duplicate.rarities, ...card.rarities])
    ).sort();
    const restrictedFormats = duplicate.restrictedFormats;
    const setIdentifiers = Array.from(
      new Set([...duplicate.setIdentifiers, ...card.setIdentifiers])
    ).sort();
    const sets = Array.from(new Set([...duplicate.sets, ...card.sets])).sort();

    duplicate.artists = artists;
    duplicate.defaultImage = defaultImage;
    duplicate.printings = deduplicatedPrintings;
    duplicate.rarity =
      card.rarity === Rarity.Promo ? duplicate.rarity : card.rarity;
    duplicate.rarities = rarities;
    duplicate.restrictedFormats = restrictedFormats;
    duplicate.setIdentifiers = setIdentifiers;
    duplicate.sets = sets;
    duplicate.specialImage = specialImage;
  } else {
    deduplicatedCards.push(card);
  }
});

export const spoiledCards = deduplicatedCards;
