---
title: 'role="group"'
---

# [role="group"]

The `role="group"` attribute identifies a set of related user interface objects.

Unlike a toolbar, it does not enforce keyboard navigation patterns between items.

Use it to semantically cluster controls and communicate their relationship to assistive technologies.

## Basic Usage

Use `role="group"` to create connected groups of buttons or form elements. For search groups, see [[role="search"]](/docs/semantics/attributes/role-search).

<HtmlPreviewer :code="RoleGroupDemo.main()" />

## Lists

When applied to an `<ul>`, `role="group"` will stylize the list as a connected group of items, similar to a list group component in UI libraries.

See [List Group](/docs/composites/list-group) for more examples of list groups using `role="group"`.

<HtmlPreviewer :code="ListGroupDemo.main()" />

## Input Groups

### Input with Button

<HtmlPreviewer :code="RoleGroupDemo.inputWithButton()" />

### Select with Button

<HtmlPreviewer :code="RoleGroupDemo.selectWithButton()" />

### Multiple Inputs

<HtmlPreviewer :code="RoleGroupDemo.twoInputsWithButton()" />

## Pagination Groups

<HtmlPreviewer :code="RoleGroupDemo.pagination()" />

## Practical Examples

### Newsletter Signup

<HtmlPreviewer :code="RoleGroupDemo.newsletterForm()" />

<script setup>
import { ListGroupDemo } from "@demos/composites";
import { RoleGroupDemo } from "@demos/semantics";
</script>
