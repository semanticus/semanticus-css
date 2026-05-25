import { renderElement, classMergeAttributes } from "@scripts/utils";
import * as AlertsDemo from "@demos/composites/alerts.demo";

const defaultMessage = "10 results found";

export function overview() {
  return `${AlertsDemo.main('status', 'div', { class: 'success' }, "Item saved successfully!")}

<hr>

${AlertsDemo.main('status', 'div', { class: 'danger ghost' }, "Failed to save Item. Please check for validation errors.")}

<hr>

Alerts with empty content, stay hidden
<!-- edit the content to see it appear on the preview above -->
${AlertsDemo.main('status', 'div', { class: "info subtle" }, "")}`;
}

export function intentVariants(attrs: Record<string, string> = {}, modifier: string = '') {
    return `${AlertsDemo.withCloseButton('status', classMergeAttributes(`primary ${modifier}`.trim(), attrs), 'Uploading document 1 of 3...')}
${AlertsDemo.withCloseButton('status', classMergeAttributes(`secondary ${modifier}`.trim(), attrs), `${defaultMessage}`)}
${AlertsDemo.withCloseButton('status', classMergeAttributes(`contrast ${modifier}`.trim(), attrs), `${defaultMessage}`)}
${AlertsDemo.withCloseButton('status', classMergeAttributes(`success ${modifier}`.trim(), attrs), 'Item saved successfully!')}
${AlertsDemo.withCloseButton('status', classMergeAttributes(`info ${modifier}`.trim(), attrs), 'We are fetching your latest account details...')}
${AlertsDemo.withCloseButton('status', classMergeAttributes(`warning ${modifier}`.trim(), attrs), 'Your session will expire in 2 minutes.')}
${AlertsDemo.withCloseButton('status', classMergeAttributes(`danger ${modifier}`.trim(), attrs), 'Unable to connect to the server. Please try again.')}`;
}

export function subtleVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, 'subtle');
}

export function ghostVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, 'ghost');
}

export function overviewVariants(attrs: Record<string, string> = {}) {
  return renderElement('section', attrs, `<div class="grid">
  ${AlertsDemo.withCloseButton('status', {}, 'Uploading document 1 of 3...')}
  ${AlertsDemo.withCloseButton('status', { class: 'subtle' }, 'Uploading document 1 of 3...')}
  ${AlertsDemo.withCloseButton('status', { class: 'ghost' }, 'Uploading document 1 of 3...')}
</div>

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
