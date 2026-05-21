---
title: Validation States
---

<script setup>
import { AriaInvalidDemo } from "@demos/semantics/attributes";
</script>

# Validation States

Validation states provide visual feedback to users about the validity of form input.

Use the `aria-invalid` attribute to indicate validation state:

- `aria-invalid="true"` — Indicates the field has failed validation
- `aria-invalid="false"` — Indicates the field has passed validation

## Form Validation Example

Pair with `aria-describedby` to link helper text that explains the validation result:

> **Note:** The `<small>` element associated with a form control via `aria-describedby` automatically inherits the validation state colors.

<HtmlPreviewer :code="AriaInvalidDemo.formValidation()" />

## Best Practices

### Accessibility First

- Always use `aria-invalid` to communicate state to assistive technologies
- Pair with `aria-describedby` to provide context for the validation state
- Ensure error messages are clear and actionable

### Visual Feedback

- Use the `:invalid` and `:valid` pseudo-classes for native HTML5 validation
- Combine with `aria-invalid` for JavaScript-driven validation
- Helper text (`<small>`) below form controls inherits validation colors automatically

### Progressive Enhancement

1. Start with HTML5 validation attributes (`required`, `type`, `pattern`)
2. Enhance with JavaScript validation for complex rules
3. Use `aria-invalid` to communicate custom validation results

## Reference

For detailed implementation of `aria-invalid` on specific elements, see the [\[aria-invalid\]](/docs/semantics/attributes/aria-invalid) documentation.
