import type { Meta, StoryObj } from '@storybook/html';
import * as NavStories from './nav.stories';

type Args = {
  class: string;
  slot: string;
  minHeight?: string;
};

const meta: Meta<Args> = {
  title: 'Semantics/Aside',
  render: (args: Args) => `
    <aside class="${args.class}" style="min-height: ${args.minHeight};">
      ${args.slot}
    </aside>
  `,
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
    minHeight: '500px',
    slot: `<h4>Composites</h4>
    ${NavStories.render(NavStories.PagesNavigation.args)}

<a href="#">Help</a>`,
  }
};

export const RightSidebarNavigation: StoryObj<Args> = {
  args: {
    class: 'sidebar',
    minHeight: '200px',
    slot: `<h4>On this page</h4>
    ${NavStories.render(NavStories.PageNavigation.args)}`,
  }
};
