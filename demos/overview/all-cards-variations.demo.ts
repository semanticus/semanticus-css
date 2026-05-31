import {
  classMergeAttributes,
  renderElement,
  renderGrid,
} from "@scripts/utils";
import * as CardDemo from "@demos/components/card.demo";

export function main() {
  return renderElement(
    "main",
    { class: "container" },
    `<h1>Cards</h1>

<br>

<section id="card-basic">
  <h2>Bsic Card</h2>

  ${renderGrid(`<h3>Default</h3><h3>Subtle Modifier</h3><h3>Ghost Modifier</h3>`, { class: "mb-0" })}
  ${renderElement(
    "section",
    {},
    `${renderGrid(`${CardDemo.main()}
${CardDemo.main("div", { class: "subtle" })}
${CardDemo.main("div", { class: "ghost" })}`)}`,
  )}

  ${renderGrid(`<h3>Intent Variants</h3><h3>Subtle Modifier</h3><h3>Ghost Modifier</h3>`, { class: "mb-0" })}
  ${renderElement(
    "section",
    {},
    `${renderGrid(`
${renderElement(
  "section",
  {},
  `${CardDemo.main("div", classMergeAttributes(`primary`.trim()))}
${CardDemo.main("div", classMergeAttributes(`secondary`.trim()))}
${CardDemo.main("div", classMergeAttributes(`contrast`.trim()))}
${CardDemo.main("div", classMergeAttributes(`success`.trim()))}
${CardDemo.main("div", classMergeAttributes(`info`.trim()))}
${CardDemo.main("div", classMergeAttributes(`warning`.trim()))}
${CardDemo.main("div", classMergeAttributes(`danger`.trim()))}`,
)}

${renderElement(
  "section",
  {},
  `${CardDemo.main("div", classMergeAttributes(`primary subtle`.trim()))}
${CardDemo.main("div", classMergeAttributes(`secondary subtle`.trim()))}
${CardDemo.main("div", classMergeAttributes(`contrast subtle`.trim()))}
${CardDemo.main("div", classMergeAttributes(`success subtle`.trim()))}
${CardDemo.main("div", classMergeAttributes(`info subtle`.trim()))}
${CardDemo.main("div", classMergeAttributes(`warning subtle`.trim()))}
${CardDemo.main("div", classMergeAttributes(`danger subtle`.trim()))}`,
)}

${renderElement(
  "section",
  {},
  `${CardDemo.main("div", classMergeAttributes(`primary ghost`.trim()))}
${CardDemo.main("div", classMergeAttributes(`secondary ghost`.trim()))}
${CardDemo.main("div", classMergeAttributes(`contrast ghost`.trim()))}
${CardDemo.main("div", classMergeAttributes(`success ghost`.trim()))}
${CardDemo.main("div", classMergeAttributes(`info ghost`.trim()))}
${CardDemo.main("div", classMergeAttributes(`warning ghost`.trim()))}
${CardDemo.main("div", classMergeAttributes(`danger ghost`.trim()))}`,
)}`)}`,
  )}
</section>

<section id="card-with-header-and-footer">
  <h2>Card with Header and Footer</h2>

  ${renderGrid(`<h3>Default</h3><h3>Subtle Modifier</h3><h3>Ghost Modifier</h3>`, { class: "mb-0" })}
  ${renderElement(
    "section",
    {},
    `${renderGrid(`${CardDemo.withHeaderAndFooter()}
${CardDemo.withHeaderAndFooter("div", { class: "subtle" })}
${CardDemo.withHeaderAndFooter("div", { class: "ghost" })}`)}`,
  )}

  ${renderGrid(`<h3>Intent Variants</h3><h3>Subtle Modifier</h3><h3>Ghost Modifier</h3>`, { class: "mb-0" })}
  ${renderElement(
    "section",
    {},
    `${renderGrid(`
${renderElement(
  "section",
  {},
  `${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`primary`.trim()))}
${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`secondary`.trim()))}
${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`contrast`.trim()))}
${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`success`.trim()))}
${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`info`.trim()))}
${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`warning`.trim()))}
${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`danger`.trim()))}`,
)}

${renderElement(
  "section",
  {},
  `${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`primary subtle`.trim()))}
${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`secondary subtle`.trim()))}
${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`contrast subtle`.trim()))}
${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`success subtle`.trim()))}
${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`info subtle`.trim()))}
${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`warning subtle`.trim()))}
${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`danger subtle`.trim()))}`,
)}

${renderElement(
  "section",
  {},
  `${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`primary ghost`.trim()))}
${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`secondary ghost`.trim()))}
${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`contrast ghost`.trim()))}
${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`success ghost`.trim()))}
${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`info ghost`.trim()))}
${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`warning ghost`.trim()))}
${CardDemo.withHeaderAndFooter("div", classMergeAttributes(`danger ghost`.trim()))}`,
)}`)}`,
  )}
</section>

<section id="card-with-header">
  <h2>Card with Header</h2>

  ${renderGrid(`<h3>Default</h3><h3>Subtle Modifier</h3><h3>Ghost Modifier</h3>`, { class: "mb-0" })}
  ${renderElement(
    "section",
    {},
    `${renderGrid(`${CardDemo.withHeader()}
${CardDemo.withHeader("div", { class: "subtle" })}
${CardDemo.withHeader("div", { class: "ghost" })}`)}`,
  )}

  ${renderGrid(`<h3>Intent Variants</h3><h3>Subtle Modifier</h3><h3>Ghost Modifier</h3>`, { class: "mb-0" })}
  ${renderElement(
    "section",
    {},
    `${renderGrid(`
${renderElement(
  "section",
  {},
  `${CardDemo.withHeader("div", classMergeAttributes(`primary`.trim()))}
${CardDemo.withHeader("div", classMergeAttributes(`secondary`.trim()))}
${CardDemo.withHeader("div", classMergeAttributes(`contrast`.trim()))}
${CardDemo.withHeader("div", classMergeAttributes(`success`.trim()))}
${CardDemo.withHeader("div", classMergeAttributes(`info`.trim()))}
${CardDemo.withHeader("div", classMergeAttributes(`warning`.trim()))}
${CardDemo.withHeader("div", classMergeAttributes(`danger`.trim()))}`,
)}

${renderElement(
  "section",
  {},
  `${CardDemo.withHeader("div", classMergeAttributes(`primary subtle`.trim()))}
${CardDemo.withHeader("div", classMergeAttributes(`secondary subtle`.trim()))}
${CardDemo.withHeader("div", classMergeAttributes(`contrast subtle`.trim()))}
${CardDemo.withHeader("div", classMergeAttributes(`success subtle`.trim()))}
${CardDemo.withHeader("div", classMergeAttributes(`info subtle`.trim()))}
${CardDemo.withHeader("div", classMergeAttributes(`warning subtle`.trim()))}
${CardDemo.withHeader("div", classMergeAttributes(`danger subtle`.trim()))}`,
)}

${renderElement(
  "section",
  {},
  `${CardDemo.withHeader("div", classMergeAttributes(`primary ghost`.trim()))}
${CardDemo.withHeader("div", classMergeAttributes(`secondary ghost`.trim()))}
${CardDemo.withHeader("div", classMergeAttributes(`contrast ghost`.trim()))}
${CardDemo.withHeader("div", classMergeAttributes(`success ghost`.trim()))}
${CardDemo.withHeader("div", classMergeAttributes(`info ghost`.trim()))}
${CardDemo.withHeader("div", classMergeAttributes(`warning ghost`.trim()))}
${CardDemo.withHeader("div", classMergeAttributes(`danger ghost`.trim()))}`,
)}`)}`,
  )}
</section>

<section id="card-with-footer">
  <h2>Card with Header</h2>

  ${renderGrid(`<h3>Default</h3><h3>Subtle Modifier</h3><h3>Ghost Modifier</h3>`, { class: "mb-0" })}
  ${renderElement(
    "section",
    {},
    `${renderGrid(`${CardDemo.withFooter()}
${CardDemo.withFooter("div", { class: "subtle" })}
${CardDemo.withFooter("div", { class: "ghost" })}`)}`,
  )}

  ${renderGrid(`<h3>Intent Variants</h3><h3>Subtle Modifier</h3><h3>Ghost Modifier</h3>`, { class: "mb-0" })}
  ${renderElement(
    "section",
    {},
    `${renderGrid(`
${renderElement(
  "section",
  {},
  `${CardDemo.withFooter("div", classMergeAttributes(`primary`.trim()))}
${CardDemo.withFooter("div", classMergeAttributes(`secondary`.trim()))}
${CardDemo.withFooter("div", classMergeAttributes(`contrast`.trim()))}
${CardDemo.withFooter("div", classMergeAttributes(`success`.trim()))}
${CardDemo.withFooter("div", classMergeAttributes(`info`.trim()))}
${CardDemo.withFooter("div", classMergeAttributes(`warning`.trim()))}
${CardDemo.withFooter("div", classMergeAttributes(`danger`.trim()))}`,
)}

${renderElement(
  "section",
  {},
  `${CardDemo.withFooter("div", classMergeAttributes(`primary subtle`.trim()))}
${CardDemo.withFooter("div", classMergeAttributes(`secondary subtle`.trim()))}
${CardDemo.withFooter("div", classMergeAttributes(`contrast subtle`.trim()))}
${CardDemo.withFooter("div", classMergeAttributes(`success subtle`.trim()))}
${CardDemo.withFooter("div", classMergeAttributes(`info subtle`.trim()))}
${CardDemo.withFooter("div", classMergeAttributes(`warning subtle`.trim()))}
${CardDemo.withFooter("div", classMergeAttributes(`danger subtle`.trim()))}`,
)}

${renderElement(
  "section",
  {},
  `${CardDemo.withFooter("div", classMergeAttributes(`primary ghost`.trim()))}
${CardDemo.withFooter("div", classMergeAttributes(`secondary ghost`.trim()))}
${CardDemo.withFooter("div", classMergeAttributes(`contrast ghost`.trim()))}
${CardDemo.withFooter("div", classMergeAttributes(`success ghost`.trim()))}
${CardDemo.withFooter("div", classMergeAttributes(`info ghost`.trim()))}
${CardDemo.withFooter("div", classMergeAttributes(`warning ghost`.trim()))}
${CardDemo.withFooter("div", classMergeAttributes(`danger ghost`.trim()))}`,
)}`)}`,
  )}
</section>
`,
  );
}
