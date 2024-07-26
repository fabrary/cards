import {
  Release,
  Printing,
  Treatment,
  Foiling,
  ReleaseEdition,
} from "../interfaces";
import { fullSetIdentifiers } from "../sets";

const identifierExtensionMapping: { [key: string]: string } = {
  [Release.RhinarBlitzDeck]: "-Blitz",
};

const suffixOverrides: { [key: string]: string } = {
  MST158_V3: "-V3",
  ROS162_V2: "-V2",
};

export const getPrint = (printing: {
  identifier: string;
  image?: string;
  edition?: string;
  foiling?: string;
  set: string;
  treatment?: string;
}) => {
  const identifierExtension = identifierExtensionMapping[printing.set] || "";
  const identifier = `${printing.identifier}${identifierExtension}`;

  const edition = printing.edition ? `-${printing.edition}` : ``;
  const foiling = printing.foiling ? `-${printing.foiling}` : ``;
  const treatment = printing.treatment ? `-${printing.treatment}` : ``;

  const back = printing.image?.toLowerCase().includes("back") ? `-Back` : ``;

  const suffix = suffixOverrides[printing.image?.toUpperCase() || ""] || "";

  return `${identifier}${edition}${foiling}${treatment}${back}${suffix}`;
};

export const orderedFullSetBlackBorderIdentifiers = Object.keys(
  fullSetIdentifiers
)
  .filter((set) => !set.toLowerCase().includes("hp"))
  .reverse()
  .map((set) => set.toUpperCase());

const specialImagePrintingOverrides: {
  [key: string]: { print: string };
} = {
  "command-and-conquer-red": {
    print: "DYN000-Cold",
  },
  "cracked-bauble-yellow": {
    print: "LGS083-Cold",
  },
  "fate-foreseen-red": {
    print: "FAB024-Rainbow",
  },
  "pitfall-trap-yellow": {
    print: "LGS151-Rainbow",
  },
  quicken: {
    print: "EVO250",
  },
  "ravenous-rabble-red": {
    print: "FAB190-Rainbow-Extended Art",
  },
  "rockslide-trap-blue": {
    print: "LGS152-Rainbow",
  },
  "sigil-of-solace-red": {
    print: "FAB178-Rainbow-Extended Art",
  },
  "spectral-shield": {
    print: "MST158-Alternate Art-V3",
  },
  "tripwire-trap-red": {
    print: "LGS150-Rainbow",
  },
  "viserai-rune-blood": {
    print: "HER011-Cold",
  },
};

export const getSpecialPrinting = (
  card: { cardIdentifier: string; name?: string },
  printings: Printing[]
): Printing => {
  const { cardIdentifier } = card;
  const matchingOverride = Object.entries(specialImagePrintingOverrides).find(
    ([identifier]) => identifier === cardIdentifier
  );

  if (matchingOverride) {
    const [, { print }] = matchingOverride;
    const matchingPrint = printings.find(
      (printing) => printing.print === print
    );
    return matchingPrint || printings[0];
  } else {
    let firstImage: Printing | undefined;

    let alternativeArt: Printing | undefined;
    let alternateBorder: Printing | undefined;
    let alternateText: Printing | undefined;
    let coldExtendedArt: Printing | undefined;
    let coldFullArt: Printing | undefined;
    let extendedArt: Printing | undefined;
    let fullArt: Printing | undefined;
    let nonFoilExtendedArt: Printing | undefined;
    let promoExtendedArt: Printing | undefined;

    let marvel: Printing | undefined;

    let alphaEdition: Printing | undefined;
    let firstEdition: Printing | undefined;
    let promoEdition: Printing | undefined;
    let unlimitedEdition: Printing | undefined;

    let coldFoil: Printing | undefined;
    let goldFoil: Printing | undefined;
    let promoColdFoil: Printing | undefined;

    for (const printing of printings) {
      const { edition, foiling, identifier, image, treatment } = printing;

      // Don't include Pro Tour, etc. hero cards for special printings because they're missing functional text
      const isMissingFunctionalText = identifier.toLowerCase().includes("win");
      const hasImage = !!image;

      if (hasImage && !isMissingFunctionalText) {
        if (!firstImage) {
          firstImage = printing;
        }

        if (treatment === Treatment.AA) {
          alternativeArt = printing;
        } else if (treatment === Treatment.AB) {
          alternateBorder = printing;
        } else if (treatment === Treatment.AT) {
          alternateText = printing;
        } else if (treatment === Treatment.EA) {
          extendedArt = printing;
          if (foiling === Foiling.C) {
            coldExtendedArt = printing;
          }
          if (!foiling) {
            nonFoilExtendedArt = printing;
          }
          if (edition === ReleaseEdition.Promo) {
            promoExtendedArt = printing;
          }
        } else if (treatment === Treatment.FA) {
          fullArt = printing;
          if (foiling === Foiling.C) {
            coldFullArt = printing;
          }
          break;
        }

        if (image && image.includes("_V2")) {
          marvel = printing;
        }

        if (edition === ReleaseEdition.Alpha) {
          alphaEdition = printing;
        } else if (edition === ReleaseEdition.First) {
          firstEdition = printing;
        } else if (edition === ReleaseEdition.Promo) {
          promoEdition = printing;
        } else if (edition === ReleaseEdition.Unlimited) {
          unlimitedEdition = printing;
        }

        if (foiling === Foiling.C) {
          coldFoil = printing;
          if (edition === ReleaseEdition.Promo) {
            promoColdFoil = printing;
          }
        } else if (foiling === Foiling.G) {
          goldFoil = printing;
        }
      }
    }

    return (
      coldFullArt ||
      fullArt ||
      coldExtendedArt ||
      promoExtendedArt ||
      nonFoilExtendedArt ||
      extendedArt ||
      alternateBorder ||
      alternativeArt ||
      alternateText ||
      marvel ||
      promoColdFoil ||
      alphaEdition ||
      firstEdition ||
      promoEdition ||
      unlimitedEdition ||
      goldFoil ||
      coldFoil ||
      (firstImage as Printing)
    );
  }
};

const defaultImagePrintingOverrides: {
  [key: string]: { print: string };
} = {
  "command-and-conquer-red": {
    print: "ARC159-Unlimited",
  },
  "pitfall-trap-yellow": {
    print: "LGS151-Rainbow",
  },
  "rockslide-trap-blue": {
    print: "LGS152-Rainbow",
  },
  "spectral-shield": {
    print: "MST158",
  },
  "tripwire-trap-red": {
    print: "LGS150-Rainbow",
  },
};

export const getDefaultPrinting = (
  card: { cardIdentifier: string; name: string },
  printings: Printing[]
): Printing => {
  const { cardIdentifier } = card;
  const matchingOverride = Object.entries(defaultImagePrintingOverrides).find(
    ([identifier]) => identifier === cardIdentifier
  );

  if (matchingOverride) {
    const [, { print }] = matchingOverride;
    const matchingPrint = printings.find(
      (printing) => printing.print === print
    );
    return matchingPrint || printings[0];
  } else {
    let firstImage: Printing | undefined;
    let nonPromoImage: Printing | undefined;

    for (const printing of printings) {
      const { edition, image, treatment } = printing;
      const hasImage = !!image;

      if (hasImage) {
        if (!firstImage) {
          firstImage = printing;
        }

        if (!nonPromoImage && edition !== ReleaseEdition.Promo) {
          nonPromoImage = printing;
        }
      }

      if (firstImage && nonPromoImage) {
        break;
      }
    }

    // if (card.name === "Wrecking Ball") {
    //   console.log(firstImage, nonPromoImage);
    // }
    // if (card.name === "The Librarian") {
    //   console.log(firstImage, nonPromoImage);
    // }
    return nonPromoImage || firstImage || printings[0];
  }
};
