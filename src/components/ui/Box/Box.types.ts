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
  DisplayProps,
  OverflowProps,
  PositionProps,
  ResponsiveGridTemplateColumnsProps,
  ResponsiveHeightProps,
  ResponsiveWidthProps,
} from '@/types/style/layout.types';
import type {
  ResponsiveGapProps,
  ResponsiveMarginProps,
  ResponsivePaddingProps,
} from '@/types/style/spacer.types';

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
  | 'nav';

export type BoxStyleProps = DisplayProps &
  PositionProps &
  OverflowProps &
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
  ResponsiveFlexShrinkProps;

export type BoxRenderRootCallback = (
  className: string,
  children: ReactNode
) => ReactElement;
