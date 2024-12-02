import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebar: SidebarsConfig = {
  sampleSidebar: [
    {
      type: "doc",
      id: "Sample/index",
      label: "Showcase",
    },
    {
      type: "doc",
      id: "Sample/markdown",
      label: "Markdown",
    },
    {
      type: "category",
      label: "Mermaid",
      items: [
        {
          type: "doc",
          id: "Sample/Mermaid/flowChart",
          label: "フローチャート図",
        },
        {
          type: "doc",
          id: "Sample/Mermaid/erDiagram",
          label: "ER図",
        },
        {
          type: "doc",
          id: "Sample/Mermaid/gannt",
          label: "ガントチャート図",
        },
        {
          type: "doc",
          id: "Sample/Mermaid/sequenceDiagram",
          label: "シーケンス図",
        },
      ],
    },
    {
      type: "category",
      label: "GoogleDrive",
      items: [
        {
          type: "doc",
          id: "Sample/GoogleDrive/excel",
          label: "Excel",
        },
        {
          type: "doc",
          id: "Sample/GoogleDrive/powerpoint",
          label: "PowerPoint",
        },
        {
          type: "doc",
          id: "Sample/GoogleDrive/pdf",
          label: "PDF",
        },
      ],
    },
  ],
};

export default sidebar.sampleSidebar;
