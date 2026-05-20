import type { StorybookConfig } from "@storybook/html-vite";

const config: StorybookConfig = {
  framework: "@storybook/html-vite",
  stories: [
    "../stories/overview.stories.ts",
    "../stories/**/*.stories.@(ts|js)"
  ],
  addons: ["@storybook/addon-docs"],
  docs: {
    defaultName: "Overview",
  },
};

export default config;
