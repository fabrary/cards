export const shorthands: {
  description: string;
  filters: string[];
  helper?: string;
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
  {
    description: "Gain life",
    filters: ["gain {h}"],
    shorthands: ["Gain life", "Gains life"],
  },
  { description: "Go again", filters: ['k:"go again"'], shorthands: ["GA"] },
  {
    description: "Non-attack actions",
    filters: ["t:action", "st:non-attack"],
    shorthands: ["NAA"],
  },
  {
    description: "Plus defense",
    filters: ["+ {d}"],
    shorthands: [
      "Pump defense",
      "Pumps defense",
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
      "Pump power",
      "Pumps power",
      "Buff power",
      "Buffs power",
    ],
  },
  {
    description: "Poppers",
    filters: ["!c:illusionist", "st:attack", "pwr:>=6", "def:>=0"],
    helper:
      '6+ power non-Illusionist attacks that can "pop" phantasm attacks when defending',
    shorthands: ["Poppers", "Popper"],
  },
  { description: "Spellvoid", filters: ['k:"spellvoid"'], shorthands: ["SV"] },
];

export const multiWordShorthands = shorthands
  .filter(({ shorthands }) =>
    shorthands.some((shorthand) => shorthand.includes(" "))
  )
  .map((shorthand) => ({
    ...shorthand,
    shorthands: shorthand.shorthands
      .filter((shorthand) => shorthand.includes(" "))
      .map((shorthand) => shorthand.toLowerCase())
      .sort((s1, s2) => s2.length - s1.length),
  }));

export const singleWordShorthands = shorthands
  .filter(({ shorthands }) =>
    shorthands.some((shorthand) => !shorthand.includes(" "))
  )
  .map((shorthand) => ({
    ...shorthand,
    shorthands: shorthand.shorthands
      .filter((shorthand) => !shorthand.includes(" "))
      .map((shorthand) => shorthand.toLowerCase())
      .sort((s1, s2) => s2.length - s1.length),
  }));
