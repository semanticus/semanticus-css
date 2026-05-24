import * as DialogDemo from "@demos/semantics/elements/dialog.demo";
import * as RoleStatusDemo from "@demos/semantics/attributes/role-status.demo";
import * as RoleAlertDemo from "@demos/semantics/attributes/role-alert.demo";

export function inlineAlerts() {
  return `${RoleStatusDemo.main('div', { class: 'success' }, "Item saved successfully!")}

<hr>

${RoleAlertDemo.main('div', { class: 'danger' }, "Unable to connect to the server. Please try again.")}`;
}

export function floatingAlerts() {
  return `<div style="min-height: 200px;">
${RoleStatusDemo.showToast('div', { class: 'success', 'data-placement': 'top-end' }, "<p>Item saved successfully!</p>")}

${RoleAlertDemo.showToast('div', { class: 'danger', 'data-placement': 'bottom-end' }, "<p>Failed to save. Please look for validation errors.</p>")}
</div>`;
}

export function showDialogAlert(attrs: Record<string, string> = {}) {
  return DialogDemo.showDialogAlert(attrs);
}
