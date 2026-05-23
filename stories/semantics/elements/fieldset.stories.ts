import type { Meta, StoryObj } from "@storybook/html-vite";
import { FieldsetDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<fieldset>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: FieldsetDemo.main() },
  render: (args) => args.html,
};

export const Main: StoryObj = {
  args: { html: FieldsetDemo.main() },
  render: (args) => args.html,
};
export const Groupinginputwithabutton: StoryObj = {
  args: { html: FieldsetDemo.groupingInputWithAButton() },
  render: (args) => args.html,
};
export const Groupingselectwithabutton: StoryObj = {
  args: { html: FieldsetDemo.groupingSelectWithAButton() },
  render: (args) => args.html,
};
export const Groupingdropdownwithabutton: StoryObj = {
  args: { html: FieldsetDemo.groupingDropdownWithAButton() },
  render: (args) => args.html,
};
export const Groupingtwoinputswithabutton: StoryObj = {
  args: { html: FieldsetDemo.groupingTwoInputsWithAButton() },
  render: (args) => args.html,
};
export const Insideform: StoryObj = {
  args: { html: FieldsetDemo.insideForm() },
  render: (args) => args.html,
};
export const Disabled: StoryObj = {
  args: { html: FieldsetDemo.disabled() },
  render: (args) => args.html,
};
export const Section: StoryObj = {
  args: { html: FieldsetDemo.section() },
  render: (args) => args.html,
};
