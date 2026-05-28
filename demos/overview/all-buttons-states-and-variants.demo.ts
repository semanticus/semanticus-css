import { renderElement } from "@scripts/utils";
import * as ButtonsDemo from "@demos/composites/buttons.demo";

export function main() {
  return renderElement(
    "main",
    { class: "container" },
    `<h1>Buttons / RoleButtons / Input Type Buttons</h1>

<br>

<h2>Default in all States</h2>
${renderElement("section", {}, ButtonsDemo.overviewStatesAndModifiers())}

<hr>
<h2>Primary Variant in all States</h2>
${renderElement("section", {}, ButtonsDemo.overviewStatesAndModifiers("primary"))}

<hr>
<h2>Secondary Variant in all States</h2>
${renderElement("section", {}, ButtonsDemo.overviewStatesAndModifiers("secondary"))}

<hr>
<h2>Contrast Variant in all States</h2>
${renderElement("section", {}, ButtonsDemo.overviewStatesAndModifiers("contrast"))}

<hr>
<h2>Success Variant in all States</h2>
${renderElement("section", {}, ButtonsDemo.overviewStatesAndModifiers("success"))}

<hr>
<h2>Info Variant in all States</h2>
${renderElement("section", {}, ButtonsDemo.overviewStatesAndModifiers("info"))}

<hr>
<h2>Warning Variant in all States</h2>
${renderElement("section", {}, ButtonsDemo.overviewStatesAndModifiers("warning"))}

<hr>
<h2>Danger Variant in all States</h2>
${renderElement("section", {}, ButtonsDemo.overviewStatesAndModifiers("danger"))}
`,
  );
}
