import { Card, Hero } from "@flesh-and-blood/types";
import { shorthands as availableShorthands } from "./shorthands";

const CARD_IDENTIFIER_TO_LOG = "";
// const CARD_IDENTIFIER_TO_LOG = "zoom-in-blue";

interface heroShortName {
  heroIdentifiers: string[];
  shortName: string;
}
const heroShortNames: heroShortName[] = [
  {
    heroIdentifiers: ["arakni-5lp3d-7hru-7h3-cr4x"],
    shortName: "Arakni, Slippy",
  },
  {
    heroIdentifiers: ["arakni-huntsman"],
    shortName: "Arakni, Huntsman",
  },
  {
    heroIdentifiers: ["arakni-marionette"],
    shortName: "Arakni, Marionette",
  },
  {
    heroIdentifiers: ["arakni-web-of-deceit"],
    shortName: "Arakni, Web of Deceit",
  },
  {
    heroIdentifiers: ["kayo-strong-arm"],
    shortName: "Kayo, RKO",
  },
  {
    heroIdentifiers: ["kayo-underhanded-cheat"],
    shortName: "Kayo, RKO",
  },
  {
    heroIdentifiers: ["prism-advent-of-thrones"],
    shortName: "Prism, AoT",
  },
  {
    heroIdentifiers: ["professor-teklovossen"],
    shortName: "Professor",
  },
];

export const getShortName = (card: Card): string | undefined => {
  if (card.cardIdentifier === CARD_IDENTIFIER_TO_LOG) {
    console.log(JSON.stringify(card, null, 2));
  }

  const matchingShortName = heroShortNames.find(({ heroIdentifiers }) =>
    heroIdentifiers.includes(card.cardIdentifier)
  )?.shortName;

  return matchingShortName;
};
