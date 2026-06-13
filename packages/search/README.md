# @flesh-and-blood/search

A [fuse.js](https://www.fusejs.io/)-based search engine for **Flesh and Blood** cards.

## Installation

```bash
npm i @flesh-and-blood/search @flesh-and-blood/types
```

`@flesh-and-blood/types` is a **peer dependency** — install it alongside this package

## Usage

```ts
import Searcher from "@flesh-and-blood/search";
import { cards } from "@flesh-and-blood/cards";

const searcher = new Searcher(cards);
const { searchResults } = searcher.search("rhinar go again");
```

- `new Searcher(cards, additionalHeroes?, additionalSets?, debug?)`
- `.search(text)` → `SearchResults` — `{ searchResults: SearchCard[], appliedFilters, keywords, attributes }`

Data-only modules are available as subpath imports (handy for lazy-loaded UI like a search-bar dropdown):

```ts
import { abbreviations } from "@flesh-and-blood/search/abbreviations";
import { shorthands } from "@flesh-and-blood/search/shorthands";
```

## What's included

- Default export: **`Searcher`** — the search engine
- Types: `SearchResults`, `SearchCard`
- Data modules (subpath imports): `abbreviations`, `shorthands`, `memes`
- Filter / meta-filter / helper utilities (`filters`, `metaFilters`, `helpers`, `constants`, `related`)

## Working with this project

```bash
npm run build   # build:esm (per-file ESM) + build:cjs (bundled) + tsc declarations + jest
npm test        # jest
```

Uses `@flesh-and-blood/cards` (`file:../cards`) as a dev dependency for tests.
