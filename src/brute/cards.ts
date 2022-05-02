
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
    class: Class.Brute,
    identifier: "rhinar-reckless-rampage",
    functionalText: `Whenever you discard a card with 6 or more {p} during your action phase, **intimidate**. *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER001-P.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Rhinar, Reckless Rampage",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.WelcomeToRathe,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Brute Hero",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "rhinar",
    functionalText: `When you discard a card with 6 or more {p} during your action phase, **intimidate**. *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER005-P.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Rhinar",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.WelcomeToRathe],
    type: Type.Hero,
    typeText: "Brute Hero – Young",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "romping-club",
    functionalText: `**Once per Turn Action** - {r}{r}: **Attack**

**Once per Turn Effect** – When you discard a card with 6 or more {p}, Romping Club gains +1{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS001-P.width-450.png",
    keywords: [],
    name: "Romping Club",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.WelcomeToRathe,Release.HeroDeck,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Brute Weapon - Club (2H)",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "scabskin-leathers",
    functionalText: `**Once per turn Action** - 0: Roll a 6 sided die. Gain action points equal to half the number rolled, rounded down.

**Battleworn** *(If you defend with Scabskin Leathers, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB003-P.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Scabskin Leathers",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Brute Equipment - Legs",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "barkbone-strapping",
    functionalText: `**Instant** - Destroy Barkbone Strapping: Roll a 6 die. Gain {r} equal to half the number rolled, rounded down.

**Battleworn** *(If you defend with Barkbone Strapping, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_5.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Barkbone Strapping",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Brute Equipment – Chest",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "alpha-rampage-red",
    functionalText: `**Rhinar Specialization** *(You may only have Alpha Rampage in your deck if your hero is Rhinar)*

As an additional cost to play Alpha Rampage, discard a random card.

**Intimidate**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_6.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Intimidate],
    name: "Alpha Rampage",
    rarity: Rarity.Majestic,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "bloodrush-bellow-yellow",
    functionalText: `As an additional cost to play Bloodrush Bellow, discard a random card.

Your Brute attacks gain +2{p} this turn.

If the discarded card has 6 or more {p}, draw 2 cards and Bloodrush Bellow gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_7.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Bloodrush Bellow",
    rarity: Rarity.Majestic,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "reckless-swing-blue",
    functionalText: `As an additional cost to play Reckless Swing, discard a random card.

If the discarded card has 6 or more {p}, deal 2 damage to the attacking hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_8.width-450.png",
    keywords: [],
    name: "Reckless Swing",
    rarity: Rarity.SuperRare,
    sets: [Release.WelcomeToRathe],
    type: Type.DefenseReaction,
    typeText: "Brute Defense Reaction",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "sand-sketched-plan-blue",
    functionalText: `**Rhinar Specialization** *(You may only have Sand Sketched Plan your deck if your hero is Rhinar)*

Search your deck for a card, put it into your hand, discard a random card, then shuffle your deck.

If the discarded card has 6 or more {p}, gain 2 action points.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_9.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Sand Sketched Plan",
    rarity: Rarity.SuperRare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "bone-head-barrier-yellow",
    functionalText: `Roll a 6 sided die. Prevent the next X damage that would be dealt to your hero this turn, where X is the number rolled.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_10.width-450.png",
    keywords: [],
    name: "Bone Head Barrier",
    rarity: Rarity.SuperRare,
    sets: [Release.WelcomeToRathe],
    type: Type.Instant,
    typeText: "Brute Instant",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "breakneck-battery-red",
    functionalText: `As an additional cost to play Breakneck Battery, discard a random card.

If the discarded card has 6 or more {p}, Breakneck Battery gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_11.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Breakneck Battery",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe,Release.HeroDeck],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "breakneck-battery-yellow",
    functionalText: `As an additional cost to play Breakneck Battery, discard a random card.

If the discarded card has 6 or more {p}, Breakneck Battery gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_12.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Breakneck Battery",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "breakneck-battery-blue",
    functionalText: `As an additional cost to play Breakneck Battery, discard a random card.

If the discarded card has 6 or more {p}, Breakneck Battery gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_13.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Breakneck Battery",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "savage-feast-red",
    functionalText: `As an additional cost to play Savage Feast discard a random card.

If the discarded card has 6 or more {p}, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_14.width-450.png",
    keywords: [],
    name: "Savage Feast",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe,Release.HeroDeck],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "savage-feast-yellow",
    functionalText: `As an additional cost to play Savage Feast discard a random card.

If the discarded card has 6 or more {p}, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_15.width-450.png",
    keywords: [],
    name: "Savage Feast",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "savage-feast-blue",
    functionalText: `As an additional cost to play Savage Feast discard a random card.

If the discarded card has 6 or more {p}, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_16.width-450.png",
    keywords: [],
    name: "Savage Feast",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "barraging-beatdown-red",
    functionalText: `Your next Brute attack this turn gains “While this attack is defended by less than 2 non-equipment cards, it gains +4{p}

**Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_17.width-450.png",
    keywords: [Keyword.Intimidate,Keyword.GoAgain],
    name: "Barraging Beatdown",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "barraging-beatdown-yellow",
    functionalText: `Your next Brute attack this turn gains “While this attack is defended by less than 2 non-equipment cards, it gains +3{p}

**Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_18.width-450.png",
    keywords: [Keyword.Intimidate,Keyword.GoAgain],
    name: "Barraging Beatdown",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe,Release.HeroDeck],
    type: Type.Action,
    typeText: "Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "barraging-beatdown-blue",
    functionalText: `Your next Brute attack this turn gains “While this attack is defended by less than 2 non-equipment cards, it gains +2{p}

**Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_19.width-450.png",
    keywords: [Keyword.Intimidate,Keyword.GoAgain],
    name: "Barraging Beatdown",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe,Release.HeroDeck],
    type: Type.Action,
    typeText: "Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "savage-swing-red",
    functionalText: `As an additional cost to play Savage Swing, discard a random card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_20.width-450.png",
    keywords: [],
    name: "Savage Swing",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe,Release.HeroDeck],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "savage-swing-yellow",
    functionalText: `As an additional cost to play Savage Swing, discard a random card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_21.width-450.png",
    keywords: [],
    name: "Savage Swing",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe,Release.HeroDeck],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "savage-swing-blue",
    functionalText: `As an additional cost to play Savage Swing, discard a random card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_22.width-450.png",
    keywords: [],
    name: "Savage Swing",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "pack-hunt-red",
    functionalText: `**Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_23.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Pack Hunt",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "pack-hunt-yellow",
    functionalText: `**Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_24.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Pack Hunt",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "pack-hunt-blue",
    functionalText: `**Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_25.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Pack Hunt",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe,Release.HeroDeck],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "smash-instinct-red",
    functionalText: `**Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_26.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Smash Instinct",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe,Release.HeroDeck],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "smash-instinct-yellow",
    functionalText: `**Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_27.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Smash Instinct",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe,Release.HeroDeck],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "smash-instinct-blue",
    functionalText: `**Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_28.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Smash Instinct",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "wrecker-romp-red",
    functionalText: `As an additional cost to play Wrecker Romp. Discard a random card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS020.width-450.png",
    keywords: [],
    name: "Wrecker Romp",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.HeroDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "wrecker-romp-yellow",
    functionalText: `As an additional cost to play Wrecker Romp. Discard a random card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS021.width-450.png",
    keywords: [],
    name: "Wrecker Romp",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "wrecker-romp-blue",
    functionalText: `As an additional cost to play Wrecker Romp. Discard a random card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS005-P.width-450.png",
    keywords: [],
    name: "Wrecker Romp",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.HeroDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "awakening-bellow-red",
    functionalText: `The next Brute attack action card you play this turn gains +3{p}

**Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_32.width-450.png",
    keywords: [Keyword.Intimidate,Keyword.GoAgain],
    name: "Awakening Bellow",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "awakening-bellow-yellow",
    functionalText: `The next Brute attack action card you play this turn gains +2{p}

**Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_33.width-450.png",
    keywords: [Keyword.Intimidate,Keyword.GoAgain],
    name: "Awakening Bellow",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "awakening-bellow-blue",
    functionalText: `The next Brute attack action card you play this turn gains +1{p}

**Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_34.width-450.png",
    keywords: [Keyword.Intimidate,Keyword.GoAgain],
    name: "Awakening Bellow",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe,Release.HeroDeck],
    type: Type.Action,
    typeText: "Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "primeval-bellow-red",
    functionalText: `As an additional cost to play Primeval Bellow, discard a random card.

Your next Brute attack this turn gains +5{p}

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_35.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Primeval Bellow",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "primeval-bellow-yellow",
    functionalText: `As an additional cost to play Primeval Bellow, discard a random card.

Your next Brute attack this turn gains +4{p}

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_36.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Primeval Bellow",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "primeval-bellow-blue",
    functionalText: `As an additional cost to play Primeval Bellow, discard a random card.

Your next Brute attack this turn gains +3{p}

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_37.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Primeval Bellow",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe,Release.HeroDeck],
    type: Type.Action,
    typeText: "Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "kayo-berserker-runt",
    functionalText: `Whenever you play an attack action card with base power 6 or more {p}, roll a 6 sided die. On;

1-4 - Halve the attack's base {p}, rounded down.

5-6 - Double the attack's base {p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER025.width-450.png",
    keywords: [],
    name: "Kayo, Berserker Runt",
    rarity: Rarity.Rare,
    sets: [Release.HeroDeck,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Brute Hero – Young",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "mandible-claw",
    functionalText: `**Once per Turn Action** - {r}{r}: **Attack**

If you have discarded a card with 6 or more {p} this turn, Mandible Claw gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU4.width-450.png",
    keywords: [],
    name: "Mandible Claw",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Brute Weapon – Claw (1H)",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "skullhorn",
    functionalText: `**Action** - Destroy Skullhorn: Draw a card then discard a random card. **Go again**

**Arcane Barrier 2** *(If your hero would be dealt arcane damage, you may pay {r}{r} instead. If you do, prevent 2 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU6.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Skullhorn",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Brute Equipment – Head",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "beast-within-yellow",
    functionalText: `If Beast Within is put into a graveyard from anywhere other than the combat chain, banish the top card of your deck and lose 1{h}. If it has 6 or more {p}, put it into your hand, otherwise, repeat this process.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU7.width-450.png",
    keywords: [],
    name: "Beast Within",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "massacre-red",
    functionalText: `When you attack with Massacre, if you have discarded a card with 6 or more {p} this turn, Massacre gains +2{p} and **intimidate.**

If Massacre is discarded to pay the cost of a Brute attack action card, the attack gains **intimidate.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU8.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Massacre",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "argh-smash-yellow",
    functionalText: `Roll a 6 sided die. Destroy up to X items, where X is half the number rolled, rounded down.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU9.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Argh… Smash!",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "barraging-big-horn-red",
    functionalText: `As an additional cost to play Barraging Big Horn, discard a random card.

While Barraging Big Horn is defended by less than 2 non-equipment cards, it has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU10.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Barraging Big Horn",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "barraging-big-horn-yellow",
    functionalText: `As an additional cost to play Barraging Big Horn, discard a random card.

While Barraging Big Horn is defended by less than 2 non-equipment cards, it has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU11.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Barraging Big Horn",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "barraging-big-horn-blue",
    functionalText: `As an additional cost to play Barraging Big Horn, discard a random card.

While Barraging Big Horn is defended by less than 2 non-equipment cards, it has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU12.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Barraging Big Horn",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "predatory-assault-red",
    functionalText: `If you have discarded a card with 6 or more {p} this turn, Predatory Assault gains **dominate.** *(The defending hero can't defend Predatory Assault with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU13.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Predatory Assault",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "predatory-assault-yellow",
    functionalText: `If you have discarded a card with 6 or more {p} this turn, Predatory Assault gains **dominate.** *(The defending hero can't defend Predatory Assault with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU14.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Predatory Assault",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "predatory-assault-blue",
    functionalText: `If you have discarded a card with 6 or more {p} this turn, Predatory Assault gains **dominate.** *(The defending hero can't defend Predatory Assault with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU15.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Predatory Assault",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "riled-up-red",
    functionalText: `If you have discarded a card with 6 or more {p} this turn, Riled Up gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU16.width-450.png",
    keywords: [],
    name: "Riled Up",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "riled-up-yellow",
    functionalText: `If you have discarded a card with 6 or more {p} this turn, Riled Up gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU17.width-450.png",
    keywords: [],
    name: "Riled Up",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "riled-up-blue",
    functionalText: `If you have discarded a card with 6 or more {p} this turn, Riled Up gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU18.width-450.png",
    keywords: [],
    name: "Riled Up",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "swing-fist-think-later-red",
    functionalText: `As an additional cost to play Swing Fist, Think Later, discard a random card.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU19.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Swing Fist, Think Later",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "swing-fist-think-later-yellow",
    functionalText: `As an additional cost to play Swing Fist, Think Later, discard a random card.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU20.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Swing Fist, Think Later",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "swing-fist-think-later-blue",
    functionalText: `As an additional cost to play Swing Fist, Think Later, discard a random card.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU21.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Swing Fist, Think Later",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "levia-shadowborn-abomination",
    functionalText: `If a card with 6 or more {p} has been put into your banished zone this turn, cards you own lose **blood debt** during the end phase.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER032.width-450.png",
    keywords: [],
    name: "Levia, Shadowborn Abomination",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.Monarch],
    type: Type.Hero,
    typeText: "Shadow Brute Hero",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "levia",
    functionalText: `If a card with 6 or more {p} has been put into your banished zone this turn, cards you own lose **blood debt** during the end phase.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER036.width-450.png",
    keywords: [],
    name: "Levia",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.Monarch],
    type: Type.Hero,
    typeText: "Shadow Brute Hero – Young",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "hexagore-the-death-hydra",
    functionalText: `**Once per Turn Action** - {r}{r}: **Attack**

Whenever you attack with Hexagore, the Death Hydra, it deals damage to you equal to 6 minus the number of cards with **blood debt** in your banished zone.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON121.width-450.png",
    keywords: [],
    name: "Hexagore, the Death Hydra",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Weapon,
    typeText: "Shadow Brute Weapon – Flail (2H)",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "hooves-of-the-shadowbeast",
    functionalText: `Whenever a card with 6 or more {p} is put into your banished zone, you may destroy Hooves of the Shadowbeast. If you do, gain 1 action point. *(When an equipment is destroyed, it's put into the graveyard.)*

**Battleworn** *(If you defend with Hooves of the Shadowbeast, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON122.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Hooves of the Shadowbeast",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Shadow Brute Equipment – Legs",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "deep-rooted-evil-yellow",
    functionalText: `If a card with 6 or more {p} has been put into your banished zone this turn, you may play Deep Rooted Evil from your banished zone.

**Blood Debt** *(At the beginning of your end phase, if Deep Rooted Evil is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON123.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Deep Rooted Evil",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "mark-of-the-beast-yellow",
    functionalText: `If Mark of the Beast would be put into your graveyard from anywhere, instead banish it.

**Blood Debt** *(At the beginning of your end phase, if Mark of the Beast is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON124.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Mark of the Beast",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "shadow-of-blasphomet-red",
    functionalText: `Draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, search your deck for a card with **blood debt**, banish it, then shuffle your deck.

**Blood Debt** *(At the beginning of your end phase, if Shadow of Blasmophet is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/KLUiCIJEFKdt8QM545A4g.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Shadow of Blasphomet",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "endless-maw-red",
    functionalText: `As an additional cost to play Endless Maw, banish 3 random cards from your graveyard.

If a card with 6 or more {p} is banished this way, Endless maw gains +3{p}.

**Blood Debt** *(At the beginning of your end phase, if Endless Maw is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/8Hvi6X0i746eD8UVlBjt.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Endless Maw",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "endless-maw-yellow",
    functionalText: `As an additional cost to play Endless Maw, banish 3 random cards from your graveyard.

If a card with 6 or more {p} is banished this way, Endless maw gains +3{p}.

**Blood Debt** *(At the beginning of your end phase, if Endless Maw is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/3HnONyYapgg32MEXbFXUB.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Endless Maw",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "endless-maw-blue",
    functionalText: `As an additional cost to play Endless Maw, banish 3 random cards from your graveyard.

If a card with 6 or more {p} is banished this way, Endless maw gains +3{p}.

**Blood Debt** *(At the beginning of your end phase, if Endless Maw is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/SAy5p6Yoa21bM89UuG8l4.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Endless Maw",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "writhing-beast-hulk-red",
    functionalText: `As an additional cost to play Writhing Beast Hulk, banish 3 random cards from your graveyard.

If a card with 6 or more {p} is banished this way, Writhing Beast Hulk gains **dominate.** *(The defending hero can't defend Writhing Beast Hulk with more than 1 card from their hand.)*

**Blood Debt** *(At the beginning of your end phase, if Writhing Beast Hulk is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON129.width-450.png",
    keywords: [Keyword.Dominate,Keyword.BloodDebt],
    name: "Writhing Beast Hulk",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "writhing-beast-hulk-yellow",
    functionalText: `As an additional cost to play Writhing Beast Hulk, banish 3 random cards from your graveyard.

If a card with 6 or more {p} is banished this way, Writhing Beast Hulk gains **dominate.** *(The defending hero can't defend Writhing Beast Hulk with more than 1 card from their hand.)*

**Blood Debt** *(At the beginning of your end phase, if Writhing Beast Hulk is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON130.width-450.png",
    keywords: [Keyword.Dominate,Keyword.BloodDebt],
    name: "Writhing Beast Hulk",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "writhing-beast-hulk-blue",
    functionalText: `As an additional cost to play Writhing Beast Hulk, banish 3 random cards from your graveyard.

If a card with 6 or more {p} is banished this way, Writhing Beast Hulk gains **dominate.** *(The defending hero can't defend Writhing Beast Hulk with more than 1 card from their hand.)*

**Blood Debt** *(At the beginning of your end phase, if Writhing Beast Hulk is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON131.width-450.png",
    keywords: [Keyword.Dominate,Keyword.BloodDebt],
    name: "Writhing Beast Hulk",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "convulsions-from-the-bellows-of-hell-red",
    functionalText: `As an additional cost to play Convulsions from the Bellows of Hell, banish 3 random cards from your graveyard.

If a card with 6 or more {p} is banished this way, the next attack action card you play this turn gains +3{p} and **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON132.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Convulsions from the Bellows of Hell",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "convulsions-from-the-bellows-of-hell-yellow",
    functionalText: `As an additional cost to play Convulsions from the Bellows of Hell, banish 3 random cards from your graveyard.

If a card with 6 or more {p} is banished this way, the next attack action card you play this turn gains +2{p} and **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON133.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Convulsions from the Bellows of Hell",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "convulsions-from-the-bellows-of-hell-blue",
    functionalText: `As an additional cost to play Convulsions from the Bellows of Hell, banish 3 random cards from your graveyard.

If a card with 6 or more {p} is banished this way, the next attack action card you play this turn gains +1{p} and **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON134.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Convulsions from the Bellows of Hell",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "boneyard-marauder-red",
    functionalText: `As an additional cost to play Boneyard Marauder, banish 3 random cards from your graveyard.

**Blood Debt** *(At the beginning of your end phase, if Boneyard Marauder is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB023.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Boneyard Marauder",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "boneyard-marauder-yellow",
    functionalText: `As an additional cost to play Boneyard Marauder, banish 3 random cards from your graveyard.

**Blood Debt** *(At the beginning of your end phase, if Boneyard Marauder is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON136.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Boneyard Marauder",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "boneyard-marauder-blue",
    functionalText: `As an additional cost to play Boneyard Marauder, banish 3 random cards from your graveyard.

**Blood Debt** *(At the beginning of your end phase, if Boneyard Marauder is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON137.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Boneyard Marauder",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "deadwood-rumbler-red",
    functionalText: `Draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, banish a card from a graveyard.

**Blood Debt** *(At the beginning of your end phase, if Deadwood Rumbler is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON138.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Deadwood Rumbler",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "deadwood-rumbler-yellow",
    functionalText: `Draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, banish a card from a graveyard.

**Blood Debt** *(At the beginning of your end phase, if Deadwood Rumbler is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON139.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Deadwood Rumbler",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "deadwood-rumbler-blue",
    functionalText: `Draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, banish a card from a graveyard.

**Blood Debt** *(At the beginning of your end phase, if Deadwood Rumbler is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON140.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Deadwood Rumbler",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "dread-screamer-red",
    functionalText: `As an additional cost to play Dread Screamer, banish 3 random cards from your graveyard

If a card with 6 or more {p} is banished this way, Dread Screamer gains **go again.**.

**Blood Debt** *(At the beginning of your end phase, if Dread Screamer is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON141.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.BloodDebt],
    name: "Dread Screamer",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "dread-screamer-yellow",
    functionalText: `As an additional cost to play Dread Screamer, banish 3 random cards from your graveyard

If a card with 6 or more {p} is banished this way, Dread Screamer gains **go again.**.

**Blood Debt** *(At the beginning of your end phase, if Dread Screamer is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON142.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.BloodDebt],
    name: "Dread Screamer",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "dread-screamer-blue",
    functionalText: `As an additional cost to play Dread Screamer, banish 3 random cards from your graveyard

If a card with 6 or more {p} is banished this way, Dread Screamer gains **go again.**.

**Blood Debt** *(At the beginning of your end phase, if Dread Screamer is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON143.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.BloodDebt],
    name: "Dread Screamer",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "graveling-growl-red",
    functionalText: `Play Graveling Growl only if a card with 6 or more {p} has been put into your banished zone this turn.

**Blood Debt** *(At the beginning of your end phase, if Graveling Growl is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON144.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Graveling Growl",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "graveling-growl-yellow",
    functionalText: `Play Graveling Growl only if a card with 6 or more {p} has been put into your banished zone this turn.

**Blood Debt** *(At the beginning of your end phase, if Graveling Growl is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON145.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Graveling Growl",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "graveling-growl-blue",
    functionalText: `Play Graveling Growl only if a card with 6 or more {p} has been put into your banished zone this turn.

**Blood Debt** *(At the beginning of your end phase, if Graveling Growl is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON146.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Graveling Growl",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "hungering-slaughterbeast-red",
    functionalText: `As an additional cost to play Hungering Slaughterbeast, banish 3 random cards from your graveyard.

**Blood Debt** *(At the beginning of your end phase, if Hungering Slaughterbeast is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON147.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Hungering Slaughterbeast",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "hungering-slaughterbeast-yellow",
    functionalText: `As an additional cost to play Hungering Slaughterbeast, banish 3 random cards from your graveyard.

**Blood Debt** *(At the beginning of your end phase, if Hungering Slaughterbeast is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON148.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Hungering Slaughterbeast",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "hungering-slaughterbeast-blue",
    functionalText: `As an additional cost to play Hungering Slaughterbeast, banish 3 random cards from your graveyard.

**Blood Debt** *(At the beginning of your end phase, if Hungering Slaughterbeast is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON149.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Hungering Slaughterbeast",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "unwordly-bellow-red",
    functionalText: `As an additional cost to play Unworldly Bellow, banish 3 random cards from your graveyard.

The next Brute or Shadow attack action card you play this turn gains +4{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON150.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Unwordly Bellow",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "unwordly-bellow-yellow",
    functionalText: `As an additional cost to play Unworldly Bellow, banish 3 random cards from your graveyard.

The next Brute or Shadow attack action card you play this turn gains +3{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON151.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Unwordly Bellow",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "unwordly-bellow-blue",
    functionalText: `As an additional cost to play Unworldly Bellow, banish 3 random cards from your graveyard.

The next Brute or Shadow attack action card you play this turn gains +2{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON152.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Unwordly Bellow",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "ravenous-meataxe",
    functionalText: `**Once per Turn Action** - {r}{r}: **Attack**

Whenever you attack with Ravenous Meataxe, draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, Ravenous Meataxe gains +2{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS047.width-450.png",
    keywords: [],
    name: "Ravenous Meataxe",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Weapon,
    typeText: "Brute Weapon – Axe (2H)",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "tear-limb-from-limb-blue",
    functionalText: `Draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, the next Brute attack action card you play this turn gains +X{p}, where X is its base {p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON222.width-450.png",
    keywords: [],
    name: "Tear Limb from Limb",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "pulping-red",
    functionalText: `Draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, Pulping gains **dominate.** *(The defending hero can't defend Pulping with more than 1 card from their hand.)*

While Pulping is defended by less than 2 non-equipment cards, it has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS051.width-450.png",
    keywords: [Keyword.Dominate,Keyword.GoAgain],
    name: "Pulping",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "pulping-yellow",
    functionalText: `Draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, Pulping gains **dominate.** *(The defending hero can't defend Pulping with more than 1 card from their hand.)*

While Pulping is defended by less than 2 non-equipment cards, it has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS052.width-450.png",
    keywords: [Keyword.Dominate,Keyword.GoAgain],
    name: "Pulping",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "pulping-blue",
    functionalText: `Draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, Pulping gains **dominate.** *(The defending hero can't defend Pulping with more than 1 card from their hand.)*

While Pulping is defended by less than 2 non-equipment cards, it has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS053.width-450.png",
    keywords: [Keyword.Dominate,Keyword.GoAgain],
    name: "Pulping",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "smash-with-big-tree-red",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON226.width-450.png",
    keywords: [],
    name: "Smash with Big Tree",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "smash-with-big-tree-yellow",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON227.width-450.png",
    keywords: [],
    name: "Smash with Big Tree",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "smash-with-big-tree-blue",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON228.width-450.png",
    keywords: [],
    name: "Smash with Big Tree",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "lady-barthimont",
    functionalText: `**Mentor** *(You may only have Barthimont in your deck if your hero is young.)*

At the start of your turn, if Barthimont is face down in your arsenal, you may turn her face up.

Whenever you play an attack action card, banish the top card of your deck. If the banished card has 6 or more {p}, the attack gains **dominate** and put a lesson counter on Barthimont. Then if there are 2 or more lesson counters on Barthimont, banish her, search your deck for a **specialization** card, put it face up into your arsenal, and shuffle your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV002.width-450.png",
    keywords: [Keyword.Mentor],
    name: "Lady Barthimont",
    rarity: Rarity.Majestic,
    sets: [Release.Promos,Release.HeroDeck],
    type: Type.Mentor,
    typeText: "Brute Mentor",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "skull-crushers",
    functionalText: `Whenever you roll a 5 or 6 on a die, your Brute attacks gain +1{p} this turn.

Whenever you roll a 1 on a die, destroy Skull Crushers.

**Battleworn** *(If you defend with Skull Crushers, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR001.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Skull Crushers",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Equipment,
    typeText: "Brute Equipment – Arms",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "swing-big-red",
    functionalText: `If Swing Big doesn't hit, the defending hero creates a Quicken token when the combat chain closes.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR002.width-450.png",
    keywords: [],
    name: "Swing Big",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "ready-to-roll-blue",
    functionalText: `**Kayo Specialization** *(You may only have Ready to Roll in your deck if your hero is Kayo.)*

If you would roll 1 or more dice this turn, instead roll that many dice plus 1 and ignore the lowest roll.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR003.width-450.png",
    keywords: [Keyword.Specialization,Keyword.GoAgain],
    name: "Ready to Roll",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "rolling-thunder-red",
    functionalText: `Roll a 6 sided die. Your next Brute attack this turn gains +X{p}, where X the number rolled.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR004.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Rolling Thunder",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "high-roller-red",
    functionalText: `**Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*

If you have rolled a 4, 5, or 6 on a die this turn, instead **intimidate** twice.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR005.width-450.png",
    keywords: [Keyword.Intimidate,Keyword.GoAgain],
    name: "High Roller",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "high-roller-yellow",
    functionalText: `**Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*

If you have rolled a 5 or 6 on a die this turn, instead **intimidate** twice.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR006.width-450.png",
    keywords: [Keyword.Intimidate,Keyword.GoAgain],
    name: "High Roller",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "high-roller-blue",
    functionalText: `**Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*

If you have rolled a 6 on a die this turn, instead **intimidate** twice.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR007.width-450.png",
    keywords: [Keyword.Intimidate,Keyword.GoAgain],
    name: "High Roller",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "bare-fangs-red",
    functionalText: `When you attack with Bare Fangs, draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, Bare Fangs gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR008.width-450.png",
    keywords: [],
    name: "Bare Fangs",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "bare-fangs-yellow",
    functionalText: `When you attack with Bare Fangs, draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, Bare Fangs gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR009.width-450.png",
    keywords: [],
    name: "Bare Fangs",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "bare-fangs-blue",
    functionalText: `When you attack with Bare Fangs, draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, Bare Fangs gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR010.width-450.png",
    keywords: [],
    name: "Bare Fangs",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "wild-ride-red",
    functionalText: `When you attack with Wild Ride, draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, Wild Ride gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR011.width-450.png",
    keywords: [],
    name: "Wild Ride",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "wild-ride-yellow",
    functionalText: `When you attack with Wild Ride, draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, Wild Ride gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR012.width-450.png",
    keywords: [],
    name: "Wild Ride",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "wild-ride-blue",
    functionalText: `When you attack with Wild Ride, draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, Wild Ride gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR013.width-450.png",
    keywords: [],
    name: "Wild Ride",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "bad-beats-red",
    functionalText: `Roll a 6 sided die. If the number rolled is a 4, 5, or 6, the next Brute attack action card you play this turn gains +5{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR014.width-450.png",
    keywords: [],
    name: "Bad Beats",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "bad-beats-yellow",
    functionalText: `Roll a 6 sided die. If the number rolled is a 5 or 6, the next Brute attack action card you play this turn gains +5{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR015.width-450.png",
    keywords: [],
    name: "Bad Beats",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action",
  },{
    bannedFormats: [],
    class: Class.Brute,
    identifier: "bad-beats-blue",
    functionalText: `Roll a 6 sided die. If the number rolled is a 6, the next Brute attack action card you play this turn gains +5{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR016.width-450.png",
    keywords: [],
    name: "Bad Beats",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action",
  }];
  