
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
    artists: ["Mario Wibisono"],
    cardIdentifier: "amethyst-amulet-blue",
    classes: [Class.Generic],
    defaultImage: "SEA189",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Amethyst Amulet",
    printings: [{
        artists: ["Mario Wibisono"],
      
      identifier: "SEA189",
      image: "SEA189",
      
      
      print: "SEA189",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Mario Wibisono"],
      foiling: Foiling.C,
      identifier: "SEA189",
      image: "SEA189_V2",
      
      
      print: "SEA189-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA189"],
    sets: [Release.HighSeas],
    specialImage: "SEA189_V2",
    subtypes: [Subtype.Item,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action - Item",

    
    
    cost: 0,
    
    
    functionalText: `**Instant** - Destroy this: Your next attack this turn gets +2{p}.

**Legend of the Watery Grave**`,
    
    
    
    
    keywords: [Keyword.Legendary,Keyword.WateryGrave],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marcus Reyno"],
    cardIdentifier: "angry-bones-red",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA062",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Angry Bones",
    printings: [{
        artists: ["Marcus Reyno"],
      
      identifier: "SEA062",
      image: "SEA062",
      
      
      print: "SEA062",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA062"],
    sets: [Release.HighSeas],
    specialImage: "SEA062",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks, you may discard a card or destroy the top card of your deck. If that card has watery grave, this gets +1{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marcus Reyno"],
    cardIdentifier: "angry-bones-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA063",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Angry Bones",
    printings: [{
        artists: ["Marcus Reyno"],
      
      identifier: "SEA063",
      image: "SEA063",
      
      
      print: "SEA063",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA063"],
    sets: [Release.HighSeas],
    specialImage: "SEA063",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks, you may discard a card or destroy the top card of your deck. If that card has watery grave, this gets +1{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marcus Reyno"],
    cardIdentifier: "angry-bones-blue",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA064",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Angry Bones",
    printings: [{
        artists: ["Marcus Reyno"],
      
      identifier: "SEA064",
      image: "SEA064",
      
      
      print: "SEA064",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA064"],
    sets: [Release.HighSeas],
    specialImage: "SEA064",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks, you may discard a card or destroy the top card of your deck. If that card has watery grave, this gets +1{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Isuardi Therianto"],
    cardIdentifier: "anka-drag-under-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA262",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Anka, Drag Under",
    printings: [{
        artists: ["Isuardi Therianto"],
      foiling: Foiling.C,
      identifier: "SEA262",
      image: "SEA262",
      isExpansionSlot: true,
      
      print: "SEA262-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["AGB014","SEA262"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas],
    specialImage: "SEA262",
    subtypes: [Subtype.Ally,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Ally",

    
    
    cost: 2,
    
    
    functionalText: `**Action** - {r}, {t}: Attack

**Instant** - {t}, discard a card with watery grave: The next time an opponent draws one or more cards this turn, they discard a card.

**Watery Grave**`,
    
    
    
    
    keywords: [Keyword.WateryGrave],
    
    life: 3,
    meta: [Meta.Expansion],
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Daniel Correia"],
    cardIdentifier: "arcane-compliance-blue",
    classes: [Class.Generic],
    defaultImage: "SEA261",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Arcane Compliance",
    printings: [{
        artists: ["Daniel Correia"],
      
      identifier: "SEA261",
      image: "SEA261",
      isExpansionSlot: true,
      
      print: "SEA261",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA261"],
    sets: [Release.HighSeas],
    specialImage: "SEA261",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Generic Instant",

    
    
    cost: 0,
    
    
    functionalText: `Until end of turn, effects can't increase arcane damage that target action card on the stack would deal.`,
    
    
    
    
    
    
    
    meta: [Meta.Expansion],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Daniel Jiménez"],
    cardIdentifier: "avast-ye-blue",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA056",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Avast Ye!",
    printings: [{
        artists: ["Daniel Jiménez"],
      
      identifier: "SEA056",
      image: "SEA056",
      
      
      print: "SEA056",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["AGB025","SEA056"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas],
    specialImage: "SEA056",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Your next Pirate ally attack this turn gets go again and "When this hits a hero, create a Gold token."

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tanapon Wachirakul"],
    cardIdentifier: "bam-bam-yellow",
    classes: [Class.Brute],
    defaultImage: "SEA250",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.Rhinar],
    name: "Bam Bam",
    printings: [{
        artists: ["Tanapon Wachirakul"],
      
      identifier: "SEA250",
      image: "SEA250",
      isExpansionSlot: true,
      
      print: "SEA250",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA250"],
    sets: [Release.HighSeas],
    specialImage: "SEA250",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this hits a hero, destroy an item they control.

**Instant** - Discard this: Your club attacks this turn get "When this hits a hero, destroy an item they control."`,
    
    
    
    
    
    
    
    meta: [Meta.Expansion],
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Asur Misoa"],
    cardIdentifier: "bandana-of-the-blue-beyond",
    classes: [Class.Generic],
    defaultImage: "SEA179",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Bandana of the Blue Beyond",
    printings: [{
        artists: ["Asur Misoa"],
      
      identifier: "SEA179",
      image: "SEA179",
      
      
      print: "SEA179",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA179"],
    sets: [Release.HighSeas],
    specialImage: "SEA179",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Head",

    
    
    
    defense: 0,
    
    functionalText: `**Action** - Discard a card, destroy this: Put a blue card from your graveyard on the bottom of your deck. **Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kelvin Jauwri"],
    cardIdentifier: "barbed-barrage-red",
    classes: [Class.Ranger],
    defaultImage: "SEA098",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Barbed Barrage",
    printings: [{
        artists: ["Kelvin Jauwri"],
      
      identifier: "SEA098",
      image: "SEA098",
      
      
      print: "SEA098",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA098"],
    sets: [Release.HighSeas],
    specialImage: "SEA098",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Ranger Action - Arrow Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `As an additional cost to play this, you may pay {r}{r}{r}. If you do, this attacks an additional target.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ausonia"],
    cardIdentifier: "barnacle-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA074",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Barnacle",
    printings: [{
        artists: ["Ausonia"],
      
      identifier: "SEA074",
      image: "SEA074",
      
      
      print: "SEA074",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Ausonia"],
      foiling: Foiling.C,
      identifier: "SEA074",
      image: "SEA074_V2",
      
      
      print: "SEA074-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Common,Rarity.Marvel],
    rarity: Rarity.Common,
    setIdentifiers: ["AGB015","SEA074"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas],
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
    artists: ["Arkoii"],
    cardIdentifier: "battalion-barque-red",
    classes: [Class.Pirate],
    defaultImage: "SEA152",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Battalion Barque",
    printings: [{
        artists: ["Arkoii"],
      
      identifier: "SEA152",
      image: "SEA152",
      
      
      print: "SEA152",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Arkoii"],
      foiling: Foiling.C,
      identifier: "SEA152",
      image: "SEA152_V2",
      
      
      print: "SEA152-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["AGB008","SEA152"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas],
    specialImage: "SEA152_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 4,
    defense: 3,
    
    functionalText: `High Tide - If there are 2 or more blue cards in your pitch zone, this gets +2{p}.`,
    
    
    
    
    keywords: [Keyword.HighTide],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Arkoii"],
    cardIdentifier: "battalion-barque-yellow",
    classes: [Class.Pirate],
    defaultImage: "SEA153",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Battalion Barque",
    printings: [{
        artists: ["Arkoii"],
      
      identifier: "SEA153",
      image: "SEA153",
      
      
      print: "SEA153",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Arkoii"],
      foiling: Foiling.C,
      identifier: "SEA153",
      image: "SEA153_V2",
      
      
      print: "SEA153-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA153"],
    sets: [Release.HighSeas],
    specialImage: "SEA153_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 4,
    defense: 3,
    
    functionalText: `High Tide - If there are 2 or more blue cards in your pitch zone, this gets +2{p}.`,
    
    
    
    
    keywords: [Keyword.HighTide],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Arkoii"],
    cardIdentifier: "battalion-barque-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA154",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Battalion Barque",
    printings: [{
        artists: ["Arkoii"],
      
      identifier: "SEA154",
      image: "SEA154",
      
      
      print: "SEA154",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Arkoii"],
      foiling: Foiling.C,
      identifier: "SEA154",
      image: "SEA154_V2",
      
      
      print: "SEA154-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA154"],
    sets: [Release.HighSeas],
    specialImage: "SEA154_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 4,
    defense: 3,
    
    functionalText: `High Tide - If there are 2 or more blue cards in your pitch zone, this gets +2{p}.`,
    
    
    
    
    keywords: [Keyword.HighTide],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Lius Lasahido"],
    cardIdentifier: "big-game-trophy-shot-yellow",
    classes: [Class.Pirate,Class.Ranger],
    defaultImage: "SEA087",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Marlynn],
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
    artists: ["Olga Tereshenko"],
    cardIdentifier: "blood-in-the-water-red",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA047",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Blood in the Water",
    printings: [{
        artists: ["Olga Tereshenko"],
      
      identifier: "SEA047",
      image: "SEA047",
      
      
      print: "SEA047",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA047"],
    sets: [Release.HighSeas],
    specialImage: "SEA047",
    subtypes: [],
    types: [Type.DefenseReaction],
    typeText: "Pirate Necromancer Defense Reaction",

    
    
    cost: 0,
    defense: 4,
    
    functionalText: `When this defends, you may discard a card or destroy the top card of your deck. If that card has watery grave, this gets +2{d}.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Septimius Ferdian"],
    cardIdentifier: "blow-for-a-blow-red",
    classes: [Class.Generic],
    defaultImage: "SEA216",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Blow for a Blow",
    printings: [{
        artists: ["Septimius Ferdian"],
      
      identifier: "SEA216",
      image: "SEA216",
      
      
      print: "SEA216",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA216"],
    sets: [Release.HighSeas],
    specialImage: "SEA216",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this is played, if you have less {h} than an opposing hero, it gets **go again**.

When this hits, deal 1 damage to any target.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Joseph Qiu"],
    cardIdentifier: "blue-fin-harpoon-blue",
    classes: [Class.Pirate,Class.Ranger],
    defaultImage: "SEA089",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Marlynn],
    name: "Blue Fin Harpoon",
    printings: [{
        artists: ["Joseph Qiu"],
      
      identifier: "SEA089",
      image: "SEA089",
      
      
      print: "SEA089",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA089"],
    sets: [Release.HighSeas],
    specialImage: "SEA089",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Ranger Action - Arrow Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `**Go Fish** - When this hits a hero, they choose and reveal a card from their hand. If it's blue, they discard it and you create a Gold token. If you've activated a cannon this turn, instead look at their hand and you choose the card.`,
    
    
    
    
    keywords: [Keyword.GoFish],
    
    
    
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Muhammad Fajri"],
    cardIdentifier: "blue-sea-tricorn",
    classes: [Class.Pirate],
    defaultImage: "SEA126",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv,Hero.Taylor],
    name: "Blue Sea Tricorn",
    printings: [{
        artists: ["Muhammad Fajri"],
      
      identifier: "SEA126",
      image: "SEA126",
      
      
      print: "SEA126",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA126"],
    sets: [Release.HighSeas],
    specialImage: "SEA126",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Pirate Equipment - Head",

    
    
    
    defense: 1,
    
    functionalText: `**Action** - {r}{r}{r}, destroy this: Draw a card. **Go again**

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak,Keyword.GoAgain],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "board-the-ship-red",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA053",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
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
    artists: ["Esty Swandana"],
    cardIdentifier: "buccaneers-bounty",
    classes: [Class.Pirate],
    defaultImage: "SEA127",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv,Hero.Taylor],
    name: "Buccaneer's Bounty",
    printings: [{
        artists: ["Esty Swandana"],
      
      identifier: "SEA127",
      image: "SEA127",
      
      
      print: "SEA127",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA127"],
    sets: [Release.HighSeas],
    specialImage: "SEA127",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Pirate Equipment - Chest",

    
    
    
    defense: 1,
    
    functionalText: `**Action** - Destroy this: Gain {r}. **Go again**

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak,Keyword.GoAgain],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ismatulloh"],
    cardIdentifier: "burly-bones-red",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA065",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Burly Bones",
    printings: [{
        artists: ["Ismatulloh"],
      
      identifier: "SEA065",
      image: "SEA065",
      
      
      print: "SEA065",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA065"],
    sets: [Release.HighSeas],
    specialImage: "SEA065",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks, you may discard a card or destroy the top card of your deck. If that card has watery grave, this gets **overpower**.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ismatulloh"],
    cardIdentifier: "burly-bones-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA066",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Burly Bones",
    printings: [{
        artists: ["Ismatulloh"],
      
      identifier: "SEA066",
      image: "SEA066",
      
      
      print: "SEA066",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA066"],
    sets: [Release.HighSeas],
    specialImage: "SEA066",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks, you may discard a card or destroy the top card of your deck. If that card has watery grave, this gets **overpower**.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ismatulloh"],
    cardIdentifier: "burly-bones-blue",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA067",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Burly Bones",
    printings: [{
        artists: ["Ismatulloh"],
      
      identifier: "SEA067",
      image: "SEA067",
      
      
      print: "SEA067",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA067"],
    sets: [Release.HighSeas],
    specialImage: "SEA067",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks, you may discard a card or destroy the top card of your deck. If that card has watery grave, this gets **overpower**.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "burn-bare",
    classes: [Class.Wizard],
    defaultImage: "SEA255",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Blaze,Hero.Iyslander,Hero.Kano,Hero.Oscilio,Hero.Verdance],
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
    artists: ["Andrew Chou"],
    cardIdentifier: "call-in-the-big-guns-red",
    classes: [Class.Ranger],
    defaultImage: "SEA120",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Call in the Big Guns",
    printings: [{
        artists: ["Andrew Chou"],
      
      identifier: "SEA120",
      image: "SEA120",
      
      
      print: "SEA120",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA120"],
    sets: [Release.HighSeas],
    specialImage: "SEA120",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Ranger Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Your next arrow attack this turn gets +3{p}.

You may put an arrow from your hand face-up into your arsenal.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Andrew Chou"],
    cardIdentifier: "call-in-the-big-guns-yellow",
    classes: [Class.Ranger],
    defaultImage: "SEA121",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Call in the Big Guns",
    printings: [{
        artists: ["Andrew Chou"],
      
      identifier: "SEA121",
      image: "SEA121",
      
      
      print: "SEA121",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA121"],
    sets: [Release.HighSeas],
    specialImage: "SEA121",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Ranger Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Your next arrow attack this turn gets +2{p}.

You may put an arrow from your hand face-up into your arsenal.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Andrew Chou"],
    cardIdentifier: "call-in-the-big-guns-blue",
    classes: [Class.Ranger],
    defaultImage: "SEA122",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Call in the Big Guns",
    printings: [{
        artists: ["Andrew Chou"],
      
      identifier: "SEA122",
      image: "SEA122",
      
      
      print: "SEA122",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA122"],
    sets: [Release.HighSeas],
    specialImage: "SEA122",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Ranger Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Your next arrow attack this turn gets +1{p}.

You may put an arrow from your hand face-up into your arsenal.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Vito Febrianno"],
    cardIdentifier: "captains-coat",
    classes: [Class.Generic],
    defaultImage: "SEA181",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Captain's Coat",
    printings: [{
        artists: ["Vito Febrianno"],
      
      identifier: "SEA181",
      image: "SEA181",
      
      
      print: "SEA181",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA181"],
    sets: [Release.HighSeas],
    specialImage: "SEA181",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Chest",

    
    
    
    defense: 0,
    
    functionalText: `**Action** - Destroy this: Gain {r}. Activate this only if you've drawn a card this turn. **Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Joseph Qiu"],
    cardIdentifier: "chart-a-course-red",
    classes: [Class.Pirate],
    defaultImage: "SEA173",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Chart a Course",
    printings: [{
        artists: ["Joseph Qiu"],
      
      identifier: "SEA173",
      image: "SEA173",
      
      
      print: "SEA173",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Joseph Qiu"],
      foiling: Foiling.C,
      identifier: "SEA173",
      image: "SEA173_V2",
      
      
      print: "SEA173-Cold",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA173"],
    sets: [Release.HighSeas],
    specialImage: "SEA173_V2",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Your first attack this turn gets +3{p}.

You may put a gold counter on Treasure Island.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Joseph Qiu"],
    cardIdentifier: "chart-a-course-yellow",
    classes: [Class.Pirate],
    defaultImage: "SEA174",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Chart a Course",
    printings: [{
        artists: ["Joseph Qiu"],
      
      identifier: "SEA174",
      image: "SEA174",
      
      
      print: "SEA174",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Joseph Qiu"],
      foiling: Foiling.C,
      identifier: "SEA174",
      image: "SEA174_V2",
      
      
      print: "SEA174-Cold",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA174"],
    sets: [Release.HighSeas],
    specialImage: "SEA174_V2",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Your second attack this turn gets +3{p}.

You may put a gold counter on Treasure Island.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Joseph Qiu"],
    cardIdentifier: "chart-a-course-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA175",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Chart a Course",
    printings: [{
        artists: ["Joseph Qiu"],
      
      identifier: "SEA175",
      image: "SEA175",
      
      
      print: "SEA175",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Joseph Qiu"],
      foiling: Foiling.C,
      identifier: "SEA175",
      image: "SEA175_V2",
      
      
      print: "SEA175-Cold",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA175"],
    sets: [Release.HighSeas],
    specialImage: "SEA175_V2",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Your third attack this turn gets +3{p}.

You may put a gold counter on Treasure Island.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "chart-the-high-seas-blue",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA048",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
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
    defaultImage: "SEA075",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Chowder, Hearty Cook",
    printings: [{
        artists: ["Simon Dominic"],
      
      identifier: "SEA075",
      image: "SEA075",
      
      
      print: "SEA075",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Simon Dominic"],
      foiling: Foiling.C,
      identifier: "SEA075",
      image: "SEA075_V2",
      
      
      print: "SEA075-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Common,Rarity.Marvel],
    rarity: Rarity.Common,
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
    legalHeroes: [Hero.GravyBones],
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
      image: "SEA050_V2",
      
      
      print: "SEA050-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA050"],
    sets: [Release.HighSeas],
    specialImage: "SEA050_V2",
    subtypes: [Subtype.Ally,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Ally",

    
    
    cost: 4,
    
    
    functionalText: `**Action** - {t}: Attack

**Instant** - {t}, discard a card with watery grave: Until end of turn, opponents must choose this as the target of attacks if able.

**Watery Grave**`,
    
    
    
    
    keywords: [Keyword.WateryGrave],
    
    life: 6,
    
    
    pitch: 2,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikolay Moskvin"],
    cardIdentifier: "clap-em-in-irons-blue",
    classes: [Class.Generic],
    defaultImage: "SEA209",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Clap 'Em in Irons",
    printings: [{
        artists: ["Nikolay Moskvin"],
      
      identifier: "SEA209",
      image: "SEA209",
      
      
      print: "SEA209",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA209"],
    sets: [Release.HighSeas],
    specialImage: "SEA209",
    subtypes: [Subtype.Item,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action - Item",

    
    
    cost: 0,
    
    
    functionalText: `**Go again**

When this enters the arena, {t} target Pirate hero or ally. It can't {u} while this is in the arena.

At the start of your turn, destroy this.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mark Poole"],
    cardIdentifier: "claw-of-vynserakai",
    classes: [Class.NotClassed],
    defaultImage: "SEA257",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Cindra,Hero.Dromai,Hero.Emperor,Hero.Fai,Hero.Fang,Hero.Taipanis],
    name: "Claw of Vynserakai",
    printings: [{
        artists: ["Mark Poole"],
      
      identifier: "SEA257",
      image: "SEA257",
      isExpansionSlot: true,
      
      print: "SEA257",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA257"],
    sets: [Release.HighSeas],
    specialImage: "SEA257",
    subtypes: [Subtype.OneHanded,Subtype.Dagger],
    types: [Type.Weapon],
    typeText: "Draconic Weapon - Dagger (1H)",

    
    
    
    
    
    functionalText: `**Once per Turn Action** - {r}: Attack

Spellvoid 1`,
    
    
    
    
    keywords: [Keyword.Spellvoid],
    
    
    meta: [Meta.Expansion],
    
    
    power: 1,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "cloud-city-steamboat-red",
    classes: [Class.Mechanologist],
    defaultImage: "SEA015",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Cloud City Steamboat",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SEA015",
      image: "SEA015",
      
      
      print: "SEA015",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA015"],
    sets: [Release.HighSeas],
    specialImage: "SEA015",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this hits a hero, you may {t} a cog you control. If you do, put a steam counter on a cog you control.

**Twice per Turn Instant** - {t} a cog you control: This gets +1{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "cloud-city-steamboat-yellow",
    classes: [Class.Mechanologist],
    defaultImage: "SEA016",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Cloud City Steamboat",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SEA016",
      image: "SEA016",
      
      
      print: "SEA016",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA016"],
    sets: [Release.HighSeas],
    specialImage: "SEA016",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this hits a hero, you may {t} a cog you control. If you do, put a steam counter on a cog you control.

**Twice per Turn Instant** - {t} a cog you control: This gets +1{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "cloud-city-steamboat-blue",
    classes: [Class.Mechanologist],
    defaultImage: "SEA017",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Cloud City Steamboat",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SEA017",
      image: "SEA017",
      
      
      print: "SEA017",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA017"],
    sets: [Release.HighSeas],
    specialImage: "SEA017",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this hits a hero, you may {t} a cog you control. If you do, put a steam counter on a cog you control.

**Twice per Turn Instant** - {t} a cog you control: This gets +1{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikko Wahyudi"],
    cardIdentifier: "cloud-skiff-red",
    classes: [Class.Mechanologist],
    defaultImage: "SEA024",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Cloud Skiff",
    printings: [{
        artists: ["Nikko Wahyudi"],
      
      identifier: "SEA024",
      image: "SEA024",
      
      
      print: "SEA024",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA024"],
    sets: [Release.HighSeas],
    specialImage: "SEA024",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `**Once per Turn Instant** - {t} a cog you control: This gets +1{p} or go again.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikko Wahyudi"],
    cardIdentifier: "cloud-skiff-yellow",
    classes: [Class.Mechanologist],
    defaultImage: "SEA025",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Cloud Skiff",
    printings: [{
        artists: ["Nikko Wahyudi"],
      
      identifier: "SEA025",
      image: "SEA025",
      
      
      print: "SEA025",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA025"],
    sets: [Release.HighSeas],
    specialImage: "SEA025",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `**Once per Turn Instant** - {t} a cog you control: This gets +1{p} or go again.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikko Wahyudi"],
    cardIdentifier: "cloud-skiff-blue",
    classes: [Class.Mechanologist],
    defaultImage: "SEA026",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Cloud Skiff",
    printings: [{
        artists: ["Nikko Wahyudi"],
      
      identifier: "SEA026",
      image: "SEA026",
      
      
      print: "SEA026",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA026"],
    sets: [Release.HighSeas],
    specialImage: "SEA026",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `**Once per Turn Instant** - {t} a cog you control: This gets +1{p} or go again.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "codex-of-frailty-yellow",
    classes: [Class.Assassin,Class.Ranger],
    defaultImage: "SEA248",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Azalea,Hero.Crackni,Hero.Lexi,Hero.Marlynn,Hero.Nuu,Hero.Riptide,Hero.Slippy,Hero.Uzuri],
    name: "Codex of Frailty",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SEA248",
      image: "SEA248",
      isExpansionSlot: true,
      
      print: "SEA248",
      rarity: Rarity.Legendary,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Legendary,Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OUT160","SEA248"],
    sets: [Release.HighSeas,Release.Outsiders],
    specialImage: "SEA248",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Assassin / Ranger Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Each hero puts an attack action card from their graveyard face-down into their arsenal. Each hero that does, discards a card.
Create a Ponder token under your control and a Frailty token under each opponent's control.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Expansion],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "cog-in-the-machine-red",
    classes: [Class.Mechanologist],
    defaultImage: "SEA013",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Cog in the Machine",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SEA013",
      image: "SEA013",
      
      
      print: "SEA013",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA013"],
    sets: [Release.HighSeas],
    specialImage: "SEA013",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Mechanologist Action",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `Create 2 Golden Cog tokens.

You may {t} a cog you control. If you do, put this on the bottom of its owner's deck.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "cogwerx-blunderbuss",
    classes: [Class.Mechanologist],
    defaultImage: "SEA006",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Cogwerx Blunderbuss",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "SEA006",
      image: "SEA006",
      
      
      print: "SEA006",
      rarity: Rarity.Basic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Basic],
    rarity: Rarity.Basic,
    setIdentifiers: ["SEA006"],
    sets: [Release.HighSeas],
    specialImage: "SEA006",
    subtypes: [Subtype.TwoHanded,Subtype.Gun],
    types: [Type.Weapon],
    typeText: "Mechanologist Weapon - Gun (2H)",

    
    
    
    
    
    functionalText: `**Action** - {r}{r}, {t}: Attack

**Instant** - {t} a cog you control: This card's next attack this turn gets go again.`,
    
    
    
    
    
    
    
    
    
    
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kevin Sidharta"],
    cardIdentifier: "cogwerx-dovetail-red",
    classes: [Class.Mechanologist],
    defaultImage: "SEA011",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Cogwerx Dovetail",
    printings: [{
        artists: ["Kevin Sidharta"],
      
      identifier: "SEA011",
      image: "SEA011",
      
      
      print: "SEA011",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA011"],
    sets: [Release.HighSeas],
    specialImage: "SEA011",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this hits a hero, {u} all cogs you control.

**Thrice per Turn Instant** - {t} a cog you control: This gets +1{p} or go again.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ramza Ardyputra"],
    cardIdentifier: "cogwerx-tinker-rings",
    classes: [Class.Mechanologist],
    defaultImage: "SEA008",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Taylor,Hero.Teklovossen],
    name: "Cogwerx Tinker Rings",
    printings: [{
        artists: ["Ramza Ardyputra"],
      foiling: Foiling.R,
      identifier: "SEA008",
      image: "SEA008",
      
      
      print: "SEA008-Rainbow",
      rarity: Rarity.Legendary,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Ramza Ardyputra"],
      foiling: Foiling.C,
      identifier: "SEA008",
      image: "SEA008_V2",
      
      
      print: "SEA008-Cold-Extended Art",
      rarity: Rarity.Legendary,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Legendary],
    rarity: Rarity.Legendary,
    setIdentifiers: ["SEA008"],
    sets: [Release.HighSeas],
    specialImage: "SEA008_V2",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Mechanologist Equipment - Arms",

    
    
    
    defense: 2,
    
    functionalText: `When this defends, create a Golden Cog token.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kevin Sidharta"],
    cardIdentifier: "cogwerx-workshop-blue",
    classes: [Class.Mechanologist],
    defaultImage: "SEA014",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Cogwerx Workshop",
    printings: [{
        artists: ["Kevin Sidharta"],
      
      identifier: "SEA014",
      image: "SEA014",
      
      
      print: "SEA014",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA014"],
    sets: [Release.HighSeas],
    specialImage: "SEA014",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Mechanologist Action",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `Create a Golden Cog token.

Put a steam counter on up to 2 cogs you control.`,
    
    
    
    
    
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "cogwerx-zeppelin-red",
    classes: [Class.Mechanologist],
    defaultImage: "SEA018",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Cogwerx Zeppelin",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "SEA018",
      image: "SEA018",
      
      
      print: "SEA018",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA018"],
    sets: [Release.HighSeas],
    specialImage: "SEA018",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this hits a hero, you may {t} a cog you control. If you do, create a Golden Cog token.

**Twice per Turn Instant** - {t} a cog you control: This gets +1{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "cogwerx-zeppelin-yellow",
    classes: [Class.Mechanologist],
    defaultImage: "SEA019",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Cogwerx Zeppelin",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "SEA019",
      image: "SEA019",
      
      
      print: "SEA019",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA019"],
    sets: [Release.HighSeas],
    specialImage: "SEA019",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this hits a hero, you may {t} a cog you control. If you do, create a Golden Cog token.

**Twice per Turn Instant** - {t} a cog you control: This gets +1{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "cogwerx-zeppelin-blue",
    classes: [Class.Mechanologist],
    defaultImage: "SEA020",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Cogwerx Zeppelin",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "SEA020",
      image: "SEA020",
      
      
      print: "SEA020",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA020"],
    sets: [Release.HighSeas],
    specialImage: "SEA020",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this hits a hero, you may {t} a cog you control. If you do, create a Golden Cog token.

**Twice per Turn Instant** - {t} a cog you control: This gets +1{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikko Wahyudi"],
    cardIdentifier: "compass-of-sunken-depths",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA045",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Taylor],
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
    setIdentifiers: ["AGB003","SEA045"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas],
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
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Conqueror of the High Seas",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "SEA130",
      image: "SEA130",
      
      
      print: "SEA130",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Max Kostin"],
      foiling: Foiling.C,
      identifier: "SEA130",
      image: "SEA130_V2",
      
      
      print: "SEA130-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA130"],
    sets: [Release.HighSeas],
    specialImage: "SEA130_V2",
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
    artists: ["MJ Fetesio"],
    cardIdentifier: "consign-to-cosmos--shock-yellow",
    classes: [Class.Wizard],
    defaultImage: "SEA259",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Oscilio],
    name: "Consign to Cosmos // Shock",
    printings: [{
        artists: ["MJ Fetesio"],
      
      identifier: "SEA259",
      image: "SEA259",
      isExpansionSlot: true,
      
      print: "SEA259",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA259"],
    sets: [Release.HighSeas],
    specialImage: "SEA259",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action,Type.Instant],
    typeText: "Lightning Wizard Action // Lightning Instant",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Meld**

Banish X instant and/or aura cards from any graveyard, where X is the amount of arcane damage you've dealt this turn.

//

Deal 1 arcane damage to any target.`,
    
    
    
    
    keywords: [Keyword.Meld],
    
    
    meta: [Meta.Expansion],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Galih M"],
    cardIdentifier: "copper-cog-blue",
    classes: [Class.Mechanologist],
    defaultImage: "SEA021",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Copper Cog",
    printings: [{
        artists: ["Galih M"],
      
      identifier: "SEA021",
      image: "SEA021",
      
      
      print: "SEA021",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA021"],
    sets: [Release.HighSeas],
    specialImage: "SEA021",
    subtypes: [Subtype.Item,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Cog Item",

    
    
    cost: 0,
    
    
    functionalText: `**Unlimited**

**Crank**

This enters the arena with 2 steam counters. At the start of your turn, destroy this unless you remove a steam counter from it.`,
    
    
    
    
    keywords: [Keyword.Crank,Keyword.Unlimited],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Alexandra Malygina","Sam Yang"],
    cardIdentifier: "cracked-bauble-yellow",
    classes: [Class.Generic],
    defaultImage: "SEA246",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
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
    artists: ["Eryk Szczygieł"],
    cardIdentifier: "crash-down-the-gates-red",
    classes: [Class.Generic],
    defaultImage: "SEA198",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Crash Down the Gates",
    printings: [{
        artists: ["Eryk Szczygieł"],
      
      identifier: "SEA198",
      image: "SEA198",
      
      
      print: "SEA198",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA198"],
    sets: [Release.HighSeas],
    specialImage: "SEA198",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this attacks a hero, they reveal the top card of their deck. If this has {p} greater than the revealed card, this gets +2{p}.

When this hits a hero, destroy the top card of their deck.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Eryk Szczygieł"],
    cardIdentifier: "crash-down-the-gates-yellow",
    classes: [Class.Generic],
    defaultImage: "SEA199",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Crash Down the Gates",
    printings: [{
        artists: ["Eryk Szczygieł"],
      
      identifier: "SEA199",
      image: "SEA199",
      
      
      print: "SEA199",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA199"],
    sets: [Release.HighSeas],
    specialImage: "SEA199",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this attacks a hero, they reveal the top card of their deck. If this has {p} greater than the revealed card, this gets +2{p}.

When this hits a hero, destroy the top card of their deck.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Eryk Szczygieł"],
    cardIdentifier: "crash-down-the-gates-blue",
    classes: [Class.Generic],
    defaultImage: "SEA200",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Crash Down the Gates",
    printings: [{
        artists: ["Eryk Szczygieł"],
      
      identifier: "SEA200",
      image: "SEA200",
      
      
      print: "SEA200",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA200"],
    sets: [Release.HighSeas],
    specialImage: "SEA200",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this attacks a hero, they reveal the top card of their deck. If this has {p} greater than the revealed card, this gets +2{p}.

When this hits a hero, destroy the top card of their deck.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Narendra B Adi"],
    cardIdentifier: "cutty-shark-quick-clip-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA076",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Cutty Shark, Quick Clip",
    printings: [{
        artists: ["Narendra B Adi"],
      
      identifier: "SEA076",
      image: "SEA076",
      
      
      print: "SEA076",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Narendra B Adi"],
      foiling: Foiling.C,
      identifier: "SEA076",
      image: "SEA076_V2",
      
      
      print: "SEA076-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Common,Rarity.Marvel],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA076"],
    sets: [Release.HighSeas],
    specialImage: "SEA076_V2",
    subtypes: [Subtype.Ally,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Ally",

    
    
    cost: 1,
    
    
    functionalText: `**Action** - {r}, {t}: **Attack**

**Once per Turn Action** - {r}: Your next ally attack this turn gets +1{p}. **Go again**

**Watery Grave**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.WateryGrave],
    
    life: 4,
    
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mario Wibisono"],
    cardIdentifier: "dead-threads",
    classes: [Class.Necromancer],
    defaultImage: "SEA080",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Taylor],
    name: "Dead Threads",
    printings: [{
        artists: ["Mario Wibisono"],
      foiling: Foiling.R,
      identifier: "SEA080",
      image: "SEA080",
      
      
      print: "SEA080-Rainbow",
      rarity: Rarity.Legendary,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Mario Wibisono"],
      foiling: Foiling.C,
      identifier: "SEA080",
      image: "SEA080_V2",
      
      
      print: "SEA080-Cold-Extended Art",
      rarity: Rarity.Legendary,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Legendary],
    rarity: Rarity.Legendary,
    setIdentifiers: ["SEA080"],
    sets: [Release.HighSeas],
    specialImage: "SEA080_V2",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Necromancer Equipment - Chest",

    
    
    
    defense: 1,
    
    functionalText: `**Instant** - {t}: Gain {r}. Activate this only if an ally has been put into your graveyard this turn.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["soyameii"],
    cardIdentifier: "deny-redemption-red",
    classes: [Class.Runeblade],
    defaultImage: "SEA254",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Deny Redemption",
    printings: [{
        artists: ["soyameii"],
      
      identifier: "SEA254",
      image: "SEA254",
      isExpansionSlot: true,
      
      print: "SEA254",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA254"],
    sets: [Release.HighSeas],
    specialImage: "SEA254",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Runeblade Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks a hero with more {h} than you, deal 1 arcane damage to them. This damage can't be prevented.

**Instant** - Discard this: Heroes can't gain {h} this turn.`,
    
    
    
    
    
    
    
    meta: [Meta.Expansion],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mario Wibisono"],
    cardIdentifier: "diamond-amulet-blue",
    classes: [Class.Generic],
    defaultImage: "SEA190",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Diamond Amulet",
    printings: [{
        artists: ["Mario Wibisono"],
      
      identifier: "SEA190",
      image: "SEA190",
      
      
      print: "SEA190",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Mario Wibisono"],
      foiling: Foiling.C,
      identifier: "SEA190",
      image: "SEA190_V2",
      
      
      print: "SEA190-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA190"],
    sets: [Release.HighSeas],
    specialImage: "SEA190_V2",
    subtypes: [Subtype.Item,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action - Item",

    
    
    cost: 0,
    
    
    functionalText: `**Instant** - Destroy this: Gain 1 action point.

**Legend of the Watery Grave**`,
    
    
    
    
    keywords: [Keyword.Legendary,Keyword.WateryGrave],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Jefrey Yonathan"],
    cardIdentifier: "divvy-up-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA144",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Divvy Up",
    printings: [{
        artists: ["Jefrey Yonathan"],
      
      identifier: "SEA144",
      image: "SEA144",
      
      
      print: "SEA144",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Jefrey Yonathan"],
      foiling: Foiling.C,
      identifier: "SEA144",
      image: "SEA144_V2",
      
      
      print: "SEA144-Cold",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA144"],
    sets: [Release.HighSeas],
    specialImage: "SEA144_V2",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Remove half the gold counters from Treasure Island, rounded up. If you are a Thief, instead remove all of them.

Create Gold tokens equal to the number of gold counters removed this way.`,
    
    
    
    
    
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Jefrey Yonathan"],
    cardIdentifier: "draw-back-the-hammer-red",
    classes: [Class.Mechanologist],
    defaultImage: "SEA039",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Draw Back the Hammer",
    printings: [{
        artists: ["Jefrey Yonathan"],
      
      identifier: "SEA039",
      image: "SEA039",
      
      
      print: "SEA039",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA039"],
    sets: [Release.HighSeas],
    specialImage: "SEA039",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Mechanologist Action",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `Your next Mechanologist attack this turn gets +4{p}.

You may {u} a gun you control.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Galih M"],
    cardIdentifier: "drop-the-anchor-red",
    classes: [Class.Ranger],
    defaultImage: "SEA100",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Drop the Anchor",
    printings: [{
        artists: ["Galih M"],
      
      identifier: "SEA100",
      image: "SEA100",
      
      
      print: "SEA100",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA100"],
    sets: [Release.HighSeas],
    specialImage: "SEA100",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Ranger Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Your next arrow attack this turn gets +3{p} and "When this hits a hero, {t} them and all allies they control."

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  }];
  const cards2: Card[] =  [{
    artists: ["M Fakhrur Rozzi"],
    cardIdentifier: "dry-powder-shot-red",
    classes: [Class.Ranger],
    defaultImage: "SEA106",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Dry Powder Shot",
    printings: [{
        artists: ["M Fakhrur Rozzi"],
      
      identifier: "SEA106",
      image: "SEA106",
      
      
      print: "SEA106",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA106"],
    sets: [Release.HighSeas],
    specialImage: "SEA106",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Ranger Action - Arrow Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this is put face-up into your arsenal, it gets +2{p} this turn.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Firaz M. Rasyid"],
    cardIdentifier: "entangling-shot-red",
    classes: [Class.Ranger],
    defaultImage: "SEA107",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Entangling Shot",
    printings: [{
        artists: ["Firaz M. Rasyid"],
      
      identifier: "SEA107",
      image: "SEA107",
      
      
      print: "SEA107",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA107"],
    sets: [Release.HighSeas],
    specialImage: "SEA107",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Ranger Action - Arrow Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this is put face-up into your arsenal, you may {t} target hero.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Sariya Asavametha"],
    cardIdentifier: "escalate-bloodshed-red",
    classes: [Class.Warrior],
    defaultImage: "SEA253",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Boltyn,Hero.Dorinthea,Hero.Emperor,Hero.Fang,Hero.Kassai,Hero.Olympia],
    name: "Escalate Bloodshed",
    printings: [{
        artists: ["Sariya Asavametha"],
      
      identifier: "SEA253",
      image: "SEA253",
      isExpansionSlot: true,
      
      print: "SEA253",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA253"],
    sets: [Release.HighSeas],
    specialImage: "SEA253",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Warrior Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `Whenever a hero draws a card during an action phase, they lose 1{h}.

At the beginning of each hero's action phase, they draw a card.

At the beginning of each hero's end phase, if a weapon did not attack this turn, destroy this.`,
    
    
    
    
    
    
    
    meta: [Meta.Expansion],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "everbloom--life-blue",
    classes: [Class.NotClassed],
    defaultImage: "SEA258",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Briar,Hero.Florian,Hero.Jarl,Hero.Oldhim,Hero.Starvo,Hero.Terra,Hero.Verdance],
    name: "Everbloom // Life",
    printings: [{
        artists: ["MJ Fetesio"],
      
      identifier: "SEA258",
      image: "SEA258",
      isExpansionSlot: true,
      
      print: "SEA258",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA258"],
    sets: [Release.HighSeas],
    specialImage: "SEA258",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action,Type.Instant],
    typeText: "Earth Action // Instant",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Meld**

Choose an action card in a graveyard with cost less than the total {h} you've gained this turn. Put it on the bottom of its owner's deck.

**Go again**

//

Gain 1{h}`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Meld],
    
    
    meta: [Meta.Expansion],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    talents: [Talent.Earth],
  
  
  },{
    artists: ["Anthony Avon"],
    cardIdentifier: "expedition-to-azuro-keys-red",
    classes: [Class.Pirate],
    defaultImage: "SEA155",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Expedition to Azuro Keys",
    printings: [{
        artists: ["Anthony Avon"],
      
      identifier: "SEA155",
      image: "SEA155",
      
      
      print: "SEA155",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Anthony Avon"],
      foiling: Foiling.C,
      identifier: "SEA155",
      image: "SEA155_V2",
      
      
      print: "SEA155-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA155"],
    sets: [Release.HighSeas],
    specialImage: "SEA155_V2",
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
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Expedition to Blackwater Strait",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "SEA156",
      image: "SEA156",
      
      
      print: "SEA156",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Tomasz Jedruszek"],
      foiling: Foiling.C,
      identifier: "SEA156",
      image: "SEA156_V2",
      
      
      print: "SEA156-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA156"],
    sets: [Release.HighSeas],
    specialImage: "SEA156_V2",
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
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Expedition to Dreadfall Reach",
    printings: [{
        artists: ["Arkoii"],
      
      identifier: "SEA157",
      image: "SEA157",
      
      
      print: "SEA157",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Arkoii"],
      foiling: Foiling.C,
      identifier: "SEA157",
      image: "SEA157_V2",
      
      
      print: "SEA157-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA157"],
    sets: [Release.HighSeas],
    specialImage: "SEA157_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this attacks, you may put a gold counter on Treasure Island.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "expedition-to-horizons-mantle-red",
    classes: [Class.Pirate],
    defaultImage: "SEA158",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Expedition to Horizon's Mantle",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SEA158",
      image: "SEA158",
      
      
      print: "SEA158",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Carlos Cruchaga"],
      foiling: Foiling.C,
      identifier: "SEA158",
      image: "SEA158_V2",
      
      
      print: "SEA158-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA158"],
    sets: [Release.HighSeas],
    specialImage: "SEA158_V2",
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
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
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
    setIdentifiers: ["AGB013","SEA212"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas],
    specialImage: "SEA212",
    subtypes: [],
    types: [Type.Block],
    typeText: "Generic Block",

    
    
    
    defense: 1,
    
    functionalText: `When this is put into your graveyard from anywhere, gain 3{h}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ramza Ardyputra"],
    cardIdentifier: "fiddlers-green-yellow",
    classes: [Class.Generic],
    defaultImage: "SEA213",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Fiddler's Green",
    printings: [{
        artists: ["Ramza Ardyputra"],
      
      identifier: "SEA213",
      image: "SEA213",
      
      
      print: "SEA213",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA213"],
    sets: [Release.HighSeas],
    specialImage: "SEA213",
    subtypes: [],
    types: [Type.Block],
    typeText: "Generic Block",

    
    
    
    defense: 1,
    
    functionalText: `When this is put into your graveyard from anywhere, gain 2{h}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ramza Ardyputra"],
    cardIdentifier: "fiddlers-green-blue",
    classes: [Class.Generic],
    defaultImage: "SEA214",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Fiddler's Green",
    printings: [{
        artists: ["Ramza Ardyputra"],
      
      identifier: "SEA214",
      image: "SEA214",
      
      
      print: "SEA214",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA214"],
    sets: [Release.HighSeas],
    specialImage: "SEA214",
    subtypes: [],
    types: [Type.Block],
    typeText: "Generic Block",

    
    
    
    defense: 1,
    
    functionalText: `When this is put into your graveyard from anywhere, gain 1{h}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Reza Aswadananta"],
    cardIdentifier: "fire-in-the-hole-red",
    classes: [Class.Ranger],
    defaultImage: "SEA101",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Fire in the Hole",
    printings: [{
        artists: ["Reza Aswadananta"],
      
      identifier: "SEA101",
      image: "SEA101",
      
      
      print: "SEA101",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA101"],
    sets: [Release.HighSeas],
    specialImage: "SEA101",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Ranger Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Your next arrow attack this turn gets +3{p}.

You may {u} a bow you control.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Aluísio Cervelle"],
    cardIdentifier: "fish-fingers",
    classes: [Class.Pirate],
    defaultImage: "SEA128",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv,Hero.Taylor],
    name: "Fish Fingers",
    printings: [{
        artists: ["Aluísio Cervelle"],
      
      identifier: "SEA128",
      image: "SEA128",
      
      
      print: "SEA128",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA128"],
    sets: [Release.HighSeas],
    specialImage: "SEA128",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Pirate Equipment - Arms",

    
    
    
    defense: 1,
    
    functionalText: `**Action** - {r}, destroy this: Your next attack this turn gets +1{p}. **Go again**

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak,Keyword.GoAgain],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["SanSan"],
    cardIdentifier: "flying-high-red",
    classes: [Class.Generic],
    defaultImage: "SEA206",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
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
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
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
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
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
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "fools-gold-yellow",
    classes: [Class.Generic],
    defaultImage: "SEA215",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Fool's Gold",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "SEA215",
      image: "SEA215",
      
      
      print: "SEA215",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA215"],
    sets: [Release.HighSeas],
    specialImage: "SEA215",
    subtypes: [],
    types: [Type.Resource],
    typeText: "Generic Resource",

    
    
    
    
    
    functionalText: `When this is discarded, create a Gold token.`,
    
    
    
    
    
    
    
    
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "give-no-quarter-blue",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA049",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Give No Quarter",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "SEA049",
      image: "SEA049",
      
      
      print: "SEA049",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.R,
      identifier: "SEA049",
      image: "SEA049_V2",
      
      
      print: "SEA049-Rainbow-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA049"],
    sets: [Release.HighSeas],
    specialImage: "SEA049_V2",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `The next 2 ally cards with watery grave you play this turn cost {r}{r}{r} less to play.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kyxarie Peralta"],
    cardIdentifier: "glidewell-fins",
    classes: [Class.Ranger],
    defaultImage: "SEA097",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide,Hero.Taylor],
    name: "Glidewell Fins",
    printings: [{
        artists: ["Kyxarie Peralta"],
      
      identifier: "SEA097",
      image: "SEA097",
      
      
      print: "SEA097",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA097"],
    sets: [Release.HighSeas],
    specialImage: "SEA097",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Ranger Equipment - Arms",

    
    
    
    defense: 1,
    
    functionalText: `**Action** - {r}, destroy this: Put an arrow from your hand face-up into your arsenal. It gets +1{p} this turn. **Go again**

**Battleworn**`,
    
    
    
    
    keywords: [Keyword.Battleworn],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikolay Moskvin","Stormy Elia Fanggidae"],
    cardIdentifier: "gold",
    classes: [Class.Generic],
    defaultImage: "SEA244",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
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
      foiling: Foiling.C,
      identifier: "SEA244",
      image: "SEA244_V2",
      
      
      print: "SEA244-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Common,Rarity.Marvel,Rarity.Promo,Rarity.Token],
    rarity: Rarity.Basic,
    setIdentifiers: ["AGB031","BET030","DYN243","FAB121","FAB279","HVY243","KSI030","LGS229","OLA030","SEA244","VIC030"],
    sets: [Release.ArmoryDeckGravyBones,Release.BetsyBlitzDeck,Release.Dynasty,Release.HeavyHitters,Release.HighSeas,Release.KassaiBlitzDeck,Release.OlympiaBlitzDeck,Release.Promos,Release.VictorBlitzDeck],
    specialImage: "SEA244_V2",
    subtypes: [Subtype.Item],
    types: [Type.Token],
    typeText: "Generic Token - Item",

    
    
    
    
    
    functionalText: `**Action** - {r}{r}, destroy this: Draw a card. **Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "gold-hunter-ketch-yellow",
    classes: [Class.Pirate],
    defaultImage: "SEA165",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Gold Hunter Ketch",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "SEA165",
      image: "SEA165",
      
      
      print: "SEA165",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Faizal Fikri"],
      foiling: Foiling.C,
      identifier: "SEA165",
      image: "SEA165_V2",
      
      
      print: "SEA165-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA165"],
    sets: [Release.HighSeas],
    specialImage: "SEA165_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 4,
    defense: 2,
    
    functionalText: `If you control less Gold than an opponent, this costs {r}{r} less to play.`,
    
    
    
    
    
    
    
    
    
    pitch: 2,
    power: 7,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Maerel Hibadita"],
    cardIdentifier: "gold-hunter-lightsail-yellow",
    classes: [Class.Pirate],
    defaultImage: "SEA162",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Gold Hunter Lightsail",
    printings: [{
        artists: ["Maerel Hibadita"],
      
      identifier: "SEA162",
      image: "SEA162",
      
      
      print: "SEA162",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Maerel Hibadita"],
      foiling: Foiling.C,
      identifier: "SEA162",
      image: "SEA162_V2",
      
      
      print: "SEA162-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA162"],
    sets: [Release.HighSeas],
    specialImage: "SEA162_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `When this attacks, if you control less Gold than an opponent, this gets **go again**.`,
    
    
    
    
    
    
    
    
    
    pitch: 2,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Esty Swandana"],
    cardIdentifier: "gold-hunter-longboat-yellow",
    classes: [Class.Pirate],
    defaultImage: "SEA163",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Gold Hunter Longboat",
    printings: [{
        artists: ["Esty Swandana"],
      
      identifier: "SEA163",
      image: "SEA163",
      
      
      print: "SEA163",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Esty Swandana"],
      foiling: Foiling.C,
      identifier: "SEA163",
      image: "SEA163_V2",
      
      
      print: "SEA163-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA163"],
    sets: [Release.HighSeas],
    specialImage: "SEA163_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `If you control less Gold than an opponent, this gets +2{p}.`,
    
    
    
    
    
    
    
    
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Daniel Jiménez"],
    cardIdentifier: "gold-hunter-marauder-yellow",
    classes: [Class.Pirate],
    defaultImage: "SEA164",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Gold Hunter Marauder",
    printings: [{
        artists: ["Daniel Jiménez"],
      
      identifier: "SEA164",
      image: "SEA164",
      
      
      print: "SEA164",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Daniel Jiménez"],
      foiling: Foiling.C,
      identifier: "SEA164",
      image: "SEA164_V2",
      
      
      print: "SEA164-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA164"],
    sets: [Release.HighSeas],
    specialImage: "SEA164_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `If you control less Gold than an opponent, this gets **overpower**.`,
    
    
    
    
    
    
    
    
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "gold-the-tip-yellow",
    classes: [Class.Pirate,Class.Ranger],
    defaultImage: "SEA088",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Marlynn],
    name: "Gold the Tip",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "SEA088",
      image: "SEA088",
      
      
      print: "SEA088",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA088"],
    sets: [Release.HighSeas],
    specialImage: "SEA088",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Ranger Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Your next arrow attack this turn gets +3{p}.

If there is a yellow arrow face-up in your arsenal, create a Gold token.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "gold-baited-hook",
    classes: [Class.Pirate],
    defaultImage: "SEA125",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv,Hero.Taylor],
    name: "Gold-Baited Hook",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      foiling: Foiling.R,
      identifier: "SEA125",
      image: "SEA125",
      
      
      print: "SEA125-Rainbow",
      rarity: Rarity.Legendary,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Tomasz Jedruszek"],
      foiling: Foiling.C,
      identifier: "SEA125",
      image: "SEA125_V2",
      
      
      print: "SEA125-Cold",
      rarity: Rarity.Legendary,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Legendary],
    rarity: Rarity.Legendary,
    setIdentifiers: ["SEA125"],
    sets: [Release.HighSeas],
    specialImage: "SEA125_V2",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Pirate Equipment - Arms",

    
    
    
    defense: 1,
    
    functionalText: `**Action** - {t}: Your next Pirate attack this turn gets "When this hits a hero, **steal** a Gold token they control, otherwise create a Gold token." At the beginning of your end phase, if you haven't created or stolen a Gold this turn, destroy this. **Go again**

**Battleworn**`,
    
    
    
    
    keywords: [Keyword.Battleworn,Keyword.GoAgain,Keyword.Steal],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "golden-cog",
    classes: [Class.Mechanologist],
    defaultImage: "SEA042",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Shiyana,Hero.Teklovossen,Hero.Yorick],
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
      image: "SEA042_V2",
      
      
      print: "SEA042-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Carlos Cruchaga"],
      foiling: Foiling.C,
      identifier: "SEA042",
      image: "SEA042_V2_BACK",
      
      
      print: "SEA042-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["SEA042"],
    sets: [Release.HighSeas],
    specialImage: "SEA042_V2",
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
    legalHeroes: [Hero.Puffin],
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
    artists: ["Aluísio Cervelle"],
    cardIdentifier: "golden-tipple-red",
    classes: [Class.Pirate],
    defaultImage: "SEA159",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Golden Tipple",
    printings: [{
        artists: ["Aluísio Cervelle"],
      
      identifier: "SEA159",
      image: "SEA159",
      
      
      print: "SEA159",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Aluísio Cervelle"],
      foiling: Foiling.C,
      identifier: "SEA159",
      image: "SEA159_V2",
      
      
      print: "SEA159-Cold",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA159"],
    sets: [Release.HighSeas],
    specialImage: "SEA159_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `When this attacks, you may discard a yellow card. If you do, draw a card and create a Gold token.

**Go again**`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Aluísio Cervelle"],
    cardIdentifier: "golden-tipple-yellow",
    classes: [Class.Pirate],
    defaultImage: "SEA160",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Golden Tipple",
    printings: [{
        artists: ["Aluísio Cervelle"],
      
      identifier: "SEA160",
      image: "SEA160",
      
      
      print: "SEA160",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Aluísio Cervelle"],
      foiling: Foiling.C,
      identifier: "SEA160",
      image: "SEA160_V2",
      
      
      print: "SEA160-Cold",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA160"],
    sets: [Release.HighSeas],
    specialImage: "SEA160_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `When this attacks, you may discard a yellow card. If you do, draw a card and create a Gold token.

**Go again**`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Aluísio Cervelle"],
    cardIdentifier: "golden-tipple-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA161",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Golden Tipple",
    printings: [{
        artists: ["Aluísio Cervelle"],
      
      identifier: "SEA161",
      image: "SEA161",
      
      
      print: "SEA161",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Aluísio Cervelle"],
      foiling: Foiling.C,
      identifier: "SEA161",
      image: "SEA161_V2",
      
      
      print: "SEA161-Cold",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["AGB021","SEA161"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas],
    specialImage: "SEA161_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `When this attacks, you may discard a yellow card. If you do, draw a card and create a Gold token.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Bastien Jez"],
    cardIdentifier: "goldfin-harpoon",
    classes: [Class.Pirate,Class.Ranger],
    defaultImage: "SEA093",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Marlynn],
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
      image: "SEA093_V2",
      
      
      print: "SEA093-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["SEA093"],
    sets: [Release.HighSeas],
    specialImage: "SEA093_V2",
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
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Goldkiss Rum",
    printings: [{
        artists: ["Mario Wibisono"],
      
      identifier: "SEA245",
      image: "SEA245",
      
      
      print: "SEA245",
      rarity: Rarity.Basic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Mario Wibisono"],
      foiling: Foiling.C,
      identifier: "SEA245",
      image: "SEA245_V2",
      
      
      print: "SEA245-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["SEA245"],
    sets: [Release.HighSeas],
    specialImage: "SEA245_V2",
    subtypes: [Subtype.Item],
    types: [Type.Token],
    typeText: "Generic Token - Item",

    
    
    
    
    
    functionalText: `**Instant** - {t} your hero, destroy this: Your next action this turn gets **go again**. Your hero can't {u} this turn unless they're a Pirate.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Andrew Chou"],
    cardIdentifier: "goldwing-turbine-red",
    classes: [Class.Mechanologist],
    defaultImage: "SEA036",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Goldwing Turbine",
    printings: [{
        artists: ["Andrew Chou"],
      
      identifier: "SEA036",
      image: "SEA036",
      
      
      print: "SEA036",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA036"],
    sets: [Release.HighSeas],
    specialImage: "SEA036",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Mechanologist Action",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `Your next Mechanologist attack this turn gets +3{p}.

Create a Golden Cog token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Andrew Chou"],
    cardIdentifier: "goldwing-turbine-yellow",
    classes: [Class.Mechanologist],
    defaultImage: "SEA037",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Goldwing Turbine",
    printings: [{
        artists: ["Andrew Chou"],
      
      identifier: "SEA037",
      image: "SEA037",
      
      
      print: "SEA037",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA037"],
    sets: [Release.HighSeas],
    specialImage: "SEA037",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Mechanologist Action",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `Your next Mechanologist attack this turn gets +2{p}.

Create a Golden Cog token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Andrew Chou"],
    cardIdentifier: "goldwing-turbine-blue",
    classes: [Class.Mechanologist],
    defaultImage: "SEA038",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Goldwing Turbine",
    printings: [{
        artists: ["Andrew Chou"],
      
      identifier: "SEA038",
      image: "SEA038",
      
      
      print: "SEA038",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA038"],
    sets: [Release.HighSeas],
    specialImage: "SEA038",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Mechanologist Action",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `Your next Mechanologist attack this turn gets +1{p}.

Create a Golden Cog token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "gravy-bones",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA044",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
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
      image: "SEA044_V2",
      
      
      print: "SEA044-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.C,
      identifier: "SEA044",
      image: "SEA044_V2_BACK",
      
      
      print: "SEA044-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["AGB002","SEA044"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas],
    specialImage: "SEA044_V2",
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
    legalHeroes: [Hero.GravyBones],
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
      image: "SEA043_V2",
      
      
      print: "SEA043-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.C,
      identifier: "SEA043",
      image: "SEA043_V2_BACK",
      
      
      print: "SEA043-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Basic,
    setIdentifiers: ["AGB001","HER138","SEA043"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas,Release.Promos],
    specialImage: "SEA043_V2",
    subtypes: [],
    types: [Type.Hero],
    typeText: "Pirate Necromancer Hero",

    
    
    
    
    
    functionalText: `**Instant** - {t}, destroy a Gold you control: Draw a card, then discard a card.

If a blue card has been put into your graveyard this turn, you may play cards with watery grave from your graveyard.`,
    
    hero: Hero.GravyBones,
    intellect: 4,
    
    
    
    life: 40,
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Sam Yang"],
    cardIdentifier: "hammerhead-harpoon-cannon",
    classes: [Class.Pirate,Class.Ranger],
    defaultImage: "SEA084",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Marlynn],
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
    artists: ["Igor Heras"],
    cardIdentifier: "head-shot-red",
    classes: [Class.Ranger],
    defaultImage: "SEA111",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Head Shot",
    printings: [{
        artists: ["Igor Heras"],
      
      identifier: "SEA111",
      image: "SEA111",
      
      
      print: "SEA111",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["1HP240","ARC057","SEA111"],
    sets: [Release.ArcaneRising,Release.HighSeas,Release.HistoryPack1],
    specialImage: "SEA111",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Ranger Action - Arrow Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this is put face-up into your arsenal, it gets +2{p} this turn.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Igor Heras"],
    cardIdentifier: "head-shot-yellow",
    classes: [Class.Ranger],
    defaultImage: "SEA112",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Head Shot",
    printings: [{
        artists: ["Igor Heras"],
      
      identifier: "SEA112",
      image: "SEA112",
      
      
      print: "SEA112",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["1HP241","ARC058","SEA112"],
    sets: [Release.ArcaneRising,Release.HighSeas,Release.HistoryPack1],
    specialImage: "SEA112",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Ranger Action - Arrow Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this is put face-up into your arsenal, it gets +2{p} this turn.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Igor Heras"],
    cardIdentifier: "head-shot-blue",
    classes: [Class.Ranger],
    defaultImage: "SEA113",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Head Shot",
    printings: [{
        artists: ["Igor Heras"],
      
      identifier: "SEA113",
      image: "SEA113",
      
      
      print: "SEA113",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["1HP242","ARC059","SEA113"],
    sets: [Release.ArcaneRising,Release.HighSeas,Release.HistoryPack1],
    specialImage: "SEA113",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Ranger Action - Arrow Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this is put face-up into your arsenal, it gets +2{p} this turn.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Camille Alquier"],
    cardIdentifier: "head-stone",
    classes: [Class.Necromancer],
    defaultImage: "SEA081",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Taylor],
    name: "Head Stone",
    printings: [{
        artists: ["Camille Alquier"],
      
      identifier: "SEA081",
      image: "SEA081",
      
      
      print: "SEA081",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA081"],
    sets: [Release.HighSeas],
    specialImage: "SEA081",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Necromancer Equipment - Head",

    
    
    
    defense: 1,
    
    functionalText: `**Instant** - Destroy this: Destroy the top card of your deck.

**Battleworn**`,
    
    
    
    
    keywords: [Keyword.Battleworn],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "heave-ho-blue",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA057",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Heave Ho!",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SEA057",
      image: "SEA057",
      
      
      print: "SEA057",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA057"],
    sets: [Release.HighSeas],
    specialImage: "SEA057",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Your next Pirate ally attack this turn gets overpower and "When this hits a hero, create a Gold token."

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Satriasa"],
    cardIdentifier: "helmsmans-peak",
    classes: [Class.Generic],
    defaultImage: "SEA180",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Helmsman's Peak",
    printings: [{
        artists: ["Satriasa"],
      
      identifier: "SEA180",
      image: "SEA180",
      
      
      print: "SEA180",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA180"],
    sets: [Release.HighSeas],
    specialImage: "SEA180",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Head",

    
    
    
    defense: 1,
    
    functionalText: `When this defends, look at the top card of your deck.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Bastien Jez"],
    cardIdentifier: "herald-of-sekem-red",
    classes: [Class.Illusionist],
    defaultImage: "SEA260",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Prism],
    name: "Herald of Sekem",
    printings: [{
        artists: ["Bastien Jez"],
      
      identifier: "SEA260",
      image: "SEA260",
      isExpansionSlot: true,
      
      print: "SEA260",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA260"],
    sets: [Release.HighSeas],
    specialImage: "SEA260",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Light Illusionist Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks, you may put a yellow card from your hand into your soul. If you do, deal 2 arcane damage to any target.

**Phantasm**`,
    
    
    
    
    keywords: [Keyword.Phantasm],
    
    
    meta: [Meta.Expansion],
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    talents: [Talent.Light],
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "hms-barracuda-yellow",
    classes: [Class.Pirate],
    defaultImage: "SEA134",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "HMS Barracuda",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "SEA134",
      image: "SEA134",
      
      
      print: "SEA134",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Max Kostin"],
      foiling: Foiling.C,
      identifier: "SEA134",
      image: "SEA134_V2",
      
      
      print: "SEA134-Cold-Extended Art",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA134"],
    sets: [Release.HighSeas],
    specialImage: "SEA134_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 4,
    defense: 3,
    
    functionalText: `When this hits a hero, destroy an ally they control.

**High Tide** - If there are 2 or more blue cards in your pitch zone, this gets +1{p} and **overpower**.`,
    
    
    
    
    keywords: [Keyword.HighTide],
    
    
    
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "hms-kraken-yellow",
    classes: [Class.Pirate],
    defaultImage: "SEA135",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "HMS Kraken",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "SEA135",
      image: "SEA135",
      
      
      print: "SEA135",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Tomasz Jedruszek"],
      foiling: Foiling.C,
      identifier: "SEA135",
      image: "SEA135_V2",
      
      
      print: "SEA135-Cold-Extended Art",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA135"],
    sets: [Release.HighSeas],
    specialImage: "SEA135_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 4,
    defense: 3,
    
    functionalText: `When this hits a hero, destroy an item they control.

**High Tide** - If there are 2 or more blue cards in your pitch zone, this gets +1{p} and **overpower**.`,
    
    
    
    
    keywords: [Keyword.HighTide],
    
    
    
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "hms-marlin-yellow",
    classes: [Class.Pirate],
    defaultImage: "SEA136",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "HMS Marlin",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "SEA136",
      image: "SEA136",
      
      
      print: "SEA136",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Thomas Ressuge"],
      foiling: Foiling.C,
      identifier: "SEA136",
      image: "SEA136_V2",
      
      
      print: "SEA136-Cold-Extended Art",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA136"],
    sets: [Release.HighSeas],
    specialImage: "SEA136_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 4,
    defense: 3,
    
    functionalText: `When this hits a hero, destroy the top card of their deck.

**High Tide** - If there are 2 or more blue cards in your pitch zone, this gets +1{p} and **overpower**.`,
    
    
    
    
    keywords: [Keyword.HighTide],
    
    
    
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "hoist-em-up-red",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA055",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
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
    artists: ["Reza Aswadananta"],
    cardIdentifier: "hook-blue",
    classes: [Class.Ranger],
    defaultImage: "SEA103",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Hook",
    printings: [{
        artists: ["Reza Aswadananta"],
      
      identifier: "SEA103",
      image: "SEA103",
      
      
      print: "SEA103",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA103"],
    sets: [Release.HighSeas],
    specialImage: "SEA103",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Ranger Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Look at the top card of your deck. If it's an arrow, you may put it face-up into your arsenal. If you do, it gets +1{p} this turn.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Jackson Tjota"],
    cardIdentifier: "jack-be-nimble-red",
    classes: [Class.Generic],
    defaultImage: "SEA201",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Jack Be Nimble",
    printings: [{
        artists: ["Jackson Tjota"],
      
      identifier: "SEA201",
      image: "SEA201",
      
      
      print: "SEA201",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA201"],
    sets: [Release.HighSeas],
    specialImage: "SEA201",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks, you may banish a Nimblism from your graveyard. If you do, this gets +1{p} and **go again**.
When this hits a hero, steal an item they control until the end of this action phase.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Jackson Tjota"],
    cardIdentifier: "jack-be-quick-red",
    classes: [Class.Generic],
    defaultImage: "SEA202",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Jack Be Quick",
    printings: [{
        artists: ["Jackson Tjota"],
      
      identifier: "SEA202",
      image: "SEA202",
      
      
      print: "SEA202",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA202"],
    sets: [Release.HighSeas],
    specialImage: "SEA202",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks, you may banish a Nimblism from your graveyard. If you do, this gets +1{p} and **go again**.

When this hits a hero, {u} an ally they control, then steal it until the end of this action phase.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "jittery-bones-red",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA068",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Jittery Bones",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "SEA068",
      image: "SEA068",
      
      
      print: "SEA068",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["AGB009","SEA068"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas],
    specialImage: "SEA068",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks, you may discard a card or destroy the top card of your deck. If that card has watery grave, this gets **go again**.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "jittery-bones-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA069",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Jittery Bones",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "SEA069",
      image: "SEA069",
      
      
      print: "SEA069",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA069"],
    sets: [Release.HighSeas],
    specialImage: "SEA069",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks, you may discard a card or destroy the top card of your deck. If that card has watery grave, this gets **go again**.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "jittery-bones-blue",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA070",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Jittery Bones",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "SEA070",
      image: "SEA070",
      
      
      print: "SEA070",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["AGB022","SEA070"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas],
    specialImage: "SEA070",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks, you may discard a card or destroy the top card of your deck. If that card has watery grave, this gets **go again**.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kimberly Pantoni"],
    cardIdentifier: "jolly-bludger-yellow",
    classes: [Class.Mechanologist,Class.Pirate],
    defaultImage: "SEA005",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Puffin],
    name: "Jolly Bludger",
    printings: [{
        artists: ["Kimberly Pantoni"],
      
      identifier: "SEA005",
      image: "SEA005",
      
      
      print: "SEA005",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA005"],
    sets: [Release.HighSeas],
    specialImage: "SEA005",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Mechanologist Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks, you may {t} a cog you control. If you do, this gets **overpower**.

When this deals damage to a hero, **steal** that many items they control.

**Thrice per Turn Instant** - {t} a cog you control: This gets +1{p}.`,
    
    
    
    
    keywords: [Keyword.Overpower,Keyword.Steal],
    
    
    
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["soyameii"],
    cardIdentifier: "kelpie-tangled-mess-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA059",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Kelpie, Tangled Mess",
    printings: [{
        artists: ["soyameii"],
      
      identifier: "SEA059",
      image: "SEA059",
      
      
      print: "SEA059",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["soyameii"],
      foiling: Foiling.C,
      identifier: "SEA059",
      image: "SEA059_V2",
      
      
      print: "SEA059-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA059"],
    sets: [Release.HighSeas],
    specialImage: "SEA059_V2",
    subtypes: [Subtype.Ally,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Ally",

    
    
    cost: 0,
    
    
    functionalText: `**Action** - {t}: Attack

**Action** - {r}, {t}: {t} target hero or ally. **Go again**

**Watery Grave**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.WateryGrave],
    
    life: 3,
    
    
    pitch: 2,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "king-kraken-harpoon-red",
    classes: [Class.Pirate,Class.Ranger],
    defaultImage: "SEA085",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Marlynn],
    name: "King Kraken Harpoon",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "SEA085",
      image: "SEA085",
      
      
      print: "SEA085",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Faizal Fikri"],
      foiling: Foiling.R,
      identifier: "SEA085",
      image: "SEA085_V2",
      
      
      print: "SEA085-Rainbow-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA085"],
    sets: [Release.HighSeas],
    specialImage: "SEA085_V2",
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
    legalHeroes: [Hero.Marlynn],
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
      image: "SEA086_V2",
      
      
      print: "SEA086-Rainbow-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA086"],
    sets: [Release.HighSeas],
    specialImage: "SEA086_V2",
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
    artists: ["Regina Krivolapova"],
    cardIdentifier: "life-for-a-life-red",
    classes: [Class.Generic],
    defaultImage: "SEA217",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Life for a Life",
    printings: [{
        artists: ["Regina Krivolapova"],
      
      identifier: "SEA217",
      image: "SEA217",
      
      
      print: "SEA217",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Rare],
    rarity: Rarity.Common,
    setIdentifiers: ["1HP368","ARC164","SEA217"],
    sets: [Release.ArcaneRising,Release.HighSeas,Release.HistoryPack1],
    specialImage: "SEA217",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `When this is played, if you have less {h} than an opposing hero, it gets **go again**.

When this hits, gain 1{h}.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Wisnu Tan"],
    cardIdentifier: "light-fingers",
    classes: [Class.Generic],
    defaultImage: "SEA184",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Light Fingers",
    printings: [{
        artists: ["Wisnu Tan"],
      
      identifier: "SEA184",
      image: "SEA184",
      
      
      print: "SEA184",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA184"],
    sets: [Release.HighSeas],
    specialImage: "SEA184",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Arms",

    
    
    
    defense: 1,
    
    functionalText: `When this defends, if you are a Thief, steal a Gold token the attacking hero controls.

**Blade Break**`,
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "limpit-hop-a-long-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA060",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Limpit, Hop-a-long",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "SEA060",
      image: "SEA060",
      
      
      print: "SEA060",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Tomasz Jedruszek"],
      foiling: Foiling.C,
      identifier: "SEA060",
      image: "SEA060_V2",
      
      
      print: "SEA060-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["AGB016","SEA060"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas],
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
    artists: ["Galih M"],
    cardIdentifier: "line-blue",
    classes: [Class.Ranger],
    defaultImage: "SEA104",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Line",
    printings: [{
        artists: ["Galih M"],
      
      identifier: "SEA104",
      image: "SEA104",
      
      
      print: "SEA104",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA104"],
    sets: [Release.HighSeas],
    specialImage: "SEA104",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Ranger Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Look at the top card of your deck. If it's an arrow, you may put it face-up into your arsenal. If you do, it gets **go again** this turn.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Narendra B Adi"],
    cardIdentifier: "loan-shark-yellow",
    classes: [Class.Pirate],
    defaultImage: "SEA131",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Loan Shark",
    printings: [{
        artists: ["Narendra B Adi"],
      
      identifier: "SEA131",
      image: "SEA131",
      
      
      print: "SEA131",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Narendra B Adi"],
      foiling: Foiling.C,
      identifier: "SEA131",
      image: "SEA131_V2",
      
      
      print: "SEA131-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA131"],
    sets: [Release.HighSeas],
    specialImage: "SEA131_V2",
    subtypes: [Subtype.Aura,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Action - Aura",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Go again**

When this enters the arena, create 2 Gold tokens.

At the beginning of your end phase, if you haven't created or stolen a Gold this turn, destroy this, then lose 2{h} unless you discard a card.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "lost-in-transit-yellow",
    classes: [Class.Pirate],
    defaultImage: "SEA151",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Lost in Transit",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "SEA151",
      image: "SEA151",
      
      
      print: "SEA151",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Marco González"],
      foiling: Foiling.C,
      identifier: "SEA151",
      image: "SEA151_V2",
      
      
      print: "SEA151-Cold",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA151"],
    sets: [Release.HighSeas],
    specialImage: "SEA151_V2",
    subtypes: [],
    types: [Type.Block],
    typeText: "Pirate Block",

    
    
    
    defense: 3,
    
    functionalText: `When this defends, you may remove a gold counter from Treasure Island. If you do and you are a Thief, create a Gold token.`,
    
    
    
    
    
    
    
    
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  }];
  const cards3: Card[] =  [{
    artists: ["Nailsen Ivanderlie"],
    cardIdentifier: "lubricate-blue",
    classes: [Class.Mechanologist],
    defaultImage: "SEA022",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Lubricate",
    printings: [{
        artists: ["Nailsen Ivanderlie"],
      
      identifier: "SEA022",
      image: "SEA022",
      
      
      print: "SEA022",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA022"],
    sets: [Release.HighSeas],
    specialImage: "SEA022",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Mechanologist Instant",

    
    
    cost: 0,
    
    
    functionalText: `{u} up to 3 cogs you control.`,
    
    
    
    
    
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Sam Yang"],
    cardIdentifier: "marlynn",
    classes: [Class.Pirate,Class.Ranger],
    defaultImage: "SEA083",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Marlynn],
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
      image: "SEA083_V2",
      
      
      print: "SEA083-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Sam Yang"],
      foiling: Foiling.C,
      identifier: "SEA083",
      image: "SEA083_V2_BACK",
      
      
      print: "SEA083-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["SEA083"],
    sets: [Release.HighSeas],
    specialImage: "SEA083_V2",
    subtypes: [Subtype.Young],
    types: [Type.Hero],
    typeText: "Pirate Ranger Hero - Young",

    
    
    
    
    
    functionalText: `**Action** - {t}, destroy a Gold you control: Create a Goldfin Harpoon in your hand. **Go again**

Whenever you draw a card during your action phase, you may put an arrow from your hand face-up into your arsenal.`,
    
    hero: Hero.Marlynn,
    intellect: 4,
    
    keywords: [Keyword.GoAgain],
    
    life: 20,
    
    
    
    
    
    
    
    
    
    
    
    
  
  young: true
  },{
    artists: ["Sam Yang"],
    cardIdentifier: "marlynn-treasure-hunter",
    classes: [Class.Pirate,Class.Ranger],
    defaultImage: "SEA082",
    legalFormats: [Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open],
    legalHeroes: [Hero.Marlynn],
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
      image: "SEA082_V2",
      
      
      print: "SEA082-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Sam Yang"],
      foiling: Foiling.C,
      identifier: "SEA082",
      image: "SEA082_V2_BACK",
      
      
      print: "SEA082-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Basic,
    setIdentifiers: ["HER139","SEA082"],
    sets: [Release.HighSeas,Release.Promos],
    specialImage: "SEA082_V2",
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
    artists: ["Sebastian Giacobino"],
    cardIdentifier: "midas-touch-yellow",
    classes: [Class.Generic],
    defaultImage: "SEA188",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Midas Touch",
    printings: [{
        artists: ["Sebastian Giacobino"],
      
      identifier: "SEA188",
      image: "SEA188",
      
      
      print: "SEA188",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA188"],
    sets: [Release.HighSeas],
    specialImage: "SEA188",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `Destroy target ally. Its controller creates Gold tokens equal to its cost.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Jackson Tjota"],
    cardIdentifier: "money-or-your-life-red",
    classes: [Class.Generic],
    defaultImage: "SEA203",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Money or Your Life?",
    printings: [{
        artists: ["Jackson Tjota"],
      
      identifier: "SEA203",
      image: "SEA203",
      
      
      print: "SEA203",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA203"],
    sets: [Release.HighSeas],
    specialImage: "SEA203",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this hits a hero, deal 2 damage to them unless they give you a Gold token they control. If you are a Thief, repeat this process once.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Jackson Tjota"],
    cardIdentifier: "money-or-your-life-yellow",
    classes: [Class.Generic],
    defaultImage: "SEA204",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Money or Your Life?",
    printings: [{
        artists: ["Jackson Tjota"],
      
      identifier: "SEA204",
      image: "SEA204",
      
      
      print: "SEA204",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA204"],
    sets: [Release.HighSeas],
    specialImage: "SEA204",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this hits a hero, deal 2 damage to them unless they give you a Gold token they control. If you are a Thief, repeat this process once.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Jackson Tjota"],
    cardIdentifier: "money-or-your-life-blue",
    classes: [Class.Generic],
    defaultImage: "SEA205",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Money or Your Life?",
    printings: [{
        artists: ["Jackson Tjota"],
      
      identifier: "SEA205",
      image: "SEA205",
      
      
      print: "SEA205",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA205"],
    sets: [Release.HighSeas],
    specialImage: "SEA205",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this hits a hero, deal 2 damage to them unless they give you a Gold token they control. If you are a Thief, repeat this process once.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "monkey-powder-red",
    classes: [Class.Ranger],
    defaultImage: "SEA102",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Monkey Powder",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SEA102",
      image: "SEA102",
      
      
      print: "SEA102",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA102"],
    sets: [Release.HighSeas],
    specialImage: "SEA102",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Ranger Action",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `Your next arrow attack this turn gets +1{p} and **overpower**.

Draw a card.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Overpower],
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Sebastian Giacobino"],
    cardIdentifier: "moray-le-fay-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA051",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Moray le Fay",
    printings: [{
        artists: ["Sebastian Giacobino"],
      
      identifier: "SEA051",
      image: "SEA051",
      
      
      print: "SEA051",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Sebastian Giacobino"],
      foiling: Foiling.C,
      identifier: "SEA051",
      image: "SEA051_V2",
      
      
      print: "SEA051-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA051"],
    sets: [Release.HighSeas],
    specialImage: "SEA051_V2",
    subtypes: [Subtype.Ally,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Ally",

    
    
    cost: 0,
    
    
    functionalText: `**Action** - {t}: Attack

**Instant** - {r}, {t}: Put a +1{p} counter on target ally.

**Watery Grave**`,
    
    
    
    
    keywords: [Keyword.WateryGrave],
    
    life: 3,
    
    
    pitch: 2,
    power: 0,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Pavel Rtishchev (Klaher)"],
    cardIdentifier: "murderous-rabble-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA137",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Murderous Rabble",
    printings: [{
        artists: ["Pavel Rtishchev (Klaher)"],
      
      identifier: "SEA137",
      image: "SEA137",
      
      
      print: "SEA137",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Pavel Rtishchev (Klaher)"],
      foiling: Foiling.C,
      identifier: "SEA137",
      image: "SEA137_V2",
      
      
      print: "SEA137-Cold",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["AGB023","SEA137"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas],
    specialImage: "SEA137_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks, reveal the top card of your deck. This gets +X{p}, where X is the pitch value of the card revealed this way.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 3,
    power: 0,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "mutiny-on-the-battalion-barque-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA177",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Mutiny on the Battalion Barque",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "SEA177",
      image: "SEA177",
      
      
      print: "SEA177",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Max Kostin"],
      foiling: Foiling.C,
      identifier: "SEA177",
      image: "SEA177_V2",
      
      
      print: "SEA177-Cold",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA177"],
    sets: [Release.HighSeas],
    specialImage: "SEA177_V2",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `For each hero that controls more Gold than you, steal a Gold token they control.

If you gain control of 1 or more Gold tokens this way, your next attack this turn gets +2{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Brian Madya Narendra"],
    cardIdentifier: "mutiny-on-the-nimbus-sovereign-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA176",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Mutiny on the Nimbus Sovereign",
    printings: [{
        artists: ["Brian Madya Narendra"],
      
      identifier: "SEA176",
      image: "SEA176",
      
      
      print: "SEA176",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Brian Madya Narendra"],
      foiling: Foiling.C,
      identifier: "SEA176",
      image: "SEA176_V2",
      
      
      print: "SEA176-Cold",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA176"],
    sets: [Release.HighSeas],
    specialImage: "SEA176_V2",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `For each hero that controls more Gold than you, steal a Gold token they control.

If you gain control of 1 or more Gold tokens this way, your next attack this turn **gets overpower**.

Go again`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Brian Madya Narendra"],
    cardIdentifier: "mutiny-on-the-swiftwater-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA178",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Mutiny on the Swiftwater",
    printings: [{
        artists: ["Brian Madya Narendra"],
      
      identifier: "SEA178",
      image: "SEA178",
      
      
      print: "SEA178",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Brian Madya Narendra"],
      foiling: Foiling.C,
      identifier: "SEA178",
      image: "SEA178_V2",
      
      
      print: "SEA178-Cold",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA178"],
    sets: [Release.HighSeas],
    specialImage: "SEA178_V2",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `For each hero that controls more Gold than you, steal a Gold token they control.

If you gain control of 1 or more Gold tokens this way, your next attack this turn gets **go again**.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Widya Wang"],
    cardIdentifier: "nettling-shot-red",
    classes: [Class.Ranger],
    defaultImage: "SEA108",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Nettling Shot",
    printings: [{
        artists: ["Widya Wang"],
      
      identifier: "SEA108",
      image: "SEA108",
      
      
      print: "SEA108",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA108"],
    sets: [Release.HighSeas],
    specialImage: "SEA108",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Ranger Action - Arrow Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this is put face-up into your arsenal, you may {t} target ally.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Fedor Barkhatov"],
    cardIdentifier: "nimblism-red",
    classes: [Class.Generic],
    defaultImage: "SEA238",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Nimblism",
    printings: [{
        artists: ["Fedor Barkhatov"],
      
      identifier: "SEA238",
      image: "SEA238",
      
      
      print: "SEA238",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["1HP417","MST221","SEA238","WTR218"],
    sets: [Release.HighSeas,Release.HistoryPack1,Release.PartTheMistveil,Release.WelcomeToRathe],
    specialImage: "SEA238",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `The next attack action card with cost 1 or less you play this turn gets +3{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Fedor Barkhatov"],
    cardIdentifier: "nimblism-yellow",
    classes: [Class.Generic],
    defaultImage: "SEA239",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Nimblism",
    printings: [{
        artists: ["Fedor Barkhatov"],
      
      identifier: "SEA239",
      image: "SEA239",
      
      
      print: "SEA239",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["1HP418","MST222","SEA239","WTR219"],
    sets: [Release.HighSeas,Release.HistoryPack1,Release.PartTheMistveil,Release.WelcomeToRathe],
    specialImage: "SEA239",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `The next attack action card with cost 1 or less you play this turn gets +2{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Fedor Barkhatov"],
    cardIdentifier: "nimblism-blue",
    classes: [Class.Generic],
    defaultImage: "SEA240",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Nimblism",
    printings: [{
        artists: ["Fedor Barkhatov"],
      
      identifier: "SEA240",
      image: "SEA240",
      
      
      print: "SEA240",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["1HP419","MST223","SEA240","WTR220"],
    sets: [Release.HighSeas,Release.HistoryPack1,Release.PartTheMistveil,Release.WelcomeToRathe],
    specialImage: "SEA240",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `The next attack action card with cost 1 or less you play this turn gets +1{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Yiian Kho"],
    cardIdentifier: "nimby-red",
    classes: [Class.Generic],
    defaultImage: "SEA220",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Nimby",
    printings: [{
        artists: ["Yiian Kho"],
      
      identifier: "SEA220",
      image: "SEA220",
      
      
      print: "SEA220",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA220"],
    sets: [Release.HighSeas],
    specialImage: "SEA220",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, you may search your deck for a Nimblism, reveal it, put it into your hand, then shuffle.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Yiian Kho"],
    cardIdentifier: "nimby-yellow",
    classes: [Class.Generic],
    defaultImage: "SEA221",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Nimby",
    printings: [{
        artists: ["Yiian Kho"],
      
      identifier: "SEA221",
      image: "SEA221",
      
      
      print: "SEA221",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA221"],
    sets: [Release.HighSeas],
    specialImage: "SEA221",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, you may search your deck for a Nimblism, reveal it, put it into your hand, then shuffle.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Yiian Kho"],
    cardIdentifier: "nimby-blue",
    classes: [Class.Generic],
    defaultImage: "SEA222",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Nimby",
    printings: [{
        artists: ["Yiian Kho"],
      
      identifier: "SEA222",
      image: "SEA222",
      
      
      print: "SEA222",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA222"],
    sets: [Release.HighSeas],
    specialImage: "SEA222",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, you may search your deck for a Nimblism, reveal it, put it into your hand, then shuffle.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Daniel Correia"],
    cardIdentifier: "not-so-fast-yellow",
    classes: [Class.Pirate],
    defaultImage: "SEA149",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Scurv,Hero.Shiyana],
    name: "Not So Fast",
    printings: [{
        artists: ["Daniel Correia"],
      
      identifier: "SEA149",
      image: "SEA149",
      
      
      print: "SEA149",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Daniel Correia"],
      foiling: Foiling.C,
      identifier: "SEA149",
      image: "SEA149_V2",
      
      
      print: "SEA149-Cold-Extended Art",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA149"],
    sets: [Release.HighSeas],
    specialImage: "SEA149_V2",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Pirate Instant",

    
    
    cost: 0,
    
    
    functionalText: `Scurv Specialization

The next time an opponent would draw a card from the effect of a Gold token this turn, instead you draw a card.`,
    
    
    
    
    keywords: [Keyword.Specialization],
    
    
    
    
    pitch: 2,
    
    
    
    
    
    
    
    specializations: [Hero.Scurv],
    
  
  
  },{
    artists: ["Pavel Rtishchev (Klaher)"],
    cardIdentifier: "old-knocker",
    classes: [Class.Generic],
    defaultImage: "SEA182",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Old Knocker",
    printings: [{
        artists: ["Pavel Rtishchev (Klaher)"],
      
      identifier: "SEA182",
      image: "SEA182",
      
      
      print: "SEA182",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA182"],
    sets: [Release.HighSeas],
    specialImage: "SEA182",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Chest",

    
    
    
    defense: 1,
    
    functionalText: `**Instant** - {t} your hero, destroy this: Gain {r}

Blade Break`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "on-the-horizon-red",
    classes: [Class.Generic],
    defaultImage: "SEA241",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "On the Horizon",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "SEA241",
      image: "SEA241",
      
      
      print: "SEA241",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA241"],
    sets: [Release.HighSeas],
    specialImage: "SEA241",
    subtypes: [],
    types: [Type.Block],
    typeText: "Generic Block",

    
    
    
    defense: 4,
    
    functionalText: `When this defends, look at the top card of your deck.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "on-the-horizon-yellow",
    classes: [Class.Generic],
    defaultImage: "SEA242",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "On the Horizon",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "SEA242",
      image: "SEA242",
      
      
      print: "SEA242",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA242"],
    sets: [Release.HighSeas],
    specialImage: "SEA242",
    subtypes: [],
    types: [Type.Block],
    typeText: "Generic Block",

    
    
    
    defense: 3,
    
    functionalText: `When this defends, look at the top card of your deck.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "on-the-horizon-blue",
    classes: [Class.Generic],
    defaultImage: "SEA243",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "On the Horizon",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "SEA243",
      image: "SEA243",
      
      
      print: "SEA243",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA243"],
    sets: [Release.HighSeas],
    specialImage: "SEA243",
    subtypes: [],
    types: [Type.Block],
    typeText: "Generic Block",

    
    
    
    defense: 2,
    
    functionalText: `When this defends, look at the top card of your deck.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mario Wibisono"],
    cardIdentifier: "onyx-amulet-blue",
    classes: [Class.Generic],
    defaultImage: "SEA191",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Onyx Amulet",
    printings: [{
        artists: ["Mario Wibisono"],
      
      identifier: "SEA191",
      image: "SEA191",
      
      
      print: "SEA191",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Mario Wibisono"],
      foiling: Foiling.C,
      identifier: "SEA191",
      image: "SEA191_V2",
      
      
      print: "SEA191-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA191"],
    sets: [Release.HighSeas],
    specialImage: "SEA191_V2",
    subtypes: [Subtype.Item,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action - Item",

    
    
    cost: 0,
    
    
    functionalText: `**Action** - Destroy this: {t} all heroes and allies. **Go again**

**Legend of the Watery Grave**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Legendary,Keyword.WateryGrave],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mario Wibisono"],
    cardIdentifier: "opal-amulet-blue",
    classes: [Class.Generic],
    defaultImage: "SEA192",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Opal Amulet",
    printings: [{
        artists: ["Mario Wibisono"],
      
      identifier: "SEA192",
      image: "SEA192",
      
      
      print: "SEA192",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Mario Wibisono"],
      foiling: Foiling.C,
      identifier: "SEA192",
      image: "SEA192_V2",
      
      
      print: "SEA192-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA192"],
    sets: [Release.HighSeas],
    specialImage: "SEA192_V2",
    subtypes: [Subtype.Item,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action - Item",

    
    
    cost: 0,
    
    
    functionalText: `**Instant** - Destroy this: Opt 2

**Legend of the Watery Grave**`,
    
    
    
    
    keywords: [Keyword.Legendary,Keyword.Opt,Keyword.WateryGrave],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Sebastian Giacobino"],
    cardIdentifier: "oysten-heart-of-gold-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA263",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.ProjectBlue,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Oysten, Heart of Gold",
    printings: [{
        artists: ["Sebastian Giacobino"],
      foiling: Foiling.C,
      identifier: "SEA263",
      image: "SEA263",
      isExpansionSlot: true,
      
      print: "SEA263-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["AGB017","SEA263"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas],
    specialImage: "SEA263",
    subtypes: [Subtype.Ally,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Ally",

    
    
    cost: 0,
    
    
    functionalText: `**Action** - {t}: Attack

When this dies, create a Gold token.

**Watery Grave**`,
    
    
    
    
    keywords: [Keyword.WateryGrave],
    
    life: 1,
    meta: [Meta.Expansion],
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "paddle-faster-red",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA054",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
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
    setIdentifiers: ["AGB010","FAB348","SEA054"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas,Release.Promos],
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
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Palantir Aeronought",
    printings: [{
        artists: ["寿多 浩 / Hiro Suda"],
      
      identifier: "SEA012",
      image: "SEA012",
      
      
      print: "SEA012",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["寿多 浩 / Hiro Suda"],
      foiling: Foiling.R,
      identifier: "SEA012",
      image: "SEA012_V2",
      
      
      print: "SEA012-Rainbow-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA012"],
    sets: [Release.HighSeas],
    specialImage: "SEA012_V2",
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
    artists: ["Raphael Pinna"],
    cardIdentifier: "patch-the-hole",
    classes: [Class.Ranger],
    defaultImage: "SEA096",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide,Hero.Taylor],
    name: "Patch the Hole",
    printings: [{
        artists: ["Raphael Pinna"],
      
      identifier: "SEA096",
      image: "SEA096",
      
      
      print: "SEA096",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA096"],
    sets: [Release.HighSeas],
    specialImage: "SEA096",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Ranger Equipment - Head",

    
    
    
    defense: 0,
    
    functionalText: `**Instant** - Destroy this: Return a card from your arsenal to your hand.`,
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mario Wibisono"],
    cardIdentifier: "pearl-amulet-blue",
    classes: [Class.Generic],
    defaultImage: "SEA193",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Pearl Amulet",
    printings: [{
        artists: ["Mario Wibisono"],
      
      identifier: "SEA193",
      image: "SEA193",
      
      
      print: "SEA193",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Mario Wibisono"],
      foiling: Foiling.C,
      identifier: "SEA193",
      image: "SEA193_V2",
      
      
      print: "SEA193-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA193"],
    sets: [Release.HighSeas],
    specialImage: "SEA193_V2",
    subtypes: [Subtype.Item,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action - Item",

    
    
    cost: 0,
    
    
    functionalText: `**Action** - Destroy this: {u} target permanent. **Go again**

**Legend of the Watery Grave**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Legendary,Keyword.WateryGrave],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nailsen Ivanderlie"],
    cardIdentifier: "peg-leg",
    classes: [Class.Pirate],
    defaultImage: "SEA129",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv,Hero.Taylor],
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
    
    functionalText: `**Action** - {r}{r}{r}, destroy this: Your next attack this turn gets **go again**. **Go again**

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak,Keyword.GoAgain],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Alief Rusdiatama"],
    cardIdentifier: "perk-up-red",
    classes: [Class.Mechanologist],
    defaultImage: "SEA040",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Perk Up",
    printings: [{
        artists: ["Alief Rusdiatama"],
      
      identifier: "SEA040",
      image: "SEA040",
      
      
      print: "SEA040",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA040"],
    sets: [Release.HighSeas],
    specialImage: "SEA040",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Mechanologist Action",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `Your next Mechanologist attack this turn gets +4{p}.

You may {u} your hero.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Audy Ravindra"],
    cardIdentifier: "pilfer-the-wreck-red",
    classes: [Class.Pirate],
    defaultImage: "SEA138",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Pilfer the Wreck",
    printings: [{
        artists: ["Audy Ravindra"],
      
      identifier: "SEA138",
      image: "SEA138",
      
      
      print: "SEA138",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Audy Ravindra"],
      foiling: Foiling.C,
      identifier: "SEA138",
      image: "SEA138_V2",
      
      
      print: "SEA138-Cold",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA138"],
    sets: [Release.HighSeas],
    specialImage: "SEA138_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this hits a hero, you may turn a card in their graveyard face-down. If it's yellow, create a Gold token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Audy Ravindra"],
    cardIdentifier: "pilfer-the-wreck-yellow",
    classes: [Class.Pirate],
    defaultImage: "SEA139",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Pilfer the Wreck",
    printings: [{
        artists: ["Audy Ravindra"],
      
      identifier: "SEA139",
      image: "SEA139",
      
      
      print: "SEA139",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Audy Ravindra"],
      foiling: Foiling.C,
      identifier: "SEA139",
      image: "SEA139_V2",
      
      
      print: "SEA139-Cold",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA139"],
    sets: [Release.HighSeas],
    specialImage: "SEA139_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this hits a hero, you may turn a card in their graveyard face-down. If it's yellow, create a Gold token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Audy Ravindra"],
    cardIdentifier: "pilfer-the-wreck-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA140",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Pilfer the Wreck",
    printings: [{
        artists: ["Audy Ravindra"],
      
      identifier: "SEA140",
      image: "SEA140",
      
      
      print: "SEA140",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Audy Ravindra"],
      foiling: Foiling.C,
      identifier: "SEA140",
      image: "SEA140_V2",
      
      
      print: "SEA140-Cold",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA140"],
    sets: [Release.HighSeas],
    specialImage: "SEA140_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this hits a hero, you may turn a card in their graveyard face-down. If it's yellow, create a Gold token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "pinion-sentry-blue",
    classes: [Class.Mechanologist],
    defaultImage: "SEA023",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Pinion Sentry",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "SEA023",
      image: "SEA023",
      
      
      print: "SEA023",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA023"],
    sets: [Release.HighSeas],
    specialImage: "SEA023",
    subtypes: [],
    types: [Type.Block],
    typeText: "Mechanologist Block",

    
    
    
    defense: 3,
    
    functionalText: `When this defends, you may {t} a cog you control. If you do, create a Golden Cog token.`,
    
    
    
    
    
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mario Wibisono"],
    cardIdentifier: "platinum-amulet-blue",
    classes: [Class.Generic],
    defaultImage: "SEA194",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Platinum Amulet",
    printings: [{
        artists: ["Mario Wibisono"],
      
      identifier: "SEA194",
      image: "SEA194",
      
      
      print: "SEA194",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Mario Wibisono"],
      foiling: Foiling.C,
      identifier: "SEA194",
      image: "SEA194_V2",
      
      
      print: "SEA194-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA194"],
    sets: [Release.HighSeas],
    specialImage: "SEA194_V2",
    subtypes: [Subtype.Item,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action - Item",

    
    
    cost: 0,
    
    
    functionalText: `**Instant** - Destroy this: Target defending card gets +1{d} until end of turn.

**Legend of the Watery Grave**`,
    
    
    
    
    keywords: [Keyword.Legendary,Keyword.WateryGrave],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "polly-cranka",
    classes: [],
    defaultImage: "SEA003",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Puffin],
    name: "Polly Cranka",
    printings: [{
        artists: ["Rio Sabda"],
      foiling: Foiling.R,
      identifier: "SEA003",
      image: "SEA003",
      
      
      print: "SEA003-Rainbow",
      rarity: Rarity.Legendary,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Rio Sabda"],
      foiling: Foiling.C,
      identifier: "SEA003",
      image: "SEA003_V2",
      
      
      print: "SEA003-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Legendary,Rarity.Marvel],
    rarity: Rarity.Legendary,
    setIdentifiers: ["SEA003"],
    sets: [Release.HighSeas],
    specialImage: "SEA003_V2",
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
    defaultImage: "SEA145",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Portside Exchange",
    printings: [{
        artists: ["Nikko Wahyudi"],
      
      identifier: "SEA145",
      image: "SEA145",
      
      
      print: "SEA145",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Nikko Wahyudi"],
      foiling: Foiling.C,
      identifier: "SEA145",
      image: "SEA145_V2",
      
      
      print: "SEA145-Cold-Extended Art",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["AGB029","SEA145"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas],
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
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mario Wibisono"],
    cardIdentifier: "pounamu-amulet-blue",
    classes: [Class.Generic],
    defaultImage: "SEA195",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Pounamu Amulet",
    printings: [{
        artists: ["Mario Wibisono"],
      
      identifier: "SEA195",
      image: "SEA195",
      
      
      print: "SEA195",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Mario Wibisono"],
      foiling: Foiling.C,
      identifier: "SEA195",
      image: "SEA195_V2",
      
      
      print: "SEA195-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA195"],
    sets: [Release.HighSeas],
    specialImage: "SEA195_V2",
    subtypes: [Subtype.Item,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action - Item",

    
    
    cost: 0,
    
    
    functionalText: `**Action** - Destroy this: Gain 2{h}. **Go again**

**Legend of the Watery Grave**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Legendary,Keyword.WateryGrave],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Olga Tereshenko"],
    cardIdentifier: "preach-modesty-red",
    classes: [Class.Ninja],
    defaultImage: "SEA252",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Benji,Hero.Cindra,Hero.Fai,Hero.Ira,Hero.Katsu,Hero.Zen],
    name: "Preach Modesty",
    printings: [{
        artists: ["Olga Tereshenko"],
      
      identifier: "SEA252",
      image: "SEA252",
      isExpansionSlot: true,
      
      print: "SEA252",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA252"],
    sets: [Release.HighSeas],
    specialImage: "SEA252",
    subtypes: [Subtype.Aura,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Ninja Action - Aura",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `This enters the arena with a balance counter. At the beginning of your action phase, destroy this unless you remove a balance counter from it.

Hero abilities can't create cards.`,
    
    
    
    
    
    
    
    meta: [Meta.Expansion],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Arif Wijaya"],
    cardIdentifier: "puffin",
    classes: [Class.Mechanologist,Class.Pirate],
    defaultImage: "SEA002",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Puffin],
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
      image: "SEA002_V2",
      
      
      print: "SEA002-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Arif Wijaya"],
      foiling: Foiling.C,
      identifier: "SEA002",
      image: "SEA002_V2_BACK",
      
      
      print: "SEA002-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["SEA002"],
    sets: [Release.HighSeas],
    specialImage: "SEA002_V2",
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
    legalHeroes: [Hero.Puffin],
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
      image: "SEA001_V2",
      
      
      print: "SEA001-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Arif Wijaya"],
      foiling: Foiling.C,
      identifier: "SEA001",
      image: "SEA001_V2_BACK",
      
      
      print: "SEA001-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Basic,
    setIdentifiers: ["HER137","SEA001"],
    sets: [Release.HighSeas,Release.Promos],
    specialImage: "SEA001_V2",
    subtypes: [],
    types: [Type.Hero],
    typeText: "Pirate Mechanologist Hero",

    
    
    
    
    
    functionalText: `**Action** - {t}, destroy a Gold you control: Create a Golden Cog token.

The second time you crank each turn, draw a card.`,
    
    hero: Hero.Puffin,
    intellect: 4,
    
    
    
    life: 40,
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Brian Adriel"],
    cardIdentifier: "quartermasters-boots",
    classes: [Class.Generic],
    defaultImage: "SEA185",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Quartermaster's Boots",
    printings: [{
        artists: ["Brian Adriel"],
      
      identifier: "SEA185",
      image: "SEA185",
      
      
      print: "SEA185",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA185"],
    sets: [Release.HighSeas],
    specialImage: "SEA185",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Legs",

    
    
    
    defense: 1,
    
    functionalText: `**Action** - {r}{r}, destroy this: The next non-attack action card you play this turn gets **go again**. **Go again**

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak,Keyword.GoAgain],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Raphael Pinna"],
    cardIdentifier: "quick-clicks",
    classes: [Class.Generic],
    defaultImage: "SEA186",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Quick Clicks",
    printings: [{
        artists: ["Raphael Pinna"],
      
      identifier: "SEA186",
      image: "SEA186",
      
      
      print: "SEA186",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA186"],
    sets: [Release.HighSeas],
    specialImage: "SEA186",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Legs",

    
    
    
    defense: 0,
    
    functionalText: `**Action** - Destroy this: Your next attack this turn gets **go again**. Activate this only if you've played a Nimblism this turn. **Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marcus Reyno"],
    cardIdentifier: "rally-the-coast-guard-red",
    classes: [Class.Generic],
    defaultImage: "SEA223",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Rally the Coast Guard",
    printings: [{
        artists: ["Marcus Reyno"],
      
      identifier: "SEA223",
      image: "SEA223",
      
      
      print: "SEA223",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA223"],
    sets: [Release.HighSeas],
    specialImage: "SEA223",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `**Once per Turn Instant** - Discard a card: This gets +3{d}. Activate this only while this card is defending.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marcus Reyno"],
    cardIdentifier: "rally-the-coast-guard-yellow",
    classes: [Class.Generic],
    defaultImage: "SEA224",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Rally the Coast Guard",
    printings: [{
        artists: ["Marcus Reyno"],
      
      identifier: "SEA224",
      image: "SEA224",
      
      
      print: "SEA224",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA224"],
    sets: [Release.HighSeas],
    specialImage: "SEA224",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `**Once per Turn Instant** - Discard a card: This gets +3{d}. Activate this only while this card is defending.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marcus Reyno"],
    cardIdentifier: "rally-the-coast-guard-blue",
    classes: [Class.Generic],
    defaultImage: "SEA225",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Rally the Coast Guard",
    printings: [{
        artists: ["Marcus Reyno"],
      
      identifier: "SEA225",
      image: "SEA225",
      
      
      print: "SEA225",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA225"],
    sets: [Release.HighSeas],
    specialImage: "SEA225",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `**Once per Turn Instant** - Discard a card: This gets +3{d}. Activate this only while this card is defending.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Isuardi Therianto","Max Kostin"],
    cardIdentifier: "ravenous-rabble-red",
    classes: [Class.Generic],
    defaultImage: "SEA219",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Ravenous Rabble",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "SEA219",
      image: "SEA219",
      
      
      print: "SEA219",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["1HP393","AAZ012","ARC191","AZL017","DRO021","FAB190","OUT213","RIP021","SEA219"],
    sets: [Release.ArcaneRising,Release.ArmoryDeckAzalea,Release.AzaleaBlitzDeck,Release.DromaiBlitzDeck,Release.HighSeas,Release.HistoryPack1,Release.Outsiders,Release.Promos,Release.RiptideBlitzDeck],
    specialImage: "SEA219",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, reveal the top card of your deck. This gets -X{p}, where X is the pitch value of the card revealed this way.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ismatulloh"],
    cardIdentifier: "red-fin-harpoon-blue",
    classes: [Class.Pirate,Class.Ranger],
    defaultImage: "SEA090",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Marlynn],
    name: "Red Fin Harpoon",
    printings: [{
        artists: ["Ismatulloh"],
      
      identifier: "SEA090",
      image: "SEA090",
      
      
      print: "SEA090",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA090"],
    sets: [Release.HighSeas],
    specialImage: "SEA090",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Ranger Action - Arrow Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `**Go Fish** - When this hits a hero, they choose and reveal a card from their hand. If it's red, they discard it and you create a Gold token. If you've activated a cannon this turn, instead look at their hand and you choose the card.`,
    
    
    
    
    keywords: [Keyword.GoFish],
    
    
    
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kanadekana"],
    cardIdentifier: "redspine-manta",
    classes: [Class.Ranger],
    defaultImage: "SEA094",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Redspine Manta",
    printings: [{
        artists: ["Kanadekana"],
      
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
    artists: ["Junaidi Lim"],
    cardIdentifier: "regain-composure-blue",
    classes: [Class.Generic],
    defaultImage: "SEA210",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Regain Composure",
    printings: [{
        artists: ["Junaidi Lim"],
      
      identifier: "SEA210",
      image: "SEA210",
      
      
      print: "SEA210",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA210"],
    sets: [Release.HighSeas],
    specialImage: "SEA210",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Your next attack this turn gets +1{p} and "When this hits, {u} your hero."

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "restless-bones-red",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA071",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Restless Bones",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "SEA071",
      image: "SEA071",
      
      
      print: "SEA071",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["AGB011","SEA071"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas],
    specialImage: "SEA071",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks, you may discard a card or destroy the top card of your deck. If that card has watery grave, this gets **go again**.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "restless-bones-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA072",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Restless Bones",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "SEA072",
      image: "SEA072",
      
      
      print: "SEA072",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA072"],
    sets: [Release.HighSeas],
    specialImage: "SEA072",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks, you may discard a card or destroy the top card of your deck. If that card has watery grave, this gets **go again**.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "restless-bones-blue",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA073",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Restless Bones",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "SEA073",
      image: "SEA073",
      
      
      print: "SEA073",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["AGB024","SEA073"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas],
    specialImage: "SEA073",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks, you may discard a card or destroy the top card of your deck. If that card has watery grave, this gets **go again**.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "return-fire-red",
    classes: [Class.Ranger],
    defaultImage: "SEA099",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Return Fire",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "SEA099",
      image: "SEA099",
      
      
      print: "SEA099",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA099"],
    sets: [Release.HighSeas],
    specialImage: "SEA099",
    subtypes: [],
    types: [Type.Block],
    typeText: "Ranger Block",

    
    
    
    defense: 4,
    
    functionalText: `When this defends, you may banish an arrow from your hand. If you do, at the start of your next turn, put it face-up into your arsenal and it gets +3{p} until end of turn.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tanapon Wachirakul"],
    cardIdentifier: "riches-of-tropal-dhani-yellow",
    classes: [Class.Generic],
    defaultImage: "SEA000",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Riches of Tropal-Dhani",
    printings: [{
        artists: ["Tanapon Wachirakul"],
      foiling: Foiling.C,
      identifier: "SEA000",
      image: "SEA000",
      
      
      print: "SEA000-Cold",
      rarity: Rarity.Fabled,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Fabled],
    rarity: Rarity.Fabled,
    setIdentifiers: ["SEA000"],
    sets: [Release.HighSeas],
    specialImage: "SEA000",
    subtypes: [Subtype.Gem],
    types: [Type.Resource],
    typeText: "Generic Resource - Gem",

    
    
    
    
    
    functionalText: `**Legendary**

When this is pitched, create a Gold token.`,
    
    
    
    
    keywords: [Keyword.Legendary],
    
    
    
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Sebastian Giacobino"],
    cardIdentifier: "riddle-with-regret-red",
    classes: [Class.NotClassed],
    defaultImage: "SEA256",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Crackni,Hero.Slippy],
    name: "Riddle with Regret",
    printings: [{
        artists: ["Sebastian Giacobino"],
      
      identifier: "SEA256",
      image: "SEA256",
      isExpansionSlot: true,
      
      print: "SEA256",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA256"],
    sets: [Release.HighSeas],
    specialImage: "SEA256",
    subtypes: [Subtype.Aura,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Chaos Action - Aura",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `**Go again**

At the beginning of each hero's end phase, they lose X{h}, where X is the number of auras they controlled when this triggered. If X is 3 or more, destroy this.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Expansion],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Chaos],
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "riggermortis-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA077",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Riggermortis",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "SEA077",
      image: "SEA077",
      
      
      print: "SEA077",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Max Kostin"],
      foiling: Foiling.C,
      identifier: "SEA077",
      image: "SEA077_V2",
      
      
      print: "SEA077-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Common,Rarity.Marvel],
    rarity: Rarity.Common,
    setIdentifiers: ["AGB018","SEA077"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas],
    specialImage: "SEA077_V2",
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
    artists: ["Mario Wibisono"],
    cardIdentifier: "ruby-amulet-blue",
    classes: [Class.Generic],
    defaultImage: "SEA196",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Ruby Amulet",
    printings: [{
        artists: ["Mario Wibisono"],
      
      identifier: "SEA196",
      image: "SEA196",
      
      
      print: "SEA196",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Mario Wibisono"],
      foiling: Foiling.C,
      identifier: "SEA196",
      image: "SEA196_V2",
      
      
      print: "SEA196-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA196"],
    sets: [Release.HighSeas],
    specialImage: "SEA196_V2",
    subtypes: [Subtype.Item,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action - Item",

    
    
    cost: 0,
    
    
    functionalText: `**Instant** - Destroy this: Gain {r}{r}

**Legend of the Watery Grave**`,
    
    
    
    
    keywords: [Keyword.Legendary,Keyword.WateryGrave],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "rust-belt",
    classes: [Class.Mechanologist],
    defaultImage: "SEA009",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Taylor,Hero.Teklovossen],
    name: "Rust Belt",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "SEA009",
      image: "SEA009",
      
      
      print: "SEA009",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA009"],
    sets: [Release.HighSeas],
    specialImage: "SEA009",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Mechanologist Equipment - Chest",

    
    
    
    defense: 1,
    
    functionalText: `**Instant** - {t} a cog you control, destroy this: Gain {r}.

**Battleworn**`,
    
    
    
    
    keywords: [Keyword.Battleworn],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Eryk Szczygieł"],
    cardIdentifier: "rusty-harpoon-blue",
    classes: [Class.Pirate,Class.Ranger],
    defaultImage: "SEA092",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Marlynn],
    name: "Rusty Harpoon",
    printings: [{
        artists: ["Eryk Szczygieł"],
      
      identifier: "SEA092",
      image: "SEA092",
      
      
      print: "SEA092",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA092"],
    sets: [Release.HighSeas],
    specialImage: "SEA092",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Ranger Action - Arrow Attack",

    
    
    cost: 0,
    defense: 3,
    
    
    
    
    
    
    
    
    
    
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Stormy Elia Fanggidae"],
    cardIdentifier: "saltwater-swell-red",
    classes: [Class.Pirate],
    defaultImage: "SEA141",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Saltwater Swell",
    printings: [{
        artists: ["Stormy Elia Fanggidae"],
      
      identifier: "SEA141",
      image: "SEA141",
      
      
      print: "SEA141",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Stormy Elia Fanggidae"],
      foiling: Foiling.C,
      identifier: "SEA141",
      image: "SEA141_V2",
      
      
      print: "SEA141-Cold-Extended Art",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA141"],
    sets: [Release.HighSeas],
    specialImage: "SEA141_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this attacks, reveal the top card of your deck. If it's blue, pitch it.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Stormy Elia Fanggidae"],
    cardIdentifier: "saltwater-swell-yellow",
    classes: [Class.Pirate],
    defaultImage: "SEA142",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Saltwater Swell",
    printings: [{
        artists: ["Stormy Elia Fanggidae"],
      
      identifier: "SEA142",
      image: "SEA142",
      
      
      print: "SEA142",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Stormy Elia Fanggidae"],
      foiling: Foiling.C,
      identifier: "SEA142",
      image: "SEA142_V2",
      
      
      print: "SEA142-Cold-Extended Art",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA142"],
    sets: [Release.HighSeas],
    specialImage: "SEA142_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this attacks, reveal the top card of your deck. If it's blue, pitch it.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  }];
  const cards4: Card[] =  [{
    artists: ["Stormy Elia Fanggidae"],
    cardIdentifier: "saltwater-swell-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA143",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Saltwater Swell",
    printings: [{
        artists: ["Stormy Elia Fanggidae"],
      
      identifier: "SEA143",
      image: "SEA143",
      
      
      print: "SEA143",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Stormy Elia Fanggidae"],
      foiling: Foiling.C,
      identifier: "SEA143",
      image: "SEA143_V2",
      
      
      print: "SEA143-Cold-Extended Art",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA143"],
    sets: [Release.HighSeas],
    specialImage: "SEA143_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this attacks, reveal the top card of your deck. If it's blue, pitch it.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Rachel Alderson"],
    cardIdentifier: "salvage-shot-red",
    classes: [Class.Ranger],
    defaultImage: "SEA114",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Salvage Shot",
    printings: [{
        artists: ["Rachel Alderson"],
      
      identifier: "SEA114",
      image: "SEA114",
      
      
      print: "SEA114",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["1HP246","ARC066","AZL011","RIP017","SEA114"],
    sets: [Release.ArcaneRising,Release.AzaleaBlitzDeck,Release.HighSeas,Release.HistoryPack1,Release.RiptideBlitzDeck],
    specialImage: "SEA114",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Ranger Action - Arrow Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this hits, put it on the bottom of its owner's deck.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Rachel Alderson"],
    cardIdentifier: "salvage-shot-yellow",
    classes: [Class.Ranger],
    defaultImage: "SEA115",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Salvage Shot",
    printings: [{
        artists: ["Rachel Alderson"],
      
      identifier: "SEA115",
      image: "SEA115",
      
      
      print: "SEA115",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["1HP247","ARC067","SEA115"],
    sets: [Release.ArcaneRising,Release.HighSeas,Release.HistoryPack1],
    specialImage: "SEA115",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Ranger Action - Arrow Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this hits, put it on the bottom of its owner's deck.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Rachel Alderson"],
    cardIdentifier: "salvage-shot-blue",
    classes: [Class.Ranger],
    defaultImage: "SEA116",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Salvage Shot",
    printings: [{
        artists: ["Rachel Alderson"],
      
      identifier: "SEA116",
      image: "SEA116",
      
      
      print: "SEA116",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["1HP248","ARC068","SEA116"],
    sets: [Release.ArcaneRising,Release.HighSeas,Release.HistoryPack1],
    specialImage: "SEA116",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Ranger Action - Arrow Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this hits, put it on the bottom of its owner's deck.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mario Wibisono"],
    cardIdentifier: "sapphire-amulet-blue",
    classes: [Class.Generic],
    defaultImage: "SEA197",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Sapphire Amulet",
    printings: [{
        artists: ["Mario Wibisono"],
      
      identifier: "SEA197",
      image: "SEA197",
      
      
      print: "SEA197",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Mario Wibisono"],
      foiling: Foiling.C,
      identifier: "SEA197",
      image: "SEA197_V2",
      
      
      print: "SEA197-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA197"],
    sets: [Release.HighSeas],
    specialImage: "SEA197_V2",
    subtypes: [Subtype.Item,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action - Item",

    
    
    cost: 0,
    
    
    functionalText: `**Action** - Destroy this: You get +1{i} this turn.

**Legend of the Watery Grave**`,
    
    
    
    
    keywords: [Keyword.Legendary,Keyword.WateryGrave],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Isuardi Therianto"],
    cardIdentifier: "sawbones-dock-hand-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA264",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Sawbones, Dock Hand",
    printings: [{
        artists: ["Isuardi Therianto"],
      foiling: Foiling.C,
      identifier: "SEA264",
      image: "SEA264",
      isExpansionSlot: true,
      
      print: "SEA264-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["AGB019","SEA264"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas],
    specialImage: "SEA264",
    subtypes: [Subtype.Ally,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Ally",

    
    
    cost: 2,
    
    
    functionalText: `**Action** - {r}, {t}: **Attack**

**Instant** - {t}: The next time you or a Pirate you control would be dealt damage this turn, prevent 1 of that damage.

**Watery Grave**`,
    
    
    
    
    keywords: [Keyword.WateryGrave],
    
    life: 2,
    meta: [Meta.Expansion],
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Agri Karuniawan","Arif Wijaya"],
    cardIdentifier: "scar-for-a-scar-red",
    classes: [Class.Generic],
    defaultImage: "SEA218",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Scar for a Scar",
    printings: [{
        artists: ["Arif Wijaya"],
      
      identifier: "SEA218",
      image: "SEA218",
      
      
      print: "SEA218",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["1HP396","AGB012","FAB015","IRA009","KAT015","KSU017","SEA218","UPR209","WTR191"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas,Release.HistoryPack1,Release.IraWelcomeDeck,Release.KatsuBlitzDeck,Release.KatsuHeroDeck,Release.Promos,Release.Uprising,Release.WelcomeToRathe],
    specialImage: "SEA218",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this is played, if you have less {h} than an opposing hero, it gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Narendra B Adi"],
    cardIdentifier: "scooba-salty-sea-dog-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA061",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Scooba, Salty Sea Dog",
    printings: [{
        artists: ["Narendra B Adi"],
      
      identifier: "SEA061",
      image: "SEA061",
      
      
      print: "SEA061",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Narendra B Adi"],
      foiling: Foiling.C,
      identifier: "SEA061",
      image: "SEA061_V2",
      
      
      print: "SEA061-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA061"],
    sets: [Release.HighSeas],
    specialImage: "SEA061_V2",
    subtypes: [Subtype.Ally,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Ally",

    
    
    cost: 0,
    
    
    functionalText: `**Action** - {r}{r}{r}, {t}: Attack

When this attacks, you may put a yellow card from a graveyard on the bottom of its owner's deck. If you do, create a Gold token.

**Watery Grave**`,
    
    
    
    
    keywords: [Keyword.WateryGrave],
    
    life: 4,
    
    
    pitch: 2,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Bramasta Aji"],
    cardIdentifier: "scouting-shot-red",
    classes: [Class.Ranger],
    defaultImage: "SEA109",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Scouting Shot",
    printings: [{
        artists: ["Bramasta Aji"],
      
      identifier: "SEA109",
      image: "SEA109",
      
      
      print: "SEA109",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA109"],
    sets: [Release.HighSeas],
    specialImage: "SEA109",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Ranger Action - Arrow Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this is put face-up into your arsenal, you may look at the top card of your deck.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Widya Wang"],
    cardIdentifier: "scrub-the-deck-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA147",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Scrub the Deck",
    printings: [{
        artists: ["Widya Wang"],
      
      identifier: "SEA147",
      image: "SEA147",
      
      
      print: "SEA147",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Widya Wang"],
      foiling: Foiling.C,
      identifier: "SEA147",
      image: "SEA147_V2",
      
      
      print: "SEA147-Cold-Extended Art",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA147"],
    sets: [Release.HighSeas],
    specialImage: "SEA147_V2",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Destroy the top card of target hero's deck. If it's yellow, create a Gold token.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Sam Yang"],
    cardIdentifier: "scurv-stowaway",
    classes: [Class.Pirate,Class.Thief],
    defaultImage: "SEA123",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Scurv],
    name: "Scurv, Stowaway",
    printings: [{
        artists: ["Sam Yang"],
      
      identifier: "SEA123",
      image: "SEA123",
      
      
      print: "SEA123",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA123"],
    sets: [Release.HighSeas],
    specialImage: "SEA123",
    subtypes: [Subtype.Young],
    types: [Type.Hero],
    typeText: "Pirate Thief Hero - Young",

    
    
    
    
    
    functionalText: `**Action** - {t}, destroy a Gold you control: Create a Goldkiss Rum token. **Go again**

Whenever you activate a Goldkiss Rum, gain {r}.`,
    
    hero: Hero.Scurv,
    intellect: 4,
    
    keywords: [Keyword.GoAgain],
    
    life: 20,
    
    
    
    
    
    
    
    
    
    
    
    
  
  young: true
  },{
    artists: ["Yiian Kho"],
    cardIdentifier: "sea-floor-salvage-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA146",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Sea Floor Salvage",
    printings: [{
        artists: ["Yiian Kho"],
      
      identifier: "SEA146",
      image: "SEA146",
      
      
      print: "SEA146",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Yiian Kho"],
      foiling: Foiling.C,
      identifier: "SEA146",
      image: "SEA146_V2",
      
      
      print: "SEA146-Cold-Extended Art",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA146"],
    sets: [Release.HighSeas],
    specialImage: "SEA146_V2",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Turn a card in a graveyard face-down. If it's yellow, create a Gold token.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "sea-legs-yellow",
    classes: [Class.Generic],
    defaultImage: "SEA187",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
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
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide,Hero.Taylor],
    name: "Sealace Sarong",
    printings: [{
        artists: ["SanSan"],
      foiling: Foiling.R,
      identifier: "SEA095",
      image: "SEA095",
      
      
      print: "SEA095-Rainbow",
      rarity: Rarity.Legendary,
      set: Release.HighSeas,
      
      
    },{
        artists: ["SanSan"],
      foiling: Foiling.C,
      identifier: "SEA095",
      image: "SEA095_V2",
      
      
      print: "SEA095-Cold-Extended Art",
      rarity: Rarity.Legendary,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Legendary],
    rarity: Rarity.Legendary,
    setIdentifiers: ["SEA095"],
    sets: [Release.HighSeas],
    specialImage: "SEA095_V2",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Ranger Equipment - Legs",

    
    
    
    defense: 2,
    
    functionalText: `**Instant** - {t}, turn a blue arrow in your arsenal face-up: it gets **go again** this turn.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak,Keyword.GoAgain],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Henrique Lindner"],
    cardIdentifier: "shelly-hardened-traveler-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA078",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Shelly, Hardened Traveler",
    printings: [{
        artists: ["Henrique Lindner"],
      
      identifier: "SEA078",
      image: "SEA078",
      
      
      print: "SEA078",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Henrique Lindner"],
      foiling: Foiling.C,
      identifier: "SEA078",
      image: "SEA078_V2",
      
      
      print: "SEA078-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Common,Rarity.Marvel],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA078"],
    sets: [Release.HighSeas],
    specialImage: "SEA078_V2",
    subtypes: [Subtype.Ally,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Ally",

    
    
    cost: 2,
    
    
    functionalText: `**Action** - {r}{r}{r}, {t}: Attack

**Instant** - {t}: The next attack action card you defend with this turn gets +1{d}.

**Watery Grave**`,
    
    
    
    
    keywords: [Keyword.WateryGrave],
    
    life: 5,
    
    
    pitch: 2,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "shifting-tides-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA148",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Shifting Tides",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "SEA148",
      image: "SEA148",
      
      
      print: "SEA148",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Tomasz Jedruszek"],
      foiling: Foiling.C,
      identifier: "SEA148",
      image: "SEA148_V2",
      
      
      print: "SEA148-Cold",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA148"],
    sets: [Release.HighSeas],
    specialImage: "SEA148_V2",
    subtypes: [Subtype.Aura,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Action - Aura",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Go again
At the start of your turn, pitch the top card of your deck. If it's blue, put this on the bottom of your deck, otherwise destroy this.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Alexandra Malygina"],
    cardIdentifier: "sic-em-shot-red",
    classes: [Class.Ranger],
    defaultImage: "SEA117",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Sic 'Em Shot",
    printings: [{
        artists: ["Alexandra Malygina"],
      
      identifier: "SEA117",
      image: "SEA117",
      
      
      print: "SEA117",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["1HP252","ARC072","LGS014","LGS035","SEA117"],
    sets: [Release.ArcaneRising,Release.HighSeas,Release.HistoryPack1,Release.Promos],
    specialImage: "SEA117",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Ranger Action - Arrow Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Alexandra Malygina"],
    cardIdentifier: "sic-em-shot-yellow",
    classes: [Class.Ranger],
    defaultImage: "SEA118",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Sic 'Em Shot",
    printings: [{
        artists: ["Alexandra Malygina"],
      
      identifier: "SEA118",
      image: "SEA118",
      
      
      print: "SEA118",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["1HP253","ARC073","LGS036","SEA118"],
    sets: [Release.ArcaneRising,Release.HighSeas,Release.HistoryPack1,Release.Promos],
    specialImage: "SEA118",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Ranger Action - Arrow Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Alexandra Malygina"],
    cardIdentifier: "sic-em-shot-blue",
    classes: [Class.Ranger],
    defaultImage: "SEA119",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Sic 'Em Shot",
    printings: [{
        artists: ["Alexandra Malygina"],
      
      identifier: "SEA119",
      image: "SEA119",
      
      
      print: "SEA119",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["1HP254","ARC074","LGS037","SEA119"],
    sets: [Release.ArcaneRising,Release.HighSeas,Release.HistoryPack1,Release.Promos],
    specialImage: "SEA119",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Ranger Action - Arrow Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Andi Cahyo W"],
    cardIdentifier: "sinker-blue",
    classes: [Class.Ranger],
    defaultImage: "SEA105",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Sinker",
    printings: [{
        artists: ["Andi Cahyo W"],
      
      identifier: "SEA105",
      image: "SEA105",
      
      
      print: "SEA105",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA105"],
    sets: [Release.HighSeas],
    specialImage: "SEA105",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Ranger Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Look at the top card of your deck. If it's an arrow, you may put it face-up into your arsenal. If you do, it gets **overpower** this turn.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Yiian Kho"],
    cardIdentifier: "sirens-of-safe-harbor-red",
    classes: [Class.Generic],
    defaultImage: "SEA226",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Sirens of Safe Harbor",
    printings: [{
        artists: ["Yiian Kho"],
      
      identifier: "SEA226",
      image: "SEA226",
      
      
      print: "SEA226",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA226"],
    sets: [Release.HighSeas],
    specialImage: "SEA226",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this is put into your graveyard from anywhere, gain 1{h}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Yiian Kho"],
    cardIdentifier: "sirens-of-safe-harbor-yellow",
    classes: [Class.Generic],
    defaultImage: "SEA227",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Sirens of Safe Harbor",
    printings: [{
        artists: ["Yiian Kho"],
      
      identifier: "SEA227",
      image: "SEA227",
      
      
      print: "SEA227",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA227"],
    sets: [Release.HighSeas],
    specialImage: "SEA227",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this is put into your graveyard from anywhere, gain 1{h}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Yiian Kho"],
    cardIdentifier: "sirens-of-safe-harbor-blue",
    classes: [Class.Generic],
    defaultImage: "SEA228",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Sirens of Safe Harbor",
    printings: [{
        artists: ["Yiian Kho"],
      
      identifier: "SEA228",
      image: "SEA228",
      
      
      print: "SEA228",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA228"],
    sets: [Release.HighSeas],
    specialImage: "SEA228",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this is put into your graveyard from anywhere, gain 1{h}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "sky-skimmer-red",
    classes: [Class.Mechanologist],
    defaultImage: "SEA027",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
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
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
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
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
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
    artists: ["Marcellino Tan"],
    cardIdentifier: "spitfire",
    classes: [Class.Mechanologist],
    defaultImage: "SEA007",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Spitfire",
    printings: [{
        artists: ["Marcellino Tan"],
      
      identifier: "SEA007",
      image: "SEA007",
      
      
      print: "SEA007",
      rarity: Rarity.Basic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Basic],
    rarity: Rarity.Basic,
    setIdentifiers: ["SEA007"],
    sets: [Release.HighSeas],
    specialImage: "SEA007",
    subtypes: [Subtype.TwoHanded,Subtype.Gun],
    types: [Type.Weapon],
    typeText: "Mechanologist Weapon - Gun (2H)",

    
    
    
    
    
    functionalText: `**Action** - {t}, {t} a cog you control: Attack

When this attacks, you may {t} a cog you control. If you do, the attack gets +1{p}.`,
    
    
    
    
    
    
    
    
    
    
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Jessketchin"],
    cardIdentifier: "sticky-fingers",
    classes: [],
    defaultImage: "SEA124",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Scurv],
    name: "Sticky Fingers",
    printings: [{
        artists: ["Jessketchin"],
      
      identifier: "SEA124",
      image: "SEA124",
      
      
      print: "SEA124",
      rarity: Rarity.Basic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Basic],
    rarity: Rarity.Basic,
    setIdentifiers: ["SEA124"],
    sets: [Release.HighSeas],
    specialImage: "SEA124",
    subtypes: [Subtype.Ally,Subtype.OffHand],
    types: [Type.Companion],
    typeText: "Scurv Companion - Off-Hand Ally",

    
    
    
    
    
    functionalText: `**Action** - {t}: Attack. If this is equipped, unequip it.

When this attacks a hero, steal a Gold token they control.

**Perched**`,
    
    
    
    
    
    
    life: 2,
    metatypes: [Metatype.Scurv],
    
    
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Saad Irfan"],
    cardIdentifier: "strike-gold-red",
    classes: [Class.Generic],
    defaultImage: "SEA229",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Strike Gold",
    printings: [{
        artists: ["Saad Irfan"],
      
      identifier: "SEA229",
      image: "SEA229",
      
      
      print: "SEA229",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA229"],
    sets: [Release.HighSeas],
    specialImage: "SEA229",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this hits, create a Gold token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Saad Irfan"],
    cardIdentifier: "strike-gold-yellow",
    classes: [Class.Generic],
    defaultImage: "SEA230",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Strike Gold",
    printings: [{
        artists: ["Saad Irfan"],
      
      identifier: "SEA230",
      image: "SEA230",
      
      
      print: "SEA230",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA230"],
    sets: [Release.HighSeas],
    specialImage: "SEA230",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this hits, create a Gold token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Saad Irfan"],
    cardIdentifier: "strike-gold-blue",
    classes: [Class.Generic],
    defaultImage: "SEA231",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Strike Gold",
    printings: [{
        artists: ["Saad Irfan"],
      
      identifier: "SEA231",
      image: "SEA231",
      
      
      print: "SEA231",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA231"],
    sets: [Release.HighSeas],
    specialImage: "SEA231",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this hits, create a Gold token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ramza Ardyputra"],
    cardIdentifier: "sunken-treasure-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA133",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Sunken Treasure",
    printings: [{
        artists: ["Ramza Ardyputra"],
      
      identifier: "SEA133",
      image: "SEA133",
      
      
      print: "SEA133",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Ramza Ardyputra"],
      foiling: Foiling.C,
      identifier: "SEA133",
      image: "SEA133_V2",
      
      
      print: "SEA133-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA133"],
    sets: [Release.HighSeas],
    specialImage: "SEA133_V2",
    subtypes: [],
    types: [Type.Block],
    typeText: "Pirate Block",

    
    
    
    defense: 3,
    
    functionalText: `When this defends, you may turn a card in a graveyard face-down. If it's yellow, create a Gold token.`,
    
    
    
    
    
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Flora Silve"],
    cardIdentifier: "surface-shaking-blue",
    classes: [Class.Guardian],
    defaultImage: "SEA251",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bravo,Hero.Brevant,Hero.Jarl,Hero.Oldhim,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Surface Shaking",
    printings: [{
        artists: ["Flora Silve"],
      
      identifier: "SEA251",
      image: "SEA251",
      isExpansionSlot: true,
      
      print: "SEA251",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA251"],
    sets: [Release.HighSeas],
    specialImage: "SEA251",
    subtypes: [Subtype.Aura,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Guardian Action - Aura",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `**Go again**

When this enters the arena, create 3 Seismic Surge tokens.

At the beginning of your action phase, destroy this, then you may put up to X cards from your hand on the bottom of your deck, where X is the number of Seismic Surge tokens you control. Draw cards equal to the number of cards put on the bottom this way.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Expansion],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "swabbie-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA079",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Swabbie",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "SEA079",
      image: "SEA079",
      
      
      print: "SEA079",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Faizal Fikri"],
      foiling: Foiling.C,
      identifier: "SEA079",
      image: "SEA079_V2",
      
      
      print: "SEA079-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Common,Rarity.Marvel],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA079"],
    sets: [Release.HighSeas],
    specialImage: "SEA079_V2",
    subtypes: [Subtype.Ally,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Ally",

    
    
    cost: 3,
    
    
    functionalText: `**Action** - {r}{r}, {t}: Attack

**Watery Grave**`,
    
    
    
    
    keywords: [Keyword.WateryGrave],
    
    life: 3,
    
    
    pitch: 2,
    power: 7,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Soffani Soffa"],
    cardIdentifier: "swift-shot-red",
    classes: [Class.Ranger],
    defaultImage: "SEA110",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Swift Shot",
    printings: [{
        artists: ["Soffani Soffa"],
      
      identifier: "SEA110",
      image: "SEA110",
      
      
      print: "SEA110",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA110"],
    sets: [Release.HighSeas],
    specialImage: "SEA110",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Ranger Action - Arrow Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this is put face-up into your arsenal, it gets **go again** this turn.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Orson CaptainSass"],
    cardIdentifier: "swiftstrike-bracers",
    classes: [Class.Generic],
    defaultImage: "SEA183",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Swiftstrike Bracers",
    printings: [{
        artists: ["Orson CaptainSass"],
      
      identifier: "SEA183",
      image: "SEA183",
      
      
      print: "SEA183",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA183"],
    sets: [Release.HighSeas],
    specialImage: "SEA183",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Arms",

    
    
    
    defense: 0,
    
    functionalText: `**Action** - Destroy this: Your next attack this turn gets +2{p}. Activate this only if you've played a Nimblism this turn. **Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Arghawana Rim"],
    cardIdentifier: "swiftwater-sloop-red",
    classes: [Class.Pirate],
    defaultImage: "SEA166",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Swiftwater Sloop",
    printings: [{
        artists: ["Arghawana Rim"],
      
      identifier: "SEA166",
      image: "SEA166",
      
      
      print: "SEA166",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Arghawana Rim"],
      foiling: Foiling.C,
      identifier: "SEA166",
      image: "SEA166_V2",
      
      
      print: "SEA166-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA166"],
    sets: [Release.HighSeas],
    specialImage: "SEA166_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `High Tide - If there are 2 or more blue cards in your pitch zone, this gets go again.`,
    
    
    
    
    keywords: [Keyword.HighTide],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Arghawana Rim"],
    cardIdentifier: "swiftwater-sloop-yellow",
    classes: [Class.Pirate],
    defaultImage: "SEA167",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Swiftwater Sloop",
    printings: [{
        artists: ["Arghawana Rim"],
      
      identifier: "SEA167",
      image: "SEA167",
      
      
      print: "SEA167",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Arghawana Rim"],
      foiling: Foiling.C,
      identifier: "SEA167",
      image: "SEA167_V2",
      
      
      print: "SEA167-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA167"],
    sets: [Release.HighSeas],
    specialImage: "SEA167_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `High Tide - If there are 2 or more blue cards in your pitch zone, this gets go again.`,
    
    
    
    
    keywords: [Keyword.HighTide],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Arghawana Rim"],
    cardIdentifier: "swiftwater-sloop-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA168",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Swiftwater Sloop",
    printings: [{
        artists: ["Arghawana Rim"],
      
      identifier: "SEA168",
      image: "SEA168",
      
      
      print: "SEA168",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Arghawana Rim"],
      foiling: Foiling.C,
      identifier: "SEA168",
      image: "SEA168_V2",
      
      
      print: "SEA168-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA168"],
    sets: [Release.HighSeas],
    specialImage: "SEA168_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `High Tide - If there are 2 or more blue cards in your pitch zone, this gets go again.`,
    
    
    
    
    keywords: [Keyword.HighTide],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "swindlers-grift-red",
    classes: [Class.Pirate],
    defaultImage: "SEA169",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Swindler's Grift",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "SEA169",
      image: "SEA169",
      
      
      print: "SEA169",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Max Kostin"],
      foiling: Foiling.C,
      identifier: "SEA169",
      image: "SEA169_V2",
      
      
      print: "SEA169-Cold",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA169"],
    sets: [Release.HighSeas],
    specialImage: "SEA169_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this attacks, you may discard a yellow card. If you do, draw a card and create a Gold token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "swindlers-grift-yellow",
    classes: [Class.Pirate],
    defaultImage: "SEA170",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Swindler's Grift",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "SEA170",
      image: "SEA170",
      
      
      print: "SEA170",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Max Kostin"],
      foiling: Foiling.C,
      identifier: "SEA170",
      image: "SEA170_V2",
      
      
      print: "SEA170-Cold",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA170"],
    sets: [Release.HighSeas],
    specialImage: "SEA170_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this attacks, you may discard a yellow card. If you do, draw a card and create a Gold token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "swindlers-grift-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA171",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Swindler's Grift",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "SEA171",
      image: "SEA171",
      
      
      print: "SEA171",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Max Kostin"],
      foiling: Foiling.C,
      identifier: "SEA171",
      image: "SEA171_V2",
      
      
      print: "SEA171-Cold",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA171"],
    sets: [Release.HighSeas],
    specialImage: "SEA171_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this attacks, you may discard a yellow card. If you do, draw a card and create a Gold token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikolay Moskvin"],
    cardIdentifier: "teeth-of-the-cog-red",
    classes: [Class.Mechanologist],
    defaultImage: "SEA030",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Teeth of the Cog",
    printings: [{
        artists: ["Nikolay Moskvin"],
      
      identifier: "SEA030",
      image: "SEA030",
      
      
      print: "SEA030",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA030"],
    sets: [Release.HighSeas],
    specialImage: "SEA030",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `**Galvanize** - When this defends, you may destroy an item you control. If you do, create a Golden Cog token.`,
    
    
    
    
    keywords: [Keyword.Galvanize],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikolay Moskvin"],
    cardIdentifier: "teeth-of-the-cog-yellow",
    classes: [Class.Mechanologist],
    defaultImage: "SEA031",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Teeth of the Cog",
    printings: [{
        artists: ["Nikolay Moskvin"],
      
      identifier: "SEA031",
      image: "SEA031",
      
      
      print: "SEA031",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA031"],
    sets: [Release.HighSeas],
    specialImage: "SEA031",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `**Galvanize** - When this defends, you may destroy an item you control. If you do, create a Golden Cog token.`,
    
    
    
    
    keywords: [Keyword.Galvanize],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikolay Moskvin"],
    cardIdentifier: "teeth-of-the-cog-blue",
    classes: [Class.Mechanologist],
    defaultImage: "SEA032",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Teeth of the Cog",
    printings: [{
        artists: ["Nikolay Moskvin"],
      
      identifier: "SEA032",
      image: "SEA032",
      
      
      print: "SEA032",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA032"],
    sets: [Release.HighSeas],
    specialImage: "SEA032",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `**Galvanize** - When this defends, you may destroy an item you control. If you do, create a Golden Cog token.`,
    
    
    
    
    keywords: [Keyword.Galvanize],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Andrew Chou"],
    cardIdentifier: "thievn-varmints-red",
    classes: [Class.Pirate],
    defaultImage: "SEA172",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Thiev'n Varmints",
    printings: [{
        artists: ["Andrew Chou"],
      
      identifier: "SEA172",
      image: "SEA172",
      
      
      print: "SEA172",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Andrew Chou"],
      foiling: Foiling.C,
      identifier: "SEA172",
      image: "SEA172_V2",
      
      
      print: "SEA172-Cold",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA172"],
    sets: [Release.HighSeas],
    specialImage: "SEA172_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks, you may remove a gold counter from Treasure Island. If you do and you are a Thief, create a Gold token.`,
    
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Jefrey Yonathan"],
    cardIdentifier: "throw-caution-to-the-wind-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA150",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Throw Caution to the Wind",
    printings: [{
        artists: ["Jefrey Yonathan"],
      
      identifier: "SEA150",
      image: "SEA150",
      
      
      print: "SEA150",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Jefrey Yonathan"],
      foiling: Foiling.C,
      identifier: "SEA150",
      image: "SEA150_V2",
      
      
      print: "SEA150-Cold",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA150"],
    sets: [Release.HighSeas],
    specialImage: "SEA150_V2",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Pirate Instant",

    
    
    cost: 0,
    
    
    functionalText: `Reveal the top card of your deck. The next time you would be dealt damage this turn, prevent X of that damage, where X is the pitch value of the card revealed this way.`,
    
    
    
    
    
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kyxarie Peralta"],
    cardIdentifier: "tighten-the-screws-red",
    classes: [Class.Mechanologist],
    defaultImage: "SEA041",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Tighten the Screws",
    printings: [{
        artists: ["Kyxarie Peralta"],
      
      identifier: "SEA041",
      image: "SEA041",
      
      
      print: "SEA041",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA041"],
    sets: [Release.HighSeas],
    specialImage: "SEA041",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Mechanologist Action",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `Your next Mechanologist attack this turn gets +4{p}.

You may {u} a cog you control.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "tip-the-barkeep-blue",
    classes: [Class.Pirate],
    defaultImage: "SEA132",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
    name: "Tip the Barkeep",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "SEA132",
      image: "SEA132",
      
      
      print: "SEA132",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Tomasz Jedruszek"],
      foiling: Foiling.C,
      identifier: "SEA132",
      image: "SEA132_V2",
      
      
      print: "SEA132-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA132"],
    sets: [Release.HighSeas],
    specialImage: "SEA132_V2",
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
    artists: ["Peyeyo"],
    cardIdentifier: "tit-for-tat-blue",
    classes: [Class.Generic],
    defaultImage: "SEA211",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Tit for Tat",
    printings: [{
        artists: ["Peyeyo"],
      
      identifier: "SEA211",
      image: "SEA211",
      
      
      print: "SEA211",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA211"],
    sets: [Release.HighSeas],
    specialImage: "SEA211",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `{t} target hero. {u} another target hero.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Pavel Rtishchev (Klaher)"],
    cardIdentifier: "tough-old-wrench-red",
    classes: [Class.Mechanologist],
    defaultImage: "SEA033",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Tough Old Wrench",
    printings: [{
        artists: ["Pavel Rtishchev (Klaher)"],
      
      identifier: "SEA033",
      image: "SEA033",
      
      
      print: "SEA033",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA033"],
    sets: [Release.HighSeas],
    specialImage: "SEA033",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `**Galvanize** - When this defends, you may destroy an item you control. If you do, create a Golden Cog token.`,
    
    
    
    
    keywords: [Keyword.Galvanize],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Pavel Rtishchev (Klaher)"],
    cardIdentifier: "tough-old-wrench-yellow",
    classes: [Class.Mechanologist],
    defaultImage: "SEA034",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Tough Old Wrench",
    printings: [{
        artists: ["Pavel Rtishchev (Klaher)"],
      
      identifier: "SEA034",
      image: "SEA034",
      
      
      print: "SEA034",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA034"],
    sets: [Release.HighSeas],
    specialImage: "SEA034",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `**Galvanize** - When this defends, you may destroy an item you control. If you do, create a Golden Cog token.`,
    
    
    
    
    keywords: [Keyword.Galvanize],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Pavel Rtishchev (Klaher)"],
    cardIdentifier: "tough-old-wrench-blue",
    classes: [Class.Mechanologist],
    defaultImage: "SEA035",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Tough Old Wrench",
    printings: [{
        artists: ["Pavel Rtishchev (Klaher)"],
      
      identifier: "SEA035",
      image: "SEA035",
      
      
      print: "SEA035",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA035"],
    sets: [Release.HighSeas],
    specialImage: "SEA035",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `**Galvanize** - When this defends, you may destroy an item you control. If you do, create a Golden Cog token.`,
    
    
    
    
    keywords: [Keyword.Galvanize],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tanapon Wachirakul"],
    cardIdentifier: "trade-in-red",
    classes: [Class.Generic],
    defaultImage: "SEA232",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Trade In",
    printings: [{
        artists: ["Tanapon Wachirakul"],
      
      identifier: "SEA232",
      image: "SEA232",
      
      
      print: "SEA232",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["FAI021","HVY231","KSI011","SEA232","UPR212"],
    sets: [Release.FaiBlitzDeck,Release.HeavyHitters,Release.HighSeas,Release.KassaiBlitzDeck,Release.Uprising],
    specialImage: "SEA232",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, you may discard a card. If you do, draw a card.

If this was played from arsenal, it gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tanapon Wachirakul"],
    cardIdentifier: "trade-in-yellow",
    classes: [Class.Generic],
    defaultImage: "SEA233",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Trade In",
    printings: [{
        artists: ["Tanapon Wachirakul"],
      
      identifier: "SEA233",
      image: "SEA233",
      
      
      print: "SEA233",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HVY232","KSI018","SEA233","UPR213"],
    sets: [Release.HeavyHitters,Release.HighSeas,Release.KassaiBlitzDeck,Release.Uprising],
    specialImage: "SEA233",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, you may discard a card. If you do, draw a card.

If this was played from arsenal, it gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tanapon Wachirakul"],
    cardIdentifier: "trade-in-blue",
    classes: [Class.Generic],
    defaultImage: "SEA234",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Trade In",
    printings: [{
        artists: ["Tanapon Wachirakul"],
      
      identifier: "SEA234",
      image: "SEA234",
      
      
      print: "SEA234",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HVY233","SEA234","UPR214"],
    sets: [Release.HeavyHitters,Release.HighSeas,Release.Uprising],
    specialImage: "SEA234",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, you may discard a card. If you do, draw a card.

If this was played from arsenal, it gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Jessada Sutthi"],
    cardIdentifier: "treasure-island",
    classes: [Class.NotClassed],
    defaultImage: "SEA247",
    legalFormats: [Format.Draft,Format.Open,Format.Sealed],
    legalHeroes: [Hero.GravyBones,Hero.Marlynn,Hero.Puffin,Hero.Scurv],
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
    artists: ["soyameii"],
    cardIdentifier: "undercover-acquisition-red",
    classes: [Class.Assassin],
    defaultImage: "SEA249",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
    name: "Undercover Acquisition",
    printings: [{
        artists: ["soyameii"],
      
      identifier: "SEA249",
      image: "SEA249",
      isExpansionSlot: true,
      
      print: "SEA249",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SEA249"],
    sets: [Release.HighSeas],
    specialImage: "SEA249",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this hits a hero, steal an item they control.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    
    meta: [Meta.Expansion],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Andi Cahyo W"],
    cardIdentifier: "unicycle",
    classes: [Class.Mechanologist],
    defaultImage: "SEA010",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Taylor,Hero.Teklovossen],
    name: "Unicycle",
    printings: [{
        artists: ["Andi Cahyo W"],
      
      identifier: "SEA010",
      image: "SEA010",
      
      
      print: "SEA010",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA010"],
    sets: [Release.HighSeas],
    specialImage: "SEA010",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Mechanologist Equipment - Legs",

    
    
    
    defense: 1,
    
    functionalText: `**Instant** - Destroy this: {u} a cog you control.

**Battleworn**`,
    
    
    
    
    keywords: [Keyword.Battleworn],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Joseph Qiu"],
    cardIdentifier: "wailer-humperdinck-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA052",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Wailer Humperdinck",
    printings: [{
        artists: ["Joseph Qiu"],
      
      identifier: "SEA052",
      image: "SEA052",
      
      
      print: "SEA052",
      rarity: Rarity.Majestic,
      set: Release.HighSeas,
      
      
    },{
        artists: ["Joseph Qiu"],
      foiling: Foiling.C,
      identifier: "SEA052",
      image: "SEA052_V2",
      
      
      print: "SEA052-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.HighSeas,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
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
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ausonia"],
    cardIdentifier: "walk-the-plank-red",
    classes: [Class.Generic],
    defaultImage: "SEA235",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Walk the Plank",
    printings: [{
        artists: ["Ausonia"],
      
      identifier: "SEA235",
      image: "SEA235",
      
      
      print: "SEA235",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA235"],
    sets: [Release.HighSeas],
    specialImage: "SEA235",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this hits a Pirate hero, {t} them or an ally they control.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ausonia"],
    cardIdentifier: "walk-the-plank-yellow",
    classes: [Class.Generic],
    defaultImage: "SEA236",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Walk the Plank",
    printings: [{
        artists: ["Ausonia"],
      
      identifier: "SEA236",
      image: "SEA236",
      
      
      print: "SEA236",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA236"],
    sets: [Release.HighSeas],
    specialImage: "SEA236",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this hits a Pirate hero, {t} them or an ally they control.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ausonia"],
    cardIdentifier: "walk-the-plank-blue",
    classes: [Class.Generic],
    defaultImage: "SEA237",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Puffin,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Walk the Plank",
    printings: [{
        artists: ["Ausonia"],
      
      identifier: "SEA237",
      image: "SEA237",
      
      
      print: "SEA237",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SEA237"],
    sets: [Release.HighSeas],
    specialImage: "SEA237",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this hits a Pirate hero, {t} them or an ally they control.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Esty Swandana"],
    cardIdentifier: "washed-up-wave",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA046",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones,Hero.Taylor],
    name: "Washed Up Wave",
    printings: [{
        artists: ["Esty Swandana"],
      
      identifier: "SEA046",
      image: "SEA046",
      
      
      print: "SEA046",
      rarity: Rarity.Common,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["AGB006","SEA046"],
    sets: [Release.ArmoryDeckGravyBones,Release.HighSeas],
    specialImage: "SEA046",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Pirate Necromancer Equipment - Arms",

    
    
    
    defense: 0,
    
    functionalText: `When this defends, you may discard a card or destroy the top card of your deck. If that card has watery grave, this gets +2{d}.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["M Fakhrur Rozzi"],
    cardIdentifier: "yellow-fin-harpoon-blue",
    classes: [Class.Pirate,Class.Ranger],
    defaultImage: "SEA091",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Marlynn],
    name: "Yellow Fin Harpoon",
    printings: [{
        artists: ["M Fakhrur Rozzi"],
      
      identifier: "SEA091",
      image: "SEA091",
      
      
      print: "SEA091",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA091"],
    sets: [Release.HighSeas],
    specialImage: "SEA091",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Ranger Action - Arrow Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `**Go Fish** - When this hits a hero, they choose and reveal a card from their hand. If it's yellow, they discard it and you create a Gold token. If you've activated a cannon this turn, instead look at their hand and you choose the card.`,
    
    
    
    
    keywords: [Keyword.GoFish],
    
    
    
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "yo-ho-ho-blue",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SEA058",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Yo Ho Ho!",
    printings: [{
        artists: ["Rio Sabda"],
      
      identifier: "SEA058",
      image: "SEA058",
      
      
      print: "SEA058",
      rarity: Rarity.Rare,
      set: Release.HighSeas,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SEA058"],
    sets: [Release.HighSeas],
    specialImage: "SEA058",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Your next Pirate ally attack this turn gets +1{p} and "When this hits a hero, create a Gold token."

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  }];

  export const cards: Card[] =  [
    ...cards1,
    ...cards2,
    ...cards3,
    ...cards4,
  ];
  