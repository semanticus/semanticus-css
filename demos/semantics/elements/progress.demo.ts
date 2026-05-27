import {
  renderElement,
  classMergeAttributes,
  renderGrid,
} from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
  return renderElement(
    "progress",
    { value: "50", max: "100", ...attrs },
    "&nbsp;",
  );
}

export function indeterminate(attrs: Record<string, string> = {}) {
  return renderElement("progress", attrs, "&nbsp;");
}

export function withLabel(attrs: Record<string, string> = {}) {
  return renderElement(
    "label",
    {},
    `Upload progress
${renderElement("progress", { value: "50", max: "100", ...attrs }, "50%")}`,
  );
}

export function card() {
  return `<article class="card">
  <h3>Uploading File...</h3>
  <progress value="65" max="100">65%</progress>
  <small>Uploading document.pdf (65% complete)</small>
</article>`;
}

export function intentVariants(
  attrs: Record<string, string> = {},
  modifier: string = "",
) {
  return renderElement(
    "section",
    {},
    `${main(classMergeAttributes(`primary ${modifier}`.trim(), attrs))}
${main(classMergeAttributes(`secondary ${modifier}`.trim(), attrs))}
${main(classMergeAttributes(`contrast ${modifier}`.trim(), attrs))}
${main(classMergeAttributes(`success ${modifier}`.trim(), attrs))}
${main(classMergeAttributes(`info ${modifier}`.trim(), attrs))}
${main(classMergeAttributes(`warning ${modifier}`.trim(), attrs))}
${main(classMergeAttributes(`danger ${modifier}`.trim(), attrs))}`,
  );
}

export function subtleVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, "subtle");
}

export function ghostVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, "ghost");
}

export function overviewVariants(attrs: Record<string, string> = {}) {
  return renderElement(
    "section",
    attrs,
    `${renderGrid(`${main({})}
${main({ class: "subtle" })}`)}

${renderGrid(`
${intentVariants()}

${subtleVariants()}`)}`,
  );
}
