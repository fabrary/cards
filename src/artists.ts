import { Card } from "./interfaces";

export const getArtists = (cards: Card[]): string[] => {
  const artistSet = new Set<string>();
  for (const card of cards) {
    for (const artist of card.artists) {
      artistSet.add(artist);
    }
  }
  const artists = Array.from(artistSet).sort((art1, art2) =>
    art1.toLowerCase().localeCompare(art2.toLowerCase())
  );
  return artists;
};
