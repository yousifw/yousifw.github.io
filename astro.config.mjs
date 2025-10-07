// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://yousifw.github.io",

  experimental: {
      fonts: [{
          provider: fontProviders.google(),
          name: "Roboto",
          cssVariable: "--font-roboto",
      }]
  },

  integrations: [mdx()]
});