
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
    class: Class.NotClassed,
    identifier: "great-library-of-solana",
    functionalText: `**Legendary** *(You may only have 1 Great Library of Solana in your deck.)*

At the beginning of each end phase, if a hero has 2 or more cards with yellow color strips in their pitch zone, they gain +1{i} until end of turn.

**Action** - Discard 2 cards with yellow color strips: Destroy Great Library of Solana. Any hero may activate this ability. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON000.width-450.png",
    keywords: [Keyword.Legendary],
    name: "Great Library of Solana",
    rarity: Rarity.Fabled,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Landmark",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "vestige-of-sol",
    functionalText: `Whenever you pitch a Light card, if a card has been put into your hero's soul this turn, gain {r}.

**Blade Break** *(If you defend with Vestige of Sol, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB017.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Vestige of Sol",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Equipment,
    typeText: "Light Equipment – Chest",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "halo-of-illumination",
    functionalText: `**Instant** - {r}, destroy Halo of Illumination: Put a card from your hand into your hero's soul. If it's a Light card, draw a card. *(Put the card face up under your hero card.)*

**Spellvoid 2** *(If your hero would be dealt arcane damage, you may destroy Halo of Illumination instead. If you do, prevent 2 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON061.width-450.png",
    keywords: [Keyword.Spellvoid],
    name: "Halo of Illumination",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Light Equipment – Head",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "celestial-cataclysm-yellow",
    functionalText: `As an additional cost to play Celestial Cataclysm, banish 3 cards from your hero's soul.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON062.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Celestial Cataclysm",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "soul-shield-yellow",
    functionalText: `Put Soul Shield into your hero's soul when the combat chain closes. *(Put this card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON063.width-450.png",
    keywords: [],
    name: "Soul Shield",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.DefenseReaction,
    typeText: "Light Defense Reaction",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "soul-food-yellow",
    functionalText: `Put Soul Food and all cards in your hand into your hero's soul. *(Put the cards face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON064.width-450.png",
    keywords: [],
    name: "Soul Food",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "tome-of-divinity-yellow",
    functionalText: `Draw 2 cards.

If a card has been put into your hero's soul this turn, instead draw 3 cards.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON065.width-450.png",
    keywords: [],
    name: "Tome of Divinity",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Light Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "invigorating-light-red",
    functionalText: `When you play Invigorating Light, if there are no cards in your hero's soul, put it into your hero's soul when the combat chain closes. *(Put the card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON066.width-450.png",
    keywords: [],
    name: "Invigorating Light",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "invigorating-light-yellow",
    functionalText: `When you play Invigorating Light, if there are no cards in your hero's soul, put it into your hero's soul when the combat chain closes. *(Put the card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON067.width-450.png",
    keywords: [],
    name: "Invigorating Light",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "invigorating-light-blue",
    functionalText: `When you play Invigorating Light, if there are no cards in your hero's soul, put it into your hero's soul when the combat chain closes. *(Put the card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON068.width-450.png",
    keywords: [],
    name: "Invigorating Light",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "glisten-red",
    functionalText: `Distribute up to four +1{p} counters among any number of weapons you control.

At the beginning of your end phase, remove all +1{p} counters from weapons you control. *(If a permanent is no longer a weapon during your end phase, +1{p} counters on it are not removed.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON069.width-450.png",
    keywords: [],
    name: "Glisten",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Light Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "glisten-yellow",
    functionalText: `Distribute up to three +1{p} counters among any number of weapons you control.

At the beginning of your end phase, remove all +1{p} counters from weapons you control. *(If a permanent is no longer a weapon during your end phase, +1{p} counters on it are not removed.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON070.width-450.png",
    keywords: [],
    name: "Glisten",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Light Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "glisten-blue",
    functionalText: `Distribute up to two +1{p} counters among any number of weapons you control.

At the beginning of your end phase, remove all +1{p} counters from weapons you control. *(If a permanent is no longer a weapon during your end phase, +1{p} counters on it are not removed.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON071.width-450.png",
    keywords: [],
    name: "Glisten",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Light Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "illuminate-red",
    functionalText: `If Illuminate hits, put it into your hero's soul. *(Put this card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON072.width-450.png",
    keywords: [],
    name: "Illuminate",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "illuminate-yellow",
    functionalText: `If Illuminate hits, put it into your hero's soul. *(Put this card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON073.width-450.png",
    keywords: [],
    name: "Illuminate",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "illuminate-blue",
    functionalText: `If Illuminate hits, put it into your hero's soul. *(Put this card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON074.width-450.png",
    keywords: [],
    name: "Illuminate",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "impenetrable-belief-red",
    functionalText: `If 3 or more cards have been put into an opposing hero's banished zone this turn, Impenetrable Belief gains +2{d} while defending.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON075.width-450.png",
    keywords: [],
    name: "Impenetrable Belief",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "impenetrable-belief-yellow",
    functionalText: `If 3 or more cards have been put into an opposing hero's banished zone this turn, Impenetrable Belief gains +2{d} while defending.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON076.width-450.png",
    keywords: [],
    name: "Impenetrable Belief",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "impenetrable-belief-blue",
    functionalText: `If 3 or more cards have been put into an opposing hero's banished zone this turn, Impenetrable Belief gains +2{d} while defending.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON077.width-450.png",
    keywords: [],
    name: "Impenetrable Belief",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "rising-solartide-red",
    functionalText: `If Rising Solartide hits, put it into your hero's soul. *(Put this card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON078.width-450.png",
    keywords: [],
    name: "Rising Solartide",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "rising-solartide-yellow",
    functionalText: `If Rising Solartide hits, put it into your hero's soul. *(Put this card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON079.width-450.png",
    keywords: [],
    name: "Rising Solartide",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "rising-solartide-blue",
    functionalText: `If Rising Solartide hits, put it into your hero's soul. *(Put this card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON080.width-450.png",
    keywords: [],
    name: "Rising Solartide",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "seek-enlightenment-red",
    functionalText: `The next attack action card you play this turn gains +3{p} and "If this hits, put it into your hero's soul." *(Put the card face up under your hero card.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON081.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Seek Enlightenment",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "seek-enlightenment-yellow",
    functionalText: `The next attack action card you play this turn gains +2{p} and "If this hits, put it into your hero's soul." *(Put the card face up under your hero card.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON082.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Seek Enlightenment",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "seek-enlightenment-blue",
    functionalText: `The next attack action card you play this turn gains +1{p} and "If this hits, put it into your hero's soul." *(Put the card face up under your hero card.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON083.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Seek Enlightenment",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "blinding-beam-red",
    functionalText: `Blinding Beam cost {r} less to play if it targets a Shadow Card.

Target attacking or defending attack action card gets -3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON084.width-450.png",
    keywords: [],
    name: "Blinding Beam",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Light Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "blinding-beam-yellow",
    functionalText: `Blinding Beam cost {r} less to play if it targets a Shadow Card.

Target attacking or defending attack action card gets -2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON085.width-450.png",
    keywords: [],
    name: "Blinding Beam",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Light Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "blinding-beam-blue",
    functionalText: `Blinding Beam cost {r} less to play if it targets a Shadow Card.

Target attacking or defending attack action card gets -1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON086.width-450.png",
    keywords: [],
    name: "Blinding Beam",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Light Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "ray-of-hope-yellow",
    functionalText: `Attacks you control have +1{p} while attacking a Shadow hero this turn.

If you have less {h} than an opposing Shadow hero, put {name} into your hero's soul. *(Put this card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS044.width-450.png",
    keywords: [],
    name: "Ray of Hope",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Instant,
    typeText: "Light Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "carrion-husk",
    functionalText: `If you defend with Carrion Husk, banish it when the combat chain closes.

At the start of your turn, if you have 13 or less {h}, banish Carrion Husk.

**Blood Debt** *(At the beginning of your end phase, if Carrion Husk is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB018.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Carrion Husk",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Equipment,
    typeText: "Shadow, Equipment, Chest",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "ebon-fold",
    functionalText: `**Instant** - {r}, destroy Ebon Fold: Banish a card from your hand. If it's a Shadow card, draw a card.

**Spellvoid 2** *(If your hero would be dealt arcane damage, you may destroy Ebon Fold instead. If you do, prevent 2 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB072.width-450.png",
    keywords: [Keyword.Spellvoid],
    name: "Ebon Fold",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Equipment,
    typeText: "Shadow, Equipment, Head",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "doomsday-blue",
    functionalText: `**Legendary Levia Specialization** *(You may only have 1 Doomsday in your deck and only if your hero is Levia.)*

Play Doomsday only if there are 6 or more cards with blood debt in your banished zone.

Create a Blasmophet, the Soul Harvester token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON189.width-450.png",
    keywords: [Keyword.Legendary,Keyword.Specialization],
    name: "Doomsday",
    rarity: Rarity.Legendary,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Shadow Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "eclipse-blue",
    functionalText: `**Legendary Chane Specialization** *(You may only have 1 Eclipse in your deck and only if your hero is Chane.)*

Play Eclipse only if you have played 6 or more cards with **blood debt** this turn. If you have, you may play Eclipse from your banished zone.

Create an Ursur, the Soul Reaper token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON190.width-450.png",
    keywords: [Keyword.Legendary,Keyword.Specialization],
    name: "Eclipse",
    rarity: Rarity.Legendary,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Shadow Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "mutated-mass-blue",
    functionalText: `You may play Mutated Mass from your banished zone.

Mutated Mass's {p} and {d} is equal to twice the number of cards in your pitch zone with different costs.

**Blood Debt** *(At the beginning of your end phase, if Mutated Mass is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON191.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Mutated Mass",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "guardian-of-the-shadowrealm-red",
    functionalText: `**Action** - {r}{r}: Return Guardian of the Shadowrealm from your banished zone into your hand. Activate this ability only while Guardian of the Shadowrealm is in your banished zone.

**Blood Debt** *(At the beginning of your end phase, if Guardian of the Shadowrealm is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON192.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Guardian of the Shadowrealm",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.DefenseReaction,
    typeText: "Shadow Defense Reaction",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "shadow-puppetry-red",
    functionalText: `The next attack action card you play this turn gains +1 {p}, **go again** and "If this attack hits, look at the top card of your deck. You may banish it.”

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON193.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Shadow Puppetry",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "tome-of-torment-red",
    functionalText: `You may play Tome of Torment from your banished zone.

Draw a card.

**Blood Debt**  *(At the beginning of your end phase, if Tome of Torment is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON194.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Tome of Torment",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "consuming-aftermath-red",
    functionalText: `As an additional cost to play Consuming Aftermath, you may banish a card from your hand. If a Shadow card is banished this way, Consuming Aftermath gains **dominate.** *(The defending hero can't defend Consuming Aftermath with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON195.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Consuming Aftermath",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "consuming-aftermath-yellow",
    functionalText: `As an additional cost to play Consuming Aftermath, you may banish a card from your hand. If a Shadow card is banished this way, Consuming Aftermath gains **dominate.** *(The defending hero can't defend Consuming Aftermath with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON196.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Consuming Aftermath",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "consuming-aftermath-blue",
    functionalText: `As an additional cost to play Consuming Aftermath, you may banish a card from your hand. If a Shadow card is banished this way, Consuming Aftermath gains **dominate.** *(The defending hero can't defend Consuming Aftermath with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON197.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Consuming Aftermath",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "soul-harvest-blue",
    functionalText: `**Legendary Levia Specialization** *(You may only have 1 Soul Harvest in your deck and only if your hero is Levia.)*

As an additional cost to play Soul Harvest, banish 6 cards from your graveyard. It gains +1{p} for each card with **blood debt** banished this way.

If Soul Harvest hits a hero, they banish all cards in their soul and lose {h} equal to the number of cards banished this way.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON198.width-450.png",
    keywords: [Keyword.Legendary,Keyword.Specialization],
    name: "Soul Harvest",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "soul-reaping-red",
    functionalText: `**Legendary Chane Specialization** *(You may only have 1 Soul Reaping in your deck and only if your hero is Chane.)*

You may banish 1 or more cards from your hand rather than pay Soul Reaping's {r} cost. If you do, gain {r} for each card with **blood debt** banished this way.

While Soul Reaping is attacking a hero with 1 or more cards in their soul, it has go again.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON199.width-450.png",
    keywords: [Keyword.Legendary,Keyword.Specialization,Keyword.GoAgain],
    name: "Soul Reaping",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "howl-from-beyond-red",
    functionalText: `You may play Howl from Beyond from your banished zone.

The next attack action card you play this turn gains +3{p}.

**Go again**

**Blood Debt** *(At the beginning of your end phase, if Howl from Beyond is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON200.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.BloodDebt],
    name: "Howl from Beyond",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "howl-from-beyond-yellow",
    functionalText: `You may play Howl from Beyond from your banished zone.

The next attack action card you play this turn gains +2{p}.

**Go again**

**Blood Debt** *(At the beginning of your end phase, if Howl from Beyond is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON201.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.BloodDebt],
    name: "Howl from Beyond",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "howl-from-beyond-blue",
    functionalText: `You may play Howl from Beyond from your banished zone.

The next attack action card you play this turn gains +1{p}.

**Go again**

**Blood Debt** *(At the beginning of your end phase, if Howl from Beyond is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON202.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.BloodDebt],
    name: "Howl from Beyond",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "ghostly-visit-red",
    functionalText: `You may play Ghostly Visit from your banished zone.

**Blood Debt** *(At the beginning of your end phase, if Ghostly Visit is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON203.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Ghostly Visit",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "ghostly-visit-yellow",
    functionalText: `You may play Ghostly Visit from your banished zone.

**Blood Debt** *(At the beginning of your end phase, if Ghostly Visit is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON204.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Ghostly Visit",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "ghostly-visit-blue",
    functionalText: `You may play Ghostly Visit from your banished zone.

**Blood Debt** *(At the beginning of your end phase, if Ghostly Visit is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON205.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Ghostly Visit",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "lunartide-plunderer-red",
    functionalText: `If Lunartide Plunderer hits a hero, banish Lunartide Plunderer and a card from their soul.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON206.width-450.png",
    keywords: [],
    name: "Lunartide Plunderer",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "lunartide-plunderer-yellow",
    functionalText: `If Lunartide Plunderer hits a hero, banish Lunartide Plunderer and a card from their soul.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON207.width-450.png",
    keywords: [],
    name: "Lunartide Plunderer",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "lunartide-plunderer-blue",
    functionalText: `If Lunartide Plunderer hits a hero, banish Lunartide Plunderer and a card from their soul.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON208.width-450.png",
    keywords: [],
    name: "Lunartide Plunderer",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "void-wraith-red",
    functionalText: `You may play Void Wraith from your banished zone.

**Blood Debt** *(At the beginning of your end phase, if Void Wraith is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON209.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Void Wraith",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "void-wraith-yellow",
    functionalText: `You may play Void Wraith from your banished zone.

**Blood Debt** *(At the beginning of your end phase, if Void Wraith is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON210.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Void Wraith",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "void-wraith-blue",
    functionalText: `You may play Void Wraith from your banished zone.

**Blood Debt** *(At the beginning of your end phase, if Void Wraith is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON211.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Void Wraith",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "spew-shadow-red",
    functionalText: `Choose an attack action card with cost 2 or less in your banished zone. You may play it this turn. If it attacks a Light hero, it gains +2{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON212.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Spew Shadow",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "spew-shadow-yellow",
    functionalText: `Choose an attack action card with cost 1 or less in your banished zone. You may play it this turn. If it attacks a Light hero, it gains +2{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON213.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Spew Shadow",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "spew-shadow-blue",
    functionalText: `Choose an attack action card with cost 0 or less in your banished zone. You may play it this turn. If it attacks a Light hero, it gains +2{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON214.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Spew Shadow",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "blood-tribute-red",
    functionalText: `**Opt 3**, then banish the top card of your deck. (Look at the top 3 cards of your deck. You may put them on the top and/or bottom in any order.)`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON215.width-450.png",
    keywords: [Keyword.Opt],
    name: "Blood Tribute",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Shadow Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "blood-tribute-yellow",
    functionalText: `**Opt 2**, then banish the top card of your deck. (Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON216.width-450.png",
    keywords: [Keyword.Opt],
    name: "Blood Tribute",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Shadow Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "blood-tribute-blue",
    functionalText: `**Opt 1**, then banish the top card of your deck. (Look at the top card of your deck. You may put it on the bottom.)`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON217.width-450.png",
    keywords: [Keyword.Opt],
    name: "Blood Tribute",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Shadow Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "eclipse-existence-blue",
    functionalText: `Until end of turn, whenever an attack hits a Light hero, you may banish a card from their soul. If they do, they lose 1{h}.

If you have more {h} than an opposing Light hero, you may banish an action card from your graveyard.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS045.width-450.png",
    keywords: [],
    name: "Eclipse Existence",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Instant,
    typeText: "Shadow Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "blasmophet-the-soul-harvester",
    functionalText: `*(Allies can be attacked, can't be defended with {d}, and are destroyed when they have taken damage equal to their {h}. At end of turn, heal all damage dealt to Blasmophet.)*

**Once per Turn Action** - 0: **Attack**

Whenever Blasmophet attacks, you may banish a Shadow card from your hand. If you do, the defending hero banishes a card from their soul.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB021.width-450.png",
    keywords: [],
    name: "Blasmophet, the Soul Harvester",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Token,
    typeText: "Shadow Token – Demon Ally",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "ursur-the-soul-reaper",
    functionalText: `*(Allies can be attacked, can't be defended with {d}, and are destroyed when they have taken damage equal to their {h}. At end of turn, heal all damage dealt to Ursur.)*

**Once per Turn Action** - 0: **Attack**

While Ursur is attacking a hero with 1 or more cards in their soul, the attack has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB022.width-450.png",
    keywords: [],
    name: "Ursur, the Soul Reaper",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Token,
    typeText: "Shadow Token – Demon Ally",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "korshem-crossroad-of-elements",
    functionalText: `**Legendary** *(You may only have 1 Korshem, Crossroads of the Elements in your deck.)*

**Go again**

Whenever a hero reveals 1 or more cards, they choose 1; Gain {r}, or gain 1{h}, or their next attack this turn gains +1{p}, or the next action card they defend with this turn gains +1{d}.

At the beginning of the end phase, if no hero has gained {r} or {h} from a card effect and no card or token controlled by a hero has had {p} or {d} increased this turn, destroy Korshem, Crossroads of the Elements.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE000_vertical.width-450.png",
    keywords: [Keyword.Legendary,Keyword.GoAgain],
    name: "Korshem, Crossroad of Elements",
    rarity: Rarity.Fabled,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Action – Landmark",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "fulminate-yellow",
    functionalText: `**Earth and/or Lightning Fusion** *(As an additional cost to play Fulminate, you may reveal an Earth and/or Lightning card from your hand.)*

If Fulminate was **fused** with an Earth card, attack action cards you control gain +3{p} this turn.

If Fulminate was **fused** with a Lightning card, attack action cards you control gain **go again** this turn.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE091.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Fulminate",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "flashfreeze-red",
    functionalText: `**Ice and/or Lightning Fusion** *(As an additional cost to play Flashfreeze, you may reveal an Ice and/or Lightning card from your hand.)*

If Flashfreeze was **fused** with an Ice card, attacks you control this turn gain "When you attack with this, it gains **dominate**, unless the defending hero pays {r}{r}."

If Flashfreeze was **fused** with a Lightning card, attacks you control this turn gain "If this hits a hero, deal 3 damage to them."

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE092.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Flashfreeze",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "exposed-to-the-elements-blue",
    functionalText: `**Earth and/or Ice Fusion** *(As an additional cost to play Exposed to the Elements, you may reveal an Earth and/or Ice card from your hand.)*

If Exposed to the Elements was **fused** with an Earth card, put a -1{d} counter on target equipment.

If Exposed to the Elements was **fused** with an Ice card, destroy an equipment with 0{d} controlled by target hero unless they pay {r}{r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE093.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Exposed to the Elements",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Instant,
    typeText: "Elemental Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "entwine-earth-red",
    functionalText: `**Earth Fusion** *(As an additional cost to play Entwine Earth, you may reveal an Earth card from your hand.)*

If Entwine Earth was **fused**, it gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE094.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Entwine Earth",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "entwine-earth-yellow",
    functionalText: `**Earth Fusion** *(As an additional cost to play Entwine Earth, you may reveal an Earth card from your hand.)*

If Entwine Earth was **fused**, it gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE095.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Entwine Earth",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "entwine-earth-blue",
    functionalText: `**Earth Fusion** *(As an additional cost to play Entwine Earth, you may reveal an Earth card from your hand.)*

If Entwine Earth was **fused**, it gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE096.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Entwine Earth",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "entwine-ice-red",
    functionalText: `**Ice Fusion** *(As an additional cost to play Entwine Ice, you may reveal an Ice card from your hand.)*

If Entwine Ice was **fused**, it gains **dominate.** *(The defending hero can't defend Entwine Ice with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE097.width-450.png",
    keywords: [Keyword.Fusion,Keyword.Dominate],
    name: "Entwine Ice",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "entwine-ice-yellow",
    functionalText: `**Ice Fusion** *(As an additional cost to play Entwine Ice, you may reveal an Ice card from your hand.)*

If Entwine Ice was **fused**, it gains **dominate.** *(The defending hero can't defend Entwine Ice with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE098.width-450.png",
    keywords: [Keyword.Fusion,Keyword.Dominate],
    name: "Entwine Ice",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "entwine-ice-blue",
    functionalText: `**Ice Fusion** *(As an additional cost to play Entwine Ice, you may reveal an Ice card from your hand.)*

If Entwine Ice was **fused**, it gains **dominate.** *(The defending hero can't defend Entwine Ice with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE099.width-450.png",
    keywords: [Keyword.Fusion,Keyword.Dominate],
    name: "Entwine Ice",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "entwine-lightning-red",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Entwine Lightning, you may reveal a Lightning card from your hand.)*

If Entwine Lightning was **fused**, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE100.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Entwine Lightning",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "entwine-lightning-yellow",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Entwine Lightning, you may reveal a Lightning card from your hand.)*

If Entwine Lightning was **fused**, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE101.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Entwine Lightning",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "entwine-lightning-blue",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Entwine Lightning, you may reveal a Lightning card from your hand.)*

If Entwine Lightning was **fused**, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE102.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Entwine Lightning",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "invigorate-red",
    functionalText: `The next attack you **fuse** this turn gains +4{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS080.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Invigorate",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "invigorate-yellow",
    functionalText: `The next attack you **fuse** this turn gains +3{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS081.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Invigorate",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "invigorate-blue",
    functionalText: `The next attack you **fuse** this turn gains +2{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS082.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Invigorate",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "rejuvenate-red",
    functionalText: `Gain 3{h}

If you've **fused** this turn, you may play Rejuvenate as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE106.width-450.png",
    keywords: [],
    name: "Rejuvenate",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "rejuvenate-yellow",
    functionalText: `Gain 2{h}

If you've **fused** this turn, you may play Rejuvenate as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE107.width-450.png",
    keywords: [],
    name: "Rejuvenate",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "rejuvenate-blue",
    functionalText: `Gain 1{h}

If you've **fused** this turn, you may play Rejuvenate as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE108.width-450.png",
    keywords: [],
    name: "Rejuvenate",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "embodiment-of-earth",
    functionalText: `‘Non-attack' action cards you control have +1{d} while defending.

At the beginning of your action phase, destroy Embodiment of Earth.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE109.width-450.png",
    keywords: [],
    name: "Embodiment of Earth",
    rarity: Rarity.Token,
    sets: [Release.TalesOfAria],
    type: Type.Token,
    typeText: "Elemental Token – Aura",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "embodiment-of-lightning",
    functionalText: `When you play an attack action card, destroy Embodiment of Lightning and the attack gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE110.width-450.png",
    keywords: [],
    name: "Embodiment of Lightning",
    rarity: Rarity.Token,
    sets: [Release.TalesOfAria],
    type: Type.Token,
    typeText: "Elemental Token – Aura",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "frostbite",
    functionalText: `Cards and activated abilities you control cost an additional {r}.

At the beginning of your end phase or when you play a card or activate an ability, destroy Frostbite.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE111.width-450.png",
    keywords: [],
    name: "Frostbite",
    rarity: Rarity.Token,
    sets: [Release.TalesOfAria,Release.Everfest],
    type: Type.Token,
    typeText: "Elemental Token – Aura",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "pulse-of-volthaven-red",
    functionalText: `**Legendary** *(You may only have 1 Pulse of Volthaven in your deck.)*

Your next Ice, Lightning, or Elemental attack this turn gains +4{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE112.width-450.png",
    keywords: [Keyword.Legendary],
    name: "Pulse of Volthaven",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Instant,
    typeText: "Lightning Ice Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "pulse-of-candlehold-yellow",
    functionalText: `**Legendary** *(You may only have 1 Pulse of Candlehold in your deck.)*

Put up to 2 target Earth, Lightning and/or Elemental action cards from your graveyard on top of your deck. Banish Pulse of Candlehold.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE113.width-450.png",
    keywords: [Keyword.Legendary,Keyword.GoAgain],
    name: "Pulse of Candlehold",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Lightning Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "pulse-of-isenloft-blue",
    functionalText: `**Legendary** *(You may only have 1 Pulse of Isenloft in your deck.)*

Earth, Ice, and Elemental action cards have +1{d} while defending this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE114.width-450.png",
    keywords: [Keyword.Legendary],
    name: "Pulse of Isenloft",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.DefenseReaction,
    typeText: "Ice Earth Defense Reaction",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "crown-of-seeds",
    functionalText: `**Once per Turn Instant** - {r}, put a face down card from your arsenal on the bottom of your deck: Draw a card and prevent the next 1 damage that would be dealt to your hero this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB052.width-450.png",
    keywords: [],
    name: "Crown of Seeds",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Equipment,
    typeText: "Earth Equipment – Head",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "plume-of-evergrowth",
    functionalText: `**Instant** - {r}{r}{r}, destroy Plume of Evergrowth: Return target Earth action card or Earth instant card from your graveyard to your hand.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE116.width-450.png",
    keywords: [],
    name: "Plume of Evergrowth",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Equipment,
    typeText: "Earth Equipment – Head",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "channel-mount-heroic-red",
    functionalText: `**Go again**

Attack action cards you control have +3{p}.

**Channel Earth** - At the beginning of your end phase, put an flow counter on Channel Mount Heroic then destroy it unless you put an Earth card from your pitch zone on the bottom of your deck for each flow counter on it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE117.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.Channel],
    name: "Channel Mount Heroic",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action – Aura",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "tome-of-harvests-blue",
    functionalText: `As an additional cost to play Tome of Harvests, put a card from your arsenal on the bottom of your deck.

Draw 3 cards.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE118.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Tome of Harvests",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "evergreen-red",
    functionalText: `If Evergreen is played from arsenal, put it on the bottom of your deck when the combat chain closes.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE119.width-450.png",
    keywords: [],
    name: "Evergreen",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "evergreen-yellow",
    functionalText: `If Evergreen is played from arsenal, put it on the bottom of your deck when the combat chain closes.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE120.width-450.png",
    keywords: [],
    name: "Evergreen",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "evergreen-blue",
    functionalText: `If Evergreen is played from arsenal, put it on the bottom of your deck when the combat chain closes.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE121.width-450.png",
    keywords: [],
    name: "Evergreen",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "weave-earth-red",
    functionalText: `The next Earth or Elemental attack action card you play this turn gains +3{p}.

If it's **fused**, instead it gains +4{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE122.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Weave Earth",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "weave-earth-yellow",
    functionalText: `The next Earth or Elemental attack action card you play this turn gains +2{p}.

If it's **fused**, instead it gains +3{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE123.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Weave Earth",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "weave-earth-blue",
    functionalText: `The next Earth or Elemental attack action card you play this turn gains +1{p}.

If it's **fused**, instead it gains +2{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE124.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Weave Earth",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "summerwood-shelter-red",
    functionalText: `Target defending Earth or Elemental action card gains +4{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE125.width-450.png",
    keywords: [],
    name: "Summerwood Shelter",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Instant,
    typeText: "Earth Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "summerwood-shelter-yellow",
    functionalText: `Target defending Earth or Elemental action card gains +3{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE126.width-450.png",
    keywords: [],
    name: "Summerwood Shelter",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Instant,
    typeText: "Earth Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "summerwood-shelter-blue",
    functionalText: `Target defending Earth or Elemental action card gains +2{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE127.width-450.png",
    keywords: [],
    name: "Summerwood Shelter",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Instant,
    typeText: "Earth Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "autumns-touch-red",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE128.width-450.png",
    keywords: [],
    name: "Autumn's Touch",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "autumns-touch-yellow",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE129.width-450.png",
    keywords: [],
    name: "Autumn's Touch",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "autumns-touch-blue",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE130.width-450.png",
    keywords: [],
    name: "Autumn's Touch",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "break-ground-red",
    functionalText: `When you attack with Break Ground, you may put a card from your arsenal on the bottom of your deck. If you do, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE131.width-450.png",
    keywords: [],
    name: "Break Ground",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "break-ground-yellow",
    functionalText: `When you attack with Break Ground, you may put a card from your arsenal on the bottom of your deck. If you do, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE132.width-450.png",
    keywords: [],
    name: "Break Ground",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "break-ground-blue",
    functionalText: `When you attack with Break Ground, you may put a card from your arsenal on the bottom of your deck. If you do, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE133.width-450.png",
    keywords: [],
    name: "Break Ground",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "burgeoning-red",
    functionalText: `If Burgeoning is played from arsenal, it gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS069.width-450.png",
    keywords: [],
    name: "Burgeoning",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "burgeoning-yellow",
    functionalText: `If Burgeoning is played from arsenal, it gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS070.width-450.png",
    keywords: [],
    name: "Burgeoning",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "burgeoning-blue",
    functionalText: `If Burgeoning is played from arsenal, it gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS071.width-450.png",
    keywords: [],
    name: "Burgeoning",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "earthlore-surge-red",
    functionalText: `The next attack action card you play this turn gains +5{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE137.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Earthlore Surge",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "earthlore-surge-yellow",
    functionalText: `The next attack action card you play this turn gains +4{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE138.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Earthlore Surge",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "earthlore-surge-blue",
    functionalText: `The next attack action card you play this turn gains +3{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE139.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Earthlore Surge",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "sow-tomorrow-red",
    functionalText: `Put target Earth or Elemental action card with cost 0 or greater from your graveyard on the bottom of your deck. Banish Sow Tomorrow.

If Sow Tomorrow is played from arsenal, draw a card.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE140.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sow Tomorrow",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "sow-tomorrow-yellow",
    functionalText: `Put target Earth or Elemental action card with cost 1 or greater from your graveyard on the bottom of your deck. Banish Sow Tomorrow.

If Sow Tomorrow is played from arsenal, draw a card.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE141.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sow Tomorrow",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "sow-tomorrow-blue",
    functionalText: `Put target Earth or Elemental action card with cost 2 or greater from your graveyard on the bottom of your deck. Banish Sow Tomorrow.

If Sow Tomorrow is played from arsenal, draw a card.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE142.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sow Tomorrow",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "amulet-of-earth",
    functionalText: `**Go again**

**Instant** - Destroy Amulet of Earth: Attack action cards you control gain +1{p} and +1{d} this turn. Activate this ability only if you have Earth **fused** this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS063.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Amulet of Earth",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Action,
    typeText: "Earth Action – Item",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "heart-of-ice",
    functionalText: `**Once per Turn Action** - {r}: Cards and activated abilities cost opposing heroes additional {r} this turn. **Go again**

**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*

**Blade Break** *(If you defend with Heart of Ice, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB053.width-450.png",
    keywords: [Keyword.ArcaneBarrier,Keyword.BladeBreak],
    name: "Heart of Ice",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Equipment,
    typeText: "Ice Equipment – Chest",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "coat-of-frost",
    functionalText: `**Action** - Destroy Coat of Frost: Create a Frostbite token under target hero's control. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE145.width-450.png",
    keywords: [],
    name: "Coat of Frost",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Equipment,
    typeText: "Ice Equipment – Chest",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "channel-lake-frigid-blue",
    functionalText: `**Go again**

Cards and activated abilities cost opposing heroes an additional {r}.

**Channel Ice** - At the beginning of your end phase, put a flow counter on Channel Lake Frigid then destroy it unless you put an Ice card from your pitch zone on the bottom of your deck for each flow counter on it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE146.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.Channel],
    name: "Channel Lake Frigid",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action – Aura",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "blizzard-blue",
    functionalText: `Target attack loses and can't gain **go again** unless the attacking hero pays {r}{r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE147.width-450.png",
    keywords: [],
    name: "Blizzard",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Instant,
    typeText: "Ice Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "frost-fang-red",
    functionalText: `If Frost Fang hits a hero, they discard a card unless they pay {r}{r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE148.width-450.png",
    keywords: [],
    name: "Frost Fang",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "frost-fang-yellow",
    functionalText: `If Frost Fang hits a hero, they discard a card unless they pay {r}{r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE149.width-450.png",
    keywords: [],
    name: "Frost Fang",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "frost-fang-blue",
    functionalText: `If Frost Fang hits a hero, they discard a card unless they pay {r}{r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE150.width-450.png",
    keywords: [],
    name: "Frost Fang",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "ice-quake-red",
    functionalText: `Your next attack this turn gains +3{p}.

Whenever an attack hits a hero this turn, create a Frostbite token under their control.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE151.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Ice Quake",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "ice-quake-yellow",
    functionalText: `Your next attack this turn gains +2{p}.

Whenever an attack hits a hero this turn, create a Frostbite token under their control.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE152.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Ice Quake",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "ice-quake-blue",
    functionalText: `Your next attack this turn gains +1{p}.

Whenever an attack hits a hero this turn, create a Frostbite token under their control.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE153.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Ice Quake",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "weave-ice-red",
    functionalText: `The next Ice or Elemental attack action card you play this turn gains +3{p}.

If it's **fused**, it gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE154.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Weave Ice",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "weave-ice-yellow",
    functionalText: `The next Ice or Elemental attack action card you play this turn gains +2{p}.

If it's **fused**, it gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE155.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Weave Ice",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "weave-ice-blue",
    functionalText: `The next Ice or Elemental attack action card you play this turn gains +1{p}.

If it's **fused**, it gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE156.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Weave Ice",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "icy-encounter-red",
    functionalText: `If Icy Encounter hits a hero, create a Frostbite token under their control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE157.width-450.png",
    keywords: [],
    name: "Icy Encounter",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "icy-encounter-yellow",
    functionalText: `If Icy Encounter hits a hero, create a Frostbite token under their control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE158.width-450.png",
    keywords: [],
    name: "Icy Encounter",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "icy-encounter-blue",
    functionalText: `If Icy Encounter hits a hero, create a Frostbite token under their control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE159.width-450.png",
    keywords: [],
    name: "Icy Encounter",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "winters-grasp-red",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE160.width-450.png",
    keywords: [],
    name: "Winter's Grasp",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "winters-grasp-yellow",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE161.width-450.png",
    keywords: [],
    name: "Winter's Grasp",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "winters-grasp-blue",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE162.width-450.png",
    keywords: [],
    name: "Winter's Grasp",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "chill-to-the-bone-red",
    functionalText: `The next time an Ice or Elemental attack hits a hero this turn, create 3 Frostbite tokens under their control.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE163.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Chill to the Bone",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "chill-to-the-bone-yellow",
    functionalText: `The next time an Ice or Elemental attack hits a hero this turn, create 2 Frostbite tokens under their control.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE164.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Chill to the Bone",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "chill-to-the-bone-blue",
    functionalText: `The next time an Ice or Elemental attack hits a hero this turn, create a Frostbite token under their control.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE165.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Chill to the Bone",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "polar-blast-red",
    functionalText: `Target opposing hero may pay {r}{r}{r}. If they don't your next attack this turn gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

If Polar Blast is played from arsenal, draw a card.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS072.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Polar Blast",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "polar-blast-yellow",
    functionalText: `Target opposing hero may pay {r}{r}. If they don't your next attack this turn gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

If Polar Blast is played from arsenal, draw a card.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS073.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Polar Blast",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "polar-blast-blue",
    functionalText: `Target opposing hero may pay {r}. If they don't your next attack this turn gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

If Polar Blast is played from arsenal, draw a card.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS074.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Polar Blast",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "winters-bite-red",
    functionalText: `Target hero discards a card unless they pay {r}{r}{r}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE169.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Winter's Bite",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "winters-bite-yellow",
    functionalText: `Target hero discards a card unless they pay {r}{r}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE170.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Winter's Bite",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "winters-bite-blue",
    functionalText: `Target hero discards a card unless they pay {r}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE171.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Winter's Bite",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "amulet-of-ice-blue",
    functionalText: `**Go again**

**Instant** - Destroy Amulet of Ice: Target hero discards a card unless they pay {r}{r}. Activate this ability only if you have Ice **fused** this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS064.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Amulet of Ice",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Action,
    typeText: "Ice Action – Item",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "shock-charmers",
    functionalText: `**Instant** - {r}{r}: The next time an attack action card you control hits a hero this turn, it deals 1 damage to them.

**Spellvoid 2** *(If your hero would be dealt arcane damage, you may destroy Shock Charmers instead. If you do, prevent 2 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB054.width-450.png",
    keywords: [Keyword.Spellvoid],
    name: "Shock Charmers",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Equipment,
    typeText: "Lightning Equipment – Arms",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "mark-of-lightning",
    functionalText: `Whenever a Lightning or Elemental attack you control is defended by a card from hand, you may destroy Mark of Lightning. If you do, the attack deals 1 damage to the defending hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE174.width-450.png",
    keywords: [],
    name: "Mark of Lightning",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Equipment,
    typeText: "Lightning Equipment – Arms",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "channel-thunder-steppe-yellow",
    functionalText: `**Go again**

Whenever you play an action card, you may pay {r}. If you do, it gains **go again.**

**Channel Lightning** - At the beginning of your end phase, put a flow counter on Channel Thunder Steppe then destroy it unless you put a Lightning card from your pitch zone on the bottom of your deck for each flow counter on it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE175.width-450.png",
    keywords: [Keyword.GoAgain,Keyword.Channel],
    name: "Channel Thunder Steppe",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action – Aura",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "blink-blue",
    functionalText: `Gain 1 action point. *(You can only gain action points during your action phase.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE176.width-450.png",
    keywords: [],
    name: "Blink",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Instant,
    typeText: "Lightning Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "flash-red",
    functionalText: `The next action card you play this turn with cost 0 or greater gains **go again.**

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE177.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Flash",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "flash-yellow",
    functionalText: `The next action card you play this turn with cost 1 or greater gains **go again.**

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE178.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Flash",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "flash-blue",
    functionalText: `The next action card you play this turn with cost 2 or greater gains **go again.**

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE179.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Flash",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "weave-lightning-red",
    functionalText: `The next Lightning or Elemental attack action card you play this turn gains +3{p}. If it's **fused**, it gains **go again.**

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS075.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Weave Lightning",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "weave-lightning-yellow",
    functionalText: `The next Lightning or Elemental attack action card you play this turn gains +2{p}. If it's **fused**, it gains **go again.**

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS076.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Weave Lightning",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "weave-lightning-blue",
    functionalText: `The next Lightning or Elemental attack action card you play this turn gains +1{p}. If it's **fused**, it gains **go again.**

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS077.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Weave Lightning",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "lightning-press-red",
    functionalText: `Target attack action card with cost 1 or less gains +3{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE183.width-450.png",
    keywords: [],
    name: "Lightning Press",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Instant,
    typeText: "Lightning Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "lightning-press-yellow",
    functionalText: `Target attack action card with cost 1 or less gains +2{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE184.width-450.png",
    keywords: [],
    name: "Lightning Press",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Instant,
    typeText: "Lightning Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "lightning-press-blue",
    functionalText: `Target attack action card with cost 1 or less gains +1{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE185.width-450.png",
    keywords: [],
    name: "Lightning Press",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Instant,
    typeText: "Lightning Instant",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "ball-lightning-red",
    functionalText: `Whenever a Lightning or Elemental action card would deal damage this combat chain, instead it deals that much damage plus 1.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE186.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Ball Lightning",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "ball-lightning-yellow",
    functionalText: `Whenever a Lightning or Elemental action card would deal damage this combat chain, instead it deals that much damage plus 1.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE187.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Ball Lightning",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "ball-lightning-blue",
    functionalText: `Whenever a Lightning or Elemental action card would deal damage this combat chain, instead it deals that much damage plus 1.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE188.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Ball Lightning",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "lightning-surge-red",
    functionalText: `If Lightning Surge is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE189.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Lightning Surge",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "lightning-surge-yellow",
    functionalText: `If Lightning Surge is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE190.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Lightning Surge",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "lightning-surge-blue",
    functionalText: `If Lightning Surge is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE191.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Lightning Surge",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "heavens-claws-red",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE192.width-450.png",
    keywords: [],
    name: "Heaven's Claws",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "heavens-claws-yellow",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE193.width-450.png",
    keywords: [],
    name: "Heaven's Claws",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "heavens-claws-blue",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE194.width-450.png",
    keywords: [],
    name: "Heaven's Claws",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "shock-striker-red",
    functionalText: `**Once per Turn Instant** - {r}{r}: Shock Striker gains "If Shock Striker hits a hero, deal 1 damage to them."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE195.width-450.png",
    keywords: [],
    name: "Shock Striker",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "shock-striker-yellow",
    functionalText: `**Once per Turn Instant** - {r}{r}: Shock Striker gains "If Shock Striker hits a hero, deal 1 damage to them."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE196.width-450.png",
    keywords: [],
    name: "Shock Striker",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "shock-striker-blue",
    functionalText: `**Once per Turn Instant** - {r}{r}: Shock Striker gains "If Shock Striker hits a hero, deal 1 damage to them."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE197.width-450.png",
    keywords: [],
    name: "Shock Striker",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "electrify-red",
    functionalText: `The next time an attack action card hits a hero this turn, it deals 3 damage to them.

If Electrify is played from arsenal, draw a card.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE198.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Electrify",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "electrify-yellow",
    functionalText: `The next time an attack action card hits a hero this turn, it deals 2 damage to them.

If Electrify is played from arsenal, draw a card.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE199.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Electrify",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "electrify-blue",
    functionalText: `The next time an attack action card hits a hero this turn, it deals 1 damage to them.

If Electrify is played from arsenal, draw a card.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB048.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Electrify",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action",
  },{
    bannedFormats: [],
    class: Class.NotClassed,
    identifier: "amulet-of-lightning-blue",
    functionalText: `**Go again**

**Instant** - Destroy Amulet of Lightning: Target action card gains **go again.** Activate this ability only if you have Lightning **fused** this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS065.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Amulet of Lightning",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Action,
    typeText: "Lightning Action – Item",
  }];
  