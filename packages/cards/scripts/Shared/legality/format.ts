import {
  Card,
  Class,
  coreSetIdentifiers,
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
import { clashBannedCards, clashLegalOverrides } from "./clash";
import { projectBlueBannedCards } from "./project-blue";

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

const livingLegendBannedCards = ["Kraken's Aethervein"];

const LIMITED_SETS = Object.values(coreSetIdentifiers);

const FORMATS_TO_CHECK: Format[] = Object.values(Format).filter(
  (format) => format !== Format.Open
);

const CARDS_TO_LOG: string[] = [
  // "Magrar"
];

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

  const isMacro = types.includes(Type.Macro);
  const isHero = types.includes(Type.Hero);
  const isYoung =
    subtypes.includes(Subtype.Young) ||
    classes.includes(Class.Adjudicator) ||
    subtypes.includes(Subtype.PitFighter);
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
      const isBanned = clashBannedCards.includes(card.name);
      const isNotTooRare =
        rarities.some((rarity) =>
          [Rarity.Basic, Rarity.Token, Rarity.Common, Rarity.Rare].includes(
            rarity
          )
        ) || rarities.every((rarity) => rarity === Rarity.Promo);
      const isMentor = types.includes(Type.Mentor);
      const isSpecialization =
        keywords.includes(Keyword.Specialization) ||
        clashLegalOverrides.some(
          (override) =>
            override.card === card.name && override.specializations.length > 0
        );
      const isWeapon = types.includes(Type.Weapon);

      const isAllowed =
        !isBanned &&
        (isNotTooRare ||
          isMentor ||
          isSpecialization ||
          isWeapon ||
          isYoungHero);

      if (!isAllowed) {
        isLegalPerFormat = false;
      }
    }

    const isPitFightFormat = format === Format.UltimatePitFight;
    if (isPitFightFormat) {
      const isPitFighter = subtypes.includes(Subtype.PitFighter);
      if (isPitFighter) {
        isLegalPerFormat = true;
      }
    }

    const isProjectBlueFormat = format === Format.ProjectBlue;
    if (isProjectBlueFormat) {
      const isBanned = projectBlueBannedCards.includes(card.name);
      const isNotTooRare = rarities.some((rarity) =>
        [Rarity.Basic, Rarity.Token, Rarity.Common, Rarity.Rare].includes(
          rarity
        )
      );

      const isAllowed = !isBanned && isNotTooRare;
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
        const tokenOrBasicOrRare = [Rarity.Basic, Rarity.Token, Rarity.Rare];
        const isTokenOrBasicOrRare = rarities.some((rarity) =>
          tokenOrBasicOrRare.includes(rarity)
        );

        if (!isTokenOrBasicOrRare) {
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

    if (CARDS_TO_LOG.includes(card.name)) {
      console.log(
        JSON.stringify(
          {
            name: card.name,
            classicConstructedLegal,
            heroMatchesFormat,
            isLegalPerHeroAge,
            isLegalPerFormat,
            isNotBanned,
            isHero,
            format,
            shouldAddToFormat,
          },
          null,
          2
        )
      );
    }

    if (shouldAddToFormat) {
      legalFormats.push(format);
    }
  }

  legalFormats.sort();

  return legalFormats;
};

export const getLegalOverrides = (
  {
    name,
  }: {
    name: string;
  },
  defaultLegalHeroes: Hero[]
): LegalOverride[] | undefined => {
  const matchingClashOverride = clashLegalOverrides.find(
    ({ card }) => card === name
  );

  if (matchingClashOverride) {
    const legalHeroes: Hero[] =
      matchingClashOverride.specializations.length > 0
        ? matchingClashOverride.specializations
        : defaultLegalHeroes.filter(
            (hero) => !matchingClashOverride.bans.includes(hero)
          );

    const legalHeroesAreTheSame =
      defaultLegalHeroes.sort().join("-") === legalHeroes.sort().join("-");

    if (legalHeroesAreTheSame) {
      return undefined;
    } else {
      return [
        {
          format: Format.Clash,
          heroes: legalHeroes,
        },
      ];
    }
  } else {
    return undefined;
  }
};

const releaseInfoForLimitedFormat = releases.filter(
  ({ releaseType }) => releaseType === ReleaseType.StandaloneBooster
);
const limitedFormatReleases = releaseInfoForLimitedFormat.map(
  ({ release }) => release
);

export const getConfirmedLegalFormats = (card: Card) => {
  const legalFormats = card.legalFormats.filter((format) => {
    let isConfirmedLegal = true;

    const isLimited = [Format.Draft, Format.Sealed].includes(format);
    if (isLimited) {
      const coreSetsCardIsIn = releaseInfoForLimitedFormat.filter(
        ({ release }) => card.sets.includes(release)
      );
      const isInAtLeastOneLimitedSet = coreSetsCardIsIn.length > 0;
      isConfirmedLegal = isInAtLeastOneLimitedSet;

      // Make sure card isn't an expansion card in every core set it's in
      const cardIsAnExpansionCardInEveryLimitedSet = card.printings.every(
        ({ isExpansionSlot, set }) => {
          const isCoreSet = limitedFormatReleases.includes(set);

          return isCoreSet ? isExpansionSlot : true;
        }
      );
      isConfirmedLegal = !cardIsAnExpansionCardInEveryLimitedSet;

      if (isConfirmedLegal) {
        const rarityRestrictionsFromSets = coreSetsCardIsIn.map(
          ({ raritiesExcludedInLimited }) => raritiesExcludedInLimited
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
            const cardViolatesRarityRestrictions = card.rarities
              .filter(
                (rarity) => ![Rarity.Promo, Rarity.Marvel].includes(rarity)
              )
              .every((rarity) =>
                rarityRestrictionsFromSets[0]?.includes(rarity)
              );
            if (cardViolatesRarityRestrictions) {
              isConfirmedLegal = false;
            }
          }
        }
      }
    }

    return isConfirmedLegal;
  });

  return legalFormats;
};
