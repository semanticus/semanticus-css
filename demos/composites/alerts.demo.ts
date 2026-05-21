import { renderElement } from "@scripts/utils";

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

export function dialogAlerts() {
  const deleteDialogId = "alert-dialog-delete";
  const confirmDialogId = "alert-dialog-confirm";

  return `<button command="show-modal" commandfor="${deleteDialogId}" class="danger">
  Delete Account
</button>

${renderElement(
  "dialog",
  {
    id: deleteDialogId,
    role: "alertdialog",
    "aria-modal": "true",
    "aria-labelledby": "delete-title",
    "aria-describedby": "delete-desc",
  },
  `<header>
  <h3 id="delete-title">Delete Account?</h3>
  <button aria-label="Close" class="close" commandfor="${deleteDialogId}" command="close"></button>
</header>
<p id="delete-desc">This action cannot be undone. All your data will be permanently removed.</p>
<footer>
  <button class="secondary" commandfor="${deleteDialogId}" command="close">Cancel</button>
  <button class="danger" commandfor="${deleteDialogId}" command="close">Delete</button>
</footer>`
)}

<button command="show-modal" commandfor="${confirmDialogId}" class="contrast">
  Unsaved Changes
</button>

${renderElement(
  "dialog",
  {
    id: confirmDialogId,
    role: "alertdialog",
    "aria-modal": "true",
    "aria-labelledby": "confirm-title",
    "aria-describedby": "confirm-desc",
  },
  `<header>
  <h3 id="confirm-title">Unsaved Changes</h3>
  <button aria-label="Close" class="close" commandfor="${confirmDialogId}" command="close"></button>
</header>
<p id="confirm-desc">You have unsaved changes. Are you sure you want to leave this page?</p>
<footer>
  <button class="secondary" commandfor="${confirmDialogId}" command="close">Stay on Page</button>
  <button commandfor="${confirmDialogId}" command="close">Leave Page</button>
</footer>`
)}`;
}
