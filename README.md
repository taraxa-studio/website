# Taraxa Studio website

Source for [taraxa.studio](https://taraxa.studio). A Simple Software.

## Stack

- Astro 7 with static output
- React 19 for islands (only the copy-email button hydrates)
- Tailwind CSS v4
- shadcn/ui (radix-nova preset, neutral palette)
- Inter (variable, optical size axis) from Fontsource, self-hosted and preloaded

## Run

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # writes dist/
pnpm preview
```

## Layout

```
src/
  assets/images/   photos (lummi.ai dandelions), NovelOS screenshot, founder avatar
  components/      Nav, Footer, Mark (logo SVG), Icon, Chevron, Tiles, Founder, CopyEmail, Dandelion (cursor)
  layouts/Base.astro   head, SEO meta, JSON-LD, font preload, nav and footer
  lib/site.ts      names, links, products, email. Edit copy here first.
  pages/           index, work, about, contact, 404
public/
  robots.txt, llms.txt, site.webmanifest, favicons, og.jpg
```

## Notes

- Light only. The palette and type scale follow apple.com and openai.com: white and #f5f5f7 panels, #1d1d1f ink, 56px panel headlines, 28px subheads, 44px pill buttons, 44px translucent nav.
- Home is a stack of full-bleed panels: hero with an isolated dandelion, NovelOS Studio, two product tiles, a photo panel, a statement, the founder.
- `Dandelion.astro` swaps the cursor for a seed on fine-pointer devices and releases a puff of seeds on every click. It is skipped under `prefers-reduced-motion` and on touch devices.
- Brand icons: GitHub from `simple-icons`, LinkedIn inlined in `Icon.astro` (simple-icons no longer ships it).
- Search and AI-search files live in `public/`: `robots.txt` allows the major AI crawlers, `llms.txt` describes the studio, and the sitemap is generated at build.
- Structured data (Organization, Person, WebSite, plus a page type per route) is emitted from `Base.astro`.
- The `.claude/skills` folder carries the SEO, AI SEO, GEO, and schema skills used to keep the site search-ready.
