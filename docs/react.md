# React

React 19.

- Named function components returning `ReactElement` (`| null` when empty).
- Server Components by default. `'use client'` only for state or browser events.
- React Compiler is on. No `useMemo`, `useCallback`, or `memo` by default.
- Reuse `src/hooks` (`useBreakpoint`, `useMediaQuery`) before writing a new hook.
- Colocate `X.tsx`, `X.types.ts`, `X.utils.ts`, `X.module.scss`, `X.stories.tsx`.
