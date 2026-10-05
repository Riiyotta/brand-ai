# clone/ — brand.ai | AI for brand management

A runnable **Vite + React + react-router + Tailwind v3** project written from the real rendered DOM of https://brand.ai/: one component per section with that section's own markup, the site's own stylesheets, its real images, fonts and video under `public/`, routes declared in `src/routes.js`.

```
npm install
npm run dev      # http://localhost:5173
npm run build
```

## What is in it

- `src/sections/`: **176** component(s) (245 section instance(s) over 38 route(s); identical markup shared across routes is one component).
- `src/pages/` + `src/routes.js` + `src/App.jsx`: one page per captured route, sections in page order, react-router links between captured pages.
- `src/styles/`: the site's own CSS, copied as it was with every `url()` rewritten to a file under `public/`; `tokens.css` + `tailwind.config.cjs` carry the measured design tokens (Tailwind utilities load first, preflight is off, so the site's CSS wins).
- `public/`: **548** real file(s), 600.0 MB (images, fonts, video, SVG). Nothing points outside the project.
- `clone-manifest.json`: route → page → component map, every still, every dropped file.

## Animation

- **Canvas / Rive areas: 39 still(s) captured** (1 canvas(es) drew nothing and are an empty, correctly sized box). The 0 `.riv` file(s) are **not** included: a remix cannot recolour or redraw a Rive file and would ship the original mascot on every generated site. Replace each still with an image slot, CSS or GSAP.
- **Scroll-driven motion is not reproduced.** The clone keeps one reveal-on-scroll observer only. The original ships GSAP ScrollTrigger. Pinned / scrubbed sections: `module-hero-inline`. Rebuild them with CSS or GSAP in the remix.
- **Scroll-reveal: 2592 element(s)** that started hidden or offset and animated in are marked `data-reveal`; one IntersectionObserver (`src/lib/usePageChrome.js`) fades them up (off under reduced motion).
- **Not reproduced**: GSAP timelines / ScrollTrigger pins and scrubs (pin wrappers are removed, content flows normally), Lenis smooth scroll, menus, accordions, tabs, carousels and other script behaviour (only the state the page was in after load is captured), forms (submit is prevented), third-party frames (replaced by an empty box of the same size), shadow-DOM content.
- **No analytics or trackers**: none are in `src/` or `public/`.
- **No external links**: links to other sites (and to pages that were not captured) keep their element and styling but have no `href`; links between cloned pages go through the router. `--keep-external-links` keeps them.

## Checks run by the builder

| Check | Result |
|---|---|
| Every `src` / `url()` the code points at exists in `public/` | PASS (254 image reference(s), 254 resolved) |
| No tracker host in code or `public/` | PASS |
| No external hyperlink in `src/` | PASS (260 link(s) to other sites or uncaptured pages lost their target) |
| No placeholder boxes from the level-2 scaffold | PASS |
| Vite build + every route loads offline | PASS: vite build ok; 38 route(s) loaded: 0 console/network error(s), 0 outside host(s), 0 empty page(s) |
| Parity vs the original page, per section (gate 80%) | BELOW GATE: average 92.7% over 6 route(s) |

### Parity detail

Each section of the built clone is compared with the same section of the **original page**: the crawl's own full-page screenshot at 1440 px (`extras/images/`, taken from the live site with its scripts running) cut at that section's rectangle, or a fresh screenshot of the offline mirror when that file is missing. Both sides are compared on a half-scale grid; a pixel matches when no channel differs by more than 40/255, and a section whose height differs by more than 10 % is scaled down by the height ratio (except GSAP-pinned sections, whose extra scroll length is a script's doing). The route score weights sections by height. Sections below the gate get a side-by-side picture (original | clone) in `qa/parity/`. Whole-page height is not scored: GSAP pin spacers add blank scroll length the clone does not reproduce. Live animation, video and carousels in motion differ by design.

**`/`**: 96.2% over 13 of 13 section(s) (reference: mirror); page height 11662 → 11662 px. Below the gate: 12:CookiesWrap 64%.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `Header` | 100 → 100 px | 100.0% | 100.0% |
| 1 | `ModuleCoverStacked` | 1220 → 1220 px | 83.8% | 83.8% |
| 2 | `ModuleLogos` | 140 → 140 px | 100.0% | 100.0% |
| 3 | `ModuleHeroInline` | 3150 → 3150 px | 98.9% | 98.9% (GSAP-pinned: scroll length not reproduced) |
| 4 | `ModuleCenteredHeadline` | 290 → 290 px | 100.0% | 100.0% |
| 5 | `ModuleFeaturesTimed` | 935 → 935 px | 99.9% | 99.9% |
| 6 | `ModuleFeaturesTimed2` | 935 → 935 px | 99.9% | 99.9% |
| 7 | `ModuleMediaFilterGrid` | 697 → 697 px | 100.0% | 100.0% |
| 8 | `ModuleQuotes` | 785 → 785 px | 100.0% | 100.0% |
| 9 | `ModuleNews` | 88 → 88 px | 100.0% | 100.0% |
| 10 | `ModuleDownload` | 383 → 383 px | 100.0% | 100.0% |
| 11 | `FooterMain` | 900 → 900 px | 87.7% | 87.7% |
| 12 | `CookiesWrap` | 51 → 51 px | 63.9% | 63.9% ⚠ |

**`/brand-os`**: 95.8% over 16 of 16 section(s) (reference: mirror); page height 13523 → 13523 px. Below the gate: 15:CookiesWrap2 69%.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `Header7` | 100 → 100 px | 100.0% | 100.0% |
| 1 | `ModuleCoverStacked4` | 1247 → 1247 px | 87.2% | 87.2% |
| 2 | `ModuleHeadlineFloating` | 216 → 216 px | 99.3% | 99.3% |
| 3 | `TextBlock` | 261 → 261 px | 100.0% | 100.0% |
| 4 | `ModuleMediaFlexibleMediaWrapper` | 2214 → 2214 px | 93.1% | 93.1% |
| 5 | `TextBlock2` | 261 → 261 px | 100.0% | 100.0% |
| 6 | `ModuleMediaFlexibleMediaWrapper2` | 1342 → 1342 px | 99.7% | 99.7% |
| 7 | `Newsroom` | 1645 → 1645 px | 98.3% | 98.3% |
| 8 | `ConnectedApplications` | 897 → 897 px | 99.8% | 99.8% |
| 9 | `ModuleFeaturesInline2` | 512 → 512 px | 100.0% | 100.0% |
| 10 | `ModuleCenteredHeadline3` | 144 → 144 px | 100.0% | 100.0% |
| 11 | `ModuleFaq2` | 393 → 393 px | 100.0% | 100.0% |
| 12 | `ModuleDownload` | 383 → 383 px | 100.0% | 100.0% |
| 13 | `ModuleNews3` | 88 → 88 px | 100.0% | 100.0% |
| 14 | `FooterMain7` | 900 → 900 px | 91.2% | 91.2% |
| 15 | `CookiesWrap2` | 51 → 51 px | 69.3% | 69.3% ⚠ |

**`/legal/privacy`**: 100.0% over 4 of 4 section(s) (reference: original crawl screenshot); page height 6702 → 6702 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `Header6` | 100 → 100 px | 100.0% | 100.0% |
| 1 | `MainInner3` | 5802 → 5802 px | 100.0% | 100.0% |
| 2 | `FooterMain13` | 900 → 900 px | 99.9% | 99.9% |
| 3 | `CookiesWrap3` | 51 → 51 px | 98.3% | 98.3% |

**`/careers/brand-support-specialist`**: 100.0% over 3 of 4 section(s) (reference: original crawl screenshot); page height 3125 → 3125 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `Header7` | 100 → 100 px | 100.0% | 100.0% |
| 1 | `MainInner10` | 2225 → 2225 px | 100.0% | 100.0% |
| 2 | `FooterMain17` | 900 → 900 px | 100.0% | 100.0% |

**`/blog/company`**: 91.5% over 4 of 4 section(s) (reference: original crawl screenshot); page height 1986 → 1986 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `Header10` | 100 → 100 px | 100.0% | 100.0% |
| 1 | `MainInner16` | 1086 → 1086 px | 91.7% | 91.7% |
| 2 | `FooterMain22` | 900 → 900 px | 89.9% | 89.9% |
| 3 | `CookiesWrap` | 51 → 51 px | 98.3% | 98.3% |

**`/blog/post/welcome-to-brand-ai`**: 72.6% over 5 of 5 section(s) (reference: original crawl screenshot); page height 7835 → 7835 px. Below the gate: 1:PageWrapper3 71%, 3:FooterMain26 68%, 4:CookiesWrap 27%.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `Header6` | 100 → 100 px | 100.0% | 100.0% |
| 1 | `PageWrapper3` | 5614 → 5614 px | 70.6% | 70.6% ⚠ |
| 2 | `PostRelated4` | 571 → 571 px | 100.0% | 100.0% |
| 3 | `FooterMain26` | 900 → 900 px | 67.5% | 67.5% ⚠ |
| 4 | `CookiesWrap` | 51 → 51 px | 27.3% | 27.3% ⚠ |

### Missing in the mirror

3 local URL(s) the rendered page used were not saved by the crawl: `/_ext/image.mux.com/6YOTmygcvrNo9mGSWk2QMFF8V1Z4TjrSm8RmPyXKcj00/thumbnail.jpg`, `/_ext/image.mux.com/4hMsBGereMqbL8yR00PlsuBKs0100e00Mff5y62J00loQFXE/thumbnail.jpg`, `/_ext/image.mux.com/01ibJX1c4zfLsI3pmJn7V0100WwgblIa02ygYsmYFUSLg5o/thumbnail.jpg`

