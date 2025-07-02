import { Card, Format, Rarity, Type } from "@flesh-and-blood/types";
import { cards } from "../dist/index";

describe("Restrictions seem reasonable", () => {
  const isCommoner = (format: Format) => format === Format.Commoner;

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

      const isMacro = types?.includes(Type.Macro);

      const isRareYoungHero =
        types?.includes(Type.Hero) && young && rarities.includes(Rarity.Rare);

      const isBasicCommonOrToken =
        rarities.includes(Rarity.Basic) ||
        rarities.includes(Rarity.Token) ||
        rarities.includes(Rarity.Common);
      const isSuperRareOrHigher =
        rarities.includes(Rarity.Fabled) ||
        rarities.includes(Rarity.Legendary) ||
        rarities.includes(Rarity.Majestic) ||
        rarities.includes(Rarity.SuperRare);
      const raritySuggestsNoCommoner =
        isSuperRareOrHigher && !isBasicCommonOrToken && !isRareYoungHero;

      const isAdult = !!hero && !young;

      const shouldNotBeLegalInCommoner =
        isAdult ||
        isMacro ||
        raritySuggestsNoCommoner ||
        bannedFormats?.includes(Format.Commoner);

      const isBannedOrNotLegal =
        bannedFormats?.some(isCommoner) || !legalFormats?.some(isCommoner);

      if (shouldNotBeLegalInCommoner) {
        expect(isBannedOrNotLegal).toBeTruthy();
      } else {
        if (
          rarities.includes(Rarity.Common) ||
          rarities.includes(Rarity.Token)
        ) {
          expect(isBannedOrNotLegal).toBeFalsy();
        }
      }
    }
  );
});
