import type { Meta, StoryObj } from '@storybook/html';
import * as NavStories from './nav.stories';

type Args = {
  class: string;
  slot: string;
  minWidth?: string;
};

export function render(args: Partial<Args>): string {
  return `<header class="${args.class}" style="min-width: ${args.minWidth || '100px'};">
    ${args.slot}
  </header>`;
};

const meta: Meta<Args> = {
  title: 'Semantics/Header',
  excludeStories: ['render'],
  render,
};

export default meta;

export const Default: StoryObj<Args> = {
  args: {
    slot: "<h2>Logo</h2>",
    minWidth: '500px',
  },
};

export const WithNavTopBar: StoryObj<Args> = {
  args: {
    ...Default.args,
    slot: NavStories.render(NavStories.TopBar.args),
  },
};

export const WithNavSearchAndDropdown: StoryObj<Args> = {
  args: {
    ...Default.args,
    slot: NavStories.render(NavStories.SearchAndDropdown.args),
  },
};
