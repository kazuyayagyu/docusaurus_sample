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
