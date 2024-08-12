import { Hero } from "@flesh-and-blood/types";

export const clashBannedCards = [
  "Amulet of Ice",
  "Ball Lightning",
  "Belittle",
  "Drone of Brutality",
  "Duskblade",
  "Rosetta Thorn",
  "Stubby Hammerers",
];

export const clashLegalCards = [];

export const clashSpecializationOverrides: {
  heroes: string[];
  cardIdentifiers: string[];
}[] = [
  {
    heroes: [Hero.Briar],
    cardIdentifiers: ["rosetta-thorn"],
  },
  {
    heroes: [Hero.Emperor],
    cardIdentifiers: ["command-and-conquer-red"],
  },
  {
    heroes: [Hero.Prism],
    cardIdentifiers: [
      "figment-of-erudition-yellow",
      "figment-of-judgment-yellow",
      "figment-of-protection-yellow",
      "figment-of-ravages-yellow",
      "figment-of-rebirth-yellow",
      "figment-of-tenacity-yellow",
      "figment-of-triumph-yellow",
      "figment-of-war-yellow",
    ],
  },
];
