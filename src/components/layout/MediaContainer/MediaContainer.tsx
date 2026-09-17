import type { CSSProperties, ReactElement } from 'react';

import type { WithStrictChildren } from '@/types/common.types';

import css from './MediaContainer.module.scss';

export type MediaContainerProps = WithStrictChildren & {
  /** Aspect ratio, for example `16 / 9`, `4 / 3`, `1920 / 1080` */
  ratio?: number;
  borderRadius?: CSSProperties['borderRadius'];
};

export function MediaContainer({
  children,
  ratio = 1,
  borderRadius,
}: MediaContainerProps): ReactElement {
  const rootStyle = {
    '--mc-ratio': ratio,
    borderRadius,
  } as CSSProperties;

  return (
    <div className={css.root} style={rootStyle}>
      {children}
    </div>
  );
}
