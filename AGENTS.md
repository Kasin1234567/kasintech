# AGENTS.md

This document describes the project architecture and conventions for AI agents and developers working on this codebase.

## Project Overview

A marketing website for **Kasin Tech**, a local in-home tech support business. The design is Apple-inspired: dark (black) background, blue accent color, clean typography, generous whitespace.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Forms | Netlify Forms |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
src/
  routes/
    __root.tsx        # Root layout: sticky header with nav, footer, global title/meta
    index.tsx         # Home page: hero, stats bar, services snapshot, CTA
    services.tsx      # Services page: full grid of 6 service cards
    contact.tsx       # Contact page: Netlify Form (AJAX) + info sidebar
  styles.css          # Tailwind import + body/html base styles (dark background)
  router.tsx          # TanStack Router initialization
  data/
    products.ts       # Unused legacy file from starter template (can be removed)

public/
  contact-form.html   # Static HTML dummy form — required for Netlify Forms build-time detection
  favicon.ico
  placeholder.png
```

## Key Architectural Decisions

### Header and Footer
Both live in `src/routes/__root.tsx` as local components (not separate files). They are rendered once in the `RootDocument` shell. The header is `position: fixed` with `backdrop-blur`, requiring `pt-14` on the `<main>` element.

### Routing
File-based routing via TanStack Router:
- `/` → `routes/index.tsx`
- `/services` → `routes/services.tsx`
- `/contact` → `routes/contact.tsx`

### Netlify Forms
Contact form uses AJAX submission to avoid full-page reload. The `fetch` target is `/contact-form.html` (the static skeleton), **not** `/`. This is required because TanStack Start's SSR catch-all would intercept a POST to `/`. All field names in `contact.tsx` must be mirrored in `public/contact-form.html`.

### Styling
- Tailwind CSS 4 utility classes throughout
- Color theme: `bg-black` base, `text-blue-400`/`bg-blue-600` accents
- Glow effects use large blurred `div` elements with low-opacity blue backgrounds
- No custom CSS variables (Tailwind utility classes handle everything)

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite plugins: TanStack Start, Netlify, Tailwind |
| `tsconfig.json` | TypeScript config with `@/*` path alias for `src/*` |
| `netlify.toml` | Build command, output directory, dev server settings |
| `styles.css` | Tailwind import + base body/html styles |

## Development Commands

```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Production build
npm run preview  # Preview production build
```

## Conventions

### Naming
- Components: PascalCase
- Routes: kebab-case files

### Styling
- Tailwind CSS utility classes
- Dark-first design: default to black backgrounds, white text, blue accents

### TypeScript
- Strict mode enabled
- Import paths use `@/` alias
- Type-only imports with `type` keyword
