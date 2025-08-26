'use client';

import type { ReactElement } from 'react';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';

import type {
  DynamicIconReturnType,
  IconProps,
} from '@/components/common/Icon/Icon.types';

export const Icon = ({
  name,
  size,
  color,
  ...props
}: IconProps): ReactElement => {
  const IconComponent = useMemo(
    (): DynamicIconReturnType =>
      dynamic(() => import(`@/assets/icons/${name}.svg`), { ssr: false }),
    [name]
  );

  return (
    <IconComponent
      width={`${size}px`}
      height={`${size}px`}
      fill={color}
      {...props}
    />
  );
};
