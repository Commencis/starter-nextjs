/*
 * Copyright 2017-2025 Commencis. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Commencis.
 * Any reproduction of this material must contain this notice.
 */

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
