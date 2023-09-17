import { Card, Type } from "@flesh-and-blood/types";
import { cards } from "@flesh-and-blood/cards";
import { getHeroBreakdown } from "./heroes";

const toName = ({ name }: Card) => name;

describe("Heroes", () => {
  it("All heroes are promo or non promo", () => {
    const { all, nonPromo, promoOnly } = getHeroBreakdown(cards);

    expect([...nonPromo.map(toName), ...promoOnly.map(toName)].sort()).toEqual(
      all.map(toName).sort()
    );
  });

  it("All hero cards are recognized as heroes", () => {
    const { all } = getHeroBreakdown(cards);

    const heroCards = cards.filter(({ types }) => types.includes(Type.Hero));
    const heroCardNames = heroCards.map(({ name }) => name).sort();
    const heroNames = all.map(({ name }) => name).sort();
    expect(heroCardNames).toEqual(heroNames);
  });
});
