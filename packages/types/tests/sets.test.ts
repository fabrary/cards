import { describe, expect, it } from "@jest/globals";
import { Release } from "../src/interfaces";
import {
  fullSetIdentifiers,
  releases,
  setIdentifierToSetMappings,
  setToSetIdentifierMappings,
} from "../src/sets";

describe("Check for set identifiers", () => {
  it.each(Object.values(Release))("%s has set identifiers", (release) => {
    const setIdentifiers = setToSetIdentifierMappings[release];
    expect(setIdentifiers).toBeTruthy();
    expect(setIdentifiers?.length).toBeGreaterThan(0);
  });
});

const UNKNOWN_SET_IDENTIFIER = "zzz";
const UNKNOWN_RELEASE = "Unreleased Set";

describe("Lookups on an identifier that isn't a set", () => {
  it("resolves to nothing", () => {
    expect(fullSetIdentifiers[UNKNOWN_SET_IDENTIFIER]).toBeUndefined();
    expect(setIdentifierToSetMappings[UNKNOWN_SET_IDENTIFIER]).toBeUndefined();
    expect(setToSetIdentifierMappings[UNKNOWN_RELEASE]).toBeUndefined();
  });

  // The typecheck run is the assertion: each binding is rejected until the
  // lookup's value type admits the miss these tables answer with.
  it("is typed as a miss", () => {
    // @ts-expect-error a lookup that can miss doesn't hand back a Release
    const fullSet: Release = fullSetIdentifiers[UNKNOWN_SET_IDENTIFIER];
    // @ts-expect-error a lookup that can miss doesn't hand back a Release
    const set: Release = setIdentifierToSetMappings[UNKNOWN_SET_IDENTIFIER];
    // @ts-expect-error a lookup that can miss doesn't hand back set identifiers
    const setIdentifiers: string[] =
      setToSetIdentifierMappings[UNKNOWN_RELEASE];

    void fullSet;
    void set;
    void setIdentifiers;
  });
});

const RELEASES_TO_EXCLUDE = [
  Release.GEM,
  Release.Promos,
  Release.TournamentPack,
  Release.BravoHeroDeck,
  Release.RhinarHeroDeck,
  Release.KatsuHeroDeck,
  Release.DorintheaHeroDeck,
];
const RELEASES_WITH_INFO = Object.values(Release).filter(
  (release) => !RELEASES_TO_EXCLUDE.includes(release),
);

describe("Completeness of set data", () => {
  it.each(RELEASES_WITH_INFO)("%s has complete set data", (release) => {
    const releaseInfo = releases.find(
      (releaseInfo) => releaseInfo.release === release,
    );
    expect(releaseInfo).toBeTruthy();

    if (releaseInfo) {
      expect(releaseInfo.setIdentifiers.length).toBeGreaterThan(0);

      for (const setIdentifier of releaseInfo.setIdentifiers) {
        expect(setIdentifier).toHaveLength(3);

        const matchingFromExisting = setIdentifierToSetMappings[setIdentifier];
        expect(matchingFromExisting).toEqual(release);
      }
    }
  });
});
