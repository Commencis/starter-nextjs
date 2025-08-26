'use client';

import type { ReactElement } from 'react';

import { DEFAULT_LOCALE } from '@/constants';

import { Error500 } from '@/components/error';

const GlobalErrorPage = (): ReactElement => {
  return (
    <html lang={DEFAULT_LOCALE}>
      <body>
        <Error500 />
      </body>
    </html>
  );
};

export default GlobalErrorPage;
