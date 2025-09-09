
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
    artists: [],
    cardIdentifier: "concealed-object-blue",
    classes: [Class.NotClassed],
    defaultImage: "SUP097",
    legalFormats: [Format.Blitz,Format.BlitzLivingLegend,Format.Clash,Format.ClassicConstructed,Format.ClassicConstructedLivingLegend,Format.Draft,Format.Open,Format.ProjectBlue,Format.Sealed,Format.UltimatePitFight],
    legalHeroes: [Hero.Lyath,Hero.RKO],
    name: "Concealed Object",
    printings: [{
        artists: [],
      
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
  
  
  }];
  const cards2: Card[] =  [{
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
  
  
  }];
  const cards3: Card[] =  [{
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
  
  
  }];
  const cards4: Card[] =  [{
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
  