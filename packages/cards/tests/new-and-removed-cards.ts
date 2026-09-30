import { execFileSync } from "node:child_process";
import { mkdtempSync } from "node:fs";
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
  const { cards } = await import(
    pathToFileURL(join(packDir, "package", "dist", "index.js")).href
  );
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
      `${toPublish.name} - ${toPublish.cardIdentifier} - ${toPublish.setIdentifiers}`,
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
      `${alreadyPublished.name} - ${alreadyPublished.cardIdentifier} - ${alreadyPublished.setIdentifiers}`,
    );
  }
}

console.log(
  styleText(
    "underline",
    `${styleText("bold", String(cardsToPublish.length))} cards to publish`,
  ),
);
if (added.length > 0) {
  console.log(
    `⚠️ New cards being added:
${styleText("yellow", added.join("\n"))}
`,
  );
} else {
  console.log(`✅ No new cards being added`);
}

if (removed.length > 0) {
  console.log(
    `⚠️ Cards being removed:
${styleText("yellow", removed.join("\n"))}
`,
  );
} else {
  console.log(`✅ No cards being removed`);
}
