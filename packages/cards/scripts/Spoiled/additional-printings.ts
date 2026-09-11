// A spoiler row carries a bounded number of printing column blocks, so a card with more
// arts than the sheet has blocks lists the rest here. Each series is one base printing
// plus the art letters its images carry; every letter becomes its own printing.
// An entry retires once the fork's card.json carries the printings, since the released
// merge matches on print.
export interface AdditionalPrintingSeries {
  artLetters: string[];
  artists: string[];
  foilingString?: string;
  identifier: string;
  imageBase: string;
  rarityString: string;
  setString: string;
  treatmentStrings?: string[];
}

export const additionalPrintingsByCardIdentifier: {
  [cardIdentifier: string]: AdditionalPrintingSeries[];
} = {
  "corrupted-corpse": [
    {
      artLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
      artists: ["Sebastian Giacobino"],
      foilingString: "C",
      identifier: "FAB514",
      imageBase: "FAB514-MV",
      rarityString: "P",
      setString: "FAB",
      treatmentStrings: ["AA", "FA"],
    },
  ],
};
