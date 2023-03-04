import chalk from "chalk";
import { cards as publishedCards } from "fab-cards";
import { cards as cardsToPublish } from "../dist/index";

const added: string[] = [];
for (const toPublish of cardsToPublish) {
  const match = publishedCards.find(
    ({ cardIdentifier }) => toPublish.cardIdentifier === cardIdentifier
  );
  if (!match) {
    added.push(`${toPublish.name} (${toPublish.cardIdentifier})`);
  }
}

console.log(
  chalk.underline(`${chalk.bold(cardsToPublish.length)} cards to publish`)
);
if (added.length > 0) {
  console.log(
    `⚠️ New cards being added:
${chalk.yellow(added.join("\n"))}
`
  );
} else {
  console.log(`✅ No new cards being added`);
}
