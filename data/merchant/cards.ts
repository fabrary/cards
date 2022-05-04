
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
    class: Class.Merchant,
    identifier: "ruudi-gem-keeper",
    functionalText: `You may only have PSA graded cards in your deck.

**Once per Turn Action** - {r}: Reveal the top card of your deck. If it's graded Gem Min 10, put it into your hand, otherwise each opponent may draw a card. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LSS001.width-450.png",
    keywords: [],
    name: "Ruu'di, Gem Keeper",
    rarity: Rarity.Promo,
    sets: [Release.Promos],
    type: Type.Hero,
    typeText: "Hero – Merchant",
    intellect: 4,
    hero: Hero.Ruudi,
    life: undefined,
    
  },{
    bannedFormats: [],
    class: Class.Merchant,
    identifier: "kavdaen-trader-of-skins",
    functionalText: `**Once per Turn Action** - {r}{r}{r}: If a hero has more {h} than all other hero's, they lose 1{h} and create a Copper token. Then if a hero has less {h} than all other hero's, they gain 1{h}. **Go again** *(It's an item with "***Action*** - {r}{r}{r}{r}, destroy Copper: Draw a card. ***Go again***")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER028.width-450.png",
    keywords: [],
    name: "Kavdaen, Trader of Skins",
    rarity: Rarity.Rare,
    sets: [Release.HeroDeck,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Merchant Hero – Young",
    intellect: 4,
    hero: Hero.Kavdaen,
    life: undefined,
    young: true,
  },{
    bannedFormats: [],
    class: Class.Merchant,
    identifier: "genis-wotchuneed",
    functionalText: `**Once per Turn Action** - {r}{r}: Each other hero may put a card from their hand on the bottom of their deck. If they do, they draw a card and you create a Silver token. If you gain no Silver this way, draw a card. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER053.width-450.png",
    keywords: [],
    name: "Genis Wotchuneed",
    rarity: Rarity.Majestic,
    sets: [Release.HeroDeck,Release.Everfest],
    type: Type.Hero,
    typeText: "Merchant Hero – Young",
    intellect: 4,
    hero: Hero.GenisWotchuneed,
    life: undefined,
    young: true,
  },{
    bannedFormats: [],
    class: Class.Merchant,
    identifier: "silver-palms",
    functionalText: `At the start of each other hero's turn, if they have less {h} than you, they may draw a card. If they do, you create a Silver token.

**Blade Break** *(If you defend with Silver Paws, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR086.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Silver Palms",
    rarity: Rarity.Legendary,
    sets: [Release.Everfest],
    type: Type.Equipment,
    typeText: "Merchant Equipment – Arms",
    defense: 2,
    
    talents: [],
    subType: EquipmentSubType.Arms
  }];
  