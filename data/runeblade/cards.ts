
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
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "viserai-rune-blood",
    functionalText: `Whenever you play a Runeblade card, if you have played another 'non-attack' action card this turn, create a Runechant token. *(It's an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.”)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER011-P.width-450.png",
    keywords: [],
    name: "Viserai, Rune Blood",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.ArcaneRising,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Runeblade Hero",
    intellect: 4,
    hero: Hero.Viserai,
    life: undefined,
    
  },{
    bannedFormats: [Format.Blitz],
    class: Class.Runeblade,
    identifier: "viserai",
    functionalText: `Whenever you play a Runeblade card, if you have played another 'non-attack' action card this turn, create a Runechant token. *(It's an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.”)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER015-P.width-450.png",
    keywords: [],
    name: "Viserai",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.ArcaneRising],
    type: Type.Hero,
    typeText: "Runeblade Hero – Young",
    intellect: 4,
    hero: Hero.Viserai,
    life: undefined,
    young: true,
  },{
    bannedFormats: [Format.Blitz],
    class: Class.Runeblade,
    identifier: "nebula-blade",
    functionalText: `Once per Turn Action - {r}{r}: **Attack**

If Nebula Blade hits, create a Runechant token. (It's an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")

If you have played a 'non-attack' action card this turn, Nebula Blade gains +3{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS011-P.width-450.png",
    keywords: [],
    name: "Nebula Blade",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.ArcaneRising,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Runeblade Weapon – Sword (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 1,
    
    talents: [],
    subType: WeaponSubType.Sword
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "grasp-of-the-arknight",
    functionalText: `**Once per Turn Action** - {r}{r}: Create a Runechant token. This ability costs an additional {r} to activate for each Runechant you control. **Go again**

**Battleworn** *(If you defend with Grasp of the Arknight, put a -1 {d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB010-P.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Grasp of the Arknight",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Runeblade Equipment – Arms",
    defense: 2,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "crown-of-dichotomy",
    functionalText: `**Action** - {r}, destroy Crown of Dichotomy: Put target Runeblade attack action card and target Runeblade 'non-attack' action card from your graveyard on top of your deck in any order.

**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC79.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Crown of Dichotomy",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Runeblade Equipment – Head",
    
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "arknight-ascendancy-red",
    functionalText: `**Viserai Specialization** *(You may only have Arknight Ascendency in your deck if your hero is Viserai.)*

Arknight Ascendency costs {r} less to play for each Runechant you control.

If Arknight Ascendency hits, create X Runechant tokens, where X is the damage dealt by Arknight Ascendency.

**Dominate**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC80.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Dominate],
    name: "Arknight Ascendancy",
    rarity: Rarity.Majestic,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 6,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    specialization: Hero.Viserai,
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "mordred-tide-red",
    functionalText: `Until end of turn, if you would create a Runechant token, instead create that many plus 1.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC81.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Mordred Tide",
    rarity: Rarity.Majestic,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action",
    
    defense: 3,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "ninth-blade-of-the-blood-oath-yellow",
    functionalText: `Ninth Blade of the Blood Oath costs {r} less to play for each Runechant you control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC82.width-450.png",
    keywords: [],
    name: "Ninth Blade of the Blood Oath",
    rarity: Rarity.SuperRare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 9,
    defense: 3,
    pitch: 2,
    power: 9,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "become-the-arknight-blue",
    functionalText: `**Viserai Specialization** *(You may only have Become the Arknight in your deck if your hero is Viserai.)*

You may discard an action card. If you discard an attack action card this way, search your deck for a Runeblade ‘non-attack' action card, reveal it, and put it into your hand. If you discard a ‘non-attack' action card this way, search your deck for a Runeblade attack action card, reveal it, and put it into your hand. Shuffle your deck.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC83.width-450.png",
    keywords: [Keyword.Specialization,Keyword.GoAgain],
    name: "Become the Arknight",
    rarity: Rarity.SuperRare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action",
    
    defense: 3,
    pitch: 3,
    
    talents: [],
    
    
    
    specialization: Hero.Viserai,
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "tome-of-the-arknight-blue",
    functionalText: `Reveal the top 2 cards of your deck. If you reveal an attack action card and a 'non-attack' action card this way, put them into your hand.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC84.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Tome of the Arknight",
    rarity: Rarity.SuperRare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 1,
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "spellblade-assault-red",
    functionalText: `Create 2 Runechant tokens. *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC85.width-450.png",
    keywords: [],
    name: "Spellblade Assault",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "spellblade-assault-yellow",
    functionalText: `Create 2 Runechant tokens. *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC86.width-450.png",
    keywords: [],
    name: "Spellblade Assault",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "spellblade-assault-blue",
    functionalText: `Create 2 Runechant tokens. *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC87.width-450.png",
    keywords: [],
    name: "Spellblade Assault",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },,,,{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "oath-of-the-arknight-red",
    functionalText: `Your next Runeblade attack this turn gains +3{p}.

Create a Runechant token. *(It's an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC91.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Oath of the Arknight",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 2,
    defense: 3,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "oath-of-the-arknight-yellow",
    functionalText: `Your next Runeblade attack this turn gains +2{p}.

Create a Runechant token. *(It's an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC92.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Oath of the Arknight",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 2,
    defense: 3,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "oath-of-the-arknight-blue",
    functionalText: `Your next Runeblade attack this turn gains +1{p}.

Create a Runechant token. *(It's an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC93.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Oath of the Arknight",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 2,
    defense: 3,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "amplify-the-arknight-red",
    functionalText: `Amplify the Arknight costs {r} less to play for each Runechant you control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC94.width-450.png",
    keywords: [],
    name: "Amplify the Arknight",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "amplify-the-arknight-yellow",
    functionalText: `Amplify the Arknight costs {r} less to play for each Runechant you control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC95.width-450.png",
    keywords: [],
    name: "Amplify the Arknight",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "amplify-the-arknight-blue",
    functionalText: `Amplify the Arknight costs {r} less to play for each Runechant you control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC96.width-450.png",
    keywords: [],
    name: "Amplify the Arknight",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "drawn-to-the-dark-dimension-red",
    functionalText: `Drawn to the Dark Dimension costs {r} less to play for each Runechant you control.

Draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC97.width-450.png",
    keywords: [],
    name: "Drawn to the Dark Dimension",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "drawn-to-the-dark-dimension-yellow",
    functionalText: `Drawn to the Dark Dimension costs {r} less to play for each Runechant you control.

Draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC98.width-450.png",
    keywords: [],
    name: "Drawn to the Dark Dimension",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "drawn-to-the-dark-dimension-blue",
    functionalText: `Drawn to the Dark Dimension costs {r} less to play for each Runechant you control.

Draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC99.width-450.png",
    keywords: [],
    name: "Drawn to the Dark Dimension",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "rune-flash-red",
    functionalText: `Rune Flash costs {r} less to play for each Runechant you control.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC100.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Rune Flash",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "rune-flash-yellow",
    functionalText: `Rune Flash costs {r} less to play for each Runechant you control.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC101.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Rune Flash",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "rune-flash-blue",
    functionalText: `Rune Flash costs {r} less to play for each Runechant you control.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC102.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Rune Flash",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "spellblade-strike-red",
    functionalText: `Create a Runechant token. *(It's an aura with “When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.”)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC103.width-450.png",
    keywords: [],
    name: "Spellblade Strike",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "spellblade-strike-yellow",
    functionalText: `Create a Runechant token. *(It's an aura with “When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.”)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC104.width-450.png",
    keywords: [],
    name: "Spellblade Strike",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "spellblade-strike-blue",
    functionalText: `Create a Runechant token. *(It's an aura with “When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.”)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC105.width-450.png",
    keywords: [],
    name: "Spellblade Strike",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "bloodspill-invocation-red",
    functionalText: `*(Aura's stay in the arena until they are destroyed.)*

**Go again**

When an attack action card you control hits, destroy Bloodspill Invocation then create 3 Runechant tokens. *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*

When your hero is dealt damage, destroy Bloodspill Invocation.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC106.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Bloodspill Invocation",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Aura",
    cost: 1,
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "bloodspill-invocation-yellow",
    functionalText: `*(Aura's stay in the arena until they are destroyed.)*

**Go again**

When an attack action card you control hits, destroy Bloodspill Invocation then create 3 Runechant tokens. *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*

When your hero is dealt damage, destroy Bloodspill Invocation.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC107.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Bloodspill Invocation",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Aura",
    cost: 1,
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "bloodspill-invocation-blue",
    functionalText: `*(Aura's stay in the arena until they are destroyed.)*

**Go again**

When an attack action card you control hits, destroy Bloodspill Invocation then create 3 Runechant tokens. *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*

When your hero is dealt damage, destroy Bloodspill Invocation.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC108.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Bloodspill Invocation",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Aura",
    cost: 1,
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "read-the-runes-red",
    functionalText: `Create 3 Runechant tokens. *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC109.width-450.png",
    keywords: [],
    name: "Read the Runes",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action",
    
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "read-the-runes-yellow",
    functionalText: `Create 2 Runechant tokens. *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC110.width-450.png",
    keywords: [],
    name: "Read the Runes",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action",
    
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "read-the-runes-blue",
    functionalText: `Create a Runechant token. *(It's an aura with “When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.”)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC111.width-450.png",
    keywords: [],
    name: "Read the Runes",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action",
    
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "runechant",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*

When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC112.width-450.png",
    keywords: [],
    name: "Runechant",
    rarity: Rarity.Token,
    sets: [Release.ArcaneRising,Release.CrucibleOfWar,Release.Everfest],
    type: Type.Token,
    typeText: "Runeblade Token – Aura",
    talents: [],
    subType: TokenSubType.Aura
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "arknight-shard-blue",
    functionalText: `**Legendary Viserai Specialization** *(You may only have 1 Arknight Shard in your deck, and only if your hero is Viserai.)*

When you pitch Arknight Shard, create a Runechant token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU0.width-450.png",
    keywords: [Keyword.Legendary,Keyword.Specialization],
    name: "Arknight Shard",
    rarity: Rarity.Fabled,
    sets: [Release.CrucibleOfWar],
    type: Type.Resource,
    typeText: "Runeblade Resource – Gem",
    
    
    pitch: 3,
    talents: [],
    subType: ResourceSubType.Gem
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "reaping-blade",
    functionalText: `**Once per Turn Action** - {r}: **Attack**

If a hero has more {h} than any other hero, they can't gain {h}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU140.width-450.png",
    keywords: [],
    name: "Reaping Blade",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Runeblade Weapon – Sword (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 3,
    
    talents: [],
    subType: WeaponSubType.Sword
  },{
    bannedFormats: [Format.ClassicConstructed],
    class: Class.Runeblade,
    identifier: "bloodsheath-skeleta",
    functionalText: `**Instant** - Destroy Bloodsheath Skeleta: The next attack action card and 'non-attack' action card you play this turn gain "This card costs {r} less to play for each Runechant you control."

**Temper** *(If you defend with Bloodsheath Skeleta, put a -1{d} counter on it when the combat chain closes then destroy it if it has 0{d}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU141.width-450.png",
    keywords: [Keyword.Temper],
    name: "Bloodsheath Skeleta",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Runeblade Equipment – Chest",
    defense: 2,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "dread-triptych-blue",
    functionalText: `When you attack with Dread Triptych, if you've played a 'non-attack' action card this turn, create a Runechant token.

When you attack with Dread Triptych, if you've dealt arcane damage this turn, create a Runechant token.

If Dread Triptych hits, create a Runechant token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU142.width-450.png",
    keywords: [],
    name: "Dread Triptych",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "rattle-bones-red",
    functionalText: `Banish target Runeblade attack action card from your graveyard. You may play it this turn.

If you have dealt arcane damage to an opposing hero this turn, you may play Rattle Bones as though it were an instant.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU143.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Rattle Bones",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 2,
    defense: 3,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "runeblood-barrier-yellow",
    functionalText: `Create 4 Runechant tokens.

If your hero would be dealt damage, instead destroy that many Runechants you control and prevent 1 damage that source would deal for each Runechant token destroyed this way.

At the beginning of your action phase, destroy Runeblood Barrier.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU144.width-450.png",
    keywords: [],
    name: "Runeblood Barrier",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action – Aura",
    cost: 3,
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "mauvrion-skies-red",
    functionalText: `The next runeblade attack action card you play this turn gains **go again** and “If this hits, create 3 Runechant tokens.” *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU145.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Mauvrion Skies",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action",
    
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "mauvrion-skies-yellow",
    functionalText: `The next runeblade attack action card you play this turn gains **go again** and “If this hits, create 2 Runechant tokens.” *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU146.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Mauvrion Skies",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action",
    
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "mauvrion-skies-blue",
    functionalText: `The next runeblade attack action card you play this turn gains **go again** and “If this hits, create a Runechant token.” *(It's an auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU147.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Mauvrion Skies",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action",
    
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "consuming-volition-red",
    functionalText: `If you have dealt arcane damage this turn, Consuming Volition gains "If this hits a hero, they discard a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU148.width-450.png",
    keywords: [],
    name: "Consuming Volition",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "consuming-volition-yellow",
    functionalText: `If you have dealt arcane damage this turn, Consuming Volition gains "If this hits a hero, they discard a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU149.width-450.png",
    keywords: [],
    name: "Consuming Volition",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "consuming-volition-blue",
    functionalText: `If you have dealt arcane damage this turn, Consuming Volition gains "If this hits a hero, they discard a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU150.width-450.png",
    keywords: [],
    name: "Consuming Volition",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "meat-and-greet-red",
    functionalText: `If Meat and Greet hits, create a Runechant token. *(It's an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*

If you have dealt arcane damage to an opposing hero this turn, Meat and Greet gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU151.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Meat and Greet",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "meat-and-greet-yellow",
    functionalText: `If Meat and Greet hits, create a Runechant token. *(It's an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*

If you have dealt arcane damage to an opposing hero this turn, Meat and Greet gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU152.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Meat and Greet",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "meat-and-greet-blue",
    functionalText: `If Meat and Greet hits, create a Runechant token. *(It's an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*

If you have dealt arcane damage to an opposing hero this turn, Meat and Greet gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU153.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Meat and Greet",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "sutcliffes-research-notes-red",
    functionalText: `Reveal the top 3 cards of your deck. Create a Runechant token for each Runeblade attack action card revealed this way, then put the cards on top of your deck in any order. *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU154.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sutcliffe's Research Notes",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 1,
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "sutcliffes-research-notes-yellow",
    functionalText: `Reveal the top 2 cards of your deck. Create a Runechant token for each Runeblade attack action card revealed this way, then put the cards on top of your deck in any order. *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU155.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sutcliffe's Research Notes",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 1,
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "sutcliffes-research-notes-blue",
    functionalText: `Reveal the top card of your deck. Create a Runechant token for each Runeblade attack action card revealed this way, then put the cards on top of your deck in any order. *(It's an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU156.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sutcliffe's Research Notes",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 1,
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "chane-bound-by-shadow",
    functionalText: `**Once per Turn Action** - Create a Soul Shackle token: Your next Runeblade or Shadow action this turn gains **go again. Go again** *(It's a Shadow Runeblade aura with "At the beginning of your action phase, banish the top card of your deck.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER033.width-450.png",
    keywords: [],
    name: "Chane, Bound by Shadow",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.Monarch],
    type: Type.Hero,
    typeText: "Shadow Runeblade Hero",
    intellect: 4,
    hero: Hero.Chane,
    life: undefined,
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "chane",
    functionalText: `**Once per Turn Action** - Create a Soul Shackle token: Your next Runeblade or Shadow action this turn gains **go again. Go again** *(It's a Shadow Runeblade aura with "At the beginning of your action phase, banish the top card of your deck.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER037.width-450.png",
    keywords: [],
    name: "Chane",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.Monarch],
    type: Type.Hero,
    typeText: "Shadow Runeblade Hero – Young",
    intellect: 4,
    hero: Hero.Chane,
    life: undefined,
    young: true,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "galaxxi-black",
    functionalText: `**Once per Turn Action** - {r}: **Attack**

If you have played a card from your banished zone this turn, Galaxxi Black gains +2{p} until end of turn.

If Galaxxi Black hits a hero, deal 1 arcane damage to that hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS046.width-450.png",
    keywords: [],
    name: "Galaxxi Black",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Weapon,
    typeText: "Shadow Runeblade Weapon – Sword (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 1,
    
    talents: [],
    subType: WeaponSubType.Sword
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "shadow-of-ursur-blue",
    functionalText: `You may play Shadow of Ursur from your banished zone.

As an additional cost to play Shadow of Ursur, you may banish a card with blood debt from your hand. If you do, Shadow of Ursur gains **go again.**

**Blood Debt** *(At the beginning of your end phase, if Shadow of Ursur is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON156.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.BloodDebt],
    name: "Shadow of Ursur",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "dimenxxional-crossroads-yellow",
    functionalText: `**Go again**

Whenever you play an attack action card or a 'non-attack' action card from the banished zone, if you haven't played another card of that type this turn, deal 1 arcane damage to target hero.

If you lose {h} during your turn, destroy Dimenxxional Crossroads. *(Damage causes loss of {h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON157.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Dimenxxional Crossroads",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action – Aura",
    cost: 2,
    defense: 3,
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "invert-existence-blue",
    functionalText: `You may play Invert Existence from your banished zone.

Banish up to 2 cards in an opposing hero's graveyard. If an attack action card and a 'non-attack' action card are banished this way, deal 2 arcane damage to that hero.

**Blood Debt** *(At the beginning of your end phase, if Invert Existence is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON158.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Invert Existence",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Shadow Runeblade Instant",
    cost: 1,
    
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "unhallowed-rites-red",
    functionalText: `If you have played a 'non-attack' action card this turn, you may play Unhallowed Rites from your banished zone.

You may put a 'non-attack' action card with blood debt from your graveyard on the bottom of your deck.

**Blood Debt** *(At the beginning of your end phase, if Unhallowed Rites is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON159.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Unhallowed Rites",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "unhallowed-rites-yellow",
    functionalText: `If you have played a 'non-attack' action card this turn, you may play Unhallowed Rites from your banished zone.

You may put a 'non-attack' action card with blood debt from your graveyard on the bottom of your deck.

**Blood Debt** *(At the beginning of your end phase, if Unhallowed Rites is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON160.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Unhallowed Rites",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "unhallowed-rites-blue",
    functionalText: `If you have played a 'non-attack' action card this turn, you may play Unhallowed Rites from your banished zone.

You may put a 'non-attack' action card with blood debt from your graveyard on the bottom of your deck.

**Blood Debt** *(At the beginning of your end phase, if Unhallowed Rites is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON161.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Unhallowed Rites",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "dimenxxional-gateway-red",
    functionalText: `Opt 3 *(Look at the top 3 cards of your deck. You may put them on the top and/or bottom in any order.)*

Reveal the top card of your deck. If it's a Runeblade card, deal 1 arcane damage to each opposing hero. If it's a Shadow card, you may banish it.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON162.width-450.png",
    keywords: [Keyword.Opt,Keyword.GoAgain],
    name: "Dimenxxional Gateway",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action",
    cost: 1,
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "dimenxxional-gateway-yellow",
    functionalText: `Opt 2 *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*

Reveal the top card of your deck. If it's a Runeblade card, deal 1 arcane damage to each opposing hero. If it's a Shadow card, you may banish it.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON163.width-450.png",
    keywords: [Keyword.Opt,Keyword.GoAgain],
    name: "Dimenxxional Gateway",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action",
    cost: 1,
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "dimenxxional-gateway-blue",
    functionalText: `Opt 1 *(Look at the top card of your deck. You may it on the bottom.)*

Reveal the top card of your deck. If it's a Runeblade card, deal 1 arcane damage to each opposing hero. If it's a Shadow card, you may banish it.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON164.width-450.png",
    keywords: [Keyword.Opt,Keyword.GoAgain],
    name: "Dimenxxional Gateway",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action",
    cost: 1,
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "seeping-shadows-red",
    functionalText: `You may play Seeping Shadows from your banished zone.

The next attack action card with cost 2 or less you play this turns gains +1{p} and **go again.**

**Go again**

**Blood Debt** *(At the beginning of your end phase, if Seeping Shadows is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON165.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.BloodDebt],
    name: "Seeping Shadows",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action",
    cost: 3,
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "seeping-shadows-yellow",
    functionalText: `You may play Seeping Shadows from your banished zone.

The next attack action card with cost 1 or less you play this turns gains +1{p} and **go again.**

**Go again**

**Blood Debt** *(At the beginning of your end phase, if Seeping Shadows is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON166.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.BloodDebt],
    name: "Seeping Shadows",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action",
    cost: 3,
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "seeping-shadows-blue",
    functionalText: `You may play Seeping Shadows from your banished zone.

The next attack action card with cost 0 you play this turns gains +1{p} and **go again.**

**Go again**

**Blood Debt** *(At the beginning of your end phase, if Seeping Shadows is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON167.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.BloodDebt],
    name: "Seeping Shadows",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action",
    cost: 3,
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "bounding-demigon-red",
    functionalText: `If you have played a 'non-attack' action card this turn, you may play Bounding Demigon from your banished zone. If you do, it gains +1{p}.

**Blood Debt** *(At the beginning of your end phase, if Bounding Demigon is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON168.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Bounding Demigon",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    
    defense: 3,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "bounding-demigon-yellow",
    functionalText: `If you have played a 'non-attack' action card this turn, you may play Bounding Demigon from your banished zone. If you do, it gains +1{p}.

**Blood Debt** *(At the beginning of your end phase, if Bounding Demigon is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON169.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Bounding Demigon",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    
    defense: 3,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "bounding-demigon-blue",
    functionalText: `If you have played a 'non-attack' action card this turn, you may play Bounding Demigon from your banished zone. If you do, it gains +1{p}.

**Blood Debt** *(At the beginning of your end phase, if Bounding Demigon is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON170.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Bounding Demigon",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    
    defense: 3,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "piercing-shadow-vise-red",
    functionalText: `You may play Piercing Shadow Vise from your banished zone.

If you have dealt arcane damage to an opposing hero this turn, Piercing Shadow Vise gains +2 {p}.

**Blood Debt** *(At the beginning of your end phase, if Piercing Shadow Vise is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON171.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Piercing Shadow Vise",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "piercing-shadow-vise-yellow",
    functionalText: `You may play Piercing Shadow Vise from your banished zone.

If you have dealt arcane damage to an opposing hero this turn, Piercing Shadow Vise gains +2 {p}.

**Blood Debt** *(At the beginning of your end phase, if Piercing Shadow Vise is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON172.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Piercing Shadow Vise",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 2,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "piercing-shadow-vise-blue",
    functionalText: `You may play Piercing Shadow Vise from your banished zone.

If you have dealt arcane damage to an opposing hero this turn, Piercing Shadow Vise gains +2 {p}.

**Blood Debt** *(At the beginning of your end phase, if Piercing Shadow Vise is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON173.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Piercing Shadow Vise",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "rift-bind-red",
    functionalText: `You may play Rift Bind from your banished zone. If you do, it gains +X{p}, where X is the number of 'non-attack' action cards you have played this turn.

**Blood Debt** *(At the beginning of your end phase, if Rift Bind is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON174.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Rift Bind",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "rift-bind-yellow",
    functionalText: `You may play Rift Bind from your banished zone. If you do, it gains +X{p}, where X is the number of 'non-attack' action cards you have played this turn.

**Blood Debt** *(At the beginning of your end phase, if Rift Bind is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON175.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Rift Bind",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "rift-bind-blue",
    functionalText: `You may play Rift Bind from your banished zone. If you do, it gains +X{p}, where X is the number of 'non-attack' action cards you have played this turn.

**Blood Debt** *(At the beginning of your end phase, if Rift Bind is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON176.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Rift Bind",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "rifted-torment-red",
    functionalText: `You may play Rifted Torment from your banished zone. If you do, deal 1 arcane damage to target hero.

**Blood Debt** *(At the beginning of your end phase, if Rifted Torment is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON177.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Rifted Torment",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "rifted-torment-yellow",
    functionalText: `You may play Rifted Torment from your banished zone. If you do, deal 1 arcane damage to target hero.

**Blood Debt** *(At the beginning of your end phase, if Rifted Torment is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON178.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Rifted Torment",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 2,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "rifted-torment-blue",
    functionalText: `You may play Rifted Torment from your banished zone. If you do, deal 1 arcane damage to target hero.

**Blood Debt** *(At the beginning of your end phase, if Rifted Torment is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON179.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Rifted Torment",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "rip-through-reality-red",
    functionalText: `You may play Rip Through Reality from your banished zone.

If you have dealt arcane damage to an opposing hero this turn, Rip Through Reality gains ((go again.**

**Blood Debt** *(At the beginning of your end phase, if Rip Through Reality is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON180.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.BloodDebt],
    name: "Rip Through Reality",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "rip-through-reality-yellow",
    functionalText: `You may play Rip Through Reality from your banished zone.

If you have dealt arcane damage to an opposing hero this turn, Rip Through Reality gains ((go again.**

**Blood Debt** *(At the beginning of your end phase, if Rip Through Reality is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON181.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.BloodDebt],
    name: "Rip Through Reality",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 2,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "rip-through-reality-blue",
    functionalText: `You may play Rip Through Reality from your banished zone.

If you have dealt arcane damage to an opposing hero this turn, Rip Through Reality gains ((go again.**

**Blood Debt** *(At the beginning of your end phase, if Rip Through Reality is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON182.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.BloodDebt],
    name: "Rip Through Reality",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [Format.Blitz,Format.ClassicConstructed],
    class: Class.Runeblade,
    identifier: "seeds-of-agony-red",
    functionalText: `You may play Seeds of Agony from your banished zone.

The next attack action card with cost 2 or less you play this turn gains "When you attack with this, deal 1 arcane damage to target hero.”

**Go again**

**Blood Debt** *(At the beginning of your end phase, if Seeds of Agony is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON183_up.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.BloodDebt],
    name: "Seeds of Agony",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action",
    
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [Format.Blitz,Format.ClassicConstructed],
    class: Class.Runeblade,
    identifier: "seeds-of-agony-yellow",
    functionalText: `You may play Seeds of Agony from your banished zone.

The next attack action card with cost 1 or less you play this turn gains "When you attack with this, deal 1 arcane damage to target hero.”

**Go again**

**Blood Debt** *(At the beginning of your end phase, if Seeds of Agony is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON184.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.BloodDebt],
    name: "Seeds of Agony",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action",
    
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [Format.Blitz,Format.ClassicConstructed],
    class: Class.Runeblade,
    identifier: "seeds-of-agony-blue",
    functionalText: `You may play Seeds of Agony from your banished zone.

The next attack action card with cost 0 or less you play this turn gains "When you attack with this, deal 1 arcane damage to target hero.”

**Go again**

**Blood Debt** *(At the beginning of your end phase, if Seeds of Agony is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON185.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.BloodDebt],
    name: "Seeds of Agony",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action",
    
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "soul-shackle",
    functionalText: `*(Auras stay in the arena.)*

At the beginning of your action phase, banish the top card of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON186.width-450.png",
    keywords: [],
    name: "Soul Shackle",
    rarity: Rarity.Token,
    sets: [Release.Monarch],
    type: Type.Token,
    typeText: "Shadow Runeblade Token – Aura",
    talents: [],
    subType: TokenSubType.Aura
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "dread-scythe",
    functionalText: `**Once per Turn Action** - {r}{r}{r}: **Attack**

Whenever you attack with Dread Scythe, deal 1 arcane damage to the defending hero.

A hero dealt damage by Dread Scythe can't gain {h} during their next action phase.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON229.width-450.png",
    keywords: [],
    name: "Dread Scythe",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Weapon,
    typeText: "Runeblade Weapon – Scythe (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 3,
    
    talents: [],
    subType: WeaponSubType.Scythe
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "aether-ironweave",
    functionalText: `**Action** - Destroy Aether Ironweave: Gain {r}{r}. Activate this ability only if you have played an attack action card and a 'non-attack' action card this turn. **Go again**

**Battleworn** *(If you defend with Aether Ironweave, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON230.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Aether Ironweave",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Runeblade Equipment – Chest",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    bannedFormats: [Format.Blitz],
    class: Class.Runeblade,
    identifier: "sonata-arcanix-red",
    functionalText: `Reveal the top X+3 cards of your deck.

For each 'non-attack' action card revealed this way, you may put an attack action card revealed this way into your hand. Then deal arcane damage to target hero equal to the number of cards put into your hand this way.

Shuffle your deck. Banish Sonata Arcanix.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON231.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sonata Arcanix",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Runeblade Action",
    
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    specialCost: "XX",
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "vexing-malice-red",
    functionalText: `Deal 2 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS057.width-450.png",
    keywords: [],
    name: "Vexing Malice",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "vexing-malice-yellow",
    functionalText: `Deal 2 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS058.width-450.png",
    keywords: [],
    name: "Vexing Malice",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "vexing-malice-blue",
    functionalText: `Deal 2 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS059.width-450.png",
    keywords: [],
    name: "Vexing Malice",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "arcanic-crackle-red",
    functionalText: `Deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON235.width-450.png",
    keywords: [],
    name: "Arcanic Crackle",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    
    defense: 3,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "arcanic-crackle-yellow",
    functionalText: `Deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON236.width-450.png",
    keywords: [],
    name: "Arcanic Crackle",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    
    defense: 3,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "arcanic-crackle-blue",
    functionalText: `Deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON237.width-450.png",
    keywords: [],
    name: "Arcanic Crackle",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    
    defense: 3,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },,{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "briar-warden-of-thorns",
    functionalText: `**Essence of Earth and Lightning** *(You may have Earth and Lightning cards in your deck.)*

The first time an attack action card you control deals damage to an opposing hero, create an Embodiment of Earth token.

Whenever you play your second 'non-attack' action card each turn, create an Embodiment of Lightning token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER044.width-450.png",
    keywords: [Keyword.Essence],
    name: "Briar, Warden of Thorns",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.TalesOfAria],
    type: Type.Hero,
    typeText: "Elemental Runeblade Hero",
    intellect: 4,
    hero: Hero.Briar,
    life: undefined,
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "briar",
    functionalText: `**Essence of Earth and Lightning** *(You may have Earth and Lightning cards in your deck.)*

The first time an attack action card you control deals damage to an opposing hero, create an Embodiment of Earth token.

Whenever you play your second 'non-attack' action card each turn, create an Embodiment of Lightning token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER047.width-450.png",
    keywords: [Keyword.Essence],
    name: "Briar",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.TalesOfAria],
    type: Type.Hero,
    typeText: "Elemental Runeblade Hero – Young",
    intellect: 4,
    hero: Hero.Briar,
    life: undefined,
    young: true,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "blossoming-spellblade-red",
    functionalText: `**Earth and Lightning Fusion** *(As an additional cost to play Blossoming Spellblade, you may reveal an Earth and a Lightning card from your hand.)*

If Blossoming Spellblade was **fused**, it gains "Whenever this deals damage to an opposing hero, you may banish a 'non-attack' action card from your graveyard. If you do, you may play it this turn as though it were an instant and if it would be put into your graveyard, instead banish it."

When you attack with Blossoming Spellblade, if it was **fused**, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE064.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Blossoming Spellblade",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "flicker-wisp-yellow",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Flicker Wisp, you may reveal a Lightning card from your hand.)*

If Flicker Wisp was **fused**, until end of turn, action card effects you control that deal arcane damage, instead deal that much arcane damage plus 1.

Deal 1 arcane damage to target hero.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE065.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Flicker Wisp",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action",
    
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "force-of-nature-blue",
    functionalText: `**Briar Specialization** *(You may only have Force of Nature in your deck if your hero is Briar.)*

**Earth Fusion** *(As an additional cost to play Force of Nature, you may reveal an Earth card from your hand.)*

Whenever an attack action card you control hits this turn, if its {p} is greater than its base {p}, draw a card.

If Force of Nature was fused, your next attack this turn gains +1{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE066.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Fusion,Keyword.GoAgain],
    name: "Force of Nature",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action",
    
    defense: 3,
    pitch: 3,
    
    talents: [],
    
    
    
    specialization: Hero.Briar,
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "explosive-growth-red",
    functionalText: `**Earth Fusion** *(As an additional cost to play Explosive Growth, you may reveal an Earth card from your hand.)*

If Explosive Growth was **fused**, whenever it deals damage, attacks gain +1{p} this combat chain.
When you attack with Explosive Growth, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE067.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Explosive Growth",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "explosive-growth-yellow",
    functionalText: `**Earth Fusion** *(As an additional cost to play Explosive Growth, you may reveal an Earth card from your hand.)*

If Explosive Growth was **fused**, whenever it deals damage, attacks gain +1{p} this combat chain.
When you attack with Explosive Growth, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE068.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Explosive Growth",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "explosive-growth-blue",
    functionalText: `**Earth Fusion** *(As an additional cost to play Explosive Growth, you may reveal an Earth card from your hand.)*

If Explosive Growth was **fused**, whenever it deals damage, attacks gain +1{p} this combat chain.
When you attack with Explosive Growth, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE069.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Explosive Growth",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "rites-of-lightning-red",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Rites of Lightning, you may reveal a Lightning card from your hand.)*

When you attack with Rites of Lightning, if it was **fused**, deal 1 arcane damage to target hero.

If you have dealt arcane damage this turn, Rites of Lightning gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE070.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Rites of Lightning",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "rites-of-lightning-yellow",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Rites of Lightning, you may reveal a Lightning card from your hand.)*

When you attack with Rites of Lightning, if it was **fused**, deal 1 arcane damage to target hero.

If you have dealt arcane damage this turn, Rites of Lightning gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE071.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Rites of Lightning",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "rites-of-lightning-blue",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Rites of Lightning, you may reveal a Lightning card from your hand.)*

When you attack with Rites of Lightning, if it was **fused**, deal 1 arcane damage to target hero.

If you have dealt arcane damage this turn, Rites of Lightning gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE072.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Rites of Lightning",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "arcanic-shockwave-red",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Arcanic Shockwave, you may reveal a Lightning card from your hand.)*

When you attack with Arcanic Shockwave, if it was **fused**, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE073.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Arcanic Shockwave",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "arcanic-shockwave-yellow",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Arcanic Shockwave, you may reveal a Lightning card from your hand.)*

When you attack with Arcanic Shockwave, if it was **fused**, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE074.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Arcanic Shockwave",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "arcanic-shockwave-blue",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Arcanic Shockwave, you may reveal a Lightning card from your hand.)*

When you attack with Arcanic Shockwave, if it was **fused**, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE075.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Arcanic Shockwave",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "vela-flash-red",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Vela Flash, you may reveal a Lightning card from your hand.)*

If Vela Flash was **fused**, you may play your next 'non-attack' action card this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE076.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Vela Flash",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "vela-flash-yellow",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Vela Flash, you may reveal a Lightning card from your hand.)*

If Vela Flash was **fused**, you may play your next 'non-attack' action card this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE077.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Vela Flash",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "vela-flash-blue",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Vela Flash, you may reveal a Lightning card from your hand.)*

If Vela Flash was **fused**, you may play your next 'non-attack' action card this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE078.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Vela Flash",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "rites-of-replenishment-red",
    functionalText: `**Earth Fusion** *(As an additional cost to play Rites of Replenishment, you may reveal an Earth card from your hand.)*

When you attack with Rites of Replenishment, if you have dealt arcane damage this turn, you may put a 'non-attack' action card from your graveyard on the bottom of your deck.

When you attack with Rites of Replenishment, if it was **fused**, you may put an attack action card from your graveyard on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE079.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Rites of Replenishment",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "rites-of-replenishment-yellow",
    functionalText: `**Earth Fusion** *(As an additional cost to play Rites of Replenishment, you may reveal an Earth card from your hand.)*

When you attack with Rites of Replenishment, if you have dealt arcane damage this turn, you may put a 'non-attack' action card from your graveyard on the bottom of your deck.

When you attack with Rites of Replenishment, if it was **fused**, you may put an attack action card from your graveyard on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE080.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Rites of Replenishment",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "rites-of-replenishment-blue",
    functionalText: `**Earth Fusion** *(As an additional cost to play Rites of Replenishment, you may reveal an Earth card from your hand.)*

When you attack with Rites of Replenishment, if you have dealt arcane damage this turn, you may put a 'non-attack' action card from your graveyard on the bottom of your deck.

When you attack with Rites of Replenishment, if it was **fused**, you may put an attack action card from your graveyard on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE081.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Rites of Replenishment",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "stir-the-wildwood-red",
    functionalText: `**Earth Fusion** *(As an additional cost to play Stir the Wildwood, you may reveal an Earth card from your hand.)*

If you have dealt arcane damage to an opposing hero this turn, Stir the Wildwood gains +2{p}.

If Stir the Wildwood was **fused**, it gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB047.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Stir the Wildwood",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "stir-the-wildwood-yellow",
    functionalText: `**Earth Fusion** *(As an additional cost to play Stir the Wildwood, you may reveal an Earth card from your hand.)*

If you have dealt arcane damage to an opposing hero this turn, Stir the Wildwood gains +2{p}.

If Stir the Wildwood was **fused**, it gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE083.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Stir the Wildwood",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "stir-the-wildwood-blue",
    functionalText: `**Earth Fusion** *(As an additional cost to play Stir the Wildwood, you may reveal an Earth card from your hand.)*

If you have dealt arcane damage to an opposing hero this turn, Stir the Wildwood gains +2{p}.

If Stir the Wildwood was **fused**, it gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE084.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Stir the Wildwood",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "bramble-spark-red",
    functionalText: `**Earth Fusion** *(As an additional cost to play Bramble Spark, you may reveal an Earth card from your hand.)*

The next attack action card you play this turn gains "When you attack with this, deal 1 arcane damage to target hero."

If Bramble Spark was **fused**, the next attack action card you play this turn gains +3{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE085.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Bramble Spark",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action",
    
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "bramble-spark-yellow",
    functionalText: `**Earth Fusion** *(As an additional cost to play Bramble Spark, you may reveal an Earth card from your hand.)*

The next attack action card you play this turn gains "When you attack with this, deal 1 arcane damage to target hero."

If Bramble Spark was **fused**, the next attack action card you play this turn gains +2{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE086.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Bramble Spark",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action",
    
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "bramble-spark-blue",
    functionalText: `**Earth Fusion** *(As an additional cost to play Bramble Spark, you may reveal an Earth card from your hand.)*

The next attack action card you play this turn gains "When you attack with this, deal 1 arcane damage to target hero."

If Bramble Spark was **fused**, the next attack action card you play this turn gains +1{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE087.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Bramble Spark",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action",
    
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "inspire-lightning-red",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Inspire Lightning, you may reveal a Lightning card from your hand.)*

If Inspire Lightning was **fused**, deal 3 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE088.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Inspire Lightning",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action",
    cost: 1,
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "inspire-lightning-yellow",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Inspire Lightning, you may reveal a Lightning card from your hand.)*

If Inspire Lightning was **fused**, deal 2 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE089.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Inspire Lightning",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action",
    cost: 1,
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "inspire-lightning-blue",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Inspire Lightning, you may reveal a Lightning card from your hand.)*

If Inspire Lightning was **fused**, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE090.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Inspire Lightning",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Runeblade Action",
    cost: 1,
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "rosetta-thorn",
    functionalText: `**Once per Turn Action** - {r}: **Attack**

Whenever you attack with Rosetta Thorn, if you've played an attack action card and a 'non-attack' action card this turn, deal 2 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS068.width-450.png",
    keywords: [],
    name: "Rosetta Thorn",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Weapon,
    typeText: "Runeblade Weapon – Sword (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 2,
    
    talents: [],
    subType: WeaponSubType.Sword
  },{
    bannedFormats: [Format.Blitz,Format.ClassicConstructed],
    class: Class.Runeblade,
    identifier: "duskblade",
    functionalText: `**Once per Turn Action** - {r}: **Attack**

Whenever you attack with Duskblade, if you've played an attack action card and a 'non-attack' action card this turn, put a +1{p} counter on Duskblade.

At the beginning of your end phase, if you haven't played an attack action card and a 'non-attack' action card this turn, remove all +1{p} counters from Duskblade.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE223.width-450.png",
    keywords: [],
    name: "Duskblade",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Weapon,
    typeText: "Runeblade Weapon – Sword (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 2,
    
    talents: [],
    subType: WeaponSubType.Sword
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "spellbound-creepers",
    functionalText: `**Once per Turn Instant** - {r}, put a bind counter on Spellbound Creepers: You may play your next 'non-attack' action card this turn as though it were an instant. Activate this ability only if you have attacked or defended with an attack action card this turn.

At the beginning of your end phase, destroy Spellbound Creepers unless you have dealt arcane damage equal to or greater than the number of bind counters on Spellbound Creepers.

**Blade Break** *(If you defend with Spellbound Creepers, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB051.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Spellbound Creepers",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Equipment,
    typeText: "Runeblade Equipment – Legs",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "sutcliffes-suede-hides",
    functionalText: `**Attack Reaction** - {r}, destroy Sutcliffe's Suede Hides: Target attack action card gains **go again.** Activate this ability only if you have played a 'non-attack' action card this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE225.width-450.png",
    keywords: [],
    name: "Sutcliffe's Suede Hides",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Equipment,
    typeText: "Runeblade Equipment – Legs",
    
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "sting-of-sorcery-blue",
    functionalText: `**Go again**

Attack action cards you control gain “When you attack with this, deal 1 arcane damage to target hero.”

At the beginning of your end phase, destroy Sting of Sorcery.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE226.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sting of Sorcery",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Runeblade Action – Aura",
    
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },,,,{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "singeing-steelblade-red",
    functionalText: `When you attack with Singeing Steelblade, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE230.width-450.png",
    keywords: [],
    name: "Singeing Steelblade",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "singeing-steelblade-yellow",
    functionalText: `When you attack with Singeing Steelblade, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE231.width-450.png",
    keywords: [],
    name: "Singeing Steelblade",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "singeing-steelblade-blue",
    functionalText: `When you attack with Singeing Steelblade, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE232.width-450.png",
    keywords: [],
    name: "Singeing Steelblade",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "vexing-quillhand",
    functionalText: `**Action** - Destroy Vexing Quillhand: Create 2 Runechant tokens. **Go again**

**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR103.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Vexing Quillhand",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Equipment,
    typeText: "Runeblade Equipment – Arms",
    
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "runic-reclamation-red",
    functionalText: `When Runic Reclamation hits a hero, destroy target aura they control. If you do, create a Runechant token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR104.width-450.png",
    keywords: [],
    name: "Runic Reclamation",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 1,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "swarming-gloomveil-red",
    functionalText: `If you have played or created 1 or more auras this turn, Swarming Gloomveil gains **go again.** If you have played and/or created 2 or more, it gains +1{p}. If you have played and/or created 3 or more, it gains "When this hits a hero, they can't prevent arcane damage from sources you control this turn."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR105.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Swarming Gloomveil",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    
    defense: 3,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "revel-in-runeblood-red",
    functionalText: `If you have played an attack action card and another 'non-attack action' action card this turn, create 4 Runechant tokens.

At the beginning of your end phase, destroy all Runechants you control.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR106.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Revel in Runeblood",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action",
    
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "runeblood-incantation-red",
    functionalText: `**Go again**

Runeblood Incantation enters the arena with 3 verse counters on it.

At the beginning of your action phase, remove a verse counter from Runeblood Incantation. If you do create a Runechant token. Otherwise, destroy Runeblood Incantation.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR107.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Runeblood Incantation",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Aura",
    cost: 1,
    defense: 2,
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "runeblood-incantation-yellow",
    functionalText: `**Go again**

Runeblood Incantation enters the arena with 2 verse counters on it.

At the beginning of your action phase, remove a verse counter from Runeblood Incantation. If you do create a Runechant token. Otherwise, destroy Runeblood Incantation.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR108.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Runeblood Incantation",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Aura",
    cost: 1,
    defense: 2,
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "runeblood-incantation-blue",
    functionalText: `**Go again**

Runeblood Incantation enters the arena with a verse counter on it.

At the beginning of your action phase, remove a verse counter from Runeblood Incantation. If you do create a Runechant token. Otherwise, destroy Runeblood Incantation.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR109.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Runeblood Incantation",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Aura",
    cost: 1,
    defense: 2,
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "drowning-dire-red",
    functionalText: `If you have played or created an aura this turn, Drowning Dire gains **dominate.** *(The defending hero can't defend Drowning Dire with more than 1 card from their hand.)*

When Drowning Dire hits, you may put a 'non-attack' action card from your graveyard on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR110.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Drowning Dire",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "drowning-dire-yellow",
    functionalText: `If you have played or created an aura this turn, Drowning Dire gains **dominate.** *(The defending hero can't defend Drowning Dire with more than 1 card from their hand.)*

When Drowning Dire hits, you may put a 'non-attack' action card from your graveyard on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR111.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Drowning Dire",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "drowning-dire-blue",
    functionalText: `If you have played or created an aura this turn, Drowning Dire gains **dominate.** *(The defending hero can't defend Drowning Dire with more than 1 card from their hand.)*

When Drowning Dire hits, you may put a 'non-attack' action card from your graveyard on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR112.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Drowning Dire",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "reek-of-corruption-red",
    functionalText: `If you have played or created an aura this turn, Reek of Corruption gains "When this hits a hero, they discard a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR113.width-450.png",
    keywords: [],
    name: "Reek of Corruption",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "reek-of-corruption-yellow",
    functionalText: `If you have played or created an aura this turn, Reek of Corruption gains "When this hits a hero, they discard a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR114.width-450.png",
    keywords: [],
    name: "Reek of Corruption",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "reek-of-corruption-blue",
    functionalText: `If you have played or created an aura this turn, Reek of Corruption gains "When this hits a hero, they discard a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR115.width-450.png",
    keywords: [],
    name: "Reek of Corruption",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "shrill-of-skullform-red",
    functionalText: `If you have played or created an aura this turn, Shrill of Skullform gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR116.width-450.png",
    keywords: [],
    name: "Shrill of Skullform",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "shrill-of-skullform-yellow",
    functionalText: `If you have played or created an aura this turn, Shrill of Skullform gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR117.width-450.png",
    keywords: [],
    name: "Shrill of Skullform",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Runeblade,
    identifier: "shrill-of-skullform-blue",
    functionalText: `If you have played or created an aura this turn, Shrill of Skullform gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR118.width-450.png",
    keywords: [],
    name: "Shrill of Skullform",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  }];
  