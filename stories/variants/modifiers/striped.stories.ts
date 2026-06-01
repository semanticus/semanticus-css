import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleListDemo, RoleGroupDemo, TableDemo } from "@demos/semantics";

const meta: Meta = {
  title: "Variants/Modifiers/Striped",
  parameters: {},
};

export default meta;

export const bigTableExample: StoryObj = {
  render: () => TableDemo.bigExample(),
};

export const listExample: StoryObj = {
  render: () => RoleListDemo.cardList("div", { class: "stiped" }),
};

export const groupsExample: StoryObj = {
  render: () => RoleGroupDemo.cardGroup("div", { class: "striped" }),
};
