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

export const buttonExample: StoryObj = {
  render: () => ButtonDemo.ghostVariants(),
};

export const inputButtons: StoryObj = {
  render: () => GhostDemo.overviewInputButtons(),
};

export const roleButtons: StoryObj = {
  render: () => RoleButtonDemo.ghostVariants(),
};

export const dropdowns: StoryObj = {
  render: () => DropdownDemo.asButtonGhostVariants(),
};

export const cards: StoryObj = {
  render: () => CardDemo.withHeaderAndFooterGhostVariants(),
};
