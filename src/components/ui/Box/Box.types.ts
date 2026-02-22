import type { ReactElement, ReactNode } from 'react';

import type {
  ResponsiveFlexAlignItemsProps,
  ResponsiveFlexAlignSelfProps,
  ResponsiveFlexDirectionProps,
  ResponsiveFlexJustifyContentProps,
  ResponsiveFlexWrapProps,
} from '@/types/style/flex.types';
import type {
  DisplayProps,
  OverflowProps,
  PositionProps,
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
  | 'main'
  | 'ul'
  | 'ol'
  | 'li';

export type BoxStyleProps = DisplayProps &
  PositionProps &
  OverflowProps &
  ResponsivePaddingProps &
  ResponsiveMarginProps &
  ResponsiveWidthProps &
  ResponsiveHeightProps &
  ResponsiveGapProps &
  ResponsiveFlexDirectionProps &
  ResponsiveFlexWrapProps &
  ResponsiveFlexJustifyContentProps &
  ResponsiveFlexAlignItemsProps &
  ResponsiveFlexAlignSelfProps;

export type BoxRenderRootCallback = (
  className: string,
  children: ReactNode
) => ReactElement;
