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
  type PaddingOption,
  PaddingPropKeys,
  type ResponsivePaddingProps,
} from '@/types/style/spacer.types';

import { getResponsiveClasses } from './responsive.utils';

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

function filterPaddingProps(
  props: UnknownComponentProps
): ResponsivePaddingProps {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) =>
      PaddingPropKeys.includes(key as PaddingOption)
    )
  );
}

export function getPaddingClasses(
  componentProps: UnknownComponentProps
): string {
  const props = filterPaddingProps(componentProps);
  return getResponsiveClasses({
    props,
    prefixMap,
    css,
  });
}
