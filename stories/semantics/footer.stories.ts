import type { Meta, StoryObj } from '@storybook/html';
import * as NavStories from './nav.stories';

type Args = {
  class: string;
  slot: string;
};

export function render(args: Partial<Args>): string {
  return `<footer class="${args.class}">
    ${args.slot}
  </footer>`;
};

const meta: Meta<Args> = {
  title: 'Semantics/<footer>',
  excludeStories: ['render'],
  render,
};

export default meta;

export const Default: StoryObj<Args> = {
  args: {
    slot: "<p>Semanticus CSS</p>",
  },
};

export const WithNavigation: StoryObj<Args> = {
  args: {
    ...Default.args,
    slot: NavStories.render(NavStories.FooterNavigation.args),
  },
};
