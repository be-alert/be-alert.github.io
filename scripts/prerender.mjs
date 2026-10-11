// Bakes the rendered page into dist/index.html (and adds a sitemap), so visitors and
// search engines get the full page immediately, before JavaScript loads.
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const SITE = 'https://be-alert.github.io/';
const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href);
const file = resolve('dist/index.html');
const html = readFileSync(file, 'utf8');
if (!html.includes('<div id="root"></div>')) throw new Error('root placeholder not found in dist/index.html');
let out = html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`);

// Inline the stylesheet (~10 KB gzipped): saves a network round trip before the first paint on
// slow mobile connections. Its url(../x) references are rewritten to be relative to the page.
const link = out.match(/<link rel="stylesheet"[^>]*href="\.\/(assets\/[^"]+\.css)"[^>]*>/);
if (!link) throw new Error('stylesheet link not found in dist/index.html');
const css = readFileSync(resolve('dist', link[1]), 'utf8').replace(/url\(\.\.\//g, 'url(./');
out = out.replace(link[0], () => `<style>${css}</style>`);
// The page is fully drawn without JavaScript; the script only adds interactivity, so it must not
// compete with the first paint for bandwidth.
out = out.replace('<script type="module" crossorigin', '<script type="module" fetchpriority="low" crossorigin');
writeFileSync(file, out);

writeFileSync(
  resolve('dist/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${SITE}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>\n</urlset>\n`
);
rmSync(resolve('dist-ssr'), { recursive: true, force: true });
console.log('✔ prerendered dist/index.html + sitemap.xml');
