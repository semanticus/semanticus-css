import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleLinkDemo } from "@demos/semantics";

const meta: Meta = {
  title: "Semantics/Attributes/[role=link]",
  parameters: {},
};

export default meta;

export const overview: StoryObj = {
  render: () => RoleLinkDemo.overviewStatesAndModifiers(),
};

export const primary: StoryObj = {
  render: () => RoleLinkDemo.overviewStatesAndModifiers("button", "primary"),
};

export const secondary: StoryObj = {
  render: () => RoleLinkDemo.overviewStatesAndModifiers("button", "secondary"),
};

export const contrast: StoryObj = {
  render: () => RoleLinkDemo.overviewStatesAndModifiers("button", "contrast"),
};

export const success: StoryObj = {
  render: () => RoleLinkDemo.overviewStatesAndModifiers("button", "success"),
};

export const info: StoryObj = {
  render: () => RoleLinkDemo.overviewStatesAndModifiers("button", "info"),
};

export const warning: StoryObj = {
  render: () => RoleLinkDemo.overviewStatesAndModifiers("button", "warning"),
};

export const danger: StoryObj = {
  render: () => RoleLinkDemo.overviewStatesAndModifiers("button", "danger"),
};
