import { resolve } from "node:path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

const libName = "vue-page-swiper"

export default defineConfig({
  plugins: [vue()],

  server: {
    host: "0.0.0.0"
  },

  optimizeDeps: {
    exclude: ["vue-page-swiper"]
  },

  build: {
    outDir: "./dist",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: libName,
      fileName: libName
    },
    rollupOptions: {
      external: ["vue"],
      output: { globals: { vue: "Vue" } }
    }
  }
})
