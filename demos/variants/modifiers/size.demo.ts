import { DropdownDemo } from "@demos/composites";
import { CardDemo, PaneDemo } from "@demos/components";

export const sizeOptions = ["size-sm", "size-md", "size-lg"] as const;
export type SizeModifier = typeof sizeOptions[number];

function comparison(render: (size: string) => string, size: SizeModifier) {
  return `<div class="auto-grid" style="--auto-grid-min-column: 18rem">
  <section data-size="default"><h3>Default</h3>${render("")}</section>
  <section data-size="${size}"><h3>.${size}</h3>${render(size)}</section>
</div>`;
}

export function buttons(size: SizeModifier = "size-sm") {
  return comparison(size => `<p><button type="button" class="${size}">Save changes</button></p>
<p><button type="button" class="secondary ghost ${size}">Cancel</button></p>
<p><button type="button" class="${size}" disabled>Unavailable</button></p>`, size);
}

export function roleButtons(size: SizeModifier = "size-sm") {
  return comparison(size => `<div role="button" tabindex="0" aria-pressed="false" class="${size}"
  onclick="this.setAttribute('aria-pressed', this.getAttribute('aria-pressed') !== 'true')"
  onkeydown="if (event.key === ' ' || event.key === 'Enter') { event.preventDefault(); this.click(); }">Pin item</div>`, size);
}

export function inputButtons(size: SizeModifier = "size-sm") {
  return comparison(size => `<p><input type="button" class="${size}" value="Action"></p>
<p><input type="submit" class="${size}" value="Submit"></p>
<p><input type="reset" class="${size}" value="Reset"></p>`, size);
}

export function inputs(size: SizeModifier = "size-sm") {
  return comparison(size => `<label class="${size}">Text <input class="${size}" type="text" value="Example text"></label>
<label class="${size}">Search <input class="${size}" type="search" placeholder="Search" aria-invalid="false"></label>
<label class="${size}">Email <input class="${size}" type="email" value="invalid" aria-invalid="true"></label>
<label class="${size}">Number <input class="${size}" type="number" value="12"></label>
<label class="${size}">Date <input class="${size}" type="date" value="2026-01-15"></label>
<label class="${size}">File <input class="${size}" type="file"></label>`, size);
}

export function selects(size: SizeModifier = "size-sm") {
  return comparison(size => `<label class="${size}">Language <select class="${size}"><option>English</option><option>Portuguese</option></select></label>
<label class="${size}">Topics <select class="${size}" multiple size="3"><option selected>Design</option><option>Development</option><option>Accessibility</option></select></label>`, size);
}

export function textareas(size: SizeModifier = "size-sm") {
  return comparison(size => `<label class="${size}">Notes <textarea class="${size}" rows="3">A short note.</textarea></label>`, size);
}

export function dropdowns(size: SizeModifier = "size-sm") {
  return comparison(size => `<div style="min-block-size: 12rem">${DropdownDemo.main({ class: size })}</div>
<div style="min-block-size: 12rem">${DropdownDemo.asButton().replace("<details>", `<details class="${size}">`)}</div>
<p>Open either dropdown to compare its menu spacing.</p>`, size);
}

export function cards(size: SizeModifier = "size-sm") {
  return comparison(size => CardDemo.withHeaderAndFooter("article", { class: size }), size);
}

export function panes(size: SizeModifier = "size-sm") {
  return comparison(size => PaneDemo.main("section", { class: size }, `<h4>Pane title</h4>
<p>Variable padding with unchanged content typography.</p>
<button type="button">Default-size action</button>`), size);
}

export function alerts(size: SizeModifier = "size-sm") {
  return comparison(size => `<div role="status" class="success ${size}">Your changes have been saved.</div>
<div role="alert" class="danger subtle ${size}"><p>Unable to save. Check the form and try again.</p><button type="button" onclick="this.parentElement.remove()" aria-label="Dismiss error">Dismiss</button></div>`, size);
}

export function pagination(size: SizeModifier = "size-sm") {
  return comparison(size => `<nav aria-label="Pagination">
  <div role="group" class="${size}">
    <button type="button" aria-label="Previous page" disabled>Prev</button>
    <button type="button" aria-label="Page 1" aria-current="page" onclick="this.parentElement.querySelector('[aria-current]')?.removeAttribute('aria-current'); this.setAttribute('aria-current', 'page')">1</button>
    <button type="button" aria-label="Page 2" onclick="this.parentElement.querySelector('[aria-current]')?.removeAttribute('aria-current'); this.setAttribute('aria-current', 'page')">2</button>
    <button type="button" aria-label="Page 3" onclick="this.parentElement.querySelector('[aria-current]')?.removeAttribute('aria-current'); this.setAttribute('aria-current', 'page')">3</button>
  </div>
</nav>`, size);
}

export function dialogs(size: SizeModifier = "size-sm") {
  return comparison(size => {
    const id = `${size || "default"}-dialog`;
    return `<button type="button" onclick="document.getElementById('${id}').showModal()">Open ${size || "default"} dialog</button>
<dialog id="${id}" class="${size}" aria-labelledby="${id}-title" style="width: min(32rem, calc(100vw - 2rem))">
  <header><h2 id="${id}-title">Confirm changes</h2></header>
  <p>Review your changes before continuing.</p>
  <footer><form method="dialog"><button value="cancel" class="secondary" autofocus>Cancel</button> <button value="confirm">Confirm</button></form></footer>
</dialog>`;
  }, size);
}

export function accordions(size: SizeModifier = "size-sm") {
  return comparison(size => `<details class="${size}" open>
  <summary>Plain accordion</summary>
  <p>Native summaries have no padding to reduce. The modifier changes the space around the revealed content.</p>
  <p>Content stays at its normal text size.</p>
</details>
<details class="${size}" open>
  <summary role="button">Button-style accordion</summary>
  <p>The trigger follows the selected size, while content text keeps its normal size.</p>
</details>`, size);
}

export function buttonGroups(size: SizeModifier = "size-sm") {
  return comparison(size => `<div role="group" aria-label="Text actions" class="${size}">
  <button type="button">Copy</button><button type="button" class="secondary">Paste</button><button type="button" disabled>Delete</button>
</div>`, size);
}

export function searchGroups(size: SizeModifier = "size-sm") {
  return comparison(size => `<form role="search" aria-label="Search examples" class="${size}" onsubmit="event.preventDefault(); this.nextElementSibling.textContent = 'Search submitted'">
  <input type="search" aria-label="Search text" placeholder="Search">
  <button type="submit">Search</button>
</form>
<p role="status"></p>
<div role="group" aria-label="Filter by topic" class="${size}">
  <select aria-label="Topic"><option>All topics</option><option>Design</option></select>
  <button type="button">Filter</button>
</div>
<div role="group" aria-label="Search with scope" class="${size}">
  <input type="search" aria-label="Scoped search" placeholder="Search">
  <details><summary role="button" aria-haspopup="menu">Scope</summary><ul role="menu"><li><a role="menuitem" href="#all">All</a></li></ul></details>
  <button type="button">Go</button>
</div>`, size);
}

export function checkboxes(size: SizeModifier = "size-sm") {
  return comparison(size => `<p><label class="${size}"><input type="checkbox" checked> Checked option</label></p>
<p><label class="${size}"><input type="checkbox"> Another option</label></p>
<p><label class="${size}"><input type="checkbox" disabled> Unavailable option</label></p>`, size);
}

export function radios(size: SizeModifier = "size-sm") {
  return comparison(size => `<fieldset><legend>Choose an option</legend>
<p><label class="${size}"><input type="radio" name="radio-${size || "default"}" value="first" checked> First option</label></p>
<p><label class="${size}"><input type="radio" name="radio-${size || "default"}" value="second"> Second option</label></p>
<p><label class="${size}"><input type="radio" name="radio-${size || "default"}" value="third" disabled> Unavailable option</label></p>
</fieldset>`, size);
}

export function switches(size: SizeModifier = "size-sm") {
  return comparison(size => `<p><label class="${size}"><input type="checkbox" role="switch" checked> Notifications</label></p>
<p><label class="${size}"><input type="checkbox" role="switch"> Automatic updates</label></p>
<p><label class="${size}"><input type="checkbox" role="switch" disabled> Unavailable setting</label></p>`, size);
}

export function ranges(size: SizeModifier = "size-sm") {
  return comparison(size => `<label class="${size}">Volume <input type="range" min="0" max="100" value="50"></label>
<label class="${size}">Unavailable level <input type="range" min="0" max="100" value="25" disabled></label>`, size);
}

export function colorPickers(size: SizeModifier = "size-sm") {
  return comparison(size => `<label class="${size}">Accent color <input type="color" value="#0172ad"></label>
<label class="${size}">Unavailable color <input type="color" value="#546178" disabled></label>`, size);
}

export function labels(size: SizeModifier = "size-sm") {
  return comparison(size => `<label class="${size}" for="separate-${size || "default"}">Separate label</label>
<input class="${size}" id="separate-${size || "default"}" value="Apply the modifier to both elements">
<label class="${size}">Wrapping label <input value="The direct child follows the label size"></label>
<p><label class="${size}"><input type="checkbox"> Clickable option label</label></p>`, size);
}

export function selectionGroups(size: SizeModifier = "size-sm") {
  return comparison(size => `<div role="group" aria-label="Options" class="${size}">
  <label><input type="checkbox" checked> One</label>
  <label><input type="radio" name="group-${size || "default"}" checked> Two</label>
  <label><input type="checkbox" role="switch"> Three</label>
</div>
<div role="group" aria-label="Direct controls" class="${size}">
  <input type="checkbox" aria-label="Direct checkbox" checked>
  <input type="radio" aria-label="Direct radio" checked>
  <input type="checkbox" role="switch" aria-label="Direct switch">
</div>
<div role="group" aria-label="Volume control" class="${size}"><input type="range" aria-label="Volume" value="50"></div>
<div role="group" aria-label="Accent control" class="${size}"><input type="color" aria-label="Accent color" value="#0172ad"></div>`, size);
}

export function overview() {
  return `<h2>Buttons</h2>${buttons()}
<h2>Role buttons</h2>${roleButtons()}
<h2>Input buttons</h2>${inputButtons()}
<h2>Inputs</h2>${inputs()}
<h2>Select</h2>${selects()}
<h2>Textarea</h2>${textareas()}
<h2>Dropdowns</h2>${dropdowns()}
<h2>Cards</h2>${cards()}
<h2>Panes</h2>${panes()}
<h2>Alerts</h2>${alerts()}
<h2>Pagination</h2>${pagination()}
<h2>Dialogs</h2>${dialogs()}
<h2>Accordions</h2>${accordions()}
<h2>Button groups</h2>${buttonGroups()}
<h2>Search groups</h2>${searchGroups()}
<h2>Checkboxes</h2>${checkboxes()}
<h2>Radio buttons</h2>${radios()}
<h2>Switches</h2>${switches()}
<h2>Ranges</h2>${ranges()}
<h2>Color pickers</h2>${colorPickers()}
<h2>Labels</h2>${labels()}
<h2>Selection groups</h2>${selectionGroups()}`;
}

export function scale() {
  return `<div class="auto-grid">${["", ...sizeOptions].map(size => `<section>
  <h3>${size ? `.${size}` : "No modifier"}</h3>
  <label class="${size}">Name <input value="Example"></label>
  <p><button type="button" class="${size}">Action</button></p>
  <p><label class="${size}"><input type="checkbox" checked> Option</label></p>
  <label class="${size}">Level <input type="range" value="50"></label>
  <div class="pane ${size}"><p>Container spacing changes; content text retains its normal size.</p></div>
</section>`).join("\n")}</div>`;
}
