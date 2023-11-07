import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
  site: "https://dev.dn5wgolgh0vq9.amplifyapp.com", //TODO: Change this to redirect properly
  output: "server",
  adapter: netlify({
    mode: 'standalone'
  }),
  integrations: [mdx(), sitemap(), react()],
  vite: {
    ssr: {
      external: ["@aws-amplify/pubsub"],
      noExternal: ["@radix-ui/*"],
    },
    resolve: {
      alias: [
        {
          find: "./runtimeConfig",
          replacement: "./runtimeConfig.browser",
        },
      ],
    },
  },
});
