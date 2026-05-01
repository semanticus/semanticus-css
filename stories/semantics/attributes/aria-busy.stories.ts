import type { Meta, StoryObj } from "@storybook/html";
import { AriaBusyDemo } from "@demos/semantics/attributes";

const meta: Meta = {
  title: "Semantics/Attributes/[aria-busy]",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: AriaBusyDemo.basic() },
  render: (args) => args.html,
};

export const loadingButton: StoryObj = {
  args: { html: AriaBusyDemo.loadingButton() },
  render: (args) => args.html,
};

export const loadingForm: StoryObj = {
  args: { html: AriaBusyDemo.loadingForm() },
  render: (args) => args.html,
};
