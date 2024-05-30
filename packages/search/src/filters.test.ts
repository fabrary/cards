import { Foiling, Release, Treatment } from "@flesh-and-blood/types";
import { getKeywordsAndAppliedFiltersFromText } from "./filters";
import { cards } from "@flesh-and-blood/cards";

describe("Gets the right attribute filters", () => {
  const foilFilters = [
    ["foiling:r", [Foiling.R]],
    ["foil:cf,g", [Foiling.C, Foiling.G]],
  ];
  it.each(foilFilters)(
    "Gets matching foilings for %s",
    (search, expectedFoilings) => {
      const {
        attributes: { foilings },
      } = getKeywordsAndAppliedFiltersFromText(search as string, cards);
      expect(foilings.length).toEqual(expectedFoilings.length);
      expect(expectedFoilings).toMatchSnapshot();
    }
  );

  const setFilters = [
    ["s:ara", [Release.ArakniBlitzDeck]],
    ["s:welcome", [Release.WelcomeToRathe, Release.IraWelcomeDeck]],
  ];
  it.each(setFilters)("Gets matching sets for %s", (search, sets) => {
    const {
      attributes: { releases },
    } = getKeywordsAndAppliedFiltersFromText(search as string, cards);
    expect(releases.length).toEqual(sets.length);
    expect(releases).toMatchSnapshot();
  });

  const treatmentFilters = [
    ["treatment:ea", [Treatment.EA]],
    ['treat:"alt art",fa', [Treatment.AA, Treatment.FA]],
  ];
  it.each(treatmentFilters)(
    "Gets matching foilings for %s",
    (search, expectedTreatments) => {
      const {
        attributes: { treatments },
      } = getKeywordsAndAppliedFiltersFromText(search as string, cards);
      expect(treatments.length).toEqual(expectedTreatments.length);
      expect(treatments).toMatchSnapshot();
    }
  );
});

describe("Gets the right attribute filters", () => {
  const foilFilters = [
    ["foiling:r", [Foiling.R]],
    ["foil:cf,g", [Foiling.C, Foiling.G]],
  ];
  it.each(foilFilters)(
    "Gets matching foilings for %s",
    (search, expectedFoilings) => {
      const {
        attributes: { foilings },
      } = getKeywordsAndAppliedFiltersFromText(search as string, cards);
      expect(foilings.length).toEqual(expectedFoilings.length);
      expect(expectedFoilings).toMatchSnapshot();
    }
  );

  const setFilters = [
    ["s:ara", [Release.ArakniBlitzDeck]],
    ["s:welcome", [Release.WelcomeToRathe, Release.IraWelcomeDeck]],
  ];
  it.each(setFilters)("Gets matching sets for %s", (search, sets) => {
    const {
      attributes: { releases },
    } = getKeywordsAndAppliedFiltersFromText(search as string, cards);
    expect(releases.length).toEqual(sets.length);
    expect(releases).toMatchSnapshot();
  });

  const treatmentFilters = [
    ["treatment:ea", [Treatment.EA]],
    ['treat:"alt art",fa', [Treatment.AA, Treatment.FA]],
  ];
  it.each(treatmentFilters)(
    "Gets matching foilings for %s",
    (search, expectedTreatments) => {
      const {
        attributes: { treatments },
      } = getKeywordsAndAppliedFiltersFromText(search as string, cards);
      expect(treatments.length).toEqual(expectedTreatments.length);
      expect(treatments).toMatchSnapshot();
    }
  );
});
