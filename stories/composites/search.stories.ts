import type { Meta, StoryObj } from "@storybook/html";
import { SearchDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Search",
  parameters: {},
};

export default meta;

export const BasicSearch: StoryObj = {
  render: () => SearchDemo.basicSearch(),
};
