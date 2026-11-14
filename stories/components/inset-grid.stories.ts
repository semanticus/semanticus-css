import type { Meta, StoryObj } from "@storybook/html-vite";
import { InsetGridDemo } from "@demos/components";

const meta: Meta = {
  title: "Components/Inset Grid",
};

export default meta;

export const basicUsage: StoryObj = { render: () => InsetGridDemo.main() };
export const fullBleed: StoryObj = { render: () => InsetGridDemo.fullBleed() };
export const customSpacing: StoryObj = { render: () => InsetGridDemo.customSpacing() };
export const nested: StoryObj = { render: () => InsetGridDemo.nested() };
export const rightToLeft: StoryObj = { render: () => InsetGridDemo.rtl() };
export const directionalBleed: StoryObj = { render: () => InsetGridDemo.directionalBleed() };
export const blockBleed: StoryObj = { render: () => InsetGridDemo.blockBleed() };
export const horizontal: StoryObj = { render: () => InsetGridDemo.horizontal() };
