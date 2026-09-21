import clsx from 'clsx';

import type { UnknownComponentProps } from '@/types/common.types';
import type { SemanticBgColor } from '@/types/style/color.types';
import {
  getBorderRadiusClasses,
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
  hasDisplayCondition,
} from '@/utils/style';
import { getBackgroundColorClasses } from '@/utils/style/colors.utils';

import type { BoxBgColor } from './Box.types';

const boxBgColorMap: Record<BoxBgColor, SemanticBgColor> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  brand: 'bg-brand',
  light: 'bg-light',
  gray: 'bg-gray',
  'dark-overlay': 'bg-dark-overlay',
};

export function getBoxBgColorClasses(bgColor?: BoxBgColor): string {
  if (!bgColor || !boxBgColorMap[bgColor]) {
    return '';
  }

  return getBackgroundColorClasses(boxBgColorMap[bgColor]);
}

function getFlexClasses(props: UnknownComponentProps): string {
  const isFlex = hasDisplayCondition(props, 'flex', 'inline-flex');
  const flexItemClasses = clsx(
    getFlexAlignSelfClasses(props),
    getFlexBasisClasses(props),
    getFlexGrowClasses(props),
    getFlexShrinkClasses(props)
  );

  return isFlex
    ? clsx(
        getGapClasses(props),
        getFlexDirectionClasses(props),
        getFlexWrapClasses(props),
        getFlexJustifyContentClasses(props),
        getFlexAlignItemsClasses(props),
        flexItemClasses
      )
    : flexItemClasses;
}

function getGridClasses(props: UnknownComponentProps): string {
  const isGrid = hasDisplayCondition(props, 'grid');

  return isGrid
    ? clsx(
        getGapClasses(props),
        getFlexJustifyContentClasses(props),
        getFlexAlignItemsClasses(props),
        getGridTemplateColumnsClasses(props)
      )
    : '';
}

export function getBoxClasses(props: UnknownComponentProps): string {
  return clsx(
    getPaddingClasses(props),
    getMarginClasses(props),
    getDisplayClasses(props),
    getPositionClasses(props),
    getOverflowClasses(props),
    getWidthClasses(props),
    getHeightClasses(props),
    getFlexClasses(props),
    getGridClasses(props),
    getBorderRadiusClasses(props),
    getBoxBgColorClasses(props.bgColor as BoxBgColor | undefined)
  );
}
