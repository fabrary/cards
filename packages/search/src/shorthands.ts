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
  // {
  //   description: "Flick daggers",
  //   expanded: ["dagger you control deal 1 damage"],
  //   filters: {
  //     functionalText: "dagger you control deal 1 damage",
  //   },
  //   isCardProperty: true,
  //   shorthands: ["Flick", "Hurl", "Throw"],
  // },
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
  // {
  //   description: "Plus power",
  //   expanded: ["+ {p}"],
  //   filters: {
  //     functionalText: "+ {p}",
  //   },
  //   isCardProperty: false,
  //   shorthands: [
  //     "Pumps",
  //     "Pump",
  //     "Buff",
  //     "Buffs",
  //     "Pump attack",
  //     "Pump attacks",
  //     "Pumps attack",
  //     "Pumps attacks",
  //     "Buff attack",
  //     "Buff attacks",
  //     "Buffs attack",
  //     "Buffs attacks",
  //     "Pump power",
  //     "Pumps power",
  //     "Buff power",
  //     "Buffs power",
  //   ],
  // },
  // {
  //   description: "Poppers",
  //   expanded: ["!c:illusionist", "st:attack", "pwr:>=6", "def:>=0"],
  //   filters: {
  //     defenseGreaterThanOrEqualTo: 0,
  //     notClass: [Class.Illusionist],
  //     powerGreaterThanOrEqualTo: 6,
  //     subtypes: [Subtype.Attack],
  //   },
  //   isCardProperty: false,
  //   helper:
  //     '6+ power non-Illusionist attacks that can "pop" phantasm attacks when defending',
  //   shorthands: ["Poppers", "Popper"],
  // },
  {
    description: "Spellvoid",
    expanded: ['k:"spellvoid"'],
    filters: {
      keywords: [Keyword.Spellvoid],
    },
    isCardProperty: false,
    shorthands: ["SV"],
  },
  // {
  //   description: "Tap",
  //   expanded: ["{t}"],
  //   filters: {
  //     functionalText: "{t}",
  //   },
  //   isCardProperty: true,
  //   shorthands: ["Tap"],
  // },
  // {
  //   description: "Untap",
  //   expanded: ["{u}"],
  //   filters: {
  //     functionalText: "{u}",
  //   },
  //   isCardProperty: true,
  //   shorthands: ["Untap"],
  // },
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
