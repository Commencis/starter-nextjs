'use client';

import type { ReactElement } from 'react';

import { DEFAULT_LOCALE } from '@/constants';

import { Error404 } from '@/components/error';

export default function NotFoundPage(): ReactElement {
  return (
    <html lang={DEFAULT_LOCALE}>
      <body>
        <Error404 />
      </body>
    </html>
  );
}
