'use client';

import type { ReactElement } from 'react';
import { Activity } from 'react';

import type { ClientDisplayProps } from '@/components/layout/ClientDisplay/ClientDisplay.types';

import { Breakpoint, useMediaQuery } from '@/hooks';

export const ClientDisplay = ({
  children,
  showOnSm,
  showOnMd,
  showOnLg,
  condition,
}: ClientDisplayProps): ReactElement => {
  const isSm = useMediaQuery({ down: Breakpoint.Md });
  const isMd = useMediaQuery({
    between: { min: Breakpoint.Md, max: Breakpoint.Lg },
  });
  const isLg = useMediaQuery({ up: Breakpoint.Lg });
  const hasMediaQueryValues = isSm !== null || isMd !== null || isLg !== null;

  const mediaQueryVisible = hasMediaQueryValues
    ? (showOnSm && isSm) || (showOnMd && isMd) || (showOnLg && isLg)
    : showOnSm;

  const isVisible = (condition ?? true) && mediaQueryVisible;

  return (
    <Activity mode={isVisible ? 'visible' : 'hidden'}>{children}</Activity>
  );
};

export default ClientDisplay;
