import {
  renderElement,
  renderAttributes,
  ListItemType,
  ListOptions,
} from "@scripts/utils";

const defaultItems: ListItemType[] = [
  { tagName: "li", slot: "Item 1", attrs: {} },
  { tagName: "li", slot: "Item 2", attrs: {} },
  { tagName: "li", slot: "Item 3", attrs: {} },
  { tagName: "li", slot: "Item 4", attrs: {} },
];

const ariaCurrentItems = [
  { tagName: "li", slot: "Item 1", attrs: {} },
  { tagName: "li", slot: "Item 2", attrs: { "aria-current": "true" } },
  { tagName: "li", slot: "Item 3", attrs: {} },
  { tagName: "li", slot: "Item 4", attrs: {} },
];

export function main(
  attrs: Record<string, string> = {},
  options: ListOptions = {},
) {
  let items = options.ariaCurrent ? ariaCurrentItems : defaultItems;

  if (options.items) items = options.items;

  return renderElement(
    "ol",
    attrs,
    items
      .map(
        (item: ListItemType) =>
          `<li${renderAttributes(item.attrs)}>${item.slot}</li>`,
      )
      .join("\n"),
  );
}

export function nested(attrs: Record<string, string> = {}) {
  return renderElement(
    "ol",
    attrs,
    `<li>First item</li>
<li>Second item
  <ol>
    <li>Sub-item A</li>
    <li>Sub-item B</li>
  </ol>
</li>
<li>Third item</li>`,
  );
}
