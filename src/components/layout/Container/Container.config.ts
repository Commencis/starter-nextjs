import type { ResponsiveAttribute } from '@/types/style/breakpoint.types';
import type { Padding } from '@/types/style/spacing.types';

import type { ContainerSize } from './Container.types';

// Should be in sync with $size-values in Container.module.scss
export const sizeToPaddingMap: Record<
  ContainerSize,
  ResponsiveAttribute<Padding>
> = {
  md: { xs: 24, md: 32, lg: 32 },
  lg: { xs: 24, md: 32, lg: 64 },
  full: 0,
};
