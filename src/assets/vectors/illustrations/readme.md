# Illustrations Raw SVG Asset Directory

This directory contains illustrative SVG assets used throughout the application.

## Purpose

All multi-colored, scene-based, and graphic-related SVGs should be placed in this folder. These assets are typically used for:

- Error states (e.g., "Not Found", "Something Went Wrong")
- Empty states
- Decorative graphics
- Scene illustrations
- Complex multi-colored visuals

## Usage

These SVG files are converted to React components using SVGR, similar to icon SVGs. Generated components can be imported and used directly in your code.

## Naming Conventions

- Use **kebab-case** for SVG filenames (e.g., `not-found.svg`, `something-went-wrong.svg`)
- Do **not** append `-illustration` suffix to filenames
- File names are automatically converted to **PascalCase** component names:
  - `not-found.svg` → `NotFound` component
  - `something-went-wrong.svg` → `SomethingWentWrong` component
  - `empty-state.svg` → `EmptyState` component

## Guidelines

- Keep SVG files optimized
- Use descriptive, kebab-case filenames
- Maintain consistent styling and color schemes
- Ensure SVGs are responsive and scalable
