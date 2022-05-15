export interface Card {
  bannedFormats?: Format[];
  class: Class;
  identifier: string;
  functionalText: string;
  imageUrl: string;
  keywords: Keyword[];
  name: string;
  rarity: Rarity;
  setIdentifiers?: string[];
  sets: Release[];
  type: Type;
  typeText: string;
}

export interface ActionCard extends Card {
  cost?: number;
  defense?: number;
  pitch?: number;
  power?: number;
  talents?: Talent[];
  specialCost?: string;
  specialDefense?: string;
  specialPower?: string;
  specialization?: Hero;
  subType: ActionSubType;
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
  young: boolean;
}

export interface ResourceCard extends Card {
  cost?: number;
  defense?: number;
  pitch?: number;
  talents?: Talent[];
  subType: ResourceSubType;
}

export interface TokenCard extends Card {
  talents?: Talent[];
  subType: TokenSubType;
}

export interface WeaponCard extends Card {
  power?: number;
  specialPower?: string;
  handsRequired: HandsRequired;
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

export enum Rarity {
  Token = "Token",
  Common = "Common",
  Rare = "Rare",
  SuperRare = "Super Rare",
  Majestic = "Majestic",
  Legendary = "Legendary",
  Fabled = "Fabled",
  Promo = "Promo",
}

export enum Release {
  ArcaneRising = "Arcane Rising",
  CrucibleOfWar = "Crucible of War",
  Everfest = "Everfest",
  HeroDeck = "Hero Deck",
  Monarch = "Monarch",
  Promos = "Promos",
  TalesOfAria = "Tales of Aria",
  Uprising = "Uprising",
  WelcomeToRathe = "Welcome to Rathe",
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
  Attack = "Attack",
  Arrow = "Arrow",
  Aura = "Aura",
  Item = "Item",
  Landmark = "Landmark",
  Trap = "Trap",
}

export enum EquipmentSubType {
  Arms = "Arms",
  Chest = "Chest",
  Head = "Head",
  Legs = "Legs",
  OffHand = "Off-hand",
}

export enum ResourceSubType {
  Gem = "Gem",
}

export enum TokenSubType {
  Ally = "Ally",
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
  GenisWotchuneed = "Genis Wotcuneed",
  Ira = "Ira",
  Iyslander = "Iyslander",
  Kano = "Kano",
  Kassai = "Kassai",
  Katsu = "Katsu",
  Kavdaen = "Kavdaen",
  Kayo = "Kayo",
  Levia = "Levia",
  Lexi = "Lexi",
  Oldhim = "Oldim",
  Prism = "Prism",
  Rhinar = "Rhinar",
  Ruudi = "Ruu'di",
  Shiyana = "Shiyana",
  Taylor = "Taylor",
  Valda = "Valda",
  Viserai = "Viserai",
  Yorick = "Yorick",
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
  Crush = "Crush",
  Dominate = "Dominate",
  Essence = "Essence",
  Freeze = "Freeze",
  Fusion = "Fusion",
  GoAgain = "Go Again",
  Heave = "Heave",
  Intimidate = "Intimidate",
  Legendary = "Legendary",
  Mentor = "Mentor",
  Negate = "Negate",
  Opt = "Opt",
  Phantasm = "Phantasm",
  Reload = "Reload",
  Reprise = "Reprise",
  Specialization = "Specialization",
  Spectra = "Spectra",
  Spellvoid = "Spellvoid",
  Temper = "Temper",
  Thaw = "Thaw",
  Unfreeze = "Unfreeze",
}
