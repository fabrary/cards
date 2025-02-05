import {
  getIsArenaCard,
  getIsDeckCard,
  getCardIdentifier,
  getSpecialPrinting,
  getDefaultPrinting,
  getIsCardTokenForDeck,
} from "../src/helpers";
import {
  Foiling,
  Keyword,
  Printing,
  Release,
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
    }
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
  ];

  it.each(identifiers)(
    "%s has set identifiers",
    (name, { expected: { number, string }, pitch }) => {
      const card = { name };
      if (pitch || pitch === 0) {
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
    }
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
});

describe("Printings", () => {
  it("Gets correct default and special printings for Fealty", () => {
    const cardIdentifier = "fealty";
    const name = "Fealty";
    const printings: Printing[] = [
      {
        artists: ["Mario Wibisono"],
        foiling: Foiling.C,
        identifier: "HNT167",
        image: "HNT167_V2",

        print: "HNT167-Cold-Full Art",
        set: Release.TheHunted,

        treatment: Treatment.FA,
      },
      {
        artists: ["Mario Wibisono"],

        identifier: "HNT167",
        image: "HNT167",

        print: "HNT167",
        set: Release.TheHunted,
      },
    ];

    const defaultPrinting = getDefaultPrinting(
      { cardIdentifier, name },
      printings
    );
    expect(defaultPrinting.image).toEqual("HNT167");

    const specialPrinting = getSpecialPrinting(
      { cardIdentifier, name },
      printings
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
        set: Release.TheHunted,
        treatment: Treatment.AA,
        treatments: [Treatment.AA],
      },
      {
        artists: ["Federico Musetti"],
        foiling: Foiling.R,
        identifier: "HNT260",
        image: "HNT260-EA",
        isExpansionSlot: true,
        print: "HNT260-Rainbow-Extended Art",
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
      printings
    );
    expect(specialPrinting.image).toEqual("HNT260-EA");
  });
});
