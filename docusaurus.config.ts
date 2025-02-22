import { themes as prismThemes } from "prism-react-renderer";
import { insertDetailComponentApiMdGenerator } from "./insertDetailComponentApiMdGenerator";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as Redocusaurus from "redocusaurus";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// docusaurus.config.tsのドキュメントは下記を参照すること
// https://docusaurus.io/docs/api/docusaurus-config
const config: Config = {
  // ドキュメントタイトル（必須）
  title: "Docusaurus Sample Site",
  // デプロイ後のサイトURL（必須）
  url: "https://docusaurus_sample.github.io",
  // ホスト名の後につくpath（必須）
  baseUrl: "/",

  // Favicon
  favicon: "img/favicon.ico",
  // URLやリンクの末尾のスラッシュの末尾（デフォルトでundefined）
  trailingSlash: false,
  // 多言語対応
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },
  // サイトや特定のページがGoogle等の検索エンジンによってインデックスされないようにする（デフォルトでfalse）
  noIndex: true,
  // buildした際にリンク切れを検出した際の挙動（デフォルトでthrow）
  onBrokenLinks: "throw",
  // サイト内のアンカーリンクが壊れている際の挙動（デフォルトでwarn）
  onBrokenAnchors: "throw",
  // Markdownリンクが壊れている際の挙動（デフォルトでwarn）
  onBrokenMarkdownLinks: "throw",
  // 同じURLのページが存在する場合の挙動（デフォルトでwarn）
  onDuplicateRoutes: "throw",
  // タグ
  tagline: "Docusaurus makes it easy to maintain Open Source documentation websites.",
  // Githubのuserまたはorganization名。（Github Pageを使用してdeployする際に必須）
  organizationName: "kazuyayagyu",
  // Githubのリポジトリ名。（Github Pageを使用してdeployする際に必須）
  projectName: "docusaurus_sample",
  // デプロイするブランチ名。（Github Pageを使用してdeployする際に必須）
  deploymentBranch: "gh-pages",
  // サーバーのホスト名（Github Pageを使用してdeployする際に必須）
  githubHost: "github.com",
  // サーバーのポート番号（Github Pageを使用してdeployする際に必須）
  githubPort: "22",
  // タイトルタグの区切り文字（デフォルトで'/'）
  titleDelimiter: "/",
  // サイトが読み込めない場合バナーを表示するかどうか（デフォルトでtrue）
  baseUrlIssueBanner: true,

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: ["./src/css/custom.css"],
        },
        docs: {
          //サイドバーのパス
          sidebarPath: "./sidebars.ts",
          // ページの左下に「このページを編集」の遷移先URL
          editUrl: "https://github.com/kazuyayagyu/docusaurus_sample/edit/develop/",
          // ページ右下に最後に更新した人の名前を表示する
          showLastUpdateAuthor: true,
          // ページ右下に最後に更新された日時を表示する
          showLastUpdateTime: true,
          // docusaurus-theme-openapiの設定用
          docItemComponent: "@theme/ApiItem",
        },
        blog: false,
      },
    ],
    // Redocusaurusプラグイン設定
    // https://redocusaurus.vercel.app/docs/getting-started/Installation
    [
      "redocusaurus",
      {
        specs: [
          {
            // open-api.yamlファイルパス
            spec: "./docs/Sample/open-api.yaml",
            // 出力ディレクトリ
            route: "/api/",
          },
        ],
        theme: {
          primaryColor: "#0209E7",
        },
      },
    ] satisfies Redocusaurus.PresetEntry,
  ],

  // プラグイン
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          API: {
            // open-api.yamlファイルパス
            specPath: "docs/Sample/open-api.yaml",
            // 出力先
            outputDir: "docs/Sample/OpenAPI/autoGeneratedFile",
            // https://docusaurus-openapi.tryingpan.dev/#markdowngenerators
            markdownGenerators: {
              createApiPageMD: insertDetailComponentApiMdGenerator,
            },
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],

  // テーマ設定
  themes: ["@docusaurus/theme-mermaid", "docusaurus-theme-openapi-docs"],

  // markdown設定
  markdown: {
    // Markdownに適用するparserフォーマット（デフォルトでmdx）
    format: "mdx",
    // Mermaid設定（デフォルトでfalse）
    mermaid: true,
    // parse前にMarkdownコンテンツを文字列に変換する（デフォルトでundefined）
    preprocessor: undefined,
    // front matterの拡張（デフォルトでundefined）
    parseFrontMatter: undefined,
    // Docusaurus v3との互換性オプション（既にv3のため使用しない）
    // mdx1Compat: {
    //   comments: true,
    //   admonitions: true,
    //   headingIds: true
    // },
    // Markdownの見出しから生成されるアンカーの動作を制御するオプション
    anchors: {
      maintainCase: true,
    },
    // custonのremark-rehypeを使用する
    // remarkRehypeOptions: undefined
  },

  // ナビゲーションバーやフッター等のUIのカスタマイズ設定を行う
  // https://docusaurus.io/docs/api/themes/configuration
  themeConfig: {
    // カラーモードの設定
    colorMode: {
      // デフォルトのカラーモード（light or dark）
      defaultMode: "light",
      // ナビゲーションバーのカラースイッチ
      disableSwitch: false,
      // ユーザー設定
      respectPrefersColorScheme: false,
    },
    // Twitter Card等で表示するメタタグ画像
    image: "img/docusaurus-social-card.jpg",
    // HTMLメタデータ
    metadata: [{ name: "twitter:card", content: "summary" }],
    // ナビゲーションバーの上にアナウンスメントバーを表示する
    // announcementBar: {
    //   id: 'announcement-bar',
    //   content: 'announcement-text',
    //   backgroundColor: '#fff',
    //   textColor: '#000',
    //   isCloseable: true,
    // },

    // Docsのカスタマイズを行う
    docs: {
      // Docsのバージョンをブラウザ内で定義する（デフォルトでundefined）
      versionPersistence: undefined,
      sidebar: {
        // サイドバーを折り畳み可能にする（デフォルトでfalse）
        hideable: true,
        // サイドバーのカテゴリーを複数同時に展開できる（デフォルトでfalse）
        autoCollapseCategories: false,
      },
    },
    // Blogのカスタマイズを行う
    // blog: {
    //   sidebar: {
    //     // 年単位でサイドバーをグルーピングする
    //     groupByYear: true,
    //   }
    // },

    // ナビゲーションバーのカスタマイズを行う
    navbar: {
      // タイトル
      title: "Docusaurus",
      // ロゴ
      logo: {
        alt: "Site Logo",
        src: "img/logo.svg",
        srcDark: "img/logo.svg",
        href: "/",
        target: "_self",
        width: 32,
        height: 32,
        className: "custom-navbar-logo-class",
      },
      // アイテム
      items: [
        {
          type: "docSidebar",
          sidebarId: "sampleSidebar",
          position: "left",
          label: "ShowCase",
        },
        {
          type: "docSidebar",
          sidebarId: "WikiSidebar",
          position: "left",
          label: "Wiki",
        },
        {
          to: "/api",
          label: "APIs",
          position: "left",
        },
        // {
        //   to: '/blog',
        //   label: 'Blog',
        //   position: 'left'
        // },
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'left',
        //   dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
        //   dropdownActiveClassDisabled: true,
        // },
        {
          type: "dropdown",
          label: "Reference",
          position: "right",
          items: [
            {
              label: "Docusaurus公式",
              href: "https://docusaurus.io/",
              target: "_blank",
            },
            {
              label: "Mermaid公式",
              href: "https://mermaid.js.org/",
              target: "_blank",
            },
          ],
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        //   dropdownItemsAfter: [
        //     {
        //       to: 'https://my-site.com/help-us-translate',
        //       label: 'Help us translate',
        //     },
        //   ],
        // },
        {
          href: "https://github.com/kazuyayagyu/docusaurus_sample",
          label: "GitHub",
          position: "right",
          target: "_blank",
        },
        // {
        //   type: 'search',
        //   position: 'right',
        // },
      ],
      // ページ下までスクロールした際ナビゲーションバーを隠す（デフォルトでfalse）
      hideOnScroll: true,
      // ナビゲーションバーのスタイル（primary or dark）
      style: "dark",
    },

    // フッターのカスタマイズを行う
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Showcase",
              to: "/docs/Sample/",
            },
            {
              label: "Wiki",
              to: "/docs/Wiki",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    // highlight Code Blocks theme
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "javascript"],
    },

    // 目次設定を行う
    tableOfContents: {
      // 見出しレベルの最小値（デフォルトで2）
      minHeadingLevel: 2,
      // 見出しレベルの最大値（デフォルトで3）
      maxHeadingLevel: 3,
    },

    // Mermaidの共通デザイン設定
    mermaid: {
      options: {
        themeVariables: {
          labelBoxBorderColor: "#778899",
          noteBkgColor: "#f5f5f5",
          noteBorderColor: "#696969",
        },
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
