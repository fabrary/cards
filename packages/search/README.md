# `@flesh-and-blood/search`

TypeScript search engine for Flesh and Blood cards.

## Installation

`@flesh-and-blood/types` is a **peer dependency** — install it alongside this package so its enums
are shared rather than bundled twice:

```
npm install @flesh-and-blood/search @flesh-and-blood/types
```

This package is published as **ESM** (`"type": "module"`, per-file modules) so consumers can
tree-shake. Use a bundler (Vite, webpack, esbuild, Rollup) or a modern ESM-capable Node runtime.

## Usage

```ts
import Searcher from "@flesh-and-blood/search";

// data-only modules are also available as subpath imports:
import { abbreviations } from "@flesh-and-blood/search/abbreviations";
import { shorthands } from "@flesh-and-blood/search/shorthands";
```
