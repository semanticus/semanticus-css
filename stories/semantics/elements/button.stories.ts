import type { Meta, StoryObj } from "@storybook/html-vite";
import { ButtonDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<button>",
};

export default meta;

export const overview: StoryObj = {
  args: { html: ButtonDemo.overviewStatesAndModifiers() },
  render: (args) => args.html,
};

export const secondary: StoryObj = {
  args: { html: ButtonDemo.overviewStatesAndModifiers({ class: "secondary" }) },
  render: (args) => args.html,
};

export const contrast: StoryObj = {
  args: { html: ButtonDemo.overviewStatesAndModifiers({ class: "contrast" }) },
  render: (args) => args.html,
};

export const success: StoryObj = {
  args: { html: ButtonDemo.overviewStatesAndModifiers({ class: "success" }) },
  render: (args) => args.html,
};

export const info: StoryObj = {
  args: { html: ButtonDemo.overviewStatesAndModifiers({ class: "info" }) },
  render: (args) => args.html,
};

export const warning: StoryObj = {
  args: { html: ButtonDemo.overviewStatesAndModifiers({ class: "warning" }) },
  render: (args) => args.html,
};

export const danger: StoryObj = {
  args: { html: ButtonDemo.overviewStatesAndModifiers({ class: "danger" }) },
  render: (args) => args.html,
};
