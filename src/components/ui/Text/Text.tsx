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
