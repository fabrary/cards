# @flesh-and-blood/search

A [fuse.js](https://www.fusejs.io/)-based search engine for **Flesh and Blood** cards.

## Installation

```bash
npm i @flesh-and-blood/search @flesh-and-blood/types
```

`@flesh-and-blood/types` is a **peer dependency**: install it alongside this package

## Usage

```ts
import Searcher from "@flesh-and-blood/search";
import { cards, releases } from "@flesh-and-blood/cards";

const searcher = new Searcher(cards, { releases });
const { searchResults } = searcher.search("rhinar go again");
```

- `new Searcher(cards, { releases, additionalHeroes? })`, or `{ index }` to share a catalogue index
  built with `getCatalogueIndex(cards, releases)`
- `.search(text)` → `SearchResults`: `{ searchResults: SearchCard[], appliedFilters, keywords, attributes }`

Data-only modules are available as subpath imports (handy for lazy-loaded UI like a search-bar dropdown):

```ts
import { shorthands } from "@flesh-and-blood/search/shorthands";
```

## What's included

- Default export: **`Searcher`**, the search engine
- Types: `SearchResults`, `SearchCard`
- Data modules (subpath imports): `shorthands`, `memes`
- Filter / meta-filter / helper utilities (`filters`, `metaFilters`, `helpers`, `constants`, `related`)

## Working with this project

```bash
npm run build   # build:esm (per-file ESM) + build:cjs (bundled) + tsc declarations
npm test        # vitest
```

Uses `@flesh-and-blood/cards` (`file:../cards`) as a dev dependency for tests.
