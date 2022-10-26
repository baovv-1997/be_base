// import "reflect-metadata";
// import { SwaggerCore } from "../swaggerCore";
// import { SwaggerControllerMetadata } from "../metadata/SwaggerControllerMetadata";
// import {
//   SwaggerFullPathMetadata,
//   SwaggerPathMetadata,
// } from "../metadata/SwaggerPathMetadata";

import { SwaggerCore } from "../SwaggerCore";
import { SwaggerControllerMetadata } from "../metadata/SwaggerControllerMetadata";
import {
  SwaggerFullPathMetadata,
  SwaggerPathMetadata,
} from "../metadata/SwaggerPathMetadata";

export function SW_Post(metadata?: SwaggerPathMetadata): Function {
  return function (target: Object, funcName: string) {
    console.log("SW_Post");
    if (!metadata) metadata = {};

    const controllerName: string = target.constructor.name; // class name

    let controller =
      SwaggerCore.getSwaggerMetadata().findController(controllerName);
    let hasEntity: boolean = true;

    if (!controller) {
      //chưa có controller này
      controller = {
        target: controllerName,
        paths: [],
      };
      hasEntity = false;
    }

    const path = SwaggerCore.getSwaggerMetadata().findPath(
      controller,
      funcName
    );

    if (!path) {
      const newPath: SwaggerFullPathMetadata = {
        target: target,
        funcName: funcName,
        path: metadata.path || "",
        type: "post",
        summary: metadata.summary,
        description: metadata.description,
        skip: metadata.skip,
        //parameters: [],
        //responses: [],
        //security: [],
      };
      controller.paths?.push(newPath);

      if (hasEntity === false) {
        SwaggerCore.getSwaggerMetadata().controllers.push(controller);
      }
    } else {
      path.target = target;
      path.funcName = funcName;
      path.path = metadata.path || "";
      path.type = "post";
      path.summary = metadata.summary;
      path.description = metadata.description;
      path.skip = metadata.skip;
      //if (path.parameters === undefined) path.parameters = [];
      //if (path.responses === undefined) path.responses = [];
      //if (path.security === undefined) path.security = [];

      //SwaggerCore.getSwaggerMetadata().updatePath(controller, funcName, path);
    }
  };
}
