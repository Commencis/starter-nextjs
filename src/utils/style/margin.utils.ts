import { type MarginOption, MarginPropKeys } from '@/types/style/spacing.types';

import { responsiveStyleResolver } from './responsive.utils';

import css from '@/styles/modules/margin.module.scss';

const prefixMap: Record<MarginOption, string> = {
  margin: 'm',
  marginX: 'mx',
  marginY: 'my',
  marginTop: 'mt',
  marginBottom: 'mb',
  marginLeft: 'ml',
  marginRight: 'mr',
};

export const getMarginClasses = responsiveStyleResolver({
  keys: MarginPropKeys,
  prefixMap,
  css,
});
