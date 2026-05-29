import { renderElement } from "@scripts/utils";
import { UlDemo } from "@demos/semantics";

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
    `${UlDemo.cardList({ class: `${modifier}` })}
  ${UlDemo.cardList({ class: `${modifier} primary` })}
  ${UlDemo.cardList({ class: `${modifier} secondary` })}
  ${UlDemo.cardList({ class: `${modifier} contrast` })}
  ${UlDemo.cardList({ class: `${modifier} success` })}
  ${UlDemo.cardList({ class: `${modifier} info` })}
  ${UlDemo.cardList({ class: `${modifier} warning` })}
  ${UlDemo.cardList({ class: `${modifier} danger` })}`,
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
<h4>Nested intent ghost</h4>
<h4>Nested intent subtle</h4>
<h4>Nested intent striped</h4>
<h4>Nested intent ghost striped</h4>
<h4>Nested intent subtle striped</h4>`,
)}
<section class="auto-grid">
  ${UlDemo.overviewCardListItemIntentVariants({})}
  ${UlDemo.overviewCardListItemIntentVariants({ class: "striped" })}
</section>
`,
  );
}
