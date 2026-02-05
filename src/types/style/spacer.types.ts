import type { ResponsiveAttribute } from './breakpoint.types';

/**
 * Spacers:
 * List of allowed spacer values for various style properties.
 * Keep it sync with @scss variables/_spacers.scss
 */
const _SpacerValues = [
  0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 48, 64,
] as const;

type Spacer = (typeof _SpacerValues)[number];

/**
 * Paddings:
 * List of allowed padding values for various style properties.
 * Keep it sync with @scss $paddding-values in variables/_spacers.scss
 */
const _PaddingValues = [
  0, 2, 4, 6, 8, 10, 12, 14, 16, 32, 64,
] satisfies Spacer[];

export type Padding = (typeof _PaddingValues)[number];

export const PaddingPropKeys = [
  'padding',
  'paddingX',
  'paddingY',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
] as const;

export type PaddingOption = (typeof PaddingPropKeys)[number];

export type ResponsivePaddingProps = Partial<
  Record<PaddingOption, ResponsiveAttribute<Padding>>
>;

/**
 * Margins:
 * List of allowed margin values for various style properties.
 * Keep it sync with @scss $margin-values in variables/_spacers.scss
 */
const _MarginValues = [
  0, 2, 4, 6, 8, 10, 12, 14, 16, 32, 64,
] satisfies Spacer[];

export type Margin = (typeof _MarginValues)[number] | 'auto';

export const MarginPropKeys = [
  'margin',
  'marginX',
  'marginY',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
] as const;

export type MarginOption = (typeof MarginPropKeys)[number];

export type ResponsiveMarginProps = Partial<
  Record<MarginOption, ResponsiveAttribute<Margin>>
>;

/**
 * Gaps:
 * List of allowed gap values for various style properties.
 * Keep it sync with @scss $gap-values in variables/_spacers.scss
 */
const _GapValues = [0, 2, 4, 6, 8, 10, 12, 14, 16] satisfies Spacer[];

export type Gap = (typeof _GapValues)[number];

export const GapPropKeys = ['gap'] as const;

export type GapOption = (typeof GapPropKeys)[number];

export type ResponsiveGapProps = Partial<
  Record<GapOption, ResponsiveAttribute<Gap>>
>;
