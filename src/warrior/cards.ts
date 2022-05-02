
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
    class: Class.Warrior,
    identifier: "dorinthea-ironsong",
    functionalText: `**Once per turn Effect** - When your weapon attack hits, you may attack an additional time with that weapon this turn. *(You must have an action point to attack an additional time.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER004-P.width-450.png",
    keywords: [],
    name: "Dorinthea Ironsong",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.WelcomeToRathe,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Warrior Hero",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "dorinthea",
    functionalText: `**Once per turn Effect** - When your weapon attack hits, you may attack an additional time with that weapon this turn. *(You must have an action point to attack an additional time.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER008-P.width-450.png",
    keywords: [],
    name: "Dorinthea",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.WelcomeToRathe],
    type: Type.Hero,
    typeText: "Warrior Hero – Young",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "dawnblade",
    functionalText: `**Once per Turn Action** - {r}: **Attack**

If Dawnblade hits, and it's the second time it has hit this turn, put a +1{p} counter on Dawnblade

At the beginning of your end phase, if Dawnblade has not hit this turn, remove all +1{p} counters from Dawnblade`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB062.width-450.png",
    keywords: [],
    name: "Dawnblade",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.WelcomeToRathe,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Warrior Weapon – Sword (2H)",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "braveforge-bracers",
    functionalText: `**Once per turn Action** - {r}: Your next weapon attack this turn gains +1{p}. Activate this ability only if a weapon you control has hit this turn. Go again.

**Battleworn** *(If you defend with Braveforge Bracers, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB006-P.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Braveforge Bracers",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Warrior Equipment – Arms",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "refraction-bolters",
    functionalText: `When a weapon you control hits, you may destroy Refraction Bolters. If you do, the attack gains **go again.**

**Battleworn** (If you defend with Refraction Bolters, put a -1{d} counter on it when the combat chain closes.)`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_117.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Refraction Bolters",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Warrior Equipment – Legs",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "glint-the-quicksilver-blue",
    functionalText: `Target weapon attack gains **go again**.

**Reprise** - If the defending hero has defended with a card from their hand, this chain link, draw card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_118.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Glint the Quicksilver",
    rarity: Rarity.Majestic,
    sets: [Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "steelblade-supremacy-red",
    functionalText: `**Dorinthea Specialization** *(You may only have Steelblade Supremacy in your deck if your hero is Dorinthea.)*

Until end of turn, target weapon gains +2{p} and “Whenever this weapon hits, draw a card.”

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_119.width-450.png",
    keywords: [Keyword.Specialization,Keyword.GoAgain],
    name: "Steelblade Supremacy",
    rarity: Rarity.Majestic,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "rout-red",
    functionalText: `Target weapon attack gains +3{p}

**Reprise** - If the defending hero has defended with a card from their hand this chain link, you may return target non-equipment defending card to its owner's hand.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_120.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Rout",
    rarity: Rarity.SuperRare,
    sets: [Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "singing-steelblade-yellow",
    functionalText: `**Dorinthea Specialization** *(You may only have Singing Steelblade in your deck if your hero is Dorinthea.)*

Target weapon attack gains +1{p}.

**Reprise** - If the defending hero has defended with a card from hand this chain link, search your deck for an attack action card, banish it face up, then shuffle your deck. You may play it this chain link.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_121.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Reprise],
    name: "Singing Steelblade",
    rarity: Rarity.SuperRare,
    sets: [Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "ironsong-determination-yellow",
    functionalText: `Your next weapon attack this gains +1{p} and **dominate** until end of turn.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_122.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Ironsong Determination",
    rarity: Rarity.SuperRare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "overpower-red",
    functionalText: `Target weapon attack gains +4{p}

**Reprise** - If the defending hero has defended with a card from their hand this chain link, the attack gains an additional +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_123.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Overpower",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "overpower-yellow",
    functionalText: `Target weapon attack gains +3{p}

**Reprise** - If the defending hero has defended with a card from their hand this chain link, the attack gains an additional +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_124.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Overpower",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "overpower-blue",
    functionalText: `Target weapon attack gains +2{p}

**Reprise** - If the defending hero has defended with a card from their hand this chain link, the attack gains an additional +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_125.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Overpower",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "steelblade-shunt-red",
    functionalText: `If Steelblade Shunt defends a weapon attack, deal 1 damage to the attacking hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_126.width-450.png",
    keywords: [],
    name: "Steelblade Shunt",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.DefenseReaction,
    typeText: "Warrior Defense Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "steelblade-shunt-yellow",
    functionalText: `If Steelblade Shunt defends a weapon attack, deal 1 damage to the attacking hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_127.width-450.png",
    keywords: [],
    name: "Steelblade Shunt",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.DefenseReaction,
    typeText: "Warrior Defense Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "steelblade-shunt-blue",
    functionalText: `If Steelblade Shunt defends a weapon attack, deal 1 damage to the attacking hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_128.width-450.png",
    keywords: [],
    name: "Steelblade Shunt",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.DefenseReaction,
    typeText: "Warrior Defense Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "warriors-valor-red",
    functionalText: `Your next weapon attack this turn gains +3{p} and “If this hits, the attack gains **go again**”

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_129.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Warrior's Valor",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "warriors-valor-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p} and “If this hits, the attack gains **go again**”

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_130.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Warrior's Valor",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "warriors-valor-blue",
    functionalText: `Your next weapon attack this turn gains +1{p} and “If this hits, the attack gains **go again**”

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_131.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Warrior's Valor",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "ironsong-response-red",
    functionalText: `**Reprise** - If the defending hero has defended with a card from their hand this chain link, target weapon attack gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS008-P.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Ironsong Response",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "ironsong-response-yellow",
    functionalText: `**Reprise** - If the defending hero has defended with a card from their hand this chain link, target weapon attack gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS030.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Ironsong Response",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "ironsong-response-blue",
    functionalText: `**Reprise** - If the defending hero has defended with a card from their hand this chain link, target weapon attack gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS031.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Ironsong Response",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "biting-blade-red",
    functionalText: `Target weapon attack gains +3{p}.

**Reprise** - If the defending hero has defended with a card from their hand this chain link, weapons you control gain +1{p} until end of turn`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_135.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Biting Blade",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "biting-blade-yellow",
    functionalText: `Target weapon attack gains +2{p}.

**Reprise** - If the defending hero has defended with a card from their hand this chain link, weapons you control gain +1{p} until end of turn`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_136.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Biting Blade",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "biting-blade-blue",
    functionalText: `Target weapon attack gains +1{p}.

**Reprise** - If the defending hero has defended with a card from their hand this chain link, weapons you control gain +1{p} until end of turn`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_137.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Biting Blade",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "stroke-of-foresight-red",
    functionalText: `Target weapon attack gains +3{p}.

**Reprise** - If the defending hero has defended with a card from their hand this chain link, draw a card, then put a card from your hand on the top or bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_138.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Stroke of Foresight",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "stroke-of-foresight-yellow",
    functionalText: `Target weapon attack gains +2{p}.

**Reprise** - If the defending hero has defended with a card from their hand this chain link, draw a card, then put a card from your hand on the top or bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_139.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Stroke of Foresight",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "stroke-of-foresight-blue",
    functionalText: `Target weapon attack gains +1{p}.

**Reprise** - If the defending hero has defended with a card from their hand this chain link, draw a card, then put a card from your hand on the top or bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_140.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Stroke of Foresight",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "sharpen-steel-red",
    functionalText: `Your next weapon attack this turn gains +3{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_141.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sharpen Steel",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "sharpen-steel-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_142.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sharpen Steel",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "sharpen-steel-blue",
    functionalText: `Your next weapon attack this turn gains +1{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_143.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sharpen Steel",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "driving-blade-red",
    functionalText: `Your next weapon attack this turn gains +3{p} and **go again.**

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_144.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Driving Blade",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "driving-blade-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p} and **go again.**

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_145.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Driving Blade",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "driving-blade-blue",
    functionalText: `Your next weapon attack this turn gains +1{p} and **go again.**

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_146.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Driving Blade",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "natures-path-pilgrimage-red",
    functionalText: `Your next weapon attack this turn gains +3{p} and “If this hits and you have no cards in your arsenal, reveal the top card of your deck. If it's an action card, put it face down into your arsenal.”

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_147.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Nature's Path Pilgrimage",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "natures-path-pilgrimage-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p} and “If this hits and you have no cards in your arsenal, reveal the top card of your deck. If it's an action card, put it face down into your arsenal.”

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_148.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Nature's Path Pilgrimage",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "natures-path-pilgrimage-blue",
    functionalText: `Your next weapon attack this turn gains +1{p} and “If this hits and you have no cards in your arsenal, reveal the top card of your deck. If it's an action card, put it face down into your arsenal.”

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_149.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Nature's Path Pilgrimage",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "kassai-cintari-sellsword",
    functionalText: `Your second sword attack each turn costs {r} less.

At the beginning of your end phase, if you've attacked 2 or more times with weapons this turn, create a Copper token for each weapon attack that hit. *(It's an item with "**Action**- {r}{r}{r}{r}, destroy Copper: Draw a card. **Go again**")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER029.width-450.png",
    keywords: [],
    name: "Kassai, Cintari Sellsword",
    rarity: Rarity.Rare,
    sets: [Release.HeroDeck,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Warrior Hero – Young",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "cintari-saber",
    functionalText: `**Once per Turn Action** - {r}: **Attack**

When Cintari Saber is defended by an attack action card, it gains +1{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU79.width-450.png",
    keywords: [],
    name: "Cintari Saber",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Warrior Weapon – Sword (1H)",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "courage-of-bladehold",
    functionalText: `**Action** - Destroy Courage of Bladehold: Your sword attacks cost {r} less this turn. **Go again**

**Temper** *(If you defend with Courage of Bladehold, put a -1{d} counter on it when the combat chain closes then destroy it if it has 0{d}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB073.width-450.png",
    keywords: [Keyword.Temper],
    name: "Courage of Bladehold",
    rarity: Rarity.Majestic,
    sets: [Release.Promos,Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Warrior Equipment – Chest",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "twinning-blade-yellow",
    functionalText: `You may attack an additional time with target sword this turn. *(You must have an action point to attack an additional time.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU82.width-450.png",
    keywords: [],
    name: "Twinning Blade",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "unified-decree-yellow",
    functionalText: `Target weapon attack gains +3{p}.

**Reprise** - If the defending hero has defended with a card from their hand this chain link, look at the top card of your deck. If it's an attack reaction card, you may banish it. If you do, you may play it this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU83.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Unified Decree",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "spoils-of-war-red",
    functionalText: `Your next weapon attack this turn gains +2{p} and **go again.**

Whenever a weapon you control hits this turn, create 2 Copper tokens.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU-84.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Spoils of War",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "dauntless-red",
    functionalText: `Your next weapon attack this turn gains +3{p}.

The next defense reaction card the defending hero plays this turn costs an additional {r} to play.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU85.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Dauntless",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "dauntless-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p}.

The next defense reaction card the defending hero plays this turn costs an additional {r} to play.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU86.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Dauntless",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "dauntless-blue",
    functionalText: `Your next weapon attack this turn gains +1{p}.

The next defense reaction card the defending hero plays this turn costs an additional {r} to play.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU87.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Dauntless",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "out-for-blood-red",
    functionalText: `Target weapon attack gains +3{p}.

**Reprise** - If the defending hero has defended with a card from their hand this chain link, your next attack this turn gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU88.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Out for Blood",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "out-for-blood-yellow",
    functionalText: `Target weapon attack gains +2{p}.

**Reprise** - If the defending hero has defended with a card from their hand this chain link, your next attack this turn gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU89.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Out for Blood",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "out-for-blood-blue",
    functionalText: `Target weapon attack gains +1{p}.

**Reprise** - If the defending hero has defended with a card from their hand this chain link, your next attack this turn gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU90.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Out for Blood",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "hit-and-run-red",
    functionalText: `Your next weapon attack this turn gains **go again.**

If you have attacked with a weapon this turn, your next attack this turn gains +3{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU91.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Hit and Run",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "hit-and-run-yellow",
    functionalText: `Your next weapon attack this turn gains **go again.**

If you have attacked with a weapon this turn, your next attack this turn gains +2{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU92.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Hit and Run",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "hit-and-run-blue",
    functionalText: `Your next weapon attack this turn gains **go again.**

If you have attacked with a weapon this turn, your next attack this turn gains +1{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU93.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Hit and Run",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "push-forward-red",
    functionalText: `Your next weapon attack this turn gains +3{p}.

If you have attacked with a weapon this turn, your next attack this turn gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU94.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Push Forward",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "push-forward-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p}.

If you have attacked with a weapon this turn, your next attack this turn gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU95.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Push Forward",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "push-forward-blue",
    functionalText: `Your next weapon attack this turn gains +1{p}.

If you have attacked with a weapon this turn, your next attack this turn gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU96.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Push Forward",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "ser-boltyn-breaker-of-dawn",
    functionalText: `If you've **charged** this turn, attacks you control have +1{p} while defended by an attack action card.

**Attack Reaction** - Banish a card from Boltyn's soul: Target attack with {p} greater than its base {p} gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER031.width-450.png",
    keywords: [],
    name: "Ser Boltyn, Breaker of Dawn",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.Monarch],
    type: Type.Hero,
    typeText: "Light Warrior Hero",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "boltyn",
    functionalText: `If you've **charged** this turn, attacks you control have +1{p} while defended by an attack action card.

**Attack Reaction** - Banish a card from Boltyn's soul: Target attack with {p} greater than its base {p} gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER035.width-450.png",
    keywords: [],
    name: "Boltyn",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.Monarch],
    type: Type.Hero,
    typeText: "Light Warrior Hero – Young",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "raydn-duskbane",
    functionalText: `**Once per Turn Action** - 0: **Attack**

If you've **charged** this turn, Raydn gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON031.width-450.png",
    keywords: [],
    name: "Raydn, Duskbane",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Weapon,
    typeText: "Light Warrior Weapon – Sword (2H)",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "bolting-blade-yellow",
    functionalText: `Bolting Blade costs {r}{r} less to play for each time you've **charged** this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON032.width-450.png",
    keywords: [],
    name: "Bolting Blade",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "beacon-of-victory-yellow",
    functionalText: `As an additional cost to play Beacon of Victory, banish X cards from your hero's soul. X can't be 0.

Target attack gains +X{p}.

If you've **charged** this turn, search your deck for an action card with cost X or less, reveal it, put it into your hand, then shuffle your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON033.width-450.png",
    keywords: [],
    name: "Beacon of Victory",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.AttackReaction,
    typeText: "Light Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "lumina-ascension-yellow",
    functionalText: `**Boltyn Specialization** *(You may only have Lumina Ascension in your deck if your hero is Boltyn.)*

Until end of turn, weapons you control gain +1{p} and "If this hits, reveal the top card of your deck. If it's a Light card, put it into your hero's soul and gain 1{h}, otherwise put it on the bottom of your deck."

If you've **charged** this turn, you may attack an additional time with each weapon you control.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON034.width-450.png",
    keywords: [Keyword.Specialization,Keyword.GoAgain],
    name: "Lumina Ascension",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "v-of-the-vanguard-yellow",
    functionalText: `**Boltyn Specialization** *(You may only have V of the Vanguard in your deck if your hero is Boltyn.)*

As an additional cost to play V of the Vanguard, you may **charge** your hero's soul any number of times. *(Put 1 or more cards from your hand face up under your hero card.)*

Attacks on this combat chain gain +1{p} for each Light card charged this way.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON035.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Charge],
    name: "V of the Vanguard",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "battlefield-blitz-red",
    functionalText: `If you've **charged** this turn, Battlefield Blitz gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON036.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Battlefield Blitz",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "battlefield-blitz-yellow",
    functionalText: `If you've **charged** this turn, Battlefield Blitz gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON037.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Battlefield Blitz",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "battlefield-blitz-blue",
    functionalText: `If you've **charged** this turn, Battlefield Blitz gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON038.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Battlefield Blitz",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "valiant-thrust-red",
    functionalText: `If you've **charged** this turn, Valiant Thrust gains +3{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON039.width-450.png",
    keywords: [],
    name: "Valiant Thrust",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "valiant-thrust-yellow",
    functionalText: `If you've **charged** this turn, Valiant Thrust gains +3{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON040.width-450.png",
    keywords: [],
    name: "Valiant Thrust",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "valiant-thrust-blue",
    functionalText: `If you've **charged** this turn, Valiant Thrust gains +3{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON041.width-450.png",
    keywords: [],
    name: "Valiant Thrust",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "bolt-of-courage-red",
    functionalText: `As an additional cost to play Bolt of Courage, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*

If you've **charged** this turn, Bolt of Courage gains "If this hits, draw a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON042.width-450.png",
    keywords: [Keyword.Charge],
    name: "Bolt of Courage",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "bolt-of-courage-yellow",
    functionalText: `As an additional cost to play Bolt of Courage, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*

If you've **charged** this turn, Bolt of Courage gains "If this hits, draw a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON043.width-450.png",
    keywords: [Keyword.Charge],
    name: "Bolt of Courage",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "bolt-of-courage-blue",
    functionalText: `As an additional cost to play Bolt of Courage, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*

If you've **charged** this turn, Bolt of Courage gains "If this hits, draw a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON044.width-450.png",
    keywords: [Keyword.Charge],
    name: "Bolt of Courage",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "cross-the-line-red",
    functionalText: `As an additional cost to play Cross the Line, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON045.width-450.png",
    keywords: [Keyword.Charge],
    name: "Cross the Line",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "cross-the-line-yellow",
    functionalText: `As an additional cost to play Cross the Line, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON046.width-450.png",
    keywords: [Keyword.Charge],
    name: "Cross the Line",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "cross-the-line-blue",
    functionalText: `As an additional cost to play Cross the Line, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON047.width-450.png",
    keywords: [Keyword.Charge],
    name: "Cross the Line",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "engulfing-light-red",
    functionalText: `As an additional cost to play Engulfing Light, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*

If you've **charged** this turn, Engulfing Light gains "If this hits, put it into your hero's soul."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON048.width-450.png",
    keywords: [Keyword.Charge],
    name: "Engulfing Light",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "engulfing-light-yellow",
    functionalText: `As an additional cost to play Engulfing Light, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*

If you've **charged** this turn, Engulfing Light gains "If this hits, put it into your hero's soul."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON049.width-450.png",
    keywords: [Keyword.Charge],
    name: "Engulfing Light",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "engulfing-light-blue",
    functionalText: `As an additional cost to play Engulfing Light, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*

If you've **charged** this turn, Engulfing Light gains "If this hits, put it into your hero's soul."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON050.width-450.png",
    keywords: [Keyword.Charge],
    name: "Engulfing Light",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "express-lightning-red",
    functionalText: `As an additional cost to play Express Lightning, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON051.width-450.png",
    keywords: [Keyword.Charge],
    name: "Express Lightning",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "express-lightning-yellow",
    functionalText: `As an additional cost to play Express Lightning, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON052.width-450.png",
    keywords: [Keyword.Charge],
    name: "Express Lightning",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "express-lightning-blue",
    functionalText: `As an additional cost to play Express Lightning, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON053.width-450.png",
    keywords: [Keyword.Charge],
    name: "Express Lightning",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "take-flight-red",
    functionalText: `As an additional cost to play Take Flight, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*

If you've **charged** this turn, Take Flight gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON054.width-450.png",
    keywords: [Keyword.Charge],
    name: "Take Flight",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "take-flight-yellow",
    functionalText: `As an additional cost to play Take Flight, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*

If you've **charged** this turn, Take Flight gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON055.width-450.png",
    keywords: [Keyword.Charge],
    name: "Take Flight",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "take-flight-blue",
    functionalText: `As an additional cost to play Take Flight, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*

If you've **charged** this turn, Take Flight gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON056.width-450.png",
    keywords: [Keyword.Charge],
    name: "Take Flight",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "courageous-steelhand-red",
    functionalText: `If you've **charged** this turn, target attack gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON057.width-450.png",
    keywords: [],
    name: "Courageous Steelhand",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.AttackReaction,
    typeText: "Light Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "courageous-steelhand-yellow",
    functionalText: `If you've **charged** this turn, target attack gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON058.width-450.png",
    keywords: [],
    name: "Courageous Steelhand",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.AttackReaction,
    typeText: "Light Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "courageous-steelhand-blue",
    functionalText: `If you've **charged** this turn, target attack gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON059.width-450.png",
    keywords: [],
    name: "Courageous Steelhand",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.AttackReaction,
    typeText: "Light Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "hatchet-of-body",
    functionalText: `**Once per Turn Action** - {r}: **Attack**

Whenever you attack with Hatchet of Body, if Hatchet of Mind was the last attack this turn, Hatchet of Body gains +1{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS049.width-450.png",
    keywords: [],
    name: "Hatchet of Body",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Weapon,
    typeText: "Warrior Weapon – Axe (1H)",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "hatchet-of-mind",
    functionalText: `**Once per Turn Action** - {r}: **Attack**

Whenever you attack with Hatchet of Mind, if Hatchet of Body was the last attack this turn, Hatchet of Mind gains +1{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS050.width-450.png",
    keywords: [],
    name: "Hatchet of Mind",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Weapon,
    typeText: "Warrior Weapon – Axe (1H)",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "valiant-dynamo",
    functionalText: `At the beginning of your end phase, if you have attacked 2 or more times with weapons this turn, you may remove a -1{d} counter from Valiant Dynamo.

**Battleworn** *(If you defend with Valiant Dynamo, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB020.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Valiant Dynamo",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Equipment,
    typeText: "Warrior Equipment – Legs",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "gallantry-gold",
    functionalText: `**Action** - {r}, destroy Gallantry Gold: Your weapon attacks gain +1{p} this turn. **Go again**

**Battleworn** *(If you defend with Gallantry Gold, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON108.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Gallantry Gold",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Warrior Equipment – Arms",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "spill-blood-red",
    functionalText: `Axes you control gain +2{p} and **dominate** until end of turn.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON109.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Spill Blood",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "dusk-path-pilgrimage-red",
    functionalText: `Your next weapon attack this turn gains +3{p} and "If this hits, you may attack an additional time with this weapon this turn." *(You must have an action point to attack an additional time.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS060.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Dusk Path Pilgrimage",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "dusk-path-pilgrimage-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p} and "If this hits, you may attack an additional time with this weapon this turn." *(You must have an action point to attack an additional time.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS061.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Dusk Path Pilgrimage",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "dusk-path-pilgrimage-blue",
    functionalText: `Your next weapon attack this turn gains +1{p} and "If this hits, you may attack an additional time with this weapon this turn." *(You must have an action point to attack an additional time.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS062.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Dusk Path Pilgrimage",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "plow-through-red",
    functionalText: `Your next weapon attack this turn gains +3{p} and "If this weapon is defended by an attack action card, it gains +1{p} until end of turn".

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON113.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Plow Through",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "plow-through-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p} and "If this weapon is defended by an attack action card, it gains +1{p} until end of turn".

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON114.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Plow Through",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "plow-through-blue",
    functionalText: `Your next weapon attack this turn gains +1{p} and "If this weapon is defended by an attack action card, it gains +1{p} until end of turn".

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON115.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Plow Through",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "second-swing-red",
    functionalText: `If you have attacked with a weapon this turn, your next attack this turn gains +4{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON116.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Second Swing",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "second-swing-yellow",
    functionalText: `If you have attacked with a weapon this turn, your next attack this turn gains +3{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON117.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Second Swing",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "second-swing-blue",
    functionalText: `If you have attacked with a weapon this turn, your next attack this turn gains +2{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON118.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Second Swing",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "minerva-themis",
    functionalText: `**Mentor** *(You may only have Minerva in your deck if your hero is young.)*

At the start of your turn, if Minerva is face down in your arsenal, you may turn her face up.

1H weapons you control have +1{p}. Whenever a weapon you control hits, put a lesson counter on Minerva. Then if there are 3 or more lesson counters on Minerva, banish her, search your deck for a **specialization** card, put it face up into your arsenal, and shuffle your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL002.width-450.png",
    keywords: [Keyword.Mentor],
    name: "Minerva Themis",
    rarity: Rarity.Majestic,
    sets: [Release.Promos,Release.HeroDeck],
    type: Type.Mentor,
    typeText: "Warrior Mentor",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "helm-of-sharp-eye",
    functionalText: `**Attack Reaction** - {r}, destroy Helm of Sharp Eye: Banish the top card of your deck. You may play it this combat chain. Activate this ability only if you control a weapon with {p} greater than twice it's base {p}.

**Battleworn** *(If you defend with Helm of Sharp Eye, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR053.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Helm of Sharp Eye",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Equipment,
    typeText: "Warrior Equipment – Head",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "shatter-yellow",
    functionalText: `Until end of turn, target 2H weapon gains "Whenever this would deal {p} damage, instead you may destroy target defending equipment with {d} less than the damage that would be dealt this way.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR054.width-450.png",
    keywords: [],
    name: "Shatter",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "blood-on-her-hands-yellow",
    functionalText: `**Kassai Specialization**

As an additional cost to play Blood on Her Hands, destroy any number of Copper you control. For each Copper destroyed this way choose a mode. You may choose each mode twice.

- Target 1H weapon gains +1{p} this turn while attacking this turn.
- Target 1H weapon gains **go again** this turn while attacking this turn.
- Target 1H weapon may attack twice this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR055.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Blood on Her Hands",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "oath-of-steel-red",
    functionalText: `Whenever you attack with a weapon this turn, put a +1{p} counter on it.

At the beginning of your end phase, remove all +1{p} counters from weapons you control.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR056.width-450.png",
    keywords: [],
    name: "Oath of Steel",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "slice-and-dice-red",
    functionalText: `Whenever you attack with a sword or dagger this turn;

- If it's your first weapon attack this turn, it gains +1{p}.
- If it's your second weapon attack this turn, it gains +3{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR057.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Slice and Dice",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "slice-and-dice-yellow",
    functionalText: `Whenever you attack with a sword or dagger this turn;

- If it's your first weapon attack this turn, it gains +1{p}.
- If it's your second weapon attack this turn, it gains +2p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR058.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Slice and Dice",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "slice-and-dice-blue",
    functionalText: `Whenever you attack with a sword or dagger this turn;

- If it's your first weapon attack this turn, it gains +1{p}.
- If it's your second weapon attack this turn, it gains +1{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR059.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Slice and Dice",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "blade-runner-red",
    functionalText: `Target 1H weapon attack gains **go again.**

Your next weapon attack this turn gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR060.width-450.png",
    keywords: [],
    name: "Blade Runner",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "blade-runner-yellow",
    functionalText: `Target 1H weapon attack gains **go again.**

Your next weapon attack this turn gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR061.width-450.png",
    keywords: [],
    name: "Blade Runner",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "blade-runner-blue",
    functionalText: `Target 1H weapon attack gains **go again.**

Your next weapon attack this turn gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR062.width-450.png",
    keywords: [],
    name: "Blade Runner",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "in-the-swing-red",
    functionalText: `Play In the Swing only if you have attacked 2 or more times with weapons this turn.

Target weapon attack gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB057.width-450.png",
    keywords: [],
    name: "In the Swing",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.Everfest],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "in-the-swing-yellow",
    functionalText: `Play In the Swing only if you have attacked 2 or more times with weapons this turn.

Target weapon attack gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR064.width-450.png",
    keywords: [],
    name: "In the Swing",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "in-the-swing-blue",
    functionalText: `Play In the Swing only if you have attacked 2 or more times with weapons this turn.

Target weapon attack gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR065.width-450.png",
    keywords: [],
    name: "In the Swing",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "outland-skirmish-red",
    functionalText: `Your next 1H weapon attack this turn gains +3{p}.

The next time a weapon hits this turn, create a Copper token.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR066.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Outland Skirmish",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "outland-skirmish-yellow",
    functionalText: `Your next 1H weapon attack this turn gains +2{p}.

The next time a weapon hits this turn, create a Copper token.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR067.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Outland Skirmish",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "outland-skirmish-blue",
    functionalText: `Your next 1H weapon attack this turn gains +1{p}.

The next time a weapon hits this turn, create a Copper token.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR068.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Outland Skirmish",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
  }];
  