import {
  Card,
  DoubleSidedCard,
  Hero,
  Printing,
  Release,
} from "@flesh-and-blood/types";
import Fuse from "fuse.js";
import { PUNCTUATION } from "./constants.js";
import {
  AppliedFilter,
  CardPropertyName,
  Modifier,
  NO_CARD_PROPERTY,
} from "./filterMappings.js";
import {
  getParsedQuery,
  QueryAttributes,
  UnresolvedFilter,
} from "./queryParse.js";
import { memes } from "./memes.js";
import { getNormalizedText, getTextWithoutMarkup } from "./helpers.js";
import { releasesBySetIdentifier, setIdentifiersByRelease } from "./lookups.js";
import { FilterProperty } from "./metaFilters.js";
import { CatalogueIndex, getCatalogueIndex } from "./searchIndex.js";

export interface SearchCard extends DoubleSidedCard {
  matchingPrintings?: Printing[];
}

export interface SearchOptions {
  additionalHeroes?: Hero[];
  additionalSets?: Release[];
  debug?: boolean;
  /**
   * The catalogue the parser resolves names and relations against. A pool
   * searched out of a larger catalogue shares the catalogue's index, so a
   * relation is answered from every card that carries it while the search still
   * answers with the pool alone. Left out, the corpus is its own catalogue.
   * The pool must be a subset of the catalogue the index was built over: a pool
   * card the catalogue does not hold resolves to nothing, with no error.
   */
  index?: CatalogueIndex;
}

export interface SearchResults {
  appliedFilters: AppliedFilter[];
  keywords: string[];
  attributes: QueryAttributes;
  searchResults: SearchCard[];
  /**
   * The filters the parse could not place, which asked nothing of these
   * results. A reader is told rather than left with a search that widened.
   */
  unresolvedFilters: UnresolvedFilter[];
}

const searchOptions: Fuse.IFuseOptions<DoubleSidedCard> = {
  getFn: (obj, path) => {
    const value = Fuse.config.getFn(obj, path);
    let normalizedValue: string | readonly string[] | undefined = value;
    if (Array.isArray(value)) {
      normalizedValue = value.map((val) =>
        getNormalizedText(val.replace(PUNCTUATION, "")),
      );
    } else if (value) {
      const text = getNormalizedText(value as string).replace(PUNCTUATION, "");
      normalizedValue = path.includes("functionalText")
        ? getTextWithoutMarkup(text)
        : text;
    }
    return normalizedValue;
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

class Search {
  private additionalHeroes: Hero[];
  private additionalSets: Release[];
  private cards: DoubleSidedCard[];
  private debug: boolean;
  private fuse: Fuse<Card> | undefined;
  private index: CatalogueIndex;

  constructor(cards: DoubleSidedCard[], options?: SearchOptions);
  constructor(
    cards: DoubleSidedCard[],
    additionalHeroes?: Hero[],
    additionalSets?: Release[],
    debug?: boolean,
  );
  constructor(
    cards: DoubleSidedCard[],
    additionalHeroesOrOptions: Hero[] | SearchOptions = [],
    additionalSets: Release[] = [],
    debug: boolean = false,
  ) {
    const options: SearchOptions = Array.isArray(additionalHeroesOrOptions)
      ? { additionalHeroes: additionalHeroesOrOptions, additionalSets, debug }
      : additionalHeroesOrOptions;

    this.additionalHeroes = options.additionalHeroes || [];
    this.additionalSets = options.additionalSets || [];
    this.cards = [...cards];
    this.debug = options.debug || false;
    // Keyed on the caller's array rather than the private copy, so a consumer
    // holding that array shares this index instead of building a second one.
    this.index = options.index || getCatalogueIndex(cards);
  }

  // Scoring the corpus is the costly half of a search, so a catalogue that is
  // only ever filtered never pays to index it.
  private getFuse = (): Fuse<Card> => {
    if (!this.fuse) {
      this.fuse = new Fuse(this.cards, searchOptions);
    }

    return this.fuse;
  };

  log = (message?: unknown, ...optionalParams: unknown[]) => {
    if (this.debug) {
      console.log(message, ...optionalParams);
    }
  };

  search = (text: string, includeMemes?: boolean): SearchResults => {
    let results: DoubleSidedCard[];

    const { appliedFilters, attributes, keywords, unresolvedFilters } =
      getParsedQuery(text, this.index, {
        additionalHeroes: this.additionalHeroes,
        additionalSets: this.additionalSets,
      });

    const keyword = keywords.join(" ");
    const matchingMemes = includeMemes
      ? memes.filter((meme) => meme.keyword === keyword)
      : [];

    if (matchingMemes.length > 0) {
      results = matchingMemes.map(({ card }) => card);
    } else if (keywords.length) {
      results = this.getFuse()
        .search(keyword)
        .map((result) => result.item);
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
      let setIdentifierToSortBy = "";

      const shouldSortByRelease = attributes.releases.length === 1;
      if (shouldSortByRelease) {
        const matchingSetIdentifiers =
          setIdentifiersByRelease[attributes.releases[0]];
        if (matchingSetIdentifiers?.length) {
          setIdentifierToSortBy = matchingSetIdentifiers[0].toUpperCase();
        }
      }

      const shouldSortByPrint =
        !setIdentifierToSortBy && attributes.prints.length === 1;
      if (shouldSortByPrint) {
        const setToSort = attributes.prints[0];
        if (releasesBySetIdentifier[setToSort]) {
          setIdentifierToSortBy = setToSort.toUpperCase();
        }
      }

      if (setIdentifierToSortBy) {
        results.sort((c1, c2) => {
          const c1SetNumber = c1.setIdentifiers
            .find((identifier) => identifier.includes(setIdentifierToSortBy))
            ?.replace(setIdentifierToSortBy, "") as string;
          const c2SetNumber = c2.setIdentifiers
            .find((identifier) => identifier.includes(setIdentifierToSortBy))
            ?.replace(setIdentifierToSortBy, "");
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

    let searchResultsWithMatchingPrinting: SearchCard[] = [];
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
            !isExpansionSlot || isExpansionSlot === printing.isExpansionSlot;

          const matchesFoiling =
            foilings.length === 0 ||
            (!!printing.foiling && foilings.includes(printing.foiling));

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
            treatments.length === 0 ||
            printing.treatments?.some((treatment) =>
              treatments.includes(treatment),
            );

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
      searchResultsWithMatchingPrinting.length > 0
        ? searchResultsWithMatchingPrinting
        : results;

    return {
      appliedFilters,
      attributes,
      keywords,
      searchResults,
      unresolvedFilters,
    };
  };
}

export default Search;

export const filterCard = (
  card: Card,
  appliedFilters: AppliedFilter[],
): boolean => {
  let doesCardMatchEveryFilter = true;

  for (const appliedFilter of appliedFilters) {
    const { isNumber, isString, isArray, isBoolean, isDate } =
      appliedFilter.filterToPropertyMapping;

    // A filter a consumer marked optional narrows nothing: the engine writes
    // none and there is no other filter for one to widen.
    if (!appliedFilter.isOptional) {
      if (isNumber) {
        doesCardMatchEveryFilter =
          doesCardMatchEveryFilter &&
          getDoesCardMatchNumericFilter(card, appliedFilter);
      } else if (isString) {
        doesCardMatchEveryFilter =
          doesCardMatchEveryFilter &&
          getDoesCardMatchStringFilter(card, appliedFilter);
      } else if (isArray) {
        doesCardMatchEveryFilter =
          doesCardMatchEveryFilter &&
          getDoesCardMatchArrayFilter(card, appliedFilter, appliedFilters);
      } else if (isBoolean) {
        doesCardMatchEveryFilter =
          doesCardMatchEveryFilter &&
          getDoesCardMatchBooleanFilter(card, appliedFilter);
      } else if (isDate) {
        doesCardMatchEveryFilter =
          doesCardMatchEveryFilter &&
          getDoesCardMatchDateFilter(card, appliedFilter);
      }
    }
  }

  return doesCardMatchEveryFilter;
};

// The card's number against one the query wrote, read the way the comparison
// standing in front of that value asks for.
const getDoesNumberMatch = (
  cardValue: number,
  filterValue: string,
  modifier?: Modifier,
): boolean => {
  const value = parseInt(filterValue);

  let isMatch: boolean;
  switch (modifier) {
    case ">=":
      isMatch = cardValue >= value;
      break;
    case ">":
      isMatch = cardValue > value;
      break;
    case "<=":
      isMatch = cardValue <= value;
      break;
    case "<":
      isMatch = cardValue < value;
      break;
    default:
      isMatch = cardValue === value;
  }

  return isMatch;
};

const getDoesCardMatchNumericFilter = (
  card: Card,
  filter: AppliedFilter,
): boolean => {
  const {
    filterValues,
    values,
    modifier,
    isExcluded,
    filterToPropertyMapping: { partialMatch },
  } = filter;

  let isMatch = true;
  if (doesFilterMatchCardType(filter, card)) {
    const storedValue = getCardValue(card, filter) as number;
    let matchesValue: boolean;

    if (storedValue != null && !isNaN(storedValue)) {
      const cardValue = parseInt(storedValue as unknown as string);
      // Each value carries its own comparison where the query wrote them; the
      // filters the parse expands into carry one comparison for all of them.
      matchesValue = filterValues
        ? filterValues.some(({ modifier: valueModifier, value }) =>
            getDoesNumberMatch(cardValue, value, valueModifier),
          )
        : values.some((filterValue) =>
            getDoesNumberMatch(cardValue, filterValue, modifier),
          );
    } else {
      const cardSpecialValue = getCardSpecialValue(card, filter)?.toLowerCase();
      matchesValue = partialMatch
        ? values.some(
            (filterValue) => !!cardSpecialValue?.includes(filterValue),
          )
        : values.some((filterValue) => cardSpecialValue === filterValue);
    }

    isMatch = isExcluded ? !matchesValue : matchesValue;
  }

  return isMatch;
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
      valuesSet,
      isAnd,
      isExcluded: excluded,
      filterToPropertyMapping: { hasMarkup, isNormalized, partialMatch },
    } = filter;
    const storedValue = getCardValue(card, filter) as string;
    const normalizedValue = isNormalized
      ? storedValue
      : storedValue?.replaceAll(PUNCTUATION, "").toLowerCase();
    const cardValue =
      hasMarkup && normalizedValue
        ? getTextWithoutMarkup(normalizedValue)
        : normalizedValue;
    if (partialMatch) {
      const isPartialMatch = isAnd
        ? values?.every((filterValue) => cardValue?.includes(filterValue))
        : values?.some((filterValue) => cardValue?.includes(filterValue));
      return excluded ? !isPartialMatch : isPartialMatch;
    } else {
      let isFullMatch: boolean;
      if (isAnd) {
        isFullMatch = values?.every((filterValue) => cardValue === filterValue);
      } else if (valuesSet) {
        isFullMatch = valuesSet.has(cardValue);
      } else {
        isFullMatch = values?.some((filterValue) => cardValue === filterValue);
      }
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

// Whether the card's date sits after the one the filter carries. Both are
// YYYY-MM-DD, so they order correctly as strings with no parsing. The
// comparison is strict, making release day itself count as released, and an
// undated card sorts below every real date and so reads as released too.
const getDoesCardMatchDateFilter = (
  card: Card,
  filter: AppliedFilter,
): boolean => {
  if (!doesFilterMatchCardType(filter, card)) {
    return true;
  } else {
    const { values, isExcluded } = filter;
    const cardValue = getCardValue(card, filter) as string;
    const isAfter = values?.some((filterValue) => cardValue > filterValue);

    return isExcluded ? !isAfter : isAfter;
  }
};

const getCardValue = (
  card: Card,
  appliedFilter: AppliedFilter,
): Card[CardPropertyName] => {
  const {
    filterToPropertyMapping: { property },
  } = appliedFilter;

  let cardValue: Card[CardPropertyName] = undefined;
  if (property !== NO_CARD_PROPERTY) {
    cardValue = card[property];
  }

  return cardValue;
};

const getCardValues = (
  card: Card,
  filter: AppliedFilter,
  filters: AppliedFilter[],
): string[] => {
  const {
    filterToPropertyMapping: { isNestedPropertyArray, nestedProperty },
  } = filter;

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

      for (const printing of card.printings) {
        const printingValue = printing[nestedProperty];

        if (isNestedPropertyArray) {
          if (Array.isArray(printingValue)) {
            for (const value of printingValue) {
              valuesSet.add(value);
            }
          }
        } else if (printingValue && typeof printingValue === "string") {
          valuesSet.add(printingValue);
        }
      }

      values = Array.from(valuesSet);
    } else {
      const cardValue = getCardValue(card, filter);

      if (Array.isArray(cardValue)) {
        for (const value of cardValue) {
          if (typeof value === "string") {
            values.push(value);
          }
        }
      }
    }
  }

  return values;
};

const getCardSpecialValue = (
  card: Card,
  appliedFilter: AppliedFilter,
): string | undefined => {
  const {
    filterToPropertyMapping: { specialProperty },
  } = appliedFilter;

  let specialValue: string | undefined;
  if (specialProperty) {
    specialValue = card[specialProperty];
  }

  return specialValue;
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
