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
    abbreviations: ["10k"],
    card: "10,000 Year Reunion",
  },
  {
    abbreviations: ["Pajamas", "PJs"],
    card: "Alluvion Constellas",
  },
  {
    abbreviations: ["Dullcap"],
    card: "Arcanite Skullcap",
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
    abbreviations: ["BBS"],
    card: "Big Blue Sky",
  },
  {
    abbreviations: ["Starvo"],
    card: "Bravo, Star of the Show",
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
    abbreviations: ["BoJ"],
    card: "Balance of Justice",
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
    abbreviations: ["CStrike", "C-Strike", "C Strike"],
    card: "Celestial Cataclysm",
  },
  {
    abbreviations: ["CLF"],
    card: "Channel Lake Frigid",
  },
  {
    abbreviations: ["CLV"],
    card: "Channel Lightning Valley",
  },
  {
    abbreviations: ["CMH"],
    card: "Channel Mount Heroic",
  },
  {
    abbreviations: ["CMT"],
    card: "Channel the Millennium Tree",
  },
  {
    abbreviations: ["CnC", "C&C"],
    card: "Command and Conquer",
  },
  {
    abbreviations: ["CYB"],
    card: "Count Your Blessings",
  },
  {
    abbreviations: ["Cat", "Kitty"],
    card: "Crouching Tiger",
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
    abbreviations: ["CtW"],
    card: "Crush the Weak",
  },
  {
    abbreviations: ["DD"],
    card: "Death Dealer",
  },
  {
    abbreviations: ["DIO"],
    card: "Dash I/O",
  },
  {
    abbreviations: ["EBTT"],
    card: "Even Bigger Than That!",
  },
  {
    abbreviations: ["NewNigma"],
    card: "Enigma, New Moon",
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
    abbreviations: ["Yum yum"],
    card: "Fruits of the Forest",
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
    abbreviations: ["Pumpkin"],
    card: "Jack-o'-lantern",
  },
  {
    abbreviations: ["KKBB"],
    card: "Knick Knack Bric-a-brac",
  },
  {
    abbreviations: ["BStrike"],
    card: "Levels of Enlightenment",
  },
  {
    abbreviations: ["LAG", "Twominaris"],
    card: "Luminaris, Angel's Glow",
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
    abbreviations: ["LtC"],
    card: "Lead the Charge",
  },
  {
    abbreviations: ["LNW"],
    card: "Leave No Witnesses",
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
    abbreviations: ["LoW"],
    card: "Lord of Wind",
  },
  {
    abbreviations: ["MMB"],
    card: "Mage Master Boots",
  },
  {
    abbreviations: ["MaxV"],
    card: "Maximum Velocity",
  },
  {
    abbreviations: ["MoM"],
    card: "Mask of Momentum",
  },
  {
    abbreviations: ["MnG"],
    card: "Meat and Greet",
  },
  {
    abbreviations: ["Cake", "🎂"],
    card: "Ninth Blade of the Blood Oath",
  },
  {
    abbreviations: ["PoM"],
    card: "Peace of Mind",
  },
  {
    abbreviations: ["PF", "🔥"],
    card: "Phoenix Flame",
  },
  {
    abbreviations: ["PtW"],
    card: "Poison the Well",
  },
  {
    abbreviations: ["Thanos", "Infinity Gauntlet"],
    card: "Polarity Reversal Script",
  },
  {
    abbreviations: ["DPot", "D Pot"],
    card: "Potion of Déjà Vu",
  },
  {
    abbreviations: ["Ponder Run"],
    card: "Premeditate",
  },
  {
    abbreviations: ["Qi Unbound"],
    card: "Qi Unleashed",
  },
  {
    abbreviations: ["RitL"],
    card: "Red in the Ledger",
  },
  {
    abbreviations: ["Cats", "Ghost cat", "Ghost cats"],
    card: "Restless Coalescence",
  },
  {
    abbreviations: ["SSGB"],
    card: "Sandscour Greatbow",
  },
  {
    abbreviations: ["SSP"],
    card: "Sand Sketched Plan",
  },
  {
    abbreviations: ["SFaF", "S4aS"],
    card: "Scar for a Scar",
  },
  {
    abbreviations: ["SWOMB"],
    card: "Shifting Winds of the Mystic Beast",
  },
  {
    abbreviations: ["SWK"],
    card: "Spinning Wheel Kick",
  },
  {
    abbreviations: ["SFTL"],
    card: "Swing Fist, Think Later",
  },
  {
    abbreviations: ["TTT"],
    card: "Take the Tempo",
  },
  {
    abbreviations: ["Ultron"],
    card: "Teklovossen, the Mechropotent",
  },
  {
    abbreviations: ["ToS"],
    card: "Test of Strength",
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
    abbreviations: ["3oak"],
    card: "Three of a Kind",
  },
  {
    abbreviations: ["Pox Malone", "Post Malone"],
    card: "Virulent Touch",
  },
  {
    abbreviations: ["Cast Homes"],
    card: "Visit Goldmane Estate",
  },
  {
    abbreviations: ["Frosty Hammer"],
    card: "Winter's Wail",
  },
  {
    abbreviations: ["ZTS"],
    card: "Zero to Sixty",
  },
];
