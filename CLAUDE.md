# Repository guide

This is a single-page Astro personal website using pnpm, TypeScript, Sumi.css, and custom CSS. Use the commands and structure documented in README.md.

- Editable placeholder content: `src/data/site.ts`.
- Active page: `src/pages/index.astro`.
- Theme: `src/styles/global.css`; upstream Sumi.css: `src/styles/vendor/`.
- Old blog: `archive/blog/`, intentionally excluded from build, type checks, lint, and formatting. Keep the archive intact unless restoration is requested.
- `pnpm build` runs Astro checks and produces the static site. Search indexing is no longer part of the build.
- GitHub Pages deployment runs only on pushes to main or manual dispatch.
