# Structure

- `src/app`: thin routes that re-export a screen from `src/modules/<feature>/<Feature>.page.tsx`.
- `src/components/ui`: primitives only. Composite blocks go in `components/shared` or the feature's `components/`.
- `src/components/icons` and `vectors` are generated. Never edit them.
