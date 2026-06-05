import { Card, Foiling, Printing } from "@flesh-and-blood/types";
import tcgplayerProductFile from "../Released/card.json";
import { SourceJSONCard } from "../Released/parser";
const tcgplayerProductInfo = tcgplayerProductFile as SourceJSONCard[];

const FOILING_OVERRIDES: { [key: string]: string } = {
  C: Foiling.Cold,
  G: Foiling.Gold,
  R: Foiling.Rainbow,
};

interface TCGplayer {
  productId: string;
  url: string;
}
export const getTCGplayerInfoForAddedPrinting = (
  card: Card,
  printing: Printing,
): TCGplayer | undefined => {
  if (!!printing.tcgplayer?.productId && !!printing.tcgplayer?.url) {
    return printing.tcgplayer as TCGplayer;
  } else {
    const matchingTCGPSourceCard = tcgplayerProductInfo.find(
      ({ name, pitch }) => {
        const sameName = card.name === name;
        const samePitch = (!card.pitch && !pitch) || `${card.pitch}` === pitch;

        return sameName && samePitch;
      },
    );

    if (matchingTCGPSourceCard) {
      const matchingPrinting = matchingTCGPSourceCard.printings.find(
        ({
          foiling,
          id,
          art_variations,
          tcgplayer_product_id,
          tcgplayer_url,
        }) => {
          // const foilingOverride = foiling
          //   ? TCGP_SOURCE_FILE_FOILING_MAPPING[foiling]
          //   : undefined;
          const foilingOverride = foiling
            ? FOILING_OVERRIDES[foiling]
            : undefined;

          // const foilingOverride = foiling === "S" ? undefined : foiling;
          const sameFoiling =
            (!printing.foiling && !foilingOverride) ||
            printing.foiling === foilingOverride;

          const sameSetIdentifier = printing.identifier === id;
          const sameTreatment =
            ((!printing.treatments || printing.treatments.length === 0) &&
              !art_variations.length) ||
            (printing.treatments &&
              printing.treatments.length > 0 &&
              printing.treatments[0] === art_variations[0]);

          const tcgplayerInfoFormattedCorrectly =
            !!tcgplayer_product_id &&
            !!tcgplayer_url &&
            !tcgplayer_product_id.includes(".png") &&
            !tcgplayer_url.includes(".png");

          return (
            sameFoiling &&
            sameSetIdentifier &&
            sameTreatment &&
            tcgplayerInfoFormattedCorrectly
          );
        },
      );

      // if (card.name === "Voltic Impact" && foilingString === "R") {
      //   console.log(
      //     JSON.stringify(
      //       {
      //         card,
      //         matchingPrinting,
      //       },
      //       null,
      //       2,
      //     ),
      //   );
      //   throw new Error("Stop");
      // }

      if (
        matchingPrinting &&
        matchingPrinting.tcgplayer_product_id &&
        matchingPrinting.tcgplayer_url
      ) {
        return {
          productId: matchingPrinting.tcgplayer_product_id,
          url: matchingPrinting.tcgplayer_url,
        };
      }
    }
  }
};

export const getTCGPlayerInfoForRawSpoilerPrinting = (card: {
  name: string;
  pitch?: string;
}) => {
  const matchingTCGPSourceCard = tcgplayerProductInfo.find(
    ({ name, pitch }) => {
      const sameName = card.name === name;
      const samePitch = (!card.pitch && !pitch) || card.pitch === pitch;

      return sameName && samePitch;
    },
  );

  return matchingTCGPSourceCard;
};
