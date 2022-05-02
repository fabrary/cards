export interface Card {
  bannedFormats?: Format[];
  class: Class;
  identifier: String;
  functionalText: String;
  imageUrl: String;
  keywords: Keyword[];
  name: String;
  rarity: Rarity;
  setIdentifiers?: String[];
  sets: Release[];
  type: Type;
  typeText: String;
}

export interface ActionCard extends Card {
  attack?: Number;
  cost?: Number;
  defense?: Number;
  pitch?: Number;
  talent?: Talent[];
  specialization?: Hero;
  subType: ActionSubType;
}

export interface EquipmentCard extends Card {
  defense?: Number;
  handsRequired?: HandsRequired;
  talent?: Talent[];
  subType: EquipmentSubType;
}

export interface HeroCard extends Card {
  intellect: Number;
  hero: Hero;
  life: Number;
  young: boolean;
}

export interface ResourceCard extends Card {
  cost?: Number;
  defense?: Number;
  pitch?: Number;
  talent?: Talent[];
  subType: ResourceSubType;
}

export interface TokenCard extends Card {
  talent?: Talent[];
  subType: TokenSubType;
}

export interface WeaponCard extends Card {
  attack?: Number;
  handsRequired: HandsRequired;
  talent?: Talent[];
  subType: WeaponSubType;
}

export enum Class {
  NotClassed = "Not Classed",
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
  Blitz,
  Commoner,
  Constructed,
}

export enum Rarity {
  Token,
  Common,
  Rare,
  SuperRare,
  Majestic,
  Legendary,
  Fabled,
  Promo,
}

export enum Release {
  ArcaneRising,
  CrucibleOfWar,
  Everfest,
  HeroDeck,
  Monarch,
  Promos,
  TalesOfAria,
  Uprising,
  WelcomeToRathe,
}

export enum Talent {
  NotTalented,
  Draconic,
  Earth,
  Elemental,
  Ice,
  Light,
  Lightning,
  Shadow,
}

export enum Type {
  Action,
  AttackAction,
  AttackReaction,
  DefenseReaction,
  Equipment,
  Hero,
  Instant,
  Mentor,
  Resource,
  Token,
  Weapon,
}

export enum ActionSubType {
  Ally,
  Attack,
  Arrow,
  Aura,
  Item,
  Landmark,
  Trap,
}

export enum EquipmentSubType {
  Arms,
  Chest,
  Head,
  Legs,
  OffHand,
}

export enum ResourceSubType {
  Gem,
}

export enum TokenSubType {
  Ally,
  Aura,
  Item,
}

export enum WeaponSubType {
  Axe,
  Bow,
  Claw,
  Club,
  Dagger,
  Flail,
  Gun,
  Hammer,
  Orb,
  Pistol,
  Scepter,
  Scythe,
  Staff,
  Sword,
}

export enum HandsRequired {
  OneHanded,
  TwoHanded,
}

export enum Hero {
  Azalea,
  Benji,
  Boltyn,
  Bravo,
  Briar,
  Chane,
  Dash,
  DataDoll,
  Dorinthea,
  GenisWotchuneed,
  Ira,
  Iyslander,
  Kano,
  Kassai,
  Katsu,
  Kavdaen,
  Kayo,
  Levia,
  Lexi,
  Oldhim,
  Prism,
  Rhinar,
  Shiyana,
  Valda,
  Viserai,
}

export enum Keyword {
  ArcaneBarrier,
  Battleworn,
  BladeBreak,
  BloodDebt,
  Boost,
  Channel,
  Charge,
  Combo,
  Crush,
  Dominate,
  Essence,
  Freeze,
  Fusion,
  GoAgain,
  Heave,
  Intimidate,
  Legendary,
  Mentor,
  Negate,
  Opt,
  Phantasm,
  Reload,
  Reprise,
  Specialization,
  Spectra,
  Spellvoid,
  Temper,
  Thaw,
  Unfreeze,
}
