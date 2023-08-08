import { resolve } from "node:path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { visualizer } from "rollup-plugin-visualizer"

export default defineConfig({
  plugins: [
    vue(),
    process.env.ANALYZE === "true" &&
      visualizer({
        filename: "stats.html",
        open: true
      })
  ],

  server: {
    host: "0.0.0.0"
  },

  optimizeDeps: {
    exclude: ["vue-page-swiper"]
  },

  build: {
    outDir: "./dist",
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VuePageSwiper",
      formats: ["es"],
      fileName: "vue-page-swiper"
    },
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        globals: { vue: "Vue", "vue-router": "VueRouter " }
      }
    }
  }
})
