# Flesh and Blood cards

- [Overview & installation](#overview-and-installation)
- [Card interfaces](#card-interfaces)
- [Enums](#enums)
- [Working with this project](#working-with-this-project)

# 5.0 breaking changes

- `card.class` has been deprecated in favor of `card.classes` in order to support multi-class cards (such as `Emperor, Dracai of Aesir`)
- Images now reference file names instead of complete URLs. This significantly reduces the bundle size of the library and adds flexibility for projects to use their own image hosting. See [fabrary/images](https://github.com/fabrary/images) for an example of how to generate webp files of all cards.
  - `card.defaultImageUrl` is deprecated in favor of `card.defaultImageName` and `card.specialImageName`
  - `card.images.url` is deprecated in favor of `card.images.name`

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

**`Card`** contains all of the fields that are common across all card types - every card object will have data for these fields.

| Field             | Data type            | Examples                                   |
| ----------------- | -------------------- | ------------------------------------------ |
| artists           | `string` array       | `[ "Riordan Delmiro" ]`                    |
| cardIdentifier    | `string`             | `"snatch-red"`, `"aether-wildfire-red"`    |
| classes           | `Class` enum array   | `["Generic"]`, `["Warrior","Wizard"]`      |
| defaultImageName  | `string`             | `"1HP001.width-450"`                       |
| functionalText    | `string`             | `"If Snatch hits, draw a card."`           |
| images            | `Image` array        | see **`Image`**                            |
| keywords          | `Keyword` enum array | `[ "Boost" ]`                              |
| name              | `string`             | `"Rain Razors"`, `"Pummel"`                |
| rarity            | `Rarity` enum        | `"Super Rare"`, `"Token"`                  |
| restrictedFormats | `Format` enum array  | `[ "Blitz" ]`                              |
| setIdentifiers    | `string` array       | `[ "1HP009", "CRU006" ]`                   |
| sets              | `Release` enum array | `[ "History Pack 1", "Crucible of War" ]`  |
| specialImageName  | `string`             | `"1HP001.width-450"`                       |
| type              | `Type` enum array    | `"Action"`, `"Hero"`                       |
| typeText          | `string`             | `"Elemental Ranger Action – Arrow Attack"` |

<br/>

**`ActionCard`** extends **`Card`** and contains additional properties - although not every action card will have values for all fields

| Field           | Data type            | Examples             |
| --------------- | -------------------- | -------------------- |
| cost            | `number`             | `0`, `10`            |
| defense         | `number`             | `3`, `4`             |
| fusions         | `Fusion` enum array  | `[ "Earth", "Ice" ]` |
| pitch           | `number`             | `1`, `2`, `3`        |
| power           | `number`             | `3`, `14`            |
| talents         | `Talent` enum array  | `[ "Draconic" ]`     |
| specialCost     | `string`             | `"XX"`, `"3X"`       |
| specialDefense  | `string`             | `"*"`                |
| specialPower    | `string`             | `"*"`                |
| specializations | `Hero` enum array    | `["Dromai","Fai"]`   |
| subType         | `ActionSubType` enum | `"Attack"`, `"Aura"` |

<br/>

**`EquipmentCard`** extends **`Card`** and contains additional properties - although not every equipment card will have values for all fields

| Field         | Data type               | Examples               |
| ------------- | ----------------------- | ---------------------- |
| defense       | `number`                | `0`, `2`               |
| handsRequired | `HandsRequired` enum    | `"1H"`                 |
| talents       | `Talent` enum           | `[ "Ice" ]`            |
| subType       | `EquipmentSubType` enum | `"Arms"`, `"Off-Hand"` |

<br/>

**`HeroCard`** extends **`Card`** and contains additional properties - although not every hero card will have values for all fields

| Field     | Data type   | Examples             |
| --------- | ----------- | -------------------- |
| intellect | `number`    | `3`, `4`             |
| hero      | `Hero` enum | `"Rhinar"`, `"Dori"` |
| life      | `number`    | `18`, `40`           |
| young     | `boolean`   | `true`               |

<br/>

**`MentorCard`** extends **`Card`** and contains additional properties - although not every mentor card will have values for all fields

| Field   | Data type | Examples |
| ------- | --------- | -------- |
| defense | `number`  | `3`      |

<br/>

**`ResourceCard`** extends **`Card`** and contains additional properties - although not every resource card will have values for all fields

| Field   | Data type                          | Examples |
| ------- | ---------------------------------- | -------- |
| pitch   | `number`                           | `3`      |
| subType | `string` of `ResourceSubType` enum | `"Gem"`  |

<br/>

**`TokenCard`** extends **`Card`** and contains additional properties - although not every token card will have values for all fields

| Field   | Data type                          | Examples                    |
| ------- | ---------------------------------- | --------------------------- |
| talents | `array` of `Talent` enum           | `[ "Shadow", "Elemental" ]` |
| subType | `string` of `ResourceSubType` enum | `"Aura"`, `"Item"`          |

<br/>

**`WeaponCard`** extends **`Card`** and contains additional properties - although not every weapon card will have values for all fields

| Field         | Data type                        | Examples                   |
| ------------- | -------------------------------- | -------------------------- |
| handsRequired | `string` of `HandsRequired` enum | `"1H"`                     |
| power         | `number`                         | `1`, `4`                   |
| specialPower  | `string`                         | `"X"`                      |
| talents       | `array` of `Talent` enum         | `[ "Light", "Elemental" ]` |
| subType       | `string` of `WeaponSubType` enum | `"Axe"`, `"Staff"`         |

<br/>

**`Image`** contains information needed to correctly display card images

| Field      | Data type                         | Examples                            |
| ---------- | --------------------------------- | ----------------------------------- |
| art        | `string` of `Art` enum            | `"Cold Foil"`, `"Standard"`         |
| edition    | `string` of `ReleaseEdition` enum | `"Alpha"`, `"Unlimited"`            |
| identifier | `string`                          | `"1HP001"`                          |
| name       | `string`                          | `"1HP001.width-450"`                |
| set        | `string` of `Release` enum        | `"Dynasty"`, `"Uprising"`           |
| treatment  | `string` of `Treatment` enum      | `"Alternate Art"`, `"Extended Art"` |

## Enums

**`Class`**

```ts
"NotClassed", "Generic", "Bard", "Brute", "Guardian", "Illusionist", "Mechanologist", "Merchant", "Ninja", "Ranger", "Runeblade", "Shapeshifter", "Warrior", "Wizard",
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
"Not talented", "Draconic", "Earth", "Elemental", "Ice", "Light", "Lightning", "Royal", "Shadow",
```

<br/>

**`Type`**

```ts
"Action", "Attack Action", "Attack Reaction", "Defense Reaction", "Equipment", "Hero", "Instant", "Mentor", "Resource", "Token", "Weapon",
```

<br/>

**`ActionSubType`**, **`EquipmentSubType`**, **`ResourceSubType`**, **`TokenSubType`**, **`WeaponSubType`**

```ts
// ActionSubType
"Ally", "Attack", "Arrow", "Aura", "Item", "Landmark", "Non-Attack", "Trap",

//  EquipmentSubType
"Arms", "Chest", "Head", "Legs", "Off-Hand",

// ResourceSubType
"Gem",

// TokenSubType
"Ally", "Aura", "Item",

// WeaponSubType
"Axe", "Bow", "Claw", "Club", "Dagger", "Flail", "Gun", "Hammer", "Orb", "Pistol", "Scepter", "Scythe", "Staff", "Sword",
```

<br/>

**`HandsRequired`**

```ts
"1H", "2H",
```

<br/>

**`Hero`**

```ts
"Azalea", "Benji", "Boltyn", "Bravo", "Briar", "Chane", "Dash", "Data Doll", "Dorinthea", "Emperor", "Genis Wotchuneed", "Ira", "Iyslander", "Kano", "Kassai", "Katsu", "Kavdaen", "Kayo", "Levia", "Lexi", "Oldhim", "Prism", "Rhinar", "Ruu’di", "Shiyana", "Taylor", "Valda", "Viserai", "Yorick",
```

<br/>

**`Keyword`**

```ts
"Arcane Barrier", "Battleworn", "Blade Break", "Blood Debt", "Boost", "Channel", "Charge", "Combo", "Crush", "Dominate", "Essence", "Freeze", "Fusion", "Go Again", "Heave", "Intimidate", "Legendary", "Mentor", "Negate", "Opt", "Phantasm", "Reload", "Reprise", "Specialization", "Spectra", "Spellvoid", "Temper", "Thaw", "Unfreeze",
```

## Working with this project

### Card data

- [src/cards.tsv](src/cards.tsv) is the source of truth for all generated data. The data is managed in Google Sheets and sourced from [the-fab-cube/flesh-and-blood-cards](https://github.com/the-fab-cube/flesh-and-blood-cards).

### Data transformations

There are three steps involved in transforming the `.tsv` source data into typed `.ts` code - executed via `npm run transform`.

1. [src/parser.ts](src/parser.ts) reads from the `.tsv` file and converts the data into JavaScript objects (performing basic steps like converting comma-delimited lists into arrays)
1. [src/mapper.ts](src/mapper.ts) takes the parsed card data and transforms it to match the interfaces in [src/interfaces.ts](src/interfaces.ts)
1. [src/writer.ts](src/writer.ts) creates `.ts` files containing the card information and all types

### Bundling the library

To generate the distributed package code run `npm run build` after transforming the data.
