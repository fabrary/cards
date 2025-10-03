import { Card, Shorthand } from "@flesh-and-blood/types";
import { shorthands as availableShorthands } from "./shorthands";

const CARD_IDENTIFIER_TO_LOG = "";
// const CARD_IDENTIFIER_TO_LOG = "zoom-in-blue";

export const getShorthands = (card: Card): Shorthand[] | undefined => {
  const cardShorthands: Shorthand[] = [];

  if (card.cardIdentifier === CARD_IDENTIFIER_TO_LOG) {
    console.log(JSON.stringify(card, null, 2));
  }

  for (const { description, filters, shorthands } of availableShorthands) {
    let matchesAtLeastOneFilter = false;
    let matchesAllFilters = true;

    if (
      filters.defenseGreaterThanOrEqualTo ||
      filters.defenseGreaterThanOrEqualTo === 0
    ) {
      const matches =
        (!!card.defense || card.defense === 0) &&
        card.defense >= filters.defenseGreaterThanOrEqualTo;
      if (matches) {
        matchesAtLeastOneFilter = true;
      }
      matchesAllFilters = matches && matchesAllFilters;
    }

    if (filters.functionalText) {
      // TODO need to figure out regex match
      const matches = filters.functionalText.some((functionalText) => {
        const regex = new RegExp(functionalText, "i");
        const textMatches = card.functionalText?.match(regex) || [];

        return textMatches.length > 0;
      });
      if (matches) {
        matchesAtLeastOneFilter = true;
      }
      matchesAllFilters = matches && matchesAllFilters;
    }

    if (filters.keywords && filters.keywords.length > 0) {
      const matches = filters.keywords.every((keyword) =>
        card.keywords?.includes(keyword)
      );
      if (matches) {
        matchesAtLeastOneFilter = true;
      }
      matchesAllFilters = matches && matchesAllFilters;
    }

    if (filters.notClass && filters.notClass.length > 0) {
      const matches = filters.notClass.every(
        (notClass) => !card.classes.includes(notClass)
      );
      if (matches) {
        matchesAtLeastOneFilter = true;
      }
      matchesAllFilters = matches && matchesAllFilters;
    }

    if (
      filters.powerGreaterThanOrEqualTo ||
      filters.powerGreaterThanOrEqualTo === 0
    ) {
      const cardPower = card.power ?? -1;
      const matches = cardPower >= filters.powerGreaterThanOrEqualTo;

      if (card.cardIdentifier === CARD_IDENTIFIER_TO_LOG) {
        console.log(JSON.stringify({ cardPower, matches }));
      }
      if (matches) {
        matchesAtLeastOneFilter = true;
      }
      matchesAllFilters = matches && matchesAllFilters;
    }

    if (filters.subtypes && filters.subtypes.length > 0) {
      const matches = filters.subtypes.every((subtype) =>
        card.subtypes?.includes(subtype)
      );
      if (matches) {
        matchesAtLeastOneFilter = true;
      }
      matchesAllFilters = matches && matchesAllFilters;
    }

    if (filters.types && filters.types.length > 0) {
      const matches = filters.types.every((type) => card.types?.includes(type));
      if (matches) {
        matchesAtLeastOneFilter = true;
      }
      matchesAllFilters = matches && matchesAllFilters;
    }

    const shouldAddShorthand = matchesAllFilters && matchesAtLeastOneFilter;
    if (card.cardIdentifier === CARD_IDENTIFIER_TO_LOG) {
      console.log(
        JSON.stringify(
          {
            shorthand: { description, filters, shorthands },
            matchesAllFilters,
            matchesAtLeastOneFilter,
          },
          null,
          2
        )
      );
    }
    if (shouldAddShorthand) {
      cardShorthands.push(...shorthands);
    }
  }

  if (card.cardIdentifier === CARD_IDENTIFIER_TO_LOG) {
    throw new Error("STOP");
  }

  return cardShorthands.length > 0 ? cardShorthands : undefined;
};
