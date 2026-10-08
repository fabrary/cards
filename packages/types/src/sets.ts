import { Class, Rarity, Release, Talent } from "./interfaces.js";

export enum Language {
  English = "English",
  French = "Français",
  German = "Deutsch",
  Italian = "Italiano",
  Japanese = "日本語",
  Spanish = "Español",
}

export enum ReleaseType {
  ArmoryDeck = "Armory Deck",
  BlitzDeck = "Blitz Deck",
  BoxSet = "Box Set",
  ClassicBattles = "Classic Battles",
  ExpansionBooster = "Expansion Booster",
  FirstStrike = "1st Strike",
  HeroDeck = "Hero Deck",
  HistoryPack = "History Pack",
  MasteryPack = "Mastery Pack",
  Promo = "Promo",
  RoundTheTable = "Round the Table",
  SilverAgeDeck = "Silver Age Deck",
  StandaloneBooster = "Standalone Booster",
  WelcomeDeck = "Welcome Deck",
}

const BOOSTER_RELEASE_TYPES = [
  ReleaseType.ExpansionBooster,
  ReleaseType.StandaloneBooster,
];
export const getIsBooster = (releaseType: ReleaseType) =>
  BOOSTER_RELEASE_TYPES.includes(releaseType);

export const getIsReprint = (releaseType: ReleaseType) =>
  releaseType === ReleaseType.HistoryPack;

export const getIsDraftable = (releaseType: ReleaseType) =>
  releaseType === ReleaseType.StandaloneBooster;

const PRECONSTRUCTED_RELEASE_TYPES = [
  ReleaseType.ArmoryDeck,
  ReleaseType.BlitzDeck,
  ReleaseType.ClassicBattles,
  ReleaseType.FirstStrike,
  ReleaseType.HeroDeck,
  ReleaseType.RoundTheTable,
  ReleaseType.SilverAgeDeck,
  ReleaseType.WelcomeDeck,
];
export const getIsPreconstructed = (releaseType: ReleaseType) =>
  PRECONSTRUCTED_RELEASE_TYPES.includes(releaseType);

interface DeckLink {
  name?: string;
  url: string;
}

interface DraftInfo {
  picksPerPack: number;
}

export interface ReleaseInfo {
  // Absent for a promo release, which collects cards from many products rather
  // than shipping a set number of them.
  cards?: number;
  // The Silver Age chapter a Silver Age deck belongs to. A chapter's name and
  // date come from its decks.
  chapter?: number;
  classes: Class[];
  deckLinks: DeckLink[];
  draft?: DraftInfo;
  // The hero cards the release is for, not every hero card printed in it. The
  // Draft-legal ones are the heroes the release drafts with.
  heroIdentifiers: string[];
  languages: Language[];
  raritiesExcludedInLimited?: Rarity[];
  relatedReleases: Release[];
  release: Release;
  // Absent for a promo release, whose cards arrive across many dates.
  releaseDate?: string;
  releaseType: ReleaseType;
  setIdentifiers: string[];
  talents: Talent[];
}
