import {
  type PaddingOption,
  PaddingPropKeys,
} from '@/types/style/spacing.types';

import { responsiveStyleResolver } from './responsive.utils';

import css from '@/styles/modules/padding.module.scss';

const prefixMap: Record<PaddingOption, string> = {
  padding: 'p',
  paddingX: 'px',
  paddingY: 'py',
  paddingTop: 'pt',
  paddingBottom: 'pb',
  paddingLeft: 'pl',
  paddingRight: 'pr',
};

export const getPaddingClasses = responsiveStyleResolver({
  keys: PaddingPropKeys,
  prefixMap,
  css,
});
