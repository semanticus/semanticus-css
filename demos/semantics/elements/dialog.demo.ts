import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
	return renderElement(
		"dialog",
		{ id: "dialog-basic", ...attrs },
		`<button aria-label="Close" rel="prev" commandfor="dialog-basic" command="close"></button>
<h3>&#x1F4C5; Thank You for Registering!</h3>

<p>
  We're excited to have you join us for our
  upcoming event. Please arrive at the museum
  on time to check in and get started.
</p>

<ul>
  <li>Date: Saturday, April 15</li>
  <li>Time: 10:00am - 12:00pm</li>
</ul>`,
	);
}

export function showModal(attrs: Record<string, string> = {}) {
	return `<button command="show-modal" commandfor="dialog-basic" class="contrast">Show Modal</button>

${main(attrs)}`;
}

export function withHeaderAndFooter(attrs: Record<string, string> = {}) {
	return renderElement(
		"dialog",
		{ id: "dialog-header-footer", ...attrs },
		`<header>
  <h2>Confirm Your Membership</h2>
  <button aria-label="Close" rel="prev" commandfor="dialog-header-footer" command="close"></button>
</header>

<p>
  Thank you for signing up for a membership!
  Please review the membership details below:
</p>

<ul>
  <li>Membership: Individual</li>
  <li>Price: $10</li>
</ul>

<footer>
  <button class="secondary" commandfor="dialog-header-footer" command="close">
    Cancel
  </button>
  <button commandfor="dialog-header-footer" command="close">Confirm</button>
</footer>`,
	);
}

export function showModalWithHeaderAndFooter(
	attrs: Record<string, string> = {},
) {
	return `<button command="show-modal" commandfor="dialog-header-footer" class="contrast">Show Modal</button>

${withHeaderAndFooter(attrs)}`;
}
