import { parseCardData } from "./parser";
import { mapCardData } from "./mapper";
import { writeFiles } from "./writer";
import { getArtists } from "./artists";
import { filterOutUnwantedCards } from "./excludes";

const file = `${__dirname}/card.csv`;
const outputDirectory = "data";

const spoilers = `${__dirname}/spoilers.csv`;

const parsedCards = [
  ...parseCardData(file).filter(filterOutUnwantedCards),
  ...parseCardData(spoilers).filter(filterOutUnwantedCards),
];
const cards = mapCardData(parsedCards);
const artists = getArtists(cards);

writeFiles(artists, cards, outputDirectory);
