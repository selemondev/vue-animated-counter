import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import typescript2 from 'rollup-plugin-typescript2';
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/plugin/index.ts'),
      name: "vue-animated-counter",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `vue-animated-counter.${format}.js`
    },

    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/plugin/index.ts")
      },
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  plugins: [
    vue(),
    typescript2({
    check: false,
    include: ["src/components/**/*.vue"],
    tsconfigOverride: {
      compilerOptions: {
        outDir: "dist",
        sourceMap: true,
        declaration: true,
        declarationMap: true,
      },
    },
    exclude: ["vite.config.ts"]
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
