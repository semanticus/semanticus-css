import { renderElement } from "@scripts/utils";
import { ButtonDemo } from "@demos/semantics";

function alertSection(
  attrs: Record<string, string> = {},
  slot: string = "",
  role: "alert" | "status" = "status"
) {
  const { class: _class, ...rest } = attrs;
  return renderElement(
    "section",
    { ...rest, class: `alert ${_class || ""}`, role },
    `<p>${slot}</p>
<button aria-label="Close alert" class="close"></button>`
  );
}

export function inlineAlerts() {
  return `${alertSection({ class: "success" }, "Your changes have been saved successfully!", "status")}

${alertSection({ class: "info" }, "Please be aware of the new updates.", "status")}

${alertSection({ class: "warning ghost" }, "Your subscription is about to expire.", "alert")}

${alertSection({ class: "danger ghost" }, "An error occurred while processing your request. Please try again later.", "alert")}`;
}

export function floatingAlerts() {
  return `<div class="position-fixed top-0 end-0 m-3 vstack gap-2" style="max-width: 320px; z-index: 1050;" role="region" aria-label="Notifications">
  ${renderElement(
    "section",
    { class: "alert success", role: "status", "aria-live": "polite" },
    `<p>Changes saved successfully</p>
<button aria-label="Dismiss notification" class="close"></button>`
  )}
  ${renderElement(
    "section",
    { class: "alert danger", role: "alert" },
    `<p>Connection lost. Reconnecting...</p>
<button aria-label="Dismiss notification" class="close"></button>`
  )}
</div>`;
}

export function inlineAlerts2() {
  return `${inlineAlert({ class: `success` }, "Your changes have been saved successfully!")}

${inlineAlert({ class: `info` }, "Please be aware of the new updates.")}

${inlineAlert({ class: `warning ghost` }, "Your subscription is about to expire.")}

${inlineAlert({ class: `danger ghost` }, "An error occurred while processing your request. Please try again later.")}`;
}

export function inlineAlert(_attrs: Record<string, string> = {}, slot: string = "") {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', { ...attrs, class: `panel ${_class || ''}` }, `<p>${slot}</p>
${ButtonDemo.closeButton()}`);
}
