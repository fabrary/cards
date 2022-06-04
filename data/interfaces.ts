export interface Card {
  class: Class;
  identifier: string;
  functionalText: string;
  defaultImageUrl: string;
  images: Image[];
  keywords: Keyword[];
  name: string;
  rarity: Rarity;
  restrictedFormats: Format[];
  setIdentifiers: string[];
  sets: Release[];
  type: Type;
  typeText: string;
}

export interface Image {
  art?: Art;
  edition: ReleaseEdition;
  identifier: string;
  set: Release;
  url: string;
}

export interface ActionCard extends Card {
  cost?: number;
  defense?: number;
  fusions?: Fusion[];
  pitch?: number;
  power?: number;
  talents?: Talent[];
  specialCost?: string;
  specialDefense?: string;
  specialPower?: string;
  specializations?: Hero[];
  subType?: ActionSubType;
}

export interface EquipmentCard extends Card {
  defense?: number;
  handsRequired?: HandsRequired;
  talents?: Talent[];
  subType: EquipmentSubType;
}

export interface HeroCard extends Card {
  intellect: number;
  hero: Hero;
  life: number;
  talents?: Talent[];
  young: boolean;
}

export interface MentorCard extends Card {
  defense?: number;
}

export interface ResourceCard extends Card {
  pitch?: number;
  subType?: ResourceSubType;
}

export interface TokenCard extends Card {
  talents?: Talent[];
  subType: TokenSubType;
}

export interface WeaponCard extends Card {
  handsRequired: HandsRequired;
  power?: number;
  specialPower?: string;
  talents?: Talent[];
  subType: WeaponSubType;
}

export enum Class {
  NotClassed = "NotClassed",
  Generic = "Generic",
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
  ClassicConstructed = "Classic Constructed",
  Commoner = "Commoner",
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
  DorintheaHeroDeck = "Dorinthea Hero Deck",
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
  AttackAction = "Attack Action",
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

export enum ActionSubType {
  Ally = "Ally",
  Ash = "Ash",
  Attack = "Attack",
  Arrow = "Arrow",
  Aura = "Aura",
  Item = "Item",
  Landmark = "Landmark",
  NonAttack = "Non-Attack",
  Trap = "Trap",
}

export enum EquipmentSubType {
  Arms = "Arms",
  Chest = "Chest",
  Head = "Head",
  Legs = "Legs",
  OffHand = "Off-Hand",
}

export enum ResourceSubType {
  Gem = "Gem",
}

export enum TokenSubType {
  Ally = "Ally",
  Ash = "Ash",
  Aura = "Aura",
  Item = "Item",
}

export enum WeaponSubType {
  Axe = "Axe",
  Bow = "Bow",
  Claw = "Claw",
  Club = "Club",
  Dagger = "Dagger",
  Flail = "Flail",
  Gun = "Gun",
  Hammer = "Hammer",
  Orb = "Orb",
  Pistol = "Pistol",
  Scepter = "Scepter",
  Scythe = "Scythe",
  Staff = "Staff",
  Sword = "Sword",
}

export enum HandsRequired {
  OneHanded = "1H",
  TwoHanded = "2H",
}

export enum Hero {
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
  Taylor = "Taylor",
  Valda = "Valda",
  Viserai = "Viserai",
  Yorick = "Yorick",
}

export enum Keyword {
  Affliction = "Affliction",
  ArcaneBarrier = "Arcane Barrier",
  Battleworn = "Battleworn",
  BladeBreak = "Blade Break",
  BloodDebt = "Blood Debt",
  Boost = "Boost",
  Channel = "Channel",
  Charge = "Charge",
  Combo = "Combo",
  Crush = "Crush",
  Dominate = "Dominate",
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
  Phantasm = "Phantasm",
  Quell = "Quell",
  Reload = "Reload",
  Reprise = "Reprise",
  Rupture = "Rupture",
  Specialization = "Specialization",
  Spectra = "Spectra",
  Spellvoid = "Spellvoid",
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
