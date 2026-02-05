import type { PropsWithChildren, ReactElement } from 'react';

export function MainLayout({ children }: PropsWithChildren): ReactElement {
  return <main>{children}</main>;
}
