# Flesh and Blood cards

Card information is saved in the following files:

- [import/cards.csv](import/cards.csv): source of truth (managed in Google Sheets)
- [src/cards.json](src/cards.json): generated from CSV
- [dist/index.js](dist/index.js): generated from CSV

To regenerate `cards.json` and `index.js` run `npm run build` after installing project dependencies.
