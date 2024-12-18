# Markdownについて

---

### Markdownとは

Markdownは、文書を記述するための軽量マークアップ言語の1つです。
読みやすく書きやすい構文で、多くのツールやプラットフォームでサポートされています。

#### 主な活用シーン

- **ブログ記事**: 記事の作成と編集が容易
- **技術文書**: ソフトウェアのマニュアルや仕様書の作成
- **GitHubでのREADME**: プロジェクトの概要説明
- **コミュニケーション**: コードを含む説明文の記述に最適

:::tip

基本的なMarkdownの書き方は[こちら](https://commonmark.org/help/)を参考にしてください。

(10分でMarkdownが学べるチュートリアルもついています)

:::

---

### DocusaurusにおけるMarkdownの拡張機能

#### MDXについて

Docusaurusでは[MDX](https://mdxjs.com/)も対応しています。\
MDXとは、MarkdownにJSXを組み込むことで、Reactコンポーネントを利用可能にする拡張機能です。

これにより、以下のようなカスタマイズが可能になります：

- ボタンやカードなどのReactコンポーネントを埋め込む
- 動的な要素をMarkdown内で実現する

TODO:: 参考で分かるものを挿入

詳しくは[公式ドキュメント](https://docusaurus.io/docs/markdown-features/react)をご覧ください。

#### Front matterについて

Markdownファイルにメタデータを追加することができます。\
これを使用すると、以下のような効果が得られます：

- **ナビゲーション設定**: サイドバーや目次をカスタマイズ
- **SEO対策**: 検索エンジン向けの情報を設定
- **記事の整理**: IDやURL（スラッグ）の指定で効率的な管理

```
---
id: doc-markdown
title: Docs Markdown Features
hide_title: false
hide_table_of_contents: false
sidebar_label: Markdown
sidebar_position: 3
pagination_label: Markdown features
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: How do I find you when I cannot solve this problem
keywords:
  - docs
  - docusaurus
tags: [docusaurus]
image: https://i.imgur.com/mErPwqL.png
slug: /myDoc
last_update:
  date: 1/1/2000
  author: custom author name
---

# Markdown Features

My Document Markdown content
```

詳しいフィールドの説明は[こちら](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter)をご覧ください。

---

MarkdownやMDXを活用すれば、柔軟でカスタマイズ可能なドキュメントを作成することができます。\
まずは基本的なMarkdownから始め、慣れてきたらFront matterやMDXも試してみてください。
