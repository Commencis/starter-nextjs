/*
 * Copyright 2017-2025 Commencis. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Commencis.
 * Any reproduction of this material must contain this notice.
 */

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
