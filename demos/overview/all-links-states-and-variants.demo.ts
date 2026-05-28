import { renderElement } from "@scripts/utils";
import * as LinksDemo from "@demos/composites/links.demo";

export function main() {
  return renderElement(
    "main",
    { class: "container" },
    `<h1>Links / RoleLinks</h1>

<br>

<h2>Default in all States</h2>
${renderElement("section", {}, LinksDemo.overviewStatesAndModifiers())}

<hr>
<h2>Primary Variant in all States</h2>
${renderElement("section", {}, LinksDemo.overviewStatesAndModifiers("primary"))}

<hr>
<h2>Secondary Variant in all States</h2>
${renderElement("section", {}, LinksDemo.overviewStatesAndModifiers("secondary"))}

<hr>
<h2>Contrast Variant in all States</h2>
${renderElement("section", {}, LinksDemo.overviewStatesAndModifiers("contrast"))}

<hr>
<h2>Success Variant in all States</h2>
${renderElement("section", {}, LinksDemo.overviewStatesAndModifiers("success"))}

<hr>
<h2>Info Variant in all States</h2>
${renderElement("section", {}, LinksDemo.overviewStatesAndModifiers("info"))}

<hr>
<h2>Warning Variant in all States</h2>
${renderElement("section", {}, LinksDemo.overviewStatesAndModifiers("warning"))}

<hr>
<h2>Danger Variant in all States</h2>
${renderElement("section", {}, LinksDemo.overviewStatesAndModifiers("danger"))}
`,
  );
}
