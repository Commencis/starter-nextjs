import type { UnknownComponentProps } from '@/types/common.types';
import {
  type GapOption,
  GapPropKeys,
  type ResponsiveGapProps,
} from '@/types/style/spacer.types';

import { getResponsiveClasses } from './responsive.utils';

import css from '@/styles/modules/gap.module.scss';

const prefixMap: Record<GapOption, string> = {
  gap: 'gap',
};

function filterGapProps(props: UnknownComponentProps): ResponsiveGapProps {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) =>
      GapPropKeys.includes(key as GapOption)
    )
  );
}

export function getGapClasses(componentProps: UnknownComponentProps): string {
  const props = filterGapProps(componentProps);
  return getResponsiveClasses({
    props,
    prefixMap,
    css,
  });
}
