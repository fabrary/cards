import { describe, expect, it } from "vitest";
import { Format, Release, ReleaseType, Type } from "@flesh-and-blood/types";
import { cards, releases as publishedReleases } from "../dist/index.js";
import {
  assertReleaseNamesAreUnique,
  releaseBySetIdentifier,
  releaseInfoByRelease,
  releases,
} from "../scripts/Shared/releases.ts";

const heroCardByCardIdentifier = new Map(
  cards
    .filter(({ isCardBack, types }) => types.includes(Type.Hero) && !isCardBack)
    .map((card) => [card.cardIdentifier, card]),
);

describe("Release records", () => {
  it("ship with the cards as the table holds them", () => {
    expect(publishedReleases).toEqual(releases);
  });

  it.each(Object.values(Release))("%s has one record", (release) => {
    const records = releases.filter(
      (releaseInfo) => releaseInfo.release === release,
    );

    expect(records).toHaveLength(1);
  });

  it("have names a set filter tells apart", () => {
    expect(assertReleaseNamesAreUnique).not.toThrow();
  });

  it.each(releases)(
    "$release has lowercase three letter set identifiers",
    ({ release, setIdentifiers }) => {
      expect(setIdentifiers.length).toBeGreaterThan(0);

      for (const setIdentifier of setIdentifiers) {
        expect(setIdentifier).toMatch(/^[a-z0-9]{3}$/);
        expect(releaseBySetIdentifier.get(setIdentifier)).toEqual(release);
      }
    },
  );

  it.each(releases)("$release names hero cards", ({ heroIdentifiers }) => {
    for (const heroIdentifier of heroIdentifiers) {
      expect(heroCardByCardIdentifier.has(heroIdentifier), heroIdentifier).toBe(
        true,
      );
    }
  });

  it.each(releases.filter(({ draft }) => !!draft))(
    "$release drafts with at least one Draft-legal hero card",
    ({ heroIdentifiers }) => {
      const draftHeroIdentifiers = heroIdentifiers.filter((heroIdentifier) =>
        heroCardByCardIdentifier
          .get(heroIdentifier)
          ?.legalFormats.includes(Format.Draft),
      );

      expect(draftHeroIdentifiers.length).toBeGreaterThan(0);
    },
  );

  it.each(releases)(
    "$release has a chapter only as a Silver Age deck",
    ({ chapter, releaseType }) => {
      const isSilverAgeDeck = releaseType === ReleaseType.SilverAgeDeck;

      expect(chapter === undefined || isSilverAgeDeck).toBe(true);
    },
  );

  it.each(releases)(
    "$release lacks a date and count only as a promo",
    ({ cards: cardCount, releaseDate, releaseType }) => {
      const isPromo = releaseType === ReleaseType.Promo;

      expect(releaseDate === undefined).toEqual(isPromo);
      expect(cardCount === undefined).toEqual(isPromo);
    },
  );

  it.each(releases)(
    "$release lists related releases that have records",
    ({ relatedReleases }) => {
      for (const relatedRelease of relatedReleases) {
        expect(releaseInfoByRelease.has(relatedRelease)).toBe(true);
      }
    },
  );
});
