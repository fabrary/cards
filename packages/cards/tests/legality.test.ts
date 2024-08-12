import { Card, Hero, Keyword } from "@flesh-and-blood/types";
import { cards } from "../dist/index";
import { heroToFilterMapping } from "../scripts/Shared/legality";

describe("Hero legality", () => {
  it.each(Object.values(Hero))("%s has a filter", (hero: Hero) => {
    const { classes } = heroToFilterMapping[hero];

    expect(classes.length).toBeGreaterThan(0);
  });
});
