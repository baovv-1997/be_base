import { SwaggerCore } from "../SwaggerCore";
import { SwaggerRequestBodyMetadata } from "../metadata/SwaggerRequestBodyMetadata";

export function SW_RequestBody(metadata: SwaggerRequestBodyMetadata) {
  return function (target: Object, funcName: string) {
    const controllerName = target.constructor.name;
    let controller =
      SwaggerCore.getSwaggerMetadata().findController(controllerName);
  };
}
