import { describe, expect, it } from "@jest/globals";
import {
  getIsArenaCard,
  getIsDeckCard,
  getCardIdentifier,
  getSpecialPrinting,
  getDefaultPrinting,
  getIsCardTokenForDeck,
  getCardFromGEMCardIdentifier,
  getBoomerPrinting,
  getMaxRarityPrinting,
} from "../src/helpers";
import {
  Foiling,
  Keyword,
  Printing,
  Rarity,
  Release,
  ReleaseEdition,
  Subtype,
  Treatment,
  Type,
} from "../src/interfaces";

describe("Card identifiers", () => {
  const identifiers: [
    string,
    {
      expected: { number: string; string: string };
      pitch?: number;
    },
  ][] = [
    [
      "Invoke Miragai",
      {
        expected: {
          number: "invoke-miragai-1",
          string: "invoke-miragai-red",
        },
        pitch: 1,
      },
    ],
    [
      "Gorganian Tome",
      {
        expected: {
          number: "gorganian-tome",
          string: "gorganian-tome",
        },
      },
    ],
    [
      "Maxx ‘The Hype’ Nitro",
      {
        expected: {
          number: "maxx-the-hype-nitro",
          string: "maxx-the-hype-nitro",
        },
      },
    ],
  ];

  it.each(identifiers)(
    "%s has set identifiers",
    (name, { expected: { number, string }, pitch }) => {
      const card = { name };
      if (pitch || pitch === 0) {
        // @ts-ignore
        card["pitch"] = pitch;
      }

      const cardIdentifierString = getCardIdentifier(card);
      expect(cardIdentifierString).toEqual(string);

      let useNumber = false;
      const cardIdentifierString2 = getCardIdentifier(card, useNumber);
      expect(cardIdentifierString2).toEqual(string);

      useNumber = true;
      const cardIdentiferNumber = getCardIdentifier(card, useNumber);
      expect(cardIdentiferNumber).toEqual(number);
    },
  );
});

const gemCards: {
  cardIdentifier: string;
  oppositeSideCardIdentifiers?: string[];
}[] = [
  // Standard
  {
    cardIdentifier: "gorganian-tome",
  },
  {
    cardIdentifier: "maxx-the-hype-nitro",
  },
  // Double sided
  {
    cardIdentifier: "burn-up--shock-red",
  },
  {
    cardIdentifier: "figment-of-erudition-yellow",
    oppositeSideCardIdentifiers: ["suraya-archangel-of-erudition"],
  },
  {
    cardIdentifier: "invoke-miragai-red",
    oppositeSideCardIdentifiers: ["miragai"],
  },
  {
    cardIdentifier: "singularity-red",
    oppositeSideCardIdentifiers: ["teklovossen-the-mechropotent"],
  },
  {
    cardIdentifier: "stir-the-pot-blue",
    oppositeSideCardIdentifiers: ["inner-chi-blue"],
  },
];

describe("GEM card identifiers", () => {
  const identifiers: [string, string][] = [
    // Standard
    ["gorganian-tome", "gorganian-tome"],
    ["maxx-the-hype-nitro", "maxx-the-hype-nitro"],
    // Double sided
    ["burn-up--shock-1", "burn-up--shock-red"],
    [
      "figment-of-erudition-2--suraya-archangel-of-erudition",
      "figment-of-erudition-yellow",
    ],
    ["invoke-miragai-1--miragai", "invoke-miragai-red"],
    ["singularity-1--teklovossen-the-mechropotent", "singularity-red"],
    ["stir-the-pot-3--inner-chi-3", "stir-the-pot-blue"],
  ];

  it.each(identifiers)(
    "%s has set identifiers",
    (gemIdentifier, expectedIdentifier) => {
      const card = getCardFromGEMCardIdentifier(gemIdentifier, gemCards);
      expect(card?.cardIdentifier).toEqual(expectedIdentifier);
    },
  );
});

describe("Card types", () => {
  const types = Object.values(Type).filter((type) => type !== Type.Hero);

  it.each(types)("%s is an arena or deck card", (type) => {
    const isArenaCard = getIsArenaCard({ types: [type] });
    const isDeckCard = getIsDeckCard({ types: [type] });
    const isToken = getIsCardTokenForDeck({ types: [type] });

    let numberOfMatches = 0;
    if (isArenaCard) {
      numberOfMatches++;
    }
    if (isDeckCard) {
      numberOfMatches++;
    }
    if (isToken) {
      numberOfMatches++;
    }

    const isArenaOrDeckOrTokenCard = isArenaCard || isDeckCard || isToken;

    expect(isArenaOrDeckOrTokenCard).toEqual(true);
    expect(numberOfMatches).toEqual(1);
  });

  const kissOfDeath = {
    keywords: [Keyword.Stealth],
    subtypes: [Subtype.Attack, Subtype.Dagger],
    types: [Type.Action],
  };
  it("Gets correct card type for Kiss of Death", () => {
    const isArenaCard = getIsArenaCard(kissOfDeath);
    expect(isArenaCard).toEqual(false);

    const isDeckCard = getIsDeckCard(kissOfDeath);
    expect(isDeckCard).toEqual(true);
  });

  const crackedBauble = {
    keywords: [],
    subtypes: [],
    types: [Type.Resource],
  };
  it("Gets correct card type for Cracked Bauble", () => {
    const isArenaCard = getIsArenaCard(crackedBauble);
    expect(isArenaCard).toEqual(false);

    const isDeckCard = getIsDeckCard(crackedBauble);
    expect(isDeckCard).toEqual(true);
  });
});

describe("Printings", () => {
  it("Gets correct default and special printings for Fealty", () => {
    const cardIdentifier = "fealty";
    const name = "Fealty";
    const printings: Printing[] = [
      {
        artists: ["Mario Wibisono"],
        foiling: Foiling.Cold,
        identifier: "HNT167",
        image: "HNT167_V2",

        print: "HNT167-Cold-Full Art",
        rarity: Rarity.Token,
        set: Release.TheHunted,

        treatment: Treatment.FA,
      },
      {
        artists: ["Mario Wibisono"],

        identifier: "HNT167",
        image: "HNT167",

        print: "HNT167",
        rarity: Rarity.Token,
        set: Release.TheHunted,
      },
    ];

    const defaultPrinting = getDefaultPrinting(
      { cardIdentifier, name },
      printings,
    );
    expect(defaultPrinting.image).toEqual("HNT167");

    const specialPrinting = getSpecialPrinting(
      { cardIdentifier, name },
      printings,
    );
    expect(specialPrinting.image).toEqual("HNT167_V2");
  });

  it("Gets correct default and special printings for CnC with only HNT printings", () => {
    const cardIdentifier = "command-and-conquer-red";
    const name = "Command and Conquer";
    const printings: Printing[] = [
      {
        artists: ["Federico Musetti"],
        identifier: "HNT260",
        image: "HNT260",
        isExpansionSlot: true,
        print: "HNT260",
        rarity: Rarity.Legendary,
        set: Release.TheHunted,
        treatment: Treatment.AA,
        treatments: [Treatment.AA],
      },
      {
        artists: ["Federico Musetti"],
        foiling: Foiling.Rainbow,
        identifier: "HNT260",
        image: "HNT260-EA",
        isExpansionSlot: true,
        print: "HNT260-Rainbow-Extended Art",
        rarity: Rarity.Legendary,
        set: Release.TheHunted,
        treatment: Treatment.EA,
        treatments: [Treatment.EA, Treatment.AA],
      },
    ];

    // const defaultPrinting = getDefaultPrinting(
    //   { cardIdentifier, name },
    //   printings
    // );
    // expect(defaultPrinting.image).toEqual("HNT260");

    const specialPrinting = getSpecialPrinting(
      { cardIdentifier, name },
      printings,
    );
    expect(specialPrinting.image).toEqual("HNT260-EA");
  });

  it("Gets correct printings for CnC", () => {
    const cardIdentifier = "command-and-conquer-red";
    const name = "Command and Conquer";
    const printings: Printing[] = [
      {
        artists: ["Jessada Sutthi"],

        identifier: "PEN319",
        image: "PEN319",

        print: "PEN319-Alternate Art",
        rarity: Rarity.Legendary,
        set: Release.CompendiumOfRathe,
        tcgplayer: {
          productId: "675375",
          url: "https://www.tcgplayer.com/product/675375?Language=English&Printing=Normal",
        },
        treatment: Treatment.AA,
        treatments: [Treatment.AA],
      },
      {
        artists: ["Federico Musetti"],

        identifier: "HNT260",
        image: "HNT260",
        isExpansionSlot: true,

        print: "HNT260-Alternate Art",
        rarity: Rarity.Legendary,
        set: Release.TheHunted,
        tcgplayer: {
          productId: "612718",
          url: "https://www.tcgplayer.com/product/612718?Language=English&Printing=Normal",
        },
        treatment: Treatment.AA,
        treatments: [Treatment.AA],
      },
      {
        artists: ["Federico Musetti"],
        foiling: Foiling.Rainbow,
        identifier: "HNT260",
        image: "HNT260-EA",
        isExpansionSlot: true,

        print: "HNT260-Rainbow-Alternate Art-Extended Art",
        rarity: Rarity.Legendary,
        set: Release.TheHunted,
        tcgplayer: {
          productId: "614533",
          url: "https://www.tcgplayer.com/product/614533?Language=English&Printing=Rainbow+Foil",
        },
        treatment: Treatment.AA,
        treatments: [Treatment.AA, Treatment.EA],
      },
      {
        artists: ["Othon Nikolaidis"],
        foiling: Foiling.Cold,
        identifier: "DYN000",
        image: "DYN000",

        print: "DYN000-Cold-Alternate Art-Extended Art",
        rarity: Rarity.Fabled,
        set: Release.Dynasty,
        tcgplayer: {
          productId: "454212",
          url: "https://www.tcgplayer.com/product/454212?Language=English&Printing=Cold+Foil",
        },
        treatment: Treatment.AA,
        treatments: [Treatment.AA, Treatment.EA],
      },
      {
        artists: ["Fajareka Setiawan"],

        identifier: "1HP360",
        image: "1HP360",

        print: "1HP360",
        rarity: Rarity.Majestic,
        set: Release.HistoryPack1,
        tcgplayer: {
          productId: "270947",
          url: "https://www.tcgplayer.com/product/270947?Language=English&Printing=Normal",
        },
      },
      {
        artists: ["Fajareka Setiawan"],
        edition: ReleaseEdition.First,
        identifier: "ARC159",
        image: "ARC159",

        print: "ARC159-First",
        rarity: Rarity.Majestic,
        set: Release.ArcaneRising,
        tcgplayer: {
          productId: "225899",
          url: "https://www.tcgplayer.com/product/225899?Language=English&Printing=1st+Edition+Normal",
        },
      },
      {
        artists: ["Fajareka Setiawan"],
        edition: ReleaseEdition.First,
        foiling: Foiling.Rainbow,
        identifier: "ARC159",
        image: "ARC159",

        print: "ARC159-First-Rainbow",
        rarity: Rarity.Majestic,
        set: Release.ArcaneRising,
        tcgplayer: {
          productId: "225899",
          url: "https://www.tcgplayer.com/product/225899?Language=English&Printing=1st+Edition+Rainbow+Foil",
        },
      },
      {
        artists: ["Fajareka Setiawan"],
        edition: ReleaseEdition.Unlimited,
        identifier: "ARC159",
        image: "U-ARC159",

        print: "ARC159-Unlimited",
        rarity: Rarity.Majestic,
        set: Release.ArcaneRising,
        tcgplayer: {
          productId: "225899",
          url: "https://www.tcgplayer.com/product/225899?Language=English&Printing=Unlimited+Edition+Normal",
        },
      },
      {
        artists: ["Fajareka Setiawan"],
        edition: ReleaseEdition.Unlimited,
        foiling: Foiling.Rainbow,
        identifier: "ARC159",
        image: "U-ARC159",

        print: "ARC159-Unlimited-Rainbow",
        rarity: Rarity.Majestic,
        set: Release.ArcaneRising,
        tcgplayer: {
          productId: "225899",
          url: "https://www.tcgplayer.com/product/225899?Language=English&Printing=Unlimited+Edition+Rainbow+Foil",
        },
      },
      {
        artists: ["Jessada Sutthi"],
        foiling: Foiling.Rainbow,
        identifier: "ANQ009",
        image: "ANQ009",

        print: "ANQ009-Rainbow-Alternate Art-Alternate Border-Extended Art",
        rarity: Rarity.Legendary,
        set: Release.Promos,
        tcgplayer: {
          productId: "675355",
          url: "https://www.tcgplayer.com/product/675355?Language=English&Printing=Rainbow+Foil",
        },
        treatment: Treatment.AA,
        treatments: [Treatment.AA, Treatment.AB, Treatment.EA],
      },
      {
        artists: ["Joseph Qiu"],
        foiling: Foiling.Rainbow,
        identifier: "FAB278",
        image: "FAB278",

        print: "FAB278-Rainbow-Alternate Art",
        rarity: Rarity.Promo,
        set: Release.Promos,

        treatment: Treatment.AA,
        treatments: [Treatment.AA],
      },
    ];

    const defaultPrinting = getDefaultPrinting(
      { cardIdentifier, name },
      printings,
    );
    expect(defaultPrinting.image).toEqual("PEN319");

    const boomerPrinting = getBoomerPrinting(
      { cardIdentifier, name },
      printings,
    );
    expect(boomerPrinting.image).toEqual("ARC159");

    const specialPrinting = getSpecialPrinting(
      { cardIdentifier, name },
      printings,
    );
    expect(specialPrinting.image).toEqual("ANQ009");

    const maxRarityPrinting = getMaxRarityPrinting(
      { cardIdentifier, name },
      printings,
    );
    expect(maxRarityPrinting.image).toEqual("DYN000");
  });
});
