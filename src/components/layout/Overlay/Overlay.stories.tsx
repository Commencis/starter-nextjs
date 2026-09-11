'use client';

import type { ReactElement } from 'react';
import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button } from '@/components/ui/Button/Button';

import { Overlay } from './Overlay';

const meta: Meta<typeof Overlay> = {
  title: 'Components/Layout/Overlay',
  component: Overlay,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Overlay>;

function InteractiveOverlay(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', padding: '32px' }}>
      <Button onClick={() => setIsOpen(true)}>Open overlay</Button>
      <Overlay
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        ariaLabel="Overlay content"
        closeButtonAriaLabel="Close overlay"
      >
        <div
          style={{
            display: 'flex',
            alignSelf: 'center',
            flexDirection: 'column',
            gap: '16px',
            position: 'relative',
            zIndex: 1,
            width: 'min(90vw, 480px)',
            padding: '32px',
            borderRadius: '16px',
            background: 'white',
          }}
        >
          <h2>Overlay content</h2>
          <p>
            The backdrop and the button below both close the overlay. The page
            stays locked while this scrollable area remains usable.
          </p>
          <div
            style={{
              maxHeight: '180px',
              overflow: 'auto',
              padding: '16px',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
            }}
          >
            {Array.from({ length: 12 }, (_, index) => (
              <p key={index}>Scrollable content item {index + 1}</p>
            ))}
          </div>
          <Button onClick={() => setIsOpen(false)}>Close overlay</Button>
        </div>
      </Overlay>
    </div>
  );
}

export const Interactive: Story = {
  render: () => <InteractiveOverlay />,
};
