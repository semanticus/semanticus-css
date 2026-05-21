import { renderComponent } from "./render-component";

export function main(tagName: string = "div", attrs: Record<string, string> = {}, title: string = 'Card title') {
  return renderComponent(tagName, 'card', attrs, `<hgroup>
  <h2>${title}</h2>
  <p>This is the subtitle</p>
</hgroup>
<p>This is the main content of the card.</p>`);
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
<p>Cards support optional header and footer sections that are visually distinct from the main content.</p>
<footer>
  <button class="secondary">Cancel</button>
  <button>Confirm</button>
</footer>`);
}

export function modifiersAndUtilities() {
  return `<section class="card primary subtle text-center rounded-0 shadow-none">
  <hgroup>
    <h1>Welcome to our website</h1>
    <p>Discover our amazing products and services that can help you achieve your goals.</p>
  </hgroup>
  <button>Get Started</button>
</section>
`;
}
