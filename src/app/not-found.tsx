'use client';

import type { ReactElement } from 'react';

import { Error404 } from '@/components/error';

export default function NotFoundPage(): ReactElement {
  return (
    <html lang="en">
      <body>
        <Error404 />
      </body>
    </html>
  );
}
