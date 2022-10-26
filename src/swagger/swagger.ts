import { type } from "os";
import { SwaggerFullPathMetadata } from "./metadata/SwaggerPathMetadata";
import { SwaggerCore } from "./SwaggerCore";

export declare type SWObjAny = {
  [key: string]: any;
};

export declare type SWObj<T> = {
  [key: string]: T;
};

export class Swagger {
  protected result: SWObjAny = {};
  protected swaggerMetadata = SwaggerCore.getSwaggerMetadata();

  public build() {
    this.init();
    this.renderPath();

    return this.result;
  }

  private init() {
    this.result = {
      openapi: "3.0.0",
      info: {
        title: "TITLE",
        description: ` API Docs`,
        version: "version",
      },
      tags: [
        // {
        //   path: "/api/auth",
        //   name: "auth",
        //   description: "Pets operations",
        // },
      ],
      paths: {
        // "/api/auth": {
        //   post: {
        //     summary: "auth",
        //     description:
        //       "Returns all pets from the system that the user has access to",
        //     responses: {
        //       "200": {
        //         description: "A list of pets.",
        //         content: {
        //           "application/json": {
        //             schema: {
        //               type: "array",
        //               items: {},
        //             },
        //           },
        //         },
        //       },
        //     },
        //     tags: ["auth"],
        //   },
        // },
      },
      components: {
        schemas: {
          //VldItem: this.renderValidateSchema(),
        },
      },
    };

    // const securitySchema: SWObjAny = this.renderSecuritySchema();
    // if (securitySchema)
    //   this.result["components"]["securitySchemes"] = securitySchema;
  }

  private renderPath(): void {
    console.log(
      "this.swaggerMetadata.controllers",
      this.swaggerMetadata.controllers
    );
    for (const controller of this.swaggerMetadata.controllers) {
      console.log("---", controller);
      try {
        this.result["tags"].push({ name: controller.name });

        controller.paths?.forEach((item: SwaggerFullPathMetadata) => {
          const newItem = {
            [item.path]: {
              [item.type]: {
                summary: item.summary,
                tags: [controller.target],
              },
            },
          };
          console.log("newItems--", newItem, controller.name);
          this.result["paths"] = newItem;
        });
      } catch (ex) {
        console.log("ex", ex);
      }
    }
  }

  // private renderSecuritySchema(): SWObjAny {
  //   const schemas: SwSecurity[] = this.declareSecuritySchemas();
  //   if (!schemas) return null;

  //   const securitySchema: SWObjAny = {};
  //   for (const schema of schemas) {
  //     const rolename: string = `ROLE_${schema.role}`;

  //     if (schema.type === "Bearer") {
  //       securitySchema[rolename] = {
  //         type: "http",
  //         scheme: "bearer",
  //         bearerFormat: "JWT",
  //         description: schema.description,
  //       };
  //     } else {
  //       securitySchema[rolename] = {
  //         type: "http",
  //         scheme: "basic",
  //         description: schema.description,
  //       };
  //     }
  //   }

  //   return securitySchema;
  // }
}

export class MySwagger extends Swagger {}
