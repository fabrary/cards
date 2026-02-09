import { Release } from "../src/interfaces";
import {
  releases,
  setIdentifierToSetMappings,
  setToSetIdentifierMappings,
} from "../src/sets";

describe("Check for set identifiers", () => {
  it.each(Object.values(Release))("%s has set identifiers", (release) => {
    const setIdentifiers = setToSetIdentifierMappings[release];
    expect(setIdentifiers).toBeTruthy();
    expect(setIdentifiers.length).toBeGreaterThan(0);
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
