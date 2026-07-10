import { describe, it } from "@jest/globals";
import { cards } from "../dist/index";

describe("Restrictions seem reasonable", () => {
  it.each(cards.map(({ cardIdentifier }) => cardIdentifier))(
    "%s restrictions seem reasonable",
    (_cardIdentifier) => {},
  );
});
