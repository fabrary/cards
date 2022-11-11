export interface Card {
  artists: string[];
  cardIdentifier: string;
  classes: Class[];
  defaultImageName: string;
  images: Image[];
  name: string;
  rarity: Rarity;
  setIdentifiers: string[];
  sets: Release[];
  specialImageName: string;
  subtypes: Subtype[];
  types: Type[];
  typeText: string;

  cost?: number;
  defense?: number;
  functionalText?: string;
  fusions?: Fusion[];
  hero?: Hero;
  intellect?: number;
  isCardBack?: boolean;
  keywords?: Keyword[];
  life?: number;
  oppositeSideCardIdentifier?: string;
  pitch?: number;
  power?: number;
  restrictedFormats?: Format[];
  specialCost?: string;
  specialDefense?: string;
  specialPower?: string;
  specializations?: Hero[];
  talents?: Talent[];
  young?: boolean;
}

export interface Image {
  art?: Art;
  edition: ReleaseEdition;
  identifier: string;
  name: string;
  set: Release;
  treatment?: Treatment;
}

export enum Treatment {
  AA = "Alternate Art",
  EA = "Extended Art",
  FA = "Full Art",
}

export enum Class {
  NotClassed = "NotClassed",
  Generic = "Generic",
  Adjudicator = "Adjudicator",
  Assassin = "Assassin",
  Bard = "Bard",
  Brute = "Brute",
  Guardian = "Guardian",
  Illusionist = "Illusionist",
  Mechanologist = "Mechanologist",
  Merchant = "Merchant",
  Ninja = "Ninja",
  Ranger = "Ranger",
  Runeblade = "Runeblade",
  Shapeshifter = "Shapeshifter",
  Warrior = "Warrior",
  Wizard = "Wizard",
}

export enum Format {
  Blitz = "Blitz",
  Clash = "Clash",
  ClassicConstructed = "Classic Constructed",
  Commoner = "Commoner",
  UltimatePitFight = "Ultimate Pit Fight",
}

export enum Fusion {
  Earth = "Earth",
  Ice = "Ice",
  Lightning = "Lightning",
}

export enum Rarity {
  Token = "Token",
  Common = "Common",
  Rare = "Rare",
  SuperRare = "Super Rare",
  Majestic = "Majestic",
  Marvel = "Marvel",
  Legendary = "Legendary",
  Fabled = "Fabled",
  Promo = "Promo",
}

export enum Release {
  // Full sets
  ArcaneRising = "Arcane Rising",
  CrucibleOfWar = "Crucible of War",
  Dynasty = "Dynasty",
  Everfest = "Everfest",
  HeroDeck = "Hero Deck",
  HistoryPack1 = "History Pack 1",
  Monarch = "Monarch",
  TalesOfAria = "Tales of Aria",
  Uprising = "Uprising",
  WelcomeToRathe = "Welcome to Rathe",

  // Hero/blitz decks
  BoltynBlitzDeck = "Boltyn Blitz Deck",
  BriarBlitzDeck = "Briar Blitz Deck",
  BravoBlitzDeck = "Bravo Blitz Deck",
  ChaneBlitzDeck = "Chane Blitz Deck",
  ClassicBattlesRhinarDorinthea = "Classic Battles: Rhinar vs Dorinthea",
  DromaiBlitzDeck = "Dromai Hero Deck",
  DorintheaHeroDeck = "Dorinthea Hero Deck",
  FaiBlitzDeck = "Fai Blitz Deck",
  IraWelcomeDeck = "Ira Welcome Deck",
  KatsuHeroDeck = "Katsu Hero Deck",
  LeviaBlitzDeck = "LeviaBlitzDeck",
  LexiBlitzDeck = "Lexi Blitz Deck",
  OldhimBlitzDeck = "Oldhim Blitz Deck",
  PrismBlitzDeck = "Prism Blitz Deck",
  RhinarHeroDeck = "Rhinar Hero Deck",

  // One-offs
  Promos = "Promos",
}

export enum ReleaseEdition {
  Alpha = "Alpha",
  First = "First",
  Promo = "Promo",
  Unlimited = "Unlimited",
}

export enum Talent {
  NotTalented = "Not talented",
  Royal = "Royal",
  Draconic = "Draconic",
  Earth = "Earth",
  Elemental = "Elemental",
  Ice = "Ice",
  Light = "Light",
  Lightning = "Lightning",
  Shadow = "Shadow",
}

export enum Type {
  Action = "Action",
  AttackReaction = "Attack Reaction",
  DefenseReaction = "Defense Reaction",
  Equipment = "Equipment",
  Hero = "Hero",
  Instant = "Instant",
  Mentor = "Mentor",
  PlaceholderCard = "Placeholder Card",
  Resource = "Resource",
  Token = "Token",
  Weapon = "Weapon",
}

export enum Subtype {
  OneHanded = "1H",
  TwoHanded = "2H",
  Affliction = "Affliction",
  Ally = "Ally",
  Arms = "Arms",
  Arrow = "Arrow",
  Ash = "Ash",
  Attack = "Attack",
  Aura = "Aura",
  Axe = "Axe",
  Book = "Book",
  Bow = "Bow",
  Chest = "Chest",
  Claw = "Claw",
  Club = "Club",
  Construct = "Construct",
  Dagger = "Dagger",
  Demon = "Demon",
  Dragon = "Dragon",
  Flail = "Flail",
  Gem = "Gem",
  Gun = "Gun",
  Hammer = "Hammer",
  Head = "Head",
  Invocation = "Invocation",
  Item = "Item",
  Landmark = "Landmark",
  Lute = "Lute",
  Legs = "Legs",
  NonAttack = "Non-Attack",
  OffHand = "Off-Hand",
  Orb = "Orb",
  Pistol = "Pistol",
  Rock = "Rock",
  Scepter = "Scepter",
  Scythe = "Scythe",
  Staff = "Staff",
  Sword = "Sword",
  Trap = "Trap",
  Young = "Young",
}

// export enum ActionSubType {}
// Ally = "Ally",
// Ash = "Ash",
// Attack = "Attack",
// Arrow = "Arrow",
// Aura = "Aura",
// Construct = "Construct",
// Invocation = "Invocation",
// Item = "Item",
// Landmark = "Landmark",
// NonAttack = "Non-Attack",
// Trap = "Trap",

// export enum EquipmentSubType {}
// Arms = "Arms",
// Chest = "Chest",
// Head = "Head",
// Item = "Item",
// Legs = "Legs",
// OffHand = "Off-Hand",

// export enum HeroSubType {}
// Young = "Young",

// export enum PlaceholderSubType {}
// Invocation = "Invocation",

// export enum ResourceSubType {}
// Gem = "Gem",

// export enum TokenSubType {}
// Ally = "Ally",
// Ash = "Ash",
// Aura = "Aura",
// Item = "Item",

// export enum WeaponSubType {}
// Axe = "Axe",
// Book = "Book",
// Bow = "Bow",
// Claw = "Claw",
// Club = "Club",
// Dagger = "Dagger",
// Flail = "Flail",
// Gun = "Gun",
// Hammer = "Hammer",
// Lute = "Lute",
// Orb = "Orb",
// Pistol = "Pistol",
// Rock = "Rock",
// Scepter = "Scepter",
// Scythe = "Scythe",
// Staff = "Staff",
// Sword = "Sword",

// export enum HandsRequired {}
// OneHanded = "1H",
// TwoHanded = "2H",

export enum Hero {
  Arakni = "Arakni",
  Azalea = "Azalea",
  Benji = "Benji",
  Boltyn = "Boltyn",
  Bravo = "Bravo",
  Briar = "Briar",
  Chane = "Chane",
  Dash = "Dash",
  DataDoll = "Data Doll",
  Dorinthea = "Dorinthea",
  Dromai = "Dromai",
  Emperor = "Emperor",
  Fai = "Fai",
  GenisWotchuneed = "Genis Wotchuneed",
  Ira = "Ira",
  Iyslander = "Iyslander",
  Kano = "Kano",
  Kassai = "Kassai",
  Katsu = "Katsu",
  Kavdaen = "Kavdaen",
  Kayo = "Kayo",
  Levia = "Levia",
  Lexi = "Lexi",
  Oldhim = "Oldhim",
  Prism = "Prism",
  Rhinar = "Rhinar",
  Ruudi = "Ruu’di",
  Shiyana = "Shiyana",
  Taipanis = "Taipanis",
  Taylor = "Taylor",
  Valda = "Valda",
  Viserai = "Viserai",
  Yorick = "Yorick",
  Yoji = "Yoji",
}

export enum Keyword {
  ArcaneBarrier = "Arcane Barrier",
  Battleworn = "Battleworn",
  BladeBreak = "Blade Break",
  BloodDebt = "Blood Debt",
  Boost = "Boost",
  Channel = "Channel",
  Charge = "Charge",
  Combo = "Combo",
  Contract = "Contract",
  Crush = "Crush",
  Dominate = "Dominate",
  Ephemeral = "Ephemeral",
  Essence = "Essence",
  Freeze = "Freeze",
  Fusion = "Fusion",
  GoAgain = "Go again",
  Heave = "Heave",
  Intimidate = "Intimidate",
  Legendary = "Legendary",
  Material = "Material",
  Mentor = "Mentor",
  Negate = "Negate",
  Opt = "Opt",
  Overpower = "Overpower",
  Piercing = "Piercing",
  Phantasm = "Phantasm",
  Quell = "Quell",
  Reload = "Reload",
  Reprise = "Reprise",
  Rupture = "Rupture",
  Specialization = "Specialization",
  Spectra = "Spectra",
  Spellvoid = "Spellvoid",
  Surge = "Surge",
  Temper = "Temper",
  Transform = "Transform",
  Thaw = "Thaw",
  Unfreeze = "Unfreeze",
  Ward = "Ward",
}

export enum Art {
  ColdFoil = "Cold foil",
  GoldColdFoil = "Gold cold foil",
  RainbowFoil = "Rainbow foil",
  Standard = "Standard",
}
