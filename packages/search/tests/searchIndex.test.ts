import { describe, expect, it } from "@jest/globals";
import { DoubleSidedCard } from "@flesh-and-blood/types";
import {
  buildSearchIndex,
  getCardsByName,
  getCardsReferencedBy,
  getCardsReferencing,
} from "../src/searchIndex";
import { doubleSidedCards } from "./_doubleSidedCards";

const index = buildSearchIndex(doubleSidedCards);

const getIdentifiers = (matches: DoubleSidedCard[]): string[] =>
  matches.map(({ cardIdentifier }) => cardIdentifier);

const getCard = (cardIdentifier: string): DoubleSidedCard =>
  index.cardByCardIdentifier.get(cardIdentifier) as DoubleSidedCard;

describe("Search index", () => {
  describe("Cards by name", () => {
    it("Returns every pitch of an exactly matched name", () => {
      expect(getIdentifiers(getCardsByName(index, "aether dart"))).toEqual([
        "aether-dart-red",
        "aether-dart-yellow",
        "aether-dart-blue",
      ]);
    });

    it("Matches a name the query strips punctuation from", () => {
      expect(getIdentifiers(getCardsByName(index, "a moments peace"))).toEqual([
        "a-moments-peace-blue",
      ]);
      expect(getIdentifiers(getCardsByName(index, "mugenshi release"))).toEqual(
        ["mugenshi-release-yellow"],
      );
    });

    it("Matches a name the query strips diacritics from", () => {
      expect(
        getIdentifiers(getCardsByName(index, "potion of deja vu")),
      ).toEqual(["potion-of-deja-vu-blue"]);
    });

    it("Matches a name the query spells with its punctuation", () => {
      expect(
        getIdentifiers(getCardsByName(index, "Mugenshi: RELEASE")),
      ).toEqual(["mugenshi-release-yellow"]);
    });

    it("Falls back to the first name containing the query", () => {
      expect(getIdentifiers(getCardsByName(index, "mugenshi"))).toEqual([
        "mugenshi-release-yellow",
      ]);
    });

    it("Returns the whole pitch cycle of a substring match", () => {
      expect(getIdentifiers(getCardsByName(index, "aether dar"))).toEqual([
        "aether-dart-red",
        "aether-dart-yellow",
        "aether-dart-blue",
      ]);
    });

    it("Returns nothing for a name no card carries", () => {
      expect(getCardsByName(index, "zzz no such card")).toEqual([]);
    });
  });

  describe("Cards referencing a card", () => {
    it("Returns every pitch of every referencing card", () => {
      expect(
        getIdentifiers(getCardsReferencing(index, getCard("head-jab-red"))),
      ).toEqual([
        "be-like-water-red",
        "be-like-water-yellow",
        "be-like-water-blue",
        "one-two-punch-red",
        "one-two-punch-yellow",
        "one-two-punch-blue",
        "open-the-center-red",
        "open-the-center-yellow",
        "open-the-center-blue",
        "recoil-red",
        "recoil-yellow",
        "recoil-blue",
      ]);
    });

    it("Answers the same for every pitch of the referenced card", () => {
      const referencingRed = getCardsReferencing(
        index,
        getCard("head-jab-red"),
      );
      const referencingBlue = getCardsReferencing(
        index,
        getCard("head-jab-blue"),
      );

      expect(getIdentifiers(referencingBlue)).toEqual(
        getIdentifiers(referencingRed),
      );
    });

    it("Unions the cards referencing each pitch of the named card", () => {
      const referencingToken = getCardsReferencing(
        index,
        getCard("hyper-driver"),
      );
      const identifiers = getIdentifiers(referencingToken);

      // The token is named by a handful of cards; its pitch siblings by dozens.
      expect(identifiers).toContain("speed-demon-red");
      expect(identifiers).toContain("big-bertha-red");
      expect(identifiers.length).toEqual(49);
    });

    it("Returns nothing for a card no other card names", () => {
      expect(getCardsReferencing(index, getCard("aether-dart-red"))).toEqual(
        [],
      );
    });
  });

  describe("Cards referenced by a card", () => {
    it("Returns every pitch of every referenced card", () => {
      expect(
        getIdentifiers(
          getCardsReferencedBy(index, getCard("mugenshi-release-yellow")),
        ),
      ).toEqual([
        "lord-of-wind-blue",
        "whelming-gustwave-red",
        "whelming-gustwave-yellow",
        "whelming-gustwave-blue",
      ]);
    });

    it("Expands a partly named cycle to its pitch siblings", () => {
      // Big Bertha names the three pitches of Hyper Driver, not its token.
      expect(
        getIdentifiers(getCardsReferencedBy(index, getCard("big-bertha-red"))),
      ).toEqual([
        "hyper-driver",
        "hyper-driver-red",
        "hyper-driver-yellow",
        "hyper-driver-blue",
      ]);
    });

    it("Returns nothing for a card naming no other card", () => {
      expect(getCardsReferencedBy(index, getCard("aether-dart-red"))).toEqual(
        [],
      );
    });
  });

  describe("Index contents", () => {
    it("Keys every card by its identifier", () => {
      expect(index.cardByCardIdentifier.size).toEqual(doubleSidedCards.length);
    });

    it("Keys a pitch cycle by its cleaned name", () => {
      expect(
        getIdentifiers(index.pitchCycleByCleanedName.get("aether dart") || []),
      ).toEqual(["aether-dart-red", "aether-dart-yellow", "aether-dart-blue"]);
    });

    it("Holds one cleaned name per distinct name", () => {
      expect(index.cleanedNames.length).toEqual(
        index.pitchCycleByCleanedName.size,
      );
    });

    it("Keys referencing cards by the identifier they name", () => {
      expect(
        getIdentifiers(
          index.referencingCardsByCardIdentifier.get("hyper-driver") || [],
        ),
      ).toEqual([
        "maxx-the-hype-nitro",
        "maxx-nitro",
        "speed-demon-red",
        "supercell-blue",
      ]);
    });
  });
});
