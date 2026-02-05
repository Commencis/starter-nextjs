import type { PropsWithChildren, ReactElement } from 'react';

import { FontRoboto } from '@/lib/fonts';

import { MainLayout } from '@/layouts';

import '@/styles/globals.scss';

export default function RootLayout({
  children,
}: PropsWithChildren): ReactElement {
  return (
    <html lang="en" className={FontRoboto.variable}>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
