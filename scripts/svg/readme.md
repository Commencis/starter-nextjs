# SVG Handling & Generation

This directory contains scripts for automated creation and management of SVG-based `icons` and `vectors` in this project. The primary goal is to automate repetitive tasks and to ensure project-wide consistency and best practices.

---

## Structure Overview

```
scripts/svg/            --> Scripts for SVG management
src/assets/icons/       --> Raw SVG asset directory for Icon Library
src/assets/vectors/     --> Raw SVG asset directory for Brand or large-scale visual vectors, illustrations, logos
```

Each asset type has its designated folder and management approach:

- **Icons** are typically used in system components.
- **Vectors** are branding, decorative, or illustrative visuals.

---

## Usage Guide

### Icon Generation

1. Place new SVG icons in the `/src/assets/icons/` directory.
2. If required, add the icon name to the relevant config or let the script auto-discover it.
3. Run the generation script to update `index.ts` or other bulk import files automatically:

   ```
   pnpm generate:icons
   ```

### Vector Generation

1. Add your SVG file under an appropriate subfolder inside `/src/assets/vectors/`.
2. Some vectors are managed manually, while others may be included via script (see the specific readme below).
3. Run the generation script to update `index.ts` or other bulk import files automatically:

   ```
   pnpm generate:vectors
   ```

---

## Further Docs & Asset Guidelines

Each asset type includes its own dedicated README:

- For icons: [`src/assets/icons/README.md`](../../src/assets/icons/README.md)
- For vectors: [`src/assets/vectors/README.md`](../../src/assets/vectors/README.md)

**Please make sure to review the asset folder readmes _before_ adding new assets or running generation scripts.**
