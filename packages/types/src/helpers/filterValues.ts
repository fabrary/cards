export const PUNCTUATION = /[!"#$%&'’(),./:;<=>?@[\]^_`|~]/g;

/**
 * A filter value as a filter reads it, which is how a query's values arrive
 * and how the values a filter declares have to be compared against them:
 * neither the case nor the punctuation a value was written with is part of it.
 */
export const getNormalizedFilterValue = (value: string): string =>
  value.toLowerCase().replace(PUNCTUATION, "");
