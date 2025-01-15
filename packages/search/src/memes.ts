import {
  Card,
  Class,
  Format,
  Hero,
  Rarity,
  Release,
  Subtype,
  Treatment,
  Type,
} from "@flesh-and-blood/types";

interface Meme {
  keyword: string;
  card: Card;
}

const commando: Card = {
  artists: ["Henrique Lindner", "Hoodwill"],
  cardIdentifier: "wolley-odnammoc-ecid".split("").reverse().join(""),
  classes: [Class.Assassin],
  defaultImage: "CMD000",
  legalFormats: [],
  legalHeroes: [Hero.Arakni, Hero.Crackni, Hero.Nuu, Hero.Slippy, Hero.Uzuri],
  name: "odnammoC eciD".split("").reverse().join(""),
  printings: [
    {
      artists: ["Henrique Lindner", "Hoodwill"],

      identifier: "CMD000",
      image: "CMD000",

      print: "CMD000",
      set: Release.TheHunted,
    },
  ],
  rarities: [Rarity.Majestic],
  rarity: Rarity.Majestic,
  setIdentifiers: ["CMD000"],
  sets: [Release.TheHunted],
  specialImage: "CMD000",
  subtypes: [],
  types: [Type.AttackReaction],
  typeText: "Assassin Attack Reaction",

  cost: 0,
  defense: 3,

  functionalText: `Target attack action card with **stealth** gets +2{p}. If it's attacking a **marked** hero, instead it gets +3{p} and you may banish an attack action card with **stealth** from your graveyard. If you do, the target becomes a copy of the banished card.`,

  pitch: 2,
};

const fangsALot: Card = {
  artists: ["Hoodwill"],
  cardIdentifier: "fangs-a-lot-blue",
  classes: [Class.Generic],
  defaultImage: "FNG000",
  functionalText: `If Fangs A Lot is put into your banished zone from your graveyard, instead put it into your hand.`,
  legalFormats: [],
  legalHeroes: [Hero.Kayo, Hero.Levia, Hero.Rhinar],
  printings: [
    {
      artists: ["Hoodwill"],
      identifier: "FNG000",
      image: "FNG000",
      print: "FNG000",
      set: Release.Promos,
    },
    {
      artists: ["Hoodwill"],
      identifier: "FNG000",
      image: "FNG000_Marvel",
      print: `FNG000-${Treatment.FA}`,
      set: Release.Promos,
      treatment: Treatment.FA,
    },
  ],
  name: "Fangs A Lot",
  rarities: [Rarity.Rare],
  rarity: Rarity.Rare,
  sets: [Release.Promos],
  setIdentifiers: ["FNG000"],
  specialImage: "FNG000_Marvel",
  subtypes: [Subtype.Attack],
  types: [Type.Action],
  typeText: "Generic Action - Attack",
};

export const memes: Meme[] = [
  { keyword: commando.name.toLowerCase(), card: commando },
  { keyword: fangsALot.name.toLowerCase(), card: fangsALot },
];
