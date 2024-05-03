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

  bannedFormats?: Format[];
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
  specialLife?: string;
  specialPower?: string;
  specializations?: Hero[];
  talents?: Talent[];
  young?: boolean;
}

export interface DoubleSidedCard extends Card {
  oppositeSideCard?: Card;
}

export interface Printing {
  artist: string;
  edition?: ReleaseEdition;
  foiling?: Foiling;
  identifier: string;
  image: string;
  print: string;
  set: Release;
  tcgplayer?: {
    productId?: string;
    url?: string;
  };
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
  // DS = "Double Sided",
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
  BlitzLivingLegend = "Blitz (Living Legend)",
  Clash = "Clash",
  ClassicConstructed = "Classic Constructed",
  ClassicConstructedLivingLegend = "Classic Constructed (Living Legend)",
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
  BrightLights = "Bright Lights",
  CrucibleOfWar = "Crucible of War",
  DuskTillDawn = "Dusk till Dawn",
  Dynasty = "Dynasty",
  Everfest = "Everfest",
  HeavyHitters = "Heavy Hitters",
  HistoryPack1 = "History Pack 1",
  Monarch = "Monarch",
  Outsiders = "Outsiders",
  PartTheMistveil = "Part the Mistveil",
  TalesOfAria = "Tales of Aria",
  Uprising = "Uprising",
  WelcomeToRathe = "Welcome to Rathe",

  // Hero/blitz/armory decks
  ArmoryDeckKayo = "Armory Deck: Kayo",
  ArmoryDeckBoltyn = "Armory Deck: Boltyn",

  // Blitz decks
  ArakniBlitzDeck = "Arakni Blitz Deck",
  AzaleaBlitzDeck = "Azalea Blitz Deck",
  BenjiBlitzDeck = "Benji Blitz Deck",
  BetsyBlitzDeck = "Betsy Blitz Deck",
  BoltynBlitzDeck = "Boltyn Blitz Deck",
  BriarBlitzDeck = "Briar Blitz Deck",
  BravoBlitzDeck = "Bravo Blitz Deck",
  ChaneBlitzDeck = "Chane Blitz Deck",
  DromaiBlitzDeck = "Dromai Blitz Deck",
  FaiBlitzDeck = "Fai Blitz Deck",
  KassaiBlitzDeck = "Kassai Blitz Deck",
  KatsuBlitzDeck = "Katsu Blitz Deck",
  KayoBlitzDeck = "Kayo Blitz Deck",
  LeviaBlitzDeck = "Levia Blitz Deck",
  LexiBlitzDeck = "Lexi Blitz Deck",
  OldhimBlitzDeck = "Oldhim Blitz Deck",
  OlympiaBlitzDeck = "Olympia Blitz Deck",
  PrismBlitzDeck = "Prism Blitz Deck",
  RhinarBlitzDeck = "Rhinar Blitz Deck",
  RiptideBlitzDeck = "Riptide Blitz Deck",
  UzuriBlitzDeck = "Uzuri Blitz Deck",
  VictorBlitzDeck = "Victor Blitz Deck",

  // Hero decks
  DorintheaHeroDeck = "Dorinthea Hero Deck",
  KatsuHeroDeck = "Katsu Hero Deck",
  RhinarHeroDeck = "Rhinar Hero Deck",

  // Other decks
  ClassicBattlesRhinarDorinthea = "Classic Battles: Rhinar vs Dorinthea",
  IraWelcomeDeck = "Ira Welcome Deck",
  RoundTheTable = "Round the Table",

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
  Draconic = "Draconic",
  Earth = "Earth",
  Elemental = "Elemental",
  Ice = "Ice",
  Light = "Light",
  Lightning = "Lightning",
  Mystic = "Mystic",
  Royal = "Royal",
  Shadow = "Shadow",
}

export enum Type {
  Action = "Action",
  AttackReaction = "Attack Reaction",
  Block = "Block",
  DefenseReaction = "Defense Reaction",
  DemiHero = "Demi-Hero",
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
  Angel = "Angel",
  Arms = "Arms",
  Arrow = "Arrow",
  Ash = "Ash",
  Attack = "Attack",
  Aura = "Aura",
  Axe = "Axe",
  Base = "Base",
  Book = "Book",
  Bow = "Bow",
  Chest = "Chest",
  Chi = "Chi",
  Claw = "Claw",
  Club = "Club",
  Construct = "Construct",
  Dagger = "Dagger",
  Demon = "Demon",
  Dragon = "Dragon",
  Evo = "Evo",
  Fiddle = "Fiddle",
  Figment = "Figment",
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
  Song = "Song",
  Staff = "Staff",
  Sword = "Sword",
  Trap = "Trap",
  Wrench = "Wrench",
  Young = "Young",
}

export enum Hero {
  Arakni = "Arakni",
  Azalea = "Azalea",
  Benji = "Benji",
  Betsy = "Betsy",
  Boltyn = "Boltyn",
  Bravo = "Bravo",
  Brevant = "Brevant",
  Briar = "Briar",
  Brutus = "Brutus",
  Chane = "Chane",
  Dash = "Dash",
  DataDoll = "Data Doll",
  Dorinthea = "Dorinthea",
  Dromai = "Dromai",
  Emperor = "Emperor",
  Enigma = "Enigma",
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
  Maxx = "Maxx",
  Melody = "Melody",
  Nuu = "Nuu",
  Oldhim = "Oldhim",
  Olympia = "Olympia",
  Prism = "Prism",
  Rhinar = "Rhinar",
  Riptide = "Riptide",
  Ruudi = "Ruu'di",
  Shiyana = "Shiyana",
  Squizzy = "Squizzy",
  Taipanis = "Taipanis",
  Taylor = "Taylor",
  Teklovossen = "Teklovossen",
  Theryon = "Theryon",
  Uzuri = "Uzuri",
  Valda = "Valda",
  Victor = "Victor",
  Vynnset = "Vynnset",
  Viserai = "Viserai",
  Yorick = "Yorick",
  Yoji = "Yoji",
  Zen = "Zen",
}

export enum Keyword {
  Ambush = "Ambush",
  ArcaneBarrier = "Arcane Barrier",
  Awaken = "Awaken",
  Battleworn = "Battleworn",
  BeatChest = "Beat Chest",
  BladeBreak = "Blade Break",
  BloodDebt = "Blood Debt",
  Boost = "Boost",
  Channel = "Channel",
  Charge = "Charge",
  Clash = "Clash",
  Cloaked = "Cloaked",
  Combo = "Combo",
  Contract = "Contract",
  Crank = "Crank",
  Crush = "Crush",
  Dominate = "Dominate",
  Ephemeral = "Ephemeral",
  Essence = "Essence",
  EvoUpgrade = "Evo Upgrade",
  Freeze = "Freeze",
  Fusion = "Fusion",
  Galvanize = "Galvanize",
  GoAgain = "Go again",
  Guardwell = "Guardwell",
  Heave = "Heave",
  Intimidate = "Intimidate",
  Legendary = "Legendary",
  Material = "Material",
  Modular = "Modular",
  Mirage = "Mirage",
  Negate = "Negate",
  Opt = "Opt",
  Overpower = "Overpower",
  Pairs = "Pairs",
  Piercing = "Piercing",
  Phantasm = "Phantasm",
  Protect = "Protect",
  Quell = "Quell",
  Reload = "Reload",
  Reprise = "Reprise",
  RuneGate = "Rune Gate",
  Rupture = "Rupture",
  Scrap = "Scrap",
  Solflare = "Solflare",
  Specialization = "Specialization",
  Spectra = "Spectra",
  Spellvoid = "Spellvoid",
  Stealth = "Stealth",
  Surge = "Surge",
  Temper = "Temper",
  Tower = "Tower",
  Transform = "Transform",
  Transcend = "Transcend",
  Universal = "Universal",
  Unfreeze = "Unfreeze",
  Unity = "Unity",
  Wager = "Wager",
  Ward = "Ward",
}
