import type { Meta, StoryObj } from "@storybook/html-vite";
import { ADemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<a>",
};

export default meta;

export const overview: StoryObj = {
  args: { html: ADemo.overviewStatesAndModifiers() },
  render: (args) => args.html,
};

export const secondary: StoryObj = {
  args: { html: ADemo.overviewStatesAndModifiers({ class: "secondary" }) },
  render: (args) => args.html,
};

export const contrast: StoryObj = {
  args: { html: ADemo.overviewStatesAndModifiers({ class: "contrast" }) },
  render: (args) => args.html,
};

export const success: StoryObj = {
  args: { html: ADemo.overviewStatesAndModifiers({ class: "success" }) },
  render: (args) => args.html,
};

export const info: StoryObj = {
  args: { html: ADemo.overviewStatesAndModifiers({ class: "info" }) },
  render: (args) => args.html,
};

export const warning: StoryObj = {
  args: { html: ADemo.overviewStatesAndModifiers({ class: "warning" }) },
  render: (args) => args.html,
};

export const danger: StoryObj = {
  args: { html: ADemo.overviewStatesAndModifiers({ class: "danger" }) },
  render: (args) => args.html,
};
