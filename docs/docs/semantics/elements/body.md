---
title: body
---

<script setup>
import { BodyDemo } from "@demos/semantics/elements";
</script>

# &lt;body&gt;

The `<body>` element receives `width: 100%` and `min-height: 100svh`, ensuring it always fills the full viewport height. Background color, text color, and font are set via `:root` variables.

## Overview

<HtmlPreviewer :code="BodyDemo.basic()" />
