import { renderElement } from "@demos/utils";

function render(tagName: string, type: string, attrs: Record<string, string>, slot: string) {
  const attributes = { ...attrs };
  attributes.class = [type, attrs.class].filter(Boolean).join(" ");

  return renderElement(tagName, attributes, slot);
}

export function basic(type: string, tagName: string = "div", attrs: Record<string, string> = {}) {
  return render(tagName, type, attrs, `<hgroup>
  <h2>${type} title</h2>
  <p>${type} description</p>
</hgroup>
<p>This is a sample ${type}</p>`);
}

export function withHeader(type: string, tagName: string = "div", attrs: Record<string, string> = {}) {
  return render(tagName, type, attrs, `<header>
  <h2>${type} title</h2>
</header>
<p>This is a sample ${type}</p>`);
}

export function withFooter(type: string, tagName: string = "div", attrs: Record<string, string> = {}) {
  return render(tagName, type, attrs, `<hgroup>
  <h2>${type} title</h2>
  <p>${type} description</p>
</hgroup>
<p>This is a sample ${type}</p>
<footer>
  <button class="secondary">Cancel</button>
  <button>Confirm</button>
</footer>`);
}

export function withHeaderAndFooter(type: string, tagName: string = "div", attrs: Record<string, string> = {}) {
  return render(tagName, type, attrs, `<header>
  <h2>${type} title</h2>
</header>
<p>This is a sample ${type}</p>
<footer>
  <button class="secondary">Cancel</button>
  <button>Confirm</button>
</footer>`);
}
