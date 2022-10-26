import { SwaggerFullPathMetadata } from "./SwaggerPathMetadata";

export interface SwaggerControllerMetadata {
  /* tên controller */
  target?: string;

  name?: string;

  rootPath?: string;

  // description
  description?: string;

  // dont create this controller
  skip?: boolean;

  paths?: SwaggerFullPathMetadata[];
}
