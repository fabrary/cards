import { Foiling, Rarity, Release, Treatment } from "@flesh-and-blood/types";
import { cards } from "@flesh-and-blood/cards";
import Search from "./search";

const exactSearches = [
  // Abbreviations & shorthands
  [3, "bbd"],
  [2, "cnc"],
  [167, "poppers"],
  [1, "newminaris"],

  // Sets
  [237, "set:uprising", "set:upr", "s:uprising", "s:upr"],
  [53, 'set:"classic battles: rhinar vs dorinthea"', "s:dvr", "s:rvd"],
  [
    226,
    'set:"welcome to rathe"',
    "set:wtr",
    "set:rathe",
    'set:"welcome to"',
    's:"welcome to rathe"',
    "s:wtr",
    "s:rathe",
    's:"welcome to"',
  ],
  [236, "set:welcome", "s:welcome"], // Includes WTR and Ira Welcome deck
  [
    238,
    'set:"tales of aria"',
    "set:tales",
    "set:aria",
    "set:ele",
    's:"tales of aria"',
    "s:tales",
    "s:aria",
    "s:ele",
  ],

  // Popular searches
  [
    13,
    "set:uprising subtype:ally !type:placeholder",
    "s:uprising st:ally !t:placeholder",
  ],
  [
    45,
    'legal:fai talent:draconic keyword:"go again"',
    'l:fai tal:draconic k:"go again"',
  ],
  [42, "type:equipment defense:>=2", "t:equipment d:>=2"],
  [27, 'class:wizard "arcane damage plus"', 'c:wizard "arcane damage plus"'],
  [
    17,
    "legal:data class:mechanologist subtype:item cost:<=2",
    "l:data c:mechanologist st:item co:<=2",
  ],
  [66, "legal:rhinar power:>=6", "l:rhinar pwr:>=6"],
  [13, "legal:kassai copper", "l:kassai copper"],
  [21, "legal:cc type:hero", "l:cc t:hero"],
  [38, "legal:blitz type:hero", "l:blitz t:hero"],

  // Punctuation
  [1, "show time!", "show time"],
  [1, "seeker's leggings", "seekers leggings"],
  [1, "this round's on me", "this round’s on me", "this rounds on me"],

  // Text
  [18, "text:copper"],

  // Chain
  [10, "chain:dishonor"],
  [8, "chain:mugenshi"],

  // Referenced by
  [3, 'referencedBy:"Open the Center"'],
  [1, "referencedBy:Viserai"],

  // References
  [17, "references:copper"],
];

describe("Card search", () => {
  const cardSearch = new Search(cards);

  it.each(exactSearches)(
    "Gets %i cards for %s",
    (resultCount, ...searchTerms) => {
      for (const searchTerm of searchTerms) {
        const { searchResults } = cardSearch.search(
          randomizeCapitalization(searchTerm as string)
        );
        expect(searchResults.length).toEqual(resultCount);
      }
    }
  );

  interface Ratio {
    percent: number;
    lessThan?: boolean;
    searchTerms: string[];
  }
  const ratioSearches: (string | Ratio)[][] = [
    // Formats
    [
      "legal:blitz",
      {
        percent: 95,
        searchTerms: ["legal:blitz", "l:blitz"],
      },
    ],
    [
      "!legal:blitz",
      {
        percent: 5,
        lessThan: true,
        searchTerms: ["!legal:blitz", "-legal:blitz", "!l:blitz", "-l:blitz"],
      },
    ],
    [
      "legal:cc",
      {
        percent: 95,
        searchTerms: [
          'legal:"classic constructed"',
          "legal:cc",
          "legal:classic",
          "legal:constructed",
          'l:"classic constructed"',
          "l:cc",
          "l:classic",
          "l:constructed",
        ],
      },
    ],
    [
      "!legal:cc",
      {
        percent: 5,
        lessThan: true,
        searchTerms: ["!legal:cc", "-legal:cc", "!l:cc", "-l:cc"],
      },
    ],
    [
      "l:commoner",
      {
        percent: 50,
        searchTerms: ["legal:commoner", "l:commoner"],
      },
    ],
    [
      "!l:commoner",
      {
        percent: 50,
        lessThan: true,
        searchTerms: [
          "!legal:commoner",
          "-legal:commoner",
          "!l:commoner",
          "-l:commoner",
        ],
      },
    ],
    [
      "l:clash",
      {
        percent: 70,
        searchTerms: ["legal:clash", "l:clash"],
      },
    ],
    [
      "!l:clash",
      {
        percent: 30,
        lessThan: true,
        searchTerms: ["!legal:clash", "-legal:clash", "!l:clash", "-l:clash"],
      },
    ],

    // Classes
    [
      "c:generic",
      {
        percent: 10,
        searchTerms: ["class:generic", "c:generic"],
      },
    ],
  ];

  it.each(ratioSearches)("Gets card ratios for %s", (search, ratio) => {
    const { percent, lessThan, searchTerms } = ratio as Ratio;
    for (const searchTerm of searchTerms) {
      const { searchResults } = cardSearch.search(
        randomizeCapitalization(searchTerm as string)
      );
      const percentOfCards = Math.round(
        (100 * searchResults.length) / cards.length
      );
      if (lessThan) {
        expect(percentOfCards).toBeLessThan(percent);
      } else {
        expect(percentOfCards).toBeGreaterThan(percent);
      }
    }
  });

  const hasQuantity = [
    ["!pitch"],
    ["artist:delmiro"],
    ["treatment:ab"],
    ["treat:alt"],
    ["var:ea", "var:extended"],
    ['variation:"full art" foil:cold'],
    ["legal:ira", "l:ira"],
    ["legal:emperor,clash cnc"],
    ["legal:shiyana", "l:shiyana"],
    ["legal:shiyana keyword:specialization", "l:shiyana k:specialization"],
    ["legal:shiyana,clash arknight ascendancy"],
    ["legal:prism,clash figment"],
    ["legal:boltyn"],
    ["legal:emperor"],
    ["legal:emperor cnc"],
    ["legal:iyslander"],
    ["legal:dromai"],
    ["legal:fai"],
    ["legal:boltyn keyword:charge", "l:boltyn k:charge"],
    [
      'legal:iyslander pitch:3 type:action,instant !type:reaction !subtype:attack !keyword:"go again"',
      'l:iyslander p:3 t:action,instant !t:reaction !st:attack !k:"go again"',
    ],
    [
      'legal:benji power:<=2 keyword:"go again"',
      'l:benji pow:<=2 k:"go again"',
    ],
  ];
  it.each(hasQuantity)("Gets cards for %s", (...searchTerms) => {
    for (const searchTerm of searchTerms) {
      const { searchResults } = cardSearch.search(
        randomizeCapitalization(searchTerm as string)
      );
      expect(searchResults.length).toBeGreaterThan(0);
    }
  });

  const hasNoQuantity = [
    [
      "legal:shiyana,commoner cnc",
      "legal:shiyana,clash figment",
      "legal:shiyana,clash cnc",
      "legal:prism,commoner figment of erudition",
      "legal:prism,clash dread scythe",
    ],
  ];
  it.each(hasNoQuantity)("Gets zero cards for %s", (...searchTerms) => {
    for (const searchTerm of searchTerms) {
      const { searchResults } = cardSearch.search(
        randomizeCapitalization(searchTerm as string)
      );
      expect(searchResults.length).toEqual(0);
    }
  });

  it("Excludes rarities correctly", () => {
    const { searchResults } = cardSearch.search("!r:common, set:out");

    const cardsWithCommonRarity = searchResults
      .filter(({ rarities }) => rarities.includes(Rarity.Common))
      .map(({ name }) => name);
    expect(cardsWithCommonRarity).toEqual([]);
  });
});

const randomizeCapitalization = (str: string) =>
  str.replace(/./g, (char) =>
    Math.random() < 0.5 ? char.toUpperCase() : char
  );

describe("Sorts results by set when included", () => {
  const cardSearch = new Search(cards);

  it("Outsiders", () => {
    const { searchResults } = cardSearch.search("set:out");
    expect(searchResults.map(({ name }) => name)).toMatchSnapshot();
  });
});

describe("Returns set when included", () => {
  const cardSearch = new Search(cards);

  it("Outsiders", () => {
    const {
      attributes: { releases },
    } = cardSearch.search("set:out");
    expect(releases).toBeTruthy();
    expect(releases[0]).toEqual(Release.Outsiders);
  });

  it("Tales of Aria plus", () => {
    const {
      attributes: { releases },
    } = cardSearch.search('set:"Tales of Aria" talent:earth');
    expect(releases).toBeTruthy();
    expect(releases[0]).toEqual(Release.TalesOfAria);
  });
});

describe("Returns foiling when included", () => {
  const cardSearch = new Search(cards);

  it("Rainbow foil", () => {
    const {
      attributes: { foilings },
    } = cardSearch.search("foil:rainbow");
    expect(foilings).toBeTruthy();
    expect(foilings[0]).toEqual(Foiling.R);
  });

  it("Cold and gold foils", () => {
    const {
      attributes: { foilings },
    } = cardSearch.search("foil:gold,c");
    expect(foilings).toBeTruthy();
    expect(foilings.length).toEqual(2);
  });
});

describe("Returns matching prints when release or foiling included", () => {
  const cardSearch = new Search(cards);

  it("Matching printing from foil", () => {
    const { searchResults } = cardSearch.search("foil:g");
    const searchResultsWithGoldFoilImage = searchResults.filter((card) =>
      card.printings.find(
        (printing) => printing.foiling === Foiling.G && !!printing.image
      )
    );
    for (const card of searchResultsWithGoldFoilImage) {
      for (const printing of card.matchingPrintings) {
        expect(printing).toBeTruthy();
        expect(printing.foiling).toEqual(Foiling.G);
      }
    }
  });

  it("Matching printing from set", () => {
    const { searchResults } = cardSearch.search("set:wtr");
    for (const card of searchResults) {
      for (const printing of card.matchingPrintings) {
        expect(printing).toBeTruthy();
        expect(printing.set).toEqual(Release.WelcomeToRathe);
      }
    }
  });

  it("Matching printing from treatment", () => {
    const { searchResults } = cardSearch.search("treat:aa");
    const searchResultsWithAltArtImage = searchResults.filter((card) =>
      card.printings.find(
        (printing) => printing.treatment === Treatment.AA && !!printing.image
      )
    );
    for (const card of searchResultsWithAltArtImage) {
      for (const printing of card.matchingPrintings) {
        expect(printing).toBeTruthy();
        expect(printing.treatment).toEqual(Treatment.AA);
      }
    }
  });
});