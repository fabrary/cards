import { Card, Class, Format, Rarity, Release, Talent, Type } from "../cards";

export const cards: Card[] = [
  {
    class: Class.Generic,
    identifier: "life-for-a-life-red",
    imageUrl:
      "https://storage.googleapis.com/fabmaster/media/images/ARC164.width-450.png",
    keywords: ["Generic Action", "Attack"],
    name: "Life for a Life",
    rarity: Rarity.Rare,
    setIdentifiers: ["ARC164"],
    sets: [Release.ArcaneRising],
    stats: {
      attack: 4,
      cost: 1,
      defense: 1,
      pitch: 1,
    },
    text: "If Life for a Life hits, gain 1{h}.\n\nWhen you play Life for a Life, if you have less {h} than an opposing hero, it gains **go again.**",
    type: Type.AttackAction,
  },
  {
    class: Class.Generic,
    identifier: "life-for-a-life-yellow",
    imageUrl:
      "https://storage.googleapis.com/fabmaster/media/images/ARC165.width-450.png",
    keywords: ["Generic Action", "Attack"],
    name: "Life for a Life",
    rarity: Rarity.Rare,
    setIdentifiers: ["ARC165"],
    sets: [Release.ArcaneRising],
    stats: {
      attack: 3,
      cost: 1,
      defense: 1,
      pitch: 2,
    },
    text: "If Life for a Life hits, gain 1{h}.\n\nWhen you play Life for a Life, if you have less {h} than an opposing hero, it gains **go again.**",
    type: Type.AttackAction,
  },
  {
    class: Class.Generic,
    identifier: "life-for-a-life-blue",
    imageUrl:
      "https://storage.googleapis.com/fabmaster/media/images/ARC166.width-450.png",
    keywords: ["Generic Action", "Attack"],
    name: "Life for a Life",
    rarity: Rarity.Rare,
    setIdentifiers: ["ARC166"],
    sets: [Release.ArcaneRising],
    stats: {
      attack: 2,
      cost: 1,
      defense: 1,
      pitch: 3,
    },
    text: "If Life for a Life hits, gain 1{h}.\n\nWhen you play Life for a Life, if you have less {h} than an opposing hero, it gains **go again.**",
    type: Type.AttackAction,
  },
];
