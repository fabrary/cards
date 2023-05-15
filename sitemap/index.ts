import { writeFileSync } from "fs";
import { cards } from "../dist/index";

const CARD_URL = "https://fabrary.net/cards";

const createCardSitemap = () => {
  return `<?xml version='1.0' encoding='UTF-8'?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${cards
    .map(
      ({ cardIdentifier }) =>
        `<url>
    <loc>${CARD_URL}/${cardIdentifier}</loc>
    <priority>0.5</priority>
  </url>
  `
    )
    .join("")}
</urlset>`;
};

const writeFiles = () => {
  const sitemap = createCardSitemap();
  writeFileSync(`sitemap/sitemap-cards.xml`, sitemap);
};

writeFiles();
