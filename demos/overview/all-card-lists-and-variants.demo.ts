import { renderElement } from "@scripts/utils";
import { CardListDemo } from "@demos/composites";

export function unorderedList(attrs: Record<string, string> = {}) {
  return CardListDemo.unorderedList(
    attrs,
    `<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
<li>Item 4</li>`,
  );
}

export function defaultAndIntentVariants(modifier: string = "") {
  return `${renderElement(
    "section",
    { class: "auto-grid mb-0" },
    `<h3>Default ${modifier}</h3>
  <h3>Primary ${modifier}</h3>
  <h3>Secondary ${modifier}</h3>
  <h3>Contrast ${modifier}</h3>
  <h3>Success ${modifier}</h3>
  <h3>Info ${modifier}</h3>
  <h3>Warning ${modifier}</h3>
  <h3>Danger ${modifier}</h3>`,
  )}
  ${renderElement(
    "section",
    { class: "auto-grid" },
    `${CardListDemo.unorderedList()}
  ${CardListDemo.unorderedList({ class: `${modifier} primary` })}
  ${CardListDemo.unorderedList({ class: `${modifier} secondary` })}
  ${CardListDemo.unorderedList({ class: `${modifier} contrast` })}
  ${CardListDemo.unorderedList({ class: `${modifier} success` })}
  ${CardListDemo.unorderedList({ class: `${modifier} info` })}
  ${CardListDemo.unorderedList({ class: `${modifier} warning` })}
  ${CardListDemo.unorderedList({ class: `${modifier} danger` })}`,
  )}`;
}

export function main() {
  return renderElement(
    "main",
    { class: "container" },
    `<h1>Card Lists</h1>

<br>
${defaultAndIntentVariants()}

<hr>
${defaultAndIntentVariants("subtle")}

<hr>
${defaultAndIntentVariants("ghost")}

<hr>
${defaultAndIntentVariants("striped")}

<hr>
${defaultAndIntentVariants("striped subtle")}

<hr>
${defaultAndIntentVariants("striped ghost")}

<hr>
${renderElement(
  "section",
  { class: "auto-grid mb-0" },
  `<h4>Nested intent</h4>
<h4>Nested intent subtle</h4>
<h4>Nested intent ghost</h4>
<h4>Nested intent striped</h4>
<h4>Nested intent subtle striped</h4>
<h4>Nested intent ghost striped</h4>`,
)}
<section class="auto-grid">
  ${CardListDemo.nestedIntentVariants({})}
  ${CardListDemo.nestedIntentVariants({ class: "subtle" })}
  ${CardListDemo.nestedIntentVariants({ class: "ghost" })}
  ${CardListDemo.nestedIntentVariants({ class: "striped" })}
  ${CardListDemo.nestedIntentVariants({ class: "striped subtle" })}
  ${CardListDemo.nestedIntentVariants({ class: "striped ghost" })}
</section>
`,
  );
}
