<div align="center">

# React Template Astro

**Production-ready Astro starter with React islands, Tailwind CSS, and modern
testing**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/Node-24+-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![pnpm](https://img.shields.io/badge/pnpm-10+-F69220?logo=pnpm&logoColor=white)](https://pnpm.io)
[![Astro](https://img.shields.io/badge/Astro-6-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)

Part of the [@teo-garcia/templates](https://github.com/teo-garcia/templates)
ecosystem

</div>

---

## Features

| Category         | Technologies                                |
| ---------------- | ------------------------------------------- |
| **Framework**    | Astro 7 with React islands and SSR build    |
| **UI**           | React 19, Tailwind CSS 4, Lucide Icons      |
| **Data**         | TanStack Query for client-side data flows   |
| **Type Safety**  | TypeScript with shared config presets       |
| **Testing**      | Vitest, Testing Library, Playwright, MSW    |
| **Code Quality** | ESLint, Prettier, Husky, lint-staged        |
| **Deploy**       | Vercel-ready CI/CD and container references |

---

## Requirements

- Node.js 24+
- pnpm 10+

---

## Quick Start

```bash
pnpm install
cp .env.example .env
pnpm dev
```

---

## Scripts

| Command             | Description                            |
| ------------------- | -------------------------------------- |
| `pnpm dev`          | Start Astro development server         |
| `pnpm build`        | Type check and create production build |
| `pnpm preview`      | Preview the built app locally          |
| `pnpm test`         | Run unit tests                         |
| `pnpm test:browser` | Run browser-mode tests                 |
| `pnpm test:e2e`     | Run Playwright E2E tests               |
| `pnpm coverage`     | Run tests with coverage                |
| `pnpm check`        | Run lint, typecheck, format, and tests |
| `pnpm lint:es`      | Lint and fix with ESLint               |
| `pnpm lint:ts`      | Run Astro type checks                  |
| `pnpm format`       | Format with Prettier                   |

---

## Project Structure

| Path              | Purpose                          |
| ----------------- | -------------------------------- |
| `src/pages/`      | Astro routes and page entries    |
| `src/components/` | Shared React and Astro UI pieces |
| `src/lib/`        | Utilities, config, and adapters  |
| `public/`         | Static assets                    |
| `e2e/`            | Playwright E2E tests             |

---

## Route States

Astro page conventions own route-state wiring:

| File                                     | Purpose               |
| ---------------------------------------- | --------------------- |
| `src/pages/404.astro`                    | Unmatched route UI    |
| `src/pages/500.astro`                    | Static error fallback |
| `src/components/route-state/route-state` | Shared local state UI |

---

## Shared Governance

| Area               | Tooling                                             |
| ------------------ | --------------------------------------------------- |
| Dependency updates | Renovate                                            |
| Issue intake       | GitHub issue templates                              |
| Change review      | Pull request template                               |
| CI                 | GitHub Actions for lint, typecheck, test, and build |
| Delivery           | Vercel deployment workflow                          |

## Security Headers

`src/middleware.ts` applies the governed header baseline when the app runs in
server mode. `vercel.json` applies the same deployment-owned baseline to static
assets and static output: Content Security Policy, Cross-Origin-Opener-Policy,
Permissions-Policy, Referrer-Policy, X-Content-Type-Options, and
X-Frame-Options.

HSTS is intentionally deployment-owned because TLS termination and domain
preload policy belong to the hosting layer.

---

## Shared Configs

| Package                              | Role                |
| ------------------------------------ | ------------------- |
| `@teo-garcia/eslint-config-shared`   | ESLint rules        |
| `@teo-garcia/prettier-config-shared` | Prettier formatting |
| `@teo-garcia/tsconfig-shared`        | TypeScript settings |
| `@teo-garcia/vitest-config-shared`   | Test configuration  |

---

## Related Templates

| Template                        | Description             |
| ------------------------------- | ----------------------- |
| `react-template-next`           | Next.js full-stack app  |
| `react-template-rr`             | React Router + Vite app |
| `react-template-tanstack-start` | TanStack Start app      |
| `react-native-template-expo`    | Expo mobile app         |

---

## License

MIT

---

<div align="center">
  <sub>Built by <a href="https://github.com/teo-garcia">teo-garcia</a></sub>
</div>
