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
  wikiSidebar: [
    {
      type: "doc",
      id: "Wiki/index",
      label: "はじめに",
    },
    {
      type: "category",
      label: "Basic",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "Wiki/Basic/introduction",
          label: "Docusaurusとは",
        },
        {
          type: "doc",
          id: "Wiki/Basic/guide",
          label: "Docusaurus基本設定",
        },
        {
          type: "doc",
          id: "Wiki/Basic/plugin",
          label: "Docusaurusプラグイン設定",
        },
      ],
    },
    {
      type: "category",
      label: "Advanced",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "Wiki/Advanced/googleDrive",
          label: "GoogleDriveファイルの埋め込み",
        },
        {
          type: "doc",
          id: "Wiki/Advanced/figma",
          label: "Figmaデザインの埋め込み",
        },
        {
          type: "doc",
          id: "Wiki/Advanced/lint",
          label: "Lint設定",
        },
        {
          type: "doc",
          id: "Wiki/Advanced/openapi",
          label: "OpenApiファイルの自動生成",
        },
      ],
    },
    {
      type: "category",
      label: "Tips",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "Wiki/Others/document",
          label: "Documentの書き方",
        },
        {
          type: "doc",
          id: "Wiki/Others/markdown",
          label: "Markdownの記述方法",
        },
      ],
    },
  ],
};

export default sidebar.wikiSidebar;
