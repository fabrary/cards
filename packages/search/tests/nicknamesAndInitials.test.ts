import { describe, expect, it } from "vitest";
import { cards } from "@flesh-and-blood/cards";
import Search from "../src/search";
import { getCatalogueIndex } from "../src/searchIndex";

const cardSearch = new Search(cards);

const getNames = (text: string): string[] =>
  cardSearch.search(text).searchResults.map(({ name }) => name);

const getDistinctNames = (text: string): string[] => [
  ...new Set(getNames(text)),
];

describe("Nicknames", () => {
  it("lead with the nicknamed card, then the literal text matches", () => {
    const names = getNames("mom");

    expect(names[0]).toEqual("Mask of Momentum");
    expect(names.length).toBeGreaterThan(1);
  });

  it("report the nickname the free text was", () => {
    const { alias, searchResults } = cardSearch.search("AoW");

    expect(searchResults.map(({ name }) => name)).toEqual(["Art of War"]);
    expect(alias).toEqual({ kind: "nickname", text: "aow" });
  });

  it("match a nickname of several words whole, alongside a filter", () => {
    expect(getNames("e strike p:1")[0]).toEqual("Enlightened Strike");
  });

  it("leave a name searched in full unaliased", () => {
    const { alias, searchResults } = cardSearch.search("art of war");

    expect(searchResults[0].name).toEqual("Art of War");
    expect(alias).toBeUndefined();
  });
});

describe("Initials", () => {
  it("answer free text that matches no card", () => {
    const { alias, searchResults } = cardSearch.search("cttg");

    expect(searchResults.map(({ name }) => name)).toEqual([
      "Call to the Grave",
    ]);
    expect(alias).toEqual({ kind: "initials", text: "cttg" });
  });

  it("answer with every card sharing them, alphabetically", () => {
    expect(getDistinctNames("ptw")).toEqual([
      "Pilfer the Wreck",
      "Poison the Well",
    ]);
  });

  it("read a hyphenated word both as one word and as several", () => {
    expect(getDistinctNames("kkb")).toEqual(["Knick Knack Bric-a-brac"]);
    expect(getDistinctNames("kkbab")).toEqual(["Knick Knack Bric-a-brac"]);
  });

  it("need three letters", () => {
    expect(getNames("qf")).toEqual([]);
  });

  it("give way to the text's own matches", () => {
    const { alias, searchResults } = cardSearch.search("pop");

    expect(searchResults.length).toBeGreaterThan(3);
    expect(alias).toBeUndefined();
  });

  it("are narrowed by filters", () => {
    expect(getNames("cttg p:3")).toEqual(["Call to the Grave"]);
    expect(getNames("cttg p:1")).toEqual([]);
  });

  it("answer from the pool searched, not the whole catalogue", () => {
    const pool = cards.filter(({ name }) => name !== "Call to the Grave");
    const poolSearch = new Search(pool, { index: getCatalogueIndex(cards) });

    expect(poolSearch.search("cttg").searchResults).toEqual([]);
  });
});

describe("Hero filter values", () => {
  const getLegalCount = (text: string): number =>
    cardSearch.search(text).searchResults.length;

  it("match a hero by the start of its name", () => {
    expect(getLegalCount("l:gravy")).toEqual(getLegalCount('l:"gravy bones"'));
    expect(getLegalCount("l:dori")).toEqual(getLegalCount("l:dorinthea"));
  });

  it("match a hero's name written without its spaces", () => {
    expect(getLegalCount("l:datadoll")).toEqual(getLegalCount('l:"data doll"'));
  });

  it("leave a value starting several heroes' names unresolved", () => {
    expect(cardSearch.search("l:ka").unresolvedFilters).toEqual([
      { key: "l", reason: "value", values: ["ka"] },
    ]);
  });

  it("read a format's nickname as the format", () => {
    expect(getLegalCount("l:cc")).toEqual(
      getLegalCount('l:"classic constructed"'),
    );
  });
});
