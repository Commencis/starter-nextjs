import type { PropsWithChildren, ReactElement } from 'react';
import { useLayoutEffect } from 'react';

import clsx from 'clsx';

import { FontRoboto } from '@/lib/fonts';

import '@/styles/globals.scss';
import css from './StoryCanvas.module.scss';

type StoryCanvasProps = PropsWithChildren & {
  fullHeight?: boolean;
};

export function StoryCanvas({
  children,
  fullHeight = true,
}: StoryCanvasProps): ReactElement {
  useLayoutEffect(() => {
    const { className } = FontRoboto;

    document.body.classList.add(className);

    return (): void => {
      document.body.classList.remove(className);
    };
  }, []);

  return (
    <div className={clsx(css.canvas, fullHeight && css.minHeightFull)}>
      {children}
    </div>
  );
}
