import { describe, expect, it } from "@jest/globals";
import { Card } from "@flesh-and-blood/types";
import { cards } from "../dist/index";

const getCard = (cardIdentifier: string) =>
  cards.find((card) => card.cardIdentifier === cardIdentifier) as Card;

describe("Created extras", () => {
  it.each([
    ["tales-of-adventure-blue", "aether-ashwing"],
    ["future-sight-red", "sigil-of-fate"],
    ["future-sight-yellow", "sigil-of-fate"],
    ["future-sight-blue", "sigil-of-fate"],
    ["orb-weaver-spinneret-red", "graphene-chelicera"],
    ["billowing-mirage-red", "aether-ashwing"],
    ["infectious-host-red", "frailty"],
    ["dustup-red", "ash"],
    // Maxx is the only source of the Hyper Driver token; every other mention is
    // one of the pitched cards.
    ["maxx-nitro", "hyper-driver"],
    ["maxx-the-hype-nitro", "hyper-driver"],
    // Wagering a token with an opponent puts it into play.
    ["big-bop-red", "vigor"],
    ["bigger-than-big-red", "might"],
    ["edge-ahead-red", "agility"],
    ["hold-em-red", "vigor"],
    ["good-time-chapeau", "might"],
    ["good-time-chapeau", "vigor"],
    ["aurora-legacy-of-tempest", "embodiment-of-lightning"],
    ["aurora-emissary-of-lightning", "embodiment-of-lightning"],
    ["golden-skywarden-yellow", "gold"],
    // "create 3 more" names the extra before the verb, so these ride the
    // exceptions file rather than the sentence rule.
    ["escalate-order-red", "toughness"],
    ["escalate-violence-blue", "might"],
  ])("%s creates %s", (cardIdentifier, extraCardIdentifier) => {
    expect(getCard(cardIdentifier).createdExtras).toContain(
      extraCardIdentifier,
    );
  });

  it.each([
    // Transforms an ash rather than making one.
    ["billowing-mirage-red", "ash"],
    // Destroys a Frailty already in play.
    ["sapwood-elixir-red", "frailty"],
    // "a marked hero" is the state, and the verb creates a Fealty token.
    ["cindra", "marked"],
    ["cindra-dracai-of-retribution", "marked"],
    // "attacks a marked hero" then equips a different token.
    ["whittle-from-bone-red", "marked"],
    // Moving a card between zones is not creation, and neither is placing a
    // counter, so putting a Hyper Driver anywhere never makes one.
    ["assembly-module-blue", "hyper-driver"],
    ["big-bertha-red", "hyper-driver"],
    ["blessing-of-ingenuity-red", "hyper-driver"],
    ["crankshaft-red", "hyper-driver"],
    ["gas-up-red", "hyper-driver"],
    // Consumes Hyper Drivers to build itself.
    ["construct-bank-breaker-yellow", "hyper-driver"],
    ["evo-atom-breaker-red", "hyper-driver"],
    ["evo-circuit-breaker-red", "hyper-driver"],
    ["evo-face-breaker-red", "hyper-driver"],
    ["evo-mach-breaker-red", "hyper-driver"],
    // A gold counter is not a Gold token.
    ["chart-a-course-red", "gold"],
    ["expedition-to-azuro-keys-red", "gold"],
    // Destroys or spends the extra it names before the verb.
    ["fightmaster-kox", "gold"],
    ["graven-call", "silver"],
    ["graven-gaslight", "silver"],
    ["golden-skywarden-yellow", "golden-cog"],
    ["aurora-legacy-of-tempest", "lightning-flow"],
    ["aurora-emissary-of-lightning", "lightning-flow"],
    // "if you've created or activated a Gate to i'Arathael this turn" asks
    // what already happened.
    ["viserai-usurper", "gate-to-iarathael"],
  ])("%s does not create %s", (cardIdentifier, extraCardIdentifier) => {
    expect(getCard(cardIdentifier).createdExtras || []).not.toContain(
      extraCardIdentifier,
    );
  });

  it("Shatter Sorcery creates nothing", () => {
    expect(getCard("shatter-sorcery-blue").createdExtras).toBeUndefined();
  });

  it("Invoke cards do not create Ash", () => {
    const invokeCardIdentifiers: string[] = [];
    const invokeCardIdentifiersCreatingAsh: string[] = [];

    for (const { cardIdentifier, createdExtras } of cards) {
      if (cardIdentifier.startsWith("invoke-")) {
        invokeCardIdentifiers.push(cardIdentifier);
        if (createdExtras?.includes("ash")) {
          invokeCardIdentifiersCreatingAsh.push(cardIdentifier);
        }
      }
    }

    expect(invokeCardIdentifiers.length).toBeGreaterThan(0);
    expect(invokeCardIdentifiersCreatingAsh).toEqual([]);
  });
});

describe("Referenced cards", () => {
  it.each([
    // Only a pitched Hyper Driver can sit in a deck, hand or graveyard, so
    // those are the cards these effects can reach.
    ["assembly-module-blue", "hyper-driver-red"],
    ["breaker-helm-protos", "hyper-driver-blue"],
    ["blessing-of-ingenuity-red", "hyper-driver-yellow"],
    ["drive-brake", "hyper-driver-red"],
    ["hit-the-gas-blue", "hyper-driver-red"],
    ["maxx-nitro", "hyper-driver"],
    // A bare name reaches every card in its family.
    ["beat-of-the-ironsong-blue", "dawnblade"],
    ["beat-of-the-ironsong-blue", "dawnblade-resplendent"],
    ["chorus-of-ironsong-yellow", "dawnblade"],
    ["glistening-steelblade-yellow", "dawnblade"],
    ["defang-the-dragon-red", "fang"],
    ["defang-the-dragon-red", "fang-dracai-of-blades"],
    ["hand-of-vengeance", "arakni"],
    ["hand-of-vengeance", "arakni-web-of-deceit"],
    ["heart-of-vengeance", "arakni-marionette"],
    // A subtype names every card carrying it, as a trait already does.
    ["dr-mortimer", "frailty"],
    ["dr-mortimer", "inertia"],
    ["dr-mortimer", "bloodrot-pox"],
    ["dr-mortimer-blight-of-the-pits", "frailty"],
    ["gorgons-gaze-yellow", "inner-chi-blue"],
    ["invoke-azvolai-red", "dust-from-the-red-desert-red"],
    ["haboob-red", "dust-from-the-red-desert-red"],
    // A card whose own name starts with an extra's still names that extra;
    // only a hero prefix is older templating.
    ["vigor-girth", "vigor"],
    ["frailty-trap-red", "frailty"],
    ["runechant-of-envy-yellow", "runechant"],
    // Names the Gold it creates despite also removing a gold counter.
    ["lost-in-transit-yellow", "gold"],
    ["divvy-up-blue", "gold"],
    // Card text lowercases some names.
    ["dustup-red", "ash"],
    ["haboob-red", "ash"],
    ["invoke-azvolai-red", "ash"],
  ])("%s references %s", (cardIdentifier, referencedCardIdentifier) => {
    expect(getCard(cardIdentifier).referencedCards).toContain(
      referencedCardIdentifier,
    );
  });

  it.each([
    // The token form has pitched siblings, so only its creator names it.
    ["assembly-module-blue", "hyper-driver"],
    ["big-bertha-red", "hyper-driver"],
    ["blessing-of-ingenuity-red", "hyper-driver"],
    ["breaker-helm-protos", "hyper-driver"],
    ["construct-bank-breaker-yellow", "hyper-driver"],
    ["crankshaft-red", "hyper-driver"],
    ["drive-brake", "hyper-driver"],
    ["fist-pump", "hyper-driver"],
    ["gas-up-red", "hyper-driver"],
    ["hit-the-gas-blue", "hyper-driver"],
    ["hyper-scrapper-blue", "hyper-driver"],
    // Older templating naming itself by its hero's name.
    ["hala-goldenhelm", "hala"],
    // A gold counter is a counter type, not the Gold token.
    ["chart-a-course-red", "gold"],
    ["expedition-to-azuro-keys-red", "gold"],
    // Card text capitalises the cards it names, so an ordinary phrase that
    // happens to spell one is not a reference.
    ["bask-in-your-own-greatness-red", "pay-up-red"],
    ["boots-to-the-boards", "pay-up-red"],
    ["jarl-vetreidi", "exposed-blue"],
    // Naming the Ash token is naming that card, not every card of its subtype.
    ["sweeping-blow-red", "dust-from-the-red-desert-red"],
    ["dustup-red", "dust-from-the-red-desert-red"],
    // The comma in "10,000 Year Reunion" separates thousands, not a title, so
    // there is no family called "10".
    ["burdens-of-the-past-blue", "10000-year-reunion-red"],
  ])("%s does not reference %s", (cardIdentifier, referencedCardIdentifier) => {
    expect(getCard(cardIdentifier).referencedCards || []).not.toContain(
      referencedCardIdentifier,
    );
  });

  // Putting an extra into play means naming it, so this holds for every card
  // rather than only the ones a fixture happens to cover.
  it("Every created extra is also referenced", () => {
    const unreferenced: string[] = [];

    for (const { cardIdentifier, createdExtras, referencedCards } of cards) {
      for (const createdExtraIdentifier of createdExtras || []) {
        const isReferenced = (referencedCards || []).includes(
          createdExtraIdentifier,
        );
        if (!isReferenced) {
          unreferenced.push(`${cardIdentifier} -> ${createdExtraIdentifier}`);
        }
      }
    }

    expect(unreferenced).toEqual([]);
  });

  // 29 cards carry the crowd-boos wording, so naming a couple of them would
  // leave the rest free to regress.
  it("No card naming the crowd's boos names Boo, Resident Spook", () => {
    const namingBoo: string[] = [];

    for (const card of cards) {
      const boosTheCrowd = /crowd boos/i.test(card.functionalText || "");
      const namesBoo = (card.referencedCards || []).includes(
        "boo-resident-spook-yellow",
      );

      if (boosTheCrowd && namesBoo) {
        namingBoo.push(card.cardIdentifier);
      }
    }

    expect(namingBoo).toEqual([]);
  });

  // "a card with Amulet, Potion, or Talisman in its name" names a category
  // rather than a card, so the members come from a name pattern.
  it.each(["Amulet", "Potion", "Talisman"])(
    "Knick Knack Bric-a-brac names the %s cards",
    (namePattern) => {
      const { referencedCards = [] } = getCard("knick-knack-bric-a-brac-red");
      const named = referencedCards.filter((referencedCardIdentifier) =>
        referencedCardIdentifier.includes(namePattern.toLowerCase()),
      );

      expect(named.length).toBeGreaterThan(0);
    },
  );
});

describe("Shatter Sorcery and Sigil of Fate are unrelated", () => {
  // Shatter Sorcery destroys "target aura permanent with Sigil in its name" and
  // never spells out Sigil of Fate, so only a hand-maintained relation could
  // link the two.
  it.each([
    ["shatter-sorcery-blue", "sigil-of-fate"],
    ["sigil-of-fate", "shatter-sorcery-blue"],
  ])("%s does not name %s", (cardIdentifier, otherCardIdentifier) => {
    const { createdExtras, referencedCards } = getCard(cardIdentifier);

    expect(createdExtras || []).not.toContain(otherCardIdentifier);
    expect(referencedCards || []).not.toContain(otherCardIdentifier);
  });
});
