import type { ResponsiveAttribute } from './breakpoint.types';

/**
 * Flex Direction:
 * List of allowed flex direction values.
 * Keep it sync with @scss $flex-direction-values in variables/_flex.scss
 */
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export const FlexDirectionPropKeys = ['direction'] as const;

export type FlexDirectionOption = (typeof FlexDirectionPropKeys)[number];

export type ResponsiveFlexDirectionProps = Partial<
  Record<FlexDirectionOption, ResponsiveAttribute<FlexDirection>>
>;

/**
 * Flex Wrap:
 * List of allowed flex wrap values.
 * Keep it sync with @scss $flex-wrap-values in variables/_flex.scss
 */
export type FlexWrap = 'nowrap' | 'wrap';

export const FlexWrapPropKeys = ['wrap'] as const;

export type FlexWrapOption = (typeof FlexWrapPropKeys)[number];

export type ResponsiveFlexWrapProps = Partial<
  Record<FlexWrapOption, ResponsiveAttribute<FlexWrap>>
>;

/**
 * Flex Justify Content:
 * List of allowed flex justify content values.
 * Keep it sync with @scss $flex-justify-content-values in variables/_flex.scss
 */
export type FlexJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between';

export const FlexJustifyContentPropKeys = ['justifyContent'] as const;

export type FlexJustifyContentOption =
  (typeof FlexJustifyContentPropKeys)[number];

export type ResponsiveFlexJustifyContentProps = Partial<
  Record<FlexJustifyContentOption, ResponsiveAttribute<FlexJustifyContent>>
>;

/**
 * Flex Align Items:
 * List of allowed flex align items values.
 * Keep it sync with @scss $flex-align-items-values in variables/_flex.scss
 */
export type FlexAlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch';

export const FlexAlignItemsPropKeys = ['alignItems'] as const;

export type FlexAlignItemsOption = (typeof FlexAlignItemsPropKeys)[number];

export type ResponsiveFlexAlignItemsProps = Partial<
  Record<FlexAlignItemsOption, ResponsiveAttribute<FlexAlignItems>>
>;

/**
 * Flex Align Self:
 * List of allowed flex align self values.
 * Keep it sync with @scss $flex-align-self-values in variables/_flex.scss
 */
export type FlexAlignSelf =
  | 'auto'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch';

export const FlexAlignSelfPropKeys = ['alignSelf'] as const;

export type FlexAlignSelfOption = (typeof FlexAlignSelfPropKeys)[number];

export type ResponsiveFlexAlignSelfProps = Partial<
  Record<FlexAlignSelfOption, ResponsiveAttribute<FlexAlignSelf>>
>;
