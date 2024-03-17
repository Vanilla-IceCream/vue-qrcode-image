import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueRoutes from 'vite-plugin-vue-routes';
import unocss from 'unocss/vite';
import { presetIcons, presetUno, transformerDirectives } from 'unocss';

export default defineConfig({
  plugins: [
    vue(),
    vueRoutes(),
    unocss({
      presets: [presetUno(), presetIcons()],
      transformers: [transformerDirectives({ enforce: 'pre' })],
    }),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
});
