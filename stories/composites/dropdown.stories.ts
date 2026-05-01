import type { Meta, StoryObj } from "@storybook/html";
import { DropdownDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Dropdown",
  parameters: {},
};

export default meta;

export const BasicDropdown: StoryObj = {
  render: () => DropdownDemo.basicDropdown(),
};
