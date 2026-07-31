# Portfolio Implementation

## Current Iteration

- Current iteration: `12` - pencil nature narrative.
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
  - The next pass needs better blue variations, more human language, different
    composition, different fonts, stronger motion, and a resume-grounded
    toolset.
  - The page should use full-viewport scrolling with a strong centered hero,
    incredible animations, and different backgrounds/effects.
  - The latest pass still looked like a SaaS site.
  - The background did not feel new enough.
  - The effects were not incredible.
  - The desired direction is minimalist, writerly, beautiful, and full-viewport.
  - The user chose Option A: cinematic case-study scroll.
  - The page needs proper generated visuals, handcrafted style, and strong
    storytelling animation.
  - The latest iteration still does not feel good enough.
  - The user wants cool, professional, chill language instead of stiff copy.
  - Work experience should not be arranged as square grid cards.
  - Hard blue should be removed.
  - The next pass should be closer to the committed minimal journal, but more
    beautiful.
  - Colors should be soft black and white with cool accent combinations.
  - Fonts, animations, and generated assets need a stronger craft pass.
  - The serif display font feels wrong.
  - The large oversized titles are too much.
  - Work experience and tools need a better vertical distribution.
  - The copy should feel like Mateo speaking, not AI selling.
  - Asset management should be cleaner and use multiple generated images.
  - The preferred visual direction is nature backgrounds drawn in pencil.
- Required changes:
  1. Use simpler, calmer visual language.
  2. Prefer beautiful white and dark variations with one strong accent.
  3. Use clean non-cursive fonts.
  4. Reduce copy density.
  5. Prefer Tailwind classes in components over page-specific CSS.
  6. Import section components at page level.
  7. Keep animation logic in `usePortfolioMotion` or a similar abstraction.
  8. Use a serious semi-transparent nature background instead of placeholders or
     graph motifs.
  9. Keep the background image visible in both themes without hurting text
     contrast.
  10. Include a tools section.
  11. Remove the hard-blue cinematic palette.
  12. Use resume evidence for tools and experience language.
  13. Improve composition and motion without returning to SaaS/dashboard
      patterns.
  14. Use full-viewport presence without forcing square-card or SaaS sections.
  15. Make the hero strong, quiet, and first-screen dominant.
  16. Try layered background/effect treatments without using graph motifs.
  17. Remove card-like, badge-like, and dashboard-like composition.
  18. Use writing, whitespace, ink, and typography as the main visual material.
  19. Keep full-viewport scroll motion, but make it feel literary/minimal.
  20. Use generated editorial imagery as a real project asset.
  21. Keep work experience as a flowing editorial record, not grid cards.
  22. Use softer black/white colors with sage/cyan accents.
  23. Make motion feel handwritten/editorial: reveals, parallax, drawn line,
      breath, and scroll markers.
  24. Remove serif typography.
  25. Reduce title scale.
  26. Use multiple pencil-drawn nature images from a managed portfolio asset
      folder.
  27. Make work and tools vertical, narrative, and less structured like a sales
      page.

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

### Current Swipe: `pencil-nature-narrative`

Goal:

- Keep the calmer committed direction, but remove the serif/oversized editorial
  feel.
- Use generated pencil-drawn nature imagery as the visual base.
- Keep resume facts in a vertical story, not square work cards or a sales grid.
- Make the voice sound like Mateo describing the work plainly.
- No graph visuals, fake dashboards, SaaS panels, cards, badges, or placeholder
  media.
- Make motion feel handmade: text masks, nature parallax, drawn line progress,
  subtle breathing accent, section images, and staggered evidence.

Palette:

- Light background: `#f7f6f1`
- Dark background: `#090908`
- Light text: `#11110f`
- Dark text: `#f5f2ea`
- Light accent: `#3f7563`
- Dark accent: `#a6cfc0`
- Border: ink/paper with low opacity.

Fonts:

- Display/body: `Instrument Sans`
- Fallback: `Inter`
- Mono: system monospace only for small labels if needed.

Visual motif:

- Strong editorial hero.
- Long-form scroll with generous whitespace.
- Generated pencil nature assets:
  `public/images/portfolio/pencil-mountain-hero.png`,
  `public/images/portfolio/pencil-fern-river.png`, and
  `public/images/portfolio/pencil-leaf-system.png`.
- Full-bleed mountain drawing, section images, thin drawn line, soft breathing
  accent.
- Chapter markers and sparse evidence.
- No diagrams, graphs, fake dashboards, product cards, boxed ledgers, or badges.

Sections:

1. Hero.
2. Shape.
3. Work.
4. Tools.
5. Note / contact.

Language rules:

- One strong hero idea.
- Short supporting copy that sounds like Mateo speaking.
- Work stories as first-person-adjacent narrative evidence, not case-study
  cards.
- Tool language must reflect actual resume categories.
- No long timeline unless explicitly requested.

Motion:

- GSAP may animate hero masks, chapter reveals, generated visual parallax, drawn
  lines, breathing accents, evidence reveals, and progress.
- Motion should feel premium and editorial while preserving reduced-motion.
- Use `prefers-reduced-motion`.
- Keep all GSAP in `usePortfolioMotion`.

Technical rules:

- Astro page imports one React island: `Portfolio`.
- `Portfolio` imports section components.
- Section components use Tailwind classes.
- Global CSS only owns Tailwind import, theme tokens, fonts, and base body
  styling.
- Content lives in a nearby content module.
- Avoid one-off CSS selectors for layout.
- Use generated visuals from `public/images/portfolio/` as project assets for
  this iteration.

## Component Plan

Target structure:

```text
src/components/portfolio/portfolio.tsx
src/components/portfolio-content/portfolio-content.ts
src/components/portfolio-motion/use-portfolio-motion.ts
src/components/hero-section/hero-section.tsx
src/components/about-section/about-section.tsx
src/components/work-section/work-section.tsx
src/components/tools-section/tools-section.tsx
src/components/contact-section/contact-section.tsx
```

Responsibilities:

- `portfolio.tsx`: page composition and root ref.
- `portfolio-content.ts`: copy and data only.
- `use-portfolio-motion.ts`: GSAP setup, cleanup, reduced-motion checks.
- section files: presentational React components with Tailwind classes.
- hero uses `public/images/forest-system-background.png` as the current nature
  visual.

## Iteration Acceptance

Iteration 12 is acceptable when:

- The page no longer feels like SaaS.
- The page feels closer to the committed minimal journal, but more beautiful.
- The hero is strong, quiet, and first-screen dominant.
- The composition avoids square work cards and dashboard-like grids.
- Generated pencil nature imagery is used as real visual assets.
- Cards, boxed ledgers, and badge-like tool chips are removed.
- Work entries include dates and concrete descriptions.
- Tools section is grouped from resume categories.
- White/dark theme is polished with soft black/white and cool accent colors.
- Hard blue is removed.
- Accent color is restrained but memorable.
- Fonts are clean, sans-only, and non-cursive.
- Titles are not oversized.
- Copy is shorter, more human, and less sales-like.
- Work and tools read vertically with more storytelling.
- Tailwind classes carry the layout/styling.
- GSAP is abstracted out of the page.
- Motion has a clear pencil/nature craft pass and respects reduced-motion.
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

### Feedback Entry

- Iteration: 7 - Requested blue craft iteration
- Date: 2026-05-26
- What I liked: Prior changes were ready to commit.
- What I disliked: The next iteration needs stronger design taste, better blue
  color variations, more human language, a different UI composition, different
  fonts, more impressive motion, and a more solid resume-based toolset.
- Required changes: Commit the existing slice first, then create a new
  resume-grounded swipe with blue palette work, new typography, stronger
  composition, refined copy, enhanced motion, and categorized tools.
- Priority: High
- Decision: Rework
- Notes: This swipe is `blue-craft-ledger`.

### Feedback Entry

- Iteration: 8 - Full viewport cinematic request
- Date: 2026-05-26
- What I liked: The direction can continue from the blue resume-grounded work.
- What I disliked: The page still needs a stronger full-viewport scroll concept,
  a more centered hero, more impressive animations, and different background
  effects.
- Required changes: Move to viewport-sized sections, center the hero, create a
  stronger animation system in `usePageMotion`, and try layered background
  treatments while preserving resume-grounded content and avoiding graph/SaaS
  motifs.
- Priority: High
- Decision: Rework
- Notes: This swipe is `viewport-cinematic`.

### Feedback Entry

- Iteration: 9 - Minimalist writing scroll request
- Date: 2026-05-26
- What I liked: Full-viewport scrolling remains the desired structural
  direction.
- What I disliked: The latest pass still looked like SaaS, did not have a truly
  new background, and did not have impressive enough effects.
- Required changes: Strip SaaS-like panels/cards/badges, make the page feel like
  someone writing from thought, use minimalist beauty, full-viewport sections,
  and scroll-based typography/background motion.
- Priority: High
- Decision: Rework
- Notes: This swipe is `written-from-the-head`.

### Feedback Entry

- Iteration: 10 - Cinematic case-study option
- Date: 2026-05-26
- What I liked: Option A was selected as the next direction.
- What I disliked: Previous passes were not stylish or handcrafted enough and
  lacked proper visuals and impressive storytelling animation.
- Required changes: Use generated cinematic imagery, create a full-viewport
  case-study scroll, avoid SaaS/card patterns, and make the motion feel premium.
- Priority: High
- Decision: Rework
- Notes: This swipe is `cinematic-case-study`.

### Feedback Entry

- Iteration: 11 - Soft editorial craft
- Date: 2026-05-26
- What I liked: The committed minimal journal is closer than the later cinematic
  passes.
- What I disliked: The latest pass still is not good enough, the language is not
  cool/professional/chill enough, work experience should not be square grid
  cards, hard blue should be removed, and the page needs better colors, fonts,
  animation craft, and generated asset usage.
- Required changes: Return closer to the current commit, use soft black and
  white with cool accents, write more human copy, make work a flowing editorial
  record, use a generated paper/graphite visual, and improve scroll-based
  motion.
- Priority: High
- Decision: Rework
- Notes: This swipe is `soft-editorial-craft`.

### Feedback Entry

- Iteration: 12 - Pencil nature narrative
- Date: 2026-05-26
- What I liked: Current committed direction is a better base than the hard-blue
  passes.
- What I disliked: Serif type, oversized titles, structured fact blocks, weak
  work/tool distribution, AI-selling language, and asset handling that relies
  too much on one background.
- Required changes: Use no serif fonts, reduce title scale, make work and tools
  vertical, write more like Mateo speaking, manage multiple assets cleanly, use
  icons, and prefer pencil-drawn nature backgrounds.
- Priority: High
- Decision: Rework
- Notes: This swipe is `pencil-nature-narrative`.
