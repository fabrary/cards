const CARDS_TO_EXCLUDE = ["dragons of legend"];

export const filterOutUnwantedCards = ({ name }: { name: string }) =>
  !CARDS_TO_EXCLUDE.includes(name.toLowerCase());
