import type { ReactElement } from 'react';

import { Container } from '@/components/layout';
import { Box, LinkButton, Text } from '@/components/ui';

export type ErrorContentStatusCode = 404 | 500;

type ErrorContentLabels = {
  title: string;
  description: string;
};

const errorContentByStatus: Record<ErrorContentStatusCode, ErrorContentLabels> =
  {
    404: {
      title: 'Page not found',
      description:
        'The page you are looking for does not exist or may have been moved.',
    },
    500: {
      title: 'Something went wrong',
      description:
        'An unexpected error occurred. Please try again or return to the home page.',
    },
  };

export type ErrorContentProps = {
  statusCode: ErrorContentStatusCode;
};

export function ErrorContent({ statusCode }: ErrorContentProps): ReactElement {
  const { title, description } = errorContentByStatus[statusCode];

  return (
    <Container
      display="flex"
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={24}
      height="full"
      paddingY={32}
      size="md"
    >
      <Box display="flex" direction="column" alignItems="center" gap={12}>
        <Text as="p" variant="label-1" color="brand" align="center">
          {statusCode}
        </Text>
        <Text as="h1" variant="display-2" color="primary" align="center">
          {title}
        </Text>
        <Text as="p" variant="body-1" color="secondary" align="center">
          {description}
        </Text>
      </Box>

      <LinkButton href="/" variant="primary" size="md">
        Go to homepage
      </LinkButton>
    </Container>
  );
}
