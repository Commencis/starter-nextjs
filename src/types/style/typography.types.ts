import type { ResponsiveAttribute } from './breakpoint.types';

export type TextAlign = 'left' | 'center' | 'right';

export const TextAlignPropKeys = ['align'] as const;

export type TextAlignOption = (typeof TextAlignPropKeys)[number];

export type ResponsiveTextAlignProps = Partial<
  Record<TextAlignOption, ResponsiveAttribute<TextAlign>>
>;

/**
 * Keep in sync with @/styles/variables/typography/_weights.scss $font-weight-map keys
 */
export type FontWeight = 'regular' | 'semi-bold' | 'bold';

export const FontWeightPropKeys = ['fontWeight'] as const;

export type FontWeightOption = (typeof FontWeightPropKeys)[number];

export type ResponsiveFontWeightProps = Partial<
  Record<FontWeightOption, ResponsiveAttribute<FontWeight>>
>;

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

export const TypographyVariantPropKeys = ['variant'] as const;

export type TypographyVariantOption =
  (typeof TypographyVariantPropKeys)[number];

/**
 * Typography `variant` prop shape for components such as Text.
 *
 * - Scalar value: default viewport scaling applies via `typographyViewportMap`
 *   in typography.utils.ts (e.g. `display-1` scales down on small viewports).
 * - Object value: per-breakpoint override; each breakpoint applies the given
 *   variant's physical styles. `xs` is optional and falls back to the util's
 *   internal default when omitted.
 */
export type ResponsiveTypographyVariant =
  ResponsiveAttribute<TypographyVariant>;

export type ResponsiveTypographyVariantProps = Partial<
  Record<TypographyVariantOption, ResponsiveTypographyVariant>
>;
