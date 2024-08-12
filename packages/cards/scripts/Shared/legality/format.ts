import {
  Class,
  Format,
  Keyword,
  Rarity,
  Release,
  Subtype,
  Type,
} from "@flesh-and-blood/types";
import { clashBannedCards } from "./clash";

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
      const isBanned = !commonerLegal || clashBannedCards.includes(card.name);
      const isMentor = types.includes(Type.Mentor);
      const isSpecialization = keywords.includes(Keyword.Specialization);
      const isWeapon = types.includes(Type.Weapon);

      const isAllowed = !isBanned || isMentor || isSpecialization || isWeapon;
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

      const isOnlyPromo = sets.every((release) => release === Release.Promos);
      if (isOnlyPromo) {
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

    if (isLegalPerFormat && isNotBanned && isLegalPerHeroAge) {
      legalFormats.push(format);
    }
  }

  legalFormats.sort();

  return legalFormats;
};
