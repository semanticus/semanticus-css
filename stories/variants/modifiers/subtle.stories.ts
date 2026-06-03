import type { Meta, StoryObj } from "@storybook/html-vite";
import { SubtleDemo } from "@demos/variants";
import { ButtonDemo } from "@demos/semantics";
import { DropdownDemo } from "@demos/composites";
import { CardDemo } from "@demos/components";
import { RoleButtonDemo } from "@demos/semantics/attributes";

const meta: Meta = {
  title: "Variants/Modifiers/Subtle",
  parameters: {},
};

export default meta;

export const buttonExample: StoryObj = {
  render: () => ButtonDemo.subtleVariants(),
};

export const inputButtons: StoryObj = {
  render: () => SubtleDemo.overviewInputButtons(),
};

export const roleButtons: StoryObj = {
  render: () => RoleButtonDemo.subtleVariants(),
};

export const dropdowns: StoryObj = {
  render: () => DropdownDemo.asButtonSubtleVariants(),
};

export const cards: StoryObj = {
  render: () => CardDemo.withHeaderAndFooterSubtleVariants(),
};
