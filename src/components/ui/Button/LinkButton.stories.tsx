import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ChevronRightIcon } from '@/components/icons';

import { LinkButton } from './LinkButton';

const meta: Meta<typeof LinkButton> = {
  title: 'Components/UI/LinkButton',
  component: LinkButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'link'],
      description: 'Link button variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Link button size',
    },
    isFullWidth: {
      control: 'boolean',
      description: 'Whether the link fills its container',
    },
    isRounded: {
      control: 'boolean',
      description: 'Whether the link has fully rounded corners',
    },
  },
};

export default meta;

type Story = StoryObj<typeof LinkButton>;

export const Default: Story = {
  args: {
    children: 'Go to home',
    href: '/',
    variant: 'primary',
    size: 'md',
  },
};

export const External: Story = {
  args: {
    children: 'Visit Commencis',
    href: 'https://www.commencis.com',
    trailingIcon: <ChevronRightIcon />,
    variant: 'secondary',
  },
};
