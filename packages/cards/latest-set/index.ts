
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
    legalHeroes: [Hero.Emperor,Hero.Fang],
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
    legalHeroes: [Hero.Boltyn,Hero.Dorinthea,Hero.Fang,Hero.Kassai,Hero.Olympia],
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
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    artists: ["soyameii"],
    cardIdentifier: "arakni-black-widow",
    classes: [Class.Assassin],
    defaultImage: "HNT003",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Crackni,Hero.Slippy],
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
      image: "HNT003-V2",
      
      
      print: "HNT003-Cold-Full Art",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT003"],
    sets: [Release.TheHunted],
    specialImage: "HNT003-V2",
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
    legalHeroes: [Hero.Crackni,Hero.Slippy],
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
      image: "HNT004-V2",
      
      
      print: "HNT004-Cold-Full Art",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT004"],
    sets: [Release.TheHunted],
    specialImage: "HNT004-V2",
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
    cardIdentifier: "arakni-marionette",
    classes: [Class.Assassin],
    defaultImage: "HNT001",
    legalFormats: [Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open],
    legalHeroes: [Hero.Crackni],
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
      image: "HNT001-V2_BACK",
      
      
      print: "HNT001-Cold-Full Art-Back",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT001"],
    sets: [Release.TheHunted],
    specialImage: "HNT001-V2_BACK",
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
    legalHeroes: [Hero.Crackni,Hero.Slippy],
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
      image: "HNT005-V2",
      
      
      print: "HNT005-Cold-Full Art",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT005"],
    sets: [Release.TheHunted],
    specialImage: "HNT005-V2",
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
    legalHeroes: [Hero.Crackni,Hero.Slippy],
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
      image: "HNT006-V2",
      
      
      print: "HNT006-Cold-Full Art",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT006"],
    sets: [Release.TheHunted],
    specialImage: "HNT006-V2",
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
    artists: ["Max Kostin"],
    cardIdentifier: "arakni-tarantula",
    classes: [Class.Assassin],
    defaultImage: "HNT007",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Crackni,Hero.Slippy],
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
      image: "HNT007-V2",
      
      
      print: "HNT007-Cold-Full Art",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT007"],
    sets: [Release.TheHunted],
    specialImage: "HNT007-V2",
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
    legalHeroes: [Hero.Crackni,Hero.Slippy],
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
      image: "HNT008-V2",
      
      
      print: "HNT008-Cold-Full Art",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT008"],
    sets: [Release.TheHunted],
    specialImage: "HNT008-V2",
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
    legalHeroes: [Hero.Crackni],
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
      image: "HNT002-V2_BACK",
      
      
      print: "HNT002-Cold-Full Art-Back",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT002"],
    sets: [Release.TheHunted],
    specialImage: "HNT002-V2_BACK",
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
    legalHeroes: [Hero.Benji,Hero.Cindra,Hero.Fai,Hero.Ira,Hero.Katsu,Hero.Zen],
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
    legalHeroes: [Hero.Benji,Hero.Cindra,Hero.Fai,Hero.Ira,Hero.Katsu,Hero.Zen],
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
    legalHeroes: [Hero.Benji,Hero.Cindra,Hero.Fai,Hero.Ira,Hero.Katsu,Hero.Zen],
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
    legalHeroes: [Hero.Benji,Hero.Cindra,Hero.Fai,Hero.Ira,Hero.Katsu,Hero.Zen],
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
    artists: ["Raphael Pinna"],
    cardIdentifier: "bite-red",
    classes: [Class.Assassin],
    defaultImage: "HNT017",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    artists: ["SanSan"],
    cardIdentifier: "blood-runs-deep-red",
    classes: [Class.Ninja],
    defaultImage: "HNT057",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Cindra,Hero.Fai],
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
    artists: ["Esty Swandana"],
    cardIdentifier: "burning-blade-dance-red",
    classes: [Class.Ninja],
    defaultImage: "HNT064",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Cindra,Hero.Fai],
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
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.GenisWotchuneed,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
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
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Riptide],
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
    artists: ["Livia Prima"],
    cardIdentifier: "cindra",
    classes: [Class.Ninja],
    defaultImage: "HNT055",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Cindra],
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
      image: "HNT055-V2",
      
      
      print: "HNT055-Cold",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Livia Prima"],
      foiling: Foiling.C,
      identifier: "HNT055",
      image: "HNT055-V2_BACK",
      
      
      print: "HNT055-Cold-Full Art-Back",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT055"],
    sets: [Release.TheHunted],
    specialImage: "HNT055-V2_BACK",
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
    defaultImage: "HNT054-V2",
    legalFormats: [Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open],
    legalHeroes: [Hero.Cindra],
    name: "Cindra, Dracai of Retribution",
    printings: [{
        artists: ["Livia Prima"],
      foiling: Foiling.C,
      identifier: "HNT054",
      image: "HNT054-V2",
      
      
      print: "HNT054-Cold",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Livia Prima"],
      foiling: Foiling.C,
      identifier: "HNT054",
      image: "HNT054-V2_BACK",
      
      
      print: "HNT054-Cold-Full Art-Back",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel],
    rarity: Rarity.Marvel,
    setIdentifiers: ["HNT054"],
    sets: [Release.TheHunted],
    specialImage: "HNT054-V2_BACK",
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
    legalHeroes: [Hero.Cindra,Hero.Dromai,Hero.Emperor,Hero.Fai,Hero.Fang,Hero.Taipanis,Hero.Taylor],
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
    artists: ["Daria Khlebnikova"],
    cardIdentifier: "cull-red",
    classes: [Class.Runeblade],
    defaultImage: "HNT259",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Chane,Hero.Vynnset],
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
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "defang-the-dragon-red",
    classes: [Class.Assassin],
    defaultImage: "HNT030",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    
    
    
    
    
    
    
    
  
  
  }];
  const cards2: Card[] =  [{
    artists: ["MJ Fetesio"],
    cardIdentifier: "devotion-never-dies-red",
    classes: [Class.Ninja],
    defaultImage: "HNT072",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Benji,Hero.Cindra,Hero.Fai,Hero.Ira,Hero.Katsu,Hero.Zen],
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
    artists: ["Marco González"],
    cardIdentifier: "dragon-power-red",
    classes: [Class.Ninja],
    defaultImage: "HNT077",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Benji,Hero.Cindra,Hero.Fai,Hero.Ira,Hero.Katsu,Hero.Zen],
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
    legalHeroes: [Hero.Benji,Hero.Cindra,Hero.Fai,Hero.Ira,Hero.Katsu,Hero.Zen],
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
    legalHeroes: [Hero.Benji,Hero.Cindra,Hero.Fai,Hero.Ira,Hero.Katsu,Hero.Zen],
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
    legalHeroes: [Hero.Cindra,Hero.Dromai,Hero.Emperor,Hero.Fai,Hero.Fang,Hero.Taipanis,Hero.Taylor],
    name: "Dragonscaler Flight Path",
    printings: [{
        artists: ["Mario Wibisono"],
      foiling: Foiling.R,
      identifier: "HNT143",
      image: "HNT143",
      
      
      print: "HNT143-Rainbow",
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
    legalHeroes: [Hero.Cindra,Hero.Dromai,Hero.Emperor,Hero.Fai,Hero.Fang,Hero.Taipanis],
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
    artists: ["Jessketchin"],
    cardIdentifier: "enchanted-quiver",
    classes: [Class.Ranger],
    defaultImage: "HNT252",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Azalea,Hero.Lexi,Hero.Riptide,Hero.Taylor],
    name: "Enchanted Quiver",
    printings: [{
        artists: ["Jessketchin"],
      
      identifier: "HNT252",
      image: "HNT252",
      isExpansionSlot: true,
      
      print: "HNT252",
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
    legalHeroes: [Hero.Emperor,Hero.Fang],
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
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.GenisWotchuneed,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
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
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    legalHeroes: [Hero.Fang],
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
      image: "HNT099-V2",
      
      
      print: "HNT099-Cold",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Billy Christian"],
      foiling: Foiling.C,
      identifier: "HNT099",
      image: "HNT099-V2_BACK",
      
      
      print: "HNT099-Cold-Full Art-Back",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel,Rarity.Token],
    rarity: Rarity.Token,
    setIdentifiers: ["HNT099"],
    sets: [Release.TheHunted],
    specialImage: "HNT099-V2_BACK",
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
    defaultImage: "HNT098-V2",
    legalFormats: [Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open],
    legalHeroes: [Hero.Fang],
    name: "Fang, Dracai of Blades",
    printings: [{
        artists: ["Billy Christian"],
      foiling: Foiling.C,
      identifier: "HNT098",
      image: "HNT098-V2",
      
      
      print: "HNT098-Cold",
      set: Release.TheHunted,
      
      
    },{
        artists: ["Billy Christian"],
      foiling: Foiling.C,
      identifier: "HNT098",
      image: "HNT098-V2_BACK",
      
      
      print: "HNT098-Cold-Full Art-Back",
      set: Release.TheHunted,
      
      treatment: Treatment.FA,
    },],
    rarities: [Rarity.Marvel],
    rarity: Rarity.Marvel,
    setIdentifiers: ["HNT098"],
    sets: [Release.TheHunted],
    specialImage: "HNT098-V2_BACK",
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
    legalHeroes: [Hero.Cindra,Hero.Dromai,Hero.Emperor,Hero.Fai,Hero.Fang,Hero.Shiyana,Hero.Taipanis,Hero.Yorick],
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
    legalHeroes: [Hero.Emperor,Hero.Fang],
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
    artists: ["Andrew Chou"],
    cardIdentifier: "flurry-stance-red",
    classes: [Class.Warrior],
    defaultImage: "HNT126",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Boltyn,Hero.Dorinthea,Hero.Emperor,Hero.Fang,Hero.Kassai,Hero.Olympia],
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
    legalHeroes: [Hero.Cindra,Hero.Dromai,Hero.Emperor,Hero.Fai,Hero.Fang,Hero.Taipanis],
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
    legalHeroes: [Hero.Cindra,Hero.Dromai,Hero.Emperor,Hero.Fai,Hero.Fang,Hero.Taipanis],
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
    legalHeroes: [Hero.Cindra,Hero.Dromai,Hero.Emperor,Hero.Fai,Hero.Fang,Hero.Taipanis],
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
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Shiyana,Hero.Slippy,Hero.Uzuri,Hero.Yorick],
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
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "hunt-the-hunter-red",
    classes: [Class.NotClassed],
    defaultImage: "HNT161",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Cindra,Hero.Dromai,Hero.Emperor,Hero.Fai,Hero.Fang,Hero.Taipanis],
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
    legalHeroes: [Hero.Cindra,Hero.Dromai,Hero.Emperor,Hero.Fai,Hero.Fang,Hero.Taipanis],
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
    legalHeroes: [Hero.Emperor,Hero.Fang],
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
    artists: ["Thomas Ressuge"],
    cardIdentifier: "hunters-klaive",
    classes: [Class.Assassin],
    defaultImage: "HNT009",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
    name: "Hunter's Klaive",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "HNT009",
      image: "HNT009",
      isExpansionSlot: true,
      
      print: "HNT009",
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
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Cindra,Hero.Fai],
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
    rarities: [Rarity.Majestic,Rarity.Rare],
    rarity: Rarity.Rare,
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
    artists: ["Milivoj Ćeran"],
    cardIdentifier: "imperial-seal-of-command-red",
    classes: [Class.Generic],
    defaultImage: "HNT228",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.GenisWotchuneed,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
    name: "Imperial Seal of Command",
    printings: [{
        artists: ["Milivoj Ćeran"],
      
      identifier: "HNT228",
      image: "HNT228",
      
      
      print: "HNT228",
      set: Release.TheHunted,
      
      
    },],
    rarities: [Rarity.Rare],
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
    artists: ["Audy Ravindra"],
    cardIdentifier: "jagged-edge-red",
    classes: [Class.Warrior],
    defaultImage: "HNT116",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Boltyn,Hero.Dorinthea,Hero.Emperor,Hero.Fang,Hero.Kassai,Hero.Olympia],
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
    
    
    
    
    
    
    
    
    
  
  
  }];
  const cards3: Card[] =  [{
    artists: ["Sariya Asavametha"],
    cardIdentifier: "kabuto-of-imperial-authority",
    classes: [Class.Warrior],
    defaultImage: "HNT115",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Boltyn,Hero.Dorinthea,Hero.Emperor,Hero.Fang,Hero.Kassai,Hero.Olympia,Hero.Taylor],
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
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    artists: ["Widya Wang"],
    cardIdentifier: "kunai-of-retribution",
    classes: [Class.Ninja],
    defaultImage: "HNT056",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Cindra,Hero.Fai],
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
    artists: ["Widya Wang"],
    cardIdentifier: "lay-low-yellow",
    classes: [Class.Generic],
    defaultImage: "HNT236",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.GenisWotchuneed,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
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
    artists: ["Federico Musetti"],
    cardIdentifier: "long-whisker-loyalty-red",
    classes: [Class.Warrior],
    defaultImage: "HNT102",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Emperor,Hero.Fang],
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
    legalHeroes: [Hero.Cindra,Hero.Dromai,Hero.Emperor,Hero.Fai,Hero.Fang,Hero.Taipanis],
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
    artists: ["Rio Sabda"],
    cardIdentifier: "mark-of-the-black-widow-red",
    classes: [Class.Assassin],
    defaultImage: "HNT032",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "mark-of-the-black-widow-blue",
    classes: [Class.Assassin],
    defaultImage: "HNT034",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    artists: ["Jessketchin"],
    cardIdentifier: "marked",
    classes: [],
    defaultImage: "HNT244",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Shiyana,Hero.Yorick],
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
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Shiyana,Hero.Slippy,Hero.Taylor],
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
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "oath-of-loyalty-red",
    classes: [Class.NotClassed],
    defaultImage: "HNT149",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Cindra,Hero.Dromai,Hero.Emperor,Hero.Fai,Hero.Fang,Hero.Taipanis],
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
    legalHeroes: [Hero.Emperor,Hero.Fang],
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
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.GenisWotchuneed,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
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
    artists: ["Tanapon Wachirakul"],
    cardIdentifier: "power-stance-blue",
    classes: [Class.Warrior],
    defaultImage: "HNT127",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Boltyn,Hero.Dorinthea,Hero.Fang,Hero.Kassai,Hero.Olympia],
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
    legalHeroes: [Hero.Cindra,Hero.Dromai,Hero.Emperor,Hero.Fai,Hero.Fang,Hero.Taipanis],
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
    legalHeroes: [Hero.Boltyn,Hero.Dorinthea,Hero.Fang,Hero.Kassai,Hero.Olympia],
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
    legalHeroes: [Hero.Benji,Hero.Cindra,Hero.Fai,Hero.Ira,Hero.Katsu,Hero.Zen],
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
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.GenisWotchuneed,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
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
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.GenisWotchuneed,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
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
    
    
    
    
    
    
    
    
    
  
  
  }];
  const cards4: Card[] =  [{
    artists: ["Daniel Jiménez"],
    cardIdentifier: "public-bounty-blue",
    classes: [Class.Generic],
    defaultImage: "HNT243",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.GenisWotchuneed,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
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
    artists: ["Tanapon Wachirakul"],
    cardIdentifier: "quickdodge-flexors",
    classes: [Class.Generic],
    defaultImage: "HNT215",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.GenisWotchuneed,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
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
    artists: ["Saad Irfan"],
    cardIdentifier: "reapers-call-red",
    classes: [Class.Assassin],
    defaultImage: "HNT044",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    artists: ["Reza Afshar"],
    cardIdentifier: "relentless-pursuit-blue",
    classes: [Class.Generic],
    defaultImage: "HNT229",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.GenisWotchuneed,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
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
    legalHeroes: [Hero.Katsu,Hero.Shiyana],
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
    legalHeroes: [Hero.Shiyana,Hero.Verdance],
    name: "Ring of Roses",
    printings: [{
        artists: ["Mark Poole"],
      
      identifier: "HNT256",
      image: "HNT256",
      isExpansionSlot: true,
      
      print: "HNT256",
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
    legalHeroes: [Hero.Betsy,Hero.Bravo,Hero.Brevant,Hero.Jarl,Hero.Oldhim,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
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
    artists: ["Ina Wong"],
    cardIdentifier: "sharpened-senses-yellow",
    classes: [Class.Warrior],
    defaultImage: "HNT118",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Boltyn,Hero.Dorinthea,Hero.Fang,Hero.Kassai,Hero.Olympia],
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
    artists: ["Thomas Ressuge"],
    cardIdentifier: "sound-the-alarm-red",
    classes: [Class.Generic],
    defaultImage: "HNT226",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Azalea,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.GenisWotchuneed,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Levia,Hero.Lexi,Hero.Maxx,Hero.Melody,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Prism,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zen],
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
    legalHeroes: [Hero.Crackni,Hero.Slippy],
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
    artists: ["Arghawana Rim"],
    cardIdentifier: "sworn-vengeance-red",
    classes: [Class.Warrior],
    defaultImage: "HNT140",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Boltyn,Hero.Dorinthea,Hero.Emperor,Hero.Fang,Hero.Kassai,Hero.Olympia],
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
    legalHeroes: [Hero.Boltyn,Hero.Dorinthea,Hero.Fang,Hero.Kassai,Hero.Olympia],
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
    legalHeroes: [Hero.Boltyn,Hero.Dorinthea,Hero.Fang,Hero.Kassai,Hero.Olympia],
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
    legalHeroes: [Hero.Benji,Hero.Cindra,Hero.Fai,Hero.Ira,Hero.Katsu,Hero.Zen],
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
    legalHeroes: [Hero.Benji,Hero.Cindra,Hero.Fai,Hero.Ira,Hero.Katsu,Hero.Zen],
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
    legalHeroes: [Hero.Benji,Hero.Cindra,Hero.Fai,Hero.Ira,Hero.Katsu,Hero.Zen],
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
    artists: ["Henrique Lindner"],
    cardIdentifier: "take-up-the-mantle-yellow",
    classes: [Class.Assassin],
    defaultImage: "HNT014",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.Rhinar],
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
      image: "HNT246_V2",
      isExpansionSlot: true,
      
      print: "HNT246-Extended Art",
      set: Release.TheHunted,
      
      treatment: Treatment.EA,
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["HNT246"],
    sets: [Release.TheHunted],
    specialImage: "HNT246_V2",
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
    artists: ["Vito Febrianno"],
    cardIdentifier: "tremorshield-sabatons",
    classes: [Class.Guardian],
    defaultImage: "HNT247",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bravo,Hero.Brevant,Hero.Jarl,Hero.Oldhim,Hero.Starvo,Hero.Taylor,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Tremorshield Sabatons",
    printings: [{
        artists: ["Vito Febrianno"],
      
      identifier: "HNT247",
      image: "HNT247",
      isExpansionSlot: true,
      
      print: "HNT247",
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
    artists: ["Raphael Pinna"],
    cardIdentifier: "two-sides-to-the-blade-red",
    classes: [Class.Assassin],
    defaultImage: "HNT051",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Commoner,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    legalHeroes: [Hero.Arakni,Hero.Crackni,Hero.Nuu,Hero.Slippy,Hero.Uzuri],
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
    artists: ["Simon Dominic"],
    cardIdentifier: "war-cry-of-bellona-yellow",
    classes: [Class.Warrior],
    defaultImage: "HNT258",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Boltyn],
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
    artists: ["Mario Wibisono"],
    cardIdentifier: "wrath-of-retribution-red",
    classes: [Class.Ninja],
    defaultImage: "HNT061",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Cindra,Hero.Fai],
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
  