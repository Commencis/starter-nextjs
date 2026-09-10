import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Anchor } from './Anchor';

const meta: Meta<typeof Anchor> = {
  title: 'Components/UI/Anchor',
  component: Anchor,
  argTypes: {
    href: {
      control: 'text',
      description: 'Destination URL',
    },
    target: {
      control: 'select',
      options: ['_blank', '_self', '_parent', '_top'],
      description: 'Where to open the destination',
    },
    rel: {
      control: 'text',
      description: 'Link relationship',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
  args: {
    children: 'Visit Commencis',
    href: 'https://www.commencis.com',
  },
};
