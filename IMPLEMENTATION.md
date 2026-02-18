# Iterative Execution Bootstrap (Docs + Checklists First)

## Summary

Create execution scaffolding first, then implement modernization in controlled
iterations:

1. Add `IMPLEMENTATION.md` with the full modernization spec.
2. Create empty `AGENTS.md` at repo root (as requested).
3. Expand `README.md` with iteration checklists and acceptance gates.
4. Use README checkboxes as the single source of progress tracking.

## Objective and constraints

- Bootstrap documentation and execution guardrails before code migrations.
- Keep implementation iterative and testable in small PR-sized slices.
- Track progress in `README.md` using checkboxes as the single status source.

## Upstream sync target

- Target baseline: `teo-garcia/react-template-next@5b8effb`.
- Target commit date: 2026-02-04.
- Do not retarget upstream unless explicitly approved.

## Stack migration scope

- Framework/runtime: Next 16.
- UI/runtime library: React 19.
- Styling: Tailwind CSS 4.
- Testing: Vitest.
- Engine baseline: Node 22+.

## Storytelling strategy

- Direction: Forensic Editorial Premium.
- Narrative positioning:

1. Show clarity under ambiguity.
2. Demonstrate outcomes in complex or outdated systems.
3. Prove technical depth through decision and impact storytelling.

## JobsExperience preservation rule

- Preserve work-experience data fidelity:

1. Company entries remain present.
2. Date ranges remain present.
3. Visual structure may change during redesign.

## Static-export and Cloudflare requirements

- Deployment target: Cloudflare Pages.
- Rendering target: static export.
- Runtime policy: zero runtime API/functions required for production pages.
- Build expectation: static output folder `out/` generated successfully when
  static-export iteration is active.

## Iteration breakdown and acceptance criteria

### Iteration 0: Docs bootstrap

- Deliverables:

1. `IMPLEMENTATION.md` created.
2. `AGENTS.md` created empty.
3. README checklist sections added.

- Acceptance:

1. All three artifacts exist with expected content.

### Iteration 1: Upstream parity baseline

- Deliverables:

1. Repo structure aligned with upstream baseline.
2. Tooling switched to upstream lint/test/build stack.

- Acceptance:

1. Local build passes.

### Iteration 2: Static export hardening

- Deliverables:

1. `output: 'export'` configured.
2. Runtime/API dependencies removed.

- Acceptance:

1. Build generates `out/` successfully.

### Iteration 3: Storytelling UI rebuild

- Deliverables:

1. New storytelling sections implemented.
2. JobsExperience data preserved and rendered.
3. Light/dark theme parity validated.
4. Motion respects reduced-motion.

- Acceptance:

1. Narrative and visual requirements met without data regression.

### Iteration 4: Cloudflare Pages deployment switch

- Deliverables:

1. Vercel deployment config removed.
2. Cloudflare Pages static settings documented.
3. CI validates static output path.

- Acceptance:

1. Deployment path points to Cloudflare Pages static pipeline.

### Iteration 5: QA and polish

- Deliverables:

1. Lint/type/test/build all pass.
2. No hydration errors.
3. Visual QA complete on mobile and desktop.

- Acceptance:

1. Quality gates pass and docs reflect final state.

## Iteration feedback loop

- Current iteration: `1` (active).
- Latest feedback status: `accepted` (Iteration 0 approved).
- Required process:

1. After each iteration handoff, gather explicit user feedback.
2. Capture what the user liked, disliked, and wants changed.
3. Use feedback entries as constraints for the next iteration scope.

### Feedback template

Use this template for every feedback entry:

```md
### Feedback Entry

- Iteration:
- Date:
- What I liked:
- What I disliked:
- Required changes:
- Priority:
- Decision: Accepted / Rework
- Notes:
```

### Feedback log

### Feedback Entry

- Iteration: 0 - Docs bootstrap
- Date: 2026-02-18
- What I liked: The iteration is okay.
- What I disliked: None reported.
- Required changes: None for Iteration 0.
- Priority: Low
- Decision: Accepted
- Notes: Proceed to Iteration 1 (upstream parity baseline).

## Public interfaces and type impact

- No runtime API additions.
- Planned content model additions in later iteration:

1. `JobExperienceItem`
2. `StoryChapter`
3. `ProofPoint`

- No breaking external API expected (portfolio application).

## Test and validation plan

For each iteration completion:

1. `pnpm lint:es:check`
2. `pnpm lint:ts`
3. `pnpm test`
4. `pnpm build`
5. Verify static output exists (`out/`) when static-export iteration is active.

## Risks and rollback notes

- Risk: large upstream deltas may expand migration surface.
- Mitigation: keep changes scoped per iteration and gate with checklist
  acceptance.
- Risk: static-export constraints can break runtime assumptions.
- Mitigation: remove runtime dependencies before deployment migration.
- Rollback: if an iteration fails acceptance, revert only that iteration scope
  and keep prior completed checklists unchanged.

## Assumptions and defaults

1. `AGENTS.md` at root enforces mandatory feedback checks.
2. Progress tracking happens in README checkboxes.
3. Implementation follows iterative PR-sized slices, not one large rewrite.
4. Upstream sync remains pinned to `5b8effb` unless explicitly retargeted.
