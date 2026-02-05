import type { ReactElement } from 'react';

import { Box, Button, Text } from '@/components/ui';

export function HomePage(): ReactElement {
  return (
    <Box>
      <Text as="h1">Next.js Starter</Text>

      <Button variant="primary" size="md">
        Click Me
      </Button>
    </Box>
  );
}
