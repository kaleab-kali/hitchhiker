// Post-build prerender: renders the React app to static HTML and injects it
// into dist/index.html, so crawlers and AI agents that don't run JavaScript
// still see the full page content. The client JS takes over on load.
import { createServer } from 'vite';
import { readFileSync, writeFileSync } from 'node:fs';

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

try {
  const { render } = await vite.ssrLoadModule('/src/entry-prerender.tsx');
  const appHtml = render();

  const file = new URL('../dist/index.html', import.meta.url);
  const template = readFileSync(file, 'utf8');
  const out = template.replace('<div id="app"></div>', `<div id="app">${appHtml}</div>`);
  if (out === template) {
    throw new Error('mount point <div id="app"></div> not found in dist/index.html');
  }
  writeFileSync(file, out);
  console.log(`prerendered dist/index.html (${Math.round(appHtml.length / 1024)} kB of markup)`);
} finally {
  await vite.close();
}
