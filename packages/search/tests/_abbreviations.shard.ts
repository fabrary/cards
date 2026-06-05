import { describe, expect, it } from "@jest/globals";
import { cards } from "@flesh-and-blood/cards";
import { abbreviations } from "../src/abbreviations";
import Search from "../src/search";

// The abbreviation checks are split across SHARD_COUNT sibling `*.test.ts` files
// so jest's worker pool runs them in parallel. Each check is a CPU-bound
// fuse.js search and the ~117 sequential searches were the long pole of the
// suite (~13s). Sharding cuts that to ~3s with no behaviour change. See
// ../../../plans/cards/SEARCH_SPEED_PLAN.md for why fuse.search is the cost.
export const SHARD_COUNT = 6;

export const runAbbreviationShard = (shard: number): void => {
  const cardSearch = new Search(cards);
  const slice = abbreviations.filter((_, idx) => idx % SHARD_COUNT === shard);

  describe(`Abbreviations (shard ${shard + 1}/${SHARD_COUNT})`, () => {
    if (shard === 0) {
      it("Blood on Her Hands", () => {
        const { searchResults } = cardSearch.search("bohh");
        expect(searchResults.length).toEqual(1);
        expect(searchResults[0].name).toEqual("Blood on Her Hands");
      });
    }

    it.each(slice.map(({ abbreviations, card }) => [abbreviations, card]))(
      "Gets matching cards for %s",
      (abbreviations, card) => {
        for (const abbreviation of abbreviations) {
          const { searchResults } = cardSearch.search(abbreviation);
          expect(searchResults.length).toBeGreaterThanOrEqual(1);
          expect(searchResults[0].name).toEqual(card);
        }
      },
    );
  });
};
