import { Card, Format, Rarity } from "@flesh-and-blood/types";
import { cards } from "../dist/index";

const bannedInCommoner = [
  "Amulet of Ice",
  "Ball Lightning",
  "Belittle",
  "Stubby Hammerers",
];

describe("Restrictions seem reasonable", () => {
  it.each(cards.map(({ cardIdentifier }) => cardIdentifier))(
    "%s restrictions seem reasonable",
    (cardIdentifier) => {
      const { bannedFormats, hero, name, rarities, rarity, young } = cards.find(
        (card) => card.cardIdentifier === cardIdentifier
      ) as Card;

      const isSuperRareOrHigher =
        rarities.includes(Rarity.Fable) ||
        rarities.includes(Rarity.Legendary) ||
        rarities.includes(rarity.Majestic) ||
        rarities.includes(rarity.SuperRare);
      const isAdult = !!hero && !young;
      if (bannedInCommoner.includes(name) || isSuperRareOrHigher || isAdult) {
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
