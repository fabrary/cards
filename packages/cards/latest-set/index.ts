
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
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "a-bit-off-the-side-red",
    classes: [Class.Guardian,Class.Warrior],
    defaultImage: "OMN243",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Dorinthea,Hero.Emperor,Hero.Fang,Hero.Hala,Hero.Jarl,Hero.Kassai,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Olympia,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "A Bit off the Side",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "OMN243",
      image: "OMN243",
      isExpansionSlot: true,
      
      print: "OMN243",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Tomasz Jedruszek"],
      foiling: Foiling.Cold,
      identifier: "OMN243",
      image: "OMN243-CF",
      
      
      print: "OMN243-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN243"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN243-CF",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Guardian / Warrior Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Until end of turn, axes you control get "When this hits a hero, they discard a card."

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Aluisio Cervelle"],
    cardIdentifier: "aethersling-red",
    classes: [Class.Wizard],
    defaultImage: "OMN134",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Blaze,Hero.Broscilio,Hero.Emperor,Hero.Iyslander,Hero.Kano,Hero.Oscilio,Hero.Verdance],
    name: "Aethersling",
    printings: [{
        artists: ["Aluisio Cervelle"],
      
      identifier: "OMN134",
      image: "OMN134",
      
      
      print: "OMN134",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN134"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN134",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Wizard Action",

    arcane: 4,
    
    cost: 1,
    defense: 2,
    
    functionalText: `Deal 4 arcane damage to any target.

If this deals damage, you may {t} your hero. If you do, this gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
  
    
    pitch: 1,
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "aphrodias",
    classes: [Class.Illusionist],
    defaultImage: "OMN003",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    artists: ["János Brumár"],
    cardIdentifier: "arcanic-cunning-red",
    classes: [Class.Runeblade],
    defaultImage: "OMN088",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Arcanic Cunning",
    printings: [{
        artists: ["János Brumár"],
      
      identifier: "OMN088",
      image: "OMN088",
      
      
      print: "OMN088",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN088"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN088",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Runeblade Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `While this is attacking, defending, or on the stack, if you would be dealt arcane damage, prevent 1 of that damage.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["János Brumár"],
    cardIdentifier: "arcanic-cunning-yellow",
    classes: [Class.Runeblade],
    defaultImage: "OMN089",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Arcanic Cunning",
    printings: [{
        artists: ["János Brumár"],
      
      identifier: "OMN089",
      image: "OMN089",
      
      
      print: "OMN089",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN089"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN089",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Runeblade Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `While this is attacking, defending, or on the stack, if you would be dealt arcane damage, prevent 1 of that damage.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["János Brumár"],
    cardIdentifier: "arcanic-cunning-blue",
    classes: [Class.Runeblade],
    defaultImage: "OMN090",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Arcanic Cunning",
    printings: [{
        artists: ["János Brumár"],
      
      identifier: "OMN090",
      image: "OMN090",
      
      
      print: "OMN090",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN090"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN090",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Runeblade Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `While this is attacking, defending, or on the stack, if you would be dealt arcane damage, prevent 1 of that damage.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Reinaldo Indrajaya"],
    cardIdentifier: "arcanic-reproach-blue",
    classes: [Class.Runeblade],
    defaultImage: "OMN052",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Arcanic Reproach",
    printings: [{
        artists: ["Reinaldo Indrajaya"],
      
      identifier: "OMN052",
      image: "OMN052",
      
      
      print: "OMN052",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN052"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN052",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Runeblade Instant - Aura",

    arcane: 1,
    
    cost: 0,
    defense: 3,
    
    functionalText: `The first time an opposing hero deals damage to you each turn, you may reveal a Lightning card from your hand. If you do, deal 1 arcane damage to them.

At the start of your action phase, destroy an aura you control.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Kevin Sidharta"],
    cardIdentifier: "astral-bridge-red",
    classes: [Class.Wizard],
    defaultImage: "OMN098",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Astral Bridge",
    printings: [{
        artists: ["Kevin Sidharta"],
      
      identifier: "OMN098",
      image: "OMN098",
      
      
      print: "OMN098",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Kevin Sidharta"],
      foiling: Foiling.Cold,
      identifier: "OMN098",
      image: "OMN098-CF",
      
      
      print: "OMN098-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN098"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN098-CF",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Wizard Instant",

    
    
    cost: 0,
    
    
    functionalText: `Put the top card of your deck into your graveyard. If it's an instant, you may play it this turn.

**Starfall** - If an instant has been put into your graveyard this turn, deal 1 arcane damage to target hero.`,
    
    
    
    
    keywords: [Keyword.Starfall],
    
    
    
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    setIdentifiers: ["AZS015","OMN027"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.Draft,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
      foiling: Foiling.Cold,
      identifier: "OMN048",
      image: "OMN048-MV",
      
      
      print: "OMN048-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Asur Misoa"],
      foiling: Foiling.Cold,
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
      foiling: Foiling.Cold,
      identifier: "OMN047",
      image: "OMN047-MV",
      
      
      print: "OMN047-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Asur Misoa"],
      foiling: Foiling.Cold,
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
    artists: ["Bastien Jez"],
    cardIdentifier: "beckon-steel-blue",
    classes: [Class.Warrior],
    defaultImage: "OMN238",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Boltyn,Hero.Dorinthea,Hero.Fang,Hero.Hala,Hero.Kassai,Hero.Olympia],
    name: "Beckon Steel",
    printings: [{
        artists: ["Bastien Jez"],
      
      identifier: "OMN238",
      image: "OMN238",
      isExpansionSlot: true,
      
      print: "OMN238",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN238"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN238",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Target sword attack gets "When this hits, **sharpen** this sword. Then if the sword has 3 or more +1{p} counters, **attack** with it."`,
    
    
    
    
    keywords: [Keyword.Sharpen],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["SanSan"],
    cardIdentifier: "beckoning-brilliance-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN148",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    artists: ["Ina Wong"],
    cardIdentifier: "blessing-of-aegis-yellow",
    classes: [Class.NotClassed],
    defaultImage: "OMN244",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Boltyn,Hero.Librarian,Hero.Prism,Hero.Theryon],
    name: "Blessing of Aegis",
    printings: [{
        artists: ["Ina Wong"],
      
      identifier: "OMN244",
      image: "OMN244",
      isExpansionSlot: true,
      
      print: "OMN244",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Ina Wong"],
      foiling: Foiling.Cold,
      identifier: "OMN244",
      image: "OMN244-CF",
      
      
      print: "OMN244-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN244"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN244-CF",
    subtypes: [Subtype.Aura,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Light Action - Aura",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Go again**

Whenever a card is put into your soul, gain 1{h}.

At the start of your turn, put this into your soul.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Light],
  
  
  },{
    artists: ["Amtepra"],
    cardIdentifier: "blink-of-an-eye-red",
    classes: [Class.Illusionist],
    defaultImage: "OMN006",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    setIdentifiers: ["AZS007","OMN006"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
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
    artists: ["Reza Aswadananta"],
    cardIdentifier: "boots-of-astral-sanctuary",
    classes: [Class.Generic],
    defaultImage: "OMN212",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Boots of Astral Sanctuary",
    printings: [{
        artists: ["Reza Aswadananta"],
      
      identifier: "OMN212",
      image: "OMN212",
      
      
      print: "OMN212",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["LGS455","OMN212"],
    sets: [Release.OmensOfTheThirdAge,Release.Promos],
    specialImage: "OMN212",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Legs",

    
    
    
    defense: 0,
    
    functionalText: `**Instant** - {t} your hero, destroy this: Prevent the next 1 damage that would be dealt to you this turn.`,
    
    
    
    
    
    
    
    
  
    
    
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    
  
  
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
      foiling: Foiling.Rainbow,
      identifier: "OMN204",
      image: "OMN204",
      
      
      print: "OMN204-Rainbow",
      rarity: Rarity.Legendary,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["João G. Santos"],
      foiling: Foiling.Cold,
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
    artists: ["Wilson Nugraha"],
    cardIdentifier: "browbeat-blue",
    classes: [Class.Generic],
    defaultImage: "OMN213",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Browbeat",
    printings: [{
        artists: ["Wilson Nugraha"],
      
      identifier: "OMN213",
      image: "OMN213",
      
      
      print: "OMN213",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Wilson Nugraha"],
      foiling: Foiling.Cold,
      identifier: "OMN213",
      image: "OMN213-CF",
      
      
      print: "OMN213-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN213"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN213-CF",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `This gets +1{p} for each card in your hand.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Isuardi Therianto"],
    cardIdentifier: "caress-of-the-reaper-red",
    classes: [Class.Runeblade],
    defaultImage: "OMN087",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Caress of the Reaper",
    printings: [{
        artists: ["Isuardi Therianto"],
      
      identifier: "OMN087",
      image: "OMN087",
      
      
      print: "OMN087",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Isuardi Therianto"],
      foiling: Foiling.Cold,
      identifier: "OMN087",
      image: "OMN087-CF",
      
      
      print: "OMN087-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN087"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN087-CF",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Runeblade Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `Whenever this deals damage to a hero, destroy target aura they control.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Amirul HHF"],
    cardIdentifier: "circular-flowtide-yellow",
    classes: [Class.Illusionist],
    defaultImage: "OMN033",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
      foiling: Foiling.Cold,
      identifier: "OMN033",
      image: "OMN033-CF",
      
      
      print: "OMN033-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["AZS018","OMN033"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
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
    artists: ["Nailsen Ivanderlie"],
    cardIdentifier: "clear-conscience-red",
    classes: [Class.Illusionist],
    defaultImage: "OMN041",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Dromai,Hero.Enigma,Hero.Prism,Hero.Zyggy],
    name: "Clear Conscience",
    printings: [{
        artists: ["Nailsen Ivanderlie"],
      
      identifier: "OMN041",
      image: "OMN041",
      
      
      print: "OMN041",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN041"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN041",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Illusionist Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this hits a hero, each hero puts a card from their hand on the bottom of their deck and creates a Ponder token.

**Fragment**`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 8,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nailsen Ivanderlie"],
    cardIdentifier: "clear-conscience-yellow",
    classes: [Class.Illusionist],
    defaultImage: "OMN042",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Dromai,Hero.Enigma,Hero.Prism,Hero.Zyggy],
    name: "Clear Conscience",
    printings: [{
        artists: ["Nailsen Ivanderlie"],
      
      identifier: "OMN042",
      image: "OMN042",
      
      
      print: "OMN042",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN042"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN042",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Illusionist Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this hits a hero, each hero puts a card from their hand on the bottom of their deck and creates a Ponder token.

**Fragment**`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 7,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nailsen Ivanderlie"],
    cardIdentifier: "clear-conscience-blue",
    classes: [Class.Illusionist],
    defaultImage: "OMN043",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Dromai,Hero.Enigma,Hero.Prism,Hero.Zyggy],
    name: "Clear Conscience",
    printings: [{
        artists: ["Nailsen Ivanderlie"],
      
      identifier: "OMN043",
      image: "OMN043",
      
      
      print: "OMN043",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["AZS020","OMN043"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
    specialImage: "OMN043",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Illusionist Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this hits a hero, each hero puts a card from their hand on the bottom of their deck and creates a Ponder token.

**Fragment**`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Pavel Rtishchev (Klaher)"],
    cardIdentifier: "conflicting-thoughts-red",
    classes: [Class.Generic],
    defaultImage: "OMN219",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Conflicting Thoughts",
    printings: [{
        artists: ["Pavel Rtishchev (Klaher)"],
      
      identifier: "OMN219",
      image: "OMN219",
      
      
      print: "OMN219",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["GEM175","OMN219"],
    sets: [Release.GEM,Release.OmensOfTheThirdAge],
    specialImage: "OMN219",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks, **opt 1**.`,
    
    
    
    
    keywords: [Keyword.Opt],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Pavel Rtishchev (Klaher)"],
    cardIdentifier: "conflicting-thoughts-yellow",
    classes: [Class.Generic],
    defaultImage: "OMN220",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Conflicting Thoughts",
    printings: [{
        artists: ["Pavel Rtishchev (Klaher)"],
      
      identifier: "OMN220",
      image: "OMN220",
      
      
      print: "OMN220",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN220"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN220",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks, **opt 1**.`,
    
    
    
    
    keywords: [Keyword.Opt],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Pavel Rtishchev (Klaher)"],
    cardIdentifier: "conflicting-thoughts-blue",
    classes: [Class.Generic],
    defaultImage: "OMN221",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Conflicting Thoughts",
    printings: [{
        artists: ["Pavel Rtishchev (Klaher)"],
      
      identifier: "OMN221",
      image: "OMN221",
      
      
      print: "OMN221",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN221"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN221",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks, **opt 1**.`,
    
    
    
    
    keywords: [Keyword.Opt],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Muhammad Fajri"],
    cardIdentifier: "constella-uplift-yellow",
    classes: [Class.Wizard],
    defaultImage: "OMN132",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Constella Uplift",
    printings: [{
        artists: ["Muhammad Fajri"],
      
      identifier: "OMN132",
      image: "OMN132",
      
      
      print: "OMN132",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["GEM158","OMN132"],
    sets: [Release.GEM,Release.OmensOfTheThirdAge],
    specialImage: "OMN132",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Wizard Instant",

    
    
    cost: 0,
    
    
    functionalText: `{u} a staff you control.

**Starfall** - If an instant card has been put into your graveyard this turn, deal 1 arcane damage to target hero.`,
    
    
    
    
    keywords: [Keyword.Starfall],
    
    
    
  
    
    pitch: 2,
    
    
    shorthands: [Shorthand.Untap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "core-reaction-red",
    classes: [Class.Wizard],
    defaultImage: "OMN103",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    artists: ["Mark Poole"],
    cardIdentifier: "corrosive-space-dust-red",
    classes: [Class.Illusionist],
    defaultImage: "OMN012",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Corrosive Space Dust",
    printings: [{
        artists: ["Mark Poole"],
      
      identifier: "OMN012",
      image: "OMN012",
      
      
      print: "OMN012",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["AZS016","OMN012"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
    specialImage: "OMN012",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Illusionist Instant - Aura",

    arcane: 1,
    
    cost: 1,
    
    
    functionalText: `When this leaves the arena, deal 1 arcane damage to target hero.

**Ward X**, where X is 4 if this has a holo counter. Otherwise, X is 1.`,
    
    
    
    
    keywords: [Keyword.Ward],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Mark Poole"],
    cardIdentifier: "corrosive-space-dust-yellow",
    classes: [Class.Illusionist],
    defaultImage: "OMN013",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Corrosive Space Dust",
    printings: [{
        artists: ["Mark Poole"],
      
      identifier: "OMN013",
      image: "OMN013",
      
      
      print: "OMN013",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN013"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN013",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Illusionist Instant - Aura",

    arcane: 1,
    
    cost: 1,
    
    
    functionalText: `When this leaves the arena, deal 1 arcane damage to target hero.

**Ward X**, where X is 3 if this has a holo counter. Otherwise, X is 1.`,
    
    
    
    
    keywords: [Keyword.Ward],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Mark Poole"],
    cardIdentifier: "corrosive-space-dust-blue",
    classes: [Class.Illusionist],
    defaultImage: "OMN014",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Corrosive Space Dust",
    printings: [{
        artists: ["Mark Poole"],
      
      identifier: "OMN014",
      image: "OMN014",
      
      
      print: "OMN014",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN014"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN014",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Illusionist Instant - Aura",

    arcane: 1,
    
    cost: 1,
    
    
    functionalText: `When this leaves the arena, deal 1 arcane damage to target hero.

**Ward X**, where X is 2 if this has a holo counter. Otherwise, X is 1.`,
    
    
    
    
    keywords: [Keyword.Ward],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["YDZ"],
    cardIdentifier: "cosmic-duality-red",
    classes: [Class.Illusionist],
    defaultImage: "OMN015",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    setIdentifiers: ["AZS021","OMN017"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
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
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "cosmic-flare-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN187",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Cosmic Flare",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "OMN187",
      image: "OMN187",
      
      
      print: "OMN187",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN187"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN187",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Instant",

    
    
    cost: 0,
    
    
    functionalText: `Gain {r}{r}{r}`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Arif Restu"],
    cardIdentifier: "cosmic-suture-red",
    classes: [Class.Wizard],
    defaultImage: "OMN127",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    artists: ["Brian Madya Narendra"],
    cardIdentifier: "crackle-from-afar-blue",
    classes: [Class.Illusionist],
    defaultImage: "OMN036",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Crackle from Afar",
    printings: [{
        artists: ["Brian Madya Narendra"],
      
      identifier: "OMN036",
      image: "OMN036",
      
      
      print: "OMN036",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Brian Madya Narendra"],
      foiling: Foiling.Cold,
      identifier: "OMN036",
      image: "OMN036-CF",
      
      
      print: "OMN036-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["AZS026","OMN036"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
    specialImage: "OMN036-CF",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Illusionist Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `When this enters the arena, up to 1 target attack gets +1{p}.

**Ward 1**`,
    
    
    
    
    keywords: [Keyword.Ward],
    
    
    
  
    
    pitch: 3,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "crash-site-salvage-yellow",
    classes: [Class.Mechanologist,Class.Pirate],
    defaultImage: "OMN239",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Puffin],
    name: "Crash Site Salvage",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "OMN239",
      image: "OMN239",
      isExpansionSlot: true,
      
      print: "OMN239",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Mariusz Gandzel"],
      foiling: Foiling.Cold,
      identifier: "OMN239",
      image: "OMN239-CF",
      isExpansionSlot: true,
      
      print: "OMN239-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN239"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN239-CF",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Mechanologist Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Scrap**

When this attacks, if it scrapped a card, this gets **go again**. If a cog was scrapped this way, create a Gold token.`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Scrap],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Vincent Taslim"],
    cardIdentifier: "dashing-flashfoot-yellow",
    classes: [Class.Runeblade],
    defaultImage: "OMN053",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    artists: ["Harry Wyatt"],
    cardIdentifier: "draco-fire-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN245",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Cindra,Hero.Dromai,Hero.Emperor,Hero.Fai,Hero.Fang,Hero.Taipanis],
    name: "Draco Fire",
    printings: [{
        artists: ["Harry Wyatt"],
      
      identifier: "OMN245",
      image: "OMN245",
      isExpansionSlot: true,
      
      print: "OMN245",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN245"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN245",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Draconic Instant",

    
    
    cost: 0,
    
    
    functionalText: `Your next Draconic attack this turn gets +2{p} and costs {r} less to play or activate.

While this is in your graveyard, at the start of your turn, you may banish 2 cards named Draco Fire from your graveyard. If you do, gain {r}.`,
    
    
    
    
    
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 1,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "ebbing-arcstride-red",
    classes: [Class.Illusionist],
    defaultImage: "OMN018",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Ebbing Arcstride",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "OMN018",
      image: "OMN018",
      
      
      print: "OMN018",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["AZS008","OMN018"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
    specialImage: "OMN018",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Illusionist Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Whenever this fragments, it gets **go again**.

**Fragment**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "ebbing-arcstride-yellow",
    classes: [Class.Illusionist],
    defaultImage: "OMN019",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Ebbing Arcstride",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "OMN019",
      image: "OMN019",
      
      
      print: "OMN019",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN019"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN019",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Illusionist Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Whenever this fragments, it gets **go again**.

**Fragment**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "ebbing-arcstride-blue",
    classes: [Class.Illusionist],
    defaultImage: "OMN020",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Ebbing Arcstride",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "OMN020",
      image: "OMN020",
      
      
      print: "OMN020",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["AZS022","OMN020"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
    specialImage: "OMN020",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Illusionist Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Whenever this fragments, it gets **go again**.

**Fragment**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
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
    artists: ["Surya Prasetya"],
    cardIdentifier: "elliptical-conflux-yellow",
    classes: [Class.Illusionist],
    defaultImage: "OMN034",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Elliptical Conflux",
    printings: [{
        artists: ["Surya Prasetya"],
      
      identifier: "OMN034",
      image: "OMN034",
      
      
      print: "OMN034",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Surya Prasetya"],
      foiling: Foiling.Cold,
      identifier: "OMN034",
      image: "OMN034-CF",
      
      
      print: "OMN034-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["AZS019","OMN034"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
    specialImage: "OMN034-CF",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Illusionist Instant - Aura",

    
    
    cost: 1,
    
    
    functionalText: `When this leaves the arena, create an Embodiment of Lightning token.

**Ward 2**`,
    
    
    
    
    keywords: [Keyword.Ward],
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Jessketchin"],
    cardIdentifier: "evasive-nageboshi-blue",
    classes: [Class.Ninja],
    defaultImage: "OMN232",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Benji,Hero.Cindra,Hero.Fai,Hero.Ira,Hero.Katsu,Hero.Zen],
    name: "Evasive Nageboshi",
    printings: [{
        artists: ["Jessketchin"],
      
      identifier: "OMN232",
      image: "OMN232",
      isExpansionSlot: true,
      
      print: "OMN232",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Jessketchin"],
      foiling: Foiling.Cold,
      identifier: "OMN232",
      image: "OMN232-CF",
      
      
      print: "OMN232-Cold",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN232"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN232-CF",
    subtypes: [Subtype.Item,Subtype.Shuriken],
    types: [Type.Instant],
    typeText: "Ninja Instant - Shuriken Item",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `**Legendary**

**Action** - {r}, {t}, destroy this when the combat chain closes: **Attack**. **Go again**

This can't be defended by equipment or reaction cards.`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Legendary],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 3,
    power: 1,
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    
  
  
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
      foiling: Foiling.Cold,
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
    artists: ["Mark Poole"],
    cardIdentifier: "fleeing-starbreeze-blue",
    classes: [Class.Illusionist],
    defaultImage: "OMN037",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Fleeing Starbreeze",
    printings: [{
        artists: ["Mark Poole"],
      
      identifier: "OMN037",
      image: "OMN037",
      
      
      print: "OMN037",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Mark Poole"],
      foiling: Foiling.Cold,
      identifier: "OMN037",
      image: "OMN037-CF",
      
      
      print: "OMN037-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["AZS027","OMN037"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
    specialImage: "OMN037-CF",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Illusionist Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `When this enters the arena, up to 1 target attack gets **go again**.

**Ward 1**`,
    
    
    
    
    keywords: [Keyword.Ward],
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    setIdentifiers: ["AZS009","FAB471","OMN152"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge,Release.Promos],
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
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "flowshard-elemental-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN149",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Flowshard Elemental",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "OMN149",
      image: "OMN149",
      
      
      print: "OMN149",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN149"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN149",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, you may discard an instant card. If you do, create a Lightning Flow token and this gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
  
    
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
    artists: ["Vito Febrianno"],
    cardIdentifier: "fortitude-of-anvilheim",
    classes: [Class.Guardian,Class.Warrior],
    defaultImage: "OMN242-CF",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Dorinthea,Hero.Emperor,Hero.Fang,Hero.Hala,Hero.Jarl,Hero.Kassai,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Olympia,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Taylor,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Fortitude of Anvilheim",
    printings: [{
        artists: ["Vito Febrianno"],
      foiling: Foiling.Cold,
      identifier: "OMN242",
      image: "OMN242-CF",
      isExpansionSlot: true,
      
      print: "OMN242-Cold-Extended Art",
      rarity: Rarity.Legendary,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },{
        artists: ["Vito Febrianno"],
      foiling: Foiling.Rainbow,
      identifier: "OMN242",
      image: "OMN242-RF",
      isExpansionSlot: true,
      
      print: "OMN242-Rainbow-Extended Art",
      rarity: Rarity.Legendary,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Legendary],
    rarity: Rarity.Legendary,
    setIdentifiers: ["OMN242"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN242-CF",
    subtypes: [Subtype.OffHand],
    types: [Type.Equipment],
    typeText: "Guardian / Warrior Equipment - Off-Hand",

    
    
    
    defense: 2,
    
    functionalText: `**Attack Reaction** - {r}{r}, {t} your hero, destroy this: Return an action card defending a weapon attack to its owner's hand. **Guardwell**`,
    
    
    
    
    keywords: [Keyword.Guardwell],
    
    
    meta: [Meta.Expansion],
  
    
    
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kevin Sidharta"],
    cardIdentifier: "fractal-creation-blue",
    classes: [Class.Illusionist],
    defaultImage: "OMN040",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Dromai,Hero.Enigma,Hero.Prism,Hero.Zyggy],
    name: "Fractal Creation",
    printings: [{
        artists: ["Kevin Sidharta"],
      
      identifier: "OMN040",
      image: "OMN040",
      
      
      print: "OMN040",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Kevin Sidharta"],
      foiling: Foiling.Cold,
      identifier: "OMN040",
      image: "OMN040-CF",
      
      
      print: "OMN040-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN040"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN040-CF",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Illusionist Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `When this hits, you may create a token copy of an aura you control.

**Fragment**`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "fraying-lifeforce-red",
    classes: [Class.Illusionist],
    defaultImage: "OMN007",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Fraying Lifeforce",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "OMN007",
      image: "OMN007",
      
      
      print: "OMN007",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN007"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN007",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Illusionist Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `Whenever this fragments, gain 1{h}.

**Fragment**`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Stormy Elia Fanggidae"],
    cardIdentifier: "gauntlet-of-sword-and-sorcery",
    classes: [Class.Runeblade],
    defaultImage: "OMN086-CF",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Taylor,Hero.Viserai,Hero.Vynnset],
    name: "Gauntlet of Sword and Sorcery",
    printings: [{
        artists: ["Stormy Elia Fanggidae"],
      foiling: Foiling.Cold,
      identifier: "OMN086",
      image: "OMN086-CF",
      
      
      print: "OMN086-Cold",
      rarity: Rarity.Legendary,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Stormy Elia Fanggidae"],
      foiling: Foiling.Rainbow,
      identifier: "OMN086",
      image: "OMN086-RF",
      
      
      print: "OMN086-Rainbow",
      rarity: Rarity.Legendary,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Legendary],
    rarity: Rarity.Legendary,
    setIdentifiers: ["OMN086"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN086-CF",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Runeblade Equipment - Arms",

    
    
    
    defense: 0,
    
    functionalText: `**Action** - {r}{r}, {t} this and your hero: The next attack action card you play this turn gets "When this attacks, deal 1 arcane damage to any opposing target. If damage is dealt this way, this gets +1{p}." **Go again**

**Arcane Barrier 1**`,
    
    
    
    
    keywords: [Keyword.ArcaneBarrier,Keyword.GoAgain],
    
    
    
  
    
    
    
    
    shorthands: [Shorthand.Buffs,Shorthand.Tap],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "gear-turner-red",
    classes: [Class.Mechanologist],
    defaultImage: "OMN235",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Teklovossen],
    name: "Gear Turner",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "OMN235",
      image: "OMN235",
      isExpansionSlot: true,
      
      print: "OMN235",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Mariusz Gandzel"],
      foiling: Foiling.Cold,
      identifier: "OMN235",
      image: "OMN235-CF",
      isExpansionSlot: true,
      
      print: "OMN235-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN235"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN235-CF",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this hits, you may search your deck for a cog, put it into the arena, then shuffle.`,
    
    
    
    
    
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ramza Ardyputra"],
    cardIdentifier: "glide-through-starlight-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN169",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Glide Through Starlight",
    printings: [{
        artists: ["Ramza Ardyputra"],
      
      identifier: "OMN169",
      image: "OMN169",
      
      
      print: "OMN169",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["LGS451","OMN169"],
    sets: [Release.OmensOfTheThirdAge,Release.Promos],
    specialImage: "OMN169",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `**Instant** - {r}, discard this: Prevent the next 1 damage that would be dealt to you this turn. If you prevent damage this way, create a Lightning Flow token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Ramza Ardyputra"],
    cardIdentifier: "glide-through-starlight-yellow",
    classes: [Class.NotClassed],
    defaultImage: "OMN170",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Glide Through Starlight",
    printings: [{
        artists: ["Ramza Ardyputra"],
      
      identifier: "OMN170",
      image: "OMN170",
      
      
      print: "OMN170",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN170"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN170",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `**Instant** - {r}, discard this: Prevent the next 1 damage that would be dealt to you this turn. If you prevent damage this way, create a Lightning Flow token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Ramza Ardyputra"],
    cardIdentifier: "glide-through-starlight-blue",
    classes: [Class.NotClassed],
    defaultImage: "OMN171",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Glide Through Starlight",
    printings: [{
        artists: ["Ramza Ardyputra"],
      
      identifier: "OMN171",
      image: "OMN171",
      
      
      print: "OMN171",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN171"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN171",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `**Instant** - {r}, discard this: Prevent the next 1 damage that would be dealt to you this turn. If you prevent damage this way, create a Lightning Flow token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Yunior Susanto"],
    cardIdentifier: "gloves-of-astral-sanctuary",
    classes: [Class.Generic],
    defaultImage: "OMN211",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Gloves of Astral Sanctuary",
    printings: [{
        artists: ["Yunior Susanto"],
      
      identifier: "OMN211",
      image: "OMN211",
      
      
      print: "OMN211",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["LGS454","OMN211"],
    sets: [Release.OmensOfTheThirdAge,Release.Promos],
    specialImage: "OMN211",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Arms",

    
    
    
    defense: 0,
    
    functionalText: `**Instant** - {t} your hero, destroy this: Prevent the next 1 damage that would be dealt to you this turn.`,
    
    
    
    
    
    
    
    
  
    
    
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["M Fakhrur Rozzi"],
    cardIdentifier: "helm-of-astral-sanctuary",
    classes: [Class.Generic],
    defaultImage: "OMN209",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Helm of Astral Sanctuary",
    printings: [{
        artists: ["M Fakhrur Rozzi"],
      
      identifier: "OMN209",
      image: "OMN209",
      
      
      print: "OMN209",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["LGS452","OMN209"],
    sets: [Release.OmensOfTheThirdAge,Release.Promos],
    specialImage: "OMN209",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Head",

    
    
    
    defense: 0,
    
    functionalText: `**Instant** - {t} your hero, destroy this: Prevent the next 1 damage that would be dealt to you this turn.`,
    
    
    
    
    
    
    
    
  
    
    
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Alifka Hammam"],
    cardIdentifier: "lightning-flow",
    classes: [Class.NotClassed],
    defaultImage: "OMN203",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
      foiling: Foiling.Cold,
      identifier: "OMN203",
      image: "OMN203-MVA",
      
      
      print: "OMN203-Cold-Alternate Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.AA,treatments: [Treatment.AA,Treatment.FA],
    },{
        artists: ["Alifka Hammam"],
      foiling: Foiling.Cold,
      identifier: "OMN203",
      image: "OMN203-MVB",
      
      
      print: "OMN203-Cold-Alternate Art-V2",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.AA,treatments: [Treatment.AA,Treatment.FA],
    },{
        artists: ["Alifka Hammam"],
      foiling: Foiling.Cold,
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
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
    artists: ["Bramasta Aji"],
    cardIdentifier: "livewire-press-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN159",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Livewire Press",
    printings: [{
        artists: ["Bramasta Aji"],
      
      identifier: "OMN159",
      image: "OMN159",
      
      
      print: "OMN159",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN159"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN159",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Instant",

    
    
    cost: 1,
    
    
    functionalText: `Target Lightning attack action card gets "When this hits a hero, deal 4 damage to them."`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Daria Khlebnikova"],
    cardIdentifier: "mercurial-skies-red",
    classes: [Class.Runeblade],
    defaultImage: "OMN059",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    artists: ["Peyeyo"],
    cardIdentifier: "ominous-excavation-blue",
    classes: [Class.Generic],
    defaultImage: "OMN217",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Ominous Excavation",
    printings: [{
        artists: ["Peyeyo"],
      
      identifier: "OMN217",
      image: "OMN217",
      
      
      print: "OMN217",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN217"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN217",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Generic Instant",

    
    
    cost: 0,
    
    
    functionalText: `You may shuffle an instant card from your graveyard into your deck.

If an aura you control was destroyed this turn, create a Ponder token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kevin Sidharta"],
    cardIdentifier: "ominous-respite-yellow",
    classes: [Class.Generic],
    defaultImage: "OMN218",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Ominous Respite",
    printings: [{
        artists: ["Kevin Sidharta"],
      
      identifier: "OMN218",
      image: "OMN218",
      
      
      print: "OMN218",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN218"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN218",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Generic Instant",

    
    
    cost: 1,
    
    
    functionalText: `Gain 2{h}. If an aura you control was destroyed this turn, instead gain 3{h}.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
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
      foiling: Foiling.Cold,
      identifier: "OMN094",
      image: "OMN094-MV",
      
      
      print: "OMN094-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.Cold,
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
    legalFormats: [Format.Blitz,Format.Draft,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
      foiling: Foiling.Cold,
      identifier: "OMN095",
      image: "OMN095-MV",
      
      
      print: "OMN095-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.Cold,
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
    artists: ["Saad Irfan"],
    cardIdentifier: "path-of-same-ends-red",
    classes: [Class.Runeblade],
    defaultImage: "OMN065",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Path of Same Ends",
    printings: [{
        artists: ["Saad Irfan"],
      
      identifier: "OMN065",
      image: "OMN065",
      
      
      print: "OMN065",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["GEM155","OMN065"],
    sets: [Release.GEM,Release.OmensOfTheThirdAge],
    specialImage: "OMN065",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks a hero, deal 1 arcane damage to them. If damage is dealt this way, this gets **go again**.

**Instant** - {r}: This gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Saad Irfan"],
    cardIdentifier: "path-of-same-ends-yellow",
    classes: [Class.Runeblade],
    defaultImage: "OMN066",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Path of Same Ends",
    printings: [{
        artists: ["Saad Irfan"],
      
      identifier: "OMN066",
      image: "OMN066",
      
      
      print: "OMN066",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN066"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN066",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks a hero, deal 1 arcane damage to them. If damage is dealt this way, this gets **go again**.

**Instant** - {r}: This gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Saad Irfan"],
    cardIdentifier: "path-of-same-ends-blue",
    classes: [Class.Runeblade],
    defaultImage: "OMN067",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Path of Same Ends",
    printings: [{
        artists: ["Saad Irfan"],
      
      identifier: "OMN067",
      image: "OMN067",
      
      
      print: "OMN067",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN067"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN067",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks a hero, deal 1 arcane damage to them. If damage is dealt this way, this gets **go again**.

**Instant** - {r}: This gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Henrique Lindner"],
    cardIdentifier: "pile-driver",
    classes: [Class.Guardian],
    defaultImage: "OMN230",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Shiyana],
    name: "Pile Driver",
    printings: [{
        artists: ["Henrique Lindner"],
      
      identifier: "OMN230",
      image: "OMN230",
      isExpansionSlot: true,
      
      print: "OMN230",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN230"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN230",
    subtypes: [Subtype.TwoHanded,Subtype.Log],
    types: [Type.Weapon],
    typeText: "Guardian Weapon - Log (2H)",

    
    
    
    
    
    functionalText: `**Betsy Specialization**

**Action** - {r}{r}{r}{r}, {t}: **Attack**

When this attacks, you may **wager** a Gold token with the defending hero.`,
    
    
    
    
    keywords: [Keyword.Specialization,Keyword.Wager],
    
    
    meta: [Meta.Expansion],
  
    
    
    power: 6,
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    specializations: [Hero.Betsy],
    
  
  
  },{
    artists: ["Mario Wibisono"],
    cardIdentifier: "plutonic-starplate",
    classes: [Class.NotClassed],
    defaultImage: "OMN141-CF",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Taylor,Hero.Zyggy],
    name: "Plutonic Starplate",
    printings: [{
        artists: ["Mario Wibisono"],
      foiling: Foiling.Cold,
      identifier: "OMN141",
      image: "OMN141-CF",
      
      
      print: "OMN141-Cold",
      rarity: Rarity.Legendary,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Mario Wibisono"],
      foiling: Foiling.Rainbow,
      identifier: "OMN141",
      image: "OMN141-RF",
      
      
      print: "OMN141-Rainbow",
      rarity: Rarity.Legendary,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Legendary],
    rarity: Rarity.Legendary,
    setIdentifiers: ["OMN141"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN141-CF",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Lightning Equipment - Chest",

    
    
    
    defense: 0,
    
    functionalText: `The first time you play a Lightning card during each of your opponent's turns, gain {r}.

**Arcane Barrer 1**`,
    
    
    
    
    keywords: [Keyword.ArcaneBarrier],
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Tanapon Wachirakul"],
    cardIdentifier: "polarus-pulse-ray-red",
    classes: [Class.Illusionist],
    defaultImage: "OMN009",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Polarus Pulse Ray",
    printings: [{
        artists: ["Tanapon Wachirakul"],
      
      identifier: "OMN009",
      image: "OMN009",
      
      
      print: "OMN009",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["AZS011","OMN009"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
    specialImage: "OMN009",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Illusionist Action - Attack",

    arcane: 1,
    
    cost: 2,
    defense: 3,
    
    functionalText: `Whenever this fragments, deal 1 arcane damage to the defending hero.

**Fragment**`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Tanapon Wachirakul"],
    cardIdentifier: "polarus-pulse-ray-yellow",
    classes: [Class.Illusionist],
    defaultImage: "OMN010",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Polarus Pulse Ray",
    printings: [{
        artists: ["Tanapon Wachirakul"],
      
      identifier: "OMN010",
      image: "OMN010",
      
      
      print: "OMN010",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN010"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN010",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Illusionist Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `Whenever this fragments, deal 1 arcane damage to the defending hero.

**Fragment**`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Tanapon Wachirakul"],
    cardIdentifier: "polarus-pulse-ray-blue",
    classes: [Class.Illusionist],
    defaultImage: "OMN011",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Polarus Pulse Ray",
    printings: [{
        artists: ["Tanapon Wachirakul"],
      
      identifier: "OMN011",
      image: "OMN011",
      
      
      print: "OMN011",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN011"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN011",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Illusionist Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `Whenever this fragments, deal 1 arcane damage to the defending hero.

**Fragment**`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Jefrey Yonathan"],
    cardIdentifier: "prophetic-quickstep-yellow",
    classes: [Class.Runeblade],
    defaultImage: "OMN055",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Prophetic Quickstep",
    printings: [{
        artists: ["Jefrey Yonathan"],
      
      identifier: "OMN055",
      image: "OMN055",
      
      
      print: "OMN055",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN055"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN055",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 1,
    defense: 3,
    
    functionalText: `**Quickstrike** - If this has go again, it gets +1{p} and "When this attacks a hero, deal 1 arcane damage to them."

The first time this deals damage to a hero, create a Ponder token.`,
    
    
    
    
    keywords: [Keyword.Quickstrike],
    
    
    
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Esty Swandana"],
    cardIdentifier: "pulsing-cardia-red",
    classes: [Class.Illusionist],
    defaultImage: "OMN021",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    artists: ["Jessketchin"],
    cardIdentifier: "razor-ring-blue",
    classes: [Class.Ninja],
    defaultImage: "OMN233",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Benji,Hero.Cindra,Hero.Fai,Hero.Ira,Hero.Katsu,Hero.Zen],
    name: "Razor Ring",
    printings: [{
        artists: ["Jessketchin"],
      
      identifier: "OMN233",
      image: "OMN233",
      isExpansionSlot: true,
      
      print: "OMN233",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Jessketchin"],
      foiling: Foiling.Cold,
      identifier: "OMN233",
      image: "OMN233-CF",
      
      
      print: "OMN233-Cold",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN233"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN233-CF",
    subtypes: [Subtype.Item,Subtype.Shuriken],
    types: [Type.Instant],
    typeText: "Ninja Instant - Shuriken Item",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `**Legendary**

**Action** - {r}, {t}, destroy this when the combat chain closes: **Attack**. **Go again**

When this hits a hero, the next action card they defend with this combat chain gets -1{d} until end of turn.`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Legendary],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 3,
    power: 1,
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Andi Cahyo W"],
    cardIdentifier: "red-lure-harpoon-blue",
    classes: [Class.Pirate,Class.Ranger],
    defaultImage: "OMN241",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Marlynn],
    name: "Red Lure Harpoon",
    printings: [{
        artists: ["Andi Cahyo W"],
      
      identifier: "OMN241",
      image: "OMN241",
      isExpansionSlot: true,
      
      print: "OMN241",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN241"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN241",
    subtypes: [Subtype.Arrow,Subtype.Attack],
    types: [Type.Action],
    typeText: "Pirate Ranger Action - Arrow Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `If you've activated a cannon this turn, this gets "When this hits a hero, banish a red action card from their graveyard. You may play it until the end of your next turn."`,
    
    
    
    
    
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Alif Zahrah"],
    cardIdentifier: "rift-breaker-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN155",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    artists: ["Widya Wang"],
    cardIdentifier: "robe-of-astral-sanctuary",
    classes: [Class.Generic],
    defaultImage: "OMN210",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Robe of Astral Sanctuary",
    printings: [{
        artists: ["Widya Wang"],
      
      identifier: "OMN210",
      image: "OMN210",
      
      
      print: "OMN210",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["LGS453","OMN210"],
    sets: [Release.OmensOfTheThirdAge,Release.Promos],
    specialImage: "OMN210",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Chest",

    
    
    
    defense: 0,
    
    functionalText: `**Instant** - {t} your hero, destroy this: Prevent the next 1 damage that would be dealt to you this turn.`,
    
    
    
    
    
    
    
    
  
    
    
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "scattering-conflux-red",
    classes: [Class.Illusionist],
    defaultImage: "OMN008",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Scattering Conflux",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "OMN008",
      image: "OMN008",
      
      
      print: "OMN008",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["AZS012","OMN008"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
    specialImage: "OMN008",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Illusionist Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `Whenever this fragments, create an Embodiment of Lightning token.

**Fragment**`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Surya Prasetya"],
    cardIdentifier: "scorpio-comet-tail",
    classes: [Class.Runeblade],
    defaultImage: "OMN049",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "settle-the-bill-red",
    classes: [Class.Ranger],
    defaultImage: "OMN237",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Marlynn,Hero.Riptide],
    name: "Settle the Bill",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "OMN237",
      image: "OMN237",
      isExpansionSlot: true,
      
      print: "OMN237",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN237"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN237",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Ranger Action",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `You may put an arrow from your hand face-up into your arsenal. If you do, until end of turn, it gets +3{p} and "When this hits a hero, destroy a card in their arsenal."

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "shattering-flowtide-red",
    classes: [Class.Illusionist],
    defaultImage: "OMN024",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Shattering Flowtide",
    printings: [{
        artists: ["Rio Sabda"],
      
      identifier: "OMN024",
      image: "OMN024",
      
      
      print: "OMN024",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["AZS013","OMN024"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
    specialImage: "OMN024",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Illusionist Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Whenever this fragments, create a Lightning Flow token.

**Fragment**`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "shattering-flowtide-yellow",
    classes: [Class.Illusionist],
    defaultImage: "OMN025",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Shattering Flowtide",
    printings: [{
        artists: ["Rio Sabda"],
      
      identifier: "OMN025",
      image: "OMN025",
      
      
      print: "OMN025",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN025"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN025",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Illusionist Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Whenever this fragments, create a Lightning Flow token.

**Fragment**`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "shattering-flowtide-blue",
    classes: [Class.Illusionist],
    defaultImage: "OMN026",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Shattering Flowtide",
    printings: [{
        artists: ["Rio Sabda"],
      
      identifier: "OMN026",
      image: "OMN026",
      
      
      print: "OMN026",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["AZS023","OMN026"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
    specialImage: "OMN026",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Illusionist Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Whenever this fragments, create a Lightning Flow token.

**Fragment**`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "sigil-of-astral-flow-blue",
    classes: [Class.NotClassed],
    defaultImage: "OMN199",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Sigil of Astral Flow",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "OMN199",
      image: "OMN199",
      
      
      print: "OMN199",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Thomas Ressuge"],
      foiling: Foiling.Cold,
      identifier: "OMN199",
      image: "OMN199-MV",
      
      
      print: "OMN199-Cold-Alternate Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.AA,treatments: [Treatment.AA,Treatment.FA],
    },],
    rarities: [Rarity.Common,Rarity.Marvel],
    rarity: Rarity.Common,
    setIdentifiers: ["AZS028","OMN199"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
    specialImage: "OMN199-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `At the beginning of your action phase, destroy this.

When this leaves the arena, create a Lightning Flow token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Esty Swandana"],
    cardIdentifier: "starfield-carapace",
    classes: [Class.Illusionist],
    defaultImage: "OMN249-CF",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Taylor,Hero.Zyggy],
    name: "Starfield Carapace",
    printings: [{
        artists: ["Esty Swandana"],
      foiling: Foiling.Cold,
      identifier: "OMN249",
      image: "OMN249-CF",
      isExpansionSlot: true,
      
      print: "OMN249-Cold",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["AZS004","OMN249"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
    specialImage: "OMN249-CF",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Lightning Illusionist Equipment - Chest",

    
    
    
    
    
    functionalText: `**Instant** - Destroy this: Until end of turn, an Aphrodias you control costs {r} less to activate and gets "Whenever this deals damage to an opposing hero, create a Lightning Flow token."

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    meta: [Meta.Expansion],
  
    
    
    power: 1,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Ismatulloh"],
    cardIdentifier: "starfield-touch",
    classes: [Class.Illusionist],
    defaultImage: "OMN250-CF",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Taylor,Hero.Zyggy],
    name: "Starfield Touch",
    printings: [{
        artists: ["Ismatulloh"],
      foiling: Foiling.Cold,
      identifier: "OMN250",
      image: "OMN250-CF",
      isExpansionSlot: true,
      
      print: "OMN250-Cold",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["AZS005","OMN250"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
    specialImage: "OMN250-CF",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Lightning Illusionist Equipment - Arms",

    
    
    
    
    
    functionalText: `**Instant** - {r}, destroy this: {u} an Aphrodias you control.

**Battleworn**`,
    
    
    
    
    keywords: [Keyword.Battleworn],
    
    
    meta: [Meta.Expansion],
  
    
    
    power: 1,
    
    shorthands: [Shorthand.Untap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Amtepra"],
    cardIdentifier: "starfield-veil",
    classes: [Class.Illusionist],
    defaultImage: "OMN248-CF",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Taylor,Hero.Zyggy],
    name: "Starfield Veil",
    printings: [{
        artists: ["Amtepra"],
      foiling: Foiling.Cold,
      identifier: "OMN248",
      image: "OMN248-CF",
      isExpansionSlot: true,
      
      print: "OMN248-Cold",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["AZS003","OMN248"],
    sets: [Release.ArmoryDeckZyggy,Release.OmensOfTheThirdAge],
    specialImage: "OMN248-CF",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Lightning Illusionist Equipment - Head",

    
    
    
    
    
    functionalText: `**Instant** - Destroy this: The next aura you play this turn enters the arena with a holo counter. Activate this only if an attack has fragmented this turn.

**Guardwell**`,
    
    
    
    
    keywords: [Keyword.Guardwell],
    
    
    meta: [Meta.Expansion],
  
    
    
    power: 2,
    
    
    
    
    
    
    
    
    
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
      foiling: Foiling.Cold,
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
    artists: ["Nikolay Moskvin"],
    cardIdentifier: "stormshard-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN190",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Stormshard",
    printings: [{
        artists: ["Nikolay Moskvin"],
      
      identifier: "OMN190",
      image: "OMN190",
      
      
      print: "OMN190",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["FAB478","OMN190"],
    sets: [Release.OmensOfTheThirdAge,Release.Promos],
    specialImage: "OMN190",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Instant",

    
    
    cost: 1,
    
    
    functionalText: `You may destroy a Lightning Flow you control rather than pay this card's {r} cost.

Target Lightning attack gets +3{p}.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Jessketchin"],
    cardIdentifier: "stun-star-blue",
    classes: [Class.Ninja],
    defaultImage: "OMN234",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Benji,Hero.Cindra,Hero.Fai,Hero.Ira,Hero.Katsu,Hero.Zen],
    name: "Stun Star",
    printings: [{
        artists: ["Jessketchin"],
      
      identifier: "OMN234",
      image: "OMN234",
      isExpansionSlot: true,
      
      print: "OMN234",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Jessketchin"],
      foiling: Foiling.Cold,
      identifier: "OMN234",
      image: "OMN234-CF",
      
      
      print: "OMN234-Cold",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN234"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN234-CF",
    subtypes: [Subtype.Item,Subtype.Shuriken],
    types: [Type.Instant],
    typeText: "Ninja Instant - Shuriken Item",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `**Legendary**

**Action** - {r}, {t}, destroy this when the combat chain closes: **Attack**. **Go again**

When this hits a hero, {t} them.`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Legendary],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 3,
    power: 1,
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Narendra B Adi"],
    cardIdentifier: "swift-pickup-red",
    classes: [Class.Ninja],
    defaultImage: "OMN231",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Benji,Hero.Cindra,Hero.Fai,Hero.Ira,Hero.Katsu,Hero.Zen],
    name: "Swift Pickup",
    printings: [{
        artists: ["Narendra B Adi"],
      
      identifier: "OMN231",
      image: "OMN231",
      isExpansionSlot: true,
      
      print: "OMN231",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN231"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN231",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, you may put a shuriken item from your graveyard on the bottom of your deck. If you do, this gets +1{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
    
    
  
  
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
      foiling: Foiling.Cold,
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
      foiling: Foiling.Rainbow,
      identifier: "OMN140",
      image: "OMN140",
      
      
      print: "OMN140-Rainbow",
      rarity: Rarity.Legendary,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["soyameii"],
      foiling: Foiling.Cold,
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
      foiling: Foiling.Cold,
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    artists: ["Stormy Elia Fanggidae"],
    cardIdentifier: "unwinding-finality-red",
    classes: [Class.Illusionist],
    defaultImage: "OMN004",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Unwinding Finality",
    printings: [{
        artists: ["Stormy Elia Fanggidae"],
      
      identifier: "OMN004",
      image: "OMN004",
      
      
      print: "OMN004",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Stormy Elia Fanggidae"],
      foiling: Foiling.Cold,
      identifier: "OMN004",
      image: "OMN004-CF",
      
      
      print: "OMN004-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN004"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN004-CF",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Illusionist Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this hits, draw a card.

Whenever this fragments, you may put a Lightning instant card from your graveyard on top of your deck.

**Fragment**`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Edward Chee"],
    cardIdentifier: "voltbound-duality-red",
    classes: [Class.Runeblade],
    defaultImage: "OMN077",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.Draft,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
      foiling: Foiling.Cold,
      identifier: "OMN002",
      image: "OMN002-MV",
      
      
      print: "OMN002-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Jessada Sutthi"],
      foiling: Foiling.Cold,
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
      foiling: Foiling.Cold,
      identifier: "OMN001",
      image: "OMN001-MV",
      
      
      print: "OMN001-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Jessada Sutthi"],
      foiling: Foiling.Cold,
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
  