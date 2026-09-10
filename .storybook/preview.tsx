import type { ReactElement } from 'react';

import type { Preview } from '@storybook/nextjs-vite';

import { StoryCanvas } from '@/stories/components/StoryCanvas/StoryCanvas';

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    layout: 'fullscreen',
    options: {
      storySort: {
        order: ['Foundations', ['Getting Started', 'Colors', 'Iconography']],
      },
    },
  },
  decorators: [
    (Story, { viewMode }): ReactElement => (
      <StoryCanvas fullHeight={viewMode !== 'docs'}>
        <Story />
      </StoryCanvas>
    ),
  ],
};

export default preview;
