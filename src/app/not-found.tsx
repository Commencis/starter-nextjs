'use client';

import { ReactElement } from 'react';

import { DEFAULT_LOCALE } from '@/constants';

import { Error404 } from '@/components/error';

const NotFoundPage = (): ReactElement => {
  return (
    <html lang={DEFAULT_LOCALE}>
      <body>
        <Error404 />
      </body>
    </html>
  );
};

export default NotFoundPage;
