'use client';

import type { PropsWithChildren, ReactElement } from 'react';
import { Activity } from 'react';

import { useBreakpointRanges } from '@/hooks/useBreakpointRanges';

export type ExoticActivityProps = PropsWithChildren<{
  condition?: boolean;
  showOnSm?: boolean;
  showOnMd?: boolean;
  showOnLg?: boolean;
}>;

export function ExoticActivity({
  condition = true,
  showOnSm = false,
  showOnMd = false,
  showOnLg = false,
  children,
}: ExoticActivityProps): ReactElement {
  const { isSm, isMd, isLg } = useBreakpointRanges();
  const isVisible =
    condition &&
    ((showOnSm && isSm) || (showOnMd && isMd) || (showOnLg && isLg));

  return (
    <Activity mode={isVisible ? 'visible' : 'hidden'}>{children}</Activity>
  );
}
