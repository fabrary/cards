
  import {
    ActionCard,
    ActionSubType,
    Card,
    Class,
    EquipmentCard,
    EquipmentSubType,
    Format,
    HandsRequired,
    Hero,
    HeroCard,
    Keyword,
    Rarity,
    Release,
    ResourceCard,
    ResourceSubType,
    TokenCard,
    TokenSubType,
    Type,
    WeaponCard,
    WeaponSubType
  } from '../interfaces';

  export const cards: (Card | ActionCard | EquipmentCard | HeroCard | ResourceCard | TokenCard | WeaponCard)[] = [{
    bannedFormats: [Format.Blitz,Format.ClassicConstructed],
    class: Class.Bard,
    identifier: "yorick-weaver-of-tales",
    functionalText: `At the start of the game, all heroes shuffle their starting decks together. All heroes share the same deck and graveyard this game.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LSS004_A.width-450.png",
    keywords: [],
    name: "Yorick, Weaver of Tales",
    rarity: Rarity.Promo,
    sets: [Release.Promos],
    type: Type.Hero,
    typeText: "Bard Hero – Young",
    intellect: 4,
    hero: Hero.Yorick,
    life: undefined,
    young: true,
  }];
  