import {
  aliasesByFilterCategory,
  filtersToCardPropertyMappings,
} from "../src/filterMappings";
import type {
  FilterCategory,
  FilterToPropertyMapping,
} from "../src/filterMappings";

// The table types every alias against the one mapping it names, which is what
// makes a mapping missing a category a compile error. A check asks for a
// mapping by a key it computed, so it reads the table through a string index
// instead of through that type.
export const filterMappingsByAlias: {
  [alias: string]: FilterToPropertyMapping | undefined;
} = filtersToCardPropertyMappings;

export const filterAliases: string[] = Object.keys(
  filtersToCardPropertyMappings,
);

// Read by a key a check computed rather than by a category, so a name no
// category answers to reads as the miss it is.
export const aliasesByCategoryName: {
  [category: string]: readonly string[] | undefined;
} = aliasesByFilterCategory;

// An applied filter carries the mapping its key named, and the parser builds
// mappings of its own for an expansion, so only some of them name a filter.
export const getCategoryOfMapping = (
  mapping: Partial<FilterToPropertyMapping>,
): FilterCategory | undefined => mapping.category;
