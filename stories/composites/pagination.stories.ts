import type { Meta, StoryObj } from "@storybook/html";
import { PaginationDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Pagination",
  parameters: {},
};

export default meta;

export const BasicPagination: StoryObj = {
  render: () => PaginationDemo.basicPagination(),
};

export const LinkBasedPagination: StoryObj = {
  render: () => PaginationDemo.linkBasedPagination(),
};
