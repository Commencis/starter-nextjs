import type { ReactElement } from 'react';

export type UnknownComponentProps = Record<string, unknown>;

export type UnknownStyleProps = Partial<UnknownComponentProps>;

export type WithOptionalId = { id?: string };

export type WithRequiredId = { id: string };

export type WithStrictChildren = {
  children: ReactElement | ReactElement[];
};
