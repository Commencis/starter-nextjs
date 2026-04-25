import type { PropsWithChildren, ReactElement } from 'react';

import clsx from 'clsx';

import type { TypographyVariantProps } from '@/types/style/typography.types';
import { getTypographyVariantClasses } from '@/utils/style/typography.utils';

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
  variant?: TypographyVariantProps;
  fontWeight?: FontWeight;
  align?: TextAlignProp;
  maxLine?: TextMaxLineProp;
}>;

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
