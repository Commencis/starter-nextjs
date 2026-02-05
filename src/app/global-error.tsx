'use client';

import type { ReactElement } from 'react';

import { Error500 } from '@/components/shared';

export default function GlobalErrorPage(): ReactElement {
  return (
    <html lang="en">
      <body>
        <Error500 />
      </body>
    </html>
  );
}
