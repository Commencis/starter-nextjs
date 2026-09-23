import type { ReactElement } from 'react';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Container } from './Container';
import type { ContainerSize } from './Container.types';

const sizes: ContainerSize[] = ['md', 'lg', 'full'];

const meta: Meta<typeof Container> = {
  title: 'Components/Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story): ReactElement => (
      <div style={{ width: '100%', alignSelf: 'stretch' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    as: {
      control: 'select',
      options: ['div', 'section', 'main', 'article', 'header', 'footer', 'nav'],
      description: 'HTML element to render',
    },
    size: {
      control: 'select',
      options: sizes,
      description: 'Max content width preset',
    },
    bgColor: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'brand',
        'light',
        'gray',
        'dark-overlay',
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Container>;

const pageShellStyle = {
  width: '100vw',
  marginInline: 'calc(50% - 50vw)',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  minHeight: '240px',
} as const;

const contentStyle = {
  border: '1px dashed #64748b',
  borderRadius: '8px',
} as const;

export const Default: Story = {
  args: {
    size: 'lg',
    bgColor: 'light',
    padding: 16,
    children: (
      <div style={contentStyle}>
        Container centers content and applies horizontal padding from the size
        preset.
      </div>
    ),
  },
  render: (args) => (
    <div style={pageShellStyle}>
      <Container {...args} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        ...pageShellStyle,
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        padding: '24px 0',
      }}
    >
      {sizes.map((size) => (
        <div
          key={size}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            width: '100%',
            alignSelf: 'stretch',
          }}
        >
          <span style={{ paddingLeft: '24px', fontSize: '14px' }}>{size}</span>
          <Container size={size} bgColor="light" padding={16}>
            <div style={contentStyle}>Max-width: {size}</div>
          </Container>
        </div>
      ))}
    </div>
  ),
};

export const ResponsiveSize: Story = {
  args: {
    size: { xs: 'full', md: 'md', lg: 'lg' },
    bgColor: 'light',
    padding: 16,
    children: (
      <div style={contentStyle}>
        Resize the viewport: full width on xs, md max-width from md breakpoint,
        lg max-width from lg breakpoint.
      </div>
    ),
  },
  render: (args) => (
    <div style={pageShellStyle}>
      <Container {...args} />
    </div>
  ),
};
