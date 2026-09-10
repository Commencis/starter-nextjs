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
    isFullWidth: {
      control: 'boolean',
      description: 'Whether the button fills its container',
    },
    isRounded: {
      control: 'boolean',
      description: 'Whether the button has fully rounded corners',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {(['primary', 'secondary', 'tertiary', 'link'] as const).map(
        (variant) => (
          <Button key={variant} {...args} variant={variant}>
            {variant}
          </Button>
        )
      )}
    </div>
  ),
  args: {
    children: 'Button',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Continue',
    trailingIcon: <ChevronRightIcon color="white" />,
  },
};
