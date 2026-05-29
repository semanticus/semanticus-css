import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleGroupDemo } from "@demos/semantics";

const meta: Meta = {
  title: "Composites/Card Group",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => RoleGroupDemo.cardGroup(),
};
export const intentVariants: StoryObj = {
  render: () => RoleGroupDemo.cardGroupIntentVariants(),
};
export const ghostIntentVariants: StoryObj = {
  render: () => RoleGroupDemo.cardGroupIntentVariants("div", {}, "ghost"),
};
export const subtleIntentVariants: StoryObj = {
  render: () => RoleGroupDemo.cardGroupIntentVariants("div", {}, "subtle"),
};
export const stripedSubtleIntentVariants: StoryObj = {
  render: () =>
    RoleGroupDemo.cardGroupIntentVariants("div", {}, "subtle striped"),
};
export const overviewCardListItemIntentVariants: StoryObj = {
  render: () => RoleGroupDemo.overviewCardGroupItemIntentVariants(),
};
