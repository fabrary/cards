
  import {
    Bond,
    Card,
    Class,
    Flow,
    Foiling,
    Format,
    Fusion,
    Hero,
    Keyword,
    Meta,
    Metatype,
    Rarity,
    Release,
    ReleaseEdition,
    Subtype,
    Talent,
    Trait,
    Treatment,
    Type 
  } from '@flesh-and-blood/types';

  const cards1: Card[] =  [{
    artists: ["Ausonia"],
    cardIdentifier: "barnacle-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA074_V2",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Barnacle",
    printings: [{
        artists: ["Ausonia"],
      foiling: Foiling.C,
      identifier: "SEA074",
      image: "SEA074_V2",
      
      
      print: "SEA074-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel],
    rarity: Rarity.Marvel,
    setIdentifiers: ["SEA074"],
    sets: [Release.HighSeas],
    specialImage: "SEA074_V2",
    subtypes: [Subtype.Ally,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Ally",

    
    
    cost: 2,
    
    
    functionalText: `**Action** - {t}: Attack

**Watery Grave**`,
    
    
    
    
    keywords: [Keyword.WateryGrave],
    
    life: 3,
    
    
    pitch: 2,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Lius Lasahido"],
    cardIdentifier: "big-game-trophy-shot-yellow",
    classes: [Class.Pirate,Class.Ranger],
    defaultImage: "SEA087",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Big Game Trophy Shot",
    printings: [{
        artists: ["Lius Lasahido"],
      
      identifier: "SEA087",
      image: "SEA087",
      
      
      print: "SEA087",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Lius Lasahido"],
      foiling: Foiling.R,
      identifier: "SEA087",
      image: "SEA087",
      
      
      print: "SEA087-Rainbow",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic,Rarity.Promo],
    rarity: Rarity.Majestic,
    setIdentifiers: ["FAB345","SEA087"],
    sets: [Release.HighSeas,Release.Promos],
    specialImage: "SEA087",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Ranger Action",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `Your next arrow attack this turn gets +4{p}. If it has harpoon in its name, it gets "When this hits a hero, create a Gold token."

Draw a card, then discard a card.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "board-the-ship-red",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA053",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Board the Ship",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "SEA053",
      image: "SEA053",
      
      
      print: "SEA053",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Faizal Fikri"],
      foiling: Foiling.R,
      identifier: "SEA053",
      image: "SEA053",
      
      
      print: "SEA053-Rainbow",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["FAB347","SEA053"],
    sets: [Release.HighSeas,Release.Promos],
    specialImage: "SEA053",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks, you may {t} an ally you control. If you do, this gets **overpower**.`,
    
    
    
    
    keywords: [Keyword.Overpower],
    
    
    
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "burn-bare",
    classes: [Class.Wizard],
    defaultImage: "SEA255",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Burn Bare",
    printings: [{
        artists: ["Rio Sabda"],
      
      identifier: "SEA255",
      image: "SEA255",
      isExpansionSlot: true,
      
      print: "SEA255",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA255"],
    sets: [Release.HighSeas],
    specialImage: "SEA255",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Wizard Action",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `Deal 6 arcane damage to any target.

**Instant** - Discard this: Destroy target card with phantasm that is attacking you.`,
    
    
    
    
    
    
    
    meta: [Meta.Expansion],
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "chart-the-high-seas-blue",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA048",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Chart the High Seas",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SEA048",
      image: "SEA048",
      
      
      print: "SEA048",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Carlos Cruchaga"],
      foiling: Foiling.R,
      identifier: "SEA048",
      image: "SEA048",
      
      
      print: "SEA048-Rainbow",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic,Rarity.Promo],
    rarity: Rarity.Majestic,
    setIdentifiers: ["FAB344","SEA048"],
    sets: [Release.HighSeas,Release.Promos],
    specialImage: "SEA048",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Look at the top 2 cards of your deck. You may pitch a blue card from among them. Put the rest into your graveyard.

Create a Gold token for each yellow card put into your graveyard this way.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Simon Dominic"],
    cardIdentifier: "chowder-hearty-cook-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA075_V2",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Chowder, Hearty Cook",
    printings: [{
        artists: ["Simon Dominic"],
      foiling: Foiling.C,
      identifier: "SEA075",
      image: "SEA075_V2",
      
      
      print: "SEA075-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel],
    rarity: Rarity.Marvel,
    setIdentifiers: ["SEA075"],
    sets: [Release.HighSeas],
    specialImage: "SEA075_V2",
    subtypes: [Subtype.Ally,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Ally",

    
    
    cost: 3,
    
    
    functionalText: `**Action** - {t}: Attack

**Instant** - {t}: Gain 1{h}

**Watery Grave**`,
    
    
    
    
    keywords: [Keyword.WateryGrave],
    
    life: 3,
    
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Lius Lasahido"],
    cardIdentifier: "chum-friendly-first-mate-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA050",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Chum, Friendly First Mate",
    printings: [{
        artists: ["Lius Lasahido"],
      
      identifier: "SEA050",
      image: "SEA050",
      
      
      print: "SEA050",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Lius Lasahido"],
      foiling: Foiling.C,
      identifier: "SEA050",
      image: "SEA050-MV",
      
      
      print: "SEA050-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA050"],
    sets: [Release.HighSeas],
    specialImage: "SEA050-MV",
    subtypes: [Subtype.Ally,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Ally",

    
    
    cost: 4,
    
    
    functionalText: `Action - {t}: Attack

Instant - {t}, discard a card with watery grave: Until end of turn, opponents must choose this as the target of attacks if able.

**Watery Grave**`,
    
    
    
    
    keywords: [Keyword.WateryGrave],
    
    life: 6,
    
    
    pitch: 2,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikko Wahyudi"],
    cardIdentifier: "compass-of-sunken-depths",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA045",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Compass of Sunken Depths",
    printings: [{
        artists: ["Nikko Wahyudi"],
      
      identifier: "SEA045",
      image: "SEA045",
      
      
      print: "SEA045",
      rarity: Rarity.Basic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Basic],
    rarity: Rarity.Basic,
    setIdentifiers: ["SEA045"],
    sets: [Release.HighSeas],
    specialImage: "SEA045",
    subtypes: [Subtype.OffHand],
    types: [Type.Equipment],
    typeText: "Pirate Necromancer Equipment - Off-Hand",

    
    
    
    
    
    functionalText: `**Instant** - {t}: Look at the top card of your deck.

The first card with watery grave you play from your graveyard each turn gets go again.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "conqueror-of-the-high-seas-red",
    classes: [Class.Pirate],
    defaultImage: "SEA130",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Conqueror of the High Seas",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "SEA130",
      image: "SEA130",
      
      
      print: "SEA130",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA130"],
    sets: [Release.HighSeas],
    specialImage: "SEA130",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 4,
    defense: 3,
    
    functionalText: `When this hits a hero, destroy all cards in their arsenal. Create a Gold token for each card destroyed this way.

**High Tide** - If there are 2 or more blue cards in your pitch zone, this gets +1{p} and **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.HighTide],
    
    
    
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Alexandra Malygina","Sam Yang"],
    cardIdentifier: "cracked-bauble-yellow",
    classes: [Class.Generic],
    defaultImage: "SEA246",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Cracked Bauble",
    printings: [{
        artists: ["Sam Yang"],
      
      identifier: "SEA246",
      image: "SEA246",
      
      
      print: "SEA246",
      rarity: Rarity.Basic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Basic,Rarity.Common,Rarity.Promo,Rarity.Token],
    rarity: Rarity.Basic,
    setIdentifiers: ["ARC218","CRU195","ELE237","HNT245","HVY244","LGS083","LGS227","MON306","MST224","OUT238","ROS238","SEA246","UPR224","WTR224"],
    sets: [Release.ArcaneRising,Release.CrucibleOfWar,Release.HeavyHitters,Release.HighSeas,Release.Monarch,Release.Outsiders,Release.PartTheMistveil,Release.Promos,Release.Rosetta,Release.TalesOfAria,Release.TheHunted,Release.Uprising,Release.WelcomeToRathe],
    specialImage: "SEA246",
    subtypes: [],
    types: [Type.Resource],
    typeText: "Generic Resource",

    
    
    
    
    
    functionalText: `*(A player may add any number of Cracked Baubles to their card-pool in sealed deck or booster draft formats.)*`,
    
    
    
    
    
    
    
    
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mario Wibisono"],
    cardIdentifier: "diamond-amulet-blue",
    classes: [Class.Generic],
    defaultImage: "SEA190",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Diamond Amulet",
    printings: [{
        artists: ["Mario Wibisono"],
      
      identifier: "SEA190",
      image: "SEA190",
      
      
      print: "SEA190",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA190"],
    sets: [Release.HighSeas],
    specialImage: "SEA190",
    subtypes: [Subtype.Item,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action - Item",

    
    
    cost: 0,
    
    
    functionalText: `**Instant** - Destroy this: gain 1 action point.

**Legend of the Watery Grave**`,
    
    
    
    
    keywords: [Keyword.Legendary,Keyword.WateryGrave],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Anthony Avon"],
    cardIdentifier: "expedition-to-azuro-keys-red",
    classes: [Class.Pirate],
    defaultImage: "SEA155",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Expedition to Azuro Keys",
    printings: [{
        artists: ["Anthony Avon"],
      
      identifier: "SEA155",
      image: "SEA155",
      
      
      print: "SEA155",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA155"],
    sets: [Release.HighSeas],
    specialImage: "SEA155",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, you may put a gold counter on Treasure Island.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "expedition-to-blackwater-strait-red",
    classes: [Class.Pirate],
    defaultImage: "SEA156",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Expedition to Blackwater Strait",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "SEA156",
      image: "SEA156",
      
      
      print: "SEA156",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA156"],
    sets: [Release.HighSeas],
    specialImage: "SEA156",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `When this attacks, you may put a gold counter on Treasure Island.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Arkoii"],
    cardIdentifier: "expedition-to-dreadfall-reach-red",
    classes: [Class.Pirate],
    defaultImage: "SEA157",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Expedition to Dreadfall Reach",
    printings: [{
        artists: ["Arkoii"],
      
      identifier: "SEA157",
      image: "SEA157",
      
      
      print: "SEA157",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA157"],
    sets: [Release.HighSeas],
    specialImage: "SEA157",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this attacks, you may put a gold counter on Treasure Island.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  }];
  const cards2: Card[] =  [{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "expedition-to-horizons-mantle-red",
    classes: [Class.Pirate],
    defaultImage: "SEA158",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Expedition to Horizon's Mantle",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SEA158",
      image: "SEA158",
      
      
      print: "SEA158",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA158"],
    sets: [Release.HighSeas],
    specialImage: "SEA158",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this attacks, you may put a gold counter on Treasure Island.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ramza Ardyputra"],
    cardIdentifier: "fiddlers-green-red",
    classes: [Class.Generic],
    defaultImage: "SEA212",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Fiddler's Green",
    printings: [{
        artists: ["Ramza Ardyputra"],
      
      identifier: "SEA212",
      image: "SEA212",
      
      
      print: "SEA212",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA212"],
    sets: [Release.HighSeas],
    specialImage: "SEA212",
    subtypes: [],
    types: [Type.Block],
    typeText: "Generic Block",

    
    
    
    defense: 1,
    
    functionalText: `When this is put into your graveyard from anywhere, gain 3{h}.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["SanSan"],
    cardIdentifier: "flying-high-red",
    classes: [Class.Generic],
    defaultImage: "SEA206",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Flying High",
    printings: [{
        artists: ["SanSan"],
      
      identifier: "SEA206",
      image: "SEA206",
      
      
      print: "SEA206",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA206"],
    sets: [Release.HighSeas],
    specialImage: "SEA206",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Your next attack this turn gets **go again**. If it's red, it gets +1{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["SanSan"],
    cardIdentifier: "flying-high-yellow",
    classes: [Class.Generic],
    defaultImage: "SEA207",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Flying High",
    printings: [{
        artists: ["SanSan"],
      
      identifier: "SEA207",
      image: "SEA207",
      
      
      print: "SEA207",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA207"],
    sets: [Release.HighSeas],
    specialImage: "SEA207",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Your next attack this turn gets **go again**. If it's yellow, it gets +1{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["SanSan"],
    cardIdentifier: "flying-high-blue",
    classes: [Class.Generic],
    defaultImage: "SEA208",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Flying High",
    printings: [{
        artists: ["SanSan"],
      
      identifier: "SEA208",
      image: "SEA208",
      
      
      print: "SEA208",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA208"],
    sets: [Release.HighSeas],
    specialImage: "SEA208",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Your next attack this turn gets **go again**. If it's blue, it gets +1{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikolay Moskvin","Stormy Elia Fanggidae"],
    cardIdentifier: "gold",
    classes: [Class.Generic],
    defaultImage: "SEA244",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Gold",
    printings: [{
        artists: ["Stormy Elia Fanggidae"],
      
      identifier: "SEA244",
      image: "SEA244",
      
      
      print: "SEA244",
      rarity: Rarity.Basic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Stormy Elia Fanggidae"],
      foiling: Foiling.R,
      identifier: "SEA244",
      image: "SEA244-TP",
      
      
      print: "SEA244-Rainbow-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Common,Rarity.Marvel,Rarity.Promo,Rarity.Token],
    rarity: Rarity.Basic,
    setIdentifiers: ["BET030","DYN243","FAB121","FAB279","HVY243","KSI030","LGS229","OLA030","SEA244","VIC030"],
    sets: [Release.BetsyBlitzDeck,Release.Dynasty,Release.HeavyHitters,Release.HighSeas,Release.KassaiBlitzDeck,Release.OlympiaBlitzDeck,Release.Promos,Release.VictorBlitzDeck],
    specialImage: "SEA244-TP",
    subtypes: [Subtype.Item],
    types: [Type.Token],
    typeText: "Generic Token - Item",

    
    
    
    
    
    functionalText: `**Action** - {r}{r}, destroy this: Draw a card. **Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "gold-baited-hook",
    classes: [Class.Pirate],
    defaultImage: "SEA125-TP",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Gold-Baited Hook",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      foiling: Foiling.C,
      identifier: "SEA125",
      image: "SEA125-TP",
      
      
      print: "SEA125-Cold",
      rarity: Rarity.Legendary,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Legendary],
    rarity: Rarity.Legendary,
    setIdentifiers: ["SEA125"],
    sets: [Release.HighSeas],
    specialImage: "SEA125-TP",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Pirate Equipment - Arms",

    
    
    
    defense: 1,
    
    functionalText: `**Action** - {t}: Your next Pirate attack this turn gets "When this hits a hero, **steal** a Gold token they control, otherwise create a Gold token." At the beginning of your end phase, if you haven't created or stolen a Gold token this turn, destroy this. **Go again**

**Battleworn**`,
    
    
    
    
    keywords: [Keyword.Battleworn,Keyword.GoAgain,Keyword.Steal],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "golden-cog",
    classes: [Class.Mechanologist],
    defaultImage: "SEA042",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Golden Cog",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SEA042",
      image: "SEA042",
      
      
      print: "SEA042",
      rarity: Rarity.Basic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Carlos Cruchaga"],
      foiling: Foiling.C,
      identifier: "SEA042",
      image: "SEA042-TP",
      
      
      print: "SEA042-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Carlos Cruchaga"],
      foiling: Foiling.C,
      identifier: "SEA042",
      image: "SEA042-TP_BACK",
      
      
      print: "SEA042-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["SEA042"],
    sets: [Release.HighSeas],
    specialImage: "SEA042-TP_BACK",
    subtypes: [Subtype.Item],
    types: [Type.Token],
    typeText: "Mechanologist Token - Cog Item",

    
    
    
    
    
    functionalText: `**Crank**

This enters the arena with a steam counter. At the start of your turn, destroy this unless you remove a steam counter from it.`,
    
    
    
    
    keywords: [Keyword.Crank],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "golden-skywarden-yellow",
    classes: [Class.Mechanologist,Class.Pirate],
    defaultImage: "SEA004",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Golden Skywarden",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SEA004",
      image: "SEA004",
      
      
      print: "SEA004",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Carlos Cruchaga"],
      foiling: Foiling.R,
      identifier: "SEA004",
      image: "SEA004",
      
      
      print: "SEA004-Rainbow",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic,Rarity.Promo],
    rarity: Rarity.Majestic,
    setIdentifiers: ["FAB343","SEA004"],
    sets: [Release.HighSeas],
    specialImage: "SEA004",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Mechanologist Action - Attack",

    
    
    cost: 4,
    defense: 2,
    
    functionalText: `**Galvanize** - When this defends, you may destroy an item you control. If you do, this gets +1{d}. If a Golden Cog is destroyed this way, create a Gold token and repeat this process.`,
    
    
    
    
    keywords: [Keyword.Galvanize],
    
    
    
    
    pitch: 2,
    power: 7,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Bastien Jez"],
    cardIdentifier: "goldfin-harpoon",
    classes: [Class.Pirate,Class.Ranger],
    defaultImage: "SEA093",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Goldfin Harpoon",
    printings: [{
        artists: ["Bastien Jez"],
      
      identifier: "SEA093",
      image: "SEA093",
      
      
      print: "SEA093",
      rarity: Rarity.Basic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Bastien Jez"],
      foiling: Foiling.C,
      identifier: "SEA093",
      image: "SEA093-TP",
      
      
      print: "SEA093-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["SEA093"],
    sets: [Release.HighSeas],
    specialImage: "SEA093-TP",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Ranger Action - Arrow Attack",

    
    
    cost: 0,
    
    
    functionalText: `If this would be put into a graveyard, instead remove it from the game.`,
    
    
    
    
    
    
    
    
    
    
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mario Wibisono"],
    cardIdentifier: "goldkiss-rum",
    classes: [Class.Generic],
    defaultImage: "SEA245",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Goldkiss Rum",
    printings: [{
        artists: ["Mario Wibisono"],
      
      identifier: "SEA245",
      image: "SEA245",
      
      
      print: "SEA245",
      rarity: Rarity.Basic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Basic],
    rarity: Rarity.Basic,
    setIdentifiers: ["SEA245"],
    sets: [Release.HighSeas],
    specialImage: "SEA245",
    subtypes: [Subtype.Item],
    types: [Type.Token],
    typeText: "Generic Token - Item",

    
    
    
    
    
    functionalText: `**Instant** - {t} your hero, destroy this: Your next action this turn gets **go again**. Your hero can't {u} this turn unless they're a Pirate.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "gravy-bones",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA044",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Gravy Bones",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "SEA044",
      image: "SEA044",
      
      
      print: "SEA044",
      rarity: Rarity.Basic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.C,
      identifier: "SEA044",
      image: "SEA044-MV",
      
      
      print: "SEA044-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.C,
      identifier: "SEA044",
      image: "SEA044-MV_BACK",
      
      
      print: "SEA044-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["SEA044"],
    sets: [Release.HighSeas],
    specialImage: "SEA044-MV_BACK",
    subtypes: [Subtype.Young],
    types: [Type.Hero],
    typeText: "Pirate Necromancer Hero - Young",

    
    
    
    
    
    functionalText: `**Instant** - {t}, destroy a Gold you control: Draw a card, then discard a card.

If a blue card has been put into your graveyard this turn, you may play cards with watery grave from your graveyard.`,
    
    hero: Hero.GravyBones,
    intellect: 4,
    
    
    
    life: 20,
    
    
    
    
    
    
    
    
    
    
    
    
  
  young: true
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "gravy-bones-shipwrecked-looter",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA043",
    legalFormats: [Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open],
    legalHeroes: [],
    name: "Gravy Bones, Shipwrecked Looter",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "SEA043",
      image: "SEA043",
      
      
      print: "SEA043",
      rarity: Rarity.Basic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.C,
      identifier: "SEA043",
      image: "SEA043-MV",
      
      
      print: "SEA043-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.C,
      identifier: "SEA043",
      image: "SEA043-MV_BACK",
      
      
      print: "SEA043-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Basic,
    setIdentifiers: ["AGB001","HER138","SEA043"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas,Release.Promos],
    specialImage: "SEA043-MV_BACK",
    subtypes: [],
    types: [Type.Hero],
    typeText: "Pirate Necromancer Hero",

    
    
    
    
    
    functionalText: `**Instant** - {t}, destroy a Gold you control: Draw a card, then discard a card.

If a blue card has been put into your graveyard this turn, you may play cards with watery grave from your graveyard.`,
    
    hero: Hero.GravyBones,
    intellect: 4,
    
    
    
    life: 40,
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  }];
  const cards3: Card[] =  [{
    artists: ["Sam Yang"],
    cardIdentifier: "hammerhead-harpoon-cannon",
    classes: [Class.Pirate,Class.Ranger],
    defaultImage: "SEA084",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Hammerhead, Harpoon Cannon",
    printings: [{
        artists: ["Sam Yang"],
      
      identifier: "SEA084",
      image: "SEA084",
      
      
      print: "SEA084",
      rarity: Rarity.Basic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Basic],
    rarity: Rarity.Basic,
    setIdentifiers: ["SEA084"],
    sets: [Release.HighSeas],
    specialImage: "SEA084",
    subtypes: [Subtype.TwoHanded,Subtype.Bow,Subtype.Cannon],
    types: [Type.Weapon],
    typeText: "Pirate Ranger Weapon - Bow Cannon (2H)",

    
    
    
    
    
    functionalText: `**Action** - {r}{r}{r}{r}, {t}: Your next arrow attack this turn gets +4{p}. If it has harpoon in its name, it gets **overpower**. **Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Overpower],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "hoist-em-up-red",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA055",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Hoist 'Em Up",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "SEA055",
      image: "SEA055",
      
      
      print: "SEA055",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Thomas Ressuge"],
      foiling: Foiling.R,
      identifier: "SEA055",
      image: "SEA055",
      
      
      print: "SEA055-Rainbow",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["FAB349","SEA055"],
    sets: [Release.HighSeas,Release.Promos],
    specialImage: "SEA055",
    subtypes: [],
    types: [Type.Block],
    typeText: "Pirate Necromancer Block",

    
    
    
    defense: 4,
    
    functionalText: `When this defends, you may {t} an ally you control. If you do, this gets +1{d}.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "king-kraken-harpoon-red",
    classes: [Class.Pirate,Class.Ranger],
    defaultImage: "SEA085",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "King Kraken Harpoon",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "SEA085",
      image: "SEA085",
      
      
      print: "SEA085",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA085"],
    sets: [Release.HighSeas],
    specialImage: "SEA085",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Ranger Action - Arrow Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `**Go Fish** - When this hits a hero, they choose and reveal a card from their hand. If it's a non-attack action card, they discard it and you create a Gold token. If you've activated a cannon this turn, instead look at their hand and you choose the card.`,
    
    
    
    
    keywords: [Keyword.GoFish],
    
    
    
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Simon Dominic"],
    cardIdentifier: "king-shark-harpoon-red",
    classes: [Class.Pirate,Class.Ranger],
    defaultImage: "SEA086",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "King Shark Harpoon",
    printings: [{
        artists: ["Simon Dominic"],
      
      identifier: "SEA086",
      image: "SEA086",
      
      
      print: "SEA086",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Simon Dominic"],
      foiling: Foiling.R,
      identifier: "SEA086",
      image: "SEA086",
      
      
      print: "SEA086-Rainbow-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA086"],
    sets: [Release.HighSeas],
    specialImage: "SEA086",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Ranger Action - Arrow Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `**Go Fish** - When this hits a hero, they choose and reveal a card from their hand. If it's an attack action card, they discard it and you create a Gold token. If you've activated a cannon this turn, instead look at their hand and you choose the card.`,
    
    
    
    
    keywords: [Keyword.GoFish],
    
    
    
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "limpit-hop-a-long-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA060_V2",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Limpit, Hop-a-long",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      foiling: Foiling.C,
      identifier: "SEA060",
      image: "SEA060_V2",
      
      
      print: "SEA060-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel],
    rarity: Rarity.Marvel,
    setIdentifiers: ["SEA060"],
    sets: [Release.HighSeas],
    specialImage: "SEA060_V2",
    subtypes: [Subtype.Ally,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Ally",

    
    
    cost: 0,
    
    
    functionalText: `**Action** - {r}, {t}: Attack. **Go again**

**Watery Grave**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.WateryGrave],
    
    life: 1,
    
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Narendra B Adi"],
    cardIdentifier: "loan-shark-yellow",
    classes: [Class.Pirate],
    defaultImage: "SEA131",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Loan Shark",
    printings: [{
        artists: ["Narendra B Adi"],
      
      identifier: "SEA131",
      image: "SEA131",
      
      
      print: "SEA131",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA131"],
    sets: [Release.HighSeas],
    specialImage: "SEA131",
    subtypes: [Subtype.Aura,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Action - Aura",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Go again

When this enters the arena, create 2 Gold tokens.

At the beginning of your end phase, if you haven't created or stolen a Gold this turn, destroy this, then lose 2{g} unless you discard a card.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Sam Yang"],
    cardIdentifier: "marlynn",
    classes: [Class.Pirate,Class.Ranger],
    defaultImage: "SEA083",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Marlynn",
    printings: [{
        artists: ["Sam Yang"],
      
      identifier: "SEA083",
      image: "SEA083",
      
      
      print: "SEA083",
      rarity: Rarity.Basic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Sam Yang"],
      foiling: Foiling.C,
      identifier: "SEA083",
      image: "SEA083-MV",
      
      
      print: "SEA083-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Sam Yang"],
      foiling: Foiling.C,
      identifier: "SEA083",
      image: "SEA083-MV_BACK",
      
      
      print: "SEA083-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["SEA083"],
    sets: [Release.HighSeas],
    specialImage: "SEA083-MV_BACK",
    subtypes: [Subtype.Young],
    types: [Type.Hero],
    typeText: "Pirate Ranger Hero - Young",

    
    
    
    
    
    functionalText: `**Action** - {t}, destroy a Gold you control: Create a Goldfin Harpoon in your hand. **Go again**

Whenever you draw a card during your action phase, you may put an arrow from your hand face-up into your arsenal.`,
    
    hero: Hero.Marlynn,
    intellect: 4,
    
    
    
    life: 20,
    
    
    
    
    
    
    
    
    
    
    
    
  
  young: true
  },{
    artists: ["Sam Yang"],
    cardIdentifier: "marlynn-treasure-hunter",
    classes: [Class.Pirate,Class.Ranger],
    defaultImage: "SEA082",
    legalFormats: [Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open],
    legalHeroes: [],
    name: "Marlynn, Treasure Hunter",
    printings: [{
        artists: ["Sam Yang"],
      
      identifier: "SEA082",
      image: "SEA082",
      
      
      print: "SEA082",
      rarity: Rarity.Basic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Sam Yang"],
      foiling: Foiling.C,
      identifier: "SEA082",
      image: "SEA082-MV",
      
      
      print: "SEA082-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Sam Yang"],
      foiling: Foiling.C,
      identifier: "SEA082",
      image: "SEA082-MV_BACK",
      
      
      print: "SEA082-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Basic,
    setIdentifiers: ["HER139","SEA082"],
    sets: [Release.HighSeas,Release.Promos],
    specialImage: "SEA082-MV_BACK",
    subtypes: [],
    types: [Type.Hero],
    typeText: "Pirate Ranger Hero",

    
    
    
    
    
    functionalText: `**Action** - {t}, destroy a Gold you control: Create a Goldfin Harpoon in your hand. **Go again**

Whenever you draw a card during your action phase, you may put an arrow from your hand face-up into your arsenal.`,
    
    hero: Hero.Marlynn,
    intellect: 4,
    
    keywords: [Keyword.GoAgain],
    
    life: 40,
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "paddle-faster-red",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA054",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Paddle Faster",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "SEA054",
      image: "SEA054",
      
      
      print: "SEA054",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Marco González"],
      foiling: Foiling.R,
      identifier: "SEA054",
      image: "SEA054",
      
      
      print: "SEA054-Rainbow",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["FAB348","SEA054"],
    sets: [Release.HighSeas,Release.Promos],
    specialImage: "SEA054",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks, you may {t} an ally you control. If you do, this gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["寿多 浩 / Hiro Suda"],
    cardIdentifier: "palantir-aeronought-red",
    classes: [Class.Mechanologist],
    defaultImage: "SEA012",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Palantir Aeronought",
    printings: [{
        artists: ["寿多 浩 / Hiro Suda"],
      
      identifier: "SEA012",
      image: "SEA012",
      
      
      print: "SEA012",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA012"],
    sets: [Release.HighSeas],
    specialImage: "SEA012",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `The defending hero must defend this with an equipment they control if able.

**Thrice per Turn Instant** - {t} a cog you control: This gets +1{p}. If this is the third time you've activated this ability, destroy a defending card.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nailsen Ivanderlie"],
    cardIdentifier: "peg-leg",
    classes: [Class.Pirate],
    defaultImage: "SEA129",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Peg Leg",
    printings: [{
        artists: ["Nailsen Ivanderlie"],
      
      identifier: "SEA129",
      image: "SEA129",
      
      
      print: "SEA129",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA129"],
    sets: [Release.HighSeas],
    specialImage: "SEA129",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Pirate Equipment - Legs",

    
    
    
    defense: 1,
    
    functionalText: `**Action** - {r}{r}{r}, destroy this: Your next attack this turn gets **go again**. **Go again**.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak,Keyword.GoAgain],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "polly-cranka",
    classes: [],
    defaultImage: "SEA003",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Polly Cranka",
    printings: [{
        artists: ["Rio Sabda"],
      foiling: Foiling.R,
      identifier: "SEA003",
      image: "SEA003",
      
      
      print: "SEA003-Rainbow",
      rarity: Rarity.Legendary,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Legendary],
    rarity: Rarity.Legendary,
    setIdentifiers: ["SEA003"],
    sets: [Release.HighSeas],
    specialImage: "SEA003",
    subtypes: [Subtype.Ally,Subtype.OffHand],
    types: [Type.Companion],
    typeText: "Puffin Companion - Off-Hand Ally",

    
    
    
    
    
    functionalText: `**Action** - {t}, banish this: Return this to the arena under its owner's control, unequipped, tapped, and with a steam counter.

**Crank**

**Perched**`,
    
    
    
    
    keywords: [Keyword.Crank],
    
    life: 1,
    metatypes: [Metatype.Puffin],
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikko Wahyudi"],
    cardIdentifier: "portside-exchange-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA145_V2",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Portside Exchange",
    printings: [{
        artists: ["Nikko Wahyudi"],
      foiling: Foiling.R,
      identifier: "SEA145",
      image: "SEA145_V2",
      
      
      print: "SEA145-Rainbow-Extended Art",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA145"],
    sets: [Release.HighSeas],
    specialImage: "SEA145_V2",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Discard a card, then draw a card. If a yellow card is discarded this way, create a Gold token.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  }];
  const cards4: Card[] =  [{
    artists: ["Arif Wijaya"],
    cardIdentifier: "puffin",
    classes: [Class.Mechanologist,Class.Pirate],
    defaultImage: "SEA002",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Puffin",
    printings: [{
        artists: ["Arif Wijaya"],
      
      identifier: "SEA002",
      image: "SEA002",
      
      
      print: "SEA002",
      rarity: Rarity.Basic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Arif Wijaya"],
      foiling: Foiling.C,
      identifier: "SEA002",
      image: "SEA002-MV",
      
      
      print: "SEA002-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Arif Wijaya"],
      foiling: Foiling.C,
      identifier: "SEA002",
      image: "SEA002-MV_BACK",
      
      
      print: "SEA002-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["SEA002"],
    sets: [Release.HighSeas],
    specialImage: "SEA002-MV_BACK",
    subtypes: [Subtype.Young],
    types: [Type.Hero],
    typeText: "Pirate Mechanologist Hero - Young",

    
    
    
    
    
    functionalText: `**Action** - {t}, destroy a Gold you control: Create a Golden Cog token.

The second time you crank each turn, draw a card.`,
    
    hero: Hero.Puffin,
    intellect: 4,
    
    
    
    life: 20,
    
    
    
    
    
    
    
    
    
    
    
    
  
  young: true
  },{
    artists: ["Arif Wijaya"],
    cardIdentifier: "puffin-hightail",
    classes: [Class.Mechanologist,Class.Pirate],
    defaultImage: "SEA001",
    legalFormats: [Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open],
    legalHeroes: [],
    name: "Puffin, Hightail",
    printings: [{
        artists: ["Arif Wijaya"],
      
      identifier: "SEA001",
      image: "SEA001",
      
      
      print: "SEA001",
      rarity: Rarity.Basic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Arif Wijaya"],
      foiling: Foiling.C,
      identifier: "SEA001",
      image: "SEA001-MV",
      
      
      print: "SEA001-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Arif Wijaya"],
      foiling: Foiling.C,
      identifier: "SEA001",
      image: "SEA001-MV_BACK",
      
      
      print: "SEA001-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Basic,
    setIdentifiers: ["HER137","SEA001"],
    sets: [Release.HighSeas,Release.Promos],
    specialImage: "SEA001-MV_BACK",
    subtypes: [],
    types: [Type.Hero],
    typeText: "Pirate Mechanologist Hero",

    
    
    
    
    
    functionalText: `**Action** - {t}, destroy a Gold you control: Create a Golden Cog token.

The second time you crank each turn, draw a card.`,
    
    hero: Hero.Puffin,
    intellect: 4,
    
    
    
    life: 40,
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Konadekana"],
    cardIdentifier: "redspine-manta",
    classes: [Class.Ranger],
    defaultImage: "SEA094",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Redspine Manta",
    printings: [{
        artists: ["Konadekana"],
      
      identifier: "SEA094",
      image: "SEA094",
      
      
      print: "SEA094",
      rarity: Rarity.Basic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Basic],
    rarity: Rarity.Basic,
    setIdentifiers: ["SEA094"],
    sets: [Release.HighSeas],
    specialImage: "SEA094",
    subtypes: [Subtype.TwoHanded,Subtype.Bow],
    types: [Type.Weapon],
    typeText: "Ranger Weapon - Bow (2H)",

    
    
    
    
    
    functionalText: `**Action** - {t}: Put an arrow from your hand face-up into your arsenal. **Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "riggermortis-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA077",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Riggermortis",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "SEA077",
      image: "SEA077",
      
      
      print: "SEA077",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["LGS406","SEA077"],
    sets: [Release.HighSeas,Release.Promos],
    specialImage: "SEA077",
    subtypes: [Subtype.Ally,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Ally",

    
    
    cost: 1,
    
    
    functionalText: `**Action** - {r}, {t}: **Attack**

**Watery Grave**`,
    
    
    
    
    keywords: [Keyword.WateryGrave],
    
    life: 1,
    
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "sea-legs-yellow",
    classes: [Class.Generic],
    defaultImage: "SEA187",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Sea Legs",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SEA187",
      image: "SEA187",
      
      
      print: "SEA187",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA187"],
    sets: [Release.HighSeas],
    specialImage: "SEA187",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this is discarded, create a Goldkiss Rum token.`,
    
    
    
    
    
    
    
    
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["SanSan"],
    cardIdentifier: "sealace-sarong",
    classes: [Class.Ranger],
    defaultImage: "SEA095",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Sealace Sarong",
    printings: [{
        artists: ["SanSan"],
      foiling: Foiling.R,
      identifier: "SEA095",
      image: "SEA095",
      
      
      print: "SEA095-Rainbow",
      rarity: Rarity.Legendary,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Legendary],
    rarity: Rarity.Legendary,
    setIdentifiers: ["SEA095"],
    sets: [Release.HighSeas],
    specialImage: "SEA095",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Ranger Equipment - Legs",

    
    
    
    defense: 2,
    
    functionalText: `**Instant** - {t}, turn a blue arrow in your arsenal face-up: it gets **go again** this turn.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "sky-skimmer-red",
    classes: [Class.Mechanologist],
    defaultImage: "SEA027",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Sky Skimmer",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "SEA027",
      image: "SEA027",
      
      
      print: "SEA027",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Mariusz Gandzel"],
      foiling: Foiling.R,
      identifier: "SEA027",
      image: "SEA027",
      
      
      print: "SEA027-Rainbow",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA027"],
    sets: [Release.HighSeas],
    specialImage: "SEA027",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Once per Turn Instant** - {t} a cog you control: This gets +1{p} or **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "sky-skimmer-yellow",
    classes: [Class.Mechanologist],
    defaultImage: "SEA028",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Sky Skimmer",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "SEA028",
      image: "SEA028",
      
      
      print: "SEA028",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Mariusz Gandzel"],
      foiling: Foiling.R,
      identifier: "SEA028",
      image: "SEA028",
      
      
      print: "SEA028-Rainbow",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA028"],
    sets: [Release.HighSeas],
    specialImage: "SEA028",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Once per Turn Instant** - {t} a cog you control: This gets +1{p} or **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "sky-skimmer-blue",
    classes: [Class.Mechanologist],
    defaultImage: "SEA029",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Sky Skimmer",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "SEA029",
      image: "SEA029",
      
      
      print: "SEA029",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Mariusz Gandzel"],
      foiling: Foiling.R,
      identifier: "SEA029",
      image: "SEA029",
      
      
      print: "SEA029-Rainbow",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA029"],
    sets: [Release.HighSeas],
    specialImage: "SEA029",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Once per Turn Instant** - {t} a cog you control: This gets +1{p} or **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ramza Ardyputra"],
    cardIdentifier: "sunken-treasure-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA133",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Sunken Treasure",
    printings: [{
        artists: ["Ramza Ardyputra"],
      
      identifier: "SEA133",
      image: "SEA133",
      
      
      print: "SEA133",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA133"],
    sets: [Release.HighSeas],
    specialImage: "SEA133",
    subtypes: [],
    types: [Type.Block],
    typeText: "Pirate Block",

    
    
    
    defense: 3,
    
    functionalText: `When this defends, you may turn a card in a graveyard face-down. If it's yellow, create a Gold token.`,
    
    
    
    
    
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "tip-the-barkeep-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA132",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Tip the Barkeep",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "SEA132",
      image: "SEA132",
      
      
      print: "SEA132",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA132"],
    sets: [Release.HighSeas],
    specialImage: "SEA132",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Create a Goldkiss Rum token.

You may give a Gold token you control to another hero. If you do, put this on the bottom of its owner's deck.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Jessada Sutthi"],
    cardIdentifier: "treasure-island",
    classes: [Class.NotClassed],
    defaultImage: "SEA247",
    legalFormats: [Format.Draft,Format.Open,Format.Sealed],
    legalHeroes: [],
    name: "Treasure Island",
    printings: [{
        artists: ["Jessada Sutthi"],
      
      identifier: "SEA247",
      image: "SEA247",
      
      
      print: "SEA247",
      rarity: Rarity.Basic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Basic,Rarity.Promo],
    rarity: Rarity.Basic,
    setIdentifiers: ["FAB340","SEA247"],
    sets: [Release.HighSeas,Release.Promos],
    specialImage: "SEA247",
    subtypes: [Subtype.Landmark],
    types: [Type.Macro],
    typeText: "High Seas Macro - Landmark",

    
    
    
    
    
    functionalText: `The first time a hero is attacked each turn, put a gold counter on this.

Whenever you or an ally you control deals damage to an opposing hero, you remove that many gold counters from this, then create Gold tokens equal to the number of counters removed this way.`,
    
    
    
    
    
    
    
    metatypes: [Metatype.HighSeas],
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Joseph Qiu"],
    cardIdentifier: "wailer-humperdinck-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA052_V2",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Wailer Humperdinck",
    printings: [{
        artists: ["Joseph Qiu"],
      foiling: Foiling.C,
      identifier: "SEA052",
      image: "SEA052_V2",
      
      
      print: "SEA052-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel],
    rarity: Rarity.Marvel,
    setIdentifiers: ["SEA052"],
    sets: [Release.HighSeas],
    specialImage: "SEA052_V2",
    subtypes: [Subtype.Ally,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Ally",

    
    
    cost: 6,
    
    
    functionalText: `**Action** - {r}{r}{r} {r}{r}{r}, {t}: Attack

**Watery Grave**`,
    
    
    
    
    keywords: [Keyword.WateryGrave],
    
    life: 7,
    
    
    pitch: 2,
    power: 11,
    
    
    
    
    
    
    
    
  
  
  }];

  export const cards: Card[] =  [
    ...cards1,
    ...cards2,
    ...cards3,
    ...cards4,
  ];
  