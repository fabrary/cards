export const shorthands: {
  description: string;
  filters: string[];
  shorthands: string[];
}[] = [
  {
    description: "Attack actions",
    filters: ["st:attack"],
    shorthands: ["aa"],
  },
  {
    description: "Arcane barrier",
    filters: ['k:"arcane barrier"'],
    shorthands: ["ab"],
  },
  {
    description: "Attack reactions",
    filters: ['t:"attack reaction"'],
    shorthands: ["ar"],
  },
  {
    description: "Defense reactions",
    filters: ['t:"defense reaction"'],
    shorthands: ["dr"],
  },
  { description: "Go again", filters: ['k:"go again"'], shorthands: ["ga"] },
  {
    description: "Non-attack actions",
    filters: ["t:action", "st:nonattack"],
    shorthands: ["naa"],
  },
  {
    description: "Poppers",
    filters: ["!c:illusionist", "st:attack", "pwr:>=6", "def:>=0"],
    shorthands: ["poppers", "popper"],
  },
  { description: "Spellvoid", filters: ['k:"spellvoid"'], shorthands: ["sv"] },
];
