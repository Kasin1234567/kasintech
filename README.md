# Kasin Tech

A clean, Apple-inspired marketing website for **Kasin Tech** — a local tech support business specializing in in-home elder PC help and virus removal.

## Pages

- **Home (`/`)** — Hero section, stats, service highlights, and call-to-action
- **Services (`/services`)** — Full breakdown of all six services offered
- **Contact (`/contact`)** — Contact form (powered by Netlify Forms) with info sidebar

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Forms | Netlify Forms |
| Language | TypeScript 5.7 (strict) |
| Deployment | Netlify |

## Running Locally

```bash
npm install
npm run dev
```

Requires Node.js 18+. The dev server starts on [http://localhost:3000](http://localhost:3000).

> **Note:** Netlify Forms do not work in local development. Form submissions only work on Netlify-hosted deploys.

## Deployment

Deploys automatically to Netlify. The `netlify.toml` config handles the build command and publish directory.
