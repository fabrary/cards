
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
    class: Class.Mechanologist,
    identifier: "dash-inventor-extraordinaire",
    functionalText: `You may start the game with a Mechanologist item with cost 2 or less in the arena. *(It's considered to have entered the arena.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER009-P.width-450.png",
    keywords: [],
    name: "Dash, Inventor Extraordinaire",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.ArcaneRising,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Mechanologist Hero",
    intellect: 4,
    hero: Hero.Dash,
    life: 40,
    
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "dash",
    functionalText: `You may start the game with a Mechanologist item with cost 2 or less in the arena. *(It's considered to have entered the arena.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER013-P.width-450.png",
    keywords: [],
    name: "Dash",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.ArcaneRising],
    type: Type.Hero,
    typeText: "Mechanologist Hero – Young",
    intellect: 4,
    hero: Hero.Dash,
    life: 20,
    young: true,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "teklo-plasma-pistol",
    functionalText: `**Action** - Remove a steam counter from Teklo Plasma Pistol: **Attack**

**Action** - {r}: If there are no steam counters on Teklo Plasma Pistol, put a steam counter on it. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS009-P.width-450.png",
    keywords: [],
    name: "Teklo Plasma Pistol",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.ArcaneRising,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Mechanologist Weapon – Pistol (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 2,
    
    talents: [Talent.NotTalented],
    subType: WeaponSubType.Pistol
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "teklo-foundry-heart",
    functionalText: `**Once per Turn Action** - {r}: Banish the top 2 cards of your deck. Gain {r}for each Mechanologist card banished this way. Activate this ability only if you have boosted this turn. **Go again**

**Battleworn** *(If you defend with Teklo Foundry Heart, put a -1 {d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB008-P.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Teklo Foundry Heart",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Mechanologist Equipment – Chest",
    defense: 2,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Chest
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "achilles-accelerator",
    functionalText: `**Instant** - Destroy Achilles Accelerator: Gain 1 action point. Activate this ability only if you have **boosted** this turn.

**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC5.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Achilles Accelerator",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Mechanologist Equipment – Legs",
    defense: 0,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Legs
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "high-octane-red",
    functionalText: `Whenever you **boost** a card this turn, gain 1 action point.

Draw a card.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC6.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "High Octane",
    rarity: Rarity.Majestic,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 1,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "teklo-core-blue",
    functionalText: `**Dash Specialization** *(You may only have Teklo Core in your deck if your hero is Dash.)*

Teklo Core enters the arena with 2 steam counters on it. When Teklo Core has no steam counters on it, destroy it.

At the beginning of your action phase, remove a steam counter from Teklo Core and gain {r}{r}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC7.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Teklo Core",
    rarity: Rarity.Majestic,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 0,
    
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    specialization: Hero.Dash,
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "maximum-velocity-red",
    functionalText: `Play Maximum Velocity only if you have **boosted** 3 or more times this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC8.width-450.png",
    keywords: [],
    name: "Maximum Velocity",
    rarity: Rarity.SuperRare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 10,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "spark-of-genius-yellow",
    functionalText: `**Dash Specialization** *(You may only have Spark of Genius in your deck if your hero is Dash.)*

Search your deck for a Mechanologist item card with cost X, put it into the arena, then shuffle your deck.

If you have **boosted** this turn, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC9.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Spark of Genius",
    rarity: Rarity.SuperRare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action",
    
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    specialCost: "XX",
    
    specialization: Hero.Dash,
    
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "induction-chamber-red",
    functionalText: `**Action** - {r}: If there are no steam counters on Induction Chamber, put a steam counter on it. **Go again**

**Once per Turn Attack Reaction** - Remove a steam counter from Induction Chamber: Target Mechanologist pistol attack gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC10.width-450.png",
    keywords: [],
    name: "Induction Chamber",
    rarity: Rarity.SuperRare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 2,
    
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "pedal-to-the-medal-red",
    functionalText: `If Pedal to the Metal hits, your next attack this turn gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

**Boost** *(As an additional cost to play Pedal to the Metal, you may banish the top card of your deck. If it's a Mechanologist card, Pedal to the Metal gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC011.width-450.png",
    keywords: [Keyword.Boost],
    name: "Pedal to the Medal",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "pedal-to-the-medal-yellow",
    functionalText: `If Pedal to the Metal hits, your next attack this turn gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

**Boost** *(As an additional cost to play Pedal to the Metal, you may banish the top card of your deck. If it's a Mechanologist card, Pedal to the Metal gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC012.width-450.png",
    keywords: [Keyword.Boost],
    name: "Pedal to the Medal",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "pedal-to-the-medal-blue",
    functionalText: `If Pedal to the Metal hits, your next attack this turn gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

**Boost** *(As an additional cost to play Pedal to the Metal, you may banish the top card of your deck. If it's a Mechanologist card, Pedal to the Metal gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC013.width-450.png",
    keywords: [Keyword.Boost],
    name: "Pedal to the Medal",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "pour-the-mold-red",
    functionalText: `Put a Mechanologist item with cost 2 or less from your hand into the arena.

If you have **boosted** this turn, put a steam counter on it.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC14.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Pour the Mold",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "pour-the-mold-yellow",
    functionalText: `Put a Mechanologist item with cost 1 or less from your hand into the arena.

If you have **boosted** this turn, put a steam counter on it.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC15.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Pour the Mold",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "pour-the-mold-blue",
    functionalText: `Put a Mechanologist item with cost 0 or less from your hand into the arena.

If you have **boosted** this turn, put a steam counter on it.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC16.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Pour the Mold",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "aether-sink-yellow",
    functionalText: `Aether Sink enters the arena with a steam counter on it.

**Action** - {r}: If there are no steam counters on Aether Sink, put a steam counter on it. **Go again**

**Instant** - Remove a steam counter from Aether Sink: Aether Sink gains **Arcane Barrier 2** until end of turn. *(If your hero would be dealt arcane damage, you may pay {r}{r} instead. If you do, prevent 2 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC17.width-450.png",
    keywords: [],
    name: "Aether Sink",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 1,
    
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "cognition-nodes-blue",
    functionalText: `**Action** - {r}: If there are no steam counters on Cognition Nodes, put a steam counter on it. **Go again**

**Once per Turn Attack Reaction** - Remove a steam counter from Cognition Nodes: Target attack action card gains “If this hits, put it on the bottom of your deck.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC18.width-450.png",
    keywords: [],
    name: "Cognition Nodes",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 1,
    
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "convection-amplifier-red",
    functionalText: `Convection Amplifier enters the arena with 2 steam counters on it. When Convection Amplifier has no steam counters on it, destroy it.

**Action** - Remove a steam counter from Convection Amplifier: The next attack action card you play this turn gains **dominate.** **Go again** *(The defending hero can't defend the attack with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC19.width-450.png",
    keywords: [],
    name: "Convection Amplifier",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 0,
    
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "over-loop-red",
    functionalText: `If Over Loop hits, put it on the bottom of your deck when the chain link resolves.

**Boost** *(As an additional cost to play Over Loop, you may banish the top card of your deck. If it's a Mechanologist card, Over Loop gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS013-P.width-450.png",
    keywords: [Keyword.Boost],
    name: "Over Loop",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "over-loop-yellow",
    functionalText: `If Over Loop hits, put it on the bottom of your deck when the chain link resolves.

**Boost** *(As an additional cost to play Over Loop, you may banish the top card of your deck. If it's a Mechanologist card, Over Loop gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS033.width-450.png",
    keywords: [Keyword.Boost],
    name: "Over Loop",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "over-loop-blue",
    functionalText: `If Over Loop hits, put it on the bottom of your deck when the chain link resolves.

**Boost** *(As an additional cost to play Over Loop, you may banish the top card of your deck. If it's a Mechanologist card, Over Loop gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS034.width-450.png",
    keywords: [Keyword.Boost],
    name: "Over Loop",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "throttle-red",
    functionalText: `**Boost** *(As an additional cost to play Throttle, you may banish the top card of your deck. If it's a Mechanologist card, Throttle gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC23.width-450.png",
    keywords: [Keyword.Boost],
    name: "Throttle",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 6,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "throttle-yellow",
    functionalText: `**Boost** *(As an additional cost to play Throttle, you may banish the top card of your deck. If it's a Mechanologist card, Throttle gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC24.width-450.png",
    keywords: [Keyword.Boost],
    name: "Throttle",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 2,
    power: 5,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "throttle-blue",
    functionalText: `**Boost** *(As an additional cost to play Throttle, you may banish the top card of your deck. If it's a Mechanologist card, Throttle gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC25.width-450.png",
    keywords: [Keyword.Boost],
    name: "Throttle",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "zero-to-sixty-red",
    functionalText: `**Boost** *(As an additional cost to play Zero to Sixty, you may banish the top card of your deck. If it's a Mechanologist card, Zero to Sixty gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC26.width-450.png",
    keywords: [Keyword.Boost],
    name: "Zero to Sixty",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 0,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "zero-to-sixty-yellow",
    functionalText: `**Boost** *(As an additional cost to play Zero to Sixty, you may banish the top card of your deck. If it's a Mechanologist card, Zero to Sixty gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC27.width-450.png",
    keywords: [Keyword.Boost],
    name: "Zero to Sixty",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 0,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "zero-to-sixty-blue",
    functionalText: `**Boost** *(As an additional cost to play Zero to Sixty, you may banish the top card of your deck. If it's a Mechanologist card, Zero to Sixty gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC28.width-450.png",
    keywords: [Keyword.Boost],
    name: "Zero to Sixty",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 0,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "zipper-hit-red",
    functionalText: `**Boost** *(As an additional cost to play Zipper Hit, you may banish the top card of your deck. If it's a Mechanologist card, Zipper Hit gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC29.width-450.png",
    keywords: [Keyword.Boost],
    name: "Zipper Hit",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "zipper-hit-yellow",
    functionalText: `**Boost** *(As an additional cost to play Zipper Hit, you may banish the top card of your deck. If it's a Mechanologist card, Zipper Hit gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC30.width-450.png",
    keywords: [Keyword.Boost],
    name: "Zipper Hit",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "zipper-hit-blue",
    functionalText: `**Boost** *(As an additional cost to play Zipper Hit, you may banish the top card of your deck. If it's a Mechanologist card, Zipper Hit gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC31.width-450.png",
    keywords: [Keyword.Boost],
    name: "Zipper Hit",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "locked-and-loaded-red",
    functionalText: `The next Mechanologist attack action card you play this turn gains +3{p}.

If you have **boosted** this turn, **opt 1**. *(Look at the top card of your deck. You may put it on the bottom.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC32.width-450.png",
    keywords: [Keyword.Opt,Keyword.GoAgain],
    name: "Locked and Loaded",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "locked-and-loaded-yellow",
    functionalText: `The next Mechanologist attack action card you play this turn gains +2{p}.

If you have **boosted** this turn, **opt 1**. *(Look at the top card of your deck. You may put it on the bottom.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC33.width-450.png",
    keywords: [Keyword.Opt,Keyword.GoAgain],
    name: "Locked and Loaded",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "locked-and-loaded-blue",
    functionalText: `The next Mechanologist attack action card you play this turn gains +1{p}.

If you have **boosted** this turn, **opt 1**. *(Look at the top card of your deck. You may put it on the bottom.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC34.width-450.png",
    keywords: [Keyword.Opt,Keyword.GoAgain],
    name: "Locked and Loaded",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "dissipation-shield-yellow",
    functionalText: `Dissipation Shield enters the arena with 4 steam counters on it.

At the beginning of your action phase, destroy Dissipation Shield unless you remove a steam counter from it.

**Instant** - Destroy Dissipation Shield: The next time your hero would be dealt damage this turn, prevent X damage, where X is the number of steam counters on Dissipation Shield.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC35.width-450.png",
    keywords: [],
    name: "Dissipation Shield",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 2,
    
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "hyper-driver-red",
    functionalText: `Hyper Driver enters the arena with 3 steam counters on it. When Hyper Driver has no steam counters on it, destroy it.

**Once per Turn Effect** - When you **boost** a card, remove a steam counter from Hyper Driver and gain {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC36.width-450.png",
    keywords: [],
    name: "Hyper Driver",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 1,
    
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "optekal-monocle-blue",
    functionalText: `Optekal Monocle enters the arena with 5 steam counters on it. When Optekal Monocle has no steam counters on it, destroy it.

**Action** - Remove a steam counter from Optekal Monocle: **Opt 1. Go again** *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC37.width-450.png",
    keywords: [],
    name: "Optekal Monocle",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 0,
    
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "data-doll-mkii",
    functionalText: `Whenever a Mechanologist item with cost 2 or less is put into your banished zone from your deck, put it into the arena.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER027.width-450.png",
    keywords: [],
    name: "Data Doll MKII",
    rarity: Rarity.Rare,
    sets: [Release.HeroDeck,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Mechanologist Hero – Young",
    intellect: 3,
    hero: Hero.DataDoll,
    life: 20,
    young: true,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "plasma-barrel-shot",
    functionalText: `**Once per Turn Action** - Remove a steam counter from Plasma Barrel Shot: **Attack**

**Action** - {r}{r}: If there are no steam counters on Plasma Barrel Shot, put a steam counter on it. **Go again**

Plasma Barrel Shot's {p} is equal to 1 plus the number of times you have **boosted** this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU101.width-450.png",
    keywords: [],
    name: "Plasma Barrel Shot",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Mechanologist Weapon – Gun (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    specialPower: "X",
    talents: [Talent.NotTalented],
    subType: WeaponSubType.Gun
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "viziertronic-model-i",
    functionalText: `**Action** - destroy Vizertronic Model i: Whenever you **boost** this turn, draw a card then put a card from your hand on top of your deck. **Go again**

**Arcane Barrier 2** *(If your hero would be dealt arcane damage, you may pay {r}{r} instead. If you do, prevent 2 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU102.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Viziertronic Model i",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Mechanologist, Equipment – Head",
    defense: 0,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Head
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "meganetic-shockwave-blue",
    functionalText: `The defending hero must defend Meganetic Shockwave with X equipment they control, where X is the number of times you have **boosted** this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU103.width-450.png",
    keywords: [],
    name: "Meganetic Shockwave",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "absorption-dome-yellow",
    functionalText: `Absorption Dome enters the arena with steam counters on it equal to the number of times you have **boosted** this turn.

If your hero would be dealt damage, remove that many steam counters from Absorption Dome instead, then prevent damage equal to the number of steam counters removed this way.

When Absorption Dome has no steam counters on it, destroy it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU104.width-450.png",
    keywords: [],
    name: "Absorption Dome",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 0,
    
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "plasma-purifier-red",
    functionalText: `**Action** - {r}: If there are no steam counters on Plasma Purifier, put a steam counter on it. **Go again**

**Once per Turn Action** - Remove a steam counter from Plasma Purifier: Target Mechanologist pistol you control gains +1{p} until end of turn. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU105.width-450.png",
    keywords: [],
    name: "Plasma Purifier",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 2,
    
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "high-speed-impact-red",
    functionalText: `If High Speed Impact hits, the next attack you boost this combat chain gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

**Boost** *(As an additional cost to play High Speed Impact, you may banish the top card of your deck. If it's a Mechanologist card, High Speed Impact gains* ***go again***.*)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU106.width-450.png",
    keywords: [Keyword.Boost],
    name: "High Speed Impact",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "high-speed-impact-yellow",
    functionalText: `If High Speed Impact hits, the next attack you boost this combat chain gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

**Boost** *(As an additional cost to play High Speed Impact, you may banish the top card of your deck. If it's a Mechanologist card, High Speed Impact gains* ***go again***.*)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU107.width-450.png",
    keywords: [Keyword.Boost],
    name: "High Speed Impact",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "high-speed-impact-blue",
    functionalText: `If High Speed Impact hits, the next attack you boost this combat chain gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

**Boost** *(As an additional cost to play High Speed Impact, you may banish the top card of your deck. If it's a Mechanologist card, High Speed Impact gains* ***go again***.*)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU108.width-450.png",
    keywords: [Keyword.Boost],
    name: "High Speed Impact",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "combustible-courier-red",
    functionalText: `If Combustible Courier hits, the next attack you **boost** this combat chain gains +3{p}.

**Boost** *(As an additional cost to play Combustible Courier, you may banish the top card of your deck. If it's a Mechanologist card, Combustible Courier gains* **go again**.*)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU109.width-450.png",
    keywords: [Keyword.Boost],
    name: "Combustible Courier",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "combustible-courier-yellow",
    functionalText: `If Combustible Courier hits, the next attack you **boost** this combat chain gains +3{p}.

**Boost** *(As an additional cost to play Combustible Courier, you may banish the top card of your deck. If it's a Mechanologist card, Combustible Courier gains* **go again**.*)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU110.width-450.png",
    keywords: [Keyword.Boost],
    name: "Combustible Courier",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "combustible-courier-blue",
    functionalText: `If Combustible Courier hits, the next attack you **boost** this combat chain gains +3{p}.

**Boost** *(As an additional cost to play Combustible Courier, you may banish the top card of your deck. If it's a Mechanologist card, Combustible Courier gains* **go again**.*)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU111.width-450.png",
    keywords: [Keyword.Boost],
    name: "Combustible Courier",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "overblast-red",
    functionalText: `Overblast gains +X{p}, where X is the number of times you have **boosted** this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU112.width-450.png",
    keywords: [],
    name: "Overblast",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "overblast-yellow",
    functionalText: `Overblast gains +X{p}, where X is the number of times you have **boosted** this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU113.width-450.png",
    keywords: [],
    name: "Overblast",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "overblast-blue",
    functionalText: `Overblast gains +X{p}, where X is the number of times you have **boosted** this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU114.width-450.png",
    keywords: [],
    name: "Overblast",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "teklovossens-workshop-red",
    functionalText: `**Opt X**, where X is the number of times you have **boosted** this turn. *(Look at the top X cards of your deck. You may put them on the top and/or bottom in any order.)*

Reveal the top card of your deck. If it's a Mechanologist item card with cost 2 or less, put it into the arena.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU115.width-450.png",
    keywords: [Keyword.Opt],
    name: "Teklovossen's Workshop",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "teklovossens-workshop-yellow",
    functionalText: `**Opt X**, where X is the number of times you have **boosted** this turn. *(Look at the top X cards of your deck. You may put them on the top and/or bottom in any order.)*

Reveal the top card of your deck. If it's a Mechanologist item card with cost 1 or less, put it into the arena.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU116.width-450.png",
    keywords: [Keyword.Opt],
    name: "Teklovossen's Workshop",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "teklovossens-workshop-blue",
    functionalText: `**Opt X**, where X is the number of times you have **boosted** this turn. *(Look at the top X cards of your deck. You may put them on the top and/or bottom in any order.)*

Reveal the top card of your deck. If it's a Mechanologist item card with cost 0 or less, put it into the arena.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU117.width-450.png",
    keywords: [Keyword.Opt],
    name: "Teklovossen's Workshop",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "dissolution-sphere-yellow",
    functionalText: `Dissolution Sphere enters the arena with a steam counter on it.

At the beginning of your action phase, destroy Dissolution Sphere unless you remove a steam counter from it.

Whenever your hero would be dealt exactly 1 damage, prevent it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR069.width-450.png",
    keywords: [],
    name: "Dissolution Sphere",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 2,
    
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "microprocessor-blue",
    functionalText: `**Data Doll Specialization** *(You may only have Micro-processor in your deck if your hero is Data Doll.)*

**Once Per Turn Action** - 0: **Opt 1**

**Once Per Turn Action** - 0: Draw a card then put a card from your hand on top of your deck.

**Once Per Turn Action** - 0: Banish the top card of your deck.

The first time you activate Micro-processor each turn, gain 1 action point.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR070.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Micro-Processor",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 2,
    
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    specialization: Hero.DataDoll,
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "signal-jammer-blue",
    functionalText: `Signal Jammer enters the arena with a steam counter on it.

At the beginning of your action phase, destroy Signal Jammer unless you remove a steam counter from it.

Each hero can't play more than 1 'non-attack' action card each turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR071.width-450.png",
    keywords: [],
    name: "Signal Jammer",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 0,
    
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "teklo-pounder-blue",
    functionalText: `Teklo Pounder enters the arena with 3 steam counters on it. When Teklo Pounder has no steam counters on it, destroy it.

**Once per Turn Effect** - Whenever you boost an attack action card, remove a steam counter from Teklo Pounder. If you do, the attack gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR072.width-450.png",
    keywords: [],
    name: "Teklo Pounder",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 2,
    
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "tbone-red",
    functionalText: `If you control a card on the combat chain that was boosted, the defending hero must defend T-Bone with an equipment they control if able.

**Boost** *(As an additional cost to play T-Bone, you may banish the top card of your deck. If it's a Mechanologist card, T-Bone gains ***go again.***)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR073.width-450.png",
    keywords: [Keyword.Boost],
    name: "T-Bone",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 0,
    defense: 3,
    pitch: 1,
    power: 3,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "tbone-yellow",
    functionalText: `If you control a card on the combat chain that was boosted, the defending hero must defend T-Bone with an equipment they control if able.

**Boost** *(As an additional cost to play T-Bone, you may banish the top card of your deck. If it's a Mechanologist card, T-Bone gains ***go again.***)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR074.width-450.png",
    keywords: [Keyword.Boost],
    name: "T-Bone",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 0,
    defense: 3,
    pitch: 2,
    power: 2,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "tbone-blue",
    functionalText: `If you control a card on the combat chain that was boosted, the defending hero must defend T-Bone with an equipment they control if able.

**Boost** *(As an additional cost to play T-Bone, you may banish the top card of your deck. If it's a Mechanologist card, T-Bone gains ***go again.***)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR075.width-450.png",
    keywords: [Keyword.Boost],
    name: "T-Bone",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 0,
    defense: 3,
    pitch: 3,
    power: 1,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "payload-red",
    functionalText: `If you have **boosted** this combat chain, Payload gains **dominate.** *(The defending hero can't defend Payload with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR076.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Payload",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 6,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "payload-yellow",
    functionalText: `If you have **boosted** this combat chain, Payload gains **dominate.** *(The defending hero can't defend Payload with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR077.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Payload",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 2,
    power: 5,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "payload-blue",
    functionalText: `If you have **boosted** this combat chain, Payload gains **dominate.** *(The defending hero can't defend Payload with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR078.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Payload",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "zoom-in-red",
    functionalText: `When you attack with Zoom in, **opt X**, where X is the number of times you have **boosted** this combat chain. *(Look at the top X cards of your deck. You may put them on the top and/or bottom in any order.)*

**Boost** *(As an additional cost to play Zoom In, you may banish the top card of your deck. If it's a Mechanologist card, Zoom In gains ***go again.***)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR079.width-450.png",
    keywords: [Keyword.Opt,Keyword.Boost],
    name: "Zoom In",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "zoom-in-yellow",
    functionalText: `When you attack with Zoom in, **opt X**, where X is the number of times you have **boosted** this combat chain. *(Look at the top X cards of your deck. You may put them on the top and/or bottom in any order.)*

**Boost** *(As an additional cost to play Zoom In, you may banish the top card of your deck. If it's a Mechanologist card, Zoom In gains ***go again.***)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR080.width-450.png",
    keywords: [Keyword.Opt,Keyword.Boost],
    name: "Zoom In",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "zoom-in-blue",
    functionalText: `When you attack with Zoom in, **opt X**, where X is the number of times you have **boosted** this combat chain. *(Look at the top X cards of your deck. You may put them on the top and/or bottom in any order.)*

**Boost** *(As an additional cost to play Zoom In, you may banish the top card of your deck. If it's a Mechanologist card, Zoom In gains ***go again.***)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR081.width-450.png",
    keywords: [Keyword.Opt,Keyword.Boost],
    name: "Zoom In",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "rotary-ram-red",
    functionalText: `The next Mechanologist attack action card you play this turn gains +3{p}.

If you have **boosted** this turn, put Rotary Ram on the bottom of your deck.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR082.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Rotary Ram",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "rotary-ram-yellow",
    functionalText: `The next Mechanologist attack action card you play this turn gains +2{p}.

If you have **boosted** this turn, put Rotary Ram on the bottom of your deck.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR083.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Rotary Ram",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Mechanologist,
    identifier: "rotary-ram-blue",
    functionalText: `The next Mechanologist attack action card you play this turn gains +1{p}.

If you have **boosted** this turn, put Rotary Ram on the bottom of your deck.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR084.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Rotary Ram",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  }];
  