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
  components/      Nav (top brand bar), BottomNav (glass tab bar), Footer, Mark, Icon, Flag, Chevron, Tiles, NovelOS, Founder, CopyEmail, Dandelion (seed burst)
  layouts/Base.astro   head, SEO meta, JSON-LD, font preload, nav and footer
  lib/site.ts      names, links, NovelOS facts (platforms, features, price), upcoming apps, nav. Edit copy here first.
  pages/           index, work, about, contact, 404
public/
  robots.txt, llms.txt, site.webmanifest, favicons, og.jpg
```

## Notes

- Light only. The palette and type scale follow apple.com and openai.com: white and #f5f5f7 panels, #1d1d1f ink, 56px panel headlines, 28px subheads, 44px pill buttons, 44px translucent nav.
- Home is a stack of full-bleed panels: hero with an isolated dandelion, NovelOS Studio, two product tiles, a photo panel, a statement, the founder.
- Navigation is a floating glass tab bar after Telegram's Liquid Glass bottom bar (`BottomNav.astro`): one dark lens slides under the hovered or current tab. The bar and the seed canvas are marked `transition:persist`, and `ClientRouter` is on, so the lens glides on navigation instead of snapping. The top bar carries only the mark and wordmark, centered.
- The cursor is the normal system cursor. `Dandelion.astro` releases a puff of seeds on a clean click only (no drag, no text selection, not inside a field), skipped under `prefers-reduced-motion`.
- Brand icons: GitHub from `simple-icons`, LinkedIn inlined in `Icon.astro` (simple-icons no longer ships it).
- Search and AI-search files live in `public/`: `robots.txt` allows the major AI crawlers, `llms.txt` describes the studio, and the sitemap is generated at build.
- Structured data (Organization, Person, WebSite, plus a page type per route) is emitted from `Base.astro`.
- The `.claude/skills` folder carries the SEO, AI SEO, GEO, and schema skills used to keep the site search-ready.
