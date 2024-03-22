import { Release } from "./interfaces";

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
};

export const setIdentifierToSetMappings: { [key: string]: Release } = {
  ...fullSetIdentifiers,

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
  fai: Release.FaiBlitzDeck,
  kat: Release.KatsuBlitzDeck,
  ksi: Release.KassaiBlitzDeck,
  kyo: Release.KayoBlitzDeck,
  lev: Release.LeviaBlitzDeck,
  lxi: Release.LexiBlitzDeck,
  old: Release.OldhimBlitzDeck,
  ola: Release.OlympiaBlitzDeck,
  psm: Release.PrismBlitzDeck,
  rip: Release.RiptideBlitzDeck,
  rnr: Release.RhinarBlitzDeck,
  uzu: Release.UzuriBlitzDeck,
  vic: Release.VictorBlitzDeck,

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
