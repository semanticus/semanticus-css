import { classMergeAttributes, renderElement } from "@scripts/utils";

function content() {
  return `<div role="status">
  <p>This is an alert message. It can contain text, images, or any other HTML elements. <a href="#">Learn more</a>.</p>
</div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.</p>

  Text without a wrapping element and a <a href="#">link</a>

  <button>Default Button</button>
  <button class="ghost">Default Ghost</button>
  <button class="subtle">Default Subtle</button>

  <button class="primary">Primary Button</button>
  <button class="primary ghost">Primary Ghost</button>
  <button class="primary subtle">Primary Subtle</button>
  `;
}

function card(attrs: Record<string, string> = {}) {
  return renderElement(
    "div",
    classMergeAttributes("pane", attrs),
    `<header>
    <h2>Card title</h2>
</header>
  <hgroup>
    <h3>Card subtitle</h3>
    <p>Card description</p>
  </hgroup>

  ${content()}
<footer>
  <button class="secondary">Cancel</button>
  <button>Confirm</button>
</footer>`,
  );
}

function pane(attrs: Record<string, string> = {}) {
  return renderElement(
    "div",
    classMergeAttributes("pane", attrs),
    `<header>
    <h2>Pane title</h2>
</header>
  <hgroup>
    <h3>Pane subtitle</h3>
    <p>Pane description</p>
  </hgroup>

  ${content()}
<footer>
  <button class="secondary">Cancel</button>
  <button>Confirm</button>
</footer>`,
  );
}

function alert(attrs: Record<string, string> = {}) {
  return renderElement(
    "div",
    { ...attrs, role: "status" },
    `<p>This is an alert message. It can contain text, images, or any other HTML elements. <a href="#">Learn more</a>.</p>`,
  );
}

export function main(attrs: Record<string, string> = {}) {
  return renderElement(
    "main",
    { class: "container", ...attrs },
    `<h1>Nested Variations</h1>

${content()}

<hr>
<br>

<div class="container pane primary">
  ${content()}
  ${card()}
  ${pane()}

  <div class="container pane secondary">
    ${content()}
    ${card()}
    ${pane()}
  </div>
</div>
    `,
  );
}
