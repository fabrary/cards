import { Card, Class, Rarity, Release, Type } from "@flesh-and-blood/types";

interface HeroBreakdown {
  all: Card[];
  adult: Card[];
  nonPromo: Card[];
  promoOnly: Card[];
  young: Card[];
  youngOnly: Card[];
}

export const getHeroBreakdown = (cards: Card[]): HeroBreakdown => {
  const all = cards
    .filter((card) => card.types.includes(Type.Hero))
    .sort((h1, h2) => h1.name.localeCompare(h2.name));
  const adult = all.filter(
    (card) => !card.young && !card.classes.includes(Class.Adjudicator)
  );

  const nonPromo = all.filter((card) => {
    const nonPromoRarity = card.rarities.some(
      (rarity) => rarity !== Rarity.Promo
    );
    const nonPromoSet = card.sets.some((set) => set !== Release.Promos);
    return nonPromoRarity || nonPromoSet;
  });

  const promoOnly = all.filter((card) => {
    const onlyPromoRarity = card.rarities.every(
      (rarity) => rarity === Rarity.Promo
    );
    const onlyPromoSets = card.sets.every((set) => set === Release.Promos);
    return onlyPromoRarity && onlyPromoSets;
  });

  const young = all.filter((card) => card.young);

  const youngOnly = young.filter(
    ({ hero }) => !adult.find((adultHero) => adultHero.hero === hero)
  );

  return {
    all,
    adult,
    nonPromo,
    promoOnly,
    young,
    youngOnly,
  };
};
