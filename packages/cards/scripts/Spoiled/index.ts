import { PreliminaryCard } from "../Shared/preliminary-card";
import { mapCSV } from "./mapper";
import { parseCSV, ParsedCard } from "./parser";
import { filterOutUnwantedCards } from "../Shared";
import { Rarity } from "@flesh-and-blood/types";
import { getPrint } from "@flesh-and-blood/types";
import { combineAndAddMissingFields } from "../Shared/combined-and-missing-fields";
import { getDefaultPrinting } from "@flesh-and-blood/types";
import { getSpecialPrinting } from "@flesh-and-blood/types";

const spoiledSetCardsFileAMA = `${__dirname}/Flesh and Blood Spoiler Card Data - AMA.csv`;
const spoiledSetCardsFileIAR = `${__dirname}/Flesh and Blood Spoiler Card Data - IAR.csv`;
const spoiledSetCardsFileSPW = `${__dirname}/Flesh and Blood Spoiler Card Data - SPW.csv`;
const spoiledSetCardsFileAMO = `${__dirname}/Flesh and Blood Spoiler Card Data - AMO.csv`;
const spoiledSetCardsFileMPA = `${__dirname}/Flesh and Blood Spoiler Card Data - MPA.csv`;
const spoiledPromoCardsFile = `${__dirname}/Flesh and Blood Spoiler Card Data - Promos.csv`;
const spoiledSAGECardsFile = `${__dirname}/Flesh and Blood Spoiler Card Data - SAGE.csv`;

const spoiledGEMCardsFile = `${__dirname}/Flesh and Blood Spoiler Card Data - GEM.csv`;
const spoiledTournamentPackCardsFile = `${__dirname}/Flesh and Blood Spoiler Card Data - TNP.csv`;

const parsedSpoiledSetCards: ParsedCard[] = (
  [
    ...parseCSV(spoiledSetCardsFileAMA),
    ...parseCSV(spoiledSetCardsFileIAR),
    ...parseCSV(spoiledSetCardsFileSPW),
    ...parseCSV(spoiledSetCardsFileAMO),
    ...parseCSV(spoiledSetCardsFileMPA),
  ] as ParsedCard[]
)
  .filter((card) => !!card.name)
  .filter(filterOutUnwantedCards);
const spoiledSetCards = mapCSV(parsedSpoiledSetCards);

const parsedSpoiledPromoAndGemCards = (
  [
    ...parseCSV(spoiledPromoCardsFile),
    ...parseCSV(spoiledGEMCardsFile),
    ...parseCSV(spoiledSAGECardsFile),
    ...parseCSV(spoiledTournamentPackCardsFile),
  ] as ParsedCard[]
)
  .filter((card) => !!card.name)
  .filter(filterOutUnwantedCards);
const spoiledPromoCards: PreliminaryCard[] = mapCSV(
  parsedSpoiledPromoAndGemCards,
);

const deduplicatedCards: PreliminaryCard[] = [];

spoiledSetCards.forEach((card) => {
  const duplicate = deduplicatedCards.find(
    ({ cardIdentifier }) => cardIdentifier === card.cardIdentifier,
  );
  if (duplicate) {
    // console.debug(
    //   `Found duplicate card (re-released in new set), combining data`,
    //   card.cardIdentifier
    // );

    const artists = Array.from(
      new Set([...duplicate.artists, ...card.artists]),
    ).sort();
    const deduplicatedPrintings = [...duplicate.printings];
    card.printings.forEach((printing) => {
      const duplicate = deduplicatedPrintings.find(
        (deduplicatedPrinting) =>
          getPrint(deduplicatedPrinting) === getPrint(printing),
      );
      if (!duplicate) {
        deduplicatedPrintings.push(printing);
      }
    });

    const defaultImage = getDefaultPrinting(card, deduplicatedPrintings)?.image;
    const specialImage = getSpecialPrinting(card, deduplicatedPrintings)?.image;
    const rarities = Array.from(
      new Set([...duplicate.rarities, ...card.rarities]),
    ).sort();
    const restrictedFormats = duplicate.restrictedFormats;
    const setIdentifiers = Array.from(
      new Set([...duplicate.setIdentifiers, ...card.setIdentifiers]),
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

    combineAndAddMissingFields(card, duplicate);
  } else {
    deduplicatedCards.push(card);
  }
});

spoiledPromoCards.forEach((card) => {
  const duplicate = deduplicatedCards.find(
    ({ cardIdentifier }) => cardIdentifier === card.cardIdentifier,
  );
  if (duplicate) {
    // console.debug(
    //   `Found duplicate card (re-released in new set), combining data`,
    //   card.cardIdentifier
    // );

    const artists = Array.from(
      new Set([...duplicate.artists, ...card.artists]),
    ).sort();
    const deduplicatedPrintings = [...duplicate.printings];
    card.printings.forEach((printing) => {
      const duplicate = deduplicatedPrintings.find(
        (deduplicatedPrinting) =>
          getPrint(deduplicatedPrinting) === getPrint(printing),
      );
      if (!duplicate) {
        deduplicatedPrintings.push(printing);
      }
    });
    const defaultImage = getDefaultPrinting(card, deduplicatedPrintings).image;
    const specialImage = getSpecialPrinting(card, deduplicatedPrintings).image;
    const rarities = Array.from(
      new Set([...duplicate.rarities, ...card.rarities]),
    ).sort();
    const restrictedFormats = duplicate.restrictedFormats;
    const setIdentifiers = Array.from(
      new Set([...duplicate.setIdentifiers, ...card.setIdentifiers]),
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

    combineAndAddMissingFields(card, duplicate);
  } else {
    deduplicatedCards.push(card);
  }
});

export const spoiledCards = deduplicatedCards;
