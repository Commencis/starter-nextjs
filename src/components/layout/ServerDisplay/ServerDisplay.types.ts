import type { ReactElement } from 'react';

type BaseProps = {
  children: ReactElement;
};

type DisplayProps =
  | { showOnSm: true; showOnMd?: boolean; showOnLg?: boolean }
  | { showOnSm?: boolean; showOnMd: true; showOnLg?: boolean }
  | { showOnSm?: boolean; showOnMd?: boolean; showOnLg: true };

export type ServerDisplayProps = BaseProps & DisplayProps;
