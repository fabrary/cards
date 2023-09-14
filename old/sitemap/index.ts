import { readFileSync, writeFileSync } from "fs";
import { XMLParser } from "fast-xml-parser";
import { cards } from "../dist/index";

const parser = new XMLParser();
const CARD_URL = "https://fabrary.net/cards/";
const FILE = "sitemap/sitemap-cards.xml";
const TODAY = new Date().toISOString().substring(0, 10);

interface SitemapUrl {
  lastmod: string;
  loc: string;
  priority: number;
}
interface Sitemap {
  urlset: { url: SitemapUrl[] };
}

const getExistingSitemapEntries = () => {
  const sitemap = readFileSync(FILE, "utf-8");
  const existingSiteMap: Sitemap = parser.parse(sitemap);
  return existingSiteMap.urlset.url;
};

const createCardSitemap = (existingEntries: SitemapUrl[]) => {
  return `<?xml version='1.0' encoding='UTF-8'?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${cards
    .map(({ cardIdentifier }) => {
      const matching = existingEntries.find(
        (existing) => existing.loc.replace(CARD_URL, "") === cardIdentifier
      );
      return `<url>
    <loc>${CARD_URL}${cardIdentifier}</loc>
    <lastmod>${matching ? matching.lastmod : TODAY}</lastmod>
    <priority>0.5</priority>
  </url>
  `;
    })
    .join("")}
</urlset>`;
};

const writeFiles = () => {
  const existing = getExistingSitemapEntries();
  const sitemap = createCardSitemap(existing);
  writeFileSync(FILE, sitemap);
};

writeFiles();
