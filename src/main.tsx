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

const startMotion = () => document.documentElement.classList.add('motion-ready');
const whenIdle = () => ('requestIdleCallback' in window ? requestIdleCallback(startMotion, { timeout: 1500 }) : setTimeout(startMotion, 300));
if (document.readyState === 'complete') whenIdle();
else addEventListener('load', whenIdle, { once: true });
