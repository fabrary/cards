
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
    artists: ["Bo Setiaji"],
    cardIdentifier: "arcbane-grasp-blue",
    classes: [Class.Mechanologist],
    defaultImage: "OMN236",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Dash,Hero.DataDoll,Hero.Maxx,Hero.Puffin,Hero.Taylor,Hero.Teklovossen],
    name: "Arcbane Grasp",
    printings: [{
        artists: ["Bo Setiaji"],
      
      identifier: "OMN236",
      image: "OMN236",
      isExpansionSlot: true,
      
      print: "OMN236",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN236"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN236",
    subtypes: [Subtype.Arms,Subtype.Base,Subtype.Evo],
    types: [Type.Equipment,Type.Instant],
    typeText: "Mechanologist Instant Equipment - Evo Base Arms",

    
    
    cost: 0,
    defense: 0,
    
    functionalText: `If you have a base arms equipped, **transform** it into this, then equip this.

When this is equipped, create a Spellbane Aegis token.

**Arcane Barrier 1**`,
    
    
    
    
    keywords: [Keyword.ArcaneBarrier,Keyword.Transform],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Othon Nikolaidis"],
    cardIdentifier: "astral-assault-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN160",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Astral Assault",
    printings: [{
        artists: ["Othon Nikolaidis"],
      
      identifier: "OMN160",
      image: "OMN160",
      
      
      print: "OMN160",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN160"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN160",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this attacks, you may destroy a Lightning Flow you control. If you do, this gets +2{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Othon Nikolaidis"],
    cardIdentifier: "astral-assault-yellow",
    classes: [Class.NotClassed],
    defaultImage: "OMN161",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Astral Assault",
    printings: [{
        artists: ["Othon Nikolaidis"],
      
      identifier: "OMN161",
      image: "OMN161",
      
      
      print: "OMN161",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN161"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN161",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this attacks, you may destroy a Lightning Flow you control. If you do, this gets +2{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Othon Nikolaidis"],
    cardIdentifier: "astral-assault-blue",
    classes: [Class.NotClassed],
    defaultImage: "OMN162",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Astral Assault",
    printings: [{
        artists: ["Othon Nikolaidis"],
      
      identifier: "OMN162",
      image: "OMN162",
      
      
      print: "OMN162",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN162"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN162",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this attacks, you may destroy a Lightning Flow you control. If you do, this gets +2{p}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 3,
    
    
    
    
    
    
    
    
    
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

    arcane: 1,
    
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
    artists: ["Lius Lasahido"],
    cardIdentifier: "baalghor-omen-of-the-end",
    classes: [Class.NotClassed],
    defaultImage: "IAR159-MV",
    legalFormats: [Format.Blitz,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Baalghor],
    name: "Baalghor, Omen of the End",
    printings: [{
        artists: ["Lius Lasahido"],
      foiling: Foiling.Cold,
      identifier: "IAR159",
      image: "IAR159-MV",
      
      
      print: "IAR159-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel],
    rarity: Rarity.Marvel,
    setIdentifiers: ["IAR159"],
    sets: [Release.IAR,Release.OmensOfTheThirdAge],
    specialImage: "IAR159-MV",
    subtypes: [Subtype.Demon,Subtype.Young],
    types: [Type.Hero],
    typeText: "Shadow Hero - Young Demon",

    
    
    
    
    
    functionalText: `Whenever you pitch a card, banish it.

Attack action cards played from your banished zone get +3{p}.`,
    
    hero: Hero.Baalghor,
    intellect: 3,
    
    
    
    life: 33,
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  young: true
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
    
    
    
    
    keywords: [Keyword.Fragment],
    
    
    
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Reza Aswadananta"],
    cardIdentifier: "boots-of-astral-sanctuary",
    classes: [Class.Generic],
    defaultImage: "OMN212",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
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
    defaultImage: "OMN204-RF",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Boots of Omnis Ward",
    printings: [{
        artists: ["João G. Santos"],
      foiling: Foiling.Rainbow,
      identifier: "OMN204",
      image: "OMN204-RF",
      
      
      print: "OMN204-Rainbow",
      rarity: Rarity.Legendary,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["João G. Santos"],
      foiling: Foiling.Cold,
      identifier: "OMN204",
      image: "OMN204-CF",
      
      
      print: "OMN204-Cold",
      rarity: Rarity.Legendary,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Legendary],
    rarity: Rarity.Legendary,
    setIdentifiers: ["OMN204"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN204-CF",
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
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
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
    artists: ["Narendra B Adi"],
    cardIdentifier: "brush-off-red",
    classes: [Class.Generic],
    defaultImage: "OMN222",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Brush Off",
    printings: [{
        artists: ["Narendra B Adi"],
      
      identifier: "OMN222",
      image: "OMN222",
      
      
      print: "OMN222",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN222","OUT228","ROS234"],
    sets: [Release.OmensOfTheThirdAge,Release.Outsiders,Release.Rosetta],
    specialImage: "OMN222",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Generic Instant",

    
    
    cost: 0,
    
    
    functionalText: `The next time you would be dealt 3 or less damage this turn, prevent it.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Narendra B Adi"],
    cardIdentifier: "brush-off-yellow",
    classes: [Class.Generic],
    defaultImage: "OMN223",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Brush Off",
    printings: [{
        artists: ["Narendra B Adi"],
      
      identifier: "OMN223",
      image: "OMN223",
      
      
      print: "OMN223",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN223","OUT229","ROS235"],
    sets: [Release.OmensOfTheThirdAge,Release.Outsiders,Release.Rosetta],
    specialImage: "OMN223",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Generic Instant",

    
    
    cost: 0,
    
    
    functionalText: `The next time you would be dealt 2 or less damage this turn, prevent it.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Narendra B Adi"],
    cardIdentifier: "brush-off-blue",
    classes: [Class.Generic],
    defaultImage: "OMN224",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Brush Off",
    printings: [{
        artists: ["Narendra B Adi"],
      
      identifier: "OMN224",
      image: "OMN224",
      
      
      print: "OMN224",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN224","OUT230","ROS236"],
    sets: [Release.OmensOfTheThirdAge,Release.Outsiders,Release.Rosetta],
    specialImage: "OMN224",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Generic Instant",

    
    
    cost: 0,
    
    
    functionalText: `The next time you would be dealt 1 damage this turn, prevent it.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Surya Prasetya"],
    cardIdentifier: "calmveil-of-volthaven-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN184",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Calmveil of Volthaven",
    printings: [{
        artists: ["Surya Prasetya"],
      
      identifier: "OMN184",
      image: "OMN184",
      
      
      print: "OMN184",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN184"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN184",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Instant",

    
    
    cost: 2,
    
    
    functionalText: `Prevent the next 3 damage that would be dealt to you this turn. The first time you prevent damage this way, create a Lightning Flow token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Surya Prasetya"],
    cardIdentifier: "calmveil-of-volthaven-yellow",
    classes: [Class.NotClassed],
    defaultImage: "OMN185",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Calmveil of Volthaven",
    printings: [{
        artists: ["Surya Prasetya"],
      
      identifier: "OMN185",
      image: "OMN185",
      
      
      print: "OMN185",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN185"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN185",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Instant",

    
    
    cost: 2,
    
    
    functionalText: `Prevent the next 2 damage that would be dealt to you this turn. The first time you prevent damage this way, create a Lightning Flow token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Surya Prasetya"],
    cardIdentifier: "calmveil-of-volthaven-blue",
    classes: [Class.NotClassed],
    defaultImage: "OMN186",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Calmveil of Volthaven",
    printings: [{
        artists: ["Surya Prasetya"],
      
      identifier: "OMN186",
      image: "OMN186",
      
      
      print: "OMN186",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN186"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN186",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Instant",

    
    
    cost: 2,
    
    
    functionalText: `Prevent the next 1 damage that would be dealt to you this turn. The first time you prevent damage this way, create a Lightning Flow token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
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
    artists: ["Aluisio Cervelle"],
    cardIdentifier: "chromatic-refinement-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN193",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Chromatic Refinement",
    printings: [{
        artists: ["Aluisio Cervelle"],
      
      identifier: "OMN193",
      image: "OMN193",
      
      
      print: "OMN193",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN193"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN193",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `At the beginning of your action phase, destroy this, then the next red card you play this turn costs {r} less to play. The first time that card would deal damage this turn, instead it deals that much plus 1.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Aluisio Cervelle"],
    cardIdentifier: "chromatic-refinement-yellow",
    classes: [Class.NotClassed],
    defaultImage: "OMN194",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Chromatic Refinement",
    printings: [{
        artists: ["Aluisio Cervelle"],
      
      identifier: "OMN194",
      image: "OMN194",
      
      
      print: "OMN194",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN194"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN194",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `At the beginning of your action phase, destroy this, then the next yellow card you play this turn costs {r} less to play. The first time that card would deal damage this turn, instead it deals that much plus 1.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Aluisio Cervelle"],
    cardIdentifier: "chromatic-refinement-blue",
    classes: [Class.NotClassed],
    defaultImage: "OMN195",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Chromatic Refinement",
    printings: [{
        artists: ["Aluisio Cervelle"],
      
      identifier: "OMN195",
      image: "OMN195",
      
      
      print: "OMN195",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN195"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN195",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `At the beginning of your action phase, destroy this, then the next blue card you play this turn costs {r} less to play. The first time that card would deal damage this turn, instead it deals that much plus 1.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
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
    
    
    
    
    keywords: [Keyword.Fragment],
    
    
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
    
    
    
    
    keywords: [Keyword.Fragment],
    
    
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
    
    
    
    
    keywords: [Keyword.Fragment],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Dzulfikar Aliy"],
    cardIdentifier: "comet-collision-red",
    classes: [Class.Wizard],
    defaultImage: "OMN109",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Comet Collision",
    printings: [{
        artists: ["Dzulfikar Aliy"],
      
      identifier: "OMN109",
      image: "OMN109",
      
      
      print: "OMN109",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN109"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN109",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Instant",

    arcane: 3,
    
    cost: 0,
    defense: 3,
    
    functionalText: `Deal 3 arcane damage to any target.

**Starfall** - If an instant card has been put into your graveyard this turn, instead deal 4 arcane damage.`,
    
    
    
    
    keywords: [Keyword.Starfall],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Dzulfikar Aliy"],
    cardIdentifier: "comet-collision-yellow",
    classes: [Class.Wizard],
    defaultImage: "OMN110",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Comet Collision",
    printings: [{
        artists: ["Dzulfikar Aliy"],
      
      identifier: "OMN110",
      image: "OMN110",
      
      
      print: "OMN110",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN110"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN110",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Instant",

    arcane: 2,
    
    cost: 0,
    defense: 3,
    
    functionalText: `Deal 2 arcane damage to any target.

**Starfall** - If an instant card has been put into your graveyard this turn, instead deal 3 arcane damage.`,
    
    
    
    
    keywords: [Keyword.Starfall],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Dzulfikar Aliy"],
    cardIdentifier: "comet-collision-blue",
    classes: [Class.Wizard],
    defaultImage: "OMN111",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Comet Collision",
    printings: [{
        artists: ["Dzulfikar Aliy"],
      
      identifier: "OMN111",
      image: "OMN111",
      
      
      print: "OMN111",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN111"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN111",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Instant",

    arcane: 1,
    
    cost: 0,
    defense: 3,
    
    functionalText: `Deal 1 arcane damage to any target.

**Starfall** - If an instant card has been put into your graveyard this turn, instead deal 2 arcane damage.`,
    
    
    
    
    keywords: [Keyword.Starfall],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Pavel Rtishchev (Klaher)"],
    cardIdentifier: "conflicting-thoughts-red",
    classes: [Class.Generic],
    defaultImage: "OMN219",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
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
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
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
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
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
    artists: ["Olga Tereshenko"],
    cardIdentifier: "constella-contemplation-yellow",
    classes: [Class.Wizard],
    defaultImage: "OMN130",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Constella Contemplation",
    printings: [{
        artists: ["Olga Tereshenko"],
      
      identifier: "OMN130",
      image: "OMN130",
      
      
      print: "OMN130",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN130"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN130",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Wizard Instant",

    arcane: 1,
    
    cost: 0,
    
    
    functionalText: `Create a Ponder token.

**Starfall** - If an instant card has been put into your graveyard this turn, deal 1 arcane damage to target hero.`,
    
    
    
    
    keywords: [Keyword.Starfall],
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "constella-flowslide-yellow",
    classes: [Class.Wizard],
    defaultImage: "OMN131",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Constella Flowslide",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "OMN131",
      image: "OMN131",
      
      
      print: "OMN131",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN131"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN131",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Wizard Instant",

    arcane: 1,
    
    cost: 0,
    
    
    functionalText: `Create a Lightning Flow token.

**Starfall** - If an instant card has been put into your graveyard this turn, deal 1 arcane damage to target hero.`,
    
    
    
    
    keywords: [Keyword.Starfall],
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Surya Feby"],
    cardIdentifier: "constella-tiara",
    classes: [Class.NotClassed],
    defaultImage: "OMN142",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Taylor,Hero.Zyggy],
    name: "Constella Tiara",
    printings: [{
        artists: ["Surya Feby"],
      
      identifier: "OMN142",
      image: "OMN142",
      
      
      print: "OMN142",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN142"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN142",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Lightning Equipment - Head",

    
    
    
    defense: 0,
    
    functionalText: `**Instant** - {r}{r}, destroy this: Prevent the next 1 damage that would be dealt to you this turn. If you prevent damage this way, create a Ponder token.`,
    
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
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

    arcane: 1,
    
    cost: 0,
    
    
    functionalText: `{u} a staff you control.

**Starfall** - If an instant card has been put into your graveyard this turn, deal 1 arcane damage to target hero.`,
    
    
    
    
    keywords: [Keyword.Starfall],
    
    
    
  
    
    pitch: 2,
    
    
    shorthands: [Shorthand.Untap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "constella-waves",
    classes: [Class.Wizard],
    defaultImage: "OMN097",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio,Hero.Taylor],
    name: "Constella Waves",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "OMN097",
      image: "OMN097",
      
      
      print: "OMN097",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN097"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN097",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Lightning Wizard Equipment - Arms",

    
    
    
    defense: 0,
    
    functionalText: `**Instant** - {t} your hero, destroy this: **Amp 1**`,
    
    
    
    
    keywords: [Keyword.Amp],
    
    
    
  
    
    
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
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
    
    
    
    
    keywords: [Keyword.Fragment],
    
    
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
    
    
    
    
    keywords: [Keyword.Fragment],
    
    
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
    
    
    
    
    keywords: [Keyword.Fragment],
    
    
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

    arcane: 1,
    
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

    arcane: 1,
    
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

    arcane: 1,
    
    cost: 2,
    
    
    functionalText: `Prevent the next 2 damage that would be dealt to you this turn.

**Starfall** - If an instant card has been put into your graveyard this turn, deal 1 arcane damage to target hero.`,
    
    
    
    
    keywords: [Keyword.Starfall],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Alexandra Malygina","Sam Yang"],
    cardIdentifier: "cracked-bauble-yellow",
    classes: [Class.Generic],
    defaultImage: "OMN226",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Cracked Bauble",
    printings: [{
        artists: ["Sam Yang"],
      
      identifier: "OMN226",
      image: "OMN226",
      
      
      print: "OMN226",
      rarity: Rarity.Basic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Basic,Rarity.Common,Rarity.Promo,Rarity.Token],
    rarity: Rarity.Basic,
    setIdentifiers: ["ARC218","CRU195","ELE237","HNT245","HVY244","LGS083","LGS227","MON306","MST224","OMN226","OUT238","ROS238","SEA246","SUP243","UPR224","WTR224"],
    sets: [Release.ArcaneRising,Release.CrucibleOfWar,Release.HeavyHitters,Release.HighSeas,Release.Monarch,Release.OmensOfTheThirdAge,Release.Outsiders,Release.PartTheMistveil,Release.Promos,Release.Rosetta,Release.SuperSlam,Release.TalesOfAria,Release.TheHunted,Release.Uprising,Release.WelcomeToRathe],
    specialImage: "OMN226",
    subtypes: [],
    types: [Type.Resource],
    typeText: "Generic Resource",

    
    
    
    
    
    functionalText: `*(A player may add any number of Cracked Baubles to their card-pool in sealed deck or booster draft formats.)*`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
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
    artists: ["Phu Thieu"],
    cardIdentifier: "destructive-fleetfoot-red",
    classes: [Class.Runeblade],
    defaultImage: "OMN062",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Destructive Fleetfoot",
    printings: [{
        artists: ["Phu Thieu"],
      
      identifier: "OMN062",
      image: "OMN062",
      
      
      print: "OMN062",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN062"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN062",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Quickstrike** - If this has go again, it gets +1{p}.

When this hits a hero, destroy an aura token they control.`,
    
    
    
    
    keywords: [Keyword.Quickstrike],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Phu Thieu"],
    cardIdentifier: "destructive-fleetfoot-yellow",
    classes: [Class.Runeblade],
    defaultImage: "OMN063",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Destructive Fleetfoot",
    printings: [{
        artists: ["Phu Thieu"],
      
      identifier: "OMN063",
      image: "OMN063",
      
      
      print: "OMN063",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN063"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN063",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Quickstrike** - If this has go again, it gets +1{p}.

When this hits a hero, destroy an aura token they control.`,
    
    
    
    
    keywords: [Keyword.Quickstrike],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Phu Thieu"],
    cardIdentifier: "destructive-fleetfoot-blue",
    classes: [Class.Runeblade],
    defaultImage: "OMN064",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Destructive Fleetfoot",
    printings: [{
        artists: ["Phu Thieu"],
      
      identifier: "OMN064",
      image: "OMN064",
      
      
      print: "OMN064",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN064"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN064",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Quickstrike** - If this has go again, it gets +1{p}.

When this hits a hero, destroy an aura token they control.`,
    
    
    
    
    keywords: [Keyword.Quickstrike],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
    
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
    
    
    
    
    keywords: [Keyword.Fragment,Keyword.GoAgain],
    
    
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
    
    
    
    
    keywords: [Keyword.Fragment,Keyword.GoAgain],
    
    
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
    
    
    
    
    keywords: [Keyword.Fragment,Keyword.GoAgain],
    
    
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
    artists: ["Rio Sabda"],
    cardIdentifier: "electrolyze-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN163",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Electrolyze",
    printings: [{
        artists: ["Rio Sabda"],
      
      identifier: "OMN163",
      image: "OMN163",
      
      
      print: "OMN163",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN163"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN163",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 1,
    defense: 0,
    
    functionalText: `**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "electrolyze-yellow",
    classes: [Class.NotClassed],
    defaultImage: "OMN164",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Electrolyze",
    printings: [{
        artists: ["Rio Sabda"],
      
      identifier: "OMN164",
      image: "OMN164",
      
      
      print: "OMN164",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN164"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN164",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 1,
    defense: 0,
    
    functionalText: `**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "electrolyze-blue",
    classes: [Class.NotClassed],
    defaultImage: "OMN165",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Electrolyze",
    printings: [{
        artists: ["Rio Sabda"],
      
      identifier: "OMN165",
      image: "OMN165",
      
      
      print: "OMN165",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN165"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN165",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 1,
    defense: 0,
    
    functionalText: `**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Jefrey Yonathan"],
    cardIdentifier: "electryn-joltstep-red",
    classes: [Class.Runeblade],
    defaultImage: "OMN080",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Electryn Joltstep",
    printings: [{
        artists: ["Jefrey Yonathan"],
      
      identifier: "OMN080",
      image: "OMN080",
      
      
      print: "OMN080",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN080"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN080",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Runelbade Action",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `Your next Runeblade or Lightning attack this turn gets +3{p}.

Create a Lightning Flow token.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Jefrey Yonathan"],
    cardIdentifier: "electryn-joltstep-yellow",
    classes: [Class.Runeblade],
    defaultImage: "OMN081",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Electryn Joltstep",
    printings: [{
        artists: ["Jefrey Yonathan"],
      
      identifier: "OMN081",
      image: "OMN081",
      
      
      print: "OMN081",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN081"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN081",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Runelbade Action",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `Your next Runeblade or Lightning attack this turn gets +2{p}.

Create a Lightning Flow token.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Jefrey Yonathan"],
    cardIdentifier: "electryn-joltstep-blue",
    classes: [Class.Runeblade],
    defaultImage: "OMN082",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Electryn Joltstep",
    printings: [{
        artists: ["Jefrey Yonathan"],
      
      identifier: "OMN082",
      image: "OMN082",
      
      
      print: "OMN082",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN082"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN082",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Runelbade Action",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `Your next Runeblade or Lightning attack this turn gets +1{p}.

Create a Lightning Flow token.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Nadia Suryani"],
    cardIdentifier: "electryn-mindmeld-yellow",
    classes: [Class.Runeblade],
    defaultImage: "OMN054",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Electryn Mindmeld",
    printings: [{
        artists: ["Nadia Suryani"],
      
      identifier: "OMN054",
      image: "OMN054",
      
      
      print: "OMN054",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN054"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN054",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 1,
    defense: 3,
    
    functionalText: `**Quickstrike** - If this has go again, it gets +1{p} and "When this attacks a hero, deal 1 arcane damage to them."

The first time this deals damage to a hero, you may put an instant card from your graveyard on the bottom of your deck.`,
    
    
    
    
    keywords: [Keyword.Quickstrike],
    
    
    
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
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
    artists: ["Nikolay Moskvin"],
    cardIdentifier: "embodiment-of-lightning",
    classes: [Class.NotClassed],
    defaultImage: "OMN202",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Florian,Hero.Iyslander,Hero.Jarl,Hero.Lexi,Hero.Oldhim,Hero.Oscilio,Hero.Shiyana,Hero.Starvo,Hero.Terra,Hero.Verdance,Hero.Yorick,Hero.Zyggy],
    name: "Embodiment of Lightning",
    printings: [{
        artists: ["Nikolay Moskvin"],
      
      identifier: "OMN202",
      image: "OMN202",
      
      
      print: "OMN202",
      rarity: Rarity.Basic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Basic,Rarity.Common,Rarity.Promo,Rarity.Token],
    rarity: Rarity.Basic,
    setIdentifiers: ["AST028","AUA027","AUR027","AZS029","BRI002","DTD195","ELE110","FAB119","OMN202","OSC027","ROS026","SBA035"],
    sets: [Release.FirstStrikeAurora,Release.ArmoryDeckAurora,Release.ArmoryDeckZyggy,Release.AuroraBlitzDeck,Release.BriarBlitzDeck,Release.BriarSilverAgeDeck,Release.DuskTillDawn,Release.OmensOfTheThirdAge,Release.OscilioBlitzDeck,Release.Promos,Release.Rosetta,Release.TalesOfAria],
    specialImage: "OMN202",
    subtypes: [Subtype.Aura],
    types: [Type.Token],
    typeText: "Elemental Token - Aura",

    
    
    
    
    
    functionalText: `When you play an attack action card, destroy this and the attack gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Elemental],
  
  
  },{
    artists: ["Mateusz Wiśniewski"],
    cardIdentifier: "enion-surge-red",
    classes: [Class.Wizard],
    defaultImage: "OMN112",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Enion Surge",
    printings: [{
        artists: ["Mateusz Wiśniewski"],
      
      identifier: "OMN112",
      image: "OMN112",
      
      
      print: "OMN112",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN112"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN112",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Action",

    arcane: 3,
    
    cost: 0,
    defense: 3,
    
    functionalText: `Deal 3 arcane damage to any target.

If this deals damage, you may {t} your hero. If you do, create a Lightning Flow token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Mateusz Wiśniewski"],
    cardIdentifier: "enion-surge-yellow",
    classes: [Class.Wizard],
    defaultImage: "OMN113",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Enion Surge",
    printings: [{
        artists: ["Mateusz Wiśniewski"],
      
      identifier: "OMN113",
      image: "OMN113",
      
      
      print: "OMN113",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN113"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN113",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Action",

    arcane: 2,
    
    cost: 0,
    defense: 3,
    
    functionalText: `Deal 2 arcane damage to any target.

If this deals damage, you may {t} your hero. If you do, create a Lightning Flow token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Mateusz Wiśniewski"],
    cardIdentifier: "enion-surge-blue",
    classes: [Class.Wizard],
    defaultImage: "OMN114",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Enion Surge",
    printings: [{
        artists: ["Mateusz Wiśniewski"],
      
      identifier: "OMN114",
      image: "OMN114",
      
      
      print: "OMN114",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN114"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN114",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Action",

    arcane: 1,
    
    cost: 0,
    defense: 3,
    
    functionalText: `Deal 1 arcane damage to any target.

If this deals damage, you may {t} your hero. If you do, create a Lightning Flow token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Bramasta Aji"],
    cardIdentifier: "erode-authority-red",
    classes: [Class.Illusionist],
    defaultImage: "OMN044",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Dromai,Hero.Enigma,Hero.Prism,Hero.Zyggy],
    name: "Erode Authority",
    printings: [{
        artists: ["Bramasta Aji"],
      
      identifier: "OMN044",
      image: "OMN044",
      
      
      print: "OMN044",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN044"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN044",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Illusionist Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `**Dominate**

**Fragment**`,
    
    
    
    
    keywords: [Keyword.Dominate,Keyword.Fragment],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Bramasta Aji"],
    cardIdentifier: "erode-authority-yellow",
    classes: [Class.Illusionist],
    defaultImage: "OMN045",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Dromai,Hero.Enigma,Hero.Prism,Hero.Zyggy],
    name: "Erode Authority",
    printings: [{
        artists: ["Bramasta Aji"],
      
      identifier: "OMN045",
      image: "OMN045",
      
      
      print: "OMN045",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN045"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN045",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Illusionist Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `**Dominate**

**Fragment**`,
    
    
    
    
    keywords: [Keyword.Dominate,Keyword.Fragment],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Bramasta Aji"],
    cardIdentifier: "erode-authority-blue",
    classes: [Class.Illusionist],
    defaultImage: "OMN046",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Dromai,Hero.Enigma,Hero.Prism,Hero.Zyggy],
    name: "Erode Authority",
    printings: [{
        artists: ["Bramasta Aji"],
      
      identifier: "OMN046",
      image: "OMN046",
      
      
      print: "OMN046",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN046"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN046",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Illusionist Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `**Dominate**

**Fragment**`,
    
    
    
    
    keywords: [Keyword.Dominate,Keyword.Fragment],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    
  
  
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
    artists: ["Wirawan Pranoto"],
    cardIdentifier: "fingers-of-fragmentation",
    classes: [Class.Illusionist],
    defaultImage: "OMN039",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Dromai,Hero.Enigma,Hero.Prism,Hero.Taylor,Hero.Zyggy],
    name: "Fingers of Fragmentation",
    printings: [{
        artists: ["Wirawan Pranoto"],
      
      identifier: "OMN039",
      image: "OMN039",
      
      
      print: "OMN039",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN039"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN039",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Illusionist Equipment - Arms",

    
    
    
    defense: 0,
    
    functionalText: `**Instant** - {r}{r}, destroy this: Target attack action card that has fragmented gets +2{p}.`,
    
    
    
    
    
    
    
    
  
    
    
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Surya Prasetya"],
    cardIdentifier: "flash-bolt-red",
    classes: [Class.Wizard],
    defaultImage: "OMN106",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Flash Bolt",
    printings: [{
        artists: ["Surya Prasetya"],
      
      identifier: "OMN106",
      image: "OMN106",
      
      
      print: "OMN106",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN106"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN106",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Wizard Instant",

    arcane: 3,
    
    cost: 2,
    
    
    functionalText: `Deal 3 arcane damage to target hero.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Surya Prasetya"],
    cardIdentifier: "flash-bolt-yellow",
    classes: [Class.Wizard],
    defaultImage: "OMN107",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Flash Bolt",
    printings: [{
        artists: ["Surya Prasetya"],
      
      identifier: "OMN107",
      image: "OMN107",
      
      
      print: "OMN107",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN107"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN107",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Wizard Instant",

    arcane: 2,
    
    cost: 2,
    
    
    functionalText: `Deal 2 arcane damage to target hero.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Surya Prasetya"],
    cardIdentifier: "flash-bolt-blue",
    classes: [Class.Wizard],
    defaultImage: "OMN108",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Flash Bolt",
    printings: [{
        artists: ["Surya Prasetya"],
      
      identifier: "OMN108",
      image: "OMN108",
      
      
      print: "OMN108",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN108"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN108",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Wizard Instant",

    arcane: 1,
    
    cost: 2,
    
    
    functionalText: `Deal 1 arcane damage to target hero.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
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
    artists: ["Marco González"],
    cardIdentifier: "flittering-forcefield-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN181",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Flittering Forcefield",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "OMN181",
      image: "OMN181",
      
      
      print: "OMN181",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN181"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN181",
    subtypes: [],
    types: [Type.DefenseReaction],
    typeText: "Lightning Defense Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `While this is defending, if you've played an instant card this chain link, this gets +1{d}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "flittering-forcefield-yellow",
    classes: [Class.NotClassed],
    defaultImage: "OMN182",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Flittering Forcefield",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "OMN182",
      image: "OMN182",
      
      
      print: "OMN182",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN182"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN182",
    subtypes: [],
    types: [Type.DefenseReaction],
    typeText: "Lightning Defense Reaction",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `While this is defending, if you've played an instant card this chain link, this gets +1{d}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "flittering-forcefield-blue",
    classes: [Class.NotClassed],
    defaultImage: "OMN183",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Flittering Forcefield",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "OMN183",
      image: "OMN183",
      
      
      print: "OMN183",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN183"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN183",
    subtypes: [],
    types: [Type.DefenseReaction],
    typeText: "Lightning Defense Reaction",

    
    
    cost: 0,
    defense: 1,
    
    functionalText: `While this is defending, if you've played an instant card this chain link, this gets +1{d}.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Muhammad Fajri"],
    cardIdentifier: "flittering-spike-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN166",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Flittering Spike",
    printings: [{
        artists: ["Muhammad Fajri"],
      
      identifier: "OMN166",
      image: "OMN166",
      
      
      print: "OMN166",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN166"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN166",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `If you've played an instant card this chain link, this gets +2{p}.

When this hits, create a Lightning Flow token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Muhammad Fajri"],
    cardIdentifier: "flittering-spike-yellow",
    classes: [Class.NotClassed],
    defaultImage: "OMN167",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Flittering Spike",
    printings: [{
        artists: ["Muhammad Fajri"],
      
      identifier: "OMN167",
      image: "OMN167",
      
      
      print: "OMN167",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN167"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN167",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `If you've played an instant card this chain link, this gets +2{p}.

When this hits, create a Lightning Flow token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Muhammad Fajri"],
    cardIdentifier: "flittering-spike-blue",
    classes: [Class.NotClassed],
    defaultImage: "OMN168",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Flittering Spike",
    printings: [{
        artists: ["Muhammad Fajri"],
      
      identifier: "OMN168",
      image: "OMN168",
      
      
      print: "OMN168",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN168"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN168",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `If you've played an instant card this chain link, this gets +2{p}.

When this hits, create a Lightning Flow token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Wirawan Pranoto"],
    cardIdentifier: "flow-through-blue",
    classes: [Class.NotClassed],
    defaultImage: "OMN158",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Flow Through",
    printings: [{
        artists: ["Wirawan Pranoto"],
      
      identifier: "OMN158",
      image: "OMN158",
      
      
      print: "OMN158",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN158"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN158",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Instant",

    
    
    cost: 0,
    
    
    functionalText: `Target Lightning attack gets +1{p} and "When this hits, create a Lightning Flow token."`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
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
    
    
    
    
    keywords: [Keyword.Fragment],
    
    
    
  
    
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
    
    
    
    
    keywords: [Keyword.Fragment],
    
    
    
  
    
    pitch: 1,
    power: 7,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "gate-to-iarathael",
    classes: [Class.NotClassed],
    defaultImage: "IAR222-MV",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Baalghor,Hero.Chane,Hero.Levia,Hero.Shiyana,Hero.Vynnset,Hero.Yorick],
    name: "Gate to íArathael",
    printings: [{
        artists: ["Carlos Cruchaga"],
      foiling: Foiling.Cold,
      identifier: "IAR222",
      image: "IAR222-MV",
      
      
      print: "IAR222-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel],
    rarity: Rarity.Marvel,
    setIdentifiers: ["IAR222"],
    sets: [Release.IAR,Release.OmensOfTheThirdAge],
    specialImage: "IAR222-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Token],
    typeText: "Shadow Token - Aura",

    
    
    
    
    
    functionalText: `**Instant** - {r}, destroy this: You may play target action card with blood debt from your banished zone this turn.`,
    
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Stormy Elia Fanggidae"],
    cardIdentifier: "gauntlet-of-sword-and-sorcery",
    classes: [Class.Runeblade],
    defaultImage: "OMN086-CF",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
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
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
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
    artists: ["Mark Poole"],
    cardIdentifier: "golden-skull-yellow",
    classes: [Class.Necromancer,Class.Pirate],
    defaultImage: "OMN240",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.GravyBones],
    name: "Golden Skull",
    printings: [{
        artists: ["Mark Poole"],
      
      identifier: "OMN240",
      image: "OMN240",
      isExpansionSlot: true,
      
      print: "OMN240",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Mark Poole"],
      foiling: Foiling.Cold,
      identifier: "OMN240",
      image: "OMN240-MV",
      
      
      print: "OMN240-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN240"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN240-MV",
    subtypes: [Subtype.Item,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Pirate Necromancer Action - Item",

    
    
    cost: 0,
    
    
    functionalText: `**Go again**

This counts as a Gold.

**Watery Grave**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.WateryGrave],
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Amirul HHF"],
    cardIdentifier: "haven-veil-red",
    classes: [Class.Wizard],
    defaultImage: "OMN137",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Blaze,Hero.Broscilio,Hero.Emperor,Hero.Iyslander,Hero.Kano,Hero.Oscilio,Hero.Verdance],
    name: "Haven Veil",
    printings: [{
        artists: ["Amirul HHF"],
      
      identifier: "OMN137",
      image: "OMN137",
      
      
      print: "OMN137",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN137"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN137",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Wizard Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `When this enters the arena, prevent the next 3 arcane damage that would be dealt to you this turn.

At the beginning of your action phase, destroy this.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Amirul HHF"],
    cardIdentifier: "haven-veil-yellow",
    classes: [Class.Wizard],
    defaultImage: "OMN138",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Blaze,Hero.Broscilio,Hero.Iyslander,Hero.Kano,Hero.Oscilio,Hero.Verdance],
    name: "Haven Veil",
    printings: [{
        artists: ["Amirul HHF"],
      
      identifier: "OMN138",
      image: "OMN138",
      
      
      print: "OMN138",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN138"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN138",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Wizard Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `When this enters the arena, prevent the next 2 arcane damage that would be dealt to you this turn.

At the beginning of your action phase, destroy this.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Amirul HHF"],
    cardIdentifier: "haven-veil-blue",
    classes: [Class.Wizard],
    defaultImage: "OMN139",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Blaze,Hero.Broscilio,Hero.Iyslander,Hero.Kano,Hero.Oscilio,Hero.Verdance],
    name: "Haven Veil",
    printings: [{
        artists: ["Amirul HHF"],
      
      identifier: "OMN139",
      image: "OMN139",
      
      
      print: "OMN139",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN139"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN139",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Wizard Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `When this enters the arena, prevent the next 1 arcane damage that would be dealt to you this turn.

At the beginning of your action phase, destroy this.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Isuardi Therianto"],
    cardIdentifier: "heavens-claws-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN172",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Heaven's Claws",
    printings: [{
        artists: ["Isuardi Therianto"],
      
      identifier: "OMN172",
      image: "OMN172",
      
      
      print: "OMN172",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["AUA010","AUR009","ELE192","LXI014","OMN172","ROS095"],
    sets: [Release.FirstStrikeAurora,Release.AuroraBlitzDeck,Release.LexiBlitzDeck,Release.OmensOfTheThirdAge,Release.Rosetta,Release.TalesOfAria],
    specialImage: "OMN172",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Isuardi Therianto"],
    cardIdentifier: "heavens-claws-yellow",
    classes: [Class.NotClassed],
    defaultImage: "OMN173",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Heaven's Claws",
    printings: [{
        artists: ["Isuardi Therianto"],
      
      identifier: "OMN173",
      image: "OMN173",
      
      
      print: "OMN173",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["AUR017","ELE193","LXI019","OMN173","ROS096"],
    sets: [Release.FirstStrikeAurora,Release.LexiBlitzDeck,Release.OmensOfTheThirdAge,Release.Rosetta,Release.TalesOfAria],
    specialImage: "OMN173",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Isuardi Therianto"],
    cardIdentifier: "heavens-claws-blue",
    classes: [Class.NotClassed],
    defaultImage: "OMN174",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Heaven's Claws",
    printings: [{
        artists: ["Isuardi Therianto"],
      
      identifier: "OMN174",
      image: "OMN174",
      
      
      print: "OMN174",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["AST025","AUA020","ELE194","OMN174","ROS097"],
    sets: [Release.ArmoryDeckAurora,Release.AuroraBlitzDeck,Release.OmensOfTheThirdAge,Release.Rosetta,Release.TalesOfAria],
    specialImage: "OMN174",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["M Fakhrur Rozzi"],
    cardIdentifier: "helm-of-astral-sanctuary",
    classes: [Class.Generic],
    defaultImage: "OMN209",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
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
    artists: ["Othon Nikolaidis"],
    cardIdentifier: "holo-shield-red",
    classes: [Class.Illusionist],
    defaultImage: "OMN030",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Holo Shield",
    printings: [{
        artists: ["Othon Nikolaidis"],
      
      identifier: "OMN030",
      image: "OMN030",
      
      
      print: "OMN030",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN030"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN030",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Illusionist Instant - Aura",

    
    
    cost: 1,
    
    
    functionalText: `**Ward X**, where X is 4 if this has a holo counter. Otherwise, X is 1.`,
    
    
    
    
    keywords: [Keyword.Ward],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Othon Nikolaidis"],
    cardIdentifier: "holo-shield-yellow",
    classes: [Class.Illusionist],
    defaultImage: "OMN031",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Holo Shield",
    printings: [{
        artists: ["Othon Nikolaidis"],
      
      identifier: "OMN031",
      image: "OMN031",
      
      
      print: "OMN031",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN031"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN031",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Illusionist Instant - Aura",

    
    
    cost: 1,
    
    
    functionalText: `**Ward X**, where X is 3 if this has a holo counter. Otherwise, X is 1.`,
    
    
    
    
    keywords: [Keyword.Ward],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Othon Nikolaidis"],
    cardIdentifier: "holo-shield-blue",
    classes: [Class.Illusionist],
    defaultImage: "OMN032",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Holo Shield",
    printings: [{
        artists: ["Othon Nikolaidis"],
      
      identifier: "OMN032",
      image: "OMN032",
      
      
      print: "OMN032",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN032"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN032",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Illusionist Instant - Aura",

    
    
    cost: 1,
    
    
    functionalText: `**Ward X**, where X is 2 if this has a holo counter. Otherwise, X is 1.`,
    
    
    
    
    keywords: [Keyword.Ward],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Saad Irfan"],
    cardIdentifier: "induce-panic-yellow",
    classes: [Class.NotClassed],
    defaultImage: "OMN246",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Crackni,Hero.Slippy],
    name: "Induce Panic",
    printings: [{
        artists: ["Saad Irfan"],
      
      identifier: "OMN246",
      image: "OMN246",
      isExpansionSlot: true,
      
      print: "OMN246",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN246"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN246",
    subtypes: [],
    types: [Type.Block],
    typeText: "Chaos Block",

    
    
    
    defense: 2,
    
    functionalText: `When this defends, choose a color. Each hero reveals a random card from their hand. If it's the chosen color, they discard it.`,
    
    
    
    
    
    
    
    meta: [Meta.Expansion],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Chaos],
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "laced-lightning",
    classes: [Class.NotClassed],
    defaultImage: "OMN144",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Taylor,Hero.Zyggy],
    name: "Laced Lightning",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "OMN144",
      image: "OMN144",
      
      
      print: "OMN144",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN144"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN144",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Lightning Equipment - Legs",

    
    
    
    defense: 0,
    
    functionalText: `**Instant** - {r}{r}, destroy this: Prevent the next 1 damage that would be dealt to you this turn. If you prevent damage this way, create an Embodiment of Lightning token.`,
    
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "leech-memory-red",
    classes: [Class.Runeblade],
    defaultImage: "OMN091",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Leech Memory",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "OMN091",
      image: "OMN091",
      
      
      print: "OMN091",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN091"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN091",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Runeblade Action",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `The next attack action card you play this turn gets +3{p} and "Whenever this deals damage to a hero, you may put an attack action card from your graveyard on the bottom of your deck."

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
  
    
    pitch: 1,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "leech-renown-red",
    classes: [Class.Runeblade],
    defaultImage: "OMN092",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Leech Renown",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "OMN092",
      image: "OMN092",
      
      
      print: "OMN092",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN092"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN092",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Runeblade Action",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `The next attack action card you play this turn gets +3{p} and "Whenever this deals damage to a hero, destroy an aura token they control."

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
  
    
    pitch: 1,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "leech-vitality-red",
    classes: [Class.Runeblade],
    defaultImage: "OMN093",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Leech Vitality",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "OMN093",
      image: "OMN093",
      
      
      print: "OMN093",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN093"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN093",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Runeblade Action",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `The next attack action card you play this turn gets +3{p} and "Whenever this deals damage to a hero, gain 1{h}."

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
  
    
    pitch: 1,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    
  
  
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
    artists: ["Edward Chee"],
    cardIdentifier: "lightning-form-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN150",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Lightning Form",
    printings: [{
        artists: ["Edward Chee"],
      
      identifier: "OMN150",
      image: "OMN150",
      
      
      print: "OMN150",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["AUA012","LGS308","OMN150","ROS082"],
    sets: [Release.AuroraBlitzDeck,Release.OmensOfTheThirdAge,Release.Promos,Release.Rosetta],
    specialImage: "OMN150",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `When this hits, create an Embodiment of Lightning token.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Orson CaptainSass"],
    cardIdentifier: "lightning-overload-red",
    classes: [Class.Wizard],
    defaultImage: "OMN115",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Lightning Overload",
    printings: [{
        artists: ["Orson CaptainSass"],
      
      identifier: "OMN115",
      image: "OMN115",
      
      
      print: "OMN115",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN115"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN115",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Action",

    arcane: 4,
    
    cost: 1,
    defense: 3,
    
    functionalText: `Deal 4 arcane damage to any target.

**Starfall** - If an instant card has been put into your graveyard this turn, create a Lightning Flow token.`,
    
    
    
    
    keywords: [Keyword.Starfall],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Orson CaptainSass"],
    cardIdentifier: "lightning-overload-yellow",
    classes: [Class.Wizard],
    defaultImage: "OMN116",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Lightning Overload",
    printings: [{
        artists: ["Orson CaptainSass"],
      
      identifier: "OMN116",
      image: "OMN116",
      
      
      print: "OMN116",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN116"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN116",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Action",

    arcane: 3,
    
    cost: 1,
    defense: 3,
    
    functionalText: `Deal 3 arcane damage to any target.

**Starfall** - If an instant card has been put into your graveyard this turn, create a Lightning Flow token.`,
    
    
    
    
    keywords: [Keyword.Starfall],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Orson CaptainSass"],
    cardIdentifier: "lightning-overload-blue",
    classes: [Class.Wizard],
    defaultImage: "OMN117",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Lightning Overload",
    printings: [{
        artists: ["Orson CaptainSass"],
      
      identifier: "OMN117",
      image: "OMN117",
      
      
      print: "OMN117",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN117"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN117",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Action",

    arcane: 2,
    
    cost: 1,
    defense: 3,
    
    functionalText: `Deal 2 arcane damage to any target.

**Starfall** - If an instant card has been put into your graveyard this turn, create a Lightning Flow token.`,
    
    
    
    
    keywords: [Keyword.Starfall],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
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
    artists: ["Farhan Pratama"],
    cardIdentifier: "meteoric-impact-red",
    classes: [Class.Wizard],
    defaultImage: "OMN118",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Meteoric Impact",
    printings: [{
        artists: ["Farhan Pratama"],
      
      identifier: "OMN118",
      image: "OMN118",
      
      
      print: "OMN118",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN118"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN118",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Action",

    arcane: 3,
    
    cost: 1,
    defense: 3,
    
    functionalText: `Deal 3 arcane damage to any target.

**Starfall** - If an instant card has been put into your graveyard this turn, instead deal 5 arcane damage.`,
    
    
    
    
    keywords: [Keyword.Starfall],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Farhan Pratama"],
    cardIdentifier: "meteoric-impact-yellow",
    classes: [Class.Wizard],
    defaultImage: "OMN119",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Meteoric Impact",
    printings: [{
        artists: ["Farhan Pratama"],
      
      identifier: "OMN119",
      image: "OMN119",
      
      
      print: "OMN119",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN119"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN119",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Action",

    arcane: 2,
    
    cost: 1,
    defense: 3,
    
    functionalText: `Deal 2 arcane damage to any target.

**Starfall** - If an instant card has been put into your graveyard this turn, instead deal 4 arcane damage.`,
    
    
    
    
    keywords: [Keyword.Starfall],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Farhan Pratama"],
    cardIdentifier: "meteoric-impact-blue",
    classes: [Class.Wizard],
    defaultImage: "OMN120",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Meteoric Impact",
    printings: [{
        artists: ["Farhan Pratama"],
      
      identifier: "OMN120",
      image: "OMN120",
      
      
      print: "OMN120",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN120"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN120",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Action",

    arcane: 1,
    
    cost: 1,
    defense: 3,
    
    functionalText: `Deal 1 arcane damage to any target.

**Starfall** - If an instant card has been put into your graveyard this turn, instead deal 3 arcane damage.`,
    
    
    
    
    keywords: [Keyword.Starfall],
    
    
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
    artists: ["Wirawan Pranoto"],
    cardIdentifier: "nebulus-cycle-yellow",
    classes: [Class.Illusionist],
    defaultImage: "OMN035",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Nebulus Cycle",
    printings: [{
        artists: ["Wirawan Pranoto"],
      
      identifier: "OMN035",
      image: "OMN035",
      
      
      print: "OMN035",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Wirawan Pranoto"],
      foiling: Foiling.Cold,
      identifier: "OMN035",
      image: "OMN035-CF",
      
      
      print: "OMN035-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN035"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN035-CF",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Illusionist Instant - Aura",

    
    
    cost: 1,
    
    
    functionalText: `When this leaves the arena, create a Ponder token.

**Ward 2**`,
    
    
    
    
    keywords: [Keyword.Ward],
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "nourishing-glow-blue",
    classes: [Class.Illusionist],
    defaultImage: "OMN038",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Zyggy],
    name: "Nourishing Glow",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "OMN038",
      image: "OMN038",
      
      
      print: "OMN038",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Faizal Fikri"],
      foiling: Foiling.Cold,
      identifier: "OMN038",
      image: "OMN038-CF",
      
      
      print: "OMN038-Cold-Extended Art",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN038"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN038-CF",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Illusionist Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `When this enters the arena, gain 1{h}.

**Ward 1**`,
    
    
    
    
    keywords: [Keyword.Ward],
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Jefrey Yonathan"],
    cardIdentifier: "nucleus-aetherbolt-red",
    classes: [Class.Wizard],
    defaultImage: "OMN135",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Blaze,Hero.Broscilio,Hero.Emperor,Hero.Iyslander,Hero.Kano,Hero.Oscilio,Hero.Verdance],
    name: "Nucleus Aetherbolt",
    printings: [{
        artists: ["Jefrey Yonathan"],
      
      identifier: "OMN135",
      image: "OMN135",
      
      
      print: "OMN135",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN135"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN135",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Wizard Action",

    arcane: 3,
    
    cost: 0,
    defense: 2,
    
    functionalText: `Deal 3 arcane damage to any target.

If this deals damage, you may {t} your hero. If you do, your hero deals 1 arcane damage to any target.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    
  
  
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
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
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
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
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
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
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
    setIdentifiers: ["GEM155","OMN065","SBA016"],
    sets: [Release.BriarSilverAgeDeck,Release.GEM,Release.OmensOfTheThirdAge],
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
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
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
    
    
    
    
    keywords: [Keyword.Fragment],
    
    
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

    arcane: 1,
    
    cost: 2,
    defense: 3,
    
    functionalText: `Whenever this fragments, deal 1 arcane damage to the defending hero.

**Fragment**`,
    
    
    
    
    keywords: [Keyword.Fragment],
    
    
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

    arcane: 1,
    
    cost: 2,
    defense: 3,
    
    functionalText: `Whenever this fragments, deal 1 arcane damage to the defending hero.

**Fragment**`,
    
    
    
    
    keywords: [Keyword.Fragment],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Henrique Lindner","Tomi Ong"],
    cardIdentifier: "ponder",
    classes: [Class.Generic],
    defaultImage: "OMN225",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Ponder",
    printings: [{
        artists: ["Tomi Ong"],
      
      identifier: "OMN225",
      image: "OMN225",
      
      
      print: "OMN225",
      rarity: Rarity.Basic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Basic,Rarity.Common,Rarity.Marvel,Rarity.Promo,Rarity.Token],
    rarity: Rarity.Basic,
    setIdentifiers: ["AZS031","DYN244","FAB489","LGS128","OMN225","OSC029","OUT237","ROS237","SBZ033","UZU031"],
    sets: [Release.ArmoryDeckZyggy,Release.BlazeSilverAgeDeck,Release.Dynasty,Release.OmensOfTheThirdAge,Release.OscilioBlitzDeck,Release.Outsiders,Release.Promos,Release.Rosetta,Release.UzuriBlitzDeck],
    specialImage: "OMN225",
    subtypes: [Subtype.Aura],
    types: [Type.Token],
    typeText: "Generic Token - Aura",

    
    
    
    
    
    functionalText: `At the beginning of your end phase, destroy this and draw a card.`,
    
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
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
    
    
    
    
    keywords: [Keyword.Fragment],
    
    
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
    
    
    
    
    keywords: [Keyword.Fragment],
    
    
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
    
    
    
    
    keywords: [Keyword.Fragment],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Jackson Tjota"],
    cardIdentifier: "quick-succession-red",
    classes: [Class.Runeblade],
    defaultImage: "OMN083",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Quick Succession",
    printings: [{
        artists: ["Jackson Tjota"],
      
      identifier: "OMN083",
      image: "OMN083",
      
      
      print: "OMN083",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN083"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN083",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Runelbade Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `The next Runeblade or Lightning attack action card you play this turn gets **go again**.

Your next 3 attacks this turn get +1{p} while they have go again.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Jackson Tjota"],
    cardIdentifier: "quick-succession-yellow",
    classes: [Class.Runeblade],
    defaultImage: "OMN084",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Quick Succession",
    printings: [{
        artists: ["Jackson Tjota"],
      
      identifier: "OMN084",
      image: "OMN084",
      
      
      print: "OMN084",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN084"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN084",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Runelbade Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `The next Runeblade or Lightning attack action card you play this turn gets **go again**.

Your next 2 attacks this turn get +1{p} while they have go again.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Jackson Tjota"],
    cardIdentifier: "quick-succession-blue",
    classes: [Class.Runeblade],
    defaultImage: "OMN085",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Quick Succession",
    printings: [{
        artists: ["Jackson Tjota"],
      
      identifier: "OMN085",
      image: "OMN085",
      
      
      print: "OMN085",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN085"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN085",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Runelbade Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `The next Runeblade or Lightning attack action card you play this turn gets **go again**.

Your next attack this turn get +1{p} while it has go again.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
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
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
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
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-envy-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR152-MV",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Runechant of Envy",
    printings: [{
        artists: ["MJ Fetesio"],
      foiling: Foiling.Cold,
      identifier: "IAR152",
      image: "IAR152-MV",
      
      
      print: "IAR152-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel],
    rarity: Rarity.Marvel,
    setIdentifiers: ["IAR152"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "IAR152-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, gain 1{h}.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-gluttony-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR153-MV",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Runechant of Gluttony",
    printings: [{
        artists: ["MJ Fetesio"],
      foiling: Foiling.Cold,
      identifier: "IAR153",
      image: "IAR153-MV",
      
      
      print: "IAR153-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel],
    rarity: Rarity.Marvel,
    setIdentifiers: ["IAR153"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "IAR153-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, gain {r}.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-greed-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR145-MV",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Runechant of Greed",
    printings: [{
        artists: ["MJ Fetesio"],
      foiling: Foiling.Cold,
      identifier: "IAR145",
      image: "IAR145-MV",
      
      
      print: "IAR145-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel],
    rarity: Rarity.Marvel,
    setIdentifiers: ["IAR145"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "IAR145-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, draw a card.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-lust-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR154-MV",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Runechant of Lust",
    printings: [{
        artists: ["MJ Fetesio"],
      foiling: Foiling.Cold,
      identifier: "IAR154",
      image: "IAR154-MV",
      
      
      print: "IAR154-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel],
    rarity: Rarity.Marvel,
    setIdentifiers: ["IAR154"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "IAR154-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, create a Runechant token.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-pride-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR155-MV",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Runechant of Pride",
    printings: [{
        artists: ["MJ Fetesio"],
      foiling: Foiling.Cold,
      identifier: "IAR155",
      image: "IAR155-MV",
      
      
      print: "IAR155-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel],
    rarity: Rarity.Marvel,
    setIdentifiers: ["IAR155"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "IAR155-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, it gets +1{p}.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-sloth-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR156-MV",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Runechant of Sloth",
    printings: [{
        artists: ["MJ Fetesio"],
      foiling: Foiling.Cold,
      identifier: "IAR156",
      image: "IAR156-MV",
      
      
      print: "IAR156-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel],
    rarity: Rarity.Marvel,
    setIdentifiers: ["IAR156"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "IAR156-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, it gets **go again**.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-wrath-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR157-MV",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Runechant of Wrath",
    printings: [{
        artists: ["MJ Fetesio"],
      foiling: Foiling.Cold,
      identifier: "IAR157",
      image: "IAR157-MV",
      
      
      print: "IAR157-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel],
    rarity: Rarity.Marvel,
    setIdentifiers: ["IAR157"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "IAR157-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, it gets **overpower**.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["João G. Santos"],
    cardIdentifier: "rush-of-power-red",
    classes: [Class.Runeblade],
    defaultImage: "OMN068",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Rush of Power",
    printings: [{
        artists: ["João G. Santos"],
      
      identifier: "OMN068",
      image: "OMN068",
      
      
      print: "OMN068",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN068","SBA018"],
    sets: [Release.BriarSilverAgeDeck,Release.OmensOfTheThirdAge],
    specialImage: "OMN068",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Quickstrike** - If this has go again, it gets +1{p}.

When this hits a hero, deal 1 arcane damage to them.`,
    
    
    
    
    keywords: [Keyword.Quickstrike],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["João G. Santos"],
    cardIdentifier: "rush-of-power-yellow",
    classes: [Class.Runeblade],
    defaultImage: "OMN069",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Rush of Power",
    printings: [{
        artists: ["João G. Santos"],
      
      identifier: "OMN069",
      image: "OMN069",
      
      
      print: "OMN069",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN069"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN069",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Quickstrike** - If this has go again, it gets +1{p}.

When this hits a hero, deal 1 arcane damage to them.`,
    
    
    
    
    keywords: [Keyword.Quickstrike],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["João G. Santos"],
    cardIdentifier: "rush-of-power-blue",
    classes: [Class.Runeblade],
    defaultImage: "OMN070",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Rush of Power",
    printings: [{
        artists: ["João G. Santos"],
      
      identifier: "OMN070",
      image: "OMN070",
      
      
      print: "OMN070",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN070"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN070",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Quickstrike** - If this has go again, it gets +1{p}.

When this hits a hero, deal 1 arcane damage to them.`,
    
    
    
    
    keywords: [Keyword.Quickstrike],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
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
    
    
    
    
    keywords: [Keyword.Fragment],
    
    
    
  
    
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
    rarities: [Rarity.Basic,Rarity.Common],
    rarity: Rarity.Basic,
    setIdentifiers: ["OMN049","SBA002"],
    sets: [Release.BriarSilverAgeDeck,Release.OmensOfTheThirdAge],
    specialImage: "OMN049",
    subtypes: [Subtype.TwoHanded,Subtype.Sword],
    types: [Type.Weapon],
    typeText: "Lightning Runeblade Weapon - Sword (2H)",

    arcane: 1,
    
    
    
    
    functionalText: `**Action** - {t}: **Attack**. Activate this only if you control a Lightning attack.

When this hits a hero, deal 1 arcane damage to them.`,
    
    
    
    
    
    
    
    
  
    
    
    power: 1,
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Immanuela Crovius"],
    cardIdentifier: "seekers-gilet",
    classes: [Class.Generic],
    defaultImage: "OMN206",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Seeker's Gilet",
    printings: [{
        artists: ["Immanuela Crovius"],
      
      identifier: "OMN206",
      image: "OMN206",
      
      
      print: "OMN206",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN206","OUT176"],
    sets: [Release.OmensOfTheThirdAge,Release.Outsiders],
    specialImage: "OMN206",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Chest",

    
    
    
    
    
    functionalText: `**Instant** - {r}, destroy Seeker's Gilet: Prevent the next 1 damage that would be dealt to your hero this turn. **Opt 1**`,
    
    
    
    
    keywords: [Keyword.Opt],
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Lizhe Liang"],
    cardIdentifier: "seekers-hood",
    classes: [Class.Generic],
    defaultImage: "OMN205",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Seeker's Hood",
    printings: [{
        artists: ["Lizhe Liang"],
      
      identifier: "OMN205",
      image: "OMN205",
      
      
      print: "OMN205",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN205","OUT175"],
    sets: [Release.OmensOfTheThirdAge,Release.Outsiders],
    specialImage: "OMN205",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Head",

    
    
    
    
    
    functionalText: `**Instant** - {r}, destroy Seeker's Hood: Prevent the next 1 damage that would be dealt to your hero this turn. **Opt 1**`,
    
    
    
    
    keywords: [Keyword.Opt],
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Amelia Tan"],
    cardIdentifier: "seekers-leggings",
    classes: [Class.Generic],
    defaultImage: "OMN208",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Seeker's Leggings",
    printings: [{
        artists: ["Amelia Tan"],
      
      identifier: "OMN208",
      image: "OMN208",
      
      
      print: "OMN208",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN208","OUT178"],
    sets: [Release.OmensOfTheThirdAge,Release.Outsiders],
    specialImage: "OMN208",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Legs",

    
    
    
    
    
    functionalText: `**Instant** - {r}, destroy Seeker's Leggings: Prevent the next 1 damage that would be dealt to your hero this turn. **Opt 1**`,
    
    
    
    
    keywords: [Keyword.Opt],
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Felicia Liang"],
    cardIdentifier: "seekers-mitts",
    classes: [Class.Generic],
    defaultImage: "OMN207",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Seeker's Mitts",
    printings: [{
        artists: ["Felicia Liang"],
      
      identifier: "OMN207",
      image: "OMN207",
      
      
      print: "OMN207",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN207","OUT177","SBZ006"],
    sets: [Release.BlazeSilverAgeDeck,Release.OmensOfTheThirdAge,Release.Outsiders],
    specialImage: "OMN207",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Arms",

    
    
    
    
    
    functionalText: `**Instant** - {r}, destroy Seeker's Mitts: Prevent the next 1 damage that would be dealt to your hero this turn. **Opt 1**`,
    
    
    
    
    keywords: [Keyword.Opt],
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
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
    
    
    
    
    keywords: [Keyword.Fragment],
    
    
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
    
    
    
    
    keywords: [Keyword.Fragment],
    
    
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
    
    
    
    
    keywords: [Keyword.Fragment],
    
    
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
    artists: ["Daniel Jiménez","Simon Wong"],
    cardIdentifier: "sigil-of-lightning-blue",
    classes: [Class.NotClassed],
    defaultImage: "OMN200",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Sigil of Lightning",
    printings: [{
        artists: ["Simon Wong"],
      
      identifier: "OMN200",
      image: "OMN200",
      
      
      print: "OMN200",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["AUA026","LGS311","OMN200","OSC026","ROS113"],
    sets: [Release.AuroraBlitzDeck,Release.OmensOfTheThirdAge,Release.OscilioBlitzDeck,Release.Promos,Release.Rosetta],
    specialImage: "OMN200",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `At the beginning of your action phase, destroy this.

When this leaves the arena, create an Embodiment of Lightning token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Audy Ravindra"],
    cardIdentifier: "singeing-flowstride-red",
    classes: [Class.Runeblade],
    defaultImage: "OMN071",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Singeing Flowstride",
    printings: [{
        artists: ["Audy Ravindra"],
      
      identifier: "OMN071",
      image: "OMN071",
      
      
      print: "OMN071",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN071"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN071",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 1,
    defense: 3,
    
    functionalText: `**Quickstrike** - If this has go again, it gets "When this attacks a hero, deal 1 arcane damage to them."

The first time this deals damage to a hero, create a Lightning Flow token.`,
    
    
    
    
    keywords: [Keyword.Quickstrike],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Audy Ravindra"],
    cardIdentifier: "singeing-flowstride-yellow",
    classes: [Class.Runeblade],
    defaultImage: "OMN072",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Singeing Flowstride",
    printings: [{
        artists: ["Audy Ravindra"],
      
      identifier: "OMN072",
      image: "OMN072",
      
      
      print: "OMN072",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN072"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN072",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 1,
    defense: 3,
    
    functionalText: `**Quickstrike** - If this has go again, it gets "When this attacks a hero, deal 1 arcane damage to them."

The first time this deals damage to a hero, create a Lightning Flow token.`,
    
    
    
    
    keywords: [Keyword.Quickstrike],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Audy Ravindra"],
    cardIdentifier: "singeing-flowstride-blue",
    classes: [Class.Runeblade],
    defaultImage: "OMN073",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Singeing Flowstride",
    printings: [{
        artists: ["Audy Ravindra"],
      
      identifier: "OMN073",
      image: "OMN073",
      
      
      print: "OMN073",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN073"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN073",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 1,
    defense: 3,
    
    functionalText: `**Quickstrike** - If this has go again, it gets "When this attacks a hero, deal 1 arcane damage to them."

The first time this deals damage to a hero, create a Lightning Flow token.`,
    
    
    
    
    keywords: [Keyword.Quickstrike],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Ilham Bahtiar"],
    cardIdentifier: "snap-fingers",
    classes: [Class.Runeblade],
    defaultImage: "OMN050",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Taylor],
    name: "Snap Fingers",
    printings: [{
        artists: ["Ilham Bahtiar"],
      
      identifier: "OMN050",
      image: "OMN050",
      
      
      print: "OMN050",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Ilham Bahtiar"],
      foiling: Foiling.Cold,
      identifier: "OMN050",
      image: "OMN050-CF",
      
      
      print: "OMN050-Cold",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN050"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN050-CF",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Lightning Runeblade Equipment - Arms",

    arcane: 1,
    
    
    defense: 0,
    
    functionalText: `**Instant** - {r}, destroy this: Target Lightning attack action card you control on the active chain link deals 1 arcane damage to the defending hero.`,
    
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "spellbane-sigil-blue",
    classes: [Class.NotClassed],
    defaultImage: "OMN201",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Spellbane Sigil",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "OMN201",
      image: "OMN201",
      
      
      print: "OMN201",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Thomas Ressuge"],
      foiling: Foiling.Cold,
      identifier: "OMN201",
      image: "OMN201-MV",
      
      
      print: "OMN201-Cold-Alternate Art",
      rarity: Rarity.Marvel,
      set: Release.OmensOfTheThirdAge,
      
      treatment: Treatment.AA,treatments: [Treatment.AA,Treatment.FA],
    },],
    rarities: [Rarity.Common,Rarity.Marvel],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN201"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN201-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `At the beginning of your action phase, destroy this.

**Arcane Barrier X**`,
    
    
    
    
    keywords: [Keyword.ArcaneBarrier],
    
    
    
  
    
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
    artists: ["Galih M"],
    cardIdentifier: "starflow-robes",
    classes: [Class.NotClassed],
    defaultImage: "OMN143",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Taylor,Hero.Zyggy],
    name: "Starflow Robes",
    printings: [{
        artists: ["Galih M"],
      
      identifier: "OMN143",
      image: "OMN143",
      
      
      print: "OMN143",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN143"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN143",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Lightning Equipment - Chest",

    
    
    
    defense: 0,
    
    functionalText: `**Instant** - {r}{r}, destroy this: Prevent the next 1 damage that would be dealt to you this turn. If you prevent damage this way, create a Lightning Flow token.`,
    
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "starlight-road-blue",
    classes: [Class.NotClassed],
    defaultImage: "OMN189",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Starlight Road",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "OMN189",
      image: "OMN189",
      
      
      print: "OMN189",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN189"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN189",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Instant",

    
    
    cost: 0,
    
    
    functionalText: `Create an Embodiemtn of Lightning or Lightning Flow token.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Yosi Saputra"],
    cardIdentifier: "starworld-warning-yellow",
    classes: [Class.NotClassed],
    defaultImage: "OMN188",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Starworld Warning",
    printings: [{
        artists: ["Yosi Saputra"],
      
      identifier: "OMN188",
      image: "OMN188",
      
      
      print: "OMN188",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN188"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN188",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Instant",

    
    
    cost: 1,
    
    
    functionalText: `Create 2 Lightning Flow tokens.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
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
    artists: ["Nino Setiawan"],
    cardIdentifier: "stellar-glide-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN175",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Stellar Glide",
    printings: [{
        artists: ["Nino Setiawan"],
      
      identifier: "OMN175",
      image: "OMN175",
      
      
      print: "OMN175",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN175"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN175",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this attacks, you may destroy a Lightning Flow you control. If you do, this gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Nino Setiawan"],
    cardIdentifier: "stellar-glide-yellow",
    classes: [Class.NotClassed],
    defaultImage: "OMN176",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Stellar Glide",
    printings: [{
        artists: ["Nino Setiawan"],
      
      identifier: "OMN176",
      image: "OMN176",
      
      
      print: "OMN176",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN176"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN176",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this attacks, you may destroy a Lightning Flow you control. If you do, this gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Nino Setiawan"],
    cardIdentifier: "stellar-glide-blue",
    classes: [Class.NotClassed],
    defaultImage: "OMN177",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Stellar Glide",
    printings: [{
        artists: ["Nino Setiawan"],
      
      identifier: "OMN177",
      image: "OMN177",
      
      
      print: "OMN177",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN177"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN177",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `When this attacks, you may destroy a Lightning Flow you control. If you do, this gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Henrique Lindner"],
    cardIdentifier: "step-between-red",
    classes: [Class.Generic],
    defaultImage: "OMN214",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
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
    artists: ["Faizal Fikri"],
    cardIdentifier: "stinging-sprite-red",
    classes: [Class.Runeblade],
    defaultImage: "OMN056",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Stinging Sprite",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "OMN056",
      image: "OMN056",
      
      
      print: "OMN056",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN056"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN056",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks or defends, deal 1 arcane damage to target hero.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "stinging-sprite-yellow",
    classes: [Class.Runeblade],
    defaultImage: "OMN057",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Stinging Sprite",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "OMN057",
      image: "OMN057",
      
      
      print: "OMN057",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN057"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN057",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks or defends, deal 1 arcane damage to target hero.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "stinging-sprite-blue",
    classes: [Class.Runeblade],
    defaultImage: "OMN058",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Stinging Sprite",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "OMN058",
      image: "OMN058",
      
      
      print: "OMN058",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN058"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN058",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks or defends, deal 1 arcane damage to target hero.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
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
    artists: ["Nikolay Moskvin"],
    cardIdentifier: "stormshatter-yellow",
    classes: [Class.NotClassed],
    defaultImage: "OMN191",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Stormshatter",
    printings: [{
        artists: ["Nikolay Moskvin"],
      
      identifier: "OMN191",
      image: "OMN191",
      
      
      print: "OMN191",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN191"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN191",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Instant",

    
    
    cost: 1,
    
    
    functionalText: `You may destroy a Lightning Flow you control rather than pay this card's {r} cost.

Target Lightning attack gets -3{p}.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Nikolay Moskvin"],
    cardIdentifier: "stormwhirl-blue",
    classes: [Class.NotClassed],
    defaultImage: "OMN192",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Stormwhirl",
    printings: [{
        artists: ["Nikolay Moskvin"],
      
      identifier: "OMN192",
      image: "OMN192",
      
      
      print: "OMN192",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN192"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN192",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Lightning Instant",

    
    
    cost: 1,
    
    
    functionalText: `You may destroy a Lightning Flow you control rather than pay this card's {r} cost.

Target Lightning attack gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
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
    artists: ["Nino Setiawan"],
    cardIdentifier: "stunning-swipe-red",
    classes: [Class.Runeblade],
    defaultImage: "OMN074",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Stunning Swipe",
    printings: [{
        artists: ["Nino Setiawan"],
      
      identifier: "OMN074",
      image: "OMN074",
      
      
      print: "OMN074",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN074"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN074",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Quickstrike** - If this has go again, it gets "When this attacks a hero, deal 1 arcane damage to them."

The first time this deals damage to a Lightning hero, {t} them or a weapon they control.`,
    
    
    
    
    keywords: [Keyword.Quickstrike],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 3,
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Nino Setiawan"],
    cardIdentifier: "stunning-swipe-yellow",
    classes: [Class.Runeblade],
    defaultImage: "OMN075",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Stunning Swipe",
    printings: [{
        artists: ["Nino Setiawan"],
      
      identifier: "OMN075",
      image: "OMN075",
      
      
      print: "OMN075",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN075"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN075",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Quickstrike** - If this has go again, it gets "When this attacks a hero, deal 1 arcane damage to them."

The first time this deals damage to a Lightning hero, {t} them or a weapon they control.`,
    
    
    
    
    keywords: [Keyword.Quickstrike],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 2,
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Nino Setiawan"],
    cardIdentifier: "stunning-swipe-blue",
    classes: [Class.Runeblade],
    defaultImage: "OMN076",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar],
    name: "Stunning Swipe",
    printings: [{
        artists: ["Nino Setiawan"],
      
      identifier: "OMN076",
      image: "OMN076",
      
      
      print: "OMN076",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN076"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN076",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Runeblade Action - Attack",

    arcane: 1,
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Quickstrike** - If this has go again, it gets "When this attacks a hero, deal 1 arcane damage to them."

The first time this deals damage to a Lightning hero, {t} them or a weapon they control.`,
    
    
    
    
    keywords: [Keyword.Quickstrike],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 1,
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
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
    artists: ["Yosi Saputra"],
    cardIdentifier: "tap-lessons-past-red",
    classes: [Class.Wizard],
    defaultImage: "OMN124",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Tap Lessons Past",
    printings: [{
        artists: ["Yosi Saputra"],
      
      identifier: "OMN124",
      image: "OMN124",
      
      
      print: "OMN124",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN124"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN124",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Action",

    arcane: 4,
    
    cost: 1,
    defense: 3,
    
    functionalText: `Deal 4 arcane damage to any target.

If this deals damage, you may {t} your hero. If you do, put an instant card from your graveyard on the bottom of your deck.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Yosi Saputra"],
    cardIdentifier: "tap-lessons-past-yellow",
    classes: [Class.Wizard],
    defaultImage: "OMN125",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Tap Lessons Past",
    printings: [{
        artists: ["Yosi Saputra"],
      
      identifier: "OMN125",
      image: "OMN125",
      
      
      print: "OMN125",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN125"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN125",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Action",

    arcane: 3,
    
    cost: 1,
    defense: 3,
    
    functionalText: `Deal 3 arcane damage to any target.

If this deals damage, you may {t} your hero. If you do, put an instant card from your graveyard on the bottom of your deck.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Yosi Saputra"],
    cardIdentifier: "tap-lessons-past-blue",
    classes: [Class.Wizard],
    defaultImage: "OMN126",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Broscilio,Hero.Oscilio],
    name: "Tap Lessons Past",
    printings: [{
        artists: ["Yosi Saputra"],
      
      identifier: "OMN126",
      image: "OMN126",
      
      
      print: "OMN126",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN126"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN126",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Lightning Wizard Action",

    arcane: 2,
    
    cost: 1,
    defense: 3,
    
    functionalText: `Deal 2 arcane damage to any target.

If this deals damage, you may {t} your hero. If you do, put an instant card from your graveyard on the bottom of your deck.`,
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
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
    artists: ["Mario Wibisono"],
    cardIdentifier: "tempt-over-yellow",
    classes: [Class.Generic],
    defaultImage: "OMN215",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen,Hero.Zyggy],
    name: "Tempt Over",
    printings: [{
        artists: ["Mario Wibisono"],
      
      identifier: "OMN215",
      image: "OMN215",
      
      
      print: "OMN215",
      rarity: Rarity.Majestic,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["OMN215"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN215",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks a hero, **steal** an aura token they control until end of turn.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["soyameii"],
    cardIdentifier: "third-eye-of-the-sphinx",
    classes: [Class.Illusionist,Class.Wizard],
    defaultImage: "OMN140",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
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
    artists: ["Alexis Susani"],
    cardIdentifier: "thunderous-retort-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN196",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Thunderous Retort",
    printings: [{
        artists: ["Alexis Susani"],
      
      identifier: "OMN196",
      image: "OMN196",
      
      
      print: "OMN196",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN196"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN196",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `At the beginning of your action phase, destroy this, then your next attack this turn gets **go again**.

**Arcane Barrier 3**`,
    
    
    
    
    keywords: [Keyword.ArcaneBarrier,Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Alexis Susani"],
    cardIdentifier: "thunderous-retort-yellow",
    classes: [Class.NotClassed],
    defaultImage: "OMN197",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Thunderous Retort",
    printings: [{
        artists: ["Alexis Susani"],
      
      identifier: "OMN197",
      image: "OMN197",
      
      
      print: "OMN197",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN197"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN197",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `At the beginning of your action phase, destroy this, then your next attack this turn gets **go again**.

**Arcane Barrier 2**`,
    
    
    
    
    keywords: [Keyword.ArcaneBarrier,Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Alexis Susani"],
    cardIdentifier: "thunderous-retort-blue",
    classes: [Class.NotClassed],
    defaultImage: "OMN198",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Thunderous Retort",
    printings: [{
        artists: ["Alexis Susani"],
      
      identifier: "OMN198",
      image: "OMN198",
      
      
      print: "OMN198",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN198"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN198",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Lightning Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `At the beginning of your action phase, destroy this, then your next attack this turn gets **go again**.

**Arcane Barrier 1**`,
    
    
    
    
    keywords: [Keyword.ArcaneBarrier,Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
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
    setIdentifiers: ["OMN136","SBZ017"],
    sets: [Release.BlazeSilverAgeDeck,Release.OmensOfTheThirdAge],
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
    
    
    
    
    keywords: [Keyword.Fragment],
    
    
    
  
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "visionary-of-orbits-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN151",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Visionary of Orbits",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "OMN151",
      image: "OMN151",
      
      
      print: "OMN151",
      rarity: Rarity.Rare,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["OMN151"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN151",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 3,
    defense: 2,
    
    functionalText: `When this hits, you may put an instant card from your graveyard on the bottom of your deck.`,
    
    
    
    
    
    
    
    
  
    
    pitch: 1,
    power: 7,
    
    shorthands: [Shorthand.Poppers],
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Alexis Susani"],
    cardIdentifier: "volatile-fluxor-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN178",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Volatile Fluxor",
    printings: [{
        artists: ["Alexis Susani"],
      
      identifier: "OMN178",
      image: "OMN178",
      
      
      print: "OMN178",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN178"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN178",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If you've played an instant card this chain link, this gets +3{p}.

When this hits, create a Lightning Flow token.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 1,
    power: 0,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Alexis Susani"],
    cardIdentifier: "volatile-fluxor-yellow",
    classes: [Class.NotClassed],
    defaultImage: "OMN179",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Volatile Fluxor",
    printings: [{
        artists: ["Alexis Susani"],
      
      identifier: "OMN179",
      image: "OMN179",
      
      
      print: "OMN179",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN179"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN179",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If you've played an instant card this chain link, this gets +2{p}.

When this hits, create a Lightning Flow token.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 2,
    power: 0,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Alexis Susani"],
    cardIdentifier: "volatile-fluxor-blue",
    classes: [Class.NotClassed],
    defaultImage: "OMN180",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Volatile Fluxor",
    printings: [{
        artists: ["Alexis Susani"],
      
      identifier: "OMN180",
      image: "OMN180",
      
      
      print: "OMN180",
      rarity: Rarity.Common,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["OMN180"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN180",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Lightning Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If you've played an instant card this chain link, this gets +1{p}.

When this hits, create a Lightning Flow token.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 0,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Lightning],
  
  
  },{
    artists: ["Fajareka Setiawan"],
    cardIdentifier: "voltaris-blue",
    classes: [Class.NotClassed],
    defaultImage: "OMN000-CF",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Voltaris",
    printings: [{
        artists: ["Fajareka Setiawan"],
      foiling: Foiling.Cold,
      identifier: "OMN000",
      image: "OMN000-CF",
      
      
      print: "OMN000-Cold",
      rarity: Rarity.Fabled,
      set: Release.OmensOfTheThirdAge,
      
      
    },{
        artists: ["Fajareka Setiawan"],
      foiling: Foiling.Rainbow,
      identifier: "OMN000",
      image: "OMN000-RF",
      
      
      print: "OMN000-Rainbow",
      rarity: Rarity.Fabled,
      set: Release.OmensOfTheThirdAge,
      
      
    },],
    rarities: [Rarity.Fabled],
    rarity: Rarity.Fabled,
    setIdentifiers: ["OMN000"],
    sets: [Release.OmensOfTheThirdAge],
    specialImage: "OMN000-CF",
    subtypes: [Subtype.Gem],
    types: [Type.Resource],
    typeText: "Lightning Resource - Gem",

    
    
    
    
    
    functionalText: `**Legendary**

When this is pitched, create a Lightning Flow token.`,
    
    
    
    
    keywords: [Keyword.Legendary],
    
    
    
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
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
  