import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { styleText } from "node:util";
import type { Card } from "@flesh-and-blood/types";
import { cards as cardsToPublish } from "../dist/index.js";

// The published cards are whatever npm serves under the latest tag, fetched
// fresh on every run so nothing in the repo has to track the last publish.
const getPublishedCards = async (): Promise<Card[]> => {
  const packDir = mkdtempSync(join(tmpdir(), "published-cards-"));
  const [{ filename }] = JSON.parse(
    execFileSync(
      "npm",
      [
        "pack",
        "@flesh-and-blood/cards@latest",
        "--pack-destination",
        packDir,
        "--workspaces=false",
        "--json",
      ],
      { encoding: "utf8", stdio: ["ignore", "pipe", "inherit"] },
    ),
  );
  execFileSync("tar", ["-xzf", join(packDir, filename), "-C", packDir]);
  // The extracted package has no node_modules, so only a build that bundles
  // its dependencies loads: `main` is the bundled CommonJS one.
  const packageDir = join(packDir, "package");
  const { main } = JSON.parse(
    readFileSync(join(packageDir, "package.json"), "utf8"),
  );
  const { cards } = await import(pathToFileURL(join(packageDir, main)).href);
  return cards;
};

const publishedCards = await getPublishedCards();

const added: string[] = [];
for (const toPublish of cardsToPublish) {
  const match = publishedCards.find(
    ({ cardIdentifier }) => toPublish.cardIdentifier === cardIdentifier,
  );
  if (!match) {
    added.push(
      `${toPublish.name} - ${toPublish.cardIdentifier} - ${toPublish.setIdentifiers.join(",")}`,
    );
  }
}

const removed: string[] = [];
for (const alreadyPublished of publishedCards) {
  const match = cardsToPublish.find(
    ({ cardIdentifier }) => alreadyPublished.cardIdentifier === cardIdentifier,
  );
  if (!match) {
    removed.push(
      `${alreadyPublished.name} - ${alreadyPublished.cardIdentifier} - ${alreadyPublished.setIdentifiers.join(",")}`,
    );
  }
}

const rule = styleText("dim", "─".repeat(60));
const lines = [
  rule,
  styleText(
    "bold",
    `${cardsToPublish.length} cards to publish (vs ${publishedCards.length} on npm)`,
  ),
  "",
];

if (added.length > 0) {
  lines.push(styleText(["bold", "green"], `+ ${added.length} added:`));
  for (const card of added) {
    lines.push(styleText("green", `  + ${card}`));
  }
} else {
  lines.push(styleText("dim", "  No cards added"));
}
lines.push("");

if (removed.length > 0) {
  lines.push(
    styleText(["bold", "red", "inverse"], ` - ${removed.length} REMOVED: `),
  );
  for (const card of removed) {
    lines.push(styleText("red", `  - ${card}`));
  }
} else {
  lines.push(styleText("dim", "  No cards removed"));
}
lines.push(rule);

console.log(lines.join("\n"));
