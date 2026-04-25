import { responsiveStyleResolver } from '@/utils/style/responsive.utils';

import { type TextMaxLineOption, TextMaxLinePropKeys } from './Text.types';

import css from './Text.module.scss';

const textMaxLinePrefixMap: Record<TextMaxLineOption, string> = {
  maxLine: 'text-clamp',
};

export const getTextMaxLineClasses = responsiveStyleResolver({
  keys: TextMaxLinePropKeys,
  prefixMap: textMaxLinePrefixMap,
  css,
});
