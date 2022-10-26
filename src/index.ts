import { Server } from "@overnightjs/core";
import { AuthController } from "./modules/auth.controller";
import swaggerUi from "swagger-ui-express";
import { MySwagger } from "./swagger/swagger";
import { Request, Response } from "express";

class AppServer extends Server {
  constructor() {
    super();

    this.setupController();
    this.initSwagger();
  }

  private setupController() {
    const authController = new AuthController();

    super.addControllers([authController]);
  }

  private initSwagger() {
    this.app.use(
      "/api-docs",
      swaggerUi.serve,
      async (req: Request, res: Response) => {
        const mySwagger = new MySwagger();

        return res.send(swaggerUi.generateHTML(mySwagger.build()));
      }
    );
  }

  public start(port: number) {
    this.app.listen(port, () => {
      console.log("app start on port", port);
    });
  }
}

const appServer = new AppServer();
appServer.start(3001);
