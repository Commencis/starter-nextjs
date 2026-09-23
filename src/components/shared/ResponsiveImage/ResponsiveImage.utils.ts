import type { Breakpoint } from '@/types/style/breakpoint.types';
import { BREAKPOINTS } from '@/constants/breakpoint.constants';

const mediaQueries: Record<Breakpoint, string> = {
  xs: `(max-width: ${BREAKPOINTS.md - 1}px)`,
  md: `(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`,
  lg: `(min-width: ${BREAKPOINTS.lg}px)`,
};

export const getBreakpointMediaQuery = (breakpoint: Breakpoint): string =>
  mediaQueries[breakpoint];
