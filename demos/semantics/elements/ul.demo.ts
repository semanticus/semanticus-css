import { renderElement, classMergeAttributes } from "@scripts/utils";

type ItemType = {
  slot: string;
  attrs: Record<string, string>;
};

const defaultItems: ItemType[] = [
  { slot: "Item 1", attrs: {} },
  { slot: "Item 2", attrs: {} },
  { slot: "Item 3", attrs: {} },
  { slot: "Item 4", attrs: {} },
];

export function main(
  attrs: Record<string, string> = {},
  items: ItemType[] = defaultItems,
) {
  return renderElement(
    "ul",
    attrs,
    items.map((item) => renderElement("li", item.attrs, item.slot)).join("\n"),
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
  items: ItemType[] = [
    { slot: "Item 1", attrs: {} },
    { slot: "Item 2", attrs: { "aria-current": "true" } },
    { slot: "Item 3", attrs: {} },
    { slot: "Item 4", attrs: {} },
  ],
) {
  return main(classMergeAttributes("card", attrs), items);
}

export function cardListIntentVariants(
  tagName: string = "div",
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

function personalizedItems(modifier: string = ""): ItemType[] {
  return [
    {
      slot: "Primary",
      attrs: { class: `primary ${modifier}` },
    },
    {
      slot: "Secondary",
      attrs: { class: `secondary ${modifier}` },
    },
    {
      slot: "Contrast",
      attrs: { class: `contrast ${modifier}` },
    },
    {
      slot: "Success",
      attrs: { class: `success ${modifier}` },
    },
    { slot: "Info", attrs: { class: `info ${modifier}` } },
    {
      slot: "Warning",
      attrs: { class: `warning ${modifier}` },
    },
    { slot: "Danger", attrs: { class: `danger ${modifier}` } },
  ];
}

export function overviewCardListItemIntentVariants(
  tagName: string = "div",
  attrs: Record<string, string> = {},
) {
  return renderElement(
    "section",
    { class: "auto-grid" },
    `${cardList(attrs, personalizedItems())}

${cardList(attrs, personalizedItems("ghost"))}

${cardList(attrs, personalizedItems("subtle"))}`,
  );
}
