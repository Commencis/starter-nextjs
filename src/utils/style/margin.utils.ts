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
  type MarginOption,
  MarginPropKeys,
  type ResponsiveMarginProps,
} from '@/types/style/spacer.types';

import { getResponsiveClasses } from './responsive.utils';

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

function filterMarginProps(
  props: UnknownComponentProps
): ResponsiveMarginProps {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) =>
      MarginPropKeys.includes(key as MarginOption)
    )
  );
}

export function getMarginClasses(
  componentProps: UnknownComponentProps
): string {
  const props = filterMarginProps(componentProps);
  return getResponsiveClasses({
    props,
    prefixMap,
    css,
  });
}
