import { renderElement, classMergeAttributes } from "@scripts/utils";
import * as AlertsDemo from "@demos/composites/alerts.demo";

const defaultMessage = "Unable to connect to the server. Please try again.";

export function overview() {
  return `${AlertsDemo.inlineAlert('alert', 'div', { class: 'danger' }, "We couldn't reserve your seat due to connection failure.<br>Please check your internet connection.")}

<hr>

${AlertsDemo.inlineAlert('alert', 'div', { class: 'warning ghost' }, "Your reserved seat will be released in 5 minutes.")}

<hr>

Alerts with empty content, stay hidden
<!-- edit the content to see it appear on the preview above -->
${AlertsDemo.inlineAlert('alert', 'div', { class: "info subtle" }, "")}`;
}

export function intentVariants(attrs: Record<string, string> = {}, modifier: string = '') {
    return `${AlertsDemo.withCloseButton('alert', classMergeAttributes(`primary ${modifier}`.trim(), attrs), 'Uploading document 1 of 3...')}
${AlertsDemo.withCloseButton('alert', classMergeAttributes(`secondary ${modifier}`.trim(), attrs), `${defaultMessage}`)}
${AlertsDemo.withCloseButton('alert', classMergeAttributes(`contrast ${modifier}`.trim(), attrs), `${defaultMessage}`)}
${AlertsDemo.withCloseButton('alert', classMergeAttributes(`success ${modifier}`.trim(), attrs), 'Item saved successfully!')}
${AlertsDemo.withCloseButton('alert', classMergeAttributes(`info ${modifier}`.trim(), attrs), 'We are fetching your latest account details...')}
${AlertsDemo.withCloseButton('alert', classMergeAttributes(`warning ${modifier}`.trim(), attrs), 'Your session will expire in 2 minutes.')}
${AlertsDemo.withCloseButton('alert', classMergeAttributes(`danger ${modifier}`.trim(), attrs), 'Unable to connect to the server. Please try again.')}`;
}

export function subtleVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, 'subtle');
}

export function ghostVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, 'ghost');
}

export function overviewVariants(attrs: Record<string, string> = {}) {
  return renderElement('section', attrs, `<section class="grid mb-0">
  ${AlertsDemo.withCloseButton('alert')}
  ${AlertsDemo.withCloseButton('alert', { class: 'subtle' })}
  ${AlertsDemo.withCloseButton('alert', { class: 'ghost' })}
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
