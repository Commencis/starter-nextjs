import type { ResponsiveAttribute } from '@/types/style/breakpoint.types';
import type {
  ResponsiveFontWeightProps,
  ResponsiveTextAlignProps,
  ResponsiveTypographyVariantProps,
} from '@/types/style/typography.types';

export type TextElement =
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type TextStyleProps = ResponsiveTypographyVariantProps &
  ResponsiveFontWeightProps &
  ResponsiveTextAlignProps &
  ResponsiveTextMaxLineProps;

/**
 * Semantic tokens: keep in sync with @/styles/variables/colors/semantics.
 * `inherit` uses `color: inherit` (parent / cascade).
 */
export type TextColor =
  | 'brand'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'black'
  | 'white'
  | 'inherit';

export type TextMaxLine = 1 | 2 | 3 | 4 | 5 | 6;

export const TextMaxLinePropKeys = ['maxLine'] as const;

export type TextMaxLineOption = (typeof TextMaxLinePropKeys)[number];

export type ResponsiveTextMaxLineProps = Partial<
  Record<TextMaxLineOption, ResponsiveAttribute<TextMaxLine>>
>;
