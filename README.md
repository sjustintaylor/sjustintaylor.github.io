# Justin Taylor — personal website

A single-page Astro site with Labrada headings, Source Sans 3 body text, a solid ivory background, and Sumi.css as its base. No client-side JavaScript is required.

## Development

Use Node.js 24.16+ and pnpm 12.15.0 (`corepack enable` then `corepack install`).

- `pnpm install --frozen-lockfile` — install dependencies.
- `pnpm dev` — start the local site.
- `pnpm build` — check Astro/TypeScript and build into `dist/`.
- `pnpm preview` — preview the production build.
- `pnpm lint` — check source quality.
- `pnpm format:check` — check formatting.

## Editing content

Replace placeholder prose, interests, current activities, contact details, social links, and metadata in `src/data/site.ts`. Layout is in `src/pages/index.astro`; theme and responsive rules are in `src/styles/global.css`. The illustration is in `src/components/Curiosity.astro`.

The email and social addresses carry over from the previous website. All other descriptive prose is placeholder content. Section links remain on the home page. Only `/` is generated as an HTML page; the old blog, search, feed, tags, and redirects are disabled.

## Blog archive

The previous source, all posts and images, and build configuration are preserved in `archive/blog/`, outside the active build. See its README for restoration notes. Blog-only dependencies and Tailwind have been removed from the active project.

## Deployment

The existing GitHub Pages workflow builds and deploys on pushes to `main` or manual dispatch. The custom domain is retained in `public/CNAME`. No deployment is performed by local development commands.

## Credits

- [Sumi.css](https://github.com/vladocar/Sumi.css) by Vladimir Carrer, MIT. A local copy and license are in `src/styles/vendor/`.
- The earlier EP Natural White image is retained in `public/textures/` but is no longer used. Its attribution is preserved alongside it. The active background is solid; `--paper` in `src/styles/global.css` controls its color.
- [Labrada](https://fonts.google.com/specimen/Labrada) and [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3), self-hosted via Fontsource packages under the SIL Open Font License.
