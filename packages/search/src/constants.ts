export const PUNCTUATION = /[!"#$%&'’(),./:;<=>?@[\]^_`|~]/g;

/**
 * The markdown emphasis that wraps keywords in a card's functional text. Kept
 * out of `PUNCTUATION` because an asterisk is also a printed card value:
 * `specialPower`, `specialDefense` and `specialLife` store one for a variable
 * stat, and `power:*` needs the character to survive normalization.
 */
export const MARKUP = /\*/g;
