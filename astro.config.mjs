import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  // Repo `fb91.github.io` = user site, se sirve en la raíz del dominio.
  site: 'https://fb91.github.io',
});
