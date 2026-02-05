export type TextVariant =
  | 'heading-2xl'
  | 'heading-xl'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'heading-xs'
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'body-xs'
  | 'caption';

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
 * Keep @type TextColor in sync with semantic colors
 * @see @/styles/variables/colors/semantics
 */
export type TextColor = 'brand' | 'primary' | 'secondary' | 'black' | 'white';

export type TextAlign = 'left' | 'center' | 'right';
