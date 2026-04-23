# campclaude-site

Static Astro site for Camp Claude. Reads markdown from the sibling `../content/` directory via Astro 5 content collections.

## Stack

- **Astro 5** — static output mode, file-based routing
- **No SSR, no auth, no middleware** in Phase 1
- **Stripe Payment Links** for checkout (no backend needed)
- **Vimeo password-protected** for the $97 workshop video
- **Deploy target:** Vercel (free tier)

## Quickstart

```bash
cd edu/campclaude/site
npm install
npm run dev        # → http://localhost:4321
```

To build for production:

```bash
npm run build      # → dist/
npm run preview    # serve the build locally
```

## Structure

```
src/
├── content.config.ts            # Content collection schemas + glob loaders
├── layouts/
│   └── BaseLayout.astro         # Shared nav + footer + fonts
├── styles/
│   └── tokens.css               # Brand tokens (colors, fonts, base)
└── pages/
    ├── index.astro              # / — landing
    ├── learn/
    │   ├── index.astro          # /learn — curriculum hub
    │   └── [...slug].astro      # /learn/[slug] — dynamic article pages
    ├── cohort/
    │   ├── index.astro          # /cohort — Foundations ($299)
    │   ├── full.astro           # /cohort/full — Full Camp Claude ($999)
    │   └── corporate.astro      # /cohort/corporate — B2B inquiry
    ├── facilitate.astro         # /facilitate — Facilitator pathway
    ├── privacy.astro            # /privacy
    ├── terms.astro              # /terms
    └── 404.astro                # /404
```

## Content source

Articles live in `../content/teach/` and `../content/reference/`. Adding an article is:

1. Create a new `.md` file in the appropriate folder
2. Add frontmatter:

```yaml
---
title: The article title, may contain <em>rust-accent</em> HTML
description: One-sentence summary (meta description + sidebar dek)
module: 1                # optional, for teach/ ordering
section: teach           # or "reference"
tier: free               # "free" | "email" | "paid" (Phase 2 placeholder)
readTime: "12 min read"
updated: "2026-04-23"
---
```

3. The article auto-appears at `/learn/[filename-without-md]` and in the Learn index.

## Phase 1 vs Phase 2

Phase 1 (now):
- All content free and static
- Stripe Payment Links for cohort enrollment
- Vimeo password-protected video for workshops
- No auth, no database

Phase 2 (future):
- Switch `output: "static"` to `"server"` when adding paid video library
- Add Clerk for auth + middleware for `/library/*`
- Video delivered via signed URLs (Mux or Bunny)

## Deployment

```bash
# Once (to link the project)
npx vercel

# Subsequent deploys are automatic via git push if linked to the repo.
# Manual deploy:
npx vercel --prod
```
