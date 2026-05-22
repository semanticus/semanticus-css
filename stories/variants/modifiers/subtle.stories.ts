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

export const ButtonExample: StoryObj = {
  render: () => ButtonDemo.subtleVariants(),
};

export const InputButtons: StoryObj = {
  render: () => SubtleDemo.overviewInputButtons(),
};

export const RoleButtons: StoryObj = {
  render: () => RoleButtonDemo.subtleVariants(),
};

export const Dropdowns: StoryObj = {
  render: () => DropdownDemo.subtleVariants(),
};

export const Accordions: StoryObj = {
  render: () => RoleButtonDemo.accordionSubtleVariants(),
};

export const Cards: StoryObj = {
  render: () => CardDemo.withHeaderAndFooterSubtleVariants(),
};
