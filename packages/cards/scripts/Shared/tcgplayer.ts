import { Card, Foiling, Printing } from "@flesh-and-blood/types";
import tcgplayerProductFile from "../Released/card.json";
import { SourceJSONCard } from "../Released/parser";
const tcgplayerProductInfo = tcgplayerProductFile as SourceJSONCard[];

interface TCGplayer {
  productId: string;
  url: string;
}

import tcgplayerOverrideFile from "./printings-with-tcgplayer.json";
const tcgplayerOverrides = tcgplayerOverrideFile as {
  [key: string]: {
    [key: string]: TCGplayer;
  };
};

import tcgplayerPrintingOverrideFile from "./tcgplayer-printing-overrides.json";
// cardIdentifier -> print -> the TCGplayer printing that print's listings sit under
const tcgplayerPrintingsByPrintByCard = new Map(
  Object.entries(
    tcgplayerPrintingOverrideFile as {
      [key: string]: { [key: string]: string };
    },
  ).map(([cardIdentifier, printingsByPrint]) => [
    cardIdentifier,
    new Map(Object.entries(printingsByPrint)),
  ]),
);

const FOILING_OVERRIDES: { [key: string]: string } = {
  C: Foiling.Cold,
  G: Foiling.Gold,
  R: Foiling.Rainbow,
};

export const getTCGplayerInfoForAddedPrinting = (
  cardIdentifier: string,
  card: Card,
  printing: Printing,
): TCGplayer | undefined => {
  let tcgplayerData: TCGplayer | undefined;

  if (!!printing.tcgplayer?.productId && !!printing.tcgplayer?.url) {
    tcgplayerData = printing.tcgplayer as TCGplayer;
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
        tcgplayerData = {
          productId: matchingPrinting.tcgplayer_product_id,
          url: matchingPrinting.tcgplayer_url,
        };
      }
    }
  }

  if (!tcgplayerData) {
    const overrideData = getTCGPlayerInfoFromOverrides(
      cardIdentifier,
      printing.print,
    );
    if (overrideData) {
      tcgplayerData = overrideData;
    }
  }

  return tcgplayerData;
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

export const getTCGPlayerInfoFromOverrides = (
  cardIdentifier: string,
  print: string,
): TCGplayer | undefined => {
  const cardOverrides = tcgplayerOverrides[cardIdentifier];
  if (cardOverrides) {
    const printOverride = cardOverrides[print];
    if (printOverride && !!printOverride.productId && !!printOverride.url) {
      return printOverride;
    }
  }
};

const TCGPLAYER_PRINTING_PARAM = "Printing";

// The api prices a printing from the TCGplayer printing its link names, and links name our edition
// and finish. TCGplayer sometimes lists a print under another finish (the CON001 rainbow foil sells
// as cold foil) or under an edition our data doesn't carry (hero deck cards sell as 1st Edition),
// and the print goes unpriced until its link names TCGplayer's printing. An entry that changes no
// link throws: a print key change or an upstream fix would otherwise retire it silently.
export const getCardsWithTCGplayerPrintingOverrides = (
  cards: Card[],
): Card[] => {
  const unappliedOverrides = new Set<string>();
  for (const [
    cardIdentifier,
    printingsByPrint,
  ] of tcgplayerPrintingsByPrintByCard) {
    for (const print of printingsByPrint.keys()) {
      unappliedOverrides.add(`${cardIdentifier} ${print}`);
    }
  }

  const cardsWithOverrides = cards.map((card) => {
    const printingsByPrint = tcgplayerPrintingsByPrintByCard.get(
      card.cardIdentifier,
    );
    let cardWithOverrides = card;
    if (printingsByPrint) {
      const printings = card.printings.map((printing) => {
        const tcgplayerPrinting = printingsByPrint.get(printing.print);
        let printingWithOverride = printing;
        const tcgplayerUrl = printing.tcgplayer?.url;
        if (tcgplayerPrinting && tcgplayerUrl) {
          const url = new URL(tcgplayerUrl);
          const shouldOverride =
            url.searchParams.get(TCGPLAYER_PRINTING_PARAM) !==
            tcgplayerPrinting;
          if (shouldOverride) {
            url.searchParams.set(TCGPLAYER_PRINTING_PARAM, tcgplayerPrinting);
            printingWithOverride = {
              ...printing,
              tcgplayer: { ...printing.tcgplayer, url: url.toString() },
            };
            unappliedOverrides.delete(
              `${card.cardIdentifier} ${printing.print}`,
            );
          }
        }
        return printingWithOverride;
      });
      cardWithOverrides = { ...card, printings };
    }
    return cardWithOverrides;
  });

  if (unappliedOverrides.size > 0) {
    throw new Error(
      `TCGplayer printing overrides that change no link (no such print, no link, or the link already names that printing): ${[...unappliedOverrides].join(", ")}`,
    );
  }

  return cardsWithOverrides;
};
