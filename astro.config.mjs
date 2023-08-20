import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import fancybox from "@fancyapps/ui/dist/index.umd?raw";
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
    {
      name: "fancybox",
      hooks: {
        "astro:config:setup": ({ injectScript }) => {
          injectScript("head-inline", fancybox);
        },
      },
    },
    sitemap(),
    compressor({
      fileExtensions: [".html", ".css", ".js", ".svg"],
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
