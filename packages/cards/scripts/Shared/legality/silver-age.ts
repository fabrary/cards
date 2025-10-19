import { Hero } from "@flesh-and-blood/types";
import { readFileSync } from "fs";
import { parse } from "papaparse";
import { getHeroFromString } from "../mapper";

const silverAgeLegalityOverridesFile = `${__dirname}/Silver Age legality - Overrides.csv`;

const booleanFields: string[] = ["banned"];
const arrayFields: string[] = ["bans", "specializations"];
const arrayDelimiter = " | ";

interface SilverAgeLegalityOverride {
  card: string;
  banned: boolean;
  bans: Hero[];
  specializations: Hero[];
}
const getOverrides = (): SilverAgeLegalityOverride[] => {
  const csv = readFileSync(silverAgeLegalityOverridesFile, "utf-8");
  const overrides = parse<SilverAgeLegalityOverride>(csv, {
    header: true,
    skipEmptyLines: true,
    transform: (value: string, field: string) => {
      if (arrayFields.includes(field)) {
        return value.split(arrayDelimiter);
      } else if (booleanFields.includes(field)) {
        return value === "Yes";
      } else {
        return value;
      }
    },
    transformHeader: (original: string) => original.toLowerCase(),
  });

  return overrides.data.map((override) => {
    const bans: Hero[] = (override.bans || [])
      .map((heroString) => getHeroFromString(heroString))
      .filter((hero) => !!hero);

    const specializations: Hero[] = (override.specializations || [])
      .map((heroString) => getHeroFromString(heroString))
      .filter((hero) => !!hero);

    return {
      ...override,
      bans,
      specializations,
    };
  });
};

const overrides = getOverrides();

export const silverAgeBannedCards = overrides
  .filter(({ banned }) => banned)
  .map(({ card }) => card);

export const silverAgeLegalOverrides = overrides.filter(
  ({ bans, specializations }) => {
    const hasBans = !!bans && bans.length > 0;
    const hasSpecializations = !!specializations && specializations.length > 0;

    return hasBans || hasSpecializations;
  }
);
