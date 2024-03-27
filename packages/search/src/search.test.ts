import {
  DoubleSidedCard,
  Foiling,
  Hero,
  Rarity,
  Release,
  Treatment,
} from "@flesh-and-blood/types";
import { cards } from "@flesh-and-blood/cards";
import Search from "./search";
import { getHeroBreakdown } from ".";

const doubleSidedCards: DoubleSidedCard[] = cards.map((card) => {
  if (card.oppositeSideCardIdentifier) {
    const oppositeSideCard = cards.find(
      ({ cardIdentifier }) => cardIdentifier === card.oppositeSideCardIdentifier
    );
    if (oppositeSideCard) {
      (card as DoubleSidedCard).oppositeSideCard = oppositeSideCard;
    }
  }
  return card;
});

const exactSearches = [
  // Abbreviations & shorthands
  [3, "bbd"],
  [2, "cnc"],
  // [174, "poppers"],
  [1, "newminaris"],
  [1, "twominaris"],

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
  // [45, "type:equipment defense:>=2", "t:equipment d:>=2"],
  [27, 'class:wizard "arcane damage plus"', 'c:wizard "arcane damage plus"'],
  // [
  //   17,
  //   "legal:data class:mechanologist subtype:item cost:<=2",
  //   "l:data c:mechanologist st:item co:<=2",
  // ],
  // [66, "legal:rhinar power:>=6", "l:rhinar pwr:>=6"],
  [13, "legal:kassai copper", "l:kassai copper"],
  // [20, "legal:cc type:hero", "l:cc t:hero"],
  // [39, "legal:blitz type:hero", "l:blitz t:hero"],

  // Punctuation
  [1, "show time!", "show time"],
  [1, "seeker's leggings", "seekers leggings"],
  [1, "this round's on me", "this round’s on me", "this rounds on me"],

  // Text
  [19, "text:copper"],

  // Chain
  [10, "chain:dishonor"],
  [8, "chain:mugenshi"],

  // Referenced by
  [3, 'referencedBy:"Open the Center"'],
  [1, "referencedBy:Viserai"],

  // References
  [19, "references:copper"],
];

describe("Card search", () => {
  const cardSearch = new Search(doubleSidedCards);

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

  const heroFilters = Object.values(Hero).map((hero) => [`l:"${hero}"`]);

  const hasQuantity: string[][] = [
    ...heroFilters,
    ["Qi Unbound"],
    ["Ultron"],
    ["overloop"],
    ['t:"demi-hero"'],
    ["!pitch"],
    ["artist:delmiro"],
    ["treatment:ab"],
    ["treat:alt"],
    ["var:ea", "var:extended"],
    ['variation:"full art" foil:cold'],
    ["legal:blitz type:hero", "l:blitz t:hero"],
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
    ["legal:nuu class:assassin"],
    ["legal:zen class:ninja"],
    ["legal:boltyn keyword:charge", "l:boltyn k:charge"],
    [
      'legal:iyslander pitch:3 type:action,instant !type:reaction !subtype:attack !keyword:"go again"',
      'l:iyslander p:3 t:action,instant !t:reaction !st:attack !k:"go again"',
    ],
    [
      'legal:benji power:<=2 keyword:"go again"',
      'l:benji pow:<=2 k:"go again"',
    ],
    ["legal:briar,clash rosetta thorn"],
    ,
  ];
  it.each(hasQuantity)("Gets cards for %s", (...searchTerms) => {
    for (const searchTerm of searchTerms) {
      const { searchResults } = cardSearch.search(
        randomizeCapitalization(searchTerm as string)
      );
      expect(searchResults.length).toBeGreaterThan(0);
    }
  });

  const { all } = getHeroBreakdown(cards);

  const heroAndFirstClassFilters: string[] = all.map(
    ({ classes, hero }) => `l:"${hero}" c:"${classes[0]}"`
  );
  it.each(heroAndFirstClassFilters)("Gets cards for %s", (searchTerm) => {
    const { searchResults } = cardSearch.search(
      randomizeCapitalization(searchTerm as string)
    );
    expect(searchResults.length).toBeGreaterThan(0);
  });

  const artTreatmentFilters: string[] = Object.values(Treatment).map(
    (treatment) => `treatment:"${treatment}"`
  );
  it.each(artTreatmentFilters)("Gets cards for %s", (searchTerm) => {
    const { searchResults, appliedFilters } = cardSearch.search(
      randomizeCapitalization(searchTerm as string)
    );
    expect(searchResults.length).toBeGreaterThan(0);
  });

  const hasNoQuantity = [
    [
      "legal:shiyana,commoner cnc",
      "legal:shiyana,clash figment",
      "legal:shiyana,clash cnc",
      "legal:prism,commoner figment of erudition",
      "legal:prism,clash dread scythe",
      "legal:chane,clash rosetta thorn",
      "legal:shiyana,clash rosetta thorn",
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

  const firstCards = [["lightning press", "lightning-press-red"]];
  it.each(firstCards)(
    "Gets first card first",
    (criteria, firstCardIdentifier) => {
      const { searchResults } = cardSearch.search(criteria);

      expect(searchResults[0].cardIdentifier).toEqual(firstCardIdentifier);
    }
  );

  it("Excludes rarities correctly", () => {
    const { searchResults } = cardSearch.search("!r:common, set:out");

    const cardsWithCommonRarity = searchResults
      .filter(({ rarities }) => rarities.includes(Rarity.Common))
      .map(({ name }) => name);
    expect(cardsWithCommonRarity).toEqual([]);
  });

  const punctuationCards = ["power:*", "{r}", "{p}"];

  it.each(punctuationCards)(
    "Handles punctuation correctly for %s",
    (criteria) => {
      const { searchResults } = cardSearch.search(criteria);

      expect(searchResults.length).toBeGreaterThan(0);
      expect(searchResults.length).toBeLessThan(Math.round(cards.length / 2));
    }
  );
});

const randomizeCapitalization = (str: string) =>
  str.replace(/./g, (char) =>
    Math.random() < 0.5 ? char.toUpperCase() : char
  );

describe("Returns artist when included", () => {
  const cardSearch = new Search(doubleSidedCards);

  it("Asur Misoa", () => {
    const artist = "Asur Misoa";
    const {
      attributes: { artists },
    } = cardSearch.search(`art:"${artist}"`);
    expect(artists).toBeTruthy();
    expect(artists[0]).toEqual(artist.toLowerCase());
  });

  it("Othon Nikolaidis", () => {
    const artist = "Othon";
    const {
      attributes: { artists },
    } = cardSearch.search(`r:marvel artist:${artist}`);
    expect(artists).toBeTruthy();
    expect(artists[0]).toEqual(artist.toLowerCase());
  });
});

describe("Sorts results by set when included", () => {
  const cardSearch = new Search(doubleSidedCards);

  it("Outsiders", () => {
    const { searchResults } = cardSearch.search("set:out");
    expect(searchResults.map(({ name }) => name)).toMatchSnapshot();
  });
});

describe("Returns set when included", () => {
  const cardSearch = new Search(doubleSidedCards);

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
  const cardSearch = new Search(doubleSidedCards);

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
  const cardSearch = new Search(doubleSidedCards);

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
