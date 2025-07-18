import {
  Release,
  Printing,
  Treatment,
  Foiling,
  ReleaseEdition,
} from "../interfaces";
import { fullSetIdentifiers } from "../sets";

const identifierExtensionMapping: { [key: string]: string } = {
  // [Release.RhinarBlitzDeck]: "-Blitz",
};

const suffixOverrides: { [key: string]: string } = {
  MPG112_V2: "-V2",
  MPG112_V3: "-V3",
  MST158_V3: "-V3",
  ROS162_V2: "-V2",
  "ROS008-MV_V2_BACK": "-V3",
};

export const getPrint = (printing: {
  identifier: string;
  image?: string;
  edition?: string;
  foiling?: string;
  set: string;
  treatment?: string;
  treatments?: string[];
}) => {
  const identifierExtension = identifierExtensionMapping[printing.set] || "";
  const identifier = `${printing.identifier}${identifierExtension}`;

  const edition = printing.edition ? `-${printing.edition}` : ``;
  const foiling = printing.foiling ? `-${printing.foiling}` : ``;
  const treatment = printing.treatments?.length
    ? `-${printing.treatments.sort().join("-")}`
    : printing.treatment
    ? `-${printing.treatment}`
    : ``;
  // const treatment = printing.treatment ? `-${printing.treatment}` : ``;

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
  "adaptive-plating": {
    print: "EVO013-Cold",
  },
  "command-and-conquer-red": {
    print: "DYN000-Cold-Alternate Art-Extended Art",
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
  "rosetta-thorn": {
    print: "ROS256-Cold",
  },
  "sigil-of-solace-red": {
    print: "FAB178-Rainbow-Alternate Art-Extended Art",
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
  "wreck-havoc-red": {
    print: "OUT198",
  },
};

const printingsToIgnore: string[] = ["JDG044-Full Art-Back"];

export const getSpecialPrinting = (
  card: { cardIdentifier: string; name?: string },
  printings: Printing[]
): Printing => {
  const { cardIdentifier } = card;
  const matchingOverride = Object.entries(specialImagePrintingOverrides).find(
    ([identifier]) => identifier === cardIdentifier
  );

  const printingsIncludeMatchingOverride =
    !!matchingOverride &&
    printings.some((printing) => {
      const [, { print }] = matchingOverride;

      return printing.print === print;
    });

  if (printingsIncludeMatchingOverride) {
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
    let coldFullArt2: Printing | undefined;
    let extendedArt: Printing | undefined;
    let backFullArt: Printing | undefined;
    let frontFullArt: Printing | undefined;
    let firstFullArt: Printing | undefined;
    let nonFoilExtendedArt: Printing | undefined;
    let promoExtendedArt: Printing | undefined;
    let fullArtAlternateArt: Printing | undefined;

    let marvel: Printing | undefined;

    let alphaEdition: Printing | undefined;
    let firstEdition: Printing | undefined;
    let promoEdition: Printing | undefined;
    let unlimitedEdition: Printing | undefined;

    let coldFoil: Printing | undefined;
    let goldFoil: Printing | undefined;
    let promoColdFoil: Printing | undefined;

    for (const printing of printings) {
      const { edition, foiling, identifier, image, print, treatments } =
        printing;

      const upperCaseImage = image?.toUpperCase() || "";

      // Don't include Pro Tour, etc. hero cards for special printings because they're missing functional text
      const isMissingFunctionalText = identifier.toLowerCase().includes("win");
      const hasImage = !!upperCaseImage;
      const isWhiteBorder = upperCaseImage.includes("HP");
      const shouldIgnore = printingsToIgnore.includes(print);
      const shouldConsiderPrinting =
        hasImage && !isMissingFunctionalText && !isWhiteBorder && !shouldIgnore;

      if (shouldConsiderPrinting) {
        if (!firstImage) {
          firstImage = printing;
        }

        if (treatments?.includes(Treatment.FA)) {
          firstFullArt = printing;
          if (foiling === Foiling.C) {
            coldFullArt = printing;
            if (upperCaseImage.includes("_V3")) {
              coldFullArt2 = printing;
              break;
            }
          }

          if (upperCaseImage.includes("BACK")) {
            backFullArt = printing;
          } else {
            frontFullArt = printing;
          }
        }

        if (treatments?.includes(Treatment.EA)) {
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
        }
        if (treatments?.includes(Treatment.AA)) {
          alternativeArt = printing;
        }
        if (treatments?.includes(Treatment.AB)) {
          alternateBorder = printing;
        }
        if (treatments?.includes(Treatment.AT)) {
          alternateText = printing;
        }

        if (
          (upperCaseImage.includes("_V2") || upperCaseImage.includes("-MV")) &&
          treatments?.includes(Treatment.FA)
        ) {
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

    const finalFullArt =
      fullArtAlternateArt ||
      coldFullArt2 ||
      frontFullArt ||
      backFullArt ||
      coldFullArt ||
      firstFullArt;

    return (
      finalFullArt ||
      coldExtendedArt ||
      marvel ||
      promoExtendedArt ||
      nonFoilExtendedArt ||
      extendedArt ||
      alternateBorder ||
      alternativeArt ||
      alternateText ||
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
    print: "HNT260",
  },
  "pitfall-trap-yellow": {
    print: "LGS151-Rainbow",
  },
  "portside-exchange-blue": {
    print: "SEA145",
  },
  "rockslide-trap-blue": {
    print: "LGS152-Rainbow",
  },
  "rosetta-thorn": {
    print: "ELE222-First",
  },
  "spectral-shield": {
    print: "MST158",
  },
  "tripwire-trap-red": {
    print: "LGS150-Rainbow",
  },
  "wreck-havoc-red": {
    print: "OUT198",
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

  const printingsIncludeMatchingOverride =
    !!matchingOverride &&
    printings.some((printing) => {
      const [, { print }] = matchingOverride;

      return printing.print === print;
    });

  if (printingsIncludeMatchingOverride) {
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
      const isWhiteBorder = image?.includes("HP");
      const shouldConsiderPrinting = hasImage && !isWhiteBorder;

      if (shouldConsiderPrinting) {
        if (!firstImage) {
          firstImage = printing;
        }

        if (
          !nonPromoImage &&
          edition !== ReleaseEdition.Promo &&
          treatment !== Treatment.FA
        ) {
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
