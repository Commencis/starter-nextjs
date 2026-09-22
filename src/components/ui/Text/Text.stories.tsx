import type { CSSProperties, ReactElement } from 'react';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Text } from './Text';

const variants = [
  'display-1',
  'display-2',
  'display-3',
  'heading-1',
  'heading-2',
  'heading-3',
  'heading-4',
  'label-1',
  'label-2',
  'label-3',
  'body-1',
  'body-2',
  'body-3',
  'body-4',
] as const;

const STORY_MAX_WIDTH = '28rem';

const storyCanvasStyle: CSSProperties = {
  boxSizing: 'border-box',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '1rem',
};

const storySurfaceStyle: CSSProperties = {
  boxSizing: 'border-box',
  width: '100%',
  maxWidth: STORY_MAX_WIDTH,
};

const meta: Meta<typeof Text> = {
  title: 'Components/UI/Text',
  component: Text,
  decorators: [
    (Story): ReactElement => (
      <div style={storyCanvasStyle}>
        <div style={storySurfaceStyle}>
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    id: {
      control: 'text',
      description: 'Optional element id',
    },
    as: {
      control: 'select',
      options: ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'HTML element to render',
    },
    color: {
      control: 'select',
      options: [
        'brand',
        'primary',
        'secondary',
        'tertiary',
        'black',
        'white',
        'inherit',
      ],
      description: 'Semantic text color',
    },
    variant: {
      control: 'select',
      options: variants,
      description: 'Typography variant',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
    fontWeight: {
      control: 'select',
      options: ['regular', 'semi-bold', 'bold'],
      description: 'Font weight',
    },
    maxLine: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Maximum visible line count (line clamp)',
    },
    marginTop: {
      control: 'select',
      options: [0, 2, 4, 6, 8, 10, 12, 14, 16, 32, 40, 64],
      description: 'Top margin (spacing token)',
    },
    marginBottom: {
      control: 'select',
      options: [0, 2, 4, 6, 8, 10, 12, 14, 16, 32, 40, 64],
      description: 'Bottom margin (spacing token)',
    },
    children: {
      control: 'text',
      description: 'Text content',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    as: 'p',
    children: 'Text content',
    variant: 'display-1',
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {variants.map((variant) => (
        <Text key={variant} {...args} variant={variant}>
          {variant}
        </Text>
      ))}
    </div>
  ),
  args: {
    children: 'Text content',
  },
};
