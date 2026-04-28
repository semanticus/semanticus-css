import type { Meta, StoryObj } from '@storybook/html';
import * as HgroupStories from './hgroup.stories';

type Args = {
  class: string;
  slot: string;
};

export function render(args: Partial<Args>): string {
  return `<article class="${args.class}">
    ${args.slot}
  </article>`;
};

const meta: Meta<Args> = {
  title: 'Semantics/<article>',
  excludeStories: ['render'],
  render,
};

export default meta;

export const Default: StoryObj<Args> = {
  args: {
    slot: `<h1>Hello World</h1>
<p>This is an article.</p>`,
  },
};

export const WithHgroup: StoryObj<Args> = {
  args: {
    ...Default.args,
    slot: HgroupStories.render(HgroupStories.Default.args),
  },
};
