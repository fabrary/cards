export interface Card {
  artists: string[];
  cardIdentifier: string;
  classes: Class[];
  defaultImage?: string;
  legalFormats: Format[];
  legalHeroes: Hero[];
  name: string;
  printings: Printing[];
  // TODO deprecate this field
  rarities: Rarity[];
  rarity: Rarity;
  setIdentifiers: string[];
  sets: Release[];
  specialImage?: string;
  subtypes: Subtype[];
  types: Type[];
  typeText: string;

  abbreviations?: string[];
  arcane?: number;
  bannedFormats?: Format[];
  bonds?: Bond[];
  cost?: number;
  defense?: number;
  flows?: Flow[];
  functionalText?: string;
  fusions?: Fusion[];
  life?: number;
  hero?: Hero;
  intellect?: number;
  isCardBack?: boolean;
  keywords?: Keyword[];
  legalOverrides?: LegalOverride[];
  meta?: Meta[];
  metatypes?: Metatype[];
  oppositeSideCardIdentifier?: string;
  oppositeSideCardIdentifiers?: string[];
  pitch?: number;
  power?: number;
  restrictedFormats?: Format[];
  specialArcane?: string;
  specialCost?: string;
  specialDefense?: string;
  specialLife?: string;
  specialPower?: string;
  specializations?: Hero[];
  talents?: Talent[];
  traits?: Trait[];
  young?: boolean;
}

export interface DoubleSidedCard extends Card {
  oppositeSideCard?: Card;
}

export interface LegalOverride {
  format: Format;
  heroes: Hero[];
}

export interface Printing {
  artists: string[];
  edition?: ReleaseEdition;
  foiling?: Foiling;
  identifier: string;
  image?: string;
  isExpansionSlot?: boolean;
  oppositeImage?: string;
  print: string;
  rarity: Rarity;
  set: Release;
  tcgplayer?: {
    productId?: string;
    url?: string;
  };
  // TODO deprecate
  treatment?: Treatment;
  treatments?: Treatment[];
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

export enum Bond {
  Earth = "Earth",
}

export enum Flow {
  Lightning = "Lightning",
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

export enum Meta {
  Expansion = "Expansion slot",
  Rainbow = "Rainbow",
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
  Rosetta = "Rosetta",
  TalesOfAria = "Tales of Aria",
  TheHunted = "The Hunted",
  Uprising = "Uprising",
  WelcomeToRathe = "Welcome to Rathe",

  // Hero/blitz/armory decks
  ArmoryDeckAurora = "Armory Deck: Aurora",
  ArmoryDeckAzalea = "Armory Deck: Azalea",
  ArmoryDeckBoltyn = "Armory Deck: Boltyn",
  ArmoryDeckDash = "Armory Deck: Dash",
  ArmoryDeckKayo = "Armory Deck: Kayo",
  ArmoryDeckMaxx = "Armory Deck: Maxx",
  ArmoryDeckOriginsJarl = "Armory Deck Origins: Jarl",

  // Blitz decks
  ArakniBlitzDeck = "Arakni Blitz Deck",
  ArakniBlitzDeckARK = "Arakni Hunted Blitz Deck",
  AuroraBlitzDeck = "Aurora Blitz Deck",
  AzaleaBlitzDeck = "Azalea Blitz Deck",
  BenjiBlitzDeck = "Benji Blitz Deck",
  BetsyBlitzDeck = "Betsy Blitz Deck",
  BoltynBlitzDeck = "Boltyn Blitz Deck",
  BriarBlitzDeck = "Briar Blitz Deck",
  ChaneBlitzDeck = "Chane Blitz Deck",
  DromaiBlitzDeck = "Dromai Blitz Deck",
  EnigmaBlitzDeck = "Enigma Blitz Deck",
  FaiBlitzDeck = "Fai Blitz Deck",
  FlorianBlitzDeck = "Florian Blitz Deck",
  KassaiBlitzDeck = "Kassai Blitz Deck",
  KatsuBlitzDeck = "Katsu Blitz Deck",
  KayoBlitzDeck = "Kayo Blitz Deck",
  LeviaBlitzDeck = "Levia Blitz Deck",
  LexiBlitzDeck = "Lexi Blitz Deck",
  NuuBlitzDeck = "Nuu Blitz Deck",
  OldhimBlitzDeck = "Oldhim Blitz Deck",
  OlympiaBlitzDeck = "Olympia Blitz Deck",
  OscilioBlitzDeck = "Oscilio Blitz Deck",
  PrismBlitzDeck = "Prism Blitz Deck",
  RhinarBlitzDeck = "Rhinar Blitz Deck",
  RiptideBlitzDeck = "Riptide Blitz Deck",
  UzuriBlitzDeck = "Uzuri Blitz Deck",
  VerdanceBlitzDeck = "Verdance Blitz Deck",
  VictorBlitzDeck = "Victor Blitz Deck",
  ZenBlitzDeck = "Zen Blitz Deck",

  // 1st strike decks
  FirstStrikeAurora = "1st Strike: Aurora",
  FirstStrikeTerra = "1st Strike: Terra",

  // Hero decks
  BravoHeroDeck = "Bravo Hero Deck",
  DorintheaHeroDeck = "Dorinthea Hero Deck",
  KatsuHeroDeck = "Katsu Hero Deck",
  RhinarHeroDeck = "Rhinar Hero Deck",

  // Other decks
  ClassicBattlesRhinarDorinthea = "Classic Battles: Rhinar vs Dorinthea",
  IraWelcomeDeck = "Ira Welcome Deck",
  RoundTheTable = "Round the Table: TCC x LSS",

  // One-offs
  GEM = "GEM",
  Promos = "Promos",
}

export enum ReleaseEdition {
  Alpha = "Alpha",
  First = "First",
  Unlimited = "Unlimited",
  Promo = "Promo",
}

export enum Talent {
  Chaos = "Chaos",
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

export enum Trait {
  AgentOfChaos = "Agent of Chaos",
}

export enum Metatype {
  Arakni = "Arakni",
  Rosetta = "Rosetta",
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
  Macro = "Macro",
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
  Polearm = "Polearm",
  Quiver = "Quiver",
  Rock = "Rock",
  Shuriken = "Shuriken",
  Scepter = "Scepter",
  Scroll = "Scroll",
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
  Aurora = "Aurora",
  Azalea = "Azalea",
  Benji = "Benji",
  Betsy = "Betsy",
  Blaze = "Blaze",
  Boltyn = "Boltyn",
  Bravo = "Bravo",
  Brevant = "Brevant",
  Briar = "Briar",
  Brutus = "Brutus",
  Chane = "Chane",
  Cindra = "Cindra",
  Crackni = "Crackni",
  Dash = "Dash",
  DataDoll = "Data Doll",
  Dorinthea = "Dorinthea",
  Dromai = "Dromai",
  Emperor = "Emperor",
  Enigma = "Enigma",
  Fai = "Fai",
  Fang = "Fang",
  Florian = "Florian",
  Genis = "Genis",
  Ira = "Ira",
  Iyslander = "Iyslander",
  Jarl = "Jarl",
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
  Oscilio = "Oscilio",
  Prism = "Prism",
  Rhinar = "Rhinar",
  Riptide = "Riptide",
  Ruudi = "Ruu'di",
  Shiyana = "Shiyana",
  Slippy = "Slippy",
  Squizzy = "Squizzy",
  Starvo = "Starvo",
  Taipanis = "Taipanis",
  Taylor = "Taylor",
  Teklovossen = "Teklovossen",
  Terra = "Terra",
  Theryon = "Theryon",
  Uzuri = "Uzuri",
  Valda = "Valda",
  Verdance = "Verdance",
  Victor = "Victor",
  Vynnset = "Vynnset",
  Viserai = "Viserai",
  Yorick = "Yorick",
  Yoji = "Yoji",
  Zen = "Zen",
}

export enum Keyword {
  Ambush = "Ambush",
  Amp = "Amp",
  ArcaneBarrier = "Arcane Barrier",
  ArcaneShelter = "Arcane Shelter",
  Awaken = "Awaken",
  Battleworn = "Battleworn",
  BeatChest = "Beat Chest",
  BladeBreak = "Blade Break",
  BloodDebt = "Blood Debt",
  Boost = "Boost",
  Bond = "Bond",
  Channel = "Channel",
  Charge = "Charge",
  Clash = "Clash",
  Cloaked = "Cloaked",
  Combo = "Combo",
  Contract = "Contract",
  Crank = "Crank",
  Crush = "Crush",
  Decompose = "Decompose",
  Dominate = "Dominate",
  Ephemeral = "Ephemeral",
  Essence = "Essence",
  EvoUpgrade = "Evo Upgrade",
  Flow = "Flow",
  Freeze = "Freeze",
  Fusion = "Fusion",
  Galvanize = "Galvanize",
  GoAgain = "Go again",
  Guardwell = "Guardwell",
  Heave = "Heave",
  Heavy = "Heavy",
  Intimidate = "Intimidate",
  Legendary = "Legendary",
  Mark = "Mark",
  Material = "Material",
  Meld = "Meld",
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
  Retrieve = "Retrieve",
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
