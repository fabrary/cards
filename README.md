# Flesh and Blood cards

A library of all Flesh and Blood cards, available as a bundled TypeScript file with matching interfaces.

To install run `npm i --save fab-cards`.

Access the card data in your project:

```ts
import { cards } from "fab-cards";

cards.forEach((card) => <do stuff with the card data>);
```

## Card interfaces

Card
| Field | Data type | Examples |
|-------------------|-----------|--------------|
| class | `Class` enum | `Generic`, `Wizard` |
| identifier | `string` | `snatch-red` |
| functionalText | `string` | `If Snatch hits, draw a card.` |
| imageUrl | `string` | `https://storage.googleapis.com/fabmaster/media/images/1HP371.width-450.png` |
| keywords | `array` of `Keyword` enum | [`Boost`] |
| name | `string` | |
| rarity | | |
| restrictedFormats | | |
| setIdentifiers | | |
| sets | | |
| type | | |
| typeText | | |

export interface Card {
class: Class;
identifier: string;
functionalText: string;
imageUrl: string;
keywords: Keyword[];
name: string;
rarity: Rarity;
restrictedFormats?: Format[];
setIdentifiers?: string[];
sets: Release[];
type: Type;
typeText: string;
}

## Working with this project

### Card data

- [src/cards.tsv](src/cards.tsv) is the source of truth for all generated data. The data is managed in Google Sheets and sourced from [flesh-cube/flesh-and-blood-cards](https://github.com/flesh-cube/flesh-and-blood-cards).

### Data transformations

There are three steps involved in transforming the `.tsv` source data into typed `.ts` code - executed via `npm run transform`.

1. [src/parser.ts](src/parser.ts) reads from the `.tsv` file and converts the data into JavaScript objects (performing basic steps like converting comma-delimited lists into arrays)
1. [src/mapper.ts](src/mapper.ts) takes the parsed card data and transforms it to match the interfaces in [src/interfaces.ts](src/interfaces.ts)
1. [src/writer.ts](src/writer.ts) creates `.ts` files containing the card information and all types

### Bundling the library

To generate the distributed package code run `npm run build` after transforming the data.
