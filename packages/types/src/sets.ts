import { Release } from "./interfaces";

enum ReleaseType {
  Core = "Core",
  Preconstructed = "Preconstructed",
  Reprint = "Reprint",
  Supplemental = "Supplumental",
}

export const coreSetIdentifiers: { [key: string]: Release } = {
  wtr: Release.WelcomeToRathe,
  arc: Release.ArcaneRising,
  mon: Release.Monarch,
  ele: Release.TalesOfAria,
  upr: Release.Uprising,
  out: Release.Outsiders,
  evo: Release.BrightLights,
  hvy: Release.HeavyHitters,
  mst: Release.PartTheMistveil,
  ros: Release.Rosetta,
};

export const supplementalSetIdentifiers: { [key: string]: Release } = {
  cru: Release.CrucibleOfWar,
  evr: Release.Everfest,
  "1hp": Release.HistoryPack1,
  hp1: Release.HistoryPack1,
  dyn: Release.Dynasty,
  dtd: Release.DuskTillDawn,
};

const releases: {
  release: Release;
  releaseType: ReleaseType;
  setIdentifiers: string[];
}[] = [
  {
    release: Release.WelcomeToRathe,
    releaseType: ReleaseType.Core,
    setIdentifiers: ["wtr"],
  },
  {
    release: Release.ArcaneRising,
    releaseType: ReleaseType.Core,
    setIdentifiers: ["arc"],
  },
  {
    release: Release.CrucibleOfWar,
    releaseType: ReleaseType.Supplemental,
    setIdentifiers: ["arc"],
  },
  {
    release: Release.Monarch,
    releaseType: ReleaseType.Core,
    setIdentifiers: ["mon"],
  },
  {
    release: Release.TalesOfAria,
    releaseType: ReleaseType.Core,
    setIdentifiers: ["ele"],
  },
  {
    release: Release.Everfest,
    releaseType: ReleaseType.Supplemental,
    setIdentifiers: ["evr"],
  },
  {
    release: Release.HistoryPack1,
    releaseType: ReleaseType.Reprint,
    setIdentifiers: ["1hp", "hp1"],
  },
  {
    release: Release.Uprising,
    releaseType: ReleaseType.Core,
    setIdentifiers: ["upr"],
  },
  {
    release: Release.Dynasty,
    releaseType: ReleaseType.Supplemental,
    setIdentifiers: ["dyn"],
  },
  {
    release: Release.Outsiders,
    releaseType: ReleaseType.Core,
    setIdentifiers: ["out"],
  },
  {
    release: Release.DuskTillDawn,
    releaseType: ReleaseType.Supplemental,
    setIdentifiers: ["dtd"],
  },
  {
    release: Release.BrightLights,
    releaseType: ReleaseType.Core,
    setIdentifiers: ["evo"],
  },
  {
    release: Release.HeavyHitters,
    releaseType: ReleaseType.Core,
    setIdentifiers: ["hvy"],
  },
  {
    release: Release.PartTheMistveil,
    releaseType: ReleaseType.Core,
    setIdentifiers: ["mst"],
  },
  {
    release: Release.Rosetta,
    releaseType: ReleaseType.Core,
    setIdentifiers: ["ros"],
  },
];

export const fullSetIdentifiers: { [key: string]: Release } = {
  wtr: Release.WelcomeToRathe,
  arc: Release.ArcaneRising,
  cru: Release.CrucibleOfWar,
  mon: Release.Monarch,
  ele: Release.TalesOfAria,
  evr: Release.Everfest,
  "1hp": Release.HistoryPack1,
  hp1: Release.HistoryPack1,
  upr: Release.Uprising,
  dyn: Release.Dynasty,
  out: Release.Outsiders,
  dtd: Release.DuskTillDawn,
  evo: Release.BrightLights,
  hvy: Release.HeavyHitters,
  mst: Release.PartTheMistveil,
  ros: Release.Rosetta,
};

export const setIdentifierToSetMappings: { [key: string]: Release } = {
  ...fullSetIdentifiers,

  // Armory decks
  ako: Release.ArmoryDeckKayo,
  asb: Release.ArmoryDeckBoltyn,
  aaz: Release.ArmoryDeckAzalea,

  // Blitz decks
  ara: Release.ArakniBlitzDeck,
  azl: Release.AzaleaBlitzDeck,
  ben: Release.BenjiBlitzDeck,
  bet: Release.BetsyBlitzDeck,
  bol: Release.BoltynBlitzDeck,
  bri: Release.BriarBlitzDeck,
  bvo: Release.BravoBlitzDeck,
  chn: Release.ChaneBlitzDeck,
  dro: Release.DromaiBlitzDeck,
  eng: Release.EnigmaBlitzDeck,
  fai: Release.FaiBlitzDeck,
  kat: Release.KatsuBlitzDeck,
  ksi: Release.KassaiBlitzDeck,
  kyo: Release.KayoBlitzDeck,
  lev: Release.LeviaBlitzDeck,
  lxi: Release.LexiBlitzDeck,
  nuu: Release.NuuBlitzDeck,
  old: Release.OldhimBlitzDeck,
  ola: Release.OlympiaBlitzDeck,
  psm: Release.PrismBlitzDeck,
  rip: Release.RiptideBlitzDeck,
  rnr: Release.RhinarBlitzDeck,
  uzu: Release.UzuriBlitzDeck,
  vic: Release.VictorBlitzDeck,
  zen: Release.ZenBlitzDeck,

  // 1st strike decks
  aur: Release.FirstStrikeAurora,
  ter: Release.FirstStrikeTerra,

  // Starter decks
  dvr: Release.ClassicBattlesRhinarDorinthea,
  rvd: Release.ClassicBattlesRhinarDorinthea,
  ira: Release.IraWelcomeDeck,

  // Other decks
  tcc: Release.RoundTheTable,

  // Hero decks
  tea: Release.DorintheaHeroDeck,
  ksu: Release.KatsuHeroDeck,
  rnr2: Release.RhinarHeroDeck,

  // Promos
  fab: Release.Promos,
  her: Release.Promos,
  jdg: Release.Promos,
  lgs: Release.Promos,
  lss: Release.Promos,
  oxo: Release.Promos,
  xxx: Release.Promos,
  win: Release.Promos,
};

let tempSetToSetIdentifierMappings: { [key: string]: string[] } = {};
for (const [setIdentifier, set] of Object.entries(setIdentifierToSetMappings)) {
  const entry = tempSetToSetIdentifierMappings[set];
  if (entry) {
    entry.push(setIdentifier);
  } else {
    tempSetToSetIdentifierMappings[set] = [setIdentifier];
  }
}

export const setToSetIdentifierMappings = tempSetToSetIdentifierMappings;
