import { renderToString } from 'react-dom/server';
import { App } from './App';

// Used by scripts/prerender.mjs at build time to bake the home page
// into dist/index.html so crawlers and AI agents get real HTML.
export function render(): string {
  return renderToString(<App />);
}
