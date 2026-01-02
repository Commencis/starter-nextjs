/*
 * Copyright 2017-2025 Commencis. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Commencis.
 * Any reproduction of this material must contain this notice.
 */

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
