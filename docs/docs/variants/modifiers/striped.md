# Striped Modifier

The `.striped` class adds alternating background colors to rows or child elements, making it easier to scan across data-dense content.

The modifier works at two levels, depending on the element it's applied to:

- **On `<table>`**: Stripes `<tr>` rows inside `<tbody>` — `<thead>` and `<tfoot>` rows are left unstyled.
- **On other elements** (lists, cards, any container): Stripes every odd direct child that isn't a `<table>`.

## Tables

Apply `.striped` to a `<table>` to add zebra-striping on body rows. Row headers (`<th scope="row">`) are also striped.

<HtmlPreviewer :code="TableDemo.bigExample()" :codeCollapsed="true" />

## Lists

`.striped` works on `<ul>` and `<ol>` elements, adding alternating backgrounds to list items. This is especially helpful in card-like lists where rows benefit from visual separation.

<HtmlPreviewer :code="RoleListDemo.cardList('div', { class: 'stiped' })" :codeCollapsed="true" />

## Groups

`.striped` also stripes children of `<div>` elements with `role="list"`, useful for card-list layouts where a semantic `<ul>` isn't an option.

<HtmlPreviewer :code="RoleGroupDemo.cardGroup('div', { class: 'striped' })" :codeCollapsed="true" />

<script setup>
import { RoleListDemo, RoleGroupDemo, TableDemo } from "@demos/semantics";
</script>
