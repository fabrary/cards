import { Printing, Treatment, Foiling, ReleaseEdition } from "../interfaces.js";
import { fullSetIdentifiers } from "../sets.js";

const identifierExtensionMapping: { [key: string]: string } = {
  // [Release.RhinarBlitzDeck]: "-Blitz",
};

// A trailing marker that is neither a finish token nor an art letter still
// needs a suffix of its own. HER146 is shared by kassai-of-the-golden-sand and
// tuffnut-bumbling-hulkster, so an unsuffixed print collides across the two
// cards.
const suffixOverrides: { [key: string]: string } = {
  "HER146-ARF": "-ARF",
};

const artLetterMatcher = /-(?:MV|RF|CF)?([A-Z])$/;

const getArtLetterSuffix = (upperCaseImage: string) => {
  const imageWithoutBackMarker = upperCaseImage.replace(/_BACK$/, "");
  const artLetter = artLetterMatcher.exec(imageWithoutBackMarker)?.[1];

  let suffix = "";
  if (artLetter) {
    suffix = `-${artLetter}`;
  }

  return suffix;
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

  const upperCaseImage = printing.image?.toUpperCase() || "";
  const suffix =
    suffixOverrides[upperCaseImage] ?? getArtLetterSuffix(upperCaseImage);

  return `${identifier}${edition}${foiling}${treatment}${back}${suffix}`;
};

export const orderedFullSetBlackBorderIdentifiers = [
  ...fullSetIdentifiers.keys(),
]
  .filter((set) => !set.toLowerCase().includes("hp"))
  .reverse()
  .map((set) => set.toUpperCase());

const SPECIAL_IMAGE_PRINTING_OVERRIDES: {
  [key: string]: { print: string };
} = {
  "adaptive-plating": {
    print: "EVO013-Cold",
  },
  "command-and-conquer-red": {
    print: "ANQ009-Rainbow-Alternate Art-Alternate Border-Extended Art",
  },
  "cracked-bauble-yellow": {
    print: "LGS083-Cold",
  },
  "dash-io": {
    print: "HER089-Cold",
  },
  "fate-foreseen-red": {
    print: "FAB024-Rainbow",
  },
  "florian-rotwood-harbinger": {
    print: "ROS001-Cold-Full Art-Back",
  },
  "pleiades-superstar": {
    print: "SUP009-Cold-Full Art",
  },
  "pitfall-trap-yellow": {
    print: "LGS151-Rainbow",
  },
  "prism-sculptor-of-arc-light": {
    print: "HER069-Cold-Full Art-Back",
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
    print: "MST158-Alternate Art-B",
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

const PRINTINGS_TO_IGNORE: string[] = [
  "FAB024-Rainbow-Alternate Art",
  "FAB331-Rainbow-Alternate Art-Extended Art",
  "FAB443-Rainbow-Alternate Art-Extended Art",
  "HER161-Rainbow-Alternate Art-Full Art",
  "JDG044-Full Art-Back",
];

const IMAGE_PREFIXES_TO_IGNORE: string[] = ["JA_", "KO_"];

export const getSpecialPrinting = (
  card: { cardIdentifier: string; name?: string },
  printings: Printing[],
): Printing => {
  const { cardIdentifier } = card;
  const matchingOverride = Object.entries(
    SPECIAL_IMAGE_PRINTING_OVERRIDES,
  ).find(([identifier]) => identifier === cardIdentifier);

  const printingsIncludeMatchingOverride =
    !!matchingOverride &&
    printings.some((printing) => {
      const [, { print }] = matchingOverride;

      return printing.print === print;
    });

  if (printingsIncludeMatchingOverride) {
    const [, { print }] = matchingOverride;
    const matchingPrint = printings.find(
      (printing) => printing.print === print,
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
    let promoColdFoil: Printing | undefined;

    for (const printing of printings) {
      const { edition, foiling, identifier, image, print, treatments } =
        printing;

      const upperCaseImage = image?.toUpperCase() || "";

      // Don't include Pro Tour, etc. hero cards for special printings because they're missing functional text
      const isMissingFunctionalText = identifier.toLowerCase().includes("win");
      const hasImage = !!upperCaseImage;
      const isGoldFoil = foiling === Foiling.Gold;
      const isWhiteBorder = upperCaseImage.includes("HP");
      const shouldIgnore =
        PRINTINGS_TO_IGNORE.includes(print) ||
        IMAGE_PREFIXES_TO_IGNORE.some((prefixToIgnore) =>
          upperCaseImage.startsWith(prefixToIgnore),
        );
      const shouldConsiderPrinting =
        hasImage &&
        !isMissingFunctionalText &&
        !isWhiteBorder &&
        !shouldIgnore &&
        !isGoldFoil;

      if (shouldConsiderPrinting) {
        if (!firstImage) {
          firstImage = printing;
        }

        if (treatments?.includes(Treatment.FA)) {
          firstFullArt = printing;
          if (foiling === Foiling.Cold) {
            coldFullArt = printing;
          }

          if (upperCaseImage.includes("BACK")) {
            backFullArt = printing;
          } else {
            frontFullArt = printing;
          }
        }

        if (treatments?.includes(Treatment.EA)) {
          extendedArt = printing;
          if (foiling === Foiling.Cold) {
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
          upperCaseImage.includes("-MV") &&
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

        if (foiling === Foiling.Cold) {
          coldFoil = printing;
          if (edition === ReleaseEdition.Promo) {
            promoColdFoil = printing;
          }
        }
      }
    }

    const finalFullArt =
      fullArtAlternateArt ||
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
      coldFoil ||
      (firstImage as Printing)
    );
  }
};

const DEFAULT_IMAGE_PRINTING_OVERRIDES: {
  [key: string]: { print: string };
} = {
  "command-and-conquer-red": {
    print: "HNT260",
  },
  "fyendals-spring-tunic": {
    print: "EVO249",
  },
  might: {
    print: "TER028",
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
  vigor: {
    print: "HVY242",
  },
  "wreck-havoc-red": {
    print: "OUT198",
  },
};

export const getDefaultPrinting = (
  card: { cardIdentifier: string; name: string },
  printings: Printing[],
): Printing => {
  const { cardIdentifier } = card;
  const matchingOverride = Object.entries(
    DEFAULT_IMAGE_PRINTING_OVERRIDES,
  ).find(([identifier]) => identifier === cardIdentifier);

  const printingsIncludeMatchingOverride =
    !!matchingOverride &&
    printings.some((printing) => {
      const [, { print }] = matchingOverride;

      return printing.print === print;
    });

  if (printingsIncludeMatchingOverride) {
    const [, { print }] = matchingOverride;
    const matchingPrint = printings.find(
      (printing) => printing.print === print,
    );
    return matchingPrint || printings[0];
  } else {
    let firstImage: Printing | undefined;
    let nonPromoImage: Printing | undefined;

    for (const printing of printings) {
      const { edition, image, treatment } = printing;

      const hasImage = !!image;
      const isWhiteBorder = image?.includes("HP");
      const isCardBack = image?.includes("BACK");
      const isAMessyImageName =
        (image || "").length > 10 || image?.includes("width");
      const shouldConsiderPrinting =
        hasImage && !isWhiteBorder && !isCardBack && !isAMessyImageName;

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

    return nonPromoImage || firstImage || printings[0];
  }
};

const BOOMER_IMAGE_PRINTING_OVERRIDES: {
  [key: string]: { print: string };
} = {};

export const getBoomerPrinting = (
  card: { cardIdentifier: string; name: string },
  printings: Printing[],
): Printing => {
  const { cardIdentifier } = card;
  const matchingOverride = Object.entries(BOOMER_IMAGE_PRINTING_OVERRIDES).find(
    ([identifier]) => identifier === cardIdentifier,
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
      (printing) => printing.print === print,
    );
    return matchingPrint || printings[0];
  } else {
    let firstPrinting: Printing | undefined =
      printings.length > 0 ? printings[0] : undefined;

    for (const release of fullSetIdentifiers.values()) {
      const matchingPrinting = printings.find(
        (printing) => printing.set === release,
      );

      if (matchingPrinting) {
        firstPrinting = matchingPrinting;
        break;
      }
    }

    return firstPrinting as Printing;
  }
};

const MAX_RARITY_IMAGE_PRINTING_OVERRIDES: {
  [key: string]: { print: string };
} = {};

export const getMaxRarityPrinting = (
  card: { cardIdentifier: string; name?: string },
  printings: Printing[],
): Printing => {
  const { cardIdentifier } = card;
  const matchingOverride = Object.entries(
    MAX_RARITY_IMAGE_PRINTING_OVERRIDES,
  ).find(([identifier]) => identifier === cardIdentifier);

  const printingsIncludeMatchingOverride =
    !!matchingOverride &&
    printings.some((printing) => {
      const [, { print }] = matchingOverride;

      return printing.print === print;
    });

  if (printingsIncludeMatchingOverride) {
    const [, { print }] = matchingOverride;
    const matchingPrint = printings.find(
      (printing) => printing.print === print,
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
      const shouldIgnore = PRINTINGS_TO_IGNORE.includes(print);
      const shouldConsiderPrinting =
        hasImage && !isMissingFunctionalText && !isWhiteBorder && !shouldIgnore;

      if (shouldConsiderPrinting) {
        if (!firstImage) {
          firstImage = printing;
        }

        if (treatments?.includes(Treatment.FA)) {
          firstFullArt = printing;
          if (foiling === Foiling.Cold) {
            coldFullArt = printing;
          }

          if (upperCaseImage.includes("BACK")) {
            backFullArt = printing;
          } else {
            frontFullArt = printing;
          }
        }

        if (treatments?.includes(Treatment.EA)) {
          extendedArt = printing;
          if (foiling === Foiling.Cold) {
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
          upperCaseImage.includes("-MV") &&
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

        if (foiling === Foiling.Cold) {
          coldFoil = printing;
          if (edition === ReleaseEdition.Promo) {
            promoColdFoil = printing;
          }
        } else if (foiling === Foiling.Gold) {
          goldFoil = printing;
        }
      }
    }

    const finalFullArt =
      fullArtAlternateArt ||
      frontFullArt ||
      backFullArt ||
      coldFullArt ||
      firstFullArt;

    return (
      goldFoil ||
      finalFullArt ||
      coldExtendedArt ||
      marvel ||
      promoColdFoil ||
      promoExtendedArt ||
      coldFoil ||
      nonFoilExtendedArt ||
      extendedArt ||
      alternateBorder ||
      alternativeArt ||
      alternateText ||
      alphaEdition ||
      promoEdition ||
      firstEdition ||
      unlimitedEdition ||
      (firstImage as Printing)
    );
  }
};
