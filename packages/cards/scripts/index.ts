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
import { getLegalHeroes, getLegalOverrides } from "./Shared/legality";

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

const cardsWithMetaValues = deduplicatedCards.map((card) => {
  const meta = getMeta(card, deduplicatedCards);

  return { ...card, meta };
});

const releaseInfoForLimitedFormat = releases.filter(
  ({ releaseType }) => releaseType === ReleaseType.StandaloneBooster
);
const limitedFormatReleases = releaseInfoForLimitedFormat.map(
  ({ release }) => release
);

const cardsWithLegalFormats = cardsWithMetaValues.map((card) => {
  const legalFormats = card.legalFormats.filter((format) => {
    let isConfirmedLegal = true;

    const isLimited = [Format.Draft, Format.Sealed].includes(format);
    if (isLimited) {
      const coreSetsCardIsIn = releaseInfoForLimitedFormat.filter(
        ({ release }) => card.sets.includes(release)
      );
      const isInAtLeastOneLimitedSet = coreSetsCardIsIn.length > 0;
      isConfirmedLegal = isInAtLeastOneLimitedSet;

      // Make sure card isn't an expansion card in every core set it's in
      const cardIsAnExpansionCardInEveryLimitedSet = card.printings.every(
        ({ isExpansionSlot, set }) => {
          const isCoreSet = limitedFormatReleases.includes(set);

          return isCoreSet ? isExpansionSlot : true;
        }
      );
      isConfirmedLegal = !cardIsAnExpansionCardInEveryLimitedSet;

      if (isConfirmedLegal) {
        const rarityRestrictionsFromSets = coreSetsCardIsIn.map(
          ({ raritiesExcludedInLimited }) => raritiesExcludedInLimited
        );

        if (rarityRestrictionsFromSets.length > 0) {
          let rarityRestrictionsAreEqual = true;
          const firstRarityRestrictions = rarityRestrictionsFromSets[0]
            ?.sort()
            .join() as string;
          for (const rarityRestrictions of rarityRestrictionsFromSets) {
            if (rarityRestrictions) {
              const matches =
                firstRarityRestrictions === rarityRestrictions.sort().join();
              if (!matches) {
                rarityRestrictionsAreEqual = false;
                break;
              }
            } else {
              rarityRestrictionsAreEqual = false;
              break;
            }
          }

          if (rarityRestrictionsAreEqual) {
            // check that matches rarity restrictions
            const cardViolatesRarityRestrictions = card.rarities
              .filter(
                (rarity) => ![Rarity.Promo, Rarity.Marvel].includes(rarity)
              )
              .every((rarity) =>
                rarityRestrictionsFromSets[0]?.includes(rarity)
              );
            if (cardViolatesRarityRestrictions) {
              isConfirmedLegal = false;
            }
          }
        }
      }
    }

    return isConfirmedLegal;
  });

  return { ...card, legalFormats };
});

const cardsWithLegalHeroes = cardsWithLegalFormats.map((card) => {
  const legalHeroes = getLegalHeroes(card);

  const legalOverrides = getLegalOverrides(card, legalHeroes);

  return { ...card, legalHeroes, legalOverrides };
});

// const cardsWithMetaValues = cardsWithLegalFormats.map((card) => {
//   const meta = getMeta(card, cardsWithLegalFormats);

//   return { ...card, meta };
// });

writeFiles(cardsWithLegalHeroes, outputDirectory);

const latestSet = releases
  .reverse()
  .find(({ releaseType }) => releaseType === ReleaseType.StandaloneBooster)
  ?.release as Release;

const latestSetCards = cardsWithLegalHeroes.filter(({ printings, sets }) => {
  const isInLatestSet = sets.includes(latestSet);
  const hasImagesFromLatestSet =
    printings.filter(({ set }) => set === latestSet).length > 0;

  return isInLatestSet && hasImagesFromLatestSet;
});

const latestSetCardsWithOnlySetPrintings = latestSetCards.map((card) => {
  const printings = card.printings.filter(({ set }) => set === latestSet);

  const defaultPrinting = getDefaultPrinting(card, printings);
  const defaultImage = defaultPrinting.image;

  const specialPrinting = getSpecialPrinting(card, printings);
  const specialImage = specialPrinting.image;

  return { ...card, defaultImage, printings, specialImage };
});

writeFiles(latestSetCardsWithOnlySetPrintings, "latest-set");
