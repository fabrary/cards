import {
  Card,
  Printing,
  getDefaultPrinting,
  getSpecialPrinting,
} from "@flesh-and-blood/types";
import { cards } from "../dist/index";

const riptide = cards.find(
  ({ cardIdentifier }) => cardIdentifier === "riptide-lurker-of-the-deep"
);

const cnc = cards.find(
  ({ cardIdentifier }) => cardIdentifier === "command-and-conquer-red"
);

describe("Gets the correct default and special printings", () => {
  it("Riptide", () => {
    const card = riptide as Card;
    const printings = riptide?.printings as Printing[];
    const defaultPrinting = getDefaultPrinting(card, printings);
    const specialPrinting = getSpecialPrinting(card, printings);

    expect(defaultPrinting).toBeTruthy();
    expect(defaultPrinting.identifier.includes("WIN")).toBeFalsy();

    expect(specialPrinting).toBeTruthy();
    expect(specialPrinting.identifier.includes("WIN")).toBeFalsy();
  });

  it("CnC", () => {
    const card = cnc as Card;
    const printings = card?.printings as Printing[];
    const defaultPrinting = getDefaultPrinting(card, printings);
    const specialPrinting = getSpecialPrinting(card, printings);

    expect(defaultPrinting).toBeTruthy();
    // expect(defaultPrinting.identifier).toEqual("PEN319");
    expect(defaultPrinting.identifier).toEqual("HNT260");

    expect(specialPrinting).toBeTruthy();
    expect(specialPrinting.identifier).toEqual("DYN000");
  });
});

describe("No white border cards for default or special images", () => {
  it.each(cards.map(({ cardIdentifier }) => cardIdentifier))(
    "%s",
    (cardIdentifier) => {
      const card = cards.find((card) => card.cardIdentifier === cardIdentifier);

      const defaultPrinting = getDefaultPrinting(
        card as Card,
        (card as Card).printings
      );
      expect(card?.defaultImage).not.toContain("HP");
      expect(defaultPrinting.image).not.toContain("HP");

      const specialPrinting = getSpecialPrinting(
        card as Card,
        (card as Card).printings
      );
      expect(card?.specialImage).not.toContain("HP");
      expect(specialPrinting.image).not.toContain("HP");
    }
  );
});
