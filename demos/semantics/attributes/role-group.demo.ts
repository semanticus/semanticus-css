import { renderElement, classMergeAttributes } from "@scripts/utils";

type ItemType = {
  slot?: string;
  tagName: string;
  attrs: Record<string, string>;
};

const defaultItems: ItemType[] = [
  { slot: "Item 1", tagName: "span", attrs: {} },
  { slot: "Item 2", tagName: "span", attrs: {} },
  { slot: "Item 3", tagName: "span", attrs: {} },
  { slot: "Item 4", tagName: "span", attrs: {} },
];

export function main(
  tagName: string = "div",
  attrs: Record<string, string> = {},
  items: ItemType[] = defaultItems,
) {
  return renderElement(
    tagName,
    { ...attrs, role: "group" },
    items
      .map((item) => renderElement(item.tagName, item.attrs, item.slot))
      .join("\n"),
  );
}

export function cardGroup(
  tagName: string = "div",
  attrs: Record<string, string> = {},
  items: ItemType[] = [
    { slot: "Has been processed", tagName: "span", attrs: {} },
    { slot: "In route", tagName: "span", attrs: { "aria-current": "true" } },
    { slot: "Delivered", tagName: "span", attrs: { "aria-disabled": "true" } },
  ],
) {
  return main(tagName, classMergeAttributes("card", attrs), items);
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

function personalizedItems(modifier: string = ""): ItemType[] {
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

export function overviewCardGroupItemIntentVariants(
  tagName: string = "div",
  attrs: Record<string, string> = {},
) {
  return `${cardGroup(tagName, attrs, personalizedItems())}

${cardGroup(tagName, attrs, personalizedItems("ghost"))}

${cardGroup(tagName, attrs, personalizedItems("subtle"))}`;
}

export function inputGroup(attrs: Record<string, string> = {}) {
  return main("fieldset", { ...attrs, "aria-label": "Email subscription" }, [
    {
      tagName: "input",
      attrs: { type: "email", placeholder: "Enter your email" },
    },
    { tagName: "input", attrs: { type: "submit", value: "Subscribe" } },
  ]);
}

export function buttonGroup(
  tagName: string = "div",
  attrs: Record<string, string> = {},
) {
  return main(tagName, { ...attrs, "aria-label": "Text formatting" }, [
    { tagName: "button", attrs: {}, slot: "Bold" },
    { tagName: "button", attrs: { "aria-current": "true" }, slot: "Italic" },
    { tagName: "button", attrs: {}, slot: "Underline" },
  ]);
}
