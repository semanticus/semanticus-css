---
title: a
---

<script setup>
const example2Html = `<a href="#">Regular link</a>
<hr>
<a href="#" aria-current="page">Active link</a>
<hr>
<a href="#">Regular link</a>
`;
</script>

# &lt;a&gt;

The `aria-current="page"` attribute tells assistive technologies which link represents the current page.

<HtmlPreviewer :code="example2Html" />

For `.secondary` and `.contrast` color styles, see [Link Variants](/variants/components/links).
