import type { Meta, StoryObj } from "@storybook/html-vite";
import { GhostDemo } from "@demos/variants";

const meta: Meta = {
  title: "Variants/Modifiers/Ghost",
  parameters: {},
};

export default meta;

export const ButtonExample: StoryObj = {
  render: () => GhostDemo.overviewButtons(),
};

export const InputButtons: StoryObj = {
  render: () => GhostDemo.overviewInputButtons(),
};

export const RoleButtons: StoryObj = {
  render: () => GhostDemo.overviewRoleButtons(),
};

export const Dropdowns: StoryObj = {
  render: () => GhostDemo.overviewDropdowns(),
};

export const Accordions: StoryObj = {
  render: () => GhostDemo.overviewAccordions(),
};

export const Cards: StoryObj = {
  render: () => GhostDemo.overviewCardsWithHeaderAndFooter(),
};
