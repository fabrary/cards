import { Release } from "./interfaces";

const identifierExtensionMapping: { [key: string]: string } = {
  [Release.RhinarBlitzDeck]: "-Blitz",
};

export const getPrint = (printing: {
  identifier: string;
  image?: string;
  edition?: string;
  foiling?: string;
  set: string;
  treatment?: string;
}) => {
  const identifierExtension = identifierExtensionMapping[printing.set] || "";
  const identifier = `${printing.identifier}${identifierExtension}`;

  const edition = printing.edition ? `-${printing.edition}` : ``;
  const foiling = printing.foiling ? `-${printing.foiling}` : ``;
  const treatment = printing.treatment ? `-${printing.treatment}` : ``;

  const back = printing.image?.toLowerCase().includes("back") ? `-Back` : ``;

  const v3 = printing.image?.toLowerCase().includes("_v3") ? `-V3` : ``;

  return `${identifier}${edition}${foiling}${treatment}${back}${v3}`;
};
