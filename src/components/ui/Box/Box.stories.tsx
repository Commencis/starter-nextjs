import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'Components/UI/Box',
  component: Box,
  argTypes: {
    as: {
      control: 'select',
      options: [
        'div',
        'section',
        'span',
        'ul',
        'ol',
        'li',
        'main',
        'article',
        'header',
        'footer',
        'nav',
      ],
      description: 'HTML element to render',
    },
    display: {
      control: 'select',
      options: ['block', 'inline-block', 'flex', 'inline-flex', 'grid'],
    },
    direction: {
      control: 'select',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    justifyContent: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'space-between'],
    },
    alignItems: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'stretch'],
    },
    gap: {
      control: 'select',
      options: [0, 2, 4, 6, 8, 10, 12, 14, 16, 24, 32, 40, 48, 64],
    },
    padding: {
      control: 'select',
      options: [0, 2, 4, 6, 8, 10, 12, 14, 16, 24, 32, 40, 48, 64],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: 'Box content',
    padding: 16,
  },
  render: (args) => (
    <div style={{ border: '1px dashed #94a3b8' }}>
      <Box {...args} />
    </div>
  ),
};

export const FlexLayout: Story = {
  args: {
    children: (
      <>
        <span>First</span>
        <span>Second</span>
        <span>Third</span>
      </>
    ),
    display: 'flex',
    gap: 16,
    padding: 16,
  },
};
