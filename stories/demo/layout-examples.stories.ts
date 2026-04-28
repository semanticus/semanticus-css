import type { Meta, StoryObj } from '@storybook/html';
import rawDemoSemanticsHtml from './semantics.html?raw';

const meta: Meta = {
  title: 'Demo/Layout Examples',
};

export default meta;

export const Default: StoryObj = {
  render: () => rawDemoSemanticsHtml,
};
