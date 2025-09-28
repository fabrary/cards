import {
  Card,
  Format,
  Rarity,
  Release,
  ReleaseInfo,
  releases,
  ReleaseType,
} from "@flesh-and-blood/types";
import { writeFiles } from "./writer";
import { spoiledCards } from "./Spoiled";
import { releasedCards } from "./Released";
import {
  getDefaultPrinting,
  getPrint,
  getSpecialPrinting,
} from "@flesh-and-blood/types";
import { combineAndAddMissingFields } from "./Shared/combined-and-missing-fields";
import { getMeta, sortPrintingsByReleaseOrder } from "./Shared";
import {
  getConfirmedLegalFormats,
  getLegalFormats,
  getLegalHeroes,
  getLegalOverrides,
} from "./Shared/legality";
import { getShorthands } from "./Shared/get-shorthands";
import { getNicknames } from "./Shared/get-nicknames";
import { getShortName } from "./Shared/get-short-names";

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

    const arcane = duplicate.arcane || card.arcane || undefined;

    const artists = Array.from(
      new Set([...duplicate.artists, ...card.artists])
    ).sort();
    const deduplicatedPrintings = duplicate.printings.map((printing) => {
      if (!printing.rarity) {
        printing.rarity = card.rarity;
      }
      if (!printing.artists || printing.artists.length === 0) {
        if (card.artists.length === 1) {
          printing.artists = [...card.artists];
        }
      }
      return { ...printing };
    });
    card.printings.forEach((printing) => {
      const duplicate = deduplicatedPrintings.find(
        (deduplicatedPrinting) =>
          getPrint(deduplicatedPrinting) === getPrint(printing)
      );
      if (!duplicate) {
        deduplicatedPrintings.push(printing);
      }
    });
    deduplicatedPrintings.sort(sortPrintingsByReleaseOrder);
    const combinedFusions = Array.from(
      new Set([...(duplicate.fusions || []), ...(card.fusions || [])])
    );
    const fusions = combinedFusions.length > 0 ? combinedFusions : undefined;

    const combinedFlows = Array.from(
      new Set([...(duplicate.flows || []), ...(card.flows || [])])
    );
    const flows = combinedFlows.length > 0 ? combinedFlows : undefined;

    const defaultImage = getDefaultPrinting(card, deduplicatedPrintings).image;
    const specialImage = getSpecialPrinting(card, deduplicatedPrintings).image;
    const rarities = Array.from(
      new Set([...duplicate.rarities, ...card.rarities])
    ).sort();
    const restrictedFormats = card.restrictedFormats;
    const setIdentifiers = Array.from(
      new Set([...duplicate.setIdentifiers, ...card.setIdentifiers])
    ).sort();
    const sets = Array.from(new Set([...duplicate.sets, ...card.sets])).sort();

    const legalFormats = Array.from(
      new Set([...duplicate.legalFormats, ...card.legalFormats])
    ).sort();
    duplicate.legalFormats = legalFormats;

    // duplicate.arcane = arcane;
    duplicate.artists = artists;
    duplicate.defaultImage = defaultImage;
    // duplicate.flows = flows;
    duplicate.fusions = fusions;
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

const cardsWithAdditionalProperties = deduplicatedCards.map((card) => {
  const legalFormats = getConfirmedLegalFormats(card);
  const legalHeroes = getLegalHeroes(card);
  const legalOverrides = getLegalOverrides(card, legalHeroes);
  const meta = getMeta(card, deduplicatedCards);
  const nicknames = getNicknames(card);
  const shorthands = getShorthands(card);
  const shortName = getShortName(card);

  return {
    ...card,
    legalFormats,
    legalHeroes,
    legalOverrides,
    meta,
    nicknames,
    shorthands,
    shortName,
  };
});

writeFiles(cardsWithAdditionalProperties, outputDirectory);

const latestSet = releases
  .reverse()
  .find(({ releaseType }) => releaseType === ReleaseType.StandaloneBooster)
  ?.release as Release;

const latestSetCards = cardsWithAdditionalProperties.filter(
  ({ printings, sets }) => {
    const isInLatestSet = sets.includes(latestSet);
    const hasImagesFromLatestSet =
      printings.filter(({ set }) => set === latestSet).length > 0;

    return isInLatestSet && hasImagesFromLatestSet;
  }
);

const latestSetCardsWithOnlySetPrintings = latestSetCards.map((card) => {
  const printings = card.printings.filter(({ set }) => set === latestSet);

  const defaultPrinting = getDefaultPrinting(card, printings);
  const defaultImage = defaultPrinting?.image;

  const specialPrinting = getSpecialPrinting(card, printings);
  const specialImage = specialPrinting?.image;

  return { ...card, defaultImage, printings, specialImage };
});

writeFiles(latestSetCardsWithOnlySetPrintings, "latest-set");
