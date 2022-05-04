import { Card } from "./interfaces";
import { cards as notClassedCards } from "./notClassed/cards";
import { cards as genericCards } from "./generic/cards";
import { cards as bardCards } from "./bard/cards";
import { cards as bruteCards } from "./brute/cards";
import { cards as guardianCards } from "./guardian/cards";
import { cards as illusionistCards } from "./illusionist/cards";
import { cards as mechanologistCards } from "./mechanologist/cards";
import { cards as merchantCards } from "./merchant/cards";
import { cards as ninjaCards } from "./ninja/cards";
import { cards as rangerCards } from "./ranger/cards";
import { cards as runebladeCards } from "./runeblade/cards";
import { cards as shapeshifterCards } from "./shapeshifter/cards";
import { cards as warriorCards } from "./warrior/cards";
import { cards as wizardCards } from "./wizard/cards";
  
export const cards: Card[] = [
  ...notClassedCards,
  ...genericCards,
  ...bardCards,
  ...bruteCards,
  ...guardianCards,
  ...illusionistCards,
  ...mechanologistCards,
  ...merchantCards,
  ...ninjaCards,
  ...rangerCards,
  ...runebladeCards,
  ...shapeshifterCards,
  ...warriorCards,
  ...wizardCards,
];