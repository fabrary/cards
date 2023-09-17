import { Card, Type } from "@flesh-and-blood/types";
import { cards } from "@flesh-and-blood/cards";
// import { heroes, nonPromoHeroes, promoOnlyHeroes } from "./heroes";

const toName = ({ name }: Card) => name;

describe("Heroes", () => {
  xit("All heroes are promo or non promo", () => {
    // expect(
    //   [...nonPromoHeroes.map(toName), ...promoOnlyHeroes.map(toName)].sort()
    // ).toEqual(heroes.map(toName).sort());
  });

  xit("All hero cards are recognized as heroes", () => {
    // const heroCards = cards.filter(({ types }) => types.includes(Type.Hero));
    // const heroCardNames = heroCards
    //   .filter(({ name }) => name !== "Ruu'di, Gem Keeper")
    //   .map(({ name }) => name)
    //   .sort();
    // const heroNames = heroes.map(({ name }) => name).sort();
    // expect(heroCardNames).toEqual(heroNames);
  });
});
