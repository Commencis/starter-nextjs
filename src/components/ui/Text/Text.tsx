/*
 * Copyright 2017-2025 Commencis. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Commencis.
 * Any reproduction of this material must contain this notice.
 */

import type { PropsWithChildren, ReactElement } from 'react';

import clsx from 'clsx';

import type {
  TextAlign,
  TextColor,
  TextElement,
  TextVariant,
} from './Text.types';

import css from './Text.module.scss';

type TextProps = PropsWithChildren<{
  as?: TextElement;
  color?: TextColor;
  variant?: TextVariant;
  align?: TextAlign;
}>;

export function Text({
  as: Component = 'span',
  children,
  color = 'primary',
  variant = 'body-md',
  align,
}: TextProps): ReactElement {
  const textClasses = clsx(css[variant], css[`text-color-${color}`], {
    [css[`ta-${align}`]]: align,
  });

  return <Component className={textClasses}>{children}</Component>;
}
