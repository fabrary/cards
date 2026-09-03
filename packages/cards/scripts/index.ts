import { PreliminaryCard } from "./Shared/preliminary-card";
import {
  Card,
  Foiling,
  getIsDeckCard,
  Hero,
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
import {
  assertPrintsAreUnique,
  getMeta,
  sortPrintingsByReleaseOrder,
} from "./Shared";
import {
  getConfirmedBannedAndLegalFormats,
  getLegalHeroesByCard,
} from "./Shared/legality";
import { CardRelations, getCardRelations } from "./Shared/get-card-relations";
import { getShorthands } from "./Shared/get-shorthands";
import { getNicknames } from "./Shared/get-nicknames";
import { getShortName } from "./Shared/get-short-names";
import { getFirstReleaseDate } from "./Shared/get-first-release-date";
import { getTCGplayerInfoForAddedPrinting } from "./Shared/tcgplayer";

const outputDirectory = "src";

// Both sources are checked before the merge, which matches printings on print and so
// cannot tell a collision from the same print described twice.
assertPrintsAreUnique({
  "Spoiled cards": spoiledCards,
  "Released cards": releasedCards,
});

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

    const artists = Array.from(
      new Set([...duplicate.artists, ...card.artists]),
    ).sort();
    const deduplicatedPrintings = duplicate.printings.map((printing) => {
      if (!printing.rarity && card.rarity) {
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
    // The two sources describe the same physical print in different detail, so they
    // are matched on print rather than on full printing identity.
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

// Both relations read the whole card list, so they are computed once up front
// rather than per card.
const relationsByCardIdentifier = getCardRelations(deduplicatedCards);
const cardsWithRelations = deduplicatedCards.map((card) => ({
  ...card,
  ...(relationsByCardIdentifier.get(card.cardIdentifier) as CardRelations),
}));

// Which heroes may run a created extra follows from what the rest of their pool
// puts into play, so hero legality reads the whole card list at once.
const legalHeroesByCardIdentifier = getLegalHeroesByCard(cardsWithRelations);

const cardsWithAdditionalProperties = cardsWithRelations.map((card) => {
  const { bannedFormats, legalFormats } =
    getConfirmedBannedAndLegalFormats(card);
  const legalHeroes = legalHeroesByCardIdentifier.get(
    card.cardIdentifier,
  ) as Hero[];
  const meta = getMeta(card, cardCountsByName);
  const nicknames = getNicknames(card);
  const shorthands = getShorthands(card);
  const shortName = getShortName(card);

  return {
    ...card,
    firstReleaseDate: getFirstReleaseDate(card),
    bannedFormats,
    legalFormats,
    legalHeroes,
    meta,
    nicknames,
    shorthands,
    shortName,
  };
});

// A card still missing a rarity here was never matched to a released
// printing, and a generated file with a hole in it is worse than no file.
const completedCards: Card[] = [];
for (const card of cardsWithAdditionalProperties) {
  const { rarity } = card;
  if (rarity) {
    completedCards.push({ ...card, rarity });
  } else {
    throw new Error(`No rarity for ${card.cardIdentifier}`);
  }
}

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

const latestSetCards = completedCards.filter(getLatestSetCards);

let shouldAddRainbowFoilsToLatestSet = false;
const shouldCheckLatestSetForRainbowFoils = !!latestSetPrefix;
// every card from latest set is present
// rainbow foils haven't already been added
if (shouldCheckLatestSetForRainbowFoils) {
  const latestSetCardIdentifiers: { [key: string]: number } = {};

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

let cardsToWrite = completedCards;

if (shouldAddRainbowFoilsToLatestSet) {
  cardsToWrite = completedCards.map((card) => {
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
