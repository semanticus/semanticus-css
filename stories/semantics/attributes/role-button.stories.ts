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

export const secondary: StoryObj = {
  args: {
    html: RoleButtonDemo.overviewStatesAndModifiers("div", {
      class: "secondary",
    }),
  },
  render: (args) => args.html,
};

export const contrast: StoryObj = {
  args: {
    html: RoleButtonDemo.overviewStatesAndModifiers("div", {
      class: "contrast",
    }),
  },
  render: (args) => args.html,
};

export const success: StoryObj = {
  args: {
    html: RoleButtonDemo.overviewStatesAndModifiers("div", {
      class: "success",
    }),
  },
  render: (args) => args.html,
};

export const info: StoryObj = {
  args: {
    html: RoleButtonDemo.overviewStatesAndModifiers("div", { class: "info" }),
  },
  render: (args) => args.html,
};

export const warning: StoryObj = {
  args: {
    html: RoleButtonDemo.overviewStatesAndModifiers("div", {
      class: "warning",
    }),
  },
  render: (args) => args.html,
};

export const danger: StoryObj = {
  args: {
    html: RoleButtonDemo.overviewStatesAndModifiers("div", { class: "danger" }),
  },
  render: (args) => args.html,
};
