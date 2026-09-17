import type { ReactElement } from 'react';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Container, MediaContainer } from '@/components/layout';

import { ResponsiveImage } from './ResponsiveImage';

const demoSrc = {
  xs: 'https://picsum.photos/id/1015/768/432',
  md: 'https://picsum.photos/id/1015/1024/576',
  lg: 'https://picsum.photos/id/1015/1600/900',
} as const;

const demoAlt = 'Hikers standing on a clifftop above a fjord';

const fixedWidthStyle = { width: '600px', height: '100%' } as const;

function CaseSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactElement;
}): ReactElement {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '100%',
      }}
    >
      <div>
        <strong>{title}</strong>
        <p style={{ margin: 0, fontSize: '14px', opacity: 0.75 }}>
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}

const meta: Meta<typeof ResponsiveImage> = {
  title: 'Components/Shared/ResponsiveImage',
  component: ResponsiveImage,
  argTypes: {
    height: {
      control: 'select',
      options: ['auto', 'fill'],
      description: 'Intrinsic height vs fill parent (object-fit: cover)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ResponsiveImage>;

export const FixedWidthContainerHeightAuto: Story = {
  name: 'Fixed width, height auto',
  render: () => (
    <div style={fixedWidthStyle}>
      <ResponsiveImage src={demoSrc} alt={demoAlt} height="auto" />
    </div>
  ),
};

export const FixedWidthMediaContainer: Story = {
  name: 'Fixed width + MediaContainer',
  render: () => (
    <div style={fixedWidthStyle}>
      <MediaContainer ratio={1} borderRadius={12}>
        <ResponsiveImage src={demoSrc} alt={demoAlt} />
      </MediaContainer>
    </div>
  ),
};

export const ContainerWidthHeightAuto: Story = {
  name: 'Container width, height auto',
  render: () => (
    <Container display="flex" direction="column" alignItems="center" gap={12}>
      <ResponsiveImage src={demoSrc} alt={demoAlt} height="auto" />
    </Container>
  ),
};

export const ContainerWidthMediaContainer: Story = {
  name: 'Container width + MediaContainer',
  render: () => (
    <Container display="flex" direction="column" alignItems="center" gap={12}>
      <MediaContainer ratio={1} borderRadius={12}>
        <ResponsiveImage src={demoSrc} alt={demoAlt} />
      </MediaContainer>
    </Container>
  ),
};

export const FullBleedHeightAuto: Story = {
  name: 'Full bleed, height auto',
  render: () => <ResponsiveImage src={demoSrc} alt={demoAlt} height="auto" />,
};

export const FullBleedMediaContainer: Story = {
  name: 'Full bleed + MediaContainer',
  render: () => (
    <MediaContainer ratio={1} borderRadius={12}>
      <ResponsiveImage src={demoSrc} alt={demoAlt} />
    </MediaContainer>
  ),
};

export const AllLayoutCases: Story = {
  name: 'All layout cases',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        width: '100%',
      }}
    >
      <CaseSection
        title="1. Fixed 600px wrapper, height auto"
        description="Image keeps natural aspect ratio; width follows the wrapper."
      >
        <div style={fixedWidthStyle}>
          <ResponsiveImage src={demoSrc} alt={demoAlt} height="auto" />
        </div>
      </CaseSection>
      <CaseSection
        title="2. Fixed 600px wrapper + square MediaContainer"
        description="Aspect ratio and cover cropping are enforced by MediaContainer."
      >
        <div style={fixedWidthStyle}>
          <MediaContainer ratio={1} borderRadius={12}>
            <ResponsiveImage src={demoSrc} alt={demoAlt} />
          </MediaContainer>
        </div>
      </CaseSection>
      <Container display="flex" direction="column" alignItems="center" gap={32}>
        <CaseSection
          title="3. Inside Container, height auto"
          description="Full container content width with intrinsic image height."
        >
          <ResponsiveImage src={demoSrc} alt={demoAlt} height="auto" />
        </CaseSection>
        <CaseSection
          title="4. Inside Container + MediaContainer"
          description="Container max-width with 1:1 media frame."
        >
          <MediaContainer ratio={1} borderRadius={12}>
            <ResponsiveImage src={demoSrc} alt={demoAlt} />
          </MediaContainer>
        </CaseSection>
      </Container>
      <CaseSection
        title="5. Full bleed (no Container), height auto"
        description="Spans the story canvas; natural height from image aspect ratio."
      >
        <ResponsiveImage src={demoSrc} alt={demoAlt} height="auto" />
      </CaseSection>
      <CaseSection
        title="6. Full bleed + MediaContainer"
        description="Edge-to-edge square crop via viewport-width MediaContainer."
      >
        <MediaContainer ratio={1} borderRadius={12}>
          <ResponsiveImage src={demoSrc} alt={demoAlt} />
        </MediaContainer>
      </CaseSection>
    </div>
  ),
};

export const SingleSourceUrl: Story = {
  name: 'Single URL (non-responsive src)',
  render: () => (
    <div style={fixedWidthStyle}>
      <ResponsiveImage
        src="https://picsum.photos/id/1015/1024/576"
        alt={demoAlt}
        height="auto"
      />
    </div>
  ),
};

export const PartialBreakpointSources: Story = {
  name: 'Partial breakpoint map',
  render: () => (
    <CaseSection
      title="Only xs + lg in src map"
      description="Under 768px: xs (clifftop). 768–1023px: no matching source—img fallback stays xs. From 1024px: lg (city). Resize the canvas to verify."
    >
      <div style={fixedWidthStyle}>
        <ResponsiveImage
          src={{
            xs: 'https://picsum.photos/id/1015/768/432',
            lg: 'https://picsum.photos/id/1003/1600/900',
          }}
          alt={demoAlt}
          height="auto"
        />
      </div>
    </CaseSection>
  ),
};

export const HeightFillDefault: Story = {
  name: 'Default height fill (no MediaContainer)',
  render: () => (
    <div style={{ ...fixedWidthStyle, height: '240px', background: '#eee' }}>
      <ResponsiveImage src={demoSrc} alt={demoAlt} />
    </div>
  ),
};

export const MediaContainerAspectRatio16By9: Story = {
  name: 'MediaContainer 16:9',
  render: () => (
    <div style={fixedWidthStyle}>
      <MediaContainer ratio={16 / 9} borderRadius={12}>
        <ResponsiveImage src={demoSrc} alt={demoAlt} />
      </MediaContainer>
    </div>
  ),
};

export const MediaContainerAspectRatio4By3: Story = {
  name: 'MediaContainer 4:3',
  render: () => (
    <div style={fixedWidthStyle}>
      <MediaContainer ratio={4 / 3} borderRadius={8}>
        <ResponsiveImage src={demoSrc} alt={demoAlt} />
      </MediaContainer>
    </div>
  ),
};

export const HeightAutoVsFillInMediaContainer: Story = {
  name: 'height auto vs fill inside MediaContainer',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        width: '100%',
        maxWidth: '720px',
      }}
    >
      <CaseSection
        title="height=fill (default)"
        description="MediaContainer drives aspect ratio; image covers the frame."
      >
        <MediaContainer ratio={1} borderRadius={12}>
          <ResponsiveImage src={demoSrc} alt={demoAlt} />
        </MediaContainer>
      </CaseSection>
      <CaseSection
        title="height=auto"
        description="auto height on img; MediaContainer still sets picture aspect ratio."
      >
        <MediaContainer ratio={1} borderRadius={12}>
          <ResponsiveImage src={demoSrc} alt={demoAlt} height="auto" />
        </MediaContainer>
      </CaseSection>
    </div>
  ),
};
