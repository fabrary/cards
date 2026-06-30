
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
    artists: ["Lius Lasahido"],
    cardIdentifier: "baalghor-omen-of-the-end",
    classes: [Class.NotClassed],
    defaultImage: "IAR159-MV",
    firstReleaseDate: "2026-09-25",
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
      set: Release.UsurpTheShadowThrone,
      tcgplayer: {
            productId: "696179",
            url: "https://www.tcgplayer.com/product/696179?Language=English&Printing=Cold+Foil"
          },
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Lius Lasahido"],
      foiling: Foiling.Cold,
      identifier: "IAR159",
      image: "IAR159-MV_BACK",
      
      
      print: "IAR159-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      tcgplayer: {
            productId: "696179",
            url: "https://www.tcgplayer.com/product/696179?Language=English&Printing=Cold+Foil"
          },
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel],
    rarity: Rarity.Marvel,
    setIdentifiers: ["IAR159"],
    sets: [Release.UsurpTheShadowThrone],
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
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "gate-to-iarathael",
    classes: [Class.NotClassed],
    defaultImage: "IAR222-MV",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Baalghor,Hero.Chane,Hero.Levia,Hero.Shiyana,Hero.Vynnset,Hero.Yorick],
    name: "Gate to íArathael",
    printings: [{
        artists: ["Carlos Cruchaga"],
      foiling: Foiling.Cold,
      identifier: "IAR222",
      image: "IAR222-MV",
      
      
      print: "IAR222-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      tcgplayer: {
            productId: "696180",
            url: "https://www.tcgplayer.com/product/696180?Language=English&Printing=Cold+Foil"
          },
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Carlos Cruchaga"],
      foiling: Foiling.Cold,
      identifier: "IAR222",
      image: "IAR222-MV_BACK",
      
      
      print: "IAR222-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      tcgplayer: {
            productId: "696180",
            url: "https://www.tcgplayer.com/product/696180?Language=English&Printing=Cold+Foil"
          },
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel],
    rarity: Rarity.Marvel,
    setIdentifiers: ["IAR222"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR222-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Token],
    typeText: "Shadow Token - Aura",

    
    
    
    
    
    functionalText: `**Instant** - {r}, destroy this: You may play target action card with blood debt from your banished zone this turn.`,
    
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-envy-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR152-MV",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Runechant of Envy",
    printings: [{
        artists: ["MJ Fetesio"],
      foiling: Foiling.Cold,
      identifier: "IAR152",
      image: "IAR152-MV",
      
      
      print: "IAR152-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      tcgplayer: {
            productId: "696173",
            url: "https://www.tcgplayer.com/product/696173?Language=English&Printing=Cold+Foil"
          },
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Promo,
    setIdentifiers: ["GEM178","IAR152"],
    sets: [Release.GEM,Release.UsurpTheShadowThrone],
    specialImage: "IAR152-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, gain 1{h}.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    
    
    
    meta: [Meta.Deck],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-gluttony-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR153-MV",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Runechant of Gluttony",
    printings: [{
        artists: ["MJ Fetesio"],
      foiling: Foiling.Cold,
      identifier: "IAR153",
      image: "IAR153-MV",
      
      
      print: "IAR153-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      tcgplayer: {
            productId: "696174",
            url: "https://www.tcgplayer.com/product/696174?Language=English&Printing=Cold+Foil"
          },
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Promo,
    setIdentifiers: ["GEM179","IAR153"],
    sets: [Release.GEM,Release.UsurpTheShadowThrone],
    specialImage: "IAR153-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, gain {r}.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    
    
    
    meta: [Meta.Deck],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-greed-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR145-MV",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Runechant of Greed",
    printings: [{
        artists: ["MJ Fetesio"],
      foiling: Foiling.Cold,
      identifier: "IAR145",
      image: "IAR145-MV",
      
      
      print: "IAR145-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      tcgplayer: {
            productId: "696172",
            url: "https://www.tcgplayer.com/product/696172?Language=English&Printing=Cold+Foil"
          },
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Promo,
    setIdentifiers: ["GEM177","IAR145"],
    sets: [Release.GEM,Release.UsurpTheShadowThrone],
    specialImage: "IAR145-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, draw a card.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    
    
    
    meta: [Meta.Deck],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-lust-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR154-MV",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Runechant of Lust",
    printings: [{
        artists: ["MJ Fetesio"],
      foiling: Foiling.Cold,
      identifier: "IAR154",
      image: "IAR154-MV",
      
      
      print: "IAR154-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      tcgplayer: {
            productId: "696175",
            url: "https://www.tcgplayer.com/product/696175?Language=English&Printing=Cold+Foil"
          },
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Promo,
    setIdentifiers: ["GEM180","IAR154"],
    sets: [Release.GEM,Release.UsurpTheShadowThrone],
    specialImage: "IAR154-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, create a Runechant token.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    
    
    
    meta: [Meta.Deck],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-pride-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR155-MV",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Runechant of Pride",
    printings: [{
        artists: ["MJ Fetesio"],
      foiling: Foiling.Cold,
      identifier: "IAR155",
      image: "IAR155-MV",
      
      
      print: "IAR155-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      tcgplayer: {
            productId: "696176",
            url: "https://www.tcgplayer.com/product/696176?Language=English&Printing=Cold+Foil"
          },
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Promo,
    setIdentifiers: ["GEM181","IAR155"],
    sets: [Release.GEM,Release.UsurpTheShadowThrone],
    specialImage: "IAR155-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, it gets +1{p}.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    
    
    
    meta: [Meta.Deck],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-sloth-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR156-MV",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Runechant of Sloth",
    printings: [{
        artists: ["MJ Fetesio"],
      foiling: Foiling.Cold,
      identifier: "IAR156",
      image: "IAR156-MV",
      
      
      print: "IAR156-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      tcgplayer: {
            productId: "696177",
            url: "https://www.tcgplayer.com/product/696177?Language=English&Printing=Cold+Foil"
          },
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Promo,
    setIdentifiers: ["GEM182","IAR156"],
    sets: [Release.GEM,Release.UsurpTheShadowThrone],
    specialImage: "IAR156-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, it gets **go again**.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-wrath-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR157-MV",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Vynnset],
    name: "Runechant of Wrath",
    printings: [{
        artists: ["MJ Fetesio"],
      foiling: Foiling.Cold,
      identifier: "IAR157",
      image: "IAR157-MV",
      
      
      print: "IAR157-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      tcgplayer: {
            productId: "696178",
            url: "https://www.tcgplayer.com/product/696178?Language=English&Printing=Cold+Foil"
          },
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Promo,
    setIdentifiers: ["GEM183","IAR157"],
    sets: [Release.GEM,Release.UsurpTheShadowThrone],
    specialImage: "IAR157-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, it gets **overpower**.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    keywords: [Keyword.Overpower],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    
  
  
  }];

  export const cards: Card[] =  [
  ...cards1,
  ];
  