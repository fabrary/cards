import { parseCardData } from "./parser";
import { mapCardData } from "./mapper";
import { writeFiles } from "./writer";
import { getArtists } from "./artists";

const file = `${__dirname}/card.csv`;
const outputDirectory = "data";

const spoilers = `${__dirname}/spoilers.csv`;

const parsedCards = [...parseCardData(file), ...parseCardData(spoilers)];
const cards = mapCardData(parsedCards);
const artists = getArtists(cards);

writeFiles(artists, cards, outputDirectory);
