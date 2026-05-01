---
title: 'role="group"'
---

<script setup>
import { RoleGroupDemo } from "@demos/semantics/attributes";
</script>

# [role="group"]

The `role="group"` attribute identifies a set of related user interface objects.

Unlike a toolbar, it does not enforce keyboard navigation patterns between items.

Use it to semantically cluster controls and communicate their relationship to assistive technologies.

## Basic Usage

Use `role="group"` to create connected groups of buttons or form elements. For search groups, see [[role="search"]](/docs/semantics/role-search).

<HtmlPreviewer :code="RoleGroupDemo.basic" />

## Input Groups

### Input with Button

<HtmlPreviewer :code="RoleGroupDemo.inputWithButton" />

### Select with Button

<HtmlPreviewer :code="RoleGroupDemo.selectWithButton" />

### Multiple Inputs

<HtmlPreviewer :code="RoleGroupDemo.multipleInputs" />

## Pagination Groups

<HtmlPreviewer :code="RoleGroupDemo.paginationExample" />

## Practical Examples

### Newsletter Signup

<HtmlPreviewer :code="RoleGroupDemo.newsletterExample" />
