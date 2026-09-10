/* eslint-disable no-console */

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const iconsIndexPath = join(process.cwd(), 'src/components/icons/index.ts');
const iconographyOutputPath = join(
  process.cwd(),
  'src/stories/Iconography.mdx'
);

type IconExport = {
  componentName: string;
  displayName: string;
};

function extractIconExports(content: string): IconExport[] {
  // Match: export { ComponentName } from './ComponentName';
  const exportRegex = /export\s+{\s*(\w+)\s*}\s+from\s+['"]\.\/(\w+)['"];?/g;

  const icons: IconExport[] = Array.from(
    content.matchAll(exportRegex),
    (match) => {
      const componentName = match[1];

      // Convert PascalCase to readable Display Name
      let displayName = componentName.replace(/Icon$/, '');
      // Insert space before capital letters (except first one)
      displayName = displayName.replace(/([a-z])([A-Z])/g, '$1 $2');
      // Split by spaces and capitalize first letter of each word
      displayName = displayName
        .split(' ')
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' ');

      return {
        componentName,
        displayName,
      };
    }
  );

  return icons.sort((a, b) => a.componentName.localeCompare(b.componentName));
}

function createIconographyContent(icons: IconExport[]): string {
  const imports = icons
    .map(
      (icon) => `import { ${icon.componentName} } from '@/components/icons';`
    )
    .join('\n');

  const iconItems = icons
    .map(
      (icon) =>
        `  <IconItem name="${icon.displayName}">\n    <${icon.componentName} />\n  </IconItem>`
    )
    .join('\n');

  return `import { Meta, IconGallery, IconItem } from '@storybook/addon-docs/blocks';

${imports}

<Meta title="Foundations/Iconography" />

# Iconography

<IconGallery>
${iconItems}
</IconGallery>
`;
}

export function createIconography(): void {
  try {
    const indexContent = readFileSync(iconsIndexPath, 'utf-8');
    const icons = extractIconExports(indexContent);

    if (icons.length === 0) {
      console.warn('No icons found in index.ts');
      return;
    }

    const storyContent = createIconographyContent(icons);
    writeFileSync(iconographyOutputPath, storyContent, 'utf-8');

    console.log(`✓ Generated Iconography.mdx with ${icons.length} icon(s)`);
  } catch (error) {
    console.error('Error generating icon story:', error);
    process.exit(1);
  }
}
