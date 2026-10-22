# Archived blog

The complete previous AstroPaper source and its dependency manifest, lockfile, and Astro/TypeScript configurations are retained here. This folder is excluded from the active site's routes, type checks, formatting, and linting. Nothing here is published.

To restore the blog, start from a separate branch, review the saved package.json for blog-specific dependencies, and migrate the selected routes, content collection, components, and styles into the active src directory. The archived configuration targets Astro 5; adapt it to the current Astro version rather than copying it wholesale. The archived lockfile is historical and should not replace the active lockfile.

Existing post images and Markdown are unchanged under src/assets and src/data/blog. The old theme is also available in Git history.
