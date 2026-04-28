import type { Meta, StoryObj } from '@storybook/html';
import rawDemoSemanticsHtml from './semantics.html?raw';

const meta: Meta = {
  title: 'Demo/Semantics',
};

export default meta;

export const Semantics: StoryObj = {
  render: () => rawDemoSemanticsHtml,
};
