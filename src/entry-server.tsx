import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './App';

/** Build-time render: the HTML is baked into index.html so the page shows before any JavaScript runs. */
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
