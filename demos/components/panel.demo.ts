import { renderElement, classMergeAttributes } from "@scripts/utils";

export function main(tagName: string = "div", attrs: Record<string, string> = {}, title: string = 'Panel title') {
  return renderElement(tagName, classMergeAttributes('panel', attrs), `<hgroup>
  <h2>${title}</h2>
  <p>This is the subtitle</p>
</hgroup>
<p>This is the main content of the panel.</p>`);
}
