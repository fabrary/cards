
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
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "a-good-clean-fight-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP021",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "A Good Clean Fight",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "SUP021",
      image: "SUP021",
      
      
      print: "SUP021",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP021"],
    sets: [Release.SuperSlam],
    specialImage: "SUP021",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 7,
    defense: 3,
    
    functionalText: `If this is attacking a hero, non-equipment cards they own lose and can't gain abilities.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Olga Tereshenko"],
    cardIdentifier: "act-of-glory-red",
    classes: [Class.Guardian],
    defaultImage: "SUP195",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Act of Glory",
    printings: [{
        artists: ["Olga Tereshenko"],
      
      identifier: "SUP195",
      image: "SUP195",
      
      
      print: "SUP195",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["APS011","SUP195"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP195",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Guardian Instant - Aura",

    
    
    cost: 4,
    defense: 3,
    
    functionalText: `**Suspense**

When this leaves the arena, your next attack this turn gets +6{p}.`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Olga Tereshenko"],
    cardIdentifier: "act-of-glory-yellow",
    classes: [Class.Guardian],
    defaultImage: "SUP196",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Act of Glory",
    printings: [{
        artists: ["Olga Tereshenko"],
      
      identifier: "SUP196",
      image: "SUP196",
      
      
      print: "SUP196",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP196"],
    sets: [Release.SuperSlam],
    specialImage: "SUP196",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Guardian Instant - Aura",

    
    
    cost: 4,
    defense: 3,
    
    functionalText: `**Suspense**

When this leaves the arena, your next attack this turn gets +5{p}.`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Olga Tereshenko"],
    cardIdentifier: "act-of-glory-blue",
    classes: [Class.Guardian],
    defaultImage: "SUP197",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Act of Glory",
    printings: [{
        artists: ["Olga Tereshenko"],
      
      identifier: "SUP197",
      image: "SUP197",
      
      
      print: "SUP197",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["APS022","SUP197"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP197",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Guardian Instant - Aura",

    
    
    cost: 4,
    defense: 3,
    
    functionalText: `**Suspense**

When this leaves the arena, your next attack this turn gets +4{p}.`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "adaptive-alpha-mold",
    classes: [Class.Mechanologist],
    defaultImage: "SUP253",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Taylor,Hero.Teklovossen],
    name: "Adaptive Alpha Mold",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "SUP253",
      image: "SUP253",
      isExpansionSlot: true,
      
      print: "SUP253",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Mariusz Gandzel"],
      foiling: Foiling.C,
      identifier: "SUP253",
      image: "SUP253_V2",
      isExpansionSlot: true,
      
      print: "SUP253-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP253"],
    sets: [Release.SuperSlam],
    specialImage: "SUP253_V2",
    subtypes: [Subtype.Base],
    types: [Type.Equipment],
    typeText: "Mechanologist Equipment - Base",

    
    
    
    defense: 1,
    
    functionalText: `**Modular**

**Action** - 0: Equip this to another equipment zone.

**Battleworn**`,
    
    
    
    
    keywords: [Keyword.Battleworn,Keyword.Modular],
    
    
    meta: [Meta.Expansion],
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "angelic-attendant-yellow",
    classes: [Class.Illusionist],
    defaultImage: "SUP265",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Prism],
    name: "Angelic Attendant",
    printings: [{
        artists: ["MJ Fetesio"],
      
      identifier: "SUP265",
      image: "SUP265",
      isExpansionSlot: true,
      
      print: "SUP265",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["MJ Fetesio"],
      foiling: Foiling.C,
      identifier: "SUP265",
      image: "SUP265_V2",
      isExpansionSlot: true,
      
      print: "SUP265-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP265"],
    sets: [Release.SuperSlam],
    specialImage: "SUP265_V2",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Light Illusionist Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Awaken** target figment you control.

Put this into your soul.

**Go again**`,
    
    
    
    
    keywords: [Keyword.Awaken,Keyword.GoAgain],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Light],
  
  
  },{
    artists: ["Vito Febrianno"],
    cardIdentifier: "arrogant-showboating-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP096",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Arrogant Showboating",
    printings: [{
        artists: ["Vito Febrianno"],
      
      identifier: "SUP096",
      image: "SUP096",
      
      
      print: "SUP096",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP096"],
    sets: [Release.SuperSlam],
    specialImage: "SUP096",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Reviled Instant",

    
    
    cost: 0,
    
    
    functionalText: `Create a Might token for each defending card controlled by an opponent on the combat chain.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Petrinda Wiyugo"],
    cardIdentifier: "asking-for-trouble-yellow",
    classes: [Class.Brute],
    defaultImage: "SUP140",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Asking for Trouble",
    printings: [{
        artists: ["Petrinda Wiyugo"],
      
      identifier: "SUP140",
      image: "SUP140",
      
      
      print: "SUP140",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP140"],
    sets: [Release.SuperSlam],
    specialImage: "SUP140",
    subtypes: [],
    types: [Type.Block],
    typeText: "Brute Block",

    
    
    
    defense: 4,
    
    functionalText: `When this defends, create a Vigor token under the attacking hero's control.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Wirawan Pranoto"],
    cardIdentifier: "attention-grabbers",
    classes: [Class.Guardian],
    defaultImage: "SUP274",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Taylor,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Attention Grabbers",
    printings: [{
        artists: ["Wirawan Pranoto"],
      
      identifier: "SUP274",
      image: "SUP274",
      isExpansionSlot: true,
      
      print: "SUP274",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["APS006","SUP274"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP274",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Guardian Equipment - Arms",

    
    
    
    defense: 1,
    
    functionalText: `When this defends, you may remove a suspense counter from an aura you control. If you do, this gets +2{d} this chain link.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    meta: [Meta.Expansion],
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Milivoj Ćeran"],
    cardIdentifier: "authority-of-ataya-blue",
    classes: [Class.Generic],
    defaultImage: "SUP000",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Authority of Ataya",
    printings: [{
        artists: ["Milivoj Ćeran"],
      foiling: Foiling.C,
      identifier: "SUP000",
      image: "SUP000",
      
      
      print: "SUP000-Cold",
      rarity: Rarity.Fabled,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Fabled],
    rarity: Rarity.Fabled,
    setIdentifiers: ["SUP000"],
    sets: [Release.SuperSlam],
    specialImage: "SUP000",
    subtypes: [Subtype.Gem],
    types: [Type.Resource],
    typeText: "Generic Resource - Gem",

    
    
    
    
    
    functionalText: `**Legendary**

When this is pitched, defense reaction cards cost opponents an additional {r} to play this turn.`,
    
    
    
    
    keywords: [Keyword.Legendary],
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Narendra B Adi"],
    cardIdentifier: "backspin-thrust-red",
    classes: [Class.Mechanologist],
    defaultImage: "SUP254",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Backspin Thrust",
    printings: [{
        artists: ["Narendra B Adi"],
      
      identifier: "SUP254",
      image: "SUP254",
      isExpansionSlot: true,
      
      print: "SUP254",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Narendra B Adi"],
      foiling: Foiling.C,
      identifier: "SUP254",
      image: "SUP254_V2",
      isExpansionSlot: true,
      
      print: "SUP254-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP254"],
    sets: [Release.SuperSlam],
    specialImage: "SUP254_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Once per Turn Instant** - {u} a cog you control: This gets +1{p} or **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 1,
    power: 4,
    
    shorthands: ["Untap"],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Orson CaptainSass"],
    cardIdentifier: "bait",
    classes: [Class.Ranger],
    defaultImage: "SUP259",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Open,Format.ProjectBlue,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide,Hero.Shiyana,Hero.Yorick],
    name: "Bait",
    printings: [{
        artists: ["Orson CaptainSass"],
      
      identifier: "SUP259",
      image: "SUP259",
      isExpansionSlot: true,
      
      print: "SUP259",
      rarity: Rarity.Basic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Basic],
    rarity: Rarity.Basic,
    setIdentifiers: ["SUP259"],
    sets: [Release.SuperSlam],
    specialImage: "SUP259",
    subtypes: [Subtype.Aura],
    types: [Type.Token],
    typeText: "Ranger Token - Aura",

    
    
    
    
    
    functionalText: `You can't play or activate cards you own.

**Action** - Destroy this when the chain link resolves: **Attack**

**Once per Turn Attack Reaction** - 0: This gets +1{p} and **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Expansion],
  
    
    
    power: 0,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Satriasa"],
    cardIdentifier: "bark-obscenities-red",
    classes: [Class.Brute],
    defaultImage: "SUP167",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Bark Obscenities",
    printings: [{
        artists: ["Satriasa"],
      
      identifier: "SUP167",
      image: "SUP167",
      
      
      print: "SUP167",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP167"],
    sets: [Release.SuperSlam],
    specialImage: "SUP167",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Brute Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Your next attack that targets a Guardian hero this turn gets +4{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Artem Maksimishin"],
    cardIdentifier: "bash-brute-red",
    classes: [Class.Guardian],
    defaultImage: "SUP184",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Bash Brute",
    printings: [{
        artists: ["Artem Maksimishin"],
      
      identifier: "SUP184",
      image: "SUP184",
      
      
      print: "SUP184",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP184"],
    sets: [Release.SuperSlam],
    specialImage: "SUP184",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `If this is defended by a Brute card, this gets +1{p}.

When this hits a Brute hero, destroy an aura token they control.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Eryk Szczygieł"],
    cardIdentifier: "bash-guardian-red",
    classes: [Class.Brute],
    defaultImage: "SUP141",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Bash Guardian",
    printings: [{
        artists: ["Eryk Szczygieł"],
      
      identifier: "SUP141",
      image: "SUP141",
      
      
      print: "SUP141",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP141"],
    sets: [Release.SuperSlam],
    specialImage: "SUP141",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `If this is defended by a Guardian card, this gets +1{p}.

When this hits a Guardian hero, destroy an aura token they control.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Olga Tereshenko"],
    cardIdentifier: "bask-in-your-own-greatness-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP098",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Bask in Your Own Greatness",
    printings: [{
        artists: ["Olga Tereshenko"],
      
      identifier: "SUP098",
      image: "SUP098",
      
      
      print: "SUP098",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["FAB387","SUP098"],
    sets: [Release.Promos,Release.SuperSlam],
    specialImage: "SUP098",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, you may pay up to {r}{r}{r}. Create that many Might tokens.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Olga Tereshenko"],
    cardIdentifier: "bask-in-your-own-greatness-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP099",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Bask in Your Own Greatness",
    printings: [{
        artists: ["Olga Tereshenko"],
      
      identifier: "SUP099",
      image: "SUP099",
      
      
      print: "SUP099",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["FAB388","SUP099"],
    sets: [Release.Promos,Release.SuperSlam],
    specialImage: "SUP099",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, you may pay up to {r}{r}{r}. Create that many Might tokens.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Olga Tereshenko"],
    cardIdentifier: "bask-in-your-own-greatness-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP100",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Bask in Your Own Greatness",
    printings: [{
        artists: ["Olga Tereshenko"],
      
      identifier: "SUP100",
      image: "SUP100",
      
      
      print: "SUP100",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["FAB389","SUP100"],
    sets: [Release.Promos,Release.SuperSlam],
    specialImage: "SUP100",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, you may pay up to {r}{r}{r}. Create that many Might tokens.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Simon Dominic"],
    cardIdentifier: "battered-beaten-and-broken-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP083",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Battered, Beaten, and Broken",
    printings: [{
        artists: ["Simon Dominic"],
      
      identifier: "SUP083",
      image: "SUP083",
      
      
      print: "SUP083",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP083"],
    sets: [Release.SuperSlam],
    specialImage: "SUP083",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks a hero, **intimidate** them.

If you control 3 or more auras, this gets +3{p} and "When this hits a hero, destroy an intimidated card they own."`,
    
    
    
    
    keywords: [Keyword.Intimidate],
    
    
    
  
    
    pitch: 2,
    power: 1,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Othon Nikolaidis"],
    cardIdentifier: "battlefield-beacon-yellow",
    classes: [Class.Warrior],
    defaultImage: "SUP266",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Boltyn],
    name: "Battlefield Beacon",
    printings: [{
        artists: ["Othon Nikolaidis"],
      
      identifier: "SUP266",
      image: "SUP266",
      isExpansionSlot: true,
      
      print: "SUP266",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP266"],
    sets: [Release.SuperSlam],
    specialImage: "SUP266",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Light Warrior Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks, choose 1 for each card you've banished from your soul this combat chain. You may choose the same mode up to 3 times;
- Create a Courage token.
- Create a Toughness token.
- Create a Vigor token.`,
    
    
    
    
    
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Light],
  
  
  },{
    artists: ["Joseph Qiu"],
    cardIdentifier: "beat-of-the-ironsong-blue",
    classes: [Class.Warrior],
    defaultImage: "SUP251",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Boltyn,Hero.Dorinthea,Hero.Fang,Hero.Kassai,Hero.Olympia],
    name: "Beat of the Ironsong",
    printings: [{
        artists: ["Joseph Qiu"],
      
      identifier: "SUP251",
      image: "SUP251",
      isExpansionSlot: true,
      
      print: "SUP251",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP251"],
    sets: [Release.SuperSlam],
    specialImage: "SUP251",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Choose X+1, where X is the number of +1{p} counters on an attacking Dawnblade;
- Target Dawnblade attack gets +1{p}.
- Target Dawnblade attack gets **go again**.
- Cards defending target Dawnblade attack can't gain {d}.
- Damage target Dawnblade attack would deal can't be prevented.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Saad Irfan"],
    cardIdentifier: "beat-the-same-drum-blue",
    classes: [Class.Generic],
    defaultImage: "SUP219",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Beat the Same Drum",
    printings: [{
        artists: ["Saad Irfan"],
      
      identifier: "SUP219",
      image: "SUP219",
      
      
      print: "SUP219",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP219"],
    sets: [Release.SuperSlam],
    specialImage: "SUP219",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If you've controlled an Agility token this turn, create an Agility token, then repeat for Confidence, Might, Toughness, and Vigor.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "big-bully-red",
    classes: [Class.Brute],
    defaultImage: "SUP067",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.RKO],
    name: "Big Bully",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "SUP067",
      image: "SUP067",
      
      
      print: "SUP067",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP067"],
    sets: [Release.SuperSlam],
    specialImage: "SUP067",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Brute Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks a hero, if you have more {h} than them, **the crowd boos** you.

If you've been booed this turn, this card's base {p} is doubled.`,
    
    
    
    
    keywords: [Keyword.TheCrowdBoos],
    
    
    
  
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "blood-follows-blade-yellow",
    classes: [Class.Warrior],
    defaultImage: "SUP252",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Kassai,Hero.Shiyana],
    name: "Blood Follows Blade",
    printings: [{
        artists: ["Rio Sabda"],
      
      identifier: "SUP252",
      image: "SUP252",
      isExpansionSlot: true,
      
      print: "SUP252",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP252"],
    sets: [Release.SuperSlam],
    specialImage: "SUP252",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Kassai Specialization**

Target sword attack gets **go again** and "When this hits, create a Cintari Sellsword token."`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Specialization],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    specializations: [Hero.Kassai],
    
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "bluster-buff-red",
    classes: [Class.Generic],
    defaultImage: "SUP221",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Bluster Buff",
    printings: [{
        artists: ["Rio Sabda"],
      
      identifier: "SUP221",
      image: "SUP221",
      
      
      print: "SUP221",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP221"],
    sets: [Release.SuperSlam],
    specialImage: "SUP221",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this attacks, it gets -1{p} unless you pay {r}.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Surya Prasetya","Surya Prasteya"],
    cardIdentifier: "boots-to-the-boards",
    classes: [Class.NotClassed],
    defaultImage: "SUP275",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Taylor,Hero.Tuffnut],
    name: "Boots to the Boards",
    printings: [{
        artists: ["Surya Prasetya"],
      
      identifier: "SUP275",
      image: "SUP275",
      isExpansionSlot: true,
      
      print: "SUP275",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["APS007","SUP275"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP275",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Revered Equipment - Legs",

    
    
    
    defense: 2,
    
    functionalText: `When this defends, pay up to {r}{r}{r}. Create that many Toughness tokens.

**Temper**`,
    
    
    
    
    keywords: [Keyword.Temper],
    
    
    meta: [Meta.Expansion],
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Mateusz Wiśniewski"],
    cardIdentifier: "booze-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP117",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Booze!",
    printings: [{
        artists: ["Mateusz Wiśniewski"],
      
      identifier: "SUP117",
      image: "SUP117",
      
      
      print: "SUP117",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP117"],
    sets: [Release.SuperSlam],
    specialImage: "SUP117",
    subtypes: [Subtype.Aura,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Reviled Action - Aura",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Go again**

When this enters or leaves the arena, **the crowd boos** you.

At the start of your turn, destroy this.`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.TheCrowdBoos],
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Peyeyo"],
    cardIdentifier: "brothers-in-arms-red",
    classes: [Class.Generic],
    defaultImage: "SUP227",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Brothers in Arms",
    printings: [{
        artists: ["Peyeyo"],
      
      identifier: "SUP227",
      image: "SUP227",
      
      
      print: "SUP227",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP227","UPR203"],
    sets: [Release.SuperSlam,Release.Uprising],
    specialImage: "SUP227",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this defends, you may pay {r}. If you do, it gets +2{d}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Peyeyo"],
    cardIdentifier: "brothers-in-arms-yellow",
    classes: [Class.Generic],
    defaultImage: "SUP228",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Brothers in Arms",
    printings: [{
        artists: ["Peyeyo"],
      
      identifier: "SUP228",
      image: "SUP228",
      
      
      print: "SUP228",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP228","UPR204"],
    sets: [Release.SuperSlam,Release.Uprising],
    specialImage: "SUP228",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this defends, you may pay {r}. If you do, it gets +2{d}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Peyeyo"],
    cardIdentifier: "brothers-in-arms-blue",
    classes: [Class.Generic],
    defaultImage: "SUP229",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Brothers in Arms",
    printings: [{
        artists: ["Peyeyo"],
      
      identifier: "SUP229",
      image: "SUP229",
      
      
      print: "SUP229",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["FAB093","SUP229","UPR205"],
    sets: [Release.Promos,Release.SuperSlam,Release.Uprising],
    specialImage: "SUP229",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this defends, you may pay {r}. If you do, it gets +2{d}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "buckwild-red",
    classes: [Class.Brute],
    defaultImage: "SUP143",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Buckwild",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "SUP143",
      image: "SUP143",
      
      
      print: "SUP143",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP143"],
    sets: [Release.SuperSlam],
    specialImage: "SUP143",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `If there is a card with 6 or more {p} in your pitch zone, this gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "buckwild-yellow",
    classes: [Class.Brute],
    defaultImage: "SUP144",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Buckwild",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "SUP144",
      image: "SUP144",
      
      
      print: "SUP144",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP144"],
    sets: [Release.SuperSlam],
    specialImage: "SUP144",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `If there is a card with 6 or more {p} in your pitch zone, this gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "buckwild-blue",
    classes: [Class.Brute],
    defaultImage: "SUP145",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Buckwild",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "SUP145",
      image: "SUP145",
      
      
      print: "SUP145",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP145"],
    sets: [Release.SuperSlam],
    specialImage: "SUP145",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `If there is a card with 6 or more {p} in your pitch zone, this gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Maerel Hibadita"],
    cardIdentifier: "bully-tactics-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP081",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Bully Tactics",
    printings: [{
        artists: ["Maerel Hibadita"],
      
      identifier: "SUP081",
      image: "SUP081",
      
      
      print: "SUP081",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP081"],
    sets: [Release.SuperSlam],
    specialImage: "SUP081",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks a hero, you may pay up to {r}{r}{r}. **Intimidate** them that many times.`,
    
    
    
    
    keywords: [Keyword.Intimidate],
    
    
    
  
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Nino Setiawan"],
    cardIdentifier: "catch-of-the-day-blue",
    classes: [Class.Pirate,Class.Ranger],
    defaultImage: "SUP268",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Marlynn],
    name: "Catch of the Day",
    printings: [{
        artists: ["Nino Setiawan"],
      
      identifier: "SUP268",
      image: "SUP268",
      isExpansionSlot: true,
      
      print: "SUP268",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP268"],
    sets: [Release.SuperSlam],
    specialImage: "SUP268",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Ranger Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Your next arrow attack this turn gets +2{p}.

If a go fish effect would trigger this turn, instead it triggers twice.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kelvin Jauwri"],
    cardIdentifier: "challenge-the-alpha-yellow",
    classes: [Class.Brute],
    defaultImage: "SUP129",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Challenge the Alpha",
    printings: [{
        artists: ["Kelvin Jauwri"],
      
      identifier: "SUP129",
      image: "SUP129",
      
      
      print: "SUP129",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP129"],
    sets: [Release.SuperSlam],
    specialImage: "SUP129",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this attacks a Brute hero, this gets +2{p}.

When this hits a Brute hero, they discard a card. If it has 6 or more {p}, you lose 2{h}.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Anthony Avon"],
    cardIdentifier: "channel-the-tranquil-domain-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP263",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Briar,Hero.Florian,Hero.Jarl,Hero.Oldhim,Hero.Starvo,Hero.Terra,Hero.Verdance],
    name: "Channel the Tranquil Domain",
    printings: [{
        artists: ["Anthony Avon"],
      
      identifier: "SUP263",
      image: "SUP263",
      isExpansionSlot: true,
      
      print: "SUP263",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP263"],
    sets: [Release.SuperSlam],
    specialImage: "SUP263",
    subtypes: [Subtype.Aura,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Earth Action - Aura",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `**Go again**

When this enters the arena and at the start of your action phase, put another target aura on the obttom of its owner's deck.

**Channel Earth** - At the beginning of your end phase, put a flow counter on this, then destroy it unless you put an Earth card from your pitch zone on the bottom of your deck for each flow counter on it.`,
    
    
    
    
    keywords: [Keyword.Channel,Keyword.GoAgain],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Earth],
  
  
  },{
    artists: ["Ismatulloh"],
    cardIdentifier: "cheap-shot-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP094",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Cheap Shot",
    printings: [{
        artists: ["Ismatulloh"],
      
      identifier: "SUP094",
      image: "SUP094",
      
      
      print: "SUP094",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP094"],
    sets: [Release.SuperSlam],
    specialImage: "SUP094",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Reviled Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `If you've been booed this turn, you may play this as though it were an instant.

Deal 2 damage to target hero unless they discard a card.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Grégory Nunkovics"],
    cardIdentifier: "cheaters-charm-yellow",
    classes: [Class.Brute],
    defaultImage: "SUP068",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.RKO],
    name: "Cheater's Charm",
    printings: [{
        artists: ["Grégory Nunkovics"],
      
      identifier: "SUP068",
      image: "SUP068",
      
      
      print: "SUP068",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Marvel,Rarity.Promo,Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["FAB372","LGS424","SUP068"],
    sets: [Release.Promos,Release.SuperSlam],
    specialImage: "SUP068",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Reviled Brute Instant",

    
    
    cost: 0,
    
    
    functionalText: `Choose any number;
- **Steal** a Confidence or Toughness token.
- **The crowd boos** you.
- If you control an attack with 6 or more {p}, deal 2 damage to target hero unless they discard a card.`,
    
    
    
    
    keywords: [Keyword.Steal,Keyword.TheCrowdBoos],
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "cheers-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP055",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Cheers!",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "SUP055",
      image: "SUP055",
      
      
      print: "SUP055",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP055"],
    sets: [Release.SuperSlam],
    specialImage: "SUP055",
    subtypes: [Subtype.Aura,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Revered Action - Aura",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Go again**

When this enters or leaves the arena, **the crowd cheers** you.

At the start of your turn, destroy this.`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.TheCrowdCheers],
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Jackson Tjota"],
    cardIdentifier: "chest-puff-red",
    classes: [Class.Generic],
    defaultImage: "SUP222",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Chest Puff",
    printings: [{
        artists: ["Jackson Tjota"],
      
      identifier: "SUP222",
      image: "SUP222",
      
      
      print: "SUP222",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP222"],
    sets: [Release.SuperSlam],
    specialImage: "SUP222",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks, it gets -1{p} unless you pay {r}.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kyxarie Peralta"],
    cardIdentifier: "clench-the-upper-hand-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP101",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Clench the Upper Hand",
    printings: [{
        artists: ["Kyxarie Peralta"],
      
      identifier: "SUP101",
      image: "SUP101",
      
      
      print: "SUP101",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP101"],
    sets: [Release.SuperSlam],
    specialImage: "SUP101",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks or defends, if you have less {h} than each other hero, **the crowd boos** you.`,
    
    
    
    
    keywords: [Keyword.TheCrowdBoos],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Kyxarie Peralta"],
    cardIdentifier: "clench-the-upper-hand-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP102",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Clench the Upper Hand",
    printings: [{
        artists: ["Kyxarie Peralta"],
      
      identifier: "SUP102",
      image: "SUP102",
      
      
      print: "SUP102",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP102"],
    sets: [Release.SuperSlam],
    specialImage: "SUP102",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks or defends, if you have less {h} than each other hero, **the crowd boos** you.`,
    
    
    
    
    keywords: [Keyword.TheCrowdBoos],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Kyxarie Peralta"],
    cardIdentifier: "clench-the-upper-hand-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP103",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Clench the Upper Hand",
    printings: [{
        artists: ["Kyxarie Peralta"],
      
      identifier: "SUP103",
      image: "SUP103",
      
      
      print: "SUP103",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP103"],
    sets: [Release.SuperSlam],
    specialImage: "SUP103",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks or defends, if you have less {h} than each other hero, **the crowd boos** you.`,
    
    
    
    
    keywords: [Keyword.TheCrowdBoos],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Samuel Perin"],
    cardIdentifier: "comeback-kid-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP027",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Comeback Kid",
    printings: [{
        artists: ["Samuel Perin"],
      
      identifier: "SUP027",
      image: "SUP027",
      
      
      print: "SUP027",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP027"],
    sets: [Release.SuperSlam],
    specialImage: "SUP027",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this attacks a hero, if you have less {h} than them, **the crowd cheers* you.

If you've been cheered this turn, this gets +1{p}.`,
    
    
    
    
    keywords: [Keyword.TheCrowdCheers],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Samuel Perin"],
    cardIdentifier: "comeback-kid-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP028",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Comeback Kid",
    printings: [{
        artists: ["Samuel Perin"],
      
      identifier: "SUP028",
      image: "SUP028",
      
      
      print: "SUP028",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP028"],
    sets: [Release.SuperSlam],
    specialImage: "SUP028",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this attacks a hero, if you have less {h} than them, **the crowd cheers* you.

If you've been cheered this turn, this gets +1{p}.`,
    
    
    
    
    keywords: [Keyword.TheCrowdCheers],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Samuel Perin"],
    cardIdentifier: "comeback-kid-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP029",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Comeback Kid",
    printings: [{
        artists: ["Samuel Perin"],
      
      identifier: "SUP029",
      image: "SUP029",
      
      
      print: "SUP029",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["APS017","SUP029"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP029",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this attacks a hero, if you have less {h} than them, **the crowd cheers* you.

If you've been cheered this turn, this gets +1{p}.`,
    
    
    
    
    keywords: [Keyword.TheCrowdCheers],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Reza Aswadananta"],
    cardIdentifier: "concealed-object-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP097",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Concealed Object",
    printings: [{
        artists: ["Reza Aswadananta"],
      
      identifier: "SUP097",
      image: "SUP097",
      
      
      print: "SUP097",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP097"],
    sets: [Release.SuperSlam],
    specialImage: "SUP097",
    subtypes: [Subtype.Item],
    types: [Type.Instant],
    typeText: "Reviled Instant - Item",

    
    
    cost: 0,
    
    
    functionalText: `When this enters the arena, **the crowd boos** you.

**Instant** - {t}: Target attack gets +1{p}.

At the beginning of your end phase, destroy this.`,
    
    
    
    
    keywords: [Keyword.TheCrowdBoos],
    
    
    
  
    
    pitch: 3,
    
    
    shorthands: ["Tap"],
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Sebastian Giacobino"],
    cardIdentifier: "confidence",
    classes: [Class.Generic],
    defaultImage: "SUP239",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Confidence",
    printings: [{
        artists: ["Sebastian Giacobino"],
      
      identifier: "SUP239",
      image: "SUP239",
      
      
      print: "SUP239",
      rarity: Rarity.Basic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Basic,Rarity.Token],
    rarity: Rarity.Basic,
    setIdentifiers: ["APS031","SUP239"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP239",
    subtypes: [Subtype.Aura],
    types: [Type.Token],
    typeText: "Generic Token - Aura",

    
    
    
    
    
    functionalText: `At the start of your turn, destroy this, then the next attack card you play this turn can't be defended by more than 2 non-block cards.`,
    
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Alexandra Malygina","Sam Yang"],
    cardIdentifier: "cracked-bauble-yellow",
    classes: [Class.Generic],
    defaultImage: "SUP243",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Cracked Bauble",
    printings: [{
        artists: ["Sam Yang"],
      
      identifier: "SUP243",
      image: "SUP243",
      
      
      print: "SUP243",
      rarity: Rarity.Basic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Basic,Rarity.Common,Rarity.Promo,Rarity.Token],
    rarity: Rarity.Basic,
    setIdentifiers: ["ARC218","CRU195","ELE237","HNT245","HVY244","LGS083","LGS227","MON306","MST224","OUT238","ROS238","SEA246","SUP243","UPR224","WTR224"],
    sets: [Release.ArcaneRising,Release.CrucibleOfWar,Release.HeavyHitters,Release.HighSeas,Release.Monarch,Release.Outsiders,Release.PartTheMistveil,Release.Promos,Release.Rosetta,Release.SuperSlam,Release.TalesOfAria,Release.TheHunted,Release.Uprising,Release.WelcomeToRathe],
    specialImage: "SUP243",
    subtypes: [],
    types: [Type.Resource],
    typeText: "Generic Resource",

    
    
    
    
    
    functionalText: `*(A player may add any number of Cracked Baubles to their card-pool in sealed deck or booster draft formats.)*`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Sebastian Giacobino"],
    cardIdentifier: "cries-of-encore-red",
    classes: [Class.Guardian],
    defaultImage: "SUP012",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades],
    name: "Cries of Encore",
    printings: [{
        artists: ["Sebastian Giacobino"],
      
      identifier: "SUP012",
      image: "SUP012",
      
      
      print: "SUP012",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Sebastian Giacobino"],
      foiling: Foiling.C,
      identifier: "SUP012",
      image: "SUP012_V2",
      
      
      print: "SUP012-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP012"],
    sets: [Release.SuperSlam],
    specialImage: "SUP012_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Guardian Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this attacks a hero, if you have less {h} than them, **the crowd cheers** you.

If you've been cheered this turn, this gets "When this hits a hero, you may plan an aura of suspense from your graveyard this turn."`,
    
    
    
    
    keywords: [Keyword.TheCrowdCheers],
    
    
    
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Kevin Sidharta"],
    cardIdentifier: "crowd-goes-wild-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP019",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Crowd Goes Wild",
    printings: [{
        artists: ["Kevin Sidharta"],
      
      identifier: "SUP019",
      image: "SUP019",
      
      
      print: "SUP019",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP019"],
    sets: [Release.SuperSlam],
    specialImage: "SUP019",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `If you've been cheered this turn, this costs {r}{r}{r} less to play.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Orson CaptainSass"],
    cardIdentifier: "cruel-ambition-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP118",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Cruel Ambition",
    printings: [{
        artists: ["Orson CaptainSass"],
      
      identifier: "SUP118",
      image: "SUP118",
      
      
      print: "SUP118",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP118"],
    sets: [Release.SuperSlam],
    specialImage: "SUP118",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Reviled Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Create 3 Might tokens.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "cut-a-long-story-short-yellow",
    classes: [Class.Guardian],
    defaultImage: "SUP172",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Cut a Long Story Short",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "SUP172",
      image: "SUP172",
      
      
      print: "SUP172",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP172"],
    sets: [Release.SuperSlam],
    specialImage: "SUP172",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If this has {p} greater than its base, it gets +1{p}.

**Tower** - If this has 13 or more {p}, it gets "When this hits a hero, they discard their hand."`,
    
    
    
    
    keywords: [Keyword.Tower],
    
    
    
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Stormy Elia Fanggidae"],
    cardIdentifier: "cut-off-at-the-knees-yellow",
    classes: [Class.Guardian],
    defaultImage: "SUP173",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Cut Off at the Knees",
    printings: [{
        artists: ["Stormy Elia Fanggidae"],
      
      identifier: "SUP173",
      image: "SUP173",
      
      
      print: "SUP173",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP173"],
    sets: [Release.SuperSlam],
    specialImage: "SUP173",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If this has {p} greater than its base, it gets +1{p}.

**Tower** - If this has 13 or more {p}, it gets "When this hits a hero, destroy the top 3 cards of their deck."`,
    
    
    
    
    keywords: [Keyword.Tower],
    
    
    
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Reinaldo Indrajaya"],
    cardIdentifier: "cut-the-small-talk-yellow",
    classes: [Class.Guardian],
    defaultImage: "SUP174",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Cut the Small Talk",
    printings: [{
        artists: ["Reinaldo Indrajaya"],
      
      identifier: "SUP174",
      image: "SUP174",
      
      
      print: "SUP174",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP174"],
    sets: [Release.SuperSlam],
    specialImage: "SUP174",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If this has {p} greater than its base, it gets +1{p}.

**Tower** - If this has 13 or more {p}, it gets "When this hits a hero, destroy all auras they control."`,
    
    
    
    
    keywords: [Keyword.Tower],
    
    
    
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Cacho Rubione"],
    cardIdentifier: "cutting-retort-red",
    classes: [Class.Generic],
    defaultImage: "SUP215",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Cutting Retort",
    printings: [{
        artists: ["Cacho Rubione"],
      
      identifier: "SUP215",
      image: "SUP215",
      
      
      print: "SUP215",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP215"],
    sets: [Release.SuperSlam],
    specialImage: "SUP215",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks a hero, you may pay up to {r}{r}{r}. Destroy that many aura tokens with different names they control. If you do, this gets +1{p} for each aura destroyed this way.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Brian Madya Narendra"],
    cardIdentifier: "darling-of-the-crowd-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP061",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Darling of the Crowd",
    printings: [{
        artists: ["Brian Madya Narendra"],
      
      identifier: "SUP061",
      image: "SUP061",
      
      
      print: "SUP061",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP061"],
    sets: [Release.SuperSlam],
    specialImage: "SUP061",
    subtypes: [],
    types: [Type.Block],
    typeText: "Revered Block",

    
    
    
    defense: 3,
    
    functionalText: `While this is defending, if you've been cheered this turn, it gets +1{d}.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Narendra B Adi"],
    cardIdentifier: "dig-in-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP036",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Dig In",
    printings: [{
        artists: ["Narendra B Adi"],
      
      identifier: "SUP036",
      image: "SUP036",
      
      
      print: "SUP036",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["FAB381","SUP036"],
    sets: [Release.Promos,Release.SuperSlam],
    specialImage: "SUP036",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this defends, you may pay up to {r}{r}{r}. Create that many Toughness tokens.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Narendra B Adi"],
    cardIdentifier: "dig-in-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP037",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Dig In",
    printings: [{
        artists: ["Narendra B Adi"],
      
      identifier: "SUP037",
      image: "SUP037",
      
      
      print: "SUP037",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["FAB382","SUP037"],
    sets: [Release.Promos,Release.SuperSlam],
    specialImage: "SUP037",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this defends, you may pay up to {r}{r}{r}. Create that many Toughness tokens.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Narendra B Adi"],
    cardIdentifier: "dig-in-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP038",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Dig In",
    printings: [{
        artists: ["Narendra B Adi"],
      
      identifier: "SUP038",
      image: "SUP038",
      
      
      print: "SUP038",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["FAB383","SUP038"],
    sets: [Release.Promos,Release.SuperSlam],
    specialImage: "SUP038",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this defends, you may pay up to {r}{r}{r}. Create that many Toughness tokens.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "disarm-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP030",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Disarm",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "SUP030",
      image: "SUP030",
      
      
      print: "SUP030",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP030"],
    sets: [Release.SuperSlam],
    specialImage: "SUP030",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this attacks, if you've been cheered this turn, create a Toughness token.

When this defends, if it has 6 or more {d}, the attacking hero puts a card from their hand on the bottom of their deck.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Muhammad Farji"],
    cardIdentifier: "disdainful-delight-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP123",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Disdainful Delight",
    printings: [{
        artists: ["Muhammad Farji"],
      
      identifier: "SUP123",
      image: "SUP123",
      
      
      print: "SUP123",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP123"],
    sets: [Release.SuperSlam],
    specialImage: "SUP123",
    subtypes: [],
    types: [Type.Block],
    typeText: "Reviled Block",

    
    
    
    defense: 3,
    
    functionalText: `While this is defending, if you've been booed this turn, this gets +1{d}.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "disembody-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP031",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Disembody",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "SUP031",
      image: "SUP031",
      
      
      print: "SUP031",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP031"],
    sets: [Release.SuperSlam],
    specialImage: "SUP031",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this attacks, if you've been cheered this turn, create a Toughness token.

When this defends, if it has 6 or more {d}, the attacking hero puts an aura they control on the bottom of their deck.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "disperse-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP032",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Disperse",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "SUP032",
      image: "SUP032",
      
      
      print: "SUP032",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP032"],
    sets: [Release.SuperSlam],
    specialImage: "SUP032",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this attacks, if you've been cheered this turn, create a Toughness token.

When this defends, if it has 6 or more {d}, the attacking hero puts a card from their arsenal on the bottom of their deck.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Jefrey Yonathan"],
    cardIdentifier: "disturb-the-peace-red",
    classes: [Class.Brute],
    defaultImage: "SUP130",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Disturb the Peace",
    printings: [{
        artists: ["Jefrey Yonathan"],
      
      identifier: "SUP130",
      image: "SUP130",
      
      
      print: "SUP130",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP130"],
    sets: [Release.SuperSlam],
    specialImage: "SUP130",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `This can't be defended by Guardian auras.

When this hits a Guardian hero, destroy an aura they control.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Pavel Rtishchev (Klaher)"],
    cardIdentifier: "dramatic-pause-red",
    classes: [Class.Guardian],
    defaultImage: "SUP198",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Dramatic Pause",
    printings: [{
        artists: ["Pavel Rtishchev (Klaher)"],
      
      identifier: "SUP198",
      image: "SUP198",
      
      
      print: "SUP198",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP198"],
    sets: [Release.SuperSlam],
    specialImage: "SUP198",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Guardian Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `**Suspense**

When this enters the arena, target defending action card gets +3{d} this chain link.`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Pavel Rtishchev (Klaher)"],
    cardIdentifier: "dramatic-pause-yellow",
    classes: [Class.Guardian],
    defaultImage: "SUP199",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Dramatic Pause",
    printings: [{
        artists: ["Pavel Rtishchev (Klaher)"],
      
      identifier: "SUP199",
      image: "SUP199",
      
      
      print: "SUP199",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP199"],
    sets: [Release.SuperSlam],
    specialImage: "SUP199",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Guardian Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `**Suspense**

When this enters the arena, target defending action card gets +2{d} this chain link.`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Pavel Rtishchev (Klaher)"],
    cardIdentifier: "dramatic-pause-blue",
    classes: [Class.Guardian],
    defaultImage: "SUP200",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Dramatic Pause",
    printings: [{
        artists: ["Pavel Rtishchev (Klaher)"],
      
      identifier: "SUP200",
      image: "SUP200",
      
      
      print: "SUP200",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP200"],
    sets: [Release.SuperSlam],
    specialImage: "SUP200",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Guardian Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `**Suspense**

When this enters the arena, target defending action card gets +1{d} this chain link.`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  }];
  const cards2: Card[] =  [{
    artists: ["Marco Wulfr"],
    cardIdentifier: "edge-of-their-seats-red",
    classes: [Class.Guardian],
    defaultImage: "SUP201",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Edge of Their Seats",
    printings: [{
        artists: ["Marco Wulfr"],
      
      identifier: "SUP201",
      image: "SUP201",
      
      
      print: "SUP201",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["APS012","SUP201"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP201",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Guardian Instant - Aura",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `**Suspense**

When this leaves the arena, your next attack this turn gets +5{p}.`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marco Wulfr"],
    cardIdentifier: "edge-of-their-seats-yellow",
    classes: [Class.Guardian],
    defaultImage: "SUP202",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Edge of Their Seats",
    printings: [{
        artists: ["Marco Wulfr"],
      
      identifier: "SUP202",
      image: "SUP202",
      
      
      print: "SUP202",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP202"],
    sets: [Release.SuperSlam],
    specialImage: "SUP202",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Guardian Instant - Aura",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `**Suspense**

When this leaves the arena, your next attack this turn gets +4{p}.`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marco Wulfr"],
    cardIdentifier: "edge-of-their-seats-blue",
    classes: [Class.Guardian],
    defaultImage: "SUP203",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Edge of Their Seats",
    printings: [{
        artists: ["Marco Wulfr"],
      
      identifier: "SUP203",
      image: "SUP203",
      
      
      print: "SUP203",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["APS023","SUP203"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP203",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Guardian Instant - Aura",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `**Suspense**

When this leaves the arena, your next attack this turn gets +3{p}.`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Daniel Correia"],
    cardIdentifier: "empowering-ruckus-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP039",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Empowering Ruckus",
    printings: [{
        artists: ["Daniel Correia"],
      
      identifier: "SUP039",
      image: "SUP039",
      
      
      print: "SUP039",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP039"],
    sets: [Release.SuperSlam],
    specialImage: "SUP039",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `If you've been cheered this turn, this gets +1{p}.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Narendra B Adi"],
    cardIdentifier: "energetic-impact-blue",
    classes: [Class.Brute],
    defaultImage: "SUP131",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Energetic Impact",
    printings: [{
        artists: ["Narendra B Adi"],
      
      identifier: "SUP131",
      image: "SUP131",
      
      
      print: "SUP131",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP131"],
    sets: [Release.SuperSlam],
    specialImage: "SUP131",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this defends together with a card with 6 or more {p}, create a Vigor token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Sariya Asavametha"],
    cardIdentifier: "escalate-order-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP022",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Escalate Order",
    printings: [{
        artists: ["Sariya Asavametha"],
      
      identifier: "SUP022",
      image: "SUP022",
      
      
      print: "SUP022",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP022"],
    sets: [Release.SuperSlam],
    specialImage: "SUP022",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 6,
    defense: 3,
    
    functionalText: `When this attacks, if you control a Toughness token, create 3 more.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 2,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Tanapon Wachirakul"],
    cardIdentifier: "escalate-violence-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP084",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Escalate Violence",
    printings: [{
        artists: ["Tanapon Wachirakul"],
      
      identifier: "SUP084",
      image: "SUP084",
      
      
      print: "SUP084",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP084"],
    sets: [Release.SuperSlam],
    specialImage: "SUP084",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this attacks, if you control a Might token, create 3 more.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Sandeep Karunakaran"],
    cardIdentifier: "familiar-stench-red",
    classes: [Class.Brute],
    defaultImage: "SUP142",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Familiar Stench",
    printings: [{
        artists: ["Sandeep Karunakaran"],
      
      identifier: "SUP142",
      image: "SUP142",
      
      
      print: "SUP142",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP142"],
    sets: [Release.SuperSlam],
    specialImage: "SUP142",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When 1 or more Brute cards defend this, create a Vigor token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Akifa Shakhgeldieva"],
    cardIdentifier: "familiar-story-red",
    classes: [Class.Guardian],
    defaultImage: "SUP185",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Familiar Story",
    printings: [{
        artists: ["Akifa Shakhgeldieva"],
      
      identifier: "SUP185",
      image: "SUP185",
      
      
      print: "SUP185",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP185"],
    sets: [Release.SuperSlam],
    specialImage: "SUP185",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When 1 or more Guardian cards defend this, create a Confidence token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Hilary Purnamasari"],
    cardIdentifier: "feisty-locals-red",
    classes: [Class.Generic],
    defaultImage: "SUP230",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Feisty Locals",
    printings: [{
        artists: ["Hilary Purnamasari"],
      
      identifier: "SUP230",
      image: "SUP230",
      
      
      print: "SUP230",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["BEN011","OUT207","SUP230"],
    sets: [Release.BenjiBlitzDeck,Release.Outsiders,Release.SuperSlam],
    specialImage: "SUP230",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `If this is defended by an action card, this gets +2{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Hilary Purnamasari"],
    cardIdentifier: "feisty-locals-yellow",
    classes: [Class.Generic],
    defaultImage: "SUP231",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Feisty Locals",
    printings: [{
        artists: ["Hilary Purnamasari"],
      
      identifier: "SUP231",
      image: "SUP231",
      
      
      print: "SUP231",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OUT208","SUP231"],
    sets: [Release.Outsiders,Release.SuperSlam],
    specialImage: "SUP231",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `If this is defended by an action card, this gets +2{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Hilary Purnamasari"],
    cardIdentifier: "feisty-locals-blue",
    classes: [Class.Generic],
    defaultImage: "SUP232",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Feisty Locals",
    printings: [{
        artists: ["Hilary Purnamasari"],
      
      identifier: "SUP232",
      image: "SUP232",
      
      
      print: "SUP232",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OUT209","SUP232"],
    sets: [Release.Outsiders,Release.SuperSlam],
    specialImage: "SUP232",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `If this is defended by an action card, this gets +2{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Dominik Mayer"],
    cardIdentifier: "felling-of-the-crown-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP261",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Briar,Hero.Florian,Hero.Jarl,Hero.Oldhim,Hero.Starvo,Hero.Terra,Hero.Verdance],
    name: "Felling of the Crown",
    printings: [{
        artists: ["Dominik Mayer"],
      
      identifier: "SUP261",
      image: "SUP261",
      isExpansionSlot: true,
      
      print: "SUP261",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic,Rarity.Promo],
    rarity: Rarity.Majestic,
    setIdentifiers: ["FAB260","ROS031","SUP261"],
    sets: [Release.Promos,Release.Rosetta,Release.SuperSlam],
    specialImage: "SUP261",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Earth Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `If there are 4 or more Earth cards in your banished zone, this gets +4{p}.

**Decompose** - When this attacks, you may banish 2 Earth cards and an action card from your graveyard. If you do, each hero puts a card from their hand on the bottom of their deck.`,
    
    
    
    
    keywords: [Keyword.Decompose],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Earth],
  
  
  },{
    artists: ["Andi Cahyo W"],
    cardIdentifier: "fight-dirty-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP089",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Fight Dirty",
    printings: [{
        artists: ["Andi Cahyo W"],
      
      identifier: "SUP089",
      image: "SUP089",
      
      
      print: "SUP089",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP089"],
    sets: [Release.SuperSlam],
    specialImage: "SUP089",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `If this is defended by a Revered card, this gets +1{p}.

When this hits a Revered hero, destroy the top card of their deck.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Alexis Susani"],
    cardIdentifier: "fight-fair-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP033",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Fight Fair",
    printings: [{
        artists: ["Alexis Susani"],
      
      identifier: "SUP033",
      image: "SUP033",
      
      
      print: "SUP033",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP033"],
    sets: [Release.SuperSlam],
    specialImage: "SUP033",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `If this is defended by a Reviled card, this gets +1{p}.

When this hits a Reviled hero, put this on the bottom of its owner's deck.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Raphael Pinna"],
    cardIdentifier: "fight-from-behind-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP040",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Fight from Behind",
    printings: [{
        artists: ["Raphael Pinna"],
      
      identifier: "SUP040",
      image: "SUP040",
      
      
      print: "SUP040",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP040"],
    sets: [Release.SuperSlam],
    specialImage: "SUP040",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this attacks or defends, if you have less {h} than each other hero, **the crowd cheers** you.`,
    
    
    
    
    keywords: [Keyword.TheCrowdCheers],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Raphael Pinna"],
    cardIdentifier: "fight-from-behind-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP041",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Fight from Behind",
    printings: [{
        artists: ["Raphael Pinna"],
      
      identifier: "SUP041",
      image: "SUP041",
      
      
      print: "SUP041",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP041"],
    sets: [Release.SuperSlam],
    specialImage: "SUP041",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this attacks or defends, if you have less {h} than each other hero, **the crowd cheers** you.`,
    
    
    
    
    keywords: [Keyword.TheCrowdCheers],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Raphael Pinna"],
    cardIdentifier: "fight-from-behind-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP042",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Fight from Behind",
    printings: [{
        artists: ["Raphael Pinna"],
      
      identifier: "SUP042",
      image: "SUP042",
      
      
      print: "SUP042",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP042"],
    sets: [Release.SuperSlam],
    specialImage: "SUP042",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this attacks or defends, if you have less {h} than each other hero, **the crowd cheers** you.`,
    
    
    
    
    keywords: [Keyword.TheCrowdCheers],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["SanSan"],
    cardIdentifier: "fix-the-match-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP082",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Brutus,Hero.Lyath,Hero.RKO],
    name: "Fix the Match",
    printings: [{
        artists: ["SanSan"],
      
      identifier: "SUP082",
      image: "SUP082",
      
      
      print: "SUP082",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP082"],
    sets: [Release.SuperSlam],
    specialImage: "SUP082",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, search your deck for a card, then shuffle and put that card on top.

Whenever a card defends this, **clash** with the defending hero. The winner creates a Might token.`,
    
    
    
    
    keywords: [Keyword.Clash],
    
    
    
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Firaz M. Rasyid"],
    cardIdentifier: "flex-speed-red",
    classes: [Class.Brute],
    defaultImage: "SUP146",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Flex Speed",
    printings: [{
        artists: ["Firaz M. Rasyid"],
      
      identifier: "SUP146",
      image: "SUP146",
      
      
      print: "SUP146",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP146"],
    sets: [Release.SuperSlam],
    specialImage: "SUP146",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `If this has 6 or more {p}, it gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Firaz M. Rasyid"],
    cardIdentifier: "flex-speed-yellow",
    classes: [Class.Brute],
    defaultImage: "SUP147",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Flex Speed",
    printings: [{
        artists: ["Firaz M. Rasyid"],
      
      identifier: "SUP147",
      image: "SUP147",
      
      
      print: "SUP147",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP147"],
    sets: [Release.SuperSlam],
    specialImage: "SUP147",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `If this has 6 or more {p}, it gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 4,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Firaz M. Rasyid"],
    cardIdentifier: "flex-speed-blue",
    classes: [Class.Brute],
    defaultImage: "SUP148",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Flex Speed",
    printings: [{
        artists: ["Firaz M. Rasyid"],
      
      identifier: "SUP148",
      image: "SUP148",
      
      
      print: "SUP148",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP148"],
    sets: [Release.SuperSlam],
    specialImage: "SUP148",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `If this has 6 or more {p}, it gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 3,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ambang Tegar Prakoso"],
    cardIdentifier: "flex-strength-red",
    classes: [Class.Brute],
    defaultImage: "SUP149",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Flex Strength",
    printings: [{
        artists: ["Ambang Tegar Prakoso"],
      
      identifier: "SUP149",
      image: "SUP149",
      
      
      print: "SUP149",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP149"],
    sets: [Release.SuperSlam],
    specialImage: "SUP149",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `If this has 6 or more {p}, it gets +3{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ambang Tegar Prakoso"],
    cardIdentifier: "flex-strength-yellow",
    classes: [Class.Brute],
    defaultImage: "SUP150",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Flex Strength",
    printings: [{
        artists: ["Ambang Tegar Prakoso"],
      
      identifier: "SUP150",
      image: "SUP150",
      
      
      print: "SUP150",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP150"],
    sets: [Release.SuperSlam],
    specialImage: "SUP150",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `If this has 6 or more {p}, it gets +3{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ambang Tegar Prakoso"],
    cardIdentifier: "flex-strength-blue",
    classes: [Class.Brute],
    defaultImage: "SUP151",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Flex Strength",
    printings: [{
        artists: ["Ambang Tegar Prakoso"],
      
      identifier: "SUP151",
      image: "SUP151",
      
      
      print: "SUP151",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP151"],
    sets: [Release.SuperSlam],
    specialImage: "SUP151",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `If this has 6 or more {p}, it gets +3{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Isuardi Therianto","Nathaniel Himawan"],
    cardIdentifier: "flick-knives",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "SUP244",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Benji,Hero.Cindra,Hero.Crackni,Hero.Fai,Hero.Ira,Hero.Katsu,Hero.Nuu,Hero.Slippy,Hero.Taylor,Hero.Uzuri,Hero.Zen],
    name: "Flick Knives",
    printings: [{
        artists: ["Isuardi Therianto"],
      
      identifier: "SUP244",
      image: "SUP244",
      isExpansionSlot: true,
      
      print: "SUP244-Alternate Art",
      rarity: Rarity.Legendary,
      set: Release.SuperSlam,
      
      treatment: Treatment.AA,treatments: [Treatment.AA],
    },{
        artists: ["Isuardi Therianto"],
      foiling: Foiling.R,
      identifier: "SUP244",
      image: "SUP244_V2",
      isExpansionSlot: true,
      
      print: "SUP244-Rainbow-Alternate Art",
      rarity: Rarity.Legendary,
      set: Release.SuperSlam,
      
      treatment: Treatment.AA,treatments: [Treatment.AA,Treatment.EA],
    },],
    rarities: [Rarity.Legendary,Rarity.Promo],
    rarity: Rarity.Legendary,
    setIdentifiers: ["FAB124","OUT139","SUP244"],
    sets: [Release.Outsiders,Release.Promos,Release.SuperSlam],
    specialImage: "SUP244_V2",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Assassin / Ninja Equipment - Arms",

    
    
    
    defense: 1,
    
    functionalText: `**Once per Turn Attack Reaction** - 0: Target dagger you control that isn't on the active chain link deals 1 damage to target hero. If damage is dealt this way, the dagger has hit. Destroy the dagger.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    meta: [Meta.Expansion],
  
    
    
    
    
    shorthands: ["Flick","Hurl","Throw"],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "full-of-bravado-red",
    classes: [Class.Guardian],
    defaultImage: "SUP178",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Full of Bravado",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "SUP178",
      image: "SUP178",
      
      
      print: "SUP178",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP178"],
    sets: [Release.SuperSlam],
    specialImage: "SUP178",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this attacks or defends, if you control an aura of suspense, create a Confidence token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "full-of-bravado-yellow",
    classes: [Class.Guardian],
    defaultImage: "SUP179",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Full of Bravado",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "SUP179",
      image: "SUP179",
      
      
      print: "SUP179",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP179"],
    sets: [Release.SuperSlam],
    specialImage: "SUP179",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this attacks or defends, if you control an aura of suspense, create a Confidence token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 7,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "full-of-bravado-blue",
    classes: [Class.Guardian],
    defaultImage: "SUP180",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Full of Bravado",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "SUP180",
      image: "SUP180",
      
      
      print: "SUP180",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP180"],
    sets: [Release.SuperSlam],
    specialImage: "SUP180",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this attacks or defends, if you control an aura of suspense, create a Confidence token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 7,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Isuardi Therianto"],
    cardIdentifier: "gallow-end-of-the-line-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "SUP267",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Gallow, End of the Line",
    printings: [{
        artists: ["Isuardi Therianto"],
      
      identifier: "SUP267",
      image: "SUP267",
      isExpansionSlot: true,
      
      print: "SUP267",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Isuardi Therianto"],
      foiling: Foiling.C,
      identifier: "SUP267",
      image: "SUP267",
      isExpansionSlot: true,
      
      print: "SUP267-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP267"],
    sets: [Release.SuperSlam],
    specialImage: "SUP267",
    subtypes: [Subtype.Ally,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Ally",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `**Action** - {r}, {t}: **Attack**

**Instant** - {t}, discard a card with watery grave: Until end of turn, effects controlled by opponents don't trigger when their attacks hit.

**Watery Grave**`,
    
    
    
    
    keywords: [Keyword.WateryGrave],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 2,
    power: 4,
    
    shorthands: ["Tap"],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["M Fakhrur Rozzi"],
    cardIdentifier: "gang-robbery-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP085",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Gang Robbery",
    printings: [{
        artists: ["M Fakhrur Rozzi"],
      
      identifier: "SUP085",
      image: "SUP085",
      
      
      print: "SUP085",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP085"],
    sets: [Release.SuperSlam],
    specialImage: "SUP085",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks a hero, **steal** an aura token they control.

If you control 3 or more auras, this gets +3{p}.`,
    
    
    
    
    keywords: [Keyword.Steal],
    
    
    
  
    
    pitch: 2,
    power: 1,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Andy Aslamov"],
    cardIdentifier: "garland-of-spring",
    classes: [Class.Generic],
    defaultImage: "SUP212",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Garland of Spring",
    printings: [{
        artists: ["Andy Aslamov"],
      
      identifier: "SUP212",
      image: "SUP212",
      
      
      print: "SUP212",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP212"],
    sets: [Release.SuperSlam],
    specialImage: "SUP212",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Chest",

    
    
    
    defense: 0,
    
    functionalText: `**Action** - Destroy this: Gain {r}. **Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Junaidi Lim"],
    cardIdentifier: "gauntlets-of-tyrannical-rex",
    classes: [Class.Brute],
    defaultImage: "SUP125",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Taylor,Hero.Tuffnut],
    name: "Gauntlets of Tyrannical Rex",
    printings: [{
        artists: ["Junaidi Lim"],
      foiling: Foiling.C,
      identifier: "SUP125",
      image: "SUP125",
      
      
      print: "SUP125-Cold",
      rarity: Rarity.Legendary,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Junaidi Lim"],
      foiling: Foiling.R,
      identifier: "SUP125",
      image: "SUP125",
      
      
      print: "SUP125-Rainbow",
      rarity: Rarity.Legendary,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Legendary],
    rarity: Rarity.Legendary,
    setIdentifiers: ["SUP125"],
    sets: [Release.SuperSlam],
    specialImage: "SUP125",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Brute Equipment - Arms",

    
    
    
    defense: 2,
    
    functionalText: `**Action** - {r}, {t}: Your next attack this turn gets +1{p}. Activate this only if there is a card with 6 or more {p} in your pitch zone. **Go again**

**Temper**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Temper],
    
    
    
  
    
    
    
    
    shorthands: ["Tap"],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Saad Irfan"],
    cardIdentifier: "give-em-a-piece-of-your-mind-red",
    classes: [Class.Brute],
    defaultImage: "SUP152",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Give 'Em a Piece of Your Mind",
    printings: [{
        artists: ["Saad Irfan"],
      
      identifier: "SUP152",
      image: "SUP152",
      
      
      print: "SUP152",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP152"],
    sets: [Release.SuperSlam],
    specialImage: "SUP152",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When the combat chain closes, if this didn't hit, the defending hero creates a Vigor token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Saad Irfan"],
    cardIdentifier: "give-em-a-piece-of-your-mind-yellow",
    classes: [Class.Brute],
    defaultImage: "SUP153",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Give 'Em a Piece of Your Mind",
    printings: [{
        artists: ["Saad Irfan"],
      
      identifier: "SUP153",
      image: "SUP153",
      
      
      print: "SUP153",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP153"],
    sets: [Release.SuperSlam],
    specialImage: "SUP153",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When the combat chain closes, if this didn't hit, the defending hero creates a Vigor token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Saad Irfan"],
    cardIdentifier: "give-em-a-piece-of-your-mind-blue",
    classes: [Class.Brute],
    defaultImage: "SUP154",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Give 'Em a Piece of Your Mind",
    printings: [{
        artists: ["Saad Irfan"],
      
      identifier: "SUP154",
      image: "SUP154",
      
      
      print: "SUP154",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP154"],
    sets: [Release.SuperSlam],
    specialImage: "SUP154",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When the combat chain closes, if this didn't hit, the defending hero creates a Vigor token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Federico Musetti"],
    cardIdentifier: "golden-gait",
    classes: [Class.Warrior],
    defaultImage: "SUP250",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Olympia,Hero.Shiyana,Hero.Taylor],
    name: "Golden Gait",
    printings: [{
        artists: ["Federico Musetti"],
      
      identifier: "SUP250",
      image: "SUP250",
      isExpansionSlot: true,
      
      print: "SUP250",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Federico Musetti"],
      foiling: Foiling.C,
      identifier: "SUP250",
      image: "SUP250_V2",
      isExpansionSlot: true,
      
      print: "SUP250-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP250"],
    sets: [Release.SuperSlam],
    specialImage: "SUP250_V2",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Warrior Equipment - Legs",

    
    
    
    defense: 2,
    
    functionalText: `**Legendary Olympia Specialization**

This counts as a Gold.

**Temper**`,
    
    
    
    
    keywords: [Keyword.Legendary,Keyword.Specialization,Keyword.Temper],
    
    
    meta: [Meta.Expansion],
  
    
    
    
    
    
    
    
    
    
    
    
    specializations: [Hero.Olympia],
    
  
  
  },{
    artists: ["Federico Musetti"],
    cardIdentifier: "golden-galea",
    classes: [Class.Warrior],
    defaultImage: "SUP247",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Olympia,Hero.Shiyana,Hero.Taylor],
    name: "Golden Galea",
    printings: [{
        artists: ["Federico Musetti"],
      
      identifier: "SUP247",
      image: "SUP247",
      isExpansionSlot: true,
      
      print: "SUP247",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Federico Musetti"],
      foiling: Foiling.C,
      identifier: "SUP247",
      image: "SUP247_V2",
      isExpansionSlot: true,
      
      print: "SUP247-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP247"],
    sets: [Release.SuperSlam],
    specialImage: "SUP247_V2",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Warrior Equipment - Head",

    
    
    
    defense: 2,
    
    functionalText: `**Legendary Olympia Specialization**

This counts as a Gold.

**Temper**`,
    
    
    
    
    keywords: [Keyword.Legendary,Keyword.Specialization,Keyword.Temper],
    
    
    meta: [Meta.Expansion],
  
    
    
    
    
    
    
    
    
    
    
    
    specializations: [Hero.Olympia],
    
  
  
  },{
    artists: ["Federico Musetti"],
    cardIdentifier: "golden-gauntlets",
    classes: [Class.Warrior],
    defaultImage: "SUP249",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Olympia,Hero.Shiyana,Hero.Taylor],
    name: "Golden Gauntlets",
    printings: [{
        artists: ["Federico Musetti"],
      
      identifier: "SUP249",
      image: "SUP249",
      isExpansionSlot: true,
      
      print: "SUP249",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Federico Musetti"],
      foiling: Foiling.C,
      identifier: "SUP249",
      image: "SUP249_V2",
      isExpansionSlot: true,
      
      print: "SUP249-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP249"],
    sets: [Release.SuperSlam],
    specialImage: "SUP249_V2",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Warrior Equipment - Arms",

    
    
    
    defense: 2,
    
    functionalText: `**Legendary Olympia Specialization**

This counts as a Gold.

**Temper**`,
    
    
    
    
    keywords: [Keyword.Legendary,Keyword.Specialization,Keyword.Temper],
    
    
    meta: [Meta.Expansion],
  
    
    
    
    
    
    
    
    
    
    
    
    specializations: [Hero.Olympia],
    
  
  
  },{
    artists: ["Federico Musetti"],
    cardIdentifier: "golden-heart-plate",
    classes: [Class.Warrior],
    defaultImage: "SUP248",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Olympia,Hero.Shiyana,Hero.Taylor],
    name: "Golden Heart Plate",
    printings: [{
        artists: ["Federico Musetti"],
      
      identifier: "SUP248",
      image: "SUP248",
      isExpansionSlot: true,
      
      print: "SUP248",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Federico Musetti"],
      foiling: Foiling.C,
      identifier: "SUP248",
      image: "SUP248_V2",
      isExpansionSlot: true,
      
      print: "SUP248-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP248"],
    sets: [Release.SuperSlam],
    specialImage: "SUP248_V2",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Warrior Equipment - Chest",

    
    
    
    defense: 2,
    
    functionalText: `**Legendary Olympia Specialization**

This counts as a Gold.

**Temper**`,
    
    
    
    
    keywords: [Keyword.Legendary,Keyword.Specialization,Keyword.Temper],
    
    
    meta: [Meta.Expansion],
  
    
    
    
    
    
    
    
    
    
    
    
    specializations: [Hero.Olympia],
    
  
  
  },{
    artists: ["Alexander Mokhov"],
    cardIdentifier: "good-natured-brutality-yellow",
    classes: [Class.Brute],
    defaultImage: "SUP004",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Tuffnut],
    name: "Good Natured Brutality",
    printings: [{
        artists: ["Alexander Mokhov"],
      
      identifier: "SUP004",
      image: "SUP004",
      
      
      print: "SUP004",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Alexander Mokhov"],
      foiling: Foiling.C,
      identifier: "SUP004",
      image: "SUP004_V2",
      
      
      print: "SUP004-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP004"],
    sets: [Release.SuperSlam],
    specialImage: "SUP004_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Brute Action - Attack",

    
    
    cost: 2,
    defense: 0,
    
    functionalText: `When this defends, if you have no cards in hand, it gets +6{d} and **the crowd cheers** you.`,
    
    
    
    
    keywords: [Keyword.TheCrowdCheers],
    
    
    
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["João Guilherme"],
    cardIdentifier: "goon-battery-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP104",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Goon Battery",
    printings: [{
        artists: ["João Guilherme"],
      
      identifier: "SUP104",
      image: "SUP104",
      
      
      print: "SUP104",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP104"],
    sets: [Release.SuperSlam],
    specialImage: "SUP104",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If you control 3 or more auras, this gets +3{p} and "When this hits a hero, {t} them."`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    power: 1,
    
    shorthands: ["Tap"],
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Shen Fei"],
    cardIdentifier: "goon-beatdown-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP105",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Goon Beatdown",
    printings: [{
        artists: ["Shen Fei"],
      
      identifier: "SUP105",
      image: "SUP105",
      
      
      print: "SUP105",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP105"],
    sets: [Release.SuperSlam],
    specialImage: "SUP105",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If you control 3 or more auras, this gets +3{p} and "When this hits a hero,**the crowd boos** you."`,
    
    
    
    
    keywords: [Keyword.TheCrowdBoos],
    
    
    
  
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Peyeyo"],
    cardIdentifier: "goon-tactics-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP106",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Goon Tactics",
    printings: [{
        artists: ["Peyeyo"],
      
      identifier: "SUP106",
      image: "SUP106",
      
      
      print: "SUP106",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP106"],
    sets: [Release.SuperSlam],
    specialImage: "SUP106",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If you control 3 or more auras, this gets +3{p} and "When this hits a hero, destroy the top card of their deck."`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "helm-of-hindsight",
    classes: [Class.Generic],
    defaultImage: "SUP211",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Helm of Hindsight",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "SUP211",
      image: "SUP211",
      
      
      print: "SUP211",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP211"],
    sets: [Release.SuperSlam],
    specialImage: "SUP211",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Head",

    
    
    
    defense: 0,
    
    functionalText: `**Instant** - {r}{r}{r}, destroy this: Put target attack action card from your graveyard on top of your deck.`,
    
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Reinaldo Indrajaya"],
    cardIdentifier: "helm-of-the-adored",
    classes: [Class.NotClassed],
    defaultImage: "SUP017",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Taylor,Hero.Tuffnut],
    name: "Helm of the Adored",
    printings: [{
        artists: ["Reinaldo Indrajaya"],
      
      identifier: "SUP017",
      image: "SUP017",
      
      
      print: "SUP017",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP017"],
    sets: [Release.SuperSlam],
    specialImage: "SUP017",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Revered Equipment - Head",

    
    
    
    defense: 1,
    
    functionalText: `When this defends, **the crowd cheers** you.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak,Keyword.TheCrowdCheers],
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Peyeyo"],
    cardIdentifier: "heroic-grit-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP056",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Heroic Grit",
    printings: [{
        artists: ["Peyeyo"],
      
      identifier: "SUP056",
      image: "SUP056",
      
      
      print: "SUP056",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP056"],
    sets: [Release.SuperSlam],
    specialImage: "SUP056",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Revered Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Your next attack this turn gets "This gets +1{p} for each Toughness token you control."

Create a Toughness token.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "heroic-pose-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP057",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Heroic Pose",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SUP057",
      image: "SUP057",
      
      
      print: "SUP057",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP057"],
    sets: [Release.SuperSlam],
    specialImage: "SUP057",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Revered Action",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `Your next attack this turn gets +3{p}.

**The crowd cheers** you.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.TheCrowdCheers],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "heroic-pose-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP058",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Heroic Pose",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SUP058",
      image: "SUP058",
      
      
      print: "SUP058",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP058"],
    sets: [Release.SuperSlam],
    specialImage: "SUP058",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Revered Action",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `Your next attack this turn gets +2{p}.

**The crowd cheers** you.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.TheCrowdCheers],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "heroic-pose-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP059",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Heroic Pose",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SUP059",
      image: "SUP059",
      
      
      print: "SUP059",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP059"],
    sets: [Release.SuperSlam],
    specialImage: "SUP059",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Revered Action",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `Your next attack this turn gets +1{p}.

**The crowd cheers** you.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.TheCrowdCheers],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Andrey Potemkim"],
    cardIdentifier: "high-pitched-howl-red",
    classes: [Class.Brute],
    defaultImage: "SUP155",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "High Pitched Howl",
    printings: [{
        artists: ["Andrey Potemkim"],
      
      identifier: "SUP155",
      image: "SUP155",
      
      
      print: "SUP155",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP155"],
    sets: [Release.SuperSlam],
    specialImage: "SUP155",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks, if there is a card with 6 or more {p} in your pitch zone, create a Vigor token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Andrey Potemkim"],
    cardIdentifier: "high-pitched-howl-yellow",
    classes: [Class.Brute],
    defaultImage: "SUP156",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "High Pitched Howl",
    printings: [{
        artists: ["Andrey Potemkim"],
      
      identifier: "SUP156",
      image: "SUP156",
      
      
      print: "SUP156",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP156"],
    sets: [Release.SuperSlam],
    specialImage: "SUP156",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks, if there is a card with 6 or more {p} in your pitch zone, create a Vigor token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Andrey Potemkim"],
    cardIdentifier: "high-pitched-howl-blue",
    classes: [Class.Brute],
    defaultImage: "SUP157",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "High Pitched Howl",
    printings: [{
        artists: ["Andrey Potemkim"],
      
      identifier: "SUP157",
      image: "SUP157",
      
      
      print: "SUP157",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP157"],
    sets: [Release.SuperSlam],
    specialImage: "SUP157",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks, if there is a card with 6 or more {p} in your pitch zone, create a Vigor token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Jefrey Yonathan"],
    cardIdentifier: "hit-the-gas-blue",
    classes: [Class.Mechanologist],
    defaultImage: "SUP255",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Maxx,Hero.Shiyana],
    name: "Hit the Gas",
    printings: [{
        artists: ["Jefrey Yonathan"],
      
      identifier: "SUP255",
      image: "SUP255",
      isExpansionSlot: true,
      
      print: "SUP255",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP255"],
    sets: [Release.SuperSlam],
    specialImage: "SUP255",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Mechanologist Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Maxx Specialization**

Turn any number of Hyper Drivers in your banished zone face-down and gain that many action points. If 3 or more cards are turned face-down this way, draw a card.`,
    
    
    
    
    keywords: [Keyword.Specialization],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    specializations: [Hero.Maxx],
    
  
  
  },{
    artists: ["Ilham Bahtiar"],
    cardIdentifier: "hold-firm",
    classes: [Class.NotClassed],
    defaultImage: "SUP018",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Taylor,Hero.Tuffnut],
    name: "Hold Firm",
    printings: [{
        artists: ["Ilham Bahtiar"],
      
      identifier: "SUP018",
      image: "SUP018",
      
      
      print: "SUP018",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP018"],
    sets: [Release.SuperSlam],
    specialImage: "SUP018",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Revered Equipment - Arms",

    
    
    
    defense: 1,
    
    functionalText: `**Action** - {r}{r}, destroy this: Create 3 Toughness tokens. Activate this only if you have less {h} than each other hero. **Go again**

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak,Keyword.GoAgain],
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Brian Adriel"],
    cardIdentifier: "horns-of-the-despised",
    classes: [Class.NotClassed],
    defaultImage: "SUP079",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO,Hero.Taylor],
    name: "Horns of the Despised",
    printings: [{
        artists: ["Brian Adriel"],
      
      identifier: "SUP079",
      image: "SUP079",
      
      
      print: "SUP079",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP079"],
    sets: [Release.SuperSlam],
    specialImage: "SUP079",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Reviled Equipment - Head",

    
    
    
    defense: 1,
    
    functionalText: `When this defends, **the crowd boos** you.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak,Keyword.TheCrowdBoos],
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Jackson Tjota"],
    cardIdentifier: "humble-entrance-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP060",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Humble Entrance",
    printings: [{
        artists: ["Jackson Tjota"],
      
      identifier: "SUP060",
      image: "SUP060",
      
      
      print: "SUP060",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP060"],
    sets: [Release.SuperSlam],
    specialImage: "SUP060",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Revered Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Create 3 Toughness tokens.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "hungry-for-more-red",
    classes: [Class.Guardian],
    defaultImage: "SUP175",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Hungry for More",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SUP175",
      image: "SUP175",
      
      
      print: "SUP175",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP175"],
    sets: [Release.SuperSlam],
    specialImage: "SUP175",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Guardian Instant - Aura",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `**Suspense**

When this leaves the arena, gain 3{h}.`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ausonia"],
    cardIdentifier: "hunter-or-hunted-blue",
    classes: [Class.Assassin],
    defaultImage: "SUP245",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
    name: "Hunter or Hunted?",
    printings: [{
        artists: ["Ausonia"],
      
      identifier: "SUP245",
      image: "SUP245",
      isExpansionSlot: true,
      
      print: "SUP245",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP245"],
    sets: [Release.SuperSlam],
    specialImage: "SUP245",
    subtypes: [],
    types: [Type.DefenseReaction],
    typeText: "Assassin Defense Reaction",

    
    
    cost: 3,
    defense: 4,
    
    functionalText: `When this defends, name a card. The attacking hero reveals the top card of their deck. If it's the named card, banish it, search their hand, deck, and arsenal for up to 3 cards with that name and banish them, then they shuffle.

**Contract** - While this is defending, you are contracted to banish opponents' cards with the chosen name. Whenever you complete this contract, create a Silver token.`,
    
    
    
    
    keywords: [Keyword.Contract],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Narendra B Adi"],
    cardIdentifier: "in-the-palm-of-your-hand-red",
    classes: [Class.Guardian],
    defaultImage: "SUP171",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "In the Palm of Your Hand",
    printings: [{
        artists: ["Narendra B Adi"],
      
      identifier: "SUP171",
      image: "SUP171",
      
      
      print: "SUP171",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Narendra B Adi"],
      foiling: Foiling.R,
      identifier: "SUP171",
      image: "SUP171",
      
      
      print: "SUP171-Rainbow",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP171"],
    sets: [Release.SuperSlam],
    specialImage: "SUP171",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Guardian Instant - Aura",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `**Suspense**

When this enters or leaves the arena, draw a card.`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikolay Moskvin"],
    cardIdentifier: "instill-fear-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP107",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Instill Fear",
    printings: [{
        artists: ["Nikolay Moskvin"],
      
      identifier: "SUP107",
      image: "SUP107",
      
      
      print: "SUP107",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP107"],
    sets: [Release.SuperSlam],
    specialImage: "SUP107",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks a hero, **intimidate** them.`,
    
    
    
    
    keywords: [Keyword.Intimidate],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Nikolay Moskvin"],
    cardIdentifier: "instill-fear-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP108",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Instill Fear",
    printings: [{
        artists: ["Nikolay Moskvin"],
      
      identifier: "SUP108",
      image: "SUP108",
      
      
      print: "SUP108",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP108"],
    sets: [Release.SuperSlam],
    specialImage: "SUP108",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks a hero, **intimidate** them.`,
    
    
    
    
    keywords: [Keyword.Intimidate],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Nikolay Moskvin"],
    cardIdentifier: "instill-fear-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP109",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Instill Fear",
    printings: [{
        artists: ["Nikolay Moskvin"],
      
      identifier: "SUP109",
      image: "SUP109",
      
      
      print: "SUP109",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP109"],
    sets: [Release.SuperSlam],
    specialImage: "SUP109",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks a hero, **intimidate** them.`,
    
    
    
    
    keywords: [Keyword.Intimidate],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Athiwut B."],
    cardIdentifier: "ironfist-revelation",
    classes: [Class.Guardian],
    defaultImage: "SUP168",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Taylor,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Ironfist Revelation",
    printings: [{
        artists: ["Athiwut B."],
      foiling: Foiling.R,
      identifier: "SUP168",
      image: "SUP168",
      
      
      print: "SUP168-Rainbow",
      rarity: Rarity.Legendary,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Athiwut B."],
      foiling: Foiling.C,
      identifier: "SUP168",
      image: "SUP168",
      
      
      print: "SUP168-Cold",
      rarity: Rarity.Legendary,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Legendary],
    rarity: Rarity.Legendary,
    setIdentifiers: ["SUP168"],
    sets: [Release.SuperSlam],
    specialImage: "SUP168",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Guardian Equipment - Arms",

    
    
    
    defense: 2,
    
    functionalText: `When this defends, you may turn a face-down card with crush in your arsenal face-up. If you do, put a +1{p} counter on it.

**Temper**`,
    
    
    
    
    keywords: [Keyword.Temper],
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Alief Rusdiatama"],
    cardIdentifier: "jaws-of-victory-red",
    classes: [Class.Brute],
    defaultImage: "SUP005",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Tuffnut],
    name: "Jaws of Victory",
    printings: [{
        artists: ["Alief Rusdiatama"],
      
      identifier: "SUP005",
      image: "SUP005",
      
      
      print: "SUP005",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP005"],
    sets: [Release.SuperSlam],
    specialImage: "SUP005",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Brute Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks a hero, if you have less {h} than them, **the crowd cheers** you.

If you've been cheered this turn, this gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.TheCrowdCheers],
    
    
    
  
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Jessada Sutthi"],
    cardIdentifier: "kayo-strong-arm",
    classes: [Class.Brute],
    defaultImage: "SUP064",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.RKO],
    name: "Kayo, Strong-arm",
    printings: [{
        artists: ["Jessada Sutthi"],
      
      identifier: "SUP064",
      image: "SUP064",
      
      
      print: "SUP064",
      rarity: Rarity.Basic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Jessada Sutthi"],
      foiling: Foiling.C,
      identifier: "SUP064",
      image: "SUP064_V2",
      
      
      print: "SUP064-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Jessada Sutthi"],
      foiling: Foiling.C,
      identifier: "SUP064",
      image: "SUP064_V2_BACK",
      
      
      print: "SUP064-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["SUP064"],
    sets: [Release.SuperSlam],
    specialImage: "SUP064_V2",
    subtypes: [Subtype.Young],
    types: [Type.Hero],
    typeText: "Reviled Brute Hero - Young",

    
    
    
    
    
    functionalText: `You start the game with 1 weapon zone.

**Instant** - {r}{r}{r}{r}, {t}: Target attack action card you control has 6 base {p}.

Whenever the crowd boos you, create a Vigor token.`,
    
    hero: Hero.RKO,
    intellect: 4,
    
    
    
    life: 20,
    
  
    
    
    
    
    shorthands: ["Tap"],
    shortName: "Kayo, RKO",
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  young: true
  },{
    artists: ["Jessada Sutthi"],
    cardIdentifier: "kayo-underhanded-cheat",
    classes: [Class.Brute],
    defaultImage: "SUP063",
    legalFormats: [Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open],
    legalHeroes: [Hero.RKO],
    name: "Kayo, Underhanded Cheat",
    printings: [{
        artists: ["Jessada Sutthi"],
      
      identifier: "SUP063",
      image: "SUP063",
      
      
      print: "SUP063",
      rarity: Rarity.Basic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Jessada Sutthi"],
      foiling: Foiling.C,
      identifier: "SUP063",
      image: "SUP063_V2",
      
      
      print: "SUP063-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Jessada Sutthi"],
      foiling: Foiling.C,
      identifier: "SUP063",
      image: "SUP063_V2_BACK",
      
      
      print: "SUP063-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Jessada Sutthi"],
      foiling: Foiling.R,
      identifier: "SUP063",
      image: "SUP063",
      
      
      print: "SUP063-Rainbow",
      rarity: Rarity.Promo,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Basic,Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Basic,
    setIdentifiers: ["SUP063"],
    sets: [Release.SuperSlam],
    specialImage: "SUP063_V2",
    subtypes: [],
    types: [Type.Hero],
    typeText: "Reviled Brute Hero",

    
    
    
    
    
    functionalText: `You start the game with 1 weapon zone.

**Instant** - {r}{r}{r}{r}, {t}: Target attack action card you control has 6 base {p}.

Whenever the crowd boos you, create a Vigor token.`,
    
    hero: Hero.RKO,
    intellect: 4,
    
    
    
    life: 40,
    
  
    
    
    
    
    shorthands: ["Tap"],
    shortName: "Kayo, RKO",
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Saad Irfan"],
    cardIdentifier: "kick-the-hornets-nest-yellow",
    classes: [Class.Generic],
    defaultImage: "SUP217",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Kick the Hornet's Nest",
    printings: [{
        artists: ["Saad Irfan"],
      
      identifier: "SUP217",
      image: "SUP217",
      
      
      print: "SUP217",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP217"],
    sets: [Release.SuperSlam],
    specialImage: "SUP217",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When an opponent's effect puts this into your graveyard from anywhere, create a Confidence, Might, Toughness, and Vigor token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Yunior Susanto"],
    cardIdentifier: "laughing-knee-slappers",
    classes: [Class.Brute],
    defaultImage: "SUP065",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.RKO,Hero.Taylor],
    name: "Laughing Knee-Slappers",
    printings: [{
        artists: ["Yunior Susanto"],
      
      identifier: "SUP065",
      image: "SUP065",
      
      
      print: "SUP065",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP065"],
    sets: [Release.SuperSlam],
    specialImage: "SUP065",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Reviled Brute Equipment - Legs",

    
    
    
    defense: 1,
    
    functionalText: `If you control a Might and a Vigor token, this gets +2{d}.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  }];
  const cards3: Card[] =  [{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "leave-them-hanging-red",
    classes: [Class.Guardian],
    defaultImage: "SUP074",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath],
    name: "Leave Them Hanging",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "SUP074",
      image: "SUP074",
      
      
      print: "SUP074",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.C,
      identifier: "SUP074",
      image: "SUP074_V2",
      
      
      print: "SUP074-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP074"],
    sets: [Release.SuperSlam],
    specialImage: "SUP074_V2",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Reviled Guardian Instant - Aura",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `**Suspense**

When this enters or leaves the arena, **intimidate** target hero.

When this leaves the arena, your next attack this turn gets +4{p}.`,
    
    
    
    
    keywords: [Keyword.Intimidate,Keyword.Suspense],
    
    
    
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Grégory Nunkovics"],
    cardIdentifier: "liars-charm-yellow",
    classes: [Class.Guardian],
    defaultImage: "SUP076",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath],
    name: "Liar's Charm",
    printings: [{
        artists: ["Grégory Nunkovics"],
      
      identifier: "SUP076",
      image: "SUP076",
      
      
      print: "SUP076",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Marvel,Rarity.Promo,Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["FAB373","LGS425","SUP076"],
    sets: [Release.Promos,Release.SuperSlam],
    specialImage: "SUP076",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Reviled Guardian Instant",

    
    
    cost: 0,
    
    
    functionalText: `Choose any number;
- **Steal** a Toughness or Vigor token.
- **The crowd boos** you.
- Target hero loses and can't gain abilities this action phase unless they discard a card.`,
    
    
    
    
    keywords: [Keyword.Steal,Keyword.TheCrowdBoos],
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "light-up-the-leaves-red",
    classes: [Class.Wizard],
    defaultImage: "SUP264",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Verdance],
    name: "Light Up the Leaves",
    printings: [{
        artists: ["Rio Sabda"],
      
      identifier: "SUP264",
      image: "SUP264",
      isExpansionSlot: true,
      
      print: "SUP264",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP264"],
    sets: [Release.SuperSlam],
    specialImage: "SUP264",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Earth Wizard Action",

    arcane: 6,
    
    cost: 3,
    defense: 3,
    
    functionalText: `Deal 6 arcane damage to any target.

**Instant** - Discard this and an Earth card: Prevent the next 6 arcane damage target source would deal this turn.`,
    
    
    
    
    
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Earth],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "look-tuff-red",
    classes: [Class.Generic],
    defaultImage: "SUP223",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Look Tuff",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SUP223",
      image: "SUP223",
      
      
      print: "SUP223",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP223"],
    sets: [Release.SuperSlam],
    specialImage: "SUP223",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this attacks, it gets -1{p} unless you pay {r}.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 8,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "low-blow-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP110",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Low Blow",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "SUP110",
      image: "SUP110",
      
      
      print: "SUP110",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP110"],
    sets: [Release.SuperSlam],
    specialImage: "SUP110",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `If you've been booed this turn, this gets +3{p}.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "lyath-goldmane",
    classes: [Class.Guardian],
    defaultImage: "SUP072",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath],
    name: "Lyath Goldmane",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "SUP072",
      image: "SUP072",
      
      
      print: "SUP072",
      rarity: Rarity.Basic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.C,
      identifier: "SUP072",
      image: "SUP072_V2",
      
      
      print: "SUP072-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.C,
      identifier: "SUP072",
      image: "SUP072_V2_BACK",
      
      
      print: "SUP072-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["SUP072"],
    sets: [Release.SuperSlam],
    specialImage: "SUP072_V2",
    subtypes: [Subtype.Young],
    types: [Type.Hero],
    typeText: "Reviled Guardian Hero - Young",

    
    
    
    
    
    functionalText: `The base {p} and {d} of cards you control are halved, rounded up.

**Instant** - {r}{r}, {t}: **The crowd boos** you. Defending action cards you control get +1{d} this turn.

Whenever the crowd boos you, create a Might token.`,
    
    hero: Hero.Lyath,
    intellect: 5,
    
    keywords: [Keyword.TheCrowdBoos],
    
    life: 20,
    
  
    
    
    
    
    shorthands: ["Tap"],
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  young: true
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "lyath-goldmane-vile-savant",
    classes: [Class.Guardian],
    defaultImage: "SUP071",
    legalFormats: [Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open],
    legalHeroes: [Hero.Lyath],
    name: "Lyath Goldmane, Vile Savant",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "SUP071",
      image: "SUP071",
      
      
      print: "SUP071",
      rarity: Rarity.Basic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.C,
      identifier: "SUP071",
      image: "SUP071_V2",
      
      
      print: "SUP071-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.C,
      identifier: "SUP071",
      image: "SUP071_V2_BACK",
      
      
      print: "SUP071-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.R,
      identifier: "SUP071",
      image: "SUP071",
      
      
      print: "SUP071-Rainbow",
      rarity: Rarity.Promo,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Basic,Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Basic,
    setIdentifiers: ["SUP071"],
    sets: [Release.SuperSlam],
    specialImage: "SUP071_V2",
    subtypes: [],
    types: [Type.Hero],
    typeText: "Reviled Guardian Hero",

    
    
    
    
    
    functionalText: `The base {p} and {d} of cards you control are halved, rounded up.

**Instant** - {r}{r}, {t}: **The crowd boos** you. Defending action cards you control get +1{d} this turn.

Whenever the crowd boos you, create a Might token.`,
    
    hero: Hero.Lyath,
    intellect: 5,
    
    keywords: [Keyword.TheCrowdBoos],
    
    life: 40,
    
  
    
    
    
    
    shorthands: ["Tap"],
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Olga Tereshenko"],
    cardIdentifier: "mage-hunter-arrow-red",
    classes: [Class.Ranger],
    defaultImage: "SUP257",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Mage Hunter Arrow",
    printings: [{
        artists: ["Olga Tereshenko"],
      
      identifier: "SUP257",
      image: "SUP257",
      isExpansionSlot: true,
      
      print: "SUP257",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP257"],
    sets: [Release.SuperSlam],
    specialImage: "SUP257",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Ranger Action - Arrow Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `**Instant** - Destroy this: The next time you would be dealt arcane damage this turn, prevent 3 of that damage. Activate this only while this is face-up in your arsenal.

When this hits a Runeblade or Wizard hero, you may destroy an aura they control.`,
    
    
    
    
    
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Henrique Lindner"],
    cardIdentifier: "might",
    classes: [Class.Generic],
    defaultImage: "SUP240",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Might",
    printings: [{
        artists: ["Henrique Lindner"],
      
      identifier: "SUP240",
      image: "SUP240",
      
      
      print: "SUP240",
      rarity: Rarity.Basic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Basic,Rarity.Promo,Rarity.Token],
    rarity: Rarity.Basic,
    setIdentifiers: ["AKO028","BET028","FAB205","FAB280","HVY241","KYO028","LGS230","RHI028","SUP240","TCC105","TER028","VIC028"],
    sets: [Release.FirstStrikeTerra,Release.ArmoryDeckKayo,Release.BetsyBlitzDeck,Release.HeavyHitters,Release.KayoBlitzDeck,Release.Promos,Release.RhinarBlitzDeck,Release.RoundTheTable,Release.SuperSlam,Release.VictorBlitzDeck],
    specialImage: "SUP240",
    subtypes: [Subtype.Aura],
    types: [Type.Token],
    typeText: "Generic Token - Aura",

    
    
    
    
    
    functionalText: `At the start of your turn, destroy this, then your next attack this turn gets +1{p}.`,
    
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Elya Nur Sri Ayu"],
    cardIdentifier: "mightybone-knuckles",
    classes: [Class.NotClassed],
    defaultImage: "SUP080",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO,Hero.Taylor],
    name: "Mightybone Knuckles",
    printings: [{
        artists: ["Elya Nur Sri Ayu"],
      
      identifier: "SUP080",
      image: "SUP080",
      
      
      print: "SUP080",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP080"],
    sets: [Release.SuperSlam],
    specialImage: "SUP080",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Reviled Equipment - Arms",

    
    
    
    defense: 1,
    
    functionalText: `**Action** - {r}{r}{r}, destroy this: Create 3 Might tokens. Activate this only if you have more {h} than each other hero. **Go again**

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak,Keyword.GoAgain],
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Nailsen Ivanderlie"],
    cardIdentifier: "mocking-blow-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP090",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Mocking Blow",
    printings: [{
        artists: ["Nailsen Ivanderlie"],
      
      identifier: "SUP090",
      image: "SUP090",
      
      
      print: "SUP090",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP090"],
    sets: [Release.SuperSlam],
    specialImage: "SUP090",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks a hero, if you have more {h} than them, **the crowd boos** you.

If you've been booed this turn, this gets +4{p}.`,
    
    
    
    
    keywords: [Keyword.TheCrowdBoos],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 1,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Nailsen Ivanderlie"],
    cardIdentifier: "mocking-blow-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP091",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Mocking Blow",
    printings: [{
        artists: ["Nailsen Ivanderlie"],
      
      identifier: "SUP091",
      image: "SUP091",
      
      
      print: "SUP091",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP091"],
    sets: [Release.SuperSlam],
    specialImage: "SUP091",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks a hero, if you have more {h} than them, **the crowd boos** you.

If you've been booed this turn, this gets +3{p}.`,
    
    
    
    
    keywords: [Keyword.TheCrowdBoos],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 1,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Nailsen Ivanderlie"],
    cardIdentifier: "mocking-blow-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP092",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Mocking Blow",
    printings: [{
        artists: ["Nailsen Ivanderlie"],
      
      identifier: "SUP092",
      image: "SUP092",
      
      
      print: "SUP092",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP092"],
    sets: [Release.SuperSlam],
    specialImage: "SUP092",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks a hero, if you have more {h} than them, **the crowd boos** you.

If you've been booed this turn, this gets +2{p}.`,
    
    
    
    
    keywords: [Keyword.TheCrowdBoos],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Federico Musetti"],
    cardIdentifier: "never-give-up-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP026",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Never Give Up",
    printings: [{
        artists: ["Federico Musetti"],
      
      identifier: "SUP026",
      image: "SUP026",
      
      
      print: "SUP026",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["APS015","SUP026"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP026",
    subtypes: [],
    types: [Type.Block],
    typeText: "Revered Block",

    
    
    
    defense: 3,
    
    functionalText: `**Instant** - {r}{r}, put this on the bottom of your deck: Target defending action card gets +3{d} this chain link. Activate this only while it's in your graveyard, you have less {h} than each hero, and you've been cheered this turn.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Mihail Spil-Haufter","SanSan"],
    cardIdentifier: "new-horizon",
    classes: [Class.Ranger],
    defaultImage: "SUP256",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide,Hero.Taylor],
    name: "New Horizon",
    printings: [{
        artists: ["SanSan"],
      
      identifier: "SUP256",
      image: "SUP256",
      isExpansionSlot: true,
      
      print: "SUP256-Alternate Art",
      rarity: Rarity.Legendary,
      set: Release.SuperSlam,
      
      treatment: Treatment.AA,treatments: [Treatment.AA],
    },{
        artists: ["SanSan"],
      foiling: Foiling.R,
      identifier: "SUP256",
      image: "SUP256_V2",
      isExpansionSlot: true,
      
      print: "SUP256-Rainbow-Alternate Art",
      rarity: Rarity.Legendary,
      set: Release.SuperSlam,
      
      treatment: Treatment.AA,treatments: [Treatment.AA,Treatment.EA],
    },],
    rarities: [Rarity.Legendary,Rarity.Promo],
    rarity: Rarity.Legendary,
    setIdentifiers: ["ELE213","FAB050","SUP256"],
    sets: [Release.Promos,Release.SuperSlam,Release.TalesOfAria],
    specialImage: "SUP256_V2",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Ranger Equipment - Head",

    
    
    
    defense: 2,
    
    functionalText: `If you have a face-up card in your arsenal, you have an additional arsenal zone.

When this is destroyed, destroy all cards in your arsenal.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    meta: [Meta.Expansion],
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kevin Sidharta"],
    cardIdentifier: "no-hero-stands-alone-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP020",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Brutus,Hero.Pleiades,Hero.Tuffnut],
    name: "No Hero Stands Alone",
    printings: [{
        artists: ["Kevin Sidharta"],
      
      identifier: "SUP020",
      image: "SUP020",
      
      
      print: "SUP020",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP020"],
    sets: [Release.SuperSlam],
    specialImage: "SUP020",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 0,
    
    functionalText: `While this is in any zone, if you've controlled a Toughness token this turn, this gets +3{d} and **ambush**.

When this defends, **clash** with the attacking hero. The winner may choose an attacking or defending card to get -3{p} -3{d} this chain link.`,
    
    
    
    
    keywords: [Keyword.Ambush,Keyword.Clash],
    
    
    
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "no-tall-tales-yellow",
    classes: [Class.Guardian],
    defaultImage: "SUP170",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "No Tall Tales",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SUP170",
      image: "SUP170",
      
      
      print: "SUP170",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP170"],
    sets: [Release.SuperSlam],
    specialImage: "SUP170",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If this has {p} greater than its base, it gets +1{p}.

**Tower** - If this has 13 or more {p}, it gets "When this hits a hero, cards they own lose and can't get go again during their next action phase."`,
    
    
    
    
    keywords: [Keyword.Tower],
    
    
    
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Audy Ravindra"],
    cardIdentifier: "not-so-mighty-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP062",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Not So Mighty",
    printings: [{
        artists: ["Audy Ravindra"],
      
      identifier: "SUP062",
      image: "SUP062",
      
      
      print: "SUP062",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP062"],
    sets: [Release.SuperSlam],
    specialImage: "SUP062",
    subtypes: [],
    types: [Type.Block],
    typeText: "Revered Block",

    
    
    
    defense: 2,
    
    functionalText: `When this defends a Reviled hero's attack, destroy a Might token they control. If you do, create a Toughness token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Marcus Reyno"],
    cardIdentifier: "not-so-tuff-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP124",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Not So Tuff",
    printings: [{
        artists: ["Marcus Reyno"],
      
      identifier: "SUP124",
      image: "SUP124",
      
      
      print: "SUP124",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP124"],
    sets: [Release.SuperSlam],
    specialImage: "SUP124",
    subtypes: [],
    types: [Type.Block],
    typeText: "Reviled Block",

    
    
    
    defense: 2,
    
    functionalText: `When this defends a Revered hero's attack, destroy a Toughness token they control. If you do, create a Might token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Grégory Nunkovics"],
    cardIdentifier: "numbskull-charm-yellow",
    classes: [Class.Brute],
    defaultImage: "SUP007",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Tuffnut],
    name: "Numbskull Charm",
    printings: [{
        artists: ["Grégory Nunkovics"],
      
      identifier: "SUP007",
      image: "SUP007",
      
      
      print: "SUP007",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Marvel,Rarity.Promo,Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["FAB370","LGS422","SUP007"],
    sets: [Release.Promos,Release.SuperSlam],
    specialImage: "SUP007",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Revered Brute Instant",

    
    
    cost: 0,
    
    
    functionalText: `Choose any number;
- Destroy a Confidence or Might token.
- **The crowd cheers** you.
- Pitch the top card of your deck. If it has 6 or more {p}, create a Vigor token.`,
    
    
    
    
    keywords: [Keyword.TheCrowdCheers],
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "offensive-behavior-blue",
    classes: [Class.Brute],
    defaultImage: "SUP070",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.RKO],
    name: "Offensive Behavior",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "SUP070",
      image: "SUP070",
      
      
      print: "SUP070",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Tomasz Jedruszek"],
      foiling: Foiling.R,
      identifier: "SUP070",
      image: "SUP070",
      
      
      print: "SUP070-Rainbow",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP070"],
    sets: [Release.SuperSlam],
    specialImage: "SUP070",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Brute Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If you control a Might or Vigor token, this gets +1{p}.

When this hits a hero, create a Might and a Vigor token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Eryk Szczygieł"],
    cardIdentifier: "old-favorite-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP023",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Old Favorite",
    printings: [{
        artists: ["Eryk Szczygieł"],
      
      identifier: "SUP023",
      image: "SUP023",
      
      
      print: "SUP023",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP023"],
    sets: [Release.SuperSlam],
    specialImage: "SUP023",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this attacks, if you've been cheered this turn, create a Toughness token.

When this defends, if it has 6 or more {d}, put it on the bottom of its owner's deck when the combat chain closes.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Galih M"],
    cardIdentifier: "old-leather-and-vim-red",
    classes: [Class.Brute],
    defaultImage: "SUP008",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Tuffnut],
    name: "Old Leather and Vim",
    printings: [{
        artists: ["Galih M"],
      
      identifier: "SUP008",
      image: "SUP008",
      
      
      print: "SUP008",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP008"],
    sets: [Release.SuperSlam],
    specialImage: "SUP008",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Brute Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `If you control a Toughness or Vigor token, this gets +1{p}.

When this hits a hero, create a Toughness and a Vigor token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Septimius Ferdian"],
    cardIdentifier: "outside-interference-blue",
    classes: [Class.Brute],
    defaultImage: "SUP066",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.RKO],
    name: "Outside Interference",
    printings: [{
        artists: ["Septimius Ferdian"],
      
      identifier: "SUP066",
      image: "SUP066",
      
      
      print: "SUP066",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Septimius Ferdian"],
      foiling: Foiling.C,
      identifier: "SUP066",
      image: "SUP066_V2",
      
      
      print: "SUP066-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP066"],
    sets: [Release.SuperSlam],
    specialImage: "SUP066_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Brute Action - Attack",

    
    
    cost: 3,
    defense: 0,
    
    functionalText: `**Instant** - Discard this: You may reveal a Reviled attack action card from your inventory and put it into your hand.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Henrique Lindner"],
    cardIdentifier: "overbearing-presence",
    classes: [Class.Brute],
    defaultImage: "SUP126",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Taylor,Hero.Tuffnut],
    name: "Overbearing Presence",
    printings: [{
        artists: ["Henrique Lindner"],
      
      identifier: "SUP126",
      image: "SUP126",
      
      
      print: "SUP126",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP126"],
    sets: [Release.SuperSlam],
    specialImage: "SUP126",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Brute Equipment - Chest",

    
    
    
    defense: 1,
    
    functionalText: `**Action** - {r}{r}{r}, destroy this: Create 3 Vigor tokens. Activate this only if there is a card with 6 or more {p} in your pitch zone. **Go again**

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak,Keyword.GoAgain],
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "overcrowded-blue",
    classes: [Class.Generic],
    defaultImage: "SUP216",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Overcrowded",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "SUP216",
      image: "SUP216",
      
      
      print: "SUP216",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Tomasz Jedruszek"],
      foiling: Foiling.R,
      identifier: "SUP216",
      image: "SUP216",
      
      
      print: "SUP216-Rainbow",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Tomasz Jedruszek"],
      foiling: Foiling.C,
      identifier: "SUP216",
      image: "SUP216",
      
      
      print: "SUP216-Cold-Extended Art",
      rarity: Rarity.Promo,
      set: Release.SuperSlam,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic,Rarity.Promo],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP216"],
    sets: [Release.SuperSlam],
    specialImage: "SUP216",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `**Ambush**

When this attacks or defends, it gets +1{p} +1{d} for each different name among aura tokens in the arena.`,
    
    
    
    
    keywords: [Keyword.Ambush],
    
    
    
  
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["János Brumár"],
    cardIdentifier: "overturn-the-results-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP093",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Overturn the Results",
    printings: [{
        artists: ["János Brumár"],
      
      identifier: "SUP093",
      image: "SUP093",
      
      
      print: "SUP093",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP093"],
    sets: [Release.SuperSlam],
    specialImage: "SUP093",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `If you would fail to win a clash revealing this, instead you win the clash and **the crowd boos** you.`,
    
    
    
    
    keywords: [Keyword.TheCrowdBoos],
    
    
    
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Firaz M. Rasyid"],
    cardIdentifier: "painful-passage-red",
    classes: [Class.Runeblade],
    defaultImage: "SUP269",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Chane,Hero.Vynnset],
    name: "Painful Passage",
    printings: [{
        artists: ["Firaz M. Rasyid"],
      
      identifier: "SUP269",
      image: "SUP269",
      isExpansionSlot: true,
      
      print: "SUP269",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP269"],
    sets: [Release.SuperSlam],
    specialImage: "SUP269",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Shadow Runeblade Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `You may banish an attack action card from your hand. If you do, it gets +3{p} or **go again** until end of turn.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Flora Silve"],
    cardIdentifier: "parched-terrain-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP260",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Cindra,Hero.Dromai,Hero.Emperor,Hero.Fai,Hero.Fang,Hero.Taipanis],
    name: "Parched Terrain",
    printings: [{
        artists: ["Flora Silve"],
      
      identifier: "SUP260",
      image: "SUP260",
      isExpansionSlot: true,
      
      print: "SUP260",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP260"],
    sets: [Release.SuperSlam],
    specialImage: "SUP260",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Draconic Instant - Aura",

    
    
    cost: 1,
    
    
    functionalText: `Heroes can't gain {h}.

At the beginning of your end phase, put a sand counter on this, then destroy it unless you banish a red card from your graveyard for each sand counter on it.`,
    
    
    
    
    
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Satrya Darmawan"],
    cardIdentifier: "plate-of-tough-love",
    classes: [Class.Guardian],
    defaultImage: "SUP011",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Taylor],
    name: "Plate of Tough Love",
    printings: [{
        artists: ["Satrya Darmawan"],
      
      identifier: "SUP011",
      image: "SUP011",
      
      
      print: "SUP011",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP011"],
    sets: [Release.SuperSlam],
    specialImage: "SUP011",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Revered Guardian Equipment - Chest",

    
    
    
    defense: 1,
    
    functionalText: `If you control a Confidence and a Toughness token, this gets +2{d}.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Livia Prima"],
    cardIdentifier: "pleiades",
    classes: [Class.Guardian],
    defaultImage: "SUP010",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades],
    name: "Pleiades",
    printings: [{
        artists: ["Livia Prima"],
      
      identifier: "SUP010",
      image: "SUP010",
      
      
      print: "SUP010",
      rarity: Rarity.Basic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Livia Prima"],
      foiling: Foiling.C,
      identifier: "SUP010",
      image: "SUP010_V2",
      
      
      print: "SUP010-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Livia Prima"],
      foiling: Foiling.C,
      identifier: "SUP010",
      image: "SUP010_V2_BACK",
      
      
      print: "SUP010-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel,Rarity.Rare],
    rarity: Rarity.Basic,
    setIdentifiers: ["APS002","SUP010"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP010_V2",
    subtypes: [Subtype.Young],
    types: [Type.Hero],
    typeText: "Revered Guardian Hero - Young",

    
    
    
    
    
    functionalText: `**Instant** - {t}, remove a suspense counter from an aura you control: You may put a suspense counter on an aura of suspense you control.

Whenever the crowd cheers you, create a Confidence token.`,
    
    hero: Hero.Pleiades,
    intellect: 4,
    
    
    
    life: 20,
    
  
    
    
    
    
    shorthands: ["Tap"],
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  young: true
  },{
    artists: ["Livia Prima"],
    cardIdentifier: "pleiades-superstar",
    classes: [Class.Guardian],
    defaultImage: "SUP009",
    legalFormats: [Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open],
    legalHeroes: [Hero.Pleiades],
    name: "Pleiades, Superstar",
    printings: [{
        artists: ["Livia Prima"],
      
      identifier: "SUP009",
      image: "SUP009",
      
      
      print: "SUP009",
      rarity: Rarity.Basic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Livia Prima"],
      foiling: Foiling.C,
      identifier: "SUP009",
      image: "SUP009_V2",
      
      
      print: "SUP009-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Livia Prima"],
      foiling: Foiling.C,
      identifier: "SUP009",
      image: "SUP009_V2_BACK",
      
      
      print: "SUP009-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["MJ Fetesio"],
      foiling: Foiling.C,
      identifier: "SUP009",
      image: "SUP009_V3",
      
      
      print: "SUP009-Cold-Full Art-V3",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.AA,Treatment.FA],
    },{
        artists: ["MJ Fetesio"],
      foiling: Foiling.C,
      identifier: "SUP009",
      image: "SUP009_V3_BACK",
      
      
      print: "SUP009-Cold-Full Art-Back-V3",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.AA,Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Majestic,Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Basic,
    setIdentifiers: ["APS001","HER147","SUP009"],
    sets: [Release.ArmoryDeckPleiades,Release.Promos,Release.SuperSlam],
    specialImage: "SUP009_V3",
    subtypes: [],
    types: [Type.Hero],
    typeText: "Revered Guardian Hero",

    
    
    
    
    
    functionalText: `**Instant** - {t}, remove a suspense counter from an aura you control: You may put a suspense counter on an aura of suspense you control.

Whenever the crowd cheers you, create a Confidence token.`,
    
    hero: Hero.Pleiades,
    intellect: 4,
    
    
    
    life: 40,
    
  
    
    
    
    
    shorthands: ["Tap"],
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "plow-under-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP262",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Briar,Hero.Florian,Hero.Jarl,Hero.Oldhim,Hero.Starvo,Hero.Terra,Hero.Verdance],
    name: "Plow Under",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SUP262",
      image: "SUP262",
      isExpansionSlot: true,
      
      print: "SUP262",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["ROS032","SUP262"],
    sets: [Release.Rosetta,Release.SuperSlam],
    specialImage: "SUP262",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Earth Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `If there are 4 or more Earth cards in your banished zone, this gets +4{p}.

**Decompose** - When this attacks, you may banish 2 Earth cards and an action card from your graveyard. If you do, each hero puts a card from their arsenal on the bottom of their deck.`,
    
    
    
    
    keywords: [Keyword.Decompose],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Earth],
  
  
  },{
    artists: ["Shen Fei"],
    cardIdentifier: "power-play-red",
    classes: [Class.Guardian],
    defaultImage: "SUP186",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Power Play",
    printings: [{
        artists: ["Shen Fei"],
      
      identifier: "SUP186",
      image: "SUP186",
      
      
      print: "SUP186",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP186"],
    sets: [Release.SuperSlam],
    specialImage: "SUP186",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `If this was played from arsenal, it gets +5{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Shen Fei"],
    cardIdentifier: "power-play-yellow",
    classes: [Class.Guardian],
    defaultImage: "SUP187",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Power Play",
    printings: [{
        artists: ["Shen Fei"],
      
      identifier: "SUP187",
      image: "SUP187",
      
      
      print: "SUP187",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP187"],
    sets: [Release.SuperSlam],
    specialImage: "SUP187",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `If this was played from arsenal, it gets +5{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Shen Fei"],
    cardIdentifier: "power-play-blue",
    classes: [Class.Guardian],
    defaultImage: "SUP188",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Power Play",
    printings: [{
        artists: ["Shen Fei"],
      
      identifier: "SUP188",
      image: "SUP188",
      
      
      print: "SUP188",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP188"],
    sets: [Release.SuperSlam],
    specialImage: "SUP188",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `If this was played from arsenal, it gets +5{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Federico Musetti"],
    cardIdentifier: "prime-the-crowd-red",
    classes: [Class.Generic],
    defaultImage: "SUP236",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Prime the Crowd",
    printings: [{
        artists: ["Federico Musetti"],
      
      identifier: "SUP236",
      image: "SUP236",
      
      
      print: "SUP236",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP236"],
    sets: [Release.SuperSlam],
    specialImage: "SUP236",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `The next attack action card you play this turn gets +4{p}.

**The crowd cheers** each Revered hero.

**The crowd boos** each Reviled hero.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.TheCrowdBoos,Keyword.TheCrowdCheers],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Federico Musetti"],
    cardIdentifier: "prime-the-crowd-yellow",
    classes: [Class.Generic],
    defaultImage: "SUP237",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Prime the Crowd",
    printings: [{
        artists: ["Federico Musetti"],
      
      identifier: "SUP237",
      image: "SUP237",
      
      
      print: "SUP237",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP237"],
    sets: [Release.SuperSlam],
    specialImage: "SUP237",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `The next attack action card you play this turn gets +3{p}.

**The crowd cheers** each Revered hero.

**The crowd boos** each Reviled hero.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.TheCrowdBoos,Keyword.TheCrowdCheers],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Federico Musetti"],
    cardIdentifier: "prime-the-crowd-blue",
    classes: [Class.Generic],
    defaultImage: "SUP238",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Prime the Crowd",
    printings: [{
        artists: ["Federico Musetti"],
      
      identifier: "SUP238",
      image: "SUP238",
      
      
      print: "SUP238",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP238"],
    sets: [Release.SuperSlam],
    specialImage: "SUP238",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `The next attack action card you play this turn gets +2{p}.

**The crowd cheers** each Revered hero.

**The crowd boos** each Reviled hero.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.TheCrowdBoos,Keyword.TheCrowdCheers],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ismatulloh"],
    cardIdentifier: "punch-above-your-weight-red",
    classes: [Class.Generic],
    defaultImage: "SUP224",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Punch Above Your Weight",
    printings: [{
        artists: ["Ismatulloh"],
      
      identifier: "SUP224",
      image: "SUP224",
      
      
      print: "SUP224",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["FAB374","SUP224"],
    sets: [Release.Promos,Release.SuperSlam],
    specialImage: "SUP224",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, you may pay {r}{r}{r}. If you do, this gets +5{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 2,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ismatulloh"],
    cardIdentifier: "punch-above-your-weight-yellow",
    classes: [Class.Generic],
    defaultImage: "SUP225",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Punch Above Your Weight",
    printings: [{
        artists: ["Ismatulloh"],
      
      identifier: "SUP225",
      image: "SUP225",
      
      
      print: "SUP225",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP225"],
    sets: [Release.SuperSlam],
    specialImage: "SUP225",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, you may pay {r}{r}{r}. If you do, this gets +4{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ismatulloh"],
    cardIdentifier: "punch-above-your-weight-blue",
    classes: [Class.Generic],
    defaultImage: "SUP226",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Punch Above Your Weight",
    printings: [{
        artists: ["Ismatulloh"],
      
      identifier: "SUP226",
      image: "SUP226",
      
      
      print: "SUP226",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP226"],
    sets: [Release.SuperSlam],
    specialImage: "SUP226",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, you may pay {r}{r}{r}. If you do, this gets +3{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marcus Reyno"],
    cardIdentifier: "punching-gloves",
    classes: [Class.Generic],
    defaultImage: "SUP213",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Punching Gloves",
    printings: [{
        artists: ["Marcus Reyno"],
      
      identifier: "SUP213",
      image: "SUP213",
      
      
      print: "SUP213",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP213"],
    sets: [Release.SuperSlam],
    specialImage: "SUP213",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Arms",

    
    
    
    defense: 0,
    
    functionalText: `**Action** - {r}{r}, destroy this: The next attack card you play this turn gets +2{p}. **Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nailsen Ivanderlie"],
    cardIdentifier: "rapturous-applause-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP043",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Rapturous Applause",
    printings: [{
        artists: ["Nailsen Ivanderlie"],
      
      identifier: "SUP043",
      image: "SUP043",
      
      
      print: "SUP043",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP043"],
    sets: [Release.SuperSlam],
    specialImage: "SUP043",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When you win a clash revealing this, **the crowd cheers** you.`,
    
    
    
    
    keywords: [Keyword.TheCrowdCheers],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Nailsen Ivanderlie"],
    cardIdentifier: "rapturous-applause-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP044",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Rapturous Applause",
    printings: [{
        artists: ["Nailsen Ivanderlie"],
      
      identifier: "SUP044",
      image: "SUP044",
      
      
      print: "SUP044",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP044"],
    sets: [Release.SuperSlam],
    specialImage: "SUP044",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When you win a clash revealing this, **the crowd cheers** you.`,
    
    
    
    
    keywords: [Keyword.TheCrowdCheers],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Nailsen Ivanderlie"],
    cardIdentifier: "rapturous-applause-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP045",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Rapturous Applause",
    printings: [{
        artists: ["Nailsen Ivanderlie"],
      
      identifier: "SUP045",
      image: "SUP045",
      
      
      print: "SUP045",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP045"],
    sets: [Release.SuperSlam],
    specialImage: "SUP045",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When you win a clash revealing this, **the crowd cheers** you.`,
    
    
    
    
    keywords: [Keyword.TheCrowdCheers],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Sebastian Giacobino"],
    cardIdentifier: "reckless-stampede-red",
    classes: [Class.Brute],
    defaultImage: "SUP127",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Brutus,Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Reckless Stampede",
    printings: [{
        artists: ["Sebastian Giacobino"],
      
      identifier: "SUP127",
      image: "SUP127",
      
      
      print: "SUP127",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP127"],
    sets: [Release.SuperSlam],
    specialImage: "SUP127",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 0,
    
    functionalText: `Whenever a card defends this, **clash** with the defending hero. The winner deals 1 damage to each other hero. Each hero may put their revealed card on the bottom of its owner's deck.`,
    
    
    
    
    keywords: [Keyword.Clash],
    
    
    
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Florian Herold"],
    cardIdentifier: "renounce-violence-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP025",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Renounce Violence",
    printings: [{
        artists: ["Florian Herold"],
      
      identifier: "SUP025",
      image: "SUP025",
      
      
      print: "SUP025",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP025"],
    sets: [Release.SuperSlam],
    specialImage: "SUP025",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Revered Instant",

    
    
    cost: 0,
    
    
    functionalText: `Destroy up to 3 Might tokens. Create a Toughness token for each token destroyed this way.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Muhammad Farji"],
    cardIdentifier: "revolting-gesture-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP119",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Revolting Gesture",
    printings: [{
        artists: ["Muhammad Farji"],
      
      identifier: "SUP119",
      image: "SUP119",
      
      
      print: "SUP119",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP119"],
    sets: [Release.SuperSlam],
    specialImage: "SUP119",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Reviled Action",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `Your next attack this turn gets +3{p}.

Create a Might token.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Peyeyo"],
    cardIdentifier: "right-behind-you-red",
    classes: [Class.Generic],
    defaultImage: "SUP233",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Right Behind You",
    printings: [{
        artists: ["Peyeyo"],
      
      identifier: "SUP233",
      image: "SUP233",
      
      
      print: "SUP233",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP233"],
    sets: [Release.SuperSlam],
    specialImage: "SUP233",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this defends together with another card from hand, this gets +1{d} and you may look at the top card of your deck. You may put it on the bottom.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Peyeyo"],
    cardIdentifier: "right-behind-you-yellow",
    classes: [Class.Generic],
    defaultImage: "SUP234",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Right Behind You",
    printings: [{
        artists: ["Peyeyo"],
      
      identifier: "SUP234",
      image: "SUP234",
      
      
      print: "SUP234",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP234"],
    sets: [Release.SuperSlam],
    specialImage: "SUP234",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this defends together with another card from hand, this gets +1{d} and you may look at the top card of your deck. You may put it on the bottom.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Peyeyo"],
    cardIdentifier: "right-behind-you-blue",
    classes: [Class.Generic],
    defaultImage: "SUP235",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Right Behind You",
    printings: [{
        artists: ["Peyeyo"],
      
      identifier: "SUP235",
      image: "SUP235",
      
      
      print: "SUP235",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP235"],
    sets: [Release.SuperSlam],
    specialImage: "SUP235",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this defends together with another card from hand, this gets +1{d} and you may look at the top card of your deck. You may put it on the bottom.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mark Poole"],
    cardIdentifier: "rip-up-their-virtues-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP088",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Rip Up Their Virtues",
    printings: [{
        artists: ["Mark Poole"],
      
      identifier: "SUP088",
      image: "SUP088",
      
      
      print: "SUP088",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP088"],
    sets: [Release.SuperSlam],
    specialImage: "SUP088",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Reviled Instant",

    
    
    cost: 0,
    
    
    functionalText: `Destroy up to 3 Toughness tokens. Create a Might token for each token destroyed this way.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Bramasta Aji"],
    cardIdentifier: "rough-up-red",
    classes: [Class.Brute],
    defaultImage: "SUP158",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Rough Up",
    printings: [{
        artists: ["Bramasta Aji"],
      
      identifier: "SUP158",
      image: "SUP158",
      
      
      print: "SUP158",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP158"],
    sets: [Release.SuperSlam],
    specialImage: "SUP158",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks, if there is a card with 6 or more {p} in your pitch zone, this gets +1{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Bramasta Aji"],
    cardIdentifier: "rough-up-yellow",
    classes: [Class.Brute],
    defaultImage: "SUP159",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Rough Up",
    printings: [{
        artists: ["Bramasta Aji"],
      
      identifier: "SUP159",
      image: "SUP159",
      
      
      print: "SUP159",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP159"],
    sets: [Release.SuperSlam],
    specialImage: "SUP159",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks, if there is a card with 6 or more {p} in your pitch zone, this gets +1{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Bramasta Aji"],
    cardIdentifier: "rough-up-blue",
    classes: [Class.Brute],
    defaultImage: "SUP160",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Rough Up",
    printings: [{
        artists: ["Bramasta Aji"],
      
      identifier: "SUP160",
      image: "SUP160",
      
      
      print: "SUP160",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP160"],
    sets: [Release.SuperSlam],
    specialImage: "SUP160",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks, if there is a card with 6 or more {p} in your pitch zone, this gets +1{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mateusz Wiśniewski"],
    cardIdentifier: "sadistic-scowl-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP095",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Sadistic Scowl",
    printings: [{
        artists: ["Mateusz Wiśniewski"],
      
      identifier: "SUP095",
      image: "SUP095",
      
      
      print: "SUP095",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP095"],
    sets: [Release.SuperSlam],
    specialImage: "SUP095",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Reviled Action",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `Your next attack this turn gets +5{p}.

**Intimidate** target hero.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Intimidate],
    
    
    
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Bastien Jez"],
    cardIdentifier: "shining-courage-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP034",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Shining Courage",
    printings: [{
        artists: ["Bastien Jez"],
      
      identifier: "SUP034",
      image: "SUP034",
      
      
      print: "SUP034",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP034"],
    sets: [Release.SuperSlam],
    specialImage: "SUP034",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Revered Instant",

    
    
    cost: 0,
    
    
    functionalText: `Up to one target defending action card gets +3{d} this turn.

**The crowd cheers** you.`,
    
    
    
    
    keywords: [Keyword.TheCrowdCheers],
    
    
    
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Aluísio Cervelle"],
    cardIdentifier: "shoot-your-mouth-off-red",
    classes: [Class.Guardian],
    defaultImage: "SUP189",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Shoot Your Mouth Off",
    printings: [{
        artists: ["Aluísio Cervelle"],
      
      identifier: "SUP189",
      image: "SUP189",
      
      
      print: "SUP189",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP189"],
    sets: [Release.SuperSlam],
    specialImage: "SUP189",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When the combat chain closes, if this didn't hit, the defending hero creates a Confidence token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 8,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Aluísio Cervelle"],
    cardIdentifier: "shoot-your-mouth-off-yellow",
    classes: [Class.Guardian],
    defaultImage: "SUP190",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Shoot Your Mouth Off",
    printings: [{
        artists: ["Aluísio Cervelle"],
      
      identifier: "SUP190",
      image: "SUP190",
      
      
      print: "SUP190",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP190"],
    sets: [Release.SuperSlam],
    specialImage: "SUP190",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When the combat chain closes, if this didn't hit, the defending hero creates a Confidence token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 7,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Aluísio Cervelle"],
    cardIdentifier: "shoot-your-mouth-off-blue",
    classes: [Class.Guardian],
    defaultImage: "SUP191",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Shoot Your Mouth Off",
    printings: [{
        artists: ["Aluísio Cervelle"],
      
      identifier: "SUP191",
      image: "SUP191",
      
      
      print: "SUP191",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP191"],
    sets: [Release.SuperSlam],
    specialImage: "SUP191",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When the combat chain closes, if this didn't hit, the defending hero creates a Confidence token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Aluísio Cervelle"],
    cardIdentifier: "short-shrift-yellow",
    classes: [Class.Guardian],
    defaultImage: "SUP192",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Short Shrift",
    printings: [{
        artists: ["Aluísio Cervelle"],
      
      identifier: "SUP192",
      image: "SUP192",
      
      
      print: "SUP192",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP192"],
    sets: [Release.SuperSlam],
    specialImage: "SUP192",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If this has {p} greater than its base, it gets +1{p}.

**Crush** - When this deals 4 or more damage to a hero, they discard a card.`,
    
    
    
    
    keywords: [Keyword.Crush],
    
    
    
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Narendra B Adi"],
    cardIdentifier: "show-of-strength-red",
    classes: [Class.Brute],
    defaultImage: "SUP128",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Show of Strength",
    printings: [{
        artists: ["Narendra B Adi"],
      
      identifier: "SUP128",
      image: "SUP128",
      
      
      print: "SUP128",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Narendra B Adi"],
      foiling: Foiling.C,
      identifier: "SUP128",
      image: "SUP128_V2",
      
      
      print: "SUP128-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP128"],
    sets: [Release.SuperSlam],
    specialImage: "SUP128_V2",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `This gets -1{p} for each card with 6 or more {p} defending it.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 8,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marcus Reyno"],
    cardIdentifier: "sit-red",
    classes: [Class.Guardian],
    defaultImage: "SUP210",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Sit!",
    printings: [{
        artists: ["Marcus Reyno"],
      
      identifier: "SUP210",
      image: "SUP210",
      
      
      print: "SUP210",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP210"],
    sets: [Release.SuperSlam],
    specialImage: "SUP210",
    subtypes: [],
    types: [Type.Block],
    typeText: "Guardian Block",

    
    
    
    defense: 2,
    
    functionalText: `When this defends a Brute attack, this gets +3{d}.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Pavel Yurev"],
    cardIdentifier: "small-problem-yellow",
    classes: [Class.Guardian],
    defaultImage: "SUP193",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Small Problem",
    printings: [{
        artists: ["Pavel Yurev"],
      
      identifier: "SUP193",
      image: "SUP193",
      
      
      print: "SUP193",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP193"],
    sets: [Release.SuperSlam],
    specialImage: "SUP193",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If this has {p} greater than its base, it gets +1{p}.

**Crush** - When this deals 4 or more damage to a hero, destroy an aura they control.`,
    
    
    
    
    keywords: [Keyword.Crush],
    
    
    
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Othon Nikolaidis"],
    cardIdentifier: "smash-with-big-rock-yellow",
    classes: [Class.Brute],
    defaultImage: "SUP133",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Smash with Big Rock",
    printings: [{
        artists: ["Othon Nikolaidis"],
      
      identifier: "SUP133",
      image: "SUP133",
      
      
      print: "SUP133",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP133"],
    sets: [Release.SuperSlam],
    specialImage: "SUP133",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 0,
    
    functionalText: `Cards defending this can't gain {d}.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Vadim Kalabukh"],
    cardIdentifier: "smashing-ground-blue",
    classes: [Class.Brute],
    defaultImage: "SUP132",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Smashing Ground",
    printings: [{
        artists: ["Vadim Kalabukh"],
      
      identifier: "SUP132",
      image: "SUP132",
      
      
      print: "SUP132",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP132"],
    sets: [Release.SuperSlam],
    specialImage: "SUP132",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `If this has 6 or more {p}, it gets "When this hits a hero, destroy a card in their arsenal."`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "snag-blue",
    classes: [Class.Generic],
    defaultImage: "SUP271",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Snag",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "SUP271",
      image: "SUP271",
      isExpansionSlot: true,
      
      print: "SUP271",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["CRU182","SUP271"],
    sets: [Release.CrucibleOfWar,Release.SuperSlam],
    specialImage: "SUP271",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Generic Instant",

    
    
    cost: 0,
    
    
    functionalText: `Attack action cards can't gain {p} from their own effects, or the effects of attack reaction cards this turn.`,
    
    
    
    
    
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ramza Ardyputra"],
    cardIdentifier: "song-of-sinew-yellow",
    classes: [Class.Brute],
    defaultImage: "SUP134",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Song of Sinew",
    printings: [{
        artists: ["Ramza Ardyputra"],
      
      identifier: "SUP134",
      image: "SUP134",
      
      
      print: "SUP134",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP134"],
    sets: [Release.SuperSlam],
    specialImage: "SUP134",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Brute Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Reveal the top 4 cards of your deck. Your next attack this turn gets +X{p}, where X is the number of cards with 6 or more {p} revealed this way. Put them back in any order.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  }];
  const cards4: Card[] =  [{
    artists: ["Henrique Lindner"],
    cardIdentifier: "spew-obscenities-yellow",
    classes: [Class.Guardian],
    defaultImage: "SUP078",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath],
    name: "Spew Obscenities",
    printings: [{
        artists: ["Henrique Lindner"],
      
      identifier: "SUP078",
      image: "SUP078",
      
      
      print: "SUP078",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Henrique Lindner"],
      foiling: Foiling.R,
      identifier: "SUP078",
      image: "SUP078",
      
      
      print: "SUP078-Rainbow",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP078"],
    sets: [Release.SuperSlam],
    specialImage: "SUP078",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Guardian Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If you control a Confidence or Might token, this gets +1{p}.

When this hits a hero, create a Confidence and a Might token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "stand-strong",
    classes: [Class.Guardian],
    defaultImage: "SUP169",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Taylor,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Stand Strong",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "SUP169",
      image: "SUP169",
      
      
      print: "SUP169",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP169"],
    sets: [Release.SuperSlam],
    specialImage: "SUP169",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Guardian Equipment - Legs",

    
    
    
    defense: 1,
    
    functionalText: `**Action** - {r}{r}{r}, destroy this: Create a Confidence token. Activate this only if you control an aura of suspense. **Go again**

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak,Keyword.GoAgain],
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ausonia"],
    cardIdentifier: "steal-victory-blue",
    classes: [Class.Brute],
    defaultImage: "SUP069",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.RKO],
    name: "Steal Victory",
    printings: [{
        artists: ["Ausonia"],
      
      identifier: "SUP069",
      image: "SUP069",
      
      
      print: "SUP069",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP069"],
    sets: [Release.SuperSlam],
    specialImage: "SUP069",
    subtypes: [],
    types: [Type.Block],
    typeText: "Reviled Brute Block",

    
    
    
    defense: 3,
    
    functionalText: `When this defends, **steal** an aura token the attacking hero controls.`,
    
    
    
    
    keywords: [Keyword.Steal],
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Andi Cahyo W"],
    cardIdentifier: "story-beats-red",
    classes: [Class.Guardian],
    defaultImage: "SUP181",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Story Beats",
    printings: [{
        artists: ["Andi Cahyo W"],
      
      identifier: "SUP181",
      image: "SUP181",
      
      
      print: "SUP181",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP181"],
    sets: [Release.SuperSlam],
    specialImage: "SUP181",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this attacks or defends, you may put a suspense counter on, or remove one from, an aura of suspense you control.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Andi Cahyo W"],
    cardIdentifier: "story-beats-yellow",
    classes: [Class.Guardian],
    defaultImage: "SUP182",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Story Beats",
    printings: [{
        artists: ["Andi Cahyo W"],
      
      identifier: "SUP182",
      image: "SUP182",
      
      
      print: "SUP182",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP182"],
    sets: [Release.SuperSlam],
    specialImage: "SUP182",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this attacks or defends, you may put a suspense counter on, or remove one from, an aura of suspense you control.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 7,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Andi Cahyo W"],
    cardIdentifier: "story-beats-blue",
    classes: [Class.Guardian],
    defaultImage: "SUP183",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Story Beats",
    printings: [{
        artists: ["Andi Cahyo W"],
      
      identifier: "SUP183",
      image: "SUP183",
      
      
      print: "SUP183",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP183"],
    sets: [Release.SuperSlam],
    specialImage: "SUP183",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this attacks or defends, you may put a suspense counter on, or remove one from, an aura of suspense you control.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 7,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["M Fakhrur Rozzi"],
    cardIdentifier: "strong-stomach-for-adversity",
    classes: [Class.Guardian],
    defaultImage: "SUP073",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.Taylor],
    name: "Strong Stomach for Adversity",
    printings: [{
        artists: ["M Fakhrur Rozzi"],
      
      identifier: "SUP073",
      image: "SUP073",
      
      
      print: "SUP073",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP073"],
    sets: [Release.SuperSlam],
    specialImage: "SUP073",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Reviled Guardian Equipment - Chest",

    
    
    
    defense: 1,
    
    functionalText: `If you control a Confidence and a Might token, this gets +2{d}.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Kevin Sidharta"],
    cardIdentifier: "strongest-survive-red",
    classes: [Class.Brute],
    defaultImage: "SUP135",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Strongest Survive",
    printings: [{
        artists: ["Kevin Sidharta"],
      
      identifier: "SUP135",
      image: "SUP135",
      
      
      print: "SUP135",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP135"],
    sets: [Release.SuperSlam],
    specialImage: "SUP135",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this hits a hero, they discard a card unless they reveal a card from their hand with {p} greater than the damage dealt this way.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kevin Sidharta"],
    cardIdentifier: "strongest-survive-yellow",
    classes: [Class.Brute],
    defaultImage: "SUP136",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Strongest Survive",
    printings: [{
        artists: ["Kevin Sidharta"],
      
      identifier: "SUP136",
      image: "SUP136",
      
      
      print: "SUP136",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP136"],
    sets: [Release.SuperSlam],
    specialImage: "SUP136",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this hits a hero, they discard a card unless they reveal a card from their hand with {p} greater than the damage dealt this way.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kevin Sidharta"],
    cardIdentifier: "strongest-survive-blue",
    classes: [Class.Brute],
    defaultImage: "SUP137",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Strongest Survive",
    printings: [{
        artists: ["Kevin Sidharta"],
      
      identifier: "SUP137",
      image: "SUP137",
      
      
      print: "SUP137",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP137"],
    sets: [Release.SuperSlam],
    specialImage: "SUP137",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this hits a hero, they discard a card unless they reveal a card from their hand with {p} greater than the damage dealt this way.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Widya Wang"],
    cardIdentifier: "take-that-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP111",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Take That!",
    printings: [{
        artists: ["Widya Wang"],
      
      identifier: "SUP111",
      image: "SUP111",
      
      
      print: "SUP111",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP111"],
    sets: [Release.SuperSlam],
    specialImage: "SUP111",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When the combat chain closes, if this didn't hit, the defending hero creates a Might token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Widya Wang"],
    cardIdentifier: "take-that-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP112",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Take That!",
    printings: [{
        artists: ["Widya Wang"],
      
      identifier: "SUP112",
      image: "SUP112",
      
      
      print: "SUP112",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP112"],
    sets: [Release.SuperSlam],
    specialImage: "SUP112",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When the combat chain closes, if this didn't hit, the defending hero creates a Might token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Widya Wang"],
    cardIdentifier: "take-that-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP113",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Take That!",
    printings: [{
        artists: ["Widya Wang"],
      
      identifier: "SUP113",
      image: "SUP113",
      
      
      print: "SUP113",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP113"],
    sets: [Release.SuperSlam],
    specialImage: "SUP113",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When the combat chain closes, if this didn't hit, the defending hero creates a Might token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Orson CaptainSass"],
    cardIdentifier: "take-the-bait-red",
    classes: [Class.Ranger],
    defaultImage: "SUP258",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Riptide,Hero.Shiyana],
    name: "Take the Bait",
    printings: [{
        artists: ["Orson CaptainSass"],
      
      identifier: "SUP258",
      image: "SUP258",
      isExpansionSlot: true,
      
      print: "SUP258",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP258"],
    sets: [Release.SuperSlam],
    specialImage: "SUP258",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Ranger Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Riptide Specialization**

Search your deck for a card, then shuffle and put it on top.

Create a Bait token under an opponent's control.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Specialization],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    specializations: [Hero.Riptide],
    
  
  
  },{
    artists: ["Satriasa"],
    cardIdentifier: "tame-the-beastly-behavior-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP024",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Tame the Beastly Behavior",
    printings: [{
        artists: ["Satriasa"],
      
      identifier: "SUP024",
      image: "SUP024",
      
      
      print: "SUP024",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP024"],
    sets: [Release.SuperSlam],
    specialImage: "SUP024",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this attacks a Reviled hero, this gets +1{p}.

When this hits a Reviled hero, put a card from their arsenal on the bottom of their deck.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Isuardi Therianto"],
    cardIdentifier: "tear-down-the-idols-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP086",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Tear Down the Idols",
    printings: [{
        artists: ["Isuardi Therianto"],
      
      identifier: "SUP086",
      image: "SUP086",
      
      
      print: "SUP086",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP086"],
    sets: [Release.SuperSlam],
    specialImage: "SUP086",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this attacks a Revered hero, **intimidate** them.

When this hits a Revered hero, they discard a card.`,
    
    
    
    
    keywords: [Keyword.Intimidate],
    
    
    
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Esty Swandana"],
    cardIdentifier: "tempest-palm-gustwave-yellow",
    classes: [Class.Ninja],
    defaultImage: "SUP246",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Benji,Hero.Cindra,Hero.Fai,Hero.Ira,Hero.Katsu,Hero.Zen],
    name: "Tempest Palm Gustwave",
    printings: [{
        artists: ["Esty Swandana"],
      
      identifier: "SUP246",
      image: "SUP246",
      isExpansionSlot: true,
      
      print: "SUP246",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP246"],
    sets: [Release.SuperSlam],
    specialImage: "SUP246",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Combo** - If Surging Strike was the last attack this combat chain, this gets +2{p}.

If this is played at chain link 3 or higher, this gets **go again**.`,
    
    
    
    
    keywords: [Keyword.Combo,Keyword.GoAgain],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kimberly Pantoni"],
    cardIdentifier: "tension-in-the-air-red",
    classes: [Class.Guardian],
    defaultImage: "SUP204",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Tension in the Air",
    printings: [{
        artists: ["Kimberly Pantoni"],
      
      identifier: "SUP204",
      image: "SUP204",
      
      
      print: "SUP204",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["APS013","SUP204"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP204",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Guardian Instant - Aura",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `**Suspense**

When this leaves the arena, your next attack this turn gets +4{p}.`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kimberly Pantoni"],
    cardIdentifier: "tension-in-the-air-yellow",
    classes: [Class.Guardian],
    defaultImage: "SUP205",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Tension in the Air",
    printings: [{
        artists: ["Kimberly Pantoni"],
      
      identifier: "SUP205",
      image: "SUP205",
      
      
      print: "SUP205",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP205"],
    sets: [Release.SuperSlam],
    specialImage: "SUP205",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Guardian Instant - Aura",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `**Suspense**

When this leaves the arena, your next attack this turn gets +3{p}.`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kimberly Pantoni"],
    cardIdentifier: "tension-in-the-air-blue",
    classes: [Class.Guardian],
    defaultImage: "SUP206",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Tension in the Air",
    printings: [{
        artists: ["Kimberly Pantoni"],
      
      identifier: "SUP206",
      image: "SUP206",
      
      
      print: "SUP206",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["APS025","SUP206"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP206",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Guardian Instant - Aura",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `**Suspense**

When this leaves the arena, your next attack this turn gets +2{p}.`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Saad Irfan"],
    cardIdentifier: "the-old-switcheroo-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP087",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "The Old Switcheroo",
    printings: [{
        artists: ["Saad Irfan"],
      
      identifier: "SUP087",
      image: "SUP087",
      
      
      print: "SUP087",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP087"],
    sets: [Release.SuperSlam],
    specialImage: "SUP087",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Instant** - Discard this: the next time you would clash with target hero this turn, instead you reveal the top card of their deck and they reveal the top card of your deck. If you win the clash, they discard a card.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Mark Poole"],
    cardIdentifier: "the-suspense-is-killing-me-blue",
    classes: [Class.Guardian],
    defaultImage: "SUP207",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "The Suspense is Killing Me",
    printings: [{
        artists: ["Mark Poole"],
      
      identifier: "SUP207",
      image: "SUP207",
      
      
      print: "SUP207",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Mark Poole"],
      foiling: Foiling.C,
      identifier: "SUP207",
      image: "SUP207_V2",
      
      
      print: "SUP207-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["APS026","SUP207"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP207_V2",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Guardian Instant - Aura",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `**Suspense**

Your first attack each turn gets +1{p}.`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Grégory Nunkovics"],
    cardIdentifier: "thespian-charm-yellow",
    classes: [Class.Guardian],
    defaultImage: "SUP013",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades],
    name: "Thespian Charm",
    printings: [{
        artists: ["Grégory Nunkovics"],
      
      identifier: "SUP013",
      image: "SUP013",
      
      
      print: "SUP013",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Marvel,Rarity.Promo,Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["APS014","FAB371","LGS423","SUP013"],
    sets: [Release.ArmoryDeckPleiades,Release.Promos,Release.SuperSlam],
    specialImage: "SUP013",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Revered Guardian Instant",

    
    
    cost: 0,
    
    
    functionalText: `Choose any number;
- Destroy a Might or Vigor token.
- **The crowd cheers** you.
- Return an aura permanent you control to its owner's hand.`,
    
    
    
    
    keywords: [Keyword.TheCrowdCheers],
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Amirul HHF"],
    cardIdentifier: "tiara-of-suspense",
    classes: [Class.Guardian],
    defaultImage: "SUP272",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Taylor],
    name: "Tiara of Suspense",
    printings: [{
        artists: ["Amirul HHF"],
      
      identifier: "SUP272",
      image: "SUP272",
      isExpansionSlot: true,
      
      print: "SUP272",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["APS004","SUP272"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP272",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Revered Guardian Equipment - Head",

    
    
    
    defense: 2,
    
    functionalText: `**Instant** - Destroy this: Put a suspense counter on an aura of suspense you control. Activate this only if you've been cheered this turn.

**Guardwell**`,
    
    
    
    
    keywords: [Keyword.Guardwell],
    
    
    meta: [Meta.Expansion],
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Ramza Ardyputra"],
    cardIdentifier: "time-flies-when-youre-having-fun-red",
    classes: [Class.Generic],
    defaultImage: "SUP220",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Time Flies When You're Having Fun",
    printings: [{
        artists: ["Ramza Ardyputra"],
      
      identifier: "SUP220",
      image: "SUP220",
      
      
      print: "SUP220",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP220"],
    sets: [Release.SuperSlam],
    specialImage: "SUP220",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `The next time an attack action card hits a hero this turn, you may destroy an aura they control.

If this was played from arsenal, the next attack action card you play this turn gets +3{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "to-be-continued-blue",
    classes: [Class.Guardian],
    defaultImage: "SUP208",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "To Be Continued...",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "SUP208",
      image: "SUP208",
      
      
      print: "SUP208",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Mariusz Gandzel"],
      foiling: Foiling.C,
      identifier: "SUP208",
      image: "SUP208_V2",
      
      
      print: "SUP208-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["APS027","SUP208"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP208_V2",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Guardian Instant - Aura",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `**Suspense**

The first time you would be dealt damage each turn, prevent 1 of that damage.`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kyxarie Peralta"],
    cardIdentifier: "toby-jugs",
    classes: [Class.Generic],
    defaultImage: "SUP214",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Toby Jugs",
    printings: [{
        artists: ["Kyxarie Peralta"],
      
      identifier: "SUP214",
      image: "SUP214",
      
      
      print: "SUP214",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP214"],
    sets: [Release.SuperSlam],
    specialImage: "SUP214",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Legs",

    
    
    
    defense: 0,
    
    functionalText: `When this defends, you may pay {r}. If you do, it gets +2{d} this turn.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Alexis Susani"],
    cardIdentifier: "tough-leather-boots",
    classes: [Class.Brute],
    defaultImage: "SUP003",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Taylor,Hero.Tuffnut],
    name: "Tough Leather Boots",
    printings: [{
        artists: ["Alexis Susani"],
      
      identifier: "SUP003",
      image: "SUP003",
      
      
      print: "SUP003",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP003"],
    sets: [Release.SuperSlam],
    specialImage: "SUP003",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Revered Brute Equipment - Legs",

    
    
    
    defense: 1,
    
    functionalText: `If you control a Toughness and a Vigor token, this gets +2{d}.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Eryk Szczygieł"],
    cardIdentifier: "tough-smashup-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP046",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Brutus,Hero.Pleiades,Hero.Tuffnut],
    name: "Tough Smashup",
    printings: [{
        artists: ["Eryk Szczygieł"],
      
      identifier: "SUP046",
      image: "SUP046",
      
      
      print: "SUP046",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP046"],
    sets: [Release.SuperSlam],
    specialImage: "SUP046",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this defends, **clash** with the attacking hero. The winner creates a Toughness token. You may put your revealed card on the bottom of its owner's deck.`,
    
    
    
    
    keywords: [Keyword.Clash],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Eryk Szczygieł"],
    cardIdentifier: "tough-smashup-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP047",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Brutus,Hero.Pleiades,Hero.Tuffnut],
    name: "Tough Smashup",
    printings: [{
        artists: ["Eryk Szczygieł"],
      
      identifier: "SUP047",
      image: "SUP047",
      
      
      print: "SUP047",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP047"],
    sets: [Release.SuperSlam],
    specialImage: "SUP047",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this defends, **clash** with the attacking hero. The winner creates a Toughness token. You may put your revealed card on the bottom of its owner's deck.`,
    
    
    
    
    keywords: [Keyword.Clash],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Eryk Szczygieł"],
    cardIdentifier: "tough-smashup-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP048",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Brutus,Hero.Pleiades,Hero.Tuffnut],
    name: "Tough Smashup",
    printings: [{
        artists: ["Eryk Szczygieł"],
      
      identifier: "SUP048",
      image: "SUP048",
      
      
      print: "SUP048",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP048"],
    sets: [Release.SuperSlam],
    specialImage: "SUP048",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this defends, **clash** with the attacking hero. The winner creates a Toughness token. You may put your revealed card on the bottom of its owner's deck.`,
    
    
    
    
    keywords: [Keyword.Clash],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Henrique Lindner"],
    cardIdentifier: "toughness",
    classes: [Class.Generic],
    defaultImage: "SUP241",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Toughness",
    printings: [{
        artists: ["Henrique Lindner"],
      
      identifier: "SUP241",
      image: "SUP241",
      
      
      print: "SUP241",
      rarity: Rarity.Basic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Basic,Rarity.Token],
    rarity: Rarity.Basic,
    setIdentifiers: ["APS032","SUP241"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP241",
    subtypes: [Subtype.Aura],
    types: [Type.Token],
    typeText: "Generic Token - Aura",

    
    
    
    
    
    functionalText: `At the start of your opponent's turn, destroy this, then the next action card you defend with this turn gets +1{d} this chain link.`,
    
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "truth-or-trickery-yellow",
    classes: [Class.Guardian],
    defaultImage: "SUP077",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath],
    name: "Truth or Trickery",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SUP077",
      image: "SUP077",
      
      
      print: "SUP077",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP077"],
    sets: [Release.SuperSlam],
    specialImage: "SUP077",
    subtypes: [],
    types: [Type.Block],
    typeText: "Reviled Guardian Block",

    
    
    
    defense: 3,
    
    functionalText: `When this defends, you may look at the top card of your deck and choose a color. If you do, the attacking hero guesses if that card is the chosen color, then they look at it. If they guessed wrong, they discard a card.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Wisnu Tan"],
    cardIdentifier: "tuffnut",
    classes: [Class.Brute],
    defaultImage: "SUP002",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Tuffnut],
    name: "Tuffnut",
    printings: [{
        artists: ["Wisnu Tan"],
      
      identifier: "SUP002",
      image: "SUP002",
      
      
      print: "SUP002",
      rarity: Rarity.Basic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Wisnu Tan"],
      foiling: Foiling.C,
      identifier: "SUP002",
      image: "SUP002_V2",
      
      
      print: "SUP002-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Wisnu Tan"],
      foiling: Foiling.C,
      identifier: "SUP002",
      image: "SUP002_V2_BACK",
      
      
      print: "SUP002-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["SUP002"],
    sets: [Release.SuperSlam],
    specialImage: "SUP002_V2",
    subtypes: [Subtype.Young],
    types: [Type.Hero],
    typeText: "Revered Brute Hero - Young",

    
    
    
    
    
    functionalText: `**Instant** - {t}: Pitch the top card of your deck. If it has 6 or more {p}, **the crowd cheers** you.

Whenever the crowd cheers you, create a Toughness token.`,
    
    hero: Hero.Tuffnut,
    intellect: 3,
    
    keywords: [Keyword.TheCrowdCheers],
    
    life: 20,
    
  
    
    
    
    
    shorthands: ["Tap"],
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  young: true
  },{
    artists: ["Wisnu Tan"],
    cardIdentifier: "tuffnut-bumbling-hulkster",
    classes: [Class.Brute],
    defaultImage: "SUP001",
    legalFormats: [Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open],
    legalHeroes: [Hero.Tuffnut],
    name: "Tuffnut, Bumbling Hulkster",
    printings: [{
        artists: ["Wisnu Tan"],
      
      identifier: "SUP001",
      image: "SUP001",
      
      
      print: "SUP001",
      rarity: Rarity.Basic,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Wisnu Tan"],
      foiling: Foiling.C,
      identifier: "SUP001",
      image: "SUP001_V2",
      
      
      print: "SUP001-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Wisnu Tan"],
      foiling: Foiling.C,
      identifier: "SUP001",
      image: "SUP001_V2_BACK",
      
      
      print: "SUP001-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.SuperSlam,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Basic,
    setIdentifiers: ["HER146","SUP001"],
    sets: [Release.Promos,Release.SuperSlam],
    specialImage: "SUP001_V2",
    subtypes: [],
    types: [Type.Hero],
    typeText: "Revered Brute Hero",

    
    
    
    
    
    functionalText: `**Instant** - {t}: Pitch the top card of your deck. If it has 6 or more {p}, **the crowd cheers** you.

Whenever the crowd cheers you, create a Toughness token.`,
    
    hero: Hero.Tuffnut,
    intellect: 3,
    
    keywords: [Keyword.TheCrowdCheers],
    
    life: 40,
    
  
    
    
    
    
    shorthands: ["Tap"],
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Asur Misoa"],
    cardIdentifier: "turn-heads-blue",
    classes: [Class.Guardian],
    defaultImage: "SUP176",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Turn Heads",
    printings: [{
        artists: ["Asur Misoa"],
      
      identifier: "SUP176",
      image: "SUP176",
      
      
      print: "SUP176",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP176"],
    sets: [Release.SuperSlam],
    specialImage: "SUP176",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Guardian Instant - Aura",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `**Suspense**

When this leaves the arena, {t} target Brute hero. They don't {u} during their next end phase.`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    
  
    
    pitch: 3,
    
    
    shorthands: ["Tap","Untap"],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Andrew Chou"],
    cardIdentifier: "turn-the-crowd-grateful-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP049",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Turn the Crowd Grateful",
    printings: [{
        artists: ["Andrew Chou"],
      
      identifier: "SUP049",
      image: "SUP049",
      
      
      print: "SUP049",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP049"],
    sets: [Release.SuperSlam],
    specialImage: "SUP049",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this attacks a Reviled hero, this gets +1{p}.

When this hits a Reviled hero, **the crowd cheers** you.`,
    
    
    
    
    keywords: [Keyword.TheCrowdCheers],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Andrew Chou"],
    cardIdentifier: "turn-the-crowd-grateful-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP050",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Turn the Crowd Grateful",
    printings: [{
        artists: ["Andrew Chou"],
      
      identifier: "SUP050",
      image: "SUP050",
      
      
      print: "SUP050",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP050"],
    sets: [Release.SuperSlam],
    specialImage: "SUP050",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this attacks a Reviled hero, this gets +1{p}.

When this hits a Reviled hero, **the crowd cheers** you.`,
    
    
    
    
    keywords: [Keyword.TheCrowdCheers],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Andrew Chou"],
    cardIdentifier: "turn-the-crowd-grateful-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP051",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Turn the Crowd Grateful",
    printings: [{
        artists: ["Andrew Chou"],
      
      identifier: "SUP051",
      image: "SUP051",
      
      
      print: "SUP051",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP051"],
    sets: [Release.SuperSlam],
    specialImage: "SUP051",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this attacks a Reviled hero, this gets +1{p}.

When this hits a Reviled hero, **the crowd cheers** you.`,
    
    
    
    
    keywords: [Keyword.TheCrowdCheers],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Arkoii"],
    cardIdentifier: "turn-the-crowd-hateful-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP114",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Turn the Crowd Hateful",
    printings: [{
        artists: ["Arkoii"],
      
      identifier: "SUP114",
      image: "SUP114",
      
      
      print: "SUP114",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP114"],
    sets: [Release.SuperSlam],
    specialImage: "SUP114",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this attacks a Revered hero, this gets +3{p}.

When this hits a Revered hero, **the crowd boos** you.`,
    
    
    
    
    keywords: [Keyword.TheCrowdBoos],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Arkoii"],
    cardIdentifier: "turn-the-crowd-hateful-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP115",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Turn the Crowd Hateful",
    printings: [{
        artists: ["Arkoii"],
      
      identifier: "SUP115",
      image: "SUP115",
      
      
      print: "SUP115",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP115"],
    sets: [Release.SuperSlam],
    specialImage: "SUP115",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this attacks a Revered hero, this gets +3{p}.

When this hits a Revered hero, **the crowd boos** you.`,
    
    
    
    
    keywords: [Keyword.TheCrowdBoos],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Arkoii"],
    cardIdentifier: "turn-the-crowd-hateful-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP116",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Turn the Crowd Hateful",
    printings: [{
        artists: ["Arkoii"],
      
      identifier: "SUP116",
      image: "SUP116",
      
      
      print: "SUP116",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP116"],
    sets: [Release.SuperSlam],
    specialImage: "SUP116",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Reviled Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this attacks a Revered hero, this gets +3{p}.

When this hits a Revered hero, **the crowd boos** you.`,
    
    
    
    
    keywords: [Keyword.TheCrowdBoos],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["FeiKang"],
    cardIdentifier: "turning-point-blue",
    classes: [Class.Guardian],
    defaultImage: "SUP015",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades],
    name: "Turning Point",
    printings: [{
        artists: ["FeiKang"],
      
      identifier: "SUP015",
      image: "SUP015",
      
      
      print: "SUP015",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["APS030","SUP015"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP015",
    subtypes: [],
    types: [Type.Block],
    typeText: "Revered Guardian Block",

    
    
    
    defense: 2,
    
    functionalText: `When this defends, if you have less {h} than the attacking hero, **the crowd cheers** you.

While this is defending, if you've been cheered this turn, it gets +3{d}.`,
    
    
    
    
    keywords: [Keyword.TheCrowdCheers],
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Lius Lasahido"],
    cardIdentifier: "two-steps-ahead-blue",
    classes: [Class.Guardian],
    defaultImage: "SUP075",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath],
    name: "Two Steps Ahead",
    printings: [{
        artists: ["Lius Lasahido"],
      
      identifier: "SUP075",
      image: "SUP075",
      
      
      print: "SUP075",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP075"],
    sets: [Release.SuperSlam],
    specialImage: "SUP075",
    subtypes: [Subtype.Aura,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Reviled Guardian Action - Aura",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `At the start of your turn, destroy this, then create a Confidence and 3 Might tokens.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Marcellino Tan"],
    cardIdentifier: "unexpected-backhand-red",
    classes: [Class.Brute],
    defaultImage: "SUP161",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Unexpected Backhand",
    printings: [{
        artists: ["Marcellino Tan"],
      
      identifier: "SUP161",
      image: "SUP161",
      
      
      print: "SUP161",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP161"],
    sets: [Release.SuperSlam],
    specialImage: "SUP161",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When you win a clash revealing this, deal 1 damage to the other hero.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marcellino Tan"],
    cardIdentifier: "unexpected-backhand-yellow",
    classes: [Class.Brute],
    defaultImage: "SUP162",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Unexpected Backhand",
    printings: [{
        artists: ["Marcellino Tan"],
      
      identifier: "SUP162",
      image: "SUP162",
      
      
      print: "SUP162",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP162"],
    sets: [Release.SuperSlam],
    specialImage: "SUP162",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When you win a clash revealing this, deal 1 damage to the other hero.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marcellino Tan"],
    cardIdentifier: "unexpected-backhand-blue",
    classes: [Class.Brute],
    defaultImage: "SUP163",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Unexpected Backhand",
    printings: [{
        artists: ["Marcellino Tan"],
      
      identifier: "SUP163",
      image: "SUP163",
      
      
      print: "SUP163",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP163"],
    sets: [Release.SuperSlam],
    specialImage: "SUP163",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When you win a clash revealing this, deal 1 damage to the other hero.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Cacho Rubione"],
    cardIdentifier: "unwavering-resolve-red",
    classes: [Class.Generic],
    defaultImage: "SUP218",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Unwavering Resolve",
    printings: [{
        artists: ["Cacho Rubione"],
      
      identifier: "SUP218",
      image: "SUP218",
      
      
      print: "SUP218",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP218"],
    sets: [Release.SuperSlam],
    specialImage: "SUP218",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `If you have no cards in your deck, this gets +4{p}.

If this is defended by 3 or more cards, it gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
  
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ina Wong"],
    cardIdentifier: "up-on-a-pedestal-blue",
    classes: [Class.Guardian],
    defaultImage: "SUP014",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades],
    name: "Up on a Pedestal",
    printings: [{
        artists: ["Ina Wong"],
      
      identifier: "SUP014",
      image: "SUP014",
      
      
      print: "SUP014",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["APS028","SUP014"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP014",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Revered Guardian Instant - Aura",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `**Suspense**

When this enters or leaves the arena, you may put a Revered or Guardian attack action card from your graveyard on top of your deck.`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Marco Wulfr"],
    cardIdentifier: "uplifting-performance-blue",
    classes: [Class.Guardian],
    defaultImage: "SUP016",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades],
    name: "Uplifting Performance",
    printings: [{
        artists: ["Marco Wulfr"],
      
      identifier: "SUP016",
      image: "SUP016",
      
      
      print: "SUP016",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["APS020","SUP016"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP016",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Guardian Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `If you control a Confidence or Toughness token, this gets +1{p}.

When this hits a hero, create a Confidence and a Toughness token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "vigor",
    classes: [Class.Generic],
    defaultImage: "SUP242",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Vigor",
    printings: [{
        artists: ["Rio Sabda"],
      
      identifier: "SUP242",
      image: "SUP242",
      
      
      print: "SUP242",
      rarity: Rarity.Basic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Basic,Rarity.Promo,Rarity.Token],
    rarity: Rarity.Basic,
    setIdentifiers: ["BET029","FAB206","FAB288","HVY242","KSI029","KYO029","LGS230","OLA029","SUP242","TCC107","VIC029"],
    sets: [Release.BetsyBlitzDeck,Release.HeavyHitters,Release.KassaiBlitzDeck,Release.KayoBlitzDeck,Release.OlympiaBlitzDeck,Release.Promos,Release.RoundTheTable,Release.SuperSlam,Release.VictorBlitzDeck],
    specialImage: "SUP242",
    subtypes: [Subtype.Aura],
    types: [Type.Token],
    typeText: "Generic Token - Aura",

    
    
    
    
    
    functionalText: `At the start of your turn, destroy this, then gain {r}.`,
    
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "vigorous-roar-red",
    classes: [Class.Brute],
    defaultImage: "SUP138",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Vigorous Roar",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "SUP138",
      image: "SUP138",
      
      
      print: "SUP138",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP138"],
    sets: [Release.SuperSlam],
    specialImage: "SUP138",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Brute Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Your next attack this turn gets +3{p}.

If there is a card with 6 or more {p} in your pitch zone, create a Vigor token.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Phu Thieu"],
    cardIdentifier: "vigorous-smashup-red",
    classes: [Class.Brute],
    defaultImage: "SUP164",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Brutus,Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Vigorous Smashup",
    printings: [{
        artists: ["Phu Thieu"],
      
      identifier: "SUP164",
      image: "SUP164",
      
      
      print: "SUP164",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP164"],
    sets: [Release.SuperSlam],
    specialImage: "SUP164",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this defends, **clash** with the attacking hero. The winner creates a Vigor token. You may put your revealed card on the bottom of its owner's deck.`,
    
    
    
    
    keywords: [Keyword.Clash],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Phu Thieu"],
    cardIdentifier: "vigorous-smashup-yellow",
    classes: [Class.Brute],
    defaultImage: "SUP165",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Brutus,Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Vigorous Smashup",
    printings: [{
        artists: ["Phu Thieu"],
      
      identifier: "SUP165",
      image: "SUP165",
      
      
      print: "SUP165",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP165"],
    sets: [Release.SuperSlam],
    specialImage: "SUP165",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this defends, **clash** with the attacking hero. The winner creates a Vigor token. You may put your revealed card on the bottom of its owner's deck.`,
    
    
    
    
    keywords: [Keyword.Clash],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Phu Thieu"],
    cardIdentifier: "vigorous-smashup-blue",
    classes: [Class.Brute],
    defaultImage: "SUP166",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Brutus,Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Vigorous Smashup",
    printings: [{
        artists: ["Phu Thieu"],
      
      identifier: "SUP166",
      image: "SUP166",
      
      
      print: "SUP166",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP166"],
    sets: [Release.SuperSlam],
    specialImage: "SUP166",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this defends, **clash** with the attacking hero. The winner creates a Vigor token. You may put your revealed card on the bottom of its owner's deck.`,
    
    
    
    
    keywords: [Keyword.Clash],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "villainous-pose-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP120",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Villainous Pose",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SUP120",
      image: "SUP120",
      
      
      print: "SUP120",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP120"],
    sets: [Release.SuperSlam],
    specialImage: "SUP120",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Reviled Action",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `Your next attack this turn gets +4{p}.

**The crowd boos** you.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.TheCrowdBoos],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "villainous-pose-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP121",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Villainous Pose",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SUP121",
      image: "SUP121",
      
      
      print: "SUP121",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP121"],
    sets: [Release.SuperSlam],
    specialImage: "SUP121",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Reviled Action",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `Your next attack this turn gets +3{p}.

**The crowd boos** you.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.TheCrowdBoos],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "villainous-pose-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP122",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Villainous Pose",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SUP122",
      image: "SUP122",
      
      
      print: "SUP122",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP122"],
    sets: [Release.SuperSlam],
    specialImage: "SUP122",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Reviled Action",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `Your next attack this turn gets +2{p}.

**The crowd boos** you.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.TheCrowdBoos],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Leo Avero"],
    cardIdentifier: "virtuoso-bodice",
    classes: [Class.Guardian],
    defaultImage: "SUP273",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Taylor,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Virtuoso Bodice",
    printings: [{
        artists: ["Leo Avero"],
      
      identifier: "SUP273",
      image: "SUP273",
      isExpansionSlot: true,
      
      print: "SUP273",
      rarity: Rarity.Majestic,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["APS005","SUP273"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP273",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Guardian Equipment - Chest",

    
    
    
    defense: 2,
    
    functionalText: `When this defends, you may remove a suspense counter from an aura you control. If you do, gain {r}{r}.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    meta: [Meta.Expansion],
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Anna Kovalevskaya"],
    cardIdentifier: "visit-the-boneyard-blue",
    classes: [Class.Brute],
    defaultImage: "SUP139",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Visit the Boneyard",
    printings: [{
        artists: ["Anna Kovalevskaya"],
      
      identifier: "SUP139",
      image: "SUP139",
      
      
      print: "SUP139",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP139"],
    sets: [Release.SuperSlam],
    specialImage: "SUP139",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Brute Instant",

    
    
    cost: 0,
    
    
    functionalText: `Put a card with 6 or more {p} from your graveyard on top of your deck.

Create a Vigor token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Arif Wijaya","Carlos Cruchaga"],
    cardIdentifier: "warmongers-diplomacy-blue",
    classes: [Class.Generic],
    defaultImage: "SUP270",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Genis,Hero.GravyBones,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Warmonger's Diplomacy",
    printings: [{
        artists: ["Arif Wijaya"],
      
      identifier: "SUP270",
      image: "SUP270",
      isExpansionSlot: true,
      
      print: "SUP270-Alternate Art",
      rarity: Rarity.Legendary,
      set: Release.SuperSlam,
      
      treatment: Treatment.AA,treatments: [Treatment.AA],
    },{
        artists: ["Arif Wijaya"],
      foiling: Foiling.C,
      identifier: "SUP270",
      image: "SUP270",
      isExpansionSlot: true,
      
      print: "SUP270-Cold-Alternate Art",
      rarity: Rarity.Legendary,
      set: Release.SuperSlam,
      
      treatment: Treatment.AA,treatments: [Treatment.AA],
    },],
    rarities: [Rarity.Legendary,Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["DTD230","SUP270"],
    sets: [Release.DuskTillDawn,Release.SuperSlam],
    specialImage: "SUP270",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Starting with the hero to your left, each hero chooses war or peace.

If they choose war, the only actions they may play or activate during their next turn are weapon and attack actions.

If they choose peace, the only actions they may play or activate during their next turn are non-weapon non-attack actions.`,
    
    
    
    
    
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 3,
    
    restrictedFormats: [Format.ClassicConstructedLivingLegend],
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Brian Adriel"],
    cardIdentifier: "wee-wrecking-ball-yellow",
    classes: [Class.Guardian],
    defaultImage: "SUP194",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Wee Wrecking Ball",
    printings: [{
        artists: ["Brian Adriel"],
      
      identifier: "SUP194",
      image: "SUP194",
      
      
      print: "SUP194",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP194"],
    sets: [Release.SuperSlam],
    specialImage: "SUP194",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If this has {p} greater than its base, it gets +1{p}.

**Crush** - When this deals 4 or more damage to a hero, destroy a card in their arsenal.`,
    
    
    
    
    keywords: [Keyword.Crush],
    
    
    
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "what-happens-next-blue",
    classes: [Class.Guardian],
    defaultImage: "SUP209",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "What Happens Next?",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "SUP209",
      image: "SUP209",
      
      
      print: "SUP209",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },{
        artists: ["Tomasz Jedruszek"],
      foiling: Foiling.C,
      identifier: "SUP209",
      image: "SUP209_V2",
      
      
      print: "SUP209-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["APS029","SUP209"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP209_V2",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Guardian Instant - Aura",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `**Suspense**

The first card with cost 1 or more you play each turn costs {r} less to play.`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "who-blinks-first-blue",
    classes: [Class.Guardian],
    defaultImage: "SUP177",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Who Blinks First?",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "SUP177",
      image: "SUP177",
      
      
      print: "SUP177",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP177"],
    sets: [Release.SuperSlam],
    specialImage: "SUP177",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Guardian Instant - Aura",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `**Suspense**

When this leaves the arena, you may destroy an aura permanent that a Guardian hero controls.`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikolay Moskvin"],
    cardIdentifier: "whos-the-tough-guy-red",
    classes: [Class.NotClassed],
    defaultImage: "SUP052",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Who's the Tough Guy?",
    printings: [{
        artists: ["Nikolay Moskvin"],
      
      identifier: "SUP052",
      image: "SUP052",
      
      
      print: "SUP052",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP052"],
    sets: [Release.SuperSlam],
    specialImage: "SUP052",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When the combat chain closes, if this didn't hit, the defending hero creates a Toughness token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Nikolay Moskvin"],
    cardIdentifier: "whos-the-tough-guy-yellow",
    classes: [Class.NotClassed],
    defaultImage: "SUP053",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Who's the Tough Guy?",
    printings: [{
        artists: ["Nikolay Moskvin"],
      
      identifier: "SUP053",
      image: "SUP053",
      
      
      print: "SUP053",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP053"],
    sets: [Release.SuperSlam],
    specialImage: "SUP053",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When the combat chain closes, if this didn't hit, the defending hero creates a Toughness token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Nikolay Moskvin"],
    cardIdentifier: "whos-the-tough-guy-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP054",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Who's the Tough Guy?",
    printings: [{
        artists: ["Nikolay Moskvin"],
      
      identifier: "SUP054",
      image: "SUP054",
      
      
      print: "SUP054",
      rarity: Rarity.Common,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["SUP054"],
    sets: [Release.SuperSlam],
    specialImage: "SUP054",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When the combat chain closes, if this didn't hit, the defending hero creates a Toughness token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "will-of-the-crowd-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP035",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades,Hero.Tuffnut],
    name: "Will of the Crowd",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "SUP035",
      image: "SUP035",
      
      
      print: "SUP035",
      rarity: Rarity.Rare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["SUP035"],
    sets: [Release.SuperSlam],
    specialImage: "SUP035",
    subtypes: [],
    types: [Type.Block],
    typeText: "Revered Block",

    
    
    
    defense: 2,
    
    functionalText: `When this defends, if you've been cheered this turn, defending action cards get +3{d} this chain link.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "wind-up-the-crowd-blue",
    classes: [Class.Brute],
    defaultImage: "SUP006",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Tuffnut],
    name: "Wind Up the Crowd",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "SUP006",
      image: "SUP006",
      
      
      print: "SUP006",
      rarity: Rarity.SuperRare,
      set: Release.SuperSlam,
      
      
    },],
    rarities: [Rarity.SuperRare],
    rarity: Rarity.SuperRare,
    setIdentifiers: ["SUP006"],
    sets: [Release.SuperSlam],
    specialImage: "SUP006",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Revered Brute Action - Attack",

    
    
    cost: 3,
    defense: 0,
    
    functionalText: `**Instant** - Discard this: Create a Toughness and a Vigor token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  }];

  export const cards: Card[] =  [
    ...cards1,
    ...cards2,
    ...cards3,
    ...cards4,
  ];
  