import type { Meta, StoryObj } from "@storybook/html-vite";
import { ListGroupDemo, PaginationDemo } from "@demos/composites";
import { FieldsetDemo } from "@demos/semantics";

const meta: Meta = {
  title: "Semantics/Attributes/[role=group]",
  parameters: {},
};

export default meta;

export const listGroup: StoryObj = {
  args: { html: ListGroupDemo.main() },
  render: (args) => args.html,
};

export const fieldsetGroup: StoryObj = {
  args: { html: FieldsetDemo.groupInputButton() },
  render: (args) => args.html,
};

export const navGroup: StoryObj = {
  args: { html: PaginationDemo.buttons() },
  render: (args) => args.html,
};
