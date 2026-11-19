# TypeScript Strict Rules - Dr. Darshan Patel site

`tsconfig.json` has `strict: true`. Non-negotiable. Gate: `npm run type-check` (`tsc --noEmit`) must pass before every commit.

## No `any`
Use the specific type, or `unknown` plus narrowing. Never `as any`, `@ts-ignore`, `@ts-nocheck`.
```ts
function parseBody(data: unknown): BookingInput {
  return BookingSchema.parse(data) // Zod narrows unknown
}
```

## Props and exports
- Explicit `interface XProps { className?: string }`; no inline prop types.
- Exported functions have explicit param and return types.
- Named exports; default only for Next `page`, `layout`, `not-found`, `error`.

## Data types live in `types/index.ts`
`DoctorProfile`, `Treatment`, `AffiliatedHospital`, `Testimonial`, `FAQ`, etc. Any fact-bearing type (stat, award, year, count, hospital affiliation, timing, fee) carries:
```ts
verified: boolean
source: string
```
Add a helper such as `verifiedOnly<T extends { verified: boolean }>(items: readonly T[]): T[]` and use it before rendering. Derive form types from Zod with `z.infer`, not by hand.

## Null handling
No `!` without a prior check. Use narrowing, `notFound()`, optional chaining, `??`.
```ts
const t = treatments.find((x) => x.slug === slug)
if (!t) notFound()
```

## antd types
Import types from antd (`type FormProps`, `type ThemeConfig`, `type SelectProps`). Do not recreate them. Check props with the antd MCP/CLI rather than guessing.

## Import order
React/Next, external packages, internal `@/*` alias, relative. Use `import type` for type-only imports.

## Forbidden
`any`, `@ts-ignore`, `@ts-nocheck`, unchecked `!`, `console.log`, default exports on components.
