# CORSTAD website

Source for [corstad.com](https://corstad.com) — built with [Astro](https://astro.build), deployed on Cloudflare Pages.

## Stack

- **Astro** — static site generation, zero client-side JS by default
- **Plain CSS** — no framework, single global stylesheet (`src/styles/global.css`)
- **Cloudflare Pages** — hosting, SSL, CDN
- **Cloudflare** — DNS, security

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  layouts/Layout.astro   # shared <head>, header, footer, SEO/meta
  components/            # Header, Footer
  pages/                 # one folder per route (e.g. about/index.astro -> /about/)
  styles/global.css      # design tokens + all styles
public/
  _headers              # Cloudflare Pages security headers
  robots.txt, favicon.svg, og-image.svg
```

## Deployment

Pushes to `main` are built and deployed automatically by Cloudflare Pages.
Preview deployments are created for pull requests.

## Adding a page

1. Create `src/pages/<route>/index.astro`.
2. Wrap content in `<Layout title="..." description="..." path="/<route>/">`.
3. Add a link in `src/components/Header.astro` if it belongs in primary navigation.
