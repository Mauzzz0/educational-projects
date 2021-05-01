import BaseController from "../core/BaseController"
import {Request, Response, NextFunction} from 'express'
import { TodoService } from "../services/TodoService";


export class TodoController extends BaseController{
    getPath(): string {
        return '/todo';
    }
    initRoutes(): void {
        this.getAsync('/get', this.getTodo);
    }

    async getTodo(req : Request, res: Response, next: NextFunction){
        const id = req.query.id as string;

        const result = await TodoService.getByIdOrAll(id);

        res.status(200).json(result);
    }
}

export default new TodoController();