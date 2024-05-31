import {
  Release,
  setIdentifierToSetMappings,
  setToSetIdentifierMappings,
} from "@flesh-and-blood/types";
import { readFileSync } from "fs";

export interface Printing {
  setIdentifier: string;
  set: Release;
  edition: string;
  foiling: string;
  rarity: string;
  artist: string;
  artVariation: string;
  imageUrl: string;
  tcgplayer?: {
    productId: string;
    url: string;
  };
}

export interface ParsedCard {
  abilitiesAndEffects: string[];
  abilityAndEffectKeywords: string[];
  artists: string[];
  cardKeywords: string[];
  cost: string;
  power: string;
  defense: string;
  functionalText: string;
  grantedKeywords: string[];
  identifiers: string[];
  images: string[];
  intellect?: string;
  life?: string;
  name: string;
  pitch?: string;
  printings: Printing[];
  rarities: string[];
  setIdentifiers: string[];
  sets: string[];
  types: string[];
  typeText: string;
  variations: string[];
  // Format restrictions
  blitzBanned: boolean;
  blitzLegal: boolean;
  blitzLivingLegend: boolean;
  blitzSuspended: boolean;
  classicConstructedBanned: boolean;
  classicConstructedLegal: boolean;
  classicConstructedLivingLegend: boolean;
  classicConstructedSuspended: boolean;
  commonerBanned: boolean;
  commonerLegal: boolean;
  commonerSuspended: boolean;
}

enum SourceAlternateArtVariation {
  AB = "Alternate Border",
  AA = "Alternate Art",
  AT = "Alternate Text",
  EA = "Extended Art",
  FA = "Full Art",
}

enum SourceEdition {
  A = "Alpha",
  F = "First",
  U = "Unlimited",
  N = "Normal",
}

enum SourceFoiling {
  S = "Standard",
  R = "Rainbow Foil",
  C = "Cold Foil",
  G = "Gold Cold Foil",
}

export interface SourcePrinting {
  unique_id: string;
  id: string;
  set_id: string;
  edition: string;
  // foilings: string[];
  foiling: string;
  rarity: string;
  artist: string;
  art_variation: string;
  image_url: string;
  set_printing_unique_id: string;
  tcgplayer_product_id?: string;
  tcgplayer_url?: string;
}

export interface SourceJSONCard {
  unique_id: string;
  name: string;
  pitch: string;
  cost: string;
  power: string;
  defense: string;
  health: string;
  intelligence: string;
  types: string[];
  card_keywords: string[];
  abilities_and_effects: string[];
  ability_and_effect_keywords: string[];
  granted_keywords: string[];
  functional_text: string;
  type_text: string;
  blitz_legal: boolean;
  cc_legal: boolean;
  commoner_legal: boolean;
  blitz_living_legend: boolean;
  cc_living_legend: boolean;
  blitz_banned: boolean;
  cc_banned: boolean;
  commoner_banned: boolean;
  upf_banned: boolean;
  blitz_suspended: boolean;
  cc_suspended: boolean;
  commoner_suspended: boolean;
  printings: SourcePrinting[];
}

interface SourceJSONSet {
  unique_id: string;
  id: string;
  name: string;
  printings: {
    unique_id: string;
  }[];
}

export const parseJSON = (cardJSON, setJSON): ParsedCard[] => {
  const jsonCards = JSON.parse(
    readFileSync(cardJSON, "utf-8")
  ) as SourceJSONCard[];
  const jsonSets = JSON.parse(
    readFileSync(setJSON, "utf-8")
  ) as SourceJSONSet[];

  return jsonCards.map(
    ({
      abilities_and_effects,
      ability_and_effect_keywords,
      card_keywords,
      cost,
      blitz_banned,
      blitz_legal,
      blitz_living_legend,
      blitz_suspended,
      cc_banned,
      cc_legal,
      cc_living_legend,
      cc_suspended,
      commoner_banned,
      commoner_legal,
      commoner_suspended,
      defense,
      functional_text,
      granted_keywords,
      health,
      intelligence: intellect,
      name,
      pitch,
      power,
      printings: rawPrintings,
      type_text,
      types,
    }) => {
      const blitzBanned = blitz_banned ? new Date().toISOString() : "";
      const classicConstructedBanned = cc_banned
        ? new Date().toISOString()
        : "";
      const commonerBanned = commoner_banned ? new Date().toISOString() : "";

      const printings = rawPrintings.map(
        ({
          artist,
          art_variation,
          edition,
          foiling,
          // foilings,
          id,
          image_url,
          rarity,
          set_id,
          set_printing_unique_id,
          tcgplayer_product_id,
          tcgplayer_url,
        }) => {
          const tcgplayer =
            !!tcgplayer_product_id && !!tcgplayer_url
              ? { productId: tcgplayer_product_id, url: tcgplayer_url }
              : undefined;

          const matchingSet = jsonSets.find(({ printings }) =>
            printings.some(
              ({ unique_id }) => unique_id === set_printing_unique_id
            )
          );
          let set: Release = Release.Promos;

          if (!matchingSet) {
            throw new Error(
              `No set found for ${set_id} ${set_printing_unique_id}`
            );
          } else {
            const validSets = Object.keys(setToSetIdentifierMappings);

            const matchingValidSet = validSets.find(
              (setName) => setName === matchingSet.name
            );
            if (matchingValidSet) {
              set = matchingValidSet as Release;
            } else {
              set = setIdentifierToSetMappings[set_id.toLowerCase()];
            }
          }
          return {
            artist,
            artVariation: art_variation,
            edition,
            foiling,
            // foilings,
            imageUrl: image_url,
            rarity,
            set,
            setIdentifier: id.trim(),
            tcgplayer,
          };
        }
      );

      const artists: string[] = Array.from(
        new Set(printings.map(({ artist }) => artist))
      );
      const rarities: string[] = Array.from(
        new Set(printings.map(({ rarity }) => rarity.trim()))
      );
      const setIdentifiers: string[] = Array.from(
        new Set(printings.map(({ setIdentifier }) => setIdentifier))
      ).filter((setIdentifier) => !!setIdentifier);
      const sets: string[] = Array.from(
        new Set(printings.map(({ set }) => set))
      );

      return {
        abilitiesAndEffects: abilities_and_effects,
        abilityAndEffectKeywords: ability_and_effect_keywords,
        artists,
        cardKeywords: card_keywords,
        cost,
        power,
        defense,
        functionalText: functional_text,
        grantedKeywords: granted_keywords,
        life: health,
        identifiers: [],
        images: [],
        intellect,
        name,
        pitch,
        printings,
        rarities,
        setIdentifiers,
        sets,
        types,
        typeText: type_text,
        variations: [],
        blitzBanned: blitz_banned,
        blitzLegal: blitz_legal,
        blitzLivingLegend: blitz_living_legend,
        blitzSuspended: blitz_suspended,
        classicConstructedBanned: cc_banned,
        classicConstructedLegal: cc_legal,
        classicConstructedLivingLegend: cc_living_legend,
        classicConstructedSuspended: cc_suspended,
        commonerBanned: commoner_banned,
        commonerLegal: commoner_legal,
        commonerSuspended: commoner_suspended,
      };
    }
  );
};
