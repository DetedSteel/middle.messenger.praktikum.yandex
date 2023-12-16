import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebarsPrecompile from './vite-plugin-handlebars-precompile.ts';

export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'dist'),
  },
  server: {
    port: 3000,
  },
  plugins: [handlebarsPrecompile()],
});
