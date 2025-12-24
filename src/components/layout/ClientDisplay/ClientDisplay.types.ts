import type { ReactElement } from 'react';

type BaseProps = {
  children: ReactElement;
  condition?: boolean;
};

type DisplayProps =
  | { showOnSm: true; showOnMd?: boolean; showOnLg?: boolean }
  | { showOnSm?: boolean; showOnMd: true; showOnLg?: boolean }
  | { showOnSm?: boolean; showOnMd?: boolean; showOnLg: true };

export type ClientDisplayProps = BaseProps & DisplayProps;
