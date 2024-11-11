import {
  Class,
  coreSetIdentifiers,
  Format,
  Keyword,
  Rarity,
  Release,
  Subtype,
  Type,
} from "@flesh-and-blood/types";
import { clashBannedCards, clashLegalOverrideCards } from "./clash";

// Logic doesn't work well for duplicate cards from spreadsheets that might be missing some info or only have P rarity for e.g.
const clashAndLimitedLegalOverrideCards = [
  "Beckoning Mistblade",
  "Cosmo, Scroll of Ancestral Tapestry",
  "Fyendal's Fighting Spirit",
  "Lightning Press",
  "Runechant",
  "Tiger Taming Khakkara",
  "Zen State",
];

export const commonerBannedCards = [
  "Aether Ironweave",
  "Amulet of Ice",
  "Ball Lightning",
  "Belittle",
  "Stubby Hammerers",
];

const livingLegendBannedCards = ["Kraken's Aethervein"];

const LIMITED_SETS = Object.values(coreSetIdentifiers);

const FORMATS_TO_CHECK: Format[] = Object.values(Format).filter(
  (format) => format !== Format.Open
);

export const getLegalFormats = (
  bannedFormats: Format[],
  card: {
    blitzLegal: boolean;
    classicConstructedLegal: boolean;
    commonerLegal: boolean;
    name: string;
  },
  classes: Class[],
  keywords: Keyword[],
  rarities: Rarity[],
  sets: Release[],
  subtypes: Subtype[],
  types: Type[]
): Format[] => {
  const legalFormats: Format[] = [Format.Open];

  const { blitzLegal, classicConstructedLegal, commonerLegal } = card;

  const isHero = types.includes(Type.Hero);
  const isYoung =
    subtypes.includes(Subtype.Young) || classes.includes(Class.Adjudicator);
  const isYoungHero = isYoung && isHero;

  for (const format of FORMATS_TO_CHECK) {
    let isLegalPerFormat = true;

    const isBlitzFormat = [Format.Blitz, Format.BlitzLivingLegend].includes(
      format
    );
    if (isBlitzFormat && !blitzLegal) {
      isLegalPerFormat = false;
    }

    const isCCFormat = [
      Format.ClassicConstructed,
      Format.ClassicConstructedLivingLegend,
    ].includes(format);
    if (isCCFormat && !classicConstructedLegal) {
      isLegalPerFormat = false;
    }

    const isClashFormat = format === Format.Clash;
    if (isClashFormat) {
      const isOverrideAllowed =
        clashAndLimitedLegalOverrideCards.includes(card.name) ||
        clashLegalOverrideCards.includes(card.name);
      const isBanned =
        commonerBannedCards.includes(card.name) ||
        clashBannedCards.includes(card.name);
      const isNotTooRare = rarities.some((rarity) =>
        [Rarity.Token, Rarity.Common, Rarity.Rare].includes(rarity)
      );
      const isMentor = types.includes(Type.Mentor);
      const isSpecialization = keywords.includes(Keyword.Specialization);
      const isWeapon = types.includes(Type.Weapon);

      const isAllowed =
        isOverrideAllowed ||
        (!isBanned &&
          (isNotTooRare ||
            isMentor ||
            isSpecialization ||
            isWeapon ||
            isYoungHero));

      if (!isAllowed) {
        isLegalPerFormat = false;
      }
    }

    const isCommonerFormat = format === Format.Commoner;
    if (isCommonerFormat && !commonerLegal) {
      isLegalPerFormat = false;
    }

    const isLimitedFormat = [Format.Draft, Format.Sealed].includes(format);
    if (isLimitedFormat) {
      if (isHero) {
        const isToken = rarities.some((rarity) => rarity === Rarity.Token);

        if (!isToken) {
          isLegalPerFormat = false;
        }
      }

      const isOverrideAllowed = clashAndLimitedLegalOverrideCards.includes(
        card.name
      );

      const isOnlyPromo = sets.every((release) => release === Release.Promos);
      if (isOnlyPromo && !isOverrideAllowed) {
        isLegalPerFormat = false;
      }

      // const isInALimitedSet = sets.some((release) =>
      //   LIMITED_SETS.includes(release)
      // );
      // if (!isInALimitedSet) {
      //   isLegalPerFormat = false;
      // }
    }

    const isLivingLegendFormat = [
      Format.BlitzLivingLegend,
      Format.ClassicConstructedLivingLegend,
    ].includes(format);
    if (isLivingLegendFormat) {
      const isBanned = livingLegendBannedCards.includes(card.name);

      if (isBanned) {
        isLegalPerFormat = false;
      }
    }

    const heroMatchesFormat = isYoungHero
      ? ![
          Format.ClassicConstructed,
          Format.ClassicConstructedLivingLegend,
        ].includes(format)
      : [
          Format.ClassicConstructed,
          Format.ClassicConstructedLivingLegend,
        ].includes(format);
    const isLegalPerHeroAge = !isHero || heroMatchesFormat;

    const isNotBanned = !bannedFormats || !bannedFormats.includes(format);

    const shouldAddToFormat =
      isLegalPerFormat && isNotBanned && isLegalPerHeroAge;

    // if (card.name === "Ser Boltyn, Breaker of Dawn") {
    //   console.log(
    //     JSON.stringify(
    //       {
    //         heroMatchesFormat,
    //         isLegalPerHeroAge,
    //         isLegalPerFormat,
    //         isNotBanned,
    //         isHero,
    //         format,
    //         shouldAddToFormat,
    //       },
    //       null,
    //       2
    //     )
    //   );
    // }

    if (shouldAddToFormat) {
      legalFormats.push(format);
    }
  }

  legalFormats.sort();

  return legalFormats;
};
