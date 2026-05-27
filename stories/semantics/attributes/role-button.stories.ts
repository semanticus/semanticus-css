import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleButtonDemo } from "@demos/semantics/attributes";

const meta: Meta = {
  title: "Semantics/Attributes/[role=button]",
  parameters: {},
};

export default meta;

export const overview: StoryObj = {
  args: { html: RoleButtonDemo.overviewStatesAndModifiers() },
  render: (args) => args.html,
};

export const primary: StoryObj = {
  render: () => RoleButtonDemo.overviewStatesAndModifiers("div", "primary"),
};

export const secondary: StoryObj = {
  render: () => RoleButtonDemo.overviewStatesAndModifiers("div", "secondary"),
};

export const contrast: StoryObj = {
  render: () => RoleButtonDemo.overviewStatesAndModifiers("div", "contrast"),
};

export const success: StoryObj = {
  render: (args) => RoleButtonDemo.overviewStatesAndModifiers("div", "success"),
};

export const info: StoryObj = {
  render: () => RoleButtonDemo.overviewStatesAndModifiers("div", "info"),
};

export const warning: StoryObj = {
  render: () => RoleButtonDemo.overviewStatesAndModifiers("div", "warning"),
};

export const danger: StoryObj = {
  render: () => RoleButtonDemo.overviewStatesAndModifiers("div", "danger"),
};
