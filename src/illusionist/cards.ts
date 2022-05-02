
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
    class: Class.Illusionist,
    identifier: "prism-sculptor-of-arc-light",
    functionalText: `**Once per Turn Instant** - {r}{r}, banish a card from Prism's soul: Create a Spectral Shield token. *(It's an Illusionist aura with "If your hero would be dealt damage, instead destroy Spectral Shield and prevent 1 damage that source would deal.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER030.width-450.png",
    keywords: [],
    name: "Prism, Sculptor of Arc Light",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.Monarch],
    type: Type.Hero,
    typeText: "Light Illusionist Hero",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "prism",
    functionalText: `**Once per Turn Instant** - {r}{r}, banish a card from Prism's soul: Create a Spectral Shield token. *(It's an Illusionist aura with "If your hero would be dealt damage, instead destroy Spectral Shield and prevent 1 damage that source would deal.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER034.width-450.png",
    keywords: [],
    name: "Prism",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.Monarch],
    type: Type.Hero,
    typeText: "Light Illusionist Hero – Young",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "luminaris",
    functionalText: `During your action phase, Illusionist auras you control are weapons with 1{p} and "**Once per Turn Action** - 0: **Attack**"

While there is a card with a yellow color strip in your pitch zone, Illusionist attacks you control have **go again.**"`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON003.width-450.png",
    keywords: [],
    name: "Luminaris",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Weapon,
    typeText: "Light Illusionist Weapon – Scepter (2H)",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "herald-of-erudition-yellow",
    functionalText: `**Dominate** *(The defending hero can't defend Herald of Erudition with more than 1 card from their hand.)*

If Herald of Erudition hits, put it into your hero's soul and draw 2 cards.

**Phantasm** *(If Herald of Erudition is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Erudition and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON004.width-450.png",
    keywords: [Keyword.Dominate,Keyword.Phantasm],
    name: "Herald of Erudition",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "arc-light-sentinel-yellow",
    functionalText: `**Prism Specialization** *(You may only have Arc Light Sentinel in your deck if your hero is Prism.)*

If Arc Light Sentinel is in the arena when an opponent announces an attack, they must choose Arc Light Sentinel as the target of the attack.

**Spectra** *(Arc Light Sentinel can be attacked. When Arc Light Sentinel becomes the target of an attack, destroy it and close the combat chain. The attack does not resolve.)*

`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON005.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Spectra],
    name: "Arc Light Sentinel",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Light Illusionist Instant – Aura",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "genesis-yellow",
    functionalText: `At the start of your turn, you may put a card from your hand into your hero's soul. If it's an Illusionist card, create a Spectral Shield token. If it's a Light card, draw a card.

**Spectra** *(Genesis can be attacked. When Genesis becomes the target of an attack, destroy it and close the combat chain. The attack does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON006.width-450.png",
    keywords: [Keyword.Spectra],
    name: "Genesis",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Light Illusionist Instant – Aura",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "herald-of-judgment-yellow",
    functionalText: `**Prism Specialization** *(You may only have Herald of Judgment in your deck if your hero is Prism.)*

If Herald of Judgment hits, put it into your hero's soul and the defending hero can't play cards from their banished zone during their next action phase. *(Put this card face up under your hero card.)*

**Phantasm** *(If Herald of Judgment is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Judgment and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB028.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Phantasm],
    name: "Herald of Judgment",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Instant – Aura",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "herald-of-triumph-red",
    functionalText: `Attack action cards have -1{p} while defending Herald of Triumph.

If Herald of Triumph hits, put it into your hero's soul. *(Put this card face up under your hero card.)*

**Phantasm** *(If Herald of Triumph is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Triumph and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON008.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Triumph",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "herald-of-triumph-yellow",
    functionalText: `Attack action cards have -1{p} while defending Herald of Triumph.

If Herald of Triumph hits, put it into your hero's soul. *(Put this card face up under your hero card.)*

**Phantasm** *(If Herald of Triumph is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Triumph and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON009.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Triumph",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "herald-of-triumph-blue",
    functionalText: `Attack action cards have -1{p} while defending Herald of Triumph.

If Herald of Triumph hits, put it into your hero's soul. *(Put this card face up under your hero card.)*

**Phantasm** *(If Herald of Triumph is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Triumph and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON010.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Triumph",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "parable-of-humility-yellow",
    functionalText: `Attack action cards controlled by an opposing hero have -1{p} while attacking and defending.

**Spectra** *(Parable of Humility can be attacked. When Parable of Humility becomes the target of an attack, destroy it and close the combat chain. The attack does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB025.width-450.png",
    keywords: [Keyword.Spectra],
    name: "Parable of Humility",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Instant,
    typeText: "Light Illusionist Instant – Aura",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "merciful-retribution-yellow",
    functionalText: `Whenever an aura or attack action card you control is destroyed, deal 1 arcane damage to target hero. If it's a non-token Light card, put it into your hero's soul. *(Put it face up under your hero card.)*

**Spectra** *(Merciful Retribution can be attacked. When Merciful Retribution becomes the target of an attack, destroy it and close the combat chain. The attack does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB026.width-450.png",
    keywords: [Keyword.Spectra],
    name: "Merciful Retribution",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Instant,
    typeText: "Light Illusionist Instant – Aura",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "ode-to-wrath-yellow",
    functionalText: `Whenever a source you control deals damage to an opposing hero, they lose 1{h}.

Illusionist attack action cards you control have **go again.** *(If an attack is destroyed, **go again** does not resolve.)*

**Spectra** *(Ode to Wrath can be attacked. When Ode to Wrath becomes the target of an attack, destroy it and close the combat chain. The attack does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB027.width-450.png",
    keywords: [Keyword.Spectra],
    name: "Ode to Wrath",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Instant,
    typeText: "Light Illusionist Instant – Aura",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "herald-of-protection-red",
    functionalText: `If Herald of Protection hits, put it into your hero's soul and create a Spectral Shield token. *(It's an Illusionist aura with "If your hero would be dealt damage, instead destroy Spectral Shield and prevent 1 damage that source would deal.")*

**Phantasm** *(If Herald of Protection is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Protection and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB029.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Protection",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "herald-of-protection-yellow",
    functionalText: `If Herald of Protection hits, put it into your hero's soul and create a Spectral Shield token. *(It's an Illusionist aura with "If your hero would be dealt damage, instead destroy Spectral Shield and prevent 1 damage that source would deal.")*

**Phantasm** *(If Herald of Protection is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Protection and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB030.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Protection",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "herald-of-protection-blue",
    functionalText: `If Herald of Protection hits, put it into your hero's soul and create a Spectral Shield token. *(It's an Illusionist aura with "If your hero would be dealt damage, instead destroy Spectral Shield and prevent 1 damage that source would deal.")*

**Phantasm** *(If Herald of Protection is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Protection and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB031.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Protection",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "herald-of-ravages-red",
    functionalText: `If Herald of Ravages hits, put it into your hero's soul and deal 1 arcane damage to target hero. *(Put this card face up under your hero card.)*

**Phantasm** *(If Herald of Ravages is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Ravages and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/9986165132..223435430.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Ravages",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "herald-of-ravages-yellow",
    functionalText: `If Herald of Ravages hits, put it into your hero's soul and deal 1 arcane damage to target hero. *(Put this card face up under your hero card.)*

**Phantasm** *(If Herald of Ravages is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Ravages and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/23fgw5465b464.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Ravages",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "herald-of-ravages-blue",
    functionalText: `If Herald of Ravages hits, put it into your hero's soul and deal 1 arcane damage to target hero. *(Put this card face up under your hero card.)*

**Phantasm** *(If Herald of Ravages is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Ravages and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/456b443654yteb65764.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Ravages",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "herald-of-rebirth-red",
    functionalText: `If Herald of Rebirth hits, put it into your hero's soul and put up to 1 card with phantasm from your graveyard on top of your deck. *(Put this card face up under your hero card.)*

**Phantasm** *(If Herald of Rebirth is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Rebirth and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON020.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Rebirth",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "herald-of-rebirth-yellow",
    functionalText: `If Herald of Rebirth hits, put it into your hero's soul and put up to 1 card with phantasm from your graveyard on top of your deck. *(Put this card face up under your hero card.)*

**Phantasm** *(If Herald of Rebirth is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Rebirth and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON021.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Rebirth",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "herald-of-rebirth-blue",
    functionalText: `If Herald of Rebirth hits, put it into your hero's soul and put up to 1 card with phantasm from your graveyard on top of your deck. *(Put this card face up under your hero card.)*

**Phantasm** *(If Herald of Rebirth is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Rebirth and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON022.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Rebirth",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "herald-of-tenacity-red",
    functionalText: `**Dominate** *(The defending hero can't defend Herald of Tenacity with more than 1 card from their hand.)*

If Herald of Tenacity hits, put it into your hero's soul. *(Put this card face up under your hero card.)*

**Phantasm** *(If Herald of Tenacity is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Tenacity and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON023.width-450.png",
    keywords: [Keyword.Dominate,Keyword.Phantasm],
    name: "Herald of Tenacity",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "herald-of-tenacity-yellow",
    functionalText: `**Dominate** *(The defending hero can't defend Herald of Tenacity with more than 1 card from their hand.)*

If Herald of Tenacity hits, put it into your hero's soul. *(Put this card face up under your hero card.)*

**Phantasm** *(If Herald of Tenacity is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Tenacity and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON024.width-450.png",
    keywords: [Keyword.Dominate,Keyword.Phantasm],
    name: "Herald of Tenacity",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "herald-of-tenacity-blue",
    functionalText: `**Dominate** *(The defending hero can't defend Herald of Tenacity with more than 1 card from their hand.)*

If Herald of Tenacity hits, put it into your hero's soul. *(Put this card face up under your hero card.)*

**Phantasm** *(If Herald of Tenacity is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Tenacity and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON025.width-450.png",
    keywords: [Keyword.Dominate,Keyword.Phantasm],
    name: "Herald of Tenacity",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "wartune-herald-red",
    functionalText: `If Wartune Herald hits, put it into your hero's soul. *(Put this card face up under your hero card.)*

**Phantasm** *(If Wartune Herald is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Wartune Herald and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB035.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Wartune Herald",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "wartune-herald-yellow",
    functionalText: `If Wartune Herald hits, put it into your hero's soul. *(Put this card face up under your hero card.)*

**Phantasm** *(If Wartune Herald is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Wartune Herald and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB036.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Wartune Herald",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "wartune-herald-blue",
    functionalText: `If Wartune Herald hits, put it into your hero's soul. *(Put this card face up under your hero card.)*

**Phantasm** *(If Wartune Herald is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Wartune Herald and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB037.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Wartune Herald",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "iris-of-reality",
    functionalText: `Illusionist Weapon - Orb (2H)

During your action phase, Illusionist auras you control are weapons with 4{p} and **Once per Turn Action** - {r}{r}{r}: **Attack. Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS048.width-450.png",
    keywords: [],
    name: "Iris of Reality",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Weapon,
    typeText: "Illusionist Weapon – Orb (2H)",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "phantasmal-footsteps",
    functionalText: `The first time an Illusionist attack action card you control is destroyed each turn, you may pay {r}. If you do, gain 1 action point.

Whenever you defend with Phantasmal Footsteps, you may pay {r}. If you do, its {d} becomes 1 until end of turn.

If Phantasmal Footsteps defends a non-Illusionist attack with 6 or more {p}, destroy it when the combat chain closes.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB019.width-450.png",
    keywords: [],
    name: "Phantasmal Footsteps",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Equipment,
    typeText: "Illusionist Equipment – Legs",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "dream-weavers",
    functionalText: `**Action** - Destroy Dream Weavers: The next Illusionist attack action card you play this turn loses and can't gain phantasm. **Go again**

**Spellvoid 1** *(If your hero would be dealt arcane damage, you may destroy Dream Weaver instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON090.width-450.png",
    keywords: [Keyword.Spellvoid],
    name: "Dream Weavers",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Illusionist Equipment – Arms",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "phantasmaclasm-red",
    functionalText: `Look at the defending hero's hand and choose a card. They put it on the bottom of their deck then draw a card.

**Phantasm** *(If Phantasmaclasm is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Phantasmaclasm and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/fy8w7r78545yit3787efygs8def.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Phantasmaclasm",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "prismatic-shield-red",
    functionalText: `Create 3 Spectral Shield tokens. *(They're Illusionist auras with "If your hero would be dealt damage, instead destroy Spectral Shield and prevent 1 damage that source would deal.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON092.width-450.png",
    keywords: [],
    name: "Prismatic Shield",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Illusionist Instant",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "prismatic-shield-yellow",
    functionalText: `Create 2 Spectral Shield tokens. *(They're Illusionist auras with "If your hero would be dealt damage, instead destroy Spectral Shield and prevent 1 damage that source would deal.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON093.width-450.png",
    keywords: [],
    name: "Prismatic Shield",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Illusionist Instant",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "prismatic-shield-blue",
    functionalText: `Create 1 Spectral Shield tokens. *(It's an Illusionist aura with "If your hero would be dealt damage, instead destroy Spectral Shield and prevent 1 damage that source would deal.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON094.width-450.png",
    keywords: [],
    name: "Prismatic Shield",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Illusionist Instant",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "phantasmify-red",
    functionalText: `The next attack action card you play this turn is Illusionist in addition to its other class types, and gains +3/4/5{p} and **phantasm.** *(If the attack is defended by a non-Illusionist attack action card with 6 or more {p}, destroy it and close the combat chain.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS054.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Phantasmify",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Illusionist, Instant",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "phantasmify-yellow",
    functionalText: `The next attack action card you play this turn is Illusionist in addition to its other class types, and gains +3/4/5{p} and **phantasm.** *(If the attack is defended by a non-Illusionist attack action card with 6 or more {p}, destroy it and close the combat chain.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS055.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Phantasmify",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Illusionist, Instant",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "phantasmify-blue",
    functionalText: `The next attack action card you play this turn is Illusionist in addition to its other class types, and gains +3/4/5{p} and **phantasm.** *(If the attack is defended by a non-Illusionist attack action card with 6 or more {p}, destroy it and close the combat chain.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS056.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Phantasmify",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Illusionist, Instant",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "enigma-chimera-red",
    functionalText: `**Phantasm** *(If Enigma Chimera is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Enigma Chimera and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON098.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Enigma Chimera",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "enigma-chimera-yellow",
    functionalText: `**Phantasm** *(If Enigma Chimera is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Enigma Chimera and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON099.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Enigma Chimera",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "enigma-chimera-blue",
    functionalText: `**Phantasm** *(If Enigma Chimera is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Enigma Chimera and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON100.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Enigma Chimera",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "spears-of-surreality-red",
    functionalText: `**Phantasm** *(If Spears of Surreality is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Spears of Surreality and close the combat chain.)*

**Go again** *(If Spears of Surreality is destroyed, go again does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON101.width-450.png",
    keywords: [Keyword.Phantasm,Keyword.GoAgain],
    name: "Spears of Surreality",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "spears-of-surreality-yellow",
    functionalText: `**Phantasm** *(If Spears of Surreality is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Spears of Surreality and close the combat chain.)*

**Go again** *(If Spears of Surreality is destroyed, go again does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON102.width-450.png",
    keywords: [Keyword.Phantasm,Keyword.GoAgain],
    name: "Spears of Surreality",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "spears-of-surreality-blue",
    functionalText: `**Phantasm** *(If Spears of Surreality is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Spears of Surreality and close the combat chain.)*

**Go again** *(If Spears of Surreality is destroyed, go again does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON103.width-450.png",
    keywords: [Keyword.Phantasm,Keyword.GoAgain],
    name: "Spears of Surreality",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "spectral-shield",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*

If your hero would be dealt damage, instead destroy Spectral Shield and prevent 1 damage that source would deal.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON104.width-450.png",
    keywords: [],
    name: "Spectral Shield",
    rarity: Rarity.Token,
    sets: [Release.Monarch,Release.Everfest],
    type: Type.Token,
    typeText: "Illusionist Token – Aura",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "the-librarian",
    functionalText: `**Mentor** *(You may only have The Librarian in your deck if your hero is young.)*

At the start of your turn, if The Librarian is face down in your arsenal, you may turn him face up.

Whenever you create a Spectral Shield token, draw a card and put a lesson counter on The Librarian. Then if there are 3 or more lesson counters on The Librarian, banish him, search your deck for a **specialization** card, put it face up into your arsenal, and shuffle your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/PSM002.width-450.png",
    keywords: [Keyword.Mentor],
    name: "The Librarian",
    rarity: Rarity.Majestic,
    sets: [Release.Promos,Release.HeroDeck],
    type: Type.Mentor,
    typeText: "Illusionist Mentor",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "crown-of-reflection",
    functionalText: `**Instant** - Destroy Crown of Reflection: Destroy target Illusionist aura you control. If you do, you may put an Illusionist aura card from your hand into the arena with cost less than or equal the aura destroyed this way. Activate Crown of Reflection only during your action phase.

**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR137.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Crown of Reflection",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Equipment,
    typeText: "Illusionist Equipment – Head",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "fractal-replication-red",
    functionalText: `When you play or defend with Fractal Replication, it gains the abilities and effects of all Illusionist attack action cards on the combat chain.

Fractal Replication's {p} is equal to the greatest base {p} among Illusionist attack action cards on the combat chain.

Fractal Replication's {d} is equal to the greatest base {d} among Illusionist attack action cards on the combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR138.width-450.png",
    keywords: [],
    name: "Fractal Replication",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "miraging-metamorph-red",
    functionalText: `**Phantasm** *(When Miraging Metamorph is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Mirror Image and close the combat chain.)*

When Miraging Metamorph is destroyed, create a token that's a copy of an aura you control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR139.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Miraging Metamorph",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "shimmers-of-silver-blue",
    functionalText: `**Once per Turn Effect** - Whenever you attack with an Illusionist aura weapon, put a +1{p} counter on it.

**Spectra** *(Shimmers of Silver can be attacked. When Shimmers of Silver becomes the target of an attack, destroy it and close the combat chain. The attack does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR140.width-450.png",
    keywords: [Keyword.Spectra],
    name: "Shimmers of Silver",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Aura",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "haze-bending-blue",
    functionalText: `**Once per Turn Effect** - Whenever Haze Bending or another Illusionist non-token aura you control is destroyed, create a Spectral Shield token.

**Spectra** *(Dispersion Haze can be attacked. When Dispersion Haze becomes the target of an attack, destroy it and close the combat chain. The attack does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS093.width-450.png",
    keywords: [Keyword.Spectra],
    name: "Haze Bending",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Aura",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "passing-mirage-blue",
    functionalText: `Your first Illusionist attack each turn loses and can't gain **phantasm.**

**Spectra** *(Passing Mirage can be attacked. When Passing Mirage becomes the target of an attack, destroy it and close the combat chain. The attack does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS094.width-450.png",
    keywords: [Keyword.Spectra],
    name: "Passing Mirage",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Aura",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "pierce-reality-blue",
    functionalText: `The first Illusionist attack action card you play each turn has +2{p}.

**Spectra** *(Piercing Reality can be attacked. When Piercing Reality becomes the target of an attack, destroy it and close the combat chain. The attack does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS095.width-450.png",
    keywords: [Keyword.Spectra],
    name: "Pierce Reality",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Aura",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "coalescence-mirage-red",
    functionalText: `**Phantasm** *(If Coalescence Mirage is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Coalescence Mirage and close the combat chain.)*

When Coalescence Mirage is destroyed, you may put an Illusionist aura card with 0 from your hand into the arena.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR144.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Coalescence Mirage",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "coalescence-mirage-yellow",
    functionalText: `**Phantasm** *(If Coalescence Mirage is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Coalescence Mirage and close the combat chain.)*

When Coalescence Mirage is destroyed, you may put an Illusionist aura card with 0 from your hand into the arena.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR145.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Coalescence Mirage",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "coalescence-mirage-blue",
    functionalText: `**Phantasm** *(If Coalescence Mirage is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Coalescence Mirage and close the combat chain.)*

When Coalescence Mirage is destroyed, you may put an Illusionist aura card with 0 from your hand into the arena.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR146.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Coalescence Mirage",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "phantasmal-haze-red",
    functionalText: `**Phantasm** *(If Phantasmal Haze is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Phantasmal Haze and close the combat chain.)*

When Phantasmal Haze is destroyed, create a Spectral Shield token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR147.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Phantasmal Haze",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "phantasmal-haze-yellow",
    functionalText: `**Phantasm** *(If Phantasmal Haze is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Phantasmal Haze and close the combat chain.)*

When Phantasmal Haze is destroyed, create a Spectral Shield token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR148.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Phantasmal Haze",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "phantasmal-haze-blue",
    functionalText: `**Phantasm** *(If Phantasmal Haze is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Phantasmal Haze and close the combat chain.)*

When Phantasmal Haze is destroyed, create a Spectral Shield token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR149.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Phantasmal Haze",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "veiled-intentions-red",
    functionalText: `**Go again**

The next attack action card you play this turn is Illusionist in addition to its other card, and gains +4{p}, **phantasm**, and "When this is destroyed, draw a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR150.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Veiled Intentions",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "veiled-intentions-yellow",
    functionalText: `**Go again**

The next attack action card you play this turn is Illusionist in addition to its other card, and gains +3{p}, **phantasm**, and "When this is destroyed, draw a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR151.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Veiled Intentions",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action",
  },{
    bannedFormats: [],
    class: Class.Illusionist,
    identifier: "veiled-intentions-blue",
    functionalText: `**Go again**

The next attack action card you play this turn is Illusionist in addition to its other card, and gains +2{p}, **phantasm**, and "When this is destroyed, draw a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR152.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Veiled Intentions",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action",
  }];
  