const CARDS_TO_EXCLUDE = [
  "dragons of legend",
  "Intellect Penalty",
  "Venomback Fabric",
  "Fabric of Scales",
].map((card) => card.toLowerCase());

export const filterOutUnwantedCards = ({ name }: { name: string }) =>
  !CARDS_TO_EXCLUDE.includes(name.toLowerCase());
