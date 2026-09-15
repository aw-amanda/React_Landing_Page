# Landscaping Services — React Landing Page

> Live demo: https://aw-amanda.github.io/React_Landing_Page/

A mobile-first React landing page template with SEO optimization, light/dark
themes, smooth scrolling, and a strong accessibility foundation.

---

## Overview

This project is a single-page marketing site for a landscaping business. It
demonstrates a production-ready stack: React 19 + TypeScript + Vite + Tailwind
CSS 4 + Zustand + Lenis. All UI components are hand-rolled — no component
libraries.

The site is designed to be:

- **Accessible** — WCAG 2.2 Level AA compliant (AAA body text contrast).
  See [`README-a11y.md`](./README-a11y.md) for the full audit.
- **Responsive** — fluid type and layout from 320px up to ultrawide.
- **Fast** — minimal JS, image best practices, `content-visibility` on
  below-fold sections, rAF-gated scroll listeners.
- **Themeable** — system-preference aware with a persisted user override.

---

## SEO

- Dynamic meta tags: description, keywords, Open Graph, Twitter Cards.
- JSON-LD structured data (`LocalBusiness` schema).
- Semantic HTML5 with a single `<h1>` and no skipped heading levels.
- Descriptive alt text (50–125 chars) on all informative images.
- `robots.txt` and `sitemap.xml` configured for GitHub Pages.
- Canonical URL to prevent duplicate content.
- Mobile-first indexing ready.

**Files:** `src/components/seo/SEO.tsx`, `public/robots.txt`,
`public/sitemap.xml`, `index.html`.

---

## Performance

- Native lazy loading (`loading="lazy"`) on all below-fold images.
- Async decoding (`decoding="async"`) on all images.
- Hero image preloaded with `fetchPriority="high"` for fast LCP.
- Explicit `width`/`height` on every image to prevent CLS.
- Passive, `requestAnimationFrame`-gated scroll listeners.
- `content-visibility: auto` on About / Services / Contact sections.
- Tree-shaken, minified production build via Vite.
- Theme initialization runs before first paint (no FOUC).

**Target:** Lighthouse Performance 95+, CLS < 0.05, LCP < 2.5s on a
mid-tier mobile device.

---

## Responsive design

- Mobile-first CSS with progressive enhancement.
- Fluid typography via `clamp()` — type scales smoothly between breakpoints.
- Breakpoints: 640px, 768px, 1024px, 1280px (Tailwind defaults).
- CSS Grid for section layouts, Flexbox for components.
- Touch targets are ≥ 44×44 CSS pixels (WCAG 2.5.8).
- Mobile slide-out navigation with focus trap, Escape-to-close, and body
  scroll lock.
- `100svh` hero height to avoid iOS Safari URL-bar jumping.
- `container-responsive` wrapper with max-widths and safe gutters.

---

## Light / dark theme system

- CSS Custom Properties drive every semantic color token.
- Tailwind v4 `@custom-variant dark` for class-based dark mode.
- Automatic detection of `prefers-color-scheme: dark` on first visit.
- Persisted user preference in `localStorage` (via Zustand `persist`).
- Theme class applied to `<html>` before first paint (`ThemeScript`),
  eliminating flash of the wrong theme.
- `<meta name="theme-color">` updates dynamically per theme.
- All text meets WCAG AA (body text meets AAA) in both themes.

**Files:** `src/index.css`, `src/store/theme-store.ts`,
`src/components/ui/ThemeScript.tsx`, `src/components/ui/theme-button.tsx`.

---

## Functionality

- Sticky header with backdrop blur and scroll-state detection.
- Smooth scrolling via [Lenis](https://github.com/darkroomengineering/lenis),
  with a shared easing config.
- Auto-advancing hero slideshow (35s cycle, 7s stagger) that can be paused
  on its current frame.
- Mobile hamburger menu with focus trap and ARIA state.
- Skip-to-main-content link.
- Accessible contact form with `autoComplete`, `aria-required`, and an
  `aria-live` status region for submission feedback.
- Responsive project gallery.
- Multiple CTAs that smooth-scroll to the contact section.

---

## Architecture

The stack is intentionally small:

| Dependency | Purpose |
|---|---|
| React 19 | UI |
| TypeScript 5 | Types |
| Vite 7 | Build tool |
| Tailwind CSS 4 | Styling |
| Zustand 5 | Theme state |
| Lenis 1.3 | Smooth scroll |

**No component library.** Every button, nav, slider, and form element is
custom-built so the bundle stays small and the markup stays semantic.

**Bundle target:** < 100 kB gzipped (React + React DOM + Lenis + Zustand +
purged Tailwind + app code).

---

## Accessibility

See [`README-a11y.md`](./README-a11y.md) for the full conformance report,
per-criterion details, and manual test checklist.

Highlights:

- Keyboard navigation with visible focus indicators everywhere.
- Screen-reader tested landmarks and heading hierarchy.
- Skip link.
- Focus management for mobile menu and anchor navigation.
- `prefers-reduced-motion` respected site-wide — the slideshow becomes a
  static image, Lenis smooth scroll is disabled.
- WCAG 2.2 AA contrast verified in both themes.
- 44×44 px minimum touch targets.

**Target:** Lighthouse Accessibility 100/100, 0 axe-core violations.

---

## Getting started

```bash
# Install
npm install

# Dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview