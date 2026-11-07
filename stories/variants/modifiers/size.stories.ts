import type { Meta, StoryObj } from "@storybook/html-vite";
import { SizeDemo } from "@demos/variants";

export default {
  title: "Variants/Modifiers/Size",
  args: { size: "size-sm" },
  argTypes: { size: { control: "select", options: SizeDemo.sizeOptions } },
} satisfies Meta;

export const buttons: StoryObj = { render: args => SizeDemo.buttons(args.size) };
export const roleButtons: StoryObj = { render: args => SizeDemo.roleButtons(args.size) };
export const inputButtons: StoryObj = { render: args => SizeDemo.inputButtons(args.size) };
export const inputs: StoryObj = { render: args => SizeDemo.inputs(args.size) };
export const selects: StoryObj = { render: args => SizeDemo.selects(args.size) };
export const textareas: StoryObj = { render: args => SizeDemo.textareas(args.size) };
export const dropdowns: StoryObj = { render: args => SizeDemo.dropdowns(args.size) };
export const cards: StoryObj = { render: args => SizeDemo.cards(args.size) };
export const panes: StoryObj = { render: args => SizeDemo.panes(args.size) };

export const alerts: StoryObj = { render: args => SizeDemo.alerts(args.size) };

export const pagination: StoryObj = { render: args => SizeDemo.pagination(args.size) };

export const dialogs: StoryObj = { render: args => SizeDemo.dialogs(args.size) };

export const accordions: StoryObj = { render: args => SizeDemo.accordions(args.size) };

export const buttonGroups: StoryObj = { render: args => SizeDemo.buttonGroups(args.size) };

export const searchGroups: StoryObj = { render: args => SizeDemo.searchGroups(args.size) };

export const checkboxes: StoryObj = { render: args => SizeDemo.checkboxes(args.size) };

export const radios: StoryObj = { render: args => SizeDemo.radios(args.size) };

export const switches: StoryObj = { render: args => SizeDemo.switches(args.size) };

export const ranges: StoryObj = { render: args => SizeDemo.ranges(args.size) };

export const colorPickers: StoryObj = { render: args => SizeDemo.colorPickers(args.size) };

export const labels: StoryObj = { render: args => SizeDemo.labels(args.size) };

export const selectionGroups: StoryObj = { render: args => SizeDemo.selectionGroups(args.size) };

export const scale: StoryObj = { render: () => SizeDemo.scale(), parameters: { controls: { exclude: ["size"] } } };
