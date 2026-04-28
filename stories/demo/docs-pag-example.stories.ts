import type { Meta, StoryObj } from '@storybook/html';
import rawDemoDocsPageExampleHtml from './docs-page-example.html?raw';

const meta: Meta = {
  title: 'Demo/DocsPageExample',
};

export default meta;

export const DocsPageExample: StoryObj = {
  render: () => rawDemoDocsPageExampleHtml,
};
