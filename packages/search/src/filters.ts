import { Hero, Release } from "@flesh-and-blood/types";
import type { AppliedFilter } from "./filterMappings.js";
import type { QueryAttributes } from "./filterResolvers.js";
import { getParsedQuery } from "./queryParse.js";
import { CatalogueIndex } from "./searchIndex.js";

export { RARITY_VALUES_MAPPING } from "./filterResolvers.js";

/**
 * What a search runs on, out of the parse: the filters a card is matched
 * against, what the query said about the printings a result renders, and the
 * words the fuzzy search scores. `getParsedQuery` answers with the terms
 * themselves as well, for a reader asking what a query means without running
 * it.
 */
export const getKeywordsAndAppliedFiltersFromText = (
  text: string,
  index: CatalogueIndex,
  additionalHeroes: Hero[] = [],
  additionalSets: Release[] = [],
  today?: string,
): {
  appliedFilters: AppliedFilter[];
  attributes: QueryAttributes;
  keywords: string[];
} => {
  const { appliedFilters, attributes, keywords } = getParsedQuery(text, index, {
    additionalHeroes,
    additionalSets,
    today,
  });

  return { appliedFilters, attributes, keywords };
};
