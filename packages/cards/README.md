# @flesh-and-blood/cards

Every **Flesh and Blood** card as a single `cards: Card[]` export, generated from source data. Card
objects are typed by [`@flesh-and-blood/types`](../types).

## Installation

```bash
npm i @flesh-and-blood/cards @flesh-and-blood/types
```

Published as **dual ESM + CJS**. Note: the dataset is large (~12 MB) — many consumers load it at build
or server time rather than shipping it to the browser.

## Usage

```ts
import { cards } from "@flesh-and-blood/cards";
import type { Card } from "@flesh-and-blood/types";

cards.forEach((card: Card) => {
  // do stuff with the card data
});
```

Card data is sourced from the amazing
[the-fab-cube/flesh-and-blood-cards](https://github.com/the-fab-cube/flesh-and-blood-cards) project by
[Tyler Luce](https://github.com/luceleaftea) — all credit to him; any errors are probably mine 😅.

## The data pipeline

`src/index.ts` is a **~12 MB generated file that is committed — never hand-edit it.** Regenerate
everything with `npm run full`, which runs end to end.

### transform — `scripts/index.ts`

Reads the source data, computes derived fields, and writes the output:

1. **Spoiled** cards from `scripts/Spoiled/*.csv` (Google Sheets exports, one per set), parsed/mapped by `scripts/Spoiled/{parser,mapper}.ts`.
2. **Released** cards from `scripts/Released/card.json` + `set.json` (sourced from the-fab-cube/flesh-and-blood-cards), parsed/mapped by `scripts/Released/{parser,mapper}.ts`.
3. **Combine & dedupe** — a card re-released in a new set merges its printings, sets, rarities, and legality — then compute derived fields (legality, meta, nicknames, shorthands, short name, TCGplayer info) via `scripts/Shared/*`.
4. `scripts/writer.ts` writes `src/index.ts` and `latest-set/index.ts`.

Fix data in the **source**, not the generated output. Overrides and edge cases live in
`scripts/Spoiled/overrides.csv` and `scripts/Shared/` (artist overrides, excludes, legality, shorthands,
TCGplayer data, cardvault image maps).

### build / new / tts / sitemap

| Step    | Command           | What it does                                                                               |
| ------- | ----------------- | ------------------------------------------------------------------------------------------ |
| build   | `npm run build`   | `build:cjs` (`dist/index.js`) + `build:esm` (`dist/index.mjs`) + `tsc` declarations + jest |
| new     | `npm run new`     | Report new/removed cards vs the last published version                                     |
| tts     | `npm run tts`     | Generate Tabletop Simulator card data (`tts/tts.txt`)                                      |
| sitemap | `npm run sitemap` | Generate `sitemap/sitemap-cards.xml`                                                       |
