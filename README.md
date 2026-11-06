# Zelcodes — SwiftUI animation library · website

> Polished iOS UI animations in SwiftUI (iOS 27) with 1:1 Flutter ports.
> Browse the showcase → buy one ($3.99) or get Zelcodes Pro on Polar → ship polished apps faster.

**Live**: https://zelcodes-io.github.io/
**Brand & designer assets**: https://github.com/akashkottil/Zelcodes-Graphic_Designer

---

## What this repo is

The marketing website for **Zelcodes**, a curated SwiftUI animation library by Akash Kottil. It's a fully static Next.js site that:

- Showcases every animation in the library with a bespoke in-browser preview (no GIFs, no videos — pure Framer Motion re-creations of each real SwiftUI project)
- Funnels viewers to Polar checkout: single animations ($3.99, zip download) and Zelcodes Pro (private GitHub repo + zip)
- Doubles as the public face of the Zelcodes brand — logo, wordmark, typography, mesh backgrounds, glassmorphism surfaces

---

## Features

- **Swipeable hero carousel** — drag / arrow / auto-advance through 7 featured animations with a spring tuned deck
- **31 animations with real cover images** from the Zelcodes reels, each with its own $3.99 Polar checkout and detail page
- **Category filtering** on the animation library
- **Per-animation detail pages** (prerendered statically)
- **Blog scaffold** ready for SwiftUI tutorials
- **Handwritten "zelcodes" logo** in liquid glass (ink version in light mode)
- **Liquid-glass wordmark** with a continuous diagonal colour gradient clipped across the whole word
- **Light + dark mode** via `next-themes` (system-aware)
- **SEO**: metadata, OpenGraph, sitemap, robots, semantic headings
- **Privacy + Terms** pages
- **Animated favicon** using SMIL (works in Chrome / Edge / Safari)
- **Accessible**: proper ARIA labels, semantic HTML, `prefers-reduced-motion` throughout

---

## Tech stack

- **[Next.js 16](https://nextjs.org)** (App Router) — static export for Pages deployment
- **[React 19](https://react.dev)**
- **[Tailwind CSS 4](https://tailwindcss.com)** (CSS-first `@theme` config)
- **[Framer Motion](https://www.framer.com/motion/)** for all animations
- **[next-themes](https://github.com/pacocoursey/next-themes)** for light/dark
- **[lucide-react](https://lucide.dev)** for UI icons; custom SVGs for brand icons
- **Inter + JetBrains Mono** via `next/font/google`
- **TypeScript** throughout

---

## Getting started

```bash
# install
npm install

# run the dev server at http://localhost:3000
npm run dev

# production build (static export → ./out)
npm run build

# lint
npm run lint
```

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server at `localhost:3000` (basePath disabled in dev) |
| `npm run build` | Builds a static export into `./out` |
| `npm start` | Serves the prod bundle |
| `npm run lint` | Runs ESLint |

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx              Root layout, fonts, ThemeProvider
│   ├── page.tsx                Landing page
│   ├── globals.css             Tailwind + CSS vars, liquid keyframes
│   ├── icon.svg                SMIL-animated favicon
│   ├── sitemap.ts / robots.ts
│   ├── privacy/page.tsx        Privacy policy
│   ├── terms/page.tsx          Terms of service
│   ├── blog/page.tsx           Blog index (placeholder posts)
│   └── animations/[slug]/      Per-animation detail (31 static pages)
│
├── components/
│   ├── Hero.tsx                Hero section with HeroCarousel
│   ├── HeroCarousel.tsx        Swipeable deck of featured animations
│   ├── AnimationShowcase.tsx   Filterable grid of all 31
│   ├── AnimationCard.tsx       Card with cover image, price + tags
│   ├── HowItWorks.tsx / PricingSection.tsx / CredibilitySection.tsx / CTASection.tsx
│   ├── Navbar.tsx / Footer.tsx
│   ├── Logo.tsx                Handwritten "zelcodes" logo (glass in dark mode, ink in light mode)
│   ├── MeshGradient.tsx        Animated background mesh
│   ├── ThemeProvider.tsx / ThemeToggle.tsx
│   ├── BrandIcons.tsx          Instagram / Facebook inline SVGs
│
└── lib/
    ├── animations.ts           Metadata for all 31 animations (image, keyword, Polar checkout)
    ├── blog.ts                 Blog post metadata
    └── links.ts                Polar checkout / Instagram / Facebook / contact
```

---

## Design system

The brand language (colours, typography, the logo, glass recipes, motion easings, poster rules) is documented in a separate repo:

**https://github.com/akashkottil/Zelcodes-Graphic_Designer**

That repo contains:

- `graphicdesigner.md` — full written design spec
- `logos/` — every lockup variant as SVG + PNG (+ animated GIFs)
- `posters/` — source posters (SVG + PNG) for the launch campaign

---

## Deployment — GitHub Pages

This site is configured for static deployment to GitHub Pages via GitHub Actions.

### How it works

- `next.config.ts` uses `output: "export"` to produce a fully static site in `./out`.
- The site is the organisation site **https://zelcodes-io.github.io/** (repo `zelcodes-io/zelcodes-io.github.io`), so it is served from the root and no `basePath` is needed. `NEXT_PUBLIC_BASE_PATH` is still supported if the site ever moves to a sub-path.
- A workflow at `.github/workflows/deploy.yml` builds and publishes the site on every push to `main` (Settings → Pages → Source: GitHub Actions).
- `public/.nojekyll` disables Jekyll processing so Pages serves the `_next/` asset directory correctly.
- Custom domain later: add it in Settings → Pages and update `SITE_URL` in `src/lib/links.ts`.

---

## Writing new animations

1. Add the animation to `src/lib/animations.ts` (slug, keyword, title, tagline, description, image in `public/animations/`, and its Polar checkout link).
2. Add its 3:4 cover image (the reel cover without the CTA, ~800 px wide) to `public/animations/<keyword>.jpg`.
3. Build — the detail page `/animations/<slug>/` is generated automatically via `generateStaticParams`.

---

## Credits

- **Design + code** — [Akash Kottil](https://github.com/akashkottil)
- **Brand** — Zelcodes (see the [Zelcodes-Graphic_Designer](https://github.com/akashkottil/Zelcodes-Graphic_Designer) repo)
- Built with ❤️ for the SwiftUI community

---

## License

Code in this repository is under the terms in [LICENSE](LICENSE) (if present). The **Zelcodes brand, logo, wordmark, typography lockups, and poster artwork** are the property of Akash Kottil and are **not** covered by any OSS licence — see the [Terms of Service](src/app/terms/page.tsx) for details.

The **animation source code** (the Xcode projects and Flutter ports shown on the site) is sold separately on Polar and covered by the licence in the Zelcodes Pro repository.
