import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// docusaurus.config.tsのドキュメントは下記を参照すること
// https://docusaurus.io/docs/api/docusaurus-config
const config: Config = {
  // ドキュメントタイトル（必須）
  title: 'Docusaurus Sample Site',
  // デプロイ後のサイトURL（必須）
  url: 'https://your-docusaurus-site.example.com',
  // ホスト名の後につくpath（必須）
  baseUrl: '/',

  // Favicon
  favicon: 'img/favicon.ico',
  // URLやリンクの末尾のスラッシュの末尾（デフォルトでundefined）
  trailingSlash: undefined,
  // 多言語対応
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },
  // サイトや特定のページがGoogle等の検索エンジンによってインデックスされないようにする（デフォルトでfalse）
  noIndex: true,
  // buildした際にリンク切れを検出した際の挙動（デフォルトでthrow）
  onBrokenLinks: 'throw',
  // サイト内のアンカーリンクが壊れている際の挙動（デフォルトでwarn）
  onBrokenAnchors: 'throw',
  // Markdownリンクが壊れている際の挙動（デフォルトでwarn）
  onBrokenMarkdownLinks: 'throw',
  // 同じURLのページが存在する場合の挙動（デフォルトでwarn）
  onDuplicateRoutes: 'throw',
  // タグ
  tagline: 'Docusaurus makes it easy to maintain Open Source documentation websites.',
  // Githubのuserまたはorganization名。（Github Pageを使用してdeployする際に必須）
  organizationName: 'kazuyayagyu',
  // Githubのリポジトリ名。（Github Pageを使用してdeployする際に必須）
  projectName: 'docusaurus_sample',
  // デプロイするブランチ名。（Github Pageを使用してdeployする際に必須）
  deploymentBranch: 'production',
  // サーバーのホスト名（Github Pageを使用してdeployする際に必須）
  githubHost: 'github.com',
  // サーバーのポート番号（Github Pageを使用してdeployする際に必須）
  githubPort: '22',
  // タイトルタグの区切り文字（デフォルトで'/'）
  titleDelimiter: '/',
  // サイトが読み込めない場合バナーを表示するかどうか（デフォルトでtrue）
  baseUrlIssueBanner: true,
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // プラグイン
  plugins: [

  ],

  // テーマ設定
  themes: [],

  // markdown設定
  markdown: {
    // Markdownに適用するparserフォーマット（デフォルトでmdx）
    format: 'mdx',
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
      defaultMode: 'light',
      // ナビゲーションバーのカラースイッチ
      disableSwitch: false,
      // ユーザー設定
      respectPrefersColorScheme: false,
    },
    // Twitter Card等で表示するメタタグ画像
    image: 'img/docusaurus-social-card.jpg',
    // HTMLメタデータ
    metadata: [{name: 'twitter:card', content: 'summary'}],
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
      }
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
      title: 'Docusaurus',
      // ロゴ
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
        href: 'https://docusaurus.io/',
        target: '_self',
        width: 32,
        height: 32,
        className: 'custom-navbar-logo-class'
      },
      // アイテム
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
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
          type: 'dropdown',
          label: 'Dropdown',
          position: 'right',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com',
            }
          ]
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
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
          target: '_blank'
        },
        // {
        //   type: 'search',
        //   position: 'right',
        // },
      ],
      // ページ下までスクロールした際ナビゲーションバーを隠す（デフォルトでfalse）
      hideOnScroll: true,
      // ナビゲーションバーのスタイル（primary or dark）
      style: 'dark'
    },

    // フッターのカスタマイズを行う
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
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
    },
    // 目次設定を行う
    tableOfContents: {
      // 見出しレベルの最小値（デフォルトで2）
      minHeadingLevel: 2,
      // 見出しレベルの最大値（デフォルトで3）
      maxHeadingLevel: 3
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
