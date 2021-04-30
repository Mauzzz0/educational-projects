import BaseController from "./BaseController";
import { Request, Response, NextFunction } from "express";
import { TodoService } from "../services/TodoService";
var httpContext = require('express-http-context');

export class ApiController extends BaseController{
    getPath(): string {
        return '/api';
    }

    initRoutes() {
        this.getAsync('/todos', this.getTodo)
    }

    async getTodo(req: Request, res: Response, next: NextFunction) {
        const id = httpContext.get('id');
        // TODO: Берёт ли хттпконтекст.гет поля из реквеста?

        const result = await TodoService.getById(id)

        res.status(200).json(result);
    }
}