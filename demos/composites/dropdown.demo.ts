import { renderElement, classMergeAttributes } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
  return renderElement("details", attrs, `<summary aria-haspopup="menu">Dropdown</summary>
<ul role="menu">
  <li><a role="menuitem" href="#">Solid</a></li>
  <li><a role="menuitem" href="#">Liquid</a></li>
  <li><a role="menuitem" href="#">Gas</a></li>
  <li><a role="menuitem" href="#">Plasma</a></li>
</ul>`);
}

export function withRadios() {
  return `<details>
  <summary aria-haspopup="menu">Select a phase of matter...</summary>
  <ul role="menu">
    <li>
      <label>
        <input type="radio" name="phase" value="solid" />
        Solid
      </label>
    </li>
    <li>
      <label>
        <input type="radio" name="phase" value="liquid" />
        Liquid
      </label>
    </li>
  </ul>
</details>
`;
}

export function withCheckboxes(attrs: Record<string, string> = {}) {
  return renderElement("details", attrs, `<summary aria-haspopup="menu">Select phases of matter...</summary>
<ul role="menu">
  <li>
    <label>
      <input type="checkbox" name="solid" />
      Solid
    </label>
  </li>
  <li>
    <label>
      <input type="checkbox" name="liquid" />
      Liquid
    </label>
  </li>
</ul>`);
}

export function asButton(attrs: Record<string, string> = {}) {
  return renderElement("details", {}, `${renderElement("summary", { ...attrs, role: 'button', 'aria-haspopup': 'menu' }, "Dropdown as a button")}
<ul role="menu">
  <li><a role="menuitem" href="#">Solid</a></li>
  <li><a role="menuitem" href="#">Liquid</a></li>
  <li><a role="menuitem" href="#">Gas</a></li>
  <li><a role="menuitem" href="#">Plasma</a></li>
</ul>`);
}

export function validationStates() {
  return `<details>
  <summary aria-haspopup="menu" aria-invalid="false">Valid phase of matter: Solid</summary>
  <ul role="menu">
    <li><a role="menuitem" href="#">Solid</a></li>
    <li><a role="menuitem" href="#">Liquid</a></li>
    <li><a role="menuitem" href="#">Gas</a></li>
    <li><a role="menuitem" href="#">Plasma</a></li>
  </ul>
</details>

<details>
  <summary aria-haspopup="menu" aria-invalid="true">Debated classification: Plasma</summary>
  <ul role="menu">
    <li><a role="menuitem" href="#">Solid</a></li>
    <li><a role="menuitem" href="#">Liquid</a></li>
    <li><a role="menuitem" href="#">Gas</a></li>
    <li><a role="menuitem" href="#">Plasma</a></li>
  </ul>
</details>
`;
}

export function inNav() {
  return `<nav>
  <ul>
    <li><strong>Acme Corp</strong></li>
  </ul>
  <ul>
    <li><a href="#">Services</a></li>
    <li>
      <details>
        <summary aria-haspopup="menu">Account</summary>
        <ul role="menu" dir="rtl">
          <li><a role="menuitem" href="#">My Profile</a></li>
          <li><a role="menuitem" href="#">My Settings</a></li>
          <li><a role="menuitem" href="#">Logout</a></li>
        </ul>
      </details>
    </li>
    <li><button>Log Out</button></li>
  </ul>
</nav>
`;
}

export function intentVariants(attrs: Record<string, string> = {}, modifier: string = '') {
    return `${asButton(classMergeAttributes(`primary ${modifier}`.trim(), attrs))}
${asButton(classMergeAttributes(`secondary ${modifier}`.trim(), attrs))}
${asButton(classMergeAttributes(`contrast ${modifier}`.trim(), attrs))}
${asButton(classMergeAttributes(`success ${modifier}`.trim(), attrs))}
${asButton(classMergeAttributes(`info ${modifier}`.trim(), attrs))}
${asButton(classMergeAttributes(`warning ${modifier}`.trim(), attrs))}
${asButton(classMergeAttributes(`danger ${modifier}`.trim(), attrs))}`;
}

export function subtleVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, 'subtle');
}

export function ghostVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, 'ghost');
}

export function overviewVariants(attrs: Record<string, string> = {}) {
  return renderElement('section', { role: 'toolbar', ...attrs }, `<section>
  ${intentVariants()}
</section>

<section>
  ${subtleVariants()}
</section>

<section>
  ${ghostVariants()}
</section>`);
}
