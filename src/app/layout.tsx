import type { PropsWithChildren, ReactElement } from 'react';
import type { Metadata, Viewport } from 'next';

import { FontRoboto } from '@/lib/fonts';
import { buildPageMetadata, buildPageViewport } from '@/lib/seo/metadata/';

import { MainLayout } from '@/layouts';

import '@/styles/globals.scss';

export const metadata: Metadata = buildPageMetadata();
export const viewport: Viewport = buildPageViewport();

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
