# Taraxa Studio website

Source for [taraxa.studio](https://taraxa.studio). A Simple Software.

## Stack

- Astro 7 with static output
- React 19 for islands (only the copy-email button hydrates)
- Tailwind CSS v4
- shadcn/ui (radix-nova preset, neutral palette)
- Hanken Grotesk from Fontsource, self-hosted

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
  components/      Nav, Footer, Mark (logo SVG), ThemePicture, NovelOS, Founder, CopyEmail
  layouts/Base.astro   head, SEO meta, JSON-LD, dark mode, nav and footer
  lib/site.ts      names, links, products, email. Edit copy here first.
  pages/           index, work, about, contact, 404
public/
  robots.txt, llms.txt, site.webmanifest, favicons, og.jpg
```

## Notes

- Dark mode follows the system setting. Hero and "How we work" images swap per scheme through `ThemePicture`.
- Search and AI-search files live in `public/`: `robots.txt` allows the major AI crawlers, `llms.txt` describes the studio, and the sitemap is generated at build.
- Structured data (Organization, Person, WebSite, plus a page type per route) is emitted from `Base.astro`.
- The `.claude/skills` folder carries the SEO, AI SEO, GEO, and schema skills used to keep the site search-ready.
