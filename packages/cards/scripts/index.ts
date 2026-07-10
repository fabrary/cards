import { PreliminaryCard } from "./Shared/preliminary-card";
import {
  Card,
  Foiling,
  getIsDeckCard,
  Printing,
  Rarity,
  Release,
  releases,
  ReleaseType,
  setToSetIdentifierMappings,
  Treatment,
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
  getConfirmedBannedAndLegalFormats,
  getLegalHeroes,
} from "./Shared/legality";
import { getShorthands } from "./Shared/get-shorthands";
import { getNicknames } from "./Shared/get-nicknames";
import { getShortName } from "./Shared/get-short-names";
import { getFirstReleaseDate } from "./Shared/get-first-release-date";
import { getTCGplayerInfoForAddedPrinting } from "./Shared/tcgplayer";

const outputDirectory = "src";

const deduplicatedCards: PreliminaryCard[] = [...spoiledCards];

// Index by cardIdentifier so each released card is matched in O(1) instead of
// scanning the whole (growing) deduplicated list. First-write-wins mirrors the
// previous Array.find, which returned the first match.
const cardsByIdentifier = new Map<string, PreliminaryCard>();
for (const card of deduplicatedCards) {
  if (!cardsByIdentifier.has(card.cardIdentifier)) {
    cardsByIdentifier.set(card.cardIdentifier, card);
  }
}

releasedCards.forEach((card) => {
  const duplicate = cardsByIdentifier.get(card.cardIdentifier);
  if (duplicate) {
    // console.debug(
    //   `Found duplicate card (re-released in new set), combining data`,
    //   card.cardIdentifier
    // );

    const arcane = duplicate.arcane || card.arcane || undefined;

    const artists = Array.from(
      new Set([...duplicate.artists, ...card.artists]),
    ).sort();
    const deduplicatedPrintings = duplicate.printings.map((printing) => {
      if (!printing.rarity) {
        printing.rarity = card.rarity;
      }
      if (!printing.artists || printing.artists.length === 0) {
        if (card.artists.length === 1) {
          printing.artists = [...card.artists];
        } else {
          const standardArtArtistsSet = new Set<string>();
          const standardArtPrintings = card.printings.filter(
            ({ treatments }) =>
              !treatments || !treatments.includes(Treatment.AA),
          );

          for (const { artists } of standardArtPrintings) {
            for (const artist of artists) {
              standardArtArtistsSet.add(artist);
            }
          }
          const standardArtArtists = Array.from(standardArtArtistsSet);

          if (standardArtArtists.length === 1) {
            printing.artists = [standardArtArtists[0]];
          }
        }
      }
      return { ...printing };
    });
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
    const combinedFusions = Array.from(
      new Set([...(duplicate.fusions || []), ...(card.fusions || [])]),
    );
    const fusions = combinedFusions.length > 0 ? combinedFusions : undefined;

    const combinedFlows = Array.from(
      new Set([...(duplicate.flows || []), ...(card.flows || [])]),
    );
    const flows = combinedFlows.length > 0 ? combinedFlows : undefined;

    const defaultImage = getDefaultPrinting(card, deduplicatedPrintings)?.image;
    const specialImage = getSpecialPrinting(card, deduplicatedPrintings)?.image;
    const rarities = Array.from(
      new Set([...duplicate.rarities, ...card.rarities]),
    ).sort();
    const restrictedFormats = card.restrictedFormats;
    const setIdentifiers = Array.from(
      new Set([...duplicate.setIdentifiers, ...card.setIdentifiers]),
    ).sort();
    const sets = Array.from(new Set([...duplicate.sets, ...card.sets])).sort();

    const legalFormats = Array.from(
      new Set([...duplicate.legalFormats, ...card.legalFormats]),
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
    const printings = card.printings;
    printings.sort(sortPrintingsByReleaseOrder);

    const defaultImage = getDefaultPrinting(card, printings)?.image;
    const specialImage = getSpecialPrinting(card, printings)?.image;

    card.printings = printings;
    card.defaultImage = defaultImage;
    card.specialImage = specialImage;

    deduplicatedCards.push(card);
    cardsByIdentifier.set(card.cardIdentifier, card);
  }
});

// Precompute how many cards share each name (used to detect 3-pitch "rainbow"
// cards) so getMeta doesn't filter the full list per card.
const cardCountsByName = new Map<string, number>();
for (const { name } of deduplicatedCards) {
  cardCountsByName.set(name, (cardCountsByName.get(name) || 0) + 1);
}

const cardsWithAdditionalProperties = deduplicatedCards.map((card) => {
  const { bannedFormats, legalFormats } =
    getConfirmedBannedAndLegalFormats(card);
  const legalHeroes = getLegalHeroes(card);
  const meta = getMeta(card, cardCountsByName);
  const nicknames = getNicknames(card);
  const shorthands = getShorthands(card);
  const shortName = getShortName(card);

  return {
    ...card,
    firstReleaseDate: getFirstReleaseDate(card),
    legalFormats,
    legalHeroes,
    meta,
    nicknames,
    shorthands,
    shortName,
  };
});

const latestSet = releases
  .reverse()
  .find(({ releaseType }) => releaseType === ReleaseType.StandaloneBooster)
  ?.release as Release;
const latestSetPrefix =
  setToSetIdentifierMappings[latestSet]?.length > 0
    ? setToSetIdentifierMappings[latestSet][0].toUpperCase()
    : undefined;

const getLatestSetCards = ({ printings, sets }: Card) => {
  const isInLatestSet = sets.includes(latestSet);
  const hasImagesFromLatestSet =
    printings.filter(({ set }) => set === latestSet).length > 0;

  return isInLatestSet && hasImagesFromLatestSet;
};

const latestSetCards = cardsWithAdditionalProperties.filter(getLatestSetCards);

let shouldAddRainbowFoilsToLatestSet = false;
const shouldCheckLatestSetForRainbowFoils = !!latestSetPrefix;
// every card from latest set is present
// rainbow foils haven't already been added
if (shouldCheckLatestSetForRainbowFoils) {
  let latestSetCardIdentifiers: { [key: string]: number } = {};

  for (const latestSetCard of latestSetCards) {
    const latestSetIdentifier = latestSetCard.setIdentifiers.find(
      (setIdentifier) => setIdentifier.startsWith(latestSetPrefix),
    );

    if (latestSetIdentifier) {
      const setNumberString = latestSetIdentifier.replace(latestSetPrefix, "");
      const setNumber = parseInt(setNumberString);

      latestSetCardIdentifiers[latestSetIdentifier] = setNumber;
    }
  }

  const setNumbers = Object.values(latestSetCardIdentifiers).sort(
    (a, b) => a - b,
  );

  shouldAddRainbowFoilsToLatestSet = setNumbers.every(
    (setNumber, index) => setNumber === index,
  );
}

let cardsToWrite = cardsWithAdditionalProperties;

if (shouldAddRainbowFoilsToLatestSet) {
  cardsToWrite = cardsWithAdditionalProperties.map((card) => {
    const printings = [...card.printings];

    const isLatestSetCardOnly = card.sets.every(
      (set) => set === latestSet || set === Release.Promos,
    );
    const latestSetPrintings = card.printings.filter(
      ({ set }) => set === latestSet,
    );
    const isMissingRainbowFoilPrinting = !latestSetPrintings.some(
      ({ foiling }) => foiling === Foiling.Rainbow,
    );
    const onlyHasNonFoilPrintings = latestSetPrintings.every(
      ({ foiling }) => !foiling,
    );
    const isDeckCard = getIsDeckCard(card);

    const shouldAddRainbowFoilPrinting =
      isLatestSetCardOnly &&
      isMissingRainbowFoilPrinting &&
      latestSetPrintings.length > 0 &&
      onlyHasNonFoilPrintings &&
      isDeckCard;

    if (shouldAddRainbowFoilPrinting) {
      const latestSetPrinting = latestSetPrintings[0];

      const artists = latestSetPrinting.artists;
      const rarity = latestSetPrinting.rarity || card.rarity;
      const identifier = latestSetPrinting.identifier;
      const image = latestSetPrinting.image + "-RF";

      // TODO add TCGP info if available in card-with-tcgp.json
      const rainbowFoilPrinting: Printing = {
        set: latestSet,
        rarity,
        artists,
        identifier,
        foiling: Foiling.Rainbow,
        image,
        print: "",
      };

      const print = getPrint(rainbowFoilPrinting);
      const tcgplayer = getTCGplayerInfoForAddedPrinting(
        card.cardIdentifier,
        card,
        rainbowFoilPrinting,
      );
      rainbowFoilPrinting.print = print;
      rainbowFoilPrinting.tcgplayer = tcgplayer;

      printings.push(rainbowFoilPrinting);
    }

    return { ...card, printings };
  });
}

writeFiles(cardsToWrite, outputDirectory);

const latestSetCardsWithOnlySetPrintings = latestSetCards.map((card) => {
  const printings = card.printings.filter(({ set }) => set === latestSet);

  const defaultPrinting = getDefaultPrinting(card, printings);
  const defaultImage = defaultPrinting?.image;

  const specialPrinting = getSpecialPrinting(card, printings);
  const specialImage = specialPrinting?.image;

  return { ...card, defaultImage, printings, specialImage };
});

writeFiles(latestSetCardsWithOnlySetPrintings, "latest-set");
