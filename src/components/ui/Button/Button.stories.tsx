import type { ReactElement } from 'react';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ChevronRightIcon } from '@/components/icons';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'link'],
      description: 'Button variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    width: {
      control: 'select',
      options: ['auto', 'full', 'fit-content'],
      description: 'Button width',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    label: {
      control: 'text',
      description: 'Button label text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {(['primary', 'secondary', 'tertiary', 'link'] as const).map(
        (variant) => (
          <Button key={variant} {...args} variant={variant} label={variant} />
        )
      )}
    </div>
  ),
  args: {
    label: 'Button',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Continue',
    trailingIcon: <ChevronRightIcon color="white" />,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full width button',
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
