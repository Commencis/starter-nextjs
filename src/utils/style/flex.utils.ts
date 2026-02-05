import type { UnknownComponentProps } from '@/types/common.types';
import type {
  FlexAlignItemsOption,
  FlexAlignSelfOption,
  FlexJustifyContentOption,
  FlexWrapOption,
  ResponsiveFlexAlignItemsProps,
  ResponsiveFlexAlignSelfProps,
  ResponsiveFlexJustifyContentProps,
  ResponsiveFlexWrapProps,
} from '@/types/style/flex.types';
import {
  FlexAlignItemsPropKeys,
  FlexAlignSelfPropKeys,
  type FlexDirectionOption,
  FlexDirectionPropKeys,
  FlexJustifyContentPropKeys,
  FlexWrapPropKeys,
  type ResponsiveFlexDirectionProps,
} from '@/types/style/flex.types';

import { getResponsiveClasses } from './responsive.utils';

import css from '@/styles/modules/flex.module.scss';

const flexDirectionPrefixMap: Record<FlexDirectionOption, string> = {
  direction: 'flex-di',
};

function filterFlexDirectionProps(
  props: UnknownComponentProps
): ResponsiveFlexDirectionProps {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) =>
      FlexDirectionPropKeys.includes(key as FlexDirectionOption)
    )
  );
}

export function getFlexDirectionClasses(
  componentProps: UnknownComponentProps
): string {
  const props = filterFlexDirectionProps(componentProps);
  return getResponsiveClasses({
    props,
    prefixMap: flexDirectionPrefixMap,
    css,
  });
}

const flexWrapPrefixMap: Record<FlexWrapOption, string> = {
  wrap: 'flex-wr',
};

function filterFlexWrapProps(
  props: UnknownComponentProps
): ResponsiveFlexWrapProps {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) =>
      FlexWrapPropKeys.includes(key as FlexWrapOption)
    )
  );
}

export function getFlexWrapClasses(
  componentProps: UnknownComponentProps
): string {
  const props = filterFlexWrapProps(componentProps);
  return getResponsiveClasses({
    props,
    prefixMap: flexWrapPrefixMap,
    css,
  });
}

const flexJustifyContentPrefixMap: Record<FlexJustifyContentOption, string> = {
  justifyContent: 'flex-jc',
};

function filterFlexJustifyContentProps(
  props: UnknownComponentProps
): ResponsiveFlexJustifyContentProps {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) =>
      FlexJustifyContentPropKeys.includes(key as FlexJustifyContentOption)
    )
  );
}

export function getFlexJustifyContentClasses(
  componentProps: UnknownComponentProps
): string {
  const props = filterFlexJustifyContentProps(componentProps);
  return getResponsiveClasses({
    props,
    prefixMap: flexJustifyContentPrefixMap,
    css,
  });
}

const flexAlignItemsPrefixMap: Record<FlexAlignItemsOption, string> = {
  alignItems: 'flex-ai',
};

function filterFlexAlignItemsProps(
  props: UnknownComponentProps
): ResponsiveFlexAlignItemsProps {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) =>
      FlexAlignItemsPropKeys.includes(key as FlexAlignItemsOption)
    )
  );
}

export function getFlexAlignItemsClasses(
  componentProps: UnknownComponentProps
): string {
  const props = filterFlexAlignItemsProps(componentProps);
  return getResponsiveClasses({
    props,
    prefixMap: flexAlignItemsPrefixMap,
    css,
  });
}

const flexAlignSelfPrefixMap: Record<FlexAlignSelfOption, string> = {
  alignSelf: 'flex-as',
};

function filterFlexAlignSelfProps(
  props: UnknownComponentProps
): ResponsiveFlexAlignSelfProps {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) =>
      FlexAlignSelfPropKeys.includes(key as FlexAlignSelfOption)
    )
  );
}

export function getFlexAlignSelfClasses(
  componentProps: UnknownComponentProps
): string {
  const props = filterFlexAlignSelfProps(componentProps);
  return getResponsiveClasses({
    props,
    prefixMap: flexAlignSelfPrefixMap,
    css,
  });
}
