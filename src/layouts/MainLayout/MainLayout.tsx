import type { PropsWithChildren, ReactElement } from 'react';

import { Box } from '@/components/ui';

export function MainLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <Box as="main" height="full">
      {children}
    </Box>
  );
}
