import { renderComponent } from "./render-component";

export function main(tagName: string = "div", attrs: Record<string, string> = {}, title: string = 'Card title') {
  return renderComponent(tagName, 'card', attrs, `<hgroup>
  <h2>${title}</h2>
  <p>Card description</p>
</hgroup>
<p>This is a sample Card</p>`);
}

export function withHeader(tagName: string = "div", attrs: Record<string, string> = {}) {
  return renderComponent(tagName, 'card', attrs, `<header>
  <h2>Card title</h2>
</header>
<p>This is a sample Card</p>`);
}

export function withFooter(tagName: string = "div", attrs: Record<string, string> = {}) {
  return renderComponent(tagName, 'card', attrs, `<hgroup>
  <h2>Card title</h2>
  <p>Card description</p>
</hgroup>
<p>This is a sample Card</p>
<footer>
  <button class="secondary">Cancel</button>
  <button>Confirm</button>
</footer>`);
}

export function withHeaderAndFooter(tagName: string = "div", attrs: Record<string, string> = {}) {
  return renderComponent(tagName, 'card', attrs, `<header>
  <h2>Card title</h2>
</header>
<p>This is a sample Card</p>
<footer>
  <button class="secondary">Cancel</button>
  <button>Confirm</button>
</footer>`);
}
