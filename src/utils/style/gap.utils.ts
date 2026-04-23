import { type GapOption, GapPropKeys } from '@/types/style/spacer.types';

import { responsiveStyleResolver } from './responsive.utils';

import css from '@/styles/modules/gap.module.scss';

const prefixMap: Record<GapOption, string> = {
  gap: 'gap',
};

export const getGapClasses = responsiveStyleResolver({
  keys: GapPropKeys,
  prefixMap,
  css,
});
