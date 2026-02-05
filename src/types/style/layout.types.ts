import type { ResponsiveAttribute } from './breakpoint.types';

/**
 * Display:
 */
export type Display = 'block' | 'inline-block' | 'flex' | 'inline-flex';

export const DisplayPropKeys = ['display'] as const;

export type DisplayOption = (typeof DisplayPropKeys)[number];

export type DisplayProps = Partial<Record<DisplayOption, Display>>;

/**
 * Position:
 */
export type Position = 'static' | 'relative';

export const PositionPropKeys = ['position'] as const;

export type PositionOption = (typeof PositionPropKeys)[number];

export type PositionProps = Partial<Record<PositionOption, Position>>;

/**
 * Overflow:
 */
export type Overflow = 'visible' | 'hidden' | 'scroll' | 'auto';

export const OverflowPropKeys = ['overflow'] as const;

export type OverflowOption = (typeof OverflowPropKeys)[number];

export type OverflowProps = Partial<Record<OverflowOption, Overflow>>;

/**
 * Width:
 */

export type Width = 'auto' | 'full';

export const WidthPropKeys = ['width'] as const;

export type WidthOption = (typeof WidthPropKeys)[number];

export type ResponsiveWidthProps = Partial<
  Record<WidthOption, ResponsiveAttribute<Width>>
>;

/**
 * Height:
 */
export type Height = 'auto' | 'full';

export const HeightPropKeys = ['height'] as const;

export type HeightOption = (typeof HeightPropKeys)[number];

export type ResponsiveHeightProps = Partial<
  Record<HeightOption, ResponsiveAttribute<Height>>
>;
