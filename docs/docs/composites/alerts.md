# Alerts

Alerts are used to provide feedback messages to users. They can be used to display success, error, warning, or informational messages.

Alerts can be displayed in various contexts, such as inline within a page or as a modal dialog.

## Inline alerts

Combining the `.panel` component with **intent** and **modifier** variants can create inline alerts. These alerts are ideal for providing feedback messages within the flow of a page.

<HtmlPreviewer :code="PanelDemo.inlineAlerts()"/>

<script setup>
import { PanelDemo } from "@demos/components";
</script>
