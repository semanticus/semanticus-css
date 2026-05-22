import { renderElement, classMergeAttributes } from "@scripts/utils";
import { GhostDemo, SubtleDemo, IntentDemo } from '@demos/variants';

export function main(tagName: string = "div", attrs: Record<string, string> = {}, title: string = 'Pane title') {
  return renderElement(tagName, classMergeAttributes('pane', attrs), `<hgroup>
  <h2>${title}</h2>
  <p>This is the subtitle</p>
</hgroup>
<p>This is the main content of the pane.</p>`);
}

export function heroSection(attrs: Record<string, string> = {}, slot: string = "") {
  return renderElement('section', classMergeAttributes('pane text-center py-5 px-4', attrs), slot || `<hgroup>
  <h1>Welcome to our website</h1>
  <p>Discover our amazing products and services that can help you achieve your goals.</p>
</hgroup>
<button>Get Started</button>`);
}

export function withHeaderAndFooter(tagName: string = "div", attrs: Record<string, string> = {}) {
  return renderElement(tagName, classMergeAttributes('pane', attrs), `<header>
  <h2>Pane title</h2>
</header>
<p>Panes support optional header and footer sections that are visually distinct from the main content.</p>
<footer>
  <button class="secondary">Cancel</button>
  <button>Confirm</button>
</footer>`);
}

export function overviewVariants(attrs: Record<string, string> = {}) {
  return renderElement('section', attrs, `<section class="mb-0" role="toolbar">
  ${withHeaderAndFooter()}
  ${withHeaderAndFooter('div', { class: 'subtle' })}
  ${withHeaderAndFooter('div', { class: 'ghost' })}
</section>

<section role="toolbar">
  ${IntentDemo.overviewPanesWithHeaderAndFooter()}
  ${SubtleDemo.overviewPanesWithHeaderAndFooter()}
  ${GhostDemo.overviewPanesWithHeaderAndFooter()}
</section>`);
}
