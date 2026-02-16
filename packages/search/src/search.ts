import {
  Card,
  DoubleSidedCard,
  Foiling,
  Format,
  Hero,
  Printing,
  Rarity,
  Release,
  setIdentifierToSetMappings,
  setToSetIdentifierMappings,
  Treatment,
  Type,
} from "@flesh-and-blood/types";
import Fuse from "fuse.js";
import { PUNCTUATION } from "./constants";
import {
  AppliedFilter,
  getKeywordsAndAppliedFiltersFromText,
  SpecialConditions,
} from "./filters";
import { memes } from "./memes";
import { getNormalizedText } from "./helpers";
import { FilterProperty } from "./metaFilters";

export interface SearchCard extends DoubleSidedCard {
  matchingPrintings?: Printing[];
}

export interface SearchResults {
  appliedFilters: AppliedFilter[];
  keywords: string[];
  attributes: {
    artists: string[];
    foilings: Foiling[];
    prints: string[];
    releases: Release[];
    treatments: Treatment[];
  };
  searchResults: SearchCard[];
}

class Search {
  private additionalHeroes: Hero[];
  private additionalSets: Release[];
  private cards: DoubleSidedCard[];
  private debug: boolean;
  private fuse: Fuse<Card>;

  constructor(
    cards: DoubleSidedCard[],
    additionalHeroes: Hero[] = [],
    additionalSets: Release[] = [],
    debug: boolean = false,
  ) {
    const searchOptions = {
      getFn: (obj: DoubleSidedCard, path) => {
        // Use the default `get` function
        const value = Fuse.config.getFn(obj, path);
        if (!value) {
          return value;
        } else if (Array.isArray(value)) {
          return value.map((val) =>
            getNormalizedText(val.replace(PUNCTUATION, "")),
          );
        } else {
          return getNormalizedText(value as string).replace(PUNCTUATION, "");
        }
      },
      ignoreLocation: true,
      includeScore: true,
      keys: [
        { name: "name", weight: 10 },
        { name: "functionalText", weight: 6 },
        { name: "shorthands", weight: 4 },
        { name: "setIdentifiers", weight: 2 },
        { name: "traits", weight: 4 },
        { name: "typeText", weight: 6 },
      ],
      threshold: 0.15,
      useExtendedSearch: true,
    };

    this.additionalHeroes = additionalHeroes;
    this.additionalSets = additionalSets;
    this.cards = [...cards];
    this.debug = debug;
    this.fuse = new Fuse([...cards], searchOptions);
  }

  log = (message?: any, ...optionalParams: any[]) => {
    if (this.debug) {
      console.log(message, ...optionalParams);
    }
  };

  search = (text: string, includeMemes?: boolean): SearchResults => {
    let results: DoubleSidedCard[];

    const { appliedFilters, attributes, keywords } =
      getKeywordsAndAppliedFiltersFromText(
        text,
        this.cards,
        this.additionalHeroes,
        this.additionalSets,
      );

    const keyword = keywords.join(" ");
    const matchingMemes = includeMemes
      ? memes.filter((meme) => meme.keyword === keyword)
      : [];

    if (matchingMemes.length > 0) {
      results = matchingMemes.map(({ card }) => card);
    } else if (keywords.length) {
      results = this.fuse.search(keyword).map((result) => result.item);
    } else {
      results = [...this.cards];
    }
    if (appliedFilters.length) {
      results = results.filter(
        (card) => card && filterCard(card, appliedFilters),
      );
    }

    if (keywords.length === 0) {
      // If filtering on set without any keywords then sort by set by default
      // If there's also no set filter then sort alphabetically
      let setIdentifieToSortBy = "";

      const shouldSortByRelease = attributes.releases.length === 1;
      if (shouldSortByRelease) {
        try {
          const setToSort = attributes.releases[0];
          const matchingSetIdentifiers = setToSetIdentifierMappings[setToSort];
          setIdentifieToSortBy = matchingSetIdentifiers[0].toUpperCase();
        } catch (e) {
          console.error(`Error getting set identifier from search`, e);
        }
      }

      const shouldSortByPrint =
        !setIdentifieToSortBy && attributes.prints.length === 1;
      if (shouldSortByPrint) {
        try {
          const setToSort = attributes.prints[0];
          const matchingSetIdentifiers = setIdentifierToSetMappings[setToSort];
          if (matchingSetIdentifiers) {
            setIdentifieToSortBy = setToSort.toUpperCase();
          }
        } catch (e) {
          console.error(`Error getting set identifier from search`, e);
        }
      }

      if (setIdentifieToSortBy) {
        results.sort((c1, c2) => {
          const c1SetNumber = c1.setIdentifiers
            .find((identifier) => identifier.includes(setIdentifieToSortBy))
            ?.replace(setIdentifieToSortBy, "") as string;
          const c2SetNumber = c2.setIdentifiers
            .find((identifier) => identifier.includes(setIdentifieToSortBy))
            ?.replace(setIdentifieToSortBy, "");
          return c1SetNumber && c2SetNumber
            ? c1SetNumber.localeCompare(c2SetNumber)
            : -1;
        });
      } else {
        results.sort((c1, c2) =>
          c1.name === c2.name
            ? `${c1.pitch}`.localeCompare(`${c2.pitch}`)
            : c1.name.localeCompare(c2.name),
        );
      }
    } else {
      const nameMatches: DoubleSidedCard[] = [];
      const nonMatches: DoubleSidedCard[] = [];

      const potentialCardName = keywords
        .map((keyword) => keyword.toLowerCase().replace(PUNCTUATION, ""))
        .join(" ");
      for (const card of results) {
        if (
          card.name.toLowerCase().replace(PUNCTUATION, "") === potentialCardName
        ) {
          nameMatches.push(card);
        } else {
          nonMatches.push(card);
        }
      }
      results = [...nameMatches, ...nonMatches];
    }

    let searchResultsWithMatchingPrinting: SearchCard[];
    const {
      artists,
      isExpansionSlot,
      foilings,
      prints,
      rarities,
      releases,
      treatments,
    } = attributes;

    const shouldFindMatchingPrintings =
      artists.length > 0 ||
      isExpansionSlot ||
      foilings.length > 0 ||
      prints.length > 0 ||
      rarities.length > 0 ||
      releases.length > 0 ||
      treatments.length > 0;

    if (shouldFindMatchingPrintings) {
      searchResultsWithMatchingPrinting = results.map((card) => {
        const matchingPrintings = card.printings.filter((printing) => {
          const hasImage = !!printing.image;
          const matchesArtist =
            artists.length === 0 ||
            artists.some((attributeArtist) =>
              printing.artists.find((artist) =>
                artist
                  .replace(PUNCTUATION, "")
                  .toLowerCase()
                  .includes(attributeArtist),
              ),
            );
          const matchesExpansionSlot =
            (isExpansionSlot || undefined) === printing.isExpansionSlot;

          const matchesFoiling =
            foilings.length === 0 || foilings.includes(printing.foiling);
          const matchesPrint =
            prints.length === 0 ||
            prints.some((print) =>
              printing.identifier.includes(print.toUpperCase()),
            );
          const matchesRarity =
            rarities.length === 0 || rarities.includes(printing.rarity);
          const matchesReleases =
            releases.length === 0 || releases.includes(printing.set);
          const matchesTreatment =
            treatments.length === 0 || treatments.includes(printing.treatment);

          const printMatches =
            hasImage &&
            matchesArtist &&
            matchesExpansionSlot &&
            matchesFoiling &&
            matchesPrint &&
            matchesRarity &&
            matchesReleases &&
            matchesTreatment;

          return printMatches;
        });

        return {
          ...card,
          matchingPrintings,
        };
      });
    }

    const searchResults =
      searchResultsWithMatchingPrinting?.length > 0
        ? searchResultsWithMatchingPrinting
        : results;

    return {
      appliedFilters,
      attributes,
      keywords,
      searchResults,
    };
  };
}

export default Search;

export const filterCard = (
  card: Card,
  appliedFilters: AppliedFilter[],
): boolean => {
  let doesCardMatchAllRequiredFilters = true;
  let doesCardMatchAnyOptionalFilters = false;

  for (const appliedFilter of appliedFilters) {
    const isOptional = appliedFilter.isOptional;
    const { isNumber, isString, isArray, isBoolean } =
      appliedFilter.filterToPropertyMapping;

    if (isNumber) {
      const cardMatchesNumericFilter = getDoesCardMatchNumericFilter(
        card,
        appliedFilter,
      );
      if (isOptional) {
        if (cardMatchesNumericFilter) {
          doesCardMatchAnyOptionalFilters = true;
        }
      } else {
        doesCardMatchAllRequiredFilters =
          doesCardMatchAllRequiredFilters && cardMatchesNumericFilter;
      }
    } else if (isString) {
      const cardMatchesStringFilter = getDoesCardMatchStringFilter(
        card,
        appliedFilter,
      );
      if (isOptional) {
        if (cardMatchesStringFilter) {
          doesCardMatchAnyOptionalFilters = true;
        }
      } else {
        doesCardMatchAllRequiredFilters =
          doesCardMatchAllRequiredFilters && cardMatchesStringFilter;
      }
    } else if (isArray) {
      const cardMatchesArrayFilter = getDoesCardMatchArrayFilter(
        card,
        appliedFilter,
        appliedFilters,
      );
      if (isOptional) {
        if (cardMatchesArrayFilter) {
          doesCardMatchAnyOptionalFilters = true;
        }
      } else {
        doesCardMatchAllRequiredFilters =
          doesCardMatchAllRequiredFilters && cardMatchesArrayFilter;
      }
    } else if (isBoolean) {
      const cardMatchesBooleanFilter = getDoesCardMatchBooleanFilter(
        card,
        appliedFilter,
      );
      if (isOptional) {
        if (cardMatchesBooleanFilter) {
          doesCardMatchAnyOptionalFilters = true;
        }
      } else {
        doesCardMatchAllRequiredFilters =
          doesCardMatchAllRequiredFilters && cardMatchesBooleanFilter;
      }
    }
  }

  return doesCardMatchAllRequiredFilters;
};

const getDoesCardMatchNumericFilter = (
  card: Card,
  filter: AppliedFilter,
): boolean => {
  if (!doesFilterMatchCardType(filter, card)) {
    return true;
  } else {
    const {
      values,
      modifier,
      isExcluded: excluded,
      filterToPropertyMapping: { partialMatch },
    } = filter;
    let cardValue: number = getCardValue(card, filter) as number;
    if (cardValue != null && !isNaN(cardValue as number)) {
      cardValue = parseInt(cardValue as unknown as string) as number;
      if (modifier) {
        switch (modifier) {
          case ">=":
            const isGreatherThanOrEqualTo = values?.some(
              (filterValue) => cardValue >= parseInt(filterValue),
            );
            return excluded
              ? !isGreatherThanOrEqualTo
              : isGreatherThanOrEqualTo;
          case ">":
            const isGreatherThan = values?.some(
              (filterValue) => cardValue > parseInt(filterValue),
            );
            return excluded ? !isGreatherThan : isGreatherThan;
          case "<=":
            const isLessThanOrEqualTo = values?.some(
              (filterValue) => cardValue <= parseInt(filterValue),
            );
            return excluded ? !isLessThanOrEqualTo : isLessThanOrEqualTo;
          case "<":
            const isLessThan = values?.some(
              (filterValue) => cardValue < parseInt(filterValue),
            );
            return excluded ? !isLessThan : isLessThan;
          default:
            return false;
        }
      } else {
        const isEqualTo = values?.some(
          (filterValue) => cardValue === parseInt(filterValue),
        );
        return excluded ? !isEqualTo : isEqualTo;
      }
    } else {
      const cardSpecialValue = getCardSpecialValue(card, filter)?.toLowerCase();
      const isMatch = partialMatch
        ? values?.some((filterValue) => cardSpecialValue?.includes(filterValue))
        : values?.some((filterValue) => cardSpecialValue === filterValue);
      return excluded ? !isMatch : isMatch;
    }
  }
};

const getDoesCardMatchStringFilter = (
  card: Card,
  filter: AppliedFilter,
): boolean => {
  if (!doesFilterMatchCardType(filter, card)) {
    return true;
  } else {
    const {
      values,
      isAnd,
      isExcluded: excluded,
      filterToPropertyMapping: { partialMatch },
    } = filter;
    const cardValue = (getCardValue(card, filter) as string)?.replaceAll(
      PUNCTUATION,
      "",
    );
    if (partialMatch) {
      const isPartialMatch = isAnd
        ? values?.every((filterValue) =>
            cardValue?.toLowerCase().includes(filterValue),
          )
        : values?.some((filterValue) =>
            cardValue?.toLowerCase().includes(filterValue),
          );
      return excluded ? !isPartialMatch : isPartialMatch;
    } else {
      const isFullMatch = isAnd
        ? values?.every(
            (filterValue) => cardValue?.toLowerCase() === filterValue,
          )
        : values?.some(
            (filterValue) => cardValue?.toLowerCase() === filterValue,
          );
      return excluded ? !isFullMatch : isFullMatch;
    }
  }
};

const getDoesCardMatchArrayFilter = (
  card: Card,
  filter: AppliedFilter,
  filters: AppliedFilter[],
): boolean => {
  if (!doesFilterMatchCardType(filter, card)) {
    return true;
  } else {
    const {
      values,
      isAnd,
      isExcluded,
      filterToPropertyMapping: { partialMatch },
    } = filter;
    const cardValues = getCardValues(card, filter, filters).map((value) =>
      value?.replaceAll(PUNCTUATION, ""),
    );

    if (partialMatch) {
      const isPartialMatch = isAnd
        ? values.every((filterValue) =>
            cardValues?.some((cardValue) =>
              cardValue?.toLowerCase().includes(filterValue),
            ),
          )
        : values.some((filterValue) =>
            cardValues?.some((cardValue) =>
              cardValue?.toLowerCase().includes(filterValue),
            ),
          );
      const noValues = cardValues.length === 0;
      return isExcluded ? !isPartialMatch || noValues : isPartialMatch;
    } else {
      const isFullMatch = isAnd
        ? values.every((filterValue) =>
            cardValues?.some(
              (cardValue) => cardValue?.toLowerCase() === filterValue,
            ),
          )
        : values.some((filterValue) =>
            cardValues?.some(
              (cardValue) => cardValue?.toLowerCase() === filterValue,
            ),
          );
      return isExcluded ? !isFullMatch : isFullMatch;
    }
  }
};

const getDoesCardMatchBooleanFilter = (
  card: Card,
  filter: AppliedFilter,
): boolean => {
  if (!doesFilterMatchCardType(filter, card)) {
    return true;
  } else {
    const { isExcluded } = filter;
    const cardValue = getCardValue(card, filter) as boolean;
    return isExcluded ? !cardValue : cardValue;
  }
};

const getCardValue = (
  card: Card,
  appliedFilter: AppliedFilter,
): string | number | string[] | boolean => {
  const { filterToPropertyMapping } = appliedFilter;

  // @ts-ignore
  return card[filterToPropertyMapping.property];
};

const getCardValues = (
  card: Card,
  filter: AppliedFilter,
  filters: AppliedFilter[],
): string[] => {
  const {
    filterToPropertyMapping: {
      isNestedPropertyArray,
      nestedProperty,
      property,
    },
  } = filter;
  const propertyValues = card[property] || [];

  let values: string[] = [];

  const cardHasLegalOverrides =
    Object.keys(card.legalOverrides || {}).length > 0;
  const isCheckingForLegalHeroes =
    filter.filterToPropertyMapping.property === FilterProperty.LegalHeroes;
  const anotherFilterForLegalFormat = filters.find(
    ({ filterToPropertyMapping }) =>
      filterToPropertyMapping.property === FilterProperty.LegalFormats,
  );
  const shouldCheckForLegalOverrides =
    cardHasLegalOverrides &&
    isCheckingForLegalHeroes &&
    !!anotherFilterForLegalFormat;

  if (shouldCheckForLegalOverrides) {
    const valuesSet = new Set<string>();

    for (const { format, heroes } of card.legalOverrides || []) {
      if (anotherFilterForLegalFormat.values.includes(format.toLowerCase())) {
        for (const hero of heroes) {
          valuesSet.add(hero);
        }
      }
    }

    // for (const format of anotherFilterForLegalFormat.values) {
    //   const matchingLegalHeroesOverride = card.legalOverrides[format];

    //   if (
    //     matchingLegalHeroesOverride &&
    //     matchingLegalHeroesOverride.length > 0
    //   ) {
    //     for (const hero of matchingLegalHeroesOverride) {
    //       valuesSet.add(hero);
    //     }
    //   }
    // }
    values = Array.from(valuesSet);
  }

  if (values.length === 0) {
    if (nestedProperty) {
      const valuesSet = new Set<string>();

      for (const rawValue of propertyValues) {
        if (isNestedPropertyArray) {
          const rawValues = (rawValue[nestedProperty] as string[]) || [];

          for (const value of rawValues) {
            valuesSet.add(value);
          }
        } else {
          const value = rawValue[nestedProperty] as string;
          if (value) {
            valuesSet.add(value);
          }
        }
      }

      values = Array.from(valuesSet);
    } else {
      values = propertyValues;
    }
  }

  return values;
};

const getCardSpecialValue = (
  card: Card,
  appliedFilter: AppliedFilter,
): string => {
  const { filterToPropertyMapping } = appliedFilter;
  // @ts-ignore
  return card[filterToPropertyMapping.specialProperty];
};

const doesFilterMatchCardType = (
  { cardTypes }: AppliedFilter,
  { types, subtypes }: Card,
): boolean =>
  !cardTypes ||
  cardTypes?.some(
    (cardType) =>
      types
        .map((type) => type.toLowerCase())
        .includes(cardType.toLowerCase()) ||
      subtypes
        .map((subtype) => subtype.toLowerCase())
        .includes(cardType.toLowerCase()),
  );
