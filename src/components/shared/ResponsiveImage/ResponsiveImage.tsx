import type { ReactElement } from 'react';

import clsx from 'clsx';

import type { ResponsiveAttribute } from '@/types/style/breakpoint.types';
import { IMAGE_SRC_BREAKPOINTS } from '@/constants/breakpoint.constants';

import { getBreakpointMediaQuery } from './ResponsiveImage.utils';

import css from './ResponsiveImage.module.scss';

export type ResponsiveImageProps = {
  src: ResponsiveAttribute<string>;
  alt: string;
  height?: 'auto' | 'fill';
};

export function ResponsiveImage({
  src,
  alt,
  height = 'fill',
}: ResponsiveImageProps): ReactElement {
  const imageClasses = clsx(css.image, css[height]);

  if (typeof src === 'string') {
    return <img alt={alt} src={src} className={imageClasses} />;
  }

  const fallbackSrc = src.xs ?? src.md ?? src.lg;

  return (
    <picture className={css.picture}>
      {IMAGE_SRC_BREAKPOINTS.map((breakpoint) => {
        const source = src[breakpoint];

        if (!source) {
          return;
        }

        return (
          <source
            key={breakpoint}
            media={getBreakpointMediaQuery(breakpoint)}
            srcSet={source}
          />
        );
      })}
      <img alt={alt} src={fallbackSrc} className={imageClasses} />
    </picture>
  );
}
