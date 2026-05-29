import { renderElement } from "@scripts/utils";
import { RoleGroupDemo } from "@demos/semantics";

export function defaultAndIntentVariants(modifier: string = "") {
  return `<div class="row">
  <div class="col-2">
    <h3>Default ${modifier}</h3>
  </div>
  <div class="col-10">
    ${RoleGroupDemo.cardGroup("div", { class: `${modifier}` })}
  </div>
</div>

<div class="row">
  <div class="col-2">
    <h3>Primary ${modifier}</h3>
  </div>
  <div class="col-10">
    ${RoleGroupDemo.cardGroup("div", { class: `${modifier} primary` })}
  </div>
</div>

<div class="row">
  <div class="col-2">
    <h3>Secondary ${modifier}</h3>
  </div>
  <div class="col-10">
    ${RoleGroupDemo.cardGroup("div", { class: `${modifier} secondary` })}
  </div>
</div>

<div class="row">
  <div class="col-2">
    <h3>Contrast ${modifier}</h3>
  </div>
  <div class="col-10">
    ${RoleGroupDemo.cardGroup("div", { class: `${modifier} contrast` })}
  </div>
</div>

<div class="row">
  <div class="col-2">
    <h3>Success ${modifier}</h3>
  </div>
  <div class="col-10">
    ${RoleGroupDemo.cardGroup("div", { class: `${modifier} success` })}
  </div>
</div>

<div class="row">
  <div class="col-2">
    <h3>Info ${modifier}</h3>
  </div>
  <div class="col-10">
    ${RoleGroupDemo.cardGroup("div", { class: `${modifier} info` })}
  </div>
</div>

<div class="row">
  <div class="col-2">
    <h3>Warning ${modifier}</h3>
  </div>
  <div class="col-10">
    ${RoleGroupDemo.cardGroup("div", { class: `${modifier} warning` })}
  </div>
</div>

<div class="row">
  <div class="col-2">
    <h3>Danger ${modifier}</h3>
  </div>
  <div class="col-10">
    ${RoleGroupDemo.cardGroup("div", { class: `${modifier} danger` })}
  </div>
</div>`;
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

<div class="row">
  <div class="col-2">
    <h3>Personalized Items</h3>
  </div>
  <div class="col-10">
    ${RoleGroupDemo.cardGroupPersonalizedItems("div", {})}
  </div>
</div>

<div class="row">
  <div class="col-2">
    <h3>Ghost Personalized Items</h3>
  </div>
  <div class="col-10">
    ${RoleGroupDemo.cardGroupPersonalizedItems("div", {}, "ghost")}
  </div>
</div>

<div class="row">
  <div class="col-2">
    <h3>Subtle Personalized Items</h3>
  </div>
  <div class="col-10">
    ${RoleGroupDemo.cardGroupPersonalizedItems("div", {}, "subtle")}
  </div>
</div>

<div class="row">
  <div class="col-2">
    <h3>Striped Personalized Items</h3>
  </div>
  <div class="col-10">
    ${RoleGroupDemo.cardGroupPersonalizedItems("div", { class: "striped" })}
  </div>
</div>

<div class="row">
  <div class="col-2">
    <h3>Striped Ghost Personalized Items</h3>
  </div>
  <div class="col-10">
    ${RoleGroupDemo.cardGroupPersonalizedItems("div", { class: "striped" }, "ghost")}
  </div>
</div>

<div class="row">
  <div class="col-2">
    <h3>Striped Subtle Personalized Items</h3>
  </div>
  <div class="col-10">
    ${RoleGroupDemo.cardGroupPersonalizedItems("div", { class: "striped" }, "subtle")}
  </div>
</div>
`,
  );
}
