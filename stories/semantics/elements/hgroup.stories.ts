import type { Meta, StoryObj } from "@storybook/html-vite";
import { HgroupDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<hgroup>",
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => HgroupDemo.main(),
};

export const withEyebrow: StoryObj = {
  render: () => HgroupDemo.withEyebrow(),
};
