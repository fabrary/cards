
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
      
      
    },],
    rarities: [Rarity.Majestic],
    rarity: Rarity.Majestic,
    setIdentifiers: ["SUP254"],
    sets: [Release.SuperSlam],
    specialImage: "SUP254",
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
    setIdentifiers: ["SUP029"],
    sets: [Release.SuperSlam],
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
  
  
  }];
  const cards2: Card[] =  [{
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
      
      
    },],
    rarities: [Rarity.Basic],
    rarity: Rarity.Basic,
    setIdentifiers: ["SUP064"],
    sets: [Release.SuperSlam],
    specialImage: "SUP064",
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
  }];
  const cards3: Card[] =  [{
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
      
      
    },],
    rarities: [Rarity.Basic],
    rarity: Rarity.Basic,
    setIdentifiers: ["SUP072"],
    sets: [Release.SuperSlam],
    specialImage: "SUP072",
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
    
    
    
    
    
    
    
    meta: [Meta.Rainbow],
  
    
    pitch: 3,
    power: 1,
    
    
    
    
    
    
    
    
    
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
  
  
  }];
  const cards4: Card[] =  [{
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
      
      
    },],
    rarities: [Rarity.Basic,Rarity.Rare],
    rarity: Rarity.Basic,
    setIdentifiers: ["APS002","SUP010"],
    sets: [Release.ArmoryDeckPleiades,Release.SuperSlam],
    specialImage: "SUP010",
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
    },],
    rarities: [Rarity.Basic,Rarity.Marvel,Rarity.Promo],
    rarity: Rarity.Basic,
    setIdentifiers: ["HER147","SUP009"],
    sets: [Release.Promos,Release.SuperSlam],
    specialImage: "SUP009_V2",
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
    setIdentifiers: ["FAB371","LGS423","SUP013"],
    sets: [Release.Promos,Release.SuperSlam],
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
      
      
    },],
    rarities: [Rarity.Basic],
    rarity: Rarity.Basic,
    setIdentifiers: ["SUP002"],
    sets: [Release.SuperSlam],
    specialImage: "SUP002",
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
    setIdentifiers: ["SUP014"],
    sets: [Release.SuperSlam],
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
    setIdentifiers: ["SUP016"],
    sets: [Release.SuperSlam],
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
  
  
  }];

  export const cards: Card[] =  [
    ...cards1,
    ...cards2,
    ...cards3,
    ...cards4,
  ];
  