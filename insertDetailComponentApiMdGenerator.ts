import { createAuthorization } from "docusaurus-plugin-openapi-docs/lib/markdown/createAuthorization";
import { createCallbacks } from "docusaurus-plugin-openapi-docs/lib/markdown/createCallbacks";
import { createDeprecationNotice } from "docusaurus-plugin-openapi-docs/lib/markdown/createDeprecationNotice";
import { createHeading } from "docusaurus-plugin-openapi-docs/lib/markdown/createHeading";
import { createMethodEndpoint } from "docusaurus-plugin-openapi-docs/lib/markdown/createMethodEndpoint";
import { createParamsDetails } from "docusaurus-plugin-openapi-docs/lib/markdown/createParamsDetails";
import { createRequestBodyDetails } from "docusaurus-plugin-openapi-docs/lib/markdown/createRequestBodyDetails";
import { createRequestHeader } from "docusaurus-plugin-openapi-docs/lib/markdown/createRequestHeader";
import { createStatusCodes } from "docusaurus-plugin-openapi-docs/lib/markdown/createStatusCodes";
import { createVendorExtensions } from "docusaurus-plugin-openapi-docs/lib/markdown/createVendorExtensions";
import { render } from "docusaurus-plugin-openapi-docs/lib/markdown/utils";
import { ApiPageMetadata } from "docusaurus-plugin-openapi-docs/src/types";

/**
 * 出力されたAPIドキュメントに/docs/Backend/detailsに記載された詳細設計を挿入するための関数
 * <Detail />とimport文のみを挿入し、他は下記のデフォルト通り
 * https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/issues/879#issuecomment-2341812775
 */

export function insertDetailComponentApiMdGenerator({
  title,
  api: {
    deprecated,
    "x-deprecated-description": deprecatedDescription,
    method,
    path,
    extensions,
    parameters,
    requestBody,
    responses,
    callbacks,
  },
  infoPath,
  frontMatter,
}: ApiPageMetadata) {
  return render([
    `import ApiTabs from "@theme/ApiTabs";\n`,
    `import DiscriminatorTabs from "@theme/DiscriminatorTabs";\n`,
    `import MethodEndpoint from "@theme/ApiExplorer/MethodEndpoint";\n`,
    `import SecuritySchemes from "@theme/ApiExplorer/SecuritySchemes";\n`,
    `import MimeTabs from "@theme/MimeTabs";\n`,
    `import ParamsItem from "@theme/ParamsItem";\n`,
    `import ResponseSamples from "@theme/ResponseSamples";\n`,
    `import SchemaItem from "@theme/SchemaItem";\n`,
    `import SchemaTabs from "@theme/SchemaTabs";\n`,
    `import Heading from "@theme/Heading";\n`,
    `import OperationTabs from "@theme/OperationTabs";\n`,
    `import TabItem from "@theme/TabItem";\n`,
    `import Detail from "/docs/Backend/details/${path.replace("/api/v1/", "")}.mdx";\n\n`, // /docs/Backend/detailsの各APIファイルをインポート
    createHeading(title),
    createMethodEndpoint(method, path),
    `<Detail />\n\n`, //コンポーネントを配置
    infoPath && createAuthorization(infoPath),
    frontMatter.show_extensions ? createVendorExtensions(extensions) : undefined,
    createDeprecationNotice({ deprecated, description: deprecatedDescription }),
    requestBody || parameters ? createRequestHeader("Request") : undefined,
    createParamsDetails({ parameters, type: "path" }),
    createParamsDetails({ parameters, type: "query" }),
    createParamsDetails({ parameters, type: "header" }),
    createParamsDetails({ parameters, type: "cookie" }),
    createRequestBodyDetails({
      title: "Body",
      body: requestBody,
    }),
    createStatusCodes({ responses }),
    createCallbacks({ callbacks }),
  ]);
}
