# Portfolio Implementation

## Current Iteration

- Current iteration: `6` - minimal portfolio/blog-post reset.
- Latest dislikes:
  - The broken-brief collage looked bad.
  - The colors were wrong.
  - The language had too much content and did not feel right.
  - The page leaned too hard on custom CSS instead of Tailwind.
  - GSAP lived inside the page component instead of an abstraction.
  - The next swipe still felt like a SaaS/product page.
  - Graph-like visuals are not wanted.
  - The page should feel more like a personal portfolio/blog post.
  - Placeholder blocks should be replaced with a serious nature background.
  - The background image was too hard to see after the first full-viewport pass.
  - Work needs dates and concrete descriptions.
- Required changes:
  1. Use simpler, calmer visual language.
  2. Prefer beautiful white and dark variations with one strong accent.
  3. Use clean non-cursive fonts.
  4. Reduce copy density.
  5. Prefer Tailwind classes in components over page-specific CSS.
  6. Import section components at page level.
  7. Keep animation logic in `usePageMotion` or a similar abstraction.
  8. Use a serious semi-transparent nature background instead of placeholders or
     graph motifs.
  9. Keep the background image visible in both themes without hurting text
     contrast.
  10. Include a tools section.

## Product Direction

The site should communicate senior engineering judgment without trying too hard.
It should feel clear, modern, and confident, not loud.

Primary message:

> Good software starts with understanding the problem clearly enough that the
> system becomes easier to change.

Tone:

- Plain.
- Short.
- Specific.
- Slightly skeptical.
- No corporate language.
- No AI-flavored polish.

Avoid:

- "Passionate about innovation."
- "Crafting scalable digital experiences."
- Long paragraphs.
- Big tool lists.
- Decorative complexity.
- Fake product-dashboard aesthetics.

## Design Framework

### Style Swipe Process

Each visual iteration is a swipe. A swipe must change only a small set of
decisions so feedback is easy to apply.

For each swipe, track:

1. Palette.
2. Font pairing.
3. Section structure.
4. Hero language.
5. Motion behavior.
6. Visual motif.
7. What the user liked.
8. What the user disliked.
9. What to keep for the next swipe.
10. What to remove.

Do not combine multiple visual concepts without naming the reason.

### Current Swipe: `minimal-journal`

Goal:

- Minimal personal portfolio with blog-post rhythm.
- Introduce Mateo first.
- Narrow readable content column.
- Beautiful light/dark modes.
- One accent color.
- No graph visuals.
- No SaaS layout.
- A real nature background image, theme-friendly and quiet.
- The background should be visible enough to carry the page, not hidden behind a
  heavy overlay.

Palette:

- Light background: `#fbfcfb`
- Light surface: `#ffffff`
- Light text: `#111413`
- Light muted: `#66706c`
- Dark background: `#070908`
- Dark surface: `#101412`
- Dark text: `#f3f7f4`
- Dark muted: `#a7b0ac`
- Accent: `#14b8a6`
- Border: neutral gray with low opacity.

Fonts:

- Display: `Space Grotesk`
- Body: `Instrument Sans`
- Mono: system monospace only for small labels if needed.

Visual motif:

- Editorial whitespace.
- Quiet dividers.
- One serious mountain/forest image treated as a background.
- Small typographic metadata.
- No diagrams, graphs, fake dashboards, or product cards.

Sections:

1. Hero.
2. About note.
3. Selected work notes with dates.
4. Tools used.
5. Contact.

Language rules:

- One strong hero idea.
- Short supporting copy.
- Work stories as compact evidence, not case studies.
- No long timeline unless explicitly requested.

Motion:

- GSAP may animate entry and subtle section reveals.
- Motion must be quiet and optional.
- Use `prefers-reduced-motion`.
- Keep all GSAP in `usePageMotion`.

Technical rules:

- Astro page imports one React island: `HomePage`.
- `HomePage` imports section components.
- Section components use Tailwind classes.
- Global CSS only owns Tailwind import, theme tokens, fonts, and base body
  styling.
- Content lives in a nearby content module.
- Avoid one-off CSS selectors for layout.
- Keep generated visual assets out until the style is approved.

## Component Plan

Target structure:

```text
src/components/home-page.tsx
src/components/portfolio/content.ts
src/components/portfolio/hero-section.tsx
src/components/portfolio/about-section.tsx
src/components/portfolio/work-section.tsx
src/components/portfolio/tools-section.tsx
src/components/portfolio/contact-section.tsx
src/components/portfolio/use-page-motion.ts
```

Responsibilities:

- `home-page.tsx`: page composition and root ref.
- `content.ts`: copy and data only.
- `use-page-motion.ts`: GSAP setup, cleanup, reduced-motion checks.
- section files: presentational React components with Tailwind classes.
- hero uses `public/images/forest-system-background.png` as the current nature
  visual.

## Iteration Acceptance

Iteration 6 is acceptable when:

- The page no longer feels like SaaS.
- The page reads like a minimal portfolio/blog post.
- The width is constrained and readable.
- The image placeholder is gone.
- The hero uses a serious nature background.
- Work entries include dates and concrete descriptions.
- Tools section exists.
- White/dark theme is polished.
- Accent color is restrained.
- Fonts are clean and non-cursive.
- Copy is shorter.
- Tailwind classes carry the layout/styling.
- GSAP is abstracted out of the page.
- Desktop and mobile have no horizontal overflow.
- `lint`, `typecheck`, `test`, and `build` pass.

## Feedback Log

### Feedback Entry

- Iteration: 4 - Broken brief implementation
- Date: 2026-05-26
- What I liked: Direction of implementing instead of only planning.
- What I disliked: Style looked bad, colors were wrong, language was wrong,
  content was too long, implementation leaned too heavily on CSS, and animation
  was not abstracted.
- Required changes: Move to a simpler green/blue/black/white/gray visual system,
  cleaner fonts, less copy, Tailwind-first section components, and a
  `usePageMotion` abstraction.
- Priority: High
- Decision: Rework
- Notes: First rework swipe is `quiet-systems`.

### Feedback Entry

- Iteration: 5 - Quiet systems swipe
- Date: 2026-05-26
- What I liked: The code moved toward components and abstractions.
- What I disliked: Still looked like a SaaS/product page, graph visuals were
  unwanted, and it did not feel like a personal portfolio.
- Required changes: Make it more like a minimal blog-post portfolio, constrain
  page width, remove graph visuals, leave image placeholders with prompts,
  introduce Mateo, and add a tools section.
- Priority: High
- Decision: Rework
- Notes: Next swipe is `minimal-journal`.

### Feedback Entry

- Iteration: 6 - Minimal journal swipe
- Date: 2026-05-26
- What I liked: Simpler direction is closer.
- What I disliked: Still lacked design taste, placeholder should not stay,
  language needed to sound more personal, and work descriptions were not
  concrete enough.
- Required changes: Replace placeholder with a serious nature background,
  improve the voice, add work dates, and make descriptions more specific.
- Priority: High
- Decision: Rework
- Notes: Continue minimal journal, but with real hero atmosphere.

### Feedback Entry

- Iteration: 6 - Full-viewport background tuning
- Date: 2026-05-26
- What I liked: The background moved to a whole viewport treatment.
- What I disliked: The image became too hard to see.
- Required changes: Increase image visibility in light and dark mode while
  keeping enough overlay behind the text column for readability.
- Priority: High
- Decision: Tune
- Notes: Preserve the minimal journal structure; only adjust background
  visibility and contrast.
