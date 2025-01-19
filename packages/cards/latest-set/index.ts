
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
    artists: ["Ramza Ardyputra"],
    cardIdentifier: "affirm-loyalty-red",
    classes: [Class.Warrior],
    defaultImage: "HNT103",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Affirm Loyalty",
    printings: [{
        artists: ["Ramza Ardyputra"],
      
      identifier: "HNT103",
      image: "HNT103",
      
      
      print: "HNT103",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT103"],
    sets: [Release.TheHunted],
    specialImage: "HNT103",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Draconic Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Target dagger attack gets +2{p}. If you control 2 or more Draconic chain links, create a Fealty token.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["SanSan"],
    cardIdentifier: "agility-stance-yellow",
    classes: [Class.Warrior],
    defaultImage: "HNT125",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Agility Stance",
    printings: [{
        artists: ["SanSan"],
      
      identifier: "HNT125",
      image: "HNT125",
      
      
      print: "HNT125",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["FAB313","HNT125"],
    sets: [Release.Promos,Release.TheHunted],
    specialImage: "HNT125",
    subtypes: [Subtype.Aura,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action - Aura",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Go again**

At the start of your turn, destroy this, then your dagger attacks get **go again** this turn.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Sebastian Giacobino"],
    cardIdentifier: "anaphylactic-shock-blue",
    classes: [Class.Assassin],
    defaultImage: "HNT016",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Anaphylactic Shock",
    printings: [{
        artists: ["Sebastian Giacobino"],
      
      identifier: "HNT016",
      image: "HNT016",
      
      
      print: "HNT016",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Sebastian Giacobino"],
      foiling: Foiling.R,
      identifier: "HNT016",
      image: "HNT016-EA",
      
      
      print: "HNT016-Rainbow-Extended Art",
      set: Release.TheHunted,
      
      treatment: Treatment.EA,
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT016"],
    sets: [Release.TheHunted],
    specialImage: "HNT016-EA",
    subtypes: [Subtype.Trap],
    types: [Type.Instant],
    typeText: "Assassin Instant - Trap",

    
    
    cost: 0,
    
    
    functionalText: `Each opposing hero and ally that has dealt damage to you this turn loses 1{h}.`,
    
    
    
    
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Isuardi Therianto"],
    cardIdentifier: "arakni",
    classes: [Class.Assassin],
    defaultImage: "HNT264",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.Commoner,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Arakni",
    printings: [{
        artists: ["Isuardi Therianto"],
      foiling: Foiling.C,
      identifier: "HNT264",
      image: "HNT264",
      isExpansionSlot: true,
      
      print: "HNT264-Cold",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Isuardi Therianto"],
      foiling: Foiling.C,
      identifier: "HNT264",
      image: "HNT264_BACK",
      isExpansionSlot: true,
      
      print: "HNT264-Cold-Full Art-Back",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel,Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["DYN114","HER073","HNT264"],
    sets: [Release.Dynasty,Release.Promos,Release.TheHunted],
    specialImage: "HNT264_BACK",
    subtypes: [Subtype.Young],
    types: [Type.Hero],
    typeText: "Assassin Hero - Young",

    
    
    
    
    
    functionalText: `Whenever you play a card with **contract**, you may look at the top card of target opponent's deck. You may put it on the bottom.`,
    
    hero: Hero.Arakni,
    intellect: 4,
    
    
    life: 20,
    meta: [Meta.Expansion],
    
    
    
    
    
    
    
    
    
    
    
  
  young: true
  },{
    artists: ["Dominik Mayer"],
    cardIdentifier: "arakni-5lp3d-7hru-7h3-cr4x",
    classes: [Class.Assassin],
    defaultImage: "HNT261",
    legalFormats: [Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open],
    legalHeroes: [],
    name: "Arakni, 5L!p3d 7hRu 7h3 cR4X",
    printings: [{
        artists: ["Dominik Mayer"],
      foiling: Foiling.C,
      identifier: "HNT261",
      image: "HNT261",
      isExpansionSlot: true,
      
      print: "HNT261-Cold-Full Art",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Promo,
    setIdentifiers: ["HER130","HNT261"],
    sets: [Release.Promos,Release.TheHunted],
    specialImage: "HNT261",
    subtypes: [],
    types: [Type.Hero],
    typeText: "Chaos Assassin Hero",

    
    
    
    
    
    functionalText: `The first attack with **stealth** each turn gets **go again**.`,
    
    hero: Hero.Slippy,
    intellect: 4,
    
    keywords: [Keyword.GoAgain],
    life: 38,
    meta: [Meta.Expansion],
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Chaos],
  
  
  },{
    artists: ["soyameii"],
    cardIdentifier: "arakni-black-widow",
    classes: [Class.Assassin],
    defaultImage: "HNT003",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Arakni, Black Widow",
    printings: [{
        artists: ["soyameii"],
      
      identifier: "HNT003",
      image: "HNT003",
      
      
      print: "HNT003",
      set: Release.TheHunted,
      
      
    },{
        artists: ["soyameii"],
      foiling: Foiling.C,
      identifier: "HNT003",
      image: "HNT003_V2",
      
      
      print: "HNT003-Cold-Full Art",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT003"],
    sets: [Release.TheHunted],
    specialImage: "HNT003_V2",
    subtypes: [],
    types: [Type.DemiHero],
    typeText: "Chaos Assassin Demi-Hero",

    
    
    
    
    
    functionalText: `**Once per Turn Attack Reaction** - Discard an Assassin card: Target Assassin attack gets +3{p}. If it has **stealth**, it gets "When this hits a hero, they banish a card from their hand."

At the beginning of your end phase, **return to the brood**.`,
    
    
    intellect: 4,
    
    
    
    
    
    
    
    
    
    
    
    specialLife: "*",
    
    
    talents: [Talent.Chaos],
  traits: [Trait.AgentOfChaos],
  
  },{
    artists: ["Federico Musetti"],
    cardIdentifier: "arakni-funnel-web",
    classes: [Class.Assassin],
    defaultImage: "HNT004",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Arakni, Funnel Web",
    printings: [{
        artists: ["Federico Musetti"],
      
      identifier: "HNT004",
      image: "HNT004",
      
      
      print: "HNT004",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Federico Musetti"],
      foiling: Foiling.C,
      identifier: "HNT004",
      image: "HNT004_V2",
      
      
      print: "HNT004-Cold-Full Art",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT004"],
    sets: [Release.TheHunted],
    specialImage: "HNT004_V2",
    subtypes: [],
    types: [Type.DemiHero],
    typeText: "Chaos Assassin Demi-Hero",

    
    
    
    
    
    functionalText: `**Once per Turn Attack Reaction** - Discard an Assassin card: Target Assassin attack gets +3{p}. If it has **stealth**, it gets "When this hits a hero, banish a card in their arsenal."

At the beginning of your end phase, **return to the brood**.`,
    
    
    intellect: 4,
    
    
    
    
    
    
    
    
    
    
    
    specialLife: "*",
    
    
    talents: [Talent.Chaos],
  traits: [Trait.AgentOfChaos],
  
  },{
    artists: ["Isuardi Therianto"],
    cardIdentifier: "arakni-huntsman",
    classes: [Class.Assassin],
    defaultImage: "HNT263",
    legalFormats: [Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open],
    legalHeroes: [],
    name: "Arakni, Huntsman",
    printings: [{
        artists: ["Isuardi Therianto"],
      foiling: Foiling.C,
      identifier: "HNT263",
      image: "HNT263",
      isExpansionSlot: true,
      
      print: "HNT263-Cold",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Isuardi Therianto"],
      foiling: Foiling.C,
      identifier: "HNT263",
      image: "HNT263_BACK",
      isExpansionSlot: true,
      
      print: "HNT263-Cold-Full Art-Back",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Majestic,
    setIdentifiers: ["DYN113","HER074","HNT263","WIN020"],
    sets: [Release.Dynasty,Release.Promos,Release.TheHunted],
    specialImage: "HNT263_BACK",
    subtypes: [],
    types: [Type.Hero],
    typeText: "Assassin Hero",

    
    
    
    
    
    functionalText: `Whenever you play a card with **contract**, you may look at the top card of target opponent's deck. You may put it on the bottom.`,
    
    hero: Hero.Arakni,
    intellect: 4,
    
    
    life: 40,
    meta: [Meta.Expansion],
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Isuardi Therianto"],
    cardIdentifier: "arakni-marionette",
    classes: [Class.Assassin],
    defaultImage: "HNT001",
    legalFormats: [Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open],
    legalHeroes: [],
    name: "Arakni, Marionette",
    printings: [{
        artists: ["Isuardi Therianto"],
      
      identifier: "HNT001",
      image: "HNT001",
      
      
      print: "HNT001",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Isuardi Therianto"],
      foiling: Foiling.C,
      identifier: "HNT001",
      image: "HNT001_V2_BACK",
      
      
      print: "HNT001-Cold-Full Art-Back",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },{
        artists: ["Isuardi Therianto"],
      foiling: Foiling.C,
      identifier: "HNT001",
      image: "HNT001_V2",
      
      
      print: "HNT001-Cold",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT001"],
    sets: [Release.TheHunted],
    specialImage: "HNT001_V2_BACK",
    subtypes: [],
    types: [Type.Hero],
    typeText: "Chaos Assassin Hero",

    
    
    
    
    
    functionalText: `Your attacks with **stealth** that are attacking a **marked** hero get +1{p} and "When this hits, this gets **go again**."

At the beginning of your end phase, if an opponent is **marked**, you become a random Agent of Chaos.`,
    
    hero: Hero.Crackni,
    intellect: 4,
    
    
    life: 40,
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Chaos],
  
  
  },{
    artists: ["Jessada Sutthi"],
    cardIdentifier: "arakni-orb-weaver",
    classes: [Class.Assassin],
    defaultImage: "HNT005",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Arakni, Orb-Weaver",
    printings: [{
        artists: ["Jessada Sutthi"],
      
      identifier: "HNT005",
      image: "HNT005",
      
      
      print: "HNT005",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Jessada Sutthi"],
      foiling: Foiling.C,
      identifier: "HNT005",
      image: "HNT005_V2",
      
      
      print: "HNT005-Cold-Full Art",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT005"],
    sets: [Release.TheHunted],
    specialImage: "HNT005_V2",
    subtypes: [],
    types: [Type.DemiHero],
    typeText: "Chaos Assassin Demi-Hero",

    
    
    
    
    
    functionalText: `Graphene Chelicerae cost you {r} less to activate.

**Once per Turn Instant** - Discard an Assassin card: Equip a Graphene Chelicera token. Your next attack with **stealth** this turn gets +3{p}.

At the beginning of your end phase, **return to the brood**.`,
    
    
    intellect: 4,
    
    
    
    
    
    
    
    
    
    
    
    specialLife: "*",
    
    
    talents: [Talent.Chaos],
  traits: [Trait.AgentOfChaos],
  
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "arakni-redback",
    classes: [Class.Assassin],
    defaultImage: "HNT006",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Arakni, Redback",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "HNT006",
      image: "HNT006",
      
      
      print: "HNT006",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.C,
      identifier: "HNT006",
      image: "HNT006_V2",
      
      
      print: "HNT006-Cold-Full Art",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT006"],
    sets: [Release.TheHunted],
    specialImage: "HNT006_V2",
    subtypes: [],
    types: [Type.DemiHero],
    typeText: "Chaos Assassin Demi-Hero",

    
    
    
    
    
    functionalText: `**Once per Turn Attack Reaction** - Discard an Assassin card: Target Assassin attack gets +3{p}. If it has **stealth**, it gets **go again**.

At the beginning of your end phase, **return to the brood**.`,
    
    
    intellect: 4,
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    
    
    
    
    
    specialLife: "*",
    
    
    talents: [Talent.Chaos],
  traits: [Trait.AgentOfChaos],
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "arakni-solitary-confinement",
    classes: [Class.Assassin],
    defaultImage: "HNT262",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Arakni, Solitary Confinement",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      foiling: Foiling.C,
      identifier: "HNT262",
      image: "HNT262",
      isExpansionSlot: true,
      
      print: "HNT262-Cold",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Tomasz Jedruszek"],
      foiling: Foiling.C,
      identifier: "HNT262",
      image: "HNT262_BACK",
      isExpansionSlot: true,
      
      print: "HNT262-Cold-Full Art-Back",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Common,Rarity.Marvel,Rarity.Promo,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["ARA001","HER079","HER082","HNT262","OUT003"],
    sets: [Release.ArakniBlitzDeck,Release.Outsiders,Release.Promos,Release.TheHunted],
    specialImage: "HNT262_BACK",
    subtypes: [Subtype.Young],
    types: [Type.Hero],
    typeText: "Assassin Hero - Young",

    
    
    
    
    
    functionalText: `Your first attack with **stealth** each turn gets **go again**.`,
    
    hero: Hero.Arakni,
    intellect: 4,
    
    keywords: [Keyword.GoAgain],
    life: 19,
    meta: [Meta.Expansion],
    
    
    
    
    
    
    
    
    
    
    
  
  young: true
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "arakni-tarantula",
    classes: [Class.Assassin],
    defaultImage: "HNT007",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Arakni, Tarantula",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "HNT007",
      image: "HNT007",
      
      
      print: "HNT007",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Max Kostin"],
      foiling: Foiling.C,
      identifier: "HNT007",
      image: "HNT007_V2",
      
      
      print: "HNT007-Cold-Full Art",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT007"],
    sets: [Release.TheHunted],
    specialImage: "HNT007_V2",
    subtypes: [],
    types: [Type.DemiHero],
    typeText: "Chaos Assassin Demi-Hero",

    
    
    
    
    
    functionalText: `Whenever a dagger you own hits a hero, they lose 1{h}.

**Once per Turn Attack Reaction** - Discard an Assassin card: Target dagger attack gets +3{p}.

At the beginning of your end phase, **return to the brood**.`,
    
    
    intellect: 4,
    
    
    
    
    
    
    
    
    
    
    
    specialLife: "*",
    
    
    talents: [Talent.Chaos],
  traits: [Trait.AgentOfChaos],
  
  },{
    artists: ["Jessada Sutthi"],
    cardIdentifier: "arakni-trap-door",
    classes: [Class.Assassin],
    defaultImage: "HNT008",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Arakni, Trap-Door",
    printings: [{
        artists: ["Jessada Sutthi"],
      
      identifier: "HNT008",
      image: "HNT008",
      
      
      print: "HNT008",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Jessada Sutthi"],
      foiling: Foiling.C,
      identifier: "HNT008",
      image: "HNT008_V2",
      
      
      print: "HNT008-Cold-Full Art",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT008"],
    sets: [Release.TheHunted],
    specialImage: "HNT008_V2",
    subtypes: [],
    types: [Type.DemiHero],
    typeText: "Chaos Assassin Demi-Hero",

    
    
    
    
    
    functionalText: `When you become this, you may search your deck for a card, banish it face-down, then shuffle. If it's a trap, you may play it until the start of your next turn.

At the beginning of your end phase, **return to the brood**.`,
    
    
    intellect: 4,
    
    
    
    
    
    
    
    
    
    
    
    specialLife: "*",
    
    
    talents: [Talent.Chaos],
  traits: [Trait.AgentOfChaos],
  
  },{
    artists: ["Isuardi Therianto"],
    cardIdentifier: "arakni-web-of-deceit",
    classes: [Class.Assassin],
    defaultImage: "HNT002",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Arakni, Web of Deceit",
    printings: [{
        artists: ["Isuardi Therianto"],
      
      identifier: "HNT002",
      image: "HNT002",
      
      
      print: "HNT002",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Isuardi Therianto"],
      foiling: Foiling.C,
      identifier: "HNT002",
      image: "HNT002_V2_BACK",
      
      
      print: "HNT002-Cold-Full Art-Back",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },{
        artists: ["Isuardi Therianto"],
      foiling: Foiling.C,
      identifier: "HNT002",
      image: "HNT002_V2",
      
      
      print: "HNT002-Cold",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Marvel,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT002"],
    sets: [Release.TheHunted],
    specialImage: "HNT002_V2_BACK",
    subtypes: [Subtype.Young],
    types: [Type.Hero],
    typeText: "Chaos Assassin Hero - Young",

    
    
    
    
    
    functionalText: `Your attacks with **stealth** that are attacking a **marked** hero get +1{p} and "When this hits, this gets **go again**."

At the beginning of your end phase, if an opponent is **marked**, you become a random Agent of Chaos.`,
    
    hero: Hero.Crackni,
    intellect: 4,
    
    
    life: 20,
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Chaos],
  
  young: true
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "art-of-the-dragon-blood-red",
    classes: [Class.Ninja],
    defaultImage: "HNT071",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Art of the Dragon: Blood",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "HNT071",
      image: "HNT071",
      
      
      print: "HNT071",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic,Rarity.Promo],
    rarity: Rarity.Majestic,
    setIdentifiers: ["FAB307","HNT071"],
    sets: [Release.Promos,Release.TheHunted],
    specialImage: "HNT071",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks, if it is Draconic, it gets **go again** and the next 3 Draconic cards you play this turn cost {r} less to play.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["寿多浩 (Hiro Suda)"],
    cardIdentifier: "art-of-the-dragon-claw-red",
    classes: [Class.Ninja],
    defaultImage: "HNT074",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Art of the Dragon: Claw",
    printings: [{
        artists: ["寿多浩 (Hiro Suda)"],
      
      identifier: "HNT074",
      image: "HNT074",
      
      
      print: "HNT074",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["FAB308","HNT074"],
    sets: [Release.Promos,Release.TheHunted],
    specialImage: "HNT074",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this attacks, if it is Draconic, it gets "When this hits a hero, destroy all cards in their arsenal."`,
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["寿多浩 (Hiro Suda)"],
    cardIdentifier: "art-of-the-dragon-fire-red",
    classes: [Class.Ninja],
    defaultImage: "HNT075",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Art of the Dragon: Fire",
    printings: [{
        artists: ["寿多浩 (Hiro Suda)"],
      
      identifier: "HNT075",
      image: "HNT075",
      
      
      print: "HNT075",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["FAB309","HNT075"],
    sets: [Release.Promos,Release.TheHunted],
    specialImage: "HNT075",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this attacks, if it is Draconic, deal 2 damage to any target.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "art-of-the-dragon-scale-red",
    classes: [Class.Ninja],
    defaultImage: "HNT076",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Art of the Dragon: Scale",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "HNT076",
      image: "HNT076",
      
      
      print: "HNT076",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["FAB310","HNT076"],
    sets: [Release.Promos,Release.TheHunted],
    specialImage: "HNT076",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this attacks, if it is Draconic, it gets "When this hits a hero, put a -1{d} counter on an equipment they control. Then if it has 0{d}, destroy it."`,
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Henrique Lindner"],
    cardIdentifier: "back-stab-red",
    classes: [Class.Assassin],
    defaultImage: "HNT029",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Back Stab",
    printings: [{
        artists: ["Henrique Lindner"],
      
      identifier: "HNT029",
      image: "HNT029",
      
      
      print: "HNT029",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Rare],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT029","OUT015"],
    sets: [Release.Outsiders,Release.TheHunted],
    specialImage: "HNT029",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

Defense reaction cards can't be played this chain link.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Raphael Pinna"],
    cardIdentifier: "bite-red",
    classes: [Class.Assassin],
    defaultImage: "HNT017",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Bite",
    printings: [{
        artists: ["Raphael Pinna"],
      
      identifier: "HNT017",
      image: "HNT017",
      
      
      print: "HNT017",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT017"],
    sets: [Release.TheHunted],
    specialImage: "HNT017",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this attacks a hero, you may have target dagger you control deal 1 damage to them. If damage is dealt this way, the dagger has hit. Destroy the dagger.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Raphael Pinna"],
    cardIdentifier: "bite-yellow",
    classes: [Class.Assassin],
    defaultImage: "HNT018",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Bite",
    printings: [{
        artists: ["Raphael Pinna"],
      
      identifier: "HNT018",
      image: "HNT018",
      
      
      print: "HNT018",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT018"],
    sets: [Release.TheHunted],
    specialImage: "HNT018",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this attacks a hero, you may have target dagger you control deal 1 damage to them. If damage is dealt this way, the dagger has hit. Destroy the dagger.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Raphael Pinna"],
    cardIdentifier: "bite-blue",
    classes: [Class.Assassin],
    defaultImage: "HNT019",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Bite",
    printings: [{
        artists: ["Raphael Pinna"],
      
      identifier: "HNT019",
      image: "HNT019",
      
      
      print: "HNT019",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT019"],
    sets: [Release.TheHunted],
    specialImage: "HNT019",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this attacks a hero, you may have target dagger you control deal 1 damage to them. If damage is dealt this way, the dagger has hit. Destroy the dagger.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Daniel Jiménez"],
    cardIdentifier: "blade-beckoner-boots",
    classes: [Class.Generic],
    defaultImage: "HNT219",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Blade Beckoner Boots",
    printings: [{
        artists: ["Daniel Jiménez"],
      
      identifier: "HNT219",
      image: "HNT219",
      
      
      print: "HNT219",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT219"],
    sets: [Release.TheHunted],
    specialImage: "HNT219",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Legs",

    
    
    
    defense: 1,
    
    functionalText: `This gets +1{d} while defending a weapon attack.

**Guardwell**`,
    
    
    
    
    keywords: [Keyword.Guardwell],
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Daniel Jiménez"],
    cardIdentifier: "blade-beckoner-gauntlets",
    classes: [Class.Generic],
    defaultImage: "HNT218",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Blade Beckoner Gauntlets",
    printings: [{
        artists: ["Daniel Jiménez"],
      
      identifier: "HNT218",
      image: "HNT218",
      
      
      print: "HNT218",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT218"],
    sets: [Release.TheHunted],
    specialImage: "HNT218",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Arms",

    
    
    
    defense: 1,
    
    functionalText: `This gets +1{d} while defending a weapon attack.

**Guardwell**`,
    
    
    
    
    keywords: [Keyword.Guardwell],
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Daniel Jiménez"],
    cardIdentifier: "blade-beckoner-helm",
    classes: [Class.Generic],
    defaultImage: "HNT216",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Blade Beckoner Helm",
    printings: [{
        artists: ["Daniel Jiménez"],
      
      identifier: "HNT216",
      image: "HNT216",
      
      
      print: "HNT216",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT216"],
    sets: [Release.TheHunted],
    specialImage: "HNT216",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Head",

    
    
    
    defense: 1,
    
    functionalText: `This gets +1{d} while defending a weapon attack.

**Guardwell**`,
    
    
    
    
    keywords: [Keyword.Guardwell],
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Daniel Jiménez"],
    cardIdentifier: "blade-beckoner-plating",
    classes: [Class.Generic],
    defaultImage: "HNT217",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Blade Beckoner Plating",
    printings: [{
        artists: ["Daniel Jiménez"],
      
      identifier: "HNT217",
      image: "HNT217",
      
      
      print: "HNT217",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT217"],
    sets: [Release.TheHunted],
    specialImage: "HNT217",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Chest",

    
    
    
    defense: 1,
    
    functionalText: `This gets +1{d} while defending a weapon attack.

**Guardwell**`,
    
    
    
    
    keywords: [Keyword.Guardwell],
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "blaze-headlong-red",
    classes: [Class.NotClassed],
    defaultImage: "HNT157",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Blaze Headlong",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "HNT157",
      image: "HNT157",
      
      
      print: "HNT157",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["FAB089","FAI010","HNT157","UPR092"],
    sets: [Release.FaiBlitzDeck,Release.Promos,Release.TheHunted,Release.Uprising],
    specialImage: "HNT157",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `If you've played another red card this turn, this gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Mateusz Wiśniewski"],
    cardIdentifier: "blessing-of-vynserakai-red",
    classes: [Class.NotClassed],
    defaultImage: "HNT163",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Blessing of Vynserakai",
    printings: [{
        artists: ["Mateusz Wiśniewski"],
      
      identifier: "HNT163",
      image: "HNT163",
      
      
      print: "HNT163",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT163"],
    sets: [Release.TheHunted],
    specialImage: "HNT163",
    subtypes: [Subtype.Aura,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Draconic Action - Aura",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `At the start of your turn, destroy this, then your next attack this turn is Draconic and gets +3{p}.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "blistering-blade-red",
    classes: [Class.Warrior],
    defaultImage: "HNT106",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Blistering Blade",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "HNT106",
      image: "HNT106",
      
      
      print: "HNT106",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT106"],
    sets: [Release.TheHunted],
    specialImage: "HNT106",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Draconic Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Target dagger attack gets +2{p}. If you control 2 or more Draconic chain links, instead it gets +3{p}.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Nikolay Moskvin"],
    cardIdentifier: "blood-drop-red",
    classes: [Class.Ninja],
    defaultImage: "HNT062",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Blood Drop",
    printings: [{
        artists: ["Nikolay Moskvin"],
      
      identifier: "HNT062",
      image: "HNT062",
      
      
      print: "HNT062",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT062"],
    sets: [Release.TheHunted],
    specialImage: "HNT062",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Ninja Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `This costs {r} less to play for each Draconic chain link you control.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    pitch: 1,
    power: 2,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Kevin Sidharta"],
    cardIdentifier: "blood-line-red",
    classes: [Class.Ninja],
    defaultImage: "HNT063",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Blood Line",
    printings: [{
        artists: ["Kevin Sidharta"],
      
      identifier: "HNT063",
      image: "HNT063",
      
      
      print: "HNT063",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT063"],
    sets: [Release.TheHunted],
    specialImage: "HNT063",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Ninja Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `This costs {r} less to play for each Draconic chain link you control.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["SanSan"],
    cardIdentifier: "blood-runs-deep-red",
    classes: [Class.Ninja],
    defaultImage: "HNT057",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Blood Runs Deep",
    printings: [{
        artists: ["SanSan"],
      
      identifier: "HNT057",
      image: "HNT057",
      
      
      print: "HNT057",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic,Rarity.Promo],
    rarity: Rarity.Majestic,
    setIdentifiers: ["FAB316","HNT057"],
    sets: [Release.Promos,Release.TheHunted],
    specialImage: "HNT057",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Ninja Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `This costs {r} less to play for each Draconic chain link you control.

When this attacks a hero, each dagger you control deals 1 damage to them. If damage is dealt this way, the dagger has hit. Destroy the daggers.

**Go again**`,
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 2,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Jessada Sutthi"],
    cardIdentifier: "blood-splattered-vest",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT168",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Blood Splattered Vest",
    printings: [{
        artists: ["Jessada Sutthi"],
      foiling: Foiling.R,
      identifier: "HNT168",
      image: "HNT168",
      
      
      print: "HNT168-Rainbow",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Jessada Sutthi"],
      foiling: Foiling.C,
      identifier: "HNT168",
      image: "HNT168-EA",
      
      
      print: "HNT168-Cold-Extended Art",
      set: Release.TheHunted,
      
      treatment: Treatment.EA,
    },],
    rarities: [Rarity.Legendary],
    rarity: Rarity.Legendary,
    setIdentifiers: ["HNT168"],
    sets: [Release.TheHunted],
    specialImage: "HNT168-EA",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Assassin / Ninja Equipment - Chest",

    
    
    
    defense: 1,
    
    functionalText: `Whenever a dagger you control hits, you may gain {r} and put a stain counter on this. Then if there are 3 or more stain counters on this, destroy it.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Othon Nikolaidis"],
    cardIdentifier: "brothers-of-flame-red",
    classes: [Class.Warrior],
    defaultImage: "HNT107",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Brothers of Flame",
    printings: [{
        artists: ["Othon Nikolaidis"],
      
      identifier: "HNT107",
      image: "HNT107",
      
      
      print: "HNT107",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT107"],
    sets: [Release.TheHunted],
    specialImage: "HNT107",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Draconic Warrior Attack Reaction",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `Play this only if you control 2 or more Draconic chain links.

Target dagger attack gets +4{p}.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "bubble-to-the-surface-red",
    classes: [Class.NotClassed],
    defaultImage: "HNT154",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Bubble to the Surface",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "HNT154",
      image: "HNT154",
      
      
      print: "HNT154",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Carlos Cruchaga"],
      foiling: Foiling.R,
      identifier: "HNT154",
      image: "HNT154-EA",
      
      
      print: "HNT154-Rainbow-Extended Art",
      set: Release.TheHunted,
      
      treatment: Treatment.EA,
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT154"],
    sets: [Release.TheHunted],
    specialImage: "HNT154-EA",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Draconic Instant",

    
    
    cost: 2,
    
    
    functionalText: `This costs {r} less to play for each Draconic chain link you control.

Reveal cards from the top of your deck until you've revealed a red card. Banish it. You may play it this turn. Shuffle.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "bunker-beard",
    classes: [Class.Generic],
    defaultImage: "HNT220",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Bunker Beard",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "HNT220",
      image: "HNT220",
      
      
      print: "HNT220",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT220"],
    sets: [Release.TheHunted],
    specialImage: "HNT220",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Head",

    
    
    
    defense: 0,
    
    functionalText: `**Defense Reaction** - Destroy this: You may add an action card from your arsenal to the active chain link as a defending card.`,
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Esty Swandana"],
    cardIdentifier: "burning-blade-dance-red",
    classes: [Class.Ninja],
    defaultImage: "HNT064",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Burning Blade Dance",
    printings: [{
        artists: ["Esty Swandana"],
      
      identifier: "HNT064",
      image: "HNT064",
      
      
      print: "HNT064",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT064"],
    sets: [Release.TheHunted],
    specialImage: "HNT064",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Ninja Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If you control 2 or more Draconic chain links, this gets **go again** and "When this hits a hero, you may have target dagger you control deal 1 damage to them. If damage is dealt this way, the dagger has hit. Destroy the dagger."`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "calming-breeze-red",
    classes: [Class.Generic],
    defaultImage: "HNT230",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Calming Breeze",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "HNT230",
      image: "HNT230",
      
      
      print: "HNT230",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT230"],
    sets: [Release.TheHunted],
    specialImage: "HNT230",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Generic Instant",

    
    
    cost: 0,
    
    
    functionalText: `The next 3 times you would be dealt damage this turn, prevent 1 of that damage.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Septimius Ferdian"],
    cardIdentifier: "chain-reaction-yellow",
    classes: [Class.Ranger],
    defaultImage: "HNT253",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Chain Reaction",
    printings: [{
        artists: ["Septimius Ferdian"],
      
      identifier: "HNT253",
      image: "HNT253",
      isExpansionSlot: true,
      
      print: "HNT253",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT253"],
    sets: [Release.TheHunted],
    specialImage: "HNT253",
    subtypes: [Subtype.Trap],
    types: [Type.DefenseReaction],
    typeText: "Ranger Defense Reaction - Trap",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this defends an attack with **go again**, you may turn a non-attack action card in your arsenal face-up. If you do, you may play it this turn as though it were an instant.`,
    
    
    
    
    
    
    meta: [Meta.Expansion],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Athiwut B."],
    cardIdentifier: "cinderskin-devotion-red",
    classes: [Class.Ninja],
    defaultImage: "HNT065",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Cinderskin Devotion",
    printings: [{
        artists: ["Athiwut B."],
      
      identifier: "HNT065",
      image: "HNT065",
      
      
      print: "HNT065",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["FAI016","HNT065","UPR063"],
    sets: [Release.FaiBlitzDeck,Release.TheHunted,Release.Uprising],
    specialImage: "HNT065",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Ninja Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `If you control 2 or more Draconic chain links, this gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Livia Prima"],
    cardIdentifier: "cindra",
    classes: [Class.Ninja],
    defaultImage: "HNT055",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Cindra",
    printings: [{
        artists: ["Livia Prima"],
      
      identifier: "HNT055",
      image: "HNT055",
      
      
      print: "HNT055",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Livia Prima"],
      foiling: Foiling.C,
      identifier: "HNT055",
      image: "HNT055_V2",
      
      
      print: "HNT055-Cold",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Livia Prima"],
      foiling: Foiling.C,
      identifier: "HNT055",
      image: "HNT055_V2_Back",
      
      
      print: "HNT055-Cold-Full Art-Back",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT055"],
    sets: [Release.TheHunted],
    specialImage: "HNT055_V2_Back",
    subtypes: [Subtype.Young],
    types: [Type.Hero],
    typeText: "Royal Draconic Ninja Hero - Young",

    
    
    
    
    
    functionalText: `Whenever you hit a **marked** hero, create a Fealty token.

**Once per Turn Instant** - {r}{r}{r}: Equip up to 2 Draconic daggers from your graveyard. This costs {r} less to activate for each Draconic chain link you control.`,
    
    hero: Hero.Cindra,
    intellect: 4,
    
    
    life: 20,
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic,Talent.Royal],
  
  young: true
  },{
    artists: ["Livia Prima"],
    cardIdentifier: "cindra-dracai-of-retribution",
    classes: [Class.Ninja],
    defaultImage: "HNT054_V2",
    legalFormats: [Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open],
    legalHeroes: [],
    name: "Cindra, Dracai of Retribution",
    printings: [{
        artists: ["Livia Prima"],
      foiling: Foiling.C,
      identifier: "HNT054",
      image: "HNT054_V2",
      
      
      print: "HNT054-Cold",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Livia Prima"],
      foiling: Foiling.C,
      identifier: "HNT054",
      image: "HNT054_V2_Back",
      
      
      print: "HNT054-Cold-Full Art-Back",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },{
        artists: ["Livia Prima"],
      
      identifier: "HNT054",
      image: "HNT054",
      
      
      print: "HNT054",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT054"],
    sets: [Release.TheHunted],
    specialImage: "HNT054_V2_Back",
    subtypes: [],
    types: [Type.Hero],
    typeText: "Royal Draconic Ninja Hero",

    
    
    
    
    
    functionalText: `Whenever you hit a **marked** hero, create a Fealty token.

**Once per Turn Instant** - {r}{r}{r}: Equip up to 2 Draconic daggers from your graveyard. This costs {r} less to activate for each Draconic chain link you control.`,
    
    hero: Hero.Cindra,
    intellect: 4,
    
    
    life: 40,
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic,Talent.Royal],
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "coat-of-allegiance",
    classes: [Class.NotClassed],
    defaultImage: "HNT148",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Coat of Allegiance",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "HNT148",
      image: "HNT148",
      
      
      print: "HNT148",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT148"],
    sets: [Release.TheHunted],
    specialImage: "HNT148",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Draconic Equipment - Chest",

    
    
    
    defense: 0,
    
    functionalText: `**Action** - Destroy this: Gain {r}. Until end of turn, you may only play cards that are Draconic. **Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Fajareka Setiawan","Federico Musetti","Joseph Qiu","Othon Nikolaidis"],
    cardIdentifier: "command-and-conquer-red",
    classes: [Class.Generic],
    defaultImage: "HNT260",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Command and Conquer",
    printings: [{
        artists: ["Federico Musetti"],
      
      identifier: "HNT260",
      image: "HNT260",
      isExpansionSlot: true,
      
      print: "HNT260",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Federico Musetti"],
      foiling: Foiling.R,
      identifier: "HNT260",
      image: "HNT260-EA",
      isExpansionSlot: true,
      
      print: "HNT260-Rainbow-Extended Art",
      set: Release.TheHunted,
      
      treatment: Treatment.EA,
    },],
    rarities: [Rarity.Fabled,Rarity.Legendary,Rarity.Majestic,Rarity.Promo],
    rarity: Rarity.Majestic,
    setIdentifiers: ["1HP360","ARC159","DYN000","FAB278","HNT260"],
    sets: [Release.ArcaneRising,Release.Dynasty,Release.HistoryPack1,Release.Promos,Release.TheHunted],
    specialImage: "HNT260-EA",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `Defense reaction cards can't be played this chain link.

When this hits a hero, destroy all cards in their arsenal.`,
    
    
    
    
    
    
    meta: [Meta.Expansion],
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Asur Misoa"],
    cardIdentifier: "compounding-anger-red",
    classes: [Class.NotClassed],
    defaultImage: "HNT151",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Compounding Anger",
    printings: [{
        artists: ["Asur Misoa"],
      
      identifier: "HNT151",
      image: "HNT151",
      
      
      print: "HNT151",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT151"],
    sets: [Release.TheHunted],
    specialImage: "HNT151",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `This costs {r} less to play for each Draconic chain link you control.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Alexandra Malygina","Sam Yang"],
    cardIdentifier: "cracked-bauble-yellow",
    classes: [Class.Generic],
    defaultImage: "HNT245",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Cracked Bauble",
    printings: [{
        artists: ["Sam Yang"],
      
      identifier: "HNT245",
      image: "HNT245",
      
      
      print: "HNT245",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["ARC218","CRU195","ELE237","HNT245","HVY244","LGS083","LGS227","MON306","MST224","OUT238","ROS238","UPR224","WTR224"],
    sets: [Release.ArcaneRising,Release.CrucibleOfWar,Release.HeavyHitters,Release.Monarch,Release.Outsiders,Release.PartTheMistveil,Release.Promos,Release.Rosetta,Release.TalesOfAria,Release.TheHunted,Release.Uprising,Release.WelcomeToRathe],
    specialImage: "HNT245",
    subtypes: [],
    types: [Type.Resource],
    typeText: "Generic Resource",

    
    
    
    
    
    functionalText: `*(Cracked Bauble exists to support Booster Draft and sealed Deck formats. A player may add any number of Cracked Baubles to their deck. Typically, a player would only do this if they did not have enough legally playable cards to make a 30 card minimum deck.)*`,
    
    
    
    
    
    
    
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Daria Khlebnikova"],
    cardIdentifier: "cull-red",
    classes: [Class.Runeblade],
    defaultImage: "HNT259",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Cull",
    printings: [{
        artists: ["Daria Khlebnikova"],
      
      identifier: "HNT259",
      image: "HNT259",
      isExpansionSlot: true,
      
      print: "HNT259",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT259"],
    sets: [Release.TheHunted],
    specialImage: "HNT259",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Shadow, Runeblade, Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `You may play this from your banished zone.

If a hero has lost {h} this turn, you may play this as thought it were an instant.

Each hero banishes a card from their hand.

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt],
    
    meta: [Meta.Expansion],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Brian Adriel"],
    cardIdentifier: "cut-deep-red",
    classes: [Class.Warrior],
    defaultImage: "HNT128",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Cut Deep",
    printings: [{
        artists: ["Brian Adriel"],
      
      identifier: "HNT128",
      image: "HNT128",
      
      
      print: "HNT128",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT128"],
    sets: [Release.TheHunted],
    specialImage: "HNT128",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Your next dagger attack this turn gets +4{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Brian Adriel"],
    cardIdentifier: "cut-deep-yellow",
    classes: [Class.Warrior],
    defaultImage: "HNT129",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Cut Deep",
    printings: [{
        artists: ["Brian Adriel"],
      
      identifier: "HNT129",
      image: "HNT129",
      
      
      print: "HNT129",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT129"],
    sets: [Release.TheHunted],
    specialImage: "HNT129",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Your next dagger attack this turn gets +3{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Brian Adriel"],
    cardIdentifier: "cut-deep-blue",
    classes: [Class.Warrior],
    defaultImage: "HNT130",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Cut Deep",
    printings: [{
        artists: ["Brian Adriel"],
      
      identifier: "HNT130",
      image: "HNT130",
      
      
      print: "HNT130",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT130"],
    sets: [Release.TheHunted],
    specialImage: "HNT130",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Your next dagger attack this turn gets +2{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "cut-from-the-same-cloth-red",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT202",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Cut from the Same Cloth",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "HNT202",
      image: "HNT202",
      
      
      print: "HNT202",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT202"],
    sets: [Release.TheHunted],
    specialImage: "HNT202",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Assassin / Warrior Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Target opposing hero reveals their hand. If an attack reaction card is revealed this way, **mark** them.

Your next dagger attack this turn gets +4{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "cut-from-the-same-cloth-yellow",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT203",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Cut from the Same Cloth",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "HNT203",
      image: "HNT203",
      
      
      print: "HNT203",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT203"],
    sets: [Release.TheHunted],
    specialImage: "HNT203",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Assassin / Warrior Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Target opposing hero reveals their hand. If an attack reaction card is revealed this way, **mark** them.

Your next dagger attack this turn gets +3{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "cut-from-the-same-cloth-blue",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT204",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Cut from the Same Cloth",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "HNT204",
      image: "HNT204",
      
      
      print: "HNT204",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT204"],
    sets: [Release.TheHunted],
    specialImage: "HNT204",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Assassin / Warrior Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Target opposing hero reveals their hand. If an attack reaction card is revealed this way, **mark** them.

Your next dagger attack this turn gets +2{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "cut-through-red",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT176",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Cut Through",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "HNT176",
      image: "HNT176",
      
      
      print: "HNT176",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT176"],
    sets: [Release.TheHunted],
    specialImage: "HNT176",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin / Ninja Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `If you've hit with a dagger this combat chain, this gets +1{p} and **go again**.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "cut-through-yellow",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT177",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Cut Through",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "HNT177",
      image: "HNT177",
      
      
      print: "HNT177",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT177"],
    sets: [Release.TheHunted],
    specialImage: "HNT177",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin / Ninja Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `If you've hit with a dagger this combat chain, this gets +1{p} and **go again**.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "cut-through-blue",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT178",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Cut Through",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "HNT178",
      image: "HNT178",
      
      
      print: "HNT178",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT178"],
    sets: [Release.TheHunted],
    specialImage: "HNT178",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin / Ninja Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `If you've hit with a dagger this combat chain, this gets +1{p} and **go again**.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Galih M"],
    cardIdentifier: "danger-digits",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT173",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Danger Digits",
    printings: [{
        artists: ["Galih M"],
      
      identifier: "HNT173",
      image: "HNT173",
      
      
      print: "HNT173",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT173"],
    sets: [Release.TheHunted],
    specialImage: "HNT173",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Assassin / Ninja Equipment - Arms",

    
    
    
    defense: 0,
    
    functionalText: `**Attack Reaction** - Destroy this: Target dagger you control that isn't on the active chain link deals 1 damage to the defending hero. If damage is dealt this way, the dagger has hit. Destroy the dagger.`,
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "defang-the-dragon-red",
    classes: [Class.Assassin],
    defaultImage: "HNT030",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Defang the Dragon",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "HNT030",
      image: "HNT030",
      
      
      print: "HNT030",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT030"],
    sets: [Release.TheHunted],
    specialImage: "HNT030",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

**Contract** - You are contracted to hit a **marked** hero named Fang. Whenever you complete this contract, draw a card.`,
    
    
    
    
    keywords: [Keyword.Contract,Keyword.Stealth],
    
    
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Maerel Hibadita"],
    cardIdentifier: "demonstrate-devotion-red",
    classes: [Class.Ninja],
    defaultImage: "HNT059",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Demonstrate Devotion",
    printings: [{
        artists: ["Maerel Hibadita"],
      
      identifier: "HNT059",
      image: "HNT059",
      
      
      print: "HNT059",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT059"],
    sets: [Release.TheHunted],
    specialImage: "HNT059",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Ninja Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `If you control 2 or more Draconic chain links, this gets **go again** and "When this attacks a hero, create a Fealty token."`,
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "den-of-the-spider-red",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT214",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Den of the Spider",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "HNT214",
      image: "HNT214",
      
      
      print: "HNT214",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT214"],
    sets: [Release.TheHunted],
    specialImage: "HNT214",
    subtypes: [Subtype.Trap],
    types: [Type.DefenseReaction],
    typeText: "Assassin / Warrior Action Defense Reaction - Trap",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this defends an attack with {p} greater than its base, **mark** the attacking hero.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "devotion-never-dies-red",
    classes: [Class.Ninja],
    defaultImage: "HNT072",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Devotion Never Dies",
    printings: [{
        artists: ["MJ Fetesio"],
      
      identifier: "HNT072",
      image: "HNT072",
      
      
      print: "HNT072",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT072"],
    sets: [Release.TheHunted],
    specialImage: "HNT072",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `When this hits, if a Draconic attack was the last attack this combat chain, banish this. If you do, you may play it this turn.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "diced-red",
    classes: [Class.Warrior],
    defaultImage: "HNT119",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Diced",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "HNT119",
      image: "HNT119",
      
      
      print: "HNT119",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT119"],
    sets: [Release.TheHunted],
    specialImage: "HNT119",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Target dagger attack gets +1{p}.

Your next dagger attack this turn gets +3{p}.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "diced-yellow",
    classes: [Class.Warrior],
    defaultImage: "HNT120",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Diced",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "HNT120",
      image: "HNT120",
      
      
      print: "HNT120",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT120"],
    sets: [Release.TheHunted],
    specialImage: "HNT120",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Target dagger attack gets +1{p}.

Your next dagger attack this turn gets +2{p}.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "diced-blue",
    classes: [Class.Warrior],
    defaultImage: "HNT121",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Diced",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "HNT121",
      image: "HNT121",
      
      
      print: "HNT121",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT121"],
    sets: [Release.TheHunted],
    specialImage: "HNT121",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Target dagger attack gets +1{p}.

Your next dagger attack this turn gets +1{p}.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Wisnu Tan"],
    cardIdentifier: "display-loyalty-red",
    classes: [Class.Ninja],
    defaultImage: "HNT060",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Display Loyalty",
    printings: [{
        artists: ["Wisnu Tan"],
      
      identifier: "HNT060",
      image: "HNT060",
      
      
      print: "HNT060",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT060"],
    sets: [Release.TheHunted],
    specialImage: "HNT060",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Ninja Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `If you control 2 or more Draconic chain links, this gets **go again** and "When this attacks a hero, create a Fealty token."`,
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["YDZ"],
    cardIdentifier: "douse-in-runeblood-red",
    classes: [Class.Runeblade],
    defaultImage: "HNT254",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Douse in Runeblood",
    printings: [{
        artists: ["YDZ"],
      
      identifier: "HNT254",
      image: "HNT254",
      isExpansionSlot: true,
      
      print: "HNT254",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT254"],
    sets: [Release.TheHunted],
    specialImage: "HNT254",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Runeblade Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this attacks, create Runechant tokens equal to the number of non-attack action cards you've played this turn. If 3 or more Runechants are created this way, this gets **go again**.`,
    
    
    
    
    
    
    meta: [Meta.Expansion],
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  }];
  const cards2: Card[] =  [{
    artists: ["Marco González"],
    cardIdentifier: "dragon-power-red",
    classes: [Class.Ninja],
    defaultImage: "HNT077",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Dragon Power",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "HNT077",
      image: "HNT077",
      
      
      print: "HNT077",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT077"],
    sets: [Release.TheHunted],
    specialImage: "HNT077",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this attacks, if it is Draconic, it gets +3{p}.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "dragon-power-yellow",
    classes: [Class.Ninja],
    defaultImage: "HNT078",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Dragon Power",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "HNT078",
      image: "HNT078",
      
      
      print: "HNT078",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT078"],
    sets: [Release.TheHunted],
    specialImage: "HNT078",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this attacks, if it is Draconic, it gets +3{p}.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "dragon-power-blue",
    classes: [Class.Ninja],
    defaultImage: "HNT079",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Dragon Power",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "HNT079",
      image: "HNT079",
      
      
      print: "HNT079",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT079"],
    sets: [Release.TheHunted],
    specialImage: "HNT079",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this attacks, if it is Draconic, it gets +3{p}.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mario Wibisono"],
    cardIdentifier: "dragonscaler-flight-path",
    classes: [Class.NotClassed],
    defaultImage: "HNT143",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Dragonscaler Flight Path",
    printings: [{
        artists: ["Mario Wibisono"],
      foiling: Foiling.R,
      identifier: "HNT143",
      image: "HNT143",
      
      
      print: "HNT143-Rainbow",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Mario Wibisono"],
      foiling: Foiling.C,
      identifier: "HNT143",
      image: "HNT143",
      
      
      print: "HNT143-Cold",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Legendary],
    rarity: Rarity.Legendary,
    setIdentifiers: ["HNT143"],
    sets: [Release.TheHunted],
    specialImage: "HNT143",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Draconic Equipment - Legs",

    
    
    
    defense: 1,
    
    functionalText: `**Instant** - {r}{r}{r}, destroy this: Target Draconic attack gets **go again**. If it's a weapon or ally attack, you may attack with it an additional time this turn. This ability costs {r} less to activate for each Draconic chain link you control.

**Battleworn**`,
    
    
    
    
    keywords: [Keyword.Battleworn],
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "drop-of-dragon-blood-red",
    classes: [Class.NotClassed],
    defaultImage: "HNT155",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Drop of Dragon Blood",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "HNT155",
      image: "HNT155",
      
      
      print: "HNT155",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Mariusz Gandzel"],
      foiling: Foiling.R,
      identifier: "HNT155",
      image: "HNT155-EA",
      
      
      print: "HNT155-Rainbow-Extended Art",
      set: Release.TheHunted,
      
      treatment: Treatment.EA,
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT155"],
    sets: [Release.TheHunted],
    specialImage: "HNT155-EA",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Draconic Instant",

    
    
    cost: 2,
    
    
    functionalText: `**Legendary**

This costs {r} less to play for each Draconic chain link you control.

Gain {r}. Draw a card.`,
    
    
    
    
    keywords: [Keyword.Legendary],
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Sebastian Giacobino"],
    cardIdentifier: "dual-threat-yellow",
    classes: [Class.Generic],
    defaultImage: "HNT223",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Dual Threat",
    printings: [{
        artists: ["Sebastian Giacobino"],
      
      identifier: "HNT223",
      image: "HNT223",
      
      
      print: "HNT223",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT223"],
    sets: [Release.TheHunted],
    specialImage: "HNT223",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If you've attacked with a weapon this turn, the next attack action card you play this turn gets +3{p}.

If you've attacked with an attack action card this turn, your next weapon attack this turn gets +3{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikolay Moskvin"],
    cardIdentifier: "dust-runner-outlaw-red",
    classes: [Class.Ninja],
    defaultImage: "HNT066",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Dust Runner Outlaw",
    printings: [{
        artists: ["Nikolay Moskvin"],
      
      identifier: "HNT066",
      image: "HNT066",
      
      
      print: "HNT066",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["FAI018","HNT066","UPR066"],
    sets: [Release.FaiBlitzDeck,Release.TheHunted,Release.Uprising],
    specialImage: "HNT066",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Ninja Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Othon Nikolaidis"],
    cardIdentifier: "dynastic-dedication-red",
    classes: [Class.Warrior],
    defaultImage: "HNT108",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Dynastic Dedication",
    printings: [{
        artists: ["Othon Nikolaidis"],
      
      identifier: "HNT108",
      image: "HNT108",
      
      
      print: "HNT108",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT108"],
    sets: [Release.TheHunted],
    specialImage: "HNT108",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Draconic Warrior Attack Reaction",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `This costs {r} less to play for each Draconic chain link you control.

Target dagger attack gets +3{p}.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Jessketchin"],
    cardIdentifier: "enchanted-quiver",
    classes: [Class.Ranger],
    defaultImage: "HNT252",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Enchanted Quiver",
    printings: [{
        artists: ["Jessketchin"],
      
      identifier: "HNT252",
      image: "HNT252",
      isExpansionSlot: true,
      
      print: "HNT252",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Jessketchin"],
      foiling: Foiling.C,
      identifier: "HNT252",
      image: "HNT252",
      isExpansionSlot: true,
      
      print: "HNT252-Cold",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT252"],
    sets: [Release.TheHunted],
    specialImage: "HNT252",
    subtypes: [Subtype.Quiver],
    types: [Type.Equipment],
    typeText: "Ranger Equipment - Quiver",

    
    
    
    
    
    functionalText: `**Instant** - Destroy this: Prevent the next 1 arcane damage that would be dealt to you this turn. If there is a face-up arrow in your arsenal, instead prevent the next 2.`,
    
    
    
    
    
    
    meta: [Meta.Expansion],
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Federico Musetti"],
    cardIdentifier: "endear-devotion-red",
    classes: [Class.Warrior],
    defaultImage: "HNT104",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Endear Devotion",
    printings: [{
        artists: ["Federico Musetti"],
      
      identifier: "HNT104",
      image: "HNT104",
      
      
      print: "HNT104",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT104"],
    sets: [Release.TheHunted],
    specialImage: "HNT104",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Draconic Warrior Attack Reaction",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `Target dagger attack gets +3{p}. If you control 2 or more Draconic chain links, create a Fealty token.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Daniel Jiménez"],
    cardIdentifier: "exposed-blue",
    classes: [Class.Generic],
    defaultImage: "HNT237",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Exposed",
    printings: [{
        artists: ["Daniel Jiménez"],
      
      identifier: "HNT237",
      image: "HNT237",
      
      
      print: "HNT237",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT237"],
    sets: [Release.TheHunted],
    specialImage: "HNT237",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Generic Attack Reaction",

    
    
    cost: 0,
    
    
    functionalText: `If you are **marked**, you can't play this.

Target attack gets +1{p}.

**Mark** the defending hero.`,
    
    
    
    
    keywords: [Keyword.Mark],
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "extinguish-the-flames-red",
    classes: [Class.Assassin],
    defaultImage: "HNT031",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Extinguish the Flames",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "HNT031",
      image: "HNT031",
      
      
      print: "HNT031",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT031"],
    sets: [Release.TheHunted],
    specialImage: "HNT031",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

**Contract** - You are contracted to hit a **marked** hero named Cindra. Whenever you complete this contract, draw a card.`,
    
    
    
    
    keywords: [Keyword.Contract,Keyword.Stealth],
    
    
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Billy Christian"],
    cardIdentifier: "fang",
    classes: [Class.Warrior],
    defaultImage: "HNT099",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Fang",
    printings: [{
        artists: ["Billy Christian"],
      
      identifier: "HNT099",
      image: "HNT099",
      
      
      print: "HNT099",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Billy Christian"],
      foiling: Foiling.C,
      identifier: "HNT099",
      image: "HNT099_V2",
      
      
      print: "HNT099-Cold",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Billy Christian"],
      foiling: Foiling.C,
      identifier: "HNT099",
      image: "HNT099_V2_BACK",
      
      
      print: "HNT099-Cold-Full Art-Back",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT099"],
    sets: [Release.TheHunted],
    specialImage: "HNT099_V2_BACK",
    subtypes: [Subtype.Young],
    types: [Type.Hero],
    typeText: "Royal Draconic Warrior Hero - Young",

    
    
    
    
    
    functionalText: `Whenever you hit a **marked** hero, create a Fealty token.

If you control 3 or more Fealty tokens, dagger attacks cost you {r} less to activate.`,
    
    hero: Hero.Fang,
    intellect: 4,
    
    
    life: 20,
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic,Talent.Royal],
  
  young: true
  },{
    artists: ["Billy Christian"],
    cardIdentifier: "fang-dracai-of-blades",
    classes: [Class.Warrior],
    defaultImage: "HNT098_V2",
    legalFormats: [Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open],
    legalHeroes: [],
    name: "Fang, Dracai of Blades",
    printings: [{
        artists: ["Billy Christian"],
      foiling: Foiling.C,
      identifier: "HNT098",
      image: "HNT098_V2",
      
      
      print: "HNT098-Cold",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Billy Christian"],
      foiling: Foiling.C,
      identifier: "HNT098",
      image: "HNT098_V2_BACK",
      
      
      print: "HNT098-Cold-Full Art-Back",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },{
        artists: ["Billy Christian"],
      
      identifier: "HNT098",
      image: "HNT098",
      
      
      print: "HNT098",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT098"],
    sets: [Release.TheHunted],
    specialImage: "HNT098_V2_BACK",
    subtypes: [],
    types: [Type.Hero],
    typeText: "Royal Draconic Warrior Hero",

    
    
    
    
    
    functionalText: `Whenever you hit a **marked** hero, create a Fealty token.

If you control 3 or more Fealty tokens, dagger attacks cost you {r} less to activate.`,
    
    hero: Hero.Fang,
    intellect: 4,
    
    
    life: 40,
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic,Talent.Royal],
  
  
  },{
    artists: ["Mario Wibisono"],
    cardIdentifier: "fealty",
    classes: [Class.NotClassed],
    defaultImage: "HNT167",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Fealty",
    printings: [{
        artists: ["Mario Wibisono"],
      foiling: Foiling.C,
      identifier: "HNT167",
      image: "HNT167_V2",
      
      
      print: "HNT167-Cold-Full Art",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },{
        artists: ["Mario Wibisono"],
      
      identifier: "HNT167",
      image: "HNT167",
      
      
      print: "HNT167",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Marvel,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT167"],
    sets: [Release.TheHunted],
    specialImage: "HNT167_V2",
    subtypes: [Subtype.Aura],
    types: [Type.Token],
    typeText: "Draconic Token - Aura",

    
    
    
    
    
    functionalText: `**Instant** - Destroy this: The next card you play this turn is Draconic. At the beginning of your end phase, if you haven't created a Fealty token or played a Dragonic card this turn, destroy this.`,
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "fire-and-brimstone-red",
    classes: [Class.Warrior],
    defaultImage: "HNT105",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Fire and Brimstone",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "HNT105",
      image: "HNT105",
      
      
      print: "HNT105",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.R,
      identifier: "HNT105",
      image: "HNT105-EA",
      
      
      print: "HNT105-Rainbow-Extended Art",
      set: Release.TheHunted,
      
      treatment: Treatment.EA,
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT105"],
    sets: [Release.TheHunted],
    specialImage: "HNT105-EA",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Draconic Warrior Attack Reaction",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `**Legendary**

This costs {r} less to play for each Draconic chain link you control.

Daggers you control get +1{p} and you may attack with each of them an additional time this turn.`,
    
    
    
    
    keywords: [Keyword.Legendary],
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Alief Rusdiatama"],
    cardIdentifier: "fire-tenet-strike-first-red",
    classes: [Class.Ninja],
    defaultImage: "HNT083",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Fire Tenet: Strike First",
    printings: [{
        artists: ["Alief Rusdiatama"],
      
      identifier: "HNT083",
      image: "HNT083",
      
      
      print: "HNT083",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT083"],
    sets: [Release.TheHunted],
    specialImage: "HNT083",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, your next Draconic attack this combat chain gets +1{p}.

**Go again**`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Alief Rusdiatama"],
    cardIdentifier: "fire-tenet-strike-first-yellow",
    classes: [Class.Ninja],
    defaultImage: "HNT084",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Fire Tenet: Strike First",
    printings: [{
        artists: ["Alief Rusdiatama"],
      
      identifier: "HNT084",
      image: "HNT084",
      
      
      print: "HNT084",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT084"],
    sets: [Release.TheHunted],
    specialImage: "HNT084",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, your next Draconic attack this combat chain gets +1{p}.

**Go again**`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Alief Rusdiatama"],
    cardIdentifier: "fire-tenet-strike-first-blue",
    classes: [Class.Ninja],
    defaultImage: "HNT085",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Fire Tenet: Strike First",
    printings: [{
        artists: ["Alief Rusdiatama"],
      
      identifier: "HNT085",
      image: "HNT085",
      
      
      print: "HNT085",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT085"],
    sets: [Release.TheHunted],
    specialImage: "HNT085",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, your next Draconic attack this combat chain gets +1{p}.

**Go again**`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Andrew Chou"],
    cardIdentifier: "flurry-stance-red",
    classes: [Class.Warrior],
    defaultImage: "HNT126",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Flurry Stance",
    printings: [{
        artists: ["Andrew Chou"],
      
      identifier: "HNT126",
      image: "HNT126",
      
      
      print: "HNT126",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["FAB312","HNT126"],
    sets: [Release.Promos,Release.TheHunted],
    specialImage: "HNT126",
    subtypes: [Subtype.Aura,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action - Aura",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Go again**

At the start of your turn, destroy this, then you may attack with each dagger you control an additional time this turn.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Asur Misoa"],
    cardIdentifier: "for-the-dracai-red",
    classes: [Class.NotClassed],
    defaultImage: "HNT158",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "For the Dracai",
    printings: [{
        artists: ["Asur Misoa"],
      
      identifier: "HNT158",
      image: "HNT158",
      
      
      print: "HNT158",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["FAB318","HNT158"],
    sets: [Release.Promos,Release.TheHunted],
    specialImage: "HNT158",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks a **marked** hero, create a Fealty token.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Asur Misoa"],
    cardIdentifier: "for-the-emperor-red",
    classes: [Class.NotClassed],
    defaultImage: "HNT159",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "For the Emperor",
    printings: [{
        artists: ["Asur Misoa"],
      
      identifier: "HNT159",
      image: "HNT159",
      
      
      print: "HNT159",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["FAB319","HNT159"],
    sets: [Release.Promos,Release.TheHunted],
    specialImage: "HNT159",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this attacks a **marked** hero, create a Fealty token.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Asur Misoa"],
    cardIdentifier: "for-the-realm-red",
    classes: [Class.NotClassed],
    defaultImage: "HNT160",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "For the Realm",
    printings: [{
        artists: ["Asur Misoa"],
      
      identifier: "HNT160",
      image: "HNT160",
      
      
      print: "HNT160",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["FAB320","HNT160"],
    sets: [Release.Promos,Release.TheHunted],
    specialImage: "HNT160",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `When this attacks a **marked** hero, create a Fealty token.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 6,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Nailsen Ivanderlie"],
    cardIdentifier: "graphene-chelicera",
    classes: [Class.Assassin],
    defaultImage: "HNT053",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Graphene Chelicera",
    printings: [{
        artists: ["Nailsen Ivanderlie"],
      
      identifier: "HNT053",
      image: "HNT053",
      
      
      print: "HNT053",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT053"],
    sets: [Release.TheHunted],
    specialImage: "HNT053",
    subtypes: [Subtype.OneHanded,Subtype.Dagger],
    types: [Type.Token,Type.Weapon],
    typeText: "Assassin Token Weapon - Dagger (1H)",

    
    
    
    
    
    functionalText: `**Stealth**

**Once per Turn Action** - {r}: **Attack**

When this attacks a **marked** hero, the attack gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Stealth],
    
    
    
    
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Jefrey Yonathan"],
    cardIdentifier: "grow-claws-red",
    classes: [Class.Ninja],
    defaultImage: "HNT086",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Grow Claws",
    printings: [{
        artists: ["Jefrey Yonathan"],
      
      identifier: "HNT086",
      image: "HNT086",
      
      
      print: "HNT086",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT086"],
    sets: [Release.TheHunted],
    specialImage: "HNT086",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `If a Draconic attack was the last attack this combat chain, this gets +1{p}.

**Go again**`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Jefrey Yonathan"],
    cardIdentifier: "grow-claws-yellow",
    classes: [Class.Ninja],
    defaultImage: "HNT087",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Grow Claws",
    printings: [{
        artists: ["Jefrey Yonathan"],
      
      identifier: "HNT087",
      image: "HNT087",
      
      
      print: "HNT087",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT087"],
    sets: [Release.TheHunted],
    specialImage: "HNT087",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `If a Draconic attack was the last attack this combat chain, this gets +1{p}.

**Go again**`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Jefrey Yonathan"],
    cardIdentifier: "grow-claws-blue",
    classes: [Class.Ninja],
    defaultImage: "HNT088",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Grow Claws",
    printings: [{
        artists: ["Jefrey Yonathan"],
      
      identifier: "HNT088",
      image: "HNT088",
      
      
      print: "HNT088",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT088"],
    sets: [Release.TheHunted],
    specialImage: "HNT088",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `If a Draconic attack was the last attack this combat chain, this gets +1{p}.

**Go again**`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mateusz Wiśniewski"],
    cardIdentifier: "grow-wings-red",
    classes: [Class.Ninja],
    defaultImage: "HNT089",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Grow Wings",
    printings: [{
        artists: ["Mateusz Wiśniewski"],
      
      identifier: "HNT089",
      image: "HNT089",
      
      
      print: "HNT089",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT089"],
    sets: [Release.TheHunted],
    specialImage: "HNT089",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If a Draconic attack was the last attack this combat chain, this gets **go again**.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mateusz Wiśniewski"],
    cardIdentifier: "grow-wings-yellow",
    classes: [Class.Ninja],
    defaultImage: "HNT090",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Grow Wings",
    printings: [{
        artists: ["Mateusz Wiśniewski"],
      
      identifier: "HNT090",
      image: "HNT090",
      
      
      print: "HNT090",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT090"],
    sets: [Release.TheHunted],
    specialImage: "HNT090",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If a Draconic attack was the last attack this combat chain, this gets **go again**.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mateusz Wiśniewski"],
    cardIdentifier: "grow-wings-blue",
    classes: [Class.Ninja],
    defaultImage: "HNT091",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Grow Wings",
    printings: [{
        artists: ["Mateusz Wiśniewski"],
      
      identifier: "HNT091",
      image: "HNT091",
      
      
      print: "HNT091",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT091"],
    sets: [Release.TheHunted],
    specialImage: "HNT091",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If a Draconic attack was the last attack this combat chain, this gets **go again**.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Shen Fei"],
    cardIdentifier: "hand-of-vengeance",
    classes: [Class.NotClassed],
    defaultImage: "HNT146",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Hand of Vengeance",
    printings: [{
        artists: ["Shen Fei"],
      
      identifier: "HNT146",
      image: "HNT146",
      
      
      print: "HNT146",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT146"],
    sets: [Release.TheHunted],
    specialImage: "HNT146",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Draconic Equipment - Arms",

    
    
    
    defense: 1,
    
    functionalText: `**Attack Reaction** - Destroy this: Target attack that is attacking Arakni gets +1{p}.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Shen Fei"],
    cardIdentifier: "heart-of-vengeance",
    classes: [Class.NotClassed],
    defaultImage: "HNT145",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Heart of Vengeance",
    printings: [{
        artists: ["Shen Fei"],
      
      identifier: "HNT145",
      image: "HNT145",
      
      
      print: "HNT145",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT145"],
    sets: [Release.TheHunted],
    specialImage: "HNT145",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Draconic Equipment - Chest",

    
    
    
    defense: 1,
    
    functionalText: `**Instant** - Destroy this: Your next attack this turn that targets Arakni costs {r} less to play or activate.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Esty Swandana"],
    cardIdentifier: "hot-on-their-heels-red",
    classes: [Class.Ninja],
    defaultImage: "HNT067",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Hot on Their Heels",
    printings: [{
        artists: ["Esty Swandana"],
      
      identifier: "HNT067",
      image: "HNT067",
      
      
      print: "HNT067",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT067"],
    sets: [Release.TheHunted],
    specialImage: "HNT067",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Ninja Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If you control 2 or more Draconic chain links, this gets **go again** and "When this hits a hero, **mark** them."`,
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Reza Afshar"],
    cardIdentifier: "hunt-a-killer-red",
    classes: [Class.Warrior],
    defaultImage: "HNT131",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Hunt a Killer",
    printings: [{
        artists: ["Reza Afshar"],
      
      identifier: "HNT131",
      image: "HNT131",
      
      
      print: "HNT131",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT131"],
    sets: [Release.TheHunted],
    specialImage: "HNT131",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `Your next dagger attack this turn gets +4{p} and "When this hits a hero, **mark** them."

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Reza Afshar"],
    cardIdentifier: "hunt-a-killer-yellow",
    classes: [Class.Warrior],
    defaultImage: "HNT132",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Hunt a Killer",
    printings: [{
        artists: ["Reza Afshar"],
      
      identifier: "HNT132",
      image: "HNT132",
      
      
      print: "HNT132",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT132"],
    sets: [Release.TheHunted],
    specialImage: "HNT132",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `Your next dagger attack this turn gets +3{p} and "When this hits a hero, **mark** them."

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Reza Afshar"],
    cardIdentifier: "hunt-a-killer-blue",
    classes: [Class.Warrior],
    defaultImage: "HNT133",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Hunt a Killer",
    printings: [{
        artists: ["Reza Afshar"],
      
      identifier: "HNT133",
      image: "HNT133",
      
      
      print: "HNT133",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT133"],
    sets: [Release.TheHunted],
    specialImage: "HNT133",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `Your next dagger attack this turn gets +2{p} and "When this hits a hero, **mark** them."

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "hunt-the-hunter-red",
    classes: [Class.NotClassed],
    defaultImage: "HNT161",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Hunt the Hunter",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "HNT161",
      image: "HNT161",
      
      
      print: "HNT161",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT161"],
    sets: [Release.TheHunted],
    specialImage: "HNT161",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this attacks a hero, if you've played another red card this turn, **mark** them.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Sariya Asavametha"],
    cardIdentifier: "hunt-to-the-ends-of-rathe-red",
    classes: [Class.NotClassed],
    defaultImage: "HNT152",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Hunt to the Ends of Rathe",
    printings: [{
        artists: ["Sariya Asavametha"],
      
      identifier: "HNT152",
      image: "HNT152",
      
      
      print: "HNT152",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT152"],
    sets: [Release.TheHunted],
    specialImage: "HNT152",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks Arakni, **mark** them.

If this is attacking a **marked** hero, this gets +2{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    pitch: 1,
    power: 2,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "hunts-end-red",
    classes: [Class.Warrior],
    defaultImage: "HNT101",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Hunt's End",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "HNT101",
      image: "HNT101",
      
      
      print: "HNT101",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Tomasz Jedruszek"],
      foiling: Foiling.R,
      identifier: "HNT101",
      image: "HNT101-EA",
      
      
      print: "HNT101-Rainbow-Extended Art",
      set: Release.TheHunted,
      
      treatment: Treatment.EA,
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT101"],
    sets: [Release.TheHunted],
    specialImage: "HNT101-EA",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Draconic Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Play this only if you control 3 or more Fealty tokens.

Target dagger attack gets +4{p}.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Nailsen Ivanderlie"],
    cardIdentifier: "hunted-or-hunter-red",
    classes: [Class.Assassin],
    defaultImage: "HNT052",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Hunted or Hunter",
    printings: [{
        artists: ["Nailsen Ivanderlie"],
      
      identifier: "HNT052",
      image: "HNT052",
      
      
      print: "HNT052",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT052"],
    sets: [Release.TheHunted],
    specialImage: "HNT052",
    subtypes: [Subtype.Trap],
    types: [Type.DefenseReaction],
    typeText: "Assassin Defense Reaction - Trap",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this defends and the attacking hero has played or activated an attack reaction this chain link, they lose 1{h}.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "hunters-klaive",
    classes: [Class.Assassin],
    defaultImage: "HNT009",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Hunter's Klaive",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "HNT009",
      image: "HNT009",
      isExpansionSlot: true,
      
      print: "HNT009",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Thomas Ressuge"],
      foiling: Foiling.C,
      identifier: "HNT009",
      image: "HNT009",
      isExpansionSlot: true,
      
      print: "HNT009-Cold",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT009"],
    sets: [Release.TheHunted],
    specialImage: "HNT009",
    subtypes: [Subtype.OneHanded,Subtype.Dagger],
    types: [Type.Weapon],
    typeText: "Assassin Weapon - Dagger (1H)",

    
    
    
    
    
    functionalText: `**Once per Turn Action** - {r}{r}: **Attack**. **Go again**

When this hits a hero, **mark** them.

**Piercing 1**`,
    
    
    
    
    keywords: [Keyword.Piercing],
    
    meta: [Meta.Expansion],
    
    
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mario Wibisono"],
    cardIdentifier: "ignite-red",
    classes: [Class.Ninja],
    defaultImage: "HNT058",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Ignite",
    printings: [{
        artists: ["Mario Wibisono"],
      
      identifier: "HNT058",
      image: "HNT058",
      
      
      print: "HNT058",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Mario Wibisono"],
      foiling: Foiling.R,
      identifier: "HNT058",
      image: "HNT058-EA",
      
      
      print: "HNT058-Rainbow-Extended Art",
      set: Release.TheHunted,
      
      treatment: Treatment.EA,
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT058"],
    sets: [Release.TheHunted],
    specialImage: "HNT058-EA",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Ninja Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, the next Draconic card you play or activate this combat chain costs {r} less to play or activate.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    pitch: 1,
    power: 2,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Othon Nikolaidis"],
    cardIdentifier: "imperial-intent-red",
    classes: [Class.Warrior],
    defaultImage: "HNT109",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Imperial Intent",
    printings: [{
        artists: ["Othon Nikolaidis"],
      
      identifier: "HNT109",
      image: "HNT109",
      
      
      print: "HNT109",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT109"],
    sets: [Release.TheHunted],
    specialImage: "HNT109",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Draconic Warrior Attack Reaction",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `This costs {r} less to play for each Draconic chain link you control.

Target dagger attack gets +2{p}.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Milivoj Ćeran"],
    cardIdentifier: "imperial-seal-of-command-red",
    classes: [Class.Generic],
    defaultImage: "HNT228",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Imperial Seal of Command",
    printings: [{
        artists: ["Milivoj Ćeran"],
      
      identifier: "HNT228",
      image: "HNT228",
      
      
      print: "HNT228",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT228"],
    sets: [Release.TheHunted],
    specialImage: "HNT228",
    subtypes: [Subtype.Item,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action - Item",

    
    
    cost: 0,
    
    
    functionalText: `**Legendary**

**Action** - Destroy this: Defense reaction cards can't be played this turn. If you are Royal, the next time you hit a hero this turn, destroy all cards in their arsenal. **Go again**`,
    
    
    
    
    keywords: [Keyword.Legendary],
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nailsen Ivanderlie"],
    cardIdentifier: "incision-red",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT205",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Incision",
    printings: [{
        artists: ["Nailsen Ivanderlie"],
      
      identifier: "HNT205",
      image: "HNT205",
      
      
      print: "HNT205",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT205"],
    sets: [Release.TheHunted],
    specialImage: "HNT205",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin / Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Target dagger attack gets +3{p}.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nailsen Ivanderlie"],
    cardIdentifier: "incision-yellow",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT206",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Incision",
    printings: [{
        artists: ["Nailsen Ivanderlie"],
      
      identifier: "HNT206",
      image: "HNT206",
      
      
      print: "HNT206",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT206"],
    sets: [Release.TheHunted],
    specialImage: "HNT206",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin / Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Target dagger attack gets +2{p}.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nailsen Ivanderlie"],
    cardIdentifier: "incision-blue",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT207",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Incision",
    printings: [{
        artists: ["Nailsen Ivanderlie"],
      
      identifier: "HNT207",
      image: "HNT207",
      
      
      print: "HNT207",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT207"],
    sets: [Release.TheHunted],
    specialImage: "HNT207",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin / Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Target dagger attack gets +1{p}.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Audy Ravindra"],
    cardIdentifier: "jagged-edge-red",
    classes: [Class.Warrior],
    defaultImage: "HNT116",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Jagged Edge",
    printings: [{
        artists: ["Audy Ravindra"],
      
      identifier: "HNT116",
      image: "HNT116",
      
      
      print: "HNT116",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic,Rarity.Promo],
    rarity: Rarity.Majestic,
    setIdentifiers: ["FAB311","HNT116"],
    sets: [Release.Promos,Release.TheHunted],
    specialImage: "HNT116",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Warrior Attack Reaction",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `Target weapon attack gets +3{p} and "Damage this would deal can't be prevented."`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Sariya Asavametha"],
    cardIdentifier: "kabuto-of-imperial-authority",
    classes: [Class.Warrior],
    defaultImage: "HNT115",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Kabuto of Imperial Authority",
    printings: [{
        artists: ["Sariya Asavametha"],
      foiling: Foiling.R,
      identifier: "HNT115",
      image: "HNT115",
      
      
      print: "HNT115-Rainbow",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Sariya Asavametha"],
      foiling: Foiling.C,
      identifier: "HNT115",
      image: "HNT115-EA",
      
      
      print: "HNT115-Cold-Extended Art",
      set: Release.TheHunted,
      
      treatment: Treatment.EA,
    },],
    rarities: [Rarity.Legendary],
    rarity: Rarity.Legendary,
    setIdentifiers: ["HNT115"],
    sets: [Release.TheHunted],
    specialImage: "HNT115-EA",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Warrior Equipment - Head",

    
    
    
    defense: 2,
    
    functionalText: `When this defends, until end of turn, opponents can't attack with weapons.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Wisnu Tan"],
    cardIdentifier: "kiss-of-death-red",
    classes: [Class.Assassin],
    defaultImage: "HNT012",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Kiss of Death",
    printings: [{
        artists: ["Wisnu Tan"],
      
      identifier: "HNT012",
      image: "HNT012",
      
      
      print: "HNT012",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Wisnu Tan"],
      foiling: Foiling.C,
      identifier: "HNT012",
      image: "HNT012-EA",
      
      
      print: "HNT012-Cold-Extended Art",
      set: Release.TheHunted,
      
      treatment: Treatment.EA,
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT012"],
    sets: [Release.TheHunted],
    specialImage: "HNT012-EA",
    subtypes: [Subtype.Attack,Subtype.Dagger],
    types: [Type.Action],
    typeText: "Assassin Action - Dagger Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this hits a hero, they lose 1{h}.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "knife-through-butter-red",
    classes: [Class.Warrior],
    defaultImage: "HNT134",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Knife Through Butter",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "HNT134",
      image: "HNT134",
      
      
      print: "HNT134",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT134"],
    sets: [Release.TheHunted],
    specialImage: "HNT134",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `Your next dagger attack this turn gets +4{p}.

Whenever you attack a **marked** hero this turn, the attack gets **go again**.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "knife-through-butter-yellow",
    classes: [Class.Warrior],
    defaultImage: "HNT135",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Knife Through Butter",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "HNT135",
      image: "HNT135",
      
      
      print: "HNT135",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT135"],
    sets: [Release.TheHunted],
    specialImage: "HNT135",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `Your next dagger attack this turn gets +3{p}.

Whenever you attack a **marked** hero this turn, the attack gets **go again**.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "knife-through-butter-blue",
    classes: [Class.Warrior],
    defaultImage: "HNT136",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Knife Through Butter",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "HNT136",
      image: "HNT136",
      
      
      print: "HNT136",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT136"],
    sets: [Release.TheHunted],
    specialImage: "HNT136",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `Your next dagger attack this turn gets +2{p}.

Whenever you attack a **marked** hero this turn, the attack gets **go again**.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Widya Wang"],
    cardIdentifier: "kunai-of-retribution",
    classes: [Class.Ninja],
    defaultImage: "HNT056",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Kunai of Retribution",
    printings: [{
        artists: ["Widya Wang"],
      
      identifier: "HNT056",
      image: "HNT056",
      
      
      print: "HNT056",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT056"],
    sets: [Release.TheHunted],
    specialImage: "HNT056",
    subtypes: [Subtype.OneHanded,Subtype.Dagger],
    types: [Type.Weapon],
    typeText: "Draconic Ninja Weapon - Dagger (1H)",

    
    
    
    
    
    functionalText: `**Once per Turn Action** - {r}, destroy this when the combat chain closes: **Attack**. **Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    power: 1,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Saad Irfan"],
    cardIdentifier: "lair-of-the-spider-red",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT191",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Lair of the Spider",
    printings: [{
        artists: ["Saad Irfan"],
      
      identifier: "HNT191",
      image: "HNT191",
      
      
      print: "HNT191",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT191"],
    sets: [Release.TheHunted],
    specialImage: "HNT191",
    subtypes: [Subtype.Trap],
    types: [Type.DefenseReaction],
    typeText: "Assassin / Ninja Action Defense Reaction - Trap",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this defends an attack with **go again**, **mark** the attacking hero.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Maerel Hibadita"],
    cardIdentifier: "lava-vein-loyalty-red",
    classes: [Class.Ninja],
    defaultImage: "HNT068",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Lava Vein Loyalty",
    printings: [{
        artists: ["Maerel Hibadita"],
      
      identifier: "HNT068",
      image: "HNT068",
      
      
      print: "HNT068",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["FAI015","HNT068","UPR069"],
    sets: [Release.FaiBlitzDeck,Release.TheHunted,Release.Uprising],
    specialImage: "HNT068",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Ninja Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If you control 2 or more Draconic chain links, this gets **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Widya Wang"],
    cardIdentifier: "lay-low-yellow",
    classes: [Class.Generic],
    defaultImage: "HNT236",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Lay Low",
    printings: [{
        artists: ["Widya Wang"],
      
      identifier: "HNT236",
      image: "HNT236",
      
      
      print: "HNT236",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT236"],
    sets: [Release.TheHunted],
    specialImage: "HNT236",
    subtypes: [],
    types: [Type.DefenseReaction],
    typeText: "Generic Defense Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If you are **marked**, you can't play this.

If the defending hero is **marked**, their next attack this turn gets -1{p}.`,
    
    
    
    
    
    
    
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Andi Cahyo W"],
    cardIdentifier: "leap-frog-gloves",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT171",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Leap Frog Gloves",
    printings: [{
        artists: ["Andi Cahyo W"],
      
      identifier: "HNT171",
      image: "HNT171",
      
      
      print: "HNT171",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT171"],
    sets: [Release.TheHunted],
    specialImage: "HNT171",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Assassin / Ninja Equipment - Arms",

    
    
    
    defense: 1,
    
    functionalText: `When an opponent plays or activates an attack reaction, you may add this to the active chain link as a defending card.`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["M Fakhrur Rozzi"],
    cardIdentifier: "leap-frog-leggings",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT172",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Leap Frog Leggings",
    printings: [{
        artists: ["M Fakhrur Rozzi"],
      
      identifier: "HNT172",
      image: "HNT172",
      
      
      print: "HNT172",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT172"],
    sets: [Release.TheHunted],
    specialImage: "HNT172",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Assassin / Ninja Equipment - Legs",

    
    
    
    defense: 1,
    
    functionalText: `When an opponent plays or activates an attack reaction, you may add this to the active chain link as a defending card.`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Brian Madya Narendra"],
    cardIdentifier: "leap-frog-slime-skin",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT170",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Leap Frog Slime Skin",
    printings: [{
        artists: ["Brian Madya Narendra"],
      
      identifier: "HNT170",
      image: "HNT170",
      
      
      print: "HNT170",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT170"],
    sets: [Release.TheHunted],
    specialImage: "HNT170",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Assassin / Ninja Equipment - Chest",

    
    
    
    defense: 1,
    
    functionalText: `When an opponent plays or activates an attack reaction, you may add this to the active chain link as a defending card.`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Bramasta Aji"],
    cardIdentifier: "leap-frog-vocal-sac",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT169",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Leap Frog Vocal Sac",
    printings: [{
        artists: ["Bramasta Aji"],
      
      identifier: "HNT169",
      image: "HNT169",
      
      
      print: "HNT169",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT169"],
    sets: [Release.TheHunted],
    specialImage: "HNT169",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Assassin / Ninja Equipment - Head",

    
    
    
    defense: 1,
    
    functionalText: `When an opponent plays or activates an attack reaction, you may add this to the active chain link as a defending card.`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Federico Musetti"],
    cardIdentifier: "long-whisker-loyalty-red",
    classes: [Class.Warrior],
    defaultImage: "HNT102",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Long Whisker Loyalty",
    printings: [{
        artists: ["Federico Musetti"],
      
      identifier: "HNT102",
      image: "HNT102",
      
      
      print: "HNT102",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic,Rarity.Promo],
    rarity: Rarity.Majestic,
    setIdentifiers: ["FAB317","HNT102"],
    sets: [Release.Promos,Release.TheHunted],
    specialImage: "HNT102",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Draconic Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `For each Draconic chain link you control, choose 1;

* Target dagger attack gains +2{p}.
* You may attack with target dagger an additional time this turn.
* The next time target dagger hits a hero this turn, **mark** them.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Sariya Asavametha"],
    cardIdentifier: "loyalty-beyond-the-grave-red",
    classes: [Class.NotClassed],
    defaultImage: "HNT150",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Loyalty Beyond the Grave",
    printings: [{
        artists: ["Sariya Asavametha"],
      
      identifier: "HNT150",
      image: "HNT150",
      
      
      print: "HNT150",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Sariya Asavametha"],
      foiling: Foiling.R,
      identifier: "HNT150",
      image: "HNT150-EA",
      
      
      print: "HNT150-Rainbow-Extended Art",
      set: Release.TheHunted,
      
      treatment: Treatment.EA,
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT150"],
    sets: [Release.TheHunted],
    specialImage: "HNT150-EA",
    subtypes: [],
    types: [Type.DefenseReaction],
    typeText: "Draconic, Defense Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `While this is in your graveyard, at the start of your turn, you may banish 2 cards named Loyalty Beyond the Grave from your graveyard. If you do, draw a card.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "march-of-loyalty-red",
    classes: [Class.NotClassed],
    defaultImage: "HNT153",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "March of Loyalty",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "HNT153",
      image: "HNT153",
      
      
      print: "HNT153",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT153"],
    sets: [Release.TheHunted],
    specialImage: "HNT153",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `If you've created a Fealty token this turn, this gets **go again**`,
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "mark-of-the-black-widow-red",
    classes: [Class.Assassin],
    defaultImage: "HNT032",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Mark of the Black Widow",
    printings: [{
        artists: ["Rio Sabda"],
      
      identifier: "HNT032",
      image: "HNT032",
      
      
      print: "HNT032",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT032"],
    sets: [Release.TheHunted],
    specialImage: "HNT032",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this hits a **marked** hero, they banish a card from their hand.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "mark-of-the-black-widow-yellow",
    classes: [Class.Assassin],
    defaultImage: "HNT033",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Mark of the Black Widow",
    printings: [{
        artists: ["Rio Sabda"],
      
      identifier: "HNT033",
      image: "HNT033",
      
      
      print: "HNT033",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT033"],
    sets: [Release.TheHunted],
    specialImage: "HNT033",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this hits a **marked** hero, they banish a card from their hand.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  }];
  const cards3: Card[] =  [{
    artists: ["Rio Sabda"],
    cardIdentifier: "mark-of-the-black-widow-blue",
    classes: [Class.Assassin],
    defaultImage: "HNT034",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Mark of the Black Widow",
    printings: [{
        artists: ["Rio Sabda"],
      
      identifier: "HNT034",
      image: "HNT034",
      
      
      print: "HNT034",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT034"],
    sets: [Release.TheHunted],
    specialImage: "HNT034",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this hits a **marked** hero, they banish a card from their hand.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Saad Irfan"],
    cardIdentifier: "mark-of-the-funnel-web-red",
    classes: [Class.Assassin],
    defaultImage: "HNT035",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Mark of the Funnel Web",
    printings: [{
        artists: ["Saad Irfan"],
      
      identifier: "HNT035",
      image: "HNT035",
      
      
      print: "HNT035",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT035"],
    sets: [Release.TheHunted],
    specialImage: "HNT035",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this hits a **marked** hero, banish a card in their arsenal.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Saad Irfan"],
    cardIdentifier: "mark-of-the-funnel-web-yellow",
    classes: [Class.Assassin],
    defaultImage: "HNT036",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Mark of the Funnel Web",
    printings: [{
        artists: ["Saad Irfan"],
      
      identifier: "HNT036",
      image: "HNT036",
      
      
      print: "HNT036",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT036"],
    sets: [Release.TheHunted],
    specialImage: "HNT036",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this hits a **marked** hero, banish a card in their arsenal.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Saad Irfan"],
    cardIdentifier: "mark-of-the-funnel-web-blue",
    classes: [Class.Assassin],
    defaultImage: "HNT037",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Mark of the Funnel Web",
    printings: [{
        artists: ["Saad Irfan"],
      
      identifier: "HNT037",
      image: "HNT037",
      
      
      print: "HNT037",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT037"],
    sets: [Release.TheHunted],
    specialImage: "HNT037",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this hits a **marked** hero, banish a card in their arsenal.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marcus Reyno"],
    cardIdentifier: "mark-of-the-huntsman",
    classes: [Class.Assassin],
    defaultImage: "HNT010",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Mark of the Huntsman",
    printings: [{
        artists: ["Marcus Reyno"],
      
      identifier: "HNT010",
      image: "HNT010",
      
      
      print: "HNT010",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT010"],
    sets: [Release.TheHunted],
    specialImage: "HNT010",
    subtypes: [Subtype.OneHanded,Subtype.Dagger],
    types: [Type.Weapon],
    typeText: "Assassin Weapon - Dagger (1H)",

    
    
    
    
    
    functionalText: `**Once per Turn Action** - {r}{r}: **Attack**. **Go again**

When this hits a hero, you may choose to destroy this and **mark** them.

If this is attacking a **marked** hero, this gets +1{p}.`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Mark],
    
    
    
    
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kimberly Pantoni"],
    cardIdentifier: "mark-the-prey-red",
    classes: [Class.Assassin],
    defaultImage: "HNT038",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Mark the Prey",
    printings: [{
        artists: ["Kimberly Pantoni"],
      
      identifier: "HNT038",
      image: "HNT038",
      
      
      print: "HNT038",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT038"],
    sets: [Release.TheHunted],
    specialImage: "HNT038",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this hits a hero, **mark** them.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kimberly Pantoni"],
    cardIdentifier: "mark-the-prey-yellow",
    classes: [Class.Assassin],
    defaultImage: "HNT039",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Mark the Prey",
    printings: [{
        artists: ["Kimberly Pantoni"],
      
      identifier: "HNT039",
      image: "HNT039",
      
      
      print: "HNT039",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT039"],
    sets: [Release.TheHunted],
    specialImage: "HNT039",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this hits a hero, **mark** them.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kimberly Pantoni"],
    cardIdentifier: "mark-the-prey-blue",
    classes: [Class.Assassin],
    defaultImage: "HNT040",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Mark the Prey",
    printings: [{
        artists: ["Kimberly Pantoni"],
      
      identifier: "HNT040",
      image: "HNT040",
      
      
      print: "HNT040",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT040"],
    sets: [Release.TheHunted],
    specialImage: "HNT040",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this hits a hero, **mark** them.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "mark-with-magma-red",
    classes: [Class.Ninja],
    defaultImage: "HNT069",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Mark with Magma",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "HNT069",
      image: "HNT069",
      
      
      print: "HNT069",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT069"],
    sets: [Release.TheHunted],
    specialImage: "HNT069",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Ninja Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `If you control 2 or more Draconic chain links, this gets **go again** and "When this hits a hero, **mark** them."`,
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Jessketchin"],
    cardIdentifier: "marked",
    classes: [],
    defaultImage: "HNT244",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Marked",
    printings: [{
        artists: ["Jessketchin"],
      
      identifier: "HNT244",
      image: "HNT244",
      
      
      print: "HNT244",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT244"],
    sets: [Release.TheHunted],
    specialImage: "HNT244",
    subtypes: [],
    types: [Type.Token],
    typeText: "Token",

    
    
    
    
    
    functionalText: `You are **marked** until an opponent hits you`,
    
    
    
    
    keywords: [Keyword.Mark],
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mark Poole"],
    cardIdentifier: "mask-of-deceit",
    classes: [Class.Assassin],
    defaultImage: "HNT011",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Mask of Deceit",
    printings: [{
        artists: ["Mark Poole"],
      foiling: Foiling.R,
      identifier: "HNT011",
      image: "HNT011",
      
      
      print: "HNT011-Rainbow",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Mark Poole"],
      foiling: Foiling.C,
      identifier: "HNT011",
      image: "HNT011-EA",
      
      
      print: "HNT011-Cold-Extended Art",
      set: Release.TheHunted,
      
      treatment: Treatment.EA,
    },],
    rarities: [Rarity.Legendary],
    rarity: Rarity.Legendary,
    setIdentifiers: ["HNT011"],
    sets: [Release.TheHunted],
    specialImage: "HNT011-EA",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Assassin Equipment - Head",

    
    
    
    defense: 2,
    
    functionalText: `**Arakni Specialization**

When this defends, become a random Agent of Chaos. If the attacking hero is **marked**, instead choose the Agent of Chaos.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak,Keyword.Specialization],
    
    
    
    
    
    
    
    
    
    
    
    specializations: [Hero.Arakni],
    
  
  
  },{
    artists: ["Mariusz Gandzel"],
    cardIdentifier: "misfire-dampener",
    classes: [Class.Mechanologist],
    defaultImage: "HNT250",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Misfire Dampener",
    printings: [{
        artists: ["Mariusz Gandzel"],
      
      identifier: "HNT250",
      image: "HNT250",
      isExpansionSlot: true,
      
      print: "HNT250",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Mariusz Gandzel"],
      foiling: Foiling.C,
      identifier: "HNT250",
      image: "HNT250",
      isExpansionSlot: true,
      
      print: "HNT250-Cold",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT250"],
    sets: [Release.TheHunted],
    specialImage: "HNT250",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Mechanologist Equipment - Arms",

    
    
    
    defense: 1,
    
    functionalText: `**Instant** - Destroy this: Prevent the next 1 arcane damage that would be dealt to you this turn. If you've **boosted** this turn, instead prevent the next 2.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    meta: [Meta.Expansion],
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "nip-at-the-heels-blue",
    classes: [Class.Generic],
    defaultImage: "HNT239",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Nip at the Heels",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "HNT239",
      image: "HNT239",
      
      
      print: "HNT239",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT239"],
    sets: [Release.TheHunted],
    specialImage: "HNT239",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Generic Attack Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Target attack with 3 or less base {p} gets +1{p}.`,
    
    
    
    
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "null-time-zone-blue",
    classes: [Class.Mechanologist],
    defaultImage: "HNT251",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Null Time Zone",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "HNT251",
      image: "HNT251",
      isExpansionSlot: true,
      
      print: "HNT251",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Carlos Cruchaga"],
      foiling: Foiling.C,
      identifier: "HNT251",
      image: "HNT251",
      isExpansionSlot: true,
      
      print: "HNT251-Cold",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT251"],
    sets: [Release.TheHunted],
    specialImage: "HNT251",
    subtypes: [Subtype.Item,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Mechanologist Action - Item",

    
    
    cost: 0,
    
    
    functionalText: `**Crank**

This enters the arena with 2 steam counters. At the start of your turn, destroy this unless you remove a steam counter from it.

When this enters the arena, name a card. The named card can't be pitched or played from hand while this is in the arena.`,
    
    
    
    
    keywords: [Keyword.Crank],
    
    meta: [Meta.Expansion],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "oath-of-loyalty-red",
    classes: [Class.NotClassed],
    defaultImage: "HNT149",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Oath of Loyalty",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "HNT149",
      image: "HNT149",
      
      
      print: "HNT149",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.R,
      identifier: "HNT149",
      image: "HNT149-EA",
      
      
      print: "HNT149-Rainbow-Extended Art",
      set: Release.TheHunted,
      
      treatment: Treatment.EA,
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT149"],
    sets: [Release.TheHunted],
    specialImage: "HNT149-EA",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `This may only be played if it's the first action of your turn.

When this is played, until end of turn, you may only play cards that are Draconic.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["M Fakhrur Rozzi"],
    cardIdentifier: "obsidian-fire-vein",
    classes: [Class.Warrior],
    defaultImage: "HNT100",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Obsidian Fire Vein",
    printings: [{
        artists: ["M Fakhrur Rozzi"],
      
      identifier: "HNT100",
      image: "HNT100",
      
      
      print: "HNT100",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT100"],
    sets: [Release.TheHunted],
    specialImage: "HNT100",
    subtypes: [Subtype.OneHanded,Subtype.Dagger],
    types: [Type.Weapon],
    typeText: "Draconic Warrior Weapon - Dagger (1H)",

    
    
    
    
    
    functionalText: `**Once per Turn Action** - {r}: **Attack**. If you've played a Draconic card this chain link, this attack gets +1{p} and **go again**.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    
    power: 1,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["SanSan"],
    cardIdentifier: "orb-weaver-spinneret-red",
    classes: [Class.Assassin],
    defaultImage: "HNT026",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Orb-Weaver Spinneret",
    printings: [{
        artists: ["SanSan"],
      
      identifier: "HNT026",
      image: "HNT026",
      
      
      print: "HNT026",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT026"],
    sets: [Release.TheHunted],
    specialImage: "HNT026",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Assassin Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Equip a Graphene Chelicera token.

Your next attack with **stealth** this turn gets +3{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["SanSan"],
    cardIdentifier: "orb-weaver-spinneret-yellow",
    classes: [Class.Assassin],
    defaultImage: "HNT027",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Orb-Weaver Spinneret",
    printings: [{
        artists: ["SanSan"],
      
      identifier: "HNT027",
      image: "HNT027",
      
      
      print: "HNT027",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT027"],
    sets: [Release.TheHunted],
    specialImage: "HNT027",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Assassin Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Equip a Graphene Chelicera token.

Your next attack with **stealth** this turn gets +2{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["SanSan"],
    cardIdentifier: "orb-weaver-spinneret-blue",
    classes: [Class.Assassin],
    defaultImage: "HNT028",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Orb-Weaver Spinneret",
    printings: [{
        artists: ["SanSan"],
      
      identifier: "HNT028",
      image: "HNT028",
      
      
      print: "HNT028",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT028"],
    sets: [Release.TheHunted],
    specialImage: "HNT028",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Assassin Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Equip a Graphene Chelicera token.

Your next attack with **stealth** this turn gets +1{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tommy Suhartono"],
    cardIdentifier: "outed-red",
    classes: [Class.Generic],
    defaultImage: "HNT235",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Outed",
    printings: [{
        artists: ["Tommy Suhartono"],
      
      identifier: "HNT235",
      image: "HNT235",
      
      
      print: "HNT235",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT235"],
    sets: [Release.TheHunted],
    specialImage: "HNT235",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    
    
    functionalText: `If you are **marked**, you can't play this.

If the defending hero is **marked**, this gets +1{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Jessada Sutthi"],
    cardIdentifier: "pain-in-the-backside-red",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT174",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Pain in the Backside",
    printings: [{
        artists: ["Jessada Sutthi"],
      
      identifier: "HNT174",
      image: "HNT174",
      
      
      print: "HNT174",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT174"],
    sets: [Release.TheHunted],
    specialImage: "HNT174",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin / Ninja Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this hits a hero, target dagger you control deals 1 damage to them. If damage is dealt this way, the dagger has hit.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Shen Fei"],
    cardIdentifier: "path-of-vengeance",
    classes: [Class.NotClassed],
    defaultImage: "HNT147",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Path of Vengeance",
    printings: [{
        artists: ["Shen Fei"],
      
      identifier: "HNT147",
      image: "HNT147",
      
      
      print: "HNT147",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT147"],
    sets: [Release.TheHunted],
    specialImage: "HNT147",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Draconic Equipment - Legs",

    
    
    
    defense: 1,
    
    functionalText: `**Attack Reaction** - Destroy this: Target attack that is attacking Arakni gets **go again**.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Tanapon Wachirakul"],
    cardIdentifier: "perforate-yellow",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT197",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Perforate",
    printings: [{
        artists: ["Tanapon Wachirakul"],
      
      identifier: "HNT197",
      image: "HNT197",
      
      
      print: "HNT197",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT197"],
    sets: [Release.TheHunted],
    specialImage: "HNT197",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin / Warrior Attack Reaction",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `You may attack with target dagger an additional time and its attacks cost you {r} less to activate this turn.

Draw a card.`,
    
    
    
    
    
    
    
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikko Wahyudi"],
    cardIdentifier: "pick-up-the-point-red",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT182",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Pick Up the Point",
    printings: [{
        artists: ["Nikko Wahyudi"],
      
      identifier: "HNT182",
      image: "HNT182",
      
      
      print: "HNT182",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT182"],
    sets: [Release.TheHunted],
    specialImage: "HNT182",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin / Ninja Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, you may **retrieve** a dagger from your graveyard.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Retrieve],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikko Wahyudi"],
    cardIdentifier: "pick-up-the-point-yellow",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT183",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Pick Up the Point",
    printings: [{
        artists: ["Nikko Wahyudi"],
      
      identifier: "HNT183",
      image: "HNT183",
      
      
      print: "HNT183",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT183"],
    sets: [Release.TheHunted],
    specialImage: "HNT183",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin / Ninja Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, you may **retrieve** a dagger from your graveyard.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Retrieve],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikko Wahyudi"],
    cardIdentifier: "pick-up-the-point-blue",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT184",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Pick Up the Point",
    printings: [{
        artists: ["Nikko Wahyudi"],
      
      identifier: "HNT184",
      image: "HNT184",
      
      
      print: "HNT184",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT184"],
    sets: [Release.TheHunted],
    specialImage: "HNT184",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin / Ninja Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this attacks, you may **retrieve** a dagger from your graveyard.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Retrieve],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Sebastian Giacobino"],
    cardIdentifier: "pledge-fealty-red",
    classes: [Class.NotClassed],
    defaultImage: "HNT164",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Pledge Fealty",
    printings: [{
        artists: ["Sebastian Giacobino"],
      
      identifier: "HNT164",
      image: "HNT164",
      
      
      print: "HNT164",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT164"],
    sets: [Release.TheHunted],
    specialImage: "HNT164",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Draconic Instant",

    
    
    cost: 0,
    
    
    functionalText: `Create a Fealty token.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Nikolay Moskvin"],
    cardIdentifier: "plunge-the-prospect-red",
    classes: [Class.Assassin],
    defaultImage: "HNT041",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Plunge the Prospect",
    printings: [{
        artists: ["Nikolay Moskvin"],
      
      identifier: "HNT041",
      image: "HNT041",
      
      
      print: "HNT041",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT041"],
    sets: [Release.TheHunted],
    specialImage: "HNT041",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

If this is attacking a **marked** hero, this gets +1{p}.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikolay Moskvin"],
    cardIdentifier: "plunge-the-prospect-yellow",
    classes: [Class.Assassin],
    defaultImage: "HNT042",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Plunge the Prospect",
    printings: [{
        artists: ["Nikolay Moskvin"],
      
      identifier: "HNT042",
      image: "HNT042",
      
      
      print: "HNT042",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT042"],
    sets: [Release.TheHunted],
    specialImage: "HNT042",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

If this is attacking a **marked** hero, this gets +1{p}.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikolay Moskvin"],
    cardIdentifier: "plunge-the-prospect-blue",
    classes: [Class.Assassin],
    defaultImage: "HNT043",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Plunge the Prospect",
    printings: [{
        artists: ["Nikolay Moskvin"],
      
      identifier: "HNT043",
      image: "HNT043",
      
      
      print: "HNT043",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT043"],
    sets: [Release.TheHunted],
    specialImage: "HNT043",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

If this is attacking a **marked** hero, this gets +1{p}.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Andi Cahyo W"],
    cardIdentifier: "point-of-engagement-red",
    classes: [Class.Warrior],
    defaultImage: "HNT137",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Point of Engagement",
    printings: [{
        artists: ["Andi Cahyo W"],
      
      identifier: "HNT137",
      image: "HNT137",
      
      
      print: "HNT137",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT137"],
    sets: [Release.TheHunted],
    specialImage: "HNT137",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Your next dagger attack this turn gets +3{p}.

Until end of turn, your attacks get +1{p} while attacking a **marked** hero.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Andi Cahyo W"],
    cardIdentifier: "point-of-engagement-yellow",
    classes: [Class.Warrior],
    defaultImage: "HNT138",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Point of Engagement",
    printings: [{
        artists: ["Andi Cahyo W"],
      
      identifier: "HNT138",
      image: "HNT138",
      
      
      print: "HNT138",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT138"],
    sets: [Release.TheHunted],
    specialImage: "HNT138",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Your next dagger attack this turn gets +2{p}.

Until end of turn, your attacks get +1{p} while attacking a **marked** hero.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Andi Cahyo W"],
    cardIdentifier: "point-of-engagement-blue",
    classes: [Class.Warrior],
    defaultImage: "HNT139",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Point of Engagement",
    printings: [{
        artists: ["Andi Cahyo W"],
      
      identifier: "HNT139",
      image: "HNT139",
      
      
      print: "HNT139",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT139"],
    sets: [Release.TheHunted],
    specialImage: "HNT139",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Your next dagger attack this turn gets +1{p}.

Until end of turn, your attacks get +1{p} while attacking a **marked** hero.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "poisoned-blade-red",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT185",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Poisoned Blade",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "HNT185",
      image: "HNT185",
      
      
      print: "HNT185",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT185"],
    sets: [Release.TheHunted],
    specialImage: "HNT185",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin / Ninja Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `Whenever a dagger you own hits a hero this combat chain, they lose 1{h}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "poisoned-blade-yellow",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT186",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Poisoned Blade",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "HNT186",
      image: "HNT186",
      
      
      print: "HNT186",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT186"],
    sets: [Release.TheHunted],
    specialImage: "HNT186",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin / Ninja Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `Whenever a dagger you own hits a hero this combat chain, they lose 1{h}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "poisoned-blade-blue",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT187",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Poisoned Blade",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "HNT187",
      image: "HNT187",
      
      
      print: "HNT187",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT187"],
    sets: [Release.TheHunted],
    specialImage: "HNT187",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin / Ninja Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `Whenever a dagger you own hits a hero this combat chain, they lose 1{h}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tanapon Wachirakul"],
    cardIdentifier: "power-stance-blue",
    classes: [Class.Warrior],
    defaultImage: "HNT127",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Power Stance",
    printings: [{
        artists: ["Tanapon Wachirakul"],
      
      identifier: "HNT127",
      image: "HNT127",
      
      
      print: "HNT127",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["FAB314","HNT127"],
    sets: [Release.Promos,Release.TheHunted],
    specialImage: "HNT127",
    subtypes: [Subtype.Aura,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action - Aura",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Go again**

At the start of your turn, destroy this, then your dagger attacks get +1{p} this turn.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "proclaim-vengeance-red",
    classes: [Class.NotClassed],
    defaultImage: "HNT165",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Proclaim Vengeance",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "HNT165",
      image: "HNT165",
      
      
      print: "HNT165",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT165"],
    sets: [Release.TheHunted],
    specialImage: "HNT165",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Draconic Instant",

    
    
    cost: 0,
    
    
    functionalText: `**Mark** target opposing hero. If that hero is Arakni, gain {r}.`,
    
    
    
    
    keywords: [Keyword.Mark],
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Sebastian Giacobino"],
    cardIdentifier: "provoke-blue",
    classes: [Class.Warrior],
    defaultImage: "HNT117",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Provoke",
    printings: [{
        artists: ["Sebastian Giacobino"],
      
      identifier: "HNT117",
      image: "HNT117",
      
      
      print: "HNT117",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Sebastian Giacobino"],
      
      identifier: "HNT117",
      image: "HNT117_EA",
      
      
      print: "HNT117-Extended Art",
      set: Release.TheHunted,
      
      treatment: Treatment.EA,
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT117"],
    sets: [Release.TheHunted],
    specialImage: "HNT117_EA",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Warrior Attack Reaction",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `If you're attacking with a weapon this chain link, the defending hero reveals a card from their hand. If it's an action card, add it to this chain link as a defending card, otherwise they discard it.`,
    
    
    
    
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "prowess-of-agility-blue",
    classes: [Class.Ninja],
    defaultImage: "HNT073",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Prowess of Agility",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "HNT073",
      image: "HNT073",
      
      
      print: "HNT073",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT073"],
    sets: [Release.TheHunted],
    specialImage: "HNT073",
    subtypes: [Subtype.Aura,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Ninja Action - Aura",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When you attack for the fourth time during a turn, you may destroy this. If you do, draw a card.

At the beginning of your end phase, if you've attacked less than 3 times this turn, destroy this.`,
    
    
    
    
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Daniel Jiménez"],
    cardIdentifier: "public-bounty-red",
    classes: [Class.Generic],
    defaultImage: "HNT241",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Public Bounty",
    printings: [{
        artists: ["Daniel Jiménez"],
      
      identifier: "HNT241",
      image: "HNT241",
      
      
      print: "HNT241",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT241"],
    sets: [Release.TheHunted],
    specialImage: "HNT241",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `**Mark** target opposing hero.

The next time you attack a **marked** hero this turn, the attack gets +3{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Mark],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Daniel Jiménez"],
    cardIdentifier: "public-bounty-yellow",
    classes: [Class.Generic],
    defaultImage: "HNT242",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Public Bounty",
    printings: [{
        artists: ["Daniel Jiménez"],
      
      identifier: "HNT242",
      image: "HNT242",
      
      
      print: "HNT242",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT242"],
    sets: [Release.TheHunted],
    specialImage: "HNT242",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `**Mark** target opposing hero.

The next time you attack a **marked** hero this turn, the attack gets +2{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Mark],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Daniel Jiménez"],
    cardIdentifier: "public-bounty-blue",
    classes: [Class.Generic],
    defaultImage: "HNT243",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Public Bounty",
    printings: [{
        artists: ["Daniel Jiménez"],
      
      identifier: "HNT243",
      image: "HNT243",
      
      
      print: "HNT243",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT243"],
    sets: [Release.TheHunted],
    specialImage: "HNT243",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `**Mark** target opposing hero.

The next time you attack a **marked** hero this turn, the attack gets +1{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Mark],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Reza Afshar"],
    cardIdentifier: "pursue-to-the-edge-of-oblivion-red",
    classes: [Class.Generic],
    defaultImage: "HNT224",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Pursue to the Edge of Oblivion",
    printings: [{
        artists: ["Reza Afshar"],
      
      identifier: "HNT224",
      image: "HNT224",
      
      
      print: "HNT224",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT224"],
    sets: [Release.TheHunted],
    specialImage: "HNT224",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this hits a hero, **mark** them.`,
    
    
    
    
    keywords: [Keyword.Mark],
    
    
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "pursue-to-the-pits-of-despair-red",
    classes: [Class.Generic],
    defaultImage: "HNT225",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Pursue to the Pits of Despair",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "HNT225",
      image: "HNT225",
      
      
      print: "HNT225",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT225"],
    sets: [Release.TheHunted],
    specialImage: "HNT225",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this hits a hero, **mark** them.`,
    
    
    
    
    keywords: [Keyword.Mark],
    
    
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Maerel Hibadita"],
    cardIdentifier: "put-in-context-blue",
    classes: [Class.Generic],
    defaultImage: "HNT238",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Put in Context",
    printings: [{
        artists: ["Maerel Hibadita"],
      
      identifier: "HNT238",
      image: "HNT238",
      
      
      print: "HNT238",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT238"],
    sets: [Release.TheHunted],
    specialImage: "HNT238",
    subtypes: [],
    types: [Type.DefenseReaction],
    typeText: "Generic Defense Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `This can only defend an attack with 3 or less base {p}.`,
    
    
    
    
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tanapon Wachirakul"],
    cardIdentifier: "quickdodge-flexors",
    classes: [Class.Generic],
    defaultImage: "HNT215",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Quickdodge Flexors",
    printings: [{
        artists: ["Tanapon Wachirakul"],
      foiling: Foiling.R,
      identifier: "HNT215",
      image: "HNT215",
      
      
      print: "HNT215-Rainbow",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Legendary],
    rarity: Rarity.Legendary,
    setIdentifiers: ["HNT215"],
    sets: [Release.TheHunted],
    specialImage: "HNT215",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Legs",

    
    
    
    defense: 0,
    
    functionalText: `**Defense Reaction** - {r}: Add this to the active chain link as a defending card. It has 2 base {d} this chain link.

At the beginning of the end phase, if this defendend this turn, destroy it.`,
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kevin Sidharta"],
    cardIdentifier: "rake-over-the-coals-red",
    classes: [Class.NotClassed],
    defaultImage: "HNT156",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Rake Over the Coals",
    printings: [{
        artists: ["Kevin Sidharta"],
      
      identifier: "HNT156",
      image: "HNT156",
      
      
      print: "HNT156",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT156"],
    sets: [Release.TheHunted],
    specialImage: "HNT156",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Draconic Instant",

    
    
    cost: 0,
    
    
    functionalText: `Draconic attacks get +1{p} this turn.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Adolfo Navarro"],
    cardIdentifier: "razor-reflex-red",
    classes: [Class.Generic],
    defaultImage: "HNT227",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Razor Reflex",
    printings: [{
        artists: ["Adolfo Navarro"],
      
      identifier: "HNT227",
      image: "HNT227",
      
      
      print: "HNT227",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Rare],
    rarity: Rarity.Common,
    setIdentifiers: ["1HP402","HNT227","TEA016","WTR209"],
    sets: [Release.DorintheaHeroDeck,Release.HistoryPack1,Release.TheHunted,Release.WelcomeToRathe],
    specialImage: "HNT227",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Generic Attack Reaction",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `Choose 1;
- Target dagger or sword weapon attack gets +3{p}.
- Target attack action card with cost 1 or less gets +3{p} and "When this hits, this gets **go again**."`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Isuardi Therianto"],
    cardIdentifier: "razors-edge-red",
    classes: [Class.Assassin],
    defaultImage: "HNT050",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Razor's Edge",
    printings: [{
        artists: ["Isuardi Therianto"],
      
      identifier: "HNT050",
      image: "HNT050",
      
      
      print: "HNT050",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["ARA016","HNT050","OUT042"],
    sets: [Release.ArakniBlitzDeck,Release.Outsiders,Release.TheHunted],
    specialImage: "HNT050",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin Attack Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Target attack action card with **stealth** gets +3{p}.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Saad Irfan"],
    cardIdentifier: "reapers-call-red",
    classes: [Class.Assassin],
    defaultImage: "HNT044",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Reaper's Call",
    printings: [{
        artists: ["Saad Irfan"],
      
      identifier: "HNT044",
      image: "HNT044",
      
      
      print: "HNT044",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT044"],
    sets: [Release.TheHunted],
    specialImage: "HNT044",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

**Instant** - Discard this: **Mark** target opposing hero.`,
    
    
    
    
    keywords: [Keyword.Mark,Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Saad Irfan"],
    cardIdentifier: "reapers-call-yellow",
    classes: [Class.Assassin],
    defaultImage: "HNT045",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Reaper's Call",
    printings: [{
        artists: ["Saad Irfan"],
      
      identifier: "HNT045",
      image: "HNT045",
      
      
      print: "HNT045",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT045"],
    sets: [Release.TheHunted],
    specialImage: "HNT045",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

**Instant** - Discard this: **Mark** target opposing hero.`,
    
    
    
    
    keywords: [Keyword.Mark,Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Saad Irfan"],
    cardIdentifier: "reapers-call-blue",
    classes: [Class.Assassin],
    defaultImage: "HNT046",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Reaper's Call",
    printings: [{
        artists: ["Saad Irfan"],
      
      identifier: "HNT046",
      image: "HNT046",
      
      
      print: "HNT046",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT046"],
    sets: [Release.TheHunted],
    specialImage: "HNT046",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

**Instant** - Discard this: **Mark** target opposing hero.`,
    
    
    
    
    keywords: [Keyword.Mark,Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Joseph Qiu"],
    cardIdentifier: "red-alert-boots",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT195",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Red Alert Boots",
    printings: [{
        artists: ["Joseph Qiu"],
      
      identifier: "HNT195",
      image: "HNT195",
      
      
      print: "HNT195",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT195"],
    sets: [Release.TheHunted],
    specialImage: "HNT195",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Assassin / Warrior Equipment - Legs",

    
    
    
    defense: 1,
    
    functionalText: `If an attack reaction has been played or activated this chain link, this gets +1{d}.`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Joseph Qiu"],
    cardIdentifier: "red-alert-gloves",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT194",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Red Alert Gloves",
    printings: [{
        artists: ["Joseph Qiu"],
      
      identifier: "HNT194",
      image: "HNT194",
      
      
      print: "HNT194",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT194"],
    sets: [Release.TheHunted],
    specialImage: "HNT194",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Assassin / Warrior Equipment - Arms",

    
    
    
    defense: 1,
    
    functionalText: `If an attack reaction has been played or activated this chain link, this gets +1{d}.`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Joseph Qiu"],
    cardIdentifier: "red-alert-vest",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT193",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Red Alert Vest",
    printings: [{
        artists: ["Joseph Qiu"],
      
      identifier: "HNT193",
      image: "HNT193",
      
      
      print: "HNT193",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT193"],
    sets: [Release.TheHunted],
    specialImage: "HNT193",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Assassin / Warrior Equipment - Chest",

    
    
    
    defense: 1,
    
    functionalText: `If an attack reaction has been played or activated this chain link, this gets +1{d}.`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Joseph Qiu"],
    cardIdentifier: "red-alert-visor",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT192",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Red Alert Visor",
    printings: [{
        artists: ["Joseph Qiu"],
      
      identifier: "HNT192",
      image: "HNT192",
      
      
      print: "HNT192",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT192"],
    sets: [Release.TheHunted],
    specialImage: "HNT192",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Assassin / Warrior Equipment - Head",

    
    
    
    defense: 1,
    
    functionalText: `If an attack reaction has been played or activated this chain link, this gets +1{d}.`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Reza Afshar"],
    cardIdentifier: "relentless-pursuit-blue",
    classes: [Class.Generic],
    defaultImage: "HNT229",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Relentless Pursuit",
    printings: [{
        artists: ["Reza Afshar"],
      
      identifier: "HNT229",
      image: "HNT229",
      
      
      print: "HNT229",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT229"],
    sets: [Release.TheHunted],
    specialImage: "HNT229",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Mark** target opposing hero.

If you've attacked them this turn, put this on the bottom of its owner's deck.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Mark],
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Stormy Elia Fanggidae"],
    cardIdentifier: "retrace-the-past-blue",
    classes: [Class.Ninja],
    defaultImage: "HNT249",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Retrace the Past",
    printings: [{
        artists: ["Stormy Elia Fanggidae"],
      
      identifier: "HNT249",
      image: "HNT249",
      isExpansionSlot: true,
      
      print: "HNT249",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT249"],
    sets: [Release.TheHunted],
    specialImage: "HNT249",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Katsu Specialization**

**Combo** - When this attacks, if a card with Gustwave in its name was the last attack this combat chain, name a card, then this gets that name, +2{p}, and **go again**.`,
    
    
    
    
    keywords: [Keyword.Combo,Keyword.Specialization],
    
    meta: [Meta.Expansion],
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    specializations: [Hero.Katsu],
    
  
  
  },{
    artists: ["Mark Poole"],
    cardIdentifier: "ring-of-roses-yellow",
    classes: [Class.Wizard],
    defaultImage: "HNT256",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Ring of Roses",
    printings: [{
        artists: ["Mark Poole"],
      
      identifier: "HNT256",
      image: "HNT256",
      isExpansionSlot: true,
      
      print: "HNT256",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Mark Poole"],
      foiling: Foiling.C,
      identifier: "HNT256",
      image: "HNT256",
      isExpansionSlot: true,
      
      print: "HNT256-Cold",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT256"],
    sets: [Release.TheHunted],
    specialImage: "HNT256",
    subtypes: [Subtype.Aura,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Earth Wizard Action - Aura",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Legendary Verdance Specialization**

The first time you deal arcane damage each turn, gain 1{h}.`,
    
    
    
    
    keywords: [Keyword.Legendary,Keyword.Specialization],
    
    meta: [Meta.Expansion],
    
    pitch: 2,
    
    
    
    
    
    
    
    specializations: [Hero.Verdance],
    talents: [Talent.Earth],
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "roiling-fissure-blue",
    classes: [Class.Guardian],
    defaultImage: "HNT248",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Roiling Fissure",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "HNT248",
      image: "HNT248",
      isExpansionSlot: true,
      
      print: "HNT248",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT248"],
    sets: [Release.TheHunted],
    specialImage: "HNT248",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Guardian Action",

    
    
    
    defense: 3,
    
    functionalText: `Destroy an aura with cost X or less, then you may destroy a Seismic Surge you control. If you do, repeat this process.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Expansion],
    
    pitch: 3,
    
    
    
    specialCost: "X1",
    
    
    
    
    
  
  
  },{
    artists: ["Phu Thieu"],
    cardIdentifier: "ronin-renegade-red",
    classes: [Class.Ninja],
    defaultImage: "HNT070",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Ronin Renegade",
    printings: [{
        artists: ["Phu Thieu"],
      
      identifier: "HNT070",
      image: "HNT070",
      
      
      print: "HNT070",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["FAI019","HNT070","UPR078"],
    sets: [Release.FaiBlitzDeck,Release.TheHunted,Release.Uprising],
    specialImage: "HNT070",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Ninja Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "rotten-remains-blue",
    classes: [Class.Generic],
    defaultImage: "HNT221",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Rotten Remains",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "HNT221",
      image: "HNT221",
      
      
      print: "HNT221",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT221"],
    sets: [Release.TheHunted],
    specialImage: "HNT221",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks, you may banish a card with 1{p} from each hero's graveyard. If you do, this gets +1{p}, then repeat this process.`,
    
    
    
    
    
    
    
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Narendra B Adi"],
    cardIdentifier: "savor-bloodshed-red",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT198",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Savor Bloodshed",
    printings: [{
        artists: ["Narendra B Adi"],
      
      identifier: "HNT198",
      image: "HNT198",
      
      
      print: "HNT198",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT198"],
    sets: [Release.TheHunted],
    specialImage: "HNT198",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Assassin / Warrior Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `You next dagger attack this turn gets +4{p}.

The next time you hit a **marked** hero with a dagger this turn, draw a card.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Muhammad Fajri"],
    cardIdentifier: "scalding-iron-red",
    classes: [Class.Warrior],
    defaultImage: "HNT110",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Scalding Iron",
    printings: [{
        artists: ["Muhammad Fajri"],
      
      identifier: "HNT110",
      image: "HNT110",
      
      
      print: "HNT110",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT110"],
    sets: [Release.TheHunted],
    specialImage: "HNT110",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Draconic Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Target dagger attack gets +X{p}, where X is the number of Draconic chain links you control.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["SanSan"],
    cardIdentifier: "scar-tissue-red",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT208",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Scar Tissue",
    printings: [{
        artists: ["SanSan"],
      
      identifier: "HNT208",
      image: "HNT208",
      
      
      print: "HNT208",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT208"],
    sets: [Release.TheHunted],
    specialImage: "HNT208",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin / Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Target dagger attack gets +3{p} and "When this hits a hero, **mark** them."`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  }];
  const cards4: Card[] =  [{
    artists: ["SanSan"],
    cardIdentifier: "scar-tissue-yellow",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT209",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Scar Tissue",
    printings: [{
        artists: ["SanSan"],
      
      identifier: "HNT209",
      image: "HNT209",
      
      
      print: "HNT209",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT209"],
    sets: [Release.TheHunted],
    specialImage: "HNT209",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin / Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Target dagger attack gets +2{p} and "When this hits a hero, **mark** them."`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["SanSan"],
    cardIdentifier: "scar-tissue-blue",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT210",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Scar Tissue",
    printings: [{
        artists: ["SanSan"],
      
      identifier: "HNT210",
      image: "HNT210",
      
      
      print: "HNT210",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT210"],
    sets: [Release.TheHunted],
    specialImage: "HNT210",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin / Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Target dagger attack gets +1{p} and "When this hits a hero, **mark** them."`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Dominik Mayer"],
    cardIdentifier: "schism-of-chaos-blue",
    classes: [Class.NotClassed],
    defaultImage: "HNT000",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Schism of Chaos",
    printings: [{
        artists: ["Dominik Mayer"],
      foiling: Foiling.C,
      identifier: "HNT000",
      image: "HNT000",
      
      
      print: "HNT000-Cold",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Dominik Mayer"],
      foiling: Foiling.R,
      identifier: "HNT000",
      image: "HNT000",
      
      
      print: "HNT000-Rainbow",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Fabled],
    rarity: Rarity.Fabled,
    setIdentifiers: ["HNT000"],
    sets: [Release.TheHunted],
    specialImage: "HNT000",
    subtypes: [Subtype.Gem],
    types: [Type.Resource],
    typeText: "Chaos Resource - Gem",

    
    
    
    
    
    functionalText: `**Legendary**

When this is pitched, each hero shuffles, then puts the top card of their deck facedown into their arsenal.`,
    
    
    
    
    keywords: [Keyword.Legendary],
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    talents: [Talent.Chaos],
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "scuttle-the-canal-red",
    classes: [Class.Assassin],
    defaultImage: "HNT047",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Scuttle the Canal",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "HNT047",
      image: "HNT047",
      
      
      print: "HNT047",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT047"],
    sets: [Release.TheHunted],
    specialImage: "HNT047",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this attacks a **marked** hero, this gets **go again**.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "scuttle-the-canal-yellow",
    classes: [Class.Assassin],
    defaultImage: "HNT048",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Scuttle the Canal",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "HNT048",
      image: "HNT048",
      
      
      print: "HNT048",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT048"],
    sets: [Release.TheHunted],
    specialImage: "HNT048",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this attacks a **marked** hero, this gets **go again**.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "scuttle-the-canal-blue",
    classes: [Class.Assassin],
    defaultImage: "HNT049",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Scuttle the Canal",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "HNT049",
      image: "HNT049",
      
      
      print: "HNT049",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT049"],
    sets: [Release.TheHunted],
    specialImage: "HNT049",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this attacks a **marked** hero, this gets **go again**.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mateusz Wiśniewski"],
    cardIdentifier: "searing-gaze-red",
    classes: [Class.Warrior],
    defaultImage: "HNT111",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Searing Gaze",
    printings: [{
        artists: ["Mateusz Wiśniewski"],
      
      identifier: "HNT111",
      image: "HNT111",
      
      
      print: "HNT111",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT111"],
    sets: [Release.TheHunted],
    specialImage: "HNT111",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Draconic Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Target dagger attack gets +2{p}. If you control 2 or more Draconic chain links, it gets "When this hits a hero, **mark** them."`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Ina Wong"],
    cardIdentifier: "sharpened-senses-yellow",
    classes: [Class.Warrior],
    defaultImage: "HNT118",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Sharpened Senses",
    printings: [{
        artists: ["Ina Wong"],
      
      identifier: "HNT118",
      image: "HNT118",
      
      
      print: "HNT118",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT118"],
    sets: [Release.TheHunted],
    specialImage: "HNT118",
    subtypes: [Subtype.Aura,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warior Action - Aura",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Go again**

Your weapon attacks get +1{p}. If their {p} is greater than twice their base, they get **go again**.

At the beginning of your end phase, destroy this.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "shelter-from-the-storm-red",
    classes: [Class.Generic],
    defaultImage: "HNT222",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Shelter from the Storm",
    printings: [{
        artists: ["Rio Sabda"],
      
      identifier: "HNT222",
      image: "HNT222",
      
      
      print: "HNT222",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Rio Sabda"],
      foiling: Foiling.R,
      identifier: "HNT222",
      image: "HNT222-EA",
      
      
      print: "HNT222-Rainbow-Extended Art",
      set: Release.TheHunted,
      
      treatment: Treatment.EA,
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT222"],
    sets: [Release.TheHunted],
    specialImage: "HNT222-EA",
    subtypes: [],
    types: [Type.DefenseReaction],
    typeText: "Generic Defense Reaction",

    
    
    cost: 0,
    defense: 4,
    
    functionalText: `**Instant** - Discard this: The next 3 times you would be dealt damage this turn, prevent 1 of that damage.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Adolfo Navarro","Asur Misoa"],
    cardIdentifier: "sigil-of-solace-red",
    classes: [Class.Generic],
    defaultImage: "HNT231",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Sigil of Solace",
    printings: [{
        artists: ["Adolfo Navarro"],
      
      identifier: "HNT231",
      image: "HNT231",
      
      
      print: "HNT231",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["1HP387","DRO026","FAB136","FAB178","HNT231","TCC059","WTR173"],
    sets: [Release.DromaiBlitzDeck,Release.HistoryPack1,Release.Promos,Release.RoundTheTable,Release.TheHunted,Release.WelcomeToRathe],
    specialImage: "HNT231",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Generic Instant",

    
    
    cost: 0,
    
    
    functionalText: `Gain 3{h}`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ramza Ardyputra"],
    cardIdentifier: "silver-talons-red",
    classes: [Class.Ninja],
    defaultImage: "HNT080",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Silver Talons",
    printings: [{
        artists: ["Ramza Ardyputra"],
      
      identifier: "HNT080",
      image: "HNT080",
      
      
      print: "HNT080",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT080"],
    sets: [Release.TheHunted],
    specialImage: "HNT080",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks a hero, if it is Draconic, you may have target dagger you control deal 1 damage to them. If damage is dealt this way, the dagger has hit. Destroy the dagger.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ramza Ardyputra"],
    cardIdentifier: "silver-talons-yellow",
    classes: [Class.Ninja],
    defaultImage: "HNT081",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Silver Talons",
    printings: [{
        artists: ["Ramza Ardyputra"],
      
      identifier: "HNT081",
      image: "HNT081",
      
      
      print: "HNT081",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT081"],
    sets: [Release.TheHunted],
    specialImage: "HNT081",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks a hero, if it is Draconic, you may have target dagger you control deal 1 damage to them. If damage is dealt this way, the dagger has hit. Destroy the dagger.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ramza Ardyputra"],
    cardIdentifier: "silver-talons-blue",
    classes: [Class.Ninja],
    defaultImage: "HNT082",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Silver Talons",
    printings: [{
        artists: ["Ramza Ardyputra"],
      
      identifier: "HNT082",
      image: "HNT082",
      
      
      print: "HNT082",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT082"],
    sets: [Release.TheHunted],
    specialImage: "HNT082",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this attacks a hero, if it is Draconic, you may have target dagger you control deal 1 damage to them. If damage is dealt this way, the dagger has hit. Destroy the dagger.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Andrew Chou"],
    cardIdentifier: "sisters-of-fire-red",
    classes: [Class.Warrior],
    defaultImage: "HNT112",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Sisters of Fire",
    printings: [{
        artists: ["Andrew Chou"],
      
      identifier: "HNT112",
      image: "HNT112",
      
      
      print: "HNT112",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT112"],
    sets: [Release.TheHunted],
    specialImage: "HNT112",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Draconic Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Play this only if you control 2 or more Draconic chain links.

Target dagger attack gets +3{p}.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Firaz M. Rasyid"],
    cardIdentifier: "sizzling-steel-red",
    classes: [Class.Warrior],
    defaultImage: "HNT113",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Sizzling Steel",
    printings: [{
        artists: ["Firaz M. Rasyid"],
      
      identifier: "HNT113",
      image: "HNT113",
      
      
      print: "HNT113",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT113"],
    sets: [Release.TheHunted],
    specialImage: "HNT113",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Draconic Warrior Attack Reaction",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `Target dagger attack gets +3{p}. If you control 2 or more Draconic chain links, instead it gets +4{p}.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "smoke-out-red",
    classes: [Class.NotClassed],
    defaultImage: "HNT162",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Smoke Out",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "HNT162",
      image: "HNT162",
      
      
      print: "HNT162",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT162"],
    sets: [Release.TheHunted],
    specialImage: "HNT162",
    subtypes: [],
    types: [Type.DefenseReaction],
    typeText: "Draconic Defense Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `When this defends a red card, **mark** the attacking hero.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "sound-the-alarm-red",
    classes: [Class.Generic],
    defaultImage: "HNT226",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Sound the Alarm",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "HNT226",
      image: "HNT226",
      
      
      print: "HNT226",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT226"],
    sets: [Release.TheHunted],
    specialImage: "HNT226",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `When this attacks a hero, they reveal their hand. If an attack reaction card is revealed this way, you may search your deck for a defense reaction card, reveal it, then shuffle and put it on top.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Arif Wijaya"],
    cardIdentifier: "spur-locked-blue",
    classes: [Class.NotClassed],
    defaultImage: "HNT255",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Spur Locked",
    printings: [{
        artists: ["Arif Wijaya"],
      
      identifier: "HNT255",
      image: "HNT255",
      isExpansionSlot: true,
      
      print: "HNT255",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT255"],
    sets: [Release.TheHunted],
    specialImage: "HNT255",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Chaos Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Each hero secretly chooses a number between 1 and 6, then those numbers are revealed. The hero that chose the highest number loses that much {h}, searches their deck for a card with cost less than or equal to the chosen number, reveales it, puts it in their hand, then shuffles.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Expansion],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    talents: [Talent.Chaos],
  
  
  },{
    artists: ["Adolfo Navarro"],
    cardIdentifier: "stabbing-pain-red",
    classes: [Class.Warrior],
    defaultImage: "HNT114",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Stabbing Pain",
    printings: [{
        artists: ["Adolfo Navarro"],
      
      identifier: "HNT114",
      image: "HNT114",
      
      
      print: "HNT114",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT114"],
    sets: [Release.TheHunted],
    specialImage: "HNT114",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Draconic Warrior Attack Reaction",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `Target dagger attack gets +3{p}. If you control 2 or more Draconic chain links, it gets "When this hits a hero, **mark** them."`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "stains-of-the-redback-red",
    classes: [Class.Assassin],
    defaultImage: "HNT023",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Stains of the Redback",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "HNT023",
      image: "HNT023",
      
      
      print: "HNT023",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT023"],
    sets: [Release.TheHunted],
    specialImage: "HNT023",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin Attack Reaction",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `If the defending hero is **marked**, this costs {r} less to play.

Target attack with **stealth** gets +3{p} and **go again**.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "stains-of-the-redback-yellow",
    classes: [Class.Assassin],
    defaultImage: "HNT024",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Stains of the Redback",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "HNT024",
      image: "HNT024",
      
      
      print: "HNT024",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT024"],
    sets: [Release.TheHunted],
    specialImage: "HNT024",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin Attack Reaction",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `If the defending hero is **marked**, this costs {r} less to play.

Target attack with **stealth** gets +2{p} and **go again**.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "stains-of-the-redback-blue",
    classes: [Class.Assassin],
    defaultImage: "HNT025",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Stains of the Redback",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "HNT025",
      image: "HNT025",
      
      
      print: "HNT025",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT025"],
    sets: [Release.TheHunted],
    specialImage: "HNT025",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin Attack Reaction",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `If the defending hero is **marked**, this costs {r} less to play.

Target attack with **stealth** gets +1{p} and **go again**.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Lizhe Liang"],
    cardIdentifier: "starting-point",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT196",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Starting Point",
    printings: [{
        artists: ["Lizhe Liang"],
      
      identifier: "HNT196",
      image: "HNT196",
      
      
      print: "HNT196",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT196"],
    sets: [Release.TheHunted],
    specialImage: "HNT196",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Assassin / Warrior Equipment - Legs",

    
    
    
    defense: 0,
    
    functionalText: `**Attack Reaction** - Destroy this: Target attack gets **go again**. Activate this only if you've played a card or activated an ability this reaction step.`,
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Arghawana Rim"],
    cardIdentifier: "sworn-vengeance-red",
    classes: [Class.Warrior],
    defaultImage: "HNT140",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Sworn Vengeance",
    printings: [{
        artists: ["Arghawana Rim"],
      
      identifier: "HNT140",
      image: "HNT140",
      
      
      print: "HNT140",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT140"],
    sets: [Release.TheHunted],
    specialImage: "HNT140",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Your next dagger attack this turn gets +3{p} and "When this hits a hero, **mark** them."

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Mark],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Arghawana Rim"],
    cardIdentifier: "sworn-vengeance-yellow",
    classes: [Class.Warrior],
    defaultImage: "HNT141",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Sworn Vengeance",
    printings: [{
        artists: ["Arghawana Rim"],
      
      identifier: "HNT141",
      image: "HNT141",
      
      
      print: "HNT141",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT141"],
    sets: [Release.TheHunted],
    specialImage: "HNT141",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Your next dagger attack this turn gets +2{p} and "When this hits a hero, **mark** them."

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Mark],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Arghawana Rim"],
    cardIdentifier: "sworn-vengeance-blue",
    classes: [Class.Warrior],
    defaultImage: "HNT142",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Sworn Vengeance",
    printings: [{
        artists: ["Arghawana Rim"],
      
      identifier: "HNT142",
      image: "HNT142",
      
      
      print: "HNT142",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT142"],
    sets: [Release.TheHunted],
    specialImage: "HNT142",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Your next dagger attack this turn gets +1{p} and "When this hits a hero, **mark** them."

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Mark],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Igor Heras"],
    cardIdentifier: "tag-the-target-red",
    classes: [Class.Ninja],
    defaultImage: "HNT092",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Tag the Target",
    printings: [{
        artists: ["Igor Heras"],
      
      identifier: "HNT092",
      image: "HNT092",
      
      
      print: "HNT092",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT092"],
    sets: [Release.TheHunted],
    specialImage: "HNT092",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this hits a hero, **mark** them.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Mark],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Igor Heras"],
    cardIdentifier: "tag-the-target-yellow",
    classes: [Class.Ninja],
    defaultImage: "HNT093",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Tag the Target",
    printings: [{
        artists: ["Igor Heras"],
      
      identifier: "HNT093",
      image: "HNT093",
      
      
      print: "HNT093",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT093"],
    sets: [Release.TheHunted],
    specialImage: "HNT093",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this hits a hero, **mark** them.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Mark],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Igor Heras"],
    cardIdentifier: "tag-the-target-blue",
    classes: [Class.Ninja],
    defaultImage: "HNT094",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Tag the Target",
    printings: [{
        artists: ["Igor Heras"],
      
      identifier: "HNT094",
      image: "HNT094",
      
      
      print: "HNT094",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT094"],
    sets: [Release.TheHunted],
    specialImage: "HNT094",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this hits a hero, **mark** them.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Mark],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Galih M"],
    cardIdentifier: "take-a-stab-red",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT211",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Take a Stab",
    printings: [{
        artists: ["Galih M"],
      
      identifier: "HNT211",
      image: "HNT211",
      
      
      print: "HNT211",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT211"],
    sets: [Release.TheHunted],
    specialImage: "HNT211",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin / Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Target dagger attack gets +3{p} and "When this hits a **marked** hero, you may attack with it an additional time this turn."`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Galih M"],
    cardIdentifier: "take-a-stab-yellow",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT212",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Take a Stab",
    printings: [{
        artists: ["Galih M"],
      
      identifier: "HNT212",
      image: "HNT212",
      
      
      print: "HNT212",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT212"],
    sets: [Release.TheHunted],
    specialImage: "HNT212",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin / Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Target dagger attack gets +2{p} and "When this hits a **marked** hero, you may attack with it an additional time this turn."`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Galih M"],
    cardIdentifier: "take-a-stab-blue",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT213",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Take a Stab",
    printings: [{
        artists: ["Galih M"],
      
      identifier: "HNT213",
      image: "HNT213",
      
      
      print: "HNT213",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT213"],
    sets: [Release.TheHunted],
    specialImage: "HNT213",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin / Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Target dagger attack gets +1{p} and "When this hits a **marked** hero, you may attack with it an additional time this turn."`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Henrique Lindner"],
    cardIdentifier: "take-up-the-mantle-yellow",
    classes: [Class.Assassin],
    defaultImage: "HNT014",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Take Up the Mantle",
    printings: [{
        artists: ["Henrique Lindner"],
      
      identifier: "HNT014",
      image: "HNT014",
      
      
      print: "HNT014",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT014"],
    sets: [Release.TheHunted],
    specialImage: "HNT014",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin Attack Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Target attack action card with **stealth** gets +2{p}. If it's attacking a **marked** hero, instead it gets +3{p} and you may banish an attack action card with **stealth** from your graveyard. If you do, the target becomes a copy of the banished card.`,
    
    
    
    
    
    
    
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Kevin Sidharta"],
    cardIdentifier: "tarantula-toxin-red",
    classes: [Class.Assassin],
    defaultImage: "HNT015",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Tarantula Toxin",
    printings: [{
        artists: ["Kevin Sidharta"],
      
      identifier: "HNT015",
      image: "HNT015",
      
      
      print: "HNT015",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic,Rarity.Promo],
    rarity: Rarity.Majestic,
    setIdentifiers: ["FAB315","HNT015"],
    sets: [Release.Promos,Release.TheHunted],
    specialImage: "HNT015",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin Attack Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Choose 1 or both;

* Target dagger attack gets +3{p}.
* Target card defending an attack with stealth gets -3{d} this turn.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Tomasz Jedruszek"],
    cardIdentifier: "thick-hide-hunter-yellow",
    classes: [Class.Brute],
    defaultImage: "HNT246",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Thick Hide Hunter",
    printings: [{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "HNT246",
      image: "HNT246",
      isExpansionSlot: true,
      
      print: "HNT246",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Tomasz Jedruszek"],
      
      identifier: "HNT246",
      image: "HNT246-EA",
      isExpansionSlot: true,
      
      print: "HNT246-Extended Art",
      set: Release.TheHunted,
      
      treatment: Treatment.EA,
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT246"],
    sets: [Release.TheHunted],
    specialImage: "HNT246-EA",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Brute Action - Attack",

    
    
    cost: 2,
    defense: 6,
    
    functionalText: `When this attacks or defends, discard a random card.`,
    
    
    
    
    
    
    meta: [Meta.Expansion],
    
    pitch: 2,
    power: 6,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Narendra B Adi"],
    cardIdentifier: "throw-dagger-blue",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT175",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Throw Dagger",
    printings: [{
        artists: ["Narendra B Adi"],
      
      identifier: "HNT175",
      image: "HNT175",
      
      
      print: "HNT175",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT175"],
    sets: [Release.TheHunted],
    specialImage: "HNT175",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin / Ninja Attack Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Target dagger you control that isn't on the active chain link deals 1 damage to the defending hero. If damage is dealt this way, the dagger has hit and you draw a card. Destroy the dagger.`,
    
    
    
    
    
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Aluisio Cervelle"],
    cardIdentifier: "throw-yourself-at-them-red",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT188",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Throw Yourself at Them",
    printings: [{
        artists: ["Aluisio Cervelle"],
      
      identifier: "HNT188",
      image: "HNT188",
      
      
      print: "HNT188",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT188"],
    sets: [Release.TheHunted],
    specialImage: "HNT188",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin / Ninja Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `When this attacks a hero, you may have target dagger you control deal 1 damage to them. If damage is dealt this way, the dagger has hit. Destroy the dagger.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Aluisio Cervelle"],
    cardIdentifier: "throw-yourself-at-them-yellow",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT189",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Throw Yourself at Them",
    printings: [{
        artists: ["Aluisio Cervelle"],
      
      identifier: "HNT189",
      image: "HNT189",
      
      
      print: "HNT189",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT189"],
    sets: [Release.TheHunted],
    specialImage: "HNT189",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin / Ninja Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `When this attacks a hero, you may have target dagger you control deal 1 damage to them. If damage is dealt this way, the dagger has hit. Destroy the dagger.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Aluisio Cervelle"],
    cardIdentifier: "throw-yourself-at-them-blue",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT190",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Throw Yourself at Them",
    printings: [{
        artists: ["Aluisio Cervelle"],
      
      identifier: "HNT190",
      image: "HNT190",
      
      
      print: "HNT190",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT190"],
    sets: [Release.TheHunted],
    specialImage: "HNT190",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin / Ninja Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `When this attacks a hero, you may have target dagger you control deal 1 damage to them. If damage is dealt this way, the dagger has hit. Destroy the dagger.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "tip-off-red",
    classes: [Class.Generic],
    defaultImage: "HNT232",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Tip-Off",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "HNT232",
      image: "HNT232",
      
      
      print: "HNT232",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT232"],
    sets: [Release.TheHunted],
    specialImage: "HNT232",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `**Instant** - Discard this: **Mark** target opposing hero.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "tip-off-yellow",
    classes: [Class.Generic],
    defaultImage: "HNT233",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Tip-Off",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "HNT233",
      image: "HNT233",
      
      
      print: "HNT233",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT233"],
    sets: [Release.TheHunted],
    specialImage: "HNT233",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `**Instant** - Discard this: **Mark** target opposing hero.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "tip-off-blue",
    classes: [Class.Generic],
    defaultImage: "HNT234",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Tip-Off",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "HNT234",
      image: "HNT234",
      
      
      print: "HNT234",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT234"],
    sets: [Release.TheHunted],
    specialImage: "HNT234",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Generic Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `**Instant** - Discard this: **Mark** target opposing hero.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Pavel Rtishchev (Klaher)"],
    cardIdentifier: "to-the-point-red",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT199",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "To the Point",
    printings: [{
        artists: ["Pavel Rtishchev (Klaher)"],
      
      identifier: "HNT199",
      image: "HNT199",
      
      
      print: "HNT199",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT199"],
    sets: [Release.TheHunted],
    specialImage: "HNT199",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin / Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Target dagger attack gets +3{p}. If the defending hero is **marked**, instead it gets +4{p}.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Pavel Rtishchev (Klaher)"],
    cardIdentifier: "to-the-point-yellow",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT200",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "To the Point",
    printings: [{
        artists: ["Pavel Rtishchev (Klaher)"],
      
      identifier: "HNT200",
      image: "HNT200",
      
      
      print: "HNT200",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT200"],
    sets: [Release.TheHunted],
    specialImage: "HNT200",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin / Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Target dagger attack gets +2{p}. If the defending hero is **marked**, instead it gets +3{p}.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Pavel Rtishchev (Klaher)"],
    cardIdentifier: "to-the-point-blue",
    classes: [Class.Assassin,Class.Warrior],
    defaultImage: "HNT201",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "To the Point",
    printings: [{
        artists: ["Pavel Rtishchev (Klaher)"],
      
      identifier: "HNT201",
      image: "HNT201",
      
      
      print: "HNT201",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT201"],
    sets: [Release.TheHunted],
    specialImage: "HNT201",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin / Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `Target dagger attack gets +1{p}. If the defending hero is **marked**, instead it gets +2{p}.`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["YDZ"],
    cardIdentifier: "tooth-of-the-dragon-red",
    classes: [Class.NotClassed],
    defaultImage: "HNT166",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Tooth of the Dragon",
    printings: [{
        artists: ["YDZ"],
      
      identifier: "HNT166",
      image: "HNT166",
      
      
      print: "HNT166",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT166"],
    sets: [Release.TheHunted],
    specialImage: "HNT166",
    subtypes: [],
    types: [Type.Instant],
    typeText: "Draconic Instant",

    
    
    cost: 0,
    
    
    functionalText: `Your next Draconic attack this turn gets +3{p}.`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Nikko Wahyudi"],
    cardIdentifier: "trap-and-release-red",
    classes: [Class.Ninja],
    defaultImage: "HNT095",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Trap and Release",
    printings: [{
        artists: ["Nikko Wahyudi"],
      
      identifier: "HNT095",
      image: "HNT095",
      
      
      print: "HNT095",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT095"],
    sets: [Release.TheHunted],
    specialImage: "HNT095",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `When this hits a hero, **mark** them.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 4,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikko Wahyudi"],
    cardIdentifier: "trap-and-release-yellow",
    classes: [Class.Ninja],
    defaultImage: "HNT096",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Trap and Release",
    printings: [{
        artists: ["Nikko Wahyudi"],
      
      identifier: "HNT096",
      image: "HNT096",
      
      
      print: "HNT096",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT096"],
    sets: [Release.TheHunted],
    specialImage: "HNT096",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `When this hits a hero, **mark** them.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Nikko Wahyudi"],
    cardIdentifier: "trap-and-release-blue",
    classes: [Class.Ninja],
    defaultImage: "HNT097",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Trap and Release",
    printings: [{
        artists: ["Nikko Wahyudi"],
      
      identifier: "HNT097",
      image: "HNT097",
      
      
      print: "HNT097",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT097"],
    sets: [Release.TheHunted],
    specialImage: "HNT097",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ninja Action - Attack",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `When this hits a hero, **mark** them.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Vito Febrianno"],
    cardIdentifier: "tremorshield-sabatons",
    classes: [Class.Guardian],
    defaultImage: "HNT247",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Tremorshield Sabatons",
    printings: [{
        artists: ["Vito Febrianno"],
      
      identifier: "HNT247",
      image: "HNT247",
      isExpansionSlot: true,
      
      print: "HNT247",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Vito Febrianno"],
      foiling: Foiling.C,
      identifier: "HNT247",
      image: "HNT247",
      isExpansionSlot: true,
      
      print: "HNT247-Cold",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT247"],
    sets: [Release.TheHunted],
    specialImage: "HNT247",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Guardian Equipment - Legs",

    
    
    
    defense: 1,
    
    functionalText: `**Instant** - Destroy this: Prevent the next 1 arcane damage that would be dealt to you this turn. If you've controlled a Seismic Surge token this turn, instead prevent the next 2.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    meta: [Meta.Expansion],
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Esty Swandana"],
    cardIdentifier: "trot-along-blue",
    classes: [Class.Generic],
    defaultImage: "HNT240",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Trot Along",
    printings: [{
        artists: ["Esty Swandana"],
      
      identifier: "HNT240",
      image: "HNT240",
      
      
      print: "HNT240",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT240"],
    sets: [Release.TheHunted],
    specialImage: "HNT240",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Your next attack with 3 or less base {p} this turn gets **go again**.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Igor Heras"],
    cardIdentifier: "twist-and-turn-red",
    classes: [Class.Warrior],
    defaultImage: "HNT122",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Twist and Turn",
    printings: [{
        artists: ["Igor Heras"],
      
      identifier: "HNT122",
      image: "HNT122",
      
      
      print: "HNT122",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT122"],
    sets: [Release.TheHunted],
    specialImage: "HNT122",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Your next dagger attack this turn gets +4{p} and "When this hits, you may attack with it an additional time this turn."

**Go again**`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Igor Heras"],
    cardIdentifier: "twist-and-turn-yellow",
    classes: [Class.Warrior],
    defaultImage: "HNT123",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Twist and Turn",
    printings: [{
        artists: ["Igor Heras"],
      
      identifier: "HNT123",
      image: "HNT123",
      
      
      print: "HNT123",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT123"],
    sets: [Release.TheHunted],
    specialImage: "HNT123",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Your next dagger attack this turn gets +3{p} and "When this hits, you may attack with it an additional time this turn."

**Go again**`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Igor Heras"],
    cardIdentifier: "twist-and-turn-blue",
    classes: [Class.Warrior],
    defaultImage: "HNT124",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Twist and Turn",
    printings: [{
        artists: ["Igor Heras"],
      
      identifier: "HNT124",
      image: "HNT124",
      
      
      print: "HNT124",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT124"],
    sets: [Release.TheHunted],
    specialImage: "HNT124",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Warrior Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Your next dagger attack this turn gets +2{p} and "When this hits, you may attack with it an additional time this turn."

**Go again**`,
    
    
    
    
    
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Raphael Pinna"],
    cardIdentifier: "two-sides-to-the-blade-red",
    classes: [Class.Assassin],
    defaultImage: "HNT051",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Two Sides to the Blade",
    printings: [{
        artists: ["Raphael Pinna"],
      
      identifier: "HNT051",
      image: "HNT051",
      
      
      print: "HNT051",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT051"],
    sets: [Release.TheHunted],
    specialImage: "HNT051",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Assassin Attack Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Choose 1;
- Target dagger attack gets +3{p}.
- Target attack action card with **stealth** gets +3{p} and "When this hits a hero, **mark** them."`,
    
    
    
    
    
    
    
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Simon Dominic"],
    cardIdentifier: "under-the-trap-door-blue",
    classes: [Class.Assassin],
    defaultImage: "HNT013",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Under the Trap-Door",
    printings: [{
        artists: ["Simon Dominic"],
      
      identifier: "HNT013",
      image: "HNT013",
      
      
      print: "HNT013",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT013"],
    sets: [Release.TheHunted],
    specialImage: "HNT013",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

**Instant** - Discard this: Banish target trap from your graveyard. If you do, you may play it this turn and if it would be put into the graveyard this turn, instead banish it.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Adolfo Navarro"],
    cardIdentifier: "up-sticks-and-run-red",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT179",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Up Sticks and Run",
    printings: [{
        artists: ["Adolfo Navarro"],
      
      identifier: "HNT179",
      image: "HNT179",
      
      
      print: "HNT179",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT179"],
    sets: [Release.TheHunted],
    specialImage: "HNT179",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Assassin / Ninja Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `You may **retrieve** a dagger from your graveyard.

Your next dagger attack this turn gets +4{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Retrieve],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Adolfo Navarro"],
    cardIdentifier: "up-sticks-and-run-yellow",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT180",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Up Sticks and Run",
    printings: [{
        artists: ["Adolfo Navarro"],
      
      identifier: "HNT180",
      image: "HNT180",
      
      
      print: "HNT180",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT180"],
    sets: [Release.TheHunted],
    specialImage: "HNT180",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Assassin / Ninja Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `You may **retrieve** a dagger from your graveyard.

Your next dagger attack this turn gets +3{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Retrieve],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Adolfo Navarro"],
    cardIdentifier: "up-sticks-and-run-blue",
    classes: [Class.Assassin,Class.Ninja],
    defaultImage: "HNT181",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Up Sticks and Run",
    printings: [{
        artists: ["Adolfo Navarro"],
      
      identifier: "HNT181",
      image: "HNT181",
      
      
      print: "HNT181",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT181"],
    sets: [Release.TheHunted],
    specialImage: "HNT181",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Assassin / Ninja Action",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `You may **retrieve** a dagger from your graveyard.

Your next dagger attack this turn gets +2{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Retrieve],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Shen Fei"],
    cardIdentifier: "vow-of-vengeance",
    classes: [Class.NotClassed],
    defaultImage: "HNT144",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Vow of Vengeance",
    printings: [{
        artists: ["Shen Fei"],
      
      identifier: "HNT144",
      image: "HNT144",
      
      
      print: "HNT144",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["HNT144"],
    sets: [Release.TheHunted],
    specialImage: "HNT144",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Draconic Equipment - Head",

    
    
    
    defense: 1,
    
    functionalText: `**Attack Reaction** - Destroy this: **Mark** target Arakni.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  },{
    artists: ["Simon Dominic"],
    cardIdentifier: "war-cry-of-bellona-yellow",
    classes: [Class.Warrior],
    defaultImage: "HNT258",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "War Cry of Bellona",
    printings: [{
        artists: ["Simon Dominic"],
      
      identifier: "HNT258",
      image: "HNT258",
      isExpansionSlot: true,
      
      print: "HNT258",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT258"],
    sets: [Release.TheHunted],
    specialImage: "HNT258",
    subtypes: [],
    types: [Type.AttackReaction],
    typeText: "Light Warrior Attack Reaction",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Target Raydn gets +2{p} this turn.

**Instant** - Discard this, banish X cards from your soul: The next time target weapon deals X or less damage to you this turn, deal that much damage to its controller and that damage can't be prevented.`,
    
    
    
    
    
    
    meta: [Meta.Expansion],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    talents: [Talent.Light],
  
  
  },{
    artists: ["Asur Misoa"],
    cardIdentifier: "war-cry-of-themis-yellow",
    classes: [Class.Illusionist],
    defaultImage: "HNT257",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [],
    name: "War Cry of Themis",
    printings: [{
        artists: ["Asur Misoa"],
      
      identifier: "HNT257",
      image: "HNT257",
      isExpansionSlot: true,
      
      print: "HNT257",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT257"],
    sets: [Release.TheHunted],
    specialImage: "HNT257",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Light Illusionist Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `Your next angel attack this turn gets +4{p}.

**Go again**

**Instant** - Discard this, banish X cards from your soul: Turn X target cards in a banished zone face-down.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    meta: [Meta.Expansion],
    
    pitch: 2,
    
    
    
    
    
    
    
    
    talents: [Talent.Light],
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "whittle-from-bone-red",
    classes: [Class.Assassin],
    defaultImage: "HNT020",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Whittle from Bone",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "HNT020",
      image: "HNT020",
      
      
      print: "HNT020",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT020"],
    sets: [Release.TheHunted],
    specialImage: "HNT020",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this attacks a **marked** hero, equip a Graphene Chelicera token.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "whittle-from-bone-yellow",
    classes: [Class.Assassin],
    defaultImage: "HNT021",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Whittle from Bone",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "HNT021",
      image: "HNT021",
      
      
      print: "HNT021",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT021"],
    sets: [Release.TheHunted],
    specialImage: "HNT021",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this attacks a **marked** hero, equip a Graphene Chelicera token.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Max Kostin"],
    cardIdentifier: "whittle-from-bone-blue",
    classes: [Class.Assassin],
    defaultImage: "HNT022",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Whittle from Bone",
    printings: [{
        artists: ["Max Kostin"],
      
      identifier: "HNT022",
      image: "HNT022",
      
      
      print: "HNT022",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT022"],
    sets: [Release.TheHunted],
    specialImage: "HNT022",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Assassin Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Stealth**

When this attacks a **marked** hero, equip a Graphene Chelicera token.`,
    
    
    
    
    keywords: [Keyword.Stealth],
    
    meta: [Meta.Rainbow],
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Mario Wibisono"],
    cardIdentifier: "wrath-of-retribution-red",
    classes: [Class.Ninja],
    defaultImage: "HNT061",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [],
    name: "Wrath of Retribution",
    printings: [{
        artists: ["Mario Wibisono"],
      
      identifier: "HNT061",
      image: "HNT061",
      
      
      print: "HNT061",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Mario Wibisono"],
      foiling: Foiling.R,
      identifier: "HNT061",
      image: "HNT061-EA",
      
      
      print: "HNT061-Rainbow-Extended Art",
      set: Release.TheHunted,
      
      treatment: Treatment.EA,
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["HNT061"],
    sets: [Release.TheHunted],
    specialImage: "HNT061-EA",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Draconic Ninja Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `**Legendary**

This costs {r} less to play for each Draconic chain link you control.

When this attacks, daggers you control get +1{p} and cost {r} less to activate this combat chain.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Legendary],
    
    
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    talents: [Talent.Draconic],
  
  
  }];

  export const cards: Card[] =  [
    ...cards1,
    ...cards2,
    ...cards3,
    ...cards4,
  ];
  