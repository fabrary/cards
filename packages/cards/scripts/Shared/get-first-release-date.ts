import { PreliminaryCard } from "./preliminary-card";
import { releases } from "@flesh-and-blood/types";
import firstReleaseDateOverridesFile from "./first-release-date-overrides.json";

// cardIdentifier -> "YYYY-MM-DD". Fills (or corrects) the first release date for
// cards the set data can't date on its own — chiefly promo-only cards, whose
// only set (Promos/GEM/Tournament Pack) has no releaseDate. Empty values are
// ignored, so the file doubles as a worklist of cards still needing a date.
const firstReleaseDateOverrides = firstReleaseDateOverridesFile as {
  [cardIdentifier: string]: string;
};

// Map each release to its release date so we can find the earliest date any of a
// card's sets came out. Some sets have no releaseDate and are skipped.
const releaseDatesByRelease = new Map(
  releases.map(({ release, releaseDate }) => [release, releaseDate]),
);

// The day a card was first printed, as a YYYY-MM-DD string. An override wins when
// set; otherwise it's the earliest releaseDate across the card's sets
// (releaseDate carries a " 12:00" time we drop). Empty string when neither source
// has a date — add an override entry to fill it (see ../../../docs/cards).
export const getFirstReleaseDate = ({
  cardIdentifier,
  sets,
}: PreliminaryCard): string => {
  const override = firstReleaseDateOverrides[cardIdentifier];
  if (override) {
    return override;
  }

  const dates = sets
    .map((set) => releaseDatesByRelease.get(set))
    .filter((releaseDate): releaseDate is string => !!releaseDate)
    .map((releaseDate) => releaseDate.split(" ")[0]);
  return dates.sort()[0] ?? "";
};
