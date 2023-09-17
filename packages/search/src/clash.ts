import { Hero } from "@flesh-and-blood/types";

export const clashSpecializationOverrides: {
  heroes: string[];
  cardIdentifiers: string[];
}[] = [
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
