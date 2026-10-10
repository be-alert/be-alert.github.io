// Bakes the rendered page into dist/index.html (and adds a sitemap), so visitors and
// search engines get the full page immediately, before JavaScript loads.
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const SITE = 'https://razachaudhary5512-a11y.github.io/';
const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href);
const file = resolve('dist/index.html');
const html = readFileSync(file, 'utf8');
if (!html.includes('<div id="root"></div>')) throw new Error('root placeholder not found in dist/index.html');
writeFileSync(file, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`));

writeFileSync(
  resolve('dist/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${SITE}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>\n</urlset>\n`
);
rmSync(resolve('dist-ssr'), { recursive: true, force: true });
console.log('✔ prerendered dist/index.html + sitemap.xml');
