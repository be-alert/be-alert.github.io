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
