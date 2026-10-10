import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Production pages are prerendered (scripts/prerender.mjs): attach to that HTML instead of redrawing it.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);

const startMotion = () => {
  document.documentElement.classList.add('motion-ready');
  // Nastaliq for the one-line Urdu tagline (only its glyphs). Loaded last: it is decorative.
  const urdu = document.createElement('link');
  urdu.rel = 'stylesheet';
  urdu.href =
    'https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@500&display=swap&text=%D8%A7%D9%BE%D9%86%DB%92%20%D8%A2%D8%B3%20%D9%BE%D8%A7%D8%B3%20%DA%A9%DB%8C%20%DB%81%D8%B1%20%D8%AE%D8%A8%D8%B1';
  document.head.appendChild(urdu);
};
const whenIdle = () => ('requestIdleCallback' in window ? requestIdleCallback(startMotion, { timeout: 1500 }) : setTimeout(startMotion, 300));
if (document.readyState === 'complete') whenIdle();
else addEventListener('load', whenIdle, { once: true });
