/**
 * For every CSV in packages/cards/scripts/Spoiled, report only what can be
 * removed because it's already in Released/card.json.
 *
 * A card row is REDUNDANT when a card with the same name+pitch identifier
 * already exists in card.json AND every printing the row maps to is already
 * present there. If every row in a file is redundant, the whole file can go.
 *
 * Usage (from repo root):  npm run clean:csvs
 */
import { readdirSync } from "fs";
import { parseCSV } from "../packages/cards/scripts/Spoiled/parser";
import { mapCSV } from "../packages/cards/scripts/Spoiled/mapper";
import { releasedCards } from "../packages/cards/scripts/Released";
import { Card } from "@flesh-and-blood/types";

const spoiledDir = `${__dirname}/../packages/cards/scripts/Spoiled`;

const releasedByIdentifier = new Map<string, Card>();
for (const c of releasedCards) {
  if (!releasedByIdentifier.has(c.cardIdentifier)) {
    releasedByIdentifier.set(c.cardIdentifier, c);
  }
}

const files = readdirSync(spoiledDir)
  .filter((f) => f.toLowerCase().endsWith(".csv"))
  .sort();

for (const file of files) {
  const cards = mapCSV(parseCSV(`${spoiledDir}/${file}`).filter((c) => !!c.name));
  if (!cards.length) continue;

  const removable: string[] = [];

  for (const card of cards) {
    const released = releasedByIdentifier.get(card.cardIdentifier);
    if (!released) continue; // new card — keep

    const releasedPrints = new Set(released.printings.map((p) => p.print));
    const allPrintingsKnown = card.printings.every((p) =>
      releasedPrints.has(p.print),
    );
    if (allPrintingsKnown) {
      const identifiers = card.setIdentifiers.join(",");
      removable.push(`  ${identifiers.padEnd(14)} ${card.name}`);
    }
  }

  if (!removable.length) continue;

  if (removable.length === cards.length) {
    console.log(`\n${file} — ENTIRE FILE removable (${cards.length} cards already in card.json)`);
  } else {
    console.log(`\n${file} — ${removable.length}/${cards.length} rows removable:`);
    removable.sort().forEach((l) => console.log(l));
  }
}
