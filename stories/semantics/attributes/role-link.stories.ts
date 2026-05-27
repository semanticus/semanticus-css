import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleLinkDemo } from "@demos/semantics";

const meta: Meta = {
  title: "Semantics/Attributes/[role=link]",
  parameters: {},
};

export default meta;

export const overview: StoryObj = {
  args: { html: RoleLinkDemo.overviewStatesAndModifiers() },
  render: (args) => args.html,
};

export const secondary: StoryObj = {
  args: {
    html: RoleLinkDemo.overviewStatesAndModifiers({ class: "secondary" }),
  },
  render: (args) => args.html,
};

export const contrast: StoryObj = {
  args: {
    html: RoleLinkDemo.overviewStatesAndModifiers({ class: "contrast" }),
  },
  render: (args) => args.html,
};

export const success: StoryObj = {
  args: { html: RoleLinkDemo.overviewStatesAndModifiers({ class: "success" }) },
  render: (args) => args.html,
};

export const info: StoryObj = {
  args: { html: RoleLinkDemo.overviewStatesAndModifiers({ class: "info" }) },
  render: (args) => args.html,
};

export const warning: StoryObj = {
  args: { html: RoleLinkDemo.overviewStatesAndModifiers({ class: "warning" }) },
  render: (args) => args.html,
};

export const danger: StoryObj = {
  args: { html: RoleLinkDemo.overviewStatesAndModifiers({ class: "danger" }) },
  render: (args) => args.html,
};
