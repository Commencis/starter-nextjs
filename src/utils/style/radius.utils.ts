import {
  type BorderRadiusOption,
  BorderRadiusPropKeys,
} from '@/types/style/radius.types';

import { responsiveStyleResolver } from './responsive.utils';

import css from '@/styles/modules/radius.module.scss';

const prefixMap: Record<BorderRadiusOption, string> = {
  borderRadius: 'rounded',
};

export const getBorderRadiusClasses = responsiveStyleResolver({
  keys: BorderRadiusPropKeys,
  prefixMap,
  css,
});
