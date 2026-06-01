import {
  renderElement,
  classMergeAttributes,
  ListItemType,
  ListOptions,
} from "@scripts/utils";

const defaultItems: ListItemType[] = [
  { slot: "Item 1", tagName: "div", attrs: {} },
  { slot: "Item 2", tagName: "div", attrs: {} },
  { slot: "Item 3", tagName: "div", attrs: {} },
  { slot: "Item 4", tagName: "div", attrs: {} },
];

const ariaCurrentItems = [
  { slot: "Item 1", tagName: "div", attrs: {} },
  { slot: "Item 2", tagName: "div", attrs: { "aria-current": "true" } },
  { slot: "Item 3", tagName: "div", attrs: {} },
  { slot: "Item 4", tagName: "div", attrs: {} },
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
    { ...attrs, role: "list" },
    items
      .map((item: ListItemType) =>
        renderElement(
          item.tagName,
          { ...item.attrs, role: "listitem" },
          item.slot,
        ),
      )
      .join("\n"),
  );
}

export function nested(
  tagName: string = "div",
  attrs: Record<string, string> = {},
) {
  return renderElement(
    tagName,
    { ...attrs, role: "list" },
    `<div role="listitem">Aliquam lobortis lacus eu libero ornare facilisis.</div>
<div role="listitem">Nam et magna at libero scelerisque egestas.</div>
<div role="listitem">Nested list
  <div role="list">
    <div role="listitem">Nested item one</div>
    <div role="listitem">Nested item two</div>
  </div>
</div>
<div role="listitem">Proin ultricies turpis et volutpat vehicula.</div>`,
  );
}

export function cardList(
  tagName: string = "div",
  attrs: Record<string, string> = {},
  options: ListOptions = {},
) {
  return main(tagName, classMergeAttributes("card", attrs), options);
}

export function cardListIntentVariants(
  tagName: string = "div",
  attrs: Record<string, string> = {},
  modifier: string = "",
) {
  return renderElement(
    "section",
    { class: "d-flex gap-d" },
    `${main(tagName, classMergeAttributes(`card primary ${modifier}`.trim(), attrs))}

${main(tagName, classMergeAttributes(`card secondary ${modifier}`.trim(), attrs))}

${main(tagName, classMergeAttributes(`card contrast ${modifier}`.trim(), attrs))}

${main(tagName, classMergeAttributes(`card success ${modifier}`.trim(), attrs))}

${main(tagName, classMergeAttributes(`card info ${modifier}`.trim(), attrs))}

${main(tagName, classMergeAttributes(`card warning ${modifier}`.trim(), attrs))}

${main(tagName, classMergeAttributes(`card danger ${modifier}`.trim(), attrs))}`,
  );
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

export function overviewCardListItemIntentVariants(
  tagName: string = "div",
  attrs: Record<string, string> = {},
) {
  return renderElement(
    "section",
    { class: "auto-grid" },
    `${cardList(tagName, attrs, { items: personalizedItems() })}

${cardList(tagName, attrs, { items: personalizedItems("ghost") })}

${cardList(tagName, attrs, { items: personalizedItems("subtle") })}`,
  );
}
