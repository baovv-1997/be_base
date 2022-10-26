import { SwaggerMetadata } from "./metadata/SwaggerMetadata";

export class SwaggerCore {
  static swaggerMetadata: SwaggerMetadata = new SwaggerMetadata();

  static getSwaggerMetadata(): SwaggerMetadata {
    return this.swaggerMetadata;
  }
}
