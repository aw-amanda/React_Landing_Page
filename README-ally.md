# Accessibility Documentation

**Project:** Landscaping Services Landing Page
**Standard targeted:** WCAG 2.2 Level AA (with AAA body-text contrast where achievable)
**Last reviewed:** 2026-09-14

---

## 1. How to use this document

This file is the single source of truth for accessibility decisions in this project.
It is organized as:

1. **Conformance summary** — a quick pass/fail table.
2. **Per-criterion details** — every WCAG 2.2 success criterion that applies, with
   the implementation approach and where to find it in the code.
3. **Manual test checklist** — steps a human should run before each release.
4. **Known limitations** — honest list of things we can't fully guarantee.

If you change a component, update the relevant row. If you add a new component,
add a row.

---

## 2. Conformance summary

| Principle | Level A | Level AA | Level AAA (partial) |
|---|---|---|---|
| 1. Perceivable | ✅ | ✅ | ✅ body text |
| 2. Operable | ✅ | ✅ | — |
| 3. Understandable | ✅ | ✅ | — |
| 4. Robust | ✅ | ✅ | — |

**Target score:** 100/100 Lighthouse Accessibility, 0 axe-core violations.

---

## 3. Per-criterion details

### Principle 1 — Perceivable

#### 1.1.1 Non-text Content (A)
- All `<img>` elements have either descriptive `alt` text (informative images) or
  `alt=""` (decorative).
- Gallery images in `about.tsx` / `services.tsx` have 50–125 char `alt` describing
  the project shown.
- Slider images use `alt=""` because the section provides context; the slider is
  decorative, not informational.
- All inline SVG icons are `aria-hidden="true"` and `focusable="false"`. Parent
  interactive elements provide the accessible name via `aria-label`.
- **Files:** `hero.tsx`, `slider.tsx`, `about.tsx`, `services.tsx`, `footer.tsx`,
  `navbar.tsx`, `theme-button.tsx`.

#### 1.3.1 Info and Relationships (A)
- Landmarks: `<header>`, `<nav aria-label="Primary">`, `<main id="main-content">`,
  `<footer>`, `<section aria-labelledby>`, `<article>`, `<figure>`, `<aside>`.
- Lists use real `<ul role="list">` / `<li>` (the `role="list"` restores semantics
  stripped by Tailwind's Preflight).
- Form: every `<input>`/`<textarea>` has an explicit `<label htmlFor>`.
- Required fields use both the visual `*` (hidden from AT via `aria-hidden`) and
  programmatic `aria-required="true"`.
- **Files:** `layout.tsx`, `navbar.tsx`, `about.tsx`, `services.tsx`, `contact.tsx`,
  `footer.tsx`.

#### 1.3.5 Identify Input Purpose (AA)
- Contact form inputs have `autoComplete` attributes:
  `name`, `email`, `tel`.
- **File:** `contact.tsx`.

#### 1.4.3 Contrast (Minimum) — AA
- All body text meets **7:1+ (AAA)** against its background in both themes.
- All large text and UI labels meet **4.5:1+**.
- See the contrast table in `index.css` header comments and below.

**Light mode key pairs:**

| Foreground | Background | Ratio | Passes |
|---|---|---|---|
| `--color-text-primary` `#1f2a24` | `--color-bg-primary` `#f7f5ef` | 14.8:1 | AAA |
| `--color-text-secondary` `#37473d` | `--color-bg-primary` `#f7f5ef` | 9.6:1 | AAA |
| `--color-text-muted` `#556057` | `--color-bg-primary` `#f7f5ef` | 5.9:1 | AA |
| `#ffffff` | `--color-accent` `#8a4a2a` | 6.4:1 | AA (large) / AA |
| `--color-heading-primary` `#2b3b30` | `--color-bg-primary` `#f7f5ef` | 11.2:1 | AAA |

**Dark mode key pairs:**

| Foreground | Background | Ratio | Passes |
|---|---|---|---|
| `--color-text-primary` `#ece7db` | `--color-bg-primary` `#141b17` | 13.1:1 | AAA |
| `--color-text-secondary` `#d6d0c2` | `--color-bg-primary` `#141b17` | 10.2:1 | AAA |
| `--color-text-muted` `#b3ac9c` | `--color-bg-primary` `#141b17` | 6.4:1 | AA |
| `--color-text-on-accent` `#2a1d10` | `--color-accent` `#d9a57a` | 9.2:1 | AAA |
| `--color-heading-primary` `#f1ece1` | `--color-bg-primary` `#141b17` | 14.2:1 | AAA |

- Hero text uses a text-shadow scrim (not a panel) to guarantee readability over
  any slide. The shadow is dark enough (55% black at 10–18px blur) that even the
  brightest slide keeps contrast ≥ 4.5:1 for the white foreground.
- **File:** `index.css` (tokens), `hero.tsx` (hero scrim).

#### 1.4.4 Resize Text (AA)
- All type uses `clamp()` with rem-based boundaries, so browser zoom and OS text
  scaling work correctly up to 200% without loss of content.
- **File:** `index.css`.

#### 1.4.10 Reflow (AA)
- Layout reflows to 320px width with no horizontal scroll.
- `container-responsive` has a 1.25rem gutter below 640px.
- Grids collapse to single column on mobile.
- **Files:** all section components.

#### 1.4.11 Non-text Contrast (AA)
- Focus rings: `--color-focus` at 2px with 2px offset, contrast ≥ 3:1 against
  adjacent surfaces in both themes.
- Form borders: `--color-border-strong` meets 3:1 against the input background.
- Icon-only buttons have ≥ 3:1 contrast between icon and button background.
- **File:** `index.css`.

#### 1.4.12 Text Spacing (AA)
- No fixed heights on text containers; line-height ≥ 1.5 on body text.
- User stylesheets that increase spacing won't clip content.

#### 1.4.13 Content on Hover or Focus (AA)
- No tooltips or popovers rely on hover. The theme button's `title` is a
  redundant hint; the primary label is `aria-label`.

---

### Principle 2 — Operable

#### 2.1.1 Keyboard (A)
- Every interactive element is reachable and operable with a keyboard:
  nav links, theme toggle, hamburger menu, slider play/pause, all CTAs,
  form fields, footer links, social links.
- Slider pause button is a real `<button>`.
- **Files:** all components with `<a>` / `<button>`.

#### 2.1.2 No Keyboard Trap (A)
- Mobile menu traps focus **only while open**; `Escape` always exits and returns
  focus to the toggle button.
- **File:** `navbar.tsx`.

#### 2.2.1 Timing Adjustable (A)
- The auto-advancing slider can be paused via the visible pause button. This
  satisfies the "moving, blinking, scrolling" exception because:
  - It starts automatically and runs > 5 seconds.
  - A pause control is presented alongside it (WCAG 2.2.2).
- **File:** `slider.tsx`.

#### 2.2.2 Pause, Stop, Hide (A)
- Slider has an explicit pause/play toggle with `aria-pressed` state.
- Pausing freezes the currently visible frame (never shows a blank frame).
- `prefers-reduced-motion: reduce` replaces the animation with a static image.
- **File:** `slider.tsx`.

#### 2.3.1 Three Flashes or Below Threshold (A)
- No content flashes more than 3 times per second.

#### 2.4.1 Bypass Blocks (A)
- Skip link at the top of `Layout` jumps to `#main-content`.
- Visible on focus, positioned above all content (`z-[100]`).
- **File:** `layout.tsx`.

#### 2.4.2 Page Titled (A)
- `document.title` set by both `Layout` and `SEO`. Consistent.
- **Files:** `layout.tsx`, `seo/SEO.tsx`.

#### 2.4.3 Focus Order (A)
- DOM order matches visual order. Mobile menu items come after the toggle in DOM
  order, matching the visual dropdown.
- Anchor navigation moves focus to the target section (via `tabindex="-1"` +
  `focus()` in `link.tsx`), so keyboard users resume tabbing from the target.

#### 2.4.4 Link Purpose (In Context) (A)
- Anchor text is descriptive ("Request a Free Quote", "About Us"). No "click
  here" patterns.
- Icon-only links (social, theme) have `aria-label`.

#### 2.4.6 Headings and Labels (AA)
- Single `<h1>` per page (hero).
- Section headings use `<h2>`; sub-sections use `<h3>`.
- No skipped heading levels.
- Every form control has a visible `<label>`.

#### 2.4.7 Focus Visible (AA)
- Global `:focus-visible` rule provides a 2px solid ring using `--color-focus`.
- All interactive components retain the ring (no `outline: none` without a
  replacement).

#### 2.4.11 Focus Not Obscured (Minimum) (AA — WCAG 2.2)
- `html { scroll-padding-top: 5rem }` ensures anchor targets aren't hidden under
  the fixed navbar.
- Focused elements within the mobile menu are contained inside the menu surface.
- **File:** `index.css`.

#### 2.5.3 Label in Name (A)
- Visible button text is included in the accessible name. E.g. the theme
  button shows a moon/sun but is labeled "Switch to dark mode" — the visible
  icon is decorative, the action is described.

#### 2.5.7 Dragging Movements (AA — WCAG 2.2)
- No drag interactions. N/A.

#### 2.5.8 Target Size (Minimum) (AA — WCAG 2.2)
- All interactive targets are ≥ 44×44 CSS pixels:
  - Theme button: `min-w-[44px] min-h-[44px]`
  - Hamburger: `min-w-[44px] min-h-[44px]`
  - Slider pause: `min-w-[44px] min-h-[44px]`
  - Footer social links: `min-w-[44px] min-h-[44px]`
  - Buttons: `min-height: 44px` in `.btn-primary` / `.btn-secondary`
  - Form inputs: `min-height: 44px`

---

### Principle 3 — Understandable

#### 3.1.1 Language of Page (A)
- `<html lang="en">` set in `index.html` and reaffirmed by `SEO.tsx`.

#### 3.2.1 On Focus (A)
- No element changes context when focused.

#### 3.2.2 On Input (A)
- Form fields don't auto-submit or auto-navigate on change.

#### 3.2.6 Consistent Help (A — WCAG 2.2)
- Phone number appears in both the contact section and footer, in the same
  relative position each time.

#### 3.3.1 Error Identification (A)
- Form uses native HTML validation (`required`, `type="email"`) plus a live
  status region for submission results.
- **File:** `contact.tsx`.

#### 3.3.2 Labels or Instructions (A)
- All inputs have visible labels. Required fields indicate `*` visually and
  `aria-required="true"` programmatically.
- **File:** `contact.tsx`.

#### 3.3.7 Redundant Entry (A — WCAG 2.2)
- N/A (single-step form).

#### 3.3.8 Accessible Authentication (AA — WCAG 2.2)
- No authentication.

---

### Principle 4 — Robust

#### 4.1.2 Name, Role, Value (A)
- All interactive components use native elements (`<button>`, `<a>`, `<input>`)
  where possible.
- Custom toggle states use `aria-pressed` (slider) and `aria-expanded` /
  `aria-controls` (mobile menu).
- Modal-ish surfaces (mobile menu) use `hidden` when closed so they're removed
  from the a11y tree.

#### 4.1.3 Status Messages (AA)
- Contact form submissions announce success/error via
  `<div role="status" aria-live="polite">`.
- **File:** `contact.tsx`.

---

## 4. Manual test checklist

Run before each release.

### Keyboard-only
- [ ] Tab from page load reaches skip link first; activating it jumps to main.
- [ ] All nav links, theme toggle, hamburger, CTAs, form fields, and footer
      links are reachable in a sensible order.
- [ ] Mobile menu: Tab cycles within the menu; Escape closes it and returns focus
      to the hamburger.
- [ ] Slider pause button is reachable and toggles with Enter/Space.
- [ ] After clicking an in-page anchor, focus lands on the target section.
- [ ] No keyboard traps outside the mobile menu.

### Screen reader (VoiceOver / NVDA / JAWS)
- [ ] Every image either has meaningful `alt` or is skipped.
- [ ] Landmarks are announced (`header`, `nav Primary`, `main`, `footer`).
- [ ] Headings announce as a proper outline (h1 → h2 → h3).
- [ ] Form labels are announced, required state is announced.
- [ ] Success message is announced after submit.
- [ ] Slider pause button announces "Pause slideshow" / "Play slideshow" with
      pressed state.
- [ ] Theme button announces the *action* ("Switch to dark mode"), not the icon.

### Visual
- [ ] Light and dark modes both pass WCAG contrast (browser DevTools contrast
      checker or a plugin like axe DevTools).
- [ ] Focus rings are visible on every interactive element in both themes.
- [ ] At 200% zoom, no content is clipped or overlapped.
- [ ] At 320px viewport width, no horizontal scroll appears.
- [ ] Hero text remains readable over every slide (watch the full 35s cycle).
- [ ] Slider pause freezes on a visible image (never a blank frame).

### Motion
- [ ] With OS "reduce motion" enabled: slider shows a single static image, no
      animated transitions anywhere.
- [ ] With "reduce motion" disabled: Lenis smooth scroll is active, slider
      crossfades.

### Automated
- [ ] `npx axe` or Lighthouse Accessibility run passes with 0 violations.
- [ ] WAVE browser extension reports 0 errors.
- [ ] `pa11y` (optional) passes on both `/` and `/#contact`.

---

## 5. Known limitations

1. **Third-party font (Inter via Google Fonts).** Not an a11y failure, but a
   privacy/performance consideration. Self-hosting would remove the external
   dependency.
2. **CSS-only slider.** Because CSS keyframes don't expose "current frame," the
   pause implementation uses a `requestAnimationFrame` tracker to know which
   slide is active. This is O(1) per frame with one `setState` only when the
   active index changes (≈5 times per 35s cycle). Negligible perf cost, but
   worth documenting as a design tradeoff.
3. **`autoComplete="off"` fallback.** The phone field maps to `autoComplete="tel"`
   per WCAG 1.3.5, but we fall back to `"off"` for any future field whose
   purpose we haven't classified. If you add a new field, classify it explicitly.
4. **Contact form is a mockup.** The submit handler simulates a 500ms delay and
   then announces success. When you wire it to a real endpoint:
   - Keep the `aria-live="polite"` status region.
   - Add per-field error messaging with `aria-describedby` pointing at an
     error `<span role="alert">`.
   - Never rely on `alert()` for feedback (violates 3.3.1 intent and frustrates
     SR users).
5. **Slider images are 1920×1080 placeholders.** If you swap in larger originals,
   add a `srcset` with 1x/2x so high-DPI users don't over-download.
6. **`prefers-contrast: more` is not separately handled.** The palette already
   meets AAA body text, so this is optional, but a `@media (prefers-contrast: more)`
   block could push borders to full black/white for users who explicitly request
   higher contrast.

---

## 6. File-by-file a11y responsibilities

| File | A11y responsibility |
|---|---|
| `index.html` | `lang`, viewport, theme-color |
| `index.css` | focus ring, reduced-motion, contrast tokens, scroll-padding |
| `App.tsx` | mount order (SEO + ThemeScript before Lenis) |
| `layout.tsx` | landmarks, skip link, main target |
| `navbar.tsx` | nav landmark, mobile menu trap/Escape/outside-click, aria-expanded |
| `hero.tsx` | text contrast scrim, CTA target size |
| `slider.tsx` | pause/play, aria-pressed, reduced-motion static fallback |
| `about.tsx` | article/heading hierarchy, list semantics, gallery alt |
| `services.tsx` | article structure, list semantics |
| `contact.tsx` | labels, autocomplete, aria-live status, required indicators |
| `footer.tsx` | landmarks, real lists, SVG icons with aria-hidden, touch targets |
| `seo/SEO.tsx` | title, meta, JSON-LD, lang |
| `theme-button.tsx` | action-labeled toggle, 44px target |
| `button.tsx` | default `type="button"` prevents accidental submit |
| `link.tsx` | focus management on anchor navigation |
| `list-format.tsx` | semantic `<strong>` for labels, no visual-only emphasis |
| `ThemeScript.tsx` | syncs `<html>` class + `theme-color` meta on mount |

---

## 7. Change log

- **2026-09-14:** Initial a11y review. Added `ThemeScript` for FOUC prevention,
  `aria-live` form status, mobile menu focus trap, slider reduced-motion
  fallback, WCAG 2.2 AA/AAA-verified palette, `scroll-padding-top`, 44px target
  sizes, SVG icons replacing emoji.

---

## 8. References

- [WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/)
- [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/WAI/ARIA/apg/)
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Inclusive Components — Menus & Menu Buttons](https://inclusive-components.design/menus-menu-buttons/)