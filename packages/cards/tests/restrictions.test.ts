import { Card, Format, Rarity } from "@flesh-and-blood/types";
import { cards } from "../dist/index";
import { commonerBannedCards } from "../scripts/Shared/legality";

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
        young,
      } = cards.find((card) => card.cardIdentifier === cardIdentifier) as Card;

      const isTokenOrCommon =
        rarities.includes(Rarity.Token) || rarities.includes(Rarity.Common);
      const isSuperRareOrHigher =
        rarities.includes(Rarity.Fabled) ||
        rarities.includes(Rarity.Legendary) ||
        rarities.includes(Rarity.Majestic) ||
        rarities.includes(Rarity.SuperRare);
      const raritySuggestsNoCommoner = isSuperRareOrHigher && !isTokenOrCommon;

      const isAdult = !!hero && !young;

      const shouldNotBeLegalInCommoner =
        isAdult ||
        raritySuggestsNoCommoner ||
        commonerBannedCards.includes(name);

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
