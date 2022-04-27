import { Card, Class, Format, Rarity, Release, Talent, Type } from "../cards";

export const cards: Card[] = [
  {
    bannedFormats: [Format.Blitz],
    class: Class.Wizard,
    identifier: "stir-the-aetherwinds-red",
    imageUrl:
      "https://storage.googleapis.com/fabmaster/media/images/ARC129.width-450.png",
    keywords: ["Wizard", "Action"],
    name: "Stir the Aetherwinds",
    rarity: Rarity.Rare,
    setIdentifiers: ["ARC129"],
    sets: [Release.Everfest],
    stats: {
      cost: 2,
      defense: 2,
      pitch: 1,
    },
    text: "You may play your next Wizard 'non-attack' action card this turn as though it were an instant and if it has an effect that deals arcane damage, instead that effect deals that much arcane damage plus 3.",
    type: Type.Action,
  },
  {
    bannedFormats: [Format.Blitz],
    class: Class.Wizard,
    identifier: "stir-the-aetherwinds-yellow",
    imageUrl:
      "https://storage.googleapis.com/fabmaster/media/images/ARC130.width-450.png",
    keywords: ["Wizard", "Action"],
    name: "Stir the Aetherwinds",
    rarity: Rarity.Rare,
    setIdentifiers: ["ARC130"],
    sets: [Release.Everfest],
    stats: {
      cost: 2,
      defense: 2,
      pitch: 2,
    },
    text: "You may play your next Wizard 'non-attack' action card this turn as though it were an instant and if it has an effect that deals arcane damage, instead that effect deals that much arcane damage plus 2.",
    type: Type.Action,
  },
  {
    bannedFormats: [Format.Blitz],
    class: Class.Wizard,
    identifier: "stir-the-aetherwinds-blue",
    imageUrl:
      "https://storage.googleapis.com/fabmaster/media/images/ARC131.width-450.png",
    keywords: ["Wizard", "Action"],
    name: "Stir the Aetherwinds",
    rarity: Rarity.Rare,
    setIdentifiers: ["ARC131"],
    sets: [Release.Everfest],
    stats: {
      cost: 2,
      defense: 2,
      pitch: 3,
    },
    text: "You may play your next Wizard 'non-attack' action card this turn as though it were an instant and if it has an effect that deals arcane damage, instead that effect deals that much arcane damage plus 1.",
    type: Type.Action,
  },
];
