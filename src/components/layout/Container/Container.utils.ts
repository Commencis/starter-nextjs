import type {
  Breakpoint,
  PerBreakpoint,
  ResponsiveAttribute,
} from '@/types/style/breakpoint.types';
import type { Padding } from '@/types/style/spacing.types';
import { getResponsiveClasses } from '@/utils/style/responsive.utils';

import { sizeToPaddingMap } from './Container.config';
import type { ContainerSize, ResponsiveContainerSize } from './Container.types';

import css from './Container.module.scss';

export const defaultContainerSize: ContainerSize = 'lg';

const breakpoints: Breakpoint[] = ['xs', 'md', 'lg'];
const sizePrefixMap = { size: 'size' };

function getPaddingBySize(
  size: ContainerSize,
  breakpoint: Breakpoint
): Padding {
  const padding = sizeToPaddingMap[size];

  if (typeof padding === 'number') {
    return padding;
  }

  return padding[breakpoint] ?? padding.xs ?? 0;
}

export function getSizePadding(
  size?: ResponsiveContainerSize
): ResponsiveAttribute<Padding> {
  if (!size) {
    return sizeToPaddingMap[defaultContainerSize];
  }

  if (typeof size === 'string') {
    return sizeToPaddingMap[size];
  }

  return breakpoints.reduce<PerBreakpoint<Padding>>((acc, breakpoint) => {
    const breakpointSize = size[breakpoint];

    if (breakpointSize) {
      acc[breakpoint] = getPaddingBySize(breakpointSize, breakpoint);
    }

    return acc;
  }, {});
}

export function getContainerSizeClasses(
  size?: ResponsiveContainerSize
): string {
  return getResponsiveClasses({
    props: { size },
    prefixMap: sizePrefixMap,
    css,
  });
}
