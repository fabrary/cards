import { getCardIdentifier } from "../src/helpers";

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
