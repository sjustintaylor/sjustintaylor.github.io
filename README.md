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

Content in `src/data/site.ts` is grouped by section:

- `socialPreview`: image path or absolute URL and image description for social sharing. The share card is stored in `public/social-card.jpg`.
- `imagePanel`: visibility, image path, accessible label, monogram, collection label, caption text and emphasis, and motto.
- `skills`: column heading, panel legend, and skill items.
- `introduction`, `colophon`: section labels and `paragraphs` arrays of strings, with each string rendered as a separate paragraph (matching `about.paragraphs`).
- `pullQuote`: visibility, quote text, attribution, and optional source URL (`null` for no link).
- `about`: column heading, section label, and paragraphs.
- `graphic`: visibility, image path, alt text, dimensions, figure label, and caption.
- `projects`: visibility, heading, subtitle, and project links in `items`.
- `contact`: heading, text, email, and social links.
- `footer`: visibility, copyright name override (`null` uses the site name), optional note, and back-to-top link visibility and label. The year updates automatically; the note is hidden by default.

Set `imagePanel.show`, `projects.show`, `pullQuote.show`, or `graphic.show` to `true` or `false` to show or hide that section without removing its content. Hiding the left image panel also removes the space reserved for it on desktop. Changes take effect on the next build.

Use `footer.show` to toggle the whole footer, `footer.note.show` to display its note, and `footer.backToTop.show` to toggle its link.

The email and social addresses carry over from the previous website. All other descriptive prose is placeholder content. Section links remain on the home page. Only `/` is generated as an HTML page; the old blog, search, feed, tags, and redirects are disabled.

## Blog archive

The previous source, all posts and images, and build configuration are preserved in `archive/blog/`, outside the active build. See its README for restoration notes. Blog-only dependencies and Tailwind have been removed from the active project.

## Deployment

The existing GitHub Pages workflow builds and deploys on pushes to `main` or manual dispatch. The custom domain is retained in `public/CNAME`. No deployment is performed by local development commands.

## Credits

- [Sumi.css](https://github.com/vladocar/Sumi.css) by Vladimir Carrer, MIT. A local copy and license are in `src/styles/vendor/`.
- The earlier EP Natural White image is retained in `public/textures/` but is no longer used. Its attribution is preserved alongside it. The active background is solid; `--paper` in `src/styles/global.css` controls its color.
- [Labrada](https://fonts.google.com/specimen/Labrada) and [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3), self-hosted via Fontsource packages under the SIL Open Font License.

## Desktop image panel

A fixed image panel occupies the left 34% of the viewport above 1100px when `imagePanel.show` is enabled. It is hidden on smaller screens and in print; the image is only requested by the desktop CSS media query. Change `imagePanel.src` in `src/data/site.ts` to use another image from `public/` (for example, `/images/ocean.webp`).

Photo: [Annie Spratt on Unsplash](https://unsplash.com/photos/an-aerial-view-of-a-body-of-water-UzVDOE3OCbg), used under the [Unsplash License](https://unsplash.com/license).
