# Agent Rules

## 1) Feedback Loop Governance (Non-Negotiable)

1. Before any implementation, read `IMPLEMENTATION.md`.
2. Always review `## Iteration feedback loop` and `### Feedback log` first.
3. In the first progress update, state:
   - current iteration
   - latest dislikes
   - required changes to enforce
4. If feedback log is empty, ask the user for iteration and dislikes before
   coding.
5. After each iteration handoff, request feedback using the template in
   `IMPLEMENTATION.md`.
6. Never mark an iteration complete until required feedback changes are done or
   explicitly deferred.

## 2) Plan-First Execution

1. For any non-trivial task (3+ meaningful steps), create a short execution plan
   before edits.
2. If new facts invalidate the plan, stop and re-plan immediately.
3. Execute in small, reversible slices; avoid broad multi-scope changes in one
   pass.
4. Keep one clear objective per iteration.

## 3) Context and Delegation Strategy

1. Keep main context lean; summarize findings instead of dumping raw output.
2. Use subagents for parallel exploration, audits, and isolated implementation
   chunks when it reduces risk.
3. Assign one focused responsibility per subagent and merge results with
   explicit validation.
4. Reuse prior verified findings; do not re-investigate the same area without
   reason.

## 4) Verification Before Completion

1. Do not declare done without evidence.
2. Run relevant checks for the scope (`lint`, `typecheck`, `test`, `build`)
   unless explicitly waived by user.
3. When behavior changes, validate both affected path and likely regressions.
4. Report what was verified, what was not, and why.

## 5) Engineering Quality Bar

1. Prefer root-cause fixes over cosmetic patches.
2. Choose the simplest design that satisfies requirements and preserves
   extensibility.
3. Minimize blast radius: touch only files necessary for the scope.
4. If a solution feels hacky, propose and implement the cleaner option unless
   user prioritizes speed.

## 6) Autonomy and Escalation

1. Default behavior is to execute, not to ask for hand-holding.
2. Ask the user only for high-impact product decisions or missing intent.
3. If blocked by permissions/sandbox/network, request escalation immediately
   with clear justification.
4. Keep momentum: resolve obvious blockers directly when safe.

## 7) Continuous Improvement

1. Treat user corrections as process signals, not one-off edits.
2. Convert repeated mistakes into explicit rules in this file.
3. Periodically tighten rules that are too vague to be enforceable.
4. Optimize for fewer back-and-forth cycles and higher first-pass quality.

## 8) Completion Protocol

1. Summarize changes, verification evidence, and residual risks.
2. List next best actions only when they are concrete and useful.
3. Keep status tracking aligned with `README.md` checkboxes and iteration gates.
