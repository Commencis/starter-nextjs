import type { UnknownComponentProps } from '@/types/common.types';
import type {
  DisplayOption,
  DisplayProps,
  HeightOption,
  OverflowOption,
  OverflowProps,
  PositionOption,
  PositionProps,
  ResponsiveHeightProps,
  ResponsiveWidthProps,
  WidthOption,
} from '@/types/style/layout.types';
import {
  DisplayPropKeys,
  HeightPropKeys,
  OverflowPropKeys,
  PositionPropKeys,
  WidthPropKeys,
} from '@/types/style/layout.types';

import { getResponsiveClasses } from './responsive.utils';

import css from '@/styles/modules/layout.module.scss';

/**
 * Display Utilities
 */

const displayPrefixMap: Record<DisplayOption, string> = {
  display: 'd',
};

function filterDisplayProps(props: UnknownComponentProps): DisplayProps {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) =>
      DisplayPropKeys.includes(key as DisplayOption)
    )
  );
}

export function getDisplayClasses(
  componentProps: UnknownComponentProps
): string {
  const props = filterDisplayProps(componentProps);
  return getResponsiveClasses({
    props,
    prefixMap: displayPrefixMap,
    css,
  });
}

/**
 * Position Utilities
 */

const positionPrefixMap: Record<PositionOption, string> = {
  position: 'pos',
};

function filterPositionProps(props: UnknownComponentProps): PositionProps {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) =>
      PositionPropKeys.includes(key as PositionOption)
    )
  );
}

export function getPositionClasses(
  componentProps: UnknownComponentProps
): string {
  const props = filterPositionProps(componentProps);
  return getResponsiveClasses({
    props,
    prefixMap: positionPrefixMap,
    css,
  });
}

/**
 * Overflow Utilities
 */

const overflowPrefixMap: Record<OverflowOption, string> = {
  overflow: 'of',
};

function filterOverflowProps(props: UnknownComponentProps): OverflowProps {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) =>
      OverflowPropKeys.includes(key as OverflowOption)
    )
  );
}

export function getOverflowClasses(
  componentProps: UnknownComponentProps
): string {
  const props = filterOverflowProps(componentProps);
  return getResponsiveClasses({
    props,
    prefixMap: overflowPrefixMap,
    css,
  });
}

/**
 * Width Utilities
 */

const widthPrefixMap: Record<WidthOption, string> = {
  width: 'w',
};

function filterWidthProps(props: UnknownComponentProps): ResponsiveWidthProps {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) =>
      WidthPropKeys.includes(key as WidthOption)
    )
  );
}

export function getWidthClasses(componentProps: UnknownComponentProps): string {
  const props = filterWidthProps(componentProps);
  return getResponsiveClasses({
    props,
    prefixMap: widthPrefixMap,
    css,
  });
}

/**
 * Height Utilities
 */

const heightPrefixMap: Record<HeightOption, string> = {
  height: 'h',
};

function filterHeightProps(
  props: UnknownComponentProps
): ResponsiveHeightProps {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) =>
      HeightPropKeys.includes(key as HeightOption)
    )
  );
}

export function getHeightClasses(
  componentProps: UnknownComponentProps
): string {
  const props = filterHeightProps(componentProps);
  return getResponsiveClasses({
    props,
    prefixMap: heightPrefixMap,
    css,
  });
}
