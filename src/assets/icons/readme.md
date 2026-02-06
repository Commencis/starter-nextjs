# Icons Raw SVG Asset Directory

This directory contains icon SVG assets used throughout the application.

## Purpose

All single-colored, monochrome, and simple icon SVGs should be placed in this folder. These assets are typically used for:

- UI icons (arrows, chevrons, checkmarks, etc.)
- Action icons (add, close, filter, etc.)
- Status icons (check, error, warning, etc.)
- Navigation icons (menu, user, etc.)
- Simple, single-colored graphics

## Usage

These SVG files are converted to React components using SVGR. Generated components support props like `size`, `color`, and all standard SVG attributes. Components can be imported and used directly in your code.

## Naming Conventions

- Use **kebab-case** for SVG filenames (e.g., `arrow-right-icon.svg`, `check-circle-icon.svg`)
- Append `-icon` suffix to filenames (e.g., `arrow-right-icon.svg`)
- File names are automatically converted to **PascalCase** component names with `Icon` suffix:
  - `arrow-right-icon.svg` → `ArrowRightIcon` component
  - `check-circle-icon.svg` → `CheckCircleIcon` component
  - `user-icon.svg` → `UserIcon` component

## Guidelines

- All icon assets should have a 1:1 aspect ratio
- Use a consistent `viewBox` of `0 0 24 24`
- Keep SVG files optimized
- Use descriptive, kebab-case filenames with `-icon` suffix
- Icons should be single-colored (fill `currentColor` will be used for fill/stroke)
- Maintain consistent stroke width and style
- Ensure icons are responsive and scalable
- Remove width/height attributes (controlled via props)
- Remove fill/stroke attributes (controlled via `color` prop)
