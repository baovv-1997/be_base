import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";
import { SW_RequestBody } from "../swagger/decorators/SwaggerRequestBody";
import { SW_Controller } from "../swagger/decorators/SwaggerController";
import { SW_Post } from "../swagger/decorators/SwaggerPost";
import { LoginReq } from "./dto/requests/auth.request.dto";

@Controller("api/auth")
@SW_Controller("auth")
export class AuthController {
  @Get()
  @SW_Post({ path: "api/auth" })
  @SW_RequestBody({
    description: "login",
    required: true,
    ref: LoginReq,
  })
  private getAuth(req: Request, res: Response) {
    return res.status(200).json({
      data: "ok",
    });
  }
}
