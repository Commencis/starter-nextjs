import clsx from 'clsx';

import {
  getDisplayClasses,
  getFlexAlignItemsClasses,
  getFlexAlignSelfClasses,
  getFlexDirectionClasses,
  getFlexJustifyContentClasses,
  getFlexWrapClasses,
  getGapClasses,
  getHeightClasses,
  getMarginClasses,
  getOverflowClasses,
  getPaddingClasses,
  getPositionClasses,
  getWidthClasses,
} from '@/utils/style';

import type { BoxStyleProps } from './Box.types';

function getFlexClasses(styleProps: BoxStyleProps): string {
  const { display } = styleProps;

  const isFlex = display === 'flex' || display === 'inline-flex';

  return clsx(
    getFlexAlignSelfClasses(styleProps),
    ...(isFlex
      ? [
          getGapClasses(styleProps),
          getFlexDirectionClasses(styleProps),
          getFlexWrapClasses(styleProps),
          getFlexJustifyContentClasses(styleProps),
          getFlexAlignItemsClasses(styleProps),
        ]
      : [])
  );
}

export function getBoxClasses(styleProps: BoxStyleProps): string {
  return clsx(
    getPaddingClasses(styleProps),
    getMarginClasses(styleProps),
    getDisplayClasses(styleProps),
    getPositionClasses(styleProps),
    getOverflowClasses(styleProps),
    getWidthClasses(styleProps),
    getHeightClasses(styleProps),
    getFlexClasses(styleProps)
  );
}
