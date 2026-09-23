import clsx from 'clsx';

import type { SemanticFgColor } from '@/types/style/color.types';
import { getMarginClasses } from '@/utils/style';
import { getForegroundColorClasses } from '@/utils/style/colors.utils';
import { responsiveStyleResolver } from '@/utils/style/responsive.utils';
import {
  getFontWeightClasses,
  getTextAlignClasses,
  getTypographyVariantClasses,
} from '@/utils/style/typography.utils';

import {
  type TextColor,
  type TextMaxLineOption,
  TextMaxLinePropKeys,
  type TextStyleProps,
} from './Text.types';

import css from './Text.module.scss';

const textColorMap: Record<TextColor, SemanticFgColor> = {
  brand: 'fg-brand',
  primary: 'fg-primary',
  secondary: 'fg-secondary',
  tertiary: 'fg-tertiary',
  black: 'fg-black',
  white: 'fg-white',
  inherit: 'fg-inherit',
};

export function getTextColorClasses(color?: TextColor): string {
  if (!color || !textColorMap[color]) {
    return '';
  }

  return getForegroundColorClasses(textColorMap[color]);
}

const textMaxLinePrefixMap: Record<TextMaxLineOption, string> = {
  maxLine: 'text-clamp',
};

export const getTextMaxLineClasses = responsiveStyleResolver({
  keys: TextMaxLinePropKeys,
  prefixMap: textMaxLinePrefixMap,
  css,
});

export function getTextStrongFontWeightClasses(): string {
  return getFontWeightClasses({ fontWeight: 'semi-bold' });
}

export function getTextClasses({
  variant,
  color,
  fontWeight,
  align,
  maxLine,
  marginTop,
  marginBottom,
}: TextStyleProps): string {
  return clsx(
    getTypographyVariantClasses(variant),
    getTextColorClasses(color),
    getFontWeightClasses({ fontWeight }),
    getTextAlignClasses({ align }),
    getTextMaxLineClasses({ maxLine }),
    getMarginClasses({ marginTop, marginBottom })
  );
}
