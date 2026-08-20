import { Class, Keyword, Subtype, Type } from "@flesh-and-blood/types";

export const shorthands: {
  description: string;
  expanded: string[];
  filters: {
    defenseGreaterThanOrEqualTo?: number;
    functionalText?: string;
    keywords?: Keyword[];
    notClass?: Class[];
    powerGreaterThanOrEqualTo?: number;
    subtypes?: Subtype[];
    types?: Type[];
  };
  helper?: string;
  isCardProperty: boolean;
  shorthands: string[];
}[] = [
  {
    description: "Attack actions",
    expanded: ["st:attack"],
    filters: {
      subtypes: [Subtype.Attack],
    },
    isCardProperty: false,
    shorthands: ["AA"],
  },
  {
    description: "Arcane barrier",
    expanded: ['k:"arcane barrier"'],
    filters: {
      keywords: [Keyword.ArcaneBarrier],
    },
    isCardProperty: false,
    shorthands: ["AB"],
  },
  {
    description: "Attack reactions",
    expanded: ['t:"attack reaction"'],
    filters: {
      types: [Type.AttackReaction],
    },
    isCardProperty: false,
    shorthands: ["AR"],
  },
  {
    description: "Defense reactions",
    expanded: ['t:"defense reaction"'],
    filters: {
      types: [Type.DefenseReaction],
    },
    isCardProperty: false,
    shorthands: ["DR"],
  },
  {
    description: "Gain life",
    expanded: ["gain {h}"],
    filters: {
      functionalText: "gain {h}",
    },
    isCardProperty: false,
    shorthands: ["Gain life", "Gains life"],
  },
  {
    description: "Go again",
    expanded: ['k:"go again"'],
    filters: {
      keywords: [Keyword.GoAgain],
    },
    isCardProperty: false,
    shorthands: ["GA"],
  },
  {
    description: "Non-attack actions",
    expanded: ["t:action", "st:non-attack"],
    filters: {
      subtypes: [Subtype.NonAttack],
      types: [Type.Action],
    },
    isCardProperty: false,
    shorthands: ["NAA"],
  },
  {
    description: "Plus defense",
    expanded: ["+ {d}"],
    filters: {
      functionalText: "+ {d}",
    },
    isCardProperty: false,
    shorthands: [
      "Pump defense",
      "Pumps defense",
      "Buff defense",
      "Buffs defense",
    ],
  },
  {
    description: "Spellvoid",
    expanded: ['k:"spellvoid"'],
    filters: {
      keywords: [Keyword.Spellvoid],
    },
    isCardProperty: false,
    shorthands: ["SV"],
  },
];

export const multiWordShorthands = shorthands
  .filter(({ shorthands }) =>
    shorthands.some((shorthand) => shorthand.includes(" ")),
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
    shorthands.some((shorthand) => !shorthand.includes(" ")),
  )
  .map((shorthand) => ({
    ...shorthand,
    shorthands: shorthand.shorthands
      .filter((shorthand) => !shorthand.includes(" "))
      .map((shorthand) => shorthand.toLowerCase())
      .sort((s1, s2) => s2.length - s1.length),
  }));
