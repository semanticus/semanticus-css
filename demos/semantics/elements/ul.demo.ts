import {
  renderElement,
  classMergeAttributes,
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
    "ul",
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
    "ul",
    attrs,
    `<li>Aliquam lobortis lacus eu libero ornare facilisis.</li>
<li>Nam et magna at libero scelerisque egestas.</li>
<li>Nested list
  <ul>
    <li>Nested item one</li>
    <li>Nested item two</li>
  </ul>
</li>
<li>Proin ultricies turpis et volutpat vehicula.</li>`,
  );
}

export function cardList(
  attrs: Record<string, string> = {},
  options: ListOptions = {},
) {
  return main(classMergeAttributes("card", attrs), options);
}

export function cardListIntentVariants(
  attrs: Record<string, string> = {},
  modifier: string = "",
) {
  return renderElement(
    "section",
    { class: "d-flex gap-d" },
    `${main(classMergeAttributes(`card primary ${modifier}`.trim(), attrs))}

${main(classMergeAttributes(`card secondary ${modifier}`.trim(), attrs))}

${main(classMergeAttributes(`card contrast ${modifier}`.trim(), attrs))}

${main(classMergeAttributes(`card success ${modifier}`.trim(), attrs))}

${main(classMergeAttributes(`card info ${modifier}`.trim(), attrs))}

${main(classMergeAttributes(`card warning ${modifier}`.trim(), attrs))}

${main(classMergeAttributes(`card danger ${modifier}`.trim(), attrs))}`,
  );
}

export function personalizedItems(modifier: string = ""): ListItemType[] {
  return [
    {
      tagName: "li",
      slot: "Primary",
      attrs: { class: `primary ${modifier}` },
    },
    {
      tagName: "li",
      slot: "Secondary",
      attrs: { class: `secondary ${modifier}` },
    },
    {
      tagName: "li",
      slot: "Contrast",
      attrs: { class: `contrast ${modifier}` },
    },
    {
      tagName: "li",
      slot: "Success",
      attrs: { class: `success ${modifier}` },
    },
    { tagName: "li", slot: "Info", attrs: { class: `info ${modifier}` } },
    {
      tagName: "li",
      slot: "Warning",
      attrs: { class: `warning ${modifier}` },
    },
    { tagName: "li", slot: "Danger", attrs: { class: `danger ${modifier}` } },
  ];
}

export function overviewCardListItemIntentVariants(
  attrs: Record<string, string> = {},
) {
  return renderElement(
    "section",
    { class: "auto-grid" },
    `${cardList(attrs, { items: personalizedItems() })}

${cardList(attrs, { items: personalizedItems("ghost") })}

${cardList(attrs, { items: personalizedItems("subtle") })}`,
  );
}
