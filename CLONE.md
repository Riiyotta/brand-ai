# clone/ — brand.ai | AI for brand management

A runnable **Vite + React + react-router + Tailwind v3** project written from the real rendered DOM of https://brand.ai/: one component per section with that section's own markup, the site's own stylesheets, its real images, fonts and video under `public/`, routes declared in `src/routes.js`.

```
npm install
npm run dev      # http://localhost:5173
npm run build
```

## What is in it

- `src/sections/`: **182** component(s) (214 section instance(s) over 38 route(s); identical markup shared across routes is one component).
- `src/pages/` + `src/routes.js` + `src/App.jsx`: one page per captured route, sections in page order, react-router links between captured pages.
- `src/styles/`: the site's own CSS, copied as it was with every `url()` rewritten to a file under `public/`; `tokens.css` + `tailwind.config.cjs` carry the measured design tokens (the Tailwind utilities are not bundled, because Tailwind v3 output is unlayered and would override a site whose own CSS uses native `@layer`; the site's CSS alone styles the clone).
- `public/`: **552** real file(s), 600.0 MB (images, fonts, video, SVG). Nothing points outside the project.
- `clone-manifest.json`: route → page → component map, every still, every dropped file.

## Animation

- **Canvas / Rive areas: 38 still(s) captured** (2 canvas(es) drew nothing and are an empty, correctly sized box). The 0 `.riv` file(s) are **not** included: a remix cannot recolour or redraw a Rive file and would ship the original mascot on every generated site. Replace each still with an image slot, CSS or GSAP.
- **Scroll-driven motion is not reproduced.** The clone keeps one reveal-on-scroll observer only. The original ships GSAP ScrollTrigger. Pinned / scrubbed sections: `module-hero-inline`. Rebuild them with CSS or GSAP in the remix.
- **Scroll-reveal: 3234 element(s)** that started hidden or offset and animated in are marked `data-reveal`; one IntersectionObserver (`src/lib/usePageChrome.js`) fades them up (off under reduced motion).
- **856 element(s) forced visible.** These started hidden/offset on the original and were still hidden/offset when this clone was captured — the scroll-triggered animation that reveals them on the original did not fire the same way during capture. Rather than ship them permanently invisible, their hiding style was stripped so they render plainly (no animation, but visible). Rebuild the real scroll-in motion in the remix.
- **76 dropdown / mega-menu panel(s) captured.** A nav item whose panel is only built on hover/click (no entries of its own in the static DOM) was hovered for real; the panel that appeared is saved as a permanent sibling of its trigger and shown with real CSS `:hover`/`:focus-within` (see `src/styles/clone.css`) — a working dropdown, not just a label. Its own open/close script behaviour (animation, click-outside-to-close) is not reproduced.
- **Not reproduced**: GSAP timelines / ScrollTrigger pins and scrubs (pin wrappers are removed, content flows normally), Lenis smooth scroll, accordions, tabs, carousels and other script behaviour (only the state the page was in after load is captured), forms (submit is prevented), third-party frames (replaced by an empty box of the same size), shadow-DOM content.
- **No analytics or trackers**: none are in `src/` or `public/`.
- **No external links**: links to other sites (and to pages that were not captured) keep their element and styling but have no `href`; links between cloned pages go through the router. `--keep-external-links` keeps them.

## Checks run by the builder

| Check | Result |
|---|---|
| Every `src` / `url()` the code points at exists in `public/` | PASS (311 image reference(s), 311 resolved) |
| No tracker host in code or `public/` | PASS |
| No external hyperlink in `src/` | PASS (275 link(s) to other sites or uncaptured pages lost their target) |
| No placeholder boxes from the level-2 scaffold | PASS |
| Vite build + every route loads offline | PASS: vite build ok; 38 route(s) loaded: 0 console/network error(s), 0 outside host(s), 0 empty page(s) |
| Parity vs the original page, per section (gate 80%) | PASS: average 93.1% over 6 route(s) |

### Parity detail

Each section of the built clone is compared with the same section of the **original page**: the crawl's own full-page screenshot at 1440 px (`extras/images/`, taken from the live site with its scripts running) cut at that section's rectangle, or a fresh screenshot of the offline mirror when that file is missing. Both sides are compared on a half-scale grid; a pixel matches when no channel differs by more than 40/255, and a section whose height differs by more than 10 % is scaled down by the height ratio (except GSAP-pinned sections, whose extra scroll length is a script's doing). The route score weights sections by height. Sections below the gate get a side-by-side picture (original | clone) in `qa/parity/`. Whole-page height is not scored: GSAP pin spacers add blank scroll length the clone does not reproduce. Live animation, video and carousels in motion differ by design.

**`/`**: 96.8% over 12 of 12 section(s) (reference: mirror); page height 11662 → 11662 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `Header` | 100 → 100 px | 82.1% | 82.1% |
| 1 | `ModuleCoverStacked` | 1220 → 1220 px | 86.5% | 86.5% |
| 2 | `ModuleLogos` | 140 → 140 px | 100.0% | 100.0% |
| 3 | `ModuleHeroInline` | 3150 → 3150 px | 98.9% | 98.9% (GSAP-pinned: scroll length not reproduced) |
| 4 | `ModuleCenteredHeadline` | 290 → 290 px | 100.0% | 100.0% |
| 5 | `ModuleFeaturesTimed` | 935 → 935 px | 99.9% | 99.9% |
| 6 | `ModuleFeaturesTimed2` | 935 → 935 px | 99.9% | 99.9% |
| 7 | `ModuleMediaFilterGrid` | 697 → 697 px | 100.0% | 100.0% |
| 8 | `ModuleQuotes` | 785 → 785 px | 100.0% | 100.0% |
| 9 | `ModuleNews` | 88 → 88 px | 100.0% | 100.0% |
| 10 | `ModuleDownload` | 383 → 383 px | 100.0% | 100.0% |
| 11 | `FooterMain` | 900 → 900 px | 90.0% | 90.0% |

**`/brand-os`**: 94.8% over 15 of 15 section(s) (reference: mirror); page height 13523 → 13523 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `Header7` | 100 → 100 px | 82.1% | 82.1% |
| 1 | `ModuleCoverStacked4` | 1247 → 1247 px | 83.2% | 83.2% |
| 2 | `ModuleHeadlineFloating` | 216 → 216 px | 98.8% | 98.8% |
| 3 | `TextBlock` | 261 → 261 px | 100.0% | 100.0% |
| 4 | `ModuleMediaFlexibleMediaWrapper` | 2214 → 2214 px | 93.1% | 93.1% |
| 5 | `TextBlock2` | 261 → 261 px | 100.0% | 100.0% |
| 6 | `ModuleMediaFlexibleMediaWrapper2` | 1342 → 1342 px | 99.6% | 99.6% |
| 7 | `Newsroom` | 1645 → 1645 px | 96.5% | 96.5% |
| 8 | `ConnectedApplications` | 897 → 897 px | 99.8% | 99.8% |
| 9 | `ModuleFeaturesInline2` | 512 → 512 px | 100.0% | 100.0% |
| 10 | `ModuleCenteredHeadline3` | 144 → 144 px | 100.0% | 100.0% |
| 11 | `ModuleFaq2` | 393 → 393 px | 100.0% | 100.0% |
| 12 | `ModuleDownload` | 383 → 383 px | 100.0% | 100.0% |
| 13 | `ModuleNews3` | 88 → 88 px | 100.0% | 100.0% |
| 14 | `FooterMain7` | 900 → 900 px | 87.9% | 87.9% |

**`/legal/privacy`**: 99.0% over 3 of 3 section(s) (reference: original crawl screenshot); page height 6702 → 6702 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `Header6` | 100 → 100 px | 82.1% | 82.1% |
| 1 | `MainInner3` | 5802 → 5802 px | 99.5% | 99.5% |
| 2 | `FooterMain13` | 900 → 900 px | 97.9% | 97.9% |

**`/careers/brand-support-specialist`**: 98.3% over 3 of 3 section(s) (reference: original crawl screenshot); page height 3125 → 3125 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `Header6` | 100 → 100 px | 82.1% | 82.1% |
| 1 | `MainInner10` | 2225 → 2225 px | 99.2% | 99.2% |
| 2 | `FooterMain20` | 900 → 900 px | 97.9% | 97.9% |

**`/blog/company`**: 88.8% over 3 of 3 section(s) (reference: original crawl screenshot); page height 1986 → 1986 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `Header14` | 100 → 100 px | 82.1% | 82.1% |
| 1 | `MainInner16` | 1086 → 1086 px | 90.1% | 90.1% |
| 2 | `FooterMain25` | 900 → 900 px | 88.0% | 88.0% |

**`/blog/post/brand-engineers-the-role-that-didn-t-exist-until-now`**: 81.1% over 4 of 4 section(s) (reference: original crawl screenshot); page height 7418 → 7418 px. Below the gate: 2:PostRelated4 79%, 3:FooterMain20 67%.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `Header6` | 100 → 100 px | 82.1% | 82.1% |
| 1 | `PageWrapper3` | 5196 → 5197 px | 83.7% | 83.7% |
| 2 | `PostRelated4` | 571 → 571 px | 78.9% | 78.9% ⚠ |
| 3 | `FooterMain20` | 900 → 900 px | 67.1% | 67.1% ⚠ |

### Not mirrored

19 URL(s) pointed at outside hosts that the mirror does not hold and were left out of the clone: `https://cdn.sanity.io/images/3zwn2ers/fullsite/2189b6612b29be822ba07ada37a24e3fa3d9c00c-1340x720.png?w=200&q=80&auto=format&dpr=1.5`, `https://cdn.sanity.io/images/3zwn2ers/fullsite/2189b6612b29be822ba07ada37a24e3fa3d9c00c-1340x720.png?w=400&q=80&auto=format&dpr=1.5`, `https://cdn.sanity.io/images/3zwn2ers/fullsite/2189b6612b29be822ba07ada37a24e3fa3d9c00c-1340x720.png?w=600&q=80&auto=format&dpr=1.5`, `https://cdn.sanity.io/images/3zwn2ers/fullsite/2189b6612b29be822ba07ada37a24e3fa3d9c00c-1340x720.png?w=800&q=80&auto=format&dpr=1.5`, `https://cdn.sanity.io/images/3zwn2ers/fullsite/2189b6612b29be822ba07ada37a24e3fa3d9c00c-1340x720.png?w=1000&q=80&auto=format&dpr=1.5`, `https://cdn.sanity.io/images/3zwn2ers/fullsite/2189b6612b29be822ba07ada37a24e3fa3d9c00c-1340x720.png?w=1200&q=80&auto=format&dpr=1.5`, `https://cdn.sanity.io/images/3zwn2ers/fullsite/2189b6612b29be822ba07ada37a24e3fa3d9c00c-1340x720.png?w=1340&q=80&auto=format&dpr=1.5`, `https://cdn.sanity.io/images/3zwn2ers/fullsite/0a5ac5adc3c51293b48aa0c3ac0c1f4131970b94-739x684.png?w=200&q=80&auto=format&dpr=1.5`, …

### Missing in the mirror

3 local URL(s) the rendered page used were not saved by the crawl: `/_ext/image.mux.com/6YOTmygcvrNo9mGSWk2QMFF8V1Z4TjrSm8RmPyXKcj00/thumbnail.jpg`, `/_ext/image.mux.com/4hMsBGereMqbL8yR00PlsuBKs0100e00Mff5y62J00loQFXE/thumbnail.jpg`, `/_ext/image.mux.com/01ibJX1c4zfLsI3pmJn7V0100WwgblIa02ygYsmYFUSLg5o/thumbnail.jpg`

