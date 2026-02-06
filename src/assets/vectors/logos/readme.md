# Logos Raw SVG Asset Directory

This directory contains brand logo and identity SVG assets used throughout the application.

## Purpose

All brand logos, company logos, and identity-related SVGs should be placed in this folder. These assets include:

- Brand logos
- Company logos
- Multi-colored logos
- Fixed-color logos
- Identity graphics

## Usage

These SVG files are converted to React components using SVGR, similar to icon SVGs. Generated components can be imported and used directly in your code.

## Naming Conventions

- Use **kebab-case** for SVG filenames (e.g., `yf-logo.svg`, `company-brand.svg`)
- Do **not** append `-logo` suffix to filenames unless it's part of the brand name
- File names are automatically converted to **PascalCase** component names:
  - `yf-logo.svg` → `YfLogo` component
  - `company-brand.svg` → `CompanyBrand` component
  - `partner-logo.svg` → `PartnerLogo` component

## Guidelines

- Keep SVG files optimized
- Use descriptive, kebab-case filenames
- Maintain brand consistency and color accuracy
- Ensure logos are responsive and scalable
- Preserve original brand colors and styling
