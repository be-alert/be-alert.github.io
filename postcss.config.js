import { fileURLToPath } from 'node:url';

export default {
  plugins: {
    // Explicit path: works even when the build is started from another folder.
    tailwindcss: { config: fileURLToPath(new URL('./tailwind.config.js', import.meta.url)) },
    autoprefixer: {},
  },
};
