import {
  Card,
  Class,
  Format,
  Hero,
  Keyword,
  LegalOverride,
  Rarity,
  Release,
  releases,
  ReleaseType,
  Subtype,
  Type,
} from "@flesh-and-blood/types";
import { goldenAgeBannedCards } from "./golden-age";
import { getIsASpecialUsePromo } from "./special-use-promos";

// Logic doesn't work well for duplicate cards from spreadsheets that might be missing some info or only have P rarity for e.g.
const limitedLegalOverrideCards = [
  "Beckoning Mistblade",
  "Cosmo, Scroll of Ancestral Tapestry",
  "Fyendal's Fighting Spirit",
  "Lightning Press",
  "Runechant",
  "Tiger Taming Khakkara",
  "Zen State",
];

const SILVER_AGE_LEGAL_CARD_EXCEPTIONS = ["Dawnblade, Resplendent"];

const RARITIES_ALLOWED_IN_SILVER_AGE = [
  Rarity.Basic,
  Rarity.Token,
  Rarity.Common,
  Rarity.Rare,
];

const YOUNG_HERO_FORMATS = [
  Format.Blitz,
  Format.Draft,
  Format.Sealed,
  Format.SilverAge,
  Format.UltimatePitFight,
];

const ADULT_HERO_FORMATS = [
  Format.ClassicConstructed,
  Format.LivingLegend,
  Format.GoldenAge,
];

const FORMATS_TO_CHECK: Format[] = Object.values(Format).filter(
  (format) => format !== Format.Open,
);

const CARDS_TO_LOG: string[] = ["Viserai, Rune Blood"];

const CONFIRMED_CARDS_TO_LOG: string[] = ["Viserai, Rune Blood"];

export const getBannedAndLegalFormats = (
  card: {
    classicConstructedBanned?: boolean;
    classicConstructedLivingLegend?: boolean;
    livingLegendBanned?: boolean;
    name: string;
    silverAgeBanned?: boolean;
  },
  classes: Class[],
  keywords: Keyword[],
  rarities: Rarity[],
  setIdentifiers: string[],
  sets: Release[],
  subtypes: Subtype[],
  types: Type[],
): { bannedFormats: Format[]; legalFormats: Format[] } => {
  const bannedFormats: Format[] = [];
  const legalFormats: Format[] = [Format.Open];

  const {
    classicConstructedBanned,
    classicConstructedLivingLegend,
    livingLegendBanned,
    name,
    silverAgeBanned,
  } = card;

  const isMacro = types.includes(Type.Macro);
  const isHero = types.includes(Type.Hero);
  const isYoung =
    subtypes.includes(Subtype.Young) ||
    classes.includes(Class.Adjudicator) ||
    subtypes.includes(Subtype.PitFighter);
  const isAnAdultHero = isHero && !isYoung;
  const isAYoungHero = isYoung && isHero;
  const isAMentor = types.includes(Type.Mentor);
  const isAPitFighter = subtypes.includes(Subtype.PitFighter);
  const isASpecialUsePromo = getIsASpecialUsePromo(name, setIdentifiers);

  for (const format of FORMATS_TO_CHECK) {
    let isBannedInFormat = false;
    let isLegalPerFormat = true;

    const isBlitzFormat = format === Format.Blitz;
    if (isBlitzFormat) {
      if (isAPitFighter || isASpecialUsePromo || isAnAdultHero) {
        isLegalPerFormat = false;
      }
    }

    const isCCFormat = format === Format.ClassicConstructed;
    if (isCCFormat) {
      const isALivingLegendHero = classicConstructedLivingLegend && isHero;
      if (
        isALivingLegendHero ||
        isAYoungHero ||
        isASpecialUsePromo ||
        isAPitFighter ||
        isAMentor
      ) {
        isLegalPerFormat = false;
      }

      if (
        isLegalPerFormat &&
        (classicConstructedBanned || classicConstructedLivingLegend)
      ) {
        isBannedInFormat = true;
      }
    }

    const isPitFightFormat = format === Format.UltimatePitFight;
    if (isPitFightFormat) {
      if (isAPitFighter) {
        isLegalPerFormat = true;
      }
      if (isAnAdultHero) {
        isLegalPerFormat = false;
      }
    }

    const isSilverAgeFormat = format === Format.SilverAge;
    if (isSilverAgeFormat) {
      if (isAPitFighter || isASpecialUsePromo || isAnAdultHero) {
        isLegalPerFormat = false;
      }

      if (silverAgeBanned) {
        isBannedInFormat = true;
      }
    }

    const isGoldenAgeFormat = format === Format.GoldenAge;
    if (isGoldenAgeFormat) {
      const isBanned = goldenAgeBannedCards.includes(card.name);
      const isABannedHero = isBanned && isAnAdultHero;

      if (isASpecialUsePromo || isABannedHero) {
        isLegalPerFormat = false;
      }

      if (isLegalPerFormat && isBanned) {
        isBannedInFormat = true;
      }
    }

    const isLimitedFormat = [Format.Draft, Format.Sealed].includes(format);
    if (isLimitedFormat) {
      if (isHero) {
        const tokenOrBasicOrRare = [Rarity.Basic, Rarity.Token, Rarity.Rare];
        const isTokenOrBasicOrRare = rarities.some((rarity) =>
          tokenOrBasicOrRare.includes(rarity),
        );

        const isLegalInLimited = isTokenOrBasicOrRare && isAYoungHero;

        if (!isLegalInLimited) {
          isLegalPerFormat = false;
        }
      }

      const isOverrideAllowed = limitedLegalOverrideCards.includes(card.name);

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

    if (isMacro && !isLimitedFormat) {
      isLegalPerFormat = false;
    }

    const isLivingLegendFormat = [Format.LivingLegend].includes(format);
    if (isLivingLegendFormat) {
      if (isAYoungHero || isASpecialUsePromo || isAPitFighter || isAMentor) {
        isLegalPerFormat = false;
      }

      if (livingLegendBanned) {
        isBannedInFormat = true;
      }
    }

    const heroMatchesFormat = isAYoungHero
      ? !ADULT_HERO_FORMATS.includes(format)
      : ADULT_HERO_FORMATS.includes(format);
    const isLegalPerHeroAge = !isHero || heroMatchesFormat;

    const isNotBanned = !bannedFormats || !bannedFormats.includes(format);
    const isAnException =
      format === Format.SilverAge &&
      SILVER_AGE_LEGAL_CARD_EXCEPTIONS.includes(card.name);

    const shouldAddToBannedFormats = isBannedInFormat;
    const shouldAddToLegalFormats =
      isAnException || (isLegalPerFormat && isNotBanned && isLegalPerHeroAge);

    if (CARDS_TO_LOG.includes(card.name)) {
      console.log(
        JSON.stringify(
          {
            name: card.name,
            heroMatchesFormat,
            isLegalPerHeroAge,
            isLegalPerFormat,
            isNotBanned,
            isHero,
            format,
            shouldAddToFormat: shouldAddToLegalFormats,
            types,
          },
          null,
          2,
        ),
      );
    }

    if (shouldAddToBannedFormats) {
      bannedFormats.push(format);
    }
    if (shouldAddToLegalFormats) {
      legalFormats.push(format);
    }
  }

  bannedFormats.sort();
  legalFormats.sort();

  return { bannedFormats, legalFormats };
};

const releaseInfoForLimitedFormat = releases.filter(
  ({ releaseType }) => releaseType === ReleaseType.StandaloneBooster,
);
const limitedFormatReleases = releaseInfoForLimitedFormat.map(
  ({ release }) => release,
);

export const getConfirmedBannedAndLegalFormats = ({
  bannedFormats,
  classes,
  keywords,
  legalFormats,
  name,
  printings,
  rarities,
  setIdentifiers,
  sets,
  subtypes,
  types,
}: Card): { bannedFormats?: Format[]; legalFormats: Format[] } => {
  const isHero = types.includes(Type.Hero);

  const isAnAdjudicator = classes.includes(Class.Adjudicator);
  const isYoung =
    isAnAdjudicator ||
    subtypes.includes(Subtype.Young) ||
    subtypes.includes(Subtype.PitFighter);
  const isAnAdultHero = isHero && !isYoung;
  const isAYoungHero = isYoung && isHero;
  const isPitFighter = subtypes.includes(Subtype.PitFighter);

  const isASpecialUsePromo = getIsASpecialUsePromo(name, setIdentifiers);

  const confirmedBannedFormats = bannedFormats?.filter((format) => {
    let isConfirmedBanned = true;

    return isConfirmedBanned;
  });

  const confirmedLegalFormats = legalFormats.filter((format) => {
    let isConfirmedLegal = true;

    const isLimited = [Format.Draft, Format.Sealed].includes(format);
    if (isLimited) {
      const coreSetsCardIsIn = releaseInfoForLimitedFormat.filter(
        ({ release }) => sets.includes(release),
      );
      const isInAtLeastOneLimitedSet = coreSetsCardIsIn.length > 0;
      isConfirmedLegal = isInAtLeastOneLimitedSet;

      // Make sure card isn't an expansion card in every core set it's in
      const cardIsAnExpansionCardInEveryLimitedSet = printings.every(
        ({ isExpansionSlot, set }) => {
          const isCoreSet = limitedFormatReleases.includes(set);

          return isCoreSet ? isExpansionSlot : true;
        },
      );
      isConfirmedLegal = !cardIsAnExpansionCardInEveryLimitedSet;

      if (isConfirmedLegal) {
        const rarityRestrictionsFromSets = coreSetsCardIsIn.map(
          ({ raritiesExcludedInLimited }) => raritiesExcludedInLimited,
        );

        if (rarityRestrictionsFromSets.length > 0) {
          let rarityRestrictionsAreEqual = true;
          const firstRarityRestrictions = rarityRestrictionsFromSets[0]
            ?.sort()
            .join() as string;
          for (const rarityRestrictions of rarityRestrictionsFromSets) {
            if (rarityRestrictions) {
              const matches =
                firstRarityRestrictions === rarityRestrictions.sort().join();
              if (!matches) {
                rarityRestrictionsAreEqual = false;
                break;
              }
            } else {
              rarityRestrictionsAreEqual = false;
              break;
            }
          }

          if (rarityRestrictionsAreEqual) {
            // check that matches rarity restrictions
            const cardViolatesRarityRestrictions = rarities
              .filter(
                (rarity) => ![Rarity.Promo, Rarity.Marvel].includes(rarity),
              )
              .every((rarity) =>
                rarityRestrictionsFromSets[0]?.includes(rarity),
              );
            if (cardViolatesRarityRestrictions) {
              isConfirmedLegal = false;
            }
          }
        }
      }
    }

    const isYoungHeroFormat = YOUNG_HERO_FORMATS.includes(format);
    if (isYoungHeroFormat) {
      if (isAnAdultHero) {
        isConfirmedLegal = false;
      }
    }

    const isBlitzFormat = format === Format.Blitz;
    if (isBlitzFormat) {
      if (
        isAnAdjudicator ||
        isPitFighter ||
        isASpecialUsePromo ||
        isAnAdultHero
      ) {
        isConfirmedLegal = false;
      }
    }

    const isAdultHeroFormat = ADULT_HERO_FORMATS.includes(format);
    if (isAdultHeroFormat) {
      if (isAYoungHero) {
        isConfirmedLegal = false;
      }
    }

    const isSilverAgeFormat = format === Format.SilverAge;
    if (isSilverAgeFormat) {
      const isNotTooRare = rarities.some((rarity) =>
        RARITIES_ALLOWED_IN_SILVER_AGE.includes(rarity),
      );

      const isAnException = SILVER_AGE_LEGAL_CARD_EXCEPTIONS.includes(name);

      const isAllowed = isNotTooRare || isAnException;
      if (!isAllowed) {
        isConfirmedLegal = false;
      }
    }

    if (CONFIRMED_CARDS_TO_LOG.includes(name)) {
      console.log(
        JSON.stringify(
          {
            name,
            isConfirmedLegal,
            isHero,
            isYoung,
            format,
            types,
          },
          null,
          2,
        ),
      );
    }

    return isConfirmedLegal;
  });

  return {
    bannedFormats: confirmedBannedFormats,
    legalFormats: confirmedLegalFormats,
  };
};
