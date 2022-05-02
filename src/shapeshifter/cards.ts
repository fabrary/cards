
  import {
    ActionCard,
    Card,
    Class,
    EquipmentCard,
    Format,
    HeroCard,
    Keyword,
    Rarity,
    Release,
    ResourceCard,
    TokenCard,
    Type,
    WeaponCard
  } from '../interfaces';

  export const cards: (Card | ActionCard | EquipmentCard | HeroCard | ResourceCard | TokenCard | WeaponCard)[] = [{
    bannedFormats: [],
    class: Class.Shapeshifter,
    identifier: "taylor",
    functionalText: `You may have equipment of any class or talent in your inventory. Each equipment in your starting inventory must have a different name.

At the start of your turn, you may banish an equipment you control. If you do, equip a card of the same subtype from your inventory.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LSS003_A.width-450.png",
    keywords: [],
    name: "Taylor",
    rarity: Rarity.Promo,
    sets: [Release.Promos],
    type: Type.Hero,
    typeText: "Shapeshifter Hero – Young",
  },{
    bannedFormats: [],
    class: Class.Shapeshifter,
    identifier: "shiyana-diamond-gemini",
    functionalText: `You may have **specialization** cards of any hero in your deck.

At the beginning of your action phase, Shiyana becomes a copy of target hero until the start of your next turn, and gains "Cards you own are the class of your hero in addition to their other class types."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU97.width-450.png",
    keywords: [],
    name: "Shiyana, Diamond Gemini",
    rarity: Rarity.Legendary,
    sets: [Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Shapeshifter Hero – Young",
  }];
  