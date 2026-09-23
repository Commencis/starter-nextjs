import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { AdaptiveLink } from './AdaptiveLink';

const meta: Meta<typeof AdaptiveLink> = {
  title: 'Components/UI/AdaptiveLink',
  component: AdaptiveLink,
  argTypes: {
    href: {
      control: 'text',
      description:
        'Destination URL (internal paths use Next.js Link, external URLs use Anchor)',
    },
    target: {
      control: 'select',
      options: ['_blank'],
      description: 'Where to open external destinations',
    },
    rel: {
      control: 'text',
      description: 'Link relationship (external links)',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible name when link text is not descriptive',
    },
  },
};

export default meta;

type Story = StoryObj<typeof AdaptiveLink>;

export const External: Story = {
  args: {
    children: 'Visit Commencis',
    href: 'https://www.commencis.com',
    target: '_blank',
    rel: 'noopener',
  },
};

export const Internal: Story = {
  args: {
    children: 'Go to home',
    href: '/',
  },
};
