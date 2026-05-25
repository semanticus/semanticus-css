import { renderElement, classMergeAttributes } from "@scripts/utils";
import * as ButtonDemo from "@demos/semantics/elements/button.demo";

export function main(type: 'status' | 'alert' = 'status', tagName: string = "div", attrs: Record<string, string> = {}, message: string = '') {
  return renderElement(tagName, { ...attrs, role: type }, message);
}

export function savedItemExample(attrs: Record<string, string> = {}) {
  return main('status', 'div', classMergeAttributes('success', attrs), "Item saved successfully.");
}

export function failedToSaveItemExample(attrs: Record<string, string> = {}) {
  return main('status', 'div', classMergeAttributes('danger', attrs), "Failed to save Item. Please check for validation errors.");
}

export function overview(type: 'status' | 'alert' = 'status') {
  return `${savedItemExample()}

<hr>

${failedToSaveItemExample()}

<hr>

Alerts with empty content, stay hidden
<!-- add text to the element below and watch it appear automatically -->
${main(type, 'div', { class: "info subtle" }, "")}`;
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
  return main(type, 'div', attrs, `<p>${message}</p>
${ButtonDemo.closeButton({ popovertarget: attrs.id || undefined })}`);
}

export function withIcon(type: 'status' | 'alert' = 'status', iconName: string = "search", attrs: Record<string, string> = {}, message: string = '') {
  return main(type, 'div', attrs, `<span class="icon-${iconName}" aria-hidden="true"></span>
<p>${message}</p>
<span aria-hidden="true"></span>`);
}

export function withIconAndCloseButton(type: 'status' | 'alert' = 'status', iconName: string = "search", attrs: Record<string, string> = {}, message: string = '') {
  return main(type, 'div', attrs, `<span class="icon-${iconName}" aria-hidden="true"></span>
<p>${message}</p>
${ButtonDemo.closeButton({ popovertarget: attrs.id || undefined })}`);
}

export function withHgroupExample(attrs: Record<string, string> = {}) {
  return main('status', 'div', attrs, `<hgroup>
  <h2>Profile Updated</h2>
  <p>Your profile information has been successfully updated.</p>
</hgroup>`);
}

export function littleBitOfEverything(type: 'status' | 'alert' = 'status') {
  return main(type, 'div', { class: 'danger ghost' }, `<span class="icon-invalid fs-3" aria-hidden="true"></span>
<hgroup>
  <h2>Connection error</h2>
  <p>There was an issue connecting to the server. Please try again later.</p>
</hgroup>
${ButtonDemo.closeButton({})}`);
}
