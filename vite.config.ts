import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes("-"),
        },
      },
    }),
  ],
  /*
  build: {
    lib: {
      entry: "src/main.ts",
      name: "mycomponent.js",
      fileName: () => "mycomponent.js",
      formats: ["iife"],
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  */
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});