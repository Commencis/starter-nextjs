import type { ResponsiveAttribute } from './breakpoint.types';

/**
 * Keep in sync with $typography-variant-map keys in
 * @scss styles/variables/typography/_variants.scss
 */
export type TypographyVariant =
  | 'display-1'
  | 'display-2'
  | 'display-3'
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'heading-4'
  | 'label-1'
  | 'label-2'
  | 'label-3'
  | 'body-1'
  | 'body-2'
  | 'body-3'
  | 'body-4';

/**
 * Typography variant prop shape for components such as Text.
 *
 * - Scalar value: default viewport scaling applies via `typographyViewportMap`
 *   in typography.utils.ts (e.g. `display-1` scales down on small viewports).
 * - Object value: per-breakpoint override; each breakpoint applies the given
 *   variant's physical styles. `xs` is optional and falls back to the util's
 *   internal default when omitted.
 */
export type TypographyVariantProps = ResponsiveAttribute<TypographyVariant>;
