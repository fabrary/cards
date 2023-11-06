import {
  Card,
  Class,
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

const fangsALot: Card = {
  artists: ["Hoodwill"],
  cardIdentifier: "fangs-a-lot-blue",
  classes: [Class.Generic],
  defaultImage: "FNG000",
  functionalText: `If Fangs A Lot is put into your banished zone from your graveyard, instead put it into your hand.`,
  printings: [
    {
      identifier: "FNG000",
      image: "FNG000",
      print: "FNG000",
      set: Release.Promos,
    },
    {
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
  { keyword: fangsALot.name.toLowerCase(), card: fangsALot },
];
