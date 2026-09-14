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

import tcgplayerFinishOverrideFile from "./tcgplayer-finish-overrides.json";
// cardIdentifier -> print -> the finish TCGplayer files that print's listings under
const tcgplayerFinishesByPrintByCard = new Map(
  Object.entries(
    tcgplayerFinishOverrideFile as { [key: string]: { [key: string]: string } },
  ).map(([cardIdentifier, finishesByPrint]) => [
    cardIdentifier,
    new Map(Object.entries(finishesByPrint)),
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

const TCGPLAYER_FINISH_PARAM = "Printing";

// The api prices a printing from the finish its link names, and links name our finish, so a print
// TCGplayer files under another finish (the CON001 rainbow foil sells as cold foil) goes unpriced
// until its link names TCGplayer's. An entry that changes no link throws: a print key change or an
// upstream fix would otherwise retire it silently.
export const getCardsWithTCGplayerFinishOverrides = (cards: Card[]): Card[] => {
  const unappliedOverrides = new Set<string>();
  for (const [
    cardIdentifier,
    finishesByPrint,
  ] of tcgplayerFinishesByPrintByCard) {
    for (const print of finishesByPrint.keys()) {
      unappliedOverrides.add(`${cardIdentifier} ${print}`);
    }
  }

  const cardsWithOverrides = cards.map((card) => {
    const finishesByPrint = tcgplayerFinishesByPrintByCard.get(
      card.cardIdentifier,
    );
    let cardWithOverrides = card;
    if (finishesByPrint) {
      const printings = card.printings.map((printing) => {
        const finish = finishesByPrint.get(printing.print);
        let printingWithOverride = printing;
        const tcgplayerUrl = printing.tcgplayer?.url;
        if (finish && tcgplayerUrl) {
          const url = new URL(tcgplayerUrl);
          const shouldOverride =
            url.searchParams.get(TCGPLAYER_FINISH_PARAM) !== finish;
          if (shouldOverride) {
            url.searchParams.set(TCGPLAYER_FINISH_PARAM, finish);
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
      `TCGplayer finish overrides that change no link (no such print, no link, or the link already names that finish): ${[...unappliedOverrides].join(", ")}`,
    );
  }

  return cardsWithOverrides;
};
