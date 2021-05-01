import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../middlewares/middleware";

export default abstract class BaseController{
    public path: string;
    public router = Router()
    
    constructor() {
        this.path = this.getPath();

        this.initRoutes();
    }

    abstract getPath(): string;

    abstract initRoutes(): void;

    getAsync(
        path: string,
        ...handlers: ((
          req: Request,
          res: Response,
          next: NextFunction
        ) => Promise<void> | void)[]
      ) {
        this.router.get(path, handlers.map(asyncHandler));
      }
}
