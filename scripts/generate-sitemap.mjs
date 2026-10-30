// Writes public/sitemap.xml from src/data/seo-data.js. Runs before every build (see "prebuild" in package.json).
import { writeFileSync } from "node:fs";
import { PAGES, absoluteUrl } from "../src/data/seo-data.js";

const lastmod = new Date().toISOString().slice(0, 10);
const urls = Object.values(PAGES)
  .filter((p) => !p.noindex)
  .map(
    (p) =>
      `  <url>\n    <loc>${absoluteUrl(p.path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${p.priority.toFixed(1)}</priority>\n  </url>`
  )
  .join("\n");

writeFileSync(
  new URL("../public/sitemap.xml", import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
console.log(`sitemap.xml: ${Object.values(PAGES).filter((p) => !p.noindex).length} URLs`);
