export const shorthands: {
  description: string;
  filters: string[];
  shorthands: string[];
}[] = [
  {
    description: "Attack actions",
    filters: ["st:attack"],
    shorthands: ["AA"],
  },
  {
    description: "Arcane barrier",
    filters: ['k:"arcane barrier"'],
    shorthands: ["AB"],
  },
  {
    description: "Attack reactions",
    filters: ['t:"attack reaction"'],
    shorthands: ["AR"],
  },
  {
    description: "Defense reactions",
    filters: ['t:"defense reaction"'],
    shorthands: ["DR"],
  },
  { description: "Go again", filters: ['k:"go again"'], shorthands: ["GA"] },
  {
    description: "Non-attack actions",
    filters: ["t:action", "st:nonattack"],
    shorthands: ["NAA"],
  },
  {
    description: "Plus defense",
    filters: ["+ {d}"],
    shorthands: [
      "Pumps defense",
      "Pump defense",
      "Buff defense",
      "Buffs defense",
    ],
  },
  {
    description: "Plus power",
    filters: ["+ {p}"],
    shorthands: [
      "Pumps",
      "Pump",
      "Buff",
      "Buffs",
      "Pump attack",
      "Pump attacks",
      "Pumps attack",
      "Pumps attacks",
      "Buff attack",
      "Buff attacks",
      "Buffs attack",
      "Buffs attacks",
    ],
  },
  {
    description: "Poppers",
    filters: ["!c:illusionist", "st:attack", "pwr:>=6", "def:>=0"],
    shorthands: ["Poppers", "Popper"],
  },
  { description: "Spellvoid", filters: ['k:"spellvoid"'], shorthands: ["SV"] },
];
