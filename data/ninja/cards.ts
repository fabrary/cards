
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
    class: Class.Ninja,
    identifier: "katsu-the-wanderer",
    functionalText: `The first time an attack action card you control hits, you may discard a card with cost 0. If you do, search your deck for a card with **combo**, banish it face up, then shuffle your deck. You may play it this turn`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER003-P.width-450.png",
    keywords: [],
    name: "Katsu, the Wanderer",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.WelcomeToRathe,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Ninja Hero",
    intellect: 4,
    hero: Hero.Katsu,
    life: undefined,
    
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "katsu",
    functionalText: `The first time an attack action card you control hits, you may discard a card with cost 0. If you do, search your deck for a card with **combo**, banish it face up, then shuffle your deck. You may play it this turn`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER007-P.width-450.png",
    keywords: [],
    name: "Katsu",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.WelcomeToRathe],
    type: Type.Hero,
    typeText: "Ninja Hero – Young",
    intellect: 4,
    hero: Hero.Katsu,
    life: undefined,
    young: true,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "harmonized-kodachi",
    functionalText: `**Once per Turn Action** - {r}: **Attack**

If you have a card in your pitch zone with cost 0, Harmonized Kodachi gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS003-P.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Harmonized Kodachi",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.WelcomeToRathe,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Ninja Weapon – Dagger (1H)",
    handsRequired: HandsRequired.OneHanded,
    
    
    talents: [],
    subType: WeaponSubType.Dagger
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "mask-of-momentum",
    functionalText: `**Once per Turn Effect** - When an attack action card you control is the third or higher chain link in a row to hit, draw a card.

**Blade Break** *(If you defend with Mask of Momentum, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB005-P.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Mask of Momentum",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Ninja Equipment – Head",
    defense: 2,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "breaking-scales",
    functionalText: `**Attack Reaction** - Destroy Breaking Scales: Target attack action card with **combo** gains +1{p}.

**Battleworn** *(If you defend with Breaking Scales, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_80.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Breaking Scales",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Ninja Equipment – Arms",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "lord-of-wind-blue",
    functionalText: `**Katsu Specialization** *(You may only have Lord of Wind in your deck if your hero is Katsu.)*

**Combo** - If Mugenshi: RELEASE was the last attack this combat chain, you may pay X resource points as an additional cost to play Lord of Wind. If you do, shuffle X target cards named Surging Strike, Whelming Gustwave and/or Mugenshi: RELEASE from your graveyard into your deck, then lord of Wind gains +X{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_81.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Combo],
    name: "Lord of Wind",
    rarity: Rarity.Majestic,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    specialization: Hero.Katsu,
    subType: ActionSubType.Attack,
  },,{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "mugenshi-release-yellow",
    functionalText: `**Katsu Specialization** *(You may only have Mugenshi: RELEASE in your deck if your hero is Katsu.)*

**Combo** - *If Whelming Gustwave was the last attack this combat chain, Mugenshi: RELEASE gains +1{p}, **go again**, and “If this hits, search your deck for any number of cards named Lord of Wind, reveal them, put them into your hand, then shuffle your deck.”*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_83.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Combo,Keyword.GoAgain],
    name: "Mugenshi: RELEASE",
    rarity: Rarity.SuperRare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    specialization: Hero.Katsu,
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "hurricane-technique-yellow",
    functionalText: `**Combo** - If Rising Knee Thrust was the last attack this combat chain, Hurricane Technique gains +1{p}, **go again**, and “If Hurricane Technique hits, put it into your hand.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_84.width-450.png",
    keywords: [Keyword.Combo,Keyword.GoAgain],
    name: "Hurricane Technique",
    rarity: Rarity.SuperRare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "pounding-gale-red",
    functionalText: `**Combo** - If Open the Center was the last attack this combat chain, Pounding Gale gains “If Pounding Gale would deal damage to a hero, instead it deals double that much damage”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_85.width-450.png",
    keywords: [Keyword.Combo],
    name: "Pounding Gale",
    rarity: Rarity.SuperRare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "fluster-fist-red",
    functionalText: `**Combo** - If Open the Center was the last attack this combat chain, Fluster Fist gains +1{p} for each attack that has hit this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_86.width-450.png",
    keywords: [Keyword.Combo],
    name: "Fluster Fist",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "fluster-fist-yellow",
    functionalText: `**Combo** - If Open the Center was the last attack this combat chain, Fluster Fist gains +1{p} for each attack that has hit this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_87.width-450.png",
    keywords: [Keyword.Combo],
    name: "Fluster Fist",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "fluster-fist-blue",
    functionalText: `**Combo** - If Open the Center was the last attack this combat chain, Fluster Fist gains +1{p} for each attack that has hit this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_88.width-450.png",
    keywords: [Keyword.Combo],
    name: "Fluster Fist",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "blackout-kick-red",
    functionalText: `**Combo** - If Rising Knee Thrust was the last attack this combat chain, Blackout Kick gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_89.width-450.png",
    keywords: [Keyword.Combo],
    name: "Blackout Kick",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "blackout-kick-yellow",
    functionalText: `**Combo** - If Rising Knee Thrust was the last attack this combat chain, Blackout Kick gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_90.width-450.png",
    keywords: [Keyword.Combo],
    name: "Blackout Kick",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "blackout-kick-blue",
    functionalText: `**Combo** - If Rising Knee Thrust was the last attack this combat chain, Blackout Kick gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_91.width-450.png",
    keywords: [Keyword.Combo],
    name: "Blackout Kick",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },,,,{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "open-the-center-red",
    functionalText: `**Combo** - If Head Jab was the last attack this combat chain, Open the Center gains +1{p}, **go again**, and **dominate**. *(The defending hero can't defend Open the Center with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_95.width-450.png",
    keywords: [Keyword.Combo,Keyword.GoAgain,Keyword.Dominate],
    name: "Open the Center",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "open-the-center-yellow",
    functionalText: `**Combo** - If Head Jab was the last attack this combat chain, Open the Center gains +1{p}, **go again**, and **dominate**. *(The defending hero can't defend Open the Center with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_96.width-450.png",
    keywords: [Keyword.Combo,Keyword.GoAgain,Keyword.Dominate],
    name: "Open the Center",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "open-the-center-blue",
    functionalText: `**Combo** - If Head Jab was the last attack this combat chain, Open the Center gains +1{p}, **go again**, and **dominate**. *(The defending hero can't defend Open the Center with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_97.width-450.png",
    keywords: [Keyword.Combo,Keyword.GoAgain,Keyword.Dominate],
    name: "Open the Center",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "head-jab-red",
    functionalText: `**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS017.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Head Jab",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 2,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "head-jab-yellow",
    functionalText: `**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS018.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Head Jab",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 2,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "head-jab-blue",
    functionalText: `**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS019.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Head Jab",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 2,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "leg-tap-red",
    functionalText: `**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_101.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Leg Tap",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "leg-tap-yellow",
    functionalText: `**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_102.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Leg Tap",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "leg-tap-blue",
    functionalText: `**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_103.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Leg Tap",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "rising-knee-thrust-red",
    functionalText: `**Combo** - If Leg Tap was the last attack this combat chain, Rising Knee Thrust gains +2{p} and **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_104.width-450.png",
    keywords: [Keyword.Combo,Keyword.GoAgain],
    name: "Rising Knee Thrust",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "rising-knee-thrust-yellow",
    functionalText: `**Combo** - If Leg Tap was the last attack this combat chain, Rising Knee Thrust gains +2{p} and **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_105.width-450.png",
    keywords: [Keyword.Combo,Keyword.GoAgain],
    name: "Rising Knee Thrust",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "rising-knee-thrust-blue",
    functionalText: `**Combo** - If Leg Tap was the last attack this combat chain, Rising Knee Thrust gains +2{p} and **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_106.width-450.png",
    keywords: [Keyword.Combo,Keyword.GoAgain],
    name: "Rising Knee Thrust",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "surging-strike-red",
    functionalText: `**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_107.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Surging Strike",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "surging-strike-yellow",
    functionalText: `**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_108.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Surging Strike",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "surging-strike-blue",
    functionalText: `**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_109.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Surging Strike",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 2,
    defense: 2,
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "whelming-gustwave-red",
    functionalText: `**Combo** - If Surging Strike was the last attack this combat chain, Whelming Gustwave gains +1{p}, **go again**, and “If this hits, draw a card.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS007-P.width-450.png",
    keywords: [Keyword.Combo,Keyword.GoAgain],
    name: "Whelming Gustwave",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "whelming-gustwave-yellow",
    functionalText: `**Combo** - If Surging Strike was the last attack this combat chain, Whelming Gustwave gains +1{p}, **go again**, and “If this hits, draw a card.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS027.width-450.png",
    keywords: [Keyword.Combo,Keyword.GoAgain],
    name: "Whelming Gustwave",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "whelming-gustwave-blue",
    functionalText: `**Combo** - If Surging Strike was the last attack this combat chain, Whelming Gustwave gains +1{p}, **go again**, and “If this hits, draw a card.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS028.width-450.png",
    keywords: [Keyword.Combo,Keyword.GoAgain],
    name: "Whelming Gustwave",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "ira-crimson-haze",
    functionalText: `Your second attack each turn gains +1{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER000-P.width-450.png",
    keywords: [],
    name: "Ira, Crimson Haze",
    rarity: Rarity.Common,
    sets: [Release.HeroDeck,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Ninja Hero – Young",
    intellect: 4,
    hero: Hero.Ira,
    life: undefined,
    young: true,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "benji-the-piercing-wind",
    functionalText: `Attack action cards you control with 2 or less {p} can't be defended by cards from hand.

**Once per Turn Effect** - When an attack action card you control hits, your next attack this turn gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER026.width-450.png",
    keywords: [],
    name: "Benji, the Piercing Wind",
    rarity: Rarity.Rare,
    sets: [Release.HeroDeck,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Ninja Hero – Young",
    intellect: 4,
    hero: Hero.Benji,
    life: undefined,
    young: true,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "edge-of-autumn",
    functionalText: `**Once per Turn Action** - {r}: **Attack. Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU50.width-450.png",
    keywords: [],
    name: "Edge of Autumn",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Ninja Weapon – Sword (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 1,
    
    talents: [],
    subType: WeaponSubType.Sword
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "zephyr-needle",
    functionalText: `**Once per Turn Attack** - {r}: **Attack. Go again**

If Zephyr Needle is defended by a card with {d} greater than Zephyr Needle's {p}, destroy Zephyr Needle when the combat chain closes.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU51.width-450.png",
    keywords: [],
    name: "Zephyr Needle",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Ninja Weapon – Dagger (1H)",
    handsRequired: HandsRequired.OneHanded,
    power: 2,
    
    talents: [],
    subType: WeaponSubType.Dagger
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "breeze-rider-boots",
    functionalText: `When a Ninja attack action card you control hits, you may destroy Breeze Rider Boots. If you do, attack action cards with **combo** gain **go again** this turn.

**Battleworn** *(If you defend with Breeze Rider Boots, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU53.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Breeze Rider Boots",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Ninja Equipment – Legs",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "find-center-blue",
    functionalText: `**Combo** - If Crane Dance was the last attack this combat chain, Find Center can't be defended by cards with {r} cost less than the number of chain links you control, and it gains "If this hits, create a Zen State token."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU54.width-450.png",
    keywords: [Keyword.Combo],
    name: "Find Center",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "flood-of-force-yellow",
    functionalText: `**Combo** - If Rushing River or Flood of Force was the last attack this combat chain, reveal the top card of your deck. If it's a card with **combo,** put it into your hand then Flood of Force gains +3{p} and **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU55.width-450.png",
    keywords: [Keyword.Combo,Keyword.GoAgain],
    name: "Flood of Force",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 2,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "herons-flight-red",
    functionalText: `**Combo** - If Crane Dance was the last attack this combat chain, when you attack with Heron's Flight, it gains +2{p} and you choose 1;

- Heron's flight can only be defended by attack action cards.
- Heron's flight can only be defended by ‘non-attack' action cards.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU56.width-450.png",
    keywords: [Keyword.Combo],
    name: "Heron's Flight",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "crane-dance-red",
    functionalText: `**Combo** - If Soulbead Strike was the last attack this combat chain, Crane Dance gains +1{p}, go again, and it can't be defended by attack action cards with base {p} greater than the number of chain links you control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU57.width-450.png",
    keywords: [Keyword.Combo],
    name: "Crane Dance",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "crane-dance-yellow",
    functionalText: `**Combo** - If Soulbead Strike was the last attack this combat chain, Crane Dance gains +1{p}, go again, and it can't be defended by attack action cards with base {p} greater than the number of chain links you control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU58.width-450.png",
    keywords: [Keyword.Combo],
    name: "Crane Dance",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "crane-dance-blue",
    functionalText: `**Combo** - If Soulbead Strike was the last attack this combat chain, Crane Dance gains +1{p}, go again, and it can't be defended by attack action cards with base {p} greater than the number of chain links you control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU59.width-450.png",
    keywords: [Keyword.Combo],
    name: "Crane Dance",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "rushing-river-red",
    functionalText: `**Combo** - If Torrent of Tempo was the last attack this combat chain, Rushing River gains +1{p}, **go again**, and "If Rushing River hits, draw X cards then put X cards from your hand on top of your deck in any order, where X is the number of attacks that have hit this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU60.width-450.png",
    keywords: [Keyword.Combo,Keyword.GoAgain],
    name: "Rushing River",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "rushing-river-yellow",
    functionalText: `**Combo** - If Torrent of Tempo was the last attack this combat chain, Rushing River gains +1{p}, **go again**, and "If Rushing River hits, draw X cards then put X cards from your hand on top of your deck in any order, where X is the number of attacks that have hit this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU61.width-450.png",
    keywords: [Keyword.Combo,Keyword.GoAgain],
    name: "Rushing River",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "rushing-river-blue",
    functionalText: `**Combo** - If Torrent of Tempo was the last attack this combat chain, Rushing River gains +1{p}, **go again**, and "If Rushing River hits, draw X cards then put X cards from your hand on top of your deck in any order, where X is the number of attacks that have hit this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU62.width-450.png",
    keywords: [Keyword.Combo,Keyword.GoAgain],
    name: "Rushing River",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "flying-kick-red",
    functionalText: `If Flying Kick is played as chain link 3 or higher, it gains +2{r}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU63.width-450.png",
    keywords: [],
    name: "Flying Kick",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "flying-kick-yellow",
    functionalText: `If Flying Kick is played as chain link 3 or higher, it gains +2{r}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU64.width-450.png",
    keywords: [],
    name: "Flying Kick",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "flying-kick-blue",
    functionalText: `If Flying Kick is played as chain link 3 or higher, it gains +2{r}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU65.width-450.png",
    keywords: [],
    name: "Flying Kick",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 2,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "soulbead-strike-red",
    functionalText: `If Soulbead Strike hits, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU66.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Soulbead Strike",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "soulbead-strike-yellow",
    functionalText: `If Soulbead Strike hits, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU67.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Soulbead Strike",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "soulbead-strike-blue",
    functionalText: `If Soulbead Strike hits, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU68.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Soulbead Strike",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "torrent-of-tempo-red",
    functionalText: `If Torrent of Tempo hits, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU69.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Torrent of Tempo",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "torrent-of-tempo-yellow",
    functionalText: `If Torrent of Tempo hits, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU70.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Torrent of Tempo",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "torrent-of-tempo-blue",
    functionalText: `If Torrent of Tempo hits, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU71.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Torrent of Tempo",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "bittering-thorns-yellow",
    functionalText: `If Bittering Thorns hits, your next attack this turn gains +1{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU72.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Bittering Thorns",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "salt-the-wound-yellow",
    functionalText: `Salt the Wound gains +1{p} for each attack that has hit this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU73.width-450.png",
    keywords: [],
    name: "Salt the Wound",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "whirling-mist-blossom-yellow",
    functionalText: `**Ira Specialization** *(You may only have Whirling Mist Blossom in your deck if your hero is Ira.)*

If Whirling Mist Blossom hits, and it's the second or higher chain link in a row to hit, draw 2 cards.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU74.width-450.png",
    keywords: [Keyword.Specialization,Keyword.GoAgain],
    name: "Whirling Mist Blossom",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    specialization: Hero.Ira,
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "zen-state",
    functionalText: `Zen State enters the arena with 1 balance counter on it. At the beginning of your action phase, destroy Zen State unless you remove a balance counter from it.

Whenever your hero would be dealt damage, prevent 1 damage that source would deal.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU75.width-450.png",
    keywords: [],
    name: "Zen State",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Token,
    typeText: "Ninja Token – Aura",
    talents: [],
    subType: TokenSubType.Aura
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "mask-of-the-pouncing-lynx",
    functionalText: `When an attack action card you control hits, you may destroy Mask of the Pouncing Lynx. If you do, search your deck for an attack action card with 2 or less {p}, banish it, then shuffle. You may play it this turn.

**Blade Break** *(If you defend with Mask of the Pouncing Lynx, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR037.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Mask of the Pouncing Lynx",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Equipment,
    typeText: "Ninja Equipment – Head",
    defense: 2,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "break-tide-yellow",
    functionalText: `**Combo** - If Rushing River or Flood of Force was the last attack this combat chain, Break Tide gains +3{p}, **dominate**, and "If Break Tide hits, banish the top card of your deck. Until the end of your next turn, you may play it."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR038.width-450.png",
    keywords: [Keyword.Combo,Keyword.Dominate],
    name: "Break Tide",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "spring-tidings-yellow",
    functionalText: `**Benji Specialization** *(You may only have Spring Tidings in your deck if your hero is Benji.)*

When Spring Tidings hits, draw a card for each other attack action card with 2 or less base{p} you control on the combat chain.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR039.width-450.png",
    keywords: [Keyword.Specialization,Keyword.GoAgain],
    name: "Spring Tidings",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    specialization: Hero.Benji,
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "winds-of-eternity-blue",
    functionalText: `**Combo** - If Winds of Eternity was the last attack this combat chain, Winds of Eternity gains +2{p} and "If this hits, shuffle all cards named Hundred Winds you control on this combat chain into your deck."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR040.width-450.png",
    keywords: [Keyword.Combo],
    name: "Winds of Eternity",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "hundred-winds-red",
    functionalText: `**Combo** - If Hundred Winds was the last attack this combat chain, this attack gains +1{p} for each other card named Hundred Winds you control on this combat chain.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR041.width-450.png",
    keywords: [Keyword.Combo,Keyword.GoAgain],
    name: "Hundred Winds",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 2,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "hundred-winds-yellow",
    functionalText: `**Combo** - If Hundred Winds was the last attack this combat chain, this attack gains +1{p} for each other card named Hundred Winds you control on this combat chain.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR042.width-450.png",
    keywords: [Keyword.Combo,Keyword.GoAgain],
    name: "Hundred Winds",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 2,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "hundred-winds-blue",
    functionalText: `**Combo** - If Hundred Winds was the last attack this combat chain, this attack gains +1{p} for each other card named Hundred Winds you control on this combat chain.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR043.width-450.png",
    keywords: [Keyword.Combo,Keyword.GoAgain],
    name: "Hundred Winds",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 2,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "ride-the-tailwind-red",
    functionalText: `When Ride the Tailwind hits, the next attack action card with 2 or less base {p} you play this combat chain gains **go again.**

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR044.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Ride the Tailwind",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 2,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "ride-the-tailwind-yellow",
    functionalText: `When Ride the Tailwind hits, the next attack action card with 2 or less base {p} you play this combat chain gains **go again.**

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR045.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Ride the Tailwind",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 2,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "ride-the-tailwind-blue",
    functionalText: `When Ride the Tailwind hits, the next attack action card with 2 or less base {p} you play this combat chain gains **go again.**

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR046.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Ride the Tailwind",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    
    defense: 2,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "twin-twisters-red",
    functionalText: `Choose 1:

- Twin Twisters gains "When this hits, your next attack this combat chain gains +1{p}.”
- Twin Twisters gains +1{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR047.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Twin Twisters",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "twin-twisters-yellow",
    functionalText: `Choose 1:

- Twin Twisters gains "When this hits, your next attack this combat chain gains +1{p}.”
- Twin Twisters gains +1{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR048.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Twin Twisters",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Ninja,
    identifier: "twin-twisters-blue",
    functionalText: `Choose 1:

- Twin Twisters gains "When this hits, your next attack this combat chain gains +1{p}.”
- Twin Twisters gains +1{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR049.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Twin Twisters",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 2,
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },,,];
  