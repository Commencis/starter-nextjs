import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Divider } from './Divider';
import type { DividerColor } from './Divider.types';

const colors: DividerColor[] = ['brand', 'primary', 'secondary', 'tertiary'];

const meta: Meta<typeof Divider> = {
  title: 'Components/Layout/Divider',
  component: Divider,
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Divider orientation',
    },
    color: {
      control: 'select',
      options: colors,
      description: 'Semantic stroke color',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    color: 'primary',
  },
  render: (args) => (
    <div style={{ display: 'flex', width: '100%' }}>
      <Divider {...args} />
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '100%',
      }}
    >
      {colors.map((color) => (
        <div
          key={color}
          style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
        >
          <span>{color}</span>
          <div style={{ display: 'flex' }}>
            <Divider {...args} color={color} />
          </div>
        </div>
      ))}
    </div>
  ),
  args: {
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    color: 'primary',
  },
  render: (args) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'stretch',
        gap: '16px',
        height: '120px',
      }}
    >
      <span>Left</span>
      <Divider {...args} />
      <span>Right</span>
    </div>
  ),
};
