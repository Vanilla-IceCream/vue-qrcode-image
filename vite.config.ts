import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/vue-qrcode-image.ts'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue', '@nuintun/qrcode'],
    },
  },
  plugins: [vue(), dts()],
  test: {
    environment: 'happy-dom',
  },
});
