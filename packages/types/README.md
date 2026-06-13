# @flesh-and-blood/types

TypeScript enums, interfaces, and pure helper functions for **Flesh and Blood** cards. This is the base
package that [`@flesh-and-blood/cards`](../cards) and [`@flesh-and-blood/search`](../search) depend on.
It has no runtime dependencies.

## Installation

```bash
npm i @flesh-and-blood/types
```

Published as **dual ESM + CJS** — works in bundlers, native Node ESM, and CommonJS.

## Usage

```ts
import { Hero, Rarity, getDefaultPrinting } from "@flesh-and-blood/types";
```

Data and helper modules are also available as subpath imports, so you can pull in just what you need:

```ts
import { releases } from "@flesh-and-blood/types/sets";
import { getDefaultPrinting } from "@flesh-and-blood/types/helpers";
import type { Card } from "@flesh-and-blood/types/interfaces";
```

## What's included

The exported TypeScript types are the source of truth for exact values and fields — the lists below are
an overview.

### Enums

`Bond`, `Class`, `Flow`, `Foiling`, `Format`, `Fusion`, `Hero`, `Keyword`, `Language`, `Meta`,
`Metatype`, `Rarity`, `Release`, `ReleaseEdition`, `ReleaseType`, `Shorthand`, `Subtype`, `Talent`,
`Trait`, `Treatment`, `Type`.

### Interfaces

`Card` (the main card shape), `DoubleSidedCard`, `Printing`, `LegalOverride`, `ReleaseInfo`,
`SilverAgeChapter`.

### Helpers — `@flesh-and-blood/types/helpers`

- **Printing pickers:** `getPrint`, `getDefaultPrinting`, `getSpecialPrinting`, `getBoomerPrinting`,
  `getMaxRarityPrinting`
- **Card properties:** `getCardIdentifier`, `getFrontAndBackCardIdentifier`,
  `getCardFromGEMCardIdentifier`, `getIsArenaCard`, `getIsDeckCard`, `getIsCardTokenForDeck`,
  `getCanCardBeTokenForDeck`, `getCanAddToDeck`, `getShouldRotateCardImage`

### Set data — `@flesh-and-blood/types/sets`

`releases`, `fullSetIdentifiers`, `setIdentifierToSetMappings`, `setToSetIdentifierMappings`,
`silverAgeChapters`, plus `getIsBooster`, `getIsReprint`, `getIsDraftable`, `getIsPreconstructed`.

## Working with this project

Source lives in `src/` (`interfaces.ts`, `sets.ts`, `helpers/`).

```bash
npm run build   # build:esm (per-file ESM, tree-shakeable) + build:cjs (bundled) + tsc declarations
npm test        # jest
```
