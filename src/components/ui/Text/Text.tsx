import type { PropsWithChildren, ReactElement } from 'react';

import clsx from 'clsx';

import type { TypographyVariant } from '@/types/style/typography.types';
import { getTypographyClasses } from '@/utils/style/typography.utils';

import type {
  FontWeight,
  TextAlignProp,
  TextColor,
  TextElement,
  TextMaxLineProp,
} from './Text.types';
import {
  getFontWeightClasses,
  getTextAlignClasses,
  getTextMaxLineClasses,
} from './Text.utils';

import css from './Text.module.scss';

type TextProps = PropsWithChildren<{
  as?: TextElement;
  color?: TextColor;
  variant?: TypographyVariant;
  fontWeight?: FontWeight;
  align?: TextAlignProp;
  maxLine?: TextMaxLineProp;
}>;

export function Text({
  as: Component = 'span',
  children,
  color = 'primary',
  variant = 'body-1',
  fontWeight,
  align,
  maxLine,
}: TextProps): ReactElement {
  const textClasses = clsx(
    getTypographyClasses(variant),
    css[`text-color-${color}`],
    getFontWeightClasses({ fontWeight }),
    getTextAlignClasses({ align }),
    getTextMaxLineClasses({ maxLine })
  );

  return <Component className={textClasses}>{children}</Component>;
}
