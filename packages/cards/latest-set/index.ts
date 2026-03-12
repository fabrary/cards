
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
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    artists: ["Sariya Asavametha"],
    cardIdentifier: "astral-strike-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN145",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
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
    legalFormats: [Format.ClassicConstructed,Format.LivingLegend,Format.Open],
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
    artists: ["YDZ"],
    cardIdentifier: "cosmic-duality-red",
    classes: [Class.Illusionist],
    defaultImage: "OMN015",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    artists: ["Tomasz Jedruzek"],
    cardIdentifier: "flowing-stormstrike-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN152",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Flowing Stormstrike",
    printings: [{
        artists: ["Tomasz Jedruzek"],
      
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
    artists: ["Alifka Hammam"],
    cardIdentifier: "lightning-flow",
    classes: [Class.NotClassed],
    defaultImage: "OMN203",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
        artists: ["C"],
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
    artists: ["Tomasz Jedruzek"],
    cardIdentifier: "meteoric-rise-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN153",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Meteoric Rise",
    printings: [{
        artists: ["Tomasz Jedruzek"],
      
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
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "oscilio-forked-continuum",
    classes: [Class.Wizard],
    defaultImage: "OMN094",
    legalFormats: [Format.ClassicConstructed,Format.LivingLegend,Format.Open],
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
    artists: ["Edward Chee"],
    cardIdentifier: "voltbound-duality-red",
    classes: [Class.Runeblade],
    defaultImage: "OMN077",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
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
    artists: ["Tomasz Jedruzek"],
    cardIdentifier: "voltic-impact-red",
    classes: [Class.NotClassed],
    defaultImage: "OMN154",
    legalFormats: [Format.Blitz,Format.Clash,Format.ClassicConstructed,Format.Draft,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Broscilio,Hero.Lexi,Hero.Oscilio,Hero.Starvo,Hero.Zyggy],
    name: "Voltic Impact",
    printings: [{
        artists: ["Tomasz Jedruzek"],
      
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
    legalFormats: [Format.ClassicConstructed,Format.LivingLegend,Format.Open],
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
  