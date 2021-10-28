import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../middlewares/middleware";

export default abstract class BaseController {
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

  postAsync(
    path: string,
    ...handlers: ((
      req: Request,
      res: Response,
      next: NextFunction
    ) => Promise<void> | void)[]
  ) {
    this.router.post(path, handlers.map(asyncHandler));
  }

  putAsync(
    path: string,
    ...handlers: ((
      req: Request,
      res: Response,
      next: NextFunction
    ) => Promise<void> | void)[]
  ) {
    this.router.put(path, handlers.map(asyncHandler));
  }

  deleteAsync(
    path: string,
    ...handlers: ((
      req: Request,
      res: Response,
      next: NextFunction
    ) => Promise<void> | void)[]
  ) {
    this.router.delete(path, handlers.map(asyncHandler));
  }

  patchAsync(
    path: string,
    ...handlers: ((
      req: Request,
      res: Response,
      next: NextFunction
    ) => Promise<void> | void)[]
  ) {
    this.router.patch(path, handlers.map(asyncHandler));
  }
}
