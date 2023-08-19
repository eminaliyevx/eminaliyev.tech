import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compressor from "astro-compressor";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
    compressor({
      fileExtensions: [".html", ".css", ".js", ".svg", ".jpg"],
    }),
  ],
  experimental: {
    viewTransitions: true,
  },
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
    inlineStylesheets: "auto",
  },
  site: "https://eminaliyev.tech",
});
