import { SwaggerCore } from "../SwaggerCore";
import { SwaggerControllerMetadata } from "../metadata/SwaggerControllerMetadata";

export function SW_Controller(
  pathOrmetadata?: string | SwaggerControllerMetadata
): Function {
  return function (target: Function) {
    console.log("SW_Controller");
    let metadata: SwaggerControllerMetadata = {
      name: target.name,
    };

    if (typeof pathOrmetadata === "string") {
      metadata = {
        name: target.name,
        rootPath: `/${pathOrmetadata}`,
      };
    } else {
      metadata = !pathOrmetadata
        ? { name: target.name, paths: [] }
        : pathOrmetadata;
      metadata.rootPath = `/${metadata.rootPath}`;
    }

    const controller = SwaggerCore.getSwaggerMetadata().findController(
      target.name
    );

    if (!controller) {
      SwaggerCore.getSwaggerMetadata().controllers.push({
        target: target.name,
        name: metadata.name || target.name,
        rootPath: metadata.rootPath,
        description: metadata.description,
        skip: metadata.skip,
        paths: [],
      });
    } else {
      controller.name = metadata.name || target.name;
      controller.rootPath = metadata.rootPath;
      controller.description = metadata.description;
      controller.skip = metadata.skip;
    }
  };
}
