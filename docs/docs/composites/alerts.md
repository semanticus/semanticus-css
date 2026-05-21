# Alerts

Alerts are used to provide feedback messages to users. They can be used to display success, error, warning, or informational messages.

Alerts can be displayed in various contexts, such as inline within a page or as a modal dialog.

## Inline alerts

Inline alerts are displayed within the content of a page and are typically used for non-critical messages that do not require immediate user interaction. These alerts are ideal for providing feedback messages within the flow of a page.

<HtmlPreviewer :code="AlertsDemo.inlineAlerts()"/>

## Floating alerts

Also known as toast notifications, floating alerts are designed to appear temporarily and overlay the content of a page. They are typically used for transient messages that do not require immediate user interaction.

<HtmlPreviewer :code="AlertsDemo.floatingAlerts()"/>

## Dialog alerts

Dialog alerts are modal windows that require user interaction before they can be dismissed. They are often used for critical messages or actions that require confirmation from the user.

<HtmlPreviewer :code="AlertsDemo.dialogAlerts()"/>

<script setup>
import { AlertsDemo } from "@demos/composites";
</script>
