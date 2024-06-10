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
});
