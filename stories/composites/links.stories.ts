import type { Meta, StoryObj } from "@storybook/html-vite";
import { LinksDemo } from "@demos/composites";
import { ADemo, RoleLinkDemo } from '@demos/semantics';

const meta: Meta = {
  title: "Composites/Links",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  render: () => ADemo.overview(),
};

export const ElementsRenderedAsALink: StoryObj = {
  render: () => RoleLinkDemo.overview(),
};

export const Variants: StoryObj = {
  render: () => LinksDemo.overviewVariants(),
};
