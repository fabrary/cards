import { Hero } from "@flesh-and-blood/types";
import { readFileSync } from "fs";
import { parse } from "papaparse";
import { getHeroFromString } from "../mapper";

const projectBlueLegalityOverridesFile = `${__dirname}/Project Blue legality - Overrides.csv`;

const booleanFields: string[] = ["banned"];
const arrayFields: string[] = ["bans", "specializations"];
const arrayDelimiter = " | ";

interface ClashLegalityOverride {
  card: string;
  banned: boolean;
  bans: Hero[];
  specializations: Hero[];
}
const getOverrides = (): ClashLegalityOverride[] => {
  const csv = readFileSync(projectBlueLegalityOverridesFile, "utf-8");
  const overrides = parse<ClashLegalityOverride>(csv, {
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

export const projectBlueBannedCards = overrides
  .filter(({ banned }) => banned)
  .map(({ card }) => card);

export const projectBlueLegalOverrides = overrides.filter(
  ({ bans, specializations }) => {
    const hasBans = !!bans && bans.length > 0;
    const hasSpecializations = !!specializations && specializations.length > 0;

    return hasBans || hasSpecializations;
  }
);
