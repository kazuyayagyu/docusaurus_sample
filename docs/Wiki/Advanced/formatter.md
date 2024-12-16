# Linter、Formatter設定について

こちらのサイトで設定しているLinter、Formatter設定について解説します。

---

## Linter、Formatterの目的

- Linterは、ソースコードを解析して、潜在的なバグの検出や、規定されたルールに沿ってコードが書かれているかをチェックする静的解析ツールの1つです。
- Formatterは、コードのスタイルをチェックし、規定されたルールに基づいてコードを整形するツールです。

---

## 使用ツール

### 1. [Prettier](https://prettier.io/)

- コードの自動フォーマットを担当します。
- 主にJavaScript、TypeScript、CSS、HTMLなどの一般的なファイル形式を整形します。
- 下記コマンドからインストール後、`.prettierrc`ファイルを作成し、フォーマットルールを設定します。

```bash
npm install --save-dev prettier
```

### 2. [Remark](https://github.com/remarkjs/remark)

- Docusaurusでは、MarkdownおよびMDXの整形にはRemarkを使用することが推奨されています。
- GitHub Flavored Markdown (GFM)やFront Matterのサポートなど柔軟にLintルールを記載できます。
- 下記コマンドからインストール後、`.remarkrc.mjs`または`remark.config.mjs`ファイルを作成し、整形ルールやプラグインの設定を記載します。
- `remark-cli`はコマンドラインツールとして機能し、保存時の自動整形などに使用します。

```bash
npm install --save-dev remark remark-cli remark-formatter remark-gfm remark-mdx remark-preset-lint-consistant remark-preset-lint-recommended string-width
```

### 3. [ESLint](https://eslint.org/)

- JavaScriptおよびMDXファイルの静的解析を実施します。
- コードブロック内の記述もチェック可能です。
- 下記コマンドからインストール後、`eslint.config.mjs`ファイルを作成し、プロジェクトのルールを定義します。
- MDXファイルのLintを有効にするには`eslint-plugin-mdx`プラグインを正しく設定してください。

```bash
npm install --save-dev eslint eslint-plugin-mdx
```

---

## 設定ファイルの解説

### 1. VSCodeの設定(`.vscode/settings.json`)

- 公式ドキュメントは[こちら](https://code.visualstudio.com/docs/getstarted/settings)
- チーム全員が同じ開発設定にできるようにします。

#### settings.json

```json
{
  // ファイル保存時に自動でコードをフォーマット
  "editor.formatOnSave": true,
  // JSONスキーマの自動ダウンロードを有効にする
  "json.schemaDownload.enable": true,
  // エディタのタブサイズを2スペースに設定
  "editor.tabSize": 2,
  // ファイルの改行コードをLFに設定
  "files.eol": "\n",
  // HTMLファイルのデフォルトフォーマッターをPrettierに設定
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // CSSファイルのデフォルトフォーマッターをPrettierに設定
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // JavaScriptファイルのデフォルトフォーマッターをPrettierに設定
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // TypeScriptファイルのデフォルトフォーマッターをPrettierに設定
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // JavaScript ReactファイルのデフォルトフォーマッターをPrettierに設定
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // TypeScript ReactファイルのデフォルトフォーマッターをPrettierに設定
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // JSONファイルのデフォルトフォーマッターをPrettierに設定
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // MarkdownファイルのデフォルトフォーマッターをRemarkに設定
  "[markdown]": {
    "editor.defaultFormatter": "unifiedjs.vscode-remark"
  },
  // 保存時に特定のコマンドを実行する設定
  "runOnSave.commands": [
    {
      // .mdxファイルを対象とするコマンドを設定
      "match": "\\.mdx$",
      // Remarkを使ってファイルをフォーマット
      "command": "npm exec -- remark ${file} --output --ext .mdx --no-color",
      // 実行中のステータスメッセージ
      "runningStatusMessage": "🖫 Run on Save: Formatting in progress for ${fileBasename}",
      // 実行完了時のステータスメッセージ
      "finishStatusMessage": "🖫 Run on Save: Formatting completed for ${fileBasename}",
      // バックグラウンド処理
      "runIn": "backend"
    }
  ],
  // Markdown All in OneのタブのスペースサイズをVSCode設定を継承するよう設定
  "markdown.extension.list.indentationSize": "inherit",
  // 追加設定：markdownで参照しているファイルの位置を変更したときに、markdownの参照linkも更新する
  "markdown.updateLinksOnFileMove.enabled": "prompt",
  // 追加設定：markdownへ画像貼り付け時にドキュメントがあるフォルダ内にimagesフォルダを作成し、自動で画像を格納できるようにする
  "markdown.copyFiles.destination": {
    "**/*": "${documentDirName}/images/${documentBaseName}/"
  }
}
```

- ファイル保存時にフォーマットをするように設定する
- エディタのインデントのスペースを`2`に設定する
- 改行コードを`LF`に設定する
- HTML、CSS、JavaScript、TypeScript、JSX、TSX、jsonファイルのデフォルトフォーマッターをPrettierに設定
- Markdown、MDXのデフォルトフォーマッターをRemarkに設定

---

### 2. Prettier設定(`.prettierrc`、`.prettierignore`)

#### .prettierrc

```json
{
  // 1行あたりの文字数を100に制限
  "printWidth": 100,
  // 配列やオブジェクトの末尾にカンマを追加
  "trailingComma": "all",
  // タブサイズを2に変更
  "tabWidth": 2,
  // 文末にセミコロンを追加
  "semi": true,
  // 文字列リテラルをダブルクォートに統一
  "singleQuote": false,
  // 改行コードをLFに設定
  "endOfLine": "lf"
}

```

#### .prettierignore

```
*.md
*.mdx
open-api.yaml
package-lock.json
```

- Markdownファイル(`.md`、`.mdx`)はRemarkを使用するため、Prettierの対象外とする

---

### 3. Remark設定 (`.remark.mjs`、`.remarkignore`)

#### .remarkrc.mjs

```mjs
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkPresetLintConsistent from "remark-preset-lint-consistent";
import remarkPresetLintRecommended from "remark-preset-lint-recommended";
import stringWidth from "string-width";

const remarkConfig = {
  settings: {
    bullet: "-", // 箇条書きのデフォルトが"*"の為、"-"とする
    rule: "-", // 区切り線のデフォルトが"***"の為、"---"とする
  },
  plugins: [
    [
      remarkGfm, // remarkでGFM（GitHub Flavored Markdown）を扱えるようにする
      {
        // デフォルトだとテーブルのフォーマットが文字数基準で、日本語は1文字で英語2文字分の幅であり、フォーマットしてもテーブル列が大きくずれてしまう。
        // 文字数でなく、文字幅でフォーマットすることで、きれいにテーブルがフォーマットされるようアルゴリズムを改善
        // 参考：https://github.com/remarkjs/remark-gfm?tab=readme-ov-file#example-stringlength
        stringLength: stringWidth,
      },
    ],
    [
      remarkMdx, // remarkでMDXファイルを扱えるようにする
      {
        // mdx内のHTMLタグ要素幅を.prettierrcと同じ100文字に設定
        printWidth: 100,
      },
    ],
    remarkFrontmatter, // 本プラグインを付与しないと、markdownのfront matterがフォーマット時に破壊されてしまう
    remarkPresetLintConsistent, // remark推奨のlintセット
    remarkPresetLintRecommended, // remark推奨のlintセット
  ],
};

export default remarkConfig;

```

#### .remarkignore

```
autoGeneratedFile
```

- OpenapiDocで自動生成したMDXファイルは形式が大きく変わってしまうため、整形の対象としないようにする

---

### 4. ESLint設定 (`eslint.config.mjs`)

#### eslint.config.mjs

```mjs
import * as mdx from "eslint-plugin-mdx";

// https://github.com/mdx-js/eslint-mdx?tab=readme-ov-file#flat-config
export default [
  {
    ...mdx.flat,
    // optional, if you want to lint code blocks at the same
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
      // optional, if you want to disable language mapper, set it to `false`
      // if you want to override the default language mapper inside, you can provide your own
      languageMapper: {},
    }),
  },
  {
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules,
      // if you want to override some rules for code blocks
      "no-var": "error",
      "prefer-const": "error",
    },
  },
  {
    ignores: ["**/autoGeneratedFile/*"],
  },
];
```
