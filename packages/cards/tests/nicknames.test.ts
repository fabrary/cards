import { describe, expect, it } from "vitest";
import { cards } from "../dist/index.js";

const getNicknamesByName = (name: string) =>
  cards
    .filter((card) => card.name === name)
    .map(({ cardIdentifier, nicknames }) => [cardIdentifier, nicknames]);

describe("Nicknames", () => {
  it("are carried by the nicknamed card", () => {
    expect(getNicknamesByName("Art of War")).toEqual([
      ["art-of-war-yellow", ["AoW"]],
    ]);
  });

  it("are carried by every pitch of the nicknamed name", () => {
    expect(getNicknamesByName("Fyendal's Fighting Spirit")).toEqual([
      ["fyendals-fighting-spirit-red", ["FFS"]],
      ["fyendals-fighting-spirit-yellow", ["FFS"]],
      ["fyendals-fighting-spirit-blue", ["FFS"]],
    ]);
  });

  it("are absent from a card nobody nicknames", () => {
    expect(getNicknamesByName("Call to the Grave")).toEqual([
      ["call-to-the-grave-blue", undefined],
    ]);
  });
});
