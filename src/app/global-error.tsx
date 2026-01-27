'use client';

import type { ReactElement } from 'react';

import { Error500 } from '@/components/error';

export default function GlobalErrorPage(): ReactElement {
  return (
    <html lang="en">
      <body>
        <Error500 />
      </body>
    </html>
  );
}
