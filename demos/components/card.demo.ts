import { renderElement, classMergeAttributes } from "@scripts/utils";

export function main(tagName: string = "div", attrs: Record<string, string> = {}, title: string = 'Card title') {
  return renderElement(tagName, classMergeAttributes('card', attrs), `<hgroup>
  <h2>${title}</h2>
  <p>This is the subtitle</p>
</hgroup>
<p>This is the main content of the card.</p>`);
}

export function heroSection(attrs: Record<string, string> = {}, slot: string = "") {
  return renderElement('section', classMergeAttributes('card text-center py-5 px-4', attrs), slot || `<hgroup>
  <h1>Welcome to our website</h1>
  <p>Discover our amazing products and services that can help you achieve your goals.</p>
</hgroup>
<button>Get Started</button>`);
}

export function withHeader(tagName: string = "div", attrs: Record<string, string> = {}) {
  return renderElement(tagName, classMergeAttributes('card', attrs), `<header>
  <h2>Card title</h2>
</header>
<p>This is a sample Card</p>`);
}

export function withFooter(tagName: string = "div", attrs: Record<string, string> = {}) {
  return renderElement(tagName, classMergeAttributes('card', attrs), `<hgroup>
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
  return renderElement(tagName, classMergeAttributes('card', attrs), `<header>
  <h2>Card title</h2>
</header>
<p>Cards support optional header and footer sections that are visually distinct from the main content.</p>
<footer>
  <button class="secondary">Cancel</button>
  <button>Confirm</button>
</footer>`);
}

export function htmlElements() {
  return `<!-- On article element (recommended for semantic content) -->
<article class="card">
  <p>Self-contained composition like a blog post or widget.</p>
</article>

<!-- On div element (for purely presentational containers) -->
<div class="card">
  <p>A generic container with card styling.</p>
</div>

<!-- On section element (for thematic grouping) -->
<section class="card">
  <p>Thematic grouping of content.</p>
</section>
`;
}

export function overviewVariants(attrs: Record<string, string> = {}) {
  return renderElement('section', attrs, `<section class="mb-0" role="toolbar">
  ${withHeaderAndFooter()}
  ${withHeaderAndFooter('div', { class: 'subtle' })}
  ${withHeaderAndFooter('div', { class: 'ghost' })}
</section>

<section role="toolbar">
  ${withHeaderAndFooterIntentVariants()}
  ${withHeaderAndFooterSubtleVariants()}
  ${withHeaderAndFooterGhostVariants()}
</section>`);
}

export function intentVariants(attrs: Record<string, string> = {}, modifier: string = '') {
  return renderElement('section', {}, `${main('div', classMergeAttributes(`primary ${modifier}`.trim(), attrs))}
${main('div', classMergeAttributes(`secondary ${modifier}`.trim(), attrs))}
${main('div', classMergeAttributes(`contrast ${modifier}`.trim(), attrs))}
${main('div', classMergeAttributes(`success ${modifier}`.trim(), attrs))}
${main('div', classMergeAttributes(`info ${modifier}`.trim(), attrs))}
${main('div', classMergeAttributes(`warning ${modifier}`.trim(), attrs))}
${main('div', classMergeAttributes(`danger ${modifier}`.trim(), attrs))}`);
}

export function subtleVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, 'subtle');
}

export function ghostVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, 'ghost');
}

export function withHeaderAndFooterIntentVariants(attrs: Record<string, string> = {}, modifier: string = '') {
  return renderElement('section', {}, `${withHeaderAndFooter('div', classMergeAttributes(`primary ${modifier}`.trim(), attrs))}
${withHeaderAndFooter('div', classMergeAttributes(`secondary ${modifier}`.trim(), attrs))}
${withHeaderAndFooter('div', classMergeAttributes(`contrast ${modifier}`.trim(), attrs))}
${withHeaderAndFooter('div', classMergeAttributes(`success ${modifier}`.trim(), attrs))}
${withHeaderAndFooter('div', classMergeAttributes(`info ${modifier}`.trim(), attrs))}
${withHeaderAndFooter('div', classMergeAttributes(`warning ${modifier}`.trim(), attrs))}
${withHeaderAndFooter('div', classMergeAttributes(`danger ${modifier}`.trim(), attrs))}`);
}

export function withHeaderAndFooterSubtleVariants(attrs: Record<string, string> = {}) {
  return withHeaderAndFooterIntentVariants(attrs, 'subtle');
}

export function withHeaderAndFooterGhostVariants(attrs: Record<string, string> = {}) {
  return withHeaderAndFooterIntentVariants(attrs, 'ghost');
}
