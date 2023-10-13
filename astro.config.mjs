import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compressor from "astro-compressor";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    compressor({
      fileExtensions: [".html", ".css", ".js", ".svg"],
    }),
  ],
  image: {
    domains: ["images.ctfassets.net"],
    remotePatterns: [{ protocol: "https" }],
  },
  site: "https://next.eminaliyev.tech",
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
});
