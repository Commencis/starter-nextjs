import type { PropsWithChildren, ReactElement } from 'react';

import clsx from 'clsx';

import {
  getFontWeightClasses,
  getTextAlignClasses,
  getTypographyVariantClasses,
} from '@/utils/style/typography.utils';

import type { TextColor, TextElement, TextStyleProps } from './Text.types';
import { getTextMaxLineClasses } from './Text.utils';

import css from './Text.module.scss';

type TextProps = TextStyleProps &
  PropsWithChildren & {
    as?: TextElement;
    color?: TextColor;
  };

export function Text({
  as: Component = 'span',
  children,
  color = 'primary',
  variant,
  fontWeight,
  align,
  maxLine,
}: TextProps): ReactElement {
  const textClasses = clsx(
    getTypographyVariantClasses(variant),
    css[`text-color-${color}`],
    getFontWeightClasses({ fontWeight }),
    getTextAlignClasses({ align }),
    getTextMaxLineClasses({ maxLine })
  );

  return <Component className={textClasses}>{children}</Component>;
}
