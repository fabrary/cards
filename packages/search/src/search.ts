import {
  Card,
  DoubleSidedCard,
  Foiling,
  Format,
  Hero,
  Printing,
  Rarity,
  Release,
  setToSetIdentifierMappings,
  Treatment,
  Type,
} from "@flesh-and-blood/types";
import Fuse from "fuse.js";
import { clashBannedCards } from "./clash";
import { PUNCTUATION } from "./constants";
import {
  AppliedFilter,
  getKeywordsAndAppliedFiltersFromText,
  SpecialConditions,
} from "./filters";
import { memes } from "./memes";
import { clashSpecializationOverrides } from "./clash";
import { getNormalizedText } from "./helpers";

export interface SearchCard extends DoubleSidedCard {
  matchingPrintings?: Printing[];
}

export interface SearchResults {
  appliedFilters: AppliedFilter[];
  keywords: string[];
  attributes: {
    artists: string[];
    foilings: Foiling[];
    releases: Release[];
    treatments: Treatment[];
  };
  searchResults: SearchCard[];
}

class Search {
  private cards: DoubleSidedCard[];
  private debug: boolean;
  private fuse: Fuse<Card>;

  constructor(cards: DoubleSidedCard[], debug: boolean = false) {
    const searchOptions = {
      getFn: (obj: DoubleSidedCard, path) => {
        // Use the default `get` function
        const value = Fuse.config.getFn(obj, path);
        if (!value) {
          return value;
        } else if (Array.isArray(value)) {
          return value.map((val) =>
            getNormalizedText(val.replace(PUNCTUATION, ""))
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
        { name: "setIdentifiers", weight: 2 },
        { name: "typeText", weight: 6 },
      ],
      threshold: 0.15,
      useExtendedSearch: true,
    };

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

    const { appliedFilters, attributes, keywords, specialConditions } =
      getKeywordsAndAppliedFiltersFromText(text, this.cards);

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
        (card) => card && filterCard(card, appliedFilters, specialConditions)
      );
    }

    if (keywords.length === 0) {
      // If filtering on set without any keywords then sort by set by default
      // If there's also no set filter then sort alphabetically
      let setIdentifieToSortBy = "";
      if (attributes.releases.length === 1) {
        try {
          const setToSort = attributes.releases[0];
          const matchingSetIdentifiers = setToSetIdentifierMappings[setToSort];
          setIdentifieToSortBy = matchingSetIdentifiers[0].toUpperCase();
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
            : c1.name.localeCompare(c2.name)
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
    const { artists, foilings, releases, treatments } = attributes;

    const shouldFindMatchingPrintings =
      artists.length > 0 ||
      foilings.length > 0 ||
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
                  .includes(attributeArtist)
              )
            );
          const matchesFoiling =
            foilings.length === 0 || foilings.includes(printing.foiling);
          const matchesReleases =
            releases.length === 0 || releases.includes(printing.set);
          const matchesTreatment =
            treatments.length === 0 || treatments.includes(printing.treatment);

          const printMatches =
            hasImage &&
            matchesArtist &&
            matchesFoiling &&
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
  specialConditions: SpecialConditions
): boolean => {
  let doesCardMatchFilter = true;

  for (const appliedFilter of appliedFilters) {
    const { isNumber, isString, isArray, isBoolean, property } =
      appliedFilter.filterToPropertyMapping;
    if (isNumber && !doesCardMatchNumericFilter(card, appliedFilter)) {
      doesCardMatchFilter = false;
    } else if (isString && !doesCardMatchStringFilter(card, appliedFilter)) {
      doesCardMatchFilter = false;
    } else if (isArray && !doesCardMatchArrayFilter(card, appliedFilter)) {
      doesCardMatchFilter = false;
    } else if (isBoolean && !doesCardMatchBooleanFilter(card, appliedFilter)) {
      doesCardMatchFilter = false;
    }

    // if (card.types.includes(Type.Equipment) && !doesCardMatchFilter) {
    //   console.log(card.name, appliedFilter, doesCardMatchFilter);
    // }

    const shouldCheckForClash =
      specialConditions.isClash &&
      ["rarities", "bannedFormats", "legalFormats"].includes(property);
    // if (card.cardIdentifier === "command-and-conquer-red") {
    //   console.log(shouldCheckForClash, specialConditions, property);
    // }
    if (shouldCheckForClash) {
      const isSuperRarePlus = [
        Rarity.SuperRare,
        Rarity.Majestic,
        Rarity.Legendary,
        Rarity.Fabled,
      ].some((rarity) => card.rarities.includes(rarity));
      let isSpecializationOverride = false;
      for (const { cardIdentifiers, heroes } of clashSpecializationOverrides) {
        for (const hero of specialConditions.heroes) {
          if (
            heroes.includes(hero) &&
            cardIdentifiers.includes(card.cardIdentifier)
          ) {
            isSpecializationOverride = true;
            // break;
          }
        }
        if (isSpecializationOverride) {
          // break;
        }
      }
      const isSpecializationCard =
        (!!card.specializations &&
          // @ts-ignore
          (card as ActionCard).specializations.length > 0) ||
        isSpecializationOverride;
      const isMentorOrWeapon = [Type.Mentor, Type.Weapon].some((type) =>
        card.types.includes(type)
      );
      const isBannedInClash = clashBannedCards.includes(card.name);

      if (
        !doesCardMatchFilter &&
        !isBannedInClash &&
        (isSpecializationCard || isMentorOrWeapon) &&
        isSuperRarePlus
      ) {
        doesCardMatchFilter = true;
      }
      if (isBannedInClash) {
        doesCardMatchFilter = false;
      }
    }

    // TODO clean this up and combine with Clash code above
    if (
      specialConditions.isClash &&
      specialConditions.heroes.includes(Hero.Briar) &&
      card.name === "Rosetta Thorn"
    ) {
      doesCardMatchFilter = true;
    }

    if (!doesCardMatchFilter) {
      break;
    }
  }

  return doesCardMatchFilter;
};

const doesCardMatchNumericFilter = (
  card: Card,
  filter: AppliedFilter
): boolean => {
  if (!doesFilterMatchCardType(filter, card)) {
    return true;
  } else {
    const {
      values,
      modifier,
      excluded,
      filterToPropertyMapping: { partialMatch },
    } = filter;
    let cardValue: number = getCardValue(card, filter) as number;
    if (cardValue != null && !isNaN(cardValue as number)) {
      cardValue = parseInt(cardValue as unknown as string) as number;
      if (modifier) {
        switch (modifier) {
          case ">=":
            const isGreatherThanOrEqualTo = values?.some(
              (filterValue) => cardValue >= parseInt(filterValue)
            );
            return excluded
              ? !isGreatherThanOrEqualTo
              : isGreatherThanOrEqualTo;
          case ">":
            const isGreatherThan = values?.some(
              (filterValue) => cardValue > parseInt(filterValue)
            );
            return excluded ? !isGreatherThan : isGreatherThan;
          case "<=":
            const isLessThanOrEqualTo = values?.some(
              (filterValue) => cardValue <= parseInt(filterValue)
            );
            return excluded ? !isLessThanOrEqualTo : isLessThanOrEqualTo;
          case "<":
            const isLessThan = values?.some(
              (filterValue) => cardValue < parseInt(filterValue)
            );
            return excluded ? !isLessThan : isLessThan;
          default:
            return false;
        }
      } else {
        const isEqualTo = values?.some(
          (filterValue) => cardValue === parseInt(filterValue)
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

const doesCardMatchStringFilter = (
  card: Card,
  filter: AppliedFilter
): boolean => {
  if (!doesFilterMatchCardType(filter, card)) {
    return true;
  } else {
    const {
      values,
      isAnd,
      excluded,
      filterToPropertyMapping: { partialMatch },
    } = filter;
    const cardValue = (getCardValue(card, filter) as string)?.replaceAll(
      PUNCTUATION,
      ""
    );
    if (partialMatch) {
      const isPartialMatch = isAnd
        ? values?.every((filterValue) =>
            cardValue?.toLowerCase().includes(filterValue)
          )
        : values?.some((filterValue) =>
            cardValue?.toLowerCase().includes(filterValue)
          );
      return excluded ? !isPartialMatch : isPartialMatch;
    } else {
      const isFullMatch = isAnd
        ? values?.every(
            (filterValue) => cardValue?.toLowerCase() === filterValue
          )
        : values?.some(
            (filterValue) => cardValue?.toLowerCase() === filterValue
          );
      return excluded ? !isFullMatch : isFullMatch;
    }
  }
};

const doesCardMatchArrayFilter = (
  card: Card,
  filter: AppliedFilter
): boolean => {
  if (!doesFilterMatchCardType(filter, card)) {
    return true;
  } else {
    const {
      values,
      isAnd,
      excluded,
      filterToPropertyMapping: { partialMatch },
    } = filter;
    const cardValues = getCardValues(card, filter).map((value) =>
      value?.replaceAll(PUNCTUATION, "")
    );
    if (partialMatch) {
      const isPartialMatch = isAnd
        ? values.every((filterValue) =>
            cardValues?.some((cardValue) =>
              cardValue?.toLowerCase().includes(filterValue)
            )
          )
        : values.some((filterValue) =>
            cardValues?.some((cardValue) =>
              cardValue?.toLowerCase().includes(filterValue)
            )
          );
      const noValues = cardValues.length === 0;
      return excluded ? !isPartialMatch || noValues : isPartialMatch;
    } else {
      const isFullMatch = isAnd
        ? values.every((filterValue) =>
            cardValues?.some(
              (cardValue) => cardValue?.toLowerCase() === filterValue
            )
          )
        : values.some((filterValue) =>
            cardValues?.some(
              (cardValue) => cardValue?.toLowerCase() === filterValue
            )
          );
      return excluded ? !isFullMatch : isFullMatch;
    }
  }
};

const doesCardMatchBooleanFilter = (
  card: Card,
  filter: AppliedFilter
): boolean => {
  if (!doesFilterMatchCardType(filter, card)) {
    return true;
  } else {
    const { excluded } = filter;
    const cardValue = getCardValue(card, filter) as boolean;
    return excluded ? !cardValue : cardValue;
  }
};

const getCardValue = (
  card: Card,
  appliedFilter: AppliedFilter
): string | number | string[] | boolean => {
  const { filterToPropertyMapping } = appliedFilter;
  // @ts-ignore
  return card[filterToPropertyMapping.property];
};

const getCardValues = (card: Card, appliedFilter: AppliedFilter): string[] => {
  const {
    filterToPropertyMapping: { nestedProperty, property },
  } = appliedFilter;
  // @ts-ignore
  const propertyValues = card[property] || [];
  if (nestedProperty) {
    return propertyValues
      .map((value: { [x: string]: any }) => {
        return value[nestedProperty];
      })
      .filter((value: any) => !!value);
  } else {
    return propertyValues;
  }
};

const getCardSpecialValue = (
  card: Card,
  appliedFilter: AppliedFilter
): string => {
  const { filterToPropertyMapping } = appliedFilter;
  // @ts-ignore
  return card[filterToPropertyMapping.specialProperty];
};

const doesFilterMatchCardType = (
  { cardTypes }: AppliedFilter,
  { types, subtypes }: Card
): boolean =>
  !cardTypes ||
  cardTypes?.some(
    (cardType) =>
      types
        .map((type) => type.toLowerCase())
        .includes(cardType.toLowerCase()) ||
      subtypes
        .map((subtype) => subtype.toLowerCase())
        .includes(cardType.toLowerCase())
  );
