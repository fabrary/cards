
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
    Talent,
    TokenCard,
    TokenSubType,
    Type,
    WeaponCard,
    WeaponSubType
  } from '../interfaces';

  export const cards: (Card | ActionCard | EquipmentCard | HeroCard | ResourceCard | TokenCard | WeaponCard)[] = [{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "azalea-ace-in-the-hole",
    functionalText: `**Once per Turn Action** - 0: Put a card from your arsenal on the bottom of your deck. If you do, put the top card of your deck face up into your arsenal. If it's an arrow card, it gains **dominate** until end of turn. **Go again** *(The defending hero can't defend the attack with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER010-P.width-450.png",
    keywords: [],
    name: "Azalea, Ace in the Hole",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.ArcaneRising,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Ranger Hero",
    intellect: 4,
    hero: Hero.Azalea,
    life: 40,
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "azalea",
    functionalText: `**Once per Turn Action** - 0: Put a card from your arsenal on the bottom of your deck. If you do, put the top card of your deck face up into your arsenal. If it's an arrow card, it gains **dominate** until end of turn. **Go again** *(The defending hero can't defend the attack with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER014-P.width-450.png",
    keywords: [],
    name: "Azalea",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.ArcaneRising],
    type: Type.Hero,
    typeText: "Ranger Hero – Young",
    intellect: 4,
    hero: Hero.Azalea,
    life: 20,
    young: true,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "death-dealer",
    functionalText: `**Once per Turn Action** - {r}: If you have no cards in your arsenal, you may put an arrow card from your hand face up into your arsenal. If you do, draw a card. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS010-P.width-450.png",
    keywords: [],
    name: "Death Dealer",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.ArcaneRising,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Ranger Weapon – Bow (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [Talent.NotTalented],
    subType: WeaponSubType.Bow
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "skullbone-crosswrap",
    functionalText: `**Once per Turn Action** - Turn a face down card in your arsenal face up: **Opt 1**. **Go again**

**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*

**Blade Break** *(If you defend with Skullbone Crosswrap, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB009-P.width-450.png",
    keywords: [Keyword.ArcaneBarrier,Keyword.BladeBreak],
    name: "Skullbone Crosswrap",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Ranger Equipment – Head",
    defense: 1,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Head
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "bulls-eye-bracers",
    functionalText: `**Action** - Destroy Bull's Eye Bracers: If you have no cards in your arsenal, you may put an arrow card from your hand face up into your arsenal. It gains +1{p} until end of turn. **Go again**

**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC42.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Bull's Eye Bracers",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Ranger Equipment – Arms",
    defense: 0,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Arms
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "red-in-the-ledger-red",
    functionalText: `**Azalea Specialization** *(You may only have Red in the Ledger in your deck if your hero is Azalea.)*

*(Arrows can only be played from arsenal and only if you control a bow.)*

If Red in the Ledger hits a hero, they can't play or activate more than 1 action during their next turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC43.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Red in the Ledger",
    rarity: Rarity.Majestic,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [Talent.NotTalented],
    
    
    
    specialization: Hero.Azalea,
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "three-of-a-kind-red",
    functionalText: `Draw 3 cards. Until end of turn, you may only play cards from arsenal.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC44.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Three of a Kind",
    rarity: Rarity.Majestic,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 1,
    defense: 2,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "endless-arrow-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Endless Arrow hits, put it into your hand.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC45.width-450.png",
    keywords: [],
    name: "Endless Arrow",
    rarity: Rarity.SuperRare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "nock-the-deathwhistle-blue",
    functionalText: `**Azalea Specialization** *(You may only have Nock the Deathwhistle in your deck if your hero is Azalea.)*

Search your deck for an arrow card, reveal it, then shuffle your deck and put it on top of your deck.

**Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC46.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Reload,Keyword.GoAgain],
    name: "Nock the Deathwhistle",
    rarity: Rarity.SuperRare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    specialization: Hero.Azalea,
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "rapid-fire-yellow",
    functionalText: `Until end of turn, arrows you control gain **go again.**

**Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC47.width-450.png",
    keywords: [Keyword.Reload],
    name: "Rapid Fire",
    rarity: Rarity.SuperRare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },,,,{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "silver-the-tip-red",
    functionalText: `If you have no cards in your arsenal, look at the top 4 cards of your deck. You may put an arrow card from among them face up into your arsenal, then put the rest on the bottom of your deck in any order.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC51.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Silver the Tip",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 1,
    defense: 2,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "silver-the-tip-yellow",
    functionalText: `If you have no cards in your arsenal, look at the top 3 cards of your deck. You may put an arrow card from among them face up into your arsenal, then put the rest on the bottom of your deck in any order.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC52.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Silver the Tip",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 1,
    defense: 2,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "silver-the-tip-blue",
    functionalText: `If you have no cards in your arsenal, look at the top 2 cards of your deck. You may put an arrow card from among them face up into your arsenal, then put the rest on the bottom of your deck in any order.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC53.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Silver the Tip",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 1,
    defense: 2,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "take-aim-red",
    functionalText: `The next Ranger attack action card you play this turn, gains +3{p}.

**Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC54.width-450.png",
    keywords: [Keyword.Reload,Keyword.GoAgain],
    name: "Take Aim",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "take-aim-yellow",
    functionalText: `The next Ranger attack action card you play this turn, gains +2{p}.

**Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC55.width-450.png",
    keywords: [Keyword.Reload,Keyword.GoAgain],
    name: "Take Aim",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "take-aim-blue",
    functionalText: `The next Ranger attack action card you play this turn, gains +1{p}.

**Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC56.width-450.png",
    keywords: [Keyword.Reload,Keyword.GoAgain],
    name: "Take Aim",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "head-shot-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Head Shot is put into your arsenal face up, it gains +2{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC57.width-450.png",
    keywords: [],
    name: "Head Shot",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "head-shot-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Head Shot is put into your arsenal face up, it gains +2{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC58.width-450.png",
    keywords: [],
    name: "Head Shot",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "head-shot-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Head Shot is put into your arsenal face up, it gains +2{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC59.width-450.png",
    keywords: [],
    name: "Head Shot",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "hamstring-shot-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Hamstring Shot hits a hero, their first attack during their next turn costs an additional {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC60.width-450.png",
    keywords: [],
    name: "Hamstring Shot",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "hamstring-shot-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Hamstring Shot hits a hero, their first attack during their next turn costs an additional {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC61.width-450.png",
    keywords: [],
    name: "Hamstring Shot",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "hamstring-shot-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Hamstring Shot hits a hero, their first attack during their next turn costs an additional {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC62.width-450.png",
    keywords: [],
    name: "Hamstring Shot",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "ridge-rider-shot-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Ridge Rider Shot is put into your arsenal face up, **opt 1.** *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC63.width-450.png",
    keywords: [Keyword.Opt],
    name: "Ridge Rider Shot",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "ridge-rider-shot-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Ridge Rider Shot is put into your arsenal face up, **opt 1.** *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC64.width-450.png",
    keywords: [Keyword.Opt],
    name: "Ridge Rider Shot",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "ridge-rider-shot-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Ridge Rider Shot is put into your arsenal face up, **opt 1.** *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC65.width-450.png",
    keywords: [Keyword.Opt],
    name: "Ridge Rider Shot",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "salvage-shot-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Salvage Shot hits, put it on the bottom of your deck when the chain link resolves.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC66.width-450.png",
    keywords: [],
    name: "Salvage Shot",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "salvage-shot-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Salvage Shot hits, put it on the bottom of your deck when the chain link resolves.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC67.width-450.png",
    keywords: [],
    name: "Salvage Shot",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "salvage-shot-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Salvage Shot hits, put it on the bottom of your deck when the chain link resolves.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC68.width-450.png",
    keywords: [],
    name: "Salvage Shot",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "searing-shot-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Searing Shot hits a hero, they lose 1{h}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC69.width-450.png",
    keywords: [],
    name: "Searing Shot",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "searing-shot-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Searing Shot hits a hero, they lose 1{h}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC70.width-450.png",
    keywords: [],
    name: "Searing Shot",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "searing-shot-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Searing Shot hits a hero, they lose 1{h}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC71.width-450.png",
    keywords: [],
    name: "Searing Shot",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "sic-em-shot-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS014-P.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sic ‘Em Shot",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "sic-em-shot-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS036.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sic ‘Em Shot",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "sic-em-shot-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS037.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sic ‘Em Shot",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "red-liner",
    functionalText: `**Once per Turn Action** - 0: If you have no cards in your arsenal, put an arrow card from your hand face up into your arsenal. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU121.width-450.png",
    keywords: [],
    name: "Red Liner",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Ranger Weapon – Bow (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [Talent.NotTalented],
    subType: WeaponSubType.Bow
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "perch-grapplers",
    functionalText: `**Action** - {r}{r}, destroy Perch Grapplers: Until end of turn, face up arrow cards played from arsenal gain go again. **Go again**

**Blade Break** *(If you defend with Perch Grapplers, destroy it when the combat chain closes.)*

`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU122.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Perch Grapplers",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Ranger Equipment – Legs",
    defense: 2,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Legs
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "remorseless-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Remorseless is put into your arsenal face up, until end of turn it gains "Defense reaction cards can't be played from arsenal to Remoreseless's chain link."

If Remorseless hits a hero, until the end of their next turn, whenever they play an action card, they lose 1{h}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU123.width-450.png",
    keywords: [],
    name: "Remorseless",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "poison-the-tips-yellow",
    functionalText: `Until end of turn, arrows you control gain "If this hits a hero, they discard a card."

**Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU124.width-450.png",
    keywords: [Keyword.Reload,Keyword.GoAgain],
    name: "Poison the Tips",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "feign-death-yellow",
    functionalText: `Play Feign Death only if your hero has been dealt damage this turn.

The next time your hero would be dealt damage this turn, prevent it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU125.width-450.png",
    keywords: [],
    name: "Feign Death",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Instant,
    typeText: "Ranger Instant",
    cost: 1,
    
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },,,,{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "pathing-helix-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Pathing Helix hits and you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU129.width-450.png",
    keywords: [],
    name: "Pathing Helix",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "pathing-helix-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Pathing Helix hits and you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU130.width-450.png",
    keywords: [],
    name: "Pathing Helix",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "pathing-helix-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Pathing Helix hits and you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU131.width-450.png",
    keywords: [],
    name: "Pathing Helix",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "sleep-dart-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Sleep Dart hits a hero, they lose all hero card effects and activated abilities until the end of their next turn. *(Treat the hero card as if the text box is empty.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU132.width-450.png",
    keywords: [],
    name: "Sleep Dart",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "sleep-dart-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Sleep Dart hits a hero, they lose all hero card effects and activated abilities until the end of their next turn. *(Treat the hero card as if the text box is empty.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU133.width-450.png",
    keywords: [],
    name: "Sleep Dart",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "sleep-dart-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Sleep Dart hits a hero, they lose all hero card effects and activated abilities until the end of their next turn. *(Treat the hero card as if the text box is empty.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU134.width-450.png",
    keywords: [],
    name: "Sleep Dart",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "increase-the-tension-red",
    functionalText: `Your next arrow attack this turn gains +3{p} and "Defense reactions can't be played from hand this chain link."

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU135.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Increase the Tension",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 1,
    defense: 2,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "increase-the-tension-yellow",
    functionalText: `Your next arrow attack this turn gains +2{p} and "Defense reactions can't be played from hand this chain link."

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU136.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Increase the Tension",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 1,
    defense: 2,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "increase-the-tension-blue",
    functionalText: `Your next arrow attack this turn gains +1{p} and "Defense reactions can't be played from hand this chain link."

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU137.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Increase the Tension",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 1,
    defense: 2,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "lexi-livewire",
    functionalText: `**Essence of Ice and Lightning** *(You may have Ice and Lightning cards in your deck.)*

**Once per Turn Action** - Turn a face down card in your arsenal face up: If it's a Lightning card, your next attack this turn gains **go again.** If it's an Ice card, create a Frostbite token under target hero's control. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER043.width-450.png",
    keywords: [Keyword.Essence],
    name: "Lexi, Livewire",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.TalesOfAria],
    type: Type.Hero,
    typeText: "Elemental Ranger Hero",
    intellect: 4,
    hero: Hero.Lexi,
    life: 40,
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "lexi",
    functionalText: `**Essence of Ice and Lightning** *(You may have Ice and Lightning cards in your deck.)*

**Once per Turn Action** - Turn a face down card in your arsenal face up: If it's a Lightning card, your next attack this turn gains **go again.** If it's an Ice card, create a Frostbite token under target hero's control. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER046.width-450.png",
    keywords: [Keyword.Essence],
    name: "Lexi",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.TalesOfAria],
    type: Type.Hero,
    typeText: "Elemental Ranger Hero – Young",
    intellect: 4,
    hero: Hero.Lexi,
    life: 20,
    young: true,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "shiver",
    functionalText: `**Once per Turn Instant** - {r}: You may put an arrow card from your hand face up into an empty arsenal zone you control. If you do, choose 1;

- It gains +1{p} until end of turn.

- It gains **dominate** until end of turn. *(The defending hero can't defend the attack with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS067.width-450.png",
    keywords: [],
    name: "Shiver",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Weapon,
    typeText: "Elemental Ranger Weapon – Bow (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [Talent.Elemental],
    subType: WeaponSubType.Bow
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "voltaire-strike-twice",
    functionalText: `**Twice per Turn Instant** - {r}: You may put an arrow card from your hand face up into an empty arsenal zone you control. If you do, choose 1;

- It gains +1{p} until end of turn.
- It gains **go again** until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB075.width-450.png",
    keywords: [],
    name: "Voltaire, Strike Twice",
    rarity: Rarity.Majestic,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Weapon,
    typeText: "Elemental Ranger Weapon – Bow (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [Talent.Elemental],
    subType: WeaponSubType.Bow
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "frost-lock-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Ice Fusion** *(As an additional cost to play Frost Lock, you may reveal an Ice card from your hand.)*

Cards and activated abilities cost opposing heros an additional {r} this turn.

If Frost Lock was **fused**, it gains +1{p} and "If this hits a hero, until the end of their next turn they can't pitch or play cards with base cost 0."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE035.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Frost Lock",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "light-it-up-yellow",
    functionalText: `**Lexi Specialization** *(You may only have Light it Up in your deck if your hero is Lexi.)*

**Lightning Fusion** *(As an additional cost to play Light it Up, you may reveal a Lightning card from your hand.)*

If Light it Up was **fused**, it gains "If this hits a hero, deal 1 damage to them for each equipment they control."

If Light it Up deals damage to a hero equal to or greater than the number of equipment they control, equipment they control lose and can't gain activated abilities until the end of their next turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE036.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Fusion],
    name: "Light It Up",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    specialization: Hero.Lexi,
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "ice-storm-red",
    functionalText: `**Ice and Lightning Fusion** *(As an additional cost to play Ice Storm, you may reveal an Ice and a Lightning card from your hand.)*

Your next arrow attack this turn gains +3{p}.

If Ice Storm was **fused**, your next arrow attack this turn gains "If this hits a hero, deal 1 damage to them" and "Whenever this attack deals damage to a hero, create that many Frostbite tokens under their control."

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE037.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Ice Storm",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action",
    cost: 0,
    defense: 2,
    pitch: 1,
    
    talents: [Talent.Elemental],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "cold-wave-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Ice Fusion** *(As an additional cost to play Cold Wave, you may reveal an Ice card from your hand.)*

If Cold Wave was **fused**, cards and activated abilities cost opposing heroes an additional {r} this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE038.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Cold Wave",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "cold-wave-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Ice Fusion** *(As an additional cost to play Cold Wave, you may reveal an Ice card from your hand.)*

If Cold Wave was **fused**, cards and activated abilities cost opposing heroes an additional {r} this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE039.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Cold Wave",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "cold-wave-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Ice Fusion** *(As an additional cost to play Cold Wave, you may reveal an Ice card from your hand.)*

If Cold Wave was **fused**, cards and activated abilities cost opposing heroes an additional {r} this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE040.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Cold Wave",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "snap-shot-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Lightning Fusion** *(As an additional cost to play Snap Shot, you may reveal a Lightning card from your hand.)*

If Snap Shot was **fused**, you may activate abilities of bows you control an additional time this turn and as though they were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE041.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Snap Shot",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "snap-shot-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Lightning Fusion** *(As an additional cost to play Snap Shot, you may reveal a Lightning card from your hand.)*

If Snap Shot was **fused**, you may activate abilities of bows you control an additional time this turn and as though they were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE042.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Snap Shot",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "snap-shot-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Lightning Fusion** *(As an additional cost to play Snap Shot, you may reveal a Lightning card from your hand.)*

If Snap Shot was **fused**, you may activate abilities of bows you control an additional time this turn and as though they were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE043.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Snap Shot",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "blizzard-bolt-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Ice Fusion** *(As an additional cost to play Blizzard Bolt, you may reveal an Ice card from your hand.)*

If Blizzard Bolt was **fused**, whenever an attack deals damage to a hero this turn, create a Frostbite token under their control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE044.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Blizzard Bolt",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "blizzard-bolt-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Ice Fusion** *(As an additional cost to play Blizzard Bolt, you may reveal an Ice card from your hand.)*

If Blizzard Bolt was **fused**, whenever an attack deals damage to a hero this turn, create a Frostbite token under their control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE045.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Blizzard Bolt",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "blizzard-bolt-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Ice Fusion** *(As an additional cost to play Blizzard Bolt, you may reveal an Ice card from your hand.)*

If Blizzard Bolt was **fused**, whenever an attack deals damage to a hero this turn, create a Frostbite token under their control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE046.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Blizzard Bolt",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "buzz-bolt-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Lightning Fusion** *(As an additional cost to play Buzz Bolt, you may reveal a Lightning card from your hand.)*

If Buzz Bolt was **fused**, whenever an attack hits a hero this turn, it deals 1 damage to them.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE047.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Buzz Bolt",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "buzz-bolt-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Lightning Fusion** *(As an additional cost to play Buzz Bolt, you may reveal a Lightning card from your hand.)*

If Buzz Bolt was **fused**, whenever an attack hits a hero this turn, it deals 1 damage to them.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE048.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Buzz Bolt",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "buzz-bolt-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Lightning Fusion** *(As an additional cost to play Buzz Bolt, you may reveal a Lightning card from your hand.)*

If Buzz Bolt was **fused**, whenever an attack hits a hero this turn, it deals 1 damage to them.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE049.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Buzz Bolt",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "chilling-icevein-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Ice Fusion** *(As an additional cost to play Chilling Icevein, you may reveal an Ice card from your hand.)*

If Chilling Icevein was **fused**, whenever an attack deals damage to a hero this turn, they discard a card unless they pay {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE050.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Chilling Icevein",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "chilling-icevein-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Ice Fusion** *(As an additional cost to play Chilling Icevein, you may reveal an Ice card from your hand.)*

If Chilling Icevein was **fused**, whenever an attack deals damage to a hero this turn, they discard a card unless they pay {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE051.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Chilling Icevein",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "chilling-icevein-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Ice Fusion** *(As an additional cost to play Chilling Icevein, you may reveal an Ice card from your hand.)*

If Chilling Icevein was **fused**, whenever an attack deals damage to a hero this turn, they discard a card unless they pay {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE052.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Chilling Icevein",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "dazzling-crescendo-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Lightning Fusion** *(As an additional cost to play Dazzling Crescendo, you may reveal an Lightning card from your hand.)*

If Dazzling Crescendo was **fused**, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE053.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Dazzling Crescendo",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "dazzling-crescendo-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Lightning Fusion** *(As an additional cost to play Dazzling Crescendo, you may reveal an Lightning card from your hand.)*

If Dazzling Crescendo was **fused**, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE054.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Dazzling Crescendo",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "dazzling-crescendo-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Lightning Fusion** *(As an additional cost to play Dazzling Crescendo, you may reveal an Lightning card from your hand.)*

If Dazzling Crescendo was **fused**, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE055.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Dazzling Crescendo",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "flake-out-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Ice Fusion** *(As an additional cost to play Flake Out, you may reveal an Ice card from your hand.)*

If Flake Out was **fused**, it gains **dominate.** *(The defending hero can't defend Flake Out with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE056.width-450.png",
    keywords: [Keyword.Fusion,Keyword.Dominate],
    name: "Flake Out",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "flake-out-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Ice Fusion** *(As an additional cost to play Flake Out, you may reveal an Ice card from your hand.)*

If Flake Out was **fused**, it gains **dominate.** *(The defending hero can't defend Flake Out with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE057.width-450.png",
    keywords: [Keyword.Fusion,Keyword.Dominate],
    name: "Flake Out",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "flake-out-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Ice Fusion** *(As an additional cost to play Flake Out, you may reveal an Ice card from your hand.)*

If Flake Out was **fused**, it gains **dominate.** *(The defending hero can't defend Flake Out with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE058.width-450.png",
    keywords: [Keyword.Fusion,Keyword.Dominate],
    name: "Flake Out",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "frazzle-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Lightning Fusion** *(As an additional cost to play Frazzle, you may reveal a Lightning card from your hand.)*

If Frazzle was **fused**, whenever an attack would deal damage this turn, instead it deals that much damage plus 1.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE059.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Frazzle",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "frazzle-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Lightning Fusion** *(As an additional cost to play Frazzle, you may reveal a Lightning card from your hand.)*

If Frazzle was **fused**, whenever an attack would deal damage this turn, instead it deals that much damage plus 1.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE060.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Frazzle",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "frazzle-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

**Lightning Fusion** *(As an additional cost to play Frazzle, you may reveal a Lightning card from your hand.)*

If Frazzle was **fused**, whenever an attack would deal damage this turn, instead it deals that much damage plus 1.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE061.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Frazzle",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "new-horizon",
    functionalText: `If you have a face up card in your arsenal, you have an additional arsenal zone.

If New Horizon is destroyed, destroy all cards in your arsenal.

**Blade Break** *(If you defend with New Horizon, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB050.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "New Horizon",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Equipment,
    typeText: "Ranger Equipment – Head",
    defense: 2,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Head
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "honing-hood",
    functionalText: `**Instant** - Destroy Honing Hood: Return all cards in your arsenal to your hand, then put a card from your hand face down into your arsenal.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE214.width-450.png",
    keywords: [],
    name: "Honing Hood",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Equipment,
    typeText: "Ranger Equipment – Head",
    defense: 0,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Head
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "seek-and-destroy-red",
    functionalText: `Your next arrow attack this turn gains +3{p} and "If this hits a hero, at the beginning of their next end phase, they discard all cards in their hand and destroy all cards in their arsenal."

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE215.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Seek and Destroy",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "boltn-shot-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Bolt'n' Shot's {p} is greater than its base {p}, it has **go again** and "If this hits, **reload.**" *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE216.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.Reload],
    name: "Bolt'n' Shot",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "boltn-shot-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Bolt'n' Shot's {p} is greater than its base {p}, it has **go again** and "If this hits, **reload.**" *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE217.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.Reload],
    name: "Bolt'n' Shot",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "boltn-shot-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Bolt'n' Shot's {p} is greater than its base {p}, it has **go again** and "If this hits, **reload.**" *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE218.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.Reload],
    name: "Bolt'n' Shot",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "over-flex-red",
    functionalText: `Your next arrow attack this turn gains +4{p}.

**Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE219.width-450.png",
    keywords: [Keyword.Reload,Keyword.GoAgain],
    name: "Over Flex",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 1,
    defense: 2,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "over-flex-yellow",
    functionalText: `Your next arrow attack this turn gains +3{p}.

**Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE220.width-450.png",
    keywords: [Keyword.Reload,Keyword.GoAgain],
    name: "Over Flex",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 1,
    defense: 2,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "over-flex-blue",
    functionalText: `Your next arrow attack this turn gains +2{p}.

**Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE221.width-450.png",
    keywords: [Keyword.Reload,Keyword.GoAgain],
    name: "Over Flex",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 1,
    defense: 2,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "dreadbore",
    functionalText: `**Once per Turn Action** - {r}: You may put an arrow card from your hand face up into an empty arsenal zone you control. If you do, it gains +1{p} until end of turn. **Go again**

Arrows you control have "Defense reactions can't be played from hand this chain link."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR087.width-450.png",
    keywords: [],
    name: "Dreadbore",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Weapon,
    typeText: "Ranger Weapon – Bow (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [Talent.NotTalented],
    subType: WeaponSubType.Bow
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "battering-bolt-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

If Battering Bolt hits a hero, they reveal their hand and discard all cards other than action cards. Then they lose 1{h} for each card discarded this way.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR088.width-450.png",
    keywords: [],
    name: "Battering Bolt",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 6,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "trishot-blue",
    functionalText: `You may activate target bow you control 2 additional times this turn.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR089.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Tri-shot",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "rain-razors-yellow",
    functionalText: `Arrows have +2{p} while attacking this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR090.width-450.png",
    keywords: [],
    name: "Rain Razors",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Instant,
    typeText: "Ranger Instant",
    cost: 0,
    
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "release-the-tension-red",
    functionalText: `Your next arrow attack this turn gains +3{p} and "Defense reactions can't be played from arsenal this chain link."

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS096.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Release the Tension",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "release-the-tension-yellow",
    functionalText: `Your next arrow attack this turn gains +2{p} and "Defense reactions can't be played from arsenal this chain link."

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS097.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Release the Tension",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "release-the-tension-blue",
    functionalText: `Your next arrow attack this turn gains +1{p} and "Defense reactions can't be played from arsenal this chain link."

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS098.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Release the Tension",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "fatigue-shot-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

When Fatigue Shot hits a hero, the base {p} of the first attack action card they play during their next turn is halved, rounded up. *(An attack with 5 base {p} becomes 3{p}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR094.width-450.png",
    keywords: [],
    name: "Fatigue Shot",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "fatigue-shot-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

When Fatigue Shot hits a hero, the base {p} of the first attack action card they play during their next turn is halved, rounded up. *(An attack with 5 base {p} becomes 3{p}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR095.width-450.png",
    keywords: [],
    name: "Fatigue Shot",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "fatigue-shot-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

When Fatigue Shot hits a hero, the base {p} of the first attack action card they play during their next turn is halved, rounded up. *(An attack with 5 base {p} becomes 3{p}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR096.width-450.png",
    keywords: [],
    name: "Fatigue Shot",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "timidity-point-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

When Timidity Point hits a hero, attacks they control lose and can't gain **dominate** during their next turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR097.width-450.png",
    keywords: [],
    name: "Timidity Point",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "timidity-point-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

When Timidity Point hits a hero, attacks they control lose and can't gain **dominate** during their next turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR098.width-450.png",
    keywords: [],
    name: "Timidity Point",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "timidity-point-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*

When Timidity Point hits a hero, attacks they control lose and can't gain **dominate** during their next turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR099.width-450.png",
    keywords: [],
    name: "Timidity Point",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Arrow,
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "read-the-glide-path-red",
    functionalText: `Your next arrow attack this turn gains +3{p}.

**Opt 1** *(Look at the top card of your deck. You may put it on the bottom.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR100.width-450.png",
    keywords: [Keyword.Opt,Keyword.GoAgain],
    name: "Read the Glide Path",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "read-the-glide-path-yellow",
    functionalText: `Your next arrow attack this turn gains +2{p}.

**Opt 1** *(Look at the top card of your deck. You may put it on the bottom.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR101.width-450.png",
    keywords: [Keyword.Opt,Keyword.GoAgain],
    name: "Read the Glide Path",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Ranger,
    identifier: "read-the-glide-path-blue",
    functionalText: `Your next arrow attack this turn gains +1{p}.

**Opt 1** *(Look at the top card of your deck. You may put it on the bottom.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR102.width-450.png",
    keywords: [Keyword.Opt,Keyword.GoAgain],
    name: "Read the Glide Path",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  }];
  