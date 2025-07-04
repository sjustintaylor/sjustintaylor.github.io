import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";

import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  redirects: {
    "/work-the-problem": "/posts/work-the-problem",
    "/lies-of-the-mainstream-media": "/posts/lies-of-the-mainstream-media",
    "/building-better-software": "/posts/building-better-software",
    "/app-not-required": "/posts/app-not-required",
    "/email-as-interface": "/posts/email-as-interface",
    "/the-game-is-yours-to-lose": "/posts/the-game-is-yours-to-lose",
    "/abstract-cartography-for-skill-acquisition":
      "/posts/abstract-cartography-for-skill-acquisition",
    "/zombie-subscriptions": "/posts/zombie-subscriptions",
    "/do-things-tell-people": "/posts/do-things-tell-people",
    "/specialist-vs-generalist": "/posts/specialist-vs-generalist",
    "/scaling-laws": "/posts/scaling-laws",
  },
  integrations: [
    sitemap({
      filter: page => SITE.showArchives || !page.endsWith("/archives"),
    }),
  ],
  markdown: {
    remarkPlugins: [[remarkToc, { heading: "Table of contents" }]],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  image: {
    // Used for all Markdown images; not configurable per-image
    // Used for all `<Image />` and `<Picture />` components unless overridden with a prop
    layout: "full-width",
    responsiveStyles: true,
  },
  experimental: {
    preserveScriptOrder: true,
  },
});
