'use client';

import type { ReactElement } from 'react';

import { ErrorContent } from '@/components/shared';

export default function GlobalErrorPage(): ReactElement {
  return (
    <html lang="en">
      <body>
        <ErrorContent statusCode={500} />
      </body>
    </html>
  );
}
