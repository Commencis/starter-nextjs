import type { ReactElement } from 'react';

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
    width: {
      control: 'select',
      options: ['auto', 'full', 'fit-content'],
      description: 'Link button width',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the link button is disabled',
    },
    label: {
      control: 'text',
      description: 'Link button label text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof LinkButton>;

export const Default: Story = {
  args: {
    label: 'Go to home',
    href: '/',
    variant: 'primary',
    size: 'md',
  },
};

export const External: Story = {
  args: {
    label: 'Visit Commencis',
    href: 'https://www.commencis.com',
    trailingIcon: <ChevronRightIcon />,
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled link',
    href: '/',
    variant: 'primary',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full width link',
    href: '/',
    width: 'full',
  },
  decorators: [
    (Story): ReactElement => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};
