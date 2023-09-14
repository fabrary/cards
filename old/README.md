# Flesh and Blood cards

- [Overview & installation](#overview-and-installation)
- [Card interfaces](#card-interfaces)
- [Enums](#enums)
- [Working with this project](#working-with-this-project)

# 8.0 breaking changes

- `card.images` has been deprecated in favor of `card.printings`
- `defaultImageName` has been renamed `defaultImage` for brevity
- `specialImageName` has been renamed `specialImage` for brevity

# 7.0 breaking changes

- `card.rarity` has been deprecated in favor of `card.rarities`

## Overview and installation

A library of all Flesh and Blood cards, available as a bundled TypeScript file with matching interfaces. Source data comes from the amazing [the-fab-cube/flesh-and-blood-cards](https://github.com/the-fab-cube/flesh-and-blood-cards) repository maintained by [Tyler Luce](https://github.com/luceleaftea) - all credit goes to him, and all errors are probably added by me in this project 😅.

To install run `npm i --save fab-cards`.

Access the card data in your project:

```ts
import { cards } from "fab-cards";

cards.forEach((card) => {
  // do stuff with the card data
});
```

## Card interfaces

**`Card`** contains all of the fields that could show up for any particular card. Required fields can be found on every card, while optional fields may or may not exist on any given card.

### Required

| Field          | Data type            | Examples                                   |
| -------------- | -------------------- | ------------------------------------------ |
| artists        | `string` array       | `[ "Riordan Delmiro" ]`                    |
| cardIdentifier | `string`             | `"snatch-red"`, `"aether-wildfire-red"`    |
| classes        | `Class` enum array   | `["Generic"]`, `["Warrior","Wizard"]`      |
| defaultImage   | `string`             | `"1HP001.width-450"`                       |
| printings      | `Printing` array     | see **`Printing`**                         |
| name           | `string`             | `"Rain Razors"`, `"Pummel"`                |
| rarities       | `Rarity` enum array  | `["Super Rare"]`, `["Token", "Majestic"]`  |
| setIdentifiers | `string` array       | `[ "1HP009", "CRU006" ]`                   |
| sets           | `Release` enum array | `[ "History Pack 1", "Crucible of War" ]`  |
| specialImage   | `string`             | `"1HP001.width-450"`                       |
| subtypes       | `Subtype` enum array | `["OneHanded", "Dagger"]`, `["Aura"]`      |
| types          | `Type` enum array    | `["Action"]`, `["Hero"]`                   |
| typeText       | `string`             | `"Elemental Ranger Action – Arrow Attack"` |

### Optional

| Field                      | Data type            | Examples                             |
| -------------------------- | -------------------- | ------------------------------------ |
| cost                       | `number`             | `0`, `10`                            |
| defense                    | `number`             | `3`, `4`                             |
| functionalText             | `string`             | `"If Snatch hits, draw a card."`     |
| fusions                    | `Fusion` enum array  | `[ "Earth", "Ice" ]`                 |
| hero                       | `Hero` enum          | `"Rhinar"`, `"Dori"`                 |
| intellect                  | `number`             | `3`, `4`                             |
| isCardBack                 | `boolean`            | `true`                               |
| keywords                   | `Keyword` enum array | `[ "Boost" ]`                        |
| life                       | `number`             | `18`, `40`                           |
| oppositeSideCardIdentifier | `string`             | `"invoke-kyloria-red"`, `"tomeltai"` |
| pitch                      | `number`             | `1`, `2`, `3`                        |
| power                      | `number`             | `3`, `14`                            |
| restrictedFormats          | `Format` enum array  | `[ "Blitz" ]`                        |
| specialCost                | `string`             | `"XX"`, `"3X"`                       |
| specialDefense             | `string`             | `"*"`                                |
| specialPower               | `string`             | `"*"`                                |
| specializations            | `Hero` enum array    | `["Dromai","Fai"]`                   |
| talents                    | `Talent` enum array  | `[ "Draconic" ]`                     |
| young                      | `boolean`            | `true`                               |

**`Printing`** contains information about the different printings a card has had (e.g. different sets, foilings)

| Field      | Data type                         | Examples                            |
| ---------- | --------------------------------- | ----------------------------------- |
| edition    | `string` of `ReleaseEdition` enum | `"Alpha"`, `"Unlimited"`            |
| foiling    | `string` of `Foiling` enum        | `"Cold"`, `"Rainbow"`               |
| identifier | `string`                          | `"1HP001"`                          |
| image      | `string`                          | `"1HP001.width-450"`                |
| set        | `string` of `Release` enum        | `"Dynasty"`, `"Uprising"`           |
| treatment  | `string` of `Treatment` enum      | `"Alternate Art"`, `"Extended Art"` |

## Enums

**`Class`**

```ts
"NotClassed", "Generic", "Adjudicator", "Bard", "Brute", "Guardian", "Illusionist", "Mechanologist", "Merchant", "Ninja", "Ranger", "Runeblade", "Shapeshifter", "Warrior", "Wizard",
```

<br/>

**`Format`**

```ts
"Blitz", "Clash", "Classic Constructed", "Commoner",
```

<br/>

**`Fusion`**

```ts
"Earth", "Ice", "Lightning",
```

<br/>

**`Rarity`**

```ts
"Token", "Common", "Rare", "Super Rare", "Majestic", "Legendary", "Fabled", "Promo",
```

<br/>

**`Release`**

```ts
// Full sets
"Arcane Rising", "Crucible of War", "Dynasty", "Everfest", "History Pack 1", "Monarch", "Tales of Aria", "Uprising", "Welcome to Rathe",

// Hero/blitz decks
"Boltyn Blitz Deck", "Briar Blitz Deck", "Bravo Blitz Deck", "Chane Blitz Deck", "Classic Battles: Rhinar vs Dorinthea", "Dorinthea Hero Deck", "Ira Welcome Deck", "Katsu Hero Deck", "LeviaBlitzDeck", "Lexi Blitz Deck", "Oldhim Blitz Deck", "Prism Blitz Deck", "Rhinar Hero Deck",

// One-offs
"Promos",
```

<br/>

**`Talent`**

```ts
"Draconic", "Earth", "Elemental", "Ice", "Light", "Lightning", "Royal", "Shadow",
```

<br/>

**`Type`**

```ts
"Action", "Attack Action", "Attack Reaction", "Defense Reaction", "Equipment", "Hero", "Instant", "Mentor", "Resource", "Token", "Weapon",
```

**`Hero`**

```ts
"Arakni", "Azalea", "Benji", "Boltyn", "Bravo", "Briar", "Chane", "Dash", "Data Doll", "Dorinthea", "Emperor", "Genis Wotchuneed", "Ira", "Iyslander", "Kano", "Kassai", "Katsu", "Kavdaen", "Kayo", "Levia", "Lexi", "Oldhim", "Prism", "Rhinar", "Ruu’di", "Shiyana", "Taylor", "Valda", "Viserai", "Yorick",
```

<br/>

**`Keyword`**

```ts
"Arcane Barrier", "Battleworn", "Blade Break", "Blood Debt", "Boost", "Channel", "Charge", "Combo", "Crush", "Dominate", "Essence", "Freeze", "Fusion", "Go Again", "Heave", "Intimidate", "Legendary", "Mentor", "Negate", "Opt", "Phantasm", "Reload", "Reprise", "Specialization", "Spectra", "Spellvoid", "Temper", "Thaw", "Unfreeze",
```

## Working with this project

### Card data

- [src/cards.csv](src/cards.csv) is the source of truth for all generated data. The data is managed in Google Sheets and sourced from [the-fab-cube/flesh-and-blood-cards](https://github.com/the-fab-cube/flesh-and-blood-cards).

### Data transformations

There are three steps involved in transforming the `.tsv` source data into typed `.ts` code - executed via `npm run transform`.

1. [src/parser.ts](src/parser.ts) reads from the `.tsv` file and converts the data into JavaScript objects (performing basic steps like converting comma-delimited lists into arrays)
1. [src/mapper.ts](src/mapper.ts) takes the parsed card data and transforms it to match the interfaces in [src/interfaces.ts](src/interfaces.ts)
1. [src/writer.ts](src/writer.ts) creates `.ts` files containing the card information and all types

### Bundling the library

To generate the distributed package code run `npm run build` after transforming the data.
