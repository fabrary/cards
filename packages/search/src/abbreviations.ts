import { Card } from "@flesh-and-blood/types";

export interface Abbreviation {
  abbreviations: string[];
  card: string;
}

export const getAbbreviation = (
  abbreviation: string
): Abbreviation | undefined => {
  return abbreviations.find(({ abbreviations }) =>
    abbreviations.find((a) => a.toLowerCase() === abbreviation)
  );
};

export const getAbbreviationByCard = (c: Card): Abbreviation | undefined => {
  return abbreviations.find(
    ({ card }) => card.toLowerCase() === c.name.toLowerCase()
  );
};

export const abbreviations: Abbreviation[] = [
  {
    abbreviations: ["3oak"],
    card: "Three of a Kind",
  },
  {
    abbreviations: ["ALS"],
    card: "Arc Light Sentinel",
  },
  {
    abbreviations: ["AoW"],
    card: "Art of War",
  },
  {
    abbreviations: ["BBD"],
    card: "Barraging Beatdown",
  },
  {
    abbreviations: ["BEB"],
    card: "Bull's Eye Bracers",
  },
  {
    abbreviations: ["BLW"],
    card: "Be Like Water",
  },
  {
    abbreviations: ["BOHH"],
    card: "Blood on Her Hands",
  },
  {
    abbreviations: ["BRB"],
    card: "Bloodrush Bellow",
  },
  {
    abbreviations: ["Breezies"],
    card: "Breeze Rider Boots",
  },
  {
    abbreviations: ["BTA"],
    card: "Burn Them All",
  },
  {
    abbreviations: ["🎂", "Cake"],
    card: "Ninth Blade of the Blood Oath",
  },
  {
    abbreviations: ["CLF"],
    card: "Channel Lake Frigid",
  },
  {
    abbreviations: ["CMH"],
    card: "Channel Mount Heroic",
  },
  {
    abbreviations: ["C&C", "CnC"],
    card: "Command and Conquer",
  },
  {
    abbreviations: ["CStrike", "C-Strike", "C Strike"],
    card: "Celestial Cataclysm",
  },
  {
    abbreviations: ["CtW"],
    card: "Crush the Weak",
  },
  {
    abbreviations: ["CoD"],
    card: "Crown of Dominion",
  },
  {
    abbreviations: ["CoP"],
    card: "Crown of Providence",
  },
  {
    abbreviations: ["DD"],
    card: "Death Dealer",
  },
  {
    abbreviations: ["DPot", "D Pot"],
    card: "Potion of Deja Vu",
  },
  {
    abbreviations: ["Dullcap"],
    card: "Arcanite Skullcap",
  },
  {
    abbreviations: ["EBTT"],
    card: "Even Bigger Than That!",
  },
  {
    abbreviations: ["EPot", "E Pot"],
    card: "Energy Potion",
  },
  {
    abbreviations: ["EStrike", "E-Strike", "E Strike"],
    card: "Enlightened Strike",
  },
  {
    abbreviations: ["FFS"],
    card: "Fyendal's Fighting Spirit",
  },
  {
    abbreviations: ["FoN"],
    card: "Force of Nature",
  },
  {
    abbreviations: ["Frosty", "🥶", "🧊", "❄️"],
    card: "Frostbite",
  },
  {
    abbreviations: ["Frosty Hammer"],
    card: "Winter's Wail",
  },
  {
    abbreviations: ["GnT"],
    card: "Give and Take",
  },
  {
    abbreviations: ["HMH"],
    card: "Hope Merchant's Hood",
  },
  {
    abbreviations: ["HoI"],
    card: "Heart of Ice",
  },
  {
    abbreviations: ["KKBB"],
    card: "Knick Knack Bric-a-brac",
  },
  {
    abbreviations: ["LCF", "Newminaris"],
    card: "Luminaris, Celestial Fury",
  },
  {
    abbreviations: ["LDE"],
    card: "Last Ditch Effort",
  },
  {
    abbreviations: ["LFaL", "L4aL"],
    card: "Life for a Life",
  },
  {
    abbreviations: ["LiT"],
    card: "Lost in Thought",
  },
  {
    abbreviations: ["LNW"],
    card: "Leave No Witnesses",
  },
  {
    abbreviations: ["LoW"],
    card: "Lord of Wind",
  },
  {
    abbreviations: ["LtC"],
    card: "Lead the Charge",
  },
  {
    abbreviations: ["MaxV"],
    card: "Maximum Velocity",
  },
  {
    abbreviations: ["MMB"],
    card: "Mage Master Boots",
  },
  {
    abbreviations: ["MnG"],
    card: "Meat and Greet",
  },
  {
    abbreviations: ["MoM"],
    card: "Mask of Momentum",
  },
  {
    abbreviations: ["PJs", "Pajamas"],
    card: "Alluvion Constellas",
  },
  {
    abbreviations: ["Ponder Run"],
    card: "Premeditate",
  },
  {
    abbreviations: ["Pox Malone", "Post Malone"],
    card: "Virulent Touch",
  },
  {
    abbreviations: ["PF", "🔥"],
    card: "Phoenix Flame",
  },
  {
    abbreviations: ["PoM"],
    card: "Peace of Mind",
  },
  {
    abbreviations: ["RitL"],
    card: "Red in the Ledger",
  },
  {
    abbreviations: ["SFaF", "S4aS"],
    card: "Scar for a Scar",
  },
  {
    abbreviations: ["SWK"],
    card: "Spinning Wheel Kick",
  },
  {
    abbreviations: ["Starvo"],
    card: "Bravo, Star of the Show",
  },
  {
    abbreviations: ["SSP"],
    card: "Sand Sketched Plan",
  },
  {
    abbreviations: ["SFTL"],
    card: "Swing Fist, Think Later",
  },
  {
    abbreviations: ["TAYG"],
    card: "That All You Got?",
  },
  {
    abbreviations: ["TROM"],
    card: "This Round's on Me",
  },
  {
    abbreviations: ["TTT"],
    card: "Take the Tempo",
  },
  {
    abbreviations: ["ZTS"],
    card: "Zero to Sixty",
  },
];