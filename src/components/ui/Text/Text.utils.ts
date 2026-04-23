import { getResponsiveClasses } from '@/utils/style/responsive.utils';

import type { FontWeight, TextAlignProp, TextMaxLineProp } from './Text.types';

import css from './Text.module.scss';

const textAlignPrefixMap = {
  align: 'ta',
} as const;

const textMaxLinePrefixMap = {
  maxLine: 'text-clamp',
} as const;

type TextAlignStyleProps = {
  align?: TextAlignProp;
};

export function getTextAlignClasses({ align }: TextAlignStyleProps): string {
  return getResponsiveClasses({
    props: { align },
    prefixMap: textAlignPrefixMap,
    css,
  });
}

type TextMaxLineStyleProps = {
  maxLine?: TextMaxLineProp;
};

export function getTextMaxLineClasses({
  maxLine,
}: TextMaxLineStyleProps): string {
  return getResponsiveClasses({
    props: { maxLine },
    prefixMap: textMaxLinePrefixMap,
    css,
  });
}

const fontWeightPrefixMap = {
  fontWeight: 'text-fw',
} as const;

type FontWeightStyleProps = {
  fontWeight?: FontWeight;
};

export function getFontWeightClasses({
  fontWeight,
}: FontWeightStyleProps): string {
  return getResponsiveClasses({
    props: { fontWeight },
    prefixMap: fontWeightPrefixMap,
    css,
  });
}
