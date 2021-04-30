import {NextFunction} from "express";
const mdlwr = require('../middlewares/middleware')
const { asyncHandler } = mdlwr
//import {asyncHandler} from "../middlewares/middleware"
// TODO: Правильный ли импорт?
const express = require('express');
const Router = express.Router();
// TODO: Здесь точно express.Router()???????

export default abstract class BaseController{
    public path: string;
    public router = Router();

    constructor() {
        this.path = this.getPath();

        this.initRoutes();
    }

    protected abstract getPath(): string;

    protected abstract initRoutes(): void;

    getAsync(
        path: string,
        handlers: ((
            req: Request,
            res: Response,
            next: NextFunction
        ) => Promise<void> | void)[]
    ) {
        this.router.get(path, handlers.map(asyncHandler))
    }

    postAsync(
        path: string,
        handlers: ((
            req: Request,
            res: Response,
            next: NextFunction
        ) => Promise<void> | void)[]
    ) {
        this.router.post(path, handlers.map(asyncHandler))
    }

    putAsync(
        path: string,
        handlers: ((
            req: Request,
            res: Response,
            next: NextFunction
        ) => Promise<void> | void)[]
    ) {
        this.router.put(path, handlers.map(asyncHandler))
    }

    deleteAsync(
        path: string,
        handlers: ((
            req: Request,
            res: Response,
            next: NextFunction
        ) => Promise<void> | void)[]
    ) {
        this.router.delete(path, handlers.map(asyncHandler))
    }
}