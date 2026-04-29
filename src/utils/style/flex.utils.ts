import type {
  FlexAlignItemsOption,
  FlexAlignSelfOption,
  FlexBasisOption,
  FlexDirectionOption,
  FlexGrowOption,
  FlexJustifyContentOption,
  FlexShrinkOption,
  FlexWrapOption,
} from '@/types/style/flex.types';
import {
  FlexAlignItemsPropKeys,
  FlexAlignSelfPropKeys,
  FlexBasisPropKeys,
  FlexDirectionPropKeys,
  FlexGrowPropKeys,
  FlexJustifyContentPropKeys,
  FlexShrinkPropKeys,
  FlexWrapPropKeys,
} from '@/types/style/flex.types';

import { responsiveStyleResolver } from './responsive.utils';

import css from '@/styles/modules/flex.module.scss';

const flexDirectionPrefixMap: Record<FlexDirectionOption, string> = {
  direction: 'flex-di',
};

export const getFlexDirectionClasses = responsiveStyleResolver({
  keys: FlexDirectionPropKeys,
  prefixMap: flexDirectionPrefixMap,
  css,
});

const flexWrapPrefixMap: Record<FlexWrapOption, string> = {
  wrap: 'flex-wr',
};

export const getFlexWrapClasses = responsiveStyleResolver({
  keys: FlexWrapPropKeys,
  prefixMap: flexWrapPrefixMap,
  css,
});

const flexJustifyContentPrefixMap: Record<FlexJustifyContentOption, string> = {
  justifyContent: 'flex-jc',
};

export const getFlexJustifyContentClasses = responsiveStyleResolver({
  keys: FlexJustifyContentPropKeys,
  prefixMap: flexJustifyContentPrefixMap,
  css,
});

const flexAlignItemsPrefixMap: Record<FlexAlignItemsOption, string> = {
  alignItems: 'flex-ai',
};

export const getFlexAlignItemsClasses = responsiveStyleResolver({
  keys: FlexAlignItemsPropKeys,
  prefixMap: flexAlignItemsPrefixMap,
  css,
});

const flexAlignSelfPrefixMap: Record<FlexAlignSelfOption, string> = {
  alignSelf: 'flex-as',
};

export const getFlexAlignSelfClasses = responsiveStyleResolver({
  keys: FlexAlignSelfPropKeys,
  prefixMap: flexAlignSelfPrefixMap,
  css,
});

const flexBasisPrefixMap: Record<FlexBasisOption, string> = {
  flexBasis: 'flex-bs',
};

export const getFlexBasisClasses = responsiveStyleResolver({
  keys: FlexBasisPropKeys,
  prefixMap: flexBasisPrefixMap,
  css,
});

const flexGrowPrefixMap: Record<FlexGrowOption, string> = {
  flexGrow: 'flex-gr',
};

export const getFlexGrowClasses = responsiveStyleResolver({
  keys: FlexGrowPropKeys,
  prefixMap: flexGrowPrefixMap,
  css,
});

const flexShrinkPrefixMap: Record<FlexShrinkOption, string> = {
  flexShrink: 'flex-sh',
};

export const getFlexShrinkClasses = responsiveStyleResolver({
  keys: FlexShrinkPropKeys,
  prefixMap: flexShrinkPrefixMap,
  css,
});
