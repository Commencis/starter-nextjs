import type { ResponsiveAttribute } from '@/types/style/breakpoint.types';

export type TextElement =
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

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

export type TextAlign = 'left' | 'center' | 'right';

export type TextAlignProp = ResponsiveAttribute<TextAlign>;

export type TextMaxLine = 1 | 2 | 3 | 4 | 5 | 6;

export type TextMaxLineProp = ResponsiveAttribute<TextMaxLine>;

/**
 * Keep in sync with @/styles/variables/typography/_weights.scss $font-weight-map keys
 */
export type FontWeight = 'regular' | 'semi-bold' | 'bold';
