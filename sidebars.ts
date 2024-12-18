import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  WikiSidebar: [require("./docs/Wiki/sidebar.ts")],
  sampleSidebar: [require("./docs/Sample/sidebar.ts")],
};

export default sidebars;
