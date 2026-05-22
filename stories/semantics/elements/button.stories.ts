import type { Meta, StoryObj } from "@storybook/html-vite";
import { ButtonDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<button>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: ButtonDemo.main() },
  render: (args) => args.html,
};

export const intentVariants: StoryObj = {
  args: { html: ButtonDemo.intentVariants() },
  render: (args) => args.html,
};

export const subtleModifier: StoryObj = {
  args: { html: ButtonDemo.subtleVariants() },
  render: (args) => args.html,
};

export const ghostModifier: StoryObj = {
  args: { html: ButtonDemo.ghostVariants() },
  render: (args) => args.html,
};
