import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Semantics/Button',
};

export default meta;

export const Default: StoryObj = {
  render: () => `
    <button>Click me
  `,
};
