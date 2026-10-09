import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base: the built site works from any host or sub-folder
// (custom domain, GitHub Pages, Netlify, cPanel…).
export default defineConfig({
  base: './',
  plugins: [react()],
  build: { target: 'es2019', cssCodeSplit: false },
});
