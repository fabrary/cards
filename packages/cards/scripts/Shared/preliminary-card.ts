import { Card, Rarity } from "@flesh-and-blood/types";

// The card shape the mappers and dedup pipeline produce, before the completion
// pass in scripts/index.ts derives the remaining fields. These are omitted from
// the type (rather than seeded with placeholder values) so that a skipped
// completion step is a compile error here, not a silently-empty field in the
// published data.
export type PreliminaryCard = Omit<
  Card,
  | "createdExtras"
  | "firstReleaseDate"
  | "legalHeroes"
  | "meta"
  | "nicknames"
  | "rarity"
  | "referencedCards"
  | "shorthands"
  | "shortName"
> & {
  // A spoiled sheet row can leave the rarity columns empty. Such a card is a
  // reprint, so the merge with its released printings settles the rarity before
  // the card is written.
  rarity?: Rarity;
};
