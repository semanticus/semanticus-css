import { renderElement, classMergeAttributes } from "@scripts/utils";
import { ButtonDemo } from "@demos/semantics";

const defaultMessage = "Unable to connect to the server. Please try again.";

export function main(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement(tagName, { ...attrs, role: "alert" }, slot || defaultMessage);
}

export function toast(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement(tagName, { ...attrs, popover: 'popover', role: "alert" }, slot || defaultMessage);
}

export function showToast(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = '') {
  const mergedAttrs = { id: "alert-toast", ...attrs };

  return `<button popovertarget="${mergedAttrs.id}" class="contrast">Show Alert Toast</button>

${toast(tagName, mergedAttrs, slot)}`;
}

export function withCloseButton(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement(tagName, { ...attrs, role: "alert" }, renderElement('nav', {}, `${slot || defaultMessage}
${ButtonDemo.closeButton()}`));
}

export function withHgroup() {
  return withCloseButton('div', { class: 'danger' }, `<hgroup>
  <h2>Connection error</h2>
  <p>${defaultMessage}</p>
</hgroup>`);
}

export function intentVariants(attrs: Record<string, string> = {}, modifier: string = '') {
    return `${main('div', classMergeAttributes(`primary ${modifier}`.trim(), attrs), 'Uploading document 1 of 3...')}
${main('div', classMergeAttributes(`secondary ${modifier}`.trim(), attrs), defaultMessage)}
${main('div', classMergeAttributes(`contrast ${modifier}`.trim(), attrs), defaultMessage)}
${main('div', classMergeAttributes(`success ${modifier}`.trim(), attrs), 'Item saved successfully!')}
${main('div', classMergeAttributes(`info ${modifier}`.trim(), attrs), 'We are fetching your latest account details...')}
${main('div', classMergeAttributes(`warning ${modifier}`.trim(), attrs), 'Your session will expire in 2 minutes.')}
${main('div', classMergeAttributes(`danger ${modifier}`.trim(), attrs), 'Unable to connect to the server. Please try again.')}`;
}

export function subtleVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, 'subtle');
}

export function ghostVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, 'ghost');
}

export function overviewVariants(attrs: Record<string, string> = {}) {
  return renderElement('section', attrs, `<section class="mb-0" role="toolbar">
  ${main()}
  ${main('div', { class: 'subtle' })}
  ${main('div', { class: 'ghost' })}
</section>

<section role="toolbar">
  <div>
    ${intentVariants()}
  </div>

  <div>
    ${subtleVariants()}
  </div>

  <div>
    ${ghostVariants()}
  </div>
</section>`);
}
