import { mapCSV } from "./mapper";
import { parseCSV, ParsedCard } from "./parser";
import { filterOutUnwantedCards, sortPrintingsByReleaseOrder } from "../Shared";
import { Card, Rarity } from "@flesh-and-blood/types";
import { getPrint } from "@flesh-and-blood/types";
import { combineAndAddMissingFields } from "../Shared/combined-and-missing-fields";
import { getDefaultPrinting } from "@flesh-and-blood/types";
import { getSpecialPrinting } from "@flesh-and-blood/types";

const spoiledSetCardsFileAHA = `${__dirname}/Flesh and Blood Spoiler Card Data - AHA.csv`;
const spoiledSetCardsFileAPR = `${__dirname}/Flesh and Blood Spoiler Card Data - APR.csv`;
const spoiledSetCardsFileARR = `${__dirname}/Flesh and Blood Spoiler Card Data - ARR.csv`;
const spoiledSetCardsFileAVS = `${__dirname}/Flesh and Blood Spoiler Card Data - AVS.csv`;
const spoiledSetCardsFileBDD = `${__dirname}/Flesh and Blood Spoiler Card Data - BDD.csv`;
const spoiledGEMCardsFile = `${__dirname}/Flesh and Blood Spoiler Card Data - GEM.csv`;
const spoiledPromoCardsFile = `${__dirname}/Flesh and Blood Spoiler Card Data - Promos.csv`;
const spoiledSAGECardsFile = `${__dirname}/Flesh and Blood Spoiler Card Data - SAGE.csv`;
const spoiledTournamentPackCardsFile = `${__dirname}/Flesh and Blood Spoiler Card Data - TNP.csv`;
const overrideCardsFile = `${__dirname}/overrides.csv`;

const parsedOverrideCards = parseCSV(overrideCardsFile)
  .filter((card) => !!card.name)
  .filter(filterOutUnwantedCards);
const overrideCards = mapCSV(parsedOverrideCards);

const parsedSpoiledSetCards: ParsedCard[] = [
  ...parseCSV(spoiledSetCardsFileAHA),
  ...parseCSV(spoiledSetCardsFileAPR),
  ...parseCSV(spoiledSetCardsFileARR),
  ...parseCSV(spoiledSetCardsFileAVS),
  ...parseCSV(spoiledSetCardsFileBDD),
]
  .filter((card) => !!card.name)
  .filter(filterOutUnwantedCards)
  .filter((card) => {
    const matchingOverride = parsedOverrideCards.some(
      (overrideCard) =>
        card.name === overrideCard.name && card.pitch === overrideCard.pitch,
    );
    return !matchingOverride;
  });
const spoiledSetCards = mapCSV(parsedSpoiledSetCards);

const parsedSpoiledPromoAndGemCards = [
  ...parseCSV(spoiledPromoCardsFile),
  ...parseCSV(spoiledGEMCardsFile),
  ...parseCSV(spoiledSAGECardsFile),
  ...parseCSV(spoiledTournamentPackCardsFile),
]
  .filter((card) => !!card.name)
  .filter(filterOutUnwantedCards)
  .filter((card) => {
    const matchingOverride = parsedOverrideCards.some(
      (overrideCard) =>
        card.name === overrideCard.name && card.pitch === overrideCard.pitch,
    );
    return !matchingOverride;
  });
const spoiledPromoCards: Card[] = mapCSV(parsedSpoiledPromoAndGemCards);

const deduplicatedCards: Card[] = [...overrideCards];

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
    deduplicatedPrintings.sort(sortPrintingsByReleaseOrder);

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
    deduplicatedPrintings.sort(sortPrintingsByReleaseOrder);
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
