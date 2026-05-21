import "../src/index.css";

import type { Preview } from "@storybook/html-vite";

const preview: Preview = {
  tags: ["autodocs"],
  globalTypes: {
    theme: {
      description: "Color theme",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  decorators: [
    (storyFn, context) => {
      const theme = (context.globals.theme as string) || "light";
      document.documentElement.setAttribute("data-theme", theme);
      return storyFn();
    },
  ],
};

export default preview;
