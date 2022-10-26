// import { SwaggerParameterMetadata } from "./SwaggerParameterMetadata";
// import { SwaggerRequestBodyMetadata } from "./SwaggerRequestBodyMetadata";
// import { SwaggerResponseMetadata } from "./SwaggerResponseMetadata";
// import { SwaggerSecurityMetadata } from "./SwaggerSecurityMetadata";

export interface SwaggerPathMetadata {
  /**
   * Endpoint
   *
   * @example
   * - auth/login
   * - user/info/{id}
   */
  path?: string;

  /**
   * Summary
   */
  summary?: string;

  /**
   * Mô tả nội dung Endpoint
   */
  description?: string;

  /**
   * Bỏ qua, không render Endpoint này trên swagger
   */
  skip?: boolean;
}

// https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#pathItemObject
export interface SwaggerFullPathMetadata {
  target?: Object | string;

  funcName?: string;

  // path name
  path: string;

  // 'get' | 'post' | 'put' | 'delete' | 'options' | 'head' | 'patch' | 'trace'
  type: string;

  // summary
  summary?: string;

  // description
  description?: string;

  // dont create this path
  skip?: boolean;

  //=====================================================
  // parameters
  // parameters?: SwaggerParameterMetadata[];

  // // requestBody
  // requestBody?: SwaggerRequestBodyMetadata;

  // // responses
  // responses?: SwaggerResponseMetadata[];

  // security?: SwaggerSecurityMetadata[];
}
