import type { ReactElement } from 'react';

import { Box, Button, Text } from '@/components/ui';

export function HomePage(): ReactElement {
  return (
    <Box
      display="flex"
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="full"
      gap={12}
    >
      <Text as="h1" variant="body-lg">
        Welcome to the Commencis Starter
      </Text>
      <Text as="h1" variant="heading-2xl">
        Next.js Template
      </Text>

      <Button variant="primary" size="md">
        Start Building
      </Button>
    </Box>
  );
}
