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
