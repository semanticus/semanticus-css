import { renderElement } from "@scripts/utils";
import * as ADemo from "@demos/semantics/elements/a.demo";
import * as RoleLinkDemo from "@demos/semantics/attributes/role-link.demo";

export function intentVariants(attrs: Record<string, string> = {}) {
  return `${ADemo.intentVariants(attrs)}

<hr>

${RoleLinkDemo.intentVariants(attrs)}`;
}

export function overviewVariants(attrs: Record<string, string> = {}) {
  return renderElement('section', { role: 'toolbar', ...attrs }, `<aside>
  <ul class="ps-0">
    <li>${ADemo.main()}</li>
    <li>${ADemo.main({ class: 'secondary' })}</li>
    <li>${ADemo.main({ class: 'contrast' })}</li>
    <li>${ADemo.main({ class: 'success' })}</li>
    <li>${ADemo.main({ class: 'info' })}</li>
    <li>${ADemo.main({ class: 'warning' })}</li>
    <li>${ADemo.main({ class: 'danger' })}</li>
  </ul>
</aside>

<aside>
  <ul class="ps-0">
    <li>${RoleLinkDemo.main('button')}</li>
    <li>${RoleLinkDemo.main('button', { class: 'secondary' })}</li>
    <li>${RoleLinkDemo.main('button', { class: 'contrast' })}</li>
    <li>${RoleLinkDemo.main('button', { class: 'success' })}</li>
    <li>${RoleLinkDemo.main('button', { class: 'info' })}</li>
    <li>${RoleLinkDemo.main('button', { class: 'warning' })}</li>
    <li>${RoleLinkDemo.main('button', { class: 'danger' })}</li>
  </ul>
</aside>

<aside>
  <ul class="ps-0">
    <li>${RoleLinkDemo.main('div')}</li>
    <li>${RoleLinkDemo.main('div', { class: 'secondary' })}</li>
    <li>${RoleLinkDemo.main('div', { class: 'contrast' })}</li>
    <li>${RoleLinkDemo.main('div', { class: 'success' })}</li>
    <li>${RoleLinkDemo.main('div', { class: 'info' })}</li>
    <li>${RoleLinkDemo.main('div', { class: 'warning' })}</li>
    <li>${RoleLinkDemo.main('div', { class: 'danger' })}</li>
  </ul>
</aside>

<aside>
  <ul class="ps-0">
    <li>${ADemo.active()}</li>
    <li>${ADemo.active({ class: 'secondary' })}</li>
    <li>${ADemo.active({ class: 'contrast' })}</li>
    <li>${ADemo.active({ class: 'success' })}</li>
    <li>${ADemo.active({ class: 'info' })}</li>
    <li>${ADemo.active({ class: 'warning' })}</li>
    <li>${ADemo.active({ class: 'danger' })}</li>
  </ul>
</aside>

<aside>
  <ul class="ps-0">
    <li>${RoleLinkDemo.active('button')}</li>
    <li>${RoleLinkDemo.active('button', { class: 'secondary' })}</li>
    <li>${RoleLinkDemo.active('button', { class: 'contrast' })}</li>
    <li>${RoleLinkDemo.active('button', { class: 'success' })}</li>
    <li>${RoleLinkDemo.active('button', { class: 'info' })}</li>
    <li>${RoleLinkDemo.active('button', { class: 'warning' })}</li>
    <li>${RoleLinkDemo.active('button', { class: 'danger' })}</li>
  </ul>
</aside>

<aside>
  <ul class="ps-0">
    <li>${RoleLinkDemo.active('div')}</li>
    <li>${RoleLinkDemo.active('div', { class: 'secondary' })}</li>
    <li>${RoleLinkDemo.active('div', { class: 'contrast' })}</li>
    <li>${RoleLinkDemo.active('div', { class: 'success' })}</li>
    <li>${RoleLinkDemo.active('div', { class: 'info' })}</li>
    <li>${RoleLinkDemo.active('div', { class: 'warning' })}</li>
    <li>${RoleLinkDemo.active('div', { class: 'danger' })}</li>
  </ul>
</aside>`);
}
