import { Card, Keyword } from "@flesh-and-blood/types";
import { cards } from "../dist/index";

describe("Meld keyword seem reasonable", () => {
  it.each(cards.map(({ cardIdentifier }) => cardIdentifier))(
    "%s meld keyword seem reasonable",
    (cardIdentifier) => {
      const { functionalText, keywords, name } = cards.find(
        (card) => card.cardIdentifier === cardIdentifier
      ) as Card;

      const hasDoubleSlash =
        name.includes("//") || functionalText?.includes("//") || false;
      const hasMeldKeyword = keywords?.includes(Keyword.Meld) || false;

      expect(hasDoubleSlash).toEqual(hasMeldKeyword);
    }
  );
});
