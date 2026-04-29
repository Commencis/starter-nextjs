import type { Breakpoint } from '@/types/style/breakpoint.types';

/**
 * Breakpoints:
 * List of allowed breakpoints for various style properties.
 * Keep it sync with @scss variables/_breakpoints.scss
 */
export const BREAKPOINTS: Record<Breakpoint, number> = {
  xs: 0,
  md: 768,
  lg: 1024,
};
