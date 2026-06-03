import {
  renderElement,
  classMergeAttributes,
  ListOptions,
  ListItemType,
} from "@scripts/utils";

const defaultItems: ListItemType[] = [
  { slot: "Item 1", tagName: "span", attrs: {} },
  { slot: "Item 2", tagName: "span", attrs: {} },
  { slot: "Item 3", tagName: "span", attrs: {} },
  { slot: "Item 4", tagName: "span", attrs: {} },
];

const buttonItems: ListItemType[] = [
  { tagName: "button", attrs: {}, slot: "Bold" },
  { tagName: "button", attrs: {}, slot: "Italic" },
  { tagName: "button", attrs: {}, slot: "Strikethrough" },
  { tagName: "button", attrs: {}, slot: "Underline" },
];

const ariaCurrentButtonItems: ListItemType[] = [
  { tagName: "button", attrs: {}, slot: "Bold" },
  {
    tagName: "button",
    attrs: { "aria-current": "true" },
    slot: "Italic",
  },
  { tagName: "button", attrs: {}, slot: "Strikethrough" },
  { tagName: "button", attrs: {}, slot: "Underline" },
];

const ariaCurrentItems: ListItemType[] = [
  { slot: "Processed", tagName: "span", attrs: {} },
  { slot: "Shipped", tagName: "span", attrs: {} },
  { slot: "In route", tagName: "span", attrs: { "aria-current": "true" } },
  { slot: "Delivered", tagName: "span", attrs: { "aria-disabled": "true" } },
];

export function main(
  tagName: string = "div",
  attrs: Record<string, string> = {},
  options: ListOptions = {},
) {
  let items = options.ariaCurrent ? ariaCurrentItems : defaultItems;

  if (options.items) items = options.items;

  return renderElement(
    tagName,
    { ...attrs, role: "group" },
    items
      .map((item) => renderElement(item.tagName, item.attrs, item.slot))
      .join("\n"),
  );
}

export function buttonGroup(
  tagName: string = "div",
  attrs: Record<string, string> = {},
  options: ListOptions = {},
) {
  let items = options.ariaCurrent ? ariaCurrentButtonItems : buttonItems;

  if (options.items) items = options.items;

  return main(
    tagName,
    { ...attrs, "aria-label": "Text formatting" },
    { ...options, items },
  );
}

export function cardGroup(
  tagName: string = "div",
  attrs: Record<string, string> = {},
  options: ListOptions = {},
) {
  return main(tagName, classMergeAttributes("card", attrs), options);
}

export function cardGroupIntentVariants(
  tagName: string = "div",
  attrs: Record<string, string> = {},
  modifier: string = "",
) {
  return `${main(tagName, classMergeAttributes(`card primary ${modifier}`.trim(), attrs))}

${main(tagName, classMergeAttributes(`card secondary ${modifier}`.trim(), attrs))}

${main(tagName, classMergeAttributes(`card contrast ${modifier}`.trim(), attrs))}

${main(tagName, classMergeAttributes(`card success ${modifier}`.trim(), attrs))}

${main(tagName, classMergeAttributes(`card info ${modifier}`.trim(), attrs))}

${main(tagName, classMergeAttributes(`card warning ${modifier}`.trim(), attrs))}

${main(tagName, classMergeAttributes(`card danger ${modifier}`.trim(), attrs))}`;
}

export function personalizedItems(modifier: string = ""): ListItemType[] {
  return [
    {
      slot: "Primary",
      tagName: "div",
      attrs: { class: `primary ${modifier}` },
    },
    {
      slot: "Secondary",
      tagName: "div",
      attrs: { class: `secondary ${modifier}` },
    },
    {
      slot: "Contrast",
      tagName: "div",
      attrs: { class: `contrast ${modifier}` },
    },
    {
      slot: "Success",
      tagName: "div",
      attrs: { class: `success ${modifier}` },
    },
    { slot: "Info", tagName: "div", attrs: { class: `info ${modifier}` } },
    {
      slot: "Warning",
      tagName: "div",
      attrs: { class: `warning ${modifier}` },
    },
    { slot: "Danger", tagName: "div", attrs: { class: `danger ${modifier}` } },
  ];
}

export function personalizedButtonItems(modifier: string = ""): ListItemType[] {
  return [
    {
      slot: "Primary",
      tagName: "button",
      attrs: { class: `primary ${modifier}` },
    },
    {
      slot: "Secondary",
      tagName: "button",
      attrs: { class: `secondary ${modifier}` },
    },
    {
      slot: "Contrast",
      tagName: "button",
      attrs: { class: `contrast ${modifier}` },
    },
    {
      slot: "Success",
      tagName: "button",
      attrs: { class: `success ${modifier}` },
    },
    { slot: "Info", tagName: "button", attrs: { class: `info ${modifier}` } },
    {
      slot: "Warning",
      tagName: "button",
      attrs: { class: `warning ${modifier}` },
    },
    {
      slot: "Danger",
      tagName: "button",
      attrs: { class: `danger ${modifier}` },
    },
  ];
}

export function cardGroupPersonalizedItems(
  tagName: string = "div",
  attrs: Record<string, string> = {},
  modifier: string = "",
) {
  return `${cardGroup(tagName, attrs, { items: personalizedItems(modifier) })}`;
}

export function overviewCardGroupItemIntentVariants(
  tagName: string = "div",
  attrs: Record<string, string> = {},
) {
  return `${cardGroupPersonalizedItems(tagName, attrs)}

${cardGroupPersonalizedItems(tagName, attrs, "ghost")}

${cardGroupPersonalizedItems(tagName, attrs, "subtle")}`;
}

export function inputGroup(attrs: Record<string, string> = {}) {
  return main(
    "fieldset",
    { ...attrs, "aria-label": "Email subscription" },
    {
      items: [
        {
          tagName: "input",
          attrs: { type: "email", placeholder: "Enter your email" },
          slot: "",
        },
        {
          tagName: "input",
          attrs: { type: "submit", value: "Subscribe" },
          slot: "",
        },
      ],
    },
  );
}
