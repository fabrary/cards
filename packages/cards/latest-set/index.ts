
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
    artists: ["Rio Sabda"],
    cardIdentifier: "ancient-earth-oak-red",
    classes: [Class.NotClassed],
    defaultImage: "IAR261",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Iyslander,Hero.Jarl,Hero.Lexi,Hero.Oldhim,Hero.Starvo],
    name: "Ancient Earth Oak",
    printings: [{
        artists: ["Rio Sabda"],
      
      identifier: "IAR261",
      image: "IAR261",
      isExpansionSlot: true,
      
      print: "IAR261",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Rio Sabda"],
      foiling: Foiling.Rainbow,
      identifier: "IAR261",
      image: "IAR261-RF",
      isExpansionSlot: true,
      
      print: "IAR261-Rainbow",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["IAR261"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR261",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Ice Action - Attack",

    
    bonds: [Bond.Earth],
    cost: 3,createdExtras: ["frostbite"],
    defense: 3,
    
    functionalText: `When this hits a hero, create a Frostbite token under their control.

**Earth Bond** - If an Earth card was pitched to play this, this gets +2{p} and "When this hits a hero, put this on the bottom of its owner's deck."`,
    
    
    
    
    keywords: [Keyword.Bond],
    
    
    meta: [Meta.Deck,Meta.Expansion],
  
    
    pitch: 1,
    power: 6,referencedCards: ["frostbite"],
    
    shorthands: [Shorthand.Poppers],
    
    
    
    
    
    
    
    talents: [Talent.Ice],
  
  
  },{
    artists: ["Nikolay Moskvin"],
    cardIdentifier: "appalling-bearers",
    classes: [Class.Necromancer],
    defaultImage: "IAR056",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Malice,Hero.Taylor],
    name: "Appalling Bearers",
    printings: [{
        artists: ["Nikolay Moskvin"],
      
      identifier: "IAR056",
      image: "IAR056",
      
      
      print: "IAR056",
      rarity: Rarity.Basic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Nikolay Moskvin"],
      foiling: Foiling.Cold,
      identifier: "IAR056",
      image: "IAR056-CF",
      
      
      print: "IAR056-Cold-Extended Art",
      rarity: Rarity.Basic,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Basic],
    rarity: Rarity.Basic,
    setIdentifiers: ["IAR056"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR056-CF",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Shadow Necromancer Equipment - Arms",

    
    
    
    defense: 0,
    
    functionalText: `**Instant** - Discard a zombie, destroy this: Prevent the next 2 damage that would be dealt to you this turn.`,
    
    
    
    
    
    
    
    meta: [Meta.Arena],
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Isuardi Therianto","Max Kostin"],
    cardIdentifier: "arknight-shard-blue",
    classes: [Class.Runeblade],
    defaultImage: "IAR001",
    firstReleaseDate: "2020-08-28",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Shiyana,Hero.Viserai,Hero.Viserai2],
    name: "Arknight Shard",
    printings: [{
        artists: ["Isuardi Therianto"],
      
      identifier: "IAR001",
      image: "IAR001",
      
      
      print: "IAR001-Alternate Art",
      rarity: Rarity.Fabled,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.AA,treatments: [Treatment.AA],
    },],
    rarities: [Rarity.Fabled],
    rarity: Rarity.Fabled,
    setIdentifiers: ["CRU000","IAR001"],
    sets: [Release.CrucibleOfWar,Release.UsurpTheShadowThrone],
    specialImage: "IAR001",
    subtypes: [Subtype.Gem],
    types: [Type.Resource],
    typeText: "Runeblade Resource - Gem",

    
    
    createdExtras: ["runechant"],
    
    
    functionalText: `**Legendary Viserai Specialization**

When this is pitched, create a Runechant token.`,
    
    
    
    
    keywords: [Keyword.Legendary,Keyword.Specialization],
    
    
    meta: [Meta.Deck,Meta.Reprint],
  
    
    pitch: 3,
    referencedCards: ["runechant"],
    
    
    
    
    
    
    
    
    specializations: [Hero.Viserai],
    
  
  
  },{
    artists: ["Lius Lasahido"],
    cardIdentifier: "baalghor-omen-of-the-end",
    classes: [Class.NotClassed],
    defaultImage: "IAR159-RF",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.Open,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Baalghor],
    name: "Baalghor, Omen of the End",
    printings: [{
        artists: ["Lius Lasahido"],
      foiling: Foiling.Rainbow,
      identifier: "IAR159",
      image: "IAR159-RF",
      
      
      print: "IAR159-Rainbow",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
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
    rarities: [Rarity.Marvel,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["IAR159"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR159-MV",
    subtypes: [Subtype.Demon,Subtype.Young],
    types: [Type.Hero],
    typeText: "Shadow Hero - Young Demon",

    
    bannedFormats: [Format.SilverAge],
    
    
    
    functionalText: `Whenever you pitch a card, banish it.

Attack action cards played from your banished zone get +3{p}.`,
    
    hero: Hero.Baalghor,
    intellect: 3,
    
    
    
    life: 33,
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  young: true
  },{
    artists: ["Dzulfikar Aliy"],
    cardIdentifier: "battle-clearing-bellow-blue",
    classes: [Class.Brute],
    defaultImage: "IAR040",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Kayo,Hero.Levia,Hero.RKO,Hero.Rhinar,Hero.Tuffnut],
    name: "Battle Clearing Bellow",
    printings: [{
        artists: ["Dzulfikar Aliy"],
      
      identifier: "IAR040",
      image: "IAR040",
      
      
      print: "IAR040",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Dzulfikar Aliy"],
      foiling: Foiling.Rainbow,
      identifier: "IAR040",
      image: "IAR040-RF",
      
      
      print: "IAR040-Rainbow",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["IAR040"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR040",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Brute Action",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `Your next attack with 6 or more base {p} this turn gets +6{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 3,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Surya Prasetya"],
    cardIdentifier: "battle-prep-red",
    classes: [Class.Generic],
    defaultImage: "IAR233",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Killjoy,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Malice,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Mortimer,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Viserai2,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zane,Hero.Zen,Hero.Zyggy],
    name: "Battle Prep",
    printings: [{
        artists: ["Surya Prasetya"],
      
      identifier: "IAR233",
      image: "IAR233",
      
      
      print: "IAR233",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Surya Prasetya"],
      foiling: Foiling.Rainbow,
      identifier: "IAR233",
      image: "IAR233-RF",
      
      
      print: "IAR233-Rainbow",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["IAR233"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR233",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Opt 2**

If this was played from arsenal, your next attack this turn gets +3{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Opt],
    
    
    meta: [Meta.Deck,Meta.Rainbow],
  
    
    pitch: 1,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Surya Prasetya"],
    cardIdentifier: "battle-prep-yellow",
    classes: [Class.Generic],
    defaultImage: "IAR234",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Killjoy,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Malice,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Mortimer,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Viserai2,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zane,Hero.Zen,Hero.Zyggy],
    name: "Battle Prep",
    printings: [{
        artists: ["Surya Prasetya"],
      
      identifier: "IAR234",
      image: "IAR234",
      
      
      print: "IAR234",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Surya Prasetya"],
      foiling: Foiling.Rainbow,
      identifier: "IAR234",
      image: "IAR234-RF",
      
      
      print: "IAR234-Rainbow",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["IAR234"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR234",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Opt 2**

If this was played from arsenal, your next attack this turn gets +2{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Opt],
    
    
    meta: [Meta.Deck,Meta.Rainbow],
  
    
    pitch: 2,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Surya Prasetya"],
    cardIdentifier: "battle-prep-blue",
    classes: [Class.Generic],
    defaultImage: "IAR235",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Killjoy,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Malice,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Mortimer,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Viserai2,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zane,Hero.Zen,Hero.Zyggy],
    name: "Battle Prep",
    printings: [{
        artists: ["Surya Prasetya"],
      
      identifier: "IAR235",
      image: "IAR235",
      
      
      print: "IAR235",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Surya Prasetya"],
      foiling: Foiling.Rainbow,
      identifier: "IAR235",
      image: "IAR235-RF",
      
      
      print: "IAR235-Rainbow",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["IAR235"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR235",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Generic Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Opt 2**

If this was played from arsenal, your next attack this turn gets +1{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Opt],
    
    
    meta: [Meta.Deck,Meta.Rainbow],
  
    
    pitch: 3,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "beckoning-hunger-red",
    classes: [Class.Brute],
    defaultImage: "IAR017",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Levia],
    name: "Beckoning Hunger",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "IAR017",
      image: "IAR017",
      
      
      print: "IAR017",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Faizal Fikri"],
      foiling: Foiling.Rainbow,
      identifier: "IAR017",
      image: "IAR017-RF",
      
      
      print: "IAR017-Rainbow",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["IAR017","JDG088"],
    sets: [Release.Promos,Release.UsurpTheShadowThrone],
    specialImage: "IAR017",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Brute Action - Attack",

    
    
    cost: 3,createdExtras: ["blasmophet-the-insatiable-hunger"],
    defense: 3,
    
    functionalText: `When this attacks, banish the top card of your deck.

When this hits, create a Blasmophet, the Insatiable Hunger token.

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt],
    
    
    meta: [Meta.Deck,Meta.Rainbow],
  
    
    pitch: 1,
    power: 7,referencedCards: ["blasmophet-the-insatiable-hunger"],
    
    shorthands: [Shorthand.Poppers],
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "beckoning-hunger-yellow",
    classes: [Class.Brute],
    defaultImage: "IAR018",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Levia],
    name: "Beckoning Hunger",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "IAR018",
      image: "IAR018",
      
      
      print: "IAR018",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Faizal Fikri"],
      foiling: Foiling.Rainbow,
      identifier: "IAR018",
      image: "IAR018-RF",
      
      
      print: "IAR018-Rainbow",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["IAR018"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR018",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Brute Action - Attack",

    
    
    cost: 3,createdExtras: ["blasmophet-the-insatiable-hunger"],
    defense: 3,
    
    functionalText: `When this attacks, banish the top card of your deck.

When this hits, create a Blasmophet, the Insatiable Hunger token.

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt],
    
    
    meta: [Meta.Deck,Meta.Rainbow],
  
    
    pitch: 2,
    power: 6,referencedCards: ["blasmophet-the-insatiable-hunger"],
    
    shorthands: [Shorthand.Poppers],
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Faizal Fikri"],
    cardIdentifier: "beckoning-hunger-blue",
    classes: [Class.Brute],
    defaultImage: "IAR019",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Levia],
    name: "Beckoning Hunger",
    printings: [{
        artists: ["Faizal Fikri"],
      
      identifier: "IAR019",
      image: "IAR019",
      
      
      print: "IAR019",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Faizal Fikri"],
      foiling: Foiling.Rainbow,
      identifier: "IAR019",
      image: "IAR019-RF",
      
      
      print: "IAR019-Rainbow",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["IAR019"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR019",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Brute Action - Attack",

    
    
    cost: 3,createdExtras: ["blasmophet-the-insatiable-hunger"],
    defense: 3,
    
    functionalText: `When this attacks, banish the top card of your deck.

When this hits, create a Blasmophet, the Insatiable Hunger token.

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt],
    
    
    meta: [Meta.Deck,Meta.Rainbow],
  
    
    pitch: 3,
    power: 5,referencedCards: ["blasmophet-the-insatiable-hunger"],
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Athiwut B."],
    cardIdentifier: "become-the-shadow-lord-blue",
    classes: [Class.Runeblade],
    defaultImage: "IAR113",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Chane,Hero.Viserai2,Hero.Vynnset],
    name: "Become the Shadow Lord",
    printings: [{
        artists: ["Athiwut B."],
      
      identifier: "IAR113",
      image: "IAR113",
      
      
      print: "IAR113",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Athiwut B."],
      foiling: Foiling.Cold,
      identifier: "IAR113",
      image: "IAR113-MV",
      
      
      print: "IAR113-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Majestic,
    setIdentifiers: ["IAR113"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR113-MV",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Shadow Runeblade Action",

    
    
    cost: 0,createdExtras: ["gate-to-iarathael","runechant"],
    defense: 3,
    
    functionalText: `Banish a card from your hand. If it's Runeblade, create a Runechant token. If it's Shadow, create a Gate to i'Arathael token.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 3,
    referencedCards: ["gate-to-iarathael","runechant"],
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Lius Lasahido"],
    cardIdentifier: "blasmophet-the-insatiable-hunger",
    classes: [Class.NotClassed],
    defaultImage: "IAR221",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Levia],
    name: "Blasmophet, the Insatiable Hunger",
    printings: [{
        artists: ["Lius Lasahido"],
      
      identifier: "IAR221",
      image: "IAR221",
      
      
      print: "IAR221",
      rarity: Rarity.Basic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Lius Lasahido"],
      foiling: Foiling.Cold,
      identifier: "IAR221",
      image: "IAR221-MV",
      
      
      print: "IAR221-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Lius Lasahido"],
      foiling: Foiling.Cold,
      identifier: "IAR221",
      image: "IAR221-MV_BACK",
      
      
      print: "IAR221-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["IAR221"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR221-MV",
    subtypes: [Subtype.Ally,Subtype.Demon],
    types: [Type.Token],
    typeText: "Shadow Token - Demon Ally",

    
    
    
    
    
    functionalText: `**Unique**

Once per turn, you may play an action card with blood debt from your banished zone.

At the beginning of each end phase, you may banish a card from your hand. Then if you haven't banished a card with blood debt this turn, destroy this.`,
    
    
    
    
    keywords: [Keyword.Unique],
    
    life: 6,
    
  
    
    
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Khairul Sukmanudin"],
    cardIdentifier: "blood-harvest",
    classes: [Class.Brute],
    defaultImage: "IAR005",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Levia],
    name: "Blood Harvest",
    printings: [{
        artists: ["Khairul Sukmanudin"],
      
      identifier: "IAR005",
      image: "IAR005",
      
      
      print: "IAR005",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Khairul Sukmanudin"],
      foiling: Foiling.Rainbow,
      identifier: "IAR005",
      image: "IAR005-RF",
      
      
      print: "IAR005-Rainbow",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["IAR005"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR005",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Brute Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `**Instant** - Banish this from your hand: Gain {r}{r}{r}

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt],
    
    
    meta: [Meta.Deck],
  
    
    
    power: 6,
    
    shorthands: [Shorthand.Poppers],
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Maerel Hibadita"],
    cardIdentifier: "bloodsong-gloomblade-red",
    classes: [Class.Runeblade],
    defaultImage: "IAR114",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Chane,Hero.Viserai2,Hero.Vynnset],
    name: "Bloodsong Gloomblade",
    printings: [{
        artists: ["Maerel Hibadita"],
      
      identifier: "IAR114",
      image: "IAR114",
      
      
      print: "IAR114",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Maerel Hibadita"],
      foiling: Foiling.Rainbow,
      identifier: "IAR114",
      image: "IAR114-RF",
      
      
      print: "IAR114-Rainbow",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["IAR114"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR114",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Runeblade Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `You may play this from your banished zone.

**Usurp**

When this hits a hero, you may banish target aura permanent they control.

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt,Keyword.Usurp],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 1,
    power: 2,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Khairul Sukmanudin"],
    cardIdentifier: "bone-barrier-blue",
    classes: [Class.Necromancer],
    defaultImage: "IAR093",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Frankie,Hero.GravyBones,Hero.Malice],
    name: "Bone Barrier",
    printings: [{
        artists: ["Khairul Sukmanudin"],
      
      identifier: "IAR093",
      image: "IAR093",
      
      
      print: "IAR093",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Khairul Sukmanudin"],
      foiling: Foiling.Rainbow,
      identifier: "IAR093",
      image: "IAR093-RF",
      
      
      print: "IAR093-Rainbow",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["IAR093"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR093",
    subtypes: [],
    types: [Type.DefenseReaction],
    typeText: "Necromancer Defence Reaction",

    
    
    cost: 0,
    defense: 2,
    
    functionalText: `When this defends, you may destroy an ally you control or discard an ally. If you do, this gets +2{d}.`,
    
    
    
    
    
    
    
    meta: [Meta.Deck],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Arkoii"],
    cardIdentifier: "bridge-of-damnation-blue",
    classes: [Class.Necromancer],
    defaultImage: "IAR058",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Malice],
    name: "Bridge of Damnation",
    printings: [{
        artists: ["Arkoii"],
      
      identifier: "IAR058",
      image: "IAR058",
      
      
      print: "IAR058",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Arkoii"],
      foiling: Foiling.Rainbow,
      identifier: "IAR058",
      image: "IAR058-RF",
      
      
      print: "IAR058-Rainbow",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["IAR058"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR058",
    subtypes: [Subtype.Aura,Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Shadow Necromancer Action - Aura",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `**Go again**

At the start of each turn, destroy this unless you put a zombie from your banished zone into your graveyard.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 3,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "circlet-of-eternal-end",
    classes: [Class.Generic],
    defaultImage: "IAR223-CF",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Arakni,Hero.Aurora,Hero.Aurora2,Hero.Azalea,Hero.Baalghor,Hero.Benji,Hero.Betsy,Hero.Blaze,Hero.Bolfar,Hero.Boltyn,Hero.Bravo,Hero.Brevant,Hero.Briar,Hero.Broscilio,Hero.Brutus,Hero.Chane,Hero.Cindra,Hero.Crackni,Hero.Crix,Hero.Dash,Hero.DataDoll,Hero.Dorinthea,Hero.Dromai,Hero.Emperor,Hero.Enigma,Hero.Fai,Hero.Fang,Hero.Florian,Hero.Frankie,Hero.Genis,Hero.GravyBones,Hero.Hala,Hero.Ira,Hero.Iyslander,Hero.Jarl,Hero.Kano,Hero.Kassai,Hero.Katsu,Hero.Kavdaen,Hero.Kayo,Hero.Killjoy,Hero.Kox,Hero.Levia,Hero.Lexi,Hero.Librarian,Hero.Lyath,Hero.Malice,Hero.Marlynn,Hero.Maxx,Hero.Melody,Hero.Mortimer,Hero.Nuu,Hero.Oldhim,Hero.Olympia,Hero.Oscilio,Hero.Pleiades,Hero.Prism,Hero.Puffin,Hero.RKO,Hero.Reya,Hero.Rhinar,Hero.Riptide,Hero.Ruudi,Hero.Scurv,Hero.Shiyana,Hero.Slippy,Hero.Squizzy,Hero.Starvo,Hero.Taipanis,Hero.Taylor,Hero.Teklovossen,Hero.Terra,Hero.Theryon,Hero.Tuffnut,Hero.Uzuri,Hero.Valda,Hero.Verdance,Hero.Victor,Hero.Viserai,Hero.Viserai2,Hero.Vynnset,Hero.Yoji,Hero.Yorick,Hero.Zane,Hero.Zen,Hero.Zyggy],
    name: "Circlet of Eternal End",
    printings: [{
        artists: ["Carlos Cruchaga"],
      foiling: Foiling.Cold,
      identifier: "IAR223",
      image: "IAR223-CF",
      
      
      print: "IAR223-Cold",
      rarity: Rarity.Legendary,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Carlos Cruchaga"],
      foiling: Foiling.Rainbow,
      identifier: "IAR223",
      image: "IAR223-RF",
      
      
      print: "IAR223-Rainbow",
      rarity: Rarity.Legendary,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Legendary,Rarity.Promo],
    rarity: Rarity.Legendary,
    setIdentifiers: ["FAB491","IAR223"],
    sets: [Release.Promos,Release.UsurpTheShadowThrone],
    specialImage: "IAR223-CF",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Generic Equipment - Head",

    
    
    
    defense: 2,
    
    functionalText: `When this defends, turn a card in the attacking hero's banished zone face-down.

**Blade Break**`,
    
    
    
    
    keywords: [Keyword.BladeBreak],
    
    
    meta: [Meta.Arena],
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["SanSan"],
    cardIdentifier: "consuming-lash-yellow",
    classes: [Class.Brute],
    defaultImage: "IAR009",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Levia],
    name: "Consuming Lash",
    printings: [{
        artists: ["SanSan"],
      
      identifier: "IAR009",
      image: "IAR009",
      
      
      print: "IAR009",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["SanSan"],
      foiling: Foiling.Rainbow,
      identifier: "IAR009",
      image: "IAR009-RF",
      
      
      print: "IAR009-Rainbow",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["IAR009"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR009",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Brute Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `Play this only if you control a Blasmophet.

**Instant** - {r}, banish this from your hand: Your next attack this turn gets **go again**.

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt,Keyword.GoAgain],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 2,
    power: 6,referencedCards: ["blasmophet-levia-consumed","blasmophet-the-insatiable-hunger","blasmophet-the-soul-harvester"],
    
    shorthands: [Shorthand.Poppers],
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Kevin Sidharta"],
    cardIdentifier: "consuming-strength-yellow",
    classes: [Class.Brute],
    defaultImage: "IAR010",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Levia],
    name: "Consuming Strength",
    printings: [{
        artists: ["Kevin Sidharta"],
      
      identifier: "IAR010",
      image: "IAR010",
      
      
      print: "IAR010",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Kevin Sidharta"],
      foiling: Foiling.Rainbow,
      identifier: "IAR010",
      image: "IAR010-RF",
      
      
      print: "IAR010-Rainbow",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["IAR010"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR010",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Brute Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `Play this only if you control a Blasmophet.

**Instant** - {r}, banish this from your hand: Your next attack this turn gets +2{p}.

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 2,
    power: 6,referencedCards: ["blasmophet-levia-consumed","blasmophet-the-insatiable-hunger","blasmophet-the-soul-harvester"],
    
    shorthands: [Shorthand.Buffs,Shorthand.Poppers],
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Jessada Sutthi"],
    cardIdentifier: "corrupt-and-conquer-red",
    classes: [Class.NotClassed],
    defaultImage: "IAR164",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Baalghor,Hero.Chane,Hero.Levia,Hero.Malice,Hero.Viserai2,Hero.Vynnset],
    name: "Corrupt and Conquer",
    printings: [{
        artists: ["Jessada Sutthi"],
      
      identifier: "IAR164",
      image: "IAR164",
      
      
      print: "IAR164",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Jessada Sutthi"],
      foiling: Foiling.Rainbow,
      identifier: "IAR164",
      image: "IAR164-RF",
      
      
      print: "IAR164-Rainbow",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Majestic,Rarity.Promo],
    rarity: Rarity.Majestic,
    setIdentifiers: ["FAB516","IAR164"],
    sets: [Release.Promos,Release.UsurpTheShadowThrone],
    specialImage: "IAR164",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `If this was played from your banished zone, it gets "Defense reaction cards can't be played this chain link.

When this hits a hero, banish all cards in their arsenal.

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 1,
    power: 6,
    
    shorthands: [Shorthand.Poppers],
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "corrupted-corpse",
    classes: [Class.Necromancer],
    defaultImage: "IAR090",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Malice],
    name: "Corrupted Corpse",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "IAR090",
      image: "IAR090",
      
      
      print: "IAR090",
      rarity: Rarity.Basic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Carlos Cruchaga"],
      foiling: Foiling.Rainbow,
      identifier: "IAR090",
      image: "IAR090-RF",
      
      
      print: "IAR090-Rainbow-Extended Art",
      rarity: Rarity.Basic,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Basic],
    rarity: Rarity.Basic,
    setIdentifiers: ["IAR090"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR090-RF",
    subtypes: [Subtype.Ally,Subtype.NonAttack,Subtype.Zombie],
    types: [Type.Action],
    typeText: "Shadow Necromancer Action - Zombie Ally",

    
    
    cost: 2,
    
    
    functionalText: `**Incarnate**

This card's attacks get **go again**.

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt,Keyword.GoAgain,Keyword.Incarnate],
    
    life: 3,
    
  
    
    
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Yunior Susanto"],
    cardIdentifier: "crushing-headache-red",
    classes: [Class.Guardian],
    defaultImage: "IAR244",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Betsy,Hero.Bolfar,Hero.Bravo,Hero.Brevant,Hero.Crix,Hero.Jarl,Hero.Kox,Hero.Lyath,Hero.Oldhim,Hero.Pleiades,Hero.Reya,Hero.Starvo,Hero.Terra,Hero.Valda,Hero.Victor,Hero.Yoji],
    name: "Crushing Headache",
    printings: [{
        artists: ["Yunior Susanto"],
      
      identifier: "IAR244",
      image: "IAR244",
      isExpansionSlot: true,
      
      print: "IAR244",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Yunior Susanto"],
      foiling: Foiling.Rainbow,
      identifier: "IAR244",
      image: "IAR244-RF",
      isExpansionSlot: true,
      
      print: "IAR244-Rainbow-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["IAR244"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR244-RF",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Guardian Action - Attack",

    
    
    cost: 6,
    defense: 3,
    
    functionalText: `**Crush** - When this deals 4 or more damage to a hero, they reveal their arsenal and hand. Destroy all non-attack action cards in their arsenal, and they discard all non-attack action cards in their hand revealed this way.`,
    
    
    
    
    keywords: [Keyword.Crush],
    
    
    meta: [Meta.Deck,Meta.Expansion],
  
    
    pitch: 1,
    power: 10,
    
    shorthands: [Shorthand.Poppers],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "demonbound-gloomblade-red",
    classes: [Class.Runeblade],
    defaultImage: "IAR126",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Chane,Hero.Viserai2,Hero.Vynnset],
    name: "Demonbound Gloomblade",
    printings: [{
        artists: ["Rio Sabda"],
      
      identifier: "IAR126",
      image: "IAR126",
      
      
      print: "IAR126",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Rio Sabda"],
      foiling: Foiling.Rainbow,
      identifier: "IAR126",
      image: "IAR126-RF",
      
      
      print: "IAR126-Rainbow",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["IAR126"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR126",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Runeblade Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `You may play this from your banished zone.

**Usurp**

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt,Keyword.Usurp],
    
    
    meta: [Meta.Deck,Meta.Rainbow],
  
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "demonbound-gloomblade-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR127",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Chane,Hero.Viserai2,Hero.Vynnset],
    name: "Demonbound Gloomblade",
    printings: [{
        artists: ["Rio Sabda"],
      
      identifier: "IAR127",
      image: "IAR127",
      
      
      print: "IAR127",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Rio Sabda"],
      foiling: Foiling.Rainbow,
      identifier: "IAR127",
      image: "IAR127-RF",
      
      
      print: "IAR127-Rainbow",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["IAR127"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR127",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Runeblade Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `You may play this from your banished zone.

**Usurp**

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt,Keyword.Usurp],
    
    
    meta: [Meta.Deck,Meta.Rainbow],
  
    
    pitch: 2,
    power: 2,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Rio Sabda"],
    cardIdentifier: "demonbound-gloomblade-blue",
    classes: [Class.Runeblade],
    defaultImage: "IAR128",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Chane,Hero.Viserai2,Hero.Vynnset],
    name: "Demonbound Gloomblade",
    printings: [{
        artists: ["Rio Sabda"],
      
      identifier: "IAR128",
      image: "IAR128",
      
      
      print: "IAR128",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Rio Sabda"],
      foiling: Foiling.Rainbow,
      identifier: "IAR128",
      image: "IAR128-RF",
      
      
      print: "IAR128-Rainbow",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["IAR128"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR128",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Runeblade Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `You may play this from your banished zone.

**Usurp**

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt,Keyword.Usurp],
    
    
    meta: [Meta.Deck,Meta.Rainbow],
  
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Alifka Hammam"],
    cardIdentifier: "embrace-sin-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR120",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Chane,Hero.Viserai2,Hero.Vynnset],
    name: "Embrace Sin",
    printings: [{
        artists: ["Alifka Hammam"],
      
      identifier: "IAR120",
      image: "IAR120",
      
      
      print: "IAR120",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Alifka Hammam"],
      foiling: Foiling.Rainbow,
      identifier: "IAR120",
      image: "IAR120-RF",
      
      
      print: "IAR120-Rainbow",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["IAR120"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR120",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Shadow Runeblade Action",

    
    
    cost: 1,
    defense: 2,
    
    functionalText: `Your next attack this turn gets +2{p}.

You may play an aura with Runechant in its name from your banished zone this turn.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 2,
    referencedCards: ["runechant"],
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "gate-to-iarathael",
    classes: [Class.NotClassed],
    defaultImage: "IAR222-MV",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Baalghor,Hero.Chane,Hero.Levia,Hero.Malice,Hero.Viserai2,Hero.Vynnset],
    name: "Gate to i'Arathael",
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
    rarities: [Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Promo,
    setIdentifiers: ["FAB507","IAR222"],
    sets: [Release.Promos,Release.UsurpTheShadowThrone],
    specialImage: "IAR222-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Token],
    typeText: "Shadow Token - Aura",

    
    
    
    
    
    functionalText: `**Instant** - {r}, destroy this: You may play target action card with blood debt from your banished zone this turn.`,
    
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Tatiana Krstic"],
    cardIdentifier: "grasp-of-the-darknight",
    classes: [Class.Runeblade],
    defaultImage: "IAR109",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Chane,Hero.Taylor,Hero.Viserai2,Hero.Vynnset],
    name: "Grasp of the Darknight",
    printings: [{
        artists: ["Tatiana Krstic"],
      
      identifier: "IAR109",
      image: "IAR109",
      
      
      print: "IAR109",
      rarity: Rarity.Basic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Tatiana Krstic"],
      foiling: Foiling.Cold,
      identifier: "IAR109",
      image: "IAR109-CF",
      
      
      print: "IAR109-Cold-Extended Art",
      rarity: Rarity.Basic,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Basic],
    rarity: Rarity.Basic,
    setIdentifiers: ["IAR109"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR109-CF",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Shadow Runeblade Equipment - Arms",

    
    
    createdExtras: ["runechant"],
    defense: 0,
    
    functionalText: `**Action** - {r}, destroy this: **Opt 1**, then create a Runechant token. **Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Opt],
    
    
    meta: [Meta.Arena],
  
    
    
    referencedCards: ["runechant"],
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "grille-of-repentance",
    classes: [Class.NotClassed],
    defaultImage: "IAR161",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Baalghor,Hero.Chane,Hero.Levia,Hero.Malice,Hero.Taylor,Hero.Viserai2,Hero.Vynnset],
    name: "Grille of Repentance",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "IAR161",
      image: "IAR161",
      
      
      print: "IAR161",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Thomas Ressuge"],
      foiling: Foiling.Cold,
      identifier: "IAR161",
      image: "IAR161-CF",
      
      
      print: "IAR161-Cold",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["IAR161"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR161-CF",
    subtypes: [Subtype.Head],
    types: [Type.Equipment],
    typeText: "Shadow Equipment - Head",

    
    
    
    defense: 0,
    
    functionalText: `**Instant** - Destroy this: Turn a card with blood debt in your banished zone face-down.`,
    
    
    
    
    
    
    
    meta: [Meta.Arena],
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Carlos Cruchaga"],
    cardIdentifier: "harbinger-of-destruction-red",
    classes: [Class.NotClassed],
    defaultImage: "IAR170",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Baalghor,Hero.Chane,Hero.Levia,Hero.Malice,Hero.Viserai2,Hero.Vynnset],
    name: "Harbinger of Destruction",
    printings: [{
        artists: ["Carlos Cruchaga"],
      
      identifier: "IAR170",
      image: "IAR170",
      
      
      print: "IAR170",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Carlos Cruchaga"],
      foiling: Foiling.Rainbow,
      identifier: "IAR170",
      image: "IAR170-RF",
      
      
      print: "IAR170-Rainbow",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["IAR170"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR170",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Action - Attack",

    
    
    cost: 8,createdExtras: ["gate-to-iarathael"],
    defense: 3,
    
    functionalText: `As an additional cost to play this, banish a card from your hand. If a Shadow card was banished this way, this gets "When this hits, create 2 Gate to i'Arathael tokens."

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 1,
    power: 13,referencedCards: ["gate-to-iarathael"],
    
    shorthands: [Shorthand.Poppers],
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Bramasta Aji"],
    cardIdentifier: "head-banging-chorus-yellow",
    classes: [Class.Guardian],
    defaultImage: "IAR256",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Pleiades],
    name: "Head Banging Chorus",
    printings: [{
        artists: ["Bramasta Aji"],
      
      identifier: "IAR256",
      image: "IAR256",
      isExpansionSlot: true,
      
      print: "IAR256",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Bramasta Aji"],
      foiling: Foiling.Cold,
      identifier: "IAR256",
      image: "IAR256-CF",
      isExpansionSlot: true,
      
      print: "IAR256-Cold-Extended Art",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["IAR256"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR256-CF",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Revered Guardian Instant - Aura",

    
    
    cost: 1,
    defense: 3,
    
    functionalText: `**Suspense**

The first Guardian or Revered attack action card you play each turn gets "When this hits a hero, if you have no cards in hand, draw a card."`,
    
    
    
    
    keywords: [Keyword.Suspense],
    
    
    meta: [Meta.Deck,Meta.Expansion],
  
    
    pitch: 2,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Revered],
  
  
  },{
    artists: ["Lizhe Liang"],
    cardIdentifier: "hell-hammer",
    classes: [Class.Brute],
    defaultImage: "IAR003",
    firstReleaseDate: "2023-07-14",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Levia],
    name: "Hell Hammer",
    printings: [{
        artists: ["Lizhe Liang"],
      
      identifier: "IAR003",
      image: "IAR003",
      
      
      print: "IAR003",
      rarity: Rarity.Basic,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Basic,Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Basic,
    setIdentifiers: ["DTD105","IAR003","LGS164"],
    sets: [Release.DuskTillDawn,Release.Promos,Release.UsurpTheShadowThrone],
    specialImage: "IAR003",
    subtypes: [Subtype.TwoHanded,Subtype.Hammer],
    types: [Type.Weapon],
    typeText: "Shadow Brute Weapon - Hammer (2H)",

    
    
    
    
    
    functionalText: `**Once per Turn Action** - {r}{r}: **Attack**

When the combat chain closes, if you've attacked with this, banish it.

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt],
    
    
    meta: [Meta.Arena,Meta.Reprint],
  
    
    
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Tomi Ong"],
    cardIdentifier: "hex-gauntlet",
    classes: [Class.Brute],
    defaultImage: "IAR004",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Levia,Hero.Taylor],
    name: "Hex Gauntlet",
    printings: [{
        artists: ["Tomi Ong"],
      
      identifier: "IAR004",
      image: "IAR004",
      
      
      print: "IAR004",
      rarity: Rarity.Basic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Tomi Ong"],
      foiling: Foiling.Cold,
      identifier: "IAR004",
      image: "IAR004-CF",
      
      
      print: "IAR004-Cold-Extended Art",
      rarity: Rarity.Basic,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.EA,treatments: [Treatment.EA],
    },],
    rarities: [Rarity.Basic],
    rarity: Rarity.Basic,
    setIdentifiers: ["IAR004"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR004-CF",
    subtypes: [Subtype.Arms],
    types: [Type.Equipment],
    typeText: "Shadow Brute Equipment - Arms",

    
    
    
    
    
    functionalText: `**Instant** - Banish this: Turn a card with blood debt in your banished zone face-down.

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt],
    
    
    meta: [Meta.Arena],
  
    
    
    power: 6,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Kevin Sidharta"],
    cardIdentifier: "ice-aged-oak-blue",
    classes: [Class.NotClassed],
    defaultImage: "IAR260",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Briar,Hero.Florian,Hero.Jarl,Hero.Oldhim,Hero.Starvo,Hero.Terra,Hero.Verdance],
    name: "Ice Aged Oak",
    printings: [{
        artists: ["Kevin Sidharta"],
      
      identifier: "IAR260",
      image: "IAR260",
      isExpansionSlot: true,
      
      print: "IAR260",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Kevin Sidharta"],
      foiling: Foiling.Rainbow,
      identifier: "IAR260",
      image: "IAR260-RF",
      isExpansionSlot: true,
      
      print: "IAR260-Rainbow",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["IAR260"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR260",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Earth Action - Attack",

    
    
    cost: 3,createdExtras: ["embodiment-of-earth","frostbite"],
    defense: 3,
    
    functionalText: `When this hits a hero, create an Embodiment of Earth token.

**Ice Bond** - If an Ice card was pitched to play this, this gets **dominate** and "When this hits a hero, create a Frostbite token in each of their exposed head, chest, arms, and legs zones."`,
    
    
    
    
    keywords: [Keyword.Bond,Keyword.Dominate],
    
    
    meta: [Meta.Deck,Meta.Expansion],
  
    
    pitch: 3,
    power: 4,referencedCards: ["embodiment-of-earth","frostbite"],
    
    
    
    
    
    
    
    
    
    talents: [Talent.Earth],
  
  
  },{
    artists: ["SanSan","Wisnu Tan"],
    cardIdentifier: "levia",
    classes: [Class.Brute],
    defaultImage: "IAR002",
    firstReleaseDate: "2021-05-07",
    legalFormats: [Format.Blitz,Format.Draft,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Levia],
    name: "Levia",
    printings: [{
        artists: ["SanSan"],
      
      identifier: "IAR002",
      image: "IAR002",
      
      
      print: "IAR002",
      rarity: Rarity.Basic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["SanSan"],
      foiling: Foiling.Cold,
      identifier: "IAR002",
      image: "IAR002-MV",
      
      
      print: "IAR002-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["SanSan"],
      foiling: Foiling.Cold,
      identifier: "IAR002",
      image: "IAR002-MV_BACK",
      
      
      print: "IAR002-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Common,Rarity.Marvel,Rarity.Promo,Rarity.Rare,Rarity.Token],
    rarity: Rarity.Basic,
    setIdentifiers: ["DTD104","HER036","IAR002","LEV001","MON120"],
    sets: [Release.DuskTillDawn,Release.LeviaBlitzDeck,Release.Monarch,Release.Promos,Release.UsurpTheShadowThrone],
    specialImage: "IAR002-MV",
    subtypes: [Subtype.Young],
    types: [Type.Hero],
    typeText: "Shadow Brute Hero - Young",

    
    
    
    
    
    functionalText: `If a card with 6 or more {p} has been put into your banished zone this turn, you don't lose {h} from blood debt during the end phase.`,
    
    hero: Hero.Levia,
    intellect: 4,
    
    
    
    life: 20,
    meta: [Meta.Reprint],
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  young: true
  },{
    artists: ["João G. Santos"],
    cardIdentifier: "malice",
    classes: [Class.Necromancer],
    defaultImage: "IAR054",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.Draft,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Malice],
    name: "Malice",
    printings: [{
        artists: ["João G. Santos"],
      
      identifier: "IAR054",
      image: "IAR054",
      
      
      print: "IAR054",
      rarity: Rarity.Basic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["João G. Santos"],
      foiling: Foiling.Cold,
      identifier: "IAR054",
      image: "IAR054-MV",
      
      
      print: "IAR054-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["João G. Santos"],
      foiling: Foiling.Cold,
      identifier: "IAR054",
      image: "IAR054-MV_BACK",
      
      
      print: "IAR054-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["IAR054"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR054-MV",
    subtypes: [Subtype.Young],
    types: [Type.Hero],
    typeText: "Shadow Necromancer Hero - Young",

    
    
    createdExtras: ["corrupted-corpse"],
    
    
    functionalText: `**Action** - {r}, {t}: Until end of turn, you may play target zombie from your graveyard. **Go again**

Whenever a zombie you control dies, banish it face-down and create a Corrupted Corpse in your banished Zone.`,
    
    hero: Hero.Malice,
    intellect: 4,
    
    keywords: [Keyword.GoAgain],
    
    life: 20,
    
  
    
    
    referencedCards: ["corrupted-corpse"],
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  young: true
  },{
    artists: ["João G. Santos"],
    cardIdentifier: "malice-domina-of-the-dead",
    classes: [Class.Necromancer],
    defaultImage: "IAR053",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open],
    legalHeroes: [Hero.Malice],
    name: "Malice, Domina of the Dead",
    printings: [{
        artists: ["João G. Santos"],
      
      identifier: "IAR053",
      image: "IAR053",
      
      
      print: "IAR053",
      rarity: Rarity.Basic,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Basic,Rarity.Majestic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["AMA001","GEM184","IAR053"],
    sets: [Release.ArmoryDeckMalice,Release.GEM,Release.UsurpTheShadowThrone],
    specialImage: "IAR053",
    subtypes: [],
    types: [Type.Hero],
    typeText: "Shadow Necromancer Hero",

    
    
    createdExtras: ["corrupted-corpse"],
    
    
    functionalText: `**Action** - {r}, {t}: Until end of turn, you may play target zombie from your graveyard. **Go again**

Whenever a zombie you control dies, banish it face-down and create a Corrupted Corpse in your banished Zone.`,
    
    hero: Hero.Malice,
    intellect: 4,
    
    keywords: [Keyword.GoAgain],
    
    life: 40,
    meta: [Meta.Reprint],
  
    
    
    referencedCards: ["corrupted-corpse"],
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Jessada Sutthi"],
    cardIdentifier: "open-the-gate-to-iarathael-red",
    classes: [Class.NotClassed],
    defaultImage: "IAR166",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Baalghor,Hero.Chane,Hero.Levia,Hero.Malice,Hero.Viserai2,Hero.Vynnset],
    name: "Open the Gate to i'Arathael",
    printings: [{
        artists: ["Jessada Sutthi"],
      
      identifier: "IAR166",
      image: "IAR166",
      
      
      print: "IAR166",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Jessada Sutthi"],
      foiling: Foiling.Rainbow,
      identifier: "IAR166",
      image: "IAR166-RF",
      
      
      print: "IAR166-Rainbow",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Majestic,Rarity.Promo],
    rarity: Rarity.Majestic,
    setIdentifiers: ["FAB509","IAR166"],
    sets: [Release.Promos,Release.UsurpTheShadowThrone],
    specialImage: "IAR166",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Action - Attack",

    
    
    cost: 0,createdExtras: ["gate-to-iarathael"],
    defense: 3,
    
    functionalText: `When this hits or is banished from hand or deck, create a Gate to i'Arathael token.

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 1,
    power: 4,referencedCards: ["gate-to-iarathael"],
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Tommy Suhartono"],
    cardIdentifier: "otherworldly-sins-red",
    classes: [Class.Runeblade],
    defaultImage: "IAR141",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Chane,Hero.Viserai2,Hero.Vynnset],
    name: "Otherworldly Sins",
    printings: [{
        artists: ["Tommy Suhartono"],
      
      identifier: "IAR141",
      image: "IAR141",
      
      
      print: "IAR141",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Tommy Suhartono"],
      foiling: Foiling.Rainbow,
      identifier: "IAR141",
      image: "IAR141-RF",
      
      
      print: "IAR141-Rainbow",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["IAR141","JDG090"],
    sets: [Release.Promos,Release.UsurpTheShadowThrone],
    specialImage: "IAR141",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Shadow Runeblade Action",

    
    
    cost: 1,createdExtras: ["runechant"],
    defense: 2,
    
    functionalText: `Your next Runeblade or Shadow attack this turn gets +3{p}.

Create a Runechant token.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Deck,Meta.Rainbow],
  
    
    pitch: 1,
    referencedCards: ["runechant"],
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Tommy Suhartono"],
    cardIdentifier: "otherworldly-sins-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR142",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Chane,Hero.Viserai2,Hero.Vynnset],
    name: "Otherworldly Sins",
    printings: [{
        artists: ["Tommy Suhartono"],
      
      identifier: "IAR142",
      image: "IAR142",
      
      
      print: "IAR142",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Tommy Suhartono"],
      foiling: Foiling.Rainbow,
      identifier: "IAR142",
      image: "IAR142-RF",
      
      
      print: "IAR142-Rainbow",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["IAR142"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR142",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Shadow Runeblade Action",

    
    
    cost: 1,createdExtras: ["runechant"],
    defense: 2,
    
    functionalText: `Your next Runeblade or Shadow attack this turn gets +2{p}.

Create a Runechant token.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Deck,Meta.Rainbow],
  
    
    pitch: 2,
    referencedCards: ["runechant"],
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Tommy Suhartono"],
    cardIdentifier: "otherworldly-sins-blue",
    classes: [Class.Runeblade],
    defaultImage: "IAR143",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Chane,Hero.Viserai2,Hero.Vynnset],
    name: "Otherworldly Sins",
    printings: [{
        artists: ["Tommy Suhartono"],
      
      identifier: "IAR143",
      image: "IAR143",
      
      
      print: "IAR143",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Tommy Suhartono"],
      foiling: Foiling.Rainbow,
      identifier: "IAR143",
      image: "IAR143-RF",
      
      
      print: "IAR143-Rainbow",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["IAR143"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR143",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Shadow Runeblade Action",

    
    
    cost: 1,createdExtras: ["runechant"],
    defense: 2,
    
    functionalText: `Your next Runeblade or Shadow attack this turn gets +1{p}.

Create a Runechant token.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Deck,Meta.Rainbow],
  
    
    pitch: 3,
    referencedCards: ["runechant"],
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "path-of-repentance",
    classes: [Class.NotClassed],
    defaultImage: "IAR163",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Baalghor,Hero.Chane,Hero.Levia,Hero.Malice,Hero.Taylor,Hero.Viserai2,Hero.Vynnset],
    name: "Path of Repentance",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "IAR163",
      image: "IAR163",
      
      
      print: "IAR163",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Thomas Ressuge"],
      foiling: Foiling.Cold,
      identifier: "IAR163",
      image: "IAR163-CF",
      
      
      print: "IAR163-Cold",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["IAR163"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR163-CF",
    subtypes: [Subtype.Legs],
    types: [Type.Equipment],
    typeText: "Shadow Equipment - Legs",

    
    
    
    defense: 0,
    
    functionalText: `**Instant** - Destroy this: Turn a card with blood debt in your banished zone face-down.`,
    
    
    
    
    
    
    
    meta: [Meta.Arena],
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "pull-from-beyond-red",
    classes: [Class.NotClassed],
    defaultImage: "IAR212",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Baalghor,Hero.Chane,Hero.Levia,Hero.Malice,Hero.Viserai2,Hero.Vynnset],
    name: "Pull from Beyond",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "IAR212",
      image: "IAR212",
      
      
      print: "IAR212",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Marco González"],
      foiling: Foiling.Rainbow,
      identifier: "IAR212",
      image: "IAR212-RF",
      
      
      print: "IAR212-Rainbow",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["FAB518","IAR212"],
    sets: [Release.Promos,Release.UsurpTheShadowThrone],
    specialImage: "IAR212",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Shadow Action",

    
    
    cost: 0,createdExtras: ["gate-to-iarathael"],
    defense: 3,
    
    functionalText: `**Opt 2**

Banish the top card of your deck. If it's red, create a Gate to i'Arathael token. **Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Opt],
    
    
    meta: [Meta.Deck,Meta.Rainbow],
  
    
    pitch: 1,
    referencedCards: ["gate-to-iarathael"],
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "pull-from-beyond-yellow",
    classes: [Class.NotClassed],
    defaultImage: "IAR213",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Baalghor,Hero.Chane,Hero.Levia,Hero.Malice,Hero.Viserai2,Hero.Vynnset],
    name: "Pull from Beyond",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "IAR213",
      image: "IAR213",
      
      
      print: "IAR213",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Marco González"],
      foiling: Foiling.Rainbow,
      identifier: "IAR213",
      image: "IAR213-RF",
      
      
      print: "IAR213-Rainbow",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["FAB519","IAR213"],
    sets: [Release.Promos,Release.UsurpTheShadowThrone],
    specialImage: "IAR213",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Shadow Action",

    
    
    cost: 0,createdExtras: ["gate-to-iarathael"],
    defense: 3,
    
    functionalText: `**Opt 2**

Banish the top card of your deck. If it's yellow, create a Gate to i'Arathael token. **Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Opt],
    
    
    meta: [Meta.Deck,Meta.Rainbow],
  
    
    pitch: 2,
    referencedCards: ["gate-to-iarathael"],
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Marco González"],
    cardIdentifier: "pull-from-beyond-blue",
    classes: [Class.NotClassed],
    defaultImage: "IAR214",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Baalghor,Hero.Chane,Hero.Levia,Hero.Malice,Hero.Viserai2,Hero.Vynnset],
    name: "Pull from Beyond",
    printings: [{
        artists: ["Marco González"],
      
      identifier: "IAR214",
      image: "IAR214",
      
      
      print: "IAR214",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Marco González"],
      foiling: Foiling.Rainbow,
      identifier: "IAR214",
      image: "IAR214-RF",
      
      
      print: "IAR214-Rainbow",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["FAB520","IAR214"],
    sets: [Release.Promos,Release.UsurpTheShadowThrone],
    specialImage: "IAR214",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Shadow Action",

    
    
    cost: 0,createdExtras: ["gate-to-iarathael"],
    defense: 3,
    
    functionalText: `**Opt 2**

Banish the top card of your deck. If it's blue, create a Gate to i'Arathael token. **Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain,Keyword.Opt],
    
    
    meta: [Meta.Deck,Meta.Rainbow],
  
    
    pitch: 3,
    referencedCards: ["gate-to-iarathael"],
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Yiian Kho"],
    cardIdentifier: "restless-cleric-red",
    classes: [Class.Necromancer],
    defaultImage: "IAR084",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Malice],
    name: "Restless Cleric",
    printings: [{
        artists: ["Yiian Kho"],
      
      identifier: "IAR084",
      image: "IAR084",
      
      
      print: "IAR084",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Yiian Kho"],
      foiling: Foiling.Cold,
      identifier: "IAR084",
      image: "IAR084-MV",
      
      
      print: "IAR084-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Common,Rarity.Marvel],
    rarity: Rarity.Common,
    setIdentifiers: ["IAR084"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR084-MV",
    subtypes: [Subtype.Ally,Subtype.NonAttack,Subtype.Zombie],
    types: [Type.Action],
    typeText: "Shadow Necromancer Action - Zombie Ally",

    
    
    cost: 0,
    
    
    functionalText: `**Action** - {t}: Gain 1{h}. **Go again**

**Decay**`,
    
    
    
    
    keywords: [Keyword.Decay,Keyword.GoAgain],
    
    life: 3,
    meta: [Meta.Deck],
  
    
    pitch: 1,
    power: 3,
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Isuardi Therianto"],
    cardIdentifier: "restless-magister-red",
    classes: [Class.Necromancer],
    defaultImage: "IAR064",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Malice],
    name: "Restless Magister",
    printings: [{
        artists: ["Isuardi Therianto"],
      
      identifier: "IAR064",
      image: "IAR064",
      
      
      print: "IAR064",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Isuardi Therianto"],
      foiling: Foiling.Cold,
      identifier: "IAR064",
      image: "IAR064-MV",
      
      
      print: "IAR064-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Marvel,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["IAR064"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR064-MV",
    subtypes: [Subtype.Ally,Subtype.NonAttack,Subtype.Zombie],
    types: [Type.Action],
    typeText: "Shadow Necromancer Action - Zombie Ally",

    
    
    cost: 0,
    
    
    functionalText: `When this hits a hero, they banish a card from their hand.

**Decay**`,
    
    
    
    
    keywords: [Keyword.Decay],
    
    life: 3,
    meta: [Meta.Deck],
  
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Sebastian Giacobino"],
    cardIdentifier: "restless-quartermaster-red",
    classes: [Class.Necromancer],
    defaultImage: "IAR065",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Malice],
    name: "Restless Quartermaster",
    printings: [{
        artists: ["Sebastian Giacobino"],
      
      identifier: "IAR065",
      image: "IAR065",
      
      
      print: "IAR065",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Sebastian Giacobino"],
      foiling: Foiling.Cold,
      identifier: "IAR065",
      image: "IAR065-MV",
      
      
      print: "IAR065-Cold-Full Art",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Common,Rarity.Rare],
    rarity: Rarity.Common,
    setIdentifiers: ["IAR065"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR065-MV",
    subtypes: [Subtype.Ally,Subtype.NonAttack,Subtype.Zombie],
    types: [Type.Action],
    typeText: "Shadow Necromancer Action - Zombie Ally",

    
    
    cost: 0,
    
    
    functionalText: `When this hits a hero, they banish a card in their arsenal.

**Decay**`,
    
    
    
    
    keywords: [Keyword.Decay],
    
    life: 3,
    meta: [Meta.Deck],
  
    
    pitch: 1,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Thomas Ressuge"],
    cardIdentifier: "robe-of-repentance",
    classes: [Class.NotClassed],
    defaultImage: "IAR162",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Baalghor,Hero.Chane,Hero.Levia,Hero.Malice,Hero.Taylor,Hero.Viserai2,Hero.Vynnset],
    name: "Robe of Repentance",
    printings: [{
        artists: ["Thomas Ressuge"],
      
      identifier: "IAR162",
      image: "IAR162",
      
      
      print: "IAR162",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Thomas Ressuge"],
      foiling: Foiling.Cold,
      identifier: "IAR162",
      image: "IAR162-CF",
      
      
      print: "IAR162-Cold",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Common],
    rarity: Rarity.Common,
    setIdentifiers: ["IAR162"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR162-CF",
    subtypes: [Subtype.Chest],
    types: [Type.Equipment],
    typeText: "Shadow Equipment - Chest",

    
    
    
    defense: 0,
    
    functionalText: `**Instant** - Destroy this: Turn a card with blood debt in your banished zone face-down.`,
    
    
    
    
    
    
    
    meta: [Meta.Arena],
  
    
    
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-envy-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR152",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Viserai2,Hero.Vynnset],
    name: "Runechant of Envy",
    printings: [{
        artists: ["MJ Fetesio"],
      
      identifier: "IAR152",
      image: "IAR152",
      
      
      print: "IAR152",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
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
    rarities: [Rarity.Common,Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["GEM178","IAR152"],
    sets: [Release.GEM,Release.UsurpTheShadowThrone],
    specialImage: "IAR152-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,createdExtras: ["runechant"],
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, gain 1{h}.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    
    
    
    meta: [Meta.Deck],
  
    
    pitch: 2,
    referencedCards: ["runechant"],
    
    shorthands: [Shorthand.Sin],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-gluttony-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR153",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Viserai2,Hero.Vynnset],
    name: "Runechant of Gluttony",
    printings: [{
        artists: ["MJ Fetesio"],
      
      identifier: "IAR153",
      image: "IAR153",
      
      
      print: "IAR153",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
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
    rarities: [Rarity.Common,Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["GEM179","IAR153"],
    sets: [Release.GEM,Release.UsurpTheShadowThrone],
    specialImage: "IAR153-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,createdExtras: ["runechant"],
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, gain {r}.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    
    
    
    meta: [Meta.Deck],
  
    
    pitch: 2,
    referencedCards: ["runechant"],
    
    shorthands: [Shorthand.Sin],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-greed-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR145",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Viserai2,Hero.Vynnset],
    name: "Runechant of Greed",
    printings: [{
        artists: ["MJ Fetesio"],
      
      identifier: "IAR145",
      image: "IAR145",
      
      
      print: "IAR145",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
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
    rarities: [Rarity.Majestic,Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Majestic,
    setIdentifiers: ["GEM177","IAR145"],
    sets: [Release.GEM,Release.UsurpTheShadowThrone],
    specialImage: "IAR145-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,createdExtras: ["runechant"],
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, draw a card.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    
    
    
    meta: [Meta.Deck],
  
    
    pitch: 2,
    referencedCards: ["runechant"],
    
    shorthands: [Shorthand.Sin],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-lust-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR154",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Viserai2,Hero.Vynnset],
    name: "Runechant of Lust",
    printings: [{
        artists: ["MJ Fetesio"],
      
      identifier: "IAR154",
      image: "IAR154",
      
      
      print: "IAR154",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
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
    rarities: [Rarity.Common,Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["GEM180","IAR154"],
    sets: [Release.GEM,Release.UsurpTheShadowThrone],
    specialImage: "IAR154-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,createdExtras: ["runechant"],
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, create a Runechant token.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    
    
    
    meta: [Meta.Deck],
  
    
    pitch: 2,
    referencedCards: ["runechant"],
    
    shorthands: [Shorthand.Sin],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-pride-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR155",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Viserai2,Hero.Vynnset],
    name: "Runechant of Pride",
    printings: [{
        artists: ["MJ Fetesio"],
      
      identifier: "IAR155",
      image: "IAR155",
      
      
      print: "IAR155",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
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
    rarities: [Rarity.Common,Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["GEM181","IAR155"],
    sets: [Release.GEM,Release.UsurpTheShadowThrone],
    specialImage: "IAR155-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,createdExtras: ["runechant"],
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, it gets +1{p}.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    
    
    
    meta: [Meta.Deck],
  
    
    pitch: 2,
    referencedCards: ["runechant"],
    
    shorthands: [Shorthand.Sin],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-sloth-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR156",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Viserai2,Hero.Vynnset],
    name: "Runechant of Sloth",
    printings: [{
        artists: ["MJ Fetesio"],
      
      identifier: "IAR156",
      image: "IAR156",
      
      
      print: "IAR156",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
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
    rarities: [Rarity.Common,Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["GEM182","IAR156"],
    sets: [Release.GEM,Release.UsurpTheShadowThrone],
    specialImage: "IAR156-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,createdExtras: ["runechant"],
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, it gets **go again**.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 2,
    referencedCards: ["runechant"],
    
    shorthands: [Shorthand.Sin],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["MJ Fetesio"],
    cardIdentifier: "runechant-of-wrath-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR157",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Aurora,Hero.Aurora2,Hero.Briar,Hero.Chane,Hero.Florian,Hero.Viserai,Hero.Viserai2,Hero.Vynnset],
    name: "Runechant of Wrath",
    printings: [{
        artists: ["MJ Fetesio"],
      
      identifier: "IAR157",
      image: "IAR157",
      
      
      print: "IAR157",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
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
    rarities: [Rarity.Common,Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["GEM183","IAR157"],
    sets: [Release.GEM,Release.UsurpTheShadowThrone],
    specialImage: "IAR157-MV",
    subtypes: [Subtype.Aura],
    types: [Type.Instant],
    typeText: "Runeblade Instant - Aura",

    
    
    cost: 0,createdExtras: ["runechant"],
    
    
    functionalText: `This counts as a Runechant. When an attack usurps this, it gets **overpower**.

When this is destroyed, create a Runechant token.

At the beginning of your action phase or when you play an attack action card, destroy this.`,
    
    
    
    
    keywords: [Keyword.Overpower],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 2,
    referencedCards: ["runechant"],
    
    shorthands: [Shorthand.Sin],
    
    
    
    
    
    
    
    
  
  
  },{
    artists: ["Ismatulloh"],
    cardIdentifier: "seven-sin-nebula",
    classes: [Class.Runeblade],
    defaultImage: "IAR108",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Chane,Hero.Viserai2,Hero.Vynnset],
    name: "Seven Sin Nebula",
    printings: [{
        artists: ["Ismatulloh"],
      
      identifier: "IAR108",
      image: "IAR108",
      
      
      print: "IAR108",
      rarity: Rarity.Basic,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Basic,Rarity.Promo],
    rarity: Rarity.Basic,
    setIdentifiers: ["GEM185","IAR108"],
    sets: [Release.GEM,Release.UsurpTheShadowThrone],
    specialImage: "IAR108",
    subtypes: [Subtype.TwoHanded,Subtype.Sword],
    types: [Type.Weapon],
    typeText: "Shadow Runeblade Weapon - Sword (2H)",

    
    
    createdExtras: ["runechant"],
    
    
    functionalText: `**Action** - {r}, {t}: **Attack**. Activate this only if you've played a card from a banished zone this turn.

When this hits a hero, create a Runechant token.`,
    
    
    
    
    
    
    
    meta: [Meta.Arena],
  
    
    
    power: 3,referencedCards: ["runechant"],
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Stefano Moroni"],
    cardIdentifier: "shadowrealm-harrower-blue",
    classes: [Class.NotClassed],
    defaultImage: "IAR174",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Baalghor,Hero.Chane,Hero.Levia,Hero.Malice,Hero.Viserai2,Hero.Vynnset],
    name: "Shadowrealm Harrower",
    printings: [{
        artists: ["Stefano Moroni"],
      
      identifier: "IAR174",
      image: "IAR174",
      
      
      print: "IAR174",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Stefano Moroni"],
      foiling: Foiling.Rainbow,
      identifier: "IAR174",
      image: "IAR174-RF",
      
      
      print: "IAR174-Rainbow",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["FAB510","IAR174"],
    sets: [Release.Promos,Release.UsurpTheShadowThrone],
    specialImage: "IAR174",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `If this was played from your banished zone, it gets +1{p} and "When this hits a hero, gain {h} equal to the damage dealt this way."

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 3,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Firaz M. Rasyid"],
    cardIdentifier: "shadowrealm-harvester-red",
    classes: [Class.NotClassed],
    defaultImage: "IAR175",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Baalghor,Hero.Chane,Hero.Levia,Hero.Malice,Hero.Viserai2,Hero.Vynnset],
    name: "Shadowrealm Harvester",
    printings: [{
        artists: ["Firaz M. Rasyid"],
      
      identifier: "IAR175",
      image: "IAR175",
      
      
      print: "IAR175",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Firaz M. Rasyid"],
      foiling: Foiling.Rainbow,
      identifier: "IAR175",
      image: "IAR175-RF",
      
      
      print: "IAR175-Rainbow",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["FAB511","IAR175"],
    sets: [Release.Promos,Release.UsurpTheShadowThrone],
    specialImage: "IAR175",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `If this was played from your banished zone, it gets +1{p} and **overpower**.

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt,Keyword.Overpower],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 1,
    power: 6,
    
    shorthands: [Shorthand.Poppers],
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Narendra B Adi"],
    cardIdentifier: "shadowrealm-reaper-yellow",
    classes: [Class.NotClassed],
    defaultImage: "IAR176",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Baalghor,Hero.Chane,Hero.Levia,Hero.Malice,Hero.Viserai2,Hero.Vynnset],
    name: "Shadowrealm Reaper",
    printings: [{
        artists: ["Narendra B Adi"],
      
      identifier: "IAR176",
      image: "IAR176",
      
      
      print: "IAR176",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Narendra B Adi"],
      foiling: Foiling.Rainbow,
      identifier: "IAR176",
      image: "IAR176-RF",
      
      
      print: "IAR176-Rainbow",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Promo,Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["FAB512","IAR176"],
    sets: [Release.Promos,Release.UsurpTheShadowThrone],
    specialImage: "IAR176",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Action - Attack",

    
    
    cost: 2,
    defense: 3,
    
    functionalText: `If this was played from your banished zone, it gets +1{p} and **go again**.

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt,Keyword.GoAgain],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 2,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Surya Prasetya"],
    cardIdentifier: "shadowrealm-strength-red",
    classes: [Class.Necromancer],
    defaultImage: "IAR082",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Malice],
    name: "Shadowrealm Strength",
    printings: [{
        artists: ["Surya Prasetya"],
      
      identifier: "IAR082",
      image: "IAR082",
      
      
      print: "IAR082",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Surya Prasetya"],
      foiling: Foiling.Rainbow,
      identifier: "IAR082",
      image: "IAR082-RF",
      
      
      print: "IAR082-Rainbow",
      rarity: Rarity.Common,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Common,Rarity.Promo],
    rarity: Rarity.Common,
    setIdentifiers: ["AMA012","IAR082","JDG089"],
    sets: [Release.ArmoryDeckMalice,Release.Promos,Release.UsurpTheShadowThrone],
    specialImage: "IAR082",
    subtypes: [Subtype.NonAttack],
    types: [Type.Action],
    typeText: "Shadow Necromancer Action",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `You may put a card from your banished zone into your graveyard. If it's a zombie, your next attack this turn gets +3{p}.

**Go again**`,
    
    
    
    
    keywords: [Keyword.GoAgain],
    
    
    meta: [Meta.Deck,Meta.Reprint],
  
    
    pitch: 1,
    
    
    shorthands: [Shorthand.Buffs],
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["soyameii"],
    cardIdentifier: "sinspeaker-gloomblade-red",
    classes: [Class.Runeblade],
    defaultImage: "IAR112",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Chane,Hero.Viserai2,Hero.Vynnset],
    name: "Sinspeaker Gloomblade",
    printings: [{
        artists: ["soyameii"],
      
      identifier: "IAR112",
      image: "IAR112",
      
      
      print: "IAR112",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["soyameii"],
      foiling: Foiling.Rainbow,
      identifier: "IAR112",
      image: "IAR112-RF",
      
      
      print: "IAR112-Rainbow",
      rarity: Rarity.Majestic,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["IAR112"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR112",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Runeblade Action - Attack",

    
    
    cost: 0,
    defense: 3,
    
    functionalText: `You may play this from your banished zone.

**Usurp**

If this was played from your banished zone, it gets "When this attacks, you may search your deck for an aura with Runechant in its name, put it into the arena, then shuffle."

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt,Keyword.Usurp],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 1,
    power: 2,referencedCards: ["runechant"],
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "soul-of-existence-purple",
    classes: [Class.NotClassed],
    defaultImage: "IAR000-RF",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Baalghor,Hero.Chane,Hero.Levia,Hero.Malice,Hero.Viserai2,Hero.Vynnset],
    name: "Soul of Existence",
    printings: [{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.Rainbow,
      identifier: "IAR000",
      image: "IAR000-RF",
      
      
      print: "IAR000-Rainbow",
      rarity: Rarity.Fabled,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.Cold,
      identifier: "IAR666",
      image: "IAR666-MV",
      
      
      print: "IAR666-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Fabled,Rarity.Marvel],
    rarity: Rarity.Fabled,
    setIdentifiers: ["IAR000","IAR666"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR666-MV",
    subtypes: [Subtype.Gem],
    types: [Type.Resource],
    typeText: "Shadow Resource - Gem",

    
    
    
    
    
    functionalText: `**Legendary**

When this is pitched, lose 1{h}.`,
    
    
    
    
    keywords: [Keyword.Legendary],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 4,
    
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Galih M"],
    cardIdentifier: "tribute-to-greater-power-red",
    classes: [Class.NotClassed],
    defaultImage: "IAR177",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Baalghor,Hero.Chane,Hero.Levia,Hero.Malice,Hero.Viserai2,Hero.Vynnset],
    name: "Tribute to Greater Power",
    printings: [{
        artists: ["Galih M"],
      
      identifier: "IAR177",
      image: "IAR177",
      
      
      print: "IAR177",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Galih M"],
      foiling: Foiling.Rainbow,
      identifier: "IAR177",
      image: "IAR177-RF",
      
      
      print: "IAR177-Rainbow",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["IAR177"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR177",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Action - Attack",

    
    
    cost: 2,
    defense: 2,
    
    functionalText: `**Instant** - Banish this from your hand: Your next attack this turn gets **overpower**.

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt,Keyword.Overpower],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 1,
    power: 6,
    
    shorthands: [Shorthand.Poppers],
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Amtepra"],
    cardIdentifier: "unbound-by-shadow-red",
    classes: [Class.NotClassed],
    defaultImage: "IAR178",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Baalghor,Hero.Chane,Hero.Levia,Hero.Malice,Hero.Viserai2,Hero.Vynnset],
    name: "Unbound by Shadow",
    printings: [{
        artists: ["Amtepra"],
      
      identifier: "IAR178",
      image: "IAR178",
      
      
      print: "IAR178",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Amtepra"],
      foiling: Foiling.Rainbow,
      identifier: "IAR178",
      image: "IAR178-RF",
      
      
      print: "IAR178-Rainbow",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["IAR178"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR178",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Action - Attack",

    
    
    cost: 0,createdExtras: ["gate-to-iarathael"],
    defense: 3,
    
    functionalText: `When this attacks, if it was played from your banished zone, create a Gate to i'Arathael token.

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 1,
    power: 4,referencedCards: ["gate-to-iarathael"],
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Esty Swandana"],
    cardIdentifier: "usurp-the-shadow-throne-blue",
    classes: [Class.Runeblade],
    defaultImage: "IAR110",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.UltimatePitFight],
    legalHeroes: [Hero.Shiyana,Hero.Viserai2],
    name: "Usurp the Shadow Throne",
    printings: [{
        artists: ["Esty Swandana"],
      
      identifier: "IAR110",
      image: "IAR110",
      
      
      print: "IAR110",
      rarity: Rarity.Legendary,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Esty Swandana"],
      foiling: Foiling.Cold,
      identifier: "IAR110",
      image: "IAR110-MV",
      
      
      print: "IAR110-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Legendary,Rarity.Marvel],
    rarity: Rarity.Legendary,
    setIdentifiers: ["IAR110"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR110-MV",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Runeblade Action - Attack",

    
    
    cost: 13,
    defense: 3,
    
    functionalText: `**Viserai Specialization**

If you've usurped this turn, this costs 6{r} less to play and you may play it from your banished zone.

When this hits a hero, turn all cards in their banished zone face-down. They lose X{h} and you gain X{h}, where X is the number of cards turned face-down this way.

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt,Keyword.Specialization],
    
    
    meta: [Meta.Deck],
  
    
    pitch: 3,
    power: 13,
    
    shorthands: [Shorthand.Poppers],
    
    
    
    
    
    
    specializations: [Hero.Viserai],
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Yunior Susanto"],
    cardIdentifier: "vexing-gloomblade-red",
    classes: [Class.Runeblade],
    defaultImage: "IAR117",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Chane,Hero.Viserai2,Hero.Vynnset],
    name: "Vexing Gloomblade",
    printings: [{
        artists: ["Yunior Susanto"],
      
      identifier: "IAR117",
      image: "IAR117",
      
      
      print: "IAR117",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Yunior Susanto"],
      foiling: Foiling.Rainbow,
      identifier: "IAR117",
      image: "IAR117-RF",
      
      
      print: "IAR117-Rainbow",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["IAR117"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR117",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Runeblade Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `You may play this from your banished zone.

**Usurp**

When this hits a hero, deal 2 arcane damage to any target.

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt,Keyword.Usurp],
    
    
    meta: [Meta.Deck,Meta.Rainbow],
  
    
    pitch: 1,
    power: 5,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Yunior Susanto"],
    cardIdentifier: "vexing-gloomblade-yellow",
    classes: [Class.Runeblade],
    defaultImage: "IAR118",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Chane,Hero.Viserai2,Hero.Vynnset],
    name: "Vexing Gloomblade",
    printings: [{
        artists: ["Yunior Susanto"],
      
      identifier: "IAR118",
      image: "IAR118",
      
      
      print: "IAR118",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Yunior Susanto"],
      foiling: Foiling.Rainbow,
      identifier: "IAR118",
      image: "IAR118-RF",
      
      
      print: "IAR118-Rainbow",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["IAR118"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR118",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Runeblade Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `You may play this from your banished zone.

**Usurp**

When this hits a hero, deal 2 arcane damage to any target.

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt,Keyword.Usurp],
    
    
    meta: [Meta.Deck,Meta.Rainbow],
  
    
    pitch: 2,
    power: 4,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Yunior Susanto"],
    cardIdentifier: "vexing-gloomblade-blue",
    classes: [Class.Runeblade],
    defaultImage: "IAR119",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Chane,Hero.Viserai2,Hero.Vynnset],
    name: "Vexing Gloomblade",
    printings: [{
        artists: ["Yunior Susanto"],
      
      identifier: "IAR119",
      image: "IAR119",
      
      
      print: "IAR119",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Yunior Susanto"],
      foiling: Foiling.Rainbow,
      identifier: "IAR119",
      image: "IAR119-RF",
      
      
      print: "IAR119-Rainbow",
      rarity: Rarity.Rare,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Rare],
    rarity: Rarity.Rare,
    setIdentifiers: ["IAR119"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR119",
    subtypes: [Subtype.Attack],
    types: [Type.Action],
    typeText: "Shadow Runeblade Action - Attack",

    
    
    cost: 3,
    defense: 3,
    
    functionalText: `You may play this from your banished zone.

**Usurp**

When this hits a hero, deal 2 arcane damage to any target.

**Blood Debt**`,
    
    
    
    
    keywords: [Keyword.BloodDebt,Keyword.Usurp],
    
    
    meta: [Meta.Deck,Meta.Rainbow],
  
    
    pitch: 3,
    power: 3,
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "viserai-between-worlds",
    classes: [Class.Runeblade],
    defaultImage: "IAR107",
    firstReleaseDate: "2026-09-18",
    legalFormats: [Format.Blitz,Format.Draft,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Viserai2],
    name: "Viserai, Between Worlds",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "IAR107",
      image: "IAR107",
      
      oppositeImage: "IAR107_BACK",
      print: "IAR107",
      rarity: Rarity.Basic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.Cold,
      identifier: "IAR107",
      image: "IAR107-MV",
      
      oppositeImage: "IAR107-MV_BACK",
      print: "IAR107-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel,Rarity.Rare],
    rarity: Rarity.Basic,
    setIdentifiers: ["IAR107","SBW001"],
    sets: [Release.UsurpTheShadowThrone,Release.ViseraiBetweenWorldsSilverAgeDeck],
    specialImage: "IAR107-MV",
    subtypes: [Subtype.Young],
    types: [Type.Hero],
    typeText: "Shadow Runeblade Hero - Young",

    
    
    createdExtras: ["runechant"],
    
    
    functionalText: `Whenever you create 1 or more Runechants, banish the top card of your deck. Then if you've created 3 or more Runechants this turn, **traverse**.`,
    
    hero: Hero.Viserai2,
    intellect: 4,
    
    keywords: [Keyword.Traverse],
    
    life: 20,
    meta: [Meta.Reprint],
  
    oppositeSideCardIdentifier: `viserai-usurper`,oppositeSideCardIdentifiers: ["viserai-usurper"],
    
    referencedCards: ["runechant"],
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  young: true
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "viserai-the-forsaken",
    classes: [Class.Runeblade],
    defaultImage: "IAR106",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open],
    legalHeroes: [Hero.Viserai2],
    name: "Viserai, the Forsaken",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "IAR106",
      image: "IAR106",
      
      oppositeImage: "IAR106_BACK",
      print: "IAR106",
      rarity: Rarity.Basic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.Cold,
      identifier: "IAR106",
      image: "IAR106-MV",
      
      oppositeImage: "IAR106-MV_BACK",
      print: "IAR106-Cold-Full Art",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel],
    rarity: Rarity.Basic,
    setIdentifiers: ["IAR106"],
    sets: [Release.UsurpTheShadowThrone],
    specialImage: "IAR106-MV",
    subtypes: [],
    types: [Type.Hero],
    typeText: "Shadow Runeblade Hero",

    
    
    createdExtras: ["runechant"],
    
    
    functionalText: `Whenever you create 1 or more Runechants, banish the top card of your deck. Then if you've created 3 or more Runechants this turn, **traverse**.`,
    
    hero: Hero.Viserai2,
    intellect: 4,
    
    keywords: [Keyword.Traverse],
    
    life: 40,
    
  
    oppositeSideCardIdentifier: `viserai-usurper`,oppositeSideCardIdentifiers: ["viserai-usurper"],
    
    referencedCards: ["runechant"],
    
    
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Nathaniel Himawan"],
    cardIdentifier: "viserai-usurper",
    classes: [Class.Runeblade],
    defaultImage: "IAR106_BACK",
    firstReleaseDate: "2026-09-18",
    legalFormats: [Format.ClassicConstructed,Format.GoldenAge,Format.LivingLegend,Format.Open],
    legalHeroes: [Hero.Viserai],
    name: "Viserai, Usurper",
    printings: [{
        artists: ["Nathaniel Himawan"],
      
      identifier: "IAR106",
      image: "IAR106_BACK",
      
      oppositeImage: "IAR106",
      print: "IAR106-Back",
      rarity: Rarity.Basic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Nathaniel Himawan"],
      
      identifier: "IAR107",
      image: "IAR107_BACK",
      
      oppositeImage: "IAR107",
      print: "IAR107-Back",
      rarity: Rarity.Basic,
      set: Release.UsurpTheShadowThrone,
      
      
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.Cold,
      identifier: "IAR106",
      image: "IAR106-MV_BACK",
      
      oppositeImage: "IAR106-MV",
      print: "IAR106-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },{
        artists: ["Nathaniel Himawan"],
      foiling: Foiling.Cold,
      identifier: "IAR107",
      image: "IAR107-MV_BACK",
      
      oppositeImage: "IAR107-MV",
      print: "IAR107-Cold-Full Art-Back",
      rarity: Rarity.Marvel,
      set: Release.UsurpTheShadowThrone,
      
      treatment: Treatment.FA,treatments: [Treatment.FA],
    },],
    rarities: [Rarity.Basic,Rarity.Marvel,Rarity.Rare],
    rarity: Rarity.Basic,
    setIdentifiers: ["IAR106","IAR107","SBW001"],
    sets: [Release.UsurpTheShadowThrone,Release.ViseraiBetweenWorldsSilverAgeDeck],
    specialImage: "IAR107-MV_BACK",
    subtypes: [Subtype.Demon],
    types: [Type.Hero],
    typeText: "Shadow Runeblade Hero - Demon",

    
    
    
    
    
    functionalText: `The first attack action card with blood debt you play each turn gets **go again**.

At the beginning of each end phase, if you've created or activated a Gate to i'Arathael this turn, you may **traverse**.`,
    
    hero: Hero.Viserai,
    intellect: 4,
    isCardBack: true,
    keywords: [Keyword.GoAgain,Keyword.Traverse],
    
    
    meta: [Meta.Reprint],
  
    oppositeSideCardIdentifier: `viserai-the-forsaken`,oppositeSideCardIdentifiers: ["viserai-the-forsaken","viserai-between-worlds"],
    
    referencedCards: ["gate-to-iarathael"],
    
    
    
    
    
    
    specialLife: "*",
    
    
    talents: [Talent.Shadow],
  
  
  },{
    artists: ["Jessketchin"],
    cardIdentifier: "vox-necropolis",
    classes: [Class.Necromancer],
    defaultImage: "IAR055",
    firstReleaseDate: "2026-09-25",
    legalFormats: [Format.Blitz,Format.ClassicConstructed,Format.Draft,Format.GoldenAge,Format.LivingLegend,Format.Open,Format.Sealed,Format.SilverAge,Format.UltimatePitFight],
    legalHeroes: [Hero.Malice],
    name: "Vox Necropolis",
    printings: [{
        artists: ["Jessketchin"],
      
      identifier: "IAR055",
      image: "IAR055",
      
      
      print: "IAR055",
      rarity: Rarity.Basic,
      set: Release.UsurpTheShadowThrone,
      
      
    },],
    rarities: [Rarity.Basic,Rarity.Common],
    rarity: Rarity.Basic,
    setIdentifiers: ["AMA002","IAR055"],
    sets: [Release.ArmoryDeckMalice,Release.UsurpTheShadowThrone],
    specialImage: "IAR055",
    subtypes: [Subtype.TwoHanded,Subtype.Staff],
    types: [Type.Weapon],
    typeText: "Shadow Necromancer Weapon - Staff (2H)",

    
    
    
    
    
    functionalText: `During your action phase, zombies you've played from a graveyard or banished zone enter the arena tapped and get "When this enteres the arena, **attack** with it."

Zombies you control get "**Action** - {r}, {t}: **Attack**"`,
    
    
    
    
    
    
    
    meta: [Meta.Arena,Meta.Reprint],
  
    
    
    
    
    shorthands: [Shorthand.Tap],
    
    
    
    
    
    
    
    talents: [Talent.Shadow],
  
  
  }];

  export const cards: Card[] =  [
  ...cards1,
  ];
  