export interface Card {
  artists: string[];
  cardIdentifier: string;
  classes: Class[];
  defaultImage: string;
  name: string;
  printings: Printing[];
  rarities: Rarity[];
  rarity: Rarity;
  setIdentifiers: string[];
  sets: Release[];
  specialImage: string;
  subtypes: Subtype[];
  types: Type[];
  typeText: string;

  cost?: number;
  defense?: number;
  functionalText?: string;
  fusions?: Fusion[];
  life?: number;
  hero?: Hero;
  intellect?: number;
  isCardBack?: boolean;
  keywords?: Keyword[];
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

export interface Printing {
  edition?: ReleaseEdition;
  foiling?: Foiling;
  identifier: string;
  image: string;
  // print: string;
  set: Release;
  treatment?: Treatment;
}

export enum Foiling {
  C = "Cold",
  G = "Gold",
  R = "Rainbow",
}

export enum Treatment {
  AB = "Alternate Border",
  AA = "Alternate Art",
  AT = "Alternate Text",
  DS = "Double Sided",
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
  Draft = "Draft",
  Open = "Open",
  Sealed = "Sealed",
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
  Outsiders = "Outsiders",
  TalesOfAria = "Tales of Aria",
  Uprising = "Uprising",
  WelcomeToRathe = "Welcome to Rathe",

  // Hero/blitz decks
  BoltynBlitzDeck = "Boltyn Blitz Deck",
  BriarBlitzDeck = "Briar Blitz Deck",
  BravoBlitzDeck = "Bravo Blitz Deck",
  ChaneBlitzDeck = "Chane Blitz Deck",
  ClassicBattlesRhinarDorinthea = "Classic Battles: Rhinar vs Dorinthea",
  DromaiBlitzDeck = "Dromai Blitz Deck",
  DorintheaHeroDeck = "Dorinthea Hero Deck",
  FaiBlitzDeck = "Fai Blitz Deck",
  IraWelcomeDeck = "Ira Welcome Deck",
  KatsuHeroDeck = "Katsu Hero Deck",
  LeviaBlitzDeck = "Levia Blitz Deck",
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
  Unlimited = "Unlimited",
  Promo = "Promo",
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
  Quiver = "Quiver",
  Rock = "Rock",
  Shuriken = "Shuriken",
  Scepter = "Scepter",
  Scythe = "Scythe",
  Staff = "Staff",
  Sword = "Sword",
  Trap = "Trap",
  Young = "Young",
}

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
  Riptide = "Riptide",
  Ruudi = "Ruu’di",
  Shiyana = "Shiyana",
  Taipanis = "Taipanis",
  Taylor = "Taylor",
  Uzuri = "Uzuri",
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
  Unfreeze = "Unfreeze",
  Ward = "Ward",
}
