// https://fabtcg.com/rules-and-policy-center/special-use-promos/
const SPECIAL_USE_PROMO_NAMES = [
  "Brutus, Summa Rudis",
  "Cracker Bauble",
  "Diamond Hands",
  "Fabric of Blossoms",
  "Fabric of Hope",
  "Fabric of Providence",
  "Fabric of Scales",
  "Fabric of Spring",
  "Frankie, Make Ends Meat",
  "Gavel of Natural Order",
  "Go Bananas",
  "Good Deeds Don’t Go Unnoticed",
  "Hummingbird, Call of Adventure",
  "Magrar",
  "Off Cuts",
  "Pink Visor",
  "Proclamation of Abundance",
  "Proclamation of Combat",
  "Proclamation of Production",
  "Proclamation of Requisition",
  "Ruu’di, Gem Keeper",
  "Scarf for a Scarf",
  "Shitty Xmas Present",
  "Silversheen Needle",
  "Squizzy & Floof",
  "Spirit of Christmas",
  "Taipanis, Dracai of Judgement",
  "Tales of Adventure",
  "Taylor",
  "Theryon, Magister of Justice",
  "Venomback Fabric",
  "Yorick, Weaver of Tales",
];

const SPECIAL_USE_PROMO_PREFIXES = ["JDG", "LSS"];

export const getIsASpecialUsePromo = (
  name: string,
  setIdentifiers: string[],
) => {
  const hasASpecialUseName = SPECIAL_USE_PROMO_NAMES.includes(name);
  const isOnlySpecialUsePromoPrints = setIdentifiers.every((setIdentifier) =>
    SPECIAL_USE_PROMO_PREFIXES.some((prefix) =>
      setIdentifier.startsWith(prefix),
    ),
  );

  return hasASpecialUseName || isOnlySpecialUsePromoPrints;
};
