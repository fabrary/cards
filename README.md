# Flesh and Blood cards

Card information is saved in the following files:

- [src/cards.csv](src/cards.csv): source of truth (managed in Google Sheets)
- [dist/cards.csv](dist/cards.csv): copy of `src/cards.csv`
- [dist/cards.json](dist/cards.json): generated from CSV
- [dist/index.js](dist/index.js): generated from CSV

To generate the `dist` version of `cards.csv`, `cards.json`, and `index.js` run `npm run build` after installing project dependencies.
