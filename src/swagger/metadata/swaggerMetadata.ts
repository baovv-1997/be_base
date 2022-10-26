//import { SwaggerColumnMetadata } from "./SwaggerColumnMetadata";
import { SwaggerControllerMetadata } from "./SwaggerControllerMetadata";
// import { SwaggerEntityMetadata } from "./SwaggerEntityMetadata";
// import { SwaggerFullPathMetadata } from "./SwaggerPathMetadata";

export class SwaggerMetadata {
  //entities: SwaggerEntityMetadata[] = [];
  controllers: SwaggerControllerMetadata[] = [];

  //== entities ====================================================
  // public findEntity(targetName: string): SwaggerEntityMetadata {
  //   const len: number = this.entities.length;
  //   for (let i = 0; i < len; i++) {
  //     if (this.entities[i].target == targetName) return this.entities[i];
  //   }

  //   return null;
  // }

  // public findColumn(
  //   entity: SwaggerEntityMetadata,
  //   name: string
  // ): SwaggerColumnMetadata {
  //   const len: number = entity.columns.length;
  //   for (let i = 0; i < len; i++) {
  //     if (entity.columns[i].fieldName == name) return entity.columns[i];
  //   }

  //   return null;
  // }

  //== controllers ====================================================
  public findController(controllerName: string) {
    const len: number = this.controllers.length;
    for (let i = 0; i < len; i++) {
      if (this.controllers[i].target == controllerName)
        return this.controllers[i];
    }

    return null;
  }

  public findPath(controller: SwaggerControllerMetadata, funcName: string) {
    if (!controller?.paths) return null;

    const len: number = controller.paths.length;
    for (let i = 0; i < len; i++) {
      if (controller.paths[i].funcName == funcName) return controller.paths[i];
    }

    return null;
  }

  // public updatePath(controller: SwaggerControllerMetadata, funcName: string, newPath: SwaggerFullPathMetadata): void {
  //   const len: number = controller.paths.length;
  //   for (let i = 0; i < len; i++) {
  //     if (controller.paths[i].funcName == funcName) {
  //       controller.paths[i] = newPath;
  //       return;
  //     }
  //   }
  // }
}
