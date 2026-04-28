import type { Meta, StoryObj } from '@storybook/html';

type Args = {
  class: string;
  title: string;
  description: string;
};

export function render(args: Partial<Args>): string {
  return `<hgroup class="${args.class}">
    <h1>${args.title}</h1>
    <p>${args.description}</p>
  </hgroup>`;
};

const meta: Meta<Args> = {
  title: 'Semantics/<hgroup>',
  excludeStories: ['render'],
  render,
};

export default meta;

export const Default: StoryObj<Args> = {
  args: {
    title: "Hello World",
    description: "A simple heading group",
  },
};
