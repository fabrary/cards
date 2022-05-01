const fs = require("fs");
const Papa = require("papaparse");

const csv = fs.readFileSync(`${__dirname}/cards.tsv`, "utf8");

const parsed = Papa.parse(csv, { header: true, dynamicTyping: true });

console.log(parsed);
