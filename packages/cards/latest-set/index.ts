
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
    Shorthand,
    Subtype,
    Talent,
    Trait,
    Treatment,
    Type 
  } from '@flesh-and-blood/types';

  const cards1: Card[] = [{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "aphrodias",
    classes: [Class.Illusionist],
    defaultImage: "OMN003",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Aphrodias",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "OMN003",
      image: "OMN003",
      
      
      print: "OMN003",
      rarity: Rarity.Basic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Basic,Rarity.Common],
    rarity: Rarity.Basic,
    setIdentifiers: ["AZS002","OMN003"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
    specialImage: "OMN003",
    subtypes: [Subtype.TwoHanded,Subtype.Orb],
    types: [Type.Weapon],
    typeText: "Lightning Illusionist Weapon - Orb (2H)",

    arcane: 2,
    
    
    
    
    functionalText: `**Instant** - {r}, {t}: Deal 2 arcane damage to target hero. Activate this only if an aura with a holo counter has entered the arena under your control this turn.`,
    
    
    
    
    
    
    
    
  
    
    
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Petrinda Wiyugo"],
    cardIdentifier: "arc-ramp-red",
    classes: [Class.Wizard],
    defaultImage: "OMN100",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Arc Ramp",
    printings: [{
        artists: ["Petrinda Wiyugo"],
      
      identifier: "OMN100",
      image: "OMN100",
      
      
      print: "OMN100",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN100"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN100",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `**Amp 3**

You may destroy a Lightning Flow you control. If you do, this gets **go again**.`,
    
    
    
    
    keywords: [Keyword.Amp,Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Petrinda Wiyugo"],
    cardIdentifier: "arc-ramp-yellow",
    classes: [Class.Wizard],
    defaultImage: "OMN101",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Arc Ramp",
    printings: [{
        artists: ["Petrinda Wiyugo"],
      
      identifier: "OMN101",
      image: "OMN101",
      
      
      print: "OMN101",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN101"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN101",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `**Amp 2**

You may destroy a Lightning Flow you control. If you do, this gets **go again**.`,
    
    
    
    
    keywords: [Keyword.Amp,Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Petrinda Wiyugo"],
    cardIdentifier: "arc-ramp-blue",
    classes: [Class.Wizard],
    defaultImage: "OMN102",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Arc Ramp",
    printings: [{
        artists: ["Petrinda Wiyugo"],
      
      identifier: "OMN102",
      image: "OMN102",
      
      
      print: "OMN102",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN102"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN102",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `**Amp 1**

You may destroy a Lightning Flow you control. If you do, this gets **go again**.`,
    
    
    
    
    keywords: [Keyword.Amp,Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Sariya Asavametha"],
    cardIdentifier: "astral-strike-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN145",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Astral Strike",
    printings: [{
        artists: ["Sariya Asavametha"],
      
      identifier: "OMN145",
      image: "OMN145",
      
      
      print: "OMN145",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["FAB469","OMN145"],
    sets: [Release.OmensOfTheThirdAge,Release.Promos],
    specialImage: "OMN145",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this attacks, if you've destroyed a Lightning Flow this turn, choose 1;

- Draw a card.
- This gets +2{p}.
- This gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
  
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Flora Silve"],
    cardIdentifier: "auric-shards-red",
    classes: [Class.Illusionist],
    defaultImage: "OMN027",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Auric Shards",
    printings: [{
        artists: ["Flora Silve"],
      
      identifier: "OMN027",
      image: "OMN027",
      
      
      print: "OMN027",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN027"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN027",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Illusionist Instant - Aura",

    
    
    cost: 1,
    
    
    functionalText: `When this enters the arena, up to 1 target attack with fragment gets +1{p}. If this has a holo counter, instead the attack gets +4{p}.

**Ward 1**`,
    
    
    
    
    keywords: [Keyword.Ward],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Flora Silve"],
    cardIdentifier: "auric-shards-yellow",
    classes: [Class.Illusionist],
    defaultImage: "OMN028",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Auric Shards",
    printings: [{
        artists: ["Flora Silve"],
      
      identifier: "OMN028",
      image: "OMN028",
      
      
      print: "OMN028",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN028"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN028",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Illusionist Instant - Aura",

    
    
    cost: 1,
    
    
    functionalText: `When this enters the arena, up to 1 target attack with fragment gets +1{p}. If this has a holo counter, instead the attack gets +3{p}.

**Ward 1**`,
    
    
    
    
    keywords: [Keyword.Ward],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Flora Silve"],
    cardIdentifier: "auric-shards-blue",
    classes: [Class.Illusionist],
    defaultImage: "OMN029",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Auric Shards",
    printings: [{
        artists: ["Flora Silve"],
      
      identifier: "OMN029",
      image: "OMN029",
      
      
      print: "OMN029",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN029"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN029",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Illusionist Instant - Aura",

    
    
    cost: 1,
    
    
    functionalText: `When this enters the arena, up to 1 target attack with fragment gets +1{p}. If this has a holo counter, instead the attack gets +2{p}.

**Ward 1**`,
    
    
    
    
    keywords: [Keyword.Ward],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Asur Misoa"],
    cardIdentifier: "aurora-emissary-of-lightning",
    classes: [Class.Runeblade],
    defaultImage: "OMN048",
    legalFormats: [Format.Blitz,Format.Clash,Format.Draft,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora2],
    name: "Aurora, Emissary of Lightning",
    printings: [{
        artists: ["Asur Misoa"],
      
      identifier: "OMN048",
      image: "OMN048",
      
      
      print: "OMN048",
      rarity: Rarity.Basic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Asur Misoa"],
      foiling: Foiling.C,
      identifier: "OMN048",
      image: "OMN048-MV",
      
      
      print: "OMN048-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Asur Misoa"],
      foiling: Foiling.C,
      identifier: "OMN048",
      image: "OMN048-MV_BACK",
      
      
      print: "OMN048-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["OMN048"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN048-MV",
    subtypes: [Subtype.Young],
    types: [Type.Hero],
    typeText: "Lightning Runeblade Hero - Young",

    
    
    
    
    
    functionalText: `**Instant** - {r}{r}, {t}, destroy a Lightning Flow you control: Create an Embodiment of Lightning token.`,
    
    hero: Hero.Aurora2,
    intellect: 4,
    
    
    
    life: 20,
    
  
    
    
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  young: true
  },{
    artists: ["Asur Misoa"],
    cardIdentifier: "aurora-legacy-of-tempest",
    classes: [Class.Runeblade],
    defaultImage: "OMN047",
    legalFormats: [Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open],
    legalHeroes: [Hero.Aurora2],
    name: "Aurora, Legacy of Tempest",
    printings: [{
        artists: ["Asur Misoa"],
      
      identifier: "OMN047",
      image: "OMN047",
      
      
      print: "OMN047",
      rarity: Rarity.Basic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Asur Misoa"],
      foiling: Foiling.C,
      identifier: "OMN047",
      image: "OMN047-MV",
      
      
      print: "OMN047-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Asur Misoa"],
      foiling: Foiling.C,
      identifier: "OMN047",
      image: "OMN047-MV_BACK",
      
      
      print: "OMN047-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["OMN047"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN047-MV",
    subtypes: [],
    types: [Type.Hero],
    typeText: "Lightning Runeblade Hero",

    
    
    
    
    
    functionalText: `**Instant** - {r}{r}, {t}, destroy a Lightning Flow you control: Create an Embodiment of Lightning token.`,
    
    hero: Hero.Aurora2,
    intellect: 4,
    
    
    
    life: 40,
    
  
    
    
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["SanSan"],
    cardIdentifier: "beckoning-brilliance-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN148",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Beckoning Brilliance",
    printings: [{
        artists: ["SanSan"],
      
      identifier: "OMN148",
      image: "OMN148",
      
      
      print: "OMN148",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN148"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN148",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, the next instant card you play this chain link costs {r} less to play.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Amtepra"],
    cardIdentifier: "blink-of-an-eye-red",
    classes: [Class.Illusionist],
    defaultImage: "OMN006",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Blink of an Eye",
    printings: [{
        artists: ["Amtepra"],
      
      identifier: "OMN006",
      image: "OMN006",
      
      
      print: "OMN006",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN006"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN006",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Illusionist Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `Whenever this fragments, you may banish a Lightning aura permanent you control with no holo counters, then return it to the arena with a holo counter.

**Fragment**`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["João G. Santos"],
    cardIdentifier: "boots-of-omnis-ward",
    classes: [Class.Generic],
    defaultImage: "OMN204",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Boots of Omnis Ward",
    printings: [{
        artists: ["João G. Santos"],
      foiling: Foiling.R,
      identifier: "OMN204",
      image: "OMN204",
      
      
      print: "OMN204-Rainbow",
      rarity: Rarity.Legendary,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["João G. Santos"],
      foiling: Foiling.C,
      identifier: "OMN204",
      image: "OMN204",
      
      
      print: "OMN204-Cold",
      rarity: Rarity.Legendary,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Legendary],
    rarity: Rarity.Legendary,
    setIdentifiers: ["OMN204"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN204",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Legs",

    
    
    
    defense: 1,
    
    functionalText: `If you've been dealt arcane damage this turn, this gets +1{d}.

**Instant** - {t} your hero, destroy this: Prevent the next 1 damage that would be dealt to you this turn.`,
    
    
    
    
    keywords: [Keyword.Temper],
    
    
    
  
    
    
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Amirul HHF"],
    cardIdentifier: "circular-flowtide-yellow",
    classes: [Class.Illusionist],
    defaultImage: "OMN033",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Circular Flowtide",
    printings: [{
        artists: ["Amirul HHF"],
      
      identifier: "OMN033",
      image: "OMN033",
      
      
      print: "OMN033",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Amirul HHF"],
      foiling: Foiling.C,
      identifier: "OMN033",
      image: "OMN033-CF",
      
      
      print: "OMN033-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN033"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN033-CF",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Illusionist Instant - Aura",

    
    
    cost: 1,
    
    
    functionalText: `When this leaves the arena, create a Lightning Flow token.

**Ward 2**`,
    
    
    
    
    keywords: [Keyword.Ward],
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "core-reaction-red",
    classes: [Class.Wizard],
    defaultImage: "OMN103",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Core Reaction",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "OMN103",
      image: "OMN103",
      
      
      print: "OMN103",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN103"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN103",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Wizard Instant - Aura",

    arcane: 4,
    
    cost: 2,
    
    
    functionalText: `At the beginning of your action phase, destroy this and deal 4 arcane damage to any target.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "core-reaction-yellow",
    classes: [Class.Wizard],
    defaultImage: "OMN104",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Core Reaction",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "OMN104",
      image: "OMN104",
      
      
      print: "OMN104",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN104"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN104",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Wizard Instant - Aura",

    arcane: 3,
    
    cost: 2,
    
    
    functionalText: `At the beginning of your action phase, destroy this and deal 3 arcane damage to any target.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "core-reaction-blue",
    classes: [Class.Wizard],
    defaultImage: "OMN105",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Core Reaction",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "OMN105",
      image: "OMN105",
      
      
      print: "OMN105",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN105"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN105",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Wizard Instant - Aura",

    arcane: 2,
    
    cost: 2,
    
    
    functionalText: `At the beginning of your action phase, destroy this and deal 2 arcane damage to any target.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["YDZ"],
    cardIdentifier: "cosmic-duality-red",
    classes: [Class.Illusionist],
    defaultImage: "OMN015",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Cosmic Duality",
    printings: [{
        artists: ["YDZ"],
      
      identifier: "OMN015",
      image: "OMN015",
      
      
      print: "OMN015",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Marvel],
    rarity: Rarity.Common,
    setIdentifiers: ["FAB464","OMN015"],
    sets: [Release.OmensOfTheThirdAge,Release.Promos],
    specialImage: "OMN015",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Illusionist Action - Attack",

    arcane: 1,
    
    cost: 2,
    defense: 3,
    
    functionalText: `**Instant** - {r}, discard this: Deal 1 arcane damage to target hero. Create a Lightning Flow token.

**Fragment**`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["YDZ"],
    cardIdentifier: "cosmic-duality-yellow",
    classes: [Class.Illusionist],
    defaultImage: "OMN016",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Cosmic Duality",
    printings: [{
        artists: ["YDZ"],
      
      identifier: "OMN016",
      image: "OMN016",
      
      
      print: "OMN016",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN016"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN016",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Illusionist Action - Attack",

    arcane: 1,
    
    cost: 2,
    defense: 3,
    
    functionalText: `**Instant** - {r}, discard this: Deal 1 arcane damage to target hero. Create a Lightning Flow token.

**Fragment**`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["YDZ"],
    cardIdentifier: "cosmic-duality-blue",
    classes: [Class.Illusionist],
    defaultImage: "OMN017",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Cosmic Duality",
    printings: [{
        artists: ["YDZ"],
      
      identifier: "OMN017",
      image: "OMN017",
      
      
      print: "OMN017",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN017"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN017",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Illusionist Action - Attack",

    arcane: 1,
    
    cost: 2,
    defense: 3,
    
    functionalText: `**Instant** - {r}, discard this: Deal 1 arcane damage to target hero. Create a Lightning Flow token.

**Fragment**`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Arif Restu"],
    cardIdentifier: "cosmic-suture-red",
    classes: [Class.Wizard],
    defaultImage: "OMN127",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Cosmic Suture",
    printings: [{
        artists: ["Arif Restu"],
      
      identifier: "OMN127",
      image: "OMN127",
      
      
      print: "OMN127",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN127"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN127",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Wizard Instant",

    
    
    cost: 2,
    
    
    functionalText: `Prevent the next 4 damage that would be dealt to you this turn.

**Starfall** - If an instant card has been put into your graveyard this turn, deal 1 arcane damage to target hero.`,
    
    
    
    
    keywords: [Keyword.Starfall],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Arif Restu"],
    cardIdentifier: "cosmic-suture-yellow",
    classes: [Class.Wizard],
    defaultImage: "OMN128",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Cosmic Suture",
    printings: [{
        artists: ["Arif Restu"],
      
      identifier: "OMN128",
      image: "OMN128",
      
      
      print: "OMN128",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN128"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN128",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Wizard Instant",

    
    
    cost: 2,
    
    
    functionalText: `Prevent the next 3 damage that would be dealt to you this turn.

**Starfall** - If an instant card has been put into your graveyard this turn, deal 1 arcane damage to target hero.`,
    
    
    
    
    keywords: [Keyword.Starfall],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Arif Restu"],
    cardIdentifier: "cosmic-suture-blue",
    classes: [Class.Wizard],
    defaultImage: "OMN129",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Cosmic Suture",
    printings: [{
        artists: ["Arif Restu"],
      
      identifier: "OMN129",
      image: "OMN129",
      
      
      print: "OMN129",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN129"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN129",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Wizard Instant",

    
    
    cost: 2,
    
    
    functionalText: `Prevent the next 2 damage that would be dealt to you this turn.

**Starfall** - If an instant card has been put into your graveyard this turn, deal 1 arcane damage to target hero.`,
    
    
    
    
    keywords: [Keyword.Starfall],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Vincent Taslim"],
    cardIdentifier: "dashing-flashfoot-yellow",
    classes: [Class.Runeblade],
    defaultImage: "OMN053",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Dashing Flashfoot",
    printings: [{
        artists: ["Vincent Taslim"],
      
      identifier: "OMN053",
      image: "OMN053",
      
      
      print: "OMN053",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN053"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN053",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 1,
    defense: 3,
    
    functionalText: `**Quickstrike** - If this has go again, it gets +1{p} and "When this attacks a hero, deal 1 arcane damage to them."

The first time this deals damage to a hero, create an Embodiment of Lightning token.`,
    
    
    
    
    keywords: [Keyword.Quickstrike],
    
    
    
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Narendra B Adi"],
    cardIdentifier: "echoflash-yellow",
    classes: [Class.Wizard],
    defaultImage: "OMN099",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Echoflash",
    printings: [{
        artists: ["Narendra B Adi"],
      
      identifier: "OMN099",
      image: "OMN099",
      
      
      print: "OMN099",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN099"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN099",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Wizard Instant",

    arcane: 1,
    
    cost: 1,
    
    
    functionalText: `Deal 1 arcane damage to target hero.

When this is put into your graveyard from anywhere, your hero deals 1 arcane damage to target hero.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Phy Thieu"],
    cardIdentifier: "feral-instinct-yellow",
    classes: [Class.Brute],
    defaultImage: "OMN229",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Feral Instinct",
    printings: [{
        artists: ["Phy Thieu"],
      
      identifier: "OMN229",
      image: "OMN229",
      isExpansionSlot: true,
      
      print: "OMN229",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Phy Thieu"],
      foiling: Foiling.C,
      identifier: "OMN229",
      image: "OMN229-CF",
      
      
      print: "OMN229-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN229"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN229-CF",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `If you've intimidated an opponent this turn, this costs {r}{r}{r} less to play.`,
    
    
    
    
    
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 2,
    power: 6,
    
    shorthands: [Shorthand.Poppers],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Athiwut B."],
    cardIdentifier: "flicker-reality-blue",
    classes: [Class.Illusionist],
    defaultImage: "OMN005",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Flicker Reality",
    printings: [{
        artists: ["Athiwut B."],
      
      identifier: "OMN005",
      image: "OMN005",
      
      
      print: "OMN005",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN005"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN005",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Illusionist Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `When this leaves the arena, you may banish another Lightning aura permanent you control with no holo counters, then return it to the arena with a holo counter.

**Ward 1**`,
    
    
    
    
    keywords: [Keyword.Ward],
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "flowing-stormstrike-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN152",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Flowing Stormstrike",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "OMN152",
      image: "OMN152",
      
      
      print: "OMN152",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["FAB471","OMN152"],
    sets: [Release.OmensOfTheThirdAge,Release.Promos],
    specialImage: "OMN152",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `**Twice per Turn Instant** - {r}: This gets +1{p}.

When this hits, create a Lightning Flow token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Olga Tereshenko"],
    cardIdentifier: "flowstate-embodiment-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN146",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Flowstate Embodiment",
    printings: [{
        artists: ["Olga Tereshenko"],
      
      identifier: "OMN146",
      image: "OMN146",
      
      
      print: "OMN146",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic,Rarity.Promo],
    rarity: Rarity.Majestic,
    setIdentifiers: ["FAB476","OMN146"],
    sets: [Release.OmensOfTheThirdAge,Release.Promos],
    specialImage: "OMN146",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Whenever you play an instant card this chain link, create an Embodiment of Lightning or Lightning Flow token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Alifka Hammam"],
    cardIdentifier: "lightning-flow",
    classes: [Class.NotClassed],
    defaultImage: "OMN203",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Florian,Hero.Iyslander,Hero.Jarl,Hero.Lexi,Hero.Oldhim,Hero.Oscilio,Hero.Shiyana,Hero.Starvo,Hero.Terra,Hero.Verdance,Hero.Yorick,Hero.Zyggy],
    name: "Lightning Flow",
    printings: [{
        artists: ["Alifka Hammam"],
      
      identifier: "OMN203",
      image: "OMN203",
      
      
      print: "OMN203",
      rarity: Rarity.Basic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Alifka Hammam"],
      foiling: Foiling.C,
      identifier: "OMN203",
      image: "OMN203-MVA",
      
      
      print: "OMN203-Cold-Alternate Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.AA,treatments: [Treatment.AA,Treatment.FA],
    },{
        artists: ["Alifka Hammam"],
      foiling: Foiling.C,
      identifier: "OMN203",
      image: "OMN203-MVB",
      
      
      print: "OMN203-Cold-Alternate Art-V2",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.AA,treatments: [Treatment.AA,Treatment.FA],
    },{
        artists: ["Alifka Hammam"],
      foiling: Foiling.C,
      identifier: "OMN203",
      image: "OMN203-MVC",
      
      
      print: "OMN203-Cold-Alternate Art-V3",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.AA,treatments: [Treatment.AA,Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["OMN203"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN203-MVC",
    subtypes: [Subtype.Aura],
    types: [Type.Token],
    typeText: "Elemental Token - Aura",

    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Elemental],
  
  
  },{
    artists: ["Galih M"],
    cardIdentifier: "lionclaw-maul",
    classes: [Class.Guardian],
    defaultImage: "OMN247",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath],
    name: "Lionclaw Maul",
    printings: [{
        artists: ["Galih M"],
      
      identifier: "OMN247",
      image: "OMN247",
      isExpansionSlot: true,
      
      print: "OMN247",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN247"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN247",
    subtypes: [Subtype.OneHanded,Subtype.Axe,Subtype.Hammer],
    types: [Type.Weapon],
    typeText: "Reviled Guardian Weapon - Hammer Axe (1H)",

    
    
    
    
    
    functionalText: `**Action** - {r}{r}, {t}: **Attack**

If this has {p} greater than its base, it gets +1{p}.

When this hits a hero, **the crowd boos** you.`,
    
    
    
    
    keywords: [Keyword.TheCrowdBoos],
    
    
    meta: [Meta.Expansion],
  
    
    
    power: 1,
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Reviled],
  
  
  },{
    artists: ["Daria Khlebnikova"],
    cardIdentifier: "mercurial-skies-red",
    classes: [Class.Runeblade],
    defaultImage: "OMN059",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Mercurial Skies",
    printings: [{
        artists: ["Daria Khlebnikova"],
      
      identifier: "OMN059",
      image: "OMN059",
      
      
      print: "OMN059",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN059"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN059",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action",

    arcane: 3,
    
    cost: 0,
    defense: 2,
    
    functionalText: `The next Runeblade or Lightning attack action card you play this turn gets **go again** and "The first time this deals damage to a hero, you may destroy a Lightning Flow you control. If you do, deal 3 arcane damage to them."

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Daria Khlebnikova"],
    cardIdentifier: "mercurial-skies-yellow",
    classes: [Class.Runeblade],
    defaultImage: "OMN060",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Mercurial Skies",
    printings: [{
        artists: ["Daria Khlebnikova"],
      
      identifier: "OMN060",
      image: "OMN060",
      
      
      print: "OMN060",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN060"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN060",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action",

    arcane: 2,
    
    cost: 0,
    defense: 2,
    
    functionalText: `The next Runeblade or Lightning attack action card you play this turn gets **go again** and "The first time this deals damage to a hero, you may destroy a Lightning Flow you control. If you do, deal 2 arcane damage to them."

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Daria Khlebnikova"],
    cardIdentifier: "mercurial-skies-blue",
    classes: [Class.Runeblade],
    defaultImage: "OMN061",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Mercurial Skies",
    printings: [{
        artists: ["Daria Khlebnikova"],
      
      identifier: "OMN061",
      image: "OMN061",
      
      
      print: "OMN061",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN061"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN061",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action",

    arcane: 1,
    
    cost: 0,
    defense: 2,
    
    functionalText: `The next Runeblade or Lightning attack action card you play this turn gets **go again** and "The first time this deals damage to a hero, you may destroy a Lightning Flow you control. If you do, deal 1 arcane damage to them."

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "meteoric-rise-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN153",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Meteoric Rise",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "OMN153",
      image: "OMN153",
      
      
      print: "OMN153",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["FAB472","OMN153"],
    sets: [Release.OmensOfTheThirdAge,Release.Promos],
    specialImage: "OMN153",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `**Twice per Turn Instant** - {r}: This gets +1{p}.

When this hits, create a Lightning Flow token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Yiian Kho"],
    cardIdentifier: "nebula-duality-red",
    classes: [Class.Wizard],
    defaultImage: "OMN121",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Nebula Duality",
    printings: [{
        artists: ["Yiian Kho"],
      
      identifier: "OMN121",
      image: "OMN121",
      
      
      print: "OMN121",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Marvel],
    rarity: Rarity.Common,
    setIdentifiers: ["FAB465","OMN121"],
    sets: [Release.OmensOfTheThirdAge,Release.Promos],
    specialImage: "OMN121",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Action",

    arcane: 3,
    
    cost: 0,
    defense: 3,
    
    functionalText: `Deal 3 arcane damage to any target.

**Instant** - {r}, discard this: Deal 1 arcane damage to target hero. Create a Lightning Flow token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Yiian Kho"],
    cardIdentifier: "nebula-duality-yellow",
    classes: [Class.Wizard],
    defaultImage: "OMN122",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Nebula Duality",
    printings: [{
        artists: ["Yiian Kho"],
      
      identifier: "OMN122",
      image: "OMN122",
      
      
      print: "OMN122",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN122"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN122",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Action",

    arcane: 2,
    
    cost: 0,
    defense: 3,
    
    functionalText: `Deal 2 arcane damage to any target.

**Instant** - {r}, discard this: Deal 1 arcane damage to target hero. Create a Lightning Flow token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Yiian Kho"],
    cardIdentifier: "nebula-duality-blue",
    classes: [Class.Wizard],
    defaultImage: "OMN123",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Nebula Duality",
    printings: [{
        artists: ["Yiian Kho"],
      
      identifier: "OMN123",
      image: "OMN123",
      
      
      print: "OMN123",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN123"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN123",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Action",

    arcane: 1,
    
    cost: 0,
    defense: 3,
    
    functionalText: `Deal 1 arcane damage to any target.

**Instant** - {r}, discard this: Deal 1 arcane damage to target hero. Create a Lightning Flow token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Jessada Sutthi"],
    cardIdentifier: "omens-of-arcana",
    classes: [Class.NotClassed],
    defaultImage: "OMN227",
    legalFormats: [Format.Draft,Format.Open,Format.Sealed],
    legalHeroes: [Hero.Aurora,Hero.Oscilio,Hero.Zyggy],
    name: "Omens of Arcana",
    printings: [{
        artists: ["Jessada Sutthi"],
      
      identifier: "OMN227",
      image: "OMN227",
      
      
      print: "OMN227",
      rarity: Rarity.Basic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["FAB467","OMN227"],
    sets: [Release.OmensOfTheThirdAge,Release.Promos],
    specialImage: "OMN227",
    subtypes: [],
    types: [Type.Macro],
    typeText: "Omens of the Third Age Macro",

    
    
    
    
    
    functionalText: `Each hero starts the game with a Lightning Flow token.

Lightning Flow tokens get **spellvoid 1**`,
    
    
    
    
    keywords: [Keyword.Spellvoid],
    
    
    metatypes: [Metatype.OmensOfTheThirdAge],
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ausonia"],
    cardIdentifier: "ominous-aggression-red",
    classes: [Class.Generic],
    defaultImage: "OMN216",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Ominous Aggression",
    printings: [{
        artists: ["Ausonia"],
      
      identifier: "OMN216",
      image: "OMN216",
      
      
      print: "OMN216",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN216"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN216",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Generic Instant",

    
    
    cost: 2,
    
    
    functionalText: `Target attack action card gets +2{p}. If an aura you control was destroyed this turn, instead the card gets +4{p}.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "oscilio-forked-continuum",
    classes: [Class.Wizard],
    defaultImage: "OMN094",
    legalFormats: [Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open],
    legalHeroes: [Hero.Broscilio],
    name: "Oscilio, Forked Continuum",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "OMN094",
      image: "OMN094",
      
      
      print: "OMN094",
      rarity: Rarity.Basic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.C,
      identifier: "OMN094",
      image: "OMN094-MV",
      
      
      print: "OMN094-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.C,
      identifier: "OMN094",
      image: "OMN094-MV_BACK",
      
      
      print: "OMN094-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["OMN094"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN094-MV",
    subtypes: [],
    types: [Type.Hero],
    typeText: "Lightning Wizard Hero",

    
    
    
    
    
    functionalText: `**Instant** - {r}, {t}, destroy a Lightning Flow you control: Discard a card and create a Ponder token. If an instant is discard this way, you may play it this turn.`,
    
    hero: Hero.Broscilio,
    intellect: 4,
    
    
    
    life: 38,
    
  
    
    
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "oscilio-scion-of-the-third-age",
    classes: [Class.Wizard],
    defaultImage: "OMN095",
    legalFormats: [Format.Blitz,Format.Clash,Format.Draft,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio],
    name: "Oscilio, Scion of the Third Age",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "OMN095",
      image: "OMN095",
      
      
      print: "OMN095",
      rarity: Rarity.Basic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.C,
      identifier: "OMN095",
      image: "OMN095-MV",
      
      
      print: "OMN095-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.C,
      identifier: "OMN095",
      image: "OMN095-MV_BACK",
      
      
      print: "OMN095-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["OMN095"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN095-MV",
    subtypes: [Subtype.Young],
    types: [Type.Hero],
    typeText: "Lightning Wizard Hero - Young",

    
    
    
    
    
    functionalText: `**Instant** - {r}, {t}, destroy a Lightning Flow you control: Discard a card and create a Ponder token. If an instant is discard this way, you may play it this turn.`,
    
    hero: Hero.Broscilio,
    intellect: 4,
    
    
    
    life: 19,
    
  
    
    
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  young: true
  },{
    artists: ["Esty Swandana"],
    cardIdentifier: "pulsing-cardia-red",
    classes: [Class.Illusionist],
    defaultImage: "OMN021",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Pulsing Cardia",
    printings: [{
        artists: ["Esty Swandana"],
      
      identifier: "OMN021",
      image: "OMN021",
      
      
      print: "OMN021",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN021"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN021",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Illusionist Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Whenever this fragments, gain {r}.

**Fragment**`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Esty Swandana"],
    cardIdentifier: "pulsing-cardia-yellow",
    classes: [Class.Illusionist],
    defaultImage: "OMN022",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Pulsing Cardia",
    printings: [{
        artists: ["Esty Swandana"],
      
      identifier: "OMN022",
      image: "OMN022",
      
      
      print: "OMN022",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN022"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN022",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Illusionist Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Whenever this fragments, gain {r}.

**Fragment**`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Esty Swandana"],
    cardIdentifier: "pulsing-cardia-blue",
    classes: [Class.Illusionist],
    defaultImage: "OMN023",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Pulsing Cardia",
    printings: [{
        artists: ["Esty Swandana"],
      
      identifier: "OMN023",
      image: "OMN023",
      
      
      print: "OMN023",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN023"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN023",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Illusionist Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Whenever this fragments, gain {r}.

**Fragment**`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Alif Zahrah"],
    cardIdentifier: "rift-breaker-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN155",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Rift Breaker",
    printings: [{
        artists: ["Alif Zahrah"],
      
      identifier: "OMN155",
      image: "OMN155",
      
      
      print: "OMN155",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN155"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN155",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this hits a hero, destroy a Lightning Flow token they control.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 6,
    
    shorthands: [Shorthand.Poppers],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Alif Zahrah"],
    cardIdentifier: "rift-breaker-yellow",
    classes: [Class.NotClassed],
    defaultImage: "OMN156",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Rift Breaker",
    printings: [{
        artists: ["Alif Zahrah"],
      
      identifier: "OMN156",
      image: "OMN156",
      
      
      print: "OMN156",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN156"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN156",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this hits a hero, destroy a Lightning Flow token they control.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Alif Zahrah"],
    cardIdentifier: "rift-breaker-blue",
    classes: [Class.NotClassed],
    defaultImage: "OMN157",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Rift Breaker",
    printings: [{
        artists: ["Alif Zahrah"],
      
      identifier: "OMN157",
      image: "OMN157",
      
      
      print: "OMN157",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN157"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN157",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this hits a hero, destroy a Lightning Flow token they control.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Surya Prasetya"],
    cardIdentifier: "scorpio-comet-tail",
    classes: [Class.Runeblade],
    defaultImage: "OMN049",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Scorpio, Comet Tail",
    printings: [{
        artists: ["Surya Prasetya"],
      
      identifier: "OMN049",
      image: "OMN049",
      
      
      print: "OMN049",
      rarity: Rarity.Basic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Basic],
    rarity: Rarity.Basic,
    setIdentifiers: ["OMN049"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN049",
    subtypes: [Subtype.TwoHanded,Subtype.Sword],
    types: [Type.Weapon],
    typeText: "Lightning Runeblade Weapon - Sword (2H)",

    
    
    
    
    
    functionalText: `**Action** - {t}: **Attack**. Activate this only if you control a Lightning attack.

When this hits a hero, deal 1 arcane damage to them.`,
    
    
    
    
    
    
    
    
  
    
    
    power: 1,
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Amtepra"],
    cardIdentifier: "static-shelter-yellow",
    classes: [Class.NotClassed],
    defaultImage: "OMN147",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Static Shelter",
    printings: [{
        artists: ["Amtepra"],
      
      identifier: "OMN147",
      image: "OMN147",
      
      
      print: "OMN147",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Amtepra"],
      foiling: Foiling.C,
      identifier: "OMN147",
      image: "OMN147-CF",
      
      
      print: "OMN147-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN147"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN147-CF",
    subtypes: [],
    types: [Type.DefenseReaction],
    typeText: "Lightning Defense Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this defends, you may pay {r}. If you do, create a Lightning Flow token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Henrique Lindner"],
    cardIdentifier: "step-between-red",
    classes: [Class.Generic],
    defaultImage: "OMN214",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Step Between",
    printings: [{
        artists: ["Henrique Lindner"],
      
      identifier: "OMN214",
      image: "OMN214",
      
      
      print: "OMN214",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN214"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN214",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `While this is attacking or on the stack, opponents can't play or activate instants.

**Instant** - {r}, {t} your hero: This gets +1{p} and {p} damage can't be prevented this combat chain.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 4,
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "tempestuous-kiss-red",
    classes: [Class.Runeblade],
    defaultImage: "OMN051",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Tempestuous Kiss",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "OMN051",
      image: "OMN051",
      
      
      print: "OMN051",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Tomasz Jedruszek"],
      foiling: Foiling.C,
      identifier: "OMN051",
      image: "OMN051-CF",
      
      
      print: "OMN051-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN051"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN051-CF",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 2,
    defense: 3,
    
    functionalText: `**Quickstrike** - If this has go again, it gets +1{p} and "When this attacks a hero, deal 1 arcane damage to them."

The first time this deals damage to a hero, they discard a card.`,
    
    
    
    
    keywords: [Keyword.Quickstrike],
    
    
    
  
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["soyameii"],
    cardIdentifier: "third-eye-of-the-sphinx",
    classes: [Class.Illusionist,Class.Wizard],
    defaultImage: "OMN140",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Blaze,Hero.Broscilio,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Iyslander,Hero.Kano,Hero.Oscilio,Hero.Prism,Hero.Taylor,Hero.Verdance,Hero.Zyggy],
    name: "Third Eye of the Sphinx",
    printings: [{
        artists: ["soyameii"],
      foiling: Foiling.R,
      identifier: "OMN140",
      image: "OMN140",
      
      
      print: "OMN140-Rainbow",
      rarity: Rarity.Legendary,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["soyameii"],
      foiling: Foiling.C,
      identifier: "OMN140",
      image: "OMN140",
      
      
      print: "OMN140-Cold",
      rarity: Rarity.Legendary,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Legendary],
    rarity: Rarity.Legendary,
    setIdentifiers: ["OMN140"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN140",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Illusionist / Wizard Equipment - Head",

    
    
    
    defense: 1,
    
    functionalText: `**Instant** - {r}, {t}, destroy a Ponder token you control: Draw a card.

**Spellvoid 1**

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak,Keyword.Spellvoid],
    
    
    
  
    
    
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Esty Swandana"],
    cardIdentifier: "tome-of-quandaries-blue",
    classes: [Class.Wizard],
    defaultImage: "OMN133",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Blaze,Hero.Broscilio,Hero.Iyslander,Hero.Kano,Hero.Librarian,Hero.Oscilio,Hero.Verdance],
    name: "Tome of Quandaries",
    printings: [{
        artists: ["Esty Swandana"],
      
      identifier: "OMN133",
      image: "OMN133",
      
      
      print: "OMN133",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Esty Swandana"],
      foiling: Foiling.C,
      identifier: "OMN133",
      image: "OMN133-CF",
      
      
      print: "OMN133-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN133"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN133-CF",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Wizard Instant",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Create 2 Ponder tokens.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Khairul Sukmanudin"],
    cardIdentifier: "turn-to-mindfire-red",
    classes: [Class.Wizard],
    defaultImage: "OMN136",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Blaze,Hero.Broscilio,Hero.Emperor,Hero.Iyslander,Hero.Kano,Hero.Oscilio,Hero.Verdance],
    name: "Turn to Mindfire",
    printings: [{
        artists: ["Khairul Sukmanudin"],
      
      identifier: "OMN136",
      image: "OMN136",
      
      
      print: "OMN136",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN136"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN136",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Wizard Action",

    arcane: 5,
    
    cost: 2,
    defense: 2,
    
    functionalText: `Deal 5 arcane damage to any target.

If this deals damage, you may {t} your hero. If you do, create a Ponder token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Firaz M. Rasyid"],
    cardIdentifier: "unmake-the-underlings-blue",
    classes: [Class.Assassin],
    defaultImage: "OMN228",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
    name: "Unmake the Underlings",
    printings: [{
        artists: ["Firaz M. Rasyid"],
      
      identifier: "OMN228",
      image: "OMN228",
      isExpansionSlot: true,
      
      print: "OMN228",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN228"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN228",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this attacks a hero, turn an ally in their graveyard face-down.

When this hits an ally, destroy that ally.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Edward Chee"],
    cardIdentifier: "voltbound-duality-red",
    classes: [Class.Runeblade],
    defaultImage: "OMN077",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Voltbound Duality",
    printings: [{
        artists: ["Edward Chee"],
      
      identifier: "OMN077",
      image: "OMN077",
      
      
      print: "OMN077",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Marvel],
    rarity: Rarity.Common,
    setIdentifiers: ["FAB466","OMN077"],
    sets: [Release.OmensOfTheThirdAge,Release.Promos],
    specialImage: "OMN077",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Instant** - {r}, discard this: Deal 1 arcane damage to target hero. Create a Lightning Flow token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Edward Chee"],
    cardIdentifier: "voltbound-duality-yellow",
    classes: [Class.Runeblade],
    defaultImage: "OMN078",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Voltbound Duality",
    printings: [{
        artists: ["Edward Chee"],
      
      identifier: "OMN078",
      image: "OMN078",
      
      
      print: "OMN078",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN078"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN078",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Instant** - {r}, discard this: Deal 1 arcane damage to target hero. Create a Lightning Flow token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Edward Chee"],
    cardIdentifier: "voltbound-duality-blue",
    classes: [Class.Runeblade],
    defaultImage: "OMN079",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Voltbound Duality",
    printings: [{
        artists: ["Edward Chee"],
      
      identifier: "OMN079",
      image: "OMN079",
      
      
      print: "OMN079",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN079"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN079",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Instant** - {r}, discard this: Deal 1 arcane damage to target hero. Create a Lightning Flow token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "voltic-impact-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN154",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Voltic Impact",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "OMN154",
      image: "OMN154",
      
      
      print: "OMN154",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["FAB473","OMN154"],
    sets: [Release.OmensOfTheThirdAge,Release.Promos],
    specialImage: "OMN154",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `**Twice per Turn Instant** - {r}: This gets +1{p}.

When this hits, create a Lightning Flow token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 6,
    
    shorthands: [Shorthand.Poppers],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Satriasa"],
    cardIdentifier: "volzar-meteor-storm",
    classes: [Class.Wizard],
    defaultImage: "OMN096",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Volzar, Meteor Storm",
    printings: [{
        artists: ["Satriasa"],
      
      identifier: "OMN096",
      image: "OMN096",
      
      
      print: "OMN096",
      rarity: Rarity.Basic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Basic],
    rarity: Rarity.Basic,
    setIdentifiers: ["OMN096"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN096",
    subtypes: [Subtype.TwoHanded,Subtype.Staff],
    types: [Type.Weapon],
    typeText: "Lightning Wizard Weapon - Staff (2H)",

    
    
    
    
    
    functionalText: `**Instant** - {t}: **Amp 1**. Activate this only if an instant card has been put into your graveyard this turn.`,
    
    
    
    
    keywords: [Keyword.Amp],
    
    
    
  
    
    
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Jessada Sutthi"],
    cardIdentifier: "zyggy",
    classes: [Class.Illusionist],
    defaultImage: "OMN002",
    legalFormats: [Format.Blitz,Format.Clash,Format.Draft,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Zyggy",
    printings: [{
        artists: ["Jessada Sutthi"],
      
      identifier: "OMN002",
      image: "OMN002",
      
      
      print: "OMN002",
      rarity: Rarity.Basic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Jessada Sutthi"],
      foiling: Foiling.C,
      identifier: "OMN002",
      image: "OMN002-MV",
      
      
      print: "OMN002-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Jessada Sutthi"],
      foiling: Foiling.C,
      identifier: "OMN002",
      image: "OMN002-MV_BACK",
      
      
      print: "OMN002-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["OMN002"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN002-MV",
    subtypes: [Subtype.Young],
    types: [Type.Hero],
    typeText: "Lightning Illusionist Hero - Young",

    
    
    
    
    
    functionalText: `**Instant** - {r}{r}, {t}, destroy a Lightning Flow you control, banish another Lightning aura permanent you control with no holo counters: Return the banished aura to the arena with a holo counter.`,
    
    hero: Hero.Zyggy,
    intellect: 4,
    
    
    
    life: 20,
    
  
    
    
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  young: true
  },{
    artists: ["Jessada Sutthi"],
    cardIdentifier: "zyggy-starlight",
    classes: [Class.Illusionist],
    defaultImage: "OMN001",
    legalFormats: [Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open],
    legalHeroes: [Hero.Zyggy],
    name: "Zyggy Starlight",
    printings: [{
        artists: ["Jessada Sutthi"],
      
      identifier: "OMN001",
      image: "OMN001",
      
      
      print: "OMN001",
      rarity: Rarity.Basic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Jessada Sutthi"],
      foiling: Foiling.C,
      identifier: "OMN001",
      image: "OMN001-MV",
      
      
      print: "OMN001-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Jessada Sutthi"],
      foiling: Foiling.C,
      identifier: "OMN001",
      image: "OMN001-MV_BACK",
      
      
      print: "OMN001-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["AZS001","OMN001"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
    specialImage: "OMN001-MV",
    subtypes: [],
    types: [Type.Hero],
    typeText: "Lightning Illusionist Hero",

    
    
    
    
    
    functionalText: `**Instant** - {r}{r}, {t}, destroy a Lightning Flow you control, banish another Lightning aura permanent you control with no holo counters: Return the banished aura to the arena with a holo counter.`,
    
    hero: Hero.Zyggy,
    intellect: 4,
    
    
    
    life: 40,
    
  
    
    
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  }];

  export const cards: Card[] =  [
  ...cards1,
  ];
  