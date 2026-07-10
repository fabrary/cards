import { Card } from "@flesh-and-blood/types";

// The card shape the mappers and dedup pipeline produce, before the completion
// pass in scripts/index.ts derives the remaining fields. These are omitted from
// the type (rather than seeded with placeholder values) so that a skipped
// completion step is a compile error here, not a silently-empty field in the
// published data.
export type PreliminaryCard = Omit<
  Card,
  | "firstReleaseDate"
  | "legalHeroes"
  | "meta"
  | "nicknames"
  | "shorthands"
  | "shortName"
>;
