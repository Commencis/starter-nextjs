'use client';

import type { PropsWithChildren, ReactElement } from 'react';
import { Activity } from 'react';

import { useBreakpoint } from '@/hooks/useBreakpoint';

export type ExoticActivityProps = PropsWithChildren<{
  condition?: boolean;
  showOnXs?: boolean;
  showOnMd?: boolean;
  showOnLg?: boolean;
}>;

export function ExoticActivity({
  condition = true,
  showOnXs = false,
  showOnMd = false,
  showOnLg = false,
  children,
}: ExoticActivityProps): ReactElement {
  const isXs = useBreakpoint({ down: 'md' });
  const isMd = useBreakpoint({ between: { min: 'md', max: 'lg' } });
  const isLg = useBreakpoint({ up: 'lg' });

  const isVisible =
    condition &&
    ((showOnXs && isXs) || (showOnMd && isMd) || (showOnLg && isLg));

  return (
    <Activity mode={isVisible ? 'visible' : 'hidden'}>{children}</Activity>
  );
}
