export interface Card {
  id?: String; // https://github.com/ai/nanoid/
  bannedFormats?: Format[];
  class: Class;
  identifier: String;
  imageUrl: String;
  keywords: String[];
  name: String;
  rarity: Rarity;
  setIdentifiers: String[];
  sets: Release[];
  stats: Stats;
  talent?: [Talent];
  text: String;
  type: Type;
}

export enum Class {
  Generic,
  Brute,
  Guardian,
  Illusionist,
  Mechanologist,
  Merchant,
  Ninja,
  Ranger,
  Runeblade,
  Shapeshifter,
  Warrior,
  Wizard,
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
}

export enum Release {
  ArcaneRising,
  CrucibleOfWar,
  Everfest,
  Monarch,
  Promos,
  TalesOfAria,
  Uprising,
  WelcomeToRathe,
}

export interface Stats {
  attack?: Number;
  cost?: Number;
  defense?: Number;
  intellect?: Number;
  life?: Number;
  pitch?: Number;
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
  Equipment,
  Hero,
  Weapon,
  Action,
  AttackAction,
  AttackReaction,
  DefenseReaction,
  Instant,
  Token,
}

export enum SubType {
  Aura,
  Item,
}

export enum EquipmentType {
  Arms,
  Chest,
  Head,
  Legs,
  OffHand,
}

export enum WeaponType {
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

export enum KeyWords {
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
