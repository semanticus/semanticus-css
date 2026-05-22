import type { Meta, StoryObj } from "@storybook/html-vite";
import { GhostDemo } from "@demos/variants";
import { ButtonDemo } from "@demos/semantics";
import { DropdownDemo } from "@demos/composites";
import { CardDemo } from "@demos/components";
import { RoleButtonDemo } from "@demos/semantics/attributes";

const meta: Meta = {
  title: "Variants/Modifiers/Ghost",
  parameters: {},
};

export default meta;

export const ButtonExample: StoryObj = {
  render: () => ButtonDemo.ghostVariants(),
};

export const InputButtons: StoryObj = {
  render: () => GhostDemo.overviewInputButtons(),
};

export const RoleButtons: StoryObj = {
  render: () => RoleButtonDemo.ghostVariants(),
};

export const Dropdowns: StoryObj = {
  render: () => DropdownDemo.ghostVariants(),
};

export const Accordions: StoryObj = {
  render: () => RoleButtonDemo.accordionGhostVariants(),
};

export const Cards: StoryObj = {
  render: () => CardDemo.withHeaderAndFooterGhostVariants(),
};
