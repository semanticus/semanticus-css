import type { Meta, StoryObj } from '@storybook/html';
import * as NavStories from './nav.stories';

type Args = {
  class: string;
  slot: string;
};

export function render(args: Partial<Args>): string {
  return `<aside class="${args.class}">
  ${args.slot}
</aside>`;
}

const meta: Meta<Args> = {
  title: 'Semantics/<aside>',
  render,
  excludeStories: ['render'],
};

export default meta;

export const Default: StoryObj<Args> = {
  args: {
    slot: "<h4>Logo</h4>",
  },
};

export const LeftSidebarNavigation: StoryObj<Args> = {
  args: {
    class: 'sidebar',
    slot: `<h4>Composites</h4>
    ${NavStories.render(NavStories.PagesNavigation.args)}

<a href="#">Help</a>`,
  }
};

export const RightSidebarNavigation: StoryObj<Args> = {
  args: {
    class: 'sidebar',
    slot: `<h4>On this page</h4>
    ${NavStories.render(NavStories.PageNavigation.args)}`,
  }
};
