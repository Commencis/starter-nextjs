import type { ReactElement } from 'react';

import { Container } from '@/components/layout';
import { Button, Text } from '@/components/ui';

export function Home(): ReactElement {
  return (
    <Container
      display="flex"
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="full"
      gap={12}
    >
      <Text as="h1" variant="body-2">
        Welcome to the Commencis Starter
      </Text>
      <Text as="h1" variant="heading-2">
        Next.js Template
      </Text>
      <Button variant="primary" size="md">
        Start Building
      </Button>
    </Container>
  );
}
