import { Card, Format, Rarity } from "@flesh-and-blood/types";
import { cards } from "../dist/index";

const bannedInCommoner = [
  "Amulet of Ice",
  "Ball Lightning",
  "Belittle",
  "Stubby Hammerers",
];

describe("Restrictions seem reasonable", () => {
  xit.each(cards.map(({ cardIdentifier }) => cardIdentifier))(
    "%s restrictions seem reasonable",
    (cardIdentifier) => {
      const { bannedFormats, hero, name, rarities, rarity, young } = cards.find(
        (card) => card.cardIdentifier === cardIdentifier
      ) as Card;

      const isTokenOrCommon =
        rarities.includes(Rarity.Token) || rarities.includes(Rarity.Common);
      const isSuperRareOrHigher =
        rarities.includes(Rarity.Fabled) ||
        rarities.includes(Rarity.Legendary) ||
        rarities.includes(Rarity.Majestic) ||
        rarities.includes(Rarity.SuperRare);
      const raritySuggestsNoCommoner = isSuperRareOrHigher && !isTokenOrCommon;

      const isAdult = !!hero && !young;
      if (
        bannedInCommoner.includes(name) ||
        raritySuggestsNoCommoner ||
        isAdult
      ) {
        const commoner = bannedFormats?.find(
          (format) => format === Format.Commoner
        );
        expect(commoner).toBeTruthy();
      } else {
        if (
          rarities.includes(Rarity.Common) ||
          rarities.includes(Rarity.Token)
        ) {
          const commoner = bannedFormats?.find(
            (format) => format === Format.Commoner
          );
          expect(commoner).toBeFalsy();
        }
      }
    }
  );
});
