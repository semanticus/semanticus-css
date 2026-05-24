import { renderElement, classMergeAttributes } from "@scripts/utils";
import * as ButtonDemo from "@demos/semantics/elements/button.demo";

const defaultMessage = "Unable to connect to the server. Please try again.";

export function main(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement(tagName, { ...attrs, role: "alert" }, slot || defaultMessage);
}

export function toast(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = '') {
  const mergedAttrs = { id: "alert-toast", ...attrs, popover: 'popover', role: "alert" };

  return withIconAndCloseButton(tagName, mergedAttrs, slot || defaultMessage);
}

export function showToast(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = '') {
  const mergedAttrs = { id: "alert-toast", ...attrs };

  return `<button popovertarget="${mergedAttrs.id}" class="contrast">Show Alert Toast</button>

${toast(tagName, mergedAttrs, slot)}`;
}

export function overviewShowToasts() {
  return `<section class="grid" style="padding-block: 70px;">
  <button popovertarget="top-start-toast" class="contrast">Top Start</button>
  <button popovertarget="top-center-toast" class="contrast">Top Center</button>
  <button popovertarget="top-end-toast" class="contrast">Top End</button>
  <button popovertarget="middle-start-toast" class="contrast">Middle Start</button>
</section>

<section class="grid" style="padding-block: 70px;">
  <button popovertarget="middle-center-toast" class="contrast">Middle Center</button>
  <button popovertarget="middle-end-toast" class="contrast">Middle End</button>
  <button popovertarget="bottom-start-toast" class="contrast">Bottom Start</button>
  <button popovertarget="bottom-center-toast" class="contrast">Bottom Center</button>
  <button popovertarget="bottom-end-toast" class="contrast">Bottom End</button>
</section>

${toast('div', { id: "top-start-toast", class: "primary", 'data-placement': "top-start" }, 'Top Start')}
${toast('div', { id: "top-center-toast", class: "secondary", 'data-placement': "top-center" }, 'Top Center')}
${toast('div', { id: "top-end-toast", class: "contrast", 'data-placement': "top-end" }, 'Top End')}
${toast('div', { id: "middle-start-toast", class: "success", 'data-placement': "middle-start" }, 'Middle Start')}
${toast('div', { id: "middle-center-toast", class: "info", 'data-placement': "middle-center" }, 'Middle Center')}
${toast('div', { id: "middle-end-toast", class: "warning", 'data-placement': "middle-end" }, 'Middle End')}
${toast('div', { id: "bottom-start-toast", class: "danger", 'data-placement': "bottom-start" }, 'Bottom Start')}
${toast('div', { id: "bottom-center-toast", class: "success ghost", 'data-placement': "bottom-center" }, 'Bottom Center')}
${toast('div', { id: "bottom-end-toast", class: "danger ghost", 'data-placement': "bottom-end" }, 'Bottom End')}
`;
}

export function withCloseButton(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement(tagName, { ...attrs, role: "alert" }, `${slot || `<p>${defaultMessage}</p>`}
${ButtonDemo.closeButton({ popovertarget: attrs.id || undefined })}`);
}

export function withIconAndCloseButton(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement(tagName, { ...attrs, role: "alert" }, `<span class="icon-invalid" aria-hidden="true"></span>

<p>${slot || defaultMessage}</p>

${ButtonDemo.closeButton({ popovertarget: attrs.id || undefined })}`);
}

export function withHgroup() {
  return withCloseButton('div', { class: 'contrast' }, `<hgroup>
  <h2>You appear to be offline</h2>
  <p>Please check your internet connection, to get the latest updates.</p>
</hgroup>`);
}

export function intentVariants(attrs: Record<string, string> = {}, modifier: string = '') {
    return `${withCloseButton('div', classMergeAttributes(`primary ${modifier}`.trim(), attrs), '<p>Uploading document 1 of 3...</p>')}
${withCloseButton('div', classMergeAttributes(`secondary ${modifier}`.trim(), attrs), `<p>${defaultMessage}</p>`)}
${withCloseButton('div', classMergeAttributes(`contrast ${modifier}`.trim(), attrs), `<p>${defaultMessage}</p>`)}
${withCloseButton('div', classMergeAttributes(`success ${modifier}`.trim(), attrs), '<p>Item saved successfully!</p>')}
${withCloseButton('div', classMergeAttributes(`info ${modifier}`.trim(), attrs), '<p>We are fetching your latest account details...</p>')}
${withCloseButton('div', classMergeAttributes(`warning ${modifier}`.trim(), attrs), '<p>Your session will expire in 2 minutes.</p>')}
${withCloseButton('div', classMergeAttributes(`danger ${modifier}`.trim(), attrs), '<p>Unable to connect to the server. Please try again.</p>')}`;
}

export function subtleVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, 'subtle');
}

export function ghostVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, 'ghost');
}

export function overviewVariants(attrs: Record<string, string> = {}) {
  return renderElement('section', attrs, `<section class="grid mb-0">
  ${withCloseButton()}
  ${withCloseButton('div', { class: 'subtle' })}
  ${withCloseButton('div', { class: 'ghost' })}
</section>

<section class="grid">
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
