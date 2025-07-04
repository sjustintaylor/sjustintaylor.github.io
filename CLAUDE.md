# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Package Manager**: This project uses pnpm

**Development**:
- `pnpm dev` - Start local dev server at localhost:4321
- `pnpm run build` - Build production site (includes astro check, build, and pagefind indexing)
- `pnpm run preview` - Preview build locally

**Code Quality**:
- `pnpm run lint` - Run ESLint
- `pnpm run format` - Format code with Prettier  
- `pnpm run format:check` - Check code formatting

**Type Checking**:
- `pnpm run sync` - Generate TypeScript types for Astro modules
- The build command automatically runs `astro check` for type validation

**Docker** (alternative):
- `task dev` - Alternative dev command using Taskfile
- `docker compose up -d` - Run in Docker

## Architecture

**Framework**: Astro blog theme with TypeScript, TailwindCSS

**Content System**:
- Blog posts are markdown files in `src/data/blog/`
- Content collection defined in `src/content.config.ts` with schema validation
- Posts support frontmatter: title, description, pubDatetime, tags, featured, draft, etc.
- Files starting with `_` are ignored by the glob pattern

**Key Configuration**:
- Site config in `src/config.ts` (SITE object)
- Main Astro config in `astro.config.ts`
- Content schema in `src/content.config.ts`

**Build Process**:
- `astro check` runs TypeScript validation
- `astro build` creates production build
- `pagefind` generates search index
- Search index copied to public/ for deployment

**Styling**: TailwindCSS with custom typography, supports light/dark mode

**Search**: Uses Pagefind for static search functionality

**Dynamic Features**:
- OG image generation for posts
- RSS feed generation  
- Sitemap generation
- Archive pages (configurable via SITE.showArchives)

**Post Management**:
- Draft posts (draft: true in frontmatter) are filtered out in production
- Scheduled posts with future dates are handled with SITE.scheduledPostMargin
- Tags are automatically collected and used for tag pages