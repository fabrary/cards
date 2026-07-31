import cardvaultImageMapFile from "./cardvault-image-map.json";
import cardvaultImageMismatchMapFile from "./cardvault-image-mismatch-map-full.json";
import cardvaultFoilImageMapFile from "./cardvault-foil-image-map.json";
import migrationManifest from "../../image-id-migration-manifest.json";
import foilMigrationManifest from "../../foil-image-migration-manifest.json";

// Both maps are nested `cardIdentifier -> print -> { before, after }`. Keyed on the printing's
// `print` (unique per card) rather than its image, so printings that share an image string (e.g. a
// card's Cold and Rainbow foils both stored as `DYN092`) can be corrected independently. `before`
// is the printing's current image, `after` is the cardvault-correct face_id.
interface CardvaultImageCorrection {
  before: string;
  after: string;
}
type CardvaultImageMap = {
  [cardIdentifier: string]: { [print: string]: CardvaultImageCorrection };
};

// The hand-vetted map is the smaller, human-owned override subset; the mismatch map is the
// comprehensive scripted set - hand built wins in a conflict
const cardvaultImageMap = cardvaultImageMapFile as CardvaultImageMap;
const cardvaultImageMismatchMap =
  cardvaultImageMismatchMapFile as CardvaultImageMap;

// Foil corrections are their own migration: printings whose image collapsed onto a sibling's
// (a card's Rainbow foil showing the base image) rather than pointing at a wrong face_id. Separate
// map and separate manifest, so its rollout state never mixes with the id migration's - the two
// cover the same sets and would otherwise be indistinguishable in one set of counts.
const cardvaultFoilImageMap = cardvaultFoilImageMapFile as CardvaultImageMap;

// Each migration is rolled out one set at a time: only corrections whose new face_id belongs to a
// set listed in that migration's `setsToMigrate` are applied, so each set's snapshot drift can be
// reviewed on its own. Everything else is left unchanged.
const setsToMigrate = new Set<string>(migrationManifest.setsToMigrate);
const foilSetsToMigrate = new Set<string>(foilMigrationManifest.setsToMigrate);

// Set code of a face_id: drop a language (`XX_`) or edition (`U-`/`I-`/`R-`) prefix, then take the
// set token (letters, or a digit-led token like `1HP`) before the card number.
const getSetCode = (faceId: string): string => {
  const withoutPrefix = faceId
    .replace(/^[A-Z]{2}_/, "")
    .replace(/^[A-Z]{1,2}-/, "");
  const match = /^([0-9]*[A-Z]+)/.exec(withoutPrefix);
  return match ? match[1] : withoutPrefix;
};

// Returns the cardvault-correct image for a printing, or the image unchanged when no map has an
// entry for its print or its set isn't being migrated yet. The id migration wins over a foil
// correction for the same print: its maps are audited, and each is gated by its own manifest, so a
// correction only applies while its own migration has that set open.
export const getCardvaultImage = (
  cardIdentifier: string,
  print: string,
  image: string | undefined,
): string | undefined => {
  let correctedImage = image;

  const correction =
    cardvaultImageMap[cardIdentifier]?.[print] ||
    cardvaultImageMismatchMap[cardIdentifier]?.[print];
  const foilCorrection = cardvaultFoilImageMap[cardIdentifier]?.[print];

  if (correction && setsToMigrate.has(getSetCode(correction.after))) {
    correctedImage = correction.after;
  } else if (
    foilCorrection &&
    foilSetsToMigrate.has(getSetCode(foilCorrection.after))
  ) {
    correctedImage = foilCorrection.after;
  }

  return correctedImage;
};
