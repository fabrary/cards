import { parseCardData } from "./parser";
import { mapCardData } from "./mapper";
import { writeFiles } from "./writer";

const file = `${__dirname}/card.csv`;
const outputDirectory = "data";

const spoilers = `${__dirname}/spoilers.csv`;

const parsedCards = [...parseCardData(file), ...parseCardData(spoilers)];
const cards = mapCardData(parsedCards);

writeFiles(cards, outputDirectory);
