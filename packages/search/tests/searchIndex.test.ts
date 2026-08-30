import { describe, expect, it } from "@jest/globals";
import { CardRole, DoubleSidedCard, getCardRole } from "@flesh-and-blood/types";
import {
  getCardsByName,
  getCardsReferencedBy,
  getCardsReferencing,
  getCatalogueIndex,
} from "../src/searchIndex";
import { doubleSidedCards } from "./_doubleSidedCards";

const index = getCatalogueIndex(doubleSidedCards);

const getIdentifiers = (matches: readonly DoubleSidedCard[]): string[] =>
  matches.map(({ cardIdentifier }) => cardIdentifier);

const getCard = (cardIdentifier: string): DoubleSidedCard =>
  index.getCard(cardIdentifier) as DoubleSidedCard;

// Every map the index holds is built by walking the corpus, so counting the
// reads of the array it was handed says which build has run.
const getWatchedCorpus = (): {
  corpus: DoubleSidedCard[];
  getCardReads: () => number;
} => {
  let cardReads = 0;
  const corpus = new Proxy([...doubleSidedCards], {
    get: (cards, key, receiver) => {
      const isCardPosition =
        typeof key === "string" && `${Number(key)}` === key;
      if (isCardPosition) {
        cardReads++;
      }
      return Reflect.get(cards, key, receiver);
    },
  });

  return { corpus, getCardReads: () => cardReads };
};

describe("Catalogue index", () => {
  describe("Card by identifier", () => {
    it("Answers with the card the identifier names", () => {
      expect(getCard("head-jab-red").name).toEqual("Head Jab");
    });

    it("Answers for every card in the corpus", () => {
      const unknownCards = doubleSidedCards.filter(
        (card) => index.getCard(card.cardIdentifier) !== card,
      );

      expect(unknownCards).toEqual([]);
    });

    it("Answers with nothing for an identifier no card carries", () => {
      expect(index.getCard("zzz-no-such-card")).toBeUndefined();
    });
  });

  describe("Pitch cycle", () => {
    it("Returns every pitch of a card printed at three", () => {
      expect(getIdentifiers(index.getPitchCycle("aether-dart-yellow"))).toEqual(
        ["aether-dart-red", "aether-dart-yellow", "aether-dart-blue"],
      );
    });

    it("Returns the card alone when its name carries one pitch", () => {
      expect(getIdentifiers(index.getPitchCycle("graphene-chelicera"))).toEqual(
        ["graphene-chelicera"],
      );
    });

    it("Returns nothing for an identifier no card carries", () => {
      expect(index.getPitchCycle("zzz-no-such-card")).toEqual([]);
    });
  });

  describe("Opposite side", () => {
    it("Returns every card the identifier is printed on the back of", () => {
      expect(getIdentifiers(index.getOppositeSide("viserai-usurper"))).toEqual([
        "viserai-between-worlds",
        "viserai-the-forsaken",
      ]);
      expect(getIdentifiers(index.getOppositeSide("bank-breaker"))).toEqual([
        "construct-bank-breaker-yellow",
      ]);
    });

    it("Returns nothing for a single sided card", () => {
      expect(index.getOppositeSide("head-jab-red")).toEqual([]);
    });
  });

  describe("References", () => {
    it("Returns the cards the identifier names, the pitch alone", () => {
      // Big Bertha names the three pitches of Hyper Driver, not its token.
      expect(getIdentifiers(index.getReferences("big-bertha-red"))).toEqual([
        "hyper-driver-red",
        "hyper-driver-yellow",
        "hyper-driver-blue",
      ]);
    });

    it("Agrees with the cards the field names", () => {
      for (const cardIdentifier of [
        "big-bertha-red",
        "mugenshi-release-yellow",
        "supercell-blue",
      ]) {
        const { referencedCards } = getCard(cardIdentifier);

        expect(
          getIdentifiers(index.getReferences(cardIdentifier)).sort(),
        ).toEqual([...(referencedCards || [])].sort());
      }
    });

    it("Returns nothing for a card naming no other card", () => {
      expect(index.getReferences("aether-dart-red")).toEqual([]);
    });
  });

  describe("Referenced by", () => {
    it("Returns the cards naming the identifier, not its pitch siblings", () => {
      expect(getIdentifiers(index.getReferencedBy("hyper-driver"))).toEqual([
        "maxx-the-hype-nitro",
        "maxx-nitro",
        "speed-demon-red",
        "supercell-blue",
      ]);
    });

    it("Agrees with the field of every card it answers with", () => {
      const referencingCards = index.getReferencedBy("hyper-driver-red");
      const cardsNamingAnotherPitch = referencingCards.filter(
        ({ referencedCards }) =>
          !(referencedCards || []).includes("hyper-driver-red"),
      );

      expect(referencingCards.length).toBeGreaterThan(0);
      expect(cardsNamingAnotherPitch).toEqual([]);
    });

    it("Returns nothing for a card no other card names", () => {
      expect(index.getReferencedBy("aether-dart-red")).toEqual([]);
    });
  });

  describe("Created extras", () => {
    it("Returns the extras the identifier creates", () => {
      expect(getIdentifiers(index.getCreates("arakni-orb-weaver"))).toEqual([
        "graphene-chelicera",
      ]);
    });

    it("Agrees with the cards the field names", () => {
      const { createdExtras } = getCard("arakni-web-of-deceit");

      expect(
        getIdentifiers(index.getCreates("arakni-web-of-deceit")).sort(),
      ).toEqual([...(createdExtras || [])].sort());
    });

    it("Returns every card creating the identifier", () => {
      expect(getIdentifiers(index.getCreatedBy("graphene-chelicera"))).toEqual([
        "arakni-orb-weaver",
        "deadly-spinneret-red",
        "orb-weaver-spinneret-red",
        "orb-weaver-spinneret-yellow",
        "orb-weaver-spinneret-blue",
        "whittle-from-bone-red",
        "whittle-from-bone-yellow",
        "whittle-from-bone-blue",
      ]);
    });

    it("Returns nothing for a card creating nothing", () => {
      expect(index.getCreates("aether-dart-red")).toEqual([]);
      expect(index.getCreatedBy("aether-dart-red")).toEqual([]);
    });
  });

  describe("Created closure", () => {
    it("Follows what the creations themselves create", () => {
      // The hero creates its demi-heroes, one of which creates a weapon token.
      expect(
        getIdentifiers(index.getCreatedClosure(["arakni-web-of-deceit"])),
      ).toEqual([
        "arakni-black-widow",
        "arakni-funnel-web",
        "arakni-orb-weaver",
        "arakni-redback",
        "arakni-tarantula",
        "arakni-trap-door",
        "graphene-chelicera",
      ]);
    });

    it("Leaves out the cards it was asked about", () => {
      expect(
        getIdentifiers(index.getCreatedClosure(["arakni-orb-weaver"])),
      ).toEqual(["graphene-chelicera"]);
    });

    it("Stops on a card that creates what creates it", () => {
      // No two catalogue cards create each other, so the guard needs a corpus
      // written for it.
      const loopingCorpus = [
        {
          cardIdentifier: "loop-front",
          name: "Loop Front",
          createdExtras: ["loop-back"],
        },
        {
          cardIdentifier: "loop-back",
          name: "Loop Back",
          createdExtras: ["loop-front"],
        },
      ] as unknown as DoubleSidedCard[];

      expect(
        getIdentifiers(
          getCatalogueIndex(loopingCorpus).getCreatedClosure(["loop-front"]),
        ),
      ).toEqual(["loop-front", "loop-back"]);
    });

    it("Returns nothing for cards creating nothing", () => {
      expect(index.getCreatedClosure(["aether-dart-red"])).toEqual([]);
    });
  });

  describe("Cards by role", () => {
    it("Leaves a hero printed on a back out of the heroes", () => {
      const heroIdentifiers = getIdentifiers(index.getByRole(CardRole.Hero));

      expect(heroIdentifiers).toContain("viserai-the-forsaken");
      expect(heroIdentifiers).not.toContain("viserai-usurper");
    });

    it("Buckets every other card where its role says", () => {
      for (const role of [
        CardRole.CardBack,
        CardRole.Deck,
        CardRole.Extra,
        CardRole.Inventory,
      ]) {
        const cardsInRole = index.getByRole(role);
        const cardsWithRole = doubleSidedCards.filter(
          (card) => getCardRole(card) === role,
        );

        expect(cardsInRole.length).toBeGreaterThan(0);
        expect(getIdentifiers(cardsInRole)).toEqual(
          getIdentifiers(cardsWithRole),
        );
      }
    });

    it("Buckets every card but the heroes printed on a back", () => {
      const bucketedCardIdentifiers = new Set<string>();
      for (const role of Object.values(CardRole)) {
        for (const { cardIdentifier } of index.getByRole(role)) {
          bucketedCardIdentifiers.add(cardIdentifier);
        }
      }
      const unbucketedCardIdentifiers = doubleSidedCards
        .filter(
          ({ cardIdentifier }) => !bucketedCardIdentifiers.has(cardIdentifier),
        )
        .map(({ cardIdentifier }) => cardIdentifier);

      expect(unbucketedCardIdentifiers).toEqual(["viserai-usurper"]);
    });
  });

  describe("One index per corpus", () => {
    it("Answers with the same index for the same array", () => {
      expect(getCatalogueIndex(doubleSidedCards)).toBe(index);
    });

    it("Answers with another index for a copy of the array", () => {
      expect(getCatalogueIndex([...doubleSidedCards])).not.toBe(index);
    });
  });

  describe("Lazy builds", () => {
    it("Builds nothing until a read asks for it", () => {
      const { corpus, getCardReads } = getWatchedCorpus();
      getCatalogueIndex(corpus);

      expect(getCardReads()).toEqual(0);
    });

    it("Builds the card lookups once, on the first lookup", () => {
      const { corpus, getCardReads } = getWatchedCorpus();
      const watchedIndex = getCatalogueIndex(corpus);

      watchedIndex.getCard("head-jab-red");
      const cardReadsAfterLookup = getCardReads();
      watchedIndex.getPitchCycle("head-jab-red");

      expect(cardReadsAfterLookup).toBeGreaterThan(0);
      expect(getCardReads()).toEqual(cardReadsAfterLookup);
    });

    it("Builds a relation only when the relation is read", () => {
      const { corpus, getCardReads } = getWatchedCorpus();
      const watchedIndex = getCatalogueIndex(corpus);

      watchedIndex.getCard("head-jab-red");
      const cardReadsBeforeRelation = getCardReads();
      watchedIndex.getReferencedBy("head-jab-red");
      const cardReadsAfterRelation = getCardReads();
      watchedIndex.getReferencedBy("hyper-driver");

      expect(cardReadsAfterRelation).toBeGreaterThan(cardReadsBeforeRelation);
      expect(getCardReads()).toEqual(cardReadsAfterRelation);
    });

    it("Builds the creators only when a creator is read", () => {
      const { corpus, getCardReads } = getWatchedCorpus();
      const watchedIndex = getCatalogueIndex(corpus);

      watchedIndex.getReferencedBy("head-jab-red");
      const cardReadsBeforeCreators = getCardReads();
      watchedIndex.getCreatedBy("runechant");
      const cardReadsAfterCreators = getCardReads();
      watchedIndex.getCreatedBy("ash");

      expect(cardReadsAfterCreators).toBeGreaterThan(cardReadsBeforeCreators);
      expect(getCardReads()).toEqual(cardReadsAfterCreators);
    });

    it("Builds the role buckets only when a role is read", () => {
      const { corpus, getCardReads } = getWatchedCorpus();
      const watchedIndex = getCatalogueIndex(corpus);

      watchedIndex.getReferencedBy("head-jab-red");
      const cardReadsBeforeRole = getCardReads();
      watchedIndex.getByRole(CardRole.Hero);

      expect(getCardReads()).toBeGreaterThan(cardReadsBeforeRole);
    });
  });

  describe("Cards in corpus order", () => {
    it("Sorts a card the corpus lacks behind the cards it holds", () => {
      const [knownFirst, knownSecond, stray] = [
        { cardIdentifier: "known-first", name: "Known First" },
        { cardIdentifier: "known-second", name: "Known Second" },
        { cardIdentifier: "stray", name: "Stray" },
      ] as unknown as DoubleSidedCard[];

      expect(
        getIdentifiers(
          getCatalogueIndex([knownFirst, knownSecond]).getCardsInCorpusOrder([
            knownSecond,
            stray,
            knownFirst,
          ]),
        ),
      ).toEqual(["known-first", "known-second", "stray"]);
    });
  });

  describe("Answer identity", () => {
    it("Answers every miss with the same list", () => {
      expect(index.getPitchCycle("zzz-no-such-card")).toBe(
        index.getReferencedBy("zzz-no-such-card"),
      );
      expect(index.getCreates("zzz-no-such-card")).toBe(
        getCardsByName(index, "zzz no such card"),
      );
    });

    it("Answers a repeated relation read with the same list", () => {
      expect(index.getOppositeSide("viserai-usurper")).toBe(
        index.getOppositeSide("viserai-usurper"),
      );
      expect(index.getReferences("big-bertha-red")).toBe(
        index.getReferences("big-bertha-red"),
      );
      expect(index.getCreates("arakni-orb-weaver")).toBe(
        index.getCreates("arakni-orb-weaver"),
      );
    });

    it("Builds the created closure anew for each read", () => {
      const closure = index.getCreatedClosure(["arakni-web-of-deceit"]);
      const closureReread = index.getCreatedClosure(["arakni-web-of-deceit"]);

      expect(closureReread).toEqual(closure);
      expect(closureReread).not.toBe(closure);
    });
  });

  describe("Index over a card subtype", () => {
    it("Answers with the cards the corpus carries, subtype and all", () => {
      interface RichCard extends DoubleSidedCard {
        extra: number;
      }

      const richCards: RichCard[] = doubleSidedCards
        .filter(({ name }) => name === "Aether Dart")
        .map((card, position) => ({ ...card, extra: position }));
      const pitchCycle: readonly RichCard[] =
        getCatalogueIndex(richCards).getPitchCycle("aether-dart-yellow");

      expect(pitchCycle.map(({ extra }) => extra)).toEqual([0, 1, 2]);
    });
  });

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

    it("Answers with the first containing name the corpus carries", () => {
      // No catalogue name repeats after another name containing the same
      // fragment, so the ordering rule needs a corpus written for it: the
      // second Bolt Scrapper must not push its name behind Bolt Stitcher.
      const fragmentCorpus = [
        { cardIdentifier: "bolt-scrapper-red", name: "Bolt Scrapper" },
        { cardIdentifier: "bolt-stitcher-red", name: "Bolt Stitcher" },
        { cardIdentifier: "bolt-scrapper-yellow", name: "Bolt Scrapper" },
      ] as unknown as DoubleSidedCard[];

      expect(
        getIdentifiers(
          getCardsByName(getCatalogueIndex(fragmentCorpus), "bolt"),
        ),
      ).toEqual(["bolt-scrapper-red", "bolt-scrapper-yellow"]);
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
});
