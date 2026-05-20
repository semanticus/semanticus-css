import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
  return renderElement("progress", { value: "50", max: "100", ...attrs }, '&nbsp;');
}

export function indeterminate(attrs: Record<string, string> = {}) {
  return renderElement("progress", attrs, '&nbsp;');
}

export function withLabel(attrs: Record<string, string> = {}) {
  return renderElement("label", {}, `Upload progress
${renderElement("progress", { value: "50", max: "100", ...attrs }, "50%")}`);
}

export function card() {
  return `<article class="card">
  <h3>Uploading File...</h3>
  <progress value="65" max="100">65%</progress>
  <small>Uploading document.pdf (65% complete)</small>
</article>`;
}
