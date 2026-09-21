import type { ReactElement, ReactNode } from 'react';

import type {
  ResponsiveFlexAlignItemsProps,
  ResponsiveFlexAlignSelfProps,
  ResponsiveFlexBasisProps,
  ResponsiveFlexDirectionProps,
  ResponsiveFlexGrowProps,
  ResponsiveFlexJustifyContentProps,
  ResponsiveFlexShrinkProps,
  ResponsiveFlexWrapProps,
} from '@/types/style/flex.types';
import type {
  OverflowProps,
  PositionProps,
  ResponsiveDisplayProps,
  ResponsiveGridTemplateColumnsProps,
  ResponsiveHeightProps,
  ResponsiveWidthProps,
} from '@/types/style/layout.types';
import type { ResponsiveBorderRadiusProps } from '@/types/style/radius.types';
import type {
  ResponsiveGapProps,
  ResponsiveMarginProps,
  ResponsivePaddingProps,
} from '@/types/style/spacing.types';

export type BoxElement =
  | 'div'
  | 'section'
  | 'span'
  | 'ul'
  | 'ol'
  | 'li'
  | 'main'
  | 'article'
  | 'header'
  | 'footer'
  | 'nav'
  | 'caption'
  | 'table'
  | 'thead'
  | 'tbody'
  | 'tr'
  | 'th'
  | 'td';

/**
 * Semantic tokens: keep in sync with @/styles/variables/colors/_semantics.scss
 * $background-color-map keys.
 */
export type BoxBgColor =
  'primary' | 'secondary' | 'brand' | 'light' | 'gray' | 'dark-overlay';

export type BoxStyleProps = PositionProps &
  OverflowProps &
  ResponsiveDisplayProps &
  ResponsiveBorderRadiusProps &
  ResponsivePaddingProps &
  ResponsiveMarginProps &
  ResponsiveWidthProps &
  ResponsiveHeightProps &
  ResponsiveGridTemplateColumnsProps &
  ResponsiveGapProps &
  ResponsiveFlexDirectionProps &
  ResponsiveFlexWrapProps &
  ResponsiveFlexJustifyContentProps &
  ResponsiveFlexAlignItemsProps &
  ResponsiveFlexAlignSelfProps &
  ResponsiveFlexBasisProps &
  ResponsiveFlexGrowProps &
  ResponsiveFlexShrinkProps & {
    bgColor?: BoxBgColor;
  };

export type BoxRenderRootCallback = (
  className: string,
  children: ReactNode
) => ReactElement;

export type BoxRenderProps =
  | { as?: BoxElement; renderRoot?: never }
  | { as?: never; renderRoot?: BoxRenderRootCallback };
