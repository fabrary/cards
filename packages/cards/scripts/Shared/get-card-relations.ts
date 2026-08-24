import {
  getCanBeCreated,
  Keyword,
  Subtype,
  Trait,
  Type,
} from "@flesh-and-blood/types";
import { PreliminaryCard } from "./preliminary-card";
import createdExtraExceptionsFile from "./created-extra-exceptions.json";
import referencedNamePatternsFile from "./referenced-name-patterns.json";

// cardIdentifier -> extra cardIdentifier -> whether the naming card creates it.
// Forces an edge on where the verbs miss a creation, or off where they read one
// into text that only interacts with an extra already in play.
const createdExtraExceptions = createdExtraExceptionsFile as {
  [cardIdentifier: string]: { [extraCardIdentifier: string]: boolean };
};

export interface CardRelations {
  createdExtras?: string[];
  referencedCards?: string[];
}

// Extras a keyword puts into play without the card text ever naming them, so no
// amount of text matching can see the edge.
const EXTRA_NAMES_BY_KEYWORD: { [keyword: string]: string } = {
  [Keyword.Heave]: "Seismic Surge",
  [Keyword.Mark]: "Marked",
};

// "marked" in card text is the state a hero is in ("a marked hero"), never the
// token being made: no card creates one by text, so every text match on this
// name is wrong. Mark is unusual that way; Heave is one source of Seismic Surge
// among many cards that do create it by text.
const KEYWORD_ONLY_EXTRA_NAMES = new Set(["Marked"]);

// "Put" is absent on purpose: card text uses it to move a card between zones
// and to place counters, never to make an extra. Wagering one with an opponent
// does put it into play.
const CREATION_VERBS =
  /\b(?:become|becomes|create|creates|created|summon|summons|equip|equips|wager|wagers)\b/gi;
const PAST_CREATION = /\byou(?:'ve| have)\s+$/i;
const TRANSFORM_VERB = /\btransform\b/i;
const TRANSFORM_TARGET_SEPARATOR = " into ";
const SENTENCE_SEPARATOR = /[.!?\n]+/;

const REGEXP_SPECIAL_CHARACTERS = /[.*+?^${}()|[\]\\]/g;

// Card names are matched as literals, so anything the engine would read as
// syntax is escaped first. The optional suffix covers the plural and possessive
// forms card text uses ("create 2 Runechants", "the Ash's controller").
const getExtraNameRegExp = (name: string) =>
  new RegExp(
    `\\b${name.replace(REGEXP_SPECIAL_CHARACTERS, "\\$&")}(?:'s|es|s)?\\b`,
    "i",
  );

// Traits card text names a group of extras by, the way it names a single one:
// "become a random Agent of Chaos" puts whichever demi-hero carries the trait
// into play. Most traits are flavour, so a group has to be listed here rather
// than every trait counting.
const CREATED_EXTRA_TRAITS: string[] = [Trait.AgentOfChaos];

interface ExtraCreationName {
  lowercasedName: string;
  nameRegExp: RegExp;
}

// Every name card text can put this extra into play by: its own, and the traits
// naming a group it belongs to.
const getExtraCreationNames = (card: PreliminaryCard): ExtraCreationName[] => {
  const creationNames = [
    card.name,
    ...(card.traits || []).filter((trait) =>
      CREATED_EXTRA_TRAITS.includes(trait),
    ),
  ];

  return creationNames.map((creationName) => ({
    lowercasedName: creationName.toLowerCase(),
    nameRegExp: getExtraNameRegExp(creationName),
  }));
};

// A sentence creates the extra it names when the name follows a creation verb,
// so that the verb's object is what gets made: "destroy a Lightning Flow you
// control: Create an Embodiment of Lightning token" makes only the Embodiment.
// Transform classifies the sentences carrying no other verb, and only for what
// follows "into", since transforming X into Y makes Y alone: every Invoke card
// turns an ash into a dragon and must not read as creating Ash.
const getIsCreatingSentence = (sentence: string, nameRegExp: RegExp) => {
  CREATION_VERBS.lastIndex = 0;
  let firstVerbMatch = CREATION_VERBS.exec(sentence);
  // "if you've created a Gate to i'Arathael this turn" asks what happened
  // earlier rather than making one.
  while (
    firstVerbMatch &&
    PAST_CREATION.test(sentence.slice(0, firstVerbMatch.index))
  ) {
    firstVerbMatch = CREATION_VERBS.exec(sentence);
  }
  let isCreating =
    !!firstVerbMatch && nameRegExp.test(sentence.slice(firstVerbMatch.index));

  if (!isCreating && TRANSFORM_VERB.test(sentence)) {
    const separatorIndex = sentence.indexOf(TRANSFORM_TARGET_SEPARATOR);
    isCreating =
      separatorIndex >= 0 &&
      nameRegExp.test(
        sentence.slice(separatorIndex + TRANSFORM_TARGET_SEPARATOR.length),
      );
  }

  return isCreating;
};

// cardIdentifier -> name fragments every card carrying one of them is named
// by. Card text that searches for "a card with Amulet, Potion, or Talisman in
// its name" names a category, and listing today's members would go stale with
// the next set.
const referencedNamePatterns = referencedNamePatternsFile as {
  [cardIdentifier: string]: string[];
};

// Most subtypes are ordinary card-text vocabulary ("attack", "item", "aura"),
// so matching them all would name half the game. These read as nouns for a
// group of cards and nothing else.
const REFERENCED_SUBTYPES: string[] = [
  Subtype.Ash,
  Subtype.Chi,
  Subtype.Disease,
];

// The name a card shares with its variants: everything before the comma that
// introduces a title, so "Fang, Dracai of Blades" answers to "Fang" as card
// text writes it. The separator has to be a comma and a space, or the thousands
// separator in "10,000 Year Reunion" reads as a family called "10".
const getFamilyName = (name: string) => name.split(", ")[0];

const getNameRegExp = (name: string, flags: string) =>
  new RegExp(
    `\\b${name.replace(REGEXP_SPECIAL_CHARACTERS, "\\$&")}(?:'s|es|s)?\\b`,
    flags,
  );

interface CardMatchingText {
  card: PreliminaryCard;
  familyName: string;
  lowercasedText: string;
  // Self-references removed before matching.
  referenceText: string;
  sentences: string[];
}

/**
 * Both relations a card's functional text carries, keyed by cardIdentifier.
 *
 * `createdExtras` answers what a deck running the card has to bring: the extras
 * it puts into play. `referencedCards` answers what the card page links to:
 * every card it names. The two rules disagree on purpose, so a card naming both
 * Ash and Aether Ashwing creates both but only references the longer name.
 */
export const getCardRelations = (
  cards: PreliminaryCard[],
): Map<string, CardRelations> => {
  const createdExtras: PreliminaryCard[] = [];
  const createdExtrasByName = new Map<string, PreliminaryCard[]>();
  const creationNamesByExtra = new Map<string, ExtraCreationName[]>();
  const matchingTexts: CardMatchingText[] = [];
  // Every name card text can use for a card: its own, and the family name it
  // shares with its variants.
  const cardsByMatchName = new Map<string, PreliminaryCard[]>();
  const cardsWithPitchedSiblings = new Set<string>();

  for (const card of cards) {
    const { functionalText, name } = card;
    const familyName = getFamilyName(name);

    matchingTexts.push({
      card,
      familyName,
      lowercasedText: (functionalText || "").toLowerCase(),
      referenceText: (functionalText || "").replaceAll(name, ""),
      sentences: (functionalText || "").split(SENTENCE_SEPARATOR),
    });

    for (const matchName of new Set([name, familyName])) {
      cardsByMatchName.set(matchName, [
        ...(cardsByMatchName.get(matchName) || []),
        card,
      ]);
    }

    if (getCanBeCreated(card)) {
      createdExtras.push(card);
      creationNamesByExtra.set(
        card.cardIdentifier,
        getExtraCreationNames(card),
      );
      createdExtrasByName.set(name, [
        ...(createdExtrasByName.get(name) || []),
        card,
      ]);
    }
  }

  // A token sharing its name with pitched cards is the one copy that lives in
  // the arena, so text about searching, discarding or banishing a card of that
  // name can only mean the pitched ones.
  for (const card of createdExtras) {
    const hasPitchedSibling = (cardsByMatchName.get(card.name) || []).some(
      (other) => !getCanBeCreated(other),
    );
    if (hasPitchedSibling) {
      cardsWithPitchedSiblings.add(card.cardIdentifier);
    }
  }

  const referenceRegExps = new Map<string, RegExp>();
  const keywordReferenceRegExps = new Map<string, RegExp>();
  for (const matchName of cardsByMatchName.keys()) {
    const escapedName = matchName.replace(REGEXP_SPECIAL_CHARACTERS, "\\$&");

    // Card text capitalises the cards it names, so matching is case sensitive:
    // "you may pay up to {r}" is not the card Pay Up, and "the crowd boos you"
    // is not Boo, Resident Spook. The lowercase game terms that are also cards
    // ("an ash you control") come in through their subtype instead.
    referenceRegExps.set(matchName, getNameRegExp(matchName, "g"));
    keywordReferenceRegExps.set(
      matchName,
      new RegExp(`\\*\\*${escapedName}\\*\\*`, "g"),
    );
  }

  const relationsByCardIdentifier = new Map<string, CardRelations>();

  for (const {
    card,
    familyName,
    lowercasedText,
    referenceText,
    sentences,
  } of matchingTexts) {
    const { cardIdentifier } = card;
    const createdExtraIdentifiers = new Set<string>();

    for (const keyword of card.keywords || []) {
      const keywordExtraName: string | undefined =
        EXTRA_NAMES_BY_KEYWORD[keyword];
      if (keywordExtraName) {
        for (const extra of createdExtrasByName.get(keywordExtraName) || []) {
          // The Marked token itself carries Mark, so the keyword map would give
          // it a creation edge to itself.
          if (extra.cardIdentifier !== cardIdentifier) {
            createdExtraIdentifiers.add(extra.cardIdentifier);
          }
        }
      }
    }

    for (const extra of createdExtras) {
      const isKeywordOnly = KEYWORD_ONLY_EXTRA_NAMES.has(extra.name);
      const isMatchable =
        !isKeywordOnly && extra.cardIdentifier !== cardIdentifier;

      if (isMatchable) {
        const creationNames = creationNamesByExtra.get(
          extra.cardIdentifier,
        ) as ExtraCreationName[];
        const isCreated = creationNames.some(
          ({ lowercasedName, nameRegExp }) =>
            lowercasedText.includes(lowercasedName) &&
            sentences.some(
              (sentence) =>
                nameRegExp.test(sentence) &&
                getIsCreatingSentence(sentence, nameRegExp),
            ),
        );

        if (isCreated) {
          createdExtraIdentifiers.add(extra.cardIdentifier);
        }
      }
    }

    for (const [extraCardIdentifier, isCreated] of Object.entries(
      createdExtraExceptions[cardIdentifier] || {},
    )) {
      if (isCreated) {
        createdExtraIdentifiers.add(extraCardIdentifier);
      } else {
        createdExtraIdentifiers.delete(extraCardIdentifier);
      }
    }

    // A name matches wherever card text writes it, in any case and at a word
    // boundary, so "an ash you control" names Ash while "Aether Ashwing" does
    // not. A name only ever seen bolded is a keyword mention, not a reference.
    const matchedNames: string[] = [];

    for (const [matchName, matchedCards] of cardsByMatchName) {
      const isOwnName = matchName === card.name || matchName === familyName;
      // Older templating names a card by its hero rather than in full, so a
      // card never names the hero its own name begins with. Only heroes: Vigor
      // Girth does name the Vigor it creates.
      const isOwnHeroPrefix =
        card.name.startsWith(`${matchName} `) &&
        matchedCards.some(({ types }) => types.includes(Type.Hero));

      if (!isOwnName && !isOwnHeroPrefix && matchedCards.length > 0) {
        const isNameInText = referenceText.includes(matchName);

        if (isNameInText) {
          const nameMatches =
            referenceText.match(referenceRegExps.get(matchName) as RegExp) ||
            [];
          // A name only ever seen bolded is a keyword mention. Counter types
          // need no rule of their own: card text lowercases them, so a gold
          // counter never reads as the card Gold.
          const keywordMatches =
            referenceText.match(
              keywordReferenceRegExps.get(matchName) as RegExp,
            ) || [];
          const namesTheCard = nameMatches.length > keywordMatches.length;

          if (namesTheCard) {
            matchedNames.push(matchName);
          }
        }
      }
    }

    // A card written for one hero names that hero, and its `specializations`
    // field says which one. Reading the name out of the text as well would
    // reach whichever of the hero's cards happens to be titled with the bare
    // name and none of the others.
    const specializedHeroNames = new Set<string>(card.specializations || []);

    const referencedCardIdentifiers = new Set<string>();
    const addReference = (referenced: PreliminaryCard) => {
      const isTokenWithPitchedSiblings = cardsWithPitchedSiblings.has(
        referenced.cardIdentifier,
      );
      const isNamed =
        !isTokenWithPitchedSiblings ||
        createdExtraIdentifiers.has(referenced.cardIdentifier);

      if (isNamed && referenced.cardIdentifier !== cardIdentifier) {
        referencedCardIdentifiers.add(referenced.cardIdentifier);
      }
    };

    // The specialization line names the hero the card belongs to, which the
    // card's own specializations already say. Only by name: Mask of Deceit
    // reaches the same demi-heroes through "become a random Agent of Chaos",
    // which is a trait naming its group and stays.
    const addNamedReference = (referenced: PreliminaryCard) => {
      const isHeroCard = [Type.DemiHero, Type.Hero].some((type) =>
        referenced.types.includes(type),
      );
      const isSpecializedHero =
        isHeroCard &&
        [referenced.hero, getFamilyName(referenced.name)].some(
          (heroName) => !!heroName && specializedHeroNames.has(heroName),
        );

      if (!isSpecializedHero) {
        addReference(referenced);
      }
    };

    for (const matchName of matchedNames) {
      // "Fang Strike" carries "Fang" as a word, so the shorter name is the
      // longer one being read twice.
      const isNestedInLongerMatch = matchedNames.some(
        (otherName) =>
          otherName !== matchName &&
          getNameRegExp(matchName, "i").test(otherName),
      );

      if (!isNestedInLongerMatch) {
        for (const referenced of cardsByMatchName.get(matchName) || []) {
          addNamedReference(referenced);
        }
      }
    }

    // Naming a card of a group is naming that card, not the group: "create an
    // Ash token" means the Ash, while "transform target ash you control" means
    // any of them.
    const namedSubtypes = new Set<string>();
    for (const matchName of matchedNames) {
      for (const referenced of cardsByMatchName.get(matchName) || []) {
        for (const subtype of referenced.subtypes || []) {
          namedSubtypes.add(subtype);
        }
      }
    }

    for (const other of matchingTexts) {
      const namedGroups = [
        ...(other.card.traits || []),
        ...(other.card.subtypes || []).filter(
          (subtype) =>
            REFERENCED_SUBTYPES.includes(subtype) &&
            !namedSubtypes.has(subtype),
        ),
      ];
      const isGroupInText = namedGroups.some((group) =>
        getNameRegExp(group, "i").test(referenceText),
      );
      const isHeaveOverride =
        other.card.name === "Seismic Surge" &&
        card.keywords?.includes(Keyword.Heave);
      const isMarkOverride =
        other.card.name === "Marked" && card.keywords?.includes(Keyword.Mark);

      if (isGroupInText || isHeaveOverride || isMarkOverride) {
        addReference(other.card);
      }
    }

    for (const pattern of referencedNamePatterns[cardIdentifier] || []) {
      for (const other of matchingTexts) {
        if (other.card.name.includes(pattern)) {
          addNamedReference(other.card);
        }
      }
    }

    // Putting an extra into play means naming it, so the reference list holds
    // everything the creation list does.
    for (const createdExtraIdentifier of createdExtraIdentifiers) {
      referencedCardIdentifiers.add(createdExtraIdentifier);
    }

    const relations: CardRelations = {};
    if (createdExtraIdentifiers.size > 0) {
      relations.createdExtras = Array.from(createdExtraIdentifiers).sort();
    }
    if (referencedCardIdentifiers.size > 0) {
      relations.referencedCards = Array.from(referencedCardIdentifiers).sort();
    }
    relationsByCardIdentifier.set(cardIdentifier, relations);
  }

  return relationsByCardIdentifier;
};
