import clsx from 'clsx';

import {
  getDisplayClasses,
  getFlexAlignItemsClasses,
  getFlexAlignSelfClasses,
  getFlexBasisClasses,
  getFlexDirectionClasses,
  getFlexGrowClasses,
  getFlexJustifyContentClasses,
  getFlexShrinkClasses,
  getFlexWrapClasses,
  getGapClasses,
  getGridTemplateColumnsClasses,
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
  const flexItemClasses = clsx(
    getFlexAlignSelfClasses(styleProps),
    getFlexBasisClasses(styleProps),
    getFlexGrowClasses(styleProps),
    getFlexShrinkClasses(styleProps)
  );
  return isFlex
    ? clsx(
        getGapClasses(styleProps),
        getFlexDirectionClasses(styleProps),
        getFlexWrapClasses(styleProps),
        getFlexJustifyContentClasses(styleProps),
        getFlexAlignItemsClasses(styleProps),
        flexItemClasses
      )
    : flexItemClasses;
}

function getGridClasses(styleProps: BoxStyleProps): string {
  const { display } = styleProps;
  const isGrid = display === 'grid';

  return isGrid
    ? clsx(
        getGapClasses(styleProps),
        getFlexJustifyContentClasses(styleProps),
        getFlexAlignItemsClasses(styleProps),
        getGridTemplateColumnsClasses(styleProps)
      )
    : '';
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
    getFlexClasses(styleProps),
    getGridClasses(styleProps)
  );
}
