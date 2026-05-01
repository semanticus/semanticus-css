import type { Meta, StoryObj } from "@storybook/html";
import { ButtonDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<button>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: ButtonDemo.basic() },
  render: (args) => args.html,
};

export const formButtons: StoryObj = {
  args: { html: ButtonDemo.formButtons() },
  render: (args) => args.html,
};

export const resetButton: StoryObj = {
  args: { html: ButtonDemo.resetButton() },
  render: (args) => args.html,
};

export const loginForm: StoryObj = {
  args: { html: ButtonDemo.loginForm() },
  render: (args) => args.html,
};
