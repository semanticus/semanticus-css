import type { Meta, StoryObj } from "@storybook/html-vite";
import { LinksDemo } from "@demos/composites";
import { ADemo, RoleLinkDemo } from '@demos/semantics';

const meta: Meta = {
  title: "Composites/Links",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => ADemo.overview(),
};

export const elementsRenderedAsALink: StoryObj = {
  render: () => RoleLinkDemo.overview(),
};

export const variants: StoryObj = {
  render: () => LinksDemo.overviewVariants(),
};
