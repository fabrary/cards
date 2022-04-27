import { Card, Class, Format, Rarity, Release, Talent, Type } from "../cards";

export const cards: Card[] = [
  {
    class: Class.Brute,
    identifier: "barraging-big-horn-red",
    imageUrl:
      "https://storage.googleapis.com/fabmaster/media/images/CRU010.width-450.png",
    keywords: ["Brute Action", "Attack"],
    name: "Barraging Big Horn",
    rarity: Rarity.Rare,
    setIdentifiers: ["CRU010"],
    sets: [Release.CrucibleOfWar],
    stats: {
      attack: 7,
      cost: 2,
      defense: 3,
      pitch: 1,
    },
    text: "As an additional cost to play Barraging Big Horn, discard a random card.\n\nWhile Barraging Big Horn is defended by less than 2 non-equipment cards, it has **go again**.",
    type: Type.AttackAction,
  },
  {
    class: Class.Brute,
    identifier: "barraging-big-horn-yellow",
    imageUrl:
      "https://storage.googleapis.com/fabmaster/media/images/CRU011.width-450.png",
    keywords: ["Brute Action", "Attack"],
    name: "Barraging Big Horn",
    rarity: Rarity.Rare,
    setIdentifiers: ["CRU011"],
    sets: [Release.CrucibleOfWar],
    stats: {
      attack: 6,
      cost: 2,
      defense: 3,
      pitch: 2,
    },
    text: "As an additional cost to play Barraging Big Horn, discard a random card.\n\nWhile Barraging Big Horn is defended by less than 2 non-equipment cards, it has **go again**.",
    type: Type.AttackAction,
  },
  {
    class: Class.Brute,
    identifier: "barraging-big-horn-blue",
    imageUrl:
      "https://storage.googleapis.com/fabmaster/media/images/CRU012.width-450.png",
    keywords: ["Brute Action", "Attack"],
    name: "Barraging Big Horn",
    rarity: Rarity.Rare,
    setIdentifiers: ["CRU012"],
    sets: [Release.CrucibleOfWar],
    stats: {
      attack: 5,
      cost: 2,
      defense: 3,
      pitch: 3,
    },
    text: "As an additional cost to play Barraging Big Horn, discard a random card.\n\nWhile Barraging Big Horn is defended by less than 2 non-equipment cards, it has **go again**.",
    type: Type.AttackAction,
  },
];
