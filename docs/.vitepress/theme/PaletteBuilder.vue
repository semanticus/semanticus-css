<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from "vue";
import { useData } from "vitepress";
import { CustomizerDemo } from "@demos/overview";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
import githubLight from "highlight.js/styles/github.css?raw";
import githubDark from "highlight.js/styles/github-dark.css?raw";
import { cdnBaseUrl } from "@scripts/utils";

hljs.registerLanguage("html", html);

const { isDark, site } = useData();

const basePath = computed(() => site.value.base || "/");

const cssStyles = computed(() => {
  return isDark.value ? githubDark : githubLight;
});

function htmlTemplate(base, theme) {
  return `<!DOCTYPE html>
<html lang="en" data-theme="${theme}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <title>Semanticus CSS Palette Builder</title>
  <link rel="stylesheet" href="${base}semanticus.css" id="theme-stylesheet">
  <style>
    body { transition: background-color 0.3s ease, color 0.3s ease; }
  </style>
</head>
<body class="px-2">
  ${CustomizerDemo.main({ class: "container-fluid" })}

  <script>
    window.addEventListener('message', function(event) {
      if (event.data && event.data.type === 'update-palette-css') {
        var customStyle = document.getElementById('palette-builder-custom');
        if (!customStyle) {
          customStyle = document.createElement('style');
          customStyle.id = 'palette-builder-custom';
          document.head.appendChild(customStyle);
        }
        customStyle.textContent = event.data.css || '';
      }
      if (event.data && event.data.type === 'request-computed-colors') {
        var testEl = document.createElement('div');
        testEl.style.display = 'none';
        document.body.appendChild(testEl);
        var colors = {};
        for (var i = 0; i < event.data.vars.length; i++) {
          var item = event.data.vars[i];
          if (item.isColor) {
            testEl.style.color = '';
            testEl.style.color = 'var(' + item.name + ')';
            colors[item.name] = getComputedStyle(testEl).color;
          } else {
            colors[item.name] = getComputedStyle(document.documentElement).getPropertyValue(item.name).trim();
          }
        }
        testEl.remove();
        event.source.postMessage({
          type: 'computed-colors',
          requestId: event.data.requestId,
          colors: colors
        }, '*');
      }
    });
    document.addEventListener('click', function(e) {
      var anchor = e.target.closest('a[href]');
      if (!anchor) return;
      var href = anchor.getAttribute('href');
      if (!href) return;
      if (href.startsWith('#') && href !== '#' && href !== '#!') {
        var targetEl = document.getElementById(href.slice(1));
        if (targetEl && targetEl.tagName === 'DIALOG') {
          e.preventDefault();
          targetEl.setAttribute('open', '');
          return;
        }
      }
      if (href === '#' || href === '#!') {
        var dialog = anchor.closest('dialog');
        if (dialog) {
          e.preventDefault();
          dialog.removeAttribute('open');
          return;
        }
      }
    });
  <\/script>
</body>
</html>`;
}

const previewTheme = ref(isDark.value ? "dark" : "light");

const iframeContent = computed(() => {
  return htmlTemplate(basePath.value, previewTheme.value);
});

function togglePreviewTheme() {
  previewTheme.value = previewTheme.value === "light" ? "dark" : "light";
  computedReady.value = false;
  Object.keys(computedColors).forEach((k) => delete computedColors[k]);
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function hasColorVar(value) {
  return (
    typeof value === "string" &&
    (value.includes("var(--") ||
      value.includes("light-dark") ||
      value.includes("color-mix") ||
      value.includes("oklch") ||
      value.startsWith("#"))
  );
}

function varType(defaultValue) {
  return hasColorVar(defaultValue) ? "color" : "text";
}

// ── Variable definitions (color variables from src/variables/_theme.css) ──

const variableGroups = [
  {
    label: "Core Colors",
    vars: [
      {
        name: "--background-color",
        label: "Background",
        desc: "Main page background.",
        type: varType(
          "light-dark(white, color-mix(in srgb, #0e1118, #181c25))",
        ),
        default: "light-dark(white, color-mix(in srgb, #0e1118, #181c25))",
      },
      {
        name: "--color",
        label: "Text",
        desc: "Default body text color.",
        type: varType("light-dark(#373c44, #c2c7d0)"),
        default: "light-dark(#373c44, #c2c7d0)",
      },
      {
        name: "--color-muted",
        label: "Muted Text",
        desc: "Subdued text for captions and hints.",
        type: varType("color-mix(in srgb, var(--color), transparent 40%)"),
        default: "color-mix(in srgb, var(--color), transparent 40%)",
      },
      {
        name: "--border-color",
        label: "Border",
        desc: "Default border color.",
        type: varType("light-dark(#dfe3eb, #2a3140)"),
        default: "light-dark(#dfe3eb, #2a3140)",
      },
      {
        name: "--typography-color",
        label: "Typography Color",
        desc: "Default text color for typographic elements.",
        type: varType("var(--color)"),
        default: "var(--color)",
      },
    ],
  },
  {
    label: "Selection",
    vars: [
      {
        name: "--selection-background-color",
        label: "Selection Background",
        desc: "Background color for ::selection text highlights.",
        type: varType("color-mix(in srgb, var(--primary-color), white 75%)"),
        default: "color-mix(in srgb, var(--primary-color), white 75%)",
      },
    ],
  },
  {
    label: "Backdrop",
    vars: [
      {
        name: "--backdrop-background-color",
        label: "Backdrop",
        desc: "Background color for ::backdrop pseudo-element (dialog, sidebar).",
        type: varType(
          "light-dark(oklch(from color-mix(in srgb, #e0e3e7, #f0f1f3) l c h / 0.75), oklch(from color-mix(in srgb, black, #0f1114) l c h / 0.75))",
        ),
        default:
          "light-dark(oklch(from color-mix(in srgb, #e0e3e7, #f0f1f3) l c h / 0.75), oklch(from color-mix(in srgb, black, #0f1114) l c h / 0.75))",
      },
    ],
  },
  {
    label: "Hover & Focus Effects",
    vars: [
      {
        name: "--color-hover-shade",
        label: "Hover Shade",
        desc: "Color mixed into base colors via color-mix() to derive hover-state variants.",
        type: varType("light-dark(#424751, #a4acba)"),
        default: "light-dark(#424751, #a4acba)",
      },
    ],
  },
  {
    label: "Primary Intent",
    vars: [
      {
        name: "--primary-color",
        label: "Primary Text",
        desc: "Primary text/link color.",
        type: varType("light-dark(#0172ad, #01aaff)"),
        default: "light-dark(#0172ad, #01aaff)",
      },
      {
        name: "--primary-background-color",
        label: "Primary Fill",
        desc: "Primary button/input fill.",
        type: varType("#0172ad"),
        default: "#0172ad",
      },
      {
        name: "--primary-color-hover",
        label: "Primary Text Hover",
        desc: "Primary text on hover.",
        type: varType(
          "color-mix(in srgb, var(--primary-color) 70%, var(--color-hover-shade))",
        ),
        default:
          "color-mix(in srgb, var(--primary-color) 70%, var(--color-hover-shade))",
      },
      {
        name: "--primary-background-color-hover",
        label: "Primary Fill Hover",
        desc: "Primary fill on hover.",
        type: varType(
          "color-mix(in srgb, var(--primary-background-color) 70%, var(--color-hover-shade))",
        ),
        default:
          "color-mix(in srgb, var(--primary-background-color) 70%, var(--color-hover-shade))",
      },
      {
        name: "--primary-outline-color",
        label: "Primary Outline",
        desc: "Outline color for primary elements.",
        type: varType(
          "color-mix(in srgb, var(--primary-color), light-dark(white, black) 30%)",
        ),
        default:
          "color-mix(in srgb, var(--primary-color), light-dark(white, black) 30%)",
      },
    ],
  },
  {
    label: "Secondary Intent",
    vars: [
      {
        name: "--secondary-color",
        label: "Secondary Text",
        desc: "Secondary text color.",
        type: varType("light-dark(#5d6b89, #969eaf)"),
        default: "light-dark(#5d6b89, #969eaf)",
      },
      {
        name: "--secondary-background-color",
        label: "Secondary Fill",
        desc: "Secondary button fill.",
        type: varType("#5d6b89"),
        default: "#5d6b89",
      },
      {
        name: "--secondary-color-hover",
        label: "Secondary Text Hover",
        desc: "Secondary text on hover.",
        type: varType(
          "color-mix(in srgb, var(--secondary-color) 70%, var(--color-hover-shade))",
        ),
        default:
          "color-mix(in srgb, var(--secondary-color) 70%, var(--color-hover-shade))",
      },
      {
        name: "--secondary-background-color-hover",
        label: "Secondary Fill Hover",
        desc: "Secondary fill on hover.",
        type: varType(
          "color-mix(in srgb, var(--secondary-background-color) 70%, var(--color-hover-shade))",
        ),
        default:
          "color-mix(in srgb, var(--secondary-background-color) 70%, var(--color-hover-shade))",
      },
      {
        name: "--secondary-outline-color",
        label: "Secondary Outline",
        desc: "Outline color for secondary elements.",
        type: varType(
          "color-mix(in srgb, var(--secondary-color) 70%, light-dark(white, black))",
        ),
        default:
          "color-mix(in srgb, var(--secondary-color) 70%, light-dark(white, black))",
      },
    ],
  },
  {
    label: "Contrast Intent",
    vars: [
      {
        name: "--contrast-color",
        label: "Contrast Text",
        desc: "Contrast text color.",
        type: varType("light-dark(#181c25, #dfe3eb)"),
        default: "light-dark(#181c25, #dfe3eb)",
      },
      {
        name: "--contrast-background-color",
        label: "Contrast Fill",
        desc: "Contrast button fill.",
        type: varType("light-dark(#181c25, #eff1f4)"),
        default: "light-dark(#181c25, #eff1f4)",
      },
      {
        name: "--contrast-color-hover",
        label: "Contrast Text Hover",
        desc: "Contrast text on hover.",
        type: varType(
          "color-mix(in srgb, var(--contrast-color) 70%, var(--color-hover-shade))",
        ),
        default:
          "color-mix(in srgb, var(--contrast-color) 70%, var(--color-hover-shade))",
      },
      {
        name: "--contrast-background-color-hover",
        label: "Contrast Fill Hover",
        desc: "Contrast fill on hover.",
        type: varType(
          "color-mix(in srgb, var(--contrast-background-color) 70%, var(--color-hover-shade))",
        ),
        default:
          "color-mix(in srgb, var(--contrast-background-color) 70%, var(--color-hover-shade))",
      },
      {
        name: "--contrast-outline-color",
        label: "Contrast Outline",
        desc: "Outline color for contrast elements.",
        type: varType(
          "color-mix(in srgb, var(--contrast-color) 70%, light-dark(white, black))",
        ),
        default:
          "color-mix(in srgb, var(--contrast-color) 70%, light-dark(white, black))",
      },
    ],
  },
  {
    label: "Success Intent",
    vars: [
      {
        name: "--success-color",
        label: "Success Text",
        desc: "Success text color.",
        type: varType("light-dark(#029764, #00cc88)"),
        default: "light-dark(#029764, #00cc88)",
      },
      {
        name: "--success-background-color",
        label: "Success Fill",
        desc: "Success button fill.",
        type: "color",
        default: "#029764",
      },
      {
        name: "--success-color-hover",
        label: "Success Text Hover",
        desc: "Success text on hover.",
        type: varType(
          "color-mix(in srgb, var(--success-color) 70%, var(--color-hover-shade))",
        ),
        default:
          "color-mix(in srgb, var(--success-color) 70%, var(--color-hover-shade))",
      },
      {
        name: "--success-background-color-hover",
        label: "Success Fill Hover",
        desc: "Success fill on hover.",
        type: varType(
          "color-mix(in srgb, var(--success-background-color) 70%, var(--color-hover-shade))",
        ),
        default:
          "color-mix(in srgb, var(--success-background-color) 70%, var(--color-hover-shade))",
      },
      {
        name: "--success-outline-color",
        label: "Success Outline",
        desc: "Outline color for success elements.",
        type: varType(
          "color-mix(in srgb, var(--success-color) 70%, light-dark(white, black))",
        ),
        default:
          "color-mix(in srgb, var(--success-color) 70%, light-dark(white, black))",
      },
    ],
  },
  {
    label: "Info Intent",
    vars: [
      {
        name: "--info-color",
        label: "Info Text",
        desc: "Info text color.",
        type: varType("light-dark(#018cd4, #79c0ff)"),
        default: "light-dark(#018cd4, #79c0ff)",
      },
      {
        name: "--info-background-color",
        label: "Info Fill",
        desc: "Info button fill.",
        type: varType("#018cd4"),
        default: "#018cd4",
      },
      {
        name: "--info-color-hover",
        label: "Info Text Hover",
        desc: "Info text on hover.",
        type: varType(
          "color-mix(in srgb, var(--info-color) 70%, var(--color-hover-shade))",
        ),
        default:
          "color-mix(in srgb, var(--info-color) 70%, var(--color-hover-shade))",
      },
      {
        name: "--info-background-color-hover",
        label: "Info Fill Hover",
        desc: "Info fill on hover.",
        type: varType(
          "color-mix(in srgb, var(--info-background-color) 70%, var(--color-hover-shade))",
        ),
        default:
          "color-mix(in srgb, var(--info-background-color) 70%, var(--color-hover-shade))",
      },
      {
        name: "--info-outline-color",
        label: "Info Outline",
        desc: "Outline color for info elements.",
        type: varType(
          "color-mix(in srgb, var(--info-color) 70%, light-dark(white, black))",
        ),
        default:
          "color-mix(in srgb, var(--info-color) 70%, light-dark(white, black))",
      },
    ],
  },
  {
    label: "Warning Intent",
    vars: [
      {
        name: "--warning-color",
        label: "Warning Text",
        desc: "Warning text color.",
        type: varType("light-dark(#c79400, #e8ae01)"),
        default: "light-dark(#c79400, #e8ae01)",
      },
      {
        name: "--warning-background-color",
        label: "Warning Fill",
        desc: "Warning button fill.",
        type: varType("#c79400"),
        default: "#c79400",
      },
      {
        name: "--warning-color-hover",
        label: "Warning Text Hover",
        desc: "Warning text on hover.",
        type: varType(
          "color-mix(in srgb, var(--warning-color) 70%, var(--color-hover-shade))",
        ),
        default:
          "color-mix(in srgb, var(--warning-color) 70%, var(--color-hover-shade))",
      },
      {
        name: "--warning-background-color-hover",
        label: "Warning Fill Hover",
        desc: "Warning fill on hover.",
        type: varType(
          "color-mix(in srgb, var(--warning-background-color) 70%, var(--color-hover-shade))",
        ),
        default:
          "color-mix(in srgb, var(--warning-background-color) 70%, var(--color-hover-shade))",
      },
      {
        name: "--warning-outline-color",
        label: "Warning Outline",
        desc: "Outline color for warning elements.",
        type: varType(
          "color-mix(in srgb, var(--warning-color) 70%, light-dark(white, black))",
        ),
        default:
          "color-mix(in srgb, var(--warning-color) 70%, light-dark(white, black))",
      },
    ],
  },
  {
    label: "Danger Intent",
    vars: [
      {
        name: "--danger-color",
        label: "Danger Text",
        desc: "Danger text color.",
        type: varType("light-dark(#ee402e, #f5a390)"),
        default: "light-dark(#ee402e, #f5a390)",
      },
      {
        name: "--danger-background-color",
        label: "Danger Fill",
        desc: "Danger button fill.",
        type: "color",
        default: "#ee402e",
      },
      {
        name: "--danger-color-hover",
        label: "Danger Text Hover",
        desc: "Danger text on hover.",
        type: varType(
          "color-mix(in srgb, var(--danger-color) 70%, var(--color-hover-shade))",
        ),
        default:
          "color-mix(in srgb, var(--danger-color) 70%, var(--color-hover-shade))",
      },
      {
        name: "--danger-background-color-hover",
        label: "Danger Fill Hover",
        desc: "Danger fill on hover.",
        type: varType(
          "color-mix(in srgb, var(--danger-background-color) 70%, var(--color-hover-shade))",
        ),
        default:
          "color-mix(in srgb, var(--danger-background-color) 70%, var(--color-hover-shade))",
      },
      {
        name: "--danger-outline-color",
        label: "Danger Outline",
        desc: "Outline color for danger elements.",
        type: varType(
          "color-mix(in srgb, var(--danger-color) 70%, light-dark(white, black))",
        ),
        default:
          "color-mix(in srgb, var(--danger-color) 70%, light-dark(white, black))",
      },
    ],
  },
  {
    label: "Code",
    vars: [
      {
        name: "--code-background-color",
        label: "Code Background",
        desc: "Background for code blocks.",
        type: varType(
          "light-dark(color-mix(in srgb, #eff1f4 75%, white), color-mix(in srgb, #181c25 75%, #202632))",
        ),
        default:
          "light-dark(color-mix(in srgb, #eff1f4 75%, white), color-mix(in srgb, #181c25 75%, #202632))",
      },
      {
        name: "--code-color",
        label: "Code Text",
        desc: "Text color inside code blocks.",
        type: varType("light-dark(#646b79, #8891a4)"),
        default: "light-dark(#646b79, #8891a4)",
      },
      {
        name: "--kbd-background-color",
        label: "Kbd Background",
        desc: "Background for keyboard elements.",
        type: varType("var(--color)"),
        default: "var(--color)",
      },
      {
        name: "--kbd-color",
        label: "Kbd Text",
        desc: "Text color for keyboard elements.",
        type: varType("var(--background-color)"),
        default: "var(--background-color)",
      },
    ],
  },
  {
    label: "Buttons",
    vars: [
      {
        name: "--buttons-color",
        label: "Button Text",
        desc: "Text color on buttons.",
        type: "color",
        default: "white",
      },
      {
        name: "--buttons-color-hover",
        label: "Button Text Hover",
        desc: "Text color on buttons when hovered.",
        type: "color",
        default: "white",
      },
      {
        name: "--buttons-background-color",
        label: "Button Background",
        desc: "Button background color.",
        type: varType("var(--primary-background-color)"),
        default: "var(--primary-background-color)",
      },
      {
        name: "--buttons-background-color-hover",
        label: "Button Background Hover",
        desc: "Button background on hover.",
        type: varType("var(--primary-background-color-hover)"),
        default: "var(--primary-background-color-hover)",
      },
    ],
  },
  {
    label: "Form Inputs",
    vars: [
      {
        name: "--inputs-background-color",
        label: "Input Background",
        desc: "Default input background.",
        type: varType(
          "light-dark(color-mix(in srgb, #eff1f4 25%, white), color-mix(in srgb, #181c25, #202632))",
        ),
        default:
          "light-dark(color-mix(in srgb, #eff1f4 25%, white), color-mix(in srgb, #181c25, #202632))",
      },
      {
        name: "--inputs-background-color-focus",
        label: "Input Active BG",
        desc: "Input background when active/focused.",
        type: varType(
          "light-dark(white, color-mix(in srgb, #181c25 75%, #202632))",
        ),
        default: "light-dark(white, color-mix(in srgb, #181c25 75%, #202632))",
      },
      {
        name: "--inputs-border-color",
        label: "Input Border",
        desc: "Input border color.",
        type: varType("light-dark(#cfd5e2, #2a3140)"),
        default: "light-dark(#cfd5e2, #2a3140)",
      },
      {
        name: "--inputs-color",
        label: "Input Text",
        desc: "Text color inside inputs.",
        type: varType("light-dark(#23262c, #e0e3e7)"),
        default: "light-dark(#23262c, #e0e3e7)",
      },
      {
        name: "--inputs-placeholder-color",
        label: "Placeholder Text",
        desc: "Placeholder text color.",
        type: varType("var(--color-muted)"),
        default: "var(--color-muted)",
      },
      {
        name: "--inputs-accent-color",
        label: "Input Accent",
        desc: "Accent color for checkboxes, radios, and range sliders.",
        type: varType("var(--primary-background-color)"),
        default: "var(--primary-background-color)",
      },
      {
        name: "--inputs-accent-color-muted",
        label: "Input Accent Muted",
        desc: "Muted accent color for unchecked/inactive states.",
        type: varType("light-dark(#bfc7d9, #333c4e)"),
        default: "light-dark(#bfc7d9, #333c4e)",
      },
    ],
  },
  {
    label: "Switch",
    vars: [
      {
        name: "--input-switch-thumb-background-color",
        label: "Switch Thumb",
        desc: "Switch thumb (knob) color.",
        type: "color",
        default: "#ffffff",
      },
    ],
  },
  {
    label: "Radio",
    vars: [
      {
        name: "--input-radio-background-color",
        label: "Radio Background",
        desc: "Radio button background color.",
        type: "color",
        default: "#ffffff",
      },
    ],
  },
  {
    label: "Range",
    vars: [
      {
        name: "--input-range-thumb-size",
        label: "Range Thumb Size",
        desc: "Range slider thumb (knob) size.",
        type: "text",
        default: "1.25rem",
      },
      {
        name: "--input-range-thumb-margin-top",
        label: "Range Thumb Margin Top",
        desc: "Range slider thumb vertical offset for centering.",
        type: "text",
        default: "-0.4375rem",
      },
      {
        name: "--input-range-thumb-border-width",
        label: "Range Thumb Border Width",
        desc: "Range slider thumb border thickness.",
        type: varType("var(--focus-ring-width)"),
        default: "var(--focus-ring-width)",
      },
      {
        name: "--input-range-track-background-color",
        label: "Range Track Background",
        desc: "Range slider track background.",
        type: varType("var(--inputs-border-color)"),
        default: "var(--inputs-border-color)",
      },
      {
        name: "--input-range-track-height",
        label: "Range Track Height",
        desc: "Range slider track height.",
        type: "text",
        default: "0.375rem",
      },
      {
        name: "--input-range-thumb-border-color",
        label: "Range Thumb Border",
        desc: "Range slider thumb border.",
        type: varType("var(--background-color)"),
        default: "var(--background-color)",
      },
    ],
  },
  {
    label: "Details / Accordion",
    vars: [
      {
        name: "--details-summary-background-color",
        label: "Summary Background",
        desc: "Accordion summary background color.",
        type: varType("var(--inputs-background-color)"),
        default: "var(--inputs-background-color)",
      },
      {
        name: "--details-summary-color",
        label: "Summary Text",
        desc: "Accordion summary text color.",
        type: varType("var(--color)"),
        default: "var(--color)",
      },
      {
        name: "--details-summary-color-open",
        label: "Summary Open",
        desc: "Accordion summary text when open.",
        type: varType("var(--color-muted)"),
        default: "var(--color-muted)",
      },
      {
        name: "--details-dropdown-color",
        label: "Dropdown Text",
        desc: "Dropdown trigger text color.",
        type: varType("var(--inputs-placeholder-color)"),
        default: "var(--inputs-placeholder-color)",
      },
      {
        name: "--details-dropdown-border-color",
        label: "Dropdown Border",
        desc: "Dropdown trigger border color.",
        type: varType("var(--inputs-border-color)"),
        default: "var(--inputs-border-color)",
      },
    ],
  },
  {
    label: "Links & Lists",
    vars: [
      {
        name: "--links-color",
        label: "Link Color",
        desc: "Default link text color.",
        type: varType("var(--primary-color)"),
        default: "var(--primary-color)",
      },
      {
        name: "--links-color-hover",
        label: "Link Color Hover",
        desc: "Link text color on hover.",
        type: varType("var(--primary-color-hover)"),
        default: "var(--primary-color-hover)",
      },
      {
        name: "--lists-marker-color",
        label: "List Marker Color",
        desc: "Color for list item markers (bullets, numbers).",
        type: varType("var(--primary-color)"),
        default: "var(--primary-color)",
      },
    ],
  },
  {
    label: "Dialog",
    vars: [
      {
        name: "--dialog-background-color",
        label: "Dialog Background",
        desc: "Dialog/card background.",
        type: varType("light-dark(var(--background-color), #181c25)"),
        default: "light-dark(var(--background-color), #181c25)",
      },
      {
        name: "--dialog-border-color",
        label: "Dialog Border",
        desc: "Dialog/card border color.",
        type: varType("var(--border-color)"),
        default: "var(--border-color)",
      },
      {
        name: "--dialog-marginals-background-color",
        label: "Marginals BG",
        desc: "Header/footer background for dialogs, and cards.",
        type: varType(
          "light-dark(color-mix(in srgb, #eff1f4 25%, white), color-mix(in srgb, #eff1f4, transparent 95%))",
        ),
        default:
          "light-dark(color-mix(in srgb, #eff1f4 25%, white), color-mix(in srgb, #eff1f4, transparent 95%))",
      },
      {
        name: "--dialog-marginals-border-color",
        label: "Marginals Border",
        desc: "Header/footer border for dialogs, and cards.",
        type: varType(
          "color-mix(in srgb, light-dark(#181c25, #969eaf), transparent 90%)",
        ),
        default:
          "color-mix(in srgb, light-dark(#181c25, #969eaf), transparent 90%)",
      },
    ],
  },
  {
    label: "Menu / Dropdown",
    vars: [
      {
        name: "--details-menu-background-color",
        label: "Menu Background",
        desc: "Dropdown menu background.",
        type: varType("light-dark(white, #181c25)"),
        default: "light-dark(white, #181c25)",
      },
      {
        name: "--details-menu-border-color",
        label: "Menu Border",
        desc: "Dropdown menu border.",
        type: varType("light-dark(#eff1f4, #202632)"),
        default: "light-dark(#eff1f4, #202632)",
      },
      {
        name: "--details-menu-color",
        label: "Menu Text",
        desc: "Dropdown menu text color.",
        type: varType("var(--color)"),
        default: "var(--color)",
      },
      {
        name: "--details-menu-background-color-hover",
        label: "Menu Hover",
        desc: "Dropdown item hover background.",
        type: varType("light-dark(#eff1f4, #202632)"),
        default: "light-dark(#eff1f4, #202632)",
      },
    ],
  },
  {
    label: "Progress",
    vars: [
      {
        name: "--progress-track-background-color",
        label: "Progress Track",
        desc: "Progress bar track (empty portion).",
        type: varType("light-dark(#dfe3eb, #202632)"),
        default: "light-dark(#dfe3eb, #202632)",
      },
      {
        name: "--progress-accent-color",
        label: "Progress Fill",
        desc: "Progress bar filled portion.",
        type: varType("var(--primary-background-color)"),
        default: "var(--primary-background-color)",
      },
    ],
  },
  {
    label: "Tooltip",
    vars: [
      {
        name: "--tooltip-background-color",
        label: "Tooltip Background",
        desc: "Tooltip background color.",
        type: varType("var(--contrast-background-color)"),
        default: "var(--contrast-background-color)",
      },
      {
        name: "--tooltip-color",
        label: "Tooltip Text",
        desc: "Tooltip text color.",
        type: varType("light-dark(white, #191c20)"),
        default: "light-dark(white, #191c20)",
      },
    ],
  },
];

// ── State ───────────────────────────────────────────────────────────────────

const customValues = reactive({});
const searchQuery = ref("");
const expandedGroups = reactive({});
const iframeRef = ref(null);
const sidebarCollapsed = ref(false);
const showExportModal = ref(false);
const exportMode = ref("inline");
const copiedFeedback = ref(null);
const activePopover = ref(null);
const computedColors = reactive({});
const computedReady = ref(false);
const pendingRequestId = ref(null);
const fileInputRef = ref(null);

// Build a lookup from variable name to its def + scope for import
const varMeta = {};
variableGroups.forEach((g) => {
  g.vars.forEach((v) => {
    varMeta[v.name] = { default: v.default, scope: getScope(v) };
  });
});

// Initialize all groups as collapsed except the first few
variableGroups.forEach((g, i) => {
  expandedGroups[g.label] = i === 0;
});

// ── Computed ────────────────────────────────────────────────────────────────

const filteredGroups = computed(() => {
  const q = searchQuery.value.toLowerCase().trim();
  if (!q) return variableGroups;

  return variableGroups
    .map((group) => ({
      ...group,
      vars: group.vars.filter(
        (v) =>
          v.name.toLowerCase().includes(q) ||
          v.label.toLowerCase().includes(q) ||
          v.desc.toLowerCase().includes(q),
      ),
    }))
    .filter((group) => group.vars.length > 0);
});

const changedCount = computed(() => Object.keys(customValues).length);

// ── Helpers ─────────────────────────────────────────────────────────────────

function getScope(v) {
  const d = v.default || "";
  if (d.includes("light-dark(")) return "theme";
  if (/^#/.test(d) || d === "white" || d === "black") return "root";
  if (d.includes("var(--") || d.includes("color-mix(") || d.includes("oklch("))
    return "theme";
  return "root";
}

function getKey(v) {
  const scope = getScope(v);
  return scope === "root"
    ? `root:${v.name}`
    : `${previewTheme.value}:${v.name}`;
}

function getDefault(v) {
  return v.default;
}

function getDisplayValue(v) {
  const key = getKey(v);
  if (computedReady.value && computedColors[v.name]) {
    return computedColors[v.name];
  }
  if (key in customValues) return customValues[key];
  return v.default;
}

function setCurrentValue(v, value) {
  const key = getKey(v);
  if (value === "" || value === v.default) {
    delete customValues[key];
  } else {
    customValues[key] = value;
  }
  updateIframeStyles();
}

function isChanged(v) {
  return getKey(v) in customValues;
}

function resetVar(v) {
  delete customValues[getKey(v)];
  updateIframeStyles();
}

function resetAll() {
  Object.keys(customValues).forEach((k) => delete customValues[k]);
  updateIframeStyles();
}

function toggleSidebar() {
  sidebarCollapsed.value = !sidebarCollapsed.value;
}

function toggleGroup(label) {
  expandedGroups[label] = !expandedGroups[label];
}

function togglePopover(varName) {
  activePopover.value = activePopover.value === varName ? null : varName;
}

function closePopover() {
  activePopover.value = null;
}

function handleDocumentClick(event) {
  if (activePopover.value && !event.target.closest(".popover-container")) {
    closePopover();
  }
}

// Convert color for the color input
function toHex(color) {
  if (!color) return "#000000";
  const s = color.trim();
  if (s.startsWith("#")) {
    if (s.length === 4) {
      return "#" + s[1] + s[1] + s[2] + s[2] + s[3] + s[3];
    }
    return s.slice(0, 7);
  }
  // rgb/rgba with commas or spaces (0-255 range)
  let m = s.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/);
  if (m) {
    const r = Math.round(parseFloat(m[1])).toString(16).padStart(2, "0");
    const g = Math.round(parseFloat(m[2])).toString(16).padStart(2, "0");
    const b = Math.round(parseFloat(m[3])).toString(16).padStart(2, "0");
    return `#${r}${g}${b}`;
  }
  // color(srgb r g b) — CSS Color Level 4 (0-1 range)
  m = s.match(/color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)/);
  if (m) {
    const r = Math.round(parseFloat(m[1]) * 255)
      .toString(16)
      .padStart(2, "0");
    const g = Math.round(parseFloat(m[2]) * 255)
      .toString(16)
      .padStart(2, "0");
    const b = Math.round(parseFloat(m[3]) * 255)
      .toString(16)
      .padStart(2, "0");
    return `#${r}${g}${b}`;
  }
  if (s === "white") return "#ffffff";
  if (s === "black") return "#000000";
  return "#000000";
}

function highlightMatch(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${escapeRegExp(query)})`, "gi");
  return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function copyToClipboard(text, type) {
  try {
    await navigator.clipboard.writeText(text);
    copiedFeedback.value = type;
    setTimeout(() => (copiedFeedback.value = null), 2000);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
}

function parseLightDark(expr) {
  const prefix = "light-dark(";
  const trimmed = expr.trimStart();
  if (!trimmed.startsWith(prefix)) return null;
  let depth = 1;
  let commaIndex = -1;
  for (let i = prefix.length; i < trimmed.length; i++) {
    const ch = trimmed[i];
    if (ch === "(") depth++;
    else if (ch === ")") {
      depth--;
      if (depth === 0) break;
    } else if (ch === "," && depth === 1) {
      commaIndex = i;
      break;
    }
  }
  if (commaIndex === -1) return null;
  const light = trimmed.slice(prefix.length, commaIndex).trim();
  const dark = trimmed.slice(commaIndex + 1, trimmed.length - 1).trim();
  return { light, dark };
}

function handleMessage(event) {
  if (event.data && event.data.type === "computed-colors") {
    if (event.source !== iframeRef.value?.contentWindow) return;
    if (event.data.requestId !== pendingRequestId.value) return;
    Object.assign(computedColors, event.data.colors);
    computedReady.value = true;
  }
}

// ── iframe Communication ────────────────────────────────────────────────────

function buildCustomCSS() {
  const rootVars = [];
  const themeVars = {}; // { '--color': { light: '#111', dark: '#eee' } }

  for (const [key, value] of Object.entries(customValues)) {
    const [scope, ...nameParts] = key.split(":");
    const name = nameParts.join(":");
    if (scope === "root") {
      rootVars.push(`  ${name}: ${value};`);
    } else if (scope === "light" || scope === "dark") {
      if (!themeVars[name]) themeVars[name] = {};
      themeVars[name][scope] = value;
    }
  }

  // Build a lookup of all theme-scoped variable definitions for default extraction
  const themeVarDefs = new Map();
  for (const group of variableGroups) {
    for (const v of group.vars) {
      if (getScope(v) === "theme") {
        themeVarDefs.set(v.name, v);
      }
    }
  }

  const themeLines = [];
  for (const [name, themes] of Object.entries(themeVars)) {
    const v = themeVarDefs.get(name);
    let lightDefault = "";
    let darkDefault = "";
    if (v) {
      const parsed = parseLightDark(v.default);
      if (parsed) {
        lightDefault = parsed.light;
        darkDefault = parsed.dark;
      } else {
        lightDefault = darkDefault = v.default;
      }
    }
    const lightVal = themes.light || lightDefault;
    const darkVal = themes.dark || darkDefault;
    themeLines.push(`  ${name}: light-dark(${lightVal}, ${darkVal});`);
  }

  const allRootLines = [...rootVars, ...themeLines];
  if (!allRootLines.length) {
    return `/* No custom variables set */`;
  }

  return `:root,\n:host {\n${allRootLines.join("\n")}\n}\n`;
}

function updateIframeStyles() {
  if (!iframeRef.value?.contentWindow) return;
  iframeRef.value.contentWindow.postMessage(
    {
      type: "update-palette-css",
      css: buildCustomCSS(),
    },
    "*",
  );
  setTimeout(requestComputedColors, 80);
}

function requestComputedColors() {
  if (!iframeRef.value?.contentWindow) return;
  const reqId = Date.now();
  pendingRequestId.value = reqId;
  const payload = [];
  for (const group of variableGroups) {
    for (const v of group.vars) {
      payload.push({ name: v.name, isColor: v.type === "color" });
    }
  }
  iframeRef.value.contentWindow.postMessage(
    {
      type: "request-computed-colors",
      requestId: reqId,
      vars: payload,
    },
    "*",
  );
}

// ── Export ─────────────────────────────────────────────────────────────────

function exportCSS() {
  showExportModal.value = true;
}

function closeExportModal() {
  showExportModal.value = false;
}

function downloadCSS() {
  const name = "custom";
  const css = buildCustomCSS();
  const header = `/* Semanticus CSS Custom Palette\n * Generated by Semanticus CSS Palette Builder\n * ${new Date().toISOString().split("T")[0]}\n */\n\n`;
  const blob = new Blob([header + css], { type: "text/css" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `semanticus.palette.${name}.css`;
  a.click();
  URL.revokeObjectURL(url);
}

const exportSnippet = computed(() => {
  const cssPath = "/css/semanticus.palette.custom.css";
  return `<link rel="stylesheet" href="${cdnBaseUrl("/dist/semanticus.css")}">\n<link rel="stylesheet" href="${cssPath}">`;
});
const highlightedExportSnippet = computed(() => {
  return hljs.highlight(exportSnippet.value, { language: "html" }).value;
});

const inlineSnippet = computed(() => {
  const css = buildCustomCSS().trimEnd();
  return `<link rel="stylesheet" href="${cdnBaseUrl("/dist/semanticus.css")}">\n<style>\n${css}\n</style>`;
});
const highlightedInlineSnippet = computed(() => {
  return hljs.highlight(inlineSnippet.value, { language: "html" }).value;
});

function triggerImport() {
  if (fileInputRef.value) {
    fileInputRef.value.value = "";
    fileInputRef.value.click();
  }
}

function handleFileImport(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const text = e.target?.result;
    if (typeof text === "string") {
      parseAndApplyCSS(text);
    }
  };
  reader.readAsText(file);
}

function parseAndApplyCSS(text) {
  const regex = /--[\w-]+\s*:\s*[^;]+/g;
  const matches = text.matchAll(regex);
  let changed = false;
  for (const match of matches) {
    const [full] = match;
    const colonIdx = full.indexOf(":");
    const name = full.slice(0, colonIdx).trim();
    const rawValue = full.slice(colonIdx + 1).trim();
    const meta = varMeta[name];
    if (!meta) continue;
    const key = getKey({ name, default: meta.default }); // reuse getKey's scope logic

    // Check if value uses light-dark() for theme-scoped vars
    const parsed = parseLightDark(rawValue);
    if (parsed) {
      // Theme-scoped variable: set both light and dark keys
      const lightKey = `light:${name}`;
      const darkKey = `dark:${name}`;
      const defParsed = parseLightDark(meta.default);
      const lightDef = defParsed ? defParsed.light : meta.default;
      const darkDef = defParsed ? defParsed.dark : meta.default;
      if (parsed.light === lightDef) {
        delete customValues[lightKey];
      } else {
        customValues[lightKey] = parsed.light;
      }
      if (parsed.dark === darkDef) {
        delete customValues[darkKey];
      } else {
        customValues[darkKey] = parsed.dark;
      }
      changed = true;
    } else {
      // Root or simple value
      const def = meta.default;
      if (rawValue === def) {
        if (key in customValues) {
          delete customValues[key];
          changed = true;
        }
      } else {
        customValues[key] = rawValue;
        changed = true;
      }
    }
  }
  if (changed) {
    updateIframeStyles();
  }
}

// ── Lifecycle ───────────────────────────────────────────────────────────────

onMounted(() => {
  window.addEventListener("message", handleMessage);
  document.addEventListener("click", handleDocumentClick);
});

onUnmounted(() => {
  window.removeEventListener("message", handleMessage);
  document.removeEventListener("click", handleDocumentClick);
});

const IFRAME_INIT_DELAY_MS = 300;

function onIframeLoad() {
  setTimeout(() => {
    updateIframeStyles();
    requestComputedColors();
  }, IFRAME_INIT_DELAY_MS);
}

defineExpose({
  changedCount,
  previewTheme,
  togglePreviewTheme,
  exportCSS,
  triggerImport,
  resetAll,
});
</script>

<template>
  <div class="palette-builder">
    <component :is="'style'" v-html="cssStyles"></component>
    <div
      class="builder-body"
      :style="{
        gridTemplateColumns: sidebarCollapsed
          ? '0px auto 1fr'
          : 'minmax(280px, 30%) auto 1fr',
      }"
    >
      <!-- Sidebar: Variable Editors -->
      <aside class="builder-sidebar" :class="{ collapsed: sidebarCollapsed }">
        <div class="search-box">
          <svg
            class="search-icon"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Search variables..."
            class="search-input"
          />
        </div>

        <div class="var-groups">
          <div
            v-for="group in filteredGroups"
            :key="group.label"
            class="var-group"
          >
            <button class="group-header" @click="toggleGroup(group.label)">
              <svg
                :class="['chevron', { expanded: expandedGroups[group.label] }]"
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span class="group-label">{{ group.label }}</span>
              <span class="group-count">{{ group.vars.length }}</span>
            </button>

            <div v-show="expandedGroups[group.label]" class="group-vars">
              <div
                v-for="v in group.vars"
                :key="v.name"
                :class="['var-row', { changed: isChanged(v) }]"
              >
                <div class="var-label-row">
                  <label class="var-label" :for="'input-' + v.name">
                    <code
                      class="var-name-label"
                      v-html="highlightMatch(v.name, searchQuery)"
                    ></code>
                  </label>
                  <div class="popover-container">
                    <button
                      type="button"
                      class="help-trigger"
                      :aria-expanded="activePopover === v.name"
                      @click.stop="togglePopover(v.name)"
                      title="Show details"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </button>
                    <div
                      v-if="activePopover === v.name"
                      class="help-popover"
                      @click.stop
                    >
                      <div class="popover-header">
                        <code class="var-name-popover">{{ v.name }}</code>
                        <button
                          type="button"
                          class="popover-close"
                          @click.stop="closePopover"
                        >
                          ✕
                        </button>
                      </div>
                      <div class="popover-content">
                        <p
                          class="popover-short-label"
                          v-html="highlightMatch(v.label, searchQuery)"
                        ></p>
                        <p
                          class="popover-desc"
                          v-html="highlightMatch(v.desc, searchQuery)"
                        ></p>
                        <div class="popover-default">
                          <span class="default-label">Default:</span>
                          <code class="default-value">{{ getDefault(v) }}</code>
                        </div>
                        <div class="popover-copy-css">
                          <button
                            type="button"
                            class="copy-css-btn"
                            @click.stop="
                              copyToClipboard(
                                `${v.name}: ${getDisplayValue(v)};`,
                                'cssRule',
                              )
                            "
                          >
                            <svg
                              viewBox="0 0 24 24"
                              width="12"
                              height="12"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <rect x="9" y="9" width="13" height="13" rx="2" />
                              <path
                                d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                              />
                            </svg>
                            {{
                              copiedFeedback === "cssRule"
                                ? "Copied CSS!"
                                : "Copy CSS Rule"
                            }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    v-if="isChanged(v)"
                    class="reset-var-btn"
                    @click="resetVar(v)"
                    title="Reset to default"
                  >
                    ✕
                  </button>
                </div>

                <div class="var-input-row">
                  <template v-if="v.type === 'color'">
                    <input
                      v-if="computedReady"
                      type="color"
                      class="color-picker"
                      :value="toHex(getDisplayValue(v))"
                      @input="setCurrentValue(v, $event.target.value)"
                    />
                    <input
                      type="text"
                      class="text-input color-text"
                      :id="'input-' + v.name"
                      :value="getDisplayValue(v)"
                      :placeholder="getDefault(v)"
                      @change="setCurrentValue(v, $event.target.value)"
                    />
                  </template>
                  <template v-else>
                    <input
                      type="text"
                      class="text-input"
                      :id="'input-' + v.name"
                      :value="getDisplayValue(v)"
                      :placeholder="getDefault(v)"
                      @change="setCurrentValue(v, $event.target.value)"
                    />
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Sidebar Toggle -->
      <button
        class="sidebar-toggle"
        @click="toggleSidebar"
        :title="sidebarCollapsed ? 'Show sidebar' : 'Hide sidebar'"
        :class="{ collapsed: sidebarCollapsed }"
      >
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline
            :points="sidebarCollapsed ? '9 18 15 12 9 6' : '15 18 9 12 15 6'"
          />
        </svg>
      </button>

      <!-- Preview -->
      <main class="builder-preview">
        <div class="preview-container">
          <ClientOnly>
            <iframe
              :key="previewTheme"
              ref="iframeRef"
              :srcdoc="iframeContent"
              class="preview-iframe"
              title="Palette Preview"
              sandbox="allow-scripts allow-same-origin"
              @load="onIframeLoad"
            ></iframe>
            <template #fallback>
              <div class="preview-iframe preview-iframe-fallback">
                <div class="preview-loading">Loading palette preview...</div>
              </div>
            </template>
          </ClientOnly>
        </div>
      </main>
    </div>

    <!-- Export Modal -->
    <div
      v-if="showExportModal"
      class="export-overlay"
      @click="closeExportModal"
    >
      <div class="export-modal" @click.stop>
        <div class="export-header">
          <h3 class="export-title">Export Your Palette</h3>
          <button class="export-close" @click="closeExportModal">✕</button>
        </div>
        <div class="export-content">
          <!-- Export Mode Toggle -->
          <div class="export-mode-toggle">
            <label
              class="export-mode-option"
              :class="{ active: exportMode === 'inline' }"
            >
              <input
                type="radio"
                v-model="exportMode"
                value="inline"
                class="export-mode-input"
              />
              <span class="export-mode-label">
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                Code Snippet
              </span>
            </label>
            <label
              class="export-mode-option"
              :class="{ active: exportMode === 'file' }"
            >
              <input
                type="radio"
                v-model="exportMode"
                value="file"
                class="export-mode-input"
              />
              <span class="export-mode-label">
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
                  />
                  <polyline points="13 2 13 9 20 9" />
                </svg>
                Download CSS file
              </span>
            </label>
          </div>

          <!-- External File Mode -->
          <div v-if="exportMode === 'file'">
            <p class="export-description">
              Download the <strong>semanticus.palette.custom.css</strong> to
              your <strong>stylesheets</strong> folder and include these lines
              in your HTML:
            </p>
            <div class="export-code-block">
              <pre><code class="language-html" v-html="highlightedExportSnippet"></code></pre>
              <button
                class="copy-snippet-btn"
                @click="copyToClipboard(exportSnippet, 'snippet')"
              >
                {{ copiedFeedback === "snippet" ? "Copied!" : "Copy" }}
              </button>
            </div>
          </div>

          <!-- Inline Mode -->
          <div v-else>
            <p class="export-description">
              Copy this snippet to use inline styles directly in your HTML:
            </p>
            <div class="export-code-block">
              <pre><code class="language-html" v-html="highlightedInlineSnippet"></code></pre>
              <button
                class="copy-snippet-btn"
                @click="copyToClipboard(inlineSnippet, 'inlineSnippet')"
              >
                {{ copiedFeedback === "inlineSnippet" ? "Copied!" : "Copy" }}
              </button>
            </div>
          </div>
        </div>
        <div class="export-footer">
          <button class="export-btn-secondary" @click="closeExportModal">
            Cancel
          </button>
          <button
            v-if="exportMode === 'file'"
            class="export-btn-primary"
            @click="downloadCSS"
          >
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download semanticus.palette.custom.css
          </button>
        </div>
      </div>
    </div>

    <!-- Hidden file input for import -->
    <input
      ref="fileInputRef"
      type="file"
      accept=".css"
      @change="handleFileImport"
      style="display: none"
    />
  </div>
</template>

<style scoped>
.palette-builder {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  background: var(--vp-c-bg);
}

/* ── Body Layout ── */
.builder-body {
  display: grid;
  grid-template-columns: minmax(280px, 30%) auto 1fr;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

/* ── Sidebar Toggle ── */
.sidebar-toggle {
  width: 20px;
  background: var(--vp-c-bg-soft);
  border: none;
  border-left: 1px solid var(--vp-c-divider);
  border-right: 1px solid var(--vp-c-divider);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-3);
  transition:
    background 0.15s,
    color 0.15s;
  flex-shrink: 0;
  padding: 0;
  position: relative;
  z-index: 10;
}

.sidebar-toggle:hover {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.sidebar-toggle.collapsed {
  border-left-color: var(--vp-c-divider);
}

/* ── Sidebar ── */
.builder-sidebar {
  overflow-y: auto;
  background: var(--vp-c-bg-soft);
  max-height: 100%;
}

.builder-sidebar.collapsed {
  overflow: hidden;
  visibility: hidden;
}

.search-box {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 0.75rem;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.search-icon {
  flex-shrink: 0;
  color: var(--vp-c-text-3);
}

.search-input {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  color: var(--vp-c-text-1);
  outline: none;
}

.search-input::placeholder {
  color: var(--vp-c-text-3);
}

/* ── Variable Groups ── */
.var-groups {
  padding: 0.25rem 0;
}

.var-group {
  border-bottom: 1px solid var(--vp-c-divider);
}

.group-header {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  width: 100%;
  padding: 0.625rem 0.75rem;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--vp-c-text-2);
  font-weight: 600;
}

.group-header:hover {
  color: var(--vp-c-text-1);
}

.chevron {
  transition: transform 0.15s;
  flex-shrink: 0;
}

.chevron.expanded {
  transform: rotate(90deg);
}

.group-label {
  flex: 1;
  text-align: left;
}

.group-count {
  font-size: 0.625rem;
  padding: 0.0625rem 0.375rem;
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-3);
}

/* ── Variable Rows ── */
.group-vars {
  padding: 0 0.5rem 0.5rem;
}

.var-row {
  padding: 0.5rem;
  border-radius: 6px;
  transition: background 0.15s;
  border: 1px solid transparent;
}

.var-row:hover,
.var-row.selected {
  background: var(--vp-c-bg);
  border-color: var(--vp-c-divider);
}

.var-row.changed {
  background: rgba(242, 112, 54, 0.04);
}

.var-label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25rem;
}

.var-label {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.popover-container {
  position: relative;
  display: inline-flex;
}

.help-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-3);
  border: 1px solid var(--vp-c-divider);
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;
  transition: all 0.15s;
}

.help-trigger:hover,
.help-trigger[aria-expanded="true"] {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.help-popover {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  width: 260px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  overflow: hidden;
}

.popover-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0.75rem;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.var-name-popover {
  font-family: ui-monospace, SFMono-Regular, monospace;
  font-size: 0.75rem;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
}

.popover-close {
  background: none;
  border: none;
  padding: 0.125rem 0.25rem;
  cursor: pointer;
  color: var(--vp-c-text-3);
  font-size: 0.75rem;
  line-height: 1;
  border-radius: 3px;
}

.popover-close:hover {
  color: var(--vp-c-danger-1, #e53e3e);
  background: var(--vp-c-danger-soft, rgba(229, 62, 62, 0.1));
}

.popover-content {
  padding: 0.75rem;
}

.popover-short-label {
  font-size: 0.8125rem;
  color: var(--vp-c-text-1);
  margin: 0 0 0.375rem 0;
  font-weight: 600;
}

.popover-desc {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  margin: 0 0 0.75rem 0;
  line-height: 1.5;
}

.popover-default {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.default-label {
  font-size: 0.6875rem;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.default-value {
  font-family: ui-monospace, SFMono-Regular, monospace;
  font-size: 0.75rem;
  color: var(--vp-c-brand-1);
  word-break: break-word;
}

.popover-copy-css {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--vp-c-divider);
}

.copy-css-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  background: var(--vp-c-brand-1);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.75rem;
  transition: all 0.15s;
}

.copy-css-btn:hover {
  background: var(--vp-c-brand-2);
}

.reset-var-btn {
  background: none;
  border: none;
  padding: 0.125rem 0.25rem;
  cursor: pointer;
  color: var(--vp-c-text-3);
  font-size: 0.75rem;
  line-height: 1;
  border-radius: 3px;
}

.reset-var-btn:hover {
  color: var(--vp-c-danger-1, #e53e3e);
  background: var(--vp-c-danger-soft, rgba(229, 62, 62, 0.1));
}

.var-input-row {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.color-picker {
  width: 32px;
  height: 28px;
  padding: 1px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  cursor: pointer;
  background: var(--vp-c-bg);
  flex-shrink: 0;
}

.color-picker::-webkit-color-swatch-wrapper {
  padding: 2px;
}

.color-picker::-webkit-color-swatch {
  border-radius: 2px;
  border: none;
}

.text-input {
  flex: 1;
  min-width: 0;
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.75rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
  outline: none;
  transition: border-color 0.15s;
}

.text-input:focus {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
}

.color-text {
  flex: 1;
}

/* ── Search Highlight ── */
:deep(.search-highlight) {
  background: var(--vp-c-warning-soft, rgba(255, 214, 165, 0.4));
  color: var(--vp-c-warning-1, #d97706);
  padding: 0 0.125rem;
  border-radius: 2px;
  font-weight: 600;
}

/* ── Var Name Label ── */
.var-name-label {
  font-family: ui-monospace, SFMono-Regular, monospace;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-mute);
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
}

/* ── Preview ── */
.builder-preview {
  background: var(--vp-c-bg);
  overflow: hidden;
}

.preview-container {
  width: 100%;
  height: 100%;
}

.preview-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

.preview-iframe-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-loading {
  color: var(--vp-c-text-3);
  font-size: 0.875rem;
}

/* ── Export Modal ── */
.export-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.export-modal {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  width: 100%;
  max-width: 560px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.export-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.export-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: var(--vp-c-text-1);
}

.export-close {
  background: none;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  color: var(--vp-c-text-3);
  font-size: 1rem;
  line-height: 1;
  border-radius: 4px;
}

.export-close:hover {
  color: var(--vp-c-danger-1, #e53e3e);
  background: var(--vp-c-danger-soft, rgba(229, 62, 62, 0.1));
}

.export-content {
  padding: 1.25rem;
  overflow-y: auto;
}

.export-description {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin: 0 0 1rem 0;
}

.export-code-block {
  position: relative;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.export-code-block pre {
  margin: 0;
  padding: 1rem;
  overflow-x: auto;
  font-size: 0.8125rem;
  line-height: 1.6;
}

.export-code-block code {
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
  color: var(--vp-c-text-1);
}

.copy-snippet-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.375rem 0.75rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  color: var(--vp-c-text-2);
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.15s;
}

.copy-snippet-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.export-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-top: 1px solid var(--vp-c-divider);
}

.export-btn-secondary {
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.15s;
}

.export-btn-secondary:hover {
  border-color: var(--vp-c-text-1);
  color: var(--vp-c-text-1);
}

.export-btn-primary {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  background: var(--vp-c-brand-1);
  color: #fff;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.15s;
}

.export-btn-primary:hover {
  background: var(--vp-c-brand-2);
}

/* Export Mode Toggle */
.export-mode-toggle {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  background: var(--vp-c-bg-soft);
  padding: 0.375rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.export-mode-option {
  flex: 1;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.15s ease;
}

.export-mode-option:hover {
  background: var(--vp-c-bg);
}

.export-mode-option.active {
  background: var(--vp-c-bg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.export-mode-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.export-mode-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  border-radius: 6px;
  transition: all 0.15s ease;
}

.export-mode-option.active .export-mode-label {
  color: var(--vp-c-brand-1);
}
</style>
