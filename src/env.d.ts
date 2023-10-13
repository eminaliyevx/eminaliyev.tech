/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly VERSION: string;
  readonly CONTENTFUL_SPACE_ID: string;
  readonly CONTENTFUL_DELIVERY_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
