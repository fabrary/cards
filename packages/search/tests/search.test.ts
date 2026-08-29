import { describe, expect, it, xit } from "@jest/globals";
import {
  Foiling,
  getIsArenaCard,
  Hero,
  Meta,
  Rarity,
  Release,
  Treatment,
  Type,
} from "@flesh-and-blood/types";
import { cards } from "@flesh-and-blood/cards";
import Search, { SearchCard } from "../src/search";
import { getCatalogueIndex } from "../src/searchIndex";
import { setToSetIdentifierMappings } from "@flesh-and-blood/types";
import { doubleSidedCards } from "./_doubleSidedCards";

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
  [390, 'text:"gets go again"', 'text:"gets **go again**"'],

  // Chain
  [10, "chain:dishonor"],
  [8, "chain:mugenshi"],

  // Referenced by
  [3, 'referencedBy:"Open the Center"'],
  [1, "referencedBy:Viserai"],

  // References
  [19, "references:copper"],
  [49, 'references:"hyper driver"'],
  [4, 'referencedby:"big bertha"'],

  // First release date
  [236, "year:2019"],
];

describe("Card search", () => {
  const cardSearch = new Search(doubleSidedCards);

  it.each(exactSearches)(
    "Gets %i cards for %s",
    (resultCount, ...searchTerms) => {
      for (const searchTerm of searchTerms) {
        const { searchResults } = cardSearch.search(
          randomizeCapitalization(searchTerm as string),
        );
        expect(searchResults.length).toBeGreaterThanOrEqual(
          resultCount as number,
        );
      }
    },
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
        percent: 94,
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
        percent: 6,
        lessThan: true,
        searchTerms: ["!legal:cc", "-legal:cc", "!l:cc", "-l:cc"],
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
        randomizeCapitalization(searchTerm as string),
      );
      const percentOfCards = Math.round(
        (100 * searchResults.length) / cards.length,
      );
      if (lessThan) {
        expect(percentOfCards).toBeLessThan(percent);
      } else {
        expect(percentOfCards).toBeGreaterThan(percent);
      }
    }
  });

  const heroFilters: string[][] = Object.values(Hero).map((hero) => [
    `l:"${hero}"`,
  ]);
  const hasQuantity: string[][] = [
    ...heroFilters,
    ["Kasaya"],
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
    ["legal:shiyana", "l:shiyana"],
    ["legal:shiyana keyword:specialization", "l:shiyana k:specialization"],
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
  ];
  it.each(hasQuantity)("Gets cards for %s", (...searchTerms) => {
    for (const searchTerm of searchTerms) {
      const { searchResults } = cardSearch.search(
        randomizeCapitalization(searchTerm as string),
      );

      // console.log(
      //   JSON.stringify({ keywords, appliedFilters, attributes }, null, 2)
      // );

      expect(searchResults.length).toBeGreaterThan(0);
    }
  });

  const heroAndFirstClassFilters: string[] = cards
    .filter(({ types }) => types.includes(Type.Hero))
    .filter(({ hero }) => hero !== Hero.Taylor)
    .map(({ classes, hero }) => `l:"${hero}" c:"${classes[0]}"`);
  it.each(heroAndFirstClassFilters)("Gets cards for %s", (searchTerm) => {
    const { searchResults } = cardSearch.search(
      randomizeCapitalization(searchTerm as string),
    );
    expect(searchResults.length).toBeGreaterThan(0);
  });

  const artTreatmentFilters: string[] = Object.values(Treatment).map(
    (treatment) => `treatment:"${treatment}"`,
  );
  it.each(artTreatmentFilters)("Gets cards for %s", (searchTerm) => {
    const { searchResults } = cardSearch.search(
      randomizeCapitalization(searchTerm as string),
    );
    expect(searchResults.length).toBeGreaterThan(0);
  });

  const firstCards = [["lightning press", "lightning-press-red"]];
  it.each(firstCards)(
    "Gets first card first",
    (criteria, firstCardIdentifier) => {
      const { searchResults } = cardSearch.search(criteria);

      expect(searchResults[0].cardIdentifier).toEqual(firstCardIdentifier);
    },
  );

  it("Excludes rarities correctly", () => {
    const { searchResults } = cardSearch.search("!r:common, set:out");

    const cardsWithCommonRarity = searchResults
      .filter(({ rarities }) => rarities.includes(Rarity.Common))
      .map(({ name }) => name);
    expect(cardsWithCommonRarity).toEqual([]);
  });

  xit("Specific test", () => {
    const { searchResults } = cardSearch.search(
      randomizeCapitalization("s:ros l:draft"),
    );

    expect(searchResults.length).toBeGreaterThan(0);
    // expect(searchResults.length).toBe(0);
  });

  it("Combines heroes correctly", () => {
    const { searchResults } = cardSearch.search("l:zen,nuu s:mst r:t,c,r");

    expect(searchResults.length).toEqual(148);
  });

  const punctuationCards = ["power:*", "{r}", "{p}"];

  it.each(punctuationCards)(
    "Handles punctuation correctly for %s",
    (criteria) => {
      const { searchResults } = cardSearch.search(criteria);

      expect(searchResults.length).toBeGreaterThan(0);
      expect(searchResults.length).toBeLessThan(Math.round(cards.length / 2));
    },
  );
});

const randomizeCapitalization = (str: string) =>
  str.replace(/./g, (char) =>
    Math.random() < 0.5 ? char.toUpperCase() : char,
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

describe("Returns prints when included", () => {
  const cardSearch = new Search(doubleSidedCards);

  it("ANQ", () => {
    const print = "ANQ";
    const {
      attributes: { prints },
    } = cardSearch.search(`print:"${print}"`);
    expect(prints).toBeTruthy();
    expect(prints[0]).toEqual(print.toLowerCase());
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

describe("Additional heroes", () => {
  const cardSearch = new Search(doubleSidedCards, ["Another" as Hero]);

  it("Another hero", () => {
    const { appliedFilters } = cardSearch.search('l:"Another"');
    expect(appliedFilters.length).toBe(1);
    expect(appliedFilters[0].values).toEqual(["another"]);
    expect(appliedFilters[0].filterToPropertyMapping.property).toEqual(
      "legalHeroes",
    );
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

describe("Every set has results", () => {
  const cardSearch = new Search(doubleSidedCards);

  it.each(Object.values(Release))("%s has results", (set: string) => {
    const { searchResults } = cardSearch.search(`s:"${set}"`);

    expect(searchResults.length).toBeGreaterThan(0);
  });

  it.each(Object.values(Release))(
    "%s has results from abbreviated set",
    (set: string) => {
      const abbreviations = setToSetIdentifierMappings[set] as string[];

      for (const abbreviation of abbreviations) {
        const { searchResults } = cardSearch.search(`s:${abbreviation}`);
        expect(searchResults.length).toBeGreaterThan(0);
      }
    },
  );
});

describe("Dorinthea demo deck", () => {
  const cardSearch = new Search(doubleSidedCards);

  const { searchResults } = cardSearch.search("s:ddd");
  expect(searchResults.length).toEqual(16);

  const { searchResults: results2 } = cardSearch.search(
    's:"dorinthea demo deck"',
  );
  expect(results2.length).toEqual(16);
});

describe("Armory decks are distinct", () => {
  const cardSearch = new Search(doubleSidedCards);

  it.each(
    Object.values(Release).filter((release) =>
      release.toUpperCase().includes("ARMORY DECK"),
    ),
  )("%s has distinct results", (set: string) => {
    const { searchResults } = cardSearch.search(`s:"${set}"`);
    const cardsNotInSet = searchResults.filter(
      ({ sets }) => !sets.includes(set as Release),
    );
    expect(cardsNotInSet.length).toBe(0);
  });
});

describe("Returns foiling when included", () => {
  const cardSearch = new Search(doubleSidedCards);

  it("Rainbow foil", () => {
    const {
      attributes: { foilings },
    } = cardSearch.search("foil:rainbow");
    expect(foilings).toBeTruthy();
    expect(foilings[0]).toEqual(Foiling.Rainbow);
  });

  it("Cold and gold foils", () => {
    const {
      attributes: { foilings },
    } = cardSearch.search("foil:gold,c");
    expect(foilings).toBeTruthy();
    expect(foilings.length).toEqual(2);
  });
});

describe("Returns matching prints", () => {
  const cardSearch = new Search(doubleSidedCards);

  it("Matching printing from foil", () => {
    const { searchResults } = cardSearch.search("foil:g");
    const searchResultsWithGoldFoilImage = searchResults.filter((card) =>
      card.printings.find(
        (printing) => printing.foiling === Foiling.Gold && !!printing.image,
      ),
    );
    for (const { matchingPrintings } of searchResultsWithGoldFoilImage) {
      expect(matchingPrintings?.length).toBeGreaterThan(0);

      for (const printing of matchingPrintings || []) {
        expect(printing).toBeTruthy();
        expect(printing.foiling).toEqual(Foiling.Gold);
      }
    }
  });

  it("Matching printing from set", () => {
    const { searchResults } = cardSearch.search("set:wtr");
    for (const { matchingPrintings } of searchResults) {
      expect(matchingPrintings?.length).toBeGreaterThan(0);

      for (const printing of matchingPrintings || []) {
        expect(printing).toBeTruthy();
        expect(printing.set).toEqual(Release.WelcomeToRathe);
      }
    }
  });

  it("Matching printing from prints", () => {
    const { searchResults } = cardSearch.search("print:ANQ");

    for (const { matchingPrintings } of searchResults) {
      expect(matchingPrintings?.length).toBeGreaterThan(0);

      for (const printing of matchingPrintings || []) {
        expect(printing).toBeTruthy();
        expect(printing.identifier.includes("ANQ")).toBeTruthy();
      }
    }
  });

  it("Matching printing from treatment", () => {
    const { searchResults } = cardSearch.search("treat:AA");

    for (const { matchingPrintings } of searchResults) {
      expect(matchingPrintings?.length).toBeGreaterThan(0);

      for (const printing of matchingPrintings || []) {
        expect(printing).toBeTruthy();

        const matchingTreatment = printing.treatments?.find(
          (treatment) => treatment === Treatment.AA,
        );
        expect(matchingTreatment).toEqual(Treatment.AA);
      }
    }
  });

  it("Matching printing from rarity", () => {
    const { searchResults } = cardSearch.search("r:v");

    for (const { matchingPrintings } of searchResults) {
      expect(matchingPrintings?.length).toBeGreaterThan(0);
      for (const printing of matchingPrintings || []) {
        expect(printing).toBeTruthy();
        expect(printing.rarity).toEqual(Rarity.Marvel);
      }
    }
  });

  it("Matching printing from card overlay limited filters", () => {
    const { searchResults } = cardSearch.search(
      "s:hnt !r:legendary,fabled l:draft,sealed",
    );
    for (const card of searchResults) {
      expect(card.matchingPrintings?.length).toBeGreaterThan(0);
      if (!card.meta || !card.meta.includes(Meta.Expansion)) {
        expect(card.matchingPrintings?.length).toBeGreaterThanOrEqual(1);
      }
      for (const printing of card.matchingPrintings || []) {
        expect(printing).toBeTruthy();
        expect(printing.set).toEqual(Release.TheHunted);
      }
    }
  });
});

describe("Shorthands property works", () => {
  const cardSearch = new Search(doubleSidedCards);

  it("Tap: leg tap", () => {
    const { searchResults } = cardSearch.search("tap");
    expect(searchResults).toBeTruthy();

    const legTap = searchResults.find(
      ({ cardIdentifier }) => cardIdentifier === "leg-tap-red",
    );
    expect(legTap).toBeTruthy();
  });

  it("Tap: spitfire", () => {
    const { searchResults } = cardSearch.search("tap");
    expect(searchResults).toBeTruthy();

    const spitfire = searchResults.find(
      ({ cardIdentifier }) => cardIdentifier === "spitfire",
    );
    expect(spitfire).toBeTruthy();
  });

  it("Leg Tap", () => {
    const { searchResults } = cardSearch.search("leg tap");
    expect(searchResults).toBeTruthy();

    const legTap = searchResults.find(
      ({ cardIdentifier }) => cardIdentifier === "leg-tap-red",
    );
    expect(legTap).toBeTruthy();

    const spitfire = searchResults.find(
      ({ cardIdentifier }) => cardIdentifier === "spitfire",
    );
    expect(spitfire).toBeFalsy();
  });

  it("Throw: throw caution to the wind", () => {
    const { searchResults } = cardSearch.search("throw");
    expect(searchResults).toBeTruthy();

    // console.log(JSON.stringify({ appliedFilters, keywords }, null, 2));
    expect(searchResults.length).toBeLessThan(doubleSidedCards.length);

    const throwCaution = searchResults.find(
      ({ cardIdentifier }) =>
        cardIdentifier === "throw-caution-to-the-wind-blue",
    );
    expect(throwCaution).toBeTruthy();
  });

  it("Flick: flicker wisp", () => {
    const { searchResults } = cardSearch.search("flick");
    expect(searchResults).toBeTruthy();
    expect(searchResults.length).toBeLessThan(doubleSidedCards.length);

    const flickerWisp = searchResults.find(
      ({ cardIdentifier }) => cardIdentifier === "flicker-wisp-yellow",
    );
    expect(flickerWisp).toBeTruthy();
  });

  it("Flick: flick knives", () => {
    const { searchResults } = cardSearch.search("flick");
    expect(searchResults).toBeTruthy();
    expect(searchResults.length).toBeLessThan(doubleSidedCards.length);

    const flickKnives = searchResults.find(
      ({ cardIdentifier }) => cardIdentifier === "flick-knives",
    );
    expect(flickKnives).toBeTruthy();
  });

  it("l:sage", () => {
    const { searchResults } = cardSearch.search("l:sage");
    // console.log(
    //   JSON.stringify({ appliedFilters, attributes, keywords }, null, 2),
    // );
    expect(searchResults).toBeTruthy();
    expect(searchResults.length).toBeLessThan(doubleSidedCards.length);
    expect(searchResults.length).toBeGreaterThan(500);

    const legendaryCards = searchResults.filter(({ rarities }) =>
      rarities.includes(Rarity.Legendary),
    );
    expect(legendaryCards.length).toEqual(0);
  });

  it("banned:cc", () => {
    const { searchResults } = cardSearch.search("banned:cc");
    // console.log(
    //   JSON.stringify({ appliedFilters, attributes, keywords }, null, 2),
    // );
    expect(searchResults).toBeTruthy();
    expect(searchResults.length).toBeLessThan(doubleSidedCards.length);
    expect(searchResults.length).toBeGreaterThan(0);
  });
});

describe("Minor sets", () => {
  const cardSearch = new Search(doubleSidedCards);

  it("Antiquity pack", () => {
    const ABBREVIATION = "ANQ";
    const { searchResults } = cardSearch.search(`print:${ABBREVIATION}`);

    expect(searchResults).toBeTruthy();
    expect(searchResults.length).toBeLessThan(doubleSidedCards.length);

    for (const result of searchResults) {
      const matchingSetIdentifier = result.setIdentifiers.find(
        (setIdentifier) => setIdentifier.startsWith(ABBREVIATION),
      );
      expect(matchingSetIdentifier).toBeTruthy();
    }
  });
});

describe("Meta property searches", () => {
  const cardSearch = new Search(doubleSidedCards);

  it("Dual class", () => {
    const { searchResults } = cardSearch.search(`is:dual`);

    expect(searchResults).toBeTruthy();
    expect(searchResults.length).toBeLessThan(doubleSidedCards.length);
    expect(searchResults.length).toBeGreaterThan(100);

    for (const { classes } of searchResults) {
      expect(classes.length).toEqual(2);
    }
  });

  it("Arena", () => {
    const { searchResults } = cardSearch.search(`is:arena`);

    expect(searchResults).toBeTruthy();
    expect(searchResults.length).toBeLessThan(doubleSidedCards.length);
    expect(searchResults.length).toBeGreaterThan(100);

    for (const card of searchResults) {
      expect(getIsArenaCard(card)).toBeTruthy();
    }
  });
});

describe("Preview searches", () => {
  const cardSearch = new Search(doubleSidedCards);

  const { searchResults: previewResults } = cardSearch.search(`is:preview`);
  const { searchResults: releasedResults } = cardSearch.search(`is:released`);

  // Asserted as invariants rather than counts: the number of unreleased cards
  // falls every time a product comes out, so a count would go stale on its own.
  it("Splits the card pool in two", () => {
    expect(previewResults.length).toBeGreaterThan(0);
    expect(releasedResults.length).toBeGreaterThan(0);
    expect(previewResults.length + releasedResults.length).toEqual(
      doubleSidedCards.length,
    );

    const previewIdentifiers = new Set(
      previewResults.map(({ cardIdentifier }) => cardIdentifier),
    );
    const overlapping = releasedResults.filter(({ cardIdentifier }) =>
      previewIdentifiers.has(cardIdentifier),
    );

    expect(overlapping).toEqual([]);
  });

  it("Puts every preview card after every released card", () => {
    let earliestPreviewDate = previewResults[0].firstReleaseDate;
    for (const { firstReleaseDate } of previewResults) {
      if (firstReleaseDate < earliestPreviewDate) {
        earliestPreviewDate = firstReleaseDate;
      }
    }

    let latestReleasedDate = releasedResults[0].firstReleaseDate;
    for (const { firstReleaseDate } of releasedResults) {
      if (firstReleaseDate > latestReleasedDate) {
        latestReleasedDate = firstReleaseDate;
      }
    }

    expect(earliestPreviewDate > latestReleasedDate).toBeTruthy();
  });

  const equivalentSearches = [
    ["is:preview", "is:spoiler"],
    ["is:preview", "is:unreleased"],
    ["is:preview", "-is:released"],
    ["is:released", "!is:preview"],
  ];
  it.each(equivalentSearches)("Matches %s with %s", (search, equivalent) => {
    const { searchResults } = cardSearch.search(search);
    const { searchResults: equivalentResults } = cardSearch.search(equivalent);

    expect(searchResults.length).toEqual(equivalentResults.length);
    expect(searchResults.map(({ cardIdentifier }) => cardIdentifier)).toEqual(
      equivalentResults.map(({ cardIdentifier }) => cardIdentifier),
    );
  });
});

describe("Relation filters", () => {
  const cardSearch = new Search(doubleSidedCards);

  const relationCounts = [
    [49, 'references:"hyper driver"'],
    [4, 'referencedby:"big bertha"'],
    [40, 'chain:"aether ashwing"'],
  ];

  it.each(relationCounts)(
    "Gets exactly %i cards for %s",
    (resultCount, searchTerm) => {
      const { searchResults } = cardSearch.search(searchTerm as string);

      expect(searchResults.length).toEqual(resultCount);
    },
  );

  const emptyChainSearches = ['chain:""', "chain:"];

  it.each(emptyChainSearches)("Seeds no chain from %s", (searchTerm) => {
    const { searchResults } = cardSearch.search(searchTerm);

    expect(searchResults.length).toEqual(0);
  });

  it("Answers for every pitch of the card the argument names", () => {
    const { searchResults } = cardSearch.search('references:"hyper driver"');
    const cardIdentifiers = searchResults.map(
      ({ cardIdentifier }) => cardIdentifier,
    );

    // Big Bertha names the pitched card and Speed Demon the token, and the
    // argument resolves to every pitch, so both answer.
    expect(cardIdentifiers).toEqual(
      expect.arrayContaining([
        "big-bertha-red",
        "big-bertha-yellow",
        "big-bertha-blue",
        "speed-demon-red",
      ]),
    );
  });

  it("Expands a partly named cycle to every pitch", () => {
    const { searchResults } = cardSearch.search('referencedby:"big bertha"');

    expect(
      searchResults.map(({ cardIdentifier }) => cardIdentifier).sort(),
    ).toEqual([
      "hyper-driver",
      "hyper-driver-blue",
      "hyper-driver-red",
      "hyper-driver-yellow",
    ]);
  });

  it("Matches every identifier it emitted and nothing besides", () => {
    const { appliedFilters, searchResults } = cardSearch.search(
      "references:runechant",
    );

    const identifierFilter = appliedFilters.find(
      ({ filterToPropertyMapping }) =>
        filterToPropertyMapping.property === "cardIdentifier",
    );

    expect(identifierFilter?.values.length).toBeGreaterThan(1);
    expect(identifierFilter?.valuesSet?.size).toEqual(
      identifierFilter?.values.length,
    );
    expect(
      searchResults.map(({ cardIdentifier }) => cardIdentifier).sort(),
    ).toEqual([...(identifierFilter?.values || [])].sort());
  });

  it("Leaves the rest of the corpus when the relation is excluded", () => {
    const { searchResults } = cardSearch.search("references:runechant");
    const { searchResults: remainingResults } = cardSearch.search(
      "-references:runechant",
    );

    expect(remainingResults.length).toEqual(
      doubleSidedCards.length - searchResults.length,
    );
    expect(
      remainingResults.filter(({ cardIdentifier }) =>
        searchResults.some(
          (matched) => matched.cardIdentifier === cardIdentifier,
        ),
      ),
    ).toEqual([]);
  });

  it("Chains the cards it collected, not the cards named like them", () => {
    const { searchResults } = cardSearch.search('chain:"aether ashwing"');
    const names = searchResults.map(({ name }) => name);

    expect(names).toContain("Ash");
    expect(names).not.toContain("Bash Brute");
    expect(names).not.toContain("Cash In");
    expect(names).not.toContain("Blade Flash");
  });
});

describe("Keyword index", () => {
  const cardSearch = new Search(doubleSidedCards);
  const getKeywordIndex = () =>
    (cardSearch as unknown as { fuse?: unknown }).fuse;

  it("Is built on the first keyword search and kept afterwards", () => {
    const { searchResults: filteredResults } = cardSearch.search("s:ddd");
    expect(filteredResults.length).toBeGreaterThan(0);
    expect(getKeywordIndex()).toBeUndefined();

    const { searchResults: keywordResults } = cardSearch.search("leg tap");
    expect(keywordResults.length).toBeGreaterThan(0);

    const keywordIndex = getKeywordIndex();
    expect(keywordIndex).toBeTruthy();

    const { searchResults: laterResults } = cardSearch.search("flick");
    expect(laterResults.length).toBeGreaterThan(0);
    expect(getKeywordIndex()).toBe(keywordIndex);
  });
});

describe("Shared catalogue index", () => {
  const catalogueIndex = getCatalogueIndex(doubleSidedCards);
  // A hero's pool is the shape a search over a shared index takes: a slice of
  // the catalogue holding none of the heroes and only some of what its own
  // cards name.
  const heroPool = doubleSidedCards.filter(
    (card) =>
      card.legalHeroes.includes(Hero.Maxx) && !card.types.includes(Type.Hero),
  );
  const pooledCardIdentifiers = new Set(
    heroPool.map(({ cardIdentifier }) => cardIdentifier),
  );
  const pooledSearch = new Search(heroPool, { index: catalogueIndex });
  const poolIndexedSearch = new Search(heroPool);

  const getIdentifiers = (results: SearchCard[]): string[] =>
    results.map(({ cardIdentifier }) => cardIdentifier);

  const searchTerms = [
    ["hyper driver"],
    ["c:mechanologist d:2"],
    ['references:"hyper driver"'],
    ['referencedby:"big bertha"'],
  ];

  it.each(searchTerms)("Answers %s from the pool alone", (searchTerm) => {
    const { searchResults } = pooledSearch.search(searchTerm);
    const resultsOutsideThePool = getIdentifiers(searchResults).filter(
      (cardIdentifier) => !pooledCardIdentifiers.has(cardIdentifier),
    );

    expect(searchResults.length).toBeGreaterThan(0);
    expect(resultsOutsideThePool).toEqual([]);
  });

  it.each(searchTerms)(
    "Answers %s as the pool's own index does",
    (searchTerm) => {
      expect(
        getIdentifiers(pooledSearch.search(searchTerm).searchResults),
      ).toEqual(
        getIdentifiers(poolIndexedSearch.search(searchTerm).searchResults),
      );
    },
  );

  it("Resolves a relation to a card the pool does not hold", () => {
    // Scabskin Leathers is equipment outside the pool; the pool's own index
    // cannot name it, the shared one can.
    expect(pooledCardIdentifiers.has("scabskin-leathers")).toBe(false);
    expect(
      getIdentifiers(
        pooledSearch.search('references:"scabskin leathers"').searchResults,
      ),
    ).toEqual(["venomback-fabric-yellow"]);
    expect(
      poolIndexedSearch.search('references:"scabskin leathers"').searchResults,
    ).toEqual([]);
  });

  it("Takes the heroes, the sets and the debug flag positionally", () => {
    const positionalSearch = new Search(heroPool, [Hero.Maxx], [], false);

    const { appliedFilters } = positionalSearch.search('l:"Maxx"');
    expect(appliedFilters[0].values).toEqual(["maxx"]);

    expect(
      getIdentifiers(
        positionalSearch.search("c:mechanologist d:2").searchResults,
      ),
    ).toEqual(
      getIdentifiers(
        poolIndexedSearch.search("c:mechanologist d:2").searchResults,
      ),
    );
  });
});

describe("Nicknames etc", () => {
  const cardSearch = new Search(doubleSidedCards);

  it("Disease tokens", () => {
    const { searchResults } = cardSearch.search(`disease`);

    expect(searchResults).toBeTruthy();
    const diseaseTokens = ["Bloodrot Pox", "Inertia", "Frailty"];

    for (const token of diseaseTokens) {
      const matchingResult = searchResults.find(({ name }) => name === token);
      expect(matchingResult).toBeTruthy();
    }
  });

  it("Sin", () => {
    const { searchResults } = cardSearch.search(`disease`);

    expect(searchResults).toBeTruthy();
    const diseaseTokens = ["Bloodrot Pox", "Inertia", "Frailty"];

    for (const token of diseaseTokens) {
      const matchingResult = searchResults.find(({ name }) => name === token);
      expect(matchingResult).toBeTruthy();
    }
  });
});
