import type {
  DisplayOption,
  GridTemplateColumnsOption,
  HeightOption,
  OverflowOption,
  PositionOption,
  WidthOption,
} from '@/types/style/layout.types';
import {
  DisplayPropKeys,
  GridTemplateColumnsPropKeys,
  HeightPropKeys,
  OverflowPropKeys,
  PositionPropKeys,
  WidthPropKeys,
} from '@/types/style/layout.types';

import { responsiveStyleResolver } from './responsive.utils';

import css from '@/styles/modules/layout.module.scss';

/**
 * Display Utilities
 */

const displayPrefixMap: Record<DisplayOption, string> = {
  display: 'd',
};

export const getDisplayClasses = responsiveStyleResolver({
  keys: DisplayPropKeys,
  prefixMap: displayPrefixMap,
  css,
});

/**
 * Position Utilities
 */

const positionPrefixMap: Record<PositionOption, string> = {
  position: 'pos',
};

export const getPositionClasses = responsiveStyleResolver({
  keys: PositionPropKeys,
  prefixMap: positionPrefixMap,
  css,
});

/**
 * Overflow Utilities
 */

const overflowPrefixMap: Record<OverflowOption, string> = {
  overflow: 'of',
};

export const getOverflowClasses = responsiveStyleResolver({
  keys: OverflowPropKeys,
  prefixMap: overflowPrefixMap,
  css,
});

/**
 * Width Utilities
 */

const widthPrefixMap: Record<WidthOption, string> = {
  width: 'w',
};

export const getWidthClasses = responsiveStyleResolver({
  keys: WidthPropKeys,
  prefixMap: widthPrefixMap,
  css,
});

/**
 * Height Utilities
 */

const heightPrefixMap: Record<HeightOption, string> = {
  height: 'h',
};

export const getHeightClasses = responsiveStyleResolver({
  keys: HeightPropKeys,
  prefixMap: heightPrefixMap,
  css,
});

/**
 * Grid template columns utilities
 */

const gridTemplateColumnsPrefixMap: Record<GridTemplateColumnsOption, string> =
  {
    gridTemplateColumns: 'gtc',
  };

export const getGridTemplateColumnsClasses = responsiveStyleResolver({
  keys: GridTemplateColumnsPropKeys,
  prefixMap: gridTemplateColumnsPrefixMap,
  css,
});
