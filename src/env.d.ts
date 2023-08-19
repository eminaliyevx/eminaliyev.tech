/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  readonly CONTENTFUL_SPACE_ID: string;
  readonly CONTENTFUL_DELIVERY_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
