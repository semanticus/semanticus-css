import { renderElement } from "@scripts/utils";
import * as AlertsDemo from "@demos/composites/alerts.demo";
import * as ButtonDemo from "@demos/semantics/elements/button.demo";

function mergedAttributes(attrs: Record<string, string> = {}) {
  return { id: "floating-alert", ...attrs, popover: 'popover' };
}

export function main(type: 'status' | 'alert' = 'status', iconName: string = "search", attrs: Record<string, string> = {}, message: string = '') {
  const mergedAttrs = mergedAttributes({ ...attrs, role: type });

  return AlertsDemo.main(type, 'div', mergedAttrs, `<span class="icon-${iconName}" aria-hidden="true"></span>
<p>${message}</p>
${ButtonDemo.closeButton({ popovertarget: mergedAttrs.id || undefined })}`);
}

export function showToast() {
  return renderElement('div', { style: 'padding-top: 45px; height: 150px;' }, `<button popovertarget="floating-alert" class="contrast">Show Toast</button>

${AlertsDemo.withCloseButton('status', mergedAttributes({ id: "floating-alert", class: 'info', 'data-placement': "top-center" }), "Connection established!")}`);
}

export function overviewShowToasts() {
  return `<section class="auto-grid" style="padding-block: 70px;">
  <button popovertarget="top-start-toast" class="contrast">Top Start</button>
  <button popovertarget="top-center-toast" class="contrast">Top Center</button>
  <button popovertarget="top-end-toast" class="contrast">Top End</button>
  <button popovertarget="middle-start-toast" class="contrast">Middle Start</button>
</section>

<section class="auto-grid" style="padding-block: 70px;">
  <button popovertarget="middle-center-toast" class="contrast">Middle Center</button>
  <button popovertarget="middle-end-toast" class="contrast">Middle End</button>
  <button popovertarget="bottom-start-toast" class="contrast">Bottom Start</button>
  <button popovertarget="bottom-center-toast" class="contrast">Bottom Center</button>
  <button popovertarget="bottom-end-toast" class="contrast">Bottom End</button>
</section>

${main('status', 'date', { id: "top-start-toast", class: "primary", 'data-placement': "top-start" }, 'Top Start')}
${main('status', 'search', { id: "top-center-toast", class: "secondary", 'data-placement': "top-center" }, 'Top Center')}
${main('status', 'time', { id: "top-end-toast", class: "contrast", 'data-placement': "top-end" }, 'Top End')}
${main('status', 'valid', { id: "middle-start-toast", class: "success", 'data-placement': "middle-start" }, 'Middle Start')}
${main('status', 'loading', { id: "middle-center-toast", class: "info", 'data-placement': "middle-center" }, 'Middle Center')}
${main('status', 'time', { id: "middle-end-toast", class: "warning", 'data-placement': "middle-end" }, 'Middle End')}
${main('status', 'invalid', { id: "bottom-start-toast", class: "danger", 'data-placement': "bottom-start" }, 'Bottom Start')}
${main('status', 'valid', { id: "bottom-center-toast", class: "success ghost", 'data-placement': "bottom-center" }, 'Bottom Center')}
${main('status', 'invalid', { id: "bottom-end-toast", class: "danger ghost", 'data-placement': "bottom-end" }, 'Bottom End')}
`;
}
