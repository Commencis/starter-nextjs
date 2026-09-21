import type { ResponsiveAttribute } from './breakpoint.types';

/**
 * Border Radius:
 * Keep in sync with @scss $radius-values in variables/_radius.scss
 */
const _BorderRadiusValues = [0, 4, 8, 16, 20, 32] as const;

export type BorderRadius = (typeof _BorderRadiusValues)[number] | 'full';

export const BorderRadiusPropKeys = ['borderRadius'] as const;

export type BorderRadiusOption = (typeof BorderRadiusPropKeys)[number];

export type ResponsiveBorderRadiusProps = Partial<
  Record<BorderRadiusOption, ResponsiveAttribute<BorderRadius>>
>;
