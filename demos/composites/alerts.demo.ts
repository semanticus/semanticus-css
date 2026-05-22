import { DialogDemo, RoleStatusDemo, RoleAlertDemo } from "@demos/semantics";

export function inlineAlerts() {
  return `${RoleStatusDemo.main('div', { class: 'success' }, "Item saved successfully!")}

<hr>

${RoleAlertDemo.main('div', { class: 'danger' }, "Unable to connect to the server. Please try again.")}`;
}

export function floatingAlerts() {
  return `<div style="min-height: 200px;">
${RoleStatusDemo.showToast('div', { class: 'success', 'data-placement': 'top-end' }, "Item saved successfully!")}

${RoleAlertDemo.showToast('div', { class: 'danger', 'data-placement': 'bottom-end' }, "Failed to save. Please look for validation errors.")}
</div>`;
}

export function showDialogAlert(attrs: Record<string, string> = {}) {
  return DialogDemo.showDialogAlert(attrs);
}
