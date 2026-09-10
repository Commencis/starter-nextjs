import type { SemanticFgColor } from '@/types/style/color.types';
import { getForegroundColorClasses } from '@/utils/style/colors.utils';
import { responsiveStyleResolver } from '@/utils/style/responsive.utils';

import {
  type TextColor,
  type TextMaxLineOption,
  TextMaxLinePropKeys,
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
