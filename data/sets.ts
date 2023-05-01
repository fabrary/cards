import { Release } from "./interfaces";

export const setIdentifierToSetMappings: { [key: string]: Release } = {
  // Full sets
  arc: Release.ArcaneRising,
  cru: Release.CrucibleOfWar,
  dtd: Release.DuskTillDawn,
  dyn: Release.Dynasty,
  evr: Release.Everfest,
  "1hp": Release.HistoryPack1,
  hp1: Release.HistoryPack1,
  mon: Release.Monarch,
  out: Release.Outsiders,
  ele: Release.TalesOfAria,
  upr: Release.Uprising,
  wtr: Release.WelcomeToRathe,

  // Blitz decks
  ara: Release.ArakniBlitzDeck,
  azl: Release.AzaleaBlitzDeck,
  ben: Release.BenjiBlitzDeck,
  bol: Release.BoltynBlitzDeck,
  bri: Release.BriarBlitzDeck,
  bvo: Release.BravoBlitzDeck,
  chn: Release.ChaneBlitzDeck,
  dro: Release.DromaiBlitzDeck,
  fai: Release.FaiBlitzDeck,
  kat: Release.KatsuBlitzDeck,
  lev: Release.LeviaBlitzDeck,
  lxi: Release.LexiBlitzDeck,
  old: Release.OldhimBlitzDeck,
  psm: Release.PrismBlitzDeck,
  rip: Release.RiptideBlitzDeck,
  uzu: Release.UzuriBlitzDeck,

  // Starter decks
  dvr: Release.ClassicBattlesRhinarDorinthea,
  rvd: Release.ClassicBattlesRhinarDorinthea,
  ira: Release.IraWelcomeDeck,

  // Hero decks
  tea: Release.DorintheaHeroDeck,
  ksu: Release.KatsuHeroDeck,
  rnr: Release.RhinarHeroDeck,

  // Promos
  fab: Release.Promos,
  her: Release.Promos,
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
