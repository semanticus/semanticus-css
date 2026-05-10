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

export const inputButtons: StoryObj = {
  args: { html: ButtonDemo.inputButtons() },
  render: (args) => args.html,
};

export const inputResetButton: StoryObj = {
  args: { html: ButtonDemo.inputResetButton() },
  render: (args) => args.html,
};

export const loginForm: StoryObj = {
  args: { html: ButtonDemo.loginForm() },
  render: (args) => args.html,
};
