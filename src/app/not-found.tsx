import type { ReactElement } from 'react';

import { ErrorContent } from '@/components/shared';

export default function NotFoundPage(): ReactElement {
  return <ErrorContent statusCode={404} />;
}
