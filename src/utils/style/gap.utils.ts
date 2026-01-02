/*
 * Copyright 2017-2025 Commencis. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Commencis.
 * Any reproduction of this material must contain this notice.
 */

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
