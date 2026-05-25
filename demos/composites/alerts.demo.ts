import { renderElement } from "@scripts/utils";
import * as DialogDemo from "@demos/semantics/elements/dialog.demo";
import * as ButtonDemo from "@demos/semantics/elements/button.demo";

export function inlineAlert(type: 'status' | 'alert' = 'status', tagName: string = "div", attrs: Record<string, string> = {}, message: string = '') {
  return renderElement(tagName, { ...attrs, role: type }, message);
}

export function floatingAlert(type: 'status' | 'alert' = 'status', iconName: string = "search", attrs: Record<string, string> = {}, message: string = '') {
  const mergedAttrs = { id: "floating-alert", ...attrs, popover: 'popover', role: type };

  return withIconAndCloseButton(type, iconName, mergedAttrs, message);
}

export function inlineAlertsExample(type: 'status' | 'alert' = 'status') {
  return `${inlineAlert(type, 'div', { class: 'success' }, "Item saved successfully!")}

<hr>

${inlineAlert(type, 'div', { class: 'danger ghost' }, "Failed to save Item. Please check for validation errors.")}

<hr>

Alerts with empty content, stay hidden
<!-- edit the content to see it appear on the preview above -->
${inlineAlert(type, 'div', { class: "info subtle" }, "")}`;
}

export function withCloseButtonExample(attrs: Record<string, string> = {}) {
  return withCloseButton('status', attrs, "10 results found");
}

export function withIconAndOrCloseButtonExample(attrs: Record<string, string> = {}) {
  return `${withIconAndCloseButton('status', "search", attrs, "10 results found")}

<hr>

${withIcon('status', "search", attrs, "10 results found")}`;
}

export function withCloseButton(type: 'status' | 'alert' = 'status', attrs: Record<string, string> = {}, message: string = '') {
  return inlineAlert(type, 'div', attrs, `<p>${message}</p>
${ButtonDemo.closeButton({ popovertarget: attrs.id || undefined })}`);
}

export function withIcon(type: 'status' | 'alert' = 'status', iconName: string = "search", attrs: Record<string, string> = {}, message: string = '') {
  return inlineAlert(type, 'div', attrs, `<span class="icon-${iconName}" aria-hidden="true"></span>

<p>${message}</p>

<span aria-hidden="true"></span>`);
}

export function withIconAndCloseButton(type: 'status' | 'alert' = 'status', iconName: string = "search", attrs: Record<string, string> = {}, message: string = '') {
  return inlineAlert(type, 'div', attrs, `<span class="icon-${iconName}" aria-hidden="true"></span>

<p>${message}</p>

${ButtonDemo.closeButton({ popovertarget: attrs.id || undefined })}`);
}

export function withHgroupExample(attrs: Record<string, string> = {}) {
  return inlineAlert('status', 'div', attrs, `<hgroup>
  <h2>Profile Updated</h2>
  <p>Your profile information has been successfully updated.</p>
</hgroup>`);
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

${floatingAlert('status', 'date', { id: "top-start-toast", class: "primary", 'data-placement': "top-start" }, 'Top Start')}
${floatingAlert('status', 'search', { id: "top-center-toast", class: "secondary", 'data-placement': "top-center" }, 'Top Center')}
${floatingAlert('status', 'time', { id: "top-end-toast", class: "contrast", 'data-placement': "top-end" }, 'Top End')}
${floatingAlert('status', 'valid', { id: "middle-start-toast", class: "success", 'data-placement': "middle-start" }, 'Middle Start')}
${floatingAlert('status', 'loading', { id: "middle-center-toast", class: "info", 'data-placement': "middle-center" }, 'Middle Center')}
${floatingAlert('status', 'time', { id: "middle-end-toast", class: "warning", 'data-placement': "middle-end" }, 'Middle End')}
${floatingAlert('status', 'invalid', { id: "bottom-start-toast", class: "danger", 'data-placement': "bottom-start" }, 'Bottom Start')}
${floatingAlert('status', 'valid', { id: "bottom-center-toast", class: "success ghost", 'data-placement': "bottom-center" }, 'Bottom Center')}
${floatingAlert('status', 'invalid', { id: "bottom-end-toast", class: "danger ghost", 'data-placement': "bottom-end" }, 'Bottom End')}
`;
}

export function showDialogAlert(attrs: Record<string, string> = {}) {
  return DialogDemo.showDialogAlert(attrs);
}
