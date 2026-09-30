import { describe, it } from "vitest";
import { cards } from "../dist/index";

describe("Restrictions seem reasonable", () => {
  it.each(cards.map(({ cardIdentifier }) => cardIdentifier))(
    "%s restrictions seem reasonable",
    (_cardIdentifier) => {},
  );
});
