
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
    class: Class.Generic,
    identifier: "go-bananas-yellow",
    functionalText: `Name an action card. Open and reveal a booster pack of Flesh and Blood and put all cards with the chosen name into your hand. If the booster pack does not contain a card with the chosen name, you may repeat this process.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LSS002-P.width-450.png",
    keywords: [],
    name: "Go Bananas",
    rarity: Rarity.Promo,
    sets: [Release.Promos],
    type: Type.Instant,
    typeText: "Generic Instant",
    
    
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "heart-of-fyendal-blue",
    functionalText: `When you pitch Heart of Fyendal, if you have less {h} than your opponent, gain 1{h}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_0.width-450.png",
    keywords: [Keyword.Legendary],
    name: "Heart of Fyendal",
    rarity: Rarity.Fabled,
    sets: [Release.WelcomeToRathe],
    type: Type.Resource,
    typeText: "Generic Resource – Gem",
    
    
    pitch: 3,
    talents: [],
    subType: ResourceSubType.Gem
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "fyendals-spring-tunic",
    functionalText: `At the start of your turn, if Fyendal's Spring Tunic has less than 3 energy counters, you may put an energy counter on it.

**Instant** - Remove 3 energy counters from Fyendal's Spring Tunic: Gain {r}

**Blade Break** *(If your defend with Fyendal's Spring Tunic, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB001-P.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Fyendal's Spring Tunic",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.WelcomeToRathe,Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Generic Equipment – Chest",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "hope-merchants-hood",
    functionalText: `**Instant** - Destroy Hope Merchant's Hood: Shuffle any number of cards from your hand into your deck, then draw that many cards.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_151.width-450.png",
    keywords: [],
    name: "Hope Merchant's Hood",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Generic Equipment – Head",
    
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    bannedFormats: [Format.Blitz],
    class: Class.Generic,
    identifier: "heartened-cross-strap",
    functionalText: `**Action** - Destroy Heartened Cross Strap: The next attack action card you play this turn costs {r}{r} less to play. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB063.width-450.png",
    keywords: [],
    name: "Heartened Cross Strap",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Generic Equipment – Chest",
    
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "goliath-gauntlet",
    functionalText: `**Action** - Destroy Goliath Gauntlet: The next attack action card with cost 2 or greater you play this turn gains +2{p}. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB064.width-450.png",
    keywords: [],
    name: "Goliath Gauntlet",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Generic Equipment – Arms",
    
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "snapdragon-scalers",
    functionalText: `**Attack Reaction** - Destroy Snapdragon Scalers: Target attack action card with cost 1 or less gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB065.width-450.png",
    keywords: [],
    name: "Snapdragon Scalers",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Generic Equipment – Legs",
    
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "ironrot-helm",
    functionalText: `**Blade Break** *(If your defend with Ironrot Helm, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_155.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Ironrot Helm",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Generic Equipment – Head",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "ironrot-plate",
    functionalText: `**Blade Break** *(If your defend with Ironrot Plate, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_156.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Ironrot Plate",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Generic Equipment – Chest",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "ironrot-gauntlet",
    functionalText: `**Blade Break** *(If your defend with Ironrot Gauntlet, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_157.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Ironrot Gauntlet",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Generic Equipment – Arms",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "ironrot-legs",
    functionalText: `**Blade Break** *(If your defend with Ironrot Legs, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_158.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Ironrot Legs",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Generic Equipment – Legs",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "enlightened-strike-red",
    functionalText: `As an additional cost to play Enlightened Strike, put a card from your hand on the bottom of your deck.

Choose 1;
- Draw a card.
- Enlightened Strike gains +2{p}
- Enlightened Strike gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_159.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Enlightened Strike",
    rarity: Rarity.Majestic,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "tome-of-fyendal-yellow",
    functionalText: `Draw 2 cards.

If Tome of Fyendal is played from arsenal, gain 1{h} for each card in your hand.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_160.width-450.png",
    keywords: [],
    name: "Tome of Fyendal",
    rarity: Rarity.Majestic,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "last-ditch-effort-blue",
    functionalText: `When you play Last Ditch Effort, if you have no cards in your deck, it gains +4{p} and **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_161.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Last Ditch Effort",
    rarity: Rarity.SuperRare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "crazy-brew-blue",
    functionalText: `**Action** - Destroy Crazy Brew: Roll a 6 sided die.

On;
- 1,2 - Lose 2{h}. **Go again**
- 3,4 - Gain 2{h}. **Go again**
- 5,6 - Gain {r}{r}, gain 2 action points, and your next attack this turn gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB016.width-450.png",
    keywords: [],
    name: "Crazy Brew",
    rarity: Rarity.SuperRare,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "remembrance-yellow",
    functionalText: `Shuffle up to 3 action cards from your graveyard into your deck.

Banish Remembrance.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_163.width-450.png",
    keywords: [],
    name: "Remembrance",
    rarity: Rarity.SuperRare,
    sets: [Release.WelcomeToRathe],
    type: Type.Instant,
    typeText: "Generic Instant",
    
    
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [Format.Blitz,Format.ClassicConstructed],
    class: Class.Generic,
    identifier: "drone-of-brutality-red",
    functionalText: `If Drone of Brutality would be put into your graveyard from anywhere, instead put it on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_164.width-450.png",
    keywords: [],
    name: "Drone of Brutality",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [Format.Blitz,Format.ClassicConstructed],
    class: Class.Generic,
    identifier: "drone-of-brutality-yellow",
    functionalText: `If Drone of Brutality would be put into your graveyard from anywhere, instead put it on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_165.width-450.png",
    keywords: [],
    name: "Drone of Brutality",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [Format.Blitz,Format.ClassicConstructed],
    class: Class.Generic,
    identifier: "drone-of-brutality-blue",
    functionalText: `If Drone of Brutality would be put into your graveyard from anywhere, instead put it on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_166.width-450.png",
    keywords: [],
    name: "Drone of Brutality",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "snatch-red",
    functionalText: `If Snatch hits, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_167.width-450.png",
    keywords: [],
    name: "Snatch",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "snatch-yellow",
    functionalText: `If Snatch hits, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_168.width-450.png",
    keywords: [],
    name: "Snatch",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "snatch-blue",
    functionalText: `If Snatch hits, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_169.width-450.png",
    keywords: [],
    name: "Snatch",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "energy-potion-blue",
    functionalText: `**Instant** - Destroy Energy Potion: {r}{r}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB012-P.width-450.png",
    keywords: [],
    name: "Energy Potion",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "potion-of-strength-blue",
    functionalText: `**Action** - Destroy Potion of Strength: Your next attack this turn gains +2{p}. **Go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB013-P.width-450.png",
    keywords: [],
    name: "Potion of Strength",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "timesnap-potion-blue",
    functionalText: `**Action** - Destroy Timesnap Potion: Gain 2 action points.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB014-P.width-450.png",
    keywords: [],
    name: "Timesnap Potion",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "sigil-of-solace-red",
    functionalText: `Gain 3{h}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_173.width-450.png",
    keywords: [],
    name: "Sigil of Solace",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Instant,
    typeText: "Generic Instant",
    
    
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "sigil-of-solace-yellow",
    functionalText: `Gain 2{h}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_174.width-450.png",
    keywords: [],
    name: "Sigil of Solace",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Instant,
    typeText: "Generic Instant",
    
    
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "sigil-of-solace-blue",
    functionalText: `Gain 1{h}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_175.width-450.png",
    keywords: [],
    name: "Sigil of Solace",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Instant,
    typeText: "Generic Instant",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "barraging-brawnhide-red",
    functionalText: `While Barraging Brawnhide is defended by less than 2 non-equipment cards, it has +1{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_176.width-450.png",
    keywords: [],
    name: "Barraging Brawnhide",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    pitch: 1,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "barraging-brawnhide-yellow",
    functionalText: `While Barraging Brawnhide is defended by less than 2 non-equipment cards, it has +1{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_177.width-450.png",
    keywords: [],
    name: "Barraging Brawnhide",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    pitch: 2,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "barraging-brawnhide-blue",
    functionalText: `While Barraging Brawnhide is defended by less than 2 non-equipment cards, it has +1{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_178.width-450.png",
    keywords: [],
    name: "Barraging Brawnhide",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    pitch: 3,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "demolition-crew-red",
    functionalText: `As an additional cost to play Demolition Crew, reveal a card in your hand with cost 2 or greater.

**Dominate** *(The defending hero can't defend Demolition Crew with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_179.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Demolition Crew",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "demolition-crew-yellow",
    functionalText: `As an additional cost to play Demolition Crew, reveal a card in your hand with cost 2 or greater.

**Dominate** *(The defending hero can't defend Demolition Crew with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_180.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Demolition Crew",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "demolition-crew-blue",
    functionalText: `As an additional cost to play Demolition Crew, reveal a card in your hand with cost 2 or greater.

**Dominate** *(The defending hero can't defend Demolition Crew with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_181.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Demolition Crew",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "flock-of-the-feather-walkers-red",
    functionalText: `As an additional cost to play Flock of the Feather Walkers, reveal a card in your hand with cost 1 or less.

Create a Quicken aura token with “When you play an attack action card or attack with a weapon, destroy Quicken then the attack gains **go again**”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_182.width-450.png",
    keywords: [],
    name: "Flock of the Feather Walkers",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "flock-of-the-feather-walkers-yellow",
    functionalText: `As an additional cost to play Flock of the Feather Walkers, reveal a card in your hand with cost 1 or less.

Create a Quicken aura token with “When you play an attack action card or attack with a weapon, destroy Quicken then the attack gains **go again**”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_183.width-450.png",
    keywords: [],
    name: "Flock of the Feather Walkers",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "flock-of-the-feather-walkers-blue",
    functionalText: `As an additional cost to play Flock of the Feather Walkers, reveal a card in your hand with cost 1 or less.

Create a Quicken aura token with “When you play an attack action card or attack with a weapon, destroy Quicken then the attack gains **go again**”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_184.width-450.png",
    keywords: [],
    name: "Flock of the Feather Walkers",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "nimble-strike-red",
    functionalText: `As an additional cost to play Nimble Strike, you may banish a card named Nimblism from your graveyard. If you do, Nimble Strike gain +1{p} and **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_185.width-450.png",
    keywords: [],
    name: "Nimble Strike",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "nimble-strike-yellow",
    functionalText: `As an additional cost to play Nimble Strike, you may banish a card named Nimblism from your graveyard. If you do, Nimble Strike gain +1{p} and **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_186.width-450.png",
    keywords: [],
    name: "Nimble Strike",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "nimble-strike-blue",
    functionalText: `As an additional cost to play Nimble Strike, you may banish a card named Nimblism from your graveyard. If you do, Nimble Strike gain +1{p} and **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_187.width-450.png",
    keywords: [],
    name: "Nimble Strike",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "raging-onslaught-red",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_188.width-450.png",
    keywords: [],
    name: "Raging Onslaught",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 1,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "raging-onslaught-yellow",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_189.width-450.png",
    keywords: [],
    name: "Raging Onslaught",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 2,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "raging-onslaught-blue",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_190.width-450.png",
    keywords: [],
    name: "Raging Onslaught",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 3,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "scar-for-a-scar-red",
    functionalText: `When you play Scar for a Scar, if you have less {h} than an opposing hero, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB015-P.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Scar for a Scar",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "scar-for-a-scar-yellow",
    functionalText: `When you play Scar for a Scar, if you have less {h} than an opposing hero, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_192.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Scar for a Scar",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "scar-for-a-scar-blue",
    functionalText: `When you play Scar for a Scar, if you have less {h} than an opposing hero, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_193.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Scar for a Scar",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "scour-the-battlescape-red",
    functionalText: `You may put a card from your hand on the bottom of your deck. If you do, draw a card.

If Scour the Battlescape is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_194.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Scour the Battlescape",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "scour-the-battlescape-yellow",
    functionalText: `You may put a card from your hand on the bottom of your deck. If you do, draw a card.

If Scour the Battlescape is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_195.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Scour the Battlescape",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "scour-the-battlescape-blue",
    functionalText: `You may put a card from your hand on the bottom of your deck. If you do, draw a card.

If Scour the Battlescape is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_196.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Scour the Battlescape",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "regurgitating-slog-red",
    functionalText: `As an additional cost to play Regurgitating Slog, you may banish a card named Sloggism from your graveyard. If you do, Regurgitating Slog gains **dominate.** *(The defending hero can't defend Regurgitating Slog with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_197.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Regurgitating Slog",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "regurgitating-slog-yellow",
    functionalText: `As an additional cost to play Regurgitating Slog, you may banish a card named Sloggism from your graveyard. If you do, Regurgitating Slog gains **dominate.** *(The defending hero can't defend Regurgitating Slog with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_198.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Regurgitating Slog",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "regurgitating-slog-blue",
    functionalText: `As an additional cost to play Regurgitating Slog, you may banish a card named Sloggism from your graveyard. If you do, Regurgitating Slog gains **dominate.** *(The defending hero can't defend Regurgitating Slog with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_199.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Regurgitating Slog",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "wounded-bull-red",
    functionalText: `When you play Wounded Bull, if you have less {h} than an opposing hero, it gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_200.width-450.png",
    keywords: [],
    name: "Wounded Bull",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    pitch: 1,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "wounded-bull-yellow",
    functionalText: `When you play Wounded Bull, if you have less {h} than an opposing hero, it gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_201.width-450.png",
    keywords: [],
    name: "Wounded Bull",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    pitch: 2,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "wounded-bull-blue",
    functionalText: `When you play Wounded Bull, if you have less {h} than an opposing hero, it gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_202.width-450.png",
    keywords: [],
    name: "Wounded Bull",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    pitch: 3,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "wounding-blow-red",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_203.width-450.png",
    keywords: [],
    name: "Wounding Blow",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "wounding-blow-yellow",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_204.width-450.png",
    keywords: [],
    name: "Wounding Blow",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "wounding-blow-blue",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_205.width-450.png",
    keywords: [],
    name: "Wounding Blow",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },,,,,,,,,,,,,{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "nimblism-red",
    functionalText: `The next attack action card with cost 1 or less you play this turn gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_218.width-450.png",
    keywords: [],
    name: "Nimblism",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "nimblism-yellow",
    functionalText: `The next attack action card with cost 1 or less you play this turn gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_219.width-450.png",
    keywords: [],
    name: "Nimblism",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "nimblism-blue",
    functionalText: `The next attack action card with cost 1 or less you play this turn gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_220.width-450.png",
    keywords: [],
    name: "Nimblism",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "sloggism-red",
    functionalText: `The next attack action card with cost 2 or greater you play this turn gains +6{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_221.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sloggism",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 3,
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "sloggism-yellow",
    functionalText: `The next attack action card with cost 2 or greater you play this turn gains +5{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_222.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sloggism",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 3,
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "sloggism-blue",
    functionalText: `The next attack action card with cost 2 or greater you play this turn gains +4{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_223.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sloggism",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 3,
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "cracked-bauble-yellow",
    functionalText: `*(Cracked Bauble exists to support Booster Draft and sealed Deck formats. A player may add any number of Cracked Baubles to their deck. Typically, a player would only do this if they did not have enough legally playable cards to make a 30 card minimum deck.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS083.width-450.png",
    keywords: [],
    name: "Cracked Bauble",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.WelcomeToRathe,Release.ArcaneRising,Release.CrucibleOfWar,Release.Monarch,Release.TalesOfAria],
    type: Type.Resource,
    typeText: "Generic Resource",
    
    
    pitch: 2,
    talents: [],
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "quicken",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*

When you play an attack card or attack with a weapon, destroy Quicken then the attack gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_225.width-450.png",
    keywords: [],
    name: "Quicken",
    rarity: Rarity.Token,
    sets: [Release.WelcomeToRathe,Release.CrucibleOfWar,Release.Everfest],
    type: Type.Token,
    typeText: "Generic Token – Aura",
    talents: [],
    subType: TokenSubType.Aura
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "eye-of-ophidia-blue",
    functionalText: `**Legendary** *(You may only have 1 Eye of Ophidia in your deck.)*

When you pitch Eye of Ophidia, **opt 2.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC0.width-450.png",
    keywords: [Keyword.Legendary,Keyword.Opt],
    name: "Eye of Ophidia",
    rarity: Rarity.Fabled,
    sets: [Release.ArcaneRising],
    type: Type.Resource,
    typeText: "Generic Resource – Gem",
    
    
    pitch: 3,
    talents: [],
    subType: ResourceSubType.Gem
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "arcanite-skullcap",
    functionalText: `If you have less {h} than your opponent, Arcanite Skullcap gains +1{d} and **Arcane Barrier 3**. *(If your hero would be dealt arcane damage, you may pay {r}{r}{r} instead. If you do, prevent 3 arcane damage that source would deal.)*

**Battleworn** *(If you defend with Arcanite Skullcap, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB007-P.width-450.png",
    keywords: [Keyword.ArcaneBarrier,Keyword.Battleworn],
    name: "Arcanite Skullcap",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.ArcaneRising,Release.Everfest],
    type: Type.Equipment,
    typeText: "Generic Equipment – Head",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "talismanic-lens",
    functionalText: `**Instant** - Destroy Talismanic Lens: **Opt 2** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB066.width-450.png",
    keywords: [],
    name: "Talismanic Lens",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Generic Equipment – Head",
    
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "vest-of-the-first-fist",
    functionalText: `When an attack action card you control hits, you may destroy Vest of the First Fist. If you do, gain {r}{r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC152.width-450.png",
    keywords: [],
    name: "Vest of the First Fist",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Generic Equipment – Chest",
    
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "bracers-of-belief",
    functionalText: `**Action** - Destroy Bracers of Belief: Reveal the top card of your deck. If you do, the next attack action card you play this turn, gains +X{p}, where X is 3 minus the pitch value of the card revealed this way. **Go again** *(The pitch value is located in the top left corner of the card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC153.width-450.png",
    keywords: [],
    name: "Bracers of Belief",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Generic Equipment – Arms",
    
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "mage-master-boots",
    functionalText: `**Action** - {r}, destroy Mage Master Boots: The next 'non-attack' action card you play this turn gains **go again. Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB067.width-450.png",
    keywords: [],
    name: "Mage Master Boots",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Generic Equipment – Legs",
    
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "nullrune-hood",
    functionalText: `**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB068.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Nullrune Hood",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Generic Equipment – Head",
    
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "nullrune-robe",
    functionalText: `**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB069.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Nullrune Robe",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Generic Equipment – Chest",
    
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "nullrune-gloves",
    functionalText: `**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB070.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Nullrune Gloves",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Generic Equipment – Arms",
    
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "nullrune-boots",
    functionalText: `**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB071.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Nullrune Boots",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Generic Equipment – Legs",
    
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "command-and-conquer-red",
    functionalText: `Defense reaction cards can't be played to Command and Conquer's chain link.

If Command and Conquer hits a hero, destroy all cards in their arsenal.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC159.width-450.png",
    keywords: [],
    name: "Command and Conquer",
    rarity: Rarity.Majestic,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "art-of-war-yellow",
    functionalText: `Choose 2;

- Attack action cards you control gain +1{p} and +1{d} this turn.
- The next attack action card you play this turn, gains **go again.**
- Until end of turn, you may defend with attack action cards from arsenal.
- You may banish an attack action card from your hand. If you do, draw 2 cards.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC160.width-450.png",
    keywords: [],
    name: "Art of War",
    rarity: Rarity.Majestic,
    sets: [Release.ArcaneRising],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 1,
    
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "pursuit-of-knowledge-blue",
    functionalText: `If Pursuit of Knowledge hits, your hero gains +1{i} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC161.width-450.png",
    keywords: [],
    name: "Pursuit of Knowledge",
    rarity: Rarity.SuperRare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "chains-of-eminence-red",
    functionalText: `**Go again**

When Chains of Eminence enters the arena, name a card. The named card can't be pitched, played or used to defend while Chains of Eminence is in the arena.

At the beginning of your action phase, destroy Chains of Eminence`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC162.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Chains of Eminence",
    rarity: Rarity.SuperRare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Aura",
    
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "rusted-relic-blue",
    functionalText: `**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC163.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Rusted Relic",
    rarity: Rarity.SuperRare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "life-for-a-life-red",
    functionalText: `If Life for a Life hits, gain 1{h}.

When you play Life for a Life, if you have less {h} than an opposing hero, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC164.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Life for a Life",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "life-for-a-life-yellow",
    functionalText: `If Life for a Life hits, gain 1{h}.

When you play Life for a Life, if you have less {h} than an opposing hero, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC165.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Life for a Life",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "life-for-a-life-blue",
    functionalText: `If Life for a Life hits, gain 1{h}.

When you play Life for a Life, if you have less {h} than an opposing hero, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC166.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Life for a Life",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "enchanting-melody-red",
    functionalText: `**Go again**

If your hero would be dealt damage, instead destroy Enchanting Melody and prevent 4 of that damage.

At the beginning of your end phase, destroy Enchanting Melody unless you have played a 'non-attack' action card this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC167.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Enchanting Melody",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Aura",
    cost: 2,
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "enchanting-melody-yellow",
    functionalText: `**Go again**

If your hero would be dealt damage, instead destroy Enchanting Melody and prevent 3 of that damage.

At the beginning of your end phase, destroy Enchanting Melody unless you have played a 'non-attack' action card this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC168.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Enchanting Melody",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Aura",
    cost: 2,
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "enchanting-melody-blue",
    functionalText: `**Go again**

If your hero would be dealt damage, instead destroy Enchanting Melody and prevent 2 of that damage.

At the beginning of your end phase, destroy Enchanting Melody unless you have played a 'non-attack' action card this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC169.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Enchanting Melody",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Aura",
    cost: 2,
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [Format.ClassicConstructed],
    class: Class.Generic,
    identifier: "plunder-run-red",
    functionalText: `The next time an attack action card you control hits this turn, draw a card.

If Plunder Run is played from arsenal, the next attack action card you play this turn gains +3{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC170.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Plunder Run",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [Format.ClassicConstructed],
    class: Class.Generic,
    identifier: "plunder-run-yellow",
    functionalText: `The next time an attack action card you control hits this turn, draw a card.

If Plunder Run is played from arsenal, the next attack action card you play this turn gains +2{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC171.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Plunder Run",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [Format.ClassicConstructed],
    class: Class.Generic,
    identifier: "plunder-run-blue",
    functionalText: `The next time an attack action card you control hits this turn, draw a card.

If Plunder Run is played from arsenal, the next attack action card you play this turn gains +1{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC172.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Plunder Run",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "eirinas-prayer-red",
    functionalText: `Reveal the top card of your deck. Prevent the next X arcane damage that would be dealt to your hero this turn, where X is 6 minus the pitch value of the card revealed this way. *(The pitch value is located in the top left corner of the card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC173.width-450.png",
    keywords: [],
    name: "Eirina's Prayer",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 1,
    
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "eirinas-prayer-yellow",
    functionalText: `Reveal the top card of your deck. Prevent the next X arcane damage that would be dealt to your hero this turn, where X is 5 minus the pitch value of the card revealed this way. *(The pitch value is located in the top left corner of the card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC174.width-450.png",
    keywords: [],
    name: "Eirina's Prayer",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 1,
    
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "eirinas-prayer-blue",
    functionalText: `Reveal the top card of your deck. Prevent the next X arcane damage that would be dealt to your hero this turn, where X is 4 minus the pitch value of the card revealed this way. *(The pitch value is located in the top left corner of the card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC175.width-450.png",
    keywords: [],
    name: "Eirina's Prayer",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 1,
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "back-alley-breakline-red",
    functionalText: `If an activated ability or action card effect puts Back Alley Breakline face up into a zone from your deck, gain 1 action point.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC176.width-450.png",
    keywords: [],
    name: "Back Alley Breakline",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "back-alley-breakline-yellow",
    functionalText: `If an activated ability or action card effect puts Back Alley Breakline face up into a zone from your deck, gain 1 action point.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC177.width-450.png",
    keywords: [],
    name: "Back Alley Breakline",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "back-alley-breakline-blue",
    functionalText: `If an activated ability or action card effect puts Back Alley Breakline face up into a zone from your deck, gain 1 action point.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC178.width-450.png",
    keywords: [],
    name: "Back Alley Breakline",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "cadaverous-contraband-red",
    functionalText: `If Cadaverous Contraband hits, you may put a ‘non-attack' action card from your graveyard on top of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC179.width-450.png",
    keywords: [],
    name: "Cadaverous Contraband",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "cadaverous-contraband-yellow",
    functionalText: `If Cadaverous Contraband hits, you may put a ‘non-attack' action card from your graveyard on top of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC180.width-450.png",
    keywords: [],
    name: "Cadaverous Contraband",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "cadaverous-contraband-blue",
    functionalText: `If Cadaverous Contraband hits, you may put a ‘non-attack' action card from your graveyard on top of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC181.width-450.png",
    keywords: [],
    name: "Cadaverous Contraband",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "fervent-forerunner-red",
    functionalText: `If Fervent Forerunner hits, **opt 2.** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*

If Fervent Forerunner is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC182.width-450.png",
    keywords: [Keyword.Opt,Keyword.GoAgain],
    name: "Fervent Forerunner",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "fervent-forerunner-yellow",
    functionalText: `If Fervent Forerunner hits, **opt 2.** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*

If Fervent Forerunner is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC183.width-450.png",
    keywords: [Keyword.Opt,Keyword.GoAgain],
    name: "Fervent Forerunner",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "fervent-forerunner-blue",
    functionalText: `If Fervent Forerunner hits, **opt 2.** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*

If Fervent Forerunner is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC184.width-450.png",
    keywords: [Keyword.Opt,Keyword.GoAgain],
    name: "Fervent Forerunner",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "moon-wish-red",
    functionalText: `You may put a card from your hand on top of your deck rather than pay Moon Wish's {r} cost.

If Moon Wish hits, search your deck for a card named Sun Kiss, reveal it, put it into your hand, then shuffle your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC185.width-450.png",
    keywords: [],
    name: "Moon Wish",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "moon-wish-yellow",
    functionalText: `You may put a card from your hand on top of your deck rather than pay Moon Wish's {r} cost.

If Moon Wish hits, search your deck for a card named Sun Kiss, reveal it, put it into your hand, then shuffle your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC186.width-450.png",
    keywords: [],
    name: "Moon Wish",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "moon-wish-blue",
    functionalText: `You may put a card from your hand on top of your deck rather than pay Moon Wish's {r} cost.

If Moon Wish hits, search your deck for a card named Sun Kiss, reveal it, put it into your hand, then shuffle your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC187.width-450.png",
    keywords: [],
    name: "Moon Wish",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "push-the-point-red",
    functionalText: `If the last attack on this combat chain hit, Push the Point gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC188.width-450.png",
    keywords: [],
    name: "Push the Point",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "push-the-point-yellow",
    functionalText: `If the last attack on this combat chain hit, Push the Point gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC189.width-450.png",
    keywords: [],
    name: "Push the Point",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "push-the-point-blue",
    functionalText: `If the last attack on this combat chain hit, Push the Point gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC190.width-450.png",
    keywords: [],
    name: "Push the Point",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "ravenous-rabble-red",
    functionalText: `Reveal the top card of your deck. Ravenous Rabble gets -X{p}, where X is the pitch value of the card revealed this way. *(The pitch value is located in the top left corner of the card.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC191.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Ravenous Rabble",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "ravenous-rabble-yellow",
    functionalText: `Reveal the top card of your deck. Ravenous Rabble gets -X{p}, where X is the pitch value of the card revealed this way. *(The pitch value is located in the top left corner of the card.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC192.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Ravenous Rabble",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "ravenous-rabble-blue",
    functionalText: `Reveal the top card of your deck. Ravenous Rabble gets -X{p}, where X is the pitch value of the card revealed this way. *(The pitch value is located in the top left corner of the card.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC193.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Ravenous Rabble",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "rifting-red",
    functionalText: `If Rifting hits, you may play your next 'non-attack' action card this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC194.width-450.png",
    keywords: [],
    name: "Rifting",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "rifting-yellow",
    functionalText: `If Rifting hits, you may play your next 'non-attack' action card this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC195.width-450.png",
    keywords: [],
    name: "Rifting",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "rifting-blue",
    functionalText: `If Rifting hits, you may play your next 'non-attack' action card this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC196.width-450.png",
    keywords: [],
    name: "Rifting",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "vigor-rush-red",
    functionalText: `If you have played a 'non-attack' action card this turn, Vigor Rush gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC197.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Vigor Rush",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "vigor-rush-yellow",
    functionalText: `If you have played a 'non-attack' action card this turn, Vigor Rush gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC198.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Vigor Rush",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "vigor-rush-blue",
    functionalText: `If you have played a 'non-attack' action card this turn, Vigor Rush gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC199.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Vigor Rush",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },,,,{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "come-to-fight-red",
    functionalText: `The next attack action card you play this turn gains +3{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC203.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Come to Fight",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 3,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "come-to-fight-yellow",
    functionalText: `The next attack action card you play this turn gains +2{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC204.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Come to Fight",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 3,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "come-to-fight-blue",
    functionalText: `The next attack action card you play this turn gains +1{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC205.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Come to Fight",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 3,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "force-sight-red",
    functionalText: `The next attack action card you play this turn gains +3{p}.

If Force Sight is played from arsenal, **opt 2.** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC206.width-450.png",
    keywords: [Keyword.Opt,Keyword.GoAgain],
    name: "Force Sight",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "force-sight-yellow",
    functionalText: `The next attack action card you play this turn gains +2{p}.

If Force Sight is played from arsenal, **opt 2.** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC207.width-450.png",
    keywords: [Keyword.Opt,Keyword.GoAgain],
    name: "Force Sight",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "force-sight-blue",
    functionalText: `The next attack action card you play this turn gains +1{p}.

If Force Sight is played from arsenal, **opt 2.** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC208.width-450.png",
    keywords: [Keyword.Opt,Keyword.GoAgain],
    name: "Force Sight",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "lead-the-charge-red",
    functionalText: `The next time you play an action card with cost 0 or greater this turn, gain 1 action point.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC209.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Lead the Charge",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "lead-the-charge-yellow",
    functionalText: `The next time you play an action card with cost 1 or greater this turn, gain 1 action point.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC210.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Lead the Charge",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "lead-the-charge-blue",
    functionalText: `The next time you play an action card with cost 2 or greater this turn, gain 1 action point.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC211.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Lead the Charge",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "sun-kiss-red",
    functionalText: `Gain 3{h}.

If you have played a card named Moon Wish this turn, draw a card and Sun Kiss gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC212.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sun Kiss",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "sun-kiss-yellow",
    functionalText: `Gain 2{h}.

If you have played a card named Moon Wish this turn, draw a card and Sun Kiss gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC213.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sun Kiss",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "sun-kiss-blue",
    functionalText: `Gain 1{h}.

If you have played a card named Moon Wish this turn, draw a card and Sun Kiss gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC214.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sun Kiss",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "whisper-of-the-oracle-red",
    functionalText: `**Opt 4** *(Look at the top 4 cards of your deck. You may put them on the top and/or bottom in any order.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC215.width-450.png",
    keywords: [Keyword.Opt,Keyword.GoAgain],
    name: "Whisper of the Oracle",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 3,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "whisper-of-the-oracle-yellow",
    functionalText: `**Opt 3** *(Look at the top 4 cards of your deck. You may put them on the top and/or bottom in any order.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC216.width-450.png",
    keywords: [Keyword.Opt,Keyword.GoAgain],
    name: "Whisper of the Oracle",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 3,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "whisper-of-the-oracle-blue",
    functionalText: `**Opt 2** *(Look at the top 4 cards of your deck. You may put them on the top and/or bottom in any order.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC217.width-450.png",
    keywords: [Keyword.Opt,Keyword.GoAgain],
    name: "Whisper of the Oracle",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 3,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "talishar-the-lost-prince",
    functionalText: `**Once per Turn Action** - {r}{r}, put a rust counter on Talishar, the Lost Prince: **Attack**

At the beginning of your end phase, if Talishar, the Lost Prince has 3 or more rust counters on it, destroy it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU177.width-450.png",
    keywords: [],
    name: "Talishar, the Lost Prince",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Generic Weapon – Sword (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [],
    subType: WeaponSubType.Sword
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "gamblers-gloves",
    functionalText: `If an effect would resolve that includes rolling a 6 sided die, instead you may destroy Gambler's Gloves. If you do, the controller of the effect rerolls all 6 sided dice rolled this way. *(You decide whether to use Gambler's Glove after seeing the result of the die roll.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB074.width-450.png",
    keywords: [],
    name: "Gambler's Gloves",
    rarity: Rarity.Majestic,
    sets: [Release.Promos,Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Generic Equipment – Arms",
    
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "coax-a-commotion-red",
    functionalText: `If Coax a Commotion hits, choose any number:

- Each hero creates a Quicken token.
- Each hero draws a card.
- Each hero gains 1{h}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU180.width-450.png",
    keywords: [],
    name: "Coax a Commotion",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "gorgonian-tome",
    functionalText: `**Legendary** *(You may only have 1 Gorganian Tome in your deck.)*

Draw X cards, where X is 1 plus the number of Gorganian Tomes in all graveyards.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU181.width-450.png",
    keywords: [Keyword.Legendary,Keyword.GoAgain],
    name: "Gorgonian Tome",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Generic Action",
    
    
    
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "snag-blue",
    functionalText: `Attack action cards can't gain {p} from their own effects, or the effects of attack reaction cards this turn. *(This only affects {p} that would be gained after Snag has resolved.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU182.width-450.png",
    keywords: [],
    name: "Snag",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Instant,
    typeText: "Generic Instant",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "promise-of-plenty-red",
    functionalText: `If Promise of Plenty hits, each hero who doesn't have a card in their arsenal puts the top card of their deck face down into their arsenal.

If Promise of Plenty is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU183.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Promise of Plenty",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "promise-of-plenty-yellow",
    functionalText: `If Promise of Plenty hits, each hero who doesn't have a card in their arsenal puts the top card of their deck face down into their arsenal.

If Promise of Plenty is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU184.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Promise of Plenty",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "promise-of-plenty-blue",
    functionalText: `If Promise of Plenty hits, each hero who doesn't have a card in their arsenal puts the top card of their deck face down into their arsenal.

If Promise of Plenty is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU185.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Promise of Plenty",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },,,{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "cash-in-yellow",
    functionalText: `You may destroy 4 Coppers, 2 Silvers, or 1 Gold you control rather than pay Cash In's {r} cost.

Draw 2 cards.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU-188_.width-450.png",
    keywords: [],
    name: "Cash In",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 4,
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "reinforce-the-line-red",
    functionalText: `Target defending attack action card gains +4{d}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU189.width-450.png",
    keywords: [],
    name: "Reinforce the Line",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Instant,
    typeText: "Generic Instant",
    
    
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "reinforce-the-line-yellow",
    functionalText: `Target defending attack action card gains +3{d}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU190.width-450.png",
    keywords: [],
    name: "Reinforce the Line",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Instant,
    typeText: "Generic Instant",
    
    
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "reinforce-the-line-blue",
    functionalText: `Target defending attack action card gains +2{d}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU191.width-450.png",
    keywords: [],
    name: "Reinforce the Line",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Instant,
    typeText: "Generic Instant",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "brutal-assault-red",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU192.width-450.png",
    keywords: [],
    name: "Brutal Assault",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "brutal-assault-yellow",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU193.width-450.png",
    keywords: [],
    name: "Brutal Assault",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "brutal-assault-blue",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU194.width-450.png",
    keywords: [],
    name: "Brutal Assault",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "copper",
    functionalText: `**Action** - {r}{r}{r}{r}, destroy Copper: Draw a card. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB055.width-450.png",
    keywords: [],
    name: "Copper",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.CrucibleOfWar,Release.Everfest],
    type: Type.Token,
    typeText: "Generic Token – Item",
    talents: [],
    subType: TokenSubType.Item
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "blood-drop-brocade",
    functionalText: `**Instant** - Destroy Blood Drop Brocade: Gain {r}. Activate this ability only if you have dealt or been dealt {p} damage this turn. *(When an equipment is destroyed, it's put into the graveyard.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON238.width-450.png",
    keywords: [],
    name: "Blood Drop Brocade",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Generic Equipment – Chest",
    
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "stubby-hammerers",
    functionalText: `**Action** - Destroy Stubby Hammerers: Attack action cards with 3 or less base power gain +1{p} while attacking this turn. **Go again** *(When an equipment is destroyed, it's put into the graveyard.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON239.width-450.png",
    keywords: [],
    name: "Stubby Hammerers",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Generic Equipment – Arms",
    
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "time-skippers",
    functionalText: `**Action** - {r}{r}{r}, destroy Time Skippers: Gain 2 action points. *(When an equipment is destroyed, it's put into the graveyard.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON240.width-450.png",
    keywords: [],
    name: "Time Skippers",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Generic Equipment – Legs",
    
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "ironhide-helm",
    functionalText: `When you defend with Ironhide Helm, you may pay {r}. If you do, it gains +2{d} and destroy it when the combat chain closes. *(When an equipment is destroyed, it's put into the graveyard.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON241.width-450.png",
    keywords: [],
    name: "Ironhide Helm",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Generic Equipment – Head",
    
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "ironhide-plate",
    functionalText: `When you defend with Ironhide Plate, you may pay {r}. If you do, it gains +2{d} and destroy it when the combat chain closes. *(When an equipment is destroyed, it's put into the graveyard.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON242.width-450.png",
    keywords: [],
    name: "Ironhide Plate",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Generic Equipment – Chest",
    
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "ironhide-gauntlet",
    functionalText: `When you defend with Ironhide Gauntlet, you may pay {r}. If you do, it gains +2{d} and destroy it when the combat chain closes. *(When an equipment is destroyed, it's put into the graveyard.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON243.width-450.png",
    keywords: [],
    name: "Ironhide Gauntlet",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Generic Equipment – Arms",
    
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "ironhide-legs",
    functionalText: `When you defend with Ironhide Legs, you may pay {r}. If you do, it gains +2{d} and destroy it when the combat chain closes. *(When an equipment is destroyed, it's put into the graveyard.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON244.width-450.png",
    keywords: [],
    name: "Ironhide Legs",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Generic Equipment – Legs",
    
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "exude-confidence-red",
    functionalText: `While Exude Confidence isn't defended by a card with equal or greater {p}, the defending hero can't play or activate instants or defense reactions this combat chain.

**Instant** - {r}{r}{r}: Exude Confidence gains +2{p}. Activate this ability only while Exude Confidence is attacking.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON245.width-450.png",
    keywords: [],
    name: "Exude Confidence",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "nourishing-emptiness-red",
    functionalText: `While there are no attack action cards in your graveyard, Nourishing Emptiness has **dominate** and "If this hits, your hero gains +1{i} until end of turn."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON246.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Nourishing Emptiness",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "rouse-the-ancients-blue",
    functionalText: `As an additional cost to play Rouse the Ancients, you may reveal any number of attack action cards from your hand with 13 or more total {p}. If you do, Rouse the Ancients gains +7{p} and **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON247.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Rouse the Ancients",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "out-muscle-red",
    functionalText: `While Out Muscle isn't defended by a card with equal or greater {p}, it has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON248.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Out Muscle",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "out-muscle-yellow",
    functionalText: `While Out Muscle isn't defended by a card with equal or greater {p}, it has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON249.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Out Muscle",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "out-muscle-blue",
    functionalText: `While Out Muscle isn't defended by a card with equal or greater {p}, it has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON250.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Out Muscle",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "seek-horizon-red",
    functionalText: `As an additional cost to play Seek Horizon, you may put a card from your hand on top of your deck. If you do, Seek Horizon gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON251.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Seek Horizon",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "seek-horizon-yellow",
    functionalText: `As an additional cost to play Seek Horizon, you may put a card from your hand on top of your deck. If you do, Seek Horizon gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON252.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Seek Horizon",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "seek-horizon-blue",
    functionalText: `As an additional cost to play Seek Horizon, you may put a card from your hand on top of your deck. If you do, Seek Horizon gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON253.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Seek Horizon",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "tremor-of-arathael-red",
    functionalText: `If a card has been put into your banished zone this turn, Tremor of íArathael gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON254.width-450.png",
    keywords: [],
    name: "Tremor of íArathael",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "tremor-of-arathael-yellow",
    functionalText: `If a card has been put into your banished zone this turn, Tremor of íArathael gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON255.width-450.png",
    keywords: [],
    name: "Tremor of íArathael",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "tremor-of-arathael-blue",
    functionalText: `If a card has been put into your banished zone this turn, Tremor of íArathael gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON256.width-450.png",
    keywords: [],
    name: "Tremor of íArathael",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },,,,{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "captains-call-red",
    functionalText: `The next attack action card with cost 2 or less you play this turn gains +2{p}.

The next attack action card with cost 2 or less you play this turn gains **go again.**

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON260.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Captain's Call",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "captains-call-yellow",
    functionalText: `The next attack action card with cost 1 or less you play this turn gains +2{p}.

The next attack action card with cost 1 or less you play this turn gains **go again.**

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON261.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Captain's Call",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "captains-call-blue",
    functionalText: `The next attack action card with cost 0 or less you play this turn gains +2{p}.

The next attack action card with cost 0 or less you play this turn gains **go again.**

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON262.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Captain's Call",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "adrenaline-rush-red",
    functionalText: `When you play Adrenaline Rush, if you have less {h} than an opposing hero, it gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON263.width-450.png",
    keywords: [],
    name: "Adrenaline Rush",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "adrenaline-rush-yellow",
    functionalText: `When you play Adrenaline Rush, if you have less {h} than an opposing hero, it gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON264.width-450.png",
    keywords: [],
    name: "Adrenaline Rush",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "adrenaline-rush-blue",
    functionalText: `When you play Adrenaline Rush, if you have less {h} than an opposing hero, it gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON265.width-450.png",
    keywords: [],
    name: "Adrenaline Rush",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "belittle-red",
    functionalText: `As an additional cost to play Belittle, you may reveal an attack action card with 3 or less base {p} from your hand. If you do, search your deck for a card named Minnowism, reveal it, put it into your hand, then shuffle your deck.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON266.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Belittle",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "belittle-yellow",
    functionalText: `As an additional cost to play Belittle, you may reveal an attack action card with 3 or less base {p} from your hand. If you do, search your deck for a card named Minnowism, reveal it, put it into your hand, then shuffle your deck.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON267.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Belittle",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "belittle-blue",
    functionalText: `As an additional cost to play Belittle, you may reveal an attack action card with 3 or less base {p} from your hand. If you do, search your deck for a card named Minnowism, reveal it, put it into your hand, then shuffle your deck.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON268.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Belittle",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "brandish-red",
    functionalText: `If Brandish hits, your next weapon attack this turn gains +1{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON269.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Brandish",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "brandish-yellow",
    functionalText: `If Brandish hits, your next weapon attack this turn gains +1{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON270.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Brandish",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "brandish-blue",
    functionalText: `If Brandish hits, your next weapon attack this turn gains +1{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON271.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Brandish",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "frontline-scout-red",
    functionalText: `You may look at the defending hero's hand.

If Frontline Scout is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON272.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Frontline Scout",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "frontline-scout-yellow",
    functionalText: `You may look at the defending hero's hand.

If Frontline Scout is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON273.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Frontline Scout",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "frontline-scout-blue",
    functionalText: `You may look at the defending hero's hand.

If Frontline Scout is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON274.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Frontline Scout",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "overload-red",
    functionalText: `**Dominate** *(The defending hero can't defend Overload with more than 1 card from their hand.)*

If Overload hits, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON275.width-450.png",
    keywords: [Keyword.Dominate,Keyword.GoAgain],
    name: "Overload",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "overload-yellow",
    functionalText: `**Dominate** *(The defending hero can't defend Overload with more than 1 card from their hand.)*

If Overload hits, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON276.width-450.png",
    keywords: [Keyword.Dominate,Keyword.GoAgain],
    name: "Overload",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "overload-blue",
    functionalText: `**Dominate** *(The defending hero can't defend Overload with more than 1 card from their hand.)*

If Overload hits, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON277.width-450.png",
    keywords: [Keyword.Dominate,Keyword.GoAgain],
    name: "Overload",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "pound-for-pound-red",
    functionalText: `When you play Pound for Pound, if you have less {h} than an opposing hero, it gains **dominate.** *(The defending hero can't defend Pound for Pound with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON278.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Pound for Pound",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "pound-for-pound-yellow",
    functionalText: `When you play Pound for Pound, if you have less {h} than an opposing hero, it gains **dominate.** *(The defending hero can't defend Pound for Pound with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON279.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Pound for Pound",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "pound-for-pound-blue",
    functionalText: `When you play Pound for Pound, if you have less {h} than an opposing hero, it gains **dominate.** *(The defending hero can't defend Pound for Pound with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON280.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Pound for Pound",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "rally-the-rearguard-red",
    functionalText: `**Once per Turn Instant** - Discard a card: Rally the Rearguard gains +3{d}. Activate this ability only while Rally the Rearguard is defending.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON281.width-450.png",
    keywords: [],
    name: "Rally the Rearguard",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "rally-the-rearguard-yellow",
    functionalText: `**Once per Turn Instant** - Discard a card: Rally the Rearguard gains +3{d}. Activate this ability only while Rally the Rearguard is defending.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON282.width-450.png",
    keywords: [],
    name: "Rally the Rearguard",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "rally-the-rearguard-blue",
    functionalText: `**Once per Turn Instant** - Discard a card: Rally the Rearguard gains +3{d}. Activate this ability only while Rally the Rearguard is defending.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON283.width-450.png",
    keywords: [],
    name: "Rally the Rearguard",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "stony-wootonhog-red",
    functionalText: `While Stony Woottonhog is defended by less than 2 non-equipment cards, it has +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON284.width-450.png",
    keywords: [],
    name: "Stony Wootonhog",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "stony-wootonhog-yellow",
    functionalText: `While Stony Woottonhog is defended by less than 2 non-equipment cards, it has +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON285.width-450.png",
    keywords: [],
    name: "Stony Wootonhog",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "stony-wootonhog-blue",
    functionalText: `While Stony Woottonhog is defended by less than 2 non-equipment cards, it has +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON286.width-450.png",
    keywords: [],
    name: "Stony Wootonhog",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "surging-militia-red",
    functionalText: `Surging Militia has +1{p} for each non-equipment card defending it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON287.width-450.png",
    keywords: [],
    name: "Surging Militia",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "surging-militia-yellow",
    functionalText: `Surging Militia has +1{p} for each non-equipment card defending it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON288.width-450.png",
    keywords: [],
    name: "Surging Militia",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "surging-militia-blue",
    functionalText: `Surging Militia has +1{p} for each non-equipment card defending it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON289.width-450.png",
    keywords: [],
    name: "Surging Militia",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "yinti-yanti-red",
    functionalText: `While Yinti Yanti is attacking and you control an aura, it has +1{p}.

While Yinto Yanti is defending and you control an aura, it has +1{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON290.width-450.png",
    keywords: [],
    name: "Yinti Yanti",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "yinti-yanti-yellow",
    functionalText: `While Yinti Yanti is attacking and you control an aura, it has +1{p}.

While Yinto Yanti is defending and you control an aura, it has +1{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON291.width-450.png",
    keywords: [],
    name: "Yinti Yanti",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "yinti-yanti-blue",
    functionalText: `While Yinti Yanti is attacking and you control an aura, it has +1{p}.

While Yinto Yanti is defending and you control an aura, it has +1{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON292.width-450.png",
    keywords: [],
    name: "Yinti Yanti",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    
    defense: 2,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "zealous-belting-red",
    functionalText: `While there is a card in your pitch zone with {p} greater than Zealous Belting's base {p}, Zealous Belting has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON293.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Zealous Belting",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "zealous-belting-yellow",
    functionalText: `While there is a card in your pitch zone with {p} greater than Zealous Belting's base {p}, Zealous Belting has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON294.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Zealous Belting",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "zealous-belting-blue",
    functionalText: `While there is a card in your pitch zone with {p} greater than Zealous Belting's base {p}, Zealous Belting has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON295.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Zealous Belting",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "minnowism-red",
    functionalText: `The next attack action card with 3 or less base {p} you play this turn gains +3{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON296.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Minnowism",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "minnowism-yellow",
    functionalText: `The next attack action card with 3 or less base {p} you play this turn gains +2{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON297.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Minnowism",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "minnowism-blue",
    functionalText: `The next attack action card with 3 or less base {p} you play this turn gains +1{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON298.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Minnowism",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "warmongers-recital-red",
    functionalText: `The next attack action card you play this turn gains +3{p} and "If this hits, put it on the bottom of your deck."

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON299.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Warmonger's Recital",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "warmongers-recital-yellow",
    functionalText: `The next attack action card you play this turn gains +2{p} and "If this hits, put it on the bottom of your deck."

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON300.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Warmonger's Recital",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "warmongers-recital-blue",
    functionalText: `The next attack action card you play this turn gains +1{p} and "If this hits, put it on the bottom of your deck."

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON301.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Warmonger's Recital",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "talisman-of-dousing-yellow",
    functionalText: `*(Items stay in the arena until they are destroyed.)*

**Go again**

**Spellvoid 1** *(If your hero would be dealt arcane damage, you may destroy Talisman of Dousing instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON302.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.Spellvoid],
    name: "Talisman of Dousing",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "memorial-ground-red",
    functionalText: `Put target attack action card with cost 2 or less from your graveyard on top of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON303.width-450.png",
    keywords: [],
    name: "Memorial Ground",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Generic Instant",
    
    
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "memorial-ground-yellow",
    functionalText: `Put target attack action card with cost 1 or less from your graveyard on top of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON304.width-450.png",
    keywords: [],
    name: "Memorial Ground",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Generic Instant",
    
    
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "memorial-ground-blue",
    functionalText: `Put target attack action card with cost 0 or less from your graveyard on top of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON305.width-450.png",
    keywords: [],
    name: "Memorial Ground",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Generic Instant",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "ragamuffins-hat",
    functionalText: `**Instant** - Destroy Ragamuffin's Hat: Draw a card then put a card from your hand on the top or bottom of your deck. Activate this ability only if you have 1 card in hand.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE233.width-450.png",
    keywords: [],
    name: "Ragamuffin's Hat",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Equipment,
    typeText: "Generic Equipment – Head",
    
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "deep-blue",
    functionalText: `**Action** - Put a card from your hand on the bottom of your deck, destroy Deep Blue: Gain {r}{r}{r}. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE234.width-450.png",
    keywords: [],
    name: "Deep Blue",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Equipment,
    typeText: "Generic Equipment – Chest",
    
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "cracker-jax",
    functionalText: `**Action** - Destroy Cracker Jax: The next attack action card you play this turn gains +1{p}. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE235.width-450.png",
    keywords: [],
    name: "Cracker Jax",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Equipment,
    typeText: "Generic Equipment – Arms",
    
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "runaways",
    functionalText: `**Instant** - Destroy Runaways: Prevent the next 1 damage that would be dealt to your hero this turn. Activate this ability only if your hero has been dealt damage this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE236.width-450.png",
    keywords: [],
    name: "Runaways",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Equipment,
    typeText: "Generic Equipment – Legs",
    
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "arcane-lantern",
    functionalText: `**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR155.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Arcane Lantern",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Equipment,
    typeText: "Generic Equipment – Off-Hand",
    
    
    talents: [],
    subType: EquipmentSubType.OffHand
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "bingo-red",
    functionalText: `When Bingo hits a hero, they reveal a card from their hand. If an attack action card is revealed this way, Bingo gains **go again.** If a 'non-attack' action card is revealed this way, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR156.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Bingo",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "firebreathing-red",
    functionalText: `**Instant** - {r}: Firebreathing gains +1{p}. Activate this ability only while Firebreathing is attacking.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR157.width-450.png",
    keywords: [],
    name: "Firebreathing",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "cash-out-blue",
    functionalText: `As an additional cost to play Cash Out, you may destroy any number of weapons, equipment and/or non-token items you control.

Create a Silver token for each permanent destroyed this way.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR158.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Cash Out",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "knick-knack-bricabrac-red",
    functionalText: `As an additional cost to play Knick Knack Bric-a-brac, you may destroy any number of Copper, Silver, and/or Gold you control.

Search your deck for a card with Amulet, Potion, or Talisman in its name, put it into the arena, then shuffle. For each 4 Copper, 2 Silver, and/or 1 Gold destroyed this way, repeat this process.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR159.width-450.png",
    keywords: [],
    name: "Knick Knack Bric-a-brac",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 3,
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "this-rounds-on-me-blue",
    functionalText: `Each hero draws a card.

Until the start of your next turn, attacks that target you have -1{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR160.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "This Round's on Me",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 3,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "life-of-the-party-red",
    functionalText: `You may discard or destroy a card you control named Crazy Brew rather than pay Life of the Party's {r} cost. If you do, choose all modes, otherwise choose 1 at random;

- Life of the Party gains "When this hits, gain life 2{h}."
- Life of the Party gains +2{p}.
- Life of the Party gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS084.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Life of the Party",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "life-of-the-party-yellow",
    functionalText: `You may discard or destroy a card you control named Crazy Brew rather than pay Life of the Party's {r} cost. If you do, choose all modes, otherwise choose 1 at random;

- Life of the Party gains "When this hits, gain life 2{h}."
- Life of the Party gains +2{p}.
- Life of the Party gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS085.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Life of the Party",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "life-of-the-party-blue",
    functionalText: `You may discard or destroy a card you control named Crazy Brew rather than pay Life of the Party's {r} cost. If you do, choose all modes, otherwise choose 1 at random;

- Life of the Party gains "When this hits, gain life 2{h}."
- Life of the Party gains +2{p}.
- Life of the Party gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS086.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Life of the Party",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "high-striker-red",
    functionalText: `The next time an attack you control hits this turn, create 6 Copper tokens.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR164.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "High Striker",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "high-striker-yellow",
    functionalText: `The next time an attack you control hits this turn, create 4 Copper tokens.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR165.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "High Striker",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "high-striker-blue",
    functionalText: `The next time an attack you control hits this turn, create 2 Copper tokens.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR166.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "High Striker",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "pick-a-card-any-card-red",
    functionalText: `Look at target opponent's hand then name a card.

Choose a random card from their hand and reveal it. If it's the named card, create a Silver token. Repeat this process thrice.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR167.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Pick a Card, Any Card",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "pick-a-card-any-card-yellow",
    functionalText: `Look at target opponent's hand then name a card.

Choose a random card from their hand and reveal it. If it's the named card, create a Silver token. Repeat this process twice.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR168.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Pick a Card, Any Card",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "pick-a-card-any-card-blue",
    functionalText: `Look at target opponent's hand then name a card.

Choose a random card from their hand and reveal it. If it's the named card, create a Silver token. Repeat this process once.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR169.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Pick a Card, Any Card",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "smashing-good-time-red",
    functionalText: `The next time an attack action card hits a hero this turn, you may destroy an item they control with 2 or less{r}

If Smashing Good Time is played from arsenal, the next attack action card you play this turn gains +3{p}

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR170.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Smashing Good Time",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "smashing-good-time-yellow",
    functionalText: `The next time an attack action card hits a hero this turn, you may destroy an item they control with 2 or less{r}

If Smashing Good Time is played from arsenal, the next attack action card you play this turn gains +2{p}

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR171.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Smashing Good Time",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "smashing-good-time-blue",
    functionalText: `The next time an attack action card hits a hero this turn, you may destroy an item they control with 2 or less{r}

If Smashing Good Time is played from arsenal, the next attack action card you play this turn gains +1{p}

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR172.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Smashing Good Time",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "even-bigger-than-that-red",
    functionalText: `Play Even Bigger Than That! only if you've dealt {p} this turn.

**Opt 3**, then reveal the top card of your deck. If it has {p} greater than the amount of damage you've dealt this turn, create a Quicken token and draw a card. *(Look at the top 3 cards of your deck. You may put them on the top and/or bottom in any order.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB058.width-450.png",
    keywords: [Keyword.Opt],
    name: "Even Bigger Than That!",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Everfest],
    type: Type.Instant,
    typeText: "Generic Instant",
    
    
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "even-bigger-than-that-yellow",
    functionalText: `Play Even Bigger Than That! only if you've dealt {p} this turn.

**Opt 2**, then reveal the top card of your deck. If it has {p} greater than the amount of damage you've dealt this turn, create a Quicken token and draw a card. *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB059.width-450.png",
    keywords: [Keyword.Opt],
    name: "Even Bigger Than That!",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Everfest],
    type: Type.Instant,
    typeText: "Generic Instant",
    
    
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "even-bigger-than-that-blue",
    functionalText: `Play Even Bigger Than That! only if you've dealt {p} this turn.

**Opt 1**, then reveal the top card of your deck. If it has {p} greater than the amount of damage you've dealt this turn, create a Quicken token and draw a card. *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB060.width-450.png",
    keywords: [Keyword.Opt],
    name: "Even Bigger Than That!",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Everfest],
    type: Type.Instant,
    typeText: "Generic Instant",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "amulet-of-assertiveness-yellow",
    functionalText: `**Go again**

**Attack Reaction** - Destroy Amulet of Assertiveness: Target attack gains "When this hits, banish the top card of your deck. If it's an attack action card, you may play it this turn." Activate this ability only if you have 4 or more cards in hand.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR176.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Amulet of Assertiveness",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "amulet-of-echoes-blue",
    functionalText: `**Go again**

**Instant** - Destroy Amulet of Echoes: Target hero discards 2 cards. Activate this ability only if they have played 2 or more cards with the same name this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR177.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Amulet of Echoes",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "amulet-of-havencall-blue",
    functionalText: `**Go again**

**Defense Reaction** - Destroy Amulet of Havencall: Search your deck for a card named Rally the Rearguard, add it to this chain link as a defending card, then shuffle. Activate this ability only if you have no cards in hand.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR178.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Amulet of Havencall",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "amulet-of-ignition-yellow",
    functionalText: `**Go again**

**Instant** - Destroy Amulet of Ignition: The next ability you activate this turn costs {r} less. Activate this ability only if you haven't played a card or activated an ability this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR179.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Amulet of Ignition",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "amulet-of-intervention-blue",
    functionalText: `**Go again**

**Instant** - Destroy Amulet of Intervention: Prevent the next 1 damage that would be dealt to your hero this turn. Activate this ability only while your hero is the target of a source that would deal damage equal to or greater than your hero's {h}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR180.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Amulet of Intervention",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "amulet-of-oblation-blue",
    functionalText: `**Go again**

**Instant** - Destroy Amulet of Oblation: Until end of turn, target attack action gains "If this would be put into a graveyard, instead put it on the bottom of its owner's deck." Activate this ability only if a card has entered a graveyard this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR181.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Amulet of Oblation",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "clarity-potion-blue",
    functionalText: `**Instant** - Destroy Clarity Potion: **Opt 2.** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR182.width-450.png",
    keywords: [],
    name: "Clarity Potion",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "healing-potion-blue",
    functionalText: `**Action** - Destroy Healing Potion: Gain 2{h}. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR183.width-450.png",
    keywords: [],
    name: "Healing Potion",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "potion-of-seeing-blue",
    functionalText: `**Instant** - Destroy Potion of Seeing: Look at target hero's hand.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR184.width-450.png",
    keywords: [],
    name: "Potion of Seeing",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "potion-of-deja-vu-blue",
    functionalText: `**Instant** - Destroy Potion of Déjà Vu: Put all cards from your pitch zone on top of your deck in any order. *(Opponents don't get to see the order of the cards.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR185.width-450.png",
    keywords: [],
    name: "Potion of Deja Vu",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "potion-of-ironhide-blue",
    functionalText: `**Instant** - Destroy Potion of Ironhide: Attack action cards you own gain +1{d} this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR186.width-450.png",
    keywords: [],
    name: "Potion of Ironhide",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "potion-of-luck-blue",
    functionalText: `**Instant** - Destroy Potion of Luck: Shuffle your hand and arsenal into your deck then draw that many cards.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR187.width-450.png",
    keywords: [],
    name: "Potion of Luck",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "talisman-of-balance-blue",
    functionalText: `**Go again**

At the beginning of your end phase, if you have less cards in arsenal than an opposing hero, destroy Talisman of Balance and put the top card of your deck into an empty arsenal zone you control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR188.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Talisman of Balance",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "talisman-of-cremation-blue",
    functionalText: `**Go again**

When you play a card from your banished zone, destroy Talisman of Cremation and name a card. Banish all cards with the chosen name from each opposing hero's graveyard.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR189.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Talisman of Cremation",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "talisman-of-featherfoot-yellow",
    functionalText: `**Go again**

When an attack you control gains exactly +1{p} from an effect during the reaction step, destroy Talisman of Featherfoot and the attack gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR190.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Talisman of Featherfoot",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "talisman-of-recompense-yellow",
    functionalText: `**Go again**

Whenever you pitch a card, if you would gain exactly one {r}, instead destroy Talisman of Recompense and gain {r}{r}{r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR191.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Talisman of Recompense",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "talisman-of-tithes-blue",
    functionalText: `**Go again**

If an opponent would draw 1 or more cards during your action phase, instead destroy Talisman of Tithes and they draw that many cards minus 1.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR192.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Talisman of Tithes",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "talisman-of-warfare-yellow",
    functionalText: `**Go again**

When a source you control deals exactly 2 damage to an opposing hero, destroy Talisman of Warfare and all cards in all arsenals.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR193.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Talisman of Warfare",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    
    
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Generic,
    identifier: "silver",
    functionalText: `**Action** - {r}{r}{r}, destroy Silver: Draw a card. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR195.width-450.png",
    keywords: [],
    name: "Silver",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Token,
    typeText: "Generic Token – Item",
    talents: [],
    subType: TokenSubType.Item
  }];
  