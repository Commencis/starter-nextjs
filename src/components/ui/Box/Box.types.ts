/*
 * Copyright 2017-2025 Commencis. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Commencis.
 * Any reproduction of this material must contain this notice.
 */

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

export type BoxElement = 'div' | 'section' | 'span';

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
