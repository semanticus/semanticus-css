# About

**Semanticus CSS** is inspired by the semantic and accessible foundations of **Pico CSS** and the flexibility of utility composition patterns popularized by **Bootstrap**.

**Semanticus CSS** aims to address the friction that often appears shortly after installing **Pico CSS**, when you want to customize `spacing`, `layout`, `colors`, and other CSS properties. It does so by combining **Bootstrap**-style utilities adapted to the same CSS variable system used by **Pico CSS**.

## Why not just use Bootstrap?

Or any other full-fledged CSS framework, for that matter.

**Semanticus CSS**'s appeal, is not simply its smaller form factor. The real value lies in its **semantic-first** and **accessibility-focused** styling approach, which helps developers build beautiful and accessible interfaces without having to go off on a tangent to study the complexities of **ARIA** patterns and accessibility implementation details.

## Why not just use Pico CSS?

Sadly **Pico CSS** has not been actively maintained for a while, and it lacks a clear roadmap for future development.

Besides the convenience and added flexibility of utility classes, **Semanticus CSS** aims to uphold **Pico CSS**'s accessibility principles as part of the design.

For instance, it kept the following accessibility features:

- A **loading** region can be expressed with `aria-busy="true"`
- **Validation** can be expressed with `aria-invalid`
- **Disabled** controls remain native disabled controls

And updated existing ones using the latest web platform features and patterns, e.g.:

- **Tooltips** use the [ARIA: tooltip pattern](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role)
- **Dropdowns** use the [ARIA: menu pattern](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- **Modals** use the [Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API)
- **Sidebars** use the [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
