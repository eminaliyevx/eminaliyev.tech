import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [tailwind({ config: { applyBaseStyles: false } })],
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "assets/[hash][extname]",
        },
      },
    },
  },
  build: {
    assets: "assets",
  },
  compressHTML: true,
  site: "https://eminaliyev.tech",
});
