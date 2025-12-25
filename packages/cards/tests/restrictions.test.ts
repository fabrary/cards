import { Card, Format, Rarity, Type } from "@flesh-and-blood/types";
import { cards } from "../dist/index";

describe("Restrictions seem reasonable", () => {
  it.each(cards.map(({ cardIdentifier }) => cardIdentifier))(
    "%s restrictions seem reasonable",
    (cardIdentifier) => {
      const {
        bannedFormats,
        hero,
        legalFormats,
        name,
        rarities,
        rarity,
        types,
        young,
      } = cards.find((card) => card.cardIdentifier === cardIdentifier) as Card;
    }
  );
});
